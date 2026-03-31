export class numbers {
    constructor(
        private numerator: number,
        private denominator: number,
    ) {}

    public gcdBruteForce() {
        for (let i = this.numerator + this.denominator; i > 0; i-- ){
            if(this.numerator % i === 0 && this.denominator % i === 0) {
                return i;
            }
        }
    }

}