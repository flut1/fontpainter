interface IRenderEngineSVGLayer {
	offset: [number, number, number, number];
	processPath:(path:SVGPathElement, unitsPerPx:number) => any;
	offsetIsPx:boolean;
}

export default IRenderEngineSVGLayer;
