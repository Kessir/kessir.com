<template>
  <div class="font-sans text-gray-800 leading-normal bg-gray-100 flex flex-col min-h-screen">
    <header class="border-t-2 border-violet">
      <nav class="container m-auto flex justify-between py-6 px-6 sm:px-4 text-violet">
        <g-link to="/"><img src="../../static/kessir-logo.svg" alt="Kessir Adjaho" class="h-8"> </g-link>
        <ul class="flex items-center">
          <li class="mr-8 border-violet">
            <g-link class="nav__link hover:text-indigo-500" to="/">Home</g-link>
          </li>
          <li>
            <g-link class="nav__link hover:text-indigo-500" to="/blog">Blog</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container m-auto px-4 sm:px-6 py-4 sm:py-8 flex-grow">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<style src="../main.css"/>
