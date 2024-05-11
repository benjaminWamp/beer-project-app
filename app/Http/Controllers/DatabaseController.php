<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class DatabaseController extends Controller
{
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
            return response()->json(['error' => 'Failed to export database.', 'output' => $output], 500);
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

        // Lire le fichier en tant que tableau de lignes
        $lines = file($filePath, FILE_IGNORE_NEW_LINES);

        // Vérifier si la première ligne est un commentaire de mysqldump
        if (strpos($lines[0], 'mysqldump:') === 0) {
            // Remplacer la première ligne par un commentaire SQL valide
            $lines[0] = '-- ' . $lines[0];
        }

        // Écrire les lignes modifiées dans le fichier
        file_put_contents($filePath, implode("\n", $lines));

        // Ajoutez des guillemets autour du chemin du fichier
        $command = "\"{$mysqlpath}\" --user={$userName} --password={$password} --host={$host} {$databaseName} < \"{$filePath}\" 2>&1";

        $output = null;
        $exitCode = null;
        exec($command, $output, $exitCode);

        // Vérifiez si la commande a réussi
        if ($exitCode !== 0) {
            // Ajoutez le message d'erreur à la réponse pour faciliter le débogage
            return redirect()->back()->with('error', 'Failed to import database. Error: ' . implode("\n", $output));
        }

        return redirect()->back()->with('success', 'La base de données a été importée avec succès.');
    }
}
