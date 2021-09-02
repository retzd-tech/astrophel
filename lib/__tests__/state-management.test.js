import { useRecoilState, atom } from "recoil";

const { GlobalStates } = require("../state-management");

jest
.mock("recoil", () => ({
    useRecoilState: jest.fn(),
    atom: jest.fn()
}))

describe("state-management", () => {
    describe("#GlobalStates", () => {
        it("should get text and setText global state", () => {
            const text = 'text';
            const setText = jest.fn();
            const defaultState = '';
            useRecoilState.mockReturnValue([text, setText]);
            const expectedResult = { text, setText }
            
            const actualResult = GlobalStates(text, defaultState);

            expect(actualResult).toEqual(expectedResult);
        });
    });
});