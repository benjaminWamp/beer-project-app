<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$title ?? "Pas de titre"}}</title>
    @vite( ['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-offWhite">
          <x-navbar/>
          <nav class="fixed top-0 z-50 w-full bg-secondary border-b border-gray-200 ">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
         </button>
        <a href="#" class="flex gap-4 ms-2 md:me-24">
          <img src="{{asset("storage\app\public\logos\MB_Logo.png")}}" alt="Logo Monsieur Bière" class="w-10">
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap font-title">Monsieur Bière</span>
        </a>
      </div>
    </div>
  </div>
</nav>
        </div> 
        <div class="mt-28 sm:ml-64 mb-8">
          {{$slot}}
        </div> 
      </div>

</body>
</html>