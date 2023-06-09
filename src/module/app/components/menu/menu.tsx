import * as React from "react";
import {
	MenuContainer,
	MainMenu,
	MenuLeft,
	MenuLeftEl1,
	MenuLeftEl1Sub1,
	MenuLeftEl2,
	MenuLeftEl3,
	MenuLeftEl4,
	MenuLeftEl4Sub1,
	MenuLeftEl4Sub2,
	MenuLeftEl5,
	MenuRight,
	MenuRightEl,
	MenuEl1,
	MenuEl1Left,
	MenuEl1LeftTitle,
	MenuEl1LeftDescription,
	MenuEl1LeftFooter,
	MenuEl1Right,
	MenuEl1RightUp,
	MenuEl1RightUpLeft,
	MenuEl1RightUpLeftTitle,
	MenuEl1RightUpLeftDescripption,
	MenuEl1RightUpRight,
	MenuEl1RightDown,
	MenuEl2,
	MenuEl2Title,
	MenuEl2Description,
	MenuEl2Footer,
	MenuEl2FooterLeft,
	MenuEl2FooterLeftLeft,
	MenuEl2FooterLeftRight,
	MenuEl2FooterLeftRightTitle,
	MenuEl2FooterLeftRightDescription,
	MenuEl3,
	MenuEl3Title,
	MenuEl2FooterRight,
	MenuEl3Description,
	MenuEl3Footer,
	MenuEl3FooterLeft,
	MenuEl3FooterTitle,
	MenuEl3FooterDescription,
	MenuEl3FooterFooter,
	MenuEl3FooterMiddle,
	MenuEl3FooterRight,
	MenuEl4,
	MenuEl4Left,
	MenuEl4Title,
	MenuEl4Description,
	MenuEl4Middle,
	MenuEl4Right,
	MenuEl1RightUpLeftLogo,
	MenuEl2FooterLeftAll,
	MenuEl2All,
	MenuEl4All,
	MenuEl5,
	MenuEl5Title,
	MenuEl5Description,
	MenuEl5Footer,
	MenuSubEl1,
	MenuSubEl1El,
	MenuSubEl2,
	MenuSubEl3,
	MenuEl6,
	MenuEl6Left,
	MenuEl6LeftTitle,
	MenuEl6LeftDescription,
	MenuEl6LeftFooter,
	MenuEl6Right,
	MenuEl6RightImage,
	MenuSubElLine,
	MenuEl6All,
} from "./style";
import { SiBitcoin } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Table from "../../../../shared/Table";

interface IMenuProps {}

const Menu: React.FC<IMenuProps> = (props) => {
	return (
		<>
			<MenuContainer>
				<MainMenu>
					<MenuLeft>
						<MenuLeftEl1>
							<SiBitcoin size={20} />
							<MenuLeftEl1Sub1>Jump start your portfolio</MenuLeftEl1Sub1>
							<AiOutlineArrowRight size={20} />
						</MenuLeftEl1>
						<MenuLeftEl2>Jump start your crypto portfolio</MenuLeftEl2>
						<MenuLeftEl3>
							Coinbase is the easiest place to buy and sell cryptocurrency. Sign
							up and get started today.
						</MenuLeftEl3>
						<MenuLeftEl4>
							<MenuLeftEl4Sub1 placeholder='Email Address' />
							<MenuLeftEl4Sub2>Get started</MenuLeftEl4Sub2>
						</MenuLeftEl4>
						<MenuLeftEl5>* Terms apply</MenuLeftEl5>
					</MenuLeft>
					<MenuRight>
						<MenuRightEl src='https://miro.medium.com/max/602/0*Yptvfuy-KY9XWMiN.png' />
					</MenuRight>
				</MainMenu>
			</MenuContainer>
			<Table />

			<MenuContainer>
				<MenuEl1>
					<MenuEl1Left>
						<MenuEl1LeftTitle>Earn up to $29 worth of crypto</MenuEl1LeftTitle>
						<MenuEl1LeftDescription>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</MenuEl1LeftDescription>
						<MenuEl1LeftFooter>Start earning</MenuEl1LeftFooter>
					</MenuEl1Left>
					<MenuEl1Right>
						<MenuEl1RightUp>
							<MenuEl1RightUpLeft>
								<MenuEl1RightUpLeftLogo src='https://static-assets.coinbase.com/earn/campaigns/enzyme/asset-logo.png' />
								<MenuEl1RightUpLeftTitle>Enzyme</MenuEl1RightUpLeftTitle>
								<MenuEl1RightUpLeftDescripption>
									MLN
								</MenuEl1RightUpLeftDescripption>
							</MenuEl1RightUpLeft>
							<MenuEl1RightUpRight>Earn $3 MLN</MenuEl1RightUpRight>
						</MenuEl1RightUp>

						<MenuEl1RightUp>
							<MenuEl1RightUpLeft>
								<MenuEl1RightUpLeftLogo src='https://static-assets.coinbase.com/earn/campaigns/clover-finance/asset-logo.svg' />
								<MenuEl1RightUpLeftTitle>
									Clover Finance
								</MenuEl1RightUpLeftTitle>
								<MenuEl1RightUpLeftDescripption>
									CLV
								</MenuEl1RightUpLeftDescripption>
							</MenuEl1RightUpLeft>
							<MenuEl1RightUpRight>Earn $3 CLV</MenuEl1RightUpRight>
						</MenuEl1RightUp>
						<MenuEl1RightUp>
							<MenuEl1RightUpLeft>
								<MenuEl1RightUpLeftLogo src='https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg' />
								<MenuEl1RightUpLeftTitle>
									Stellar Lumens
								</MenuEl1RightUpLeftTitle>
								<MenuEl1RightUpLeftDescripption>
									XLM
								</MenuEl1RightUpLeftDescripption>
							</MenuEl1RightUpLeft>
							<MenuEl1RightUpRight>Earn $10 XLM</MenuEl1RightUpRight>
						</MenuEl1RightUp>
						<MenuEl1RightUp>
							<MenuEl1RightUpLeft>
								<MenuEl1RightUpLeftLogo src='https://static-assets.coinbase.com/earn/campaigns/bounce-token/asset-logo.svg' />
								<MenuEl1RightUpLeftTitle>Bounce Token</MenuEl1RightUpLeftTitle>
								<MenuEl1RightUpLeftDescripption>
									AUCTION
								</MenuEl1RightUpLeftDescripption>
							</MenuEl1RightUpLeft>
							<MenuEl1RightUpRight>Earn $3 AUCTION</MenuEl1RightUpRight>
						</MenuEl1RightUp>
						<MenuEl1RightDown>View more {`>`}</MenuEl1RightDown>
					</MenuEl1Right>
				</MenuEl1>
			</MenuContainer>

			<MenuContainer>
				<MenuEl2All>
					<MenuEl2>
						<MenuEl2Title>
							Create your cryptocurrency portfolio today
						</MenuEl2Title>
						<MenuEl2Description>
							Coinbase has a variety of features that make it the best place to
							start trading
						</MenuEl2Description>
						<MenuEl2Footer>
							<MenuEl2FooterLeftAll>
								<MenuEl2FooterLeft>
									<MenuEl2FooterLeftLeft>
										<svg width='25' height='25' viewBox='0 0 25 25'>
											<g fill='none' fill-rule='evenodd'>
												<path fill='#D4EEFF' d='M10 32h10V10H10z'></path>
												<path fill='#1752F0' d='M20 32h10V0H20z'></path>
												<path fill='#55B4FC' d='M0 32h10V19H0z'></path>
											</g>
										</svg>
									</MenuEl2FooterLeftLeft>
									<MenuEl2FooterLeftRight>
										<MenuEl2FooterLeftRightTitle>
											Manage your portfolio
										</MenuEl2FooterLeftRightTitle>
										<MenuEl2FooterLeftRightDescription>
											Buy and sell popular digital currencies, keep track of
											them in the one place.
										</MenuEl2FooterLeftRightDescription>
									</MenuEl2FooterLeftRight>
								</MenuEl2FooterLeft>
								<MenuEl2FooterLeft>
									<MenuEl2FooterLeftLeft>
										<svg width='25' height='25' viewBox='0 0 25 25'>
											<g fill='none' fill-rule='evenodd'>
												<path
													d='M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5M29.688 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0029.688 9.5'
													fill='#D4EEFF'></path>
												<path fill='#D4EEFF' d='M0 38h35.625V4.75H0z'></path>
												<path
													fill='#55B4FC'
													d='M0 11.875h35.625V4.75H0z'></path>
												<path
													d='M5.938 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 005.937 9.5'
													fill='#D4EEFF'></path>
												<path
													d='M27.313 4.75v2.375a2.375 2.375 0 004.75 0V4.75h-4.75zM5.938 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 005.937 9.5'
													fill='#1752F0'></path>
												<path
													d='M17.813 9.5a2.375 2.375 0 002.375-2.375v-4.75a2.375 2.375 0 00-4.75 0v4.75A2.375 2.375 0 0017.811 9.5'
													fill='#D4EEFF'></path>
												<path
													d='M17.813 9.5a2.375 2.375 0 002.375-2.375V4.75h-4.75v2.375A2.375 2.375 0 0017.811 9.5'
													fill='#1752F0'></path>
												<path
													fill='#FFF'
													d='M4.75 34.438h26.125V11.875H4.75z'></path>
												<path
													fill='#1752F0'
													d='M12.69 26.329l3.359 3.359L26.125 19.61l-3.358-3.359z'></path>
												<path
													fill='#1752F0'
													d='M16.049 29.688l3.359-3.36-6.244-6.243-3.359 3.36z'></path>
											</g>
										</svg>
									</MenuEl2FooterLeftLeft>
									<MenuEl2FooterLeftRight>
										<MenuEl2FooterLeftRightTitle>
											Recurring buys
										</MenuEl2FooterLeftRightTitle>
										<MenuEl2FooterLeftRightDescription>
											Invest in cryptocurrency slowly over time by scheduling
											buys daily, weekly, or monthly.
										</MenuEl2FooterLeftRightDescription>
									</MenuEl2FooterLeftRight>
								</MenuEl2FooterLeft>
								<MenuEl2FooterLeft>
									<MenuEl2FooterLeftLeft>
										<svg width='25' height='25' viewBox='0 0 25 25' fill='none'>
											<path d='M36 2.25H0v31.5h36V2.25z' fill='#D4EEFF'></path>
											<path
												d='M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z'
												fill='#56B4FC'></path>
											<path
												d='M29.25 2.25H6.75v31.5h22.5V2.25z'
												fill='#1652F0'></path>
											<path
												d='M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z'
												fill='#fff'></path>
											<path
												d='M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z'
												fill='#fff'></path>
											<path
												d='M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z'
												fill='#56B4FC'></path>
											<path
												d='M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z'
												fill='#fff'></path>
										</svg>
									</MenuEl2FooterLeftLeft>
									<MenuEl2FooterLeftRight>
										<MenuEl2FooterLeftRightTitle>
											Mobile apps
										</MenuEl2FooterLeftRightTitle>
										<MenuEl2FooterLeftRightDescription>
											Stay on top of the markets with the Coinbase app for
											Android or iOS.
										</MenuEl2FooterLeftRightDescription>
									</MenuEl2FooterLeftRight>
								</MenuEl2FooterLeft>
							</MenuEl2FooterLeftAll>
							<MenuEl2FooterRight src='https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp' />
						</MenuEl2Footer>
					</MenuEl2>
				</MenuEl2All>
			</MenuContainer>

			<MenuContainer>
				<MenuEl3>
					<MenuEl3Title>The most trusted cryptocurrency platform</MenuEl3Title>
					<MenuEl3Description>
						Here are a few reasons why you should choose Coinbase
					</MenuEl3Description>
					<MenuEl3Footer>
						<MenuEl3FooterLeft>
							<svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
								<path d='M56 0H8v50h48V0z' fill='#BFE9FF'></path>
								<path d='M64 10H0v48h64V10z' fill='#56B4FC'></path>
								<path d='M56 10H8v40h48V10z' fill='#1652F0'></path>
								<path
									d='M10 16H6v8h4v-8zM10 36H6v8h4v-8z'
									fill='#1652F0'></path>
								<path
									d='M64 58h-8v6h8v-6zM8 58H0v6h8v-6z'
									fill='#56B4FC'></path>
								<path
									d='M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z'
									fill='#fff'></path>
							</svg>

							<MenuEl3FooterTitle>Secure storage</MenuEl3FooterTitle>
							<MenuEl3FooterDescription>
								We store the vast majority of the digital assets in secure
								offline storage
							</MenuEl3FooterDescription>
							<MenuEl3FooterFooter>
								{" "}
								Learn how Coinbase keeps your funds safe and secure {`>`}
							</MenuEl3FooterFooter>
						</MenuEl3FooterLeft>
						<MenuEl3FooterMiddle>
							<svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
								<path
									d='M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z'
									fill='#BFE9FF'></path>
								<path
									d='M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z'
									fill='#56B4FC'></path>
								<path
									d='M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z'
									fill='#1652F0'></path>
								<path
									d='M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z'
									fill='#fff'></path>
							</svg>

							<MenuEl3FooterTitle>Protected by insurance</MenuEl3FooterTitle>
							<MenuEl3FooterDescription>
								Coinbase maintains crypto insurance and all USD cash balances
								are covered by FDIC insurance, up to a maximum of $250,000.
							</MenuEl3FooterDescription>
							<MenuEl3FooterFooter>
								Learn how your crypto is covered by our insurance policy {`>`}
							</MenuEl3FooterFooter>
						</MenuEl3FooterMiddle>
						<MenuEl3FooterRight>
							<svg width='56' height='64' viewBox='0 0 56 64' fill='none'>
								<path d='M56 0H24v64h32V0z' fill='#BFE9FF'></path>
								<path
									d='M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z'
									fill='#56B4FC'></path>
								<path d='M24 8v52s24-10.75 24-24V8H24z' fill='#1652F0'></path>
								<path
									d='M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z'
									fill='#fff'></path>
							</svg>

							<MenuEl3FooterTitle>Industry best practices</MenuEl3FooterTitle>
							<MenuEl3FooterDescription>
								{" "}
								Coinbase supports a variety of the most popular digital
								currencies.
							</MenuEl3FooterDescription>
							<MenuEl3FooterFooter>
								Learn how we implement industry best practices for account
								security {`>`}
							</MenuEl3FooterFooter>
						</MenuEl3FooterRight>
					</MenuEl3Footer>
				</MenuEl3>
			</MenuContainer>

			<MenuContainer>
				<MenuEl4All>
					<MenuEl4>
						<MenuEl4Left>
							<MenuEl4Title>$327B</MenuEl4Title>
							<MenuEl4Description>Quarterly volume traded</MenuEl4Description>
						</MenuEl4Left>
						<MenuEl4Middle>
							<MenuEl4Title>100+</MenuEl4Title>
							<MenuEl4Description>Countries supported</MenuEl4Description>
						</MenuEl4Middle>
						<MenuEl4Right>
							<MenuEl4Title>73+M</MenuEl4Title>
							<MenuEl4Description>Verified users</MenuEl4Description>
						</MenuEl4Right>
					</MenuEl4>
				</MenuEl4All>
			</MenuContainer>

			<MenuContainer>
				<MenuEl5>
					<MenuEl5Title>Get started in a few minutes</MenuEl5Title>
					<MenuEl5Description>
						Coinbase supports a variety of the most popular digital currencies.
					</MenuEl5Description>
					<MenuEl5Footer>
						<MenuSubEl1>
							<svg width='64' height='60' viewBox='0 0 64 60' fill='none'>
								<path
									d='M32 16a8 8 0 100-16 8 8 0 000 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z'
									fill='#56B4FC'></path>
								<path d='M64 36H0v24h64V36z' fill='#BFE9FF'></path>
								<path d='M52 36H12v24h40V36z' fill='#1652F0'></path>
								<path d='M33 42h-2v12h2V42z' fill='#fff'></path>
								<path d='M38 49v-2H26v2h12z' fill='#fff'></path>
							</svg>
							<MenuSubEl1El>Create an account</MenuSubEl1El>
						</MenuSubEl1>
						<MenuSubElLine></MenuSubElLine>
						<MenuSubEl2>
							<svg width='65' height='56' viewBox='0 0 65 56' fill='none'>
								<path d='M57.03 20h-50v24h50V20z' fill='#BFE9FF'></path>
								<path
									d='M60.03 52v-4h-8V16.06L64 16.1l.01-4.1L32.06 0 .01 12 0 15.9l12.03.04V48h-8v4h-4v4h64v-4h-4zm-16-4h-8V16.01l8 .03V48zm-24-32.04l8 .03V48h-8V15.96z'
									fill='#56B4FC'></path>
								<path d='M52.03 20h-40v24h40V20z' fill='#1652F0'></path>
								<path
									d='M36.41 34.38c0-2.34-1.42-3.12-4.17-3.5-2.03-.29-2.42-.77-2.42-1.72 0-.9.69-1.54 2.01-1.54 1.34 0 2.04.52 2.26 1.75h1.99c-.19-1.86-1.26-2.96-3.06-3.28V24h-2v2.05c-1.98.28-3.26 1.6-3.26 3.29 0 2.19 1.32 3.04 4.12 3.42 1.9.31 2.44.72 2.44 1.8s-.92 1.8-2.21 1.8c-1.98 0-2.45-.98-2.6-2.16h-2.09c.14 1.94 1.2 3.4 3.61 3.72V40h2v-2.08c2.06-.33 3.38-1.77 3.38-3.54z'
									fill='#fff'></path>
							</svg>
							<MenuSubEl1El>Link your bank account</MenuSubEl1El>
						</MenuSubEl2>
						<MenuSubElLine></MenuSubElLine>
						<MenuSubEl3>
							<svg width='61' height='56' viewBox='0 0 61 56' fill='none'>
								<path
									d='M40 40.5v-.99c0-.89-.59-1.68-1.45-1.92l-9.21-2.63a7.975 7.975 0 00-6.31.83L16 40v12h15.65c2.88 0 5.73-.52 8.43-1.53L60 43c.9-2.26-.93-4.67-3.35-4.39L40 40.5z'
									fill='#56B4FC'></path>
								<path d='M16 36H0v20h16V36z' fill='#BFE9FF'></path>
								<path d='M16 40H0v12h16V40z' fill='#1652F0'></path>
								<path
									d='M28 20c5.523 0 10-4.477 10-10S33.523 0 28 0 18 4.477 18 10s4.477 10 10 10z'
									fill='#56B4FC'></path>
								<path
									d='M48 36c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'
									fill='#1652F0'></path>
								<path
									d='M32 9h-3V6h-2v3h-3v2h3v3h2v-3h3V9zM52 27v-2h-8v2h8z'
									fill='#fff'></path>
							</svg>
							<MenuSubEl1El>Start buying & selling</MenuSubEl1El>
						</MenuSubEl3>
					</MenuEl5Footer>
				</MenuEl5>
			</MenuContainer>

			<MenuContainer>
				<MenuEl6All>
					<MenuEl6>
						<MenuEl6Left>
							<MenuEl6LeftTitle>
								Earn up to $29 worth of crypto
							</MenuEl6LeftTitle>
							<MenuEl6LeftDescription>
								Discover how specific cryptocurrencies work — and get a bit of
								each crypto to try out for yourself.
							</MenuEl6LeftDescription>
							<MenuEl6LeftFooter>Start earning</MenuEl6LeftFooter>
						</MenuEl6Left>
						<MenuEl6Right></MenuEl6Right>
					</MenuEl6>
					<MenuEl6RightImage src='https://assets.coinbase.com/assets/earn-upsell-desktop.969a983ce74a462a68ba618b798a8cfa.webp' />
				</MenuEl6All>
			</MenuContainer>
		</>
	);
};

export default Menu;
