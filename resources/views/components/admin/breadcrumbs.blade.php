<nav class="px-6 pt-2 pb-1 border-b">
    <ol class="list-none p-0 inline-flex">
        <a href="/admin">
        <svg class="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 35 25">
            <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
        </svg>
        </a>
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
