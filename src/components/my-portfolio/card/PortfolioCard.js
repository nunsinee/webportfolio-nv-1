import Card from "react-bootstrap/Card";
import { Col, Button } from "react-bootstrap";

function PortfolioCard({ pic, altText, name, text, githublink, liveweb }) {
	return (
		<>
			<Col xs={12} md={6} lg={4} className="marginBottom">
				<Card>
					<Card.Img variant="top" src={pic} alt={altText} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
					<Button
						variant="light"
						href={githublink}
						className="btn-light--project-link"
					>
						View Github
					</Button>
					<Button
						variant="warning"
						className="btn-warning--project-link"
						href={liveweb}
					>
						Live Web
					</Button>
				</Card>
			</Col>
		</>
	);
}

export default PortfolioCard;
