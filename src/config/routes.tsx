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
import { StartPage } from "../views/StartPage";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { ItemPage } from "../views/ItemPage";

export const routes:RouteRecordRaw[] = [
    { path: '/', redirect:'/welcome' },
    {
        path: '/welcome',
        component: Welcome , 
        children: [
            { path:'',redirect:'/welcome/1', },
            { path:'1',name:"Welcome1",components:{ main: First, footer: FirstActions }, },
            { path:'2',name:"Welcome2",components:{ main: Second, footer: SecondActions}, },
            { path:'3',name:"Welcome3",components:{ main: Third, footer: ThirdActions}, },
            { path:'4',name:"Welcome4",components:{ main: Fourth, footer: FourthActions}, },
        ] 
    },
    { path:'/start', component: StartPage },
    {
        path: '/items', component: ItemPage,
        children: [
            { path: '', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    }
]