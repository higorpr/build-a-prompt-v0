import { SVGCustomProps } from "@/app/models/protocols";
import styled from "styled-components";

export default function EllipseSvg(props: SVGCustomProps) {
	return (
		<TestDiv draggable width={`${props.width}px`}>
			<svg
				width={props.width}
				height={props.height}
				style={{ overflow: "visible" }}
			>
				<ellipse
					cx={Number(props.width) / 2}
					cy={Number(props.height) / 2}
					rx={Number(props.width) / 2}
					ry={Number(props.height) / 2}
					fill={props.color}
				></ellipse>
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
