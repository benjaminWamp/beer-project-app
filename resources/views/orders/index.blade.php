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
                 <th scope="col" class="px-6 py-3">
                    Actions
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
                <td class="px-6 py-4">
                    <a href="{{route("orders.show", $order)}}">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
                    </svg>
                    </a>
                </td>
            </tr>
            @endforeach
           
        </tbody>
    </table>
</div>

</x-layout>