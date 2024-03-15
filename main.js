
export function totalPrize(firstNephew) {
    if (firstNephew >= 100 && firstNephew <= 1000 && firstNephew % 100 === 0) {
        let secondNephew = firstNephew / 2;
        let thirdNephew = 3 * secondNephew;
        let fourthNephew = (firstNephew + secondNephew + thirdNephew) / 5;

        return firstNephew + secondNephew + thirdNephew + fourthNephew;
    } else {
        return "Invalid input";
    }
}
