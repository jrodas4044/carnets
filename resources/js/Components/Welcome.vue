<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import QRCodeVue3 from "qrcode-vue3";

window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();

function PrintElem(elem)
{
    var elementHTML = document.querySelector("#print");
    docPDF.html(elementHTML, {
        callback: function(docPDF) {
            docPDF.save('carne.pdf');
        },
        x: 15,
        y: 15,
        width: 170,
        windowWidth: 650
    });

}
</script>

<template>
    <div id="print">
        <div class="mt-6">
            <div class="w-full items-center justify-items-center text-center">
                <img src="/head.png" alt="UDEO" width="400" style="margin:auto">
            </div>

        </div>

        <div class="p-6 lg:p-8 bg-white border-b border-gray-200 flex items-center justify-center">
            <div class="">
                <img
                    :src="$page.props.auth.user.profile_photo_url"
                    class="h-32 w-32 rounded-full object-cover"
                />
            </div>
            <div class="ml-4">
               <h2 class="mt-2 text-l font-medium text-blue-900 uppercase font-semibold">
                   {{ $page.props.auth.user.name }}
               </h2>
               <span class="text-left text-sm">
                   <strong>Carné: </strong> {{ $page.props.auth.user.carne }} <br>
                   <strong>DPI: </strong> {{  $page.props.auth.user.dpi }} <br>
                   <strong>Carrera:</strong> {{ $page.props.auth.user.carrera }} <br>
                   <strong>Ciclo Asignado:</strong> {{ $page.props.auth.user.ciclo }} <br>
                    <span class="mt-2">
                        <strong class="mt-2">Vigencia:</strong> <span class="px-4 py-1 bg-red-500 rounded-full text-white font-bold">Enero-Junio 2023</span>
                    </span>
               </span>
           </div>

            <div class="ml-4">
                <QRCodeVue3
                    :width="150"
                    :height="150"
                    :value="`http://estudiantes.udeoberistain.edu.gt/validate/${$page.props.auth.user.id}`"
                    :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                    :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                    :dotsOptions="{
                        type: 'dots',
                        color: '#26249a',
                        gradient: {
                          type: 'linear',
                          rotation: 0,
                          colorStops: [
                            { offset: 0, color: '#26249a' },
                            { offset: 1, color: '#ff6600' },
                          ],
                        },
                      }"
                    margin="10"
                    :backgroundOptions="{ color: '#ffffff' }"
                    :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
                    :cornersDotOptions="{ type: undefined, color: '#000000' }"
                />


            </div>
        </div>

        <div class="w-full">
            <div class="bg-gray-200 p-6">
                <p class="text-sm">
                    Para verificar la autenticidad de este carne virtual, escanea el siguiente código QR con tu dispositivo móvil y serás redirigido a una página donde podrás verificar la información del alumno y la validez del documento. Esto asegura que el carnet virtual que posees es auténtico y válido para su uso en la Facultad de Ciencias Forenses e Investigación Criminal de la Universidad de Occidente ext. Antonio Beristain
                </p>
            </div>
        </div>

    </div>

    <div class="m-4 text-center">
        <button
            @click='PrintElem'
            class="p-4 bg-green-600 text-white"
        >
            Imprimir
        </button>
    </div>
</template>
