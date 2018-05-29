import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _579a4236 = () => import('../../app/pages/logout.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _77f8d55e = () => import('../../app/pages/login.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _cb1e9280 = () => import('../../app/pages/wizard/wizard.page.html.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _6b264f28 = () => import('../../app/pages/cards/cards.page.html.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _7c06e7c0 = () => import('../../app/pages/training/training.page.html.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _a35d9b72 = () => import('../../app/pages/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/FooCards-Nuxt/',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/es/logout",
			component: _579a4236,
			name: "logout-es"
		},
		{
			path: "/logout",
			component: _579a4236,
			name: "logout-en"
		},
		{
			path: "/es/login",
			component: _77f8d55e,
			name: "login-es"
		},
		{
			path: "/login",
			component: _77f8d55e,
			name: "login-en"
		},
		{
			path: "/es/wizard",
			component: _cb1e9280,
			name: "wizard-es"
		},
		{
			path: "/wizard",
			component: _cb1e9280,
			name: "wizard-en"
		},
		{
			path: "/es/cards",
			component: _6b264f28,
			name: "cards-es"
		},
		{
			path: "/cards",
			component: _6b264f28,
			name: "cards-en"
		},
		{
			path: "/es/training",
			component: _7c06e7c0,
			name: "training-es"
		},
		{
			path: "/training",
			component: _7c06e7c0,
			name: "training-en"
		},
		{
			path: "/es",
			component: _a35d9b72,
			name: "index-es"
		},
		{
			path: "/",
			component: _a35d9b72,
			name: "index-en"
		}
    ],
    
    
    fallback: false
  })
}
