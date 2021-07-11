const script = require('../src/pow');
const pow = script.pow

describe("function pow()", () => {
    it('must return 9 with arguments(3,2)', () => {
        expect(pow(3,2)).toBe(9);
    })
    it('must return 8 with arguments(2,3)', () => {
        expect(pow(2,3)).toBe(8);
    })
})