import { RouteRecordRaw } from "vue-router"; 
import { Welcome } from "../views/Welcome"
import { First } from "../components/Welcome/First";
import { Second } from "../components/Welcome/Second";
import { Third } from "../components/Welcome/Third";
import { Fourth } from "../components/Welcome/Fourth";




export const routes:RouteRecordRaw[] = [
    { path: '/', redirect:'/welcome' },
    {
        path: '/welcome',
        component: Welcome , 
        children: [
            { path:'',redirect:'/welcome/1' },
            { path:'1',component:First },
            { path:'2',component:Second },
            { path:'3',component:Third },
            { path:'4',component:Fourth }
        ] 
    }
]