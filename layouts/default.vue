<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div>
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-800 px-6">
        <div class="flex shrink-0 items-center pt-8 pb-2">
          <NuxtLink to="/" :class="[useRoute().name === 'index' ? 'active relative text-5xl font-bold dark:text-white' : 'text-5xl font-bold dark:text-white', 'pb-0.5 pl-1']">Justin Nethers<span class="inner"></span></NuxtLink>
        </div>
        <nav class="flex flex-1 ">
          <ul role="list" class="flex flex-1  gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-6">
                <li v-for="item in navigation" :key="item.name">
                  <NuxtLink :to="item.href" :class="[useRoute().path === item.href ? 'active text-black dark:text-white font-bold' : 'text-gray-700 dark:text-white font-light', 'group flex gap-x-3 rounded-md p-2 text-4xl leading-6']">
                    {{ item.name }}
                    <span class="inner"></span>
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="-mx-6 mt-auto flex">
<!--              <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">-->
<!--                <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />-->
<!--                <span class="sr-only">Your profile</span>-->
<!--                <span aria-hidden="true">Tom Cook</span>-->
<!--              </a>-->
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-800 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
<!--      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">-->
<!--        <span class="sr-only">Open sidebar</span>-->
<!--        <Bars3Icon class="h-6 w-6" aria-hidden="true" />-->
<!--      </button>-->
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8 dark:text-white">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  // { name: 'Projects', href: '/projects', current: useRoute().name === 'projects' },
  // { name: 'Blog', href: '/blog', current: useRoute().name === 'blog' },
]

</script>

<style>
a {
  position: relative;
  z-index: 2;
}

a.active .inner::after, a:hover .inner::after {
  content: '';
  z-index: -1;
  width: 100%;
  height: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 1;
  @apply bg-orange-600;
}
</style>
