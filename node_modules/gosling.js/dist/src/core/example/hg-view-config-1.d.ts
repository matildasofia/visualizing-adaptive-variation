declare const example: {
    compactLayout: boolean;
    trackSourceServers: string[];
    views: ({
        genomePositionSearchBoxVisible: boolean;
        genomePositionSearchBox: {
            autocompleteServer: string;
            autocompleteId: string;
            chromInfoServer: string;
            chromInfoId: string;
        };
        layout: {
            x: number;
            y: number;
            w: number;
            h: number;
        };
        tracks: {
            top: never[];
            left: ({
                type: string;
                width: number;
                height: number;
                contents: {
                    type: string;
                    server: string;
                    tilesetUid: string;
                    width: number;
                    height: number;
                    options: {
                        showMousePosition: boolean;
                        mousePositionColor: string;
                        fontSize: number;
                        labelPosition: string;
                        labelShowResolution: boolean;
                        labelColor: string;
                        labelBackgroundColor: string;
                        labelTextOpacity: number;
                        labelLeftMargin: number;
                        labelTopMargin: number;
                        labelRightMargin: number;
                        labelBottomMargin: number;
                        backgroundColor: string;
                        spec: {
                            spacing: number;
                            orientation: string;
                            assembly: string;
                            layout: string;
                            static: boolean;
                            xDomain: {
                                interval: number[];
                            };
                            centerRadius: number;
                            xOffset: number;
                            yOffset: number;
                            style: {
                                outlineWidth: number;
                            };
                            data: {
                                url: string;
                                type: string;
                                row: string;
                                column: string;
                                value: string;
                                categories: string[];
                                binSize: number;
                            };
                            mark: string;
                            x: {
                                field: string;
                                type: string;
                                axis: string;
                                domain: {
                                    interval: number[];
                                };
                                linkingId: string;
                            };
                            xe: {
                                field: string;
                                type: string;
                            };
                            row: {
                                field: string;
                                type: string;
                                legend: boolean;
                            };
                            color: {
                                field: string;
                                type: string;
                                legend: boolean;
                            };
                            tooltip: ({
                                field: string;
                                type: string;
                                alt: string;
                                format?: undefined;
                            } | {
                                field: string;
                                type: string;
                                alt: string;
                                format: string;
                            })[];
                            width: number;
                            height: number;
                            overlayOnPreviousTrack: boolean;
                        };
                        theme: {
                            base: string;
                            root: {
                                background: string;
                                titleColor: string;
                                titleBackgroundColor: string;
                                titleFontSize: number;
                                titleFontFamily: string;
                                titleAlign: string;
                                titleFontWeight: string;
                                subtitleColor: string;
                                subtitleBackgroundColor: string;
                                subtitleFontSize: number;
                                subtitleFontFamily: string;
                                subtitleFontWeight: string;
                                subtitleAlign: string;
                                mousePositionColor: string;
                            };
                            track: {
                                background: string;
                                alternatingBackground: string;
                                titleColor: string;
                                titleBackground: string;
                                titleFontSize: number;
                                titleAlign: string;
                                outline: string;
                                outlineWidth: number;
                            };
                            legend: {
                                position: string;
                                background: string;
                                backgroundOpacity: number;
                                labelColor: string;
                                labelFontSize: number;
                                labelFontWeight: string;
                                labelFontFamily: string;
                                backgroundStroke: string;
                                tickColor: string;
                            };
                            axis: {
                                tickColor: string;
                                labelColor: string;
                                labelFontSize: number;
                                labelFontWeight: string;
                                labelFontFamily: string;
                                baselineColor: string;
                                gridColor: string;
                                gridStrokeWidth: number;
                                gridStrokeType: string;
                                gridStrokeDash: number[];
                            };
                            markCommon: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            point: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            rect: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            triangle: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            area: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            line: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            bar: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            rule: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            link: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            text: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                                textAnchor: string;
                                textFontWeight: string;
                            };
                            brush: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                        };
                    };
                }[];
                uid?: undefined;
                chromInfoPath?: undefined;
                options?: undefined;
            } | {
                uid: string;
                type: string;
                chromInfoPath: string;
                options: {
                    layout: string;
                    outerRadius: null;
                    width: number;
                    height: number;
                    theme: {
                        base: string;
                        root: {
                            background: string;
                            titleColor: string;
                            titleBackgroundColor: string;
                            titleFontSize: number;
                            titleFontFamily: string;
                            titleAlign: string;
                            titleFontWeight: string;
                            subtitleColor: string;
                            subtitleBackgroundColor: string;
                            subtitleFontSize: number;
                            subtitleFontFamily: string;
                            subtitleFontWeight: string;
                            subtitleAlign: string;
                            mousePositionColor: string;
                        };
                        track: {
                            background: string;
                            alternatingBackground: string;
                            titleColor: string;
                            titleBackground: string;
                            titleFontSize: number;
                            titleAlign: string;
                            outline: string;
                            outlineWidth: number;
                        };
                        legend: {
                            position: string;
                            background: string;
                            backgroundOpacity: number;
                            labelColor: string;
                            labelFontSize: number;
                            labelFontWeight: string;
                            labelFontFamily: string;
                            backgroundStroke: string;
                            tickColor: string;
                        };
                        axis: {
                            tickColor: string;
                            labelColor: string;
                            labelFontSize: number;
                            labelFontWeight: string;
                            labelFontFamily: string;
                            baselineColor: string;
                            gridColor: string;
                            gridStrokeWidth: number;
                            gridStrokeType: string;
                            gridStrokeDash: number[];
                        };
                        markCommon: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        point: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        rect: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        triangle: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        area: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        line: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        bar: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        rule: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        link: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                        text: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                            textAnchor: string;
                            textFontWeight: string;
                        };
                        brush: {
                            color: string;
                            size: number;
                            stroke: string;
                            strokeWidth: number;
                            opacity: number;
                            nominalColorRange: string[];
                            quantitativeSizeRange: number[];
                        };
                    };
                    assembly: string;
                    stroke: string;
                    color: string;
                    fontSize: number;
                    fontFamily: string;
                    fontWeight: string;
                    tickColor: string;
                    tickFormat: string;
                    tickPositions: string;
                    reverseOrientation: boolean;
                };
                width: number;
                height?: undefined;
                contents?: undefined;
            })[];
            center: never[];
            right: never[];
            bottom: never[];
            gallery: never[];
            whole: never[];
        };
        initialXDomain: number[];
        initialYDomain: number[];
        zoomFixed: boolean;
        zoomLimits: (number | null)[];
        uid: string;
        chromInfoPath: string;
    } | {
        genomePositionSearchBoxVisible: boolean;
        genomePositionSearchBox: {
            autocompleteServer: string;
            autocompleteId: string;
            chromInfoServer: string;
            chromInfoId: string;
        };
        layout: {
            x: number;
            y: number;
            w: number;
            h: number;
        };
        tracks: {
            top: never[];
            left: {
                type: string;
                width: number;
                height: number;
                contents: {
                    type: string;
                    server: string;
                    tilesetUid: string;
                    width: number;
                    height: number;
                    options: {
                        showMousePosition: boolean;
                        mousePositionColor: string;
                        fontSize: number;
                        labelPosition: string;
                        labelShowResolution: boolean;
                        labelColor: string;
                        labelBackgroundColor: string;
                        labelTextOpacity: number;
                        labelLeftMargin: number;
                        labelTopMargin: number;
                        labelRightMargin: number;
                        labelBottomMargin: number;
                        backgroundColor: string;
                        spec: {
                            spacing: number;
                            orientation: string;
                            assembly: string;
                            layout: string;
                            static: boolean;
                            xDomain: {
                                interval: number[];
                            };
                            centerRadius: number;
                            xOffset: number;
                            yOffset: number;
                            style: {
                                outlineWidth: number;
                            };
                            data: {
                                url: string;
                                type: string;
                                row: string;
                                column: string;
                                value: string;
                                categories: string[];
                                binSize: number;
                            };
                            mark: string;
                            x: {
                                field: string;
                                type: string;
                                domain: {
                                    interval: number[];
                                };
                                linkingId: string;
                            };
                            xe: {
                                field: string;
                                type: string;
                            };
                            row: {
                                field: string;
                                type: string;
                                legend: boolean;
                            };
                            color: {
                                field: string;
                                type: string;
                                legend: boolean;
                            };
                            tooltip: ({
                                field: string;
                                type: string;
                                alt: string;
                                format?: undefined;
                            } | {
                                field: string;
                                type: string;
                                alt: string;
                                format: string;
                            })[];
                            width: number;
                            height: number;
                        };
                        theme: {
                            base: string;
                            root: {
                                background: string;
                                titleColor: string;
                                titleBackgroundColor: string;
                                titleFontSize: number;
                                titleFontFamily: string;
                                titleAlign: string;
                                titleFontWeight: string;
                                subtitleColor: string;
                                subtitleBackgroundColor: string;
                                subtitleFontSize: number;
                                subtitleFontFamily: string;
                                subtitleFontWeight: string;
                                subtitleAlign: string;
                                mousePositionColor: string;
                            };
                            track: {
                                background: string;
                                alternatingBackground: string;
                                titleColor: string;
                                titleBackground: string;
                                titleFontSize: number;
                                titleAlign: string;
                                outline: string;
                                outlineWidth: number;
                            };
                            legend: {
                                position: string;
                                background: string;
                                backgroundOpacity: number;
                                labelColor: string;
                                labelFontSize: number;
                                labelFontWeight: string;
                                labelFontFamily: string;
                                backgroundStroke: string;
                                tickColor: string;
                            };
                            axis: {
                                tickColor: string;
                                labelColor: string;
                                labelFontSize: number;
                                labelFontWeight: string;
                                labelFontFamily: string;
                                baselineColor: string;
                                gridColor: string;
                                gridStrokeWidth: number;
                                gridStrokeType: string;
                                gridStrokeDash: number[];
                            };
                            markCommon: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            point: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            rect: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            triangle: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            area: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            line: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            bar: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            rule: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            link: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                            text: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                                textAnchor: string;
                                textFontWeight: string;
                            };
                            brush: {
                                color: string;
                                size: number;
                                stroke: string;
                                strokeWidth: number;
                                opacity: number;
                                nominalColorRange: string[];
                                quantitativeSizeRange: number[];
                            };
                        };
                    };
                }[];
            }[];
            center: never[];
            right: never[];
            bottom: never[];
            gallery: never[];
            whole: never[];
        };
        initialXDomain: number[];
        initialYDomain: number[];
        zoomFixed: boolean;
        zoomLimits: (number | null)[];
        uid: string;
        chromInfoPath?: undefined;
    })[];
    zoomLocks: {
        locksByViewUid: {};
        locksDict: {};
    };
    locationLocks: {
        locksByViewUid: {};
        locksDict: {};
    };
    editable: boolean;
    chromInfoPath: string;
};
export default example;
//# sourceMappingURL=hg-view-config-1.d.ts.map