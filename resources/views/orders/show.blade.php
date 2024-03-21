<x-layout>
    <h1 class="font-bold text-black-50">Commande #{{$order->id}}</h1>
    <h2>Total : {{$order->total}} EUR</h2>
    <h3>Utilisateur</h3>
<p>     {{$order->user->name}}</p>
<p>     {{$order->user->email}}</p>
    <h3>Date</h3>
<p>     {{$order->created_at}}</p>


@if ($order->status == 'cart')
    <span class="bg-gray-100 text-gray-800  text-lg font-medium me-2 px-2.5 py-0.5 rounded-full ">{{$order->status}}</span>

@elseif ($order->status == 'complete')
    <span class="bg-yellow-100 text-yellow-800  text-lg font-medium me-2 px-2.5 py-0.5 rounded-full ">{{$order->status}}</span>

@elseif ($order->status == 'delivered')
    <span class="bg-green-100 text-green-800  text-lg font-medium me-2 px-2.5 py-0.5 rounded-full ">{{$order->status}}</span>

@elseif ($order->status == 'cancel')
    <span class="bg-red-100 text-red-800  text-lg font-medium me-2 px-2.5 py-0.5 rounded-full ">{{$order->status}}</span>

 @endif   
   
    @if($order->orderItems)
    <ul>
        
        @foreach($order->orderItems as $item)
        <li>
            {{$item->product->name . " Quantité : " . $item->quantity . " " . $item->price_ht . " EUR"}} 
        </li>
        @endforeach
    </ul>
    @endif
<div>

    <h3>Adresse</h3>
<p>     {{$order->number . " " . $order->street . " " . $order->city ." ". $order->zip_code}}</p>

@if($order->status === "complete")
<form method ="post" action="{{route("orders.delivered", $order)}}">
 @csrf
<button type="submit" class="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
Marquer la commande en "livrée"
</button>
</form>
@endif
@if($order->status === "complete")
<form method ="post" action="{{route("orders.cancel", $order)}}">
    @csrf
<button type="submit" class="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
Marquer la commande en "annulée"
</button>
</form>
@endif

</div>
    
</x-layout>