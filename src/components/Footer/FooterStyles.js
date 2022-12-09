import styled from 'styled-components';

export const Box = styled.div`
	padding: 30px 60px;
	background: black;
	box-shadow: rgba(0, 0, 0, 0.29) 0px -12px 12px, rgba(0, 0, 0, 0.33) 0px -8px 8px, rgba(0, 0, 0, 0.53) 0px -3px 3px;

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
