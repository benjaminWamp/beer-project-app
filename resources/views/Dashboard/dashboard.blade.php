<x-layout>
<x-slot name="title">Tableau de Bord - Monsieur Bière</x-slot>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
        ]"/>

<div class="mt-4 px-6">
    <h1 class="text-3xl font-bold mt-4 mb-6 font-title text-accent">Tableau de bord</h1>
    <h2 class="font-title font-bold text-xl mb-4">Statistiques</h2>
    <div class="grid grid-cols-3 mt-4 mb-8 gap-6">
        <div class="bg-table border-b border-accent p-6 rounded-md flex justify-between">
            <div>
                <p class="font-bold">{{$totalSold}}€</p>
                <p>Sur les 30 derniers jours</p>
            </div>
            <div class="flex items-center w-12">
                <svg class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                </svg>
            </div>
        </div>
        <div class="bg-table border-b border-accent p-6 rounded-md flex justify-between">
            <div>
                <p class="font-bold">{{$countOrderInProgress}}</p>
                <p>Commandes en cours</p>
            </div>
            <div class="flex items-center">
                <svg class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </div>
        </div>
        <div class="bg-table border-b border-accent p-6 rounded-md flex justify-between">
            <div>
                <p class="font-bold">{{$countOrderDelivered}}</p>
                <p>Livrées ce mois</p>
            </div>
            <div class="flex items-center">
                <svg class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/>
                </svg>
            </div>
        </div>
    </div>


    <h2 class="font-title font-bold text-xl">Top 3 des produits favoris</h2>
    <div>
        <div class="flex flex-row items-end justify-around grid grid-cols-3 mt-6 mb-8 gap-6">
            @for ($i = 0; $i < count($lastFavoris); $i++)
                <div class="bg-table border-b border-accent p-4 rounded-md flex gap-4 rounded-md flex-col p-4 relative justify-between">
                    <div class="absolute top-4 left-4 text-center w-6 h-6 rounded-md bg-accent text-table font-title" >{{$i+1}}</div>
                    <div class="flex flex-col justify-center">
                        <p class="font-title font-bold text-l mb-4 text-center mb-8">{{$lastFavoris[$i]->product->name}}</p>
                        <div class="flex gap-4 flex-col justify-between ">
                            <p>Favoris pour <span class="font-semibold">{{$lastFavoris[$i]->data}}</span> comptes</p>
                            <p>Producteur : {{$lastFavoris[$i]->product->manufacturer->name}}</p>
                            <p>Prix : {{$lastFavoris[$i]->product->price_ht / 100}}€</p>
                            <div class="flex ">
                                @for($j = 1; $j < 6; $j++)
                                    @if($j <= $lastFavoris[$i]->product->reviews_sum)
                                    <svg class="w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                    </svg>
                                    @else 
                                    <svg class="w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                    </svg>
                                    @endif
                                @endfor
                            </div>
                        </div>
                    </div>
                    <button class="font-title border bg-accent text-table rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all"><a href="{{ route('product.show', $lastFavoris[$i]->product->id) }}">Voir le produit</a></button>
                </div>
            @endfor
        </div>
    </div>


    <div class="grid grid-cols-3 mb-6 gap-6">
        <div>
            <h2 class="font-title font-bold text-xl mb-4">Trois derniers avis</h2>
            @foreach($lastReview as $data)
            <div class="bg-table border-b border-accent mt-4 p-4 mb-3 rounded-md">
                <div>
                    <p class="font-title font-bold text-l">{{$data->user->name}}</p>
                </div>
                <p>{{$data->product->name}}</p>
                <div class="flex">
                    @for($i = 1; $i < 6; $i++)
                        @if($i <= $data->stars)
                        <svg class="w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                        </svg>
                        @else 
                        <svg class=" w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                        </svg>
                        @endif
                    @endfor
                </div>
                <p class="truncate max-w-auto">{{$data->message}}</p>
            </div>
            @endforeach
        </div>

        <div class="col-span-2">
            <div class="flex gap-4">
                <p class="font-title font-bold text-xl mb-4">Produits bientôt sans stock</p>
                <div class="mt-1 text-center w-6 h-6 rounded-md bg-accent text-table font-title" >{{count($listProductEmpty)}}</div>
            </div>
            <div class="rounded-md overflow-hidden">
                <table class=" w-full text-sm text-left">
                <thead class="text-xs text-zinc-50 uppercase bg-accent rounded-md">
                    <tr>
                        <th scope="col" class="font-title font-bold text-background pl-6 pr-3 py-3">
                            Nom
                        </th>
                        <th scope="col" class="font-title font-bold text-background px-3 py-3">
                            Stock
                        </th>
                        <th scope="col" class="font-title font-bold text-background px-3 py-3">
                            Prix
                        </th>
                        <th scope="col" class="font-title font-bold text-background px-3 py-3">
                            Producteur
                        </th>
                        <th scope="col" class="text-end font-title font-bold text-background pr-6 pl-3">
                        Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if($listProductEmpty && count($listProductEmpty) > 0)
                    @foreach($listProductEmpty as $product)
                    <tr class="bg-table border-b border-accent text-slate-950">
                        <th scope="row" class="pl-6 pr-3 py-4 font-bold text-slate-950 whitespace-nowrap ">
                            {{$product->name}}
                        </th>
                        <td class="px-3 py-4">
                            {{$product->stock}}
                        </td>
                        <td class="px-3 py-4">
                            {{$product->price_ht / 100}}  €
                        </td>
                        <td class="px-3 py-4">
                            {{$product->manufacturer->name}}
                        </td>
                        <td class="pr-6 pl-3 py-4 flex justify-end">
                            <a href="{{route("product.show", $product)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                                <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </a>
                        </td>
                    </tr>
                    @endforeach
                    @else
                    <tr class="bg-secondary border-b text-slate-950">
                        <td>
                            Aucun
                        </td>
                    </tr>
                    @endif
                </tbody>
                </table>
            </div>
        </div>
    </div>


</div>
</x-layout>
