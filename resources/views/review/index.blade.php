<x-layout>
<h1 class="text-4xl font-bold p-4">Derniers Avis</h1>
<div class="relative">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 ">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Utilisateur
                </th>
                <th scope="col" class="px-6 py-3">
                    Produit
                </th>
                <th scope="col" class="px-6 py-3">
                    Note
                </th>
                <th scope="col" class="px-6 py-3">
                    Commentaire
                </th>
                <th scope="col" class="px-6 py-3"></th>
            </tr>
        </thead>
        <tbody>
            @foreach($reviews as $review)
        
             <tr class="bg-secondary border-b text-slate-950">
                <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                   {{$review->user->name}}
                </th>
                <td class="px-6 py-4">
                    {{$review->product->name}}
                </td>
                <td class="px-6 py-4">
                   {{$review->stars}} / 5
                </td>
                <td class="truncate px-6 py-4 max-w-14">
                   {{$review->message}}
                </td>
                <td class="flex justify-end px-6 py-4">
                        <a href="{{route("review.show", $review)}}" class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">Voir</a>
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>

    {{ $reviews->links() }}
</div>

</x-layout>