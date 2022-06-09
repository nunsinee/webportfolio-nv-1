import { Container, Col } from "react-bootstrap";

function Footer() {
	return (
		<>
			<div className="footer">
				<Container className="foot">
					<div className="icons-container">
						<Col className="icons-container">
							<a
								href="https://github.com/nunsinee"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="icon-category icon-github"></div>
							</a>
							<a
								href="https://www.linkedin.com/in/nunsinee/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="icon-category icon-linkedin"></div>
							</a>
							<a
								href="https://twitter.com/MimInNorway"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="icon-category icon-twitter"></div>
							</a>
							<a
								href="https://www.facebook.com/Krabi-Islander-106733358584511"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="icon-category icon-facebook"></div>
							</a>
						</Col>
					</div>

					<Col>Nunsinee@gmail.com</Col>
					<Col className="copyright">
						Copyright © 2022 Nunsinee-Viken. All rights reserved.
					</Col>
				</Container>
			</div>
		</>
	);
}

export default Footer;
