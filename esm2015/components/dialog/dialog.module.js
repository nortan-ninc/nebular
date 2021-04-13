/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbDialogService } from './dialog.service';
import { NbDialogContainerComponent } from './dialog-container';
import { NB_DIALOG_CONFIG } from './dialog-config';
export class NbDialogModule {
    static forRoot(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
    static forChild(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
}
NbDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule, NbOverlayModule],
                declarations: [NbDialogContainerComponent],
                entryComponents: [NbDialogContainerComponent],
            },] }
];
//# sourceMappingURL=dialog.module.js.map