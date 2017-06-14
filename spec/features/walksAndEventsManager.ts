import { serenity } from 'serenity-js';
import { See } from 'serenity-js/lib/screenplay';
import { Click, Enter, Is, Wait } from 'serenity-js/lib/serenity-protractor';
import { expect } from '../expect';
import { Members } from '../screenplay/members';
import { WalksAndEventsManagerQuestions } from '../screenplay/questions/walksAndEventsManagerQuestions';
import { Navigate } from '../screenplay/tasks/navigate';
import { SelectWalks } from '../screenplay/tasks/replaceWalks';
import { Start } from '../screenplay/tasks/start';
import { Unpublish } from '../screenplay/tasks/unpublish';
import { RamblersTargets } from '../screenplay/ui/ramblersTargets';
const equals = expected => actual => expect(actual).to.eventually.eql(expected);

describe('Walks and Events Manager', function () {
    this.timeout(100 * 1000);
    const stage = serenity.callToStageFor(new Members());
    const actor = stage.theActorCalled('nonLoggedIn');

    describe('Login', () => {
        it('allows navigation to walks and events manager', () => actor.attemptsTo(
            Start.onRamblersLoginPage(),
            See.if(WalksAndEventsManagerQuestions.LoginStatus, equals('Login')),
            Enter.theValue('nick.barrett36@me.com').into(RamblersTargets.userName),
            Enter.theValue('password01').into(RamblersTargets.password),
            Click.on(RamblersTargets.loginButton),
            See.if(WalksAndEventsManagerQuestions.LoginStatus, equals('Logout')),
            Navigate.to('http://www.ramblers.org.uk/group-walks-and-events-manager.aspx'),
            Click.on(RamblersTargets.itemsPerPagePopup),
            Click.on(RamblersTargets.itemsPerPageAll),
            Wait.until(RamblersTargets.progressIndicator, Is.invisible()),
            // SelectWalks.withIds(3919824, 3898837, 3918101),
            Click.on(RamblersTargets.checkboxSelector(1)),
            Click.on(RamblersTargets.checkboxSelector(3)),
            Click.on(RamblersTargets.checkboxSelector(5)),
            Click.on(RamblersTargets.checkboxSelector(7)),
            Click.on(RamblersTargets.checkboxSelector(9)),
            Unpublish.selectedWalks(),
        ));

    });
});
