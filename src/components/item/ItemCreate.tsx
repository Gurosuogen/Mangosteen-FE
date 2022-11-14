import { defineComponent,PropType } from 'vue';
import { Icon } from '../../shared/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import s from './ItemCreate.module.scss'
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <MainLayout>{
                {
                    title: () => '记一笔',
                    icon: () => <Icon name="left" class={s.navIcon} />,
                    default: ()=> <>
                        <div>main</div>
                    </>
                }
            }</MainLayout>
        )
    }
})