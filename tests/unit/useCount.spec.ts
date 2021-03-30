import useCount from '@/hooks/useCount'
import { shallowMount } from '@vue/test-utils'
import { defineComponent } from '@vue/composition-api'
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

const app = defineComponent({
    template: `<div class="temp">{{count}}</div>`,
    setup() {
        const {count,inc} = useCount()
        inc();
        expect(count.value).toBe(-1)
        return {
            count
        }
    }
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const component = Vue.extend(app)

describe('test hook', () => {
    it('test',() => {
        const wrapper = shallowMount(component)
        expect(wrapper.text()).toMatch('-1')
    })
})