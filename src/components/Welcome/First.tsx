import s from './welcome.module.scss'
import { FunctionalComponent } from 'vue';
export const First:FunctionalComponent = () => {
        return (
            <div class={s.card}>
                <svg>
                    <use xlinkHref='#pig'></use>
                </svg>
                <h2>每日提醒<br/>不遗漏每一笔账单</h2>
            </div>
        )
}
First.displayName = 'First'