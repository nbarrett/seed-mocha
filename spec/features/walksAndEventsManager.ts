import { serenity } from 'serenity-js';
import { See } from 'serenity-js/lib/screenplay';
import { Click, Duration, Enter, Is, Wait } from 'serenity-js/lib/serenity-protractor';
import { expect } from '../expect';
import { Public } from '../screenplay/public';
import { WalksAndEventsManagerQuestions } from '../screenplay/questions/walksAndEventsManagerQuestions';
import { Navigate } from '../screenplay/tasks/navigate';
import { SelectWalks } from '../screenplay/tasks/replaceWalks';
import { Start } from '../screenplay/tasks/start';
import { Unpublish } from '../screenplay/tasks/unpublish';
import { RamblersTargets } from '../screenplay/ui/ramblersTargets';
const equals = expected => actual => expect(actual).to.eventually.eql(expected);

describe('Walks and Events Manager', function () {
    this.timeout(150 * 1000);
    const stage = serenity.callToStageFor(new Public());
    const actor = stage.theActorCalled('Rambling Nick');

    describe('Login', () => {
        it('allows navigation to walks and events manager', () => actor.attemptsTo(
            Start.onWalksAndEventsManager(),
            See.if(WalksAndEventsManagerQuestions.LoginStatus, equals('Login')),
            Enter.theValue('nick.barrett36@me.com').into(RamblersTargets.userName),
            Enter.theValue('password01').into(RamblersTargets.password),
            Click.on(RamblersTargets.loginButton),
            See.if(WalksAndEventsManagerQuestions.LoginStatus, equals('Logout')),
            Click.on(RamblersTargets.itemsPerPagePopup),
            Click.on(RamblersTargets.itemsPerPageAll),
            Wait.upTo(Duration.ofSeconds(20)).until(RamblersTargets.progressIndicator, Is.invisible()),
            SelectWalks.withIds(3921387, 3921389, 3915734, 3921391, 3921392),
            Unpublish.selectedWalks(),
        ));

    });
});
