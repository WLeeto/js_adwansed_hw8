import Team from "../js/team";

describe('Team class', () => {
    let team;
    let character1, character2, character3;

    beforeEach(() => {
        team = new Team();
        character1 = { name: 'Character 1' };
        character2 = { name: 'Character 2' };
        character3 = { name: 'Character 3' };
    });

    it('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

    it('should not add duplicate characters to the team', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrowError('Character is already in the team.');
    });

    it('should add multiple characters to the team using addAll', () => {
        team.addAll(character1, character2, character3);
        expect(team.toArray()).toEqual([character1, character2, character3]);
    });

    it('should not add duplicate characters using addAll', () => {
        team.addAll(character1, character2);
        expect(() => team.addAll(character2, character3)).toThrowError('Character is already in the team.');
        expect(team.toArray()).toEqual([character1, character2]);
    });

    it('should convert the team to an array', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});
