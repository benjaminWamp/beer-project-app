<x-layout>

    <div class="mt-3 hover:-translate-y-1 transition-all inline-block">
        <a href="{{route("manufacturer.index")}}" class="font-title border bg-accent text-secondary rounded-md px-3 py-3 text-sm font-medium">Retour</a>
    </div>    

    <div class="container mx-auto mt-4">
        <form action="{{ route('manufacturer.update',$manufacturer) }}" method="post" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="mt-4">
                <label for="name" class="font-title block text-m font-semibold leading-6 text-gray-900">Nom du Producteur</label>
                @error("name")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="name" id="name" value="{{$manufacturer->name}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="mt-4">
                <label for="adress" class="font-title block text-m font-semibold leading-6 text-gray-900">Adresse</label>
                @error("adress")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <input type="text" name="adress" id="adress" value="{{$manufacturer->adress}}" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>               
            </div>
            <div class="mt-4">
                <label for="description" class="font-title block text-m font-semibold leading-6 text-gray-900">Description</label>
                @error("description")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                    <textarea name="description" id="description" class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">{{$manufacturer->description}}"</textarea>
                </div>
            </div>

            <div class="mt-10">
                <button type="submit" class="block w-full font-title border bg-accent text-secondary rounded-md px-3 py-3 text-sm font-medium hover:-translate-y-1 transition-all">
                    Modifier
                </button>
            </div>
        </form>
    </div>
</x-layout>

