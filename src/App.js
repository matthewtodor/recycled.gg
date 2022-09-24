import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/head-banner";
import Nav from "./components/nav";
import Home from "./pages/home";
const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<div className="App">
					<Router>
						<Banner />
						<Nav />
						<Home />
						{/* <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes> */}
					</Router>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
