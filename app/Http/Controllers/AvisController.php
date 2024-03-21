<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{

    public function index()
    {

        $Avis = Avis::all();
        return view('Avis.index', ["Avis" => $Avis]);
    }

    public function show(Avis $Avis)
    {
        return view('Avis.show', compact("Avis"));
    }
}
