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

    public function createPaymentIntent(Request $request){
        try {
            //code...
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

            $paymentIntent = PaymentIntent::create([
                'amount'               => $request->input("amount"),
                'currency'             => 'eur',
                'payment_method_types' => ['card'],
                'description' => $request->input("description"),
                'customer' => $request->input('customer'),
                'receipt_email' => $request->input('receipt_email'),
                'metadata' => ['order_id' => $request->input('metadata')]

            ]);

            return response()->json($paymentIntent);

        } catch (QueryException $ex) {
            //throw $th;
            return response()->json([['response' => 'ERROR POST']], 500);
        }
    }
}
