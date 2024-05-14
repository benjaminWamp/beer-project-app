<x-layout>
<x-slot name="title">Ajouter une bière - Monsieur Bière</x-slot>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
            ['title' => 'Bières', 'url' => route('product.index')],
            ['title' => 'Ajouter', 'url' => ''],
        ]"/>

<div class="mt-2 px-6">

    <div class="flex mt-3">
        <a href="{{ URL::previous() }}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
        </a>
    </div>


<div class="mt-4">
    <form action="{{ route('product.store') }}" method="post" enctype="multipart/form-data"> {{--enctype for enabled file post--}}
        @csrf
        <div class="mb-4">
            <label for="name" class="font-title block text-m font-semibold leading-6 text-gray-900">Nom</label>
            @error("name")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <input type="text" name="name" id="name" value="{{old("name")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div class="mb-4">
            <label for="description" class="font-title block text-m font-semibold leading-6 text-gray-900">Description</label>
                @error("description")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <textarea name="description" id="description" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">{{old("resume")}}</textarea>
            </div>
        </div>
        <div class="mb-4">
            <label for="delivered_at" class="font-title block text-m font-semibold leading-6 text-gray-900">Date de livraison</label>
                @error("delivered_at")
            <div class="text-red-500">{{$message}}</div>    
            @enderror
            <div class="mt-2.5">
                <input type="date" name="delivered_at" id="delivered_at" value="{{old("delivered_at")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div class="mb-4">
            <label for="image" class="font-title block text-m font-semibold leading-6 text-gray-900">Image</label>
                @error("image")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <input type="file" name="image" id="image" value="{{old("image")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div class="mb-4">
            <label for="price_ht" class="font-title block text-m font-semibold leading-6 text-gray-900">Prix HT</label>
                @error("price_ht")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">    
                <input type="number" min="0" name="price_ht" id="price_ht" value="{{old("price_ht")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div class="mb-4">
            <label for="stock" class="font-title block text-m font-semibold leading-6 text-gray-900">Stock</label>
                @error("stock")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">    
                <input type="number" min="0" name="stock" id="stock" value="{{old("stock")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        
        <div>
            <label for="manufacturer_id" class="font-title block text-m font-semibold leading-6 text-gray-900">Producteur</label>
                @error("manufacturer_id")
            <div class="text-red-500">{{$message}}</div>
                @enderror
            <div class="mt-2.5">
                <select  name="manufacturer_id" id="manufacturer_id" placeholder="Selectionnez un éditeur" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            @foreach($manufacturers as $manufacturer)
                <option value="{{$manufacturer->id}}"@if("manufacturer_id"==$manufacturer->id)selected @endif>{{$manufacturer->name}}</option>
            @endforeach
                </select>
                </div>
                
        </div>

        <div class="mt-10">
            <button type="submit" class="block w-full font-title border bg-accent text-background rounded-3xl px-3 py-3 text-m font-bold hover:-translate-y-1 transition-all">
                Ajouter
            </button>
        </div>
 
    </form>
</div>
</div>
</x-layout>