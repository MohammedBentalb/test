import { setupCounter } from "./counter";
import {describe, it, expect} from "vitest"


describe("Counter", () => {
    it( "initialize and increment counter", ()=> {
        const button = document.createElement("button")
        
        setupCounter(button)
        expect(button.innerHTML).toBe("count is 0")
        button.click()
        expect(button.innerHTML).toBe("count is 1")
        button.click()
        expect(button.innerHTML).toBe("count is 2")
    })
})