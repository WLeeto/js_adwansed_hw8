import Settings from "../js/settings";

describe('Settings class', () => {
    let gameSettings;

    beforeEach(() => {
        gameSettings = new Settings();
    });

    it('should set and retrieve a user setting', () => {
        gameSettings.setUserSetting('theme', 'light');
        gameSettings.setUserSetting('music', 'rock');
        expect(gameSettings.settings.get('theme')).toBe('light');
        expect(gameSettings.settings.get('music')).toBe('rock');
    });

    it('should merge user settings with default settings', () => {
        gameSettings.setUserSetting('theme', 'light');
        gameSettings.setUserSetting('music', 'rock');
        const expectedSettings = new Map([
            ['theme', 'light'],
            ['music', 'rock'],
            ['difficulty', 'easy']
        ]);
        expect(gameSettings.settings).toEqual(expectedSettings);
    });

    it('should retrieve default settings when no user settings are set', () => {
        const expectedSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        expect(gameSettings.settings).toEqual(expectedSettings);
    });
});
