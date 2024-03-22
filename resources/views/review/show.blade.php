<x-layout>
<x-breadcrumbs :breadcrumbs="[
            ['title' => 'Tableau de bord', 'url' => '/'],
            ['title' => 'Avis', 'url' => route('review.index')],
            ['title' => $review->user->name, 'url' => ''],
        ]"/>

<div class="px-6">
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
</div>
</x-layout>