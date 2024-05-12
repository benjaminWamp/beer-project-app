<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class DatabaseController extends Controller
{

    public function index()
    {
        return view("database.index");
    }
    public function exportDatabase()

    {
        $databaseName = env('DB_DATABASE');
        $userName = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $host = env('DB_HOST');
        $timestamp = date('Y-m-d-H-i-s');
        $fileName = "backup-$timestamp.sql";

        $storagePath = storage_path('app/database-backup/' . $fileName);

        $mysqldumpPath = env('DB_DUMP_SQL');
        $command = "\"{$mysqldumpPath}\" --user={$userName} --password={$password} --host={$host} {$databaseName} > {$storagePath} 2>&1";

        exec($command, $output, $exitCode);

        if ($exitCode !== 0) {
            return redirect()->back()->with('error', 'Une erreur est survenue veuillez réessayer');
        }
        return response()->download($storagePath);
    }

    public function importDatabase(Request $request)
    {
        if (!$request->hasFile('sqlfile')) {
            return redirect()->back()->with('error', 'Aucun fichier n\'a été fourni.');
        }

        $fileName = $request->file('sqlfile')->getClientOriginalName();
        $request->file('sqlfile')->move(storage_path('app/database-backup/'), $fileName);

        $databaseName = env('DB_DATABASE');
        $userName = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $host = env('DB_HOST');
        $mysqlpath = env("DB_MYSQL_PATH");
        $filePath = storage_path('app/database-backup/' . $fileName);


        $lines = file($filePath, FILE_IGNORE_NEW_LINES);


        if (strpos($lines[0], 'mysqldump:') === 0) {

            $lines[0] = '-- ' . $lines[0];
        }


        file_put_contents($filePath, implode("\n", $lines));


        $command = "\"{$mysqlpath}\" --user={$userName} --password={$password} --host={$host} {$databaseName} < \"{$filePath}\" 2>&1";

        $output = null;
        $exitCode = null;
        exec($command, $output, $exitCode);


        if ($exitCode !== 0) {

            return redirect()->back()->with('error', 'Failed to import database. Error: ' . implode("\n", $output));
        }

        return redirect()->back()->with('success', 'La base de données a été importée avec succès.');
    }
}
