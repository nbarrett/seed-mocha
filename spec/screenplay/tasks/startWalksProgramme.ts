import {PerformsTasks, Task} from 'serenity-js/lib/screenplay';
import {Open} from 'serenity-js/lib/screenplay-protractor';

export class StartWalksProgramme implements Task {

    static onWalksProgramme() {
        return new StartWalksProgramme();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/#/walks'),
        );
    }

}
