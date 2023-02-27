<html>
<head>
    <style>
        body {
            background-color: #ffffff;
            padding: 10px;
            border: solid 1px #a19f9f
        }
    </style>
</head>
<body style="
    background-image:url('{{  public_path('fondo.png') }}');
    background-size: cover;
    ">

    <header style="margin-top:100px; color: #160e45; font-weight: bold;">
        <img src="{{ public_path('logo.png')}}">
        <h1 style="text-align: left; margin: 0px; padding: 0px;">
            Facultad de Ciencias Forenses <br> e investigación Criminal
        </h1>
    </header>

    <section style="margin-top:15px; text-align: center">
        <h2 style="color: #160e45; font-weight: bold; margin:0px; padding: 0px">
            Carné Virtual
        </h2>
        <p style="color: #160e45; font-weight: bold; font-size: 28px; margin:0px; padding: 5px">
            {{ $user->name }}
        </p>

        <p>
            <img src="{{ public_path('storage/' . $user->profile_photo_path) }}"
                 style="width: 150px">
        </p>
        <p>
            <strong>Carné: </strong> {{ $user->carne }} <br>
            <strong>DPI: </strong> {{ $user->dpi }} <br>
            <strong>Carrera:</strong> {{ $user->carrera }} <br>
            <strong>Ciclo Asignado:</strong> {{ $user->ciclo }} <br>
            <span class="mt-2">
                        <strong class="mt-2">Vigencia:</strong> <span>Enero-Junio 2023</span>
                    </span>
        </p>
    </section>

    <footer>
        <div style="
         margin: 0 100px 0 100px;
         padding: 15px;
         font-size:10px;
         font-weight: bold;
         text-align: center;
         background-color: #666;
        "
        >
            Para verificar la autenticidad de este carne virtual, escanea el siguiente código QR con tu dispositivo móvil y serás redirigido a una página donde podrás verificar la información del alumno y la validez del documento. Esto asegura que el carnet virtual que posees es auténtico y válido para su uso en la Facultad de Ciencias Forenses e Investigación Criminal de la Universidad de Occidente ext. Antonio Beristain.
        </div>
        <div style="text-align: right">
            <img src="{{ $qr }}" alt="" style="border: solid 1px #a19f9f; margin: 20px">
        </div>
    </footer>
</body>
</html>
