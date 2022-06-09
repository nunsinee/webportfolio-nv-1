import Carousel from "react-bootstrap/Carousel";
import Rainydays_01 from "../../../assets/images/projects_img/rainydays.jpeg";
import Krabistaycation_02 from "../../../assets/images/projects_img/krabistaycation.jpeg";
import Lightinghouse_03 from "../../../assets/images/projects_img/lightingHouse.jpeg";
import Littlegreen_04 from "../../../assets/images/projects_img/alittlegreenery-website.jpg";
import Holidaze_05 from "../../../assets/images/projects_img/Holidaze.jpg";

function ImageSlides() {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<a href="https://nv-exam-project-2.netlify.app/hotel">
						<img
							className="d-block w-100"
							src={Holidaze_05}
							alt="Holidaze Hotel Booking"
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://rainnydays-nunsinee.netlify.app/">
						<img
							className="d-block w-100"
							src={Rainydays_01}
							alt="Rainydays Rain Jacket"
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://krabistaycation-update.netlify.app/">
						<img
							className="d-block w-100"
							src={Krabistaycation_02}
							alt="Krabi vacation travel blog"
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://nunsinee-viken-ma3-design02.netlify.app/">
						<img
							className="d-block w-100"
							src={Lightinghouse_03}
							alt="Light and lamps online shop"
						/>
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href="https://nunsinee-sp2.netlify.app/">
						<img
							className="d-block w-100"
							src={Littlegreen_04}
							alt="A Little greennery shop"
						/>
					</a>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default ImageSlides;
