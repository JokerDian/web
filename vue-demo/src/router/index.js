import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      components: require('@/views/test')
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      components: require('@/components/HelloWorld')
    }
  ]
})
