export type TextStyle = {
    color?: string;
    size?: number;
    fontFamily?: string;
    fontWeight?: 'bold' | 'normal' | 'light';
    stroke?: string;
    strokeThickness?: number;
};
export declare const DEFAULT_TEXT_STYLE: Required<TextStyle>;
export declare function getTextStyle(style?: TextStyle): {
    fontSize: `${number}px`;
    fontFamily: string;
    fontWeight: "bold" | "normal" | "lighter";
    fill: string;
    lineJoin: "round";
    stroke: string;
    strokeThickness: number;
};
//# sourceMappingURL=text-style.d.ts.map