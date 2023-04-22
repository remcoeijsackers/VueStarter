<script setup lang="ts">
import type Post from '../../stores/posts'
import { getThemeByName } from '../../stores/themes'
import router from '../../router/index'

window.scrollTo(0,0)

const post: Post = getThemeByName(router.currentRoute.value.params.name)

</script>

<template>
    <div class="container mx-auto pt-20">
            <div class="text-center lg:justify-between py-2 m-auto">
                <div class="">
                    <h2 class="text-3xl font-bold  text-gray-900 dark:text-white ">{{ post.title }}</h2>
                    <p class=" text-gray-600">{{ post.content }}</p>
                </div>
            </div>
            <post.page></post.page>
    </div>
</template>
