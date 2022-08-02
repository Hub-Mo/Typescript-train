export class NoDiscount {
    apply(price) {
        return price;
    }
    showCalculation() {
        return "No discount";
    }
}
