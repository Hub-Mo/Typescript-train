export interface IdiscountType{
    apply: (price : number) => number;
    showCalculation: (price : number) => string;
}