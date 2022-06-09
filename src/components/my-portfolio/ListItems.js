import { ListGroup } from "react-bootstrap";
import { AiFillCheckSquare } from "react-icons/ai";

export default function ListItems(props) {
	return (
		<>
			<ListGroup>
				<ListGroup.Item>
					<AiFillCheckSquare />
					{props.children}
				</ListGroup.Item>
			</ListGroup>
		</>
	);
}
