import { defineComponent, onMounted, PropType, ref } from 'vue';
import s from './LineChart.module.scss';
import * as echarts from 'echarts';
import { Time } from '../../shared/time';
import { getMoney } from '../../shared/Money';

const echartsOption = {
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: ([item]: any) => {
            const [x, y] = item.data
            return `${new Time(new Date(x)).format('YYYY年MM月DD日')} ￥${getMoney(y)}`
        },
    },
    grid: [{ left: 16, top: 20, right: 16, bottom: 20 }],
    xAxis: {
        type: 'time',
        boundaryGap: ['3%', '0%'],
        axisLabel: {
            formatter: (value: string) => new Time(new Date(value)).format('MM-DD'),
        },
        axisTick: {
            alignWithLabel: true,
        },
    },
    yAxis: {
        show: true,
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLabel: {
            show: false,
        },
    },
}

export const LineChart = defineComponent({
    setup: (props, context) => {
        const refDiv = ref<HTMLDivElement>()
        const data = [
            ['2022-01-01T00:00:00.000+0800', 150],
            ['2022-01-02T00:00:00.000+0800', 230],
            ['2022-01-03T00:00:00.000+0800', 224],
            ['2022-01-04T00:00:00.000+0800', 218],
            ['2022-01-05T00:00:00.000+0800', 135],
            ['2022-01-06T00:00:00.000+0800', 147],
            ['2022-01-07T00:00:00.000+0800', 260],
            ['2022-01-08T00:00:00.000+0800', 300],
            ['2022-01-09T00:00:00.000+0800', 200],
            ['2022-01-10T00:00:00.000+0800', 300],
            ['2022-01-11T00:00:00.000+0800', 400],
            ['2022-01-12T00:00:00.000+0800', 500],
            ['2022-01-13T00:00:00.000+0800', 400],
            ['2022-01-14T00:00:00.000+0800', 300],
            ['2022-01-15T00:00:00.000+0800', 200],
            ['2022-01-16T00:00:00.000+0800', 100],
            ['2022-01-17T00:00:00.000+0800', 200],
            ['2022-01-18T00:00:00.000+0800', 300],
            ['2022-01-19T00:00:00.000+0800', 400],
            ['2022-01-20T00:00:00.000+0800', 500],
            ['2022-01-21T00:00:00.000+0800', 600],
            ['2022-01-22T00:00:00.000+0800', 700],
            ['2022-01-23T00:00:00.000+0800', 800],
            ['2022-01-24T00:00:00.000+0800', 900],
            ['2022-01-25T00:00:00.000+0800', 1000],
            ['2022-01-26T00:00:00.000+0800', 1100],
            ['2022-01-27T00:00:00.000+0800', 1200],
            ['2022-01-28T00:00:00.000+0800', 1300],
            ['2022-01-29T00:00:00.000+0800', 1400],
            ['2022-01-30T00:00:00.000+0800', 1500],
            ['2022-01-31T00:00:00.000+0800', 1600],
        ]
        onMounted(() => {
            if (refDiv.value === undefined) { return }
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(refDiv.value);
            // 绘制图表
            myChart.setOption({
                ...echartsOption,
                series: [{
                    data: data,
                    type: 'line'
                }]
            });

        })
        return () => (
            <div ref={refDiv} class={s.wrapper}></div>
        )
    }
})