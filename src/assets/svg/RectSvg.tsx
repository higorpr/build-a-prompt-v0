import { SVGCustomProps } from "@/app/models/protocols";
import styled from "styled-components";
import { DragEvent } from "react";

export default function RectSvg(props: SVGCustomProps) {
	const w = `${props.width}px`;
	return (
		<TestDiv draggable width={w}>
			<svg
				width={`${props.width}px`}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<rect
					x="0"
					y="0"
					rx="10"
					width={props.width}
					height={props.height}
					fill={props.color}
					// stroke-width="2"
					// stroke="#fff"
				></rect>
			</svg>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	width: ${(p) => p.width};
`;
