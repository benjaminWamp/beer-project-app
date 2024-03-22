<x-layout>    
    <x-slot:title>
        Se connecter
    </x-slot:title>

    <div class="container mx-auto mt-10">
        <h1>Veuillez vous connecter</h1>
        <form method="post" action="{{route("login")}}">
            @csrf {{--Obligatoire ! Token pour être sur que la personne qui affiche le formulaire est celle qui a fait la demande--}}
            <div>
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Votre email</label>
                    @error("email")
                    <div class="text-red-500">{{$message}}</div>
                    @enderror
                      <div class="mt-2.5">
                <input type="email" name="email" id="email" value="{{old("email")}}"class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                 
                      </div>
                    </div>
             <div>
                <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Votre mot de passe</label>
                  
                     <div class="mt-2.5">
                <input type="password" name="password" id="password" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                     </div>
            </div>
            <div>
                <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Vous connecter</button>
            </div>
        </form>
    </div>
</x-layout>