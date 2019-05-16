import React, { Component } from "react"
import { Router } from "@reach/router"


import MainLayout from "./layouts/MainLayout"
import Home from "./pages/index"
import Components from "./pages/components"

class App extends Component {
  render() {
    return (
      <MainLayout>
        <Router>
          <Home path={process.env.PUBLIC_URL + '/'} />
          <Components path={process.env.PUBLIC_URL + '/components'} />
        </Router>
      </MainLayout>
    )
  }
}

export default App;
