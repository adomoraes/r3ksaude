import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import OQueE from "./pages/OQueE"
import QuemSomos from "./pages/QuemSomos"
import Canais from "./pages/Canais"
import Cases from "./pages/Cases"

function AppRouter() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<OQueE />} />
				<Route path='/quem-somos' element={<QuemSomos />} />
				<Route path='/canais' element={<Canais />} />
				<Route path='/cases' element={<Cases />} />
			</Routes>
		</Router>
	)
}

export default AppRouter
