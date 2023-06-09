import * as React from "react";
import {
	PriceContainer,
	PriceEl1,
	PriceEl1Up,
	PriceEl1UpLeft,
	PriceEl1UpLeftTitle,
	PriceEl1UpLeftDescription,
	PriceEl1UpRight,
	PriceEl1Down,
	PriceEl1DownEl,
	PriceEl1DownElTitle,
	PriceEl1DownElLgo,
	PriceEl1DownElDescription,
	PriceEl1DownElFooter,
	PriceEl2,
	PriceEl2Left,
	PriceEl2LeftEl,
	PriceEl2Right,
	PriceEl2RightEl,
	PriceEl1RightEl,
	PriceEl3,
	PriceEl3Up,
	PriceEl3Down,
	MenuEl6,
	MenuEl6Left,
	MenuEl6LeftTitle,
	MenuEl6LeftDescription,
	MenuEl6LeftFooter,
	MenuEl6Right,
	MenuEl6RightImage,
	MenuEl6All,
} from "./style";
import { SiBitcoin } from "react-icons/si";
import PriceTable from "../../../../shared/priceTable";

interface IMenuProps {}

const Price: React.FC<IMenuProps> = (props) => {
	return (
		<>
			<PriceContainer>
				<PriceEl1>
					<PriceEl1Up>
						<PriceEl1UpLeft>
							<PriceEl1UpLeftTitle>In the past 24 hours</PriceEl1UpLeftTitle>
							<PriceEl1UpLeftDescription>
								Market is down <span>0.69%</span>
							</PriceEl1UpLeftDescription>
						</PriceEl1UpLeft>

						<PriceEl1UpRight>
							<p>
								<PriceEl1RightEl placeholder='Search all assets...' />
								<span>
									<svg
										fill='none'
										height='20'
										viewBox='0 0 26 26'
										width='20'
										aria-hidden='true'>
										<g stroke='#7d95b6' stroke-miterlimit='10' stroke-width='2'>
											<path d='M25 25l-7.034-7.035'></path>
											<path
												d='M10.931 20.862c5.485 0 9.931-4.446 9.931-9.931C20.862 5.446 16.416 1 10.931 1 5.446 1 1 5.446 1 10.931c0 5.485 4.446 9.931 9.931 9.931z'
												stroke-linecap='square'></path>
										</g>
									</svg>
								</span>
							</p>
						</PriceEl1UpRight>
					</PriceEl1Up>
					<PriceEl1Down>
						<PriceEl1DownEl>
							<PriceEl1DownElTitle>Top gainer</PriceEl1DownElTitle>
							<PriceEl1DownElLgo src='https://dynamic-assets.coinbase.com/a614984dea35ab94f5d195872ba6b3d7c5fa3afb94e0e596370ea3456c22d9e461fa09ce8d2cbf469695ddaee49b794e1c313c24b193aa29aa4e11733cbb12ac/asset_icons/00ecfc90aeeb27b666dda948bfd5dbd884197bc96c181e8e684fd97999243c2e.png' />
							<PriceEl1DownElDescription>Gala</PriceEl1DownElDescription>
							<PriceEl1DownElFooter>
								<span>+58.35%</span> price change
							</PriceEl1DownElFooter>
						</PriceEl1DownEl>
						<PriceEl1DownEl>
							<PriceEl1DownElTitle>Top gainer</PriceEl1DownElTitle>
							<PriceEl1DownElLgo src='https://dynamic-assets.coinbase.com/83fe770079d156bec15a0fc6c726dc00183fb37a823e9eabd58b8ab6554a8a41e07bb590afd9c762a8cbaad275e7faea7703ba0eb84724cf1a10f68b8b18eeeb/asset_icons/5c55d3f77e9a597f58e9b213eaced3abf9fe1590b6800453320afa095dbf624b.png' />
							<PriceEl1DownElDescription>Gala</PriceEl1DownElDescription>
							<PriceEl1DownElFooter>
								<span>+58.35%</span> price change
							</PriceEl1DownElFooter>
						</PriceEl1DownEl>
						<PriceEl1DownEl>
							<PriceEl1DownElTitle>Top gainer</PriceEl1DownElTitle>
							<PriceEl1DownElLgo src='https://dynamic-assets.coinbase.com/572dd07840ccb10cbd737304f23f7cfbe19059fef52968777322273c9a80fafba193e50c5de95535e52e90df9c67276b371873b61abd9cbafa34fa978aad8e99/asset_icons/5ff6054688fbaddfc95bb1127283db979a508aa67835f305c5988ce9b0ec8edc.png' />
							<PriceEl1DownElDescription>Gala</PriceEl1DownElDescription>
							<PriceEl1DownElFooter>
								<span>+58.35%</span> price change
							</PriceEl1DownElFooter>
						</PriceEl1DownEl>
						<PriceEl1DownEl>
							<PriceEl1DownElTitle>Top gainer</PriceEl1DownElTitle>
							<PriceEl1DownElLgo src='https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png' />
							<PriceEl1DownElDescription>Gala</PriceEl1DownElDescription>
							<PriceEl1DownElFooter>
								<span>+58.35%</span> price change
							</PriceEl1DownElFooter>
						</PriceEl1DownEl>
						<PriceEl1DownEl>
							<PriceEl1DownElTitle>Top gainer</PriceEl1DownElTitle>
							<PriceEl1DownElLgo src='https://dynamic-assets.coinbase.com/ddaf9d27a2388105c5568c68ebe4078d057efac1cb9b091af6a57f4d187cf06b2701b95f75bd148d3872df32b69ebb678de71a42da317370aaec7d6448bda379/asset_icons/80782fe2d690f299e7f5bb9b89af87e1db75769e59c14fa0257054c962401805.png' />
							<PriceEl1DownElDescription>Gala</PriceEl1DownElDescription>
							<PriceEl1DownElFooter>
								<span>+58.35%</span> price change
							</PriceEl1DownElFooter>
						</PriceEl1DownEl>
						<span>See all</span>
					</PriceEl1Down>
				</PriceEl1>
			</PriceContainer>

			<PriceContainer>
				<PriceEl2>
					<PriceEl2Left>
						<PriceEl2LeftEl>
							<span>All assets</span>
						</PriceEl2LeftEl>
						<PriceEl2LeftEl>Tradable</PriceEl2LeftEl>
						<PriceEl2LeftEl>Gainers</PriceEl2LeftEl>
						<PriceEl2LeftEl>Losers</PriceEl2LeftEl>
					</PriceEl2Left>
					<PriceEl2Right>
						<PriceEl2RightEl>1H</PriceEl2RightEl>
						<PriceEl2RightEl>
							<span>1D</span>
						</PriceEl2RightEl>
						<PriceEl2RightEl>1W</PriceEl2RightEl>
						<PriceEl2RightEl>1M</PriceEl2RightEl>
						<PriceEl2RightEl>1Y</PriceEl2RightEl>
					</PriceEl2Right>
				</PriceEl2>
			</PriceContainer>

			<PriceTable />

			<PriceContainer>
				<PriceEl3>
					<PriceEl3Up>
						<p>
							<span>
								<a href='/'>1</a>
							</span>
						</p>
						<p>
							<span>2</span>
						</p>
						<p>
							<span>3</span>
						</p>
						<p>
							<span>4</span>
						</p>
						<p>
							<span>
								<p>...</p>
							</span>
						</p>
						<p>
							<span>256</span>
						</p>
						<p>
							<span>{`>`}</span>
						</p>
					</PriceEl3Up>
					<PriceEl3Down>1-30 of 7,111 assets</PriceEl3Down>
				</PriceEl3>
			</PriceContainer>

			<PriceContainer>
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
			</PriceContainer>
		</>
	);
};

export default Price;
