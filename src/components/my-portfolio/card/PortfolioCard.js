import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function PortfolioCard({ pic, altText, name, text }) {
	return (
		<>
			<Col xs={12} md={6} lg={4} className="marginBottom">
				<Card>
					<Card.Img variant="top" src={pic} alt={altText} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{text}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default PortfolioCard;
