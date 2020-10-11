/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react')

const { GatsbyRootContainer } = require('./src/containers/GatsbyRootContainer')
/* eslint-enable @typescript-eslint/no-var-requires */

exports.wrapRootElement = ({ element }) => {
  return (
    <GatsbyRootContainer>
      {element}
    </GatsbyRootContainer>
  )
}
