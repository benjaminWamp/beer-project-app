<x-layout>

    <div class="flex flex-row gap-4">
        <h1 class="text-4xl	font-title font-semibold text-accent">Producteurs</h1>
        <a href="{{route("category.create")}}" class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">Ajouter un Producteur +</a>
    </div>

    <div class="flex flex-col gap-6 mt-8">
        @foreach ($categorys as $category)
        <div class="p-4 border-2 border-primary border-dashed rounded-lg hover:shadow-xl hover:shadow-accent/20 transition-all">
            <div class="group relative flex justify-between align-center">
                <a href="{{route("category.edit", $category)}}">
                    <h2 class="font-title text-3xl leading-none	font-semibold leading-6 text-accent">{{ $category->name }}</h2>
                </a>
                <div class="flex gap-4">
                    <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all"><a href="{{route("category.edit", $category)}}">Modifier</a></button>

                    <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all"><a href="{{ route('category.show', $category) }}">Voir</a></button>

                    <form method="post" action="{{route('category.destroy', $category)}}">
                        @method("DELETE")
                        @csrf 
                        <button type="submit" class="font-title border border-accent bg-secondary text-accent rounded-md px-3 py-2 text-sm font-semibold hover:-translate-y-1 transition-all"  onsubmit="return confirm('Voulez vous vraiment supprimer ce Porducteur ?')" class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium">Supprimer</button>
                    </form>
                </div>

            </div>
        </div>
        @endforeach

        {{ $categorys->links() }}

    </div>

</x-layout>