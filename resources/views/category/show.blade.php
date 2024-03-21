<x-layout>
<a href="{{route("category.index")}}" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Retour</a>

<h1>{{$category->name}}</h1>
<p>{{$category->description}}</p>  
<p>Couleur de la catégorie</p>
<div style="background-color: {{$category->color}}" class="w-4 h-4 border-current rounded"></div>
<button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("category.edit", $category)}}">Modifier</a></button>
<form method="post" action="{{route('category.destroy', $category)}}">
    @method("DELETE")
    @csrf 
<button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer ce Producteur ?')">Supprimer</button>
</form>
</x-layout>