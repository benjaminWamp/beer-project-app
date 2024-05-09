<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

use Stripe\Stripe;
use Stripe\PaymentIntent;


class StripePaymentController extends Controller
{
    //

    public function stripePaymentIntent(Request $request){
        try {
            //code...
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

            $paymentIntent = PaymentIntent::create([
                'amount'               => $request->input("amount"),
                'currency'             => 'eur',
                'payment_method_types' => ['card'],
            ]);

            return response()->json(['clientSecret' => $paymentIntent->client_secret]);

        } catch (QueryException $ex) {
            //throw $th;
            return response()->json([['response' => 'ERROR POST']], 500);
        }
    }
}
