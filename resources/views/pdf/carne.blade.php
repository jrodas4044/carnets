<html>
<head>
    <style>
    </style>
</head>
<body style="

    ">

   <div style="
       padding: 10px;
       border: solid 1px #a19f9f;
       background: red;
       background-image:url('{{  public_path('fondo.png') }}');
       background-size: cover;
    ">
       <header style="margin-top:10px; color: #160e45; font-weight: bold; text-align: center">
           <div style="float: left; width: 40%;">
               <img style="" src="{{ public_path('logo.png')}}" width="90%">
           </div>

           <div style="float: left;  width: 60%">
               <h1 style="
               text-align: center;
               margin: 20px 0 0 0;
               padding: 0px;
               font-size:25px">
                   Facultad de Ciencias Forenses <br> e Investigación Criminal
               </h1>
               <h2 style="color: #160e45; font-weight: bold; margin:0px; padding: 0px; font-size:18px;text-align: center;">
                   Carné Virtual
               </h2>
           </div>
           <div style="clear: both"></div>

       </header>

       <section style="float: left; width: 15%; margin-left: 15px; margin-top: 15px ">
           <div style="text-align: center;">
               <img src="{{ $qr }}" alt="" style="border: solid 1px #9f9f9f; margin: 20px">
           </div>

       </section>

       <section  style="float: left; width: 45.66%; font-size: 14px; margin-top: 25px; text-align:right">
           <p>
               <strong style="color: #160e45; font-weight: bold; font-size: 18px; ">
                   {{ $user->name }}
               </strong> <br>
               <strong>Carné: </strong> {{ $user->carne }} <br>
               <strong>DPI: </strong> {{ $user->dpi }} <br>
               <strong>Carrera:</strong> <br> {{ $user->carrera }} <br>
               <strong>Ciclo Asignado:</strong> {{ $user->ciclo }} <br>
               <span class="mt-2">
                        <strong class="mt-2">Vigencia:</strong> <span>Enero-Junio 2023</span>
                    </span>
           </p>
       </section>

       <section style="text-align: center; float: left; width: 33.33%;">
           <p>
               <img src="{{ public_path('storage/' . $user->profile_photo_path) }}"
                    style="
                    width: 150px;
                    border: 3px solid #a2a1a1;
                    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
               ">
           </p>
       </section>

       <section style="clear:both">
           <div style="
         padding: 15px;
         font-size:13px;
         font-weight: bold;
         text-align: center;
         background-color: #ffffff;
         background-position: top;
        "
           >
               Para verificar la autenticidad de este carne virtual, escanea el siguiente código QR con tu dispositivo móvil y serás redirigido a una página donde podrás verificar la información del alumno y la validez del documento. Esto asegura que el carnet virtual que posees es auténtico y válido para su uso en la Facultad de Ciencias Forenses e Investigación Criminal de la Universidad de Occidente Extensión Antonio Beristain.           </div>
       </section>
   </div>
</body>
</html>
