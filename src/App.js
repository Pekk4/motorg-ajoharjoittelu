import { BrowserRouter as Router } from "react-router-dom"

import styles from "./index.css"
import Banner from "./Components/Banner"
import BottomBar from "./Components/BottomBar"
import AppRoutes from "./Components/AppRoutes"

const App = () => (
  <div>
    <Router>
      <Banner />
      <AppRoutes />
    </Router>
    <BottomBar />
  </div>
)

export default App