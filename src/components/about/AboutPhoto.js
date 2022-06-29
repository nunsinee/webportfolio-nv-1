import Nunsinee from "../../assets/images/nunsinee-viken.jpg";

export default function AboutPhoto() {
	return (
		<>
			<div className="box-about">
				<img
					src={Nunsinee}
					alt="nunsinee viken"
					className="img-thumbnail"
				/>
				<div className="text-about">
					<div>
						<span className="innertext">Nunsinee Viken</span>
					</div>
				</div>
			</div>
		</>
	);
}
