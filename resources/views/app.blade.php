<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>

<body>

    <div id="app" data-component="{{ $component }}" data-props="{{ json_encode($props, JSON_FORCE_OBJECT) }}"></div>

</body>

</html>
