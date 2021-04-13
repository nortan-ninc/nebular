import { NbComponentSize } from '../component-size';
import { NbPosition } from '../cdk/overlay/overlay-position';
/**
 * The `NbOptionListComponent` is container component for `NbOptionGroupComponent` and`NbOptionComponent` list.
 *
 * @styles
 *
 * option-list-max-height:
 * option-list-shadow:
 * option-list-background-color:
 * option-list-border-style:
 * option-list-border-width:
 * option-list-border-color:
 * option-list-border-radius:
 * option-list-adjacent-border-color:
 * option-list-adjacent-border-style:
 * option-list-adjacent-border-width:
 * */
export declare class NbOptionListComponent<T> {
    size: NbComponentSize;
    position: NbPosition;
    get positionTop(): boolean;
    get positionBottom(): boolean;
    get sizeTiny(): boolean;
    get sizeSmall(): boolean;
    get sizeMedium(): boolean;
    get sizeLarge(): boolean;
    get sizeGiant(): boolean;
}
