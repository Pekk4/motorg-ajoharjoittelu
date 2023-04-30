import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "@mui/material"

import AppHeader from "./Components/AppHeader"

const App = () => (
  <Container maxWidth="xl">
    <Router>
      <AppHeader />
    </Router>
  </Container>
)

export default App