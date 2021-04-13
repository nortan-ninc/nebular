import { ComponentFactoryResolver, ComponentRef, OnChanges, ElementRef, EventEmitter, OnDestroy, Type, AfterViewInit, OnInit, SimpleChanges } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NbOverlayRef } from '../cdk/overlay/mapping';
import { NbAdjustableConnectedPositionStrategy, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NbCalendarRange, NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbCalendarCell, NbCalendarSize, NbCalendarViewMode, NbCalendarSizeValues, NbCalendarViewModeValues } from '../calendar-kit/model';
import { NbDateService } from '../calendar-kit/services/date.service';
import { NbDatepicker, NbPickerValidatorConfig } from './datepicker.directive';
import { NbBooleanInput } from '../helpers';
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
export declare abstract class NbBasePicker<D, T, P> extends NbDatepicker<T> {
    protected overlay: NbOverlayService;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cfr: ComponentFactoryResolver;
    protected dateService: NbDateService<D>;
    protected dateServiceOptions: any;
    /**
     * Datepicker date format. Can be used only with date adapters (moment, date-fns) since native date
     * object doesn't support formatting.
     * */
    abstract format: string;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    abstract boundingMonth: boolean;
    /**
     * Defines starting view for calendar.
     * */
    abstract startView: NbCalendarViewMode;
    /**
     * Minimum available date for selection.
     * */
    abstract min: T;
    /**
     * Maximum available date for selection.
     * */
    abstract max: T;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    abstract filter: (T: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    abstract yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    abstract size: NbCalendarSize;
    /**
     * Depending on this date a particular month is selected in the calendar
     */
    abstract visibleDate: D;
    /**
     * Hide picker when a date or a range is selected, `true` by default
     * @type {boolean}
     */
    abstract hideOnSelect: boolean;
    /**
     * Determines should we show calendar navigation or not.
     * @type {boolean}
     */
    abstract showNavigation: boolean;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    abstract weekNumberSymbol: string;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    abstract showWeekNumber: boolean;
    /**
     * Calendar component class that has to be instantiated inside overlay.
     * */
    protected abstract pickerClass: Type<P>;
    /**
     * Overlay reference object.
     * */
    protected ref: NbOverlayRef;
    /**
     * Datepicker container that contains instantiated picker.
     * */
    protected container: ComponentRef<NbDatepickerContainerComponent>;
    /**
     * Positioning strategy used by overlay.
     * */
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Trigger strategy used by overlay
     * */
    protected triggerStrategy: NbTriggerStrategy;
    /**
     * HTML input reference to which datepicker connected.
     * */
    protected hostRef: ElementRef;
    protected init$: ReplaySubject<void>;
    /**
     * Stream of picker changes. Required to be the subject because picker hides and shows and picker
     * change stream becomes recreated.
     * */
    protected onChange$: Subject<T>;
    /**
     * Reference to the picker instance itself.
     * */
    protected pickerRef: ComponentRef<any>;
    protected overlayOffset: number;
    protected destroy$: Subject<void>;
    /**
     * Queue contains the last value that was applied to the picker when it was hidden.
     * This value will be passed to the picker as soon as it shown.
     * */
    protected queue: T | undefined;
    protected blur$: Subject<void>;
    protected constructor(overlay: NbOverlayService, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cfr: ComponentFactoryResolver, dateService: NbDateService<D>, dateServiceOptions: any);
    /**
     * Returns picker instance.
     * */
    get picker(): any;
    /**
     * Stream of picker value changes.
     * */
    get valueChange(): Observable<T>;
    get isShown(): boolean;
    get init(): Observable<void>;
    /**
     * Emits when datepicker looses focus.
     */
    get blur(): Observable<void>;
    protected abstract get pickerValueChange(): Observable<T>;
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    attach(hostRef: ElementRef): void;
    getValidatorConfig(): NbPickerValidatorConfig<T>;
    show(): void;
    shouldHide(): boolean;
    hide(): void;
    protected abstract writeQueue(): any;
    protected createOverlay(): void;
    protected openDatepicker(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected subscribeOnPositionChange(): void;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected instantiatePicker(): void;
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    protected subscribeOnValueChange(): void;
    protected patchWithInputs(): void;
    protected checkFormat(): void;
}
export declare class NbBasePickerComponent<D, T, P> extends NbBasePicker<D, T, P> implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    /**
     * Datepicker date format. Can be used only with date adapters (moment, date-fns) since native date
     * object doesn't support formatting.
     * */
    format: string;
    /**
     * Defines if we should render previous and next months
     * in the current month view.
     * */
    boundingMonth: boolean;
    /**
     * Defines starting view for calendar.
     * */
    startView: NbCalendarViewMode;
    static ngAcceptInputType_startView: NbCalendarViewModeValues;
    /**
     * Minimum available date for selection.
     * */
    min: T;
    /**
     * Maximum available date for selection.
     * */
    max: T;
    /**
     * Predicate that decides which cells will be disabled.
     * */
    filter: (T: any) => boolean;
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    dayCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    monthCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    yearCellComponent: Type<NbCalendarCell<D, T>>;
    /**
     * Size of the calendar and entire components.
     * Can be 'medium' which is default or 'large'.
     * */
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    /**
     * Depending on this date a particular month is selected in the calendar
     */
    visibleDate: D;
    /**
     * Hide picker when a date or a range is selected, `true` by default
     * @type {boolean}
     */
    hideOnSelect: boolean;
    /**
     * Determines should we show calendars navigation or not.
     * @type {boolean}
     */
    showNavigation: boolean;
    /**
     * Sets symbol used as a header for week numbers column
     * */
    weekNumberSymbol: string;
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber(): boolean;
    set showWeekNumber(value: boolean);
    protected _showWeekNumber: boolean;
    static ngAcceptInputType_showWeekNumber: NbBooleanInput;
    constructor(document: any, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, overlay: NbOverlayService, cfr: ComponentFactoryResolver, dateService: NbDateService<D>, dateServiceOptions: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected pickerClass: Type<P>;
    protected get pickerValueChange(): Observable<T>;
    get value(): T;
    set value(value: T);
    protected writeQueue(): void;
}
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
export declare class NbDatepickerComponent<D> extends NbBasePickerComponent<D, D, NbCalendarComponent<D>> {
    protected pickerClass: Type<NbCalendarComponent<D>>;
    /**
     * Date which will be rendered as selected.
     * */
    set date(date: D);
    /**
     * Emits date when selected.
     * */
    get dateChange(): EventEmitter<D>;
    get value(): D;
    set value(date: D);
    protected get pickerValueChange(): Observable<D>;
    protected writeQueue(): void;
}
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
export declare class NbRangepickerComponent<D> extends NbBasePickerComponent<D, NbCalendarRange<D>, NbCalendarRangeComponent<D>> {
    protected pickerClass: Type<NbCalendarRangeComponent<D>>;
    /**
     * Range which will be rendered as selected.
     * */
    set range(range: NbCalendarRange<D>);
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    get rangeChange(): EventEmitter<NbCalendarRange<D>>;
    get value(): NbCalendarRange<D>;
    set value(range: NbCalendarRange<D>);
    protected get pickerValueChange(): Observable<NbCalendarRange<D>>;
    shouldHide(): boolean;
    protected writeQueue(): void;
}
