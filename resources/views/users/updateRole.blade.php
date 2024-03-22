<x-layout>
    <div class="mt-3 hover:-translate-y-1 transition-all inline-block">
        <a href="{{route("users.index")}}" class="font-title border bg-accent text-secondary rounded-md px-3 py-3 text-sm font-medium">Retour</a>
    </div>
    <div>
        <h3>
            {{$user->name}}
        </h3>
        <h4>
            {{$user->email}}
        </h4>
    </div>
    <div class="container mx-auto mt-4">
        <form action="{{ route('users.update', $user) }}" method="post" enctype="multipart/form-data">
            @method("PUT")
            @csrf
             <div class="mb-4">
                <label for="role" class="hidden font-title block text-m font-semibold leading-6 text-gray-900">Role</label>
                @error("role")
                <div class="text-red-500">{{$message}}</div>
                @enderror
                <div class="mt-2.5">
                   <select name="role" id="role"  class="block border w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="" class="text-gray-900">--Choissisez un role--</option>
                        <option {{$user->role === "customer" ? "selected" : ""}} value="customer" class="text-gray-900">Client</option>
                        <option {{$user->role === "admin" ? "selected" : ""}} value="admin" class="text-gray-900">Admin</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">Valider</button>
        </form>
    </div>
</x-layout>