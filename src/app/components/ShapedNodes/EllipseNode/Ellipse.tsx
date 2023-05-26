import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import EllipseSvg from "@/assets/svg/EllipseSvg";

export default function Ellipse({ data, isConnectable }) {
	// const onChange = useCallback((evt) => {
	// 	console.log(evt.target.value);
	// }, []);

	return (
		<EllipseDiv>
			<div>
				<label htmlFor="text">
					<p>{data.label}</p>
				</label>
			</div>
			<EllipseSvg width="130" height="60" color="#000" />
			<Handle
				type="target"
				position={Position.Left}
				id="a"
				isConnectable={isConnectable}
				// style={{ top: 30 }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				isConnectable={isConnectable}
			/>
		</EllipseDiv>
	);
}

const EllipseDiv = styled.div`
	height: 60px;
	width: 130px;
	/* border-radius: 50%; */
	/* border: 1px solid #000;
	padding: 5px;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center; */

	label {
		display: flex;
		text-align: center;
		color: #000;
		font-size: 8px;
		position: absolute;
		top: 30%;
		left: 40%;

		p {
			color: #fff;
		}
	}
`;
