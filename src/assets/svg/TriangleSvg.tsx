import { SVGCustomProps } from "@/app/models/protocols";
import styled from "styled-components";

export default function TriangleSvg(props: SVGCustomProps) {
	return (
		<TestDiv draggable>
			<DrawingDiv></DrawingDiv>
		</TestDiv>
	);
}

const TestDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DrawingDiv = styled.div`
	width: 0;
	height: 0;
	border-top: 30px solid transparent;
	border-bottom: 30px solid transparent;
	border-left: 72px solid black;
`;
