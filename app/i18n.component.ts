import {Component} from 'angular2/core';
// Angular 2 Material.
import {MdRadioButton} from '@angular2-material/radio/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
// Services.
import {LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    templateUrl: './app/i18n.component.html',
    providers: [LocalizationService, MdRadioDispatcher],
    pipes: [TranslatePipe],
    directives: [MdRadioButton, MD_INPUT_DIRECTIVES, MdButton]
})

export class I18nComponent {

    message: string = "";

    gender: string = "";
    inviteMapping: any = {
        'male': 'INVITE_HIM',
        'female': 'INVITE_HER'
    }

    messages: any = [];
    messageMapping: any = {
        '=0': 'NO_MESSAGES',
        '=1': 'ONE_MESSAGE',
        'other': '# MESSAGES'
    }

    // Instantiates a new LocalizationService for this component and for its descendants.
    constructor(public localizationI18n: LocalizationService) {

        this.localizationI18n.translationProvider('./resources/locale-i18n-'); // Required: initializes the translation provider with the given path prefix.

    }

    addMessage(message: string) {

        this.messages.push(message);
        this.message = "";

    }

}