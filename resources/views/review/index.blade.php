<x-layout>
<x-slot name="title">Avis - Monsieur Bière</x-slot>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
            ['title' => 'Avis', 'url' => ''],
        ]"/>


<div class="px-6">
    <h1 class="text-3xl font-bold mt-4 mb-2 font-title text-accent">Derniers Avis</h1>
    {{ $reviews->links() }}
    <div class="relative rounded-md overflow-hidden my-4">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50">
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
        
             <tr class="bg-table border-b border-accent text-slate-950">
                <th scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                   {{$review->user->name}}
                </th>
                <td class="px-6 py-4">
                    {{$review->product->name}}
                </td>
                <td class="px-6 py-4">
                    <div class="flex">
                        @for($j = 1; $j < 6; $j++)
                            @if($j <= $review->stars)
                            <svg class="w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                            </svg>
                            @else 
                            <svg class="w-5 h-5 text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                            </svg>
                            @endif
                        @endfor
                    </div>
                   
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
    </div>

    {{ $reviews->links() }}

</div>

</x-layout>