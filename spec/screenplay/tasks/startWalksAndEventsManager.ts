import {PerformsTasks, Task} from 'serenity-js/lib/screenplay';
import { Navigate } from './navigate';

export class StartWalksAndEventsManager implements Task {

    static onWalksAndEventsManager() {
        return new StartWalksAndEventsManager();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Navigate.to('http://www.ramblers.org.uk/group-walks-and-events-manager.aspx'),
        );
    }

}
