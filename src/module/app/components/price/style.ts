import styled from "styled-components";
import { screenSizes } from "../../../../shared/style/theme";

export const PriceContainer = styled.div`
	width: 100%;
`;

export const PriceEl1 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 80px 40px;
	max-width: 1000px;
`;
export const PriceEl1Up = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;
export const PriceEl1UpLeft = styled.div`
	max-width: 350px;
`;
export const PriceEl1UpLeftTitle = styled.div`
	display: block;
	color: #5b616e;
	font-size: 14px;
	font-weight: 500;
`;
export const PriceEl1UpLeftDescription = styled.div`
	margin: 8px 0px 0px;
	color: rgb(var(--gray100));
	font-size: 24px;
	font-weight: 500;
	span {
		margin-left: 6px;
		color: #098551;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		font-size: 18px;
	}
`;
export const PriceEl1UpRight = styled.div`
	width: 100%;
	max-width: 500px;
	p {
		position: relative;
	}
	span {
		position: absolute;
		padding: 15px;
		@media only screen and (max-width: ${screenSizes.mediaM}px) {
			margin-left: 120px;
			background: none;
			border: 1px solid rgb(91 97 110 / 20%);
			border-radius: 55px;
		}
	}
`;
export const PriceEl1RightEl = styled.input`
	max-width: 420px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	padding: 0px 40px;
	width: 100%;
	height: 48px;
	border: 1px solid gray;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 gray;
	background: white;
	outline: none;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const PriceEl1Down = styled.div`
	display: flex;
	justify-content: space-between;
	span {
		display: none;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		flex-direction: column;
		border: 1px solid rgb(91 97 110 / 20%);
		border-radius: 12px;

		span {
			color: black;
			text-align: center;
			align-items: center;
			display: block;
			cursor: pointer;
			font-weight: 500;
			border: none;
			background: white;
			padding: 8px 0px 16px;
			width: 100%;
			border-radius: 12px;
		}
	}
`;
export const PriceEl1DownEl = styled.div`
	border: 1px solid rgb(91 97 110 / 20%);
	border-radius: 12px;
	padding: 0px 16px 20px;
	width: 160px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		border: none;
		display: flex;
		flex-direction: row;
		padding: 0px 16px 10px;
	}
`;
export const PriceEl1DownElTitle = styled.div`
	margin: 0px;
	color: rgb(10 11 13);
	font-size: 14px;
	font-weight: 500;
	margin-top: 10px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 100%;
	}
`;
export const PriceEl1DownElLgo = styled.img`
	height: 40px;
	width: 40px;
	margin-bottom: 10px;
	margin-top: 10px;
`;
export const PriceEl1DownElDescription = styled.div`
	margin: 0px 0px 5px;
	color: var(--foreground);
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	word-break: break-word;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const PriceEl1DownElFooter = styled.div`
	line-height: 22px;
	color: rgb(91 97 110);
	display: flex;
	span {
		color: rgb(0 82 255);
		display: block;
		margin-right: 5px;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-left: 20px;
		margin-top: 0px;
	}
`;
export const PriceEl2 = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0px auto;
	padding: 0px 40px;
	max-width: 1000px;
`;
export const PriceEl2Left = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const PriceEl2LeftEl = styled.div`
	padding: 6px 24px;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	span {
		background-color: rgb(241, 245, 254);
		border-radius: 100px;
		padding: 6px 24px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		@media only screen and (max-width: ${screenSizes.mediaM}px) {
			padding: 8px 12px;
			border-radius: 16px;
			font-size: 13px;
		}
		@media only screen and (max-width: ${screenSizes.mediaXS}px) {
			font-size: 6px;
		}
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		padding: 8px 12px;
		border-radius: 16px;
		font-size: 13px;
	}
	@media only screen and (max-width: ${screenSizes.mediaXS}px) {
		font-size: 6px;
	}
`;
export const PriceEl2Right = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		display: none;
	}
`;
export const PriceEl2RightEl = styled.div`
	margin-left: 32px;
	color: rgb(88, 112, 136);
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	span {
		color: rgb(0 82 255);
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		text-transform: uppercase;
	}
`;
export const PriceEl3 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	padding: 0px 40px;
	max-width: 1000px;
`;
export const PriceEl3Up = styled.div`
	text-align: center;
	height: 32px;
	margin-right: 8px;
	display: flex;
	justify-content: center;

	p {
		color: blue;
		text-decoration: none;
		background-color: transparent;
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;
			border-radius: 16px;
			box-sizing: border-box;

			a {
				text-decoration: none;
				background-color: rgb(0, 82, 255);
				color: white;
				height: 30px;
				width: 30px;
				border-radius: 16px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			p {
				text-decoration: none;
				background-color: white;
				color: blue;
				height: 30px;
				width: 30px;

				display: flex;
				justify-content: center;
				align-items: center;
			}
			&:hover {
				border: 1px solid gray;
			}
		}
	}
`;
export const PriceEl3Down = styled.div`
	text-align: center;
	margin-top: 16px;
	margin-bottom: 40px;
	font-family: CoinbaseSans, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	font-weight: 400;
	line-height: 1.5;
	font-size: 12px;
	color: rgb(91, 97, 110);
	word-break: break-word;
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
