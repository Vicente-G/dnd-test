export type CharacterClass =
    | 'barbarian'
    | 'bard'
    | 'cleric'
    | 'druid'
    | 'fighter'
    | 'monk'
    | 'paladin'
    | 'ranger'
    | 'rogue'
    | 'sorcerer'
    | 'warlock'
    | 'wizard';

type LevelSpell =
    | 'level1'
    | 'level2'
    | 'level3'
    | 'level4'
    | 'level5'
    | 'level6'
    | 'level7'
    | 'level8'
    | 'level9';

export type SpellsByClass = {
    class: CharacterClass;
    cantrips: Array<string>;
    level: {
        [key in LevelSpell]?: Array<string>;
    };
};
