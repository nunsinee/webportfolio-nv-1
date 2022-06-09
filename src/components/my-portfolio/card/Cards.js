import PortfolioCard from "../card/PortfolioCard";
import Pic_01 from "../../../assets/images/projects_img/alittlegreenery-website.jpg";
import Pic_02 from "../../../assets/images/projects_img/community-science-museum.jpeg";
import Pic_03 from "../../../assets/images/projects_img/krabistaycation.jpeg";
import Pic_04 from "../../../assets/images/projects_img/lightingHouse.jpeg";
import Pic_05 from "../../../assets/images/projects_img/rainydays.jpeg";
import Pic_06 from "../../../assets/images/projects_img/flowerpower.jpeg";
import Pic_07 from "../../../assets/images/projects_img/yey-company.jpg";
import Pic_08 from "../../../assets/images/projects_img/Holidaze.jpg";
import Pic_09 from "../../../assets/images/projects_img/flower_information.jpg";
import Pic_10 from "../../../assets/images/projects_img/js_framework_2.jpg";
import Pic_11 from "../../../assets/images/projects_img/webportfolio-2.jpg";

export default function Cards() {
	return (
		<>
			<PortfolioCard
				pic={Pic_08}
				altText="Holidaze Bergen Hotel Booking"
				name="Holidaze Bergen Hotel Booking "
				text="React,React-bootstrap,Heroku, Strapi Sass,Login Form"
				githublink="https://github.com/Noroff-FEU-Assignments/project-exam-2-nunsinee"
				liveweb="https://nv-exam-project-2.netlify.app/hotel"
			/>
			<PortfolioCard
				pic={Pic_07}
				altText="Yey Company"
				name="Yey Company Web Design "
				text="React-bootstrap, Styled-component, Web-responsive"
				githublink="https://github.com/nunsinee/css-frameworks-ca-nv"
				liveweb="https://vercel.com/nunsinee/css-frameworks-ca-nv"
			/>
			<PortfolioCard
				pic={Pic_09}
				altText="Flower Information"
				name="Flower Information "
				text="React,React-bootstrap,Strapi Sass,Login Form"
				githublink="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-nunsinee"
				liveweb="https://nv-js-frameworks-2.netlify.app/"
			/>

			<PortfolioCard
				pic={Pic_11}
				altText="Web Portfolio 2"
				name="Web Portfolio 2"
				text="Next.js, React, Sass, React-Bootstrap"
				githublink="https://github.com/nunsinee/webportfolio-2"
				liveweb="https://webportfolio-2.vercel.app/"
			/>

			<PortfolioCard
				pic={Pic_10}
				altText="Flower Information"
				name="Flower Information"
				text="Api, Login Form, React"
				githublink="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-nunsinee"
				liveweb="https://nv-js-frameworks-2.netlify.app/"
			/>
			<PortfolioCard
				pic={Pic_01}
				altText="indoor plante"
				name="A Little Greenery "
				text="Strapi-api, Heroku, SASS, Web-responsive"
				githublink="https://github.com/nunsinee/semester-project"
				liveweb="https://nunsinee-sp2.netlify.app/"
			/>
			<PortfolioCard
				pic={Pic_02}
				altText="Community Science Museum"
				name="Community science museum"
				text="HTML, CSS, Validation Form"
				githublink="https://github.com/nunsinee/semester01"
				liveweb="https://semester-project01.netlify.app/"
			/>
			<PortfolioCard
				pic={Pic_03}
				altText="Krabi vacation blog"
				name="Krabistaycation Traveling blog"
				text="Api, Headless CMS,blog,wordPress,Web-responsive"
				githublink="https://github.com/nunsinee/krabistaycation-update"
				liveweb="https://krabistaycation-update.netlify.app/"
			/>
			<PortfolioCard
				pic={Pic_04}
				altText="Lighting and Lamps shop"
				name="Lighting House"
				text="Icons, Image styled, Bootstrap, Web-responsive"
				githublink="https://github.com/nunsinee/design2-ma3/tree/main"
				liveweb="https://nunsinee-viken-ma3-design02.netlify.app/"
			/>
			<PortfolioCard
				pic={Pic_05}
				altText="Rainnydays Rain Jackets"
				name="Rainnydays Rain Jackets"
				text="ImageSlides by Vanilla JS, JavaScripts, E-commerce"
				githublink="https://rainnydays-nunsinee.netlify.app/"
				liveweb="https://github.com/nunsinee/rainydays"
			/>
			<PortfolioCard
				pic={Pic_06}
				altText="Flower Shop"
				name="Flower Lover Shop"
				text="Api, Custom wordPress Theme, WooCommerce "
				githublink="#"
				liveweb="https://www.flowerlover.casa/"
			/>
		</>
	);
}
