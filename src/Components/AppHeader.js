import { Toolbar, AppBar, IconButton, Button } from "@mui/material"
import { Routes, Route, Link, useMatch } from "react-router-dom"

import AjoHarjoittelu from "./AjoHarjoittelu"
import Home from "./Home"
import BottomBar from "./BottomBar"

const AppHeader = (props) => {
  return (
    <div>
        <AppBar position="static">
        <Toolbar>
            <Button color="inherit" component={Link} to="/ajoharjoittelu" id="harjoittelu">
            Ajoharjoittelu
            </Button>
            <Button color="inherit">
            Kurssit
            </Button>
            <Button color="inherit">
            Liputtaminen
            </Button>
            <Button color="inherit">
            Moottoriradat
            </Button>
            <Button color="inherit">
            Tapahtumat
            </Button>
            <Button color="inherit">
            Kauppa
            </Button>
        </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ajoharjoittelu" element={<AjoHarjoittelu />}></Route>
        </Routes>
        <BottomBar />
    </div>
  )
}

export default AppHeader