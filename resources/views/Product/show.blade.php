<x-layout>
<x-slot name="title">{{$product->name}}</x-slot>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
            ['title' => 'Producteurs', 'url' => route('product.index')],
            ['title' => $product->name, 'url' => ''],
        ]"/>


<div class="pt-4 px-6">
    <div class="flex mt-3 gap-2">
        <a href="{{route("product.index")}}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
        </a>
        <div class="flex">
            <a href="{{route("product.edit", $product)}}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
                <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                </svg>
            </a>
        </div>
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

<div class="mt-4 flex flex-row gap-16">
    <div> <h1 class="font-title text-4xl font-title font-semibold text-accent">{{$product->name}}</h1>
 <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Créé le {{$product->created_at->format("d/m/Y")}}</h2> 
        
          
        
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Image&nbsp;:</h2>
        
        <div class="mt-2 flex gap-4">
            @if($product->image)
                <img src="{{asset("storage/images/$product->image")}}" alt="Image {{$product->name}}" class="mt-2 w-64 h-64 object-contain"/>
            @endif
        </div></div>
    <div>
         <div>
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Prix unitaire&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->price_ht / 100}} €</p>
        </div>
    
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Description&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4 max-w-md">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->description}}</p>
        </div>
    </div>

    <div class="flex gap-6">
    <div>
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">En stock&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->stock}}</p>
        </div>
    </div>
    <div>
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Avis&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->reviews_sum}} / 5</p>
        </div>
    </div>
    <div>
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Catégorie&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->category->name}}</p>
        </div>
    </div>
    <div>
        <h2 class="mt-4 font-title text-m leading-none font-semibold leading-6 text-accent">Producteur&nbsp;:</h2> 
        <div class="flex align-center mt-2 gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$product->manufacturer->name}}</p>
        </div>
    </div>
</div>

    </div>
</div>
   
</div>

</x-layout>
