import puppeteer, { Page } from 'puppeteer';
import { CharacterClass, SpellsByClass } from './types';

async function getSpellsByLevel(page: Page, level: number) {
    const spells = Array<string>();
    const table = await page.$(`#wiki-tab-0-${level}`);
    const rows = await table?.$$('tr');
    if (rows) {
        for (const row of rows) {
            if (row === rows[0]) continue; // skip header row
            spells.push(await row.$eval('td', (el) => el.innerText));
        }
    }
    return spells;
}

async function getLevelSpells(page: Page) {
    const levelSpells: Record<string, Array<string>> = {};
    for (let level = 1; level <= 9; level++) {
        const levelSpellsByClass = await getSpellsByLevel(page, level);
        const keyName = `level${level}`;
        levelSpells[keyName] = levelSpellsByClass;
    }
    return levelSpells;
}

async function getSpellsByClass(): {
    const targetUrl = 'http://dnd5e.wikidot.com/spells';
    const browser = await puppeteer.launch({
        headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(targetUrl, { waitUntil: 'networkidle0' });
    const cantrips = await getSpellsByLevel(page, 0);
    const level = await getLevelSpells(page);
    await browser.close();
    return { cantrips, level } as SpellsByClass;
}

async function main() {
    const spells = await getSpellsByClass();
    console.log(spells);
}

main();
