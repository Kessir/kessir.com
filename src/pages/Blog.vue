<template>
  <Layout>
    <div class="m-0 m-auto max-w-4xl ">
      <h1 class="text-4xl m-2 text-center ">Kessir's Blog</h1>
      <p class="text-center ">Here I write mostly about software development.</p>
      <div class="mt-8">
        <article
          v-for="article in articles"
          :key="article.node.id"
          class="mt-4 py-6 px-8 sm:pt-10 sm:pb-12 sm:px-16 bg-white shadow-md rounded">
          <g-link class="hover:text-gray-600" :to="article.node.path">
            <h2 class="text-2xl font-semibold text-left">{{ article.node.title }}</h2>
          </g-link>

          <p class="mt-4 text-left">{{ article.node.excerpt }}</p>
        </article>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query allPost {
    allPost: allPost(filter: { published: { eq: true }}){
    edges{
      node{
        date (format: "D. MMMM YYYY")
        timeToRead
        title
        id
        excerpt
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Blog"
  },
  computed: {
    articles() {
      return this.$page.allPost.edges;
    }
  }
};
</script>
