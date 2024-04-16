<x-layout>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => '/'],
            ['title' => 'Avis', 'url' => route('review.index')],
            ['title' => $review->user->name, 'url' => ''],
        ]"/>


<div class="pt-4 px-6">

    <div class="flex mt-3">
        <a href="{{ URL::previous() }}" class="hover:-translate-y-1 transition-all font-title border bg-accent text-secondary rounded-3xl px-3 py-3 text-sm font-medium">
            <svg class="w-6 h-6 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
        </a>
    </div>


    <div class="mt-4 flex flex-col gap-4">
        <h1 class="font-title text-4xl font-title font-semibold text-accent">{{$review->user->name}}</h1>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Note&nbsp;:</h2>
        <div class="mt-2 flex gap-4">
            <p class="bg-table border-b border-accent p-2 rounded-md">{{$review->stars}} / 5</p>
        </div>

        <h2 class="mt-4 font-title text-2xl leading-none font-semibold leading-6 text-accent">Message&nbsp;:</h2>
        <div class="mt-2 flex gap-4">
            <p class="max-w-screen-lg bg-table border-b border-accent p-2 rounded-md">{{$review->message}}</p>
        </div>
    </div>

</div>

</x-layout>