<nav class="px-6 py-2 border-b">
    <ol class="list-none p-0 inline-flex">
        @foreach($attributes->get('breadcrumbs') as $breadcrumb)
            @if(!$loop->last)
                <li class="flex items-center">
                    <a href="{{ $breadcrumb['url'] }}" class="text-primary font-semibold text-sm">{{ $breadcrumb['title'] }}</a>
                    <span class="mx-2">/</span>
                </li>
            @else
                <li class="flex items-center text-primary text-sm">{{ $breadcrumb['title'] }}</li>
            @endif
        @endforeach
    </ol>
</nav>
