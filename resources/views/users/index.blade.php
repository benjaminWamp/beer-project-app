<x-layout>

<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord (définir route quand tableau de bord sera complété)', 'url' => '/'],
            ['title' => 'Utilisateurs', 'url' => ''],
        ]"/>
<div class="px-6 mb-4">
    <div class="flex flex-row gap-4">
        <h1 class="text-3xl font-bold mt-4 mb-2 font-title text-accent">Liste des Utilisateurs</h1>
        <a href="{{route("users.create")}}" class="bg-accent rounded-3xl mt-3 mb-2 px-2 pt-2 text-sm font-medium hover:-translate-y-1 transition-all">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
        </a> 
    </div>

    {{ $users->links() }}

    <div class="relative">

    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 my-4">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Email
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Adresse
                </th>
                <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Rôle
                </th>
                  <th scope="col" class="font-title font-bold text-background px-6 py-3">
                    Nombre de commandes
                </th>
                <th scope="col" class="flex justify-end font-title font-bold text-background px-6 py-3">
                   Modifier
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
        
             <tr class="bg-table border-b border-accent text-slate-950">
                <th scope="row" class="px-6 py-4 font-bold text-slate-950 whitespace-nowrap ">
                   {{$user->name}}
                </th>
                <td class="px-6 py-4">
                    {{$user->email}}
                </td>
                <td class="px-6 py-4">
                   {{$user->number . " " . $user->street . " " . $user->city ." ". $user->zip_code}}
                </td>
                <td class="px-6 py-4">
                    {{$user->role}}
                </td>
                <td class="px-6 py-4">
                    {{$user->orders->count()}}
                </td>
                <td class="flex justify-end px-6 py-4">
                <a href="{{route("users.editRole", $user)}}" class="bg-accent rounded-3xl px-2 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
                    <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                    </svg>
                </a>
                </td>
            </tr>
            @endforeach
           
        </tbody>
    </table>

    {{ $users->links() }}

    </div>

</div>

</x-layout>