<script setup>


defineProps({ user: Object })

</script>

<template>
    <div class="flex h-screen  justify-center items-center w-screen">
        <div id="print" class="lg:w-1/2 mx-auto shadow-2xl border-t-4 border-blue-5git 00" >
            <div class="mt-6">
                <div class="w-full items-center justify-items-center text-center">
                    <img src="/head.png" alt="UDEO" width="400" style="margin:auto">
                </div>

            </div>

            <div class="p-6 lg:p-8 bg-white border-b border-gray-200 flex items-center justify-center">
                <div class="">
                    <img
                        :src="user.profile_photo_url"
                        class="h-32 w-32 rounded-full object-cover"
                    />
                </div>
                <div class="ml-4">
                    <h2 class="mt-2 text-l font-medium text-blue-900 uppercase font-semibold">
                        {{ user.name }}
                    </h2>
                    <span class="text-left text-sm">
                   <strong>Carné: </strong> {{ user.carne }} <br>
                   <strong>DPI: </strong> {{ user.dpi }} <br>
                   <strong>Carrera:</strong> {{ user.carrera }} <br>
                        <strong>Ciclo Asignado:</strong> {{ user.ciclo }} <br>
                    <span class="mt-2">
                        <strong class="mt-2">Vigencia:</strong> <span class="px-4 py-1 bg-red-500 rounded-full text-white font-bold">Enero-Junio 2023</span>
                    </span>
               </span>
                </div>
            </div>

            <div class="text-center w-full flex items-center justify-center py-2">
                <i class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>

                </i>
                <span class="text-green-600 font-bold">Documento Varificado</span>
            </div>

            <div class="bg-gray-200 p-6">
                <p class="text-sm">
                    Este documento virtual es una herramienta esencial para los alumnos de la Facultad de Ciencias Forenses e Investigación Criminal de la Universidad de Occidente, ya que acredita su pertenencia a nuestra comunidad académica. Es importante destacar que este carnet virtual es válido y tiene vigencia hasta junio de 2023, lo que significa que durante ese tiempo, los alumnos podrán gozar de todos los beneficios y servicios que ofrecemos en nuestra institución.                 </p>
            </div>
        </div>


    </div>
</template>
