import ErrorRepository from "../js/errors";

describe('ErrorRepository class', () => {
    let errors;

    beforeEach(() => {
        errors = new ErrorRepository();
        errors.addError(404, 'Page not found');
        errors.addError(500, 'Internal server error');
    });

    it('should translate a known error code', () => {
        expect(errors.translate(404)).toBe('Page not found');
        expect(errors.translate(500)).toBe('Internal server error');
    });

    it('should return "Unknown error" for an unknown error code', () => {
        expect(errors.translate(403)).toBe('Unknown error');
    });
});
