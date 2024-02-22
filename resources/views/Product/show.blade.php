@foreach ($beers as $beer)
    <div class="p-2">
        <p>{{$beer->name}}</p>
        <p>{{$beer->price / 100}} €</p>
        <p>{{$beer->published_at->format("d/m/Y")}}</p>
        <!-- <button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("book.edit", $book)}}">Modifer</a></button>
        <form method="post" action="{{route('book.destroy', $book)}}">
            @method("DELETE")
            @csrf 
        <button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer cette book ?')">Supprimer</button>
        </form>
        <a href="{{route("book.pdf", $book)}}"  class="bg-indigo-800 p-2 rounded text-white">Télécharger</a> -->
    </div>
@endforeach
