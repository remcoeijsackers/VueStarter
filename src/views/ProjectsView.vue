<script setup lang="ts">
import cards from '@/components/cards.vue';
import theme_card from '@/components/card/theme_card.vue'
import { getThemes } from '../stores/themes'

window.scrollTo(0,0)

</script>

<template>
    <div class="mx-auto pt-20">
            <div class=" text-center lg:justify-between py-2 m-auto">
                    <h2 class="text-3xl font-bold  text-gray-600 dark:text-white">Projects</h2>
                    <p class=" text-gray-600">..</p>
            </div>

    </div>
<cards>
    <template #card-items >
            <div v-for="post in getThemes()" :key="post.id">
                <theme_card :title=post.title :id=post.id :author=post.author :date=post.date :name=post.name>
                    <template #article-image>
                        <img class="rounded-t-lg object-cover h-[20rem] w-[30rem]" :src=post.image alt=""                
                        data-te-ripple-init
                        data-te-ripple-color="light" />
                    </template>
                    <template #article-content>
                        {{ post.content }}
                    </template>
                </theme_card>
            </div>
    </template>
</cards>

<br>

</template>

