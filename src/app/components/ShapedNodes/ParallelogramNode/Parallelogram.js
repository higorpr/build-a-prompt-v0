import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function Parallelogram({ data, isConnectable }) {
	return (
		<ParallelogramDiv>
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
				style={{ color: "red", transform: "skew(-30deg)" }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
				style={{ transform: "skew(-30deg)" }}
			/>
		</ParallelogramDiv>
	);
}

const ParallelogramDiv = styled.div`
	height: 50px;
	width: 100px;
	border-radius: 5px;
	border: 1.5px solid #eee;
	padding: 5px;
	background: black;
	display: flex;
	align-items: center;
	justify-content: center;
	border-color: #000;
	transform: skew(30deg);

	label {
		display: flex;
		text-align: center;
		color: #000;
		font-size: 8px;
		transform: skew(-30deg);

		p {
			color: #fff;
		}
	}
`;
