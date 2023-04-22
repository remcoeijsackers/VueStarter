<script setup lang="ts">
defineProps<{
  title: string,
  id: number,
  author: string,
  date: string,
  double_width: boolean

}>()
</script>


<template>
    <div v-bind:class = "(double_width)?'max-w-[47.5rem]':'max-w-sm '" class="block md:mx-2 my-2 rounded-lg bg-white shadow-lg dark:bg-neutral-700 ">
      <div>
        <div >
          <slot name="article-image" class="rounded-t-lg"></slot>
        </div>
        

        <div class="absolute text-5xl text-white bottom-[-1rem] right-[-5rem] -translate-x-1/2 -translate-y-1/2">
          <div
                class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200">
            <img
                  class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%] "
                  src="/images/monkey.jpg"
                  alt="Contact Person" />
            {{ date }}
            <span
                data-te-chip-close
                class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100">
            </span>
          </div>
       </div>
       <div class="absolute text-5xl text-black top-[1rem] left-[1rem] ">
                  <slot name="article-tags"></slot>
                </div>
      </div>
        <div class="p-4 align-text-bottom h-[7rem] rounded-b-lg ">
          <h5 class="text-2xl py-1 font-bold leading-tight text-neutral-800 dark:text-neutral-50"> {{ title }}</h5>
          
          <p class="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                    <slot name="article-content"></slot>
          </p>
          <slot name="article-link"></slot>
        </div>
    </div>
</template>