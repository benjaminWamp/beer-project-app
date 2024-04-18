<x-layout>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord (définir route quand tableau de bord sera complété)', 'url' => '/'],
            ['title' => 'Producteurs', 'url' => route('product.index')],
            ['title' => $product->name, 'url' => ''],
        ]"/>


<div class="pt-4 px-6">
    <div class="flex mt-3 gap-2">
        <a href="{{ URL::previous() }}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
        </a>
        <form method="post" action="{{route('product.destroy', $product)}}">
            @method("DELETE")
            @csrf 
            <button type="submit" class="border-2 border-accent bg-secondary hover:-translate-y-1 transition-all font-title text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                <svg class="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
            </button>
        </form>
    </div>


    <div class="mt-4 flex flex-col gap-4">
        <h1 class="font-title text-4xl font-title font-semibold text-accent">{{$product->name}}</h1>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Image&nbsp;:</h2>
        <div class="mt-2 flex gap-4">
            @if($product->image)
                <img src="{{asset("storage/images/$product->image")}}" alt="Image {{$product->name}}" class="mt-2 max-w-screen-sm"/>
            @endif
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Prix unitaire&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->price_ht / 100}} €</p>
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Catégorie&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            @if($categories)
                @foreach($categories as $category)
                    <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$category}}</p>
                @endforeach
            @endif
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Description&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->description}}</p>
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Créé le&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->created_at->format("d/m/Y")}}</p>
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">En stock&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->stock}}</p>
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Note&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            @for($j = 1; $j < 6; $j++)
                @if($j <= $product->reviews_mean)
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

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Fournisseur&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->manufacturer->name}}</p>
            <div class="flex">
                <a href="{{route("product.edit", $product)}}" class="max-h-12 hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
            </div>
        </div>
        
    </div>
</div>

</x-layout>
