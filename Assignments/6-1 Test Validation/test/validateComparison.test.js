import {expect} from "chai";
import {validateComparison} from "../src/validateComparison.js";

describe("validateComparison Tests", () => {
    it ("should return 6 when comparing 5 and 6", () => {
        expect(validateComparison(5, 6)).to.equal(6);
    })

    it ("should return 4 when comparing 4 and 3", () => {
        expect(validateComparison(4, 3)).to.equal(4);
    })

    it ("should return The amounts are equal", () => {
        expect(validateComparison(3, 3)).to.equal("The amounts are equal");
    })

    it ("should error for value 1", () => {
        expect(validateComparison("a", 5)).to.equal("Please enter a number in Value 1");
    })

    it ("should error for value 2", () => {
        expect(validateComparison(5, "a")).to.equal("Please enter a number in Value 2");
    })

    it ("should error for value 1", () => {
        expect(validateComparison("", 5)).to.equal("Please enter a number in Value 1");
    })

    it ("should error for value 2", () => {
        expect(validateComparison(5, "")).to.equal("Please enter a number in Value 2");
    })

    it ("should return 5 when comparing -1 and 5", () => {
        expect(validateComparison(-1, 5)).to.equal(5);
    })
    
    it ("should return 34 when comparing 34 and -30", () => {
        expect(validateComparison(34, -30)).to.equal(34);
    })

    it ("should return -5 when comparing -5 and -6", () => {
        expect(validateComparison(-5, -6)).to.equal(-5);
    })
    
    it ("should return 5 when comparing 5 and -1", () => {
        expect(validateComparison(5, -1)).to.equal(5);
    })

    it ("should return 2 when comparing 1.5 and 2", () => {
        expect(validateComparison(1.5, 2)).to.equal(2);
    })

    it ("should return 2 when comparing 2 and 1.5", () => {
        expect(validateComparison(2, 1.5)).to.equal(2);
    })

    it ("should error for value 1", () => {
        expect(validateComparison("3/4", 1)).to.equal("Please enter a number in Value 1");
    })

    it ("should error for value 1", () => {
        expect(validateComparison("5b", 3)).to.equal("Please enter a number in Value 1");
    })

    it ("should error for value 2", () => {
        expect(validateComparison(3, "5b")).to.equal("Please enter a number in Value 2");
    })

    it ("should error for value 1", () => {
        expect(validateComparison("", 5)).to.equal("Please enter a number in Value 1");
    })

    it ("should error for value 2", () => {
        expect(validateComparison(5, "")).to.equal("Please enter a number in Value 2");
    })
});