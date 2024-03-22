<x-layout>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord (définir route quand tableau de bord sera complété)', 'url' => '/'],
            ['title' => 'Avis', 'url' => ''],
        ]"/>
<div class="px-6">
    <h1 class="text-4xl font-bold p-4">Derniers Avis</h1>
    <div class="relative">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 ">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Utilisateur
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Produit
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Note
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Commentaire
                </th>
                <th scope="col" class="font-title font-bold text-background py-3 pr-7 flex justify-end">
                    Voir
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($reviews as $review)
        
             <tr class="bg-white border-b text-slate-950">
                <th scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
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
                        <a href="{{route("review.show", $review)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                        </a>
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>

    {{ $reviews->links() }}
</div>
</div>

</x-layout>