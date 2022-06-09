import PortfolioCard from "../card/PortfolioCard";
import Pic_01 from "../../../assets/images/projects_img/alittlegreenery-website.jpg";
import Pic_02 from "../../../assets/images/projects_img/community-science-museum.jpeg";
import Pic_03 from "../../../assets/images/projects_img/krabistaycation.jpeg";
import Pic_04 from "../../../assets/images/projects_img/lightingHouse.jpeg";
import Pic_05 from "../../../assets/images/projects_img/rainydays.jpeg";
import Pic_06 from "../../../assets/images/projects_img/flowerpower.jpeg";

export default function Cards() {
	return (
		<>
			<PortfolioCard
				pic={Pic_01}
				altText="indoor plante"
				name="A Little Greenery "
				text="Strapi-api, Heroku, SASS, Web-responsive"
			/>
			<PortfolioCard
				pic={Pic_02}
				altText="Community Science Museum"
				name="Community science museum"
				text="HTML, CSS, Validation Form"
			/>
			<PortfolioCard
				pic={Pic_03}
				altText="Krabi vacation blog"
				name="Krabistaycation Traveling blog"
				text="Api, Headless CMS,blog,wordPress,Web-responsive"
			/>
			<PortfolioCard
				pic={Pic_04}
				altText="Lighting and Lamps shop"
				name="Lighting House"
				text="Icons, Image styled, Bootstrap, Web-responsive"
			/>{" "}
			<PortfolioCard
				pic={Pic_05}
				altText="Rainnydays Rain Jackets"
				name="Rainnydays Rain Jackets"
				text="ImageSlides by Vanilla JS, JavaScripts, E-commerce"
			/>
			<PortfolioCard
				pic={Pic_06}
				altText="Flower Shop"
				name="Flower Lover Shop"
				text="Api, Custom wordPress Theme, WooCommerce "
			/>
		</>
	);
}
