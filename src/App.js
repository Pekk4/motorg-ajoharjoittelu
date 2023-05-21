import { BrowserRouter as Router } from "react-router-dom"

import styles from "./index.css"
import Banner from "./Components/Banner"
import BottomBar from "./Components/BottomBar"
import AppRoutes from "./Components/AppRoutes"

const App = () => (
  <div className="h-[100vh]">
    <Router>
      <Banner />
      <div className="max-h-[90vh] overflow-y-auto pb-14">
        <AppRoutes />
      </div>
    </Router>
    <BottomBar />
  </div>
)

export default App