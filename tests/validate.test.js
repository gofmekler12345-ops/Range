import {test, expect, describe} from "@jest/globals"
import {Check, Range} from "../iterator/range.js";

const res=new Range(0,21)
const arr=[...res];

describe('range', () => {
    test("should return true if array Fibonacci is correct", () => {
        expect(Check(0,21)).toBeTruthy();
        expect(arr).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    })
    test("should return false if array Fibonacci is incorrect", () => {
        expect(Check(1,7)).toBeFalsy();
        expect(Check(3,21)).toBeFalsy();
    })

})
