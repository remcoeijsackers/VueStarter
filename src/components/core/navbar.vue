<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'

import IconMenu from '../icons/IconMenu.vue'

const mobileMenuOpen = ref(false)
</script>

<template>
      <nav class="lg:justify-around lg:py-4 
            shadow-md w-full
            fixed top-0 z-50
      bg-gray-200 dark:bg-[#222222] flex lg:items-center  p-6 lg:px-8
      sm:right-0 sm:padding-0 justify-between sm:px-6 sm:py-6
      " aria-label="Global">
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only ">RLE</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:se="http://svg-edit.googlecode.com" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50" height="20" style="">
               <g class="currentLayer" style=""><title>Layer 1</title><foreignObject fill="#4a90d6" stroke="#rgba(235, 235, 235, 0.64)" stroke-width="2" stroke-linejoin="round" stroke-dashoffset="" fill-rule="nonzero" font-size="20" font-family="Georgia, serif" letter-spacing="0" word-spacing="0" marker-start="" marker-mid="" marker-end="" id="svg_2" x="0" y="0" width="50" height="20" style="color: #bbb" class="selected"><p xmlns="http://www.w3.org/1999/xhtml" style="border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;">RLE</p></foreignObject></g>
            </svg>
          </RouterLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <IconMenu class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <RouterLink to="/" class="text-gray-600 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"  >Home</RouterLink>
          <RouterLink to="/news" class="text-gray-600 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">News</RouterLink>
          <RouterLink to="/projects" class="text-gray-600 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</RouterLink>
          <RouterLink to="/contact" class="text-gray-600 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</RouterLink>
          <RouterLink to="/about" class="text-gray-600 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</RouterLink>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="w-full

          flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5"  >
            <span class="sr-only">RLE</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:se="http://svg-edit.googlecode.com" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50" height="20" style="">
               <g class="currentLayer" style=""><title>Layer 1</title><foreignObject fill="#4a90d6" stroke="#222222" stroke-width="2" stroke-linejoin="round" stroke-dashoffset="" fill-rule="nonzero" font-size="20" font-family="Georgia, serif" letter-spacing="0" word-spacing="0" marker-start="" marker-mid="" marker-end="" id="svg_2" x="0" y="0" width="50" height="20" style="color: rgb(0, 0, 0);" class="selected"><p xmlns="http://www.w3.org/1999/xhtml" style="border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;">RLE</p></foreignObject></g>
            </svg>
          </RouterLink>

            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <IconMenu class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">

                <RouterLink to="/" class="-mx-3 block text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                @click="mobileMenuOpen = false">Home</RouterLink>
                <RouterLink to="/news" class="-mx-3 block text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                @click="mobileMenuOpen = false">News</RouterLink>
                <RouterLink to="/projects" class="-mx-3 block text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                @click="mobileMenuOpen = false">Projects</RouterLink>
                <RouterLink to="/about" class="-mx-3 block text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                @click="mobileMenuOpen = false">About</RouterLink>
              </div>
              <div class="py-6">

                <RouterLink to="/contact" class="-mx-3 block text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                @click="mobileMenuOpen = false">Contact</RouterLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
  </template>
  
