<template>

  <div class="dark:bg-gray-700">
    
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-0 -z-10 transform-gpu overflow-hidden"
      >
      <svg class="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
    </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center md:justify-center">
          <div
            class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
          Latest news.
          <RouterLink to="/news" class="font-semibold text-indigo-600">
            <span class="absolute inset-0 dark:text-white" aria-hidden="true"></span>Read more
            <span aria-hidden="true">&rarr;</span>
          </RouterLink>
          </div>
        </div>
        <div class="text-center">
          <div class="w-full lg:max-w-full lg:flex">

            <div
              class="lg:h-auto sm:h-5 lg:w-40 sm:w-full flex-none text-center"
            >
            <RouterLink to="/about" >
              <img
                class="rounded-full  h-20 w-20 sm:w-full md:h-0 sm:h-0 justify-center lg:hidden object-cover object-left-top   bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                src="/images/monkey.jpg"
                alt=""
              />
              <img
                class=" max-w-0 lg:max-w-full overflow-hidden lg:rounded-full lg:h-40 md:h-0 sm:h-0 object-cover object-left-top   bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[12rem] sm:w-0"
                src="/images/monkey.jpg"
                alt=""
              />
            </RouterLink>

            </div>
            <div
              class="lg:border-r lg:border-b  lg:border-l-0 dark:!bg-transparent  lg:bg-white md:bg-white  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal "
            >
              <div class="mb-8 ">
                <div class="text-gray-900 font-bold text-xl mb-2 dark:text-white">
                Hi there!
                </div>
                <p class="text-gray-700 text-base dark:text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed reprehenderit exercitationem ab aliquid nam doloremque, ad quaerat quia natus unde repellat reiciendis aliquam ducimus id rem sequi dolorum eius ipsa.
                </p>
              </div>
              <div class="mt-2 flex items-center justify-center gap-x-6">
                <RouterLink to="/news" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  News
                </RouterLink>
                <RouterLink to="/projects" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Projects
                </RouterLink>
                <RouterLink to="/contact" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Contact
                </RouterLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
