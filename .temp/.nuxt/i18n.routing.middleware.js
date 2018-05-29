import cookie from 'cookie'
import middleware from './middleware'
import { isIgnoredPath } from './i18n.routes.utils'

middleware['i18n'] = function ({ app, req, res, route, params, redirect, error, isHMR }) {
  const locales = [{"code":"es"},{"code":"en"}]
  const localeCodes = locales.map(l => l.code)
  const defaultLocale = 'en'
  // Check if middleware called from hot-reloading, ignore
  if (isHMR) return
  // Handle / redirection
  if (
    route.path === '/' &&
    '' &&
    localeCodes.includes('')) {
    redirect('//')
  }

  // Handle browser language detection
  if (false && req) {
    const useRedirectCookie = true
    const cookieKey = 'redirected'
    const cookies = req.headers && req.headers.cookie ?
      cookie.parse(req.headers.cookie) : {}
    // Redirect only if cookie not set yet
    if (
      typeof req.headers['accept-language'] !== 'undefined' &&
      ((useRedirectCookie && !cookies[cookieKey]) || !useRedirectCookie)
    ) {
      const browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
      // Set cookie
      if (useRedirectCookie && res) {
        const date = new Date()
        const redirectCookie = cookie.serialize(cookieKey, 1, {
          expires: new Date(date.setDate(date.getDate() + 365))
        })
        res.setHeader('Set-Cookie', redirectCookie)
      }
      // Redirect
      const routeName = route && route.name ? app.getRouteBaseName(route) : 'index';
      if (browserLocale !== app.i18n.locale && localeCodes.indexOf(browserLocale) !== -1) {
        app.i18n.locale = browserLocale
        redirect(app.localePath(Object.assign({}, route , {
          name: routeName
        })))
      }
    }
  }

  // Handle locale switch by using URL prefix
  if (!false && !isIgnoredPath(route, app.i18n.ignorePaths)) {
    let locale = defaultLocale
    locales.forEach(l => {
      const regexp = new RegExp('^/' + l.code + '(/.+)?')
      if (route.path.match(regexp)) {
        locale = l.code
      }
    })
    if (locales.findIndex(l => l.code === locale) === -1) {
      return error({ message: 'Page not found.', statusCode: 404 })
    }
    if (locale === app.i18n.locale) return
    const oldLocale = app.i18n.locale
    app.i18n.beforeLanguageSwitch(oldLocale, locale)
    if (false) {
      const { loadLanguageAsync } = require('./i18n.utils')
      loadLanguageAsync(app.i18n, locale)
        .then(() => {
          app.i18n.locale = locale
          app.i18n.onLanguageSwitched(oldLocale, locale)
        })
    } else {
      app.i18n.locale = locale
      app.i18n.onLanguageSwitched(oldLocale, locale)
    }
  }
}
