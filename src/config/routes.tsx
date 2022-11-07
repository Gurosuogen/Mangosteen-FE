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

export const routes:RouteRecordRaw[] = [
    { path: '/', redirect:'/welcome' },
    {
        path: '/welcome',
        component: Welcome , 
        children: [
            { path:'',redirect:'/welcome/1', },
            { path:'1',components:{ main: First, footer: FirstActions }, },
            { path:'2',components:{ main: Second, footer: SecondActions}, },
            { path:'3',components:{ main: Third, footer: ThirdActions}, },
            { path:'4',components:{ main: Fourth, footer: FourthActions}, },
        ] 
    }
]