import React from "react";
import {
	Box,
	Container,
	Row,
	Heading,
	ColouredHeading,
	OutboundLink
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<ColouredHeading id="coloured">	Cats4LYF: Group A </ColouredHeading>
					<ColouredHeading id="coloured"> <OutboundLink href="https://github.com/kianZare/"> Kian </OutboundLink> </ColouredHeading>
					<ColouredHeading id="coloured"> <OutboundLink href="https://github.com/Chadrine-Azimendem/" > Chadrine </OutboundLink></ColouredHeading>
					<ColouredHeading id="coloured">	<OutboundLink href="https://github.com/mcowen6/ "> Max </OutboundLink></ColouredHeading>
					<ColouredHeading id="coloured"> Jack </ColouredHeading>
					<ColouredHeading id="coloured"><OutboundLink href="https://github.com/davejlhale/">	Dave </OutboundLink></ColouredHeading>
				</Row>
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
