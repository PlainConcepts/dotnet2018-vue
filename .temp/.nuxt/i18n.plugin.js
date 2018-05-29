import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, route, error, req }) => {
  const i18n = new VueI18n({"fallbackLocale":"en","messages":{"es":{"title":{"a":"a"}},"en":{"title":{"a":"a"}}}})
  app.i18n = i18n
  app.i18n.locales = [{"code":"es"},{"code":"en"}]
  app.i18n.defaultLocale = 'en'
  app.i18n.ignorePaths = []
  app.i18n.differentDomains = false
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {}
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {}

  // Get locale from params
  let locale = app.i18n.defaultLocale || null
  if (false) {
    const hostname = process.browser ?
      window.location.href.split('/')[2] : req.headers.host
    if (hostname) {
      const localeDomain = app.i18n.locales.find(l => l.domain === hostname)
      if (localeDomain) {
        locale = localeDomain.code
      }
    }
  } else {
    // Get locale from params
    app.i18n.locales.forEach(l => {
      const regexp = new RegExp('^/' + l.code + '(/.+)?')
      if (route.path.match(regexp)) {
        locale = l.code
      }
    })
    if (app.i18n.locales.findIndex(l => l.code === locale) === -1) {
      return error({ message: 'Page not found.', statusCode: 404 })
    }
  }
  app.i18n.locale = locale
  if (false) {
    const { loadLanguageAsync } = require('./i18n.utils')
    return loadLanguageAsync(app.i18n, app.i18n.locale)
  }
}
