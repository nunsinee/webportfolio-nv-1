import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Col } from "react-bootstrap";

export default function ContactForm() {
	const form = useRef();
	const [sending, setSending] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_6noogkt",
				"template_xf6zs66",
				form.current,
				"user_aWHytTFfrwu1LGrf2zQBz"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent!");
					setSending(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<Form>
				{sending && (
					<Col sm>
						<Alert variant="info">
							<Alert.Heading>
								Thank you for your message!
							</Alert.Heading>
						</Alert>
					</Col>
				)}
			</Form>
			<Form ref={form} onSubmit={sendEmail}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						name="user_name"
						placeholder="Name"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Control
						type="email"
						name="user_email"
						placeholder="Email"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Control
						as="textarea"
						name="message"
						rows={3}
						placeholder="Write your message here"
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					value="Send"
					className="btn btn-dark submit"
				>
					Send
				</Button>
			</Form>
		</>
	);
}
