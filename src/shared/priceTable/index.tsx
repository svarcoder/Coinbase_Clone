import * as React from "react";
import {
	Container,
	TableNameEl1,
	TableName,
	TableNameEl2,
	TablePercent,
	TablePrice,
	TableContainer,
	TableButton,
	TableHeadEl,
} from "./style";
import { SiBitcoin } from "react-icons/si";
import { BiRupee } from "react-icons/bi";
import { LineChart, Line } from "recharts";

const PriceTable: React.FC = (props) => {
	const data = [
		{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },
		{ name: "Page B", uv: 800, pv: 2600, amt: 2600 },
		{ name: "Page C", uv: 380, pv: 2000, amt: 2000 },
		{ name: "Page D", uv: 200, pv: 1500, amt: 1500 },
		{ name: "Page E", uv: 220, pv: 1800, amt: 1800 },
		{ name: "Page F", uv: 260, pv: 2200, amt: 2200 },
	];

	const renderLineChart = (
		<LineChart width={50} height={40} data={data}>
			<Line type='monotone' dataKey='uv' stroke='#8884d8' />
		</LineChart>
	);
	return (
		<>
			<TableContainer>
				<Container>
					<table>
						<thead>
							<tr>
								<th>Name</th>

								<th>
									<TableHeadEl>Price </TableHeadEl>
								</th>
								<th>Change</th>
								<th>Price chart</th>
								<th>Volume (24h)</th>
								<th>Market cap</th>
								<th>Supply</th>
								<th>Trade</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
							<tr>
								<td>
									<TableName>
										<SiBitcoin color='Orange' />
										<TableNameEl1>Bitcoin</TableNameEl1>
										<TableNameEl2>BTC</TableNameEl2>
									</TableName>
								</td>
								<td>
									<TablePrice>
										<BiRupee />
										389450.00
									</TablePrice>
								</td>
								<td>
									<TablePercent>-7.81%</TablePercent>
								</td>
								<td>{renderLineChart}</td>
								<td>₹36.4B</td>
								<td>₹83.0T</td>
								<td>18.9M</td>
								<td>
									<TableButton>Trade</TableButton>
								</td>
							</tr>
						</tbody>
					</table>
				</Container>
			</TableContainer>
		</>
	);
};

export default PriceTable;
