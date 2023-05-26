import { SVGCustomProps } from "@/app/models/protocols";
import { DragEvent } from "react";
import styled from "styled-components";

export default function ParallelogramSvg(props: SVGCustomProps) {
	const completeWidth = Number(props.width);
	const horizontalLineXCoord = Number(props.width) * 0.8;
	const YPointCoord = Number(props.height);
	return (
		<TestDiv draggable width={`${props.width}px`}>
			<svg
				width={props.width}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<path
					d={`M0,${YPointCoord} L${
						completeWidth - horizontalLineXCoord
					},0 L${completeWidth},0 L${horizontalLineXCoord},${YPointCoord}`}
					fill={props.color}
					// stroke-width="2"
					// stroke="#fff"
				></path>
			</svg>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	width: 130px;
`;
