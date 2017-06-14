import { StartRamblersLogin } from './startRamblersLogin';
import { StartWalksProgramme } from './startWalksProgramme';

export class Start {

    static onWalksProgramme() {
        return new StartWalksProgramme();
    }

    static onRamblersLoginPage() {
        return new StartRamblersLogin();
    }

}
