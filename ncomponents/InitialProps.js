import MobileDetect from 'ua-parser-js'
import cookies from 'next-cookies'
import Cookie from 'universal-cookie'
import Router from 'next/router'
import { isEmpty } from 'lodash'

const getParams = obj => {
  const str = Object.keys(obj)
    .map(key => {
      return `${key}=${obj[key]}`
    })
    .join('&')
  return str
}

export default async ctx => {
  const { req, res, pathname, query } = ctx

  const { displayType } = cookies(ctx)


  let newDisplayType = displayType || ''

  if (!displayType) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const mobiledetect = new MobileDetect(userAgent)
    const deviceDetect = mobiledetect.getDevice()
    newDisplayType = deviceDetect.type ? 'mobile' : 'desktop'

    if (res) {
      res.setHeader('Set-Cookie', `displayType=${newDisplayType}; Path=/`)
    } else {
      const cookie = new Cookie()
      cookie.set('displayType', displayType, {
        expires: new Date().setFullYear(new Date().getFullYear() + 2),
        path: '/',
      })
    }
  }

  const { vSlug, slug, childSlug, id, page, listingSlug } = query
  const newQuery = { ...query }
  delete newQuery.vSlug
  delete newQuery.slug
  delete newQuery.childSlug
  const returnto = `${pathname
    .replace('[slug]', slug)
    .replace('[vSlug]', vSlug)
    .replace('[childSlug]', childSlug)
    .replace('[listingSlug]', listingSlug)
    .replace(/\/$/, '')}${isEmpty(newQuery) ? '' : '?'}${getParams(newQuery)}`

  if (newDisplayType === 'mobile' && !returnto.includes('/mobile')) {
    if (req) {
      res.writeHead(302, { Location: `/mobile${returnto}` })
      res.end()
    } else {
      Router.push(`/mobile${returnto}`)
    }
  } else if (newDisplayType === 'desktop' && returnto.startsWith('/mobile')) {
    if (req) {
      res.writeHead(302, { Location: returnto.slice(7) })
      res.end()
    } else {
      Router.push(returnto.slice(7))
    }
  }

  return { returnto }
}
