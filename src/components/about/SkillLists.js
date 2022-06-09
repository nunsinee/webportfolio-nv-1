import SubOfSubHeading from "../typography/SubOfSubHeading";
import CardIcon from "./CardIcon";

export default function SkillLists() {
	return (
		<>
			<SubOfSubHeading title="Intermediate level" />
			<div className="skills-container">
				<CardIcon>Html</CardIcon>
				<CardIcon>CSS</CardIcon>
				<CardIcon>SASS</CardIcon>
				<CardIcon>JavaScript</CardIcon>
				<CardIcon>WordPress</CardIcon>
				<CardIcon>Bootstrap</CardIcon>
				<CardIcon>Adobe XD</CardIcon>
				<CardIcon>Adobe PhotoShop</CardIcon>
			</div>
			<SubOfSubHeading title="Beginers level" />
			<div className="skills-container">
				<CardIcon>Node.js</CardIcon>
				<CardIcon>React</CardIcon>
				<CardIcon>TypeScript</CardIcon>
				<CardIcon>Illustrator</CardIcon>
			</div>
		</>
	);
}
