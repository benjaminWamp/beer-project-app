<x-layout>

    <button class="font-title border bg-accent text-secondary rounded-md px-3 py-2 text-sm font-medium hover:-translate-y-1 transition-all">
        <a href="{{route("review.index")}}">Retour</a>
    </button>


    <div class="mt-4 ">
        <h1 class="font-title text-4xl font-title font-semibold text-accent">{{$review->user->name}}</h1>
        <div class="flex align-center mt-4 gap-4">
            <h2 class="font-title text-3xl leading-none	font-semibold leading-6 text-accent">Note&nbsp;:</h2>
            <p class="bg-secondary border-2 border-primary border-dashed p-2 rounded-md">{{$review->stars}} / 5</p> 
        </div>
        <div class="flex align-center mt-4 gap-4">
            <h2 class="font-title text-3xl leading-none	font-semibold leading-6 text-accent">Message&nbsp;:</h2> 
            <p class="bg-secondary border-2 border-primary border-dashed p-2 rounded-md">{{$review->message}}</p>
        </div>
    </div>

</x-layout>