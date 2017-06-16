import { PerformsTasks, Task, UsesAbilities } from 'serenity-js/lib/screenplay';
import { Click } from 'serenity-js/lib/serenity-protractor';
import { contains } from 'underscore';
import { RamblersWalkSummaries } from '../questions/ramblersWalksFound';

export class SelectWalks implements Task {

    static withIds(...walkIds: number[]) {
        return new SelectWalks(walkIds);
    }

    constructor(private walkIds: number[]) {

    }

    performAs(actor: PerformsTasks & UsesAbilities): PromiseLike<void> {
        return RamblersWalkSummaries.displayed().answeredBy(actor).then(walks => {
            return actor.attemptsTo(
                ...walks.filter(walk => contains(this.walkIds, walk.walkId)).map(
                    walk => Click.on(walk.checkboxTarget)));

        });
    }

}
