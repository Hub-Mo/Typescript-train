import {IdiscountType} from "./Interface";

export class NoDiscount implements IdiscountType{
    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }

}