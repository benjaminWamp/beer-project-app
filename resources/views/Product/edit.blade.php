<div class="container mx-auto mt-10">
    <form action="{{ route('product.update', $product) }}" method="post" enctype="multipart/form-data"> {{--enctype for enabled file post--}}
        @method('PUT')
        @csrf
        <div>
            <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Nom</label>
            @error("name")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <input type="text" name="name" id="name" value="{{$product->name}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div>
            <label for="description" class="block text-sm font-semibold leading-6 text-gray-900">Description</label>
                @error("description")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <textarea name="description" id="description" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">{{$product->description}}</textarea>
            </div>
        </div>
        <div>
            <label for="delivered_at" class="block text-sm font-semibold leading-6 text-gray-900">Date de livraison</label>
                @error("delivered_at")
            <div class="text-red-500">{{$message}}</div>    
            @enderror
            <div class="mt-2.5">
                <input type="date" name="delivered_at" id="delivered_at" value="{{$product->delivered_at->format("Y-m-d")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div>
            <label for="image" class="block text-sm font-semibold leading-6 text-gray-900">Image</label>
            @error("image")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">
                <img src="{{asset("storage/images/$product->image")}}" alt="couverture {{$product->name}}" class="w-40" />
                <input type="file" name="image" id="image" value="{{$product->image}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div>
            <label for="price_ht" class="block text-sm font-semibold leading-6 text-gray-900">Prix HT</label>
                @error("price_ht")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">    
                <input type="number" min="0" name="price_ht" id="price_ht" value="{{$product->price_ht}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div>
            <label for="stock" class="block text-sm font-semibold leading-6 text-gray-900">Stock</label>
                @error("stock")
            <div class="text-red-500">{{$message}}</div>
            @enderror
            <div class="mt-2.5">    
                <input type="number" min="0" name="stock" id="stock" value="{{$product->stock}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        
        {{-- <div>
            <label for="manufacturer_id" class="block text-sm font-semibold leading-6 text-gray-900">Editeur</label>
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
                
        </div> --}}

        <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Modifier
            </button>
        </div>
    </form>
</div>