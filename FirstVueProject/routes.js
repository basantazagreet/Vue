import { createRouter, createWebHistory } from "vue-router";
import LanguageDemo from './components/language.vue'
import NotFound from './components/NotFound.vue'


const routes=[
{
    name: 'Language',
    path: '/language/:name',
    component: LanguageDemo,
},
{
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
}) ;
export default router;