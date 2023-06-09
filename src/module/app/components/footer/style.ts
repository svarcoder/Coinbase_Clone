import styled from "styled-components";
import { screenSizes } from "../../../../shared/style/theme";

export const FooterContainer = styled.div`
	width: 100%;
	background: white;
`;
export const MainFooter = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0px auto;
	text-align: center;
	padding: 80px 40px;
	max-width: 1000px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
	}
`;
export const FooterLeft = styled.div`
	max-width: 200px;
	text-align: left;
`;
export const FooterLeftTitle = styled.div`
	color: #0052ff;
	font-size: 30px;
	font-weight: 500;
	cursor: pointer;
`;
export const FooterLeftBody = styled.select`
	width: 100%;
	height: 35px;
	background: white;
	color: gray;
	padding-left: 5px;
	font-size: 14px;
	margin: 20px 0px;
	border-radius: 4px;
	border: 1px solid gray;
	option {
		color: black;
		background: white;
		display: flex;
		white-space: pre;
		min-height: 20px;
		padding: 0px 2px 1px;
	}
	&:hover {
		border-radius: 4px;
		border: 1px solid #0052ff;
	}
`;
export const FooterDescription = styled.div`
	display: flex;
	font-size: 16px;
	line-height: 1.3;
	opacity: 0.7;
	color: rgb(17, 51, 85);
	text-decoration: none;
	margin-top: 0px;
	margin-bottom: 10px;
`;
export const FooterSocial = styled.div`
	display: flex;
	font-size: 16px;
	line-height: 1.3;
	opacity: 0.7;
	color: rgb(17, 51, 85);
	text-decoration: none;
`;
export const FooterRight = styled.div`
	display: flex;
	text-align: right;
	max-width: 1000px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		margin: 20px 0px;
	}
`;
export const FooterRightLeft = styled.div`
	margin-left: 150px;
	text-align: left;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: unset;
	}
`;
export const FooterRightLeftUpBodyEl = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-bottom: 10px;
	&:hover {
		color: #0052ff;
		text-decoration: underline;
	}
`;
export const FooterRightLeftUp = styled.div``;
export const FooterRightLeftUpTitle = styled.div`
	margin-bottom: 12px;
	margin-top: 0px;
	font-size: 16px;
	font-weight: 500;
	color: rgb(17, 51, 85);
`;
export const FooterRightLeftUpBody = styled.div`
	font-size: 16px;
	line-height: 1.3;
	opacity: 0.7;
	color: rgb(17, 51, 85);
	text-decoration: none;
`;
export const FooterRightLeftDown = styled.div``;
export const FooterRightMiddle = styled.div`
	margin: 0px 40px;
	text-align: left;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: unset;
	}
`;
export const FooterRightMiddleUp = styled.div``;
export const FooterRightMiddleMiddle = styled.div``;
export const FooterRightMiddleDown = styled.div``;
export const FooterRightRight = styled.div`
	margin: 0px 40px;
	text-align: left;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: unset;
	}
`;
export const FooterRightRightUp = styled.div``;
