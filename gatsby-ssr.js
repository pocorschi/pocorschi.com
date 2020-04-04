const React = require("react")
const AppContext = require("./src/context/AppContext")
  .default

exports.wrapRootElement = ({ element }) => {
  return <AppContext>{element}</AppContext>
}
