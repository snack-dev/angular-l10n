import {Component} from '@angular/core';
import {NgLocalization} from '@angular/common'
// Angular 2 Material.
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdRadioButton} from '@angular2-material/radio/radio';
import {MdUniqueSelectionDispatcher } from '@angular2-material/core';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
// Services.
import {Locale, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/i18n.component.html',
    providers: [MdUniqueSelectionDispatcher, NgLocalization],
    pipes: [TranslatePipe],
    directives: [MD_CARD_DIRECTIVES, MdRadioButton, MD_INPUT_DIRECTIVES, MdButton]
})

export class I18nComponent extends Locale {

    message: string = "";

    gender: string = "";
    inviteMapping: any = {
        'male': 'Invite_him',
        'female': 'Invite_her'
    }

    messages: any = [];
    messageMapping: any = {
        '=0': 'No_messages',
        '=1': 'One_message',
        '=2': '2 messages',
        '=3': '3 messages'
        /*'other': '# messages' https://github.com/angular/angular/issues/9793 */
    }

    constructor(public localization: LocalizationService) {
        super(null, localization);
    }

    addMessage(value: any) {

        this.messages.push(value.message);
        this.message = ""; 

    }

}