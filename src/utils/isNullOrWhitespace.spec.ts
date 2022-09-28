import isNullOrWhitespace from './isNullOrWhitespace';

describe('isNullOrWhitespace', () => {
  [undefined, null, '', ' '].forEach(t => {
    it(`returns true for ${t}`, () => {
      expect(isNullOrWhitespace(t)).toBe(true);
    });
  });
});
