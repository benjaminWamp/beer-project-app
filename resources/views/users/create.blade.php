<x-layout>
    <div class="mt-3 hover:-translate-y-1 transition-all inline-block">
        <a href="{{route("users.index")}}" class="font-title border bg-accent text-secondary rounded-md px-3 py-3 text-sm font-medium">Retour</a>
    </div>
    
    <div class="container mx-auto mt-4">
        <form action="{{ route('users.store') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="mb-4">
                <label for="name" class="font-title block text-m font-semibold leading-6 text-gray-900">Nom Prénom</label>
                @error("name")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="name" id="name" value="{{old("name")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
             <div class="mb-4">
                <label for="role" class="font-title block text-m font-semibold leading-6 text-gray-900">Role</label>
                @error("role")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                   <select name="role" id="role"  class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option selected value="" class="text-gray-900">--Choissisez un role--</option>
                        <option value="customer" class="text-gray-900">Client</option>
                        <option value="admin" class="text-gray-900">Admin</option>
                    </select>

                </div>
            </div>
            <div>
                <label for="email" class="font-title block text-m font-semibold leading-6 text-gray-900">Email</label>
                @error("email")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="email" name="email" id="email" value="{{old("email")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
             <div>
                <label for="password" class="font-title block text-m font-semibold leading-6 text-gray-900">Mot de passe</label>
                @error("password")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="password" name="password" id="password" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
             <div>
                <label for="password_confirmation" class="font-title block text-m font-semibold leading-6 text-gray-900">Mot de passe à confirmer</label>
                @error("password_confirmation")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="password" name="password_confirmation" id="password_confirmation" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
                <label for="number" class="font-title block text-m font-semibold leading-6 text-gray-900">Numéro</label>
                @error("number")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="number" name="number" id="number" value="{{old("number")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>               
            </div>
            <div>
                <label for="street" class="font-title block text-m font-semibold leading-6 text-gray-900">Rue</label>
                @error("street")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="street" id="street" value="{{old("street")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>               
            </div>
             <div>
                <label for="city" class="font-title block text-m font-semibold leading-6 text-gray-900">Ville</label>
                @error("city")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="city" id="city" value="{{old("city")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>               
            </div>
            <div>
                <label for="zip_code" class="font-title block text-m font-semibold leading-6 text-gray-900">Code Postal</label>
                @error("zip_code")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="zip_code" id="zip_code" value="{{old("zip_code")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>               
            </div>
            

            <div class="mt-10">
                <button type="submit" class="block w-full font-title border bg-accent text-secondary rounded-md px-3 py-3 text-sm font-medium hover:-translate-y-1 transition-all">
                    Créer
                </button>
            </div>
        </form>
    </div>
</x-layout>