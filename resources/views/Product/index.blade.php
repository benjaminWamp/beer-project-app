@foreach ($beer as $beer)
    <div class="p-2">
        <p>Nom : {{$beer->name}}</p>
        <p>Prix : {{$beer->price / 100}} €</p>
        <p>Ajouter le : {{$beer->published_at->format("d/m/Y")}}</p>
        <button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("Product.edit", $beer)}}">Modifer</a></button>
        <form method="post" action="{{route('Product.destroy', $beer)}}">
            @method("DELETE")
            @csrf 
        <button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer cette book ?')">Supprimer</button>
        </form>
    </div>
@endforeach
