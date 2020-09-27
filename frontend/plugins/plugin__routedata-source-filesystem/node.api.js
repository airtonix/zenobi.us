import { isFunction } from 'lodash'
import minimatch from 'minimatch'
import glob from 'glob'

function expandRouteData (data) {
  return isFunction(data)
    ? data()
    : {}
}

export default (config) => ({
  getRoutes: async (routes, state) => {
    return routes
      .map(route => {
        const silo = config.find(silo => minimatch(route.path, silo.target))
        if (!silo) return route

        console.log(`${silo.target} matched ${route.path} for ${silo.source}`)

        const children = silo.source && routes
          .filter(route => {
            return minimatch(route.path, silo.source)
          })
          .map(child => ({
            ...child,
            ...expandRouteData(child.getData)
          }))
        if (!children) return route

        console.log(`${silo.target} found ${children.length} items`)

        return {
          ...route,
          getData: () => ({
            ...expandRouteData(route.getData),
            children
          })
        }
      })
  },
})
