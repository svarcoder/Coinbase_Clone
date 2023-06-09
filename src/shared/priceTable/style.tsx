import styled from "styled-components";

export const TableContainer = styled.div`
	width: 100%;
`;

export const Container = styled.div`
	margin: 0px auto;
	padding: 40px 40px;
	max-width: 1000px;
	overflow-x: scroll;
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
		border: 1px solid #dddddd;
		color: rgb(91, 97, 110);
		border-radius: 5px;
		border-style: hidden;
		box-shadow: 0 0 0 1px #dddddd;
		font-size: 12px;
		font-weight: 400;

		tbody {
			tr {
				&:hover {
					background-color: #cdd1c2;
					cursor: pointer;
				}
			}
		}
	}

	td,
	th {
		border-bottom: 1px solid #dddddd;
		text-align: left;
		padding: 10px;
	}
`;
export const TablePercent = styled.div`
	color: #606b5f;
	font-size: 15px;
`;
export const TableHeadEl = styled.div`
	text-align: center;
`;

export const TableNameEl1 = styled.div`
	color: #0e0d0d;
	font-size: 25px;
	margin: 0px 10px;
`;
export const TableName = styled.div`
	display: flex;
	color: #cdd1c2;
	font-size: 25px;
	align-items: center;
	margin-left: 10px;
`;
export const TableNameEl2 = styled.div`
	color: #bdbebe;
	font-size: 15px;
`;
export const TablePrice = styled.div`
	font-size: 15px;
	color: #0e0d0d;
	font-weight: bold;
	text-align: center;
`;
export const TableButton = styled.button`
	background-color: #2745f3;
	color: white;
	width: 100%;
	max-width: 80px;
	height: 40px;
	border: none;
	border-radius: 5px;
	font-weight: bold;

	&:hover {
		background-color: green;
	}
`;
