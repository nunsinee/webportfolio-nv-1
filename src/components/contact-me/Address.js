import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function Adress(props) {
	return (
		<div className="contact-container">
			<div className="contact-list">
				<h6>
					<FaMapMarkerAlt className="icon-contact" />
					Huageveien 9B Bergen
				</h6>
			</div>
			<div className="contact-list">
				<h6>
					<FaPhone className="icon-contact" />
					+47 484 60007
				</h6>
			</div>
			<div className="contact-list">
				<h6>
					<SiMaildotru className="icon-contact" />
					nunsinee@gmail.com
				</h6>
			</div>
		</div>
	);
}
