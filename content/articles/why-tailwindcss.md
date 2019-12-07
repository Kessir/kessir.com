---
title: 'Why you should try TailwindCSS'
date: 2019-10-01
excerpt: 'TailwindCSS describes itself as "utility-first CSS framework". This means that instead of giving you ready-made components like card, nav, form-group, it gives you low-level utility classes such as font-size, padding, margin. It is almost like writing inline css.'
published: true
slug: 'why-you-should-try-tailwind-css'
canonical_url: false
tags: ['Software Engineering', 'Front End', 'CSS', 'Tailwind', 'TailwindCSS']
---

[TailwindCSS](https://tailwindcss.com/) is a utility-first CSS framework. This means that instead of giving you ready-made components like `.card`, `.button`, `.form-group`, it gives you low-level utility classes such as `.text-lg .text-4xl` for font size, `.m-4 .mx-10 ` for margin etc. 


For example, to implement a card you would do the following:

```
<div class="mt-4 py-12 px-16 bg-white rounded shadow-md">...</div>
```

It is **almost** like writing inline css.
At first, this may seem tedious and an anti-pattern but it is actually worth it.

## Why is utility-first css worth exploring?

If you have written a lot of html, you would have noticed that most of the CSS classes you write are not that reusable.

Once in a while some UI components will share similar CSS so you'll be tempted to extract the CSS and reuse it. But you later realize that you want to modify the css on one component but not the others.

Utility-first css is great especially when you are prototyping because:
- You don't have to edit 2 different files, the css and html files, to see your changes.
- You don't have to wonder what to name your css classes. Naming is hard, naming in a way that is maintainable in the long term is harder.


## Some criticisms

#### 1. "Your html files are littered with css classes"

This is not inherently a bad thing and more an issue of taste. 


#### 2. "You have to duplicate a lot of css classes. For example when you have a list of cards"

You will rarely have to manually write a static list of the same component. Most of the time you are using components in front-end frameworks or partials templates that you can loop over.


If you do find yourself using the same set of Tailwind classes in many places, Tailwind allows you to extract them into components. [Tailwind docs for extracting components](https://tailwindcss.com/docs/extracting-components).

For example if all your buttons have `bg-blue-600 text-white rounded-full py-3 px-5 font-semibold`, you can create the following component:
```
.button {
  @apply bg-blue-600 text-white rounded-full py-3 px-5 font-semibold;
}
```
```
<a class="button">Click me</a>
```


## Getting Started

The simplest way to get started is to follow the instructions at [tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation/)

If you are a visual learner like me, you will apreciate these youtube tutorials:
- [Course from Tailwind's creator, Adam Wathan](https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR)
- [TailwindCss with Gridsome, a static site generator for Vue.js](https://www.youtube.com/watch?v=uHo6o1TNQeE)