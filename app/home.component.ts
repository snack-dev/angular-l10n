import {Component} from 'angular2/core';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    template: `
            <!--home component view-->

            <div class="container">

                <div class="row">

                    <div class="col-sm-6">

                        <blockquote class="blockquote-reverse">

                            <p>{{ 'DUMMY_TEXT' | translate }}</p>
                            <footer>{{ 'AUTHOR' | translate }},&nbsp;<cite title="Source Title">{{ 'SOURCE_TITLE' | translate }}</cite></footer>

                        </blockquote>

                    </div>

                </div>

            </div>
            `,
    pipes: [TranslatePipe]
})

export class HomeComponent {

    constructor() { }

}
