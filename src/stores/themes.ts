import type { Component } from 'vue'

import ProjectsViewVue from '@/views/inline/SoftwareView.vue'
import mediaview from '@/views/inline/MediaView.vue'
import resourcesview from '@/views/inline/ResourcesView.vue'

export default interface Theme {
  id: number
  title: string
  content: string
  image: string
  page: Component
  tags: Array<string>
  date: string
  author: string
  type: string
  name: string
}
export const ripplenav: Theme = {
  id: 3,
  title: "Resources",
  content: "Snippets and links.",
  image: "/images/monkey.jpg",
  page: resourcesview,
  tags: [
    "foo",
    "bar"
  ],
  date: "2023-02-20",
  author: "John Doe",
  type: "nav",
  name: "resources"
}

export const medianav: Theme = {
    id: 2,
    title: "Media",
    content: "Ventures into the visual realm.",
    image: "/images/purpleflower.jpg",
    page: mediaview,
    tags: [
      "foo",
      "bar"
    ],
    date: "2023-02-20",
    author: "John Doe",
    type: "nav",
    name: "media"
  }


export const softwarenav: Theme = {
    id: 1,
    title: "Software",
    content: "Open source projects.",
    image: "/images/water.jpg",
    page: ProjectsViewVue,
    tags: [
      "foo",
      "bar"
    ],
    date: "2023-02-20",
    author: "John Doe",
    type: "nav",
    name: "software"
  }


export const themes = [
    medianav,
    softwarenav,
    ripplenav,
  ]

export function getTheme(id: number): any {
    const object = themes.find(obj => obj.id === id);
    return object
}

export function getThemeByName(name: string): any {
  const object = themes.find(obj => obj.name === name);
  return object
}

export function getThemes(): Array<Theme> {
    const x: Array<Theme>  = []
    themes.forEach( (post) => {
        if(post.type === "nav"){
            x.push(post)
        }
    });

    return x
}
