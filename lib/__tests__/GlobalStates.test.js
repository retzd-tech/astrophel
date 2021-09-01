import { useRecoilState, atom } from "recoil";

const { GlobalStates } = require("./../GlobalStates");

jest
.mock("recoil", () => ({
    useRecoilState: jest.fn(),
    atom: jest.fn()
}))

describe("UnregisterEventModal in Enrolled", () => {
    describe("#render", () => {
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