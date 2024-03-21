<x-layout>
<h1 class="text-4xl font-bold p-4">Liste utilisateurs</h1>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-zinc-50 ">
        <thead class="text-xs text-zinc-50 uppercase bg-accent ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Adresse
                </th>
                <th scope="col" class="px-6 py-3">
                    Rôle
                </th>
                  <th scope="col" class="px-6 py-3">
                    Nombre de commandes
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
        
             <tr class="bg-secondary border-b text-slate-950">
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
            </tr>
            @endforeach
           
        </tbody>
    </table>
</div>

</x-layout>