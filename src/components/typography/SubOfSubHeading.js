export default function SubOfSubHeading(props) {
	const subHeaingStyle = {
		color: props.colour,
		fontSize: props.fontSize,
	};

	return <h4 style={subHeaingStyle}>{props.title}</h4>;
}
