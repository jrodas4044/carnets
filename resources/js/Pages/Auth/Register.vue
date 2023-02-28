<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    carne: '',
    dpi: '',
    photo: '',
    carrera: '',
    ciclo: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Registro" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <form @submit.prevent="submit" enctype="multipart/form-data">
            <div>
                <InputLabel for="name" value="Nombre" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="name"
                />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="username"
                />
                <div class="mt-2 px-4 py-2 text-sm bg-gray-200">
                    Unicamente se admiten correos institucionales <strong>@udeoberistain.edu.gt</strong>
                </div>
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="mt-4">
                <InputLabel for="dpi" value="DPI" />
                <TextInput
                    id="dpi"
                    v-model="form.dpi"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError class="mt-2" :message="form.errors.dpi" />
            </div>

            <div class="mt-4">
                <InputLabel for="carne" value="Carnet" />
                <TextInput
                    id="carne"
                    v-model="form.carne"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError class="mt-2" :message="form.errors.carne" />
            </div>

            <div class="mt-4">
                <InputLabel for="Carrera" value="Carrera" />
                <select
                    id="carrera"
                    class="mt-1 block w-full"
                    required
                    v-model="form.carrera"
                >
                    <option value="">---</option>
                    <option value="Técnico Universitario Auditor Forense en Investigaciones Criminales">Técnico Universitario Auditor Forense en Investigaciones Criminales</option>
                    <option value="Licenciatura en Investigación Criminal y Seguridad">Licenciatura en Investigación Criminal y Seguridad</option>
                </select>
                <InputError class="mt-2" :message="form.errors.carrera" />
            </div>

            <div class="mt-4">
                <InputLabel for="ciclo" value="Ciclo" />
                <select
                    id="ciclo"
                    class="mt-1 block w-full"
                    required
                    v-model="form.ciclo"
                >
                    <option value="">---</option>
                    <template v-if="form.carrera == 'Técnico Universitario Auditor Forense en Investigaciones Criminales'">
                        <option value="1er Semestre">1ero </option>
                        <option value="2do Semestre">2do</option>
                        <option value="3er Semestre">3ero</option>
                        <option value="4to Semestre">4to</option>
                        <option value="5to Semestre">5to</option>
                        <option value="6to Semestre">6to</option>
                    </template>

                    <template v-if="form.carrera == 'Licenciatura en Investigación Criminal y Seguridad'">
                        <option value="7mo  Semestre">7mo</option>
                        <option value="8vo Semestre">8vo</option>
                        <option value="9no Semestre">8no.</option>
                        <option value="10mo Semestre">10mo</option>
                    </template>
                </select>

                <InputError class="mt-2" :message="form.errors.ciclo" />

            </div>

            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                <InputLabel for="terms">
                    <div class="flex items-center">
                        <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                        <div class="ml-2">
                            I agree to the <a target="_blank" :href="route('terms.show')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Privacy Policy</a>
                        </div>
                    </div>
                    <InputError class="mt-2" :message="form.errors.terms" />
                </InputLabel>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Registrarse
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>
