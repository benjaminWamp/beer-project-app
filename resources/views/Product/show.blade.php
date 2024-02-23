<div class="p-2">
    <a href="{{route("product.index")}}" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Retour</a>
    <h1>{{$product->name}}</h1>
    @if($product->image)
    <img src="{{asset("storage/images/$product->image")}}" alt="Image {{$product->name}}" class="w-40" />
    @endif
    <h2>Prix unitaire : {{$product->price / 100}} €</h2>
    <p>Description : {{$product->description}}</p>
    <p>Créé le : {{$product->created_at->format("d/m/Y")}}</p>
    <p>En stock : {{$product->stock}}</p>
    <p>Avis : {{$product->reviews_sum}}</p>
    <p>Fournisseur :</p>
    <button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("product.edit", $product)}}">Modifer</a></button>
    <form method="post" action="{{route('product.destroy', $product)}}">
        @method("DELETE")
        @csrf 
    <button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer cette book ?')">Supprimer</button>
    </form>
</div>
