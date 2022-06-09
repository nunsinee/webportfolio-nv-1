import Heading from "../typography/Heading";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./card/Cards";
import ListItems from "./ListItems";
import SubOfSubHeading from "../typography/SubOfSubHeading";

export default function Portfolio() {
	return (
		<>
			<Container>
				<Heading title="Portfolio" />
				<hr />
				<Container className=" content">
					<Row>
						<Cards />
					</Row>
					<Row>
						<SubOfSubHeading
							colour="#033e57"
							fontSize="30px"
							title="Knowledges& Skills"
						/>
						<Col xs={12} md={4} lg={6}>
							<ListItems>
								HTML, CSS, SASS, Styled-components& CSS Module
							</ListItems>
							<ListItems>Vanilla JavaScript</ListItems>
							<ListItems>React, TypeScript</ListItems>
							<ListItems>
								Illastrator, Adobe PhotoShop& Adobe XD
							</ListItems>
							<ListItems>Bootstrap, wordPress,Strapi</ListItems>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
