import Carousel from "react-bootstrap/Carousel";
import Rainydays_01 from "../../../assets/images/projects_img/rainydays.jpeg";
import Krabistaycation_02 from "../../../assets/images/projects_img/krabistaycation.jpeg";
import Lightinghouse_03 from "../../../assets/images/projects_img/lightingHouse.jpeg";
import Littlegreen_04 from "../../../assets/images/projects_img/alittlegreenery-website.jpg";

function ImageSlides() {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Rainydays_01}
						alt="Rainydays Rain Jacket"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Krabistaycation_02}
						alt="Krabi vacation travel blog"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Lightinghouse_03}
						alt="Light and lamps online shop"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Littlegreen_04}
						alt="A Little greennery shop"
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default ImageSlides;
