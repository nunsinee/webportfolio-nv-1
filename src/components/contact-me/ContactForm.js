import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
	return (
		<>
			<Form>
				<Form.Group className="mb-3">
					<Form.Control type="text" placeholder="Name" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write your message here"
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					className="btn btn-dark submit"
				>
					Submit
				</Button>
			</Form>
		</>
	);
}
