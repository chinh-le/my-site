import { shallowMount } from '@vue/test-utils'
import AppCardList from '@/components/AppCardList.vue'

describe('AppCardList', () => {
  it('renders li for each item in props.items', () => {
    const items = [{}, {}]
    const wrapper = shallowMount(AppCardList, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    const items = [
      {
        order: 3
      },
      {
        order: 2
      }
    ]
    const wrapper = shallowMount(AppCardList, {
      propsData: { items }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <ul>
        <li>
          <basecard-stub item="[object Object]"></basecard-stub>
        </li>
        <li>
          <basecard-stub item="[object Object]"></basecard-stub>
        </li>
      </ul>
    `)
  })
})
