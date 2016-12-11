import { HomeComponent } from '../app/home.component';

import { HttpModule } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';

// Angular 2 Material.
import { MaterialModule } from '@angular/material';
// Angular 2 Localization.
import { LocaleModule, LocalizationModule, LocaleService, LocalizationService } from 'angular2localization';

describe('Component: HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                MaterialModule.forRoot(),
                LocaleModule.forRoot(),
                LocalizationModule.forRoot()
            ],
            declarations: [HomeComponent]
        });

        TestBed.compileComponents();

    });

    it('should render translated text', async(
        inject([LocaleService, LocalizationService],
            (locale: LocaleService, localization: LocalizationService) => {

                const f = TestBed.createComponent(HomeComponent);
                f.detectChanges();

                locale.enableCookie = false;
                locale.addLanguages(['en', 'it', 'ar']);
                locale.definePreferredLocale('en', 'US');
                locale.definePreferredCurrency('USD');

                // Karma serves files from 'base' relative path.
                localization.translationProvider('base/resources/locale-');

                localization.translationChanged.subscribe(
                    () => {
                        expect(f.debugElement.nativeElement).toContainText('The Metamorphosis');
                    }
                );

                localization.updateTranslation();

            })
    ));

})
