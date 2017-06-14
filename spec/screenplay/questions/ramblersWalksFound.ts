import { FileSystem } from '@serenity-js/core/lib/io/file_system';
import { Question, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import { by, protractor } from 'protractor';
import { BrowseTheWeb, Target } from 'serenity-js/lib/serenity-protractor';
import { RamblersTargets } from '../ui/ramblersTargets';

export class RamblersWalkSummary {

    constructor(public rowIndex: number,
                public walkId: number,
                public walkDate: string,
                public title: string,
                public start: string,
                public distanceMiles: string,
                public distanceKm: string,
                public status: string,
                public checkboxTarget: Target,
                public action: string) {
    }

}

export class RamblersWalkSummaries implements Question<PromiseLike<RamblersWalkSummary[]>> {

    static displayed = () => new RamblersWalkSummaries();

    answeredBy(actor: UsesAbilities): PromiseLike<RamblersWalkSummary[]> {
        protractor.browser.getPageSource()
            .then(function (txt) {
                new FileSystem('./').store('html-source.html', txt);
            });

        const extractSummaryRow = (result, rowIndex) => {
            return result.all(by.css('[class^="col-"]')).getText()
                .then(columns => ({
                    rowIndex,
                    walkDate: columns[0],
                    title: columns[1],
                    start: columns[2],
                    distanceMiles: columns[3],
                    distanceKm: columns[4],
                    status: columns[5],
                    checkboxTarget: RamblersTargets.checkboxSelector(rowIndex),
                    action: columns[7],
                }));
        };

        const addWalkId = result => {
            return walkSummaryRow => result.all(by.css('div[style="display: none"]')).getAttribute('innerText')
                .then(walkIds => Object.assign(walkSummaryRow, {walkId: parseInt(walkIds[0], 10)}));
        };

        return BrowseTheWeb.as(actor).locateAll(
            RamblersTargets.walks)
            .map((result, rowIndex) => extractSummaryRow(result, rowIndex)
                .then(addWalkId(result))) as PromiseLike<RamblersWalkSummary[]>;

    }

    toString = () => `displayed walks`;

}
