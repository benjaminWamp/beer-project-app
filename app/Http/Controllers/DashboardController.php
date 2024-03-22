<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use App\Models\Review;
use App\Models\Favorite;
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

        $lastFavoris = DB::table('favorites')
        ->select(DB::raw('COUNT(*) AS data'), 'product_id')
        ->groupBy('product_id')
        ->orderByDesc('data')
        ->get();

        $listProductEmpty = Product::where("stock", "<", 10)->get();

        $lastReview = Review::where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)->take(3)->get();

        return view('Dashboard.dashboard', ["totalSold" => $totalSold, "countOrderInProgress" => $countOrderInProgress, "countOrderDelivered" => $countOrderDelivered, "listProductEmpty" => $listProductEmpty, "lastReview" => $lastReview]);
    }
}
