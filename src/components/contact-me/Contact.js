import Heading from "../typography/Heading";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Address from "./Address";

export default function Contact() {
	return (
		<>
			<Container>
				<Heading title="Contact" />
				<hr />
				<Container className="content">
					<Row>
						<Col xs={12} lg={6}>
							<Heading colour="#033e57" title="Address" />
							<Address />
						</Col>
						<Col xs={12} lg={6}>
							<ContactForm />
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
