import { mount } from '@vue/test-utils';
const App = {
  template: `
  <div>
  <div>Hello World</div>
  <h1></h1>
  </div>
  `
}

test("test App Component", function () {
  const wrapper = mount(App);
  expect(wrapper.text()).toBe('Hello World')
  console.log(wrapper)
})
// test("test App Component", function () {
//   const wrapper = mount(App, {
//     props: {
//       msg: "World"
//     }
//   });
//   expect(wrapper.text()).toBe('Hello')
// })