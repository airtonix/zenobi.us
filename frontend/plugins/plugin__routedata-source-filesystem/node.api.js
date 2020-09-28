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
    const handle = () => (
      routes
        .map(route => {
          const silo = config.find(silo => minimatch(route.path, silo.target))
          if (!silo) return route

          console.log(`${silo.target} matched ${route.path} for ${silo.source}`)

          const files = silo.source && routes
            .filter(route => {
              return minimatch(route.path, silo.source)
            })
            .map(file => ({
              ...file,
              ...expandRouteData(file.getData)
            }))
          if (!files) return route

          console.log(`${silo.target} found ${files.length} items`)

          return {
            ...route,
            getData: () => ({
              ...expandRouteData(route.getData),
              files
            })
          }
        })
    )

    return handle()
  },
})
