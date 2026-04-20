export function validateComparison(a, b) {
    if (!Number.isFinite(a)) {
        return "Please enter a number in Value 1";
    }

    if (!Number.isFinite(b)) {
        return "Please enter a number in Value 2";
    }

    if (a == b) {
        return "The amounts are equal"
    }

    if (a > b) {
        return a
    }

    return b
}