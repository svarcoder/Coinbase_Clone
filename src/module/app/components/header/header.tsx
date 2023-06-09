import * as React from "react";
import {
	NavContainer,
	NavContainerMain,
	NavContainerChild,
	Logo,
	Nav,
	NavEl,
	NavLeft,
	NavRight,
	NavLastElem,
	NavEl1Child,
	NavElChildMain,
	NavElChildLeft,
	NavElChildRight,
	NavElChildContent,
	NavElChildPara,
	NavElChildTitle,
	NavElChildFooter,
	Icon,
	NavElChildContentMain,
	NavElChildContentTitle,
	NavElChildContentDescription,
	NavElChildAll,
	NavHaberger,
	NavHamShow,
	NavHamEl,
	NavHamLeft,
	NavHamRight,
	DropDownContent,
	SubA,
} from "./style";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
	let history = useHistory();

	const Price = () => {
		history.push("/price");
	};

	const Home = () => {
		history.push("/home");
	};
	return (
		<>
			<NavContainer>
				<Nav>
					<NavLeft>
						<Logo onClick={Home}>coinbase</Logo>
					</NavLeft>

					<NavContainerMain>
						<NavContainerChild>
							<NavEl onClick={Price}>Prices</NavEl>
						</NavContainerChild>
						<NavContainerChild>
							{" "}
							<NavEl>
								Learn{" "}
								<NavEl1Child>
									<NavElChildMain>
										<NavElChildLeft>
											<NavElChildAll>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />

													<NavElChildContentMain>
														<NavElChildContentTitle>
															Tips & Tutorials
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Crypto basics
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Market updates
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>
										</NavElChildLeft>
										<NavElChildRight>
											<NavElChildTitle>
												Crypto questions, answered
											</NavElChildTitle>
											<NavElChildPara>
												Guides and explainers for your crypto questions
											</NavElChildPara>
											<NavElChildFooter>See all articles</NavElChildFooter>
										</NavElChildRight>
									</NavElChildMain>
								</NavEl1Child>
							</NavEl>
						</NavContainerChild>

						<NavContainerChild>
							{" "}
							<NavEl>
								Individuals{" "}
								<NavEl1Child>
									<NavElChildMain>
										<NavElChildLeft>
											<NavElChildAll>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Buy and sell
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Buy, sell and use crypto
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Wallet
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															The best self-hosted crypto wallet
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Earn
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Learn and earn crypto
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>

											<NavElChildAll>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Card
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Spend crypto, earn crypto rewards
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/4mo5MpvlVj04YOVoyLr7wM/4f246f6bd1ef15915397eb56d5945477/PrivateClient_-_Round.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Private Client
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															For trusts, family offices, UHNWIs
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/c5bd0wqjc7v0/7ovHlKMEAQfCktgQMmZ6LD/be529000f4a94e82334567e212223de2/Borrow_Round.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Borrow
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Borrow cash using Bitcoin as collateral
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>
										</NavElChildLeft>
										<NavElChildRight>
											<NavElChildTitle>
												Crypto questions, answered
											</NavElChildTitle>
											<NavElChildPara>
												Guides and explainers for your crypto questions
											</NavElChildPara>
											<NavElChildFooter>See all articles</NavElChildFooter>
										</NavElChildRight>
									</NavElChildMain>
								</NavEl1Child>
							</NavEl>{" "}
						</NavContainerChild>

						<NavContainerChild>
							<NavEl>
								Businesses
								<NavEl1Child>
									<NavElChildMain>
										<NavElChildLeft>
											<NavElChildAll>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/1B2lWSiOAFK6CitniZDOm6/a38890c20ba91c7d730fde6eb1d9bb3e/prime-icon.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Prime
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															The prime brokerage platform
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/1ke3aZrKAkc57nbjxVTMtc/85533126e5dfd8d62907775d3b124cf9/commerce-icon.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Commerce
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Accept crypto from anyone
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/EtdyFCX7iknLgMd8QmEFE/3b11e239601461f579b1fd6e14284b36/custody-icon.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Custody Power your crypto compliance
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Institutional-grade offline storage
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>

											<NavElChildAll>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/3wsZt9X1TIvwxxsy7LmLIs/6e41f591a9d47a3a9e3bd9b02a856366/asset-hub-icon.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Asset Hub
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															List your asset on Coinbase
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/77qCpUqwyp7meN68z2VTPI/9799d37f5b6510c01373048aa956c01d/exchange.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Exchange
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Direct access to our exchange
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<Icon src='https://images.ctfassets.net/q5ulk4bp65r7/47VkMq5Z5yfzsAzbWR4E4S/432b13e65904574770873b1206f81bb7/round_analytics.svg' />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Analytics
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															List your asset on Coinbase
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>
										</NavElChildLeft>
										<NavElChildRight>
											<NavElChildTitle>
												Built for businesses and institutions
											</NavElChildTitle>
											<NavElChildPara>
												Crypto solutions for institutional investors, family
												offices, and businesses
											</NavElChildPara>
											<NavElChildFooter>See all products</NavElChildFooter>
										</NavElChildRight>
									</NavElChildMain>
								</NavEl1Child>
							</NavEl>
						</NavContainerChild>
						<NavContainerChild>
							<NavEl>
								Developers
								<NavEl1Child>
									<NavElChildMain>
										<NavElChildLeft>
											<NavElChildAll>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Connect
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Enable users to buy, sell, and store crypto
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Bison Trails
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Pioneering blockchain infrastructure
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Commerce
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Accept crypto from anyone
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>

											<NavElChildAll>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>Pro</NavElChildContentTitle>
														<NavElChildContentDescription>
															Programmatically manage crypto
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															WalletLink
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Link your DApp to mobile wallets
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Rosetta
														</NavElChildContentTitle>
														<NavElChildContentDescription>
															Integrate your blockchain everywhere
														</NavElChildContentDescription>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>
										</NavElChildLeft>
										<NavElChildRight>
											<NavElChildTitle>
												Build with Coinbase Cloud
											</NavElChildTitle>
											<NavElChildPara>
												Tools and APIs for developers building with crypto
											</NavElChildPara>
											<NavElChildFooter>
												Explore Coinbase Cloud
											</NavElChildFooter>
										</NavElChildRight>
									</NavElChildMain>
								</NavEl1Child>
							</NavEl>
						</NavContainerChild>
						<NavContainerChild>
							<NavEl>
								Company
								<NavEl1Child>
									<NavElChildMain>
										<NavElChildLeft>
											<NavElChildAll>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															About
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Careers
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Affiliates
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>

											<NavElChildAll>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Support
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
												<NavElChildContent>
													<RiArrowDropRightLine size={28} />
													<NavElChildContentMain>
														<NavElChildContentTitle>
															Blog
														</NavElChildContentTitle>
													</NavElChildContentMain>
												</NavElChildContent>
											</NavElChildAll>
										</NavElChildLeft>
										<NavElChildRight>
											<NavElChildTitle>
												Learn all about Coinbase
											</NavElChildTitle>
											<NavElChildPara>
												We're building an open financial system for the world.
											</NavElChildPara>
										</NavElChildRight>
									</NavElChildMain>
								</NavEl1Child>
							</NavEl>
						</NavContainerChild>
					</NavContainerMain>

					<NavRight>
						<NavEl>Sign in</NavEl>
					</NavRight>
					<NavRight>
						<NavLastElem>Get Started</NavLastElem>
						<NavHaberger>
							<FaBars />
							<NavHamShow>
								<NavHamEl>
									<NavHamLeft>Prices</NavHamLeft>
								</NavHamEl>
								<NavHamEl>
									<NavHamLeft>Learn</NavHamLeft>
									<NavHamRight>
										<IoIosArrowDown />
									</NavHamRight>
								</NavHamEl>
								<NavHamEl>
									<NavHamLeft>Individuals</NavHamLeft>
									<NavHamRight>
										<IoIosArrowDown />
									</NavHamRight>
								</NavHamEl>
								<NavHamEl>
									<NavHamLeft>Business</NavHamLeft>
									<NavHamRight>
										<IoIosArrowDown />
									</NavHamRight>
								</NavHamEl>
								<NavHamEl>
									<NavHamLeft>Developers</NavHamLeft>
									<NavHamRight>
										<IoIosArrowDown />
									</NavHamRight>
								</NavHamEl>
								<NavHamEl>
									<NavHamLeft>Company </NavHamLeft>

									<NavHamRight>
										<IoIosArrowDown />
										{/* <DropDownContent>
											<SubA>Link 1</SubA>
											<SubA>Link 2</SubA>
											<SubA>Link 3</SubA>
										</DropDownContent> */}
									</NavHamRight>
								</NavHamEl>
							</NavHamShow>
						</NavHaberger>
					</NavRight>
				</Nav>
			</NavContainer>
		</>
	);
};

export default Header;
