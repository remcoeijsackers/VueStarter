<template>
    <div class=" mx-auto max-w-[80rem]">
        <div class="container3 mx-5 flex-wrap w-auto"> 
            <slot name="card-items"></slot>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .container3 {
    display: flex;
    align-items: center;
    margin: 5;
  }
}
</style>
