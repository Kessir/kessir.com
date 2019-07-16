// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add a meta tag
  head.meta.push({
    key: 'keywords',
    name: 'keywords',
    content: 'Kessir,Adjaho,Software,Engineer'
  });
  // head.meta.push({
  //   key: 'description',
  //   name: 'description',
  //   content: 'I am Kessir Adjaho, a Full-Stack Web Developer and an Android Developer. I work with the following technologies: Kotlin, SpringBoot, Node.js , Vue.js'
  // })
  
  // Bugfix
  const desc = head.meta.find(meta=> meta.name === 'description');
  desc.content = 'I am Kessir Adjaho, a Full-Stack Web Developer and an Android Developer. I work with the following technologies: Kotlin, SpringBoot, Node.js , Vue.js';
}
