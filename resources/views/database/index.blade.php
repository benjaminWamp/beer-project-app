 <x-layout>
<x-slot name="title">Base de données - Monsieur Bière</x-slot>
 
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => route('index')],
            ['title' => 'Gestion Base de données', 'url' => ''],
        ]"/>

<div class="px-6">
    <div class="flex flex-row gap-4">
        <h1 class="text-3xl font-bold mt-4 mb-2 font-title text-accent">Gérer le base de données</h1>
    </div>
    <div class="grid grid-cols-2 mt-4 mb-8 gap-6">
        <div class="bg-table border-b border-accent p-6 rounded-md flex flex-col justify-between items-center gap-4 text-center">
         <h2 class="font-bold">Sauvegarder votre base de donnée au format SQL</h2>
      <form action="{{route('database.export')}}" method="GET" class="sm:col-span-1">
         @csrf
            <button type="submit" class="w-96 flex items-center font-title border bg-accent text-table rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
               </svg>
               <span class="font-bold">Exporter la BDD</span>
         </button>
      </form>
   </div>
 <div class="bg-table border-b border-accent p-6 rounded-md flex flex-col justify-between items-center gap-4 text-center">
         <h2 class="font-bold">Restorer votre base de donnée avec un fichier SQL</h2>
      <form action="{{route('database.import')}}" method="POST" enctype="multipart/form-data" class="flex flex-col items-center gap-4 sm:col-span-1">
               @csrf
               <input type="file" id ="sqlfile" name="sqlfile" accept=".sql">
               <button type="submit" class="w-96 flex items-center font-title border bg-accent text-table rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>

               <span class="font-bold">Importer la BDD</span>
         </button>
            </form>
 </div>

 @if(session('success'))
    <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
        {{ session('success') }}
    </div>
@endif

@if(session('error'))
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
        {{ session('error') }}
    </div>
@endif

       



         
            {{-- <div class="flex items-center w-12">
                <svg class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                </svg>
            </div>
        </div>
        <div class="bg-table border-b border-accent p-6 rounded-md flex justify-between">
            <div>
                <p class="font-bold">Importer la base de données</p>
               
            </div>
            <div class="flex items-center w-12">
                <svg class="bg-accent rounded-md px-3 py-3 text-sm w-12 h-12 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                </svg>
            </div>
        </div>
    </div>
</div>


 <li>
    
         </li>  
          <li>
            
            {{-- <a href={{route("database.import")}} class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-accent" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 2 22 20">
                  <path fill-rule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clip-rule="evenodd"/>
               </svg>
               <span class="flex-1 ms-3 text-white group-hover:text-accent font-title">Importer</span>
            </a> --}}
            {{--  </li>  --}}
         </x-layout>