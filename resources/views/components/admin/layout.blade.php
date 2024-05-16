<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Monsieur Bière' }}</title>
    <link rel="icon" type="image/x-icon" href="/images/mb-logo.png">
    @vite( ['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-offWhite">

          <x-navbar/>

          <nav class="fixed top-0 z-50 w-full bg-secondary border-b border-gray-200 ">
            <div class="px-3 py-4 lg:px-5 lg:pl-3">
              <div class="flex justify-between items-center">
                <div class="flex items-center justify-start rtl:justify-end">
                  <a href="/admin" class="flex gap-4 ms-2 md:me-24">
                    <img src="{{asset("images\mb-logo.png")}}" alt="Logo Monsieur Bière" class="w-20">
                    <span class="self-center text-accent text-4xl font-semibold whitespace-nowrap font-title">Monsieur Bière</span>
                  </a>
                </div>
                <div>
                  <p class="text-accent font-title font-bold text-l">Bonjour {{Auth::user()->name}}</p>
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