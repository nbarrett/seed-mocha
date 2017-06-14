import { Target } from 'serenity-js/lib/screenplay-protractor';
import { lpad } from 'underscore.string';

import { by } from 'protractor';

export class RamblersTargets {
    public static userName = Target.the('user name')
        .located(by.css('#layout_0_content_0_innerleft_1_txtUsername'));

    public static password = Target.the('password')
        .located(by.css('#layout_0_content_0_innerleft_1_txtPassword'));

    public static loginButton = Target.the('login button')
        .located(by.css('#layout_0_content_0_innerleft_1_btnLogin'));

    public static loginStatus = Target.the('login status')
        .located(by.css('.LoginOut'));

    public static walksAndEventsManagerButton = Target.the('Group walks and events manager button')
        .located(by.css('a[title="Group walks and events manager"]'));

    public static itemsPerPagePopup = Target.the('items per page popup')
        .located(by.css('#layout_0_content_1_innerleft_2_tabWalks_lstPageSize-button > span.ui-selectmenu-status'));

    public static itemsPerPage = Target.the('items per page')
        .located(by.css('#layout_0_content_1_innerleft_2_tabWalks_lstPageSize'));

    public static itemsPerPageAll = Target.the('items per page')
        .located(by.css('#layout_0_content_1_innerleft_2_tabWalks_lstPageSize-menu > li.ui-corner-bottom > a'));

    public static walks = Target.the('ramblers walks')
        .located(by.css('[id^=layout_0_content_1_innerleft_2_tabWalks_rptResults_ctl].lbs-search-row'));

    public static walkIds = Target.the('ramblers walk Ids')
        .located(by.css('[style="display: none"'));

    public static walkColumns = Target.the('ramblers walk columns')
        .located(by.css('[class^="col-"]'));

    public static progressIndicator = Target.the('progress indicator')
        .located(by.css('.lbs-progress-msg'));

    public static unPublishSelected = Target.the('unpublish selected walks')
        .located(by.css('#layout_0_content_1_innerleft_2_tabWalks_btnUnpublishWalks'));

    public static publishSelected = Target.the('publish selected walks')
        .located(by.css('#layout_0_content_1_innerleft_2_tabWalks_btnPublishSubmittedWalks'));

    public static checkboxSelector = (rowIndex: number) => Target.the('checkbox index ' +
        rowIndex).located(by.css('#layout_0_content_1_innerleft_2_tabWalks_rptResults_ctl' +
        lpad((rowIndex + 1).toString(), 2, '0') +
        '_chkSelected'));
}
