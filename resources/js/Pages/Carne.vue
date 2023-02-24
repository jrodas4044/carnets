<script setup>
defineProps({ user: Array })

</script>

<template>
    <div class="flex h-screen  justify-center items-center">
        <div id="print" class="w-auto mx-auto shadow-2xl" >
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
               </span>
                </div>

                <div class="ml-4">
                    <QRCodeVue3
                        :width="150"
                        :height="150"
                        :value="`http://estudiantes.udeoberistain.edu.gt/validate/${$page.props.auth.user.carne}`"
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
        </div>
    </div>
</template>
