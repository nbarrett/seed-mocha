import { ElementFinder, protractor } from 'protractor';
import { until, WebDriver } from 'selenium-webdriver';
import { PerformsTasks, Task, UsesAbilities } from 'serenity-js/lib/screenplay';
import { BrowseTheWeb, Duration, Target } from 'serenity-js/lib/serenity-protractor';

export class Alert implements Task {

    static accept() {
        return new Alert();
    }

    performAs(actor: PerformsTasks & UsesAbilities): PromiseLike<void> {
        return protractor.browser.switchTo().alert().accept();
    }

}
