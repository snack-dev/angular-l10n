import { Component } from '@angular/core';
import { NgLocalization } from '@angular/common';
// Services.
import { Locale, LocalizationService } from 'angular2localization/angular2localization';

class MessagesLocalization extends NgLocalization {
    getPluralCategory(value: any): string {
        if (value > 1) {
            return 'other';
        }
    }
}

@Component({
    templateUrl: './app/i18n.component.html',
    providers: [{ provide: NgLocalization, useClass: MessagesLocalization }]
})

export class I18nComponent extends Locale {

    message: string = "";

    gender: string = "";
    inviteMapping: any = {
        'male': 'Invite_him',
        'female': 'Invite_her'
    };

    messages: any = [];
    messageMapping: any = {
        '=0': 'No_messages',
        '=1': 'One_message',
        'other': '# messages'
    };

    constructor(public localization: LocalizationService) {
        super(null, localization);
    }

    addMessage(value: any): void {

        this.messages.push(value.message);
        this.message = "";

    }

}
