import { RouteRecordRaw } from "vue-router";
import { First } from "../components/Welcome/First";
import { FirstActions } from "../components/Welcome/FirstActions";
import { Second } from "../components/Welcome/Second";
import { SecondActions } from "../components/Welcome/SecondActions";
import { Third } from "../components/Welcome/Third";
import { ThirdActions } from "../components/Welcome/ThirdActions";
import { Fourth } from "../components/Welcome/Fourth";
import { FourthActions } from "../components/Welcome/FourthActions";
import { Welcome } from "../views/Welcome"
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { ItemPage } from "../views/ItemPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { TagPage } from "../views/TagPage";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { http } from "../shared/Http";
import { ComingSoon } from "../shared/ComingSoon";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: () => import('../views/Welcome'),
        beforeEnter: (to, from, next) => {
            localStorage.getItem('skipFeatures') === 'yes' ? next('/items') : next()
        },
        children: [
            { path: '', redirect: '/welcome/1' },
            { path: '1', name: "Welcome1", components: { main: First, footer: FirstActions }, },
            { path: '2', name: "Welcome2", components: { main: Second, footer: SecondActions }, },
            { path: '3', name: "Welcome3", components: { main: Third, footer: ThirdActions }, },
            { path: '4', name: "Welcome4", components: { main: Fourth, footer: FourthActions }, },
        ]
    },
    {
        path: '/items', component: () => import('../views/ItemPage'),
        children: [
            { path: '', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    },
    {
        path: '/tags', component: ()=> import('../views/TagPage'),
        children: [
            { path: 'create', component: ()=> import('../components/tag/TagCreate') },
            { path: ':id/edit', component: ()=> import('../components/tag/TagEdit') }
        ]
    },
    {
        path: '/sign_in', component: ()=> import('../views/SignInPage'),
    },
    {
        path: '/statistics', component: ()=> import('../views/StatisticsPage'),
    },
    {
        path: '/export', component: ()=> import('../shared/ComingSoon'),
    },
    {
        path: '/notify', component: ComingSoon,
    }
]