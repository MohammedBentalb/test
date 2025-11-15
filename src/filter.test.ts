import { filtering } from "./filter";
import {describe, expect, it} from "vitest"

const mokeArr = [5, 8, 7, 6, 5, 9, 5]


describe("Filter test", () => {
    it("it returns a new filtered array", () => {
        expect(filtering(mokeArr, 5)).toEqual([8, 7, 6, 9])
    })

    it("it does not mutate the original array", () => {
        let tmp = [...mokeArr]
        filtering(mokeArr, 5)
        expect(tmp).toEqual(mokeArr)
    })
})
