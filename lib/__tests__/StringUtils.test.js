const { StringUtils } = require("../Utils");

describe("StringUtils", () => {
    describe("#capitalizaText", () => {
        it("should capitalize the text", () => {
            const text = 'text';
            const expectedResult = 'Text';

            const actualResult = StringUtils.capitalizeText(text);

            expect(actualResult).toEqual(expectedResult);
        });
    });
});