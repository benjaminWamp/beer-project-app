<x-layout>
    <div class="container mx-auto mt-10">
        <form action="{{ route('manufacturer.store') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div>
                <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Nom du Producteur</label>
                @error("name")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="name" id="name" value="{{old("name")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label for="adress" class="block text-sm font-semibold leading-6 text-gray-900">Adresse</label>
                @error("adress")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="adress" id="adress" value="{{old("adress")}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>               
            </div>
            <div>
                <label for="description" class="block text-sm font-semibold leading-6 text-gray-900">Description</label>
                @error("description")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <textarea name="description" id="description" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">{{old("description")}}</textarea>
                </div>
            </div>

            <div class="mt-10">
                <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Créer
                </button>
            </div>
        </form>
    </div>
</x-layout>