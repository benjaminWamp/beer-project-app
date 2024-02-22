<h1>Catalogue de produit</h1>
<a href="{{route("Product.create")}}">Ajouter un produit</a>
@foreach ($product as $product)
    <div class="p-2">
        <p>Nom : {{$product->name}}</p>
        <p>Prix : {{$product->price / 100}} €</p>
        <p>Ajouter le : {{$product->published_at->format("d/m/Y")}}</p>
        <button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("Product.edit", $product)}}">Modifer</a></button>
        <form method="post" action="{{route('Product.destroy', $product)}}">
            @method("DELETE")
            @csrf 
        <button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer cette book ?')">Supprimer</button>
        </form>
    </div>
@endforeach
