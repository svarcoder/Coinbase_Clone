import styled from "styled-components";
import { screenSizes } from "../../../../shared/style/theme";

export const NavContainer = styled.div`
	height: 60px;
	width: 100%;
	box-sizing: content-box;
	border-bottom: 1px solid rgb(236, 239, 241);
	position: fixed;
	z-index: 2;
	background: white;
`;
export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 0px 20px;
	text-align: center;
	max-width: 1200px;
	top: 0px;
`;

export const NavEl1Child = styled.div`
	background: rgb(255, 255, 255);
	text-align: left;
	position: absolute;
	z-index: 2;
	top: 3.8rem;
	left: 0px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid rgb(236, 239, 241);
	pointer-events: all;
	display: none;
	padding: 45px;
	opacity: 1;
	visibility: visible;
	transition: position 150ms linear 1s;
	box-shadow: rgb(0 0 0 / 8%) 0px 3px 10px;
`;

export const NavContainerMain = styled.div`
	display: flex;
	flex: 6 1 0%;
	justify-content: center;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;

export const NavLeft = styled.div`
	justify-content: flex-start;
	line-height: 60px;
`;
export const NavHamShow = styled.div`
	background: rgb(255, 255, 255);
	text-align: left;
	position: absolute;
	z-index: 2;
	top: 3.8rem;
	right: 0px;
	width: 100vw;
	box-sizing: border-box;
	border-bottom: 1px solid rgb(236, 239, 241);
	pointer-events: all;
	display: none;
	padding: 25px;
	opacity: 1;
	visibility: visible;
	transition: position 150ms linear 1s;
	box-shadow: rgb(0 0 0 / 8%) 0px 3px 10px;
	height: calc(100vh - 58px);
`;

export const NavHaberger = styled.div`
	width: 18px;
	height: 17px;
	display: none;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: block;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		cursor: pointer;
	}
`;

export const NavEl = styled.div`
	margin: 0px 12px;
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	font-size: 15px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-weight: 500;
	line-height: 16px;
	color: rgb(5, 15, 25);
	text-align: center;
	border-bottom: 5px solid white;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const NavContainerChild = styled.div`
	display: inline-flex;
	line-height: 60px;

	&:hover ${NavEl} {
		border-bottom: 5px solid #0052ff;
	}
	&:hover ${NavEl1Child} {
		display: block;
	}
`;

export const NavElChildMain = styled.div`
	display: flex;
	justify-content: center;
`;
export const NavElChildLeft = styled.div`
	display: flex;
	margin-right: 60px;
	align-items: flex-start;
`;
export const NavElChildRight = styled.div`
	flex: 1 1 0%;
	max-width: 350px;
`;

export const NavElChildContentTitle = styled.div`
	font-size: 16px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	color: rgb(5, 15, 25);
	font-weight: 500;
	line-height: 16px;
`;

export const NavElChildContentDescription = styled.div`
	font-size: 16px;
	font-weight: 400;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	display: inline-block;
	color: rgba(17, 51, 83, 0.6);
	line-height: 20px;
`;

export const NavElChildContent = styled.div`
	display: flex;
	font-size: 1rem;
	font-weight: 700;
	margin-right: 15px;
	margin-bottom: 20px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	color: rgb(5, 15, 25);
	&:hover ${NavElChildContentTitle} {
		color: #0052ff;
	}
	&:hover ${NavElChildContentDescription} {
		color: black;
	}
	&:hover {
		color: #0052ff;
	}
`;

export const NavElChildTitle = styled.div`
	font-size: 16px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	color: rgb(5, 15, 25);
	font-weight: 500;
	line-height: 16px;
`;
export const NavElChildPara = styled.div`
	margin-top: 12px;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	color: rgb(5, 15, 25);
`;
export const NavElChildFooter = styled.div`
	margin-top: 15px;
	margin-bottom: 20px;
	text-decoration: none;
	cursor: pointer;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	color: rgb(0, 82, 255);
`;

export const NavRight = styled.div`
	justify-content: flex-start;
	line-height: 60px;
	&:hover ${NavEl} {
		color: #0052ff;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: flex;
		margin-top: 12px;
	}
`;

export const Logo = styled.div`
	color: #0052ff;
	font-size: 30px;
	font-weight: 500;
	cursor: pointer;
`;

export const NavLastElem = styled.div`
	margin: 0px 15px;
	display: inline-flex;
	align-items: center;
	color: white;
	background-color: #0052ff;
	font-size: 15px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-weight: 500;
	cursor: pointer;
	border: 1px solid rgb(0, 82, 255);
	height: 20px;
	border-radius: 4px;
	padding: 8px 10px;
`;
export const NavElChildAll = styled.div`
	display: grid;
`;
export const Icon = styled.img`
	height: 35px;
	width: 35px;
	margin-right: 15px;
	filter: drop-shadow(rgba(91, 97, 110, 0.14) 0px 2px 2px)
		drop-shadow(rgba(91, 97, 110, 0.12) 0px 3px 1px)
		drop-shadow(rgba(91, 97, 110, 0.2) 0px 1px 5px);
	background-color: #ffffff;
	align-items: center;
	border-radius: 55px;
`;
export const NavElChildContentMain = styled.div`
	display: grid;
	align-items: center;
`;
export const NavHamEl = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const NavHamLeft = styled.div`
	/* position: relative; */
`;

export const DropDownContent = styled.div`
	position: absolute;
	/* padding: 10px 30px;
	z-index: 2;
	margin-left: -25px;
	width: 100vw; */
	display: block;
	background: rgb(241, 243, 245);
	border: 1px solid rgb(255, 255, 255);
	/* background-size: cover; */
`;

export const NavHamRight = styled.div`
	position: relative;
`;

export const SubA = styled.div``;
