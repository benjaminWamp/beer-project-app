<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(){
        $currentMonth = now()->format('Y-m');
        $totalSold = Order::where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)
                  ->sum('total');

        $countOrderInProgress = Order::where('status', 'exxeexee')->count();

        $countOrderDelivered = Order::where('status', 'exxeexee')
        ->where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)
        ->count();

        dd($countOrderDelivered);
    }
}
