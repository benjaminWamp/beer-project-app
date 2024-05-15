<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="\images\mb-logo.png"/> 
        <title>Monsieur Bière</title>
  @viteReactRefresh
          @vite( ['resources/js/shop/main.tsx'])
    </head>
    <body class="antialiased">
          <div id="root"></div>

    </body>
</html>
