/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbComponentStatus } from '../component-status';
import { NbComponentSize } from '../component-size';
import { Observable } from 'rxjs';
export declare abstract class NbFormFieldControl {
    status$: Observable<NbComponentStatus>;
    size$: Observable<NbComponentSize>;
    focused$: Observable<boolean>;
    disabled$: Observable<boolean>;
    fullWidth$: Observable<boolean>;
}
export declare class NbFormFieldControlConfig {
    supportsPrefix: boolean;
    supportsSuffix: boolean;
}
export interface NbFormControlState {
    status: NbComponentStatus;
    size: NbComponentSize;
    fullWidth: boolean;
    focused: boolean;
    disabled: boolean;
}
