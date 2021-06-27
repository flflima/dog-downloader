import { getContentType, getFilename } from './http-utils';

describe('HttpUtils', () => {
  describe('Given an URL', () => {
    it('should return filename after last slash', () => {
      const filename = getFilename('htpp://test.com/api/any/test.jpg');
      expect(filename).toBe('test.jpg');
    });
  });

  describe('Given a filename', () => {
    it('should return "jpeg" when extension is "jpg"', () => {
      const contentType = getContentType('test.jpg');
      expect(contentType).toBe('jpeg');
    });

    it('should return "jpeg" when extension is unknown', () => {
      const contentType = getContentType('test.rtf');
      expect(contentType).toBe('jpeg');
    });
  });
});
