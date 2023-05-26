import styled from "styled-components";
import ArrowBoxSvg from "@/assets/svg/ArrowBoxSvg";
import RectSvg from "@/assets/svg/RectSvg";
import { DragEvent } from "react";
import React from "react";
import ParallelogramSvg from "@/assets/svg/ParallelogramSvg";
import EllipseSvg from "@/assets/svg/EllipseSvg";

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
		/* eslint-disable */
	];
	return (
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
	);
}

const StyledBar = styled.div`
	max-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const IconHolder = styled.div`
	width: 130px;
`;
