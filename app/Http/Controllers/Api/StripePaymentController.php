<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Stripe;

class StripePaymentController extends Controller
{
    //

    public function stripePost(Request $request){
        try {
            //code...
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));

            $stripe->paymentIntents->create([
                'amount' => 1099,
                'currency' => 'eur',
                'automatic_payment_methods' => ['enabled' => true],
            ]);

            // $res = $stripe->tokens->create([
            //     'card' => [
            //         'number' => $request->number,
            //         'exp_month' => $request->exp_month,
            //         'exp_year' => $request->exp_year,
            //         'cvc' => $request->cvc,
            //     ],
            // ]);

            // $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
            Stripe\Stripe::setApiKey(env('STRIPE_API_KEY'));

            $response = $stripe->paymentIntents->create([
                'amount' => $request->amount,
                'currency' => 'eur',
                'source' => $res->id,
                'payment_method' => 'pm_card_visa',
                'description' => $request->description,
            ]);
        return response()->json([$response->status], 201);
        } catch (Exception $ex) {
            //throw $th;
            return response()->json([['response' => 'ERROR POST']], 500);
        }
    }
}
