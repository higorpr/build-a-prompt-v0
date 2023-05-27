import { SVGCustomProps } from "@/app/models/protocols";
import styled from "styled-components";

export default function ArrowBoxSvg(props: SVGCustomProps) {
	const horizontalLineXCoord = Number(props.width) * 0.9;
	const middlePointYCoord = Number(props.height) * 0.5;
	return (
		<TestDiv draggable>
			<svg
				width={props.width}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<path
					d={`M0,0 L${horizontalLineXCoord},0  L${props.width},${middlePointYCoord} L${horizontalLineXCoord},${props.height} L0,${props.height}  z`}
					fill={props.color}
				></path>
			</svg>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	z-index: 0;

	path {
		z-index: 1;
	}
`;
