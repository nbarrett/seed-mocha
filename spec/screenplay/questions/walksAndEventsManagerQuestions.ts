import {Question, SelectedValue, Text, Value} from 'serenity-js/lib/screenplay-protractor';
import {RamblersTargets} from '../ui/RamblersTargets';

export class WalksAndEventsManagerQuestions {
    public static LoginStatus: Question<PromiseLike<string>> = Text.of(RamblersTargets.loginStatus);
}
