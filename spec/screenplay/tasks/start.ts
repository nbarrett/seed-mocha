import { StartRamblersLogin } from './startRamblersLogin';
import { StartWalksAndEventsManager } from './startWalksAndEventsManager';
import { StartWalksProgramme } from './startWalksProgramme';

export class Start {

    static onWalksProgramme() {
        return new StartWalksProgramme();
    }

    static onRamblersLoginPage() {
        return new StartRamblersLogin();
    }

    static onWalksAndEventsManager() {
        return new StartWalksAndEventsManager();
    }

}
