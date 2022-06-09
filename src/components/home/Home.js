import Heading from "../typography/Paragraph";
import { Container, Row, Col } from "react-bootstrap";
import ImageSlides from "./carousel/ImageSlides";
import HomeContent from "./HomeContent";

export default function Home() {
	return (
		<>
			<Container>
				<Heading title="Home" />
				<hr />
				<Container className=" content">
					<Row>
						<Col xs={12} lg={6}>
							<HomeContent />
						</Col>

						<Col xs={12} lg={6}>
							<ImageSlides />
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
