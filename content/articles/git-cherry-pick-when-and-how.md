---
title: 'When and how to git cherry-pick 🍒'
date: 2019-12-06
excerpt: 'Git cherry-pick  as the name implies, allows you to cherry-pick a specific commit from one branch and add it to another branch.'
published: true
canonical_url: false
slug: 'when-and-how-to-git-cherry-pick'
tags: ['Software Engineering', 'Git', 'Version Control']
---

`git cherry-pick`  🍒 as the name implies, is a [Git](https://en.wikipedia.org/wiki/Git) command that allows you to cherry-pick a specific commit from one branch and add it to another branch.

## When is it used?

Imagine the following (simplified) scenario: Your master branch is deployed to production and your develop branch is ahead of it by 2 commits: 

- `52a0687 Fixed search bar bug`
- `f591118 Added night mode`


Your users are complaining about the search bar bug which you have already fixed in develop.

You could merge or rebase the develop branch into the master branch but that would also include the "Night mode" feature which is not ready for release. You don't want that.

You want to pick just the bug-fix commit `52a0687`. This is where `git cherry-pick` comes into play.

## How is it done?

- `git checkout master`  - this ensures you are on the branch that will receive the commit

- `git cherry-pick 52a0687` - this does the actual cherry picking

Now master has the search bar bug-fix and your users are happy.

## Be careful though

You have to keep in mind that this is a somewhat dangerous process. You end up with fundamentally different branches and you will have a hard time joining them in the future. In the example above, merging develop into master later on will be a challenge.

A common practice is to cherry-pick into a long-lived branch you don't intend to merge into other branches.