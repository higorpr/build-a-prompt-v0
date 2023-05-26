import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Triangle({ data, isConnectable }) {
	return (
		<TriangleDiv>
			<div>
				<label htmlFor="text">
					<p>{data.label}</p>
				</label>
			</div>
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				// style={{ backgroundColor: "blue" }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
				// style={{ backgroundColor: "blue" }}
			/>
		</TriangleDiv>
	);
}

const TriangleDiv = styled.div`
	width: 0;
	height: 0;
	border-top: 40px solid transparent;
	border-bottom: 40px solid transparent;
	border-left: 72px solid black;

	label {
		/* background-color: red; */
		width: 60px;
		height: 80px;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 8px;
		position: absolute;
		padding: 5px;
		top: 0px;
		left: 0px;
		/* background-color: red; */

		p {
			color: white;
			font-size: 8px;
		}
	}
`;
