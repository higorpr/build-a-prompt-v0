import { SVGCustomProps } from "@/app/models/protocols";
import { DragEvent } from "react";
import styled from "styled-components";

export default function ParallelogramSvg(props: SVGCustomProps) {
	return (
		<TestDiv draggable>
			<DrawingDiv></DrawingDiv>
		</TestDiv>
	);
}

const TestDiv = styled.div``;

const DrawingDiv = styled.div`
	height: 60px;
	width: 130px;
	border-radius: 5px;
	border: 1.5px solid #eee;
	transform: skew(30deg);
	background-color: #000;
`;
