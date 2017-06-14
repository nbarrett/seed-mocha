import {PerformsTasks, Task} from 'serenity-js/lib/screenplay';
import {Open} from 'serenity-js/lib/screenplay-protractor';
import { Navigate } from './navigate';

export class StartRamblersLogin implements Task {

    static onRamblersLoginPage() {
        return new StartRamblersLogin();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Navigate.to('https://www.ramblers.org.uk/login.aspx'),
        );
    }

}
