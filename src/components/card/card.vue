<script setup lang="ts">
defineProps<{
  title: string,
  id: number,
  author: string,
  date: string,
  has_page: boolean

}>()
</script>


<template>
    <div class="block md:mx-2 my-2 max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 ">
        <div>
        <slot name="article-image" class="rounded-t-lg"></slot>
        <div class="absolute text-5xl text-white bottom-[-1rem] right-[-5rem] -translate-x-1/2 -translate-y-1/2">
          <div
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200">
            <img
                  class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%] "
                  src="/images/monkey.jpg"
                  alt="Contact Person" />
            {{ date }}
            <span
                class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100">
            </span>
          </div>
       </div>

      </div>
        <div class="absolute text-5xl text-black top-[1rem] left-[1rem] ">
                  <slot name="article-tags"></slot>
        </div>


        <div class="p-6">
          <h5 class="text-2xl py-1 font-bold leading-tight text-neutral-800 dark:text-neutral-50"> {{ title }}</h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <slot name="article-content"></slot>
          </p>
          <slot name="article-link"></slot>

          <RouterLink  
          v-bind:class="{ 'linkdisabled': !has_page, 'hidden': !has_page}"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium
                  text-center text-white bg-indigo-600 rounded-lg hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
                  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  :to="{ name: 'post', params: { id: id } }"> Read more
                 <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                
           </RouterLink>
        </div>
    </div>
</template>
<style>
 .linkdisabled {
    pointer-events:none;    
 }
</style>