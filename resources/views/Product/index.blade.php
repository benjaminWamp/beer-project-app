<x-layout>

<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord (définir route quand tableau de bord sera complété)', 'url' => '/'],
            ['title' => 'Bières', 'url' => ''],
        ]"/>
<div class="px-6">
    <div class="flex flex-row gap-4">
        <h1 class="text-3xl font-bold mt-4 mb-2 font-title text-accent">Bières</h1>
        <a href="{{ URL::previous() }}" class="bg-accent rounded-3xl mt-3 mb-2 px-2 pt-2 text-sm font-medium hover:-translate-y-1 transition-all">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
        </a>        
    </div>
    
    {{ $product->links() }}

    <div class="relative">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 my-4">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Prix
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Date d'ajout
                </th>
                <th scope="col" class="flex justify-end font-title font-bold text-background px-6 py-3">
                    Modifier / Voir / Supprimer
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($product as $product)
        
             <tr class="bg-table border-b border-accent text-slate-950">
                <th scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                   {{$product->name}}
                </th>
                <td scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                    {{$product->price_ht / 100}} €
                </td>
                <td scope="row" class="px-6 py-4 font-sans font-bold text-slate-950 whitespace-nowrap ">
                    {{$product->created_at->format("d/m/Y")}}
                </td>
                <td class="flex flex-row justify-end px-6 py-4 gap-11">
                    <a href="{{route("product.edit", $product)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                        <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </a>
                    <a href="{{route("product.show", $product)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                        <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                    </a>
                    <form method="post" action="{{route('product.destroy', $product)}}">
                        @method("DELETE")
                        @csrf 
                        <button type="submit" class="border-2 border-accent bg-secondary rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                            <svg class="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                            </svg>
                        </button>
                    </form>                   
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>

    {{-- {{ $product->links() }} --}}
    
    </div>

</div>

</x-layout>
