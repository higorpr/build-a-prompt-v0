import ArrowBoxSvg from "@/assets/svg/ArrowBoxSvg";
import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function ArrowBox({ data, isConnectable }) {
	return (
		<ArrowBoxDiv>
			<div>
				<label htmlFor="text">
					<p>{data.label}</p>
				</label>
				<ArrowBoxSvg width="130" height="60" color="#000" />
			</div>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				style={{top:30 }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
				// style={{ left: 102 }}
			/>
		</ArrowBoxDiv>
	);
}

const ArrowBoxDiv = styled.div`
	background: white;
	position: relative;
	width: 130px;
	height: 60px;

	label {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #000;
		font-size: 8px;
		padding: 10px;
		/* background-color: tomato; */
		position: absolute;
		z-index: 1;

		p {
			color: #ffffff;
		}
	}
`;

const UpperPart = styled.div`
	height: 25px;
	width: 100px;
	border: 1px solid #000;
	border-bottom: none;
	transform: skew(20deg);
	position: absolute;
	background-color: black;
	top: 0px;
	/* display: none; */
`;

const LowerPart = styled.div`
	/* display: none; */
	height: 25px;
	width: 100px;
	border: 1px solid #000;
	border-top: none;
	transform: skew(-20deg);
	position: absolute;
	background-color: black;
	top: 50%;
`;
