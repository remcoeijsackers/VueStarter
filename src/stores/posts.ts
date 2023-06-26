import type { Component } from 'vue'

import memento from '@/components/posts/sampleMemento.vue'
import samplePost from '@/components/posts/samplePost.vue'
import sampleGridGame from '@/components/posts/sampleGridGame.vue'


export default interface Post {
  id: number
  title: string
  content: string
  image: string
  page: Component
  tags: Array<string>
  date: string
  author: string
  type: string
  has_page: boolean
  
}

export const samplepost5: Post = {
  id: 5,
  title: "Sample Post 5",
  content: "sample post.",
  image: "https://avatars.githubusercontent.com/u/38228418?v=4",
  page: memento,
  tags: [
    "tool", 
    "resource"
  ],
  date: "2024-04-15",
  author: "John Doe",
  type: "resource",
  has_page: true
}


export const samplepost4: Post = {
  id: 4,
  title: "Sample Post 4",
  content: "A post",
  image: "/images/monkey.jpg",
  page: sampleGridGame,
  tags: [
    "sample",
    "nature"
  ],
  date: "2023-08-21",
  author: "John Doe",
  type: "software",
  has_page: true
}

export const samplepost3: Post = {
  id: 3,
  title: "Sample Post 3",
  content: "Another post",
  image: "/images/monkey.jpg",
  page: sampleGridGame,
  tags: [
    "sample",
    "nature"
  ],
  date: "2022-02-10",
  author: "John Doe",
  type: "software",
  has_page: true
}


export const samplepost2: Post = {
    id: 2,
    title: "Sample Post 2",
    content: "Sample of a post",
    image: "https://avatars.githubusercontent.com/u/38228418?v=4",
    page: samplePost,
    tags: [
      "sample",
      "post"
    ],
    date: "2020-08-21",
    author: "John Doe",
    type: "software",
    has_page: true
  }

export const samplepost1: Post = {
    id: 1,
    title: "Sample Post 1",
    content: "A post",
    image: "https://avatars.githubusercontent.com/u/38228418?v=4",
    page: memento,
    tags: [
      "tool"
    ],
    date: "2019-04-15",
    author: "John Doe",
    type: "software",
    has_page: true
  }


export const posts = [
    samplepost5,
    samplepost1,
    samplepost2,
    samplepost3,
    samplepost4
  ]

export function getPost(id: number): any {
    const object = posts.find(obj => obj.id === id);
    return object
}

export function getPosts(): Array<Post> {
    const x: Array<Post>  = []
    posts.forEach( (post) => {
        if(post.type === "software"){
            x.push(post)
        }
    });

    return x
}

export function getNewsItem(id: number): any {
    const object = posts.find(obj => obj.id === id);
    return object
}

export function getNewsItems(): Array<Post> {
    const x: Array<Post> = []
    posts.forEach( (post) => {
        if(post.type === "news" || post.type === "software" || post.type === "resource"){
            x.push(post)
        }
    });
    return x
}

export function getResourceItems(): Array<Post> {
  const x: Array<Post> = []
  posts.forEach( (post) => {
      if(post.type === "resource"){
          x.push(post)
      }
  });
  return x
}

export function searchByTag(tag: string): Array<Post> {
  const x: Array<Post>  = []
  posts.forEach( (post) => {
      if(post.tags.includes(tag)){
          x.push(post)
      }
  });

  return x
}
