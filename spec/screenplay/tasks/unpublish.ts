import { protractor } from 'protractor';
import {
    AnswersQuestions,
    Interaction,
    PerformsTasks,
    TakeNote,
    Task,
    UsesAbilities,
} from 'serenity-js/lib/screenplay';
import { BrowseTheWeb, Click } from 'serenity-js/lib/serenity-protractor';
import { RamblersTargets } from '../ui/ramblersTargets';
import { Alert } from './alert';
import { WaitForAlert } from './waitForAlert';

export class Unpublish implements Task {

    static selectedWalks() {
        return new Unpublish();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(RamblersTargets.unPublishSelected)).catch(e => {
            console.log('exception thrown', e);
            return actor.attemptsTo(
                Click.on(RamblersTargets.unPublishSelected),
                WaitForAlert.toBePresent(),
                Alert.accept());
        });

    }
}
