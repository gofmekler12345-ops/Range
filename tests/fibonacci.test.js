import {test, expect, describe} from "@jest/globals"
import {Fibonacci} from "../iterator/fibonacci.js";


describe('Fibonacci', () => {
    test("should return array Fibonacci for 5", () => {
        const fib=new Fibonacci(5);
        expect([...fib]).toEqual([0,1,1,2,3])
    })
    test("should return only first number", () => {
        const fib=new Fibonacci(1);
        expect([...fib]).toEqual([0])
    })
    test("should return empty array", () => {
        const fib=new Fibonacci(0);
        expect([...fib]).toEqual([])
    })


})
