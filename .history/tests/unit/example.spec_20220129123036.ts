import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/imgData'
import Img from '@/components/imgData'

describe('Img.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Img, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
test('two + two = four', () => {
  expect(2 + 2).toBe(4)
})
