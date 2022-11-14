import { defineComponent,PropType } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
import s from './ItemPage.module.scss';

export const ItemPage = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <RouterView />
        )
    }
})