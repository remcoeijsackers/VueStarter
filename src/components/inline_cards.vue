<template>
    <div class=" mx-auto max-w-[80rem]">
        <div class="containerZ flex-wrap flex-start "> 
            <slot name="card-items"></slot>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .containerZ {
    display: flex;
    align-items: center;

  }
}

.flex-start {
    align-items: flex-end;
}
</style>
