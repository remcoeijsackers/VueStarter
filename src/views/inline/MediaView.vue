<script setup lang="ts">
import inline_cards from '@/components/inline_cards.vue';
import mediacard from '@/components/card/mediacard.vue';
import { getMediaItems } from '../../stores/media'
import type MediaPost from '../../stores/media';
import { ref } from 'vue'

window.scrollTo(0,0)

let input = ref("");

const x: Array<any> = [];
const z: MediaPost[] = x.concat(getMediaItems()).sort((a: MediaPost, b: MediaPost) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();

    }).reverse();

function filteredList() {
  if (input.value === "") {
    return z
  }
  return z.filter((item) =>
  item.tags.includes(input.value) ||
  item.type == input.value ||
  item.title == input.value
  );
}

</script>

<template>
<input class="text-black" type="text" v-model="input" placeholder="Search content..." />
<inline_cards>
    <template #card-items >
            <div v-for="post in filteredList()" :key="post.id">
                <mediacard :title=post.title :id=post.id :author=post.author :date=post.date :double_width=post.double_width>
                    <template #article-image>
                        <img v-if="!post.tags.includes('video')" class="rounded-t-lg object-cover max-h-[30rem]" :src=post.image alt="" />
                        <iframe  v-if="post.tags.includes('video')" class="rounded-t-lg object-cover max-h-[30rem] max-w-lg" 
                        width="auto" :src=post.image allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>

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
                    <template #article-link>
                        <a v-if=post.link :href=post.link> {{ post.link_text }}</a>
                    </template>
                </mediacard>
            </div>
    </template>
</inline_cards>

</template>
<style>
input {
  display: block;
  width: 330px;
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
