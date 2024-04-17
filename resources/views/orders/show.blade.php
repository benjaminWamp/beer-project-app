<x-layout>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord (définir route quand tableau de bord sera complété)', 'url' => '/'],
            ['title' => 'Commandes', 'url' => route('orders.index')],
            ['title' => $order->id, 'url' => ''],
        ]"/>

<div class="mt-2 px-6">

    <div class="flex mt-3">
        <a href="{{ URL::previous() }}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
        </a>
    </div>


    <div class="border-b border-accent flex justify-between">
        <h1 class="mt-4 mb-2 font-title text-4xl font-title font-semibold text-accent">
            Commande #{{$order->id}}
        </h1>
        <div class="pt-4">
            @if ($order->status == 'cart')
                <span class="bg-gray-100 text-gray-800 text-lg font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

            @elseif ($order->status == 'complete')
                <span class="bg-yellow-100 text-yellow-800 text-lg font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

            @elseif ($order->status == 'delivered')
                <span class="bg-green-100 text-green-800 text-lg font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

            @elseif ($order->status == 'cancel')
                <span class="bg-red-100 text-red-800 text-lg font-semibold me-2 px-2.5 py-0.5 rounded-full font-title">{{$order->status}}</span>

            @endif
        </div>
    </div>
    <div class="border-b border-accent flex gap-4 py-4">

        <div class="basis-2/5">
            <h2 class="mb-2 font-title text-xl leading-none font-semibold leading-6 text-accent">
                Infos Utilisateur :
            </h2>
            <div class="flex gap-4 mb-4">
                <div class="bg-accent rounded-md px-2 pb-4 pt-2">
                    <h3 class="mb-2 font-title text-l leading-none font-semibold leading-6 text-secondary">Nom :</h3>
                    <p class="bg-table border-b border-accent p-2 rounded-md inline">{{$order->user->name}}</p>
                </div>
                <div class=" bg-accent rounded-md px-2 pb-4 pt-2">
                    <h3 class="mb-2 font-title text-l leading-none font-semibold leading-6 text-secondary">E-mail :</h3>
                    <p class="bg-table border-b border-accent p-2 rounded-md inline">{{$order->user->email}}</p>
                </div>        
            </div>

            <h2 class="mt-4 font-title text-xl leading-none font-semibold leading-6 text-accent">
                Date : <span class="text-base">{{$order->created_at}}</span>
            </h2>
        </div>

        <div class="basis-3/5">
            @if($order->orderItems)
            <table class="w-full text-sm text-left rtl:text-right text-zinc-50">
                <thead class="text-xs text-zinc-50 uppercase bg-accent ">
                    <tr>
                        <th scope="col" class="font-title font-bold text-background px-6 py-3">
                            Produit
                        </th>
                        <th scope="col" class="text-end font-title font-bold text-background px-6 py-3">
                            Quantité
                        </th>
                        <th scope="col" class="text-end font-title font-bold text-background px-6 py-3">
                            Prix
                        </th>
                        <th scope="col" class="text-end font-title font-bold text-background px-6 py-3">
                            Sous-total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($order->orderItems as $item)
                
                    <tr class="bg-table border-b border-accent text-slate-950">
                        <th scope="row" class=" px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                            {{$item->product->name}}
                        </th>
                        <td class="text-end px-6 py-4">
                            {{$item->quantity}}
                        </td>
                        <td class="text-end px-6 py-4">
                            {{$item->price_ht}} €
                        </td>
                        <td class="text-end px-6 py-4">
                            {{$item->quantity * $item->price_ht}} €
                        </td>
                    </tr>
                    @endforeach

                </tbody>
                <tfoot class="text-xs text-zinc-50 uppercase bg-accent ">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th scope="row" class="text-end font-title font-bold text-background px-6 py-3">
                            Total : {{$order->total}} €
                        </th>
                    </tr>                    
                </tfoot>
            </table>
            @endif
        </div>        

    </div>
    <div class="flex justify-end gap-4 mt-4">  

        @if($order->status === "complete")
            <form method ="post" action="{{route("orders.delivered", $order)}}">
                @csrf
                <button type="submit" class="bg-green-100 px-3 py-2 text-sm font-medium text-center inline-flex items-center rounded-md hover:bg-green-200">
                    <svg class="w-4 h-4 text-green-800 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    <span class="text-green-800 font-bold">Marquer la commande en "livrée"</span>
                </button>
            </form>
            <form method ="post" action="{{route("orders.cancel", $order)}}">
                @csrf
                <button type="submit" class="bg-red-100 px-3 py-2 text-sm font-medium text-center inline-flex items-center rounded-md hover:bg-red-200">
                    <svg class="w-4 h-4 text-red-800 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                    <span class="text-red-800 font-bold">Marquer la commande en "annulée"</span>
                </button>
            </form>
        @endif
        
    </div>

</div>
    
</x-layout>