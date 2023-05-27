import { SVGCustomProps } from "@/app/models/protocols";
import styled from "styled-components";

export default function DocumentSvg(props: SVGCustomProps) {
	return (
		<DocumentDiv draggable>
			<UpperPart>
				<SemiRectangle></SemiRectangle>
				<Triangle>
					<Cathets></Cathets>
					<Hypothenuse></Hypothenuse>
				</Triangle>
			</UpperPart>
			<LowerPart></LowerPart>
		</DocumentDiv>
	);
}

const DocumentDiv = styled.div`
	width: 50px;
	height: 60px;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const UpperPart = styled.div`
	width: 100%;
	height: 10px;
	/* background-color: grey; */
	display: flex;
`;

const SemiRectangle = styled.div`
	width: 40px;
	border-left: 1px solid black;
	border-top: 1px solid black;
`;

const Triangle = styled.div`
	display: flex;
	height: 100%;
	width: 10px;
	position: relative;
`;

const Cathets = styled.div`
	border-left: 1px solid black;
	border-bottom: 1px solid black;
	height: 100%;
	width: 10px;
`;

const Hypothenuse = styled.div`
	transform: skew(45deg);
	width: 10px;
	height: 100%;
	border-left: 1.8px solid black;
	position: absolute;
	left: 4.2px;
`;

const LowerPart = styled.div`
	height: 50px;
	width: 100%;
	border: 1px solid #000;
	border-top: none;
`;
