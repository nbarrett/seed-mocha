import { protractor } from 'protractor';
import { Interaction, UsesAbilities } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/serenity-protractor';

export class WaitForAlert implements Interaction {

    static toBePresent() {
        return new WaitForAlert();
    }

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return BrowseTheWeb.as(actor).wait(protractor.ExpectedConditions.alertIsPresent());
    }

}
