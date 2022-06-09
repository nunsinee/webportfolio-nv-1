export default function Heading(props) {
	const heaingStyle = {
		color: props.colour,
	};

	return <h1 style={heaingStyle}>{props.title}</h1>;
}
