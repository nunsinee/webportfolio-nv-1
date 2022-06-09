import Paragraph from "../typography/Paragraph";
import Button from "react-bootstrap/Button";
import HightlightText from "./HightlightText";

export default function HomeContent() {
	return (
		<>
			<HightlightText />
			<Paragraph>
				Hi, I am <b>Nunsinee Viken</b> and I currently studying
				front-end web development at NOROFF and I am looking for an
				opportunity to start work as a front-end web developer.
			</Paragraph>
			<Button className="btn btn-dark gettoknow" href="/about">
				Get to know me
			</Button>
		</>
	);
}
