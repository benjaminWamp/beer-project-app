<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Monsieur Bière' }}</title>
    @vite( ['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-offWhite">

          <x-navbar/>

          <nav class="fixed top-0 z-50 w-full bg-secondary border-b border-gray-200 ">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                  <a href="#" class="flex gap-4 ms-2 md:me-24">
                    <img src="{{asset("storage\app\public\logos\MB_Logo.png")}}" alt="Logo Monsieur Bière" class="w-10">
                    <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap font-title">Monsieur Bière</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>

        <div class="mt-28 sm:ml-64 mb-8">
          {{$slot}}
        </div> 
      </div>

</body>
</html>