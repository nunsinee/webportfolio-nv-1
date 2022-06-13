import Heading from "../typography/Heading";
import { Container, Row, Col } from "react-bootstrap";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";
import SkillLists from "./SkillLists";
import AboutPhoto from "./AboutPhoto";

import myPDF from "../../assets/download-file/cv_nunsinee_viken.pdf";

export default function About() {
	return (
		<>
			<Container>
				<Heading title="About Me.." />
				<hr />
				<Container className="content">
					<Row>
						<Col xs={12} lg={4} className="col-content">
							<Paragraph>
								Hi, I am <b>Nunsinee Viken</b> and I currently
								studying front-end web development at NOROFF and
								I am looking for an opportunity to start work as
								a front-end web developer.
							</Paragraph>
							<Paragraph>
								I have previously worked as IT support/Comuter
								support and I have some previous experiences in
								making websites with Dreamweaver, photoshop and
								Wordpress. I also have experience in updating
								news online, as well as designing web pages for
								statistics. After this I changed to work in the
								tourism industry in my native country.
							</Paragraph>
							<Paragraph>
								After moving to Norway in 2018, I decided to
								study in front-end development to improve my
								skills and knowledges as I would like to
								continue working with development of web sites.
							</Paragraph>
							<Paragraph>
								I am open-mind, multilingual, hardworking and
								find it easy to adopt to new environments,
								therefore I believe I would be an asset for
								those offering me the opportunity to grow with
								them. Please feel free to contact me to get to
								know me even more.
							</Paragraph>
						</Col>
						<Col xs={12} lg={4}>
							<AboutPhoto />
						</Col>
						<Col xs={12} lg={4}>
							<SubHeading subtitle="Skills & Level" />
							<SkillLists />
							<a href={myPDF} download="cv_nunsinee_viken.pdf">
								<SubHeading subtitle="Download Resume" />
							</a>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
