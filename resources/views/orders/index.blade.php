<x-layout>
<x-slot name="title">Commandes - Monsieur Bière</x-slot>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
            ['title' => 'Commandes', 'url' => ''],
        ]"/>


<div class="px-6">
    <h1 class="text-3xl font-bold mt-4 mb-2 font-title text-accent">Liste des Commandes</h1>

    {{ $orders->links() }}

    <div class="relative rounded-md overflow-hidden my-4">
        <table class="w-full text-sm text-left rtl:text-right text-zinc-50">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Numéro Commande
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Client
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Adresse
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Total
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Status
                </th>
                  <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Créée le
                </th>
                 <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Mise à jour le
                </th>
                 <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Voir
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($orders as $order)
        
             <tr class="bg-table border-b border-accent text-slate-950">
                <th scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                  <a href="{{route("orders.show", $order)}}">{{$order->id}}</a> 
                </th>
                 <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                  <p> {{$order->user->name}}</p>
                  <p> {{$order->user->email}}</p>
                </th>
                <td class="px-6 py-4">
                       {{$order->number . ", " . $order->street . " " . $order->city ." ". $order->zip_code}}
                </td>
                <td class="px-6 py-4">
                    {{$order->total}} €
                </td>
                <td class="px-6 py-4">
                    @if ($order->status == 'cart')
                        <span class="bg-gray-100 text-gray-800 font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

                    @elseif ($order->status == 'complete')
                        <span class="bg-yellow-100 text-yellow-800 font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

                    @elseif ($order->status == 'delivered')
                        <span class="bg-green-100 text-green-800 font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

                    @elseif ($order->status == 'cancel')
                        <span class="bg-red-100 text-red-800 font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

                    @endif
                </td>
                <td class="px-6 py-4">
                    {{$order->created_at}}
                </td>
                <td class="px-6 py-4">
                    {{$order->updated_at}}
                </td>
                <td class="flex justify-end px-6 py-4">
                        <a href="{{route("orders.show", $order)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                        </a>
                </td>
            </tr>
            @endforeach
           
        </tbody>
    </table>

    </div>

</div>


<div class="relative overflow-x-auto">
    

    {{ $orders->links() }}
</div>
</div>

</x-layout>