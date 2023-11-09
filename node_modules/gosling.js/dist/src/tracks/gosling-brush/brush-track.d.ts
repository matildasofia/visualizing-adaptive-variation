declare function BrushTrack(HGC: any, ...args: any[]): any;
declare namespace BrushTrack {
    var config: {
        type: string;
        datatype: string[];
        local: boolean;
        projection: boolean;
        orientation: string;
        thumbnail: HTMLElement;
        availableOptions: string[];
        defaultOptions: {
            innerRadius: number;
            outerRadius: number;
            startAngle: number;
            endAngle: number;
            axisPositionHorizontal: string;
            projectionFillColor: string;
            projectionStrokeColor: string;
            projectionFillOpacity: number;
            projectionStrokeOpacity: number;
            strokeWidth: number;
        };
    };
}
export default BrushTrack;
//# sourceMappingURL=brush-track.d.ts.map