import {test, expect, describe} from "@jest/globals"
import {Check} from "../iterator/range.js";

describe('range', () => {
    test("should return true if array Fibonacci is correct", () => {
        expect(Check(0,21)).toBeTruthy();
    })
    test("should return false if array Fibonacci is incorrect", () => {
        expect(Check(0,5)).toBeFalsy();
        expect(Check(3,21)).toBeFalsy();
    })

})
