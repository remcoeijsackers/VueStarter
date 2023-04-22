<script setup lang="ts">
import cards from '@/components/cards.vue';
import card from '@/components/card/card.vue'
import { posts } from '../stores/posts'
import { mediacontent } from '../stores/media'
import type Post from '../stores/posts';
import { ref} from 'vue'

window.scrollTo(0,0)

let input = ref("");

const x: Array<any> = [];
const z: Post[] = x.concat(mediacontent, posts).sort((a: Post, b: Post) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();

    }).reverse();

function filteredList() {
  return z.filter((item) =>
    item.tags.includes(input.value) ||
    item.type == input.value ||
    item.title == input.value
  );
}

</script>

<template>
    <div class="mx-auto pt-1 max-w-sm bg-transparent ">
            <div class=" text-center lg:justify-between py-2 m-auto">
                <input class="text-black" type="text" v-model="input" placeholder="Search content..." />
                <div class="item error" v-if="input&&!filteredList().length">
                    <p></p>
                </div>
            </div>
            <div class=" justify-between m-auto px-5 flex">
            <button
              class="inline-block whitespace-nowrap rounded-full bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700"
              @click="input ='software'">
              Software
            </button>
            <button
                class="inline-block whitespace-nowrap rounded-full bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700"
                @click="input ='media'">
                Media
            </button>
            <button
              class="inline-block whitespace-nowrap rounded-full bg-secondary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-secondary-800"
              @click="input ='resource'">
              Resource
            </button>
            </div>
 
    </div>
    
<div>
    <cards>
    <template #card-items >
            <div v-for="post in filteredList()" :key="post.id">
                <card :title=post.title :id=post.id :author=post.author :date=post.date :has_page=post.has_page>
                    <template #article-image>
                        <img class="rounded-t-lg object-cover h-[20rem] w-[30rem]" :src=post.image alt=""                
                        data-te-ripple-init
                        data-te-ripple-color="light" />
                    </template>
                    <template #article-tags>
                        <div class='my-2 flex flex-wrap'>
                            <div v-for="tag in post.tags">
                                <span @click="input =tag"
                                    class="flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600
                                      rounded-xl ml-1 px-4 py-1 font-bold leading-loose cursor-pointer dark:text-gray-300">
                                    {{ tag }} 
                                </span>
                            </div>
                        </div>
                    </template>
                    <template #article-content>
                        {{ post.content }}
                    </template>
                </card>
            </div>
    </template>
</cards>
</div>


<br>

</template>
<style>
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>