<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'PIN' }}</title>
    @vite('resources/scss/app.scss')
    @stack('styles')
</head>
<body class="antialiased">
<div class="wrapper">
    <x-layouts.sidebar/>

    <main class="main">
        <x-layouts.header/>

        {{ $slot }}
    </main>
</div>

@stack('scripts')
@vite('resources/js/app.js')
</body>
</html>
