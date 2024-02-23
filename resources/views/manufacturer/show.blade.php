<x-layout>
<a href="{{route("manufacturer.index")}}" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Retour</a>

<h1>{{$manufacturer->name}}</h1>
<p>{{$manufacturer->adress}}</p>        
<div class="p-2">
    <h2>Qui sont-ils ?</h2> 
    <p>{{$manufacturer->description}}</p>            
    <button class="bg-indigo-800 p-2 rounded text-white"><a href="{{route("manufacturer.edit", $manufacturer)}}">Modifier</a></button>
    <form method="post" action="{{route('manufacturer.destroy', $manufacturer)}}">
        @method("DELETE")
        @csrf 
    <button type="submit" class="bg-indigo-800 p-2 rounded text-white"  onsubmit="return confirm('Voulez vous vraiment supprimer ce Producteur ?')">Supprimer</button>
    </form>
</div>
</x-layout>