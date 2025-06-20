import { useRoutes } from "react-router"
import routes from "~react-pages"

function App() {

  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App


// bedst at bruge <video> tag til lyd, den kan også bare afspille lyd