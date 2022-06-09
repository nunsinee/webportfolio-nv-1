import SubOfSubHeading from "../typography/SubOfSubHeading";
import CardIcon from "./CardIcon";
import { Col } from "react-bootstrap";

export default function SkillLists() {
	return (
		<>
			<SubOfSubHeading title="Intermediate level" />

			<Col xs={12} className="skills-container">
				<CardIcon>Html</CardIcon>
				<CardIcon>CSS</CardIcon>
				<CardIcon>SASS</CardIcon>
				<CardIcon>JavaScript</CardIcon>
				<CardIcon>WordPress</CardIcon>
				<CardIcon>Bootstrap</CardIcon>
				<CardIcon>Adobe XD</CardIcon>
				<CardIcon>Adobe PhotoShop</CardIcon>
				<CardIcon>Styled-Components</CardIcon>
				<CardIcon>React</CardIcon>
				<CardIcon>Next.js</CardIcon>
				<CardIcon>Heroku</CardIcon>
				<CardIcon>Strapi</CardIcon>
				<CardIcon>Netlify</CardIcon>
			</Col>
			<SubOfSubHeading title="Beginers level" />
			<Col xs={12} className="skills-container">
				<CardIcon>Node.js</CardIcon>
				<CardIcon>TypeScript</CardIcon>
				<CardIcon>Illustrator</CardIcon>
			</Col>
		</>
	);
}
