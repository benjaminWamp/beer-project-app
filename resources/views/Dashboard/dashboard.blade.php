<x-layout>
    <div class="grid grid-cols-3 mt-4 gap-4">
        <div class="rounded-md border-solid border-2 p-4 flex justify-between">
            <div>
                <p class="font-bold">{{$totalSold}}€</p>
                <p>Ce mois-ci</p>
            </div>
            <div class="flex items-center w-12">
                <svg class="bg-accent rounded-full p-1 w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                </svg>
            </div>
        </div>
        <div class="rounded-md border-solid border-2 p-4 flex justify-between">
            <div>
                <p class="font-bold">{{$countOrderInProgress}}</p>
                <p>Livraison en cours</p>
            </div>
            <div class="flex items-center w-12">
                <svg class="bg-accent rounded-full p-1 w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                </svg>

            </div>
        </div>
        <div class="rounded-md border-solid border-2 p-4 flex justify-between">
            <div>
                <p class="font-bold">{{$countOrderDelivered}}</p>
                <p>Livré ce mois</p>
            </div>
            <div class="flex items-center w-12">
                <svg class="bg-accent rounded-full p-1 w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z"/>
                </svg>

            </div>
        </div>
    </div>
    @if($lastReview && count($lastReview) > 0)
        <div class="mt-4">
            <p class="font-bold text-xl">Trois derniers avis</p>
            @foreach($lastReview as $data)
            <div class="border-solid border-2 rounded-md p-2 mb-4">
                <p>{{$data->user->name}} - {{$data->product->name}}</p>
                <div class="flex ">
                    @for($i = 1; $i < 6; $i++)
                        @if($i <= $data->stars)
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                        </svg>
                        @else 
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                        </svg>
                        @endif
                    @endfor
                </div>
                <p class="truncate max-w-auto">{{$data->message}}</p>
            </div>
            @endforeach
        </div>
    @endif
    <div>
        <p class="font-bold text-xl mb-2">Top 3 des produits favoris</p>
        <div class="flex flex-row items-end justify-around">
            @for ($i = 0; $i < count($lastFavoris); $i++)
                <div class="flex gap-4 rounded-md border-solid border-2 h-80 flex-col p-4 relative overflow-hidden justify-between">
                    <div class="absolute top-1 left-1 text-center w-6 h-6 rounded-full bg-accent text-secondary" >{{$i}}</div>
                    <div class="flex flex-col justify-center">
                        <p class="text-center mb-8">{{$lastFavoris[$i]->product->name}}</p>
                        <div class="flex gap-4 flex-col justify-between ">
                            <p>Favoris pour <span class="font-semibold">{{$lastFavoris[$i]->data}}</span> comptes</p>
                            <p>Producteur : {{$lastFavoris[$i]->product->manufacturer->name}}</p>
                            <p>Prix : {{$lastFavoris[$i]->product->price_ht / 100}}€</p>
                            <div class="flex ">
                                @for($j = 1; $j < 6; $j++)
                                    @if($j <= $lastFavoris[$i]->product->reviews_sum)
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                    </svg>
                                    @else 
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                    </svg>
                                    @endif
                                @endfor
                            </div>
                        </div>
                    </div>
                    <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all"><a href="{{ route('product.show', $lastFavoris[$i]->product->id) }}">Voir</a></button>
                </div>
            @endfor

        </div>

        {{--{{$lastFavoris}}
        @foreach($lastFavoris as $favori)
            <div>
                <p>Nombre de favoris : {{ $favori->data }}</p>
                <p>Produit : {{ $favori->product->name }}</p>
            </div>
        @endforeach--}}
    </div>
    @if($listProductEmpty && count($listProductEmpty) > 0)
        <div class="mt-4">
            <p class="font-bold text-xl mb-2">Produits bientôt sans stock</p>
            <table class="w-full text-sm text-left rtl:text-right text-zinc-50 ">
                <thead class="text-xs text-zinc-50 uppercase bg-accent ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Prix
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Producteur
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($listProductEmpty as $product)
                    <tr class="bg-secondary border-b text-slate-950">
                        <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                        {{$product->name}}
                        </th>
                        <td class="px-6 py-4">
                            {{$product->stock}}
                        </td>
                        <td class="px-6 py-4">
                        {{$product->price_ht}}
                        </td>
                        <td class="px-6 py-4">
                            {{$product->manufacturer->name}}
                        </td>
                        <td class="px-6 py-4">
                        <a href="{{route("product.show", $product)}}">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                        </td>
                    </tr>
                    @endforeach
                
                </tbody>
            </table>
        </div>
    @endif
</x-layout>
