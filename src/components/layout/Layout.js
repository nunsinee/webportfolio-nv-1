import { Container, Navbar, Nav } from "react-bootstrap";
import Wrapper from "./Wrapper";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Portfolio from "../my-portfolio/Portfolio";
import About from "../about/About";
import Contact from "../contact-me/Contact";
import logo from "../../assets/images/nv_logo.svg";
import Footer from "../layout/Footer";

function Layout() {
	return (
		<Wrapper>
			<BrowserRouter>
				<Navbar bg="dark" variant="dark" expand="lg" className="menu">
					<Container>
						<Navbar.Brand href="/">
							<img src={logo} alt="logo" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<NavLink exact to="/" className="nav-link">
									Home
								</NavLink>
								<NavLink
									exact
									to="/my-portfolio"
									className="nav-link"
								>
									Portfolio
								</NavLink>
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
								<NavLink to="/contact-me" className="nav-link">
									Contact
								</NavLink>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="my-portfolio" element={<Portfolio />} />
					<Route path="contact-me" element={<Contact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</Wrapper>
	);
}

export default Layout;
