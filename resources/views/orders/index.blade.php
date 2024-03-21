<x-layout>
<h1 class="text-4xl font-bold p-4">Liste des commandes</h1>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 ">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Numero Commande
                </th>
                <th scope="col" class="px-6 py-3">
                    Client
                </th>
                <th scope="col" class="px-6 py-3">
                    Adresse
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                  <th scope="col" class="px-6 py-3">
                    Crée le
                </th>
                 <th scope="col" class="px-6 py-3">
                    Mise à jour le
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($orders as $order)
        
             <tr class="bg-secondary border-b text-slate-950">
                <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                  <a href="{{route("orders.show", $order)}}">{{$order->id}}</a> 
                </th>
                 <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                  <p> {{$order->user->name}}</p>
                  <p> {{$order->user->email}}</p>
                </th>
                <td class="px-6 py-4">
                       {{$order->number . " " . $order->street . " " . $order->city ." ". $order->zip_code}}
                </td>
                <td class="px-6 py-4">
                    {{$order->total}} EUR
                </td>
                <td class="px-6 py-4">
                   {{$order->status}}
                </td>
                <td class="px-6 py-4">
                    {{$order->created_at}}
                </td>
                <td class="px-6 py-4">
                    {{$order->updated_at}}
                </td>
            </tr>
            @endforeach
           
        </tbody>
    </table>
</div>

</x-layout>