import styled from "styled-components";
import { screenSizes } from "../../../../shared/style/theme";

export const MenuContainer = styled.div`
	width: 100%;
`;
export const MainMenu = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 80px 40px;
	max-width: 1000px;
`;
export const MenuLeft = styled.div`
	padding-top: 80px;
	line-height: 40px;
	max-width: 442px;
`;

export const MenuLeftEl1 = styled.div`
	display: flex;
	justify-content: flex-start;
	cursor: pointer;
	align-items: center;
	flex-direction: row;
	color: #1652f0;
	font-weight: 500;
`;

export const MenuLeftEl1Sub1 = styled.div`
	margin: auto 10px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;

	&:hover {
		text-decoration: underline;
	}
`;

export const MenuLeftEl2 = styled.div`
	font-size: 62px;
	font-weight: 500;
	line-height: 1.15;
	margin-top: 10px;
	margin-bottom: 30px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		font-size: 34px;
		line-height: 40px;
	}
`;
export const MenuLeftEl3 = styled.div`
	font-size: 20px;
	line-height: 1.4;
	margin-bottom: 30px;
	font-weight: 500;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
	}
`;

export const MenuLeftEl4 = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
	}
`;

export const MenuLeftEl4Sub1 = styled.input`
	max-width: 220px;
	margin: 0px;
	padding: 20px;
	border: 1px solid gray;
	border-radius: 3px;
	background: none;
	font-size: 18px;
	font-weight: 400;
	color: gray;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		max-width: none;
	}
`;
export const MenuLeftEl4Sub2 = styled.button`
	max-width: 150px;
	margin: 0px 10px;
	padding: 20px;
	border-radius: 5px;
	outline: none;
	border: none;
	font-size: 18px;
	font-weight: 400;
	color: white;
	background-color: #1652f0;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		max-width: none;
		margin: 10px 0px;
	}
`;

export const MenuLeftEl5 = styled.div`
	color: #1652f0;
	text-decoration: underline;
`;
export const MenuRight = styled.div`
	max-width: 400px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const MenuRightEl = styled.img`
	height: 600px;
	width: 500px;
`;

export const MenuEl1 = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 80px 40px;
	max-width: 1000px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
	}
`;

export const MenuEl1Left = styled.div`
	line-height: 40px;
	max-width: 350px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		text-align: center;
	}
`;

export const MenuEl1LeftTitle = styled.div`
	line-height: 1.3;
	color: #0a0b0d;
	font-size: 32px;
	font-weight: 500;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		line-height: 1.3;
		font-size: 32px;
		font-weight: 500;
	}
`;

export const MenuEl1LeftDescription = styled.div`
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-size: 14px;
	line-height: 1.6;
	font-weight: 400;
	color: gray;
	margin: 10px 0px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		font-size: 14px;
		line-height: 1.6;
		font-weight: 400;
	}
`;
export const MenuEl1LeftFooter = styled.button`
	max-width: 150px;
	width: 100%;
	margin: 0px 0px;
	padding: 12px 16px;
	font-size: 14px;
	border-radius: 5px;
	outline: none;
	border: none;
	font-weight: 400;
	color: white;
	background-color: #1652f0;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
`;
export const MenuEl1Right = styled.div`
	max-width: 500px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin-top: 15px;
	}
`;

export const MenuEl1RightUp = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	&:hover {
		border: 1px solid white;
		background-color: white;
		padding: 10px;
		box-sizing: border-box;
		box-shadow: rgb(0 0 0 / 12%) 0px 8px 24px;
		border-radius: 8px;
		cursor: pointer;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		border: 1px solid rgb(91 97 110 / 20%);
		border-radius: 0px;
	}
`;

export const MenuEl1RightUpLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px 0px;
`;
export const MenuEl1RightUpLeftLogo = styled.img`
	height: 38px;
	width: 38px;
	margin-right: 15px;
	filter: drop-shadow(rgba(91, 97, 110, 0.14) 0px 2px 2px)
		drop-shadow(rgba(91, 97, 110, 0.12) 0px 3px 1px)
		drop-shadow(rgba(91, 97, 110, 0.2) 0px 1px 5px);
	background-color: #ffffff;
	align-items: center;
	border-radius: 55px;
`;

export const MenuEl1RightUpLeftTitle = styled.div`
	margin: 0px 15px;
	line-height: 1.3;
	color: #0a0b0d;
	font-size: 22px;
	font-weight: 500;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		line-height: 1.3;
		font-size: 18px;
		font-weight: 500;
		width: min-content;
		margin: 0px 0px;
	}
`;
export const MenuEl1RightUpLeftDescripption = styled.div`
	line-height: 1.3;
	color: #0a0b0d;
	font-size: 18px;
	font-weight: 500;
	margin-top: 5px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const MenuEl1RightUpRight = styled.div`
	margin-left: 20px;
	margin: 15px 0px;
	color: #3b9e75;
	margin-left: 24px;
	font-weight: 500;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin-left: 0px;
	}
`;
export const MenuEl1RightDown = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1652f0;
	display: block;
	margin: 10px 0px;
	font-weight: 500;
	font-size: 16px;
	align-items: center;
`;
export const MenuEl2All = styled.div`
	border-bottom: 1px solid rgb(236, 239, 241);
`;
export const MenuEl2 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	max-width: 1000px;
`;
export const MenuEl2Title = styled.div`
	margin-top: 0px;
	margin-right: 0px;
	margin-left: 0px;
	margin-bottom: 10px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-size: 40px;
	font-weight: 500;
	color: #0a0b0d;
	text-align: center;
`;

export const MenuEl2Description = styled.div`
	color: gray;
	text-align: center;
	margin: 10px 0px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 10px 30px;
	}
`;

export const MenuEl2Footer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 40px 0px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column-reverse;
	}
`;

export const MenuEl2FooterLeftAll = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	margin-top: 40px;
`;

export const MenuEl2FooterLeft = styled.div`
	display: flex;
	margin-bottom: 20px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;
export const MenuEl2FooterLeftLeft = styled.div`
	margin-top: -8px;
	flex-shrink: 0;
	width: 72px;
	height: 72px;
	margin-right: 10px;
	background-color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgb(218 225 233 / 56%) 0px 8px 16px;
`;

export const MenuEl2FooterLeftRight = styled.div``;

export const MenuEl2FooterLeftRightTitle = styled.div`
	margin-top: 0px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 500;
`;

export const MenuEl2FooterLeftRightDescription = styled.div`
	margin: 0px;
	line-height: 1.6;
	color: gray;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 10px 30px;
	}
`;
export const MenuEl3 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	max-width: 1000px;
`;
export const MenuEl3Title = styled.div`
	margin-top: 40px;
	margin-right: 0px;
	margin-left: 0px;
	margin-bottom: 20px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-size: 40px;
	font-weight: 500;
	color: #0a0b0d;
	text-align: center;
`;

export const MenuEl2FooterRight = styled.img`
	max-width: 600px;
	height: 500px;
	width: 550px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 100%;
		height: unset;
	}
`;

export const MenuEl3Description = styled.div`
	color: gray;
	text-align: center;
	margin: 10px 0px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 10px 30px;
	}
`;

export const MenuEl3Footer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 100px;
	flex-direction: row;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;
export const MenuEl3FooterLeft = styled.div`
	text-align: center;
	max-width: 300px;
	margin: 0px 20px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin-bottom: 10px;
	}
`;
export const MenuEl3FooterTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 0px;
	font-size: 20px;
	font-weight: 500;
	color: #0a0b0d;
	text-align: center;
`;
export const MenuEl3FooterDescription = styled.div`
	color: gray;
	margin: 10px 0 10px;
	height: 100px;
	line-height: 24px;
	font-size: 16px;
`;
export const MenuEl3FooterFooter = styled.div`
	color: #1652f0;
	line-height: 28px;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
`;
export const MenuEl3FooterMiddle = styled.div`
	text-align: center;
	max-width: 300px;
	margin: 0px 20px;
`;

export const MenuEl3FooterRight = styled.div`
	text-align: center;
	max-width: 300px;
	margin: 0px 20px;
`;

export const MenuEl4All = styled.div`
	background-color: #1652f0;
	margin: 60px 0px;
`;
export const MenuEl4 = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0px auto;
	max-width: 1000px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const MenuEl4Left = styled.div`
	color: white;
	margin: 40px 80px;
`;

export const MenuEl4Title = styled.div`
	margin-top: 0px;
	margin-right: 0px;
	margin-left: 0px;
	margin-bottom: 10px;
	line-height: 48px;
	font-size: 56px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-weight: 500;
`;

export const MenuEl4Description = styled.div`
	line-height: 24px;
	font-size: 16px;
	opacity: 0.7;
`;

export const MenuEl4Middle = styled.div`
	color: white;
	margin: 40px 80px;
`;

export const MenuEl4Right = styled.div`
	color: white;
	margin: 40px 80px;
`;
export const MenuEl5 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 80px 40px;
	max-width: 1000px;
`;
export const MenuEl5Title = styled.div`
	margin-top: 0px;
	margin-right: 0px;
	margin-left: 0px;
	margin-bottom: 10px;
	line-height: 48px;
	font-size: 56px;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-weight: 500;
	text-align: center;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		line-height: 40px;
		font-size: 40px;
	}
`;
export const MenuEl5Description = styled.div`
	line-height: 24px;
	font-size: 16px;
	text-align: center;
`;
export const MenuEl5Footer = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 60px 0px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;
export const MenuSubEl1 = styled.div`
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 20px 0px;
	}
`;
export const MenuSubElLine = styled.div`
	height: 1px;
	margin-top: 40px;
	background-color: gray;
	width: 150px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const MenuSubEl1El = styled.div`
	font-size: 20px;
	color: var(--foreground);
	font-weight: 500;
	text-align: center;
	width: 100%;
`;
export const MenuSubEl2 = styled.div`
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 20px 0px;
	}
`;
export const MenuSubEl3 = styled.div`
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		margin: 20px 0px;
	}
`;

export const MenuEl6 = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 60px 40px;
	max-width: 1000px;
`;
export const MenuEl6Left = styled.div`
	max-width: 300px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		text-align: center;
		align-items: center;
	}
`;
export const MenuEl6LeftTitle = styled.div`
	line-height: 1.3;
	color: rgb(var(--gray100));
	font-size: 32px;
	font-weight: 500;
	font-family: CoinbaseDisplay, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
`;
export const MenuEl6LeftDescription = styled.div`
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-size: 14px;
	line-height: 1.6;
	font-weight: 400;
	color: rgb(var(--gray100));
	margin: 20px 0px;
`;
export const MenuEl6LeftFooter = styled.button`
	max-width: 150px;
	width: 100%;
	margin: 0px 0px;
	padding: 12px 16px;
	font-size: 14px;
	border-radius: 5px;
	outline: none;
	border: none;
	font-weight: 400;
	color: white;
	background-color: #1652f0;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
`;
export const MenuEl6Right = styled.div`
	display: flex;
	justify-content: flex-end;
	max-width: 600px;
`;
export const MenuEl6RightImage = styled.img`
	height: 400px;
	width: 600px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const MenuEl6All = styled.div`
	display: flex;
	justify-content: flex-end;
	background-color: #f5f8ff;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		background-color: rgb(17 51 85);
		color: rgb(255 255 255);
	}
`;
