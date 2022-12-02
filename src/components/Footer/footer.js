import React from "react";
import {
Box,
Container,
Row,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Cats4LYF: Group A " Dave, Kian , Charine , Max and Jack"
	</h1>
	<br/>

	<hr/>
	<Container>
	<br/>
	<br/>
		<Row>
		<Heading>About Us</Heading>
		<Heading>Services</Heading>
		<Heading>Contact Us</Heading>
		<Heading>Social Media</Heading>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
