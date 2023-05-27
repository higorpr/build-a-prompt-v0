import styled from "styled-components";
import ArrowBoxSvg from "@/assets/svg/ArrowBoxSvg";
import RectSvg from "@/assets/svg/RectSvg";
import { DragEvent } from "react";
import React from "react";
import ParallelogramSvg from "@/assets/svg/ParallelogramSvg";
import EllipseSvg from "@/assets/svg/EllipseSvg";
import TriangleSvg from "@/assets/svg/TriangleSvg";
import DocumentSvg from "@/assets/svg/DocumentSvg";

export default function ShapesBar() {
	function onDragStart(
		event: DragEvent<HTMLDivElement>,
		nodeType: string
	): void {
		console.log(event);
		console.log(nodeType);

		if (event.dataTransfer === null) return;

		event.dataTransfer.setData("application/reactflow", nodeType);
		event.dataTransfer.effectAllowed = "move";
	}

	const initialNodes = [
		/* eslint-disable */
		{
			nodeType: "arrow",
			jsxComp: <ArrowBoxSvg width="130" height="60" color="#000" />,
		},
		{
			nodeType: "rectangle",
			jsxComp: <RectSvg width="130" height="60" color="#000" />,
		},
		{
			nodeType: "parallelogram",
			jsxComp: <ParallelogramSvg width="130" height="60" color="#000" />,
		},
		{
			nodeType: "ellipse",
			jsxComp: <EllipseSvg width="120" height="60" color="#000" />,
		},
		{
			nodeType: "triangle",
			jsxComp: <TriangleSvg width="120" height="60" color="#000" />,
		},
		{
			nodeType: "document",
			jsxComp: <DocumentSvg width="120" height="60" color="#000" />,
		},
		/* eslint-disable */
	];
	return (
		<StyledComp>
			<Title>
				<p>Initial Shapes</p>
			</Title>
			<StyledBar>
				{initialNodes.map((compObj, idx) => (
					<IconHolder
						key={idx}
						onDragStart={(event) =>
							onDragStart(event, compObj.nodeType)
						}
					>
						{compObj.jsxComp}
					</IconHolder>
				))}
			</StyledBar>
		</StyledComp>
	);
}

const StyledComp = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledBar = styled.div`
	max-height: 9vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 5px 0px;
	/* background-color: yellow; */
	border-bottom: 1px solid #000;
`;

const IconHolder = styled.div`
	width: 130px;
`;

const Title = styled.div`
	/* background-color: red; */
	border-bottom: 1px solid #000;

	p {
		/* background-color: darkblue; */
		margin: 0;
	}
`;
