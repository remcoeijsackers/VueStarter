<script setup lang="ts">
import cards from '@/components/cards.vue';
import card from '@/components/card/card.vue';
import { getNewsItems } from '../stores/posts'
import { getMediaItems } from '../stores/media'
import { ref } from 'vue'
import type Post from '../stores/posts';

window.scrollTo(0,0)

let input = ref("");

const x: Array<any> = [];
const z: Post[] = x.concat(getNewsItems(), getMediaItems()).sort((a: Post, b: Post) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();

    }).reverse();

function filteredList() {
  if (input.value === "") {
    return z
  }
  return z.filter((item) =>
  item.tags.includes(input.value) ||
  item.type == input.value
  );
}

</script>

<template>
    <div class=" mx-auto pt-20">
            <div class=" text-center lg:justify-between py-2 m-auto">
                    <h2 class="text-3xl font-bold  text-gray-600 dark:text-white">News</h2>
                    <p class=" text-gray-600">..</p>
            </div>

    </div>
    <input type="text" v-model="input" placeholder="Search content..." />
<cards>
    <template #card-items >
            <div v-for="post in filteredList()" :key="post.id">
                <card :title=post.title :id=post.id :author=post.author :date=post.date :has_page=post.has_page>
                    <template #article-image>
                        <img class="rounded-t-lg object-cover h-[20rem] w-[30rem]" 
                        :src=post.image alt="" 
                        />
                    </template>
                    <template #article-content>
                        {{ post.content }}
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
                </card>
                
            </div>
    </template>
</cards>

</template>

