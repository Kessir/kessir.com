<template>
  <Layout>
    <div class="text-center">
      <!-- <img class="h-48 m-auto" src="../../static/dev-illustration.svg" alt /> -->
      <img class="h-64 m-auto rounded-full" src="../../static/kessir_2.jpeg" alt />

      <h2 class="mt-4 text-5xl sm:text-6xl">
        Hi, I'm
        <span class="text-violet">Kessir</span> !
      </h2>

      <p class="text-xl sm:text-2xl text-gray-700">
        Full-Stack Web Dev
        <span>&amp;</span> Mobile Developer
      </p>

      <p class="mt-6 text-base max-w-3xl m-auto leading-loose">
        I work with technologies such as
        <span class="tech">Node.js</span>
        <span class="tech">SpringBoot</span> and
        <span class="tech">Vue.js</span> for web development.
        <br />And
        <span class="tech">Kotlin</span>
        <span class="tech">Flutter</span> for mobile development.
      </p>
      <p class="mt-10 text-base max-w-2xl m-auto">
        In my spare time I host
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-indigo-700 underline font-semibold text-base"
          href="https://afrodevpodcast.com/"
        >AfrodevPodcast</a> 🎤
        , a podcast where I have interesting conversations with other african software developers.
      </p>

      <p class="mt-8 mb-6 text-violet text-sm sm:text-base">
        <a href="mailto:hi@kessir.com" target="_blank" rel="noopener">hi@kessir.com</a> |
        <a href="https://github.com/kessir" target="_blank" rel="noopener">github.com/kessir</a>
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Software Engineer"
  }
};
</script>