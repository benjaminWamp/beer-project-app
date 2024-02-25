<x-layout>

    <div class="flex">
        <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
            <a href="{{route("manufacturer.index")}}">Retour</a>
        </button>
        <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all"><a href="{{route("manufacturer.edit", $manufacturer)}}">Modifier</a></button>
        <form method="post" action="{{route('manufacturer.destroy', $manufacturer)}}">
            @method("DELETE")
            @csrf 
            <button type="submit" class="font-title border border-accent bg-secondary text-accent rounded-md px-3 py-2 text-sm font-semibold hover:-translate-y-1 transition-all"  onsubmit="return confirm('Voulez vous vraiment supprimer ce Producteur ?')">Supprimer</button>
        </form>
    </div>

    <div class="mt-4 ">
        <h1 class="font-title text-4xl font-title font-semibold text-accent">{{$manufacturer->name}}</h1>
        <div class="flex align-center mt-4 gap-4">
            <h2 class="font-title text-3xl leading-none	font-semibold leading-6 text-accent">Adresse :</h2>
            <p class="bg-secondary border-2 border-primary border-dashed p-2 rounded-md">{{$manufacturer->adress}}</p> 
        </div>
        <div class="flex align-center mt-4 gap-4">
            <h2 class="font-title text-3xl leading-none	font-semibold leading-6 text-accent">Description :</h2> 
            <p class="bg-secondary border-2 border-primary border-dashed p-2 rounded-md">{{$manufacturer->description}}</p>
        </div>
    </div>

</x-layout>