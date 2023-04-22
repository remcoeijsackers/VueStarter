<script setup lang="ts">
defineProps<{
  title: string,
  id: number,
  author: string,
  date: string,
  name: string

}>()
</script>

<template>
        <div class="block md:mx-2 my-2 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <RouterLink 
                 :to="{ name: 'project', params: { name: name } }">
                 <slot name="article-image" class="rounded-t-lg object-cover lg:h-[30rem] md:h-[30rem] sm:max-h-[15rem]"></slot>
            </RouterLink>
            <div class="p-5">
                <RouterLink  
                 :to="{ name: 'project', params: { name: name } }">
                    <h5 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-white ">
                        {{ title }}
                    </h5>

                </RouterLink>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <slot name="article-content"></slot>
                </p>
                <slot name="article-link"></slot>

                <RouterLink  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                 :to="{ name: 'project', params: { name: name } }"> Read more
                 <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                
                </RouterLink>
                
            </div>
            
        </div>
</template>