<script setup lang="ts">

import type Post from '../../stores/posts'
import { getPost } from '../../stores/posts'
import router from '../../router/index'

window.scrollTo(0,0)

const lastChar = router.currentRoute.value.params.id
const y: number = +lastChar
const post: Post = getPost(y)

</script>

<template>
    <div class=" mx-auto pt-20">
            <div class=" text-center lg:justify-between py-2 m-auto ">
                    <h2 class="text-3xl font-bold  text-gray-600 dark:text-white">{{ post.title }}</h2>
                    <p class=" text-gray-600">{{ post.content }}</p>
            </div>
    </div>
    <div class="container  mx-auto max-w-7xl lg:px-[20rem] px-10 py-12 ">
        <div class="lg:items-center lg:justify-between py-2 m-auto">
            <img :src=post.image class="max-h-[30rem] mx-auto flex pb-11" alt=""/>
            <post.page></post.page>
        </div>
    </div>
</template>
<style>
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
  }
}
</style>