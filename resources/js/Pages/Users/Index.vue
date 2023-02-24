<script setup>
import { reactive } from 'vue'
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';


defineProps({ users: Array })

</script>

<template>
    <AppLayout title="Usuarios">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Usuarios
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <DataTable
                        table-id="datatable-01"
                        ref="datatable"
                        server-side
                        saved-state
                        url="/users/datatable"
                        :axios="axios"
                        :columns="columns"
                        :locale="locale"
                    >

                    </DataTable>
                    <table class="table w-full shadow-sm border">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="p-4 text-gray-600">Carne</th>
                                <th class="p-4 text-gray-600">Nombre</th>
                                <th class="p-4 text-gray-600">E-mail</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td class="border-b border-slate-100 px-4 py-2">{{ user.carne }}</td>
                                <td class="border-b border-slate-100 px-4 py-2">{{ user.name }}</td>
                                <td class="border-b border-slate-100 px-4 py-2">{{ user.email }}</td>
                                <td class="border-b border-slate-100 px-4 py-2">
                                    <Link as="button" href="routes('')">
                                        <i class="hover:text-green-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
