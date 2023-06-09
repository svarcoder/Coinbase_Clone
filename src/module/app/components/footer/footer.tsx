import * as React from "react";
import {
	FooterContainer,
	MainFooter,
	FooterLeft,
	FooterLeftTitle,
	FooterLeftBody,
	FooterDescription,
	FooterSocial,
	FooterRight,
	FooterRightLeft,
	FooterRightLeftUp,
	FooterRightLeftDown,
	FooterRightMiddle,
	FooterRightMiddleUp,
	FooterRightMiddleMiddle,
	FooterRightMiddleDown,
	FooterRightRight,
	FooterRightRightUp,
	FooterRightLeftUpTitle,
	FooterRightLeftUpBody,
	FooterRightLeftUpBodyEl,
} from "./style";

interface IHeaderProps {}

const Footer: React.FC<IHeaderProps> = (props) => {
	return (
		<>
			<FooterContainer>
				<MainFooter>
					<FooterLeft>
						<FooterLeftTitle>coinbase</FooterLeftTitle>
						<FooterLeftBody>
							<option value='en'>English</option>
							<option value='de'>Deutsch</option>
							<option value='es'>Español - España</option>
							<option value='es-LA'>Español - América Latina</option>
							<option value='fr'>Français - France</option>
							<option value='it'>Italiano</option>
							<option value='pl'>Polski</option>
							<option value='pt'>Português - Brasil</option>
							<option value='pt-PT'>Português - Portugal</option>
							<option value='ru'>Pусский</option>
							<option value='th'>ไทย</option>
							<option value='tr'>Türkçe</option>
						</FooterLeftBody>
						<FooterDescription>© 2021 Coinbase</FooterDescription>
						<FooterSocial>Blog • Twitter • Facebook</FooterSocial>
					</FooterLeft>
					<FooterRight>
						<FooterRightLeft>
							<FooterRightLeftUp>
								<FooterRightLeftUpTitle>Company</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl>About </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Careers </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Affiliates </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Blog </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Press</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Investors</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Legal & privacy{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										Cookie policy
									</FooterRightLeftUpBodyEl>

									<FooterRightLeftUpBodyEl>
										Cookie preferences{" "}
									</FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightLeftUp>
							<FooterRightLeftDown>
								<FooterRightLeftUpTitle>Learn</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl>
										Browse crypto prices{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Coinbase Bytes newsletter{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Crypto basics{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										Tips & tutorials{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Market updates{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										What is Bitcoin?{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										What is crypto?{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										What is a blockchain?{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										How to set up a crypto wallet
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										How to send crypto{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Taxes </FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightLeftDown>
						</FooterRightLeft>
						<FooterRightMiddle>
							<FooterRightMiddleUp>
								<FooterRightLeftUpTitle>Individuals</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl>Buy & sell </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Earn free crypto
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Wallet </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Card </FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightMiddleUp>
							<FooterRightMiddleMiddle>
								<FooterRightLeftUpTitle>Businesses</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl> Prime</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Custody</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Asset Hub </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Commerce</FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightMiddleMiddle>
							<FooterRightMiddleDown>
								<FooterRightLeftUpTitle>Developers</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl>
										Coinbase Cloud
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Connect </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Commerce </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Pro </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										Bison Trails
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>WalletLink </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Rosetta</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> USDC</FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightMiddleDown>
						</FooterRightMiddle>
						<FooterRightRight>
							<FooterRightRightUp>
								<FooterRightLeftUpTitle>Support</FooterRightLeftUpTitle>
								<FooterRightLeftUpBody>
									<FooterRightLeftUpBodyEl>
										Help center{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>Contact us </FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Create account{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										ID verification{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										Account information{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Payment methods
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Account access{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										Supported crypto{" "}
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl>
										{" "}
										Supported countries
									</FooterRightLeftUpBodyEl>
									<FooterRightLeftUpBodyEl> Status</FooterRightLeftUpBodyEl>
								</FooterRightLeftUpBody>
							</FooterRightRightUp>
						</FooterRightRight>
					</FooterRight>
				</MainFooter>
			</FooterContainer>
		</>
	);
};

export default Footer;
