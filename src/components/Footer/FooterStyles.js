import styled from 'styled-components';

export const Box = styled.div`
	padding: 40px 60px;
	background: black;
	`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	`
export const Row = styled.div`
	display: flex;
	justify-content:space-around;
	`

export const Heading = styled.p`
	font-size: 24px;
	color: #ccc;
	margin-bottom: 20px;
	cursor:pointer;
		&:hover {
			color: blue;
			transition: 200ms ease-in;
		}
	`

export const ColouredHeading = styled.p`
	font-size: 34px;
	font-weight: bold;
	color: green;
	margin-bottom: 20px;
	`

export const OutboundLink = styled.a`
text-decoration:none;
color: green;
cursor:pointer;
	&:hover{
		color: blue;
		transition: 200ms ease-in;
	}
`
