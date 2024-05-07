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
    public function index()
    {
        $currentMonth = now()->format('Y-m');
        $totalSold = Order::where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)
            ->sum('total');

        $countOrderInProgress = Order::where('status', 'exxeexee')->count();

        $countOrderDelivered = Order::where('status', 'exxeexee')
            ->where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)
            ->count();

        $lastFavoris = Favorite::selectRaw('COUNT(*) AS data, favorites.product_id')
            ->groupBy('product_id')
            ->orderByDesc('data')
            ->take(3)
            ->get();
        // je récupère la liste des 3 product_id les plus favoris avec le compte

        $listProductEmpty = Product::where("stock", "<", 31)->get();

        $lastReview = Review::where(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"), $currentMonth)->take(3)->get();

        return view('Dashboard.dashboard', ["totalSold" => $totalSold, "countOrderInProgress" => $countOrderInProgress, "countOrderDelivered" => $countOrderDelivered, "listProductEmpty" => $listProductEmpty, "lastReview" => $lastReview, "lastFavoris" => $lastFavoris]);
    }
}
