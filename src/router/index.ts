import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/inline/SoftwareView.vue'
import NewsView from '../views/NewsView.vue'
import article from  '../components/article/article.vue'
import theme from '../components/article/theme.vue'
import ProjectsRootView from '../views/ProjectsView.vue'
import notfound from '../components/core/notfound.vue'

// To learn more on routing: https://router.vuejs.org/guide/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/software',
      name: 'software',
      component: ProjectsView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsRootView
    },
    { path: '/post/:id', name: 'post', component: article, props: true},
    { 
      path: '/project/:name', 
      name: 'project', 
      component: theme, 
      props: true,
     },
    { path:'/:pathMatch(.*)*', component: notfound }
  ]
})

export default router
