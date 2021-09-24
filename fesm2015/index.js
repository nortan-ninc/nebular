import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Host, HostBinding, HostListener, Inject, Injectable, InjectionToken, Injector, Input, IterableDiffers, LOCALE_ID, NgModule, NgZone, Optional, Output, PLATFORM_ID, Renderer2, SimpleChange, SkipSelf, TemplateRef, Type, ViewChild, ViewChildren, ViewContainerRef, forwardRef, isDevMode, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import * as i0 from '@angular/core';
import { CommonModule, DOCUMENT, DatePipe, FormStyle, FormatWidth, Location, TranslationWidth, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, getLocaleTimeFormat, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, EMPTY, Observable, ReplaySubject, Subject, combineLatest, forkJoin, from, fromEvent, interval, merge, of, timer } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, finalize, map, pairwise, publish, refCount, repeat, share, skip, startWith, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ActiveDescendantKeyManager, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, PortalInjector, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { BlockScrollStrategy, FlexibleConnectedPositionStrategy, GlobalPositionStrategy, Overlay, OverlayContainer, OverlayModule, OverlayPositionBuilder, ScrollDispatcher, ScrollStrategyOptions, ViewportRuler } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import * as i1 from '@angular/cdk/platform';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import 'intersection-observer';
import { BidiModule, Directionality } from '@angular/cdk/bidi';
import { CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, DataRowOutlet, DataSource, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_POSITIONING_LISTENER, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import { BACKSPACE, DELETE, ENTER, ESCAPE, SPACE } from '@angular/cdk/keycodes';
import * as _angular_cdk_keycodes from '@angular/cdk/keycodes';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_THEME_OPTIONS = new InjectionToken('Nebular Theme Options');
const NB_MEDIA_BREAKPOINTS = new InjectionToken('Nebular Media Breakpoints');
const NB_BUILT_IN_JS_THEMES = new InjectionToken('Nebular Built-in JS Themes');
const NB_JS_THEMES = new InjectionToken('Nebular JS Themes');
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
const NB_WINDOW = new InjectionToken('Window');
const NB_DOCUMENT = new InjectionToken('Document');

const palette = {
    primary: '#3366ff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: 'Open Sans, sans-serif',
        fontSecondary: 'Raleway, sans-serif',
        bg: '#ffffff',
        bg2: '#f7f9fc',
        bg3: '#edf1f7',
        bg4: '#e4e9f2',
        border: '#ffffff',
        border2: '#f7f9fc',
        border3: '#edf1f7',
        border4: '#e4e9f2',
        border5: '#c5cee0',
        fg: '#8f9bb3',
        fgHeading: '#1a2138',
        fgText: '#1a2138',
        fgHighlight: palette.primary,
        layoutBg: '#f7f9fc',
        separator: '#edf1f7',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: '#598bff',
        successLight: '#2ce69b',
        infoLight: '#42aaff',
        warningLight: '#ffc94d',
        dangerLight: '#ff708d',
    },
};

const palette$1 = {
    primary: '#a16eff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const COSMIC_THEME = {
    name: 'cosmic',
    variables: {
        fontMain: 'Open Sans, sans-serif',
        fontSecondary: 'Raleway, sans-serif',
        bg: '#323259',
        bg2: '#252547',
        bg3: '#1b1b38',
        bg4: '#13132b',
        border: '#323259',
        border2: '#252547',
        border3: '#1b1b38',
        border4: '#13132b',
        border5: '#13132b',
        fg: '#b4b4db',
        fgHeading: '#ffffff',
        fgText: '#ffffff',
        fgHighlight: palette$1.primary,
        layoutBg: '#151a30',
        separator: '#151a30',
        primary: palette$1.primary,
        success: palette$1.success,
        info: palette$1.info,
        warning: palette$1.warning,
        danger: palette$1.danger,
        primaryLight: '#b18aff',
        successLight: '#2ce69b',
        infoLight: '#42aaff',
        warningLight: '#ffc94d',
        dangerLight: '#ff708d',
    },
};

const palette$2 = {
    primary: '#73a1ff',
    success: '#5dcfe3',
    info: '#ba7fec',
    warning: '#ffa36b',
    danger: '#ff6b83',
};
const CORPORATE_THEME = {
    name: 'corporate',
    base: 'default',
    variables: {
        fontMain: 'Open Sans, sans-serif',
        fontSecondary: 'Raleway, sans-serif',
        bg: '#ffffff',
        bg2: '#f7f9fc',
        bg3: '#edf1f7',
        bg4: '#e4e9f2',
        border: '#ffffff',
        border2: '#f7f9fc',
        border3: '#edf1f7',
        border4: '#e4e9f2',
        border5: '#c5cee0',
        fg: '#8f9bb3',
        fgHeading: '#1a2138',
        fgText: '#1a2138',
        fgHighlight: palette$2.primary,
        layoutBg: '#f7f9fc',
        separator: '#edf1f7',
        primary: palette$2.primary,
        success: palette$2.success,
        info: palette$2.info,
        warning: palette$2.warning,
        danger: palette$2.danger,
        primaryLight: '#598bff',
        successLight: '#2ce69b',
        infoLight: '#42aaff',
        warningLight: '#ffc94d',
        dangerLight: '#ff708d',
    },
};

const palette$3 = {
    primary: '#3366ff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const DARK_THEME = {
    name: 'dark',
    variables: {
        fontMain: 'Open Sans, sans-serif',
        fontSecondary: 'Raleway, sans-serif',
        bg: '#222b45',
        bg2: '#1a2138',
        bg3: '#151a30',
        bg4: '#101426',
        border: '#222b45',
        border2: '#1a2138',
        border3: '#151a30',
        border4: '#101426',
        border5: '#101426',
        fg: '#8f9bb3',
        fgHeading: '#ffffff',
        fgText: '#ffffff',
        fgHighlight: palette$3.primary,
        layoutBg: '#1b1b38',
        separator: '#1b1b38',
        primary: palette$3.primary,
        success: palette$3.success,
        info: palette$3.info,
        warning: palette$3.warning,
        danger: palette$3.danger,
        primaryLight: '#598bff',
        successLight: '#2ce69b',
        infoLight: '#42aaff',
        warningLight: '#ffc94d',
        dangerLight: '#ff708d',
    },
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
    CORPORATE_THEME,
    DARK_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
class NbJSThemesRegistry {
    constructor(builtInThemes, newThemes = []) {
        this.themes = {};
        const themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach((theme) => {
            this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    register(config, themeName, baseTheme) {
        const base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    }
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    has(themeName) {
        return !!this.themes[themeName];
    }
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    get(themeName) {
        if (!this.themes[themeName]) {
            throw Error(`NbThemeConfig: no theme '${themeName}' found registered.`);
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    }
    combineByNames(newThemes, oldThemes) {
        if (newThemes) {
            const mergedThemes = [];
            newThemes.forEach((theme) => {
                const sameOld = oldThemes.find((tm) => tm.name === theme.name)
                    || {};
                const mergedTheme = this.mergeDeep({}, sameOld, theme);
                mergedThemes.push(mergedTheme);
            });
            oldThemes.forEach((theme) => {
                if (!mergedThemes.find((tm) => tm.name === theme.name)) {
                    mergedThemes.push(theme);
                }
            });
            return mergedThemes;
        }
        return oldThemes;
    }
    isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    // TODO: move to helpers
    mergeDeep(target, ...sources) {
        if (!sources.length) {
            return target;
        }
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, { [key]: {} });
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return this.mergeDeep(target, ...sources);
    }
}
NbJSThemesRegistry.decorators = [
    { type: Injectable }
];
NbJSThemesRegistry.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [NB_BUILT_IN_JS_THEMES,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_JS_THEMES,] }] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
class NbMediaBreakpointsService {
    constructor(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce((res, b) => {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    getByWidth(width) {
        const unknown = { name: 'unknown', width: width };
        const breakpoints = this.getBreakpoints();
        return breakpoints
            .find((point, index) => {
            const next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    }
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    getByName(name) {
        const unknown = { name: 'unknown', width: NaN };
        const breakpoints = this.getBreakpoints();
        return breakpoints.find((point) => name === point.name) || unknown;
    }
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    getBreakpoints() {
        return this.breakpoints;
    }
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    getBreakpointsMap() {
        return this.breakpointsMap;
    }
}
NbMediaBreakpointsService.decorators = [
    { type: Injectable }
];
NbMediaBreakpointsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_MEDIA_BREAKPOINTS,] }] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Main Nebular service. Includes various helper methods.
 */
class NbThemeService {
    constructor(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new ReplaySubject(1);
        this.appendLayoutClass$ = new Subject();
        this.removeLayoutClass$ = new Subject();
        this.changeWindowWidth$ = new ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    /**
     * Change current application theme
     * @param {string} name
     */
    changeTheme(name) {
        this.themeChanges$.next({ name, previous: this.currentTheme });
        this.currentTheme = name;
    }
    changeWindowWidth(width) {
        this.changeWindowWidth$.next(width);
    }
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme() {
        return this.onThemeChange().pipe(map((theme) => {
            return this.jsThemesRegistry.get(theme.name);
        }));
    }
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange() {
        return this.changeWindowWidth$
            .pipe(startWith(undefined), pairwise(), map(([prevWidth, width]) => {
            return [
                this.breakpointService.getByWidth(prevWidth),
                this.breakpointService.getByWidth(width),
            ];
        }), filter(([prevPoint, point]) => {
            return prevPoint.name !== point.name;
        }), distinctUntilChanged(null, params => params[0].name + params[1].name), share());
    }
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    onThemeChange() {
        return this.themeChanges$.pipe(share());
    }
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    appendLayoutClass(className) {
        this.appendLayoutClass$.next(className);
    }
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    onAppendLayoutClass() {
        return this.appendLayoutClass$.pipe(share());
    }
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    removeLayoutClass(className) {
        this.removeLayoutClass$.next(className);
    }
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    onRemoveLayoutClass() {
        return this.removeLayoutClass$.pipe(share());
    }
}
NbThemeService.decorators = [
    { type: Injectable }
];
NbThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_THEME_OPTIONS,] }] },
    { type: NbMediaBreakpointsService },
    { type: NbJSThemesRegistry }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Service to control the global page spinner.
 */
class NbSpinnerService {
    constructor(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    registerLoader(method) {
        this.loaders.push(method);
    }
    /**
     * Clears the list of loader
     */
    clear() {
        this.loaders = [];
    }
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    load() {
        this.showSpinner();
        this.executeAll();
    }
    executeAll(done = () => { }) {
        Promise.all(this.loaders).then((values) => {
            this.hideSpinner();
            done.call(null, values);
        })
            .catch((error) => {
            // TODO: Promise.reject
            console.error(error);
        });
    }
    // TODO is there any better way of doing this?
    showSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    }
    hideSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    }
    getSpinnerElement() {
        return this.document.getElementById(this.selector);
    }
}
NbSpinnerService.decorators = [
    { type: Injectable }
];
NbSpinnerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

/**
 * Layout direction.
 * */
var NbLayoutDirection;
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));

/**
 * Layout direction setting injection token.
 * */
const NB_LAYOUT_DIRECTION = new InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
class NbLayoutDirectionService {
    constructor(direction = NbLayoutDirection.LTR) {
        this.direction = direction;
        this.$directionChange = new ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    isLtr() {
        return this.direction === NbLayoutDirection.LTR;
    }
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    isRtl() {
        return this.direction === NbLayoutDirection.RTL;
    }
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    getDirection() {
        return this.direction;
    }
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    setDirection(direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    }
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    onDirectionChange() {
        return this.$directionChange.pipe(share());
    }
}
NbLayoutDirectionService.decorators = [
    { type: Injectable }
];
NbLayoutDirectionService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_LAYOUT_DIRECTION,] }] }
];

/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
class NbLayoutScrollService {
    constructor() {
        this.scrollPositionReq$ = new Subject();
        this.manualScroll$ = new Subject();
        this.scroll$ = new Subject();
        this.scrollable$ = new Subject();
    }
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    getPosition() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.scrollPositionReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    scrollTo(x = null, y = null) {
        this.manualScroll$.next({ x, y });
    }
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    onScroll() {
        return this.scroll$.pipe(share());
    }
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    onManualScroll() {
        return this.manualScroll$.pipe(share());
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetPosition() {
        return this.scrollPositionReq$;
    }
    onScrollableChange() {
        return this.scrollable$.pipe(share());
    }
    /**
     * @private
     * @param {any} event
     */
    fireScrollChange(event) {
        this.scroll$.next(event);
    }
    scrollable(scrollable) {
        this.scrollable$.next(scrollable);
    }
}
NbLayoutScrollService.decorators = [
    { type: Injectable }
];

/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
class NbLayoutRulerService {
    constructor() {
        this.contentDimensionsReq$ = new Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    getDimensions() {
        return new Observable((observer) => {
            const listener = new Subject();
            listener.subscribe(observer);
            this.contentDimensionsReq$.next({ listener });
            return () => listener.complete();
        });
    }
    /**
     * @private
     * @returns {Subject<any>}
     */
    onGetDimensions() {
        return this.contentDimensionsReq$;
    }
}
NbLayoutRulerService.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbSharedModule {
}
NbSharedModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CommonModule,
                    // TODO: probably we don't need FormsModule in SharedModule
                    FormsModule,
                    RouterModule,
                ],
            },] }
];

/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
class NbFocusTrap extends FocusTrap {
    constructor(element, checker, ngZone, document, deferAnchors) {
        super(element, checker, ngZone, document, deferAnchors);
        this.element = element;
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
        this.savePreviouslyFocusedElement();
    }
    restoreFocus() {
        this.previouslyFocusedElement.focus();
        this.destroy();
    }
    blurPreviouslyFocusedElement() {
        this.previouslyFocusedElement.blur();
    }
    savePreviouslyFocusedElement() {
        this.previouslyFocusedElement = this.document.activeElement;
    }
}
class NbFocusTrapFactoryService extends FocusTrapFactory {
    constructor(checker, ngZone, document) {
        super(checker, ngZone, document);
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
    }
    create(element, deferCaptureElements) {
        return new NbFocusTrap(element, this.checker, this.ngZone, this.document, deferCaptureElements);
    }
}
NbFocusTrapFactoryService.decorators = [
    { type: Injectable }
];
NbFocusTrapFactoryService.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

class NbFocusKeyManager extends FocusKeyManager {
}
class NbFocusKeyManagerFactoryService {
    create(items) {
        return new NbFocusKeyManager(items);
    }
}

class NbActiveDescendantKeyManager extends ActiveDescendantKeyManager {
}
class NbActiveDescendantKeyManagerFactoryService {
    create(items) {
        return new NbActiveDescendantKeyManager(items);
    }
}
var NbKeyManagerActiveItemMode;
(function (NbKeyManagerActiveItemMode) {
    NbKeyManagerActiveItemMode[NbKeyManagerActiveItemMode["RESET_ACTIVE"] = -1] = "RESET_ACTIVE";
    NbKeyManagerActiveItemMode[NbKeyManagerActiveItemMode["FIRST_ACTIVE"] = 0] = "FIRST_ACTIVE";
})(NbKeyManagerActiveItemMode || (NbKeyManagerActiveItemMode = {}));

class NbFocusMonitor extends FocusMonitor {
}
NbFocusMonitor.decorators = [
    { type: Injectable }
];
class NbA11yModule {
    static forRoot() {
        return {
            ngModule: NbA11yModule,
            providers: [
                NbFocusTrapFactoryService,
                NbFocusKeyManagerFactoryService,
                NbActiveDescendantKeyManagerFactoryService,
                { provide: NbFocusMonitor, useClass: FocusMonitor },
            ],
        };
    }
}
NbA11yModule.decorators = [
    { type: NgModule, args: [{},] }
];

class NbPortalDirective extends CdkPortal {
}
NbPortalDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbPortal]' },] }
];
class NbPortalOutletDirective extends CdkPortalOutlet {
}
NbPortalOutletDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbPortalOutlet]' },] }
];
class NbComponentPortal extends ComponentPortal {
}
class NbOverlay extends Overlay {
}
NbOverlay.decorators = [
    { type: Injectable }
];
class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}
NbOverlayPositionBuilder.decorators = [
    { type: Injectable }
];
class NbTemplatePortal extends TemplatePortal {
    constructor(template, viewContainerRef, context) {
        super(template, viewContainerRef, context);
    }
}
class NbOverlayContainer extends OverlayContainer {
}
NbOverlayContainer.decorators = [
    { type: Injectable }
];
class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
class NbPortalInjector extends PortalInjector {
}
const CDK_MODULES = [OverlayModule, PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
class NbCdkMappingModule {
    static forRoot() {
        return {
            ngModule: NbCdkMappingModule,
            providers: [
                NbOverlay,
                NbOverlayPositionBuilder,
            ],
        };
    }
}
NbCdkMappingModule.decorators = [
    { type: NgModule, args: [{
                imports: [...CDK_MODULES],
                exports: [
                    ...CDK_MODULES,
                    NbPortalDirective,
                    NbPortalOutletDirective,
                ],
                declarations: [NbPortalDirective, NbPortalOutletDirective],
            },] }
];

class NbPlatform extends Platform {
}
NbPlatform.ɵprov = ɵɵdefineInjectable({ factory: function NbPlatform_Factory() { return new Platform(ɵɵinject(PLATFORM_ID)); }, token: NbPlatform, providedIn: "root" });
NbPlatform.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useClass: Platform,
            },] }
];

/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
class NbOverlayContainerAdapter extends NbOverlayContainer {
    setContainer(container) {
        this.container = container;
    }
    clearContainer() {
        this.container = null;
        this._containerElement = null;
    }
    _createContainer() {
        const container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this.container.appendChild(container);
        this._containerElement = container;
    }
}
NbOverlayContainerAdapter.decorators = [
    { type: Injectable }
];

class NbViewportRulerAdapter extends ViewportRuler {
    constructor(platform, ngZone, ruler, scroll, document) {
        super(platform, ngZone, document);
        this.ruler = ruler;
        this.scroll = scroll;
    }
    getViewportSize() {
        let res;
        /*
        * getDimensions call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.ruler.getDimensions()
            .pipe(map(dimensions => ({ width: dimensions.clientWidth, height: dimensions.clientHeight })))
            .subscribe(rect => res = rect);
        return res;
    }
    getViewportScrollPosition() {
        let res;
        /*
        * getPosition call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.scroll.getPosition()
            .pipe(map((position) => ({ top: position.y, left: position.x })))
            .subscribe(position => res = position);
        return res;
    }
}
NbViewportRulerAdapter.decorators = [
    { type: Injectable }
];
NbViewportRulerAdapter.ctorParameters = () => [
    { type: NbPlatform },
    { type: NgZone },
    { type: NbLayoutRulerService },
    { type: NbLayoutScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

var NbGlobalLogicalPosition;
(function (NbGlobalLogicalPosition) {
    NbGlobalLogicalPosition["TOP_START"] = "top-start";
    NbGlobalLogicalPosition["TOP_END"] = "top-end";
    NbGlobalLogicalPosition["BOTTOM_START"] = "bottom-start";
    NbGlobalLogicalPosition["BOTTOM_END"] = "bottom-end";
})(NbGlobalLogicalPosition || (NbGlobalLogicalPosition = {}));
var NbGlobalPhysicalPosition;
(function (NbGlobalPhysicalPosition) {
    NbGlobalPhysicalPosition["TOP_RIGHT"] = "top-right";
    NbGlobalPhysicalPosition["TOP_LEFT"] = "top-left";
    NbGlobalPhysicalPosition["BOTTOM_RIGHT"] = "bottom-right";
    NbGlobalPhysicalPosition["BOTTOM_LEFT"] = "bottom-left";
})(NbGlobalPhysicalPosition || (NbGlobalPhysicalPosition = {}));
class NbPositionHelper {
    constructor(layoutDirection) {
        this.layoutDirection = layoutDirection;
    }
    toLogicalPosition(position) {
        if (Object.values(NbGlobalLogicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toLogicalPositionWhenLtr(position);
        }
        else {
            return this.toLogicalPositionWhenRtl(position);
        }
    }
    toPhysicalPosition(position) {
        if (Object.values(NbGlobalPhysicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toPhysicalPositionWhenLtr(position);
        }
        else {
            return this.toPhysicalPositionWhenRtl(position);
        }
    }
    isTopPosition(position) {
        const logicalPosition = this.toLogicalPosition(position);
        return logicalPosition === NbGlobalLogicalPosition.TOP_END
            || logicalPosition === NbGlobalLogicalPosition.TOP_START;
    }
    isRightPosition(position) {
        const physicalPosition = this.toPhysicalPosition(position);
        return physicalPosition === NbGlobalPhysicalPosition.TOP_RIGHT
            || physicalPosition === NbGlobalPhysicalPosition.BOTTOM_RIGHT;
    }
    toLogicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_END;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_START;
        }
    }
    toLogicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_START;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_END;
        }
    }
    toPhysicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
        }
    }
    toPhysicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
        }
    }
}
NbPositionHelper.decorators = [
    { type: Injectable }
];
NbPositionHelper.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];

var NbAdjustment;
(function (NbAdjustment) {
    NbAdjustment["NOOP"] = "noop";
    NbAdjustment["CLOCKWISE"] = "clockwise";
    NbAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
    NbAdjustment["VERTICAL"] = "vertical";
    NbAdjustment["HORIZONTAL"] = "horizontal";
})(NbAdjustment || (NbAdjustment = {}));
var NbPosition;
(function (NbPosition) {
    NbPosition["TOP"] = "top";
    NbPosition["BOTTOM"] = "bottom";
    NbPosition["LEFT"] = "left";
    NbPosition["RIGHT"] = "right";
    NbPosition["START"] = "start";
    NbPosition["END"] = "end";
    NbPosition["TOP_END"] = "top-end";
    NbPosition["TOP_START"] = "top-start";
    NbPosition["BOTTOM_END"] = "bottom-end";
    NbPosition["BOTTOM_START"] = "bottom-start";
    NbPosition["END_TOP"] = "end-top";
    NbPosition["END_BOTTOM"] = "end-bottom";
    NbPosition["START_TOP"] = "start-top";
    NbPosition["START_BOTTOM"] = "start-bottom";
})(NbPosition || (NbPosition = {}));
const POSITIONS = {
    [NbPosition.RIGHT](offset) {
        return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: offset };
    },
    [NbPosition.BOTTOM](offset) {
        return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.LEFT](offset) {
        return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -offset };
    },
    [NbPosition.TOP](offset) {
        return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -offset };
    },
    [NbPosition.START](offset) {
        return this[NbPosition.LEFT](offset);
    },
    [NbPosition.END](offset) {
        return this[NbPosition.RIGHT](offset);
    },
    [NbPosition.END_TOP](offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', offsetX: offset };
    },
    [NbPosition.END_BOTTOM](offset) {
        return { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: offset };
    },
    [NbPosition.BOTTOM_START](offset) {
        return { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.BOTTOM_END](offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: offset };
    },
    [NbPosition.START_TOP](offset) {
        return { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', offsetX: -offset };
    },
    [NbPosition.START_BOTTOM](offset) {
        return { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', offsetX: -offset };
    },
    [NbPosition.TOP_START](offset) {
        return { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -offset };
    },
    [NbPosition.TOP_END](offset) {
        return { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -offset };
    },
};
const COUNTER_CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_END,
    NbPosition.TOP_START,
    NbPosition.START,
    NbPosition.START_TOP,
    NbPosition.START_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_START,
    NbPosition.BOTTOM_END,
    NbPosition.END,
    NbPosition.END_BOTTOM,
    NbPosition.END_TOP,
];
const CLOCKWISE_POSITIONS = [
    NbPosition.TOP,
    NbPosition.TOP_START,
    NbPosition.TOP_END,
    NbPosition.END,
    NbPosition.END_TOP,
    NbPosition.END_BOTTOM,
    NbPosition.BOTTOM,
    NbPosition.BOTTOM_END,
    NbPosition.BOTTOM_START,
    NbPosition.START,
    NbPosition.START_BOTTOM,
    NbPosition.START_TOP,
];
const VERTICAL_POSITIONS = [NbPosition.BOTTOM, NbPosition.TOP];
const HORIZONTAL_POSITIONS = [NbPosition.START, NbPosition.END];
function comparePositions(p1, p2) {
    return p1.originX === p2.originX
        && p1.originY === p2.originY
        && p1.overlayX === p2.overlayX
        && p1.overlayY === p2.overlayY;
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
class NbAdjustableConnectedPositionStrategy extends NbFlexibleConnectedPositionStrategy {
    constructor() {
        super(...arguments);
        this._offset = 15;
        this.positionChange = this.positionChanges.pipe(map((positionChange) => positionChange.connectionPair), map((connectionPair) => {
            return this.appliedPositions.find(({ connectedPosition }) => {
                return comparePositions(connectedPosition, connectionPair);
            }).key;
        }));
    }
    attach(overlayRef) {
        /**
         * We have to apply positions before attach because super.attach() validates positions and crashes app
         * if no positions provided.
         * */
        this.applyPositions();
        super.attach(overlayRef);
    }
    apply() {
        this.applyPositions();
        super.apply();
    }
    position(position) {
        this._position = position;
        return this;
    }
    adjustment(adjustment) {
        this._adjustment = adjustment;
        return this;
    }
    offset(offset) {
        this._offset = offset;
        return this;
    }
    applyPositions() {
        const positions = this.createPositions();
        this.persistChosenPositions(positions);
        this.withPositions(this.appliedPositions.map(({ connectedPosition }) => connectedPosition));
    }
    createPositions() {
        switch (this._adjustment) {
            case NbAdjustment.NOOP:
                return [this._position];
            case NbAdjustment.CLOCKWISE:
                return this.reorderPreferredPositions(CLOCKWISE_POSITIONS);
            case NbAdjustment.COUNTERCLOCKWISE:
                return this.reorderPreferredPositions(COUNTER_CLOCKWISE_POSITIONS);
            case NbAdjustment.HORIZONTAL:
                return this.reorderPreferredPositions(HORIZONTAL_POSITIONS);
            case NbAdjustment.VERTICAL:
                return this.reorderPreferredPositions(VERTICAL_POSITIONS);
        }
    }
    persistChosenPositions(positions) {
        this.appliedPositions = positions.map(position => ({
            key: position,
            connectedPosition: POSITIONS[position](this._offset),
        }));
    }
    reorderPreferredPositions(positions) {
        // Physical positions should be mapped to logical as adjustments use logical positions.
        const startPositionIndex = positions.indexOf(this.mapToLogicalPosition(this._position));
        const firstPart = positions.slice(startPositionIndex);
        const secondPart = positions.slice(0, startPositionIndex);
        return firstPart.concat(secondPart);
    }
    mapToLogicalPosition(position) {
        if (position === NbPosition.LEFT) {
            return NbPosition.START;
        }
        if (position === NbPosition.RIGHT) {
            return NbPosition.END;
        }
        return position;
    }
}
class NbGlobalPositionStrategy extends GlobalPositionStrategy {
    position(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return this.top().left();
            case NbGlobalLogicalPosition.TOP_END:
                return this.top().right();
            case NbGlobalLogicalPosition.BOTTOM_START:
                return this.bottom().left();
            case NbGlobalLogicalPosition.BOTTOM_END:
                return this.bottom().right();
        }
    }
}
class NbPositionBuilderService {
    constructor(document, viewportRuler, platform, positionBuilder, overlayContainer) {
        this.document = document;
        this.viewportRuler = viewportRuler;
        this.platform = platform;
        this.positionBuilder = positionBuilder;
        this.overlayContainer = overlayContainer;
    }
    global() {
        return new NbGlobalPositionStrategy();
    }
    connectedTo(elementRef) {
        return new NbAdjustableConnectedPositionStrategy(elementRef, this.viewportRuler, this.document, this.platform, this.overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false);
    }
}
NbPositionBuilderService.decorators = [
    { type: Injectable }
];
NbPositionBuilderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbViewportRulerAdapter },
    { type: NbPlatform },
    { type: NbOverlayPositionBuilder },
    { type: NbOverlayContainerAdapter }
];

class NbPositionedContainerComponent {
    get top() {
        return this.position === NbPosition.TOP;
    }
    get topStart() {
        return this.position === NbPosition.TOP_START;
    }
    get topEnd() {
        return this.position === NbPosition.TOP_END;
    }
    get right() {
        return this.position === NbPosition.RIGHT || this.position === NbPosition.END;
    }
    get endTop() {
        return this.position === NbPosition.END_TOP;
    }
    get endBottom() {
        return this.position === NbPosition.END_BOTTOM;
    }
    get bottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get bottomStart() {
        return this.position === NbPosition.BOTTOM_START;
    }
    get bottomEnd() {
        return this.position === NbPosition.BOTTOM_END;
    }
    get left() {
        return this.position === NbPosition.LEFT || this.position === NbPosition.START;
    }
    get startTop() {
        return this.position === NbPosition.START_TOP;
    }
    get startBottom() {
        return this.position === NbPosition.START_BOTTOM;
    }
}
NbPositionedContainerComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
NbPositionedContainerComponent.propDecorators = {
    position: [{ type: Input }],
    top: [{ type: HostBinding, args: ['class.nb-overlay-top',] }],
    topStart: [{ type: HostBinding, args: ['class.nb-overlay-top-start',] }],
    topEnd: [{ type: HostBinding, args: ['class.nb-overlay-top-end',] }],
    right: [{ type: HostBinding, args: ['class.nb-overlay-right',] }],
    endTop: [{ type: HostBinding, args: ['class.nb-overlay-end-top',] }],
    endBottom: [{ type: HostBinding, args: ['class.nb-overlay-end-bottom',] }],
    bottom: [{ type: HostBinding, args: ['class.nb-overlay-bottom',] }],
    bottomStart: [{ type: HostBinding, args: ['class.nb-overlay-bottom-start',] }],
    bottomEnd: [{ type: HostBinding, args: ['class.nb-overlay-bottom-end',] }],
    left: [{ type: HostBinding, args: ['class.nb-overlay-left',] }],
    startTop: [{ type: HostBinding, args: ['class.nb-overlay-start-top',] }],
    startBottom: [{ type: HostBinding, args: ['class.nb-overlay-start-bottom',] }]
};
class NbOverlayContainerComponent {
    constructor(vcr, injector, changeDetectorRef) {
        this.vcr = vcr;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.isAttached = false;
    }
    get isStringContent() {
        return !!this.content;
    }
    attachComponentPortal(portal, context) {
        portal.injector = this.createChildInjector(portal.componentFactoryResolver);
        const componentRef = this.portalOutlet.attachComponentPortal(portal);
        if (context) {
            Object.assign(componentRef.instance, context);
        }
        componentRef.changeDetectorRef.markForCheck();
        componentRef.changeDetectorRef.detectChanges();
        this.isAttached = true;
        return componentRef;
    }
    attachTemplatePortal(portal) {
        const templateRef = this.portalOutlet.attachTemplatePortal(portal);
        templateRef.detectChanges();
        this.isAttached = true;
        return templateRef;
    }
    attachStringContent(content) {
        this.content = content;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
        this.isAttached = true;
    }
    detach() {
        if (this.portalOutlet.hasAttached()) {
            this.portalOutlet.detach();
        }
        this.attachStringContent(null);
        this.isAttached = false;
    }
    createChildInjector(cfr) {
        return new NbPortalInjector(this.injector, new WeakMap([
            [ComponentFactoryResolver, cfr],
        ]));
    }
}
NbOverlayContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-overlay-container',
                template: `
    <div *ngIf="isStringContent" class="primitive-overlay">{{ content }}</div>
    <ng-template nbPortalOutlet></ng-template>
  `
            },] }
];
NbOverlayContainerComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Injector },
    { type: ChangeDetectorRef }
];
NbOverlayContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective, { static: true },] }]
};

function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
function createContainer(ref, container, context, componentFactoryResolver) {
    const containerRef = ref.attach(new NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
class NbOverlayService {
    constructor(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    get scrollStrategies() {
        return this.overlay.scrollStrategies;
    }
    create(config) {
        const overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange()
            .subscribe(dir => overlayRef.setDirection(dir));
        return overlayRef;
    }
}
NbOverlayService.decorators = [
    { type: Injectable }
];
NbOverlayService.ctorParameters = () => [
    { type: NbOverlay },
    { type: NbLayoutDirectionService }
];

class NbScrollDispatcherAdapter extends ScrollDispatcher {
    constructor(ngZone, platform, scrollService, document) {
        super(ngZone, platform, document);
        this.scrollService = scrollService;
    }
    scrolled(auditTimeInMs) {
        return merge(super.scrolled(auditTimeInMs), this.scrollService.onScroll());
    }
}
NbScrollDispatcherAdapter.decorators = [
    { type: Injectable }
];
NbScrollDispatcherAdapter.ctorParameters = () => [
    { type: NgZone },
    { type: NbPlatform },
    { type: NbLayoutScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    constructor(document, viewportRuler, scrollService) {
        super(viewportRuler, document);
        this.scrollService = scrollService;
    }
    enable() {
        super.enable();
        this.scrollService.scrollable(false);
    }
    disable() {
        super.disable();
        this.scrollService.scrollable(true);
    }
}
NbBlockScrollStrategyAdapter.decorators = [
    { type: Injectable }
];
NbBlockScrollStrategyAdapter.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbViewportRulerAdapter },
    { type: NbLayoutScrollService }
];
class NbScrollStrategyOptions extends ScrollStrategyOptions {
    constructor(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        super(scrollDispatcher, viewportRuler, ngZone, document);
        this.scrollService = scrollService;
        this.scrollDispatcher = scrollDispatcher;
        this.viewportRuler = viewportRuler;
        this.ngZone = ngZone;
        this.document = document;
        this.block = () => new NbBlockScrollStrategyAdapter(this.document, this.viewportRuler, this.scrollService);
    }
}
NbScrollStrategyOptions.decorators = [
    { type: Injectable }
];
NbScrollStrategyOptions.ctorParameters = () => [
    { type: NbLayoutScrollService },
    { type: ScrollDispatcher },
    { type: NbViewportRulerAdapter },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

class NbCdkAdapterModule {
    static forRoot() {
        return {
            ngModule: NbCdkAdapterModule,
            providers: [
                NbViewportRulerAdapter,
                NbOverlayContainerAdapter,
                NbBlockScrollStrategyAdapter,
                NbScrollDispatcherAdapter,
                NbScrollStrategyOptions,
                { provide: OverlayContainer, useExisting: NbOverlayContainerAdapter },
                { provide: NbOverlayContainer, useExisting: NbOverlayContainerAdapter },
                { provide: ScrollDispatcher, useExisting: NbScrollDispatcherAdapter },
                { provide: ScrollStrategyOptions, useExisting: NbScrollStrategyOptions },
            ],
        };
    }
}
NbCdkAdapterModule.decorators = [
    { type: NgModule, args: [{},] }
];

var NbTrigger;
(function (NbTrigger) {
    NbTrigger["NOOP"] = "noop";
    NbTrigger["CLICK"] = "click";
    NbTrigger["HOVER"] = "hover";
    NbTrigger["HINT"] = "hint";
    NbTrigger["FOCUS"] = "focus";
})(NbTrigger || (NbTrigger = {}));
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
class NbTriggerStrategyBase {
    constructor(document, host, container) {
        this.document = document;
        this.host = host;
        this.container = container;
        this.destroyed$ = new Subject();
    }
    destroy() {
        this.destroyed$.next();
    }
    isNotOnHostOrContainer(event) {
        return !this.isOnHost(event) && !this.isOnContainer(event);
    }
    isOnHostOrContainer(event) {
        return this.isOnHost(event) || this.isOnContainer(event);
    }
    isOnHost({ target }) {
        return this.host.contains(target);
    }
    isOnContainer({ target }) {
        return this.container() && this.container().location.nativeElement.contains(target);
    }
}
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
class NbClickTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        // since we should track click for both SHOW and HIDE event we firstly need to track the click and the state
        // of the container and then later on decide should we hide it or show
        // if we track the click & state separately this will case a behavior when the container is getting shown
        // and then hidden right away
        this.click$ = fromEvent(this.document, 'click')
            .pipe(map((event) => [!this.container() && this.isOnHost(event), event]), share(), takeUntil(this.destroyed$));
        this.show$ = this.click$
            .pipe(filter(([shouldShow]) => shouldShow), map(([, event]) => event), takeUntil(this.destroyed$));
        this.hide$ = this.click$
            .pipe(filter(([shouldShow, event]) => !shouldShow && !this.isOnContainer(event)), map(([, event]) => event), takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
class NbHoverTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = fromEvent(this.host, 'mouseenter')
            .pipe(filter(() => !this.container()), 
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        delay(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(fromEvent(this.host, 'mouseleave')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = fromEvent(this.host, 'mouseleave')
            .pipe(switchMap(() => fromEvent(this.document, 'mousemove')
            .pipe(debounceTime(100), takeWhile(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)))), takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
class NbHintTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = fromEvent(this.host, 'mouseenter')
            .pipe(
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        delay(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(fromEvent(this.host, 'mouseleave')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = fromEvent(this.host, 'mouseleave')
            .pipe(takeUntil(this.destroyed$));
    }
}
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
class NbFocusTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.focusOut$ = fromEvent(this.host, 'focusout')
            .pipe(switchMap(() => fromEvent(this.document, 'focusin')
            .pipe(takeWhile(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)))), takeUntil(this.destroyed$));
        this.clickIn$ = fromEvent(this.host, 'click')
            .pipe(filter(() => !this.container()), takeUntil(this.destroyed$));
        this.clickOut$ = fromEvent(this.document, 'click')
            .pipe(filter(() => !!this.container()), filter(event => this.isNotOnHostOrContainer(event)), takeUntil(this.destroyed$));
        this.tabKeyPress$ = fromEvent(this.document, 'keydown')
            .pipe(filter((event) => event.keyCode === 9), filter(() => !!this.container()), takeUntil(this.destroyed$));
        this.show$ = merge(fromEvent(this.host, 'focusin'), this.clickIn$)
            .pipe(filter(() => !this.container()), debounceTime(100), 
        // tslint:disable-next-line:rxjs-no-unsafe-takeuntil
        takeUntil(fromEvent(this.host, 'focusout')), repeat(), takeUntil(this.destroyed$));
        this.hide$ = merge(this.focusOut$, this.tabKeyPress$, this.clickOut$)
            .pipe(takeUntil(this.destroyed$));
    }
}
/**
 * Creates empty show and hide event streams.
 * */
class NbNoopTriggerStrategy extends NbTriggerStrategyBase {
    constructor() {
        super(...arguments);
        this.show$ = EMPTY;
        this.hide$ = EMPTY;
    }
}
class NbTriggerStrategyBuilderService {
    constructor(_document) {
        this._document = _document;
    }
    trigger(trigger$$1) {
        this._trigger = trigger$$1;
        return this;
    }
    host(host) {
        this._host = host;
        return this;
    }
    container(container) {
        this._container = container;
        return this;
    }
    build() {
        switch (this._trigger) {
            case NbTrigger.CLICK:
                return new NbClickTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HINT:
                return new NbHintTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HOVER:
                return new NbHoverTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.FOCUS:
                return new NbFocusTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.NOOP:
                return new NbNoopTriggerStrategy(this._document, this._host, this._container);
            default:
                throw new Error('Trigger have to be provided');
        }
    }
}
NbTriggerStrategyBuilderService.decorators = [
    { type: Injectable }
];
NbTriggerStrategyBuilderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

class NbOverlayModule {
    static forRoot() {
        return {
            ngModule: NbOverlayModule,
            providers: [
                NbPositionBuilderService,
                NbTriggerStrategyBuilderService,
                NbOverlayService,
                NbPositionHelper,
                ...NbCdkMappingModule.forRoot().providers,
                ...NbCdkAdapterModule.forRoot().providers,
                ...NbA11yModule.forRoot().providers,
            ],
        };
    }
}
NbOverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbCdkMappingModule,
                    NbSharedModule,
                ],
                declarations: [
                    NbPositionedContainerComponent,
                    NbOverlayContainerComponent,
                ],
                exports: [
                    NbCdkMappingModule,
                    NbCdkAdapterModule,
                    NbOverlayContainerComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbStatusService {
    constructor() {
        this.coreStatuses = ['basic', 'primary', 'info', 'warning', 'danger', 'control'];
    }
    isCoreStatus(status) {
        return this.coreStatuses.includes(status);
    }
    isCustomStatus(status) {
        if (this.isValidStatusString(status)) {
            return !this.isCoreStatus(status);
        }
        return false;
    }
    getStatusClass(status) {
        if (this.isValidStatusString(status)) {
            return `status-${status}`;
        }
        return undefined;
    }
    isValidStatusString(status) {
        return typeof status === 'string' && status.length > 0;
    }
}
NbStatusService.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function windowFactory(platformId) {
    if (isPlatformBrowser(platformId)) {
        return window;
    }
    // Provide undefined to get the error when trying to access the window as it
    // shouldn't be used outside the browser. Those who need to provide something
    // instead of window (e.g. domino window when running in node) could override
    // NB_WINDOW token.
    return undefined;
}
class NbThemeModule {
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions = { name: 'default' }, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: NB_THEME_OPTIONS, useValue: nbThemeOptions || {} },
                { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
                { provide: NB_JS_THEMES, useValue: nbJSThemes || [] },
                { provide: NB_MEDIA_BREAKPOINTS, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                { provide: NB_DOCUMENT, useExisting: DOCUMENT },
                { provide: NB_WINDOW, useFactory: windowFactory, deps: [PLATFORM_ID] },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
                { provide: NB_LAYOUT_DIRECTION, useValue: layoutDirection || NbLayoutDirection.LTR },
                NbLayoutDirectionService,
                NbLayoutScrollService,
                NbLayoutRulerService,
                ...NbOverlayModule.forRoot().providers,
                NbStatusService,
            ],
        };
    }
}
NbThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
            },] }
];

class NbColorHelper {
    static shade(color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    }
    static tint(color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    }
    static mix(color1, color2, weight) {
        const d2h = (d) => d.toString(16);
        const h2d = (h) => parseInt(h, 16);
        let result = '#';
        for (let i = 1; i < 7; i += 2) {
            const firstPart = h2d(color1.substr(i, 2));
            const secondPart = h2d(color2.substr(i, 2));
            const resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    }
    static hexToRgbA(hex, alpha) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    }
}

var NbIconPackType;
(function (NbIconPackType) {
    NbIconPackType["SVG"] = "svg";
    NbIconPackType["FONT"] = "font";
})(NbIconPackType || (NbIconPackType = {}));

class NbFontIcon {
    constructor(name, content, params = {}) {
        this.name = name;
        this.content = content;
        this.params = params;
    }
    getClasses(options) {
        const classes = [];
        if (this.params.packClass) {
            classes.push(this.params.packClass);
        }
        const name = this.params.iconClassPrefix ? `${this.params.iconClassPrefix}-${this.name}` : this.name;
        classes.push(name);
        return classes;
    }
    getContent(options) {
        return this.content;
    }
}
class NbSvgIcon {
    constructor(name, content, params = {}) {
        this.name = name;
        this.content = content;
        this.params = params;
    }
    getClasses(options) {
        const classes = [];
        if (this.params.packClass) {
            classes.push(this.params.packClass);
        }
        return classes;
    }
    getContent(options) {
        return this.content;
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbIconDefinition {
}
function throwPackNotFoundError(name) {
    throw Error(`Icon Pack '${name}' is not registered`);
}
function throwNoDefaultPackError() {
    throw Error('Default pack is not registered.');
}
function throwWrongPackTypeError(name, type, desiredType) {
    throw Error(`Pack '${name}' is not an '${desiredType}' Pack and its type is '${type}'`);
}
/**
 * This service allows to register multiple icon packs to use them later within `<nb-icon></nb-icon>` component.
 */
class NbIconLibraries {
    constructor() {
        this.packs = new Map();
    }
    /**
     * Registers new Svg icon pack
     * @param {string} name
     * @param {NbIcon} icons
     * @param {NbIconPackParams} params
     */
    registerSvgPack(name, icons, params = {}) {
        this.packs.set(name, {
            name,
            icons: new Map(Object.entries(icons)),
            params,
            type: NbIconPackType.SVG,
        });
    }
    /**
     * Registers new font pack
     * @param {string} name
     * @param {NbIconPackParams} params
     */
    registerFontPack(name, params = {}) {
        this.packs.set(name, {
            name,
            params,
            icons: new Map(),
            type: NbIconPackType.FONT,
        });
    }
    /**
     * Returns pack by name
     * @param {string} name
     */
    getPack(name) {
        return this.packs.get(name);
    }
    /**
     * Sets pack as a default
     * @param {string} name
     */
    setDefaultPack(name) {
        if (!this.packs.has(name)) {
            throwPackNotFoundError(name);
        }
        this.defaultPack = this.packs.get(name);
    }
    /**
     * Returns Svg icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getSvgIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== NbIconPackType.SVG) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'SVG');
        }
        const icon = this.getIconFromPack(name, iconsPack);
        if (!icon) {
            return null;
        }
        return {
            name,
            pack: iconsPack.name,
            type: NbIconPackType.SVG,
            icon: this.createSvgIcon(name, icon, iconsPack.params),
        };
    }
    /**
     * Returns Font icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getFontIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== NbIconPackType.FONT) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'Font');
        }
        const icon = this.getIconFromPack(name, iconsPack);
        return {
            name,
            pack: iconsPack.name,
            type: NbIconPackType.FONT,
            icon: this.createFontIcon(name, icon ? icon : '', iconsPack.params),
        };
    }
    /**
     * Returns an icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    getIcon(name, pack) {
        const iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type === NbIconPackType.SVG) {
            return this.getSvgIcon(name, pack);
        }
        return this.getFontIcon(name, pack);
    }
    createSvgIcon(name, content, params) {
        return content instanceof NbSvgIcon ? content : new NbSvgIcon(name, content, params);
    }
    createFontIcon(name, content, params) {
        return content instanceof NbFontIcon ? content : new NbFontIcon(name, content, params);
    }
    getPackOrThrow(name) {
        const pack = this.packs.get(name);
        if (!pack) {
            throwPackNotFoundError(name);
        }
        return pack;
    }
    getDefaultPackOrThrow() {
        if (!this.defaultPack) {
            throwNoDefaultPackError();
        }
        return this.defaultPack;
    }
    getIconFromPack(name, pack) {
        if (pack.icons.has(name)) {
            return pack.icons.get(name);
        }
        return null;
    }
}
NbIconLibraries.ɵprov = ɵɵdefineInjectable({ factory: function NbIconLibraries_Factory() { return new NbIconLibraries(); }, token: NbIconLibraries, providedIn: "root" });
NbIconLibraries.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
class NbIconComponent {
    constructor(sanitizer, iconLibrary, el, renderer, statusService) {
        this.sanitizer = sanitizer;
        this.iconLibrary = iconLibrary;
        this.el = el;
        this.renderer = renderer;
        this.statusService = statusService;
        this.prevClasses = [];
        this.html = '';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    get config() {
        return this._config;
    }
    set config(value) {
        if (!value) {
            return;
        }
        this._config = value;
        if (typeof value === 'string') {
            this.icon = value;
        }
        else {
            this.icon = value.icon;
            this.pack = value.pack;
            this.status = value.status;
            this.options = value.options;
        }
    }
    ngOnInit() {
        this.iconDef = this.renderIcon(this.icon, this.pack, this.options);
    }
    ngOnChanges() {
        const iconDef = this.iconLibrary.getIcon(this.icon, this.pack);
        if (iconDef) {
            this.renderIcon(this.icon, this.pack, this.options);
        }
        else {
            this.clearIcon();
        }
    }
    renderIcon(name, pack, options) {
        const iconDefinition = this.iconLibrary.getIcon(name, pack);
        if (!iconDefinition) {
            return;
        }
        const content = iconDefinition.icon.getContent(options);
        if (content) {
            this.html = this.sanitizer.bypassSecurityTrustHtml(content);
        }
        this.assignClasses(iconDefinition.icon.getClasses(options));
        return iconDefinition;
    }
    clearIcon() {
        this.html = '';
        this.assignClasses([]);
    }
    assignClasses(classes) {
        this.prevClasses.forEach((className) => {
            this.renderer.removeClass(this.el.nativeElement, className);
        });
        classes.forEach((className) => {
            this.renderer.addClass(this.el.nativeElement, className);
        });
        this.prevClasses = classes;
    }
}
NbIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-icon',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-block}\n"]
            },] }
];
NbIconComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NbIconLibraries },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NbStatusService }
];
NbIconComponent.propDecorators = {
    html: [{ type: HostBinding, args: ['innerHtml',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    icon: [{ type: Input }],
    pack: [{ type: Input }],
    options: [{ type: Input }],
    status: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbIconModule {
    constructor(iconsLibrary) {
        this.iconsLibrary = iconsLibrary;
        this.essentialsPackName = 'nebular-essentials';
        // in case of consequent calls we don't need to enable `nebular-essentials` pack again
        if (this.iconsLibrary.getPack(this.essentialsPackName)) {
            return;
        }
        // tslint:disable:max-line-length
        this.iconsLibrary.registerSvgPack(this.essentialsPackName, {
            'chevron-down-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g></svg>',
            'chevron-up-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g></svg>',
            'chevron-left-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g></svg>',
            'chevron-right-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g></svg>',
            'checkmark-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>',
            'paper-plane-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g></svg>',
            'file-text-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/><path d="M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></g></g></svg>',
            'alert-triangle-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"/><circle cx="12" cy="16" r="1"/><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g></svg>',
            'question-mark-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="question-mark"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g></svg>',
            'email-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>',
            'flash-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g></svg>',
            'search-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g></svg>',
            'close-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>',
            'collapse-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g></svg>',
            'expand-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g></svg>',
            'minus-outline': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g></svg>',
            'minus-bold-outline': '<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 8 2" width="100%" height="100%"><defs><rect id="nb-mbo" y="3" width="8" height="2" rx="1"/></defs><use xlink:href="#nb-mbo" transform="translate(0 -3)" fill-rule="evenodd"/></svg>',
            'checkmark-bold-outline': '<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 8 7" width="100%" height="100%"><defs><path id="nb-cbo" d="M6.039 1.43a1.11 1.11 0 0 1 1.517-.228c.483.342.588.998.234 1.466L4.431 7.1a1 1 0 0 1-1.492.115L.317 4.677a1.023 1.023 0 0 1 .002-1.483 1.113 1.113 0 0 1 1.535.002l1.641 1.59L6.04 1.428z"/></defs><use xlink:href="#nb-cbo" transform="translate(0 -1)" fill-rule="evenodd"/></svg>',
            'arrow-back': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>',
        });
        // tslint:enable:max-line-length
    }
}
NbIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NbIconComponent,
                ],
                exports: [
                    NbIconComponent,
                ],
            },] }
];
NbIconModule.ctorParameters = () => [
    { type: NbIconLibraries }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-basic-background-color:
 * card-header-basic-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 * card-header-control-background-color:
 * card-header-control-text-color:
 */
class NbCardHeaderComponent {
}
NbCardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-header',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
class NbCardBodyComponent {
}
NbCardBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-body',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
class NbCardFooterComponent {
}
NbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-footer',
                template: `<ng-content></ng-content>`
            },] }
];
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * Cards of smaller sizes could be combined and put on the same row with a bigger card so they have the same heights.
 * @stacked-example(Card sizes combinations, card/card-sizes-combinations.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-shadow:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */
class NbCardComponent {
    constructor(statusService) {
        this.statusService = statusService;
        this._size = '';
        /**
         * Card status:
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = '';
        /**
         * Card accent (color of the top border):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.accent = '';
    }
    /**
     * Card size, available sizes:
     * tiny, small, medium, large, giant
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get hasAccent() {
        return this.accent;
    }
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get successAccent() {
        return this.accent === 'success';
    }
    get warningAccent() {
        return this.accent === 'warning';
    }
    get dangerAccent() {
        return this.accent === 'danger';
    }
    get basicAccent() {
        return this.accent === 'basic';
    }
    get controlAccent() {
        return this.accent === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card',
                template: `
    <ng-content select="nb-card-header"></ng-content>
    <ng-content select="nb-card-body"></ng-content>
    <ng-content></ng-content>
    <ng-content select="nb-card-footer"></ng-content>
  `,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbCardComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbCardComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    accent: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    hasAccent: [{ type: HostBinding, args: ['class.accent',] }],
    primaryAccent: [{ type: HostBinding, args: ['class.accent-primary',] }],
    infoAccent: [{ type: HostBinding, args: ['class.accent-info',] }],
    successAccent: [{ type: HostBinding, args: ['class.accent-success',] }],
    warningAccent: [{ type: HostBinding, args: ['class.accent-warning',] }],
    dangerAccent: [{ type: HostBinding, args: ['class.accent-danger',] }],
    basicAccent: [{ type: HostBinding, args: ['class.accent-basic',] }],
    controlAccent: [{ type: HostBinding, args: ['class.accent-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
class NbRevealCardComponent {
    constructor() {
        /**
         * Reveal state
         * @type boolean
         */
        this.revealed = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.revealed = !this.revealed;
    }
}
NbRevealCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-reveal-card',
                template: `
    <ng-content select="nb-card-front"></ng-content>
    <div class="second-card-container">
      <ng-content select="nb-card-back"></ng-content>
    </div>
    <a *ngIf="showToggleButton" class="reveal-button" (click)="toggle()">
      <nb-icon icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </a>
  `,
                styles: [":host{display:block;position:relative;overflow:hidden}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host ::ng-deep nb-card-front nb-card,:host ::ng-deep nb-card-back nb-card{box-shadow:none;margin:0}:host ::ng-deep nb-card-front{display:block;height:100%}:host ::ng-deep nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s}:host(.revealed) .second-card-container{top:0;transition:none}:host(.revealed) .second-card-container ::ng-deep nb-card-back{top:0}:host(.revealed) .reveal-button{transform:none}\n"]
            },] }
];
NbRevealCardComponent.propDecorators = {
    revealed: [{ type: Input }, { type: HostBinding, args: ['class.revealed',] }],
    showToggleButton: [{ type: Input }]
};

/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
class NbFlipCardComponent {
    constructor() {
        /**
         * Flip state
         * @type boolean
         */
        this.flipped = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.flipped = !this.flipped;
    }
}
NbFlipCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-flip-card',
                template: `
    <div class="flipcard-body">
      <div class="front-container">
        <ng-content select="nb-card-front"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
      <div class="back-container">
        <ng-content select="nb-card-back"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
    </div>
  `,
                styles: [":host{display:block;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s 0.25s;backface-visibility:hidden;-webkit-backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible;-webkit-backface-visibility:visible}.flipcard-body{display:flex;transition:transform 0.5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s 0.15s}.flipcard-body .front-container{backface-visibility:visible;-webkit-backface-visibility:visible;transition:opacity 0s 0.2s}.flipcard-body .back-container{backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg)}\n"]
            },] }
];
NbFlipCardComponent.propDecorators = {
    flipped: [{ type: Input }, { type: HostBinding, args: ['class.flipped',] }],
    showToggleButton: [{ type: Input }]
};

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
class NbCardFrontComponent {
}
NbCardFrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-front',
                template: '<ng-content select="nb-card"></ng-content>'
            },] }
];
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
class NbCardBackComponent {
}
NbCardBackComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-card-back',
                template: '<ng-content select="nb-card"></ng-content>'
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
    NbRevealCardComponent,
    NbFlipCardComponent,
    NbCardFrontComponent,
    NbCardBackComponent,
];
class NbCardModule {
}
NbCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                ],
                declarations: [
                    ...NB_CARD_COMPONENTS,
                ],
                exports: [
                    ...NB_CARD_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbCalendarViewMode;
(function (NbCalendarViewMode) {
    NbCalendarViewMode["YEAR"] = "year";
    NbCalendarViewMode["MONTH"] = "month";
    NbCalendarViewMode["DATE"] = "date";
})(NbCalendarViewMode || (NbCalendarViewMode = {}));
var NbCalendarSize;
(function (NbCalendarSize) {
    NbCalendarSize["MEDIUM"] = "medium";
    NbCalendarSize["LARGE"] = "large";
})(NbCalendarSize || (NbCalendarSize = {}));

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function convertToBoolProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === '');
    }
    return !!val;
}

function firstChildNotComment(node) {
    const children = Array
        .from(node.childNodes)
        .filter((child) => child.nodeType !== Node.COMMENT_NODE);
    return children[0];
}
function lastChildNotComment(node) {
    const children = Array
        .from(node.childNodes)
        .filter((child) => child.nodeType !== Node.COMMENT_NODE);
    return children[children.length - 1];
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Calendar component provides a capability to choose a date.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Showcase, calendar/calendar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to select ranges you can use `NbCalendarRangeComponent`.
 *
 * ```html
 * <nb-calendar-range [(range)]="range"></nb-calendar-range>
 * <nb-calendar-range [range]="range" (rangeChange)="handleRangeChange($event)"></nb-calendar-range>
 * ```
 *
 * In order to use it, you have to import `NbCalendarRangeModule`.
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * The calendar component is supplied with a calendar navigation that contains navigate buttons.
 * If you do not want to use it you can hide calendar navigation using `showNavigation` property.
 * @stacked-example(Without navigation, calendar/calendar-without-navigation.component)
 *
 * As you can see in the basic usage example calendar contains previous and next month days
 * which can be disabled using `boundingMonth` property.
 * @stacked-example(Bounding months, calendar/calendar-bounding-month.component)
 *
 * You can define starting view of the calendar by setting `startView` property.
 * Available values: year, month and date.
 * @stacked-example(Start view, calendar/calendar-start-view.component)
 *
 * You can use a larger version of the calendar by defining size property.
 * Available values: medium(which is default) and large.
 * @stacked-example(Size, calendar/calendar-size.component)
 *
 * Calendar supports min and max dates which disables values out of min-max range.
 * @stacked-example(Borders, calendar/calendar-min-max.component)
 *
 * Also, you can define custom filter property that should be predicate which receives
 * date and returns false if this date has to be disabled. In this example, we provide the filter
 * which disables weekdays.
 * @stacked-example(Filter, calendar/calendar-filter.component)
 *
 * Week numbers column could be enabled via `showWeekNumber` binding:
 * @stacked-example(Week number, calendar/calendar-week-number.component)
 *
 * If you need create custom cells you can easily provide custom components for
 * calendar. For examples if you want to show any average price under each date you can
 * just provide custom `dayCellComponent`. Custom cells for month and year can be provided
 * the same way, check API reference.
 * @stacked-example(Custom day cell, calendar/calendar-custom-day-cell-showcase.component)
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
class NbCalendarComponent {
    constructor() {
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        /**
         * Emits date when selected.
         * */
        this.dateChange = new EventEmitter();
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
}
NbCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar',
                template: `
    <nb-base-calendar
      [boundingMonth]="boundingMonth"
      [startView]="startView"
      [date]="date"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [size]="size"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
      (dateChange)="dateChange.emit($event)"
    ></nb-base-calendar>
  `
            },] }
];
NbCalendarComponent.propDecorators = {
    boundingMonth: [{ type: Input }],
    startView: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    dayCellComponent: [{ type: Input }],
    monthCellComponent: [{ type: Input }],
    yearCellComponent: [{ type: Input }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    showNavigation: [{ type: Input }],
    date: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    dateChange: [{ type: Output }]
};

// tslint:disable-next-line:directive-class-suffix
class NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        /**
         * Button size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = 'basic';
        /**
         * Button shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button appearance: `filled`, `outline`, `ghost`, `hero`
         */
        this.appearance = 'filled';
        this._fullWidth = false;
        this._disabled = false;
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    /**
     * If set element will fill its container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    /**
     * Disables the button
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
            this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
        }
    }
    // issue #794
    get tabbable() {
        if (this.disabled) {
            return '-1';
        }
        if (this.tabIndex == null) {
            return '0';
        }
        return this.tabIndex.toString();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get round() {
        return this.shape === 'round';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get iconLeft() {
        const el = this.hostElement.nativeElement;
        const icon = this.iconElement;
        return !!(icon && firstChildNotComment(el) === icon);
    }
    get iconRight() {
        const el = this.hostElement.nativeElement;
        const icon = this.iconElement;
        return !!(icon && lastChildNotComment(el) === icon);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    /**
     * @docs-private
     **/
    updateProperties(config) {
        let isPropertyChanged = false;
        for (const key in config) {
            if (config.hasOwnProperty(key) && this[key] !== config[key]) {
                this[key] = config[key];
                isPropertyChanged = true;
            }
        }
        if (isPropertyChanged) {
            this.cd.markForCheck();
        }
    }
    get iconElement() {
        const el = this.hostElement.nativeElement;
        return el.querySelector('nb-icon');
    }
}
NbButton.decorators = [
    { type: Directive }
];
NbButton.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbButton.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    filled: [{ type: Input }, { type: HostBinding, args: ['class.appearance-filled',] }],
    outline: [{ type: Input }, { type: HostBinding, args: ['class.appearance-outline',] }],
    ghost: [{ type: Input }, { type: HostBinding, args: ['class.appearance-ghost',] }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.aria-disabled',] }, { type: HostBinding, args: ['class.btn-disabled',] }],
    tabIndex: [{ type: Input }],
    tabbable: [{ type: HostBinding, args: ['attr.tabindex',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    iconLeft: [{ type: HostBinding, args: ['class.icon-start',] }],
    iconRight: [{ type: HostBinding, args: ['class.icon-end',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `basic`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Hero, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * Icon can be placed inside of a button as a child element:
 * @stacked-example(Icon Button, button/button-icon.component.html)
 *
 * @additional-example(Interactive example, button/button-interactive.component)
 *
 * @styles
 *
 * button-cursor:
 * button-outline-width:
 * button-outline-color:
 * button-text-font-family:
 * button-text-font-weight:
 * button-disabled-cursor:
 * button-tiny-text-font-size:
 * button-tiny-text-line-height:
 * button-tiny-icon-size:
 * button-tiny-icon-vertical-margin:
 * button-tiny-icon-offset:
 * button-small-text-font-size:
 * button-small-text-line-height:
 * button-small-icon-size:
 * button-small-icon-vertical-margin:
 * button-small-icon-offset:
 * button-medium-text-font-size:
 * button-medium-text-line-height:
 * button-medium-icon-size:
 * button-medium-icon-vertical-margin:
 * button-medium-icon-offset:
 * button-large-text-font-size:
 * button-large-text-line-height:
 * button-large-icon-size:
 * button-large-icon-vertical-margin:
 * button-large-icon-offset:
 * button-giant-text-font-size:
 * button-giant-text-line-height:
 * button-giant-icon-size:
 * button-giant-icon-vertical-margin:
 * button-giant-icon-offset:
 * button-rectangle-border-radius:
 * button-semi-round-border-radius:
 * button-round-border-radius:
 * button-filled-border-style:
 * button-filled-border-width:
 * button-filled-text-transform:
 * button-filled-tiny-padding:
 * button-filled-small-padding:
 * button-filled-medium-padding:
 * button-filled-large-padding:
 * button-filled-giant-padding:
 * button-filled-basic-background-color:
 * button-filled-basic-border-color:
 * button-filled-basic-text-color:
 * button-filled-basic-focus-background-color:
 * button-filled-basic-focus-border-color:
 * button-filled-basic-hover-background-color:
 * button-filled-basic-hover-border-color:
 * button-filled-basic-active-background-color:
 * button-filled-basic-active-border-color:
 * button-filled-basic-disabled-background-color:
 * button-filled-basic-disabled-border-color:
 * button-filled-basic-disabled-text-color:
 * button-filled-primary-background-color:
 * button-filled-primary-border-color:
 * button-filled-primary-text-color:
 * button-filled-primary-focus-background-color:
 * button-filled-primary-focus-border-color:
 * button-filled-primary-hover-background-color:
 * button-filled-primary-hover-border-color:
 * button-filled-primary-active-background-color:
 * button-filled-primary-active-border-color:
 * button-filled-primary-disabled-background-color:
 * button-filled-primary-disabled-border-color:
 * button-filled-primary-disabled-text-color:
 * button-filled-success-background-color:
 * button-filled-success-border-color:
 * button-filled-success-text-color:
 * button-filled-success-focus-background-color:
 * button-filled-success-focus-border-color:
 * button-filled-success-hover-background-color:
 * button-filled-success-hover-border-color:
 * button-filled-success-active-background-color:
 * button-filled-success-active-border-color:
 * button-filled-success-disabled-background-color:
 * button-filled-success-disabled-border-color:
 * button-filled-success-disabled-text-color:
 * button-filled-info-background-color:
 * button-filled-info-border-color:
 * button-filled-info-text-color:
 * button-filled-info-focus-background-color:
 * button-filled-info-focus-border-color:
 * button-filled-info-hover-background-color:
 * button-filled-info-hover-border-color:
 * button-filled-info-active-background-color:
 * button-filled-info-active-border-color:
 * button-filled-info-disabled-background-color:
 * button-filled-info-disabled-border-color:
 * button-filled-info-disabled-text-color:
 * button-filled-warning-background-color:
 * button-filled-warning-border-color:
 * button-filled-warning-text-color:
 * button-filled-warning-focus-background-color:
 * button-filled-warning-focus-border-color:
 * button-filled-warning-hover-background-color:
 * button-filled-warning-hover-border-color:
 * button-filled-warning-active-background-color:
 * button-filled-warning-active-border-color:
 * button-filled-warning-disabled-background-color:
 * button-filled-warning-disabled-border-color:
 * button-filled-warning-disabled-text-color:
 * button-filled-danger-background-color:
 * button-filled-danger-border-color:
 * button-filled-danger-text-color:
 * button-filled-danger-focus-background-color:
 * button-filled-danger-focus-border-color:
 * button-filled-danger-hover-background-color:
 * button-filled-danger-hover-border-color:
 * button-filled-danger-active-background-color:
 * button-filled-danger-active-border-color:
 * button-filled-danger-disabled-background-color:
 * button-filled-danger-disabled-border-color:
 * button-filled-danger-disabled-text-color:
 * button-filled-control-background-color:
 * button-filled-control-border-color:
 * button-filled-control-text-color:
 * button-filled-control-focus-background-color:
 * button-filled-control-focus-border-color:
 * button-filled-control-hover-background-color:
 * button-filled-control-hover-border-color:
 * button-filled-control-active-background-color:
 * button-filled-control-active-border-color:
 * button-filled-control-disabled-background-color:
 * button-filled-control-disabled-border-color:
 * button-filled-control-disabled-text-color:
 * button-outline-border-style:
 * button-outline-border-width:
 * button-outline-text-transform:
 * button-outline-focus-inset-shadow-length:
 * button-outline-tiny-padding:
 * button-outline-small-padding:
 * button-outline-medium-padding:
 * button-outline-large-padding:
 * button-outline-giant-padding:
 * button-outline-basic-background-color:
 * button-outline-basic-border-color:
 * button-outline-basic-text-color:
 * button-outline-basic-focus-background-color:
 * button-outline-basic-focus-border-color:
 * button-outline-basic-focus-text-color:
 * button-outline-basic-hover-background-color:
 * button-outline-basic-hover-border-color:
 * button-outline-basic-hover-text-color:
 * button-outline-basic-active-background-color:
 * button-outline-basic-active-border-color:
 * button-outline-basic-active-text-color:
 * button-outline-basic-disabled-background-color:
 * button-outline-basic-disabled-border-color:
 * button-outline-basic-disabled-text-color:
 * button-outline-primary-background-color:
 * button-outline-primary-border-color:
 * button-outline-primary-text-color:
 * button-outline-primary-focus-background-color:
 * button-outline-primary-focus-border-color:
 * button-outline-primary-focus-text-color:
 * button-outline-primary-hover-background-color:
 * button-outline-primary-hover-border-color:
 * button-outline-primary-hover-text-color:
 * button-outline-primary-active-background-color:
 * button-outline-primary-active-border-color:
 * button-outline-primary-active-text-color:
 * button-outline-primary-disabled-background-color:
 * button-outline-primary-disabled-border-color:
 * button-outline-primary-disabled-text-color:
 * button-outline-success-background-color:
 * button-outline-success-border-color:
 * button-outline-success-text-color:
 * button-outline-success-focus-background-color:
 * button-outline-success-focus-border-color:
 * button-outline-success-focus-text-color:
 * button-outline-success-hover-background-color:
 * button-outline-success-hover-border-color:
 * button-outline-success-hover-text-color:
 * button-outline-success-active-background-color:
 * button-outline-success-active-border-color:
 * button-outline-success-active-text-color:
 * button-outline-success-disabled-background-color:
 * button-outline-success-disabled-border-color:
 * button-outline-success-disabled-text-color:
 * button-outline-info-background-color:
 * button-outline-info-border-color:
 * button-outline-info-text-color:
 * button-outline-info-focus-background-color:
 * button-outline-info-focus-border-color:
 * button-outline-info-focus-text-color:
 * button-outline-info-hover-background-color:
 * button-outline-info-hover-border-color:
 * button-outline-info-hover-text-color:
 * button-outline-info-active-background-color:
 * button-outline-info-active-border-color:
 * button-outline-info-active-text-color:
 * button-outline-info-disabled-background-color:
 * button-outline-info-disabled-border-color:
 * button-outline-info-disabled-text-color:
 * button-outline-warning-background-color:
 * button-outline-warning-border-color:
 * button-outline-warning-text-color:
 * button-outline-warning-focus-background-color:
 * button-outline-warning-focus-border-color:
 * button-outline-warning-focus-text-color:
 * button-outline-warning-hover-background-color:
 * button-outline-warning-hover-border-color:
 * button-outline-warning-hover-text-color:
 * button-outline-warning-active-background-color:
 * button-outline-warning-active-border-color:
 * button-outline-warning-active-text-color:
 * button-outline-warning-disabled-background-color:
 * button-outline-warning-disabled-border-color:
 * button-outline-warning-disabled-text-color:
 * button-outline-danger-background-color:
 * button-outline-danger-border-color:
 * button-outline-danger-text-color:
 * button-outline-danger-focus-background-color:
 * button-outline-danger-focus-border-color:
 * button-outline-danger-focus-text-color:
 * button-outline-danger-hover-background-color:
 * button-outline-danger-hover-border-color:
 * button-outline-danger-hover-text-color:
 * button-outline-danger-active-background-color:
 * button-outline-danger-active-border-color:
 * button-outline-danger-active-text-color:
 * button-outline-danger-disabled-background-color:
 * button-outline-danger-disabled-border-color:
 * button-outline-danger-disabled-text-color:
 * button-outline-control-background-color:
 * button-outline-control-border-color:
 * button-outline-control-text-color:
 * button-outline-control-focus-background-color:
 * button-outline-control-focus-border-color:
 * button-outline-control-focus-text-color:
 * button-outline-control-hover-background-color:
 * button-outline-control-hover-border-color:
 * button-outline-control-hover-text-color:
 * button-outline-control-active-background-color:
 * button-outline-control-active-border-color:
 * button-outline-control-active-text-color:
 * button-outline-control-disabled-background-color:
 * button-outline-control-disabled-border-color:
 * button-outline-control-disabled-text-color:
 * button-ghost-background-color:
 * button-ghost-border-color:
 * button-ghost-border-style:
 * button-ghost-border-width:
 * button-ghost-text-transform:
 * button-ghost-focus-inset-shadow-length:
 * button-ghost-tiny-padding:
 * button-ghost-small-padding:
 * button-ghost-medium-padding:
 * button-ghost-large-padding:
 * button-ghost-giant-padding:
 * button-ghost-basic-text-color:
 * button-ghost-basic-focus-background-color:
 * button-ghost-basic-focus-border-color:
 * button-ghost-basic-focus-text-color:
 * button-ghost-basic-hover-background-color:
 * button-ghost-basic-hover-border-color:
 * button-ghost-basic-hover-text-color:
 * button-ghost-basic-active-background-color:
 * button-ghost-basic-active-border-color:
 * button-ghost-basic-active-text-color:
 * button-ghost-basic-disabled-background-color:
 * button-ghost-basic-disabled-border-color:
 * button-ghost-basic-disabled-text-color:
 * button-ghost-primary-text-color:
 * button-ghost-primary-focus-background-color:
 * button-ghost-primary-focus-border-color:
 * button-ghost-primary-focus-text-color:
 * button-ghost-primary-hover-background-color:
 * button-ghost-primary-hover-border-color:
 * button-ghost-primary-hover-text-color:
 * button-ghost-primary-active-background-color:
 * button-ghost-primary-active-border-color:
 * button-ghost-primary-active-text-color:
 * button-ghost-primary-disabled-background-color:
 * button-ghost-primary-disabled-border-color:
 * button-ghost-primary-disabled-text-color:
 * button-ghost-success-text-color:
 * button-ghost-success-focus-background-color:
 * button-ghost-success-focus-border-color:
 * button-ghost-success-focus-text-color:
 * button-ghost-success-hover-background-color:
 * button-ghost-success-hover-border-color:
 * button-ghost-success-hover-text-color:
 * button-ghost-success-active-background-color:
 * button-ghost-success-active-border-color:
 * button-ghost-success-active-text-color:
 * button-ghost-success-disabled-background-color:
 * button-ghost-success-disabled-border-color:
 * button-ghost-success-disabled-text-color:
 * button-ghost-info-text-color:
 * button-ghost-info-focus-background-color:
 * button-ghost-info-focus-border-color:
 * button-ghost-info-focus-text-color:
 * button-ghost-info-hover-background-color:
 * button-ghost-info-hover-border-color:
 * button-ghost-info-hover-text-color:
 * button-ghost-info-active-background-color:
 * button-ghost-info-active-border-color:
 * button-ghost-info-active-text-color:
 * button-ghost-info-disabled-background-color:
 * button-ghost-info-disabled-border-color:
 * button-ghost-info-disabled-text-color:
 * button-ghost-warning-text-color:
 * button-ghost-warning-focus-background-color:
 * button-ghost-warning-focus-border-color:
 * button-ghost-warning-focus-text-color:
 * button-ghost-warning-hover-background-color:
 * button-ghost-warning-hover-border-color:
 * button-ghost-warning-hover-text-color:
 * button-ghost-warning-active-background-color:
 * button-ghost-warning-active-border-color:
 * button-ghost-warning-active-text-color:
 * button-ghost-warning-disabled-background-color:
 * button-ghost-warning-disabled-border-color:
 * button-ghost-warning-disabled-text-color:
 * button-ghost-danger-text-color:
 * button-ghost-danger-focus-background-color:
 * button-ghost-danger-focus-border-color:
 * button-ghost-danger-focus-text-color:
 * button-ghost-danger-hover-background-color:
 * button-ghost-danger-hover-border-color:
 * button-ghost-danger-hover-text-color:
 * button-ghost-danger-active-background-color:
 * button-ghost-danger-active-border-color:
 * button-ghost-danger-active-text-color:
 * button-ghost-danger-disabled-background-color:
 * button-ghost-danger-disabled-border-color:
 * button-ghost-danger-disabled-text-color:
 * button-ghost-control-text-color:
 * button-ghost-control-focus-background-color:
 * button-ghost-control-focus-border-color:
 * button-ghost-control-focus-text-color:
 * button-ghost-control-hover-background-color:
 * button-ghost-control-hover-border-color:
 * button-ghost-control-hover-text-color:
 * button-ghost-control-active-background-color:
 * button-ghost-control-active-border-color:
 * button-ghost-control-active-text-color:
 * button-ghost-control-disabled-background-color:
 * button-ghost-control-disabled-border-color:
 * button-ghost-control-disabled-text-color:
 * button-hero-border-color:
 * button-hero-border-style:
 * button-hero-border-width:
 * button-hero-text-transform:
 * button-hero-tiny-padding:
 * button-hero-small-padding:
 * button-hero-medium-padding:
 * button-hero-large-padding:
 * button-hero-giant-padding:
 * button-hero-shadow:
 * button-hero-text-shadow:
 * button-hero-bevel-size:
 * button-hero-glow-size:
 * button-hero-outline-color:
 * button-hero-outline-width:
 * button-hero-basic-text-color:
 * button-hero-basic-bevel-color:
 * button-hero-basic-glow-color:
 * button-hero-basic-left-background-color:
 * button-hero-basic-right-background-color:
 * button-hero-basic-focus-left-background-color:
 * button-hero-basic-focus-right-background-color:
 * button-hero-basic-hover-left-background-color:
 * button-hero-basic-hover-right-background-color:
 * button-hero-basic-active-left-background-color:
 * button-hero-basic-active-right-background-color:
 * button-hero-basic-disabled-background-color:
 * button-hero-basic-disabled-text-color:
 * button-hero-primary-text-color:
 * button-hero-primary-bevel-color:
 * button-hero-primary-glow-color:
 * button-hero-primary-left-background-color:
 * button-hero-primary-right-background-color:
 * button-hero-primary-focus-left-background-color:
 * button-hero-primary-focus-right-background-color:
 * button-hero-primary-hover-left-background-color:
 * button-hero-primary-hover-right-background-color:
 * button-hero-primary-active-left-background-color:
 * button-hero-primary-active-right-background-color:
 * button-hero-primary-disabled-background-color:
 * button-hero-primary-disabled-text-color:
 * button-hero-success-text-color:
 * button-hero-success-bevel-color:
 * button-hero-success-glow-color:
 * button-hero-success-left-background-color:
 * button-hero-success-right-background-color:
 * button-hero-success-focus-left-background-color:
 * button-hero-success-focus-right-background-color:
 * button-hero-success-hover-left-background-color:
 * button-hero-success-hover-right-background-color:
 * button-hero-success-active-left-background-color:
 * button-hero-success-active-right-background-color:
 * button-hero-success-disabled-background-color:
 * button-hero-success-disabled-text-color:
 * button-hero-info-text-color:
 * button-hero-info-bevel-color:
 * button-hero-info-glow-color:
 * button-hero-info-left-background-color:
 * button-hero-info-right-background-color:
 * button-hero-info-focus-left-background-color:
 * button-hero-info-focus-right-background-color:
 * button-hero-info-hover-left-background-color:
 * button-hero-info-hover-right-background-color:
 * button-hero-info-active-left-background-color:
 * button-hero-info-active-right-background-color:
 * button-hero-info-disabled-background-color:
 * button-hero-info-disabled-text-color:
 * button-hero-warning-text-color:
 * button-hero-warning-bevel-color:
 * button-hero-warning-glow-color:
 * button-hero-warning-left-background-color:
 * button-hero-warning-right-background-color:
 * button-hero-warning-focus-left-background-color:
 * button-hero-warning-focus-right-background-color:
 * button-hero-warning-hover-left-background-color:
 * button-hero-warning-hover-right-background-color:
 * button-hero-warning-active-left-background-color:
 * button-hero-warning-active-right-background-color:
 * button-hero-warning-disabled-background-color:
 * button-hero-warning-disabled-text-color:
 * button-hero-danger-text-color:
 * button-hero-danger-bevel-color:
 * button-hero-danger-glow-color:
 * button-hero-danger-left-background-color:
 * button-hero-danger-right-background-color:
 * button-hero-danger-focus-left-background-color:
 * button-hero-danger-focus-right-background-color:
 * button-hero-danger-hover-left-background-color:
 * button-hero-danger-hover-right-background-color:
 * button-hero-danger-active-left-background-color:
 * button-hero-danger-active-right-background-color:
 * button-hero-danger-disabled-background-color:
 * button-hero-danger-disabled-text-color:
 * button-hero-control-text-color:
 * button-hero-control-bevel-color:
 * button-hero-control-glow-color:
 * button-hero-control-left-background-color:
 * button-hero-control-right-background-color:
 * button-hero-control-focus-left-background-color:
 * button-hero-control-focus-right-background-color:
 * button-hero-control-hover-left-background-color:
 * button-hero-control-hover-right-background-color:
 * button-hero-control-active-left-background-color:
 * button-hero-control-active-right-background-color:
 * button-hero-control-disabled-background-color:
 * button-hero-control-disabled-text-color:
 */
class NbButtonComponent extends NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
    }
    /**
     * Sets `hero` appearance
     */
    get hero() {
        return this.appearance === 'hero';
    }
    set hero(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'hero';
        }
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    onClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
NbButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[nbButton],a[nbButton],input[type="button"][nbButton],input[type="submit"][nbButton]',
                template: `
    <ng-content></ng-content>
  `,
                providers: [
                    { provide: NbButton, useExisting: NbButtonComponent },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbButtonComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbButtonComponent.propDecorators = {
    hero: [{ type: Input }, { type: HostBinding, args: ['class.appearance-hero',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_BUTTON_COMPONENTS = [
    NbButtonComponent,
];
class NbButtonModule {
}
NbButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    ...NB_BUTTON_COMPONENTS,
                ],
                exports: [
                    ...NB_BUTTON_COMPONENTS,
                ],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDateService {
    constructor() {
        this.DAYS_IN_WEEK = 7;
        /**
         * Number of hours in AM/PM day periods.
         **/
        this.HOURS_IN_DAY_PERIOD = 12;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    /**
     * Checks if the date is between the start date and the end date.
     * */
    isBetween(date, start, end) {
        return this.compareDates(date, start) > 0 && this.compareDates(date, end) < 0;
    }
    ;
    /**
     * Checks is two dates have the same day.
     * */
    isSameDaySafe(date1, date2) {
        return date1 && date2 && this.isSameDay(date1, date2);
    }
    ;
    /**
     * Checks is two dates have the same month.
     * */
    isSameMonthSafe(date1, date2) {
        return date1 && date2 && this.isSameMonth(date1, date2);
    }
    /**
     * Checks is two dates have the same year.
     * */
    isSameYearSafe(date1, date2) {
        return date1 && date2 && this.isSameYear(date1, date2);
    }
    isSameHourAndMinute(date1, date2) {
        return this.isSameHour(date1, date2) && this.isSameMinute(date1, date2);
    }
    isSameHour(date1, date2) {
        return this.getHours(date1) === this.getHours(date2);
    }
    isSameMinute(date1, date2) {
        return this.getMinutes(date1) === this.getMinutes(date2);
    }
    getTwentyFourHoursFormat() {
        return 'HH:mm';
    }
    getTwentyFourHoursFormatWithSeconds() {
        return 'HH:mm:ss';
    }
    getTwelveHoursFormatWithSeconds() {
        return 'hh:mm:ss a';
    }
    getDayPeriod(date) {
        const isFirstDayPeriod = this.getHours(date) < this.HOURS_IN_DAY_PERIOD;
        if (isFirstDayPeriod) {
            return "AM" /* AM */;
        }
        else {
            return "PM" /* PM */;
        }
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const batch = (target, batchSize, offset = 0) => {
    return target.reduce((res, item, index) => {
        const chunkIndex = Math.floor((index + offset) / batchSize);
        if (!res[chunkIndex]) {
            res[chunkIndex] = [];
        }
        res[chunkIndex].push(item);
        return res;
    }, []);
};
/**
 * returns array with numbers from first argument to bound.
 * */
const rangeFromTo = (from$$1, to = 0, producer = i => i) => {
    const arr = [];
    for (let i = from$$1; i < to; i++) {
        arr.push(producer(i));
    }
    return arr;
};
/**
 * returns array with numbers from zero to bound.
 * */
const range = (bound, producer = i => i) => {
    return rangeFromTo(0, bound, producer);
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarMonthModelService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    createDaysGrid(activeMonth, boundingMonth = true) {
        const weeks = this.createDates(activeMonth);
        return this.withBoundingMonths(weeks, activeMonth, boundingMonth);
    }
    createDates(activeMonth) {
        const days = this.createDateRangeForMonth(activeMonth);
        const startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
        return batch(days, this.dateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    }
    withBoundingMonths(weeks, activeMonth, boundingMonth) {
        let withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        return withBoundingMonths;
    }
    addPrevBoundingMonth(weeks, activeMonth, boundingMonth) {
        const firstWeek = weeks.shift();
        const requiredItems = this.dateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift(...this.createPrevBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [firstWeek, ...weeks];
    }
    addNextBoundingMonth(weeks, activeMonth, boundingMonth) {
        const lastWeek = weeks.pop();
        const requiredItems = this.dateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push(...this.createNextBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [...weeks, lastWeek];
    }
    createPrevBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, -1);
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month)
            .slice(daysInMonth - requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    createNextBoundingDays(activeMonth, boundingMonth, requiredItems) {
        const month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month)
            .slice(0, requiredItems)
            .map(date => boundingMonth ? date : null);
    }
    getStartOfWeekDayDiff(date) {
        const startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth);
    }
    getWeekStartDiff(date) {
        return (7 - this.dateService.getFirstDayOfWeek() + this.dateService.getDayOfWeek(date)) % 7;
    }
    isShouldAddPrevBoundingMonth(weeks) {
        return weeks[0].length < this.dateService.DAYS_IN_WEEK;
    }
    isShouldAddNextBoundingMonth(weeks) {
        return weeks[weeks.length - 1].length < this.dateService.DAYS_IN_WEEK;
    }
    createDateRangeForMonth(date) {
        const daysInMonth = this.dateService.getNumberOfDaysInMonth(date);
        return range(daysInMonth, i => {
            const year = this.dateService.getYear(date);
            const month = this.dateService.getMonth(date);
            return this.dateService.createDate(year, month, i + 1);
        });
    }
}
NbCalendarMonthModelService.decorators = [
    { type: Injectable }
];
NbCalendarMonthModelService.ctorParameters = () => [
    { type: NbDateService }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarDayCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.dayCellClass = true;
    }
    get today() {
        return this.dateService.isSameDaySafe(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        return this.dateService.isSameDaySafe(this.date, this.selectedValue);
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
}
NbCalendarDayCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-day-cell',
                template: `
    <div class="cell-content">
      {{ day }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarDayCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarDayCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    boundingMonth: [{ type: HostBinding, args: ['class.bounding-month',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    empty: [{ type: HostBinding, args: ['class.empty',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    dayCellClass: [{ type: HostBinding, args: ['class.day-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Provides capability pick days.
 * */
class NbCalendarDayPickerComponent {
    constructor(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        this._showWeekNumber = false;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set setCellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges({ visibleDate, boundingMonths }) {
        if (visibleDate || boundingMonths) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    }
    onSelect(day) {
        this.dateChange.emit(day);
    }
}
NbCalendarDayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-day-picker',
                template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex}.days-container{width:100%}\n"]
            },] }
];
NbCalendarDayPickerComponent.ctorParameters = () => [
    { type: NbCalendarMonthModelService }
];
NbCalendarDayPickerComponent.propDecorators = {
    visibleDate: [{ type: Input }],
    boundingMonths: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    setCellComponent: [{ type: Input, args: ['cellComponent',] }],
    size: [{ type: Input }],
    date: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    dateChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarDaysNamesComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnInit() {
        const days = this.createDaysNames();
        this.days = this.shiftStartOfWeek(days);
    }
    createDaysNames() {
        return this.dateService.getDayOfWeekNames()
            .map(this.markIfHoliday);
    }
    shiftStartOfWeek(days) {
        for (let i = 0; i < this.dateService.getFirstDayOfWeek(); i++) {
            days.push(days.shift());
        }
        return days;
    }
    markIfHoliday(name, i) {
        return { name, isHoliday: i % 6 === 0 };
    }
}
NbCalendarDaysNamesComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-days-names',
                template: `
    <div class="day" *ngFor="let day of days" [class.holiday]="day.isHoliday">{{ day.name }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center}\n"]
            },] }
];
NbCalendarDaysNamesComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarDaysNamesComponent.propDecorators = {
    size: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarMonthCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.monthCellClass = true;
    }
    get selected() {
        return this.dateService.isSameMonthSafe(this.date, this.selectedValue);
    }
    get today() {
        return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get month() {
        return this.dateService.getMonthName(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    }
    monthStart() {
        return this.dateService.getMonthStart(this.date);
    }
    monthEnd() {
        return this.dateService.getMonthEnd(this.date);
    }
}
NbCalendarMonthCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-month-cell',
                template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarMonthCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarMonthCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    monthCellClass: [{ type: HostBinding, args: ['class.month-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const MONTHS_IN_VIEW = 12;
const MONTHS_IN_COLUMN = 4;
class NbCalendarMonthPickerComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.monthChange = new EventEmitter();
        this.cellComponent = NbCalendarMonthCellComponent;
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.month) {
            this.initMonths();
        }
    }
    initMonths() {
        const date = this.dateService.getDate(this.month);
        const year = this.dateService.getYear(this.month);
        const firstMonth = this.dateService.createDate(year, 0, date);
        const months = [firstMonth];
        for (let monthIndex = 1; monthIndex < MONTHS_IN_VIEW; monthIndex++) {
            months.push(this.dateService.addMonth(firstMonth, monthIndex));
        }
        this.months = batch(months, MONTHS_IN_COLUMN);
    }
    onSelect(month) {
        this.monthChange.emit(month);
    }
}
NbCalendarMonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-month-picker',
                template: `
    <nb-calendar-picker
      [data]="months"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="month"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarMonthPickerComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarMonthPickerComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    month: [{ type: Input }],
    date: [{ type: Input }],
    monthChange: [{ type: Output }],
    _cellComponent: [{ type: Input, args: ['cellComponent',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarYearModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.yearsInView = 12;
        this.yearsInRow = 4;
    }
    getYearsInView() {
        return this.yearsInView;
    }
    getYearsInRow() {
        return this.yearsInRow;
    }
    getViewYears(viewYear) {
        const year = this.dateService.getYear(viewYear);
        let viewStartYear;
        if (year >= 0) {
            viewStartYear = year - (year % this.yearsInView);
        }
        else {
            viewStartYear = year - (year % this.yearsInView + this.yearsInView);
        }
        const years = range(this.yearsInView).map(i => this.copyWithYear(viewStartYear + i, viewYear));
        return batch(years, this.yearsInRow);
    }
    copyWithYear(year, date) {
        return this.dateService.createDate(year, this.dateService.getMonth(date), this.dateService.getDate(date));
    }
}
NbCalendarYearModelService.decorators = [
    { type: Injectable }
];
NbCalendarYearModelService.ctorParameters = () => [
    { type: NbDateService }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarViewModeComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.viewMode = NbCalendarViewMode.DATE;
        this.changeMode = new EventEmitter(true);
    }
    getText() {
        if (!this.date) {
            return '';
        }
        switch (this.viewMode) {
            case NbCalendarViewMode.DATE: {
                const month = this.dateService.getMonthName(this.date, TranslationWidth.Wide);
                const year = this.dateService.getYear(this.date);
                return `${month} ${year}`;
            }
            case NbCalendarViewMode.MONTH:
                return `${this.dateService.getYear(this.date)}`;
            case NbCalendarViewMode.YEAR:
                return `${this.getFirstYear()} - ${this.getLastYear()}`;
        }
    }
    getIcon() {
        if (this.viewMode === NbCalendarViewMode.DATE) {
            return 'chevron-down-outline';
        }
        return 'chevron-up-outline';
    }
    getFirstYear() {
        const years = this.yearModelService.getViewYears(this.date);
        return this.dateService.getYear(years[0][0]).toString();
    }
    getLastYear() {
        const years = this.yearModelService.getViewYears(this.date);
        const lastRow = years[years.length - 1];
        const lastYear = lastRow[lastRow.length - 1];
        return this.dateService.getYear(lastYear).toString();
    }
}
NbCalendarViewModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-view-mode',
                template: `
    <button nbButton (click)="changeMode.emit()" ghost status="basic">
      {{ getText() }}
      <nb-icon [icon]="getIcon()" pack="nebular-essentials"></nb-icon>
    </button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarViewModeComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbCalendarViewModeComponent.propDecorators = {
    date: [{ type: Input }],
    viewMode: [{ type: Input }],
    changeMode: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarPageableNavigationComponent {
    constructor(directionService) {
        this.directionService = directionService;
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
    }
    get isLtr() {
        return this.directionService.isLtr();
    }
}
NbCalendarPageableNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-pageable-navigation',
                template: `
    <button nbButton (click)="prev.emit()" ghost status="basic" class="prev-month">
      <nb-icon [icon]="isLtr ? 'chevron-left-outline' : 'chevron-right-outline'" pack="nebular-essentials"></nb-icon>
    </button>
    <button nbButton (click)="next.emit()" ghost status="basic" class="next-month">
      <nb-icon [icon]="isLtr ? 'chevron-right-outline' : 'chevron-left-outline'" pack="nebular-essentials"></nb-icon>
    </button>
  `,
                styles: [":host{display:flex;align-items:center;justify-content:flex-start}\n"]
            },] }
];
NbCalendarPageableNavigationComponent.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
NbCalendarPageableNavigationComponent.propDecorators = {
    next: [{ type: Output }],
    prev: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarPickerComponent {
    constructor() {
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-picker',
                template: `
    <nb-calendar-picker-row
      *ngFor="let row of data"
      [row]="row"
      [visibleDate]="visibleDate"
      [selectedValue]="selectedValue"
      [component]="cellComponent"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [size]="size"
      (select)="select.emit($event)">
    </nb-calendar-picker-row>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarPickerComponent.propDecorators = {
    data: [{ type: Input }],
    visibleDate: [{ type: Input }],
    selectedValue: [{ type: Input }],
    cellComponent: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarPickerRowComponent {
    constructor(cfr) {
        this.cfr = cfr;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter();
    }
    ngOnChanges() {
        const factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach((date) => {
            const component = this.containerRef.createComponent(factory);
            this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    }
    patchWithContext(component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.size = this.size;
        component.select.subscribe(this.select.emit.bind(this.select));
    }
}
NbCalendarPickerRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-picker-row',
                template: '<ng-template></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    :host {
      display: flex;
      justify-content: space-between;
    }
  `]
            },] }
];
NbCalendarPickerRowComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
NbCalendarPickerRowComponent.propDecorators = {
    row: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    component: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    containerRef: [{ type: ViewChild, args: [TemplateRef, { read: ViewContainerRef, static: true },] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarYearCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
    }
    get selected() {
        return this.dateService.isSameYearSafe(this.date, this.selectedValue);
    }
    get today() {
        return this.dateService.isSameYearSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
}
NbCalendarYearCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-year-cell',
                template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarYearCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarYearCellComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    selectedValue: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    yearCellClass: [{ type: HostBinding, args: ['class.year-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarYearPickerComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.cellComponent = NbCalendarYearCellComponent;
        this.size = NbCalendarSize.MEDIUM;
        this.yearChange = new EventEmitter();
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges() {
        this.years = this.yearModelService.getViewYears(this.year);
    }
    onSelect(year) {
        this.yearChange.emit(year);
    }
}
NbCalendarYearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-year-picker',
                template: `
    <nb-calendar-picker
      [data]="years"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="year"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarYearPickerComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbCalendarYearPickerComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    _cellComponent: [{ type: Input, args: ['cellComponent',] }],
    size: [{ type: Input }],
    year: [{ type: Input }],
    yearChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarWeekNumberComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.weeks) {
            this.weekNumbers = this.getWeeks();
        }
    }
    getWeeks() {
        return this.weeks.map((week) => {
            // Find last defined day as week could contain null days in case
            // boundingMonth set to false
            const lastDay = [...week].reverse().find((day) => !!day);
            // Use last day of the week to determine week number.
            // This way weeks which span between sibling years is marked first
            return this.dateService.getWeekNumber(lastDay);
        });
    }
}
NbCalendarWeekNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-week-numbers',
                template: `
    <div class="sign-container">
      <div class="sign">{{ weekNumberSymbol }}</div>
    </div>
    <div class="week-number" *ngFor="let weekNumber of weekNumbers">{{ weekNumber }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbCalendarWeekNumberComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarWeekNumberComponent.propDecorators = {
    weeks: [{ type: Input }],
    size: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbNativeDateService` is basic implementation of `NbDateService` using
 * native js date objects and angular localization services.
 * */
class NbNativeDateService extends NbDateService {
    constructor(locale) {
        super();
        this.setLocale(locale);
    }
    setLocale(locale) {
        super.setLocale(locale);
        this.datePipe = new DatePipe(locale);
    }
    setHours(date, hour) {
        const result = this.clone(date);
        result.setHours(hour);
        return result;
    }
    setMinutes(date, minute) {
        const result = this.clone(date);
        result.setMinutes(minute);
        return result;
    }
    setSeconds(date, second) {
        const result = this.clone(date);
        result.setSeconds(second);
        return result;
    }
    setMilliseconds(date, second) {
        const result = this.clone(date);
        result.setMilliseconds(second);
        return result;
    }
    isValidDateString(date, format) {
        return !isNaN(this.parse(date, format).getTime());
    }
    isValidTimeString(date, format) {
        return this.isValidDateString(date, format);
    }
    today() {
        return new Date();
    }
    getLocaleTimeFormat() {
        return getLocaleTimeFormat(this.locale, FormatWidth.Short);
    }
    getDate(date) {
        return date.getDate();
    }
    getMonth(date) {
        return date.getMonth();
    }
    getYear(date) {
        return date.getFullYear();
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * returns first day of the week, it can be 1 if week starts from monday
     * and 0 if from sunday and so on.
     * */
    getFirstDayOfWeek() {
        return getLocaleFirstDayOfWeek(this.locale);
    }
    getMonthName(date, style$$1 = TranslationWidth.Abbreviated) {
        const index = date.getMonth();
        return this.getMonthNameByIndex(index, style$$1);
    }
    getMonthNameByIndex(index, style$$1 = TranslationWidth.Abbreviated) {
        return getLocaleMonthNames(this.locale, FormStyle.Format, style$$1)[index];
    }
    getDayOfWeekNames() {
        return [...getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Short)];
    }
    format(date, format) {
        return this.datePipe.transform(date, format);
    }
    /**
     * We haven't got capability to parse date using formatting without third party libraries.
     * */
    parse(date, format) {
        return new Date(Date.parse(date));
    }
    addDay(date, num) {
        return this.createDate(date.getFullYear(), date.getMonth(), date.getDate() + num);
    }
    addMonth(date, num) {
        const month = this.createDate(date.getFullYear(), date.getMonth() + num, 1);
        // In case of date has more days than calculated month js Date will change that month to the next one
        // because of the date overflow.
        month.setDate(Math.min(date.getDate(), this.getMonthEnd(month).getDate()));
        return month;
    }
    addMinutes(date, minute) {
        const result = new Date(date);
        result.setMinutes(date.getMinutes() + minute);
        return result;
    }
    addHours(date, hour) {
        const result = new Date(date);
        result.setHours(date.getHours() + hour);
        return result;
    }
    getHours(date) {
        return date.getHours();
    }
    getMinutes(date) {
        return date.getMinutes();
    }
    getSeconds(date) {
        return date.getSeconds();
    }
    getMilliseconds(date) {
        return date.getMilliseconds();
    }
    addYear(date, num) {
        return this.createDate(date.getFullYear() + num, date.getMonth(), date.getDate());
    }
    clone(date) {
        return new Date(date.getTime());
    }
    compareDates(date1, date2) {
        return date1.getTime() - date2.getTime();
    }
    createDate(year, month, date) {
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(result.getFullYear() - 1900);
        }
        return result;
    }
    getMonthEnd(date) {
        return this.createDate(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getMonthStart(date) {
        return this.createDate(date.getFullYear(), date.getMonth(), 1);
    }
    getNumberOfDaysInMonth(date) {
        return this.getMonthEnd(date).getDate();
    }
    getYearEnd(date) {
        return this.createDate(date.getFullYear(), 11, 31);
    }
    getYearStart(date) {
        return this.createDate(date.getFullYear(), 0, 1);
    }
    valueOf(date) {
        return date.valueOf();
    }
    isSameDay(date1, date2) {
        return this.isSameMonth(date1, date2) &&
            date1.getDate() === date2.getDate();
    }
    isSameMonth(date1, date2) {
        return this.isSameYear(date1, date2) &&
            date1.getMonth() === date2.getMonth();
    }
    isSameYear(date1, date2) {
        return date1.getFullYear() === date2.getFullYear();
    }
    getId() {
        return 'native';
    }
    getWeekNumber(date) {
        return parseInt(this.datePipe.transform(date, 'w'), 10);
    }
    getDateFormat() {
        return 'yyyy-MM-dd';
    }
    getTwelveHoursFormat() {
        return 'hh:mm a';
    }
}
NbNativeDateService.decorators = [
    { type: Injectable }
];
NbNativeDateService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];

class NbCalendarTimeModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.MINUTES_AND_SECONDS = 60;
    }
    getHoursRange(step = this.MINUTES_AND_SECONDS) {
        let date = this.getResetTime();
        const endDate = this.dateService.addDay(date, 1);
        const result = [];
        while (this.dateService.compareDates(date, endDate) < 0) {
            result.push(date);
            date = this.dateService.addMinutes(date, step);
        }
        return result;
    }
    getResetTime() {
        let today = this.dateService.today();
        today = this.dateService.setHours(today, 0);
        today = this.dateService.setMinutes(today, 0);
        today = this.dateService.setSeconds(today, 0);
        today = this.dateService.setMilliseconds(today, 0);
        return today;
    }
    paddToTwoSymbols(n) {
        if (n < 10) {
            return '0' + n;
        }
        return n.toString();
    }
    buildDateFormat(twelveHoursFormat, withSeconds = false) {
        if (twelveHoursFormat) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwelveHoursFormat()}`;
        }
        if (withSeconds) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormatWithSeconds()}`;
        }
        return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormat()}`;
    }
}
NbCalendarTimeModelService.decorators = [
    { type: Injectable }
];
NbCalendarTimeModelService.ctorParameters = () => [
    { type: NbDateService }
];

class NbCalendarActionsComponent {
    constructor() {
        this._applyButtonText = 'ok';
        this._currentTimeButtonText = 'now';
        this.setCurrentTime = new EventEmitter();
        this.saveValue = new EventEmitter();
    }
    set applyButtonText(value) {
        if (value) {
            this._applyButtonText = value;
        }
    }
    ;
    get applyText() {
        return this._applyButtonText;
    }
    ;
    set currentTimeButtonText(value) {
        if (value) {
            this._currentTimeButtonText = value;
        }
    }
    get currentTimeText() {
        return this._currentTimeButtonText;
    }
    ;
}
NbCalendarActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-actions',
                template: `
    <button
      nbButton
      ghost
      status="primary"
      size="small"
      (click)="setCurrentTime.emit()">
      {{ currentTimeText }}</button>
    <button
      nbButton
      status="primary"
      size="small"
      (click)="saveValue.emit()">
      {{ applyText }}</button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;justify-content:space-between}\n"]
            },] }
];
NbCalendarActionsComponent.propDecorators = {
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    setCurrentTime: [{ type: Output }],
    saveValue: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const SERVICES = [
    { provide: NbDateService, useClass: NbNativeDateService },
    DatePipe,
    NbCalendarMonthModelService,
    NbCalendarYearModelService,
    NbCalendarTimeModelService,
];
const COMPONENTS = [
    NbCalendarViewModeComponent,
    NbCalendarPageableNavigationComponent,
    NbCalendarDaysNamesComponent,
    NbCalendarYearPickerComponent,
    NbCalendarMonthPickerComponent,
    NbCalendarDayPickerComponent,
    NbCalendarDayCellComponent,
    NbCalendarActionsComponent,
    NbCalendarMonthCellComponent,
    NbCalendarYearCellComponent,
    NbCalendarPickerRowComponent,
    NbCalendarPickerComponent,
    NbCalendarWeekNumberComponent,
];
/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarViewModeComponent`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
class NbCalendarKitModule {
}
NbCalendarKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule, NbButtonModule, NbIconModule],
                exports: [...COMPONENTS],
                declarations: [...COMPONENTS],
                providers: [...SERVICES],
                entryComponents: [
                    NbCalendarDayCellComponent,
                    NbCalendarMonthCellComponent,
                    NbCalendarYearCellComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
class NbBaseCalendarComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines active view for calendar.
         * */
        this.activeViewMode = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines whether we should show calendar navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Emits date when selected.
         * */
        this.dateChange = new EventEmitter();
        this.ViewMode = NbCalendarViewMode;
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    ngOnInit() {
        if (!this.visibleDate) {
            this.visibleDate = this.dateService.today();
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    setViewMode(viewMode) {
        this.activeViewMode = viewMode;
    }
    setVisibleDate(visibleDate) {
        this.visibleDate = visibleDate;
    }
    prevMonth() {
        this.changeVisibleMonth(-1);
    }
    nextMonth() {
        this.changeVisibleMonth(1);
    }
    prevYear() {
        this.changeVisibleYear(-1);
    }
    nextYear() {
        this.changeVisibleYear(1);
    }
    prevYears() {
        this.changeVisibleYears(-1);
    }
    nextYears() {
        this.changeVisibleYears(1);
    }
    navigatePrev() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.prevMonth();
            case NbCalendarViewMode.MONTH:
                return this.prevYear();
            case NbCalendarViewMode.YEAR:
                return this.prevYears();
        }
    }
    navigateNext() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.nextMonth();
            case NbCalendarViewMode.MONTH:
                return this.nextYear();
            case NbCalendarViewMode.YEAR:
                return this.nextYears();
        }
    }
    onChangeViewMode() {
        if (this.activeViewMode === NbCalendarViewMode.DATE) {
            return this.setViewMode(NbCalendarViewMode.YEAR);
        }
        this.setViewMode(NbCalendarViewMode.DATE);
    }
    changeVisibleMonth(direction) {
        this.visibleDate = this.dateService.addMonth(this.visibleDate, direction);
    }
    changeVisibleYear(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction);
    }
    changeVisibleYears(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction * this.yearModelService.getYearsInView());
    }
}
NbBaseCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-base-calendar',
                template: "<nb-card>\n  <nb-card-header *ngIf=\"showNavigation\" class=\"calendar-navigation\">\n    <nb-calendar-view-mode [date]=\"visibleDate\"\n                           [viewMode]=\"activeViewMode\"\n                           (changeMode)=\"onChangeViewMode()\">\n    </nb-calendar-view-mode>\n\n    <nb-calendar-pageable-navigation (prev)=\"navigatePrev()\" (next)=\"navigateNext()\">\n    </nb-calendar-pageable-navigation>\n  </nb-card-header>\n\n  <nb-card-body [ngSwitch]=\"activeViewMode\">\n\n    <nb-calendar-day-picker *ngSwitchCase=\"ViewMode.DATE\"\n                            [boundingMonths]=\"boundingMonth\"\n                            [cellComponent]=\"dayCellComponent\"\n                            [min]=\"min\"\n                            [max]=\"max\"\n                            [filter]=\"filter\"\n                            [visibleDate]=\"visibleDate\"\n                            [size]=\"size\"\n                            [date]=\"date\"\n                            [showWeekNumber]=\"showWeekNumber\"\n                            (dateChange)=\"dateChange.emit($any($event))\"\n                            [weekNumberSymbol]=\"weekNumberSymbol\">\n    </nb-calendar-day-picker>\n\n    <nb-calendar-year-picker *ngSwitchCase=\"ViewMode.YEAR\"\n                             [cellComponent]=\"yearCellComponent\"\n                             [date]=\"$any(date)\"\n                             [min]=\"min\"\n                             [max]=\"max\"\n                             [filter]=\"filter\"\n                             [size]=\"size\"\n                             [year]=\"visibleDate\"\n                             (yearChange)=\"setVisibleDate($event); setViewMode(ViewMode.MONTH)\">\n    </nb-calendar-year-picker>\n\n    <nb-calendar-month-picker *ngSwitchCase=\"ViewMode.MONTH\"\n                              [cellComponent]=\"monthCellComponent\"\n                              [min]=\"min\"\n                              [max]=\"max\"\n                              [filter]=\"filter\"\n                              [size]=\"size\"\n                              [month]=\"visibleDate\"\n                              [date]=\"$any(date)\"\n                              (monthChange)=\"setVisibleDate($event); setViewMode(ViewMode.DATE)\">\n    </nb-calendar-month-picker>\n\n  </nb-card-body>\n\n</nb-card>\n"
            },] }
];
NbBaseCalendarComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: NbCalendarYearModelService }
];
NbBaseCalendarComponent.propDecorators = {
    boundingMonth: [{ type: Input }],
    activeViewMode: [{ type: Input, args: ['startView',] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    dayCellComponent: [{ type: Input }],
    monthCellComponent: [{ type: Input }],
    yearCellComponent: [{ type: Input }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    showNavigation: [{ type: Input }, { type: HostBinding, args: ['class.has-navigation',] }],
    date: [{ type: Input }],
    showWeekNumber: [{ type: Input }, { type: HostBinding, args: ['class.has-week-number',] }],
    weekNumberSymbol: [{ type: Input }],
    dateChange: [{ type: Output }],
    large: [{ type: HostBinding, args: ['class.size-large',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbBaseCalendarModule {
}
NbBaseCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbCalendarKitModule, NbSharedModule, NbCardModule],
                exports: [NbBaseCalendarComponent],
                declarations: [NbBaseCalendarComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarModule {
}
NbCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbBaseCalendarModule],
                exports: [NbCalendarComponent],
                declarations: [NbCalendarComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbBaseCalendarRangeCell {
    get hasRange() {
        return !!(this.selectedValue && this.selectedValue.start && this.selectedValue.end);
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarRangeDayCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.rangeCellClass = true;
        this.dayCellClass = true;
    }
    get inRange() {
        if (this.date && this.hasRange) {
            return this.isInRange(this.date, this.selectedValue);
        }
        return false;
    }
    get start() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.start);
    }
    get end() {
        return this.date && this.hasRange && this.dateService.isSameDay(this.date, this.selectedValue.end);
    }
    get today() {
        return this.date && this.dateService.isSameDay(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameDaySafe(this.date, this.selectedValue.start);
        }
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
    isInRange(date, { start, end }) {
        const isGreaterThanStart = this.dateService.compareDates(this.date, start) >= 0;
        const isLessThanEnd = this.dateService.compareDates(this.date, end) <= 0;
        return isGreaterThanStart && isLessThanEnd;
    }
}
NbCalendarRangeDayCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-day-cell',
                template: `
    <div class="cell-content">{{ day }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeDayCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeDayCellComponent.propDecorators = {
    date: [{ type: Input }],
    selectedValue: [{ type: Input }],
    visibleDate: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    start: [{ type: HostBinding, args: ['class.start',] }],
    end: [{ type: HostBinding, args: ['class.end',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    dayCellClass: [{ type: HostBinding, args: ['class.day-cell',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    boundingMonth: [{ type: HostBinding, args: ['class.bounding-month',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    empty: [{ type: HostBinding, args: ['class.empty',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarRangeYearCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
        this.rangeCellClass = true;
    }
    get inRange() {
        return this.hasRange && this.isInRange(this.date, this.selectedValue);
    }
    get rangeStart() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.start);
    }
    get rangeEnd() {
        return this.hasRange && this.dateService.isSameYear(this.date, this.selectedValue.end);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameYearSafe(this.date, this.selectedValue.start);
        }
    }
    get today() {
        return this.dateService.isSameYear(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
    isInRange(date, { start, end }) {
        if (start && end) {
            const cellYear = this.dateService.getYear(date);
            const startYear = this.dateService.getYear(start);
            const endYear = this.dateService.getYear(end);
            return cellYear >= startYear && cellYear <= endYear;
        }
        return this.dateService.isSameYear(date, start);
    }
}
NbCalendarRangeYearCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-year-cell',
                template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeYearCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeYearCellComponent.propDecorators = {
    date: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    selectedValue: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    rangeStart: [{ type: HostBinding, args: ['class.start',] }],
    rangeEnd: [{ type: HostBinding, args: ['class.end',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    yearCellClass: [{ type: HostBinding, args: ['class.year-cell',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarRangeMonthCellComponent extends NbBaseCalendarRangeCell {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.monthCellClass = true;
        this.rangeCellClass = true;
    }
    get month() {
        return this.dateService.getMonthName(this.date);
    }
    get selected() {
        if (this.inRange) {
            return true;
        }
        if (this.selectedValue) {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue.start);
        }
    }
    get inRange() {
        if (this.hasRange) {
            return this.isInRage(this.date, this.selectedValue);
        }
    }
    get rangeStart() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.start);
        }
    }
    get rangeEnd() {
        if (this.hasRange) {
            return this.dateService.isSameMonth(this.date, this.selectedValue.end);
        }
    }
    get today() {
        return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    }
    monthStart() {
        return this.dateService.getMonthStart(this.date);
    }
    monthEnd() {
        return this.dateService.getMonthEnd(this.date);
    }
    isInRage(date, range) {
        if (range.start && range.end) {
            const cellDate = this.dateService.getMonthStart(date);
            const start = this.dateService.getMonthStart(range.start);
            const end = this.dateService.getMonthStart(range.end);
            const isGreaterThanStart = this.dateService.compareDates(cellDate, start) >= 0;
            const isLessThanEnd = this.dateService.compareDates(cellDate, end) <= 0;
            return isGreaterThanStart && isLessThanEnd;
        }
        return this.dateService.isSameMonth(date, range.start);
    }
}
NbCalendarRangeMonthCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range-month-cell',
                template: `
    <div class="cell-content">
      {{ month }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbCalendarRangeMonthCellComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeMonthCellComponent.propDecorators = {
    date: [{ type: Input }],
    visibleDate: [{ type: Input }],
    selectedValue: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }],
    select: [{ type: Output }],
    monthCellClass: [{ type: HostBinding, args: ['class.month-cell',] }],
    rangeCellClass: [{ type: HostBinding, args: ['class.range-cell',] }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    inRange: [{ type: HostBinding, args: ['class.in-range',] }],
    rangeStart: [{ type: HostBinding, args: ['class.start',] }],
    rangeEnd: [{ type: HostBinding, args: ['class.end',] }],
    today: [{ type: HostBinding, args: ['class.today',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    isLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width:
 * calendar-background-color:
 * calendar-border-color:
 * calendar-border-style:
 * calendar-border-width:
 * calendar-border-radius:
 * calendar-text-color:
 * calendar-text-font-family:
 * calendar-text-font-size:
 * calendar-text-font-weight:
 * calendar-text-line-height:
 * calendar-picker-padding-top:
 * calendar-picker-padding-bottom:
 * calendar-picker-padding-start:
 * calendar-picker-padding-end:
 * calendar-navigation-text-color:
 * calendar-navigation-text-font-family:
 * calendar-navigation-title-text-font-size:
 * calendar-navigation-title-text-font-weight:
 * calendar-navigation-title-text-line-height:
 * calendar-navigation-padding:
 * calendar-cell-inactive-text-color:
 * calendar-cell-disabled-text-color:
 * calendar-cell-hover-background-color:
 * calendar-cell-hover-border-color:
 * calendar-cell-hover-text-color:
 * calendar-cell-hover-text-font-size:
 * calendar-cell-hover-text-font-weight:
 * calendar-cell-hover-text-line-height:
 * calendar-cell-active-background-color:
 * calendar-cell-active-border-color:
 * calendar-cell-active-text-color:
 * calendar-cell-active-text-font-size:
 * calendar-cell-active-text-font-weight:
 * calendar-cell-active-text-line-height:
 * calendar-cell-today-background-color:
 * calendar-cell-today-border-color:
 * calendar-cell-today-text-color:
 * calendar-cell-today-text-font-size:
 * calendar-cell-today-text-font-weight:
 * calendar-cell-today-text-line-height:
 * calendar-cell-today-hover-background-color:
 * calendar-cell-today-hover-border-color:
 * calendar-cell-today-active-background-color:
 * calendar-cell-today-active-border-color:
 * calendar-cell-today-disabled-border-color:
 * calendar-cell-today-selected-background-color:
 * calendar-cell-today-selected-border-color:
 * calendar-cell-today-selected-text-color:
 * calendar-cell-today-selected-hover-background-color:
 * calendar-cell-today-selected-hover-border-color:
 * calendar-cell-today-selected-active-background-color:
 * calendar-cell-today-selected-active-border-color:
 * calendar-cell-today-in-range-background-color:
 * calendar-cell-today-in-range-border-color:
 * calendar-cell-today-in-range-text-color:
 * calendar-cell-today-in-range-hover-background-color:
 * calendar-cell-today-in-range-hover-border-color:
 * calendar-cell-today-in-range-active-background-color:
 * calendar-cell-today-in-range-active-border-color:
 * calendar-cell-selected-background-color:
 * calendar-cell-selected-border-color:
 * calendar-cell-selected-text-color:
 * calendar-cell-selected-text-font-size:
 * calendar-cell-selected-text-font-weight:
 * calendar-cell-selected-text-line-height:
 * calendar-cell-selected-hover-background-color:
 * calendar-cell-selected-hover-border-color:
 * calendar-cell-selected-active-background-color:
 * calendar-cell-selected-active-border-color:
 * calendar-day-cell-width:
 * calendar-day-cell-height:
 * calendar-month-cell-width:
 * calendar-month-cell-height:
 * calendar-year-cell-width:
 * calendar-year-cell-height:
 * calendar-weekday-background:
 * calendar-weekday-divider-color:
 * calendar-weekday-divider-width:
 * calendar-weekday-text-color:
 * calendar-weekday-text-font-size:
 * calendar-weekday-text-font-weight:
 * calendar-weekday-text-line-height:
 * calendar-weekday-holiday-text-color:
 * calendar-weekday-height:
 * calendar-weekday-width:
 * calendar-weeknumber-background:
 * calendar-weeknumber-divider-color:
 * calendar-weeknumber-divider-width:
 * calendar-weeknumber-text-color:
 * calendar-weeknumber-text-font-size:
 * calendar-weeknumber-text-font-weight:
 * calendar-weeknumber-text-line-height:
 * calendar-weeknumber-height:
 * calendar-weeknumber-width:
 * calendar-large-width:
 * calendar-day-cell-large-width:
 * calendar-day-cell-large-height:
 * calendar-weekday-large-height:
 * calendar-weekday-large-width:
 * calendar-weeknumber-large-height:
 * calendar-weeknumber-large-width:
 * calendar-month-cell-large-width:
 * calendar-month-cell-large-height:
 * calendar-year-cell-large-width:
 * calendar-year-cell-large-height:
 * */
class NbCalendarRangeComponent {
    constructor(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for the calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        this.dayCellComponent = NbCalendarRangeDayCellComponent;
        this.monthCellComponent = NbCalendarRangeMonthCellComponent;
        this.yearCellComponent = NbCalendarRangeYearCellComponent;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        this.rangeChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.dayCellComponent = cellComponent;
        }
    }
    /**
     * Custom month cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _monthCellComponent(cellComponent) {
        if (cellComponent) {
            this.monthCellComponent = cellComponent;
        }
    }
    /**
     * Custom year cell component. Have to implement `NbCalendarCell` interface.
     * */
    set _yearCellComponent(cellComponent) {
        if (cellComponent) {
            this.yearCellComponent = cellComponent;
        }
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    onChange(date) {
        this.initDateIfNull();
        this.handleSelected(date);
    }
    initDateIfNull() {
        if (!this.range) {
            this.range = { start: null, end: null };
        }
    }
    handleSelected(date) {
        if (this.selectionStarted()) {
            this.selectEnd(date);
        }
        else {
            this.selectStart(date);
        }
    }
    selectionStarted() {
        const { start, end } = this.range;
        return start && !end;
    }
    selectStart(start) {
        this.selectRange({ start });
    }
    selectEnd(date) {
        const { start } = this.range;
        if (this.dateService.compareDates(date, start) > 0) {
            this.selectRange({ start, end: date });
        }
        else {
            this.selectRange({ start: date, end: start });
        }
    }
    selectRange(range) {
        this.range = range;
        this.rangeChange.emit(range);
    }
}
NbCalendarRangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-range',
                template: `
    <nb-base-calendar
      [date]="range"
      (dateChange)="onChange($any($event))"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [startView]="startView"
      [boundingMonth]="boundingMonth"
      [dayCellComponent]="dayCellComponent"
      [monthCellComponent]="monthCellComponent"
      [yearCellComponent]="yearCellComponent"
      [visibleDate]="visibleDate"
      [showNavigation]="showNavigation"
      [size]="size"
      [showWeekNumber]="showWeekNumber"
      [weekNumberSymbol]="weekNumberSymbol"
    ></nb-base-calendar>
  `
            },] }
];
NbCalendarRangeComponent.ctorParameters = () => [
    { type: NbDateService }
];
NbCalendarRangeComponent.propDecorators = {
    boundingMonth: [{ type: Input }],
    startView: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    _cellComponent: [{ type: Input, args: ['dayCellComponent',] }],
    _monthCellComponent: [{ type: Input, args: ['monthCellComponent',] }],
    monthCellComponent: [{ type: Input }],
    _yearCellComponent: [{ type: Input, args: ['yearCellComponent',] }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    showNavigation: [{ type: Input }],
    range: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    rangeChange: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCalendarRangeModule {
}
NbCalendarRangeModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbBaseCalendarModule],
                exports: [NbCalendarRangeComponent],
                declarations: [
                    NbCalendarRangeComponent,
                    NbCalendarRangeDayCellComponent,
                    NbCalendarRangeYearCellComponent,
                    NbCalendarRangeMonthCellComponent,
                ],
                entryComponents: [
                    NbCalendarRangeDayCellComponent,
                    NbCalendarRangeMonthCellComponent,
                    NbCalendarRangeYearCellComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_TIME_PICKER_CONFIG = new InjectionToken('NB_TIME_PICKER_CONFIG');
const NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG = {
    hoursText: 'Hr',
    minutesText: 'Min',
    secondsText: 'Sec',
    ampmText: 'Am/Pm',
};

/**
 * The TimePicker components itself.
 * Provides a proxy to `TimePicker` options as well as custom picker options.
 */
class NbTimePickerComponent {
    constructor(config, platformService, locale, cd, calendarTimeModelService, dateService) {
        this.config = config;
        this.platformService = platformService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.blur$ = new Subject();
        this.dayPeriodColumnOptions = ["AM" /* AM */, "PM" /* PM */];
        this.isAM = true;
        /**
         * In timepicker value should be always true
         * In calendar-with-time.component  should set to false
         * @docs-private
         */
        this.showFooter = true;
        /**
         * Emits date when selected.
         * */
        this.onSelectTime = new EventEmitter();
        this.initFromConfig(this.config);
    }
    /**
     * Emits when timepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Defines time format string.
     * */
    get timeFormat() {
        return this._timeFormat;
    }
    set timeFormat(timeFormat) {
        this._timeFormat = timeFormat;
    }
    /**
     * Defines 12 hours format .
     * */
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    ;
    /**
     * Show seconds in timepicker.
     * Ignored when singleColumn is true
     * */
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    ;
    /**
     * Show timepicker values in one column with 60 minutes step by default.
     * */
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    /**
     * Defines minutes offset for options, when timepicker is in single column mode.
     * By default it’s 60 minutes: '12:00, 13:00: 14:00, 15:00...'
     * */
    set step(step) {
        this._step = step;
    }
    get step() {
        return this._step;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this._date = date;
        this.isAM = this.dateService.getDayPeriod(this.date) === "AM" /* AM */;
        this.buildColumnOptions();
        this.cd.markForCheck();
    }
    get date() {
        return this._date;
    }
    ngOnInit() {
        this.timeFormat = this.setupTimeFormat();
    }
    ngOnChanges({ step, twelveHoursFormat, withSeconds, singleColumn, }) {
        this.timeFormat = this.setupTimeFormat();
        const isConfigChanged = step || twelveHoursFormat || withSeconds || singleColumn;
        if (isConfigChanged || !this.fullTimeOptions) {
            this.buildColumnOptions();
        }
    }
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    attach(hostRef) {
        this.hostRef = hostRef;
    }
    setCurrentTime() {
        this.date = this.dateService.today();
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    setHour(value) {
        this.updateValue(this.dateService.setHours(this.date, value));
    }
    setMinute(value) {
        this.updateValue(this.dateService.setMinutes(this.date, value));
    }
    setSecond(value) {
        this.updateValue(this.dateService.setSeconds(this.date, value));
    }
    selectFullTime(value) {
        this.updateValue(value);
    }
    changeDayPeriod(dayPeriodToSet) {
        if (this.dateService.getDayPeriod(this.date) === dayPeriodToSet) {
            return;
        }
        // Subtract hours when switching to AM (before midday, 0-11 in 24-hour) from PM (after midday, 12-24 in 24-hour),
        // otherwise add hours because switching to PM from AM.
        const direction = dayPeriodToSet === "AM" /* AM */ ? -1 : 1;
        const increment = direction * this.dateService.HOURS_IN_DAY_PERIOD;
        this.updateValue(this.dateService.addHours(this.date, increment));
    }
    updateValue(date) {
        this.onSelectTime.emit({ time: date });
    }
    saveValue() {
        this.onSelectTime.emit({
            time: this.date,
            save: true,
        });
    }
    trackByTimeValues(index, item) {
        return item.value;
    }
    trackBySingleColumnValue(index, item) {
        return this.dateService.valueOf(item);
    }
    trackByDayPeriod(index, item) {
        return item;
    }
    showSeconds() {
        return this.withSeconds && !this.singleColumn;
    }
    isSelectedHour(val) {
        if (this.date) {
            return this.dateService.getHours(this.date) === val;
        }
        return false;
    }
    isSelectedMinute(val) {
        if (this.date) {
            return this.dateService.getMinutes(this.date) === val;
        }
        return false;
    }
    isSelectedSecond(val) {
        if (this.date) {
            return this.dateService.getSeconds(this.date) === val;
        }
        return false;
    }
    isSelectedDayPeriod(dayPeriod) {
        if (this.date) {
            return dayPeriod === this.dateService.getDayPeriod(this.date);
        }
        return false;
    }
    getFullTimeString(item) {
        return this.dateService.format(item, this.timeFormat).toUpperCase();
    }
    isSelectedFullTimeValue(value) {
        if (this.date) {
            return this.dateService.isSameHourAndMinute(value, this.date);
        }
        return false;
    }
    buildColumnOptions() {
        this.timeFormat = this.setupTimeFormat();
        this.fullTimeOptions = this.singleColumn
            ? this.calendarTimeModelService.getHoursRange(this.step)
            : [];
        this.hoursColumnOptions = this.generateHours();
        this.minutesColumnOptions = this.generateMinutesOrSeconds();
        this.secondsColumnOptions = this.withSeconds ? this.generateMinutesOrSeconds() : [];
    }
    /**
     * @docs-private
     */
    isFirefox() {
        return this.platformService.FIREFOX;
    }
    generateHours() {
        if (!this.twelveHoursFormat) {
            return range(24, (v) => {
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
            });
        }
        if (this.isAM) {
            return (range(12, (v) => {
                const text = v === 0 ? 12 : v;
                return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
            }));
        }
        return (rangeFromTo(12, 24, (v) => {
            const text = v === 12 ? 12 : (v - 12);
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(text) };
        }));
    }
    generateMinutesOrSeconds() {
        return range(60, (v) => {
            return { value: v, text: this.calendarTimeModelService.paddToTwoSymbols(v) };
        });
    }
    setupTimeFormat() {
        if (!this.timeFormat) {
            return this.config.format || this.buildTimeFormat();
        }
        return this.timeFormat;
    }
    /**
     * @docs-private
     */
    buildTimeFormat() {
        if (this.twelveHoursFormat) {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwelveHoursFormatWithSeconds()
                : this.dateService.getTwelveHoursFormat()}`;
        }
        else {
            return `${this.withSeconds && !this.singleColumn ? this.dateService.getTwentyFourHoursFormatWithSeconds()
                : this.dateService.getTwentyFourHoursFormat()}`;
        }
    }
    initFromConfig(config) {
        var _a;
        if (config) {
            this.twelveHoursFormat = config.twelveHoursFormat;
        }
        else {
            this.twelveHoursFormat = this.dateService.getLocaleTimeFormat().includes('h');
        }
        const localeConfig = Object.assign(Object.assign({}, NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG), (_a = config === null || config === void 0 ? void 0 : config.localization) !== null && _a !== void 0 ? _a : {});
        this.hoursText = localeConfig.hoursText;
        this.minutesText = localeConfig.minutesText;
        this.secondsText = localeConfig.secondsText;
        this.ampmText = localeConfig.ampmText;
    }
}
NbTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-timepicker',
                template: "<nb-card *nbPortal\n         [class.supports-scrollbar-theming]=\"!isFirefox()\"\n         class=\"nb-timepicker-container\">\n  <nb-card-header class=\"column-header\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeHeadersBlock\">\n      <div class=\"header-cell\">Time</div>\n    </ng-container>\n    <ng-template #fullTimeHeadersBlock>\n      <div class=\"header-cell\">{{ hoursText }}</div>\n      <div class=\"header-cell\">{{ minutesText }}</div>\n      <div *ngIf=\"withSeconds\" class=\"header-cell\">{{ secondsText }}</div>\n      <div *ngIf=\"twelveHoursFormat\" class=\"header-cell\">{{ ampmText }}</div>\n    </ng-template>\n  </nb-card-header>\n\n  <div class=\"picker-body\">\n    <ng-container *ngIf=\"singleColumn; else fullTimeColumnBlock\">\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedFullTimeValue(item)\"\n          *ngFor=\"let item of fullTimeOptions; trackBy: trackBySingleColumnValue.bind(this)\">\n          <nb-timepicker-cell\n            [value]=\"getFullTimeString(item)\"\n            [selected]=\"isSelectedFullTimeValue(item)\"\n            (select)=\"selectFullTime(item)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-container>\n\n    <ng-template #fullTimeColumnBlock>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedHour(item.value)\"\n          *ngFor=\"let item of hoursColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedHour(item.value)\"\n            (select)=\"setHour(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedMinute(item.value)\"\n          *ngFor=\"let item of minutesColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedMinute(item.value)\"\n            (select)=\"setMinute(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"showSeconds()\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item\"\n          [class.selected]=\"isSelectedSecond(item.value)\"\n          *ngFor=\"let item of secondsColumnOptions; trackBy: trackByTimeValues\">\n          <nb-timepicker-cell\n            [value]=\"item.text\"\n            [selected]=\"isSelectedSecond(item.value)\"\n            (select)=\"setSecond(item.value)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n      <nb-list *ngIf=\"twelveHoursFormat\" class=\"values-list\">\n        <nb-list-item\n          class=\"list-item am-pm-item\"\n          [class.selected]=\"isSelectedDayPeriod(dayPeriod)\"\n          *ngFor=\"let dayPeriod of dayPeriodColumnOptions; trackBy: trackByDayPeriod\">\n          <nb-timepicker-cell\n            [value]=\"dayPeriod\"\n            [selected]=\"isSelectedDayPeriod(dayPeriod)\"\n            (select)=\"changeDayPeriod(dayPeriod)\">\n          </nb-timepicker-cell>\n        </nb-list-item>\n      </nb-list>\n    </ng-template>\n  </div>\n\n  <nb-card-footer *ngIf=\"showFooter\" class=\"actions-footer\">\n    <nb-calendar-actions\n      [applyButtonText]=\"applyButtonText\"\n      [currentTimeButtonText]=\"currentTimeButtonText\"\n      (setCurrentTime)=\"setCurrentTime()\"\n      (saveValue)=\"saveValue()\"\n    ></nb-calendar-actions>\n  </nb-card-footer>\n</nb-card>\n",
                exportAs: 'nbTimepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".nb-timepicker-container{overflow:hidden;margin-bottom:0}.values-list{width:100%;overflow:hidden;scroll-snap-type:y proximity}.values-list:hover{overflow-y:auto}.list-item{border:0;padding:0;cursor:pointer}.picker-body{display:flex;width:100%;flex:1 0 0;overflow:hidden}.column-header{width:100%;display:flex;justify-content:space-between;padding:0}.header-cell{width:100%;display:flex;align-items:center;justify-content:center}.actions-footer{width:100%}nb-card-header,nb-card-footer{flex:0 0 auto}\n"]
            },] }
];
NbTimePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_TIME_PICKER_CONFIG,] }] },
    { type: NbPlatform },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ChangeDetectorRef },
    { type: NbCalendarTimeModelService },
    { type: NbDateService }
];
NbTimePickerComponent.propDecorators = {
    timeFormat: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }],
    step: [{ type: Input }],
    date: [{ type: Input }],
    showFooter: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    hoursText: [{ type: Input }],
    minutesText: [{ type: Input }],
    secondsText: [{ type: Input }],
    ampmText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    onSelectTime: [{ type: Output }],
    portal: [{ type: ViewChild, args: [NbPortalDirective, { static: true },] }]
};

class NbCalendarWithTimeComponent extends NbCalendarComponent {
    constructor(dateService, cd, calendarTimeModelService) {
        super();
        this.dateService = dateService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
    }
    ngOnInit() {
        if (!this.date) {
            this.date = this.calendarTimeModelService.getResetTime();
        }
    }
    ngAfterViewInit() {
        this.portalOutlet.attachTemplatePortal(this.timepicker.portal);
    }
    onDateValueChange(date) {
        const hours = this.dateService.getHours(this.date);
        const minutes = this.dateService.getMinutes(this.date);
        const seconds = this.dateService.getSeconds(this.date);
        const milliseconds = this.dateService.getMilliseconds(this.date);
        let newDate = this.dateService.setHours(date, hours);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setSeconds(newDate, seconds);
        newDate = this.dateService.setMilliseconds(newDate, milliseconds);
        this.date = newDate;
    }
    onTimeChange(selectedTime) {
        let newDate = this.dateService.clone(this.date);
        newDate = this.dateService.setHours(newDate, this.dateService.getHours(selectedTime.time));
        newDate = this.dateService.setMinutes(newDate, this.dateService.getMinutes(selectedTime.time));
        newDate = this.dateService.setSeconds(newDate, this.dateService.getSeconds(selectedTime.time));
        newDate = this.dateService.setMilliseconds(newDate, this.dateService.getMilliseconds(selectedTime.time));
        this.date = newDate;
    }
    saveValue() {
        this.dateChange.emit(this.date);
    }
    saveCurrentTime() {
        this.dateChange.emit(this.dateService.today());
    }
    /**
     * We don't show seconds with twelve hours format
     * */
    showSeconds() {
        return this.withSeconds && !this.twelveHoursFormat;
    }
    isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarWithTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-calendar-with-time',
                template: `
    <nb-card class="calendar-with-time">
      <nb-card-body class="picker-body">
        <nb-base-calendar
          [boundingMonth]="boundingMonth"
          [startView]="startView"
          [date]="date"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [dayCellComponent]="dayCellComponent"
          [monthCellComponent]="monthCellComponent"
          [yearCellComponent]="yearCellComponent"
          [size]="size"
          [visibleDate]="visibleDate"
          [showNavigation]="showNavigation"
          [showWeekNumber]="showWeekNumber"
          [weekNumberSymbol]="weekNumberSymbol"
          (dateChange)="onDateValueChange($event)">
        </nb-base-calendar>
        <div class="timepicker-section"
             [class.size-large]="isLarge()"
             [class.timepicker-single-column-width]="singleColumn"
             [class.timepicker-multiple-column-width]="!singleColumn">
          <div class="picker-title">{{ title }}</div>
          <nb-timepicker
            (onSelectTime)="onTimeChange($event)"
            [date]="date"
            [twelveHoursFormat]="twelveHoursFormat"
            [withSeconds]="showSeconds()"
            [showFooter]="false"
            [singleColumn]="singleColumn"
            [step]="step">
          </nb-timepicker>
          <ng-container nbPortalOutlet></ng-container>
        </div>
      </nb-card-body>
      <nb-card-footer class="picker-footer">
        <nb-calendar-actions
          [applyButtonText]="applyButtonText"
          [currentTimeButtonText]="currentTimeButtonText"
          (setCurrentTime)="saveCurrentTime()"
          (saveValue)="saveValue()"
        ></nb-calendar-actions>
      </nb-card-footer>
    </nb-card>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host ::ng-deep nb-card.nb-timepicker-container{flex:1 0 0;border-radius:0;width:auto;border-right:0;border-bottom:0}[dir=ltr] :host .picker-footer{padding-left:.625rem}[dir=rtl] :host .picker-footer{padding-right:.625rem}.picker-body{align-items:stretch;display:flex;padding:0}.picker-body nb-base-calendar ::ng-deep nb-card{border-radius:0}.calendar-with-time{overflow:hidden}.timepicker-section{display:flex;flex-direction:column}\n"]
            },] }
];
NbCalendarWithTimeComponent.ctorParameters = () => [
    { type: NbDateService },
    { type: ChangeDetectorRef },
    { type: NbCalendarTimeModelService }
];
NbCalendarWithTimeComponent.propDecorators = {
    visibleDate: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }],
    step: [{ type: Input }],
    timeFormat: [{ type: Input }],
    title: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective,] }],
    timepicker: [{ type: ViewChild, args: [NbTimePickerComponent,] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDatepickerContainerComponent extends NbPositionedContainerComponent {
    attach(portal) {
        return this.overlayContainer.attachComponentPortal(portal);
    }
}
NbDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-datepicker-container',
                template: `
    <nb-overlay-container></nb-overlay-container>
  `
            },] }
];
NbDatepickerContainerComponent.propDecorators = {
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent, { static: true },] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
class NbDatepickerAdapter {
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
class NbDatepicker {
}
const NB_DATE_ADAPTER = new InjectionToken('Datepicker Adapter');
const NB_DATE_SERVICE_OPTIONS = new InjectionToken('Date service options');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDatepickerModule,
 *   ],
 * })
 *
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 * And `filter` predicate that receives date object and has to return a boolean value.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * If you need to pick a time along with the date, you can use nb-date-timepicker
 *
 * ```html
 * <input nbInput placeholder="Pick Date" [nbDatepicker]="dateTimePicker">
 * <nb-date-timepicker withSeconds #dateTimePicker></nb-date-timepicker>
 * ```
 * @stacked-example(Date timepicker, datepicker/date-timepicker-showcase.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 *
 * @stacked-example(Date timepicker single column, datepicker/date-timepicker-single-column.component)

 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 * <span id="formatting-issue"></span>
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * ### NbDateFnsDateModule
 *
 * Format is required when using `NbDateFnsDateModule`. You can set it via `format` input on datepicker component:
 * ```html
 * <nb-datepicker format="dd.MM.yyyy"></nb-datepicker>
 * ```
 * Also format can be set globally with `NbDateFnsDateModule.forRoot({ format: 'dd.MM.yyyy' })` and
 * `NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' })` methods.
 *
 * Please note to use some of the formatting tokens you also need to pass
 * `{ useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }` to date-fns parse and format functions.
 * You can configure options passed this functions by setting `formatOptions` and
 * `parseOptions` of options object passed to `NbDateFnsDateModule.forRoot` and `NbDateFnsDateModule.forChild` methods.
 * ```ts
 * NbDateFnsDateModule.forRoot({
 *   parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 *   formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
 * })
 * ```
 * Further info on `date-fns` formatting tokens could be found at
 * [date-fns docs](https://date-fns.org/v2.0.0-alpha.27/docs/Unicode-Tokens).
 *
 * You can also use `parseOptions` and `formatOptions` to provide locale.
 * ```ts
 * import { eo } from 'date-fns/locale';
 *
 * @NgModule({
 *   imports: [
 *     NbDateFnsDateModule.forRoot({
 *       parseOptions: { locale: eo },
 *       formatOptions: { locale: eo },
 *     }),
 *   ],
 * })
 * ```
 *
 * @styles
 *
 * datepicker-background-color:
 * datepicker-border-color:
 * datepicker-border-style:
 * datepicker-border-width:
 * datepicker-border-radius:
 * datepicker-shadow:
 * */
class NbDatepickerDirective {
    constructor(document, datepickerAdapters, hostRef, dateService, changeDetector) {
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.isDatepickerReady = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = Validators.compose([
            this.parseValidator,
            this.minValidator,
            this.maxValidator,
            this.filterValidator,
        ].map(fn => fn.bind(this)));
        this.subscribeOnInputChange();
    }
    /**
     * Provides datepicker component.
     * */
    set setPicker(picker) {
        this.picker = picker;
        this.setupPicker();
    }
    /**
     * Returns html input element.
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Returns host input value.
     * */
    get inputValue() {
        return this.input.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value) {
        if (this.isDatepickerReady) {
            this.writePicker(value);
            this.writeInput(value);
        }
        else {
            this.queue = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.input.disabled = isDisabled;
    }
    /**
     * Form control validation based on picker validator config.
     * */
    validate() {
        return this.validator(null);
    }
    /**
     * Hides picker, focuses the input
     */
    hidePicker() {
        this.input.focus();
        this.picker.hide();
    }
    /**
     * Validates that we can parse value correctly.
     * */
    parseValidator() {
        /**
         * Date services treat empty string as invalid date.
         * That's why we're getting invalid formControl in case of empty input which is not required.
         * */
        if (this.inputValue === '') {
            return null;
        }
        const isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    }
    /**
     * Validates passed value is greater than min.
     * */
    minValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        if (date.start)
            return (!config.min || !date || this.dateService.compareDates(config.min, date.start) <= 0) ?
                null : { nbDatepickerMin: { min: config.min, actual: date } };
        else
            return (!config.min || !date || this.dateService.compareDates(config.min, date) <= 0) ?
                null : { nbDatepickerMin: { min: config.min, actual: date } };
    }
    /**
     * Validates passed value is smaller than max.
     * */
    maxValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        if (date.start && date.end)
            return (!config.max || !date || this.dateService.compareDates(config.max, date.end) >= 0) ?
                null : { nbDatepickerMax: { max: config.max, actual: date } };
        else
            return (!config.max || !date || this.dateService.compareDates(config.max, date) >= 0) ?
                null : { nbDatepickerMax: { max: config.max, actual: date } };
    }
    /**
     * Validates passed value satisfy the filter.
     * */
    filterValidator() {
        const config = this.picker.getValidatorConfig();
        const date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.filter || !date || config.filter(date)) ?
            null : { nbDatepickerFilter: true };
    }
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    chooseDatepickerAdapter() {
        this.datepickerAdapter = this.datepickerAdapters.find(({ picker }) => this.picker instanceof picker);
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    }
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    setupPicker() {
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.inputValue) {
            this.picker.value = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        }
        // In case datepicker component placed after the input with datepicker directive,
        // we can't read `this.picker.format` on first change detection run,
        // since it's not bound yet, so we have to wait for datepicker component initialization.
        if (!this.isDatepickerReady) {
            this.picker.init
                .pipe(take(1), tap(() => this.isDatepickerReady = true), filter(() => !!this.queue), takeUntil(this.destroy$))
                .subscribe(() => {
                this.writeValue(this.queue);
                this.onChange(this.queue);
                this.changeDetector.detectChanges();
                this.queue = undefined;
            });
        }
        this.picker.valueChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => {
            this.writePicker(value);
            this.writeInput(value);
            this.onChange(value);
            if (this.picker.shouldHide()) {
                this.hidePicker();
            }
        });
        merge(this.picker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.picker.isShown && this.document.activeElement !== this.input))).pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    writePicker(value) {
        this.picker.value = value;
    }
    writeInput(value) {
        const stringRepresentation = this.datepickerAdapter.format(value, this.picker.format);
        this.hostRef.nativeElement.value = stringRepresentation;
    }
    /**
     * Validates if no datepicker adapter provided.
     * */
    noDatepickerAdapterProvided() {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    /**
     * Parses input value and write if it isn't null.
     * */
    handleInputChange(value) {
        const date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    }
    parseInputValue(value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    }
}
NbDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbDatepicker]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbDatepickerDirective),
                        multi: true,
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => NbDatepickerDirective),
                        multi: true,
                    },
                ],
            },] }
];
NbDatepickerDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Inject, args: [NB_DATE_ADAPTER,] }] },
    { type: ElementRef },
    { type: NbDateService },
    { type: ChangeDetectorRef }
];
NbDatepickerDirective.propDecorators = {
    setPicker: [{ type: Input, args: ['nbDatepicker',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
class NbBasePicker extends NbDatepicker {
    constructor(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions) {
        super();
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.cfr = cfr;
        this.dateService = dateService;
        this.dateServiceOptions = dateServiceOptions;
        this.init$ = new ReplaySubject();
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        this.onChange$ = new Subject();
        this.overlayOffset = 8;
        this.destroy$ = new Subject();
        this.blur$ = new Subject();
    }
    /**
     * Returns picker instance.
     * */
    get picker() {
        return this.pickerRef && this.pickerRef.instance;
    }
    /**
     * Stream of picker value changes.
     * */
    get valueChange() {
        return this.onChange$.asObservable();
    }
    get isShown() {
        return this.ref && this.ref.hasAttached();
    }
    get init() {
        return this.init$.asObservable();
    }
    /**
     * Emits when datepicker looses focus.
     */
    get blur() {
        return this.blur$.asObservable();
    }
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    attach(hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    }
    getValidatorConfig() {
        return { min: this.min, max: this.max, filter: this.filter };
    }
    show() {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    }
    shouldHide() {
        return this.hideOnSelect && !!this.value;
    }
    hide() {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    }
    createOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    }
    openDatepicker() {
        this.container = this.ref.attach(new NbComponentPortal(NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
        this.pickerRef.changeDetectorRef.markForCheck();
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.COUNTERCLOCKWISE);
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => patch(this.container, { position }));
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.container)
            .build();
    }
    subscribeOnTriggers() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.triggerStrategy.show$.subscribe(() => this.show());
        this.triggerStrategy.hide$.subscribe(() => {
            this.blur$.next();
            this.hide();
        });
    }
    instantiatePicker() {
        this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
    }
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    subscribeOnValueChange() {
        this.pickerValueChange.subscribe(date => {
            this.onChange$.next(date);
        });
    }
    patchWithInputs() {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker._monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.showNavigation = this.showNavigation;
        this.picker.visibleDate = this.visibleDate;
        this.picker.showWeekNumber = this.showWeekNumber;
        this.picker.weekNumberSymbol = this.weekNumberSymbol;
    }
    checkFormat() {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error('Can\'t format native date. To use custom formatting you have to install @nebular/moment or ' +
                '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' +
                'More information at "Formatting issue" ' +
                'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
        const isFormatSet = this.format || (this.dateServiceOptions && this.dateServiceOptions.format);
        if (this.dateService.getId() === 'date-fns' && !isFormatSet) {
            throw new Error('format is required when using NbDateFnsDateModule');
        }
    }
}
class NbBasePickerComponent extends NbBasePicker {
    constructor(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions) {
        super(overlay, positionBuilder, triggerStrategyBuilder, cfr, dateService, dateServiceOptions);
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        this.hideOnSelect = true;
        /**
         * Determines should we show calendars navigation or not.
         * @type {boolean}
         */
        this.showNavigation = true;
        /**
         * Sets symbol used as a header for week numbers column
         * */
        this.weekNumberSymbol = '#';
        this._showWeekNumber = false;
        /**
         * Determines picker overlay offset (in pixels).
         * */
        this.overlayOffset = 8;
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.checkFormat();
    }
    ngOnChanges(changes) {
        if (changes.format && !changes.format.isFirstChange()) {
            this.checkFormat();
        }
    }
    ngAfterViewInit() {
        this.init$.next();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.init$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    get pickerValueChange() {
        return;
    }
    get value() {
        return undefined;
    }
    set value(value) { }
    writeQueue() {
    }
}
NbBasePickerComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
NbBasePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NbDateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_DATE_SERVICE_OPTIONS,] }] }
];
NbBasePickerComponent.propDecorators = {
    format: [{ type: Input }],
    boundingMonth: [{ type: Input }],
    startView: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    filter: [{ type: Input }],
    dayCellComponent: [{ type: Input }],
    monthCellComponent: [{ type: Input }],
    yearCellComponent: [{ type: Input }],
    size: [{ type: Input }],
    visibleDate: [{ type: Input }],
    hideOnSelect: [{ type: Input }],
    showNavigation: [{ type: Input }],
    weekNumberSymbol: [{ type: Input }],
    showWeekNumber: [{ type: Input }],
    overlayOffset: [{ type: Input }]
};
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
class NbDatepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarComponent;
    }
    /**
     * Date which will be rendered as selected.
     * */
    set date(date) {
        this.value = date;
    }
    /**
     * Emits date when selected.
     * */
    get dateChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.date : undefined;
    }
    set value(date) {
        if (!this.picker) {
            this.queue = date;
            return;
        }
        if (date) {
            this.visibleDate = date;
            this.picker.visibleDate = date;
            this.picker.date = date;
        }
    }
    get pickerValueChange() {
        return this.picker.dateChange;
    }
    writeQueue() {
        if (this.queue) {
            const date = this.queue;
            this.queue = null;
            this.value = date;
        }
    }
}
NbDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-datepicker',
                template: ''
            },] }
];
NbDatepickerComponent.propDecorators = {
    date: [{ type: Input }],
    dateChange: [{ type: Output }]
};
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
class NbRangepickerComponent extends NbBasePickerComponent {
    constructor() {
        super(...arguments);
        this.pickerClass = NbCalendarRangeComponent;
    }
    /**
     * Range which will be rendered as selected.
     * */
    set range(range) {
        this.value = range;
    }
    /**
     * Emits range when start selected and emits again when end selected.
     * */
    get rangeChange() {
        return this.valueChange;
    }
    get value() {
        return this.picker ? this.picker.range : undefined;
    }
    set value(range) {
        if (!this.picker) {
            this.queue = range;
            return;
        }
        if (range) {
            const visibleDate = range && range.start;
            this.visibleDate = visibleDate;
            this.picker.visibleDate = visibleDate;
            this.picker.range = range;
        }
    }
    get pickerValueChange() {
        return this.picker.rangeChange;
    }
    shouldHide() {
        return super.shouldHide() && !!(this.value && this.value.start && this.value.end);
    }
    writeQueue() {
        if (this.queue) {
            const range = this.queue;
            this.queue = null;
            this.value = range;
        }
    }
}
NbRangepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-rangepicker',
                template: ''
            },] }
];
NbRangepickerComponent.propDecorators = {
    range: [{ type: Input }],
    rangeChange: [{ type: Output }]
};

class NbDateTimePickerComponent extends NbBasePickerComponent {
    constructor(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions, calendarWithTimeModelService) {
        super(document, positionBuilder, triggerStrategyBuilder, overlay, cfr, dateService, dateServiceOptions);
        this.calendarWithTimeModelService = calendarWithTimeModelService;
        this.pickerClass = NbCalendarWithTimeComponent;
    }
    get value() {
        return this.picker ? this.picker.date : undefined;
    }
    set value(date) {
        if (!this.picker) {
            this.queue = date;
            return;
        }
        if (date) {
            this.visibleDate = date;
            this.picker.visibleDate = date;
            this.picker.date = date;
            this.picker.cd.markForCheck();
        }
    }
    get twelveHoursFormat() {
        return this._twelveHoursFormat;
    }
    set twelveHoursFormat(value) {
        this._twelveHoursFormat = convertToBoolProperty(value);
    }
    get withSeconds() {
        return this._withSeconds;
    }
    set withSeconds(value) {
        this._withSeconds = convertToBoolProperty(value);
    }
    get singleColumn() {
        return this._singleColumn;
    }
    set singleColumn(value) {
        this._singleColumn = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.format = this.format || this.buildTimeFormat();
    }
    patchWithInputs() {
        this.picker.singleColumn = this.singleColumn;
        this.picker.twelveHoursFormat = this.twelveHoursFormat;
        this.picker.withSeconds = this.withSeconds;
        this.picker.step = this.step;
        this.picker.title = this.title;
        this.picker.applyButtonText = this.applyButtonText;
        this.picker.currentTimeButtonText = this.currentTimeButtonText;
        if (this.twelveHoursFormat) {
            this.picker.timeFormat = this.dateService.getTwelveHoursFormat();
        }
        else {
            this.picker.timeFormat = this.withSeconds ? this.dateService.getTwentyFourHoursFormatWithSeconds() :
                this.dateService.getTwentyFourHoursFormat();
        }
        super.patchWithInputs();
        this.picker.cd.markForCheck();
    }
    get pickerValueChange() {
        return this.picker.dateChange;
    }
    writeQueue() {
        if (this.queue) {
            const date = this.queue;
            this.queue = null;
            this.value = date;
        }
    }
    buildTimeFormat() {
        if (this.singleColumn) {
            return this.calendarWithTimeModelService.buildDateFormat(this.twelveHoursFormat);
        }
        else {
            return this.calendarWithTimeModelService.buildDateFormat(this.twelveHoursFormat, this.withSeconds);
        }
    }
}
NbDateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-date-timepicker',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbDateTimePickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NbDateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_DATE_SERVICE_OPTIONS,] }] },
    { type: NbCalendarTimeModelService }
];
NbDateTimePickerComponent.propDecorators = {
    step: [{ type: Input }],
    title: [{ type: Input }],
    applyButtonText: [{ type: Input }],
    currentTimeButtonText: [{ type: Input }],
    twelveHoursFormat: [{ type: Input }],
    withSeconds: [{ type: Input }],
    singleColumn: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function isUrlPathEqual(path, link) {
    const locationPath = getPathPartOfUrl(path);
    return link === locationPath;
}
function isUrlPathContain(path, link) {
    const locationPath = getPathPartOfUrl(path);
    const endOfUrlSegmentRegExp = /\/|^$/;
    return locationPath.startsWith(link) &&
        locationPath.slice(link.length).charAt(0).search(endOfUrlSegmentRegExp) !== -1;
}
function getPathPartOfUrl(url) {
    return url.match(/.*?(?=[?;#]|$)/)[0];
}
function getFragmentPartOfUrl(url) {
    const matched = url.match(/#(.+)/);
    return matched ? matched[1] : '';
}
function isFragmentEqual(path, fragment) {
    return getFragmentPartOfUrl(path) === fragment;
}
function isFragmentContain(path, fragment) {
    return getFragmentPartOfUrl(path).includes(fragment);
}

/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
class NbRestoreScrollTopHelper {
    constructor(router) {
        this.router = router;
    }
    shouldRestore() {
        return this.router.events
            .pipe(startWith(null), filter(event => event === null || event instanceof NavigationEnd), pairwise(), map(([prev, current]) => this.pageChanged(prev, current)), filter(res => !!res));
    }
    pageChanged(prev, current) {
        return !prev || getPathPartOfUrl(prev.url) !== getPathPartOfUrl(current.url);
    }
}
NbRestoreScrollTopHelper.decorators = [
    { type: Injectable }
];
NbRestoreScrollTopHelper.ctorParameters = () => [
    { type: Router }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Layout container component.
 * When using with Nebular Theme System it is required that all child components should be placed inside.
 *
 * Basic example of two column layout with header:
 *
 * @stacked-example(Showcase, layout/layout-showcase.component)
 *
 * Can contain the following components inside:
 *
 * ```html
 * <nb-layout>
 *  <nb-layout-header></nb-layout-header>
 *  <nb-layout-footer></nb-layout-footer>
 *  <nb-layout-column></nb-layout-column>
 *  <nb-sidebar></nb-sidebar>
 * </nb-layout>
 * ```
 * ### Installation
 *
 * Import `NbLayoutModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbLayoutModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * ### Usage
 * By default the layout fills up the whole view-port.
 * The window scrollbars are disabled on the body and moved inside of the nb-layout, so that the scrollbars
 * won't mess with the fixed nb-header.
 *
 * The child components are projected into a flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the nb-layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are under the `ThemeService` section.
 *
 * The layout component is also responsible for changing application themes.
 * It listens to the `themeChange` event and change a theme CSS class appended to body.
 * Based on the class appended, specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * A simple layout with footer:
 *
 * @stacked-example(Layout With Footer, layout/layout-w-footer.component)
 *
 * It is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```html
 * <nb-layout center>
 *   <nb-layout-header>Awesome Company</nb-layout-header>
 *
 *   <nb-layout-column>
 *     Hello World!
 *   </nb-layout-column>
 *
 *   <nb-layout-footer>Contact us</nb-layout-footer>
 * </nb-layout>
 * ```
 *
 * @styles
 *
 * layout-background-color:
 * layout-text-color:
 * layout-text-font-family:
 * layout-text-font-size:
 * layout-text-font-weight:
 * layout-text-line-height:
 * layout-min-height:
 * layout-content-width:
 * layout-window-mode-min-width:
 * layout-window-mode-max-width:
 * layout-window-mode-background-color:
 * layout-window-mode-padding-top:
 * layout-window-shadow:
 * layout-padding:
 * layout-medium-padding:
 * layout-small-padding:
 * layout-scrollbar-background-color:
 * layout-scrollbar-color:
 * layout-scrollbar-width:
 */
class NbLayoutComponent {
    constructor(themeService, spinnerService, elementRef, renderer, window, document, platformId, layoutDirectionService, scrollService, rulerService, scrollTop, overlayContainer) {
        this.themeService = themeService;
        this.spinnerService = spinnerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.window = window;
        this.document = document;
        this.platformId = platformId;
        this.layoutDirectionService = layoutDirectionService;
        this.scrollService = scrollService;
        this.rulerService = rulerService;
        this.scrollTop = scrollTop;
        this.overlayContainer = overlayContainer;
        this.scrollBlockClass = 'nb-global-scrollblock';
        this.isScrollBlocked = false;
        this.centerValue = false;
        this.restoreScrollTopValue = true;
        this.windowModeValue = false;
        this.withScrollValue = false;
        this.withSubheader = false;
        this.afterViewInit$ = new BehaviorSubject(null);
        this.destroy$ = new Subject();
        this.registerAsOverlayContainer();
        this.themeService.onThemeChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((theme) => {
            const body = this.document.getElementsByTagName('body')[0];
            if (theme.previous) {
                this.renderer.removeClass(body, `nb-theme-${theme.previous}`);
            }
            this.renderer.addClass(body, `nb-theme-${theme.name}`);
        });
        this.themeService.onAppendLayoutClass()
            .pipe(takeUntil(this.destroy$))
            .subscribe((className) => {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        });
        this.themeService.onRemoveLayoutClass()
            .pipe(takeUntil(this.destroy$))
            .subscribe((className) => {
            this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
        this.spinnerService.registerLoader(new Promise((resolve) => {
            this.afterViewInit$
                .pipe(takeUntil(this.destroy$))
                .subscribe((_) => resolve());
        }));
        this.spinnerService.load();
        this.rulerService.onGetDimensions()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ listener }) => {
            listener.next(this.getDimensions());
            listener.complete();
        });
        this.scrollService
            .onScrollableChange()
            .pipe(filter(() => this.withScrollValue))
            .subscribe((scrollable) => {
            /**
             * In case when Nebular Layout custom scroll `withScroll` mode is enabled
             * we need to disable default CDK scroll blocker (@link NbBlockScrollStrategyAdapter) on HTML element
             * so that it won't add additional positioning.
             */
            if (scrollable) {
                this.enableScroll();
            }
            else {
                this.blockScroll();
            }
        });
        if (isPlatformBrowser(this.platformId)) {
            // trigger first time so that after the change we have the initial value
            this.themeService.changeWindowWidth(this.window.innerWidth);
        }
    }
    /**
     * Defines whether the layout columns will be centered after some width
     * @param {boolean} val
     */
    set center(val) {
        this.centerValue = convertToBoolProperty(val);
    }
    /**
     * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
     * becomes centered by width with a margin from the top of the screen, like a floating window.
     * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
     * window. (TODO: check this)
     * @param {boolean} val
     */
    set windowMode(val) {
        this.windowModeValue = convertToBoolProperty(val);
        this.withScroll = this.windowModeValue;
    }
    /**
     * Defines whether to move the scrollbars to layout or leave it at the body level.
     * Automatically set to true when `windowMode` is enabled.
     * @param {boolean} val
     */
    set withScroll(val) {
        this.withScrollValue = convertToBoolProperty(val);
        // TODO: is this the best way of doing it? as we don't have access to body from theme styles
        // TODO: add e2e test
        const body = this.document.getElementsByTagName('body')[0];
        if (this.withScrollValue) {
            this.renderer.setStyle(body, 'overflow', 'hidden');
        }
        else {
            this.renderer.setStyle(body, 'overflow', 'initial');
        }
    }
    /**
     * Restores scroll to the top of the page after navigation
     * @param {boolean} val
     */
    set restoreScrollTop(val) {
        this.restoreScrollTopValue = convertToBoolProperty(val);
    }
    ngAfterViewInit() {
        this.scrollService.onGetPosition()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ listener }) => {
            listener.next(this.getScrollPosition());
            listener.complete();
        });
        this.scrollTop.shouldRestore()
            .pipe(filter(() => this.restoreScrollTopValue), takeUntil(this.destroy$))
            .subscribe(() => this.scroll(0, 0));
        this.layoutDirectionService.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(direction => this.document.dir = direction);
        this.scrollService.onManualScroll()
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ x, y }) => this.scroll(x, y));
        this.afterViewInit$.next(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.unregisterAsOverlayContainer();
    }
    onScroll($event) {
        this.scrollService.fireScrollChange($event);
    }
    onResize(event) {
        this.themeService.changeWindowWidth(event.target.innerWidth);
    }
    /**
     * Returns scroll and client height/width
     *
     * Depending on the current scroll mode (`withScroll=true`) returns sizes from the body element
     * or from the `.scrollable-container`
     * @returns {NbLayoutDimensions}
     */
    getDimensions() {
        let clientWidth, clientHeight, scrollWidth, scrollHeight = 0;
        if (this.withScrollValue) {
            const container = this.scrollableContainerRef.nativeElement;
            clientWidth = container.clientWidth;
            clientHeight = container.clientHeight;
            scrollWidth = container.scrollWidth;
            scrollHeight = container.scrollHeight;
        }
        else {
            const { documentElement, body } = this.document;
            clientWidth = documentElement.clientWidth || body.clientWidth;
            clientHeight = documentElement.clientHeight || body.clientHeight;
            scrollWidth = documentElement.scrollWidth || body.scrollWidth;
            scrollHeight = documentElement.scrollHeight || body.scrollHeight;
        }
        return {
            clientWidth,
            clientHeight,
            scrollWidth,
            scrollHeight,
        };
    }
    /**
     * Returns scroll position of current scroll container.
     *
     * If `withScroll` = true, returns scroll position of the `.scrollable-container` element,
     * otherwise - of the scrollable element of the window (which may be different depending of a browser)
     *
     * @returns {NbScrollPosition}
     */
    getScrollPosition() {
        if (!isPlatformBrowser(this.platformId)) {
            return { x: 0, y: 0 };
        }
        if (this.withScrollValue) {
            const container = this.scrollableContainerRef.nativeElement;
            return { x: container.scrollLeft, y: container.scrollTop };
        }
        const documentRect = this.document.documentElement.getBoundingClientRect();
        const x = -documentRect.left || this.document.body.scrollLeft || this.window.scrollX ||
            this.document.documentElement.scrollLeft || 0;
        const y = -documentRect.top || this.document.body.scrollTop || this.window.scrollY ||
            this.document.documentElement.scrollTop || 0;
        return { x, y };
    }
    registerAsOverlayContainer() {
        if (this.overlayContainer.setContainer) {
            this.overlayContainer.setContainer(this.elementRef.nativeElement);
        }
    }
    unregisterAsOverlayContainer() {
        if (this.overlayContainer.clearContainer) {
            this.overlayContainer.clearContainer();
        }
    }
    scroll(x = null, y = null) {
        const { x: currentX, y: currentY } = this.getScrollPosition();
        x = x == null ? currentX : x;
        y = y == null ? currentY : y;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        if (this.withScrollValue) {
            const scrollable = this.scrollableContainerRef.nativeElement;
            if (scrollable.scrollTo) {
                scrollable.scrollTo(x, y);
            }
            else {
                scrollable.scrollLeft = x;
                scrollable.scrollTop = y;
            }
        }
        else {
            this.window.scrollTo(x, y);
        }
    }
    // TODO: Extract into block scroll strategy
    blockScroll() {
        if (this.isScrollBlocked) {
            return;
        }
        this.isScrollBlocked = true;
        this.renderer.addClass(this.document.documentElement, this.scrollBlockClass);
        const scrollableContainerElement = this.scrollableContainerRef.nativeElement;
        const layoutElement = this.layoutContainerRef.nativeElement;
        const layoutWithScrollWidth = layoutElement.clientWidth;
        this.scrollableContainerOverflowOldValue = scrollableContainerElement.style.overflow;
        scrollableContainerElement.style.overflow = 'hidden';
        const layoutWithoutScrollWidth = layoutElement.clientWidth;
        const scrollWidth = layoutWithoutScrollWidth - layoutWithScrollWidth;
        if (!scrollWidth) {
            return;
        }
        this.layoutPaddingOldValue = {
            left: layoutElement.style.paddingLeft,
            right: layoutElement.style.paddingRight,
        };
        if (this.layoutDirectionService.isLtr()) {
            layoutElement.style.paddingRight = `${scrollWidth}px`;
        }
        else {
            layoutElement.style.paddingLeft = `${scrollWidth}px`;
        }
    }
    enableScroll() {
        if (this.isScrollBlocked) {
            this.isScrollBlocked = false;
            this.renderer.removeClass(this.document.documentElement, this.scrollBlockClass);
            this.scrollableContainerRef.nativeElement.style.overflow = this.scrollableContainerOverflowOldValue;
            if (this.layoutPaddingOldValue) {
                const layoutElement = this.layoutContainerRef.nativeElement;
                layoutElement.style.paddingLeft = this.layoutPaddingOldValue.left;
                layoutElement.style.paddingRight = this.layoutPaddingOldValue.right;
                this.layoutPaddingOldValue = null;
            }
        }
    }
}
NbLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-layout',
                template: `
    <div class="scrollable-container" #scrollableContainer (scroll)="onScroll($event)">
      <div class="layout" #layoutContainer>
        <ng-content select="nb-layout-header:not([subheader])"></ng-content>
        <div class="layout-container">
          <ng-content select="nb-sidebar"></ng-content>
          <div class="content" [class.center]="centerValue">
            <ng-content select="nb-layout-header[subheader]"></ng-content>
            <div class="columns">
              <ng-content select="nb-layout-column"></ng-content>
            </div>
            <ng-content select="nb-layout-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
                styles: [":host{-webkit-font-smoothing:antialiased}[dir=ltr] :host{text-align:left}[dir=rtl] :host{text-align:right}:host .layout{display:flex;flex-direction:column}:host ::ng-deep nb-layout-header{display:block}:host ::ng-deep nb-layout-header nav{align-items:center;justify-content:flex-start;display:flex}:host ::ng-deep nb-layout-header.fixed{position:fixed;top:0;left:0;right:0;z-index:1040}:host .layout-container{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row}[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.left{order:0}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.left{order:2}[dir=ltr] :host .layout-container ::ng-deep nb-sidebar.right{order:2}[dir=rtl] :host .layout-container ::ng-deep nb-sidebar.right{order:0}:host .layout-container ::ng-deep nb-sidebar.end{order:2}:host .layout-container ::ng-deep nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}:host .layout-container .content{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:column;min-width:0}:host .layout-container .content.center{max-width:100%;position:relative;margin-left:auto;margin-right:auto}:host .layout-container .content .columns{display:flex;flex:1;-ms-flex:1 1 auto;flex-direction:row;width:100%}:host .layout-container .content .columns ::ng-deep nb-layout-column{order:1;flex:1 0;min-width:0}[dir=ltr] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:0}[dir=rtl] :host .layout-container .content .columns ::ng-deep nb-layout-column.left{order:2}:host .layout-container .content .columns ::ng-deep nb-layout-column.start{order:0}:host .layout-container .content ::ng-deep nb-layout-footer{display:block;margin-top:auto}:host .layout-container .content ::ng-deep nb-layout-footer nav{justify-content:center;display:flex}\n"]
            },] }
];
NbLayoutComponent.ctorParameters = () => [
    { type: NbThemeService },
    { type: NbSpinnerService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NbLayoutDirectionService },
    { type: NbLayoutScrollService },
    { type: NbLayoutRulerService },
    { type: NbRestoreScrollTopHelper },
    { type: NbOverlayContainerAdapter }
];
NbLayoutComponent.propDecorators = {
    windowModeValue: [{ type: HostBinding, args: ['class.window-mode',] }],
    withScrollValue: [{ type: HostBinding, args: ['class.with-scroll',] }],
    withSubheader: [{ type: HostBinding, args: ['class.with-subheader',] }],
    center: [{ type: Input }],
    windowMode: [{ type: Input }],
    withScroll: [{ type: Input }],
    restoreScrollTop: [{ type: Input }],
    veryTopRef: [{ type: ViewChild, args: ['layoutTopDynamicArea', { read: ViewContainerRef },] }],
    scrollableContainerRef: [{ type: ViewChild, args: ['scrollableContainer', { read: ElementRef },] }],
    layoutContainerRef: [{ type: ViewChild, args: ['layoutContainer', { read: ElementRef },] }],
    onScroll: [{ type: HostListener, args: ['window:scroll', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 *
 * @stacked-example(Column Left, layout/layout-column-left.component)
 */
class NbLayoutColumnComponent {
    /**
     * Move the column to the very left position in the layout.
     * @param {boolean} val
     */
    set left(val) {
        this.leftValue = convertToBoolProperty(val);
        this.startValue = false;
    }
    /**
     * Make column first in the layout.
     * @param {boolean} val
     */
    set start(val) {
        this.startValue = convertToBoolProperty(val);
        this.leftValue = false;
    }
}
NbLayoutColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-layout-column',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
NbLayoutColumnComponent.propDecorators = {
    leftValue: [{ type: HostBinding, args: ['class.left',] }],
    startValue: [{ type: HostBinding, args: ['class.start',] }],
    left: [{ type: Input }],
    start: [{ type: Input }]
};
/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page). Here's an example:
 *
 * @stacked-example(Fixed Header, layout/layout-fixed-header.component)
 *
 * In a pair with sidebar it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * Same way you can put both `fixed` and `clipped` headers adding creating a sub-header for your app:
 *
 * @stacked-example(Subheader, layout/layout-subheader.component)
 *
 * @styles
 *
 * header-background-color:
 * header-text-color:
 * header-text-font-family:
 * header-text-font-size:
 * header-text-font-weight:
 * header-text-line-height:
 * header-height:
 * header-padding:
 * header-shadow:
 */
class NbLayoutHeaderComponent {
    constructor(layout) {
        this.layout = layout;
    }
    /**
     * Makes the header sticky to the top of the nb-layout.
     * @param {boolean} val
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
    /**
     * Places header on a side of the sidebar, and not above.
     * Disables fixed mode for this header and remove a shadow from the sidebar.
     * @param {boolean} val
     */
    set subheader(val) {
        this.subheaderValue = convertToBoolProperty(val);
        this.fixedValue = false;
        this.layout.withSubheader = this.subheaderValue;
    }
}
NbLayoutHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-layout-header',
                template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `
            },] }
];
NbLayoutHeaderComponent.ctorParameters = () => [
    { type: NbLayoutComponent }
];
NbLayoutHeaderComponent.propDecorators = {
    fixedValue: [{ type: HostBinding, args: ['class.fixed',] }],
    subheaderValue: [{ type: HostBinding, args: ['class.subheader',] }],
    fixed: [{ type: Input }],
    subheader: [{ type: Input }]
};
/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-background-color:
 * footer-text-color:
 * footer-text-font-family:
 * footer-text-font-size:
 * footer-text-font-weight:
 * footer-text-line-height:
 * footer-text-highlight-color:
 * footer-height:
 * footer-padding:
 * footer-divider-color:
 * footer-divider-style:
 * footer-divider-width:
 * footer-shadow:
 */
class NbLayoutFooterComponent {
    /**
     * Makes the footer sticky to the bottom of the window.
     * @param {boolean} val
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
}
NbLayoutFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-layout-footer',
                template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `
            },] }
];
NbLayoutFooterComponent.propDecorators = {
    fixedValue: [{ type: HostBinding, args: ['class.fixed',] }],
    fixed: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
class NbLayoutModule {
}
NbLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    ...NB_LAYOUT_COMPONENTS,
                ],
                providers: [
                    NbRestoreScrollTopHelper,
                ],
                exports: [
                    ...NB_LAYOUT_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const itemClick$ = new Subject();
const addItems$ = new ReplaySubject(1);
const navigateHome$ = new ReplaySubject(1);
const getSelectedItem$ = new ReplaySubject(1);
const itemSelect$ = new ReplaySubject(1);
const itemHover$ = new ReplaySubject(1);
const submenuToggle$ = new ReplaySubject(1);
const collapseAll$ = new ReplaySubject(1);
// TODO: check if we need both URL and LINK
/**
 *
 *
 * Menu Item options example
 * @stacked-example(Menu Link Parameters, menu/menu-link-params.component)
 *
 *
 */
class NbMenuItem {
    constructor() {
        /**
         * Item is selected when partly or fully equal to the current url
         * @type {string}
         */
        this.pathMatch = 'full';
    }
    /**
     * @returns item parents in top-down order
     */
    static getParents(item) {
        const parents = [];
        let parent = item.parent;
        while (parent) {
            parents.unshift(parent);
            parent = parent.parent;
        }
        return parents;
    }
    static isParent(item, possibleChild) {
        return possibleChild.parent
            ? possibleChild.parent === item || this.isParent(item, possibleChild.parent)
            : false;
    }
}
// TODO: map select events to router change events
// TODO: review the interface
/**
 *
 *
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 * @stacked-example(Menu Service, menu/menu-service.component)
 *
 *
 */
class NbMenuService {
    /**
     * Add items to the end of the menu items list
     * @param {List<NbMenuItem>} items
     * @param {string} tag
     */
    addItems(items, tag) {
        addItems$.next({ tag, items });
    }
    /**
     * Collapses all menu items
     * @param {string} tag
     */
    collapseAll(tag) {
        collapseAll$.next({ tag });
    }
    /**
     * Navigate to the home menu item
     * @param {string} tag
     */
    navigateHome(tag) {
        navigateHome$.next({ tag });
    }
    /**
     * Returns currently selected item. Won't subscribe to the future events.
     * @param {string} tag
     * @returns {Observable<{tag: string; item: NbMenuItem}>}
     */
    getSelectedItem(tag) {
        const listener = new BehaviorSubject(null);
        getSelectedItem$.next({ tag, listener });
        return listener.asObservable();
    }
    onItemClick() {
        return itemClick$.pipe(share());
    }
    onItemSelect() {
        return itemSelect$.pipe(share());
    }
    onItemHover() {
        return itemHover$.pipe(share());
    }
    onSubmenuToggle() {
        return submenuToggle$.pipe(share());
    }
}
NbMenuService.decorators = [
    { type: Injectable }
];
class NbMenuInternalService {
    constructor(location) {
        this.location = location;
    }
    prepareItems(items) {
        const defaultItem = new NbMenuItem();
        items.forEach(i => {
            this.applyDefaults(i, defaultItem);
            this.setParent(i);
        });
    }
    selectFromUrl(items, tag, collapseOther = false) {
        const selectedItem = this.findItemByUrl(items);
        if (selectedItem) {
            this.selectItem(selectedItem, items, collapseOther, tag);
        }
    }
    selectItem(item, items, collapseOther = false, tag) {
        const unselectedItems = this.resetSelection(items);
        const collapsedItems = collapseOther ? this.collapseItems(items) : [];
        for (const parent of NbMenuItem.getParents(item)) {
            parent.selected = true;
            // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
            if (!unselectedItems.includes(parent)) {
                this.itemSelect(parent, tag);
            }
            const wasNotExpanded = !parent.expanded;
            parent.expanded = true;
            const i = collapsedItems.indexOf(parent);
            // emit event only for items that weren't expanded before.
            // 'collapsedItems' contains items that were expanded, so no need to emit event.
            // in case 'collapseOther' is false, 'collapsedItems' will be empty,
            // so also check if item isn't expanded already ('wasNotExpanded').
            if (i === -1 && wasNotExpanded) {
                this.submenuToggle(parent, tag);
            }
            else {
                collapsedItems.splice(i, 1);
            }
        }
        item.selected = true;
        // emit event only for items that weren't selected before ('unselectedItems' contains items that were selected)
        if (!unselectedItems.includes(item)) {
            this.itemSelect(item, tag);
        }
        // remaining items which wasn't expanded back after expanding all currently selected items
        for (const collapsedItem of collapsedItems) {
            this.submenuToggle(collapsedItem, tag);
        }
    }
    collapseAll(items, tag, except) {
        const collapsedItems = this.collapseItems(items, except);
        for (const item of collapsedItems) {
            this.submenuToggle(item, tag);
        }
    }
    onAddItem() {
        return addItems$.pipe(share());
    }
    onNavigateHome() {
        return navigateHome$.pipe(share());
    }
    onCollapseAll() {
        return collapseAll$.pipe(share());
    }
    onGetSelectedItem() {
        return getSelectedItem$.pipe(share());
    }
    itemHover(item, tag) {
        itemHover$.next({ tag, item });
    }
    submenuToggle(item, tag) {
        submenuToggle$.next({ tag, item });
    }
    itemSelect(item, tag) {
        itemSelect$.next({ tag, item });
    }
    itemClick(item, tag) {
        itemClick$.next({ tag, item });
    }
    /**
     * Unselect all given items deeply.
     * @param items array of items to unselect.
     * @returns items which selected value was changed.
     */
    resetSelection(items) {
        const unselectedItems = [];
        for (const item of items) {
            if (item.selected) {
                unselectedItems.push(item);
            }
            item.selected = false;
            if (item.children) {
                unselectedItems.push(...this.resetSelection(item.children));
            }
        }
        return unselectedItems;
    }
    /**
     * Collapse all given items deeply.
     * @param items array of items to collapse.
     * @param except menu item which shouldn't be collapsed, also disables collapsing for parents of this item.
     * @returns items which expanded value was changed.
     */
    collapseItems(items, except) {
        const collapsedItems = [];
        for (const item of items) {
            if (except && (item === except || NbMenuItem.isParent(item, except))) {
                continue;
            }
            if (item.expanded) {
                collapsedItems.push(item);
            }
            item.expanded = false;
            if (item.children) {
                collapsedItems.push(...this.collapseItems(item.children));
            }
        }
        return collapsedItems;
    }
    applyDefaults(item, defaultItem) {
        const menuItem = Object.assign({}, item);
        Object.assign(item, defaultItem, menuItem);
        item.children && item.children.forEach(child => {
            this.applyDefaults(child, defaultItem);
        });
    }
    setParent(item) {
        item.children && item.children.forEach(child => {
            child.parent = item;
            this.setParent(child);
        });
    }
    /**
     * Find deepest item which link matches current URL path.
     * @param items array of items to search in.
     * @returns found item of undefined.
     */
    findItemByUrl(items) {
        let selectedItem;
        items.some(item => {
            if (item.children) {
                selectedItem = this.findItemByUrl(item.children);
            }
            if (!selectedItem && this.isSelectedInUrl(item)) {
                selectedItem = item;
            }
            return selectedItem;
        });
        return selectedItem;
    }
    isSelectedInUrl(item) {
        const exact = item.pathMatch === 'full';
        const link = item.link;
        const isSelectedInPath = exact
            ? isUrlPathEqual(this.location.path(), link)
            : isUrlPathContain(this.location.path(), link);
        if (isSelectedInPath && item.fragment != null) {
            return exact
                ? isFragmentEqual(this.location.path(true), item.fragment)
                : isFragmentContain(this.location.path(true), item.fragment);
        }
        return isSelectedInPath;
    }
}
NbMenuInternalService.decorators = [
    { type: Injectable }
];
NbMenuInternalService.ctorParameters = () => [
    { type: Location }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbToggleStates;
(function (NbToggleStates) {
    NbToggleStates["Expanded"] = "expanded";
    NbToggleStates["Collapsed"] = "collapsed";
})(NbToggleStates || (NbToggleStates = {}));
class NbMenuItemComponent {
    constructor(menuService, directionService) {
        this.menuService = menuService;
        this.directionService = directionService;
        this.menuItem = null;
        this.hoverItem = new EventEmitter();
        this.toggleSubMenu = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.destroy$ = new Subject();
    }
    ngDoCheck() {
        this.toggleState = this.menuItem.expanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
    }
    ngAfterViewInit() {
        this.menuService.onSubmenuToggle()
            .pipe(filter(({ item }) => item === this.menuItem), map(({ item }) => item.expanded), takeUntil(this.destroy$))
            .subscribe(isExpanded => this.toggleState = isExpanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onToggleSubMenu(item) {
        this.toggleSubMenu.emit(item);
    }
    onHoverItem(item) {
        this.hoverItem.emit(item);
    }
    onSelectItem(item) {
        this.selectItem.emit(item);
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    getExpandStateIcon() {
        if (this.menuItem.expanded) {
            return 'chevron-down-outline';
        }
        return this.directionService.isLtr()
            ? 'chevron-left-outline'
            : 'chevron-right-outline';
    }
}
NbMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[nbMenuItem]',
                template: "<span *ngIf=\"menuItem.group\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  {{ menuItem.title }}\n</span>\n<a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\"\n   [routerLink]=\"menuItem.link\"\n   [queryParams]=\"menuItem.queryParams\"\n   [fragment]=\"menuItem.fragment\"\n   [queryParamsHandling]=\"menuItem.queryParamsHandling\"\n   [preserveFragment]=\"menuItem.preserveFragment\"\n   [skipLocationChange]=\"menuItem.skipLocationChange\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\"\n   [attr.href]=\"menuItem.url\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"onSelectItem(menuItem)\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   (click)=\"$event.preventDefault(); onItemClick(menuItem);\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n</a>\n<a *ngIf=\"menuItem.children\"\n   (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\"\n   [attr.target]=\"menuItem.target\"\n   [attr.title]=\"menuItem.title\"\n   [class.active]=\"menuItem.selected\"\n   (mouseenter)=\"onHoverItem(menuItem)\"\n   href=\"#\">\n  <nb-icon class=\"menu-icon\" [config]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon>\n  <span class=\"menu-title\">{{ menuItem.title }}</span>\n  <ng-container *ngIf=\"badge\" [ngTemplateOutlet]=\"badgeTemplate\"></ng-container>\n  <nb-icon class=\"expand-state\" [icon]=\"getExpandStateIcon()\" pack=\"nebular-essentials\"></nb-icon>\n</a>\n<ul *ngIf=\"menuItem.children\"\n    [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\"\n    [class.expanded]=\"menuItem.expanded\"\n    [@toggle]=\"toggleState\"\n    class=\"menu-items\">\n  <ng-container *ngFor=\"let item of menuItem.children\">\n    <li nbMenuItem *ngIf=\"!item.hidden\"\n        [menuItem]=\"item\"\n        [badge]=\"item.badge\"\n        [class.menu-group]=\"item.group\"\n        (hoverItem)=\"onHoverItem($event)\"\n        (toggleSubMenu)=\"onToggleSubMenu($event)\"\n        (selectItem)=\"onSelectItem($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        class=\"menu-item\">\n    </li>\n  </ng-container>\n</ul>\n\n<ng-template #badgeTemplate>\n  <nb-badge [text]=\"badge.text\" [dotMode]=\"badge.dotMode\" [status]=\"badge.status\">\n  </nb-badge>\n</ng-template>\n",
                animations: [
                    trigger('toggle', [
                        state(NbToggleStates.Collapsed, style({ height: '0', margin: '0' })),
                        state(NbToggleStates.Expanded, style({ height: '*' })),
                        transition(`${NbToggleStates.Collapsed} <=> ${NbToggleStates.Expanded}`, animate(300)),
                    ]),
                ]
            },] }
];
NbMenuItemComponent.ctorParameters = () => [
    { type: NbMenuService },
    { type: NbLayoutDirectionService }
];
NbMenuItemComponent.propDecorators = {
    menuItem: [{ type: Input }],
    badge: [{ type: Input }],
    hoverItem: [{ type: Output }],
    toggleSubMenu: [{ type: Output }],
    selectItem: [{ type: Output }],
    itemClick: [{ type: Output }]
};
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 * Menu badge
 * @stacked-example(Menu item badge, menu/menu-badge.component)
 *
 * @styles
 *
 * menu-background-color:
 * menu-text-color:
 * menu-text-font-family:
 * menu-text-font-size:
 * menu-text-font-weight:
 * menu-text-line-height:
 * menu-group-text-color:
 * menu-item-border-radius:
 * menu-item-padding:
 * menu-item-hover-background-color:
 * menu-item-hover-cursor:
 * menu-item-hover-text-color:
 * menu-item-icon-hover-color:
 * menu-item-active-background-color:
 * menu-item-active-text-color:
 * menu-item-icon-active-color:
 * menu-item-icon-color:
 * menu-item-icon-margin:
 * menu-item-icon-width:
 * menu-item-divider-color:
 * menu-item-divider-style:
 * menu-item-divider-width:
 * menu-submenu-background-color:
 * menu-submenu-text-color:
 * menu-submenu-margin:
 * menu-submenu-padding:
 * menu-submenu-item-border-color:
 * menu-submenu-item-border-style:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-hover-background-color:
 * menu-submenu-item-hover-border-color:
 * menu-submenu-item-hover-text-color:
 * menu-submenu-item-icon-hover-color:
 * menu-submenu-item-active-background-color:
 * menu-submenu-item-active-border-color:
 * menu-submenu-item-active-text-color:
 * menu-submenu-item-icon-active-color:
 * menu-submenu-item-active-hover-background-color:
 * menu-submenu-item-active-hover-border-color:
 * menu-submenu-item-active-hover-text-color:
 * menu-submenu-item-icon-active-hover-color:
 */
class NbMenuComponent {
    constructor(window, platformId, menuInternalService, router) {
        this.window = window;
        this.platformId = platformId;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this._autoCollapse = false;
        this.destroy$ = new Subject();
    }
    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    get autoCollapse() {
        return this._autoCollapse;
    }
    set autoCollapse(value) {
        this._autoCollapse = convertToBoolProperty(value);
    }
    ngOnInit() {
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService
            .onAddItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(data => this.onAddItem(data));
        this.menuInternalService
            .onNavigateHome()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.navigateHome());
        this.menuInternalService
            .onGetSelectedItem()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe((data) => {
            data.listener.next({ tag: this.tag, item: this.getSelectedItem(this.items) });
        });
        this.menuInternalService
            .onCollapseAll()
            .pipe(filter((data) => this.compareTag(data.tag)), takeUntil(this.destroy$))
            .subscribe(() => this.collapseAll());
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse));
    }
    onAddItem(data) {
        this.items.push(...data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
    }
    onHoverItem(item) {
        this.menuInternalService.itemHover(item, this.tag);
    }
    onToggleSubMenu(item) {
        if (this.autoCollapse) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    }
    // TODO: is not fired on page reload
    onSelectItem(item) {
        this.menuInternalService.selectItem(item, this.items, this.autoCollapse, this.tag);
    }
    onItemClick(item) {
        this.menuInternalService.itemClick(item, this.tag);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigateHome() {
        const homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                const extras = {
                    queryParams: homeItem.queryParams,
                    queryParamsHandling: homeItem.queryParamsHandling,
                    fragment: homeItem.fragment,
                    preserveFragment: homeItem.preserveFragment,
                };
                this.router.navigate([homeItem.link], extras);
            }
            if (homeItem.url && isPlatformBrowser(this.platformId)) {
                this.window.location.href = homeItem.url;
            }
        }
    }
    collapseAll() {
        this.menuInternalService.collapseAll(this.items, this.tag);
    }
    getHomeItem(items) {
        for (const item of items) {
            if (item.home) {
                return item;
            }
            const homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
    }
    compareTag(tag) {
        return !tag || tag === this.tag;
    }
    getSelectedItem(items) {
        let selected = null;
        items.forEach((item) => {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = this.getSelectedItem(item.children);
            }
        });
        return selected;
    }
}
NbMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-menu',
                template: `
    <ul class="menu-items">
      <ng-container *ngFor="let item of items">
        <li nbMenuItem *ngIf="!item.hidden"
            [menuItem]="item"
            [badge]="item.badge"
            [class.menu-group]="item.group"
            (hoverItem)="onHoverItem($event)"
            (toggleSubMenu)="onToggleSubMenu($event)"
            (selectItem)="onSelectItem($event)"
            (itemClick)="onItemClick($event)"
            class="menu-item">
        </li>
      </ng-container>
    </ul>
  `,
                styles: [":host ::ng-deep{display:block}:host ::ng-deep .menu-items,:host ::ng-deep .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host ::ng-deep .menu-item a{display:flex;text-decoration:none;align-items:center}:host ::ng-deep .menu-item a .menu-title{flex:1 0 auto}[dir=rtl] :host ::ng-deep .menu-item a .menu-title{text-align:right}:host ::ng-deep .menu-item nb-badge{position:static}:host ::ng-deep .menu-group span{display:flex}\n"]
            },] }
];
NbMenuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NbMenuInternalService },
    { type: Router }
];
NbMenuComponent.propDecorators = {
    tag: [{ type: Input }],
    items: [{ type: Input }],
    autoCollapse: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-border-radius:
 * badge-text-font-family:
 * badge-text-font-size:
 * badge-text-font-weight:
 * badge-text-line-height:
 * badge-padding:
 * badge-basic-background-color:
 * badge-basic-text-color:
 * badge-primary-background-color:
 * badge-primary-text-color:
 * badge-success-background-color:
 * badge-success-text-color:
 * badge-info-background-color:
 * badge-info-text-color:
 * badge-warning-background-color:
 * badge-warning-text-color:
 * badge-danger-background-color:
 * badge-danger-text-color:
 * badge-control-background-color:
 * badge-control-text-color:
 */
class NbBadgeComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Text to display
         * @type string
         */
        this.text = '';
        this._defaultPosition = 'top right';
        this._position = this._defaultPosition;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         */
        this.status = 'basic';
    }
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value || this._defaultPosition;
    }
    /**
     * Shows badge as a dot. No text is shown.
     * @type boolean
     */
    get dotMode() {
        return this._dotMode;
    }
    set dotMode(value) {
        this._dotMode = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get top() {
        return this.position.includes('top');
    }
    get right() {
        return this.position.includes('right');
    }
    get bottom() {
        return this.position.includes('bottom');
    }
    get left() {
        return this.position.includes('left');
    }
    get start() {
        return this.position.includes('start');
    }
    get end() {
        return this.position.includes('end');
    }
    get center() {
        return this.position.includes('center');
    }
}
NbBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-badge',
                template: `{{dotMode ? '' : text}}`,
                styles: [":host{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}:host(.position-top){top:0}:host(.position-right){right:0}:host(.position-bottom){bottom:0}:host(.position-left){left:0}:host(.position-center){top:50%;transform:translateY(-50%)}[dir=ltr] :host(.position-start){left:0}[dir=rtl] :host(.position-start){right:0}[dir=ltr] :host(.position-end){right:0}[dir=rtl] :host(.position-end){left:0}\n"]
            },] }
];
NbBadgeComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbBadgeComponent.propDecorators = {
    text: [{ type: Input }],
    position: [{ type: Input }],
    dotMode: [{ type: Input }, { type: HostBinding, args: ['class.dot-mode',] }],
    status: [{ type: Input }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    top: [{ type: HostBinding, args: ['class.position-top',] }],
    right: [{ type: HostBinding, args: ['class.position-right',] }],
    bottom: [{ type: HostBinding, args: ['class.position-bottom',] }],
    left: [{ type: HostBinding, args: ['class.position-left',] }],
    start: [{ type: HostBinding, args: ['class.position-start',] }],
    end: [{ type: HostBinding, args: ['class.position-end',] }],
    center: [{ type: HostBinding, args: ['class.position-center',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbBadgeModule {
}
NbBadgeModule.decorators = [
    { type: NgModule, args: [{
                exports: [NbBadgeComponent],
                declarations: [NbBadgeComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
const NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
class NbMenuModule {
    static forRoot() {
        return {
            ngModule: NbMenuModule,
            providers: [
                ...NB_MENU_PROVIDERS,
            ],
        };
    }
}
NbMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                    NbBadgeModule,
                ],
                declarations: [...nbMenuComponents],
                exports: [...nbMenuComponents],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'home',
 *    responsive: true, // hide title before `route-tabs-icon-only-max-width` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabset-background-color:
 * route-tabset-border-radius:
 * route-tabset-shadow:
 * route-tabset-tab-background-color:
 * route-tabset-tab-padding:
 * route-tabset-tab-text-color:
 * route-tabset-tab-text-font-family:
 * route-tabset-tab-text-font-size:
 * route-tabset-tab-text-font-weight:
 * route-tabset-tab-text-line-height:
 * route-tabset-tab-text-transform:
 * route-tabset-tab-underline-width:
 * route-tabset-tab-underline-color:
 * route-tabset-tab-active-background-color:
 * route-tabset-tab-active-text-color:
 * route-tabset-tab-active-underline-color:
 * route-tabset-tab-focus-background-color:
 * route-tabset-tab-focus-text-color:
 * route-tabset-tab-focus-underline-color:
 * route-tabset-tab-hover-background-color:
 * route-tabset-tab-hover-text-color:
 * route-tabset-tab-hover-underline-color:
 * route-tabset-tab-disabled-background-color:
 * route-tabset-tab-disabled-text-color:
 * route-tabset-tab-disabled-underline-color:
 * route-tabset-divider-color:
 * route-tabset-divider-style:
 * route-tabset-divider-width:
 * route-tabset-scrollbar-color:
 * route-tabset-scrollbar-background-color:
 * route-tabset-scrollbar-width:
 * route-tabset-tab-text-hide-breakpoint:
 */
class NbRouteTabsetComponent {
    constructor() {
        this.fullWidthValue = false;
        /**
         * Options passed to `routerLinkActiveOptions` directive which set on tab links.
         * `{ exact: true }` by default.
         */
        this.activeLinkOptions = { exact: true };
        /**
         * Emits when tab is selected
         * @type {EventEmitter<any>}
         */
        this.changeTab = new EventEmitter();
    }
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val) {
        this.fullWidthValue = convertToBoolProperty(val);
    }
    selectTab(tab) {
        this.changeTab.emit(tab);
    }
}
NbRouteTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-route-tabset',
                template: `
    <ul class="route-tabset">
      <ng-container *ngFor="let tab of tabs">
        <li *ngIf="tab.disabled; else enabled"
            [class.responsive]="tab.responsive"
            class="route-tab disabled"
            tabindex="-1">
          <a tabindex="-1" class="tab-link">
            <nb-icon *ngIf="tab.icon" [config]="tab.icon"></nb-icon>
            <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
          </a>
        </li>

        <ng-template #enabled>
          <li (click)="$event.preventDefault(); selectTab(tab)"
              [routerLink]="tab.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="activeLinkOptions"
              [class.responsive]="tab.responsive"
              [queryParams]="tab.queryParams"
              [queryParamsHandling]="tab.queryParamsHandling"
              [fragment]="tab.fragment"
              [preserveFragment]="tab.preserveFragment"
              [skipLocationChange]="tab.skipLocationChange"
              [replaceUrl]="tab.replaceUrl"
              [state]="tab.state"
              tabindex="0"
              class="route-tab">
            <a tabindex="-1" class="tab-link">
              <nb-icon *ngIf="tab.icon" [icon]="tab.icon"></nb-icon>
              <span *ngIf="tab.title" class="tab-text">{{ tab.title }}</span>
            </a>
          </li>
        </ng-template>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `,
                styles: [".route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}.route-tabset .route-tab{margin-bottom:-1px;text-align:center;padding:0}.route-tabset .route-tab.active a::before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a::before{position:absolute;content:'';width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tab-link nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tab-link nb-icon+span{margin-right:.5rem}:host(.full-width) .route-tabset{justify-content:space-around}\n"]
            },] }
];
NbRouteTabsetComponent.propDecorators = {
    fullWidthValue: [{ type: HostBinding, args: ['class.full-width',] }],
    tabs: [{ type: Input }],
    activeLinkOptions: [{ type: Input }],
    fullWidth: [{ type: Input }],
    changeTab: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRouteTabsetModule {
}
NbRouteTabsetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                ],
                declarations: [
                    NbRouteTabsetComponent,
                ],
                exports: [
                    NbRouteTabsetComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const getSidebarState$ = new Subject();
const getSidebarResponsiveState$ = new Subject();
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
class NbSidebarService {
    constructor() {
        this.toggle$ = new Subject();
        this.expand$ = new Subject();
        this.collapse$ = new Subject();
        this.compact$ = new Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    onToggle() {
        return this.toggle$.pipe(share());
    }
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    onExpand() {
        return this.expand$.pipe(share());
    }
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    onCollapse() {
        return this.collapse$.pipe(share());
    }
    /**
     * Subscribe to compact evens
     * @returns Observable<{ tag: string }>
     */
    onCompact() {
        return this.compact$.pipe(share());
    }
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    toggle(compact = false, tag) {
        this.toggle$.next({ compact, tag });
    }
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    expand(tag) {
        this.expand$.next({ tag });
    }
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    collapse(tag) {
        this.collapse$.next({ tag });
    }
    /**
     * Makes sidebar compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    compact(tag) {
        this.compact$.next({ tag });
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar state you need
     */
    getSidebarState(tag) {
        const observer = new ReplaySubject(1);
        getSidebarState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
    /**
     * Returns sidebar state observable which emits once
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar responsive state you need
     */
    getSidebarResponsiveState(tag) {
        const observer = new ReplaySubject();
        getSidebarResponsiveState$.next({ observer, tag });
        return observer.pipe(publish(), refCount());
    }
}
NbSidebarService.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
class NbSidebarHeaderComponent {
}
NbSidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-sidebar-header',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
class NbSidebarFooterComponent {
}
NbSidebarFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-sidebar-footer',
                template: `
    <ng-content></ng-content>
  `
            },] }
];
/**
 * Layout sidebar component.
 *
 * @stacked-example(Showcase, sidebar/sidebar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSidebarModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbSidebarModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSidebarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start/end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Compacted sidebar example:
 * @stacked-example(Compacted Sidebar, sidebar/sidebar-compacted.component)
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * In a pair with header it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * @additional-example(Right Sidebar, sidebar/sidebar-right.component)
 * @additional-example(Fixed Sidebar, sidebar/sidebar-fixed.component)
 *
 * @styles
 *
 * sidebar-background-color:
 * sidebar-text-color:
 * sidebar-text-font-family:
 * sidebar-text-font-size:
 * sidebar-text-font-weight:
 * sidebar-text-line-height:
 * sidebar-height:
 * sidebar-width:
 * sidebar-width-compact:
 * sidebar-padding:
 * sidebar-header-height:
 * sidebar-footer-height:
 * sidebar-shadow:
 * sidebar-menu-item-highlight-color:
 * sidebar-scrollbar-background-color:
 * sidebar-scrollbar-color:
 * sidebar-scrollbar-width:
 */
class NbSidebarComponent {
    constructor(sidebarService, themeService, element, cd) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.cd = cd;
        this.responsiveValueChange$ = new Subject();
        this.responsiveState = 'pc';
        this.destroy$ = new Subject();
        this.containerFixedValue = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
        this._state = 'expanded';
        this._responsive = false;
        // TODO: get width by the key and define only max width for the tablets and mobiles
        /**
         * Controls on which screen sizes sidebar should be switched to compacted state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
         *
         * @type string[]
         */
        this.compactedBreakpoints = ['xs', 'is', 'sm', 'md', 'lg'];
        /**
         * Controls on which screen sizes sidebar should be switched to collapsed state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is']`.
         *
         * @type string[]
         */
        this.collapsedBreakpoints = ['xs', 'is'];
        /**
         * Emits whenever sidebar state change.
         */
        this.stateChange = new EventEmitter();
        /**
         * Emits whenever sidebar responsive state change.
         */
        this.responsiveStateChange = new EventEmitter();
    }
    get expanded() {
        return this.state === 'expanded';
    }
    get collapsed() {
        return this.state === 'collapsed';
    }
    get compacted() {
        return this.state === 'compacted';
    }
    /**
     * Places sidebar on the right side
     * @type {boolean}
     */
    set right(val) {
        this.rightValue = convertToBoolProperty(val);
        this.leftValue = !this.rightValue;
        this.startValue = false;
        this.endValue = false;
    }
    /**
     * Places sidebar on the left side
     * @type {boolean}
     */
    set left(val) {
        this.leftValue = convertToBoolProperty(val);
        this.rightValue = !this.leftValue;
        this.startValue = false;
        this.endValue = false;
    }
    /**
     * Places sidebar on the start edge of layout
     * @type {boolean}
     */
    set start(val) {
        this.startValue = convertToBoolProperty(val);
        this.endValue = !this.startValue;
        this.leftValue = false;
        this.rightValue = false;
    }
    /**
     * Places sidebar on the end edge of layout
     * @type {boolean}
     */
    set end(val) {
        this.endValue = convertToBoolProperty(val);
        this.startValue = !this.endValue;
        this.leftValue = false;
        this.rightValue = false;
    }
    /**
     * Makes sidebar fixed (shown above the layout content)
     * @type {boolean}
     */
    set fixed(val) {
        this.fixedValue = convertToBoolProperty(val);
    }
    /**
     * Makes sidebar container fixed
     * @type {boolean}
     */
    set containerFixed(val) {
        this.containerFixedValue = convertToBoolProperty(val);
    }
    /**
     * Initial sidebar state, `expanded`|`collapsed`|`compacted`
     * @type {string}
     */
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    get responsive() {
        return this._responsive;
    }
    set responsive(value) {
        if (this.responsive !== convertToBoolProperty(value)) {
            this._responsive = !this.responsive;
            this.responsiveValueChange$.next(this.responsive);
        }
    }
    ngOnInit() {
        this.sidebarService.onToggle()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ compact }) => this.toggle(compact));
        this.sidebarService.onExpand()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.expand());
        this.sidebarService.onCollapse()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.collapse());
        this.sidebarService.onCompact()
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(() => this.compact());
        getSidebarState$
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ observer }) => observer.next(this.state));
        getSidebarResponsiveState$
            .pipe(filter(({ tag }) => !this.tag || this.tag === tag), takeUntil(this.destroy$))
            .subscribe(({ observer }) => observer.next(this.responsiveState));
        this.responsiveValueChange$
            .pipe(filter((responsive) => !responsive), takeUntil(this.destroy$))
            .subscribe(() => this.expand());
        this.subscribeToMediaQueryChange();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    onClick(event) {
        const menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            const link = this.getMenuLink(event.target);
            if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('menu-items')) {
                this.sidebarService.expand(this.tag);
            }
        }
    }
    /**
     * Collapses the sidebar
     */
    collapse() {
        this.updateState('collapsed');
    }
    /**
     * Expands the sidebar
     */
    expand() {
        this.updateState('expanded');
    }
    /**
     * Compacts the sidebar (minimizes)
     */
    compact() {
        this.updateState('compacted');
    }
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * Toggle sidebar state
     *
     * ```ts
     * this.sidebar.toggle(true);
     * ```
     */
    toggle(compact = false) {
        if (this.responsive) {
            if (this.responsiveState === 'mobile') {
                compact = false;
            }
        }
        if (this.state === 'compacted' || this.state === 'collapsed') {
            this.updateState('expanded');
        }
        else {
            this.updateState(compact ? 'compacted' : 'collapsed');
        }
    }
    subscribeToMediaQueryChange() {
        combineLatest([
            this.responsiveValueChange$.pipe(startWith(this.responsive)),
            this.themeService.onMediaQueryChange(),
        ])
            .pipe(filter(([responsive]) => responsive), map(([, breakpoints]) => breakpoints), takeUntil(this.destroy$))
            .subscribe(([prev, current]) => {
            const isCollapsed = this.collapsedBreakpoints.includes(current.name);
            const isCompacted = this.compactedBreakpoints.includes(current.name);
            let newResponsiveState;
            if (isCompacted) {
                this.fixed = this.containerFixedValue;
                this.compact();
                newResponsiveState = 'tablet';
            }
            if (isCollapsed) {
                this.fixed = true;
                this.collapse();
                newResponsiveState = 'mobile';
            }
            if (!isCollapsed && !isCompacted && (!prev.width || prev.width < current.width)) {
                this.expand();
                this.fixed = false;
                newResponsiveState = 'pc';
            }
            if (newResponsiveState && newResponsiveState !== this.responsiveState) {
                this.responsiveState = newResponsiveState;
                this.responsiveStateChange.emit(this.responsiveState);
                this.cd.markForCheck();
            }
        });
    }
    getMenuLink(element) {
        if (!element || element.tagName.toLowerCase() === 'nb-menu') {
            return;
        }
        if (element.tagName.toLowerCase() === 'a') {
            return element;
        }
        return this.getMenuLink(element.parentElement);
    }
    updateState(state$$1) {
        if (this.state !== state$$1) {
            this.state = state$$1;
            this.stateChange.emit(this.state);
            this.cd.markForCheck();
        }
    }
    /**
     * @deprecated Use `responsive` property instead
     * @breaking-change Remove @8.0.0
     */
    toggleResponsive(enabled) {
        this.responsive = enabled;
    }
}
/**
 * @deprecated Use NbSidebarState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.STATE_EXPANDED = 'expanded';
/**
 * @deprecated Use NbSidebarState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
/**
 * @deprecated Use NbSidebarState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.STATE_COMPACTED = 'compacted';
/**
 * @deprecated Use NbSidebarResponsiveState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
/**
 * @deprecated Use NbSidebarResponsiveState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
/**
 * @deprecated Use NbSidebarResponsiveState type instead
 * @breaking-change Remove @8.0.0
 */
NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
NbSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-sidebar',
                template: `
    <div class="main-container"
         [class.main-container-fixed]="containerFixedValue">
      <ng-content select="nb-sidebar-header"></ng-content>
      <div class="scrollable" (click)="onClick($event)">
        <ng-content></ng-content>
      </div>
      <ng-content select="nb-sidebar-footer"></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start{right:0}[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host ::ng-deep nb-sidebar-footer{margin-top:auto;display:block}:host ::ng-deep nb-sidebar-header{display:block}\n"]
            },] }
];
NbSidebarComponent.ctorParameters = () => [
    { type: NbSidebarService },
    { type: NbThemeService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NbSidebarComponent.propDecorators = {
    fixedValue: [{ type: HostBinding, args: ['class.fixed',] }],
    rightValue: [{ type: HostBinding, args: ['class.right',] }],
    leftValue: [{ type: HostBinding, args: ['class.left',] }],
    startValue: [{ type: HostBinding, args: ['class.start',] }],
    endValue: [{ type: HostBinding, args: ['class.end',] }],
    expanded: [{ type: HostBinding, args: ['class.expanded',] }],
    collapsed: [{ type: HostBinding, args: ['class.collapsed',] }],
    compacted: [{ type: HostBinding, args: ['class.compacted',] }],
    right: [{ type: Input }],
    left: [{ type: Input }],
    start: [{ type: Input }],
    end: [{ type: Input }],
    fixed: [{ type: Input }],
    containerFixed: [{ type: Input }],
    state: [{ type: Input }],
    responsive: [{ type: Input }],
    tag: [{ type: Input }],
    compactedBreakpoints: [{ type: Input }],
    collapsedBreakpoints: [{ type: Input }],
    stateChange: [{ type: Output }],
    responsiveStateChange: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
const NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
class NbSidebarModule {
    static forRoot() {
        return {
            ngModule: NbSidebarModule,
            providers: [
                ...NB_SIDEBAR_PROVIDERS,
            ],
        };
    }
}
NbSidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    ...NB_SIDEBAR_COMPONENTS,
                ],
                exports: [
                    ...NB_SIDEBAR_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Specific tab container.
 *
 * ```ts
 * <nb-tab tabTitle="Users"
 *   badgeText="99+"
 *   badgeStatus="danger">
 *   <p>List of <strong>users</strong>.</p>
 * </nb-tab>
 ```
 */
class NbTabComponent {
    constructor() {
        this.activeValue = false;
        this.responsiveValue = false;
        this.disabledValue = false;
        /**
         * Badge status (adds specific styles):
         * 'primary', 'info', 'success', 'warning', 'danger'
         * @param {string} val
         */
        this.badgeStatus = 'basic';
        this.init = false;
    }
    /**
     * Use badge dot mode
     * @type {boolean}
     */
    get badgeDot() {
        return this._badgeDot;
    }
    set badgeDot(val) {
        this._badgeDot = convertToBoolProperty(val);
    }
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled() {
        return this.disabledValue;
    }
    set disabled(val) {
        this.disabledValue = convertToBoolProperty(val);
    }
    /**
     * Show only icons when width is smaller than `tabs-icon-only-max-width`
     * @type {boolean}
     */
    set responsive(val) {
        this.responsiveValue = convertToBoolProperty(val);
    }
    get responsive() {
        return this.responsiveValue;
    }
    /**
     * Specifies active tab
     * @returns {boolean}
     */
    get active() {
        return this.activeValue;
    }
    set active(val) {
        this.activeValue = convertToBoolProperty(val);
        if (this.activeValue) {
            this.init = true;
        }
    }
    /**
     * Lazy load content before tab selection
     * TODO: rename, as lazy is by default, and this is more `instant load`
     * @param {boolean} val
     */
    set lazyLoad(val) {
        this.init = convertToBoolProperty(val);
    }
}
NbTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tab',
                template: `
    <ng-container *ngIf="init">
      <ng-content></ng-content>
    </ng-container>
  `
            },] }
];
NbTabComponent.propDecorators = {
    tabTitle: [{ type: Input }],
    tabId: [{ type: Input }],
    badgeDot: [{ type: Input }],
    tabIcon: [{ type: Input }],
    disabled: [{ type: Input, args: ['disabled',] }, { type: HostBinding, args: ['class.disabled',] }],
    responsive: [{ type: Input }],
    route: [{ type: Input }],
    activeValue: [{ type: HostBinding, args: ['class.content-active',] }],
    active: [{ type: Input }],
    lazyLoad: [{ type: Input }],
    badgeText: [{ type: Input }],
    badgeStatus: [{ type: Input }],
    badgePosition: [{ type: Input }]
};
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
/**
 *
 * Dynamic tabset component.
 * @stacked-example(Showcase, tabset/tabset-showcase.component)
 *
 * Basic tabset example
 *
 * ```html
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 * ```
 *
 * ### Installation
 *
 * Import `NbTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * It is also possible to set a badge to a particular tab:
 * @stacked-example(Tab With Badge, tabset/tabset-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, tabset/tabset-width.component)
 *
 * `tabIcon` should be used to add an icon to the tab. Icon can also be combined with title.
 * `responsive` tab property if set allows you to hide the title on smaller screens
 * (`tabs-icon-only-max-width` property) for better responsive behaviour. You can open the following example and make
 * your screen smaller - titles will be hidden in the last tabset in the list:
 *
 * @stacked-example(Icon, tabset/tabset-icon.component)
 *
 * It is also possible to disable a tab using `disabled` property:
 * @stacked-example(Disabled Tab, tabset/tabset-disabled.component)
 *
 * @styles
 *
 * tabset-background-color:
 * tabset-border-radius:
 * tabset-shadow:
 * tabset-tab-background-color:
 * tabset-tab-padding:
 * tabset-tab-text-color:
 * tabset-tab-text-font-family:
 * tabset-tab-text-font-size:
 * tabset-tab-text-font-weight:
 * tabset-tab-text-line-height:
 * tabset-tab-text-transform:
 * tabset-tab-underline-width:
 * tabset-tab-underline-color:
 * tabset-tab-active-background-color:
 * tabset-tab-active-text-color:
 * tabset-tab-active-underline-color:
 * tabset-tab-focus-background-color:
 * tabset-tab-focus-text-color:
 * tabset-tab-focus-underline-color:
 * tabset-tab-hover-background-color:
 * tabset-tab-hover-text-color:
 * tabset-tab-hover-underline-color:
 * tabset-tab-disabled-background-color:
 * tabset-tab-disabled-text-color:
 * tabset-tab-disabled-underline-color:
 * tabset-divider-color:
 * tabset-divider-style:
 * tabset-divider-width:
 * tabset-content-background-color:
 * tabset-content-padding:
 * tabset-content-text-color:
 * tabset-content-text-font-family:
 * tabset-content-text-font-size:
 * tabset-content-text-font-weight:
 * tabset-content-text-line-height:
 * tabset-scrollbar-color:
 * tabset-scrollbar-background-color:
 * tabset-scrollbar-width:
 * tabset-tab-text-hide-breakpoint:
 */
class NbTabsetComponent {
    constructor(route, changeDetectorRef) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type EventEmitter<any>
         */
        this.changeTab = new EventEmitter();
    }
    /**
     * Take full width of a parent
     * @param {boolean} val
     */
    set fullWidth(val) {
        this.fullWidthValue = convertToBoolProperty(val);
    }
    // TODO: refactoring this component, avoid change detection loop
    ngAfterContentInit() {
        this.route.params
            .pipe(map((params) => this.tabs.find((tab) => this.routeParam ? tab.route === params[this.routeParam] : tab.active)), delay(0), map((tab) => tab || this.tabs.first), filter((tab) => !!tab))
            .subscribe((tabToSelect) => {
            this.selectTab(tabToSelect);
            this.changeDetectorRef.markForCheck();
        });
    }
    // TODO: navigate to routeParam
    selectTab(selectedTab) {
        if (!selectedTab.disabled) {
            this.tabs.forEach(tab => tab.active = tab === selectedTab);
            this.changeTab.emit(selectedTab);
        }
    }
}
NbTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tabset',
                template: `
    <ul class="tabset">
      <li *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          (keyup.space)="selectTab(tab)"
          (keyup.enter)="selectTab(tab)"
          [class.responsive]="tab.responsive"
          [class.active]="tab.active"
          [class.disabled]="tab.disabled"
          [attr.tabindex]="tab.disabled ? -1 : 0"
          [attr.data-tab-id]="tab.tabId"
          class="tab">
        <a href (click)="$event.preventDefault()" tabindex="-1" class="tab-link">
          <nb-icon *ngIf="tab.tabIcon" [config]="tab.tabIcon"></nb-icon>
          <span *ngIf="tab.tabTitle" class="tab-text">{{ tab.tabTitle }}</span>
        </a>
        <nb-badge *ngIf="tab.badgeText || tab.badgeDot"
          [text]="tab.badgeText"
          [dotMode]="tab.badgeDot"
          [status]="tab.badgeStatus"
          [position]="tab.badgePosition">
        </nb-badge>
      </li>
    </ul>
    <ng-content select="nb-tab"></ng-content>
  `,
                styles: [":host{display:block}:host.full-width .tabset{justify-content:space-around}:host ::ng-deep nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host ::ng-deep nb-tab.content-active{display:block}:host .tabset{display:flex;flex-direction:row;list-style-type:none;margin:0;padding:0}:host .tabset .tab{margin-bottom:-1px;text-align:center;position:relative}:host .tabset .tab.active a::before{display:block}:host .tabset .tab a{display:flex;position:relative;text-decoration:none}:host .tabset .tab a::before{position:absolute;content:'';width:100%;border-radius:3px;bottom:-2px;left:0}:host .tabset .tab a nb-icon{vertical-align:middle}[dir=ltr] :host .tabset .tab a nb-icon+span{margin-left:.5rem}[dir=rtl] :host .tabset .tab a nb-icon+span{margin-right:.5rem}\n"]
            },] }
];
NbTabsetComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: ChangeDetectorRef }
];
NbTabsetComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [NbTabComponent,] }],
    fullWidthValue: [{ type: HostBinding, args: ['class.full-width',] }],
    fullWidth: [{ type: Input }],
    routeParam: [{ type: Input }],
    changeTab: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
class NbTabsetModule {
}
NbTabsetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbBadgeModule,
                    NbIconModule,
                ],
                declarations: [
                    ...NB_TABSET_COMPONENTS,
                ],
                exports: [
                    ...NB_TABSET_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 * Component shape could be controlled with `shape` input.
 * @stacked-example(Shapes, user/user-shape.component)
 *
 * @styles
 *
 * user-picture-box-background-color:
 * user-picture-box-border-color:
 * user-picture-box-border-width:
 * user-initials-text-color:
 * user-initials-text-font-family:
 * user-initials-text-font-weight:
 * user-name-text-color:
 * user-name-text-font-family:
 * user-name-text-font-weight:
 * user-title-text-color:
 * user-title-text-font-family:
 * user-title-text-font-weight:
 * user-rectangle-border-radius:
 * user-semi-round-border-radius:
 * user-round-border-radius:
 * user-tiny-height:
 * user-tiny-width:
 * user-tiny-initials-text-font-size:
 * user-tiny-initials-text-line-height:
 * user-tiny-name-text-font-size:
 * user-tiny-name-text-line-height:
 * user-tiny-title-text-font-size:
 * user-tiny-title-text-line-height:
 * user-small-height:
 * user-small-width:
 * user-small-initials-text-font-size:
 * user-small-initials-text-line-height:
 * user-small-name-text-font-size:
 * user-small-name-text-line-height:
 * user-small-title-text-font-size:
 * user-small-title-text-line-height:
 * user-medium-height:
 * user-medium-width:
 * user-medium-initials-text-font-size:
 * user-medium-initials-text-line-height:
 * user-medium-name-text-font-size:
 * user-medium-name-text-line-height:
 * user-medium-title-text-font-size:
 * user-medium-title-text-line-height:
 * user-large-height:
 * user-large-width:
 * user-large-initials-text-font-size:
 * user-large-initials-text-line-height:
 * user-large-name-text-font-size:
 * user-large-name-text-line-height:
 * user-large-title-text-font-size:
 * user-large-title-text-line-height:
 * user-giant-height:
 * user-giant-width:
 * user-giant-initials-text-font-size:
 * user-giant-initials-text-line-height:
 * user-giant-name-text-font-size:
 * user-giant-name-text-line-height:
 * user-giant-title-text-font-size:
 * user-giant-title-text-line-height:
 */
class NbUserComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        /**
         * Size of the component.
         * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
         */
        this.size = 'medium';
        /**
         * Shape of the picture box.
         * Possible values: `rectangle`, `semi-round`, `round`.
         */
        this.shape = 'round';
        this._showName = true;
        this._showTitle = true;
        this._showInitials = true;
        /**
         * Badge status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Absolute path to a user picture or base64 image.
     * User name initials will be shown if no picture specified (JD for John Doe).
     * @type string
     */
    set picture(value) {
        this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    /**
     * Whether to show a user name or not
     */
    get showName() {
        return this._showName;
    }
    set showName(val) {
        this._showName = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    get showTitle() {
        return this._showTitle;
    }
    set showTitle(val) {
        this._showTitle = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    get showInitials() {
        return this._showInitials;
    }
    set showInitials(val) {
        this._showInitials = convertToBoolProperty(val);
    }
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    get onlyPicture() {
        return !this.showName && !this.showTitle;
    }
    set onlyPicture(val) {
        this.showName = this.showTitle = !convertToBoolProperty(val);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
    getInitials() {
        if (this.name) {
            const names = this.name.split(' ');
            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }
}
NbUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-user',
                template: "<div class=\"user-container\">\n  <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\">\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n  <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture initials\" [style.background-color]=\"color\">\n    <ng-container *ngIf=\"showInitials\">\n      {{ getInitials() }}\n    </ng-container>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n\n  <div class=\"info-container\">\n    <div *ngIf=\"showName && name\" class=\"user-name\">{{ name }}</div>\n    <div *ngIf=\"showTitle && title\" class=\"user-title\">{{ title }}</div>\n  </div>\n</div>\n",
                styles: [":host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.initials{display:flex;align-items:center;justify-content:center}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem}\n"]
            },] }
];
NbUserComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
NbUserComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    picture: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }],
    shape: [{ type: Input }],
    showName: [{ type: Input }],
    showTitle: [{ type: Input }],
    showInitials: [{ type: Input }],
    onlyPicture: [{ type: Input }],
    badgeText: [{ type: Input }],
    badgeStatus: [{ type: Input }],
    badgePosition: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_USER_COMPONENTS = [
    NbUserComponent,
];
class NbUserModule {
}
NbUserModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbBadgeModule,
                ],
                declarations: [
                    ...NB_USER_COMPONENTS,
                ],
                exports: [
                    ...NB_USER_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
class NbActionComponent {
    constructor() {
        /**
         * Optional title for mouseover
         * @type string
         */
        this.title = '';
        this._disabled = false;
        /**
         * Badge status (adds specific styles):
         * 'basic', 'primary', 'info', 'success', 'warning', 'danger', 'control'
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Visually disables the item
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * Use badge dot mode
     * @type boolean
     */
    get badgeDot() {
        return this._badgeDot;
    }
    set badgeDot(value) {
        this._badgeDot = convertToBoolProperty(value);
    }
}
NbActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-action',
                template: `
    <ng-container *ngIf="icon; else projectedContent">
      <a class="icon-container"
         [routerLink]="link"
         [title]="title"
         *ngIf="link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         [href]="href"
         [title]="title"
         *ngIf="href && !link">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
      <a class="icon-container"
         href="#"
         [title]="title"
         *ngIf="!href && !link"
         (click)="$event.preventDefault()">
        <nb-icon [config]="icon"></nb-icon>
        <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
      </a>
    </ng-container>

    <ng-template #projectedContent>
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="badgeTemplate"></ng-container>
    </ng-template>
    <ng-template #badgeTemplate>
      <nb-badge *ngIf="badgeText || badgeDot"
                [text]="badgeText"
                [dotMode]="badgeDot"
                [status]="badgeStatus"
                [position]="badgePosition">
      </nb-badge>
    </ng-template>
  `,
                styles: [":host{background:transparent;display:flex;align-items:center;position:relative}:host(.disabled){cursor:not-allowed}:host(.disabled) a,:host(.disabled) nb-icon{cursor:not-allowed}:host-context(nb-actions.full-width){justify-content:center;width:100%}a.icon-container{position:relative}a.icon-container:hover,a.icon-container:focus{text-decoration:none}nb-icon:hover{cursor:pointer}\n"]
            },] }
];
NbActionComponent.propDecorators = {
    link: [{ type: Input }],
    href: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.disabled',] }],
    badgeDot: [{ type: Input }],
    badgeText: [{ type: Input }],
    badgeStatus: [{ type: Input }],
    badgePosition: [{ type: Input }]
};
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * Action dot mode
 * @stacked-example(Action badge in dot mode, action/action-dot-mode.component)
 *
 * @styles
 *
 * actions-background-color:
 * actions-divider-color:
 * actions-divider-style:
 * actions-divider-width:
 * actions-icon-color:
 * actions-text-color:
 * actions-text-font-family:
 * actions-text-font-weight:
 * actions-text-line-height:
 * actions-disabled-icon-color:
 * actions-disabled-text-color:
 * actions-tiny-height:
 * actions-tiny-icon-height:
 * actions-tiny-padding:
 * actions-tiny-text-font-size:
 * actions-small-height:
 * actions-small-icon-height:
 * actions-small-padding:
 * actions-small-text-font-size:
 * actions-medium-height:
 * actions-medium-icon-height:
 * actions-medium-padding:
 * actions-medium-text-font-size:
 * actions-large-height:
 * actions-large-icon-height:
 * actions-large-padding:
 * actions-large-text-font-size:
 * actions-giant-height:
 * actions-giant-icon-height:
 * actions-giant-padding:
 * actions-giant-text-font-size:
 */
class NbActionsComponent {
    constructor() {
        this._size = 'small';
        this._fullWidth = false;
    }
    /**
     * Size of the component: 'tiny', 'small' (default), 'medium', 'large', 'giant'
     */
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    /**
     * Component will fill full width of the container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
}
NbActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-actions',
                template: `
    <ng-content select="nb-action"></ng-content>
  `,
                styles: [":host{display:flex;align-items:center}\n"]
            },] }
];
NbActionsComponent.propDecorators = {
    size: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
class NbActionsModule {
}
NbActionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbBadgeModule,
                    NbIconModule,
                ],
                declarations: [
                    ...NB_ACTIONS_COMPONENTS,
                ],
                exports: [
                    ...NB_ACTIONS_COMPONENTS,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Search component service, connects your code to a page-level search component.
 */
class NbSearchService {
    constructor() {
        this.searchSubmittings$ = new Subject();
        this.searchActivations$ = new Subject();
        this.searchDeactivations$ = new Subject();
        this.searchInput$ = new Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    activateSearch(searchType, tag) {
        this.searchActivations$.next({ searchType, tag });
    }
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    deactivateSearch(searchType, tag) {
        this.searchDeactivations$.next({ searchType, tag });
    }
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    submitSearch(term, tag) {
        this.searchSubmittings$.next({ term, tag });
    }
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    searchInput(term, tag) {
        this.searchInput$.next({ term, tag });
    }
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchActivate() {
        return this.searchActivations$.pipe(share());
    }
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    onSearchDeactivate() {
        return this.searchDeactivations$.pipe(share());
    }
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchSubmit() {
        return this.searchSubmittings$.pipe(share());
    }
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    onSearchInput() {
        return this.searchInput$.pipe(share());
    }
}
NbSearchService.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
class NbSearchFieldComponent {
    constructor() {
        this.show = false;
        this.close = new EventEmitter();
        this.search = new EventEmitter();
        this.searchInput = new EventEmitter();
    }
    get showClass() {
        return this.show;
    }
    get modalZoomin() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_ZOOMIN;
    }
    get rotateLayout() {
        return this.type === NbSearchFieldComponent.TYPE_ROTATE_LAYOUT;
    }
    get modalMove() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_MOVE;
    }
    get curtain() {
        return this.type === NbSearchFieldComponent.TYPE_CURTAIN;
    }
    get columnCurtain() {
        return this.type === NbSearchFieldComponent.TYPE_COLUMN_CURTAIN;
    }
    get modalDrop() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_DROP;
    }
    get modalHalf() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_HALF;
    }
    ngOnChanges({ show }) {
        const becameHidden = !show.isFirstChange() && show.currentValue === false;
        if (becameHidden && this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.focusInput();
    }
    ngAfterViewInit() {
        this.focusInput();
    }
    emitClose() {
        this.close.emit();
    }
    submitSearch(term) {
        if (term) {
            this.search.emit(term);
        }
    }
    emitSearchInput(term) {
        this.searchInput.emit(term);
    }
    focusInput() {
        if (this.show && this.inputElement) {
            this.inputElement.nativeElement.focus();
        }
    }
}
NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
NbSearchFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-search-field',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="search" (keyup.esc)="emitClose()">
      <button (click)="emitClose()" nbButton ghost class="close-button">
        <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
      </button>
      <div class="form-wrapper">
        <form class="form" (keyup.enter)="submitSearch(searchInput.value)">
          <div class="form-content">
            <input class="search-input"
                   #searchInput
                   (input)="emitSearchInput(searchInput.value)"
                   autocomplete="off"
                   [attr.placeholder]="placeholder"
                   tabindex="-1"
                   (blur)="focusInput()"/>
          </div>
          <span class="info">{{ hint }}</span>
        </form>
      </div>
    </div>
  `,
                styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}}\n", "::ng-deep nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}::ng-deep nb-layout.rotate-layout .scrollable-container{position:relative;z-index:10001;transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)}::ng-deep nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100vw;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)}\n", "::ng-deep nb-layout.modal-move .layout{transition:transform 0.5s}::ng-deep nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}}\n", ":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity 0.1s;transition-delay:0.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}}::ng-deep nb-layout.curtain .scrollable-container{position:relative;z-index:0}\n", "::ng-deep nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}}\n", "::ng-deep nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}::ng-deep nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity 0.4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}}\n", "::ng-deep nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}::ng-deep nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)}\n"]
            },] }
];
NbSearchFieldComponent.propDecorators = {
    type: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }],
    show: [{ type: Input }],
    close: [{ type: Output }],
    search: [{ type: Output }],
    searchInput: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['searchInput',] }],
    showClass: [{ type: HostBinding, args: ['class.show',] }],
    modalZoomin: [{ type: HostBinding, args: ['class.modal-zoomin',] }],
    rotateLayout: [{ type: HostBinding, args: ['class.rotate-layout',] }],
    modalMove: [{ type: HostBinding, args: ['class.modal-move',] }],
    curtain: [{ type: HostBinding, args: ['class.curtain',] }],
    columnCurtain: [{ type: HostBinding, args: ['class.column-curtain',] }],
    modalDrop: [{ type: HostBinding, args: ['class.modal-drop',] }],
    modalHalf: [{ type: HostBinding, args: ['class.modal-half',] }]
};
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-background-color:
 * search-divider-color:
 * search-divider-style:
 * search-divider-width:
 * search-extra-background-color:
 * search-text-color:
 * search-text-font-family:
 * search-text-font-size:
 * search-text-font-weight:
 * search-text-line-height:
 * search-placeholder-text-color:
 * search-info-text-color:
 * search-info-text-font-family:
 * search-info-text-font-size:
 * search-info-text-font-weight:
 * search-info-text-line-height:
 */
class NbSearchComponent {
    constructor(searchService, themeService, router, overlayService, changeDetector) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.router = router;
        this.overlayService = overlayService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.showSearchField = false;
        /**
         * Search input placeholder
         * @type {string}
         */
        this.placeholder = 'Search...';
        /**
         * Hint showing under the input field to improve user experience
         *
         * @type {string}
         */
        this.hint = 'Hit enter to search';
    }
    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => this.hideSearch());
        this.searchService.onSearchActivate()
            .pipe(filter(data => !this.tag || data.tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.openSearch());
        this.searchService.onSearchDeactivate()
            .pipe(filter(data => !this.tag || data.tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.hideSearch());
    }
    ngOnDestroy() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.removeLayoutClasses();
            this.overlayRef.detach();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    openSearch() {
        if (!this.overlayRef) {
            this.overlayRef = this.overlayService.create();
            this.overlayRef.attach(this.searchFieldPortal);
        }
        this.themeService.appendLayoutClass(this.type);
        of(null).pipe(delay(0)).subscribe(() => {
            this.themeService.appendLayoutClass('with-search');
            this.showSearchField = true;
            this.changeDetector.detectChanges();
        });
    }
    hideSearch() {
        this.removeLayoutClasses();
        this.showSearchField = false;
        this.changeDetector.detectChanges();
        this.searchButton.nativeElement.focus();
    }
    search(term) {
        this.searchService.submitSearch(term, this.tag);
        this.hideSearch();
    }
    emitInput(term) {
        this.searchService.searchInput(term, this.tag);
    }
    emitActivate() {
        this.searchService.activateSearch(this.type, this.tag);
    }
    emitDeactivate() {
        this.searchService.deactivateSearch(this.type, this.tag);
    }
    removeLayoutClasses() {
        this.themeService.removeLayoutClass('with-search');
        of(null).pipe(delay(500)).subscribe(() => {
            this.themeService.removeLayoutClass(this.type);
        });
    }
}
NbSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-search',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button #searchButton class="start-search" (click)="emitActivate()" nbButton ghost>
      <nb-icon icon="search-outline" pack="nebular-essentials"></nb-icon>
    </button>
    <nb-search-field
      *nbPortal
      [show]="showSearchField"
      [type]="type"
      [placeholder]="placeholder"
      [hint]="hint"
      (search)="search($event)"
      (searchInput)="emitInput($event)"
      (close)="emitDeactivate()">
    </nb-search-field>
  `,
                styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}::ng-deep nb-layout.with-search .scrollable-container{position:relative;z-index:0}\n"]
            },] }
];
NbSearchComponent.ctorParameters = () => [
    { type: NbSearchService },
    { type: NbThemeService },
    { type: Router },
    { type: NbOverlayService },
    { type: ChangeDetectorRef }
];
NbSearchComponent.propDecorators = {
    tag: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }],
    type: [{ type: Input }],
    searchFieldPortal: [{ type: ViewChild, args: [NbPortalDirective,] }],
    searchButton: [{ type: ViewChild, args: ['searchButton', { read: ElementRef },] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbSearchModule {
}
NbSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbOverlayModule,
                    NbIconModule,
                    NbButtonModule,
                ],
                declarations: [
                    NbSearchComponent,
                    NbSearchFieldComponent,
                ],
                exports: [
                    NbSearchComponent,
                    NbSearchFieldComponent,
                ],
                providers: [
                    NbSearchService,
                ],
                entryComponents: [
                    NbSearchFieldComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Checkbox is available in multiple colors using `status` property:
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * Indeterminate state is also supported:
 * @stacked-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * Checkbox can be disabled via `disabled` attribute.
 * @stacked-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-text-space:
 * checkbox-padding:
 * checkbox-focus-inset-shadow-length:
 * checkbox-basic-text-color:
 * checkbox-basic-background-color:
 * checkbox-basic-border-color:
 * checkbox-basic-checked-background-color:
 * checkbox-basic-checked-border-color:
 * checkbox-basic-checked-checkmark-color:
 * checkbox-basic-indeterminate-background-color:
 * checkbox-basic-indeterminate-border-color:
 * checkbox-basic-indeterminate-checkmark-color:
 * checkbox-basic-focus-background-color:
 * checkbox-basic-focus-border-color:
 * checkbox-basic-focus-checked-background-color:
 * checkbox-basic-focus-checked-border-color:
 * checkbox-basic-hover-background-color:
 * checkbox-basic-hover-border-color:
 * checkbox-basic-hover-checked-background-color:
 * checkbox-basic-hover-checked-border-color:
 * checkbox-basic-active-background-color:
 * checkbox-basic-active-border-color:
 * checkbox-basic-active-checked-background-color:
 * checkbox-basic-active-checked-border-color:
 * checkbox-basic-disabled-background-color:
 * checkbox-basic-disabled-border-color:
 * checkbox-basic-disabled-checkmark-color:
 * checkbox-basic-disabled-text-color:
 * checkbox-basic-disabled-checked-background-color:
 * checkbox-primary-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-background-color:
 * checkbox-primary-focus-border-color:
 * checkbox-primary-focus-checked-background-color:
 * checkbox-primary-focus-checked-border-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-hover-checked-background-color:
 * checkbox-primary-hover-checked-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-primary-active-checked-background-color:
 * checkbox-primary-active-checked-border-color:
 * checkbox-primary-disabled-background-color:
 * checkbox-primary-disabled-border-color:
 * checkbox-primary-disabled-checkmark-color:
 * checkbox-primary-disabled-text-color:
 * checkbox-primary-disabled-checked-background-color:
 * checkbox-success-text-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-background-color:
 * checkbox-success-focus-border-color:
 * checkbox-success-focus-checked-background-color:
 * checkbox-success-focus-checked-border-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-hover-checked-background-color:
 * checkbox-success-hover-checked-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-success-active-checked-background-color:
 * checkbox-success-active-checked-border-color:
 * checkbox-success-disabled-background-color:
 * checkbox-success-disabled-border-color:
 * checkbox-success-disabled-checkmark-color:
 * checkbox-success-disabled-text-color:
 * checkbox-success-disabled-checked-background-color:
 * checkbox-info-text-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-background-color:
 * checkbox-info-focus-border-color:
 * checkbox-info-focus-checked-background-color:
 * checkbox-info-focus-checked-border-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-hover-checked-background-color:
 * checkbox-info-hover-checked-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 * checkbox-info-active-checked-background-color:
 * checkbox-info-active-checked-border-color:
 * checkbox-info-disabled-background-color:
 * checkbox-info-disabled-border-color:
 * checkbox-info-disabled-checkmark-color:
 * checkbox-info-disabled-text-color:
 * checkbox-info-disabled-checked-background-color:
 * checkbox-warning-text-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-background-color:
 * checkbox-warning-focus-border-color:
 * checkbox-warning-focus-checked-background-color:
 * checkbox-warning-focus-checked-border-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-hover-checked-background-color:
 * checkbox-warning-hover-checked-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-warning-active-checked-background-color:
 * checkbox-warning-active-checked-border-color:
 * checkbox-warning-disabled-background-color:
 * checkbox-warning-disabled-border-color:
 * checkbox-warning-disabled-checkmark-color:
 * checkbox-warning-disabled-text-color:
 * checkbox-warning-disabled-checked-background-color:
 * checkbox-danger-text-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-background-color:
 * checkbox-danger-focus-border-color:
 * checkbox-danger-focus-checked-background-color:
 * checkbox-danger-focus-checked-border-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-hover-checked-background-color:
 * checkbox-danger-hover-checked-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-danger-active-checked-background-color:
 * checkbox-danger-active-checked-border-color:
 * checkbox-danger-disabled-background-color:
 * checkbox-danger-disabled-border-color:
 * checkbox-danger-disabled-checkmark-color:
 * checkbox-danger-disabled-text-color:
 * checkbox-danger-disabled-checked-background-color:
 * checkbox-control-text-color:
 * checkbox-control-background-color:
 * checkbox-control-border-color:
 * checkbox-control-checked-background-color:
 * checkbox-control-checked-border-color:
 * checkbox-control-checked-checkmark-color:
 * checkbox-control-indeterminate-background-color:
 * checkbox-control-indeterminate-border-color:
 * checkbox-control-indeterminate-checkmark-color:
 * checkbox-control-focus-background-color:
 * checkbox-control-focus-border-color:
 * checkbox-control-focus-checked-background-color:
 * checkbox-control-focus-checked-border-color:
 * checkbox-control-hover-background-color:
 * checkbox-control-hover-border-color:
 * checkbox-control-hover-checked-background-color:
 * checkbox-control-hover-checked-border-color:
 * checkbox-control-active-background-color:
 * checkbox-control-active-border-color:
 * checkbox-control-active-checked-background-color:
 * checkbox-control-active-checked-border-color:
 * checkbox-control-disabled-background-color:
 * checkbox-control-disabled-border-color:
 * checkbox-control-disabled-checkmark-color:
 * checkbox-control-disabled-text-color:
 * checkbox-control-disabled-checked-background-color:
 */
class NbCheckboxComponent {
    constructor(changeDetector, renderer, hostElement, zone, statusService) {
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.zone = zone;
        this.statusService = statusService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this._checked = false;
        this._disabled = false;
        /**
         * Checkbox status.
         * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
         */
        this.status = 'basic';
        this._indeterminate = false;
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = convertToBoolProperty(value);
    }
    /**
     * Controls input disabled state
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * Controls checkbox indeterminate state
     */
    get indeterminate() {
        return this._indeterminate;
    }
    set indeterminate(value) {
        this._indeterminate = convertToBoolProperty(value);
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get info() {
        return this.status === 'info';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this._checked = val;
        this.changeDetector.markForCheck();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    }
    setTouched() {
        this.onTouched();
    }
    updateValueAndIndeterminate(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.indeterminate = input.indeterminate;
    }
}
NbCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-checkbox',
                template: `
    <label class="label">
      <input type="checkbox" class="native-input visually-hidden"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValueAndIndeterminate($event)"
             (blur)="setTouched()"
             (click)="$event.stopPropagation()"
             [indeterminate]="indeterminate">
      <span [class.indeterminate]="indeterminate" [class.checked]="checked" class="custom-checkbox">
        <nb-icon *ngIf="indeterminate" icon="minus-bold-outline" pack="nebular-essentials"></nb-icon>
        <nb-icon *ngIf="checked && !indeterminate" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
      </span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbCheckboxComponent),
                        multi: true,
                    }],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit}:host .custom-checkbox{flex-shrink:0}:host(.nb-transition) .custom-checkbox{transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host(.nb-transition) .text{transition-duration:0.15s;transition-property:color;transition-timing-function:ease-in}\n"]
            },] }
];
NbCheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbCheckboxComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    indeterminate: [{ type: Input }],
    checkedChange: [{ type: Output }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbCheckboxModule {
}
NbCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                ],
                declarations: [NbCheckboxComponent],
                exports: [NbCheckboxComponent],
            },] }
];

class NbDynamicOverlay {
    constructor(overlay, componentFactoryResolver, zone, overlayContainer) {
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.zone = zone;
        this.overlayContainer = overlayContainer;
        this.context = {};
        this.overlayConfig = {};
        this.positionStrategyChange$ = new Subject();
        this.isShown$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
        this.overlayDestroy$ = new Subject();
    }
    get isAttached() {
        return this.ref && this.ref.hasAttached();
    }
    get isShown() {
        return this.isShown$.pipe(distinctUntilChanged());
    }
    create(componentType, content, context, positionStrategy, overlayConfig = {}) {
        this.setContentAndContext(content, context);
        this.setComponent(componentType);
        this.setPositionStrategy(positionStrategy);
        this.setOverlayConfig(overlayConfig);
        return this;
    }
    setContent(content) {
        this.content = content;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContext(context) {
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContentAndContext(content, context) {
        this.content = content;
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setComponent(componentType) {
        this.componentType = componentType;
        // in case the component is shown we recreate it and show it back
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    setPositionStrategy(positionStrategy) {
        this.positionStrategyChange$.next();
        this.positionStrategy = positionStrategy;
        this.positionStrategy.positionChange
            .pipe(filter(() => !!this.container), takeUntil(merge(this.positionStrategyChange$, this.destroy$)))
            .subscribe((position) => {
            this.lastAppliedPosition = position;
            patch(this.container, { position });
        });
        if (this.ref) {
            this.ref.updatePositionStrategy(this.positionStrategy);
        }
    }
    setOverlayConfig(overlayConfig) {
        this.overlayConfig = overlayConfig;
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    show() {
        if (!this.ref) {
            this.createOverlay();
        }
        this.renderContainer();
        if (!this.hasOverlayInContainer()) {
            // Dispose overlay ref as it refers to the old overlay container and create new by calling `show`
            this.disposeOverlayRef();
            return this.show();
        }
        this.isShown$.next(true);
    }
    hide() {
        if (!this.ref) {
            return;
        }
        this.ref.detach();
        this.container = null;
        this.isShown$.next(false);
    }
    toggle() {
        if (this.isAttached) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    dispose() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.disposeOverlayRef();
        this.isShown$.complete();
        this.positionStrategyChange$.complete();
        this.overlayDestroy$.complete();
    }
    getContainer() {
        return this.container;
    }
    createOverlay() {
        this.ref = this.overlay.create(Object.assign({ positionStrategy: this.positionStrategy, scrollStrategy: this.overlay.scrollStrategies.reposition() }, this.overlayConfig));
        this.updatePositionWhenStable(this.ref);
    }
    renderContainer() {
        const containerContext = this.createContainerContext();
        if (!this.container) {
            this.container = createContainer(this.ref, this.componentType, containerContext, this.componentFactoryResolver);
        }
        this.container.instance.renderContent();
    }
    updateContext() {
        const containerContext = this.createContainerContext();
        Object.assign(this.container.instance, containerContext);
        this.container.instance.renderContent();
        this.container.changeDetectorRef.detectChanges();
    }
    createContainerContext() {
        return {
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
            position: this.lastAppliedPosition,
        };
    }
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    updatePositionWhenStable(overlay) {
        const overlayDestroy$ = this.overlayDestroy$.pipe(filter((destroyedOverlay) => destroyedOverlay === overlay));
        this.zone.onStable
            .pipe(takeUntil(merge(this.destroy$, overlayDestroy$)))
            .subscribe(() => this.updatePosition());
    }
    updatePosition() {
        if (this.ref) {
            this.ref.updatePosition();
        }
    }
    hasOverlayInContainer() {
        return this.overlayContainer.getContainerElement().contains(this.ref.hostElement);
    }
    disposeOverlayRef() {
        if (this.ref) {
            this.ref.dispose();
            this.overlayDestroy$.next(this.ref);
            this.ref = null;
            this.container = null;
        }
    }
}
NbDynamicOverlay.decorators = [
    { type: Injectable }
];
NbDynamicOverlay.ctorParameters = () => [
    { type: NbOverlayService },
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: NbOverlayContainer }
];

class NbDynamicOverlayChange extends SimpleChange {
    constructor(previousValue, currentValue, firstChange = false) {
        super(previousValue, currentValue, firstChange);
    }
    isChanged() {
        return this.currentValue !== this.previousValue;
    }
}
class NbDynamicOverlayHandler {
    constructor(positionBuilder, triggerStrategyBuilder, dynamicOverlayService) {
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.dynamicOverlayService = dynamicOverlayService;
        this._context = {};
        this._trigger = NbTrigger.NOOP;
        this._position = NbPosition.TOP;
        this._adjustment = NbAdjustment.NOOP;
        this._offset = 15;
        this._overlayConfig = {};
        this.changes = {};
    }
    host(host) {
        this.changes.host = new NbDynamicOverlayChange(this._host, host);
        this._host = host;
        return this;
    }
    trigger(trigger$$1) {
        this.changes.trigger = new NbDynamicOverlayChange(this._trigger, trigger$$1);
        this._trigger = trigger$$1;
        return this;
    }
    position(position) {
        this.changes.position = new NbDynamicOverlayChange(this._position, position);
        this._position = position;
        return this;
    }
    adjustment(adjustment) {
        this.changes.adjustment = new NbDynamicOverlayChange(this._adjustment, adjustment);
        this._adjustment = adjustment;
        return this;
    }
    componentType(componentType) {
        this.changes.componentType = new NbDynamicOverlayChange(this._componentType, componentType);
        this._componentType = componentType;
        return this;
    }
    content(content) {
        this.changes.content = new NbDynamicOverlayChange(this._content, content);
        this._content = content;
        return this;
    }
    context(context) {
        this.changes.context = new NbDynamicOverlayChange(this._context, context);
        this._context = context;
        return this;
    }
    offset(offset) {
        this.changes.offset = new NbDynamicOverlayChange(this._offset, offset);
        this._offset = offset;
        return this;
    }
    overlayConfig(overlayConfig) {
        this.changes.overlayConfig = new NbDynamicOverlayChange(this._overlayConfig, overlayConfig);
        this._overlayConfig = overlayConfig;
        return this;
    }
    build() {
        if (!this._componentType || !this._host) {
            throw Error(`NbDynamicOverlayHandler: at least 'componentType' and 'host' should be
      passed before building a dynamic overlay.`);
        }
        this.dynamicOverlay = this.dynamicOverlayService.create(this._componentType, this._content, this._context, this.createPositionStrategy(), this._overlayConfig);
        this.connect();
        this.clearChanges();
        return this.dynamicOverlay;
    }
    rebuild() {
        /**
         * we should not throw here
         * as we use rebuilt in lifecycle hooks
         * which it could be called before the build
         * so we just ignore this call
         */
        if (!this.dynamicOverlay) {
            return;
        }
        if (this.isPositionStrategyUpdateRequired()) {
            this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy());
        }
        if (this.isTriggerStrategyUpdateRequired()) {
            this.connect();
        }
        if (this.isContainerRerenderRequired()) {
            this.dynamicOverlay.setContentAndContext(this._content, this._context);
        }
        if (this.isComponentTypeUpdateRequired()) {
            this.dynamicOverlay.setComponent(this._componentType);
        }
        if (this.isOverlayConfigUpdateRequired()) {
            this.dynamicOverlay.setOverlayConfig(this._overlayConfig);
        }
        this.clearChanges();
        return this.dynamicOverlay;
    }
    connect() {
        if (!this.dynamicOverlay) {
            throw new Error(`NbDynamicOverlayHandler: cannot connect to DynamicOverlay
      as it is not created yet. Call build() first`);
        }
        this.disconnect();
        this.subscribeOnTriggers(this.dynamicOverlay);
    }
    disconnect() {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    destroy() {
        this.disconnect();
        this.clearChanges();
        if (this.dynamicOverlay) {
            this.dynamicOverlay.dispose();
        }
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this._host)
            .position(this._position)
            .adjustment(this._adjustment)
            .offset(this._offset);
    }
    subscribeOnTriggers(dynamicOverlay) {
        this.triggerStrategy = this.triggerStrategyBuilder
            .trigger(this._trigger)
            .host(this._host.nativeElement)
            .container(() => dynamicOverlay.getContainer())
            .build();
        this.triggerStrategy.show$.subscribe(() => dynamicOverlay.show());
        this.triggerStrategy.hide$.subscribe(() => dynamicOverlay.hide());
    }
    isContainerRerenderRequired() {
        return this.isContentUpdated()
            || this.isContextUpdated()
            || this.isPositionStrategyUpdateRequired();
    }
    isPositionStrategyUpdateRequired() {
        return this.isAdjustmentUpdated() || this.isPositionUpdated() || this.isOffsetUpdated() || this.isHostUpdated();
    }
    isTriggerStrategyUpdateRequired() {
        return this.isTriggerUpdated() || this.isHostUpdated();
    }
    isComponentTypeUpdateRequired() {
        return this.isComponentTypeUpdated();
    }
    isOverlayConfigUpdateRequired() {
        return this.isOverlayConfigUpdated();
    }
    isComponentTypeUpdated() {
        return this.changes.componentType && this.changes.componentType.isChanged();
    }
    isContentUpdated() {
        return this.changes.content && this.changes.content.isChanged();
    }
    isContextUpdated() {
        return this.changes.context && this.changes.context.isChanged();
    }
    isAdjustmentUpdated() {
        return this.changes.adjustment && this.changes.adjustment.isChanged();
    }
    isPositionUpdated() {
        return this.changes.position && this.changes.position.isChanged();
    }
    isHostUpdated() {
        return this.changes.host && this.changes.host.isChanged();
    }
    isTriggerUpdated() {
        return this.changes.trigger && this.changes.trigger.isChanged();
    }
    isOffsetUpdated() {
        return this.changes.offset && this.changes.offset.isChanged();
    }
    isOverlayConfigUpdated() {
        return this.changes.overlayConfig && this.changes.overlayConfig.isChanged();
    }
    clearChanges() {
        this.changes = {};
    }
}
NbDynamicOverlayHandler.decorators = [
    { type: Injectable }
];
NbDynamicOverlayHandler.ctorParameters = () => [
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: NbDynamicOverlay }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
class NbPopoverComponent extends NbPositionedContainerComponent {
    renderContent() {
        this.detachContent();
        this.attachContent();
    }
    detachContent() {
        this.overlayContainer.detach();
    }
    attachContent() {
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else if (this.content instanceof Type) {
            this.attachComponent();
        }
        else {
            this.attachString();
        }
    }
    attachTemplate() {
        this.overlayContainer
            .attachTemplatePortal(new NbTemplatePortal(this.content, null, { $implicit: this.context }));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    }
    attachString() {
        this.overlayContainer.attachStringContent(this.content);
    }
}
NbPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-popover',
                template: `
    <span class="arrow"></span>
    <nb-overlay-container></nb-overlay-container>
  `,
                styles: [":host .arrow{position:absolute;width:0;height:0}\n"]
            },] }
];
NbPopoverComponent.propDecorators = {
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent,] }],
    content: [{ type: Input }],
    context: [{ type: Input }],
    cfr: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Powerful popover directive, which provides the best UX for your users.
 *
 * @stacked-example(Showcase, popover/popover-showcase.component)
 *
 * Popover can accept different content such as:
 * TemplateRef
 *
 * ```html
 * <button [nbPopover]="templateRef"></button>
 * <ng-template #templateRef>
 *   <span>Hello, Popover!</span>
 * </ng-template>
 * ```
 * ### Installation
 *
 * Import `NbPopoverModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbPopoverModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Custom components
 *
 * ```html
 * <button [nbPopover]="MyPopoverComponent"></button>
 * ```
 *
 * Both custom components and templateRef popovers can receive *contentContext* property
 * that will be passed to the content props.
 *
 * Primitive types
 *
 * ```html
 * <button nbPopover="Hello, Popover!"></button>
 * ```
 *
 * Popover has different placements, such as: top, bottom, left, right, start and end
 * which can be used as following:
 *
 * @stacked-example(Placements, popover/popover-placements.component)
 *
 * By default popover will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the popover container.
 * If you want to disable this behaviour set it `noop`.
 *
 * ```html
 * <button nbPopover="Hello, Popover!" nbPopoverAdjustment="noop"></button>
 * ```
 *
 * Popover has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, popover/popover-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, popover/popover-noop.component)
 *
 * Below are examples for manual popover settings control, both via template binding and code.
 * @stacked-example(Popover Settings, popover/popover-dynamic.component)
 *
 * Please note, while manipulating Popover setting via code, you need to call `rebuild()` method to apply the settings
 * changed.
 * @stacked-example(Popover Settings Code, popover/popover-dynamic-code.component)
 *
 * @additional-example(Template Ref, popover/popover-template-ref.component)
 * @additional-example(Custom Component, popover/popover-custom-component.component)
 * */
class NbPopoverDirective {
    constructor(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.popoverComponent = NbPopoverComponent;
        this.destroy$ = new Subject();
        /**
         * Container content context. Will be applied to the rendered component.
         * */
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         * */
        this.position = NbPosition.TOP;
        this._adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        /**
         * Sets popover offset
         * */
        this.offset = 15;
        this._popoverClass = '';
        this.nbPopoverShowStateChange = new EventEmitter();
        this.overlayConfig = { panelClass: this.popoverClass };
    }
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatically adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     * */
    get adjustment() {
        return this._adjustment;
    }
    set adjustment(value) {
        this._adjustment = value;
    }
    get popoverClass() {
        return this._popoverClass;
    }
    set popoverClass(value) {
        if (value !== this.popoverClass) {
            this._popoverClass = value;
            this.overlayConfig = { panelClass: this.popoverClass };
        }
    }
    get isShown() {
        return !!(this.dynamicOverlay && this.dynamicOverlay.isAttached);
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(this.popoverComponent);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.dynamicOverlay.isShown
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe((isShown) => this.nbPopoverShowStateChange.emit({ isShown }));
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .offset(this.offset)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context)
            .overlayConfig(this.overlayConfig);
    }
}
NbPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbPopover]',
                exportAs: 'nbPopover',
                providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
            },] }
];
NbPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbDynamicOverlayHandler }
];
NbPopoverDirective.propDecorators = {
    content: [{ type: Input, args: ['nbPopover',] }],
    context: [{ type: Input, args: ['nbPopoverContext',] }],
    position: [{ type: Input, args: ['nbPopoverPlacement',] }],
    adjustment: [{ type: Input, args: ['nbPopoverAdjustment',] }],
    trigger: [{ type: Input, args: ['nbPopoverTrigger',] }],
    offset: [{ type: Input, args: ['nbPopoverOffset',] }],
    popoverClass: [{ type: Input, args: ['nbPopoverClass',] }],
    nbPopoverShowStateChange: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbPopoverModule {
}
NbPopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbOverlayModule],
                declarations: [NbPopoverDirective, NbPopoverComponent],
                exports: [NbPopoverDirective],
                entryComponents: [NbPopoverComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
class NbContextMenuComponent extends NbPositionedContainerComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.context = { items: [] };
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-context-menu',
                template: `
    <nb-menu class="context-menu" [items]="context.items" [tag]="context.tag"></nb-menu>
  `
            },] }
];
NbContextMenuComponent.propDecorators = {
    items: [{ type: Input }],
    tag: [{ type: Input }],
    context: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * Also make sure `NbMenuModule` is imported to your `app.module`.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * Context menu has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, context-menu/context-menu-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, context-menu/context-menu-noop.component)
 *
 * @stacked-example(Manual Control, context-menu/context-menu-right-click.component)
 * */
class NbContextMenuDirective {
    constructor(hostRef, menuService, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.menuService = menuService;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.contextMenuHost = true;
        this._position = NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        this._contextMenuClass = '';
        this.overlayConfig = { panelClass: this.contextMenuClass };
        this.overlayContext = { items: this.items, tag: this.tag, position: this.position };
        this.destroy$ = new Subject();
        this._items = [];
    }
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    get position() {
        return this._position;
    }
    set position(value) {
        if (value !== this.position) {
            this._position = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    get tag() {
        return this._tag;
    }
    set tag(value) {
        if (value !== this.tag) {
            this._tag = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    get items() {
        return this._items;
    }
    set items(items) {
        this.validateItems(items);
        this._items = items;
        this.updateOverlayContext();
    }
    ;
    get contextMenuClass() {
        return this._contextMenuClass;
    }
    set contextMenuClass(value) {
        if (value !== this.contextMenuClass) {
            this._contextMenuClass = value;
            this.overlayConfig = { panelClass: this.contextMenuClass };
        }
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbContextMenuComponent);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.subscribeOnItemClick();
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .context(this.overlayContext)
            .overlayConfig(this.overlayConfig);
    }
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    validateItems(items) {
        if (!items || !items.length) {
            throw Error(`List of menu items expected, but given: ${items}`);
        }
    }
    subscribeOnItemClick() {
        this.menuService.onItemClick()
            .pipe(filter(({ tag }) => tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.hide());
    }
    updateOverlayContext() {
        this.overlayContext = { items: this.items, position: this.position, tag: this.tag };
    }
}
NbContextMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbContextMenu]',
                providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
            },] }
];
NbContextMenuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbMenuService },
    { type: NbDynamicOverlayHandler }
];
NbContextMenuDirective.propDecorators = {
    contextMenuHost: [{ type: HostBinding, args: ['class.context-menu-host',] }],
    position: [{ type: Input, args: ['nbContextMenuPlacement',] }],
    adjustment: [{ type: Input, args: ['nbContextMenuAdjustment',] }],
    tag: [{ type: Input, args: ['nbContextMenuTag',] }],
    items: [{ type: Input, args: ['nbContextMenu',] }],
    trigger: [{ type: Input, args: ['nbContextMenuTrigger',] }],
    contextMenuClass: [{ type: Input, args: ['nbContextMenuClass',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbContextMenuModule {
}
NbContextMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NbOverlayModule, NbMenuModule],
                exports: [NbContextMenuDirective],
                declarations: [NbContextMenuDirective, NbContextMenuComponent],
                entryComponents: [NbContextMenuComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Progress Bar is a component for indicating progress.
 *
 * Simple usage:
 *
 * ```html
 * <nb-progress-bar [value]="50"></nb-progress-bar>
 * ```
 * ### Installation
 *
 * Import `NbProgressBarModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbProgressBarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Progress bar accepts property `value` in range 0-100
 * @stacked-example(Progress bar, progress-bar/progress-bar-showcase.component)
 *
 * Progress bar background could be configured by providing a `status` property:
 * @stacked-example(Progress bar status, progress-bar/progress-bar-status.component)
 *
 * Progress bar size (height and font-size) could be configured by providing a `size` property:
 * @stacked-example(Progress bar size, progress-bar/progress-bar-size.component)
 *
 * `displayValue` property shows current value inside progress bar. It's also possible to add custom text inside:
 * @stacked-example(Progress bar value, progress-bar/progress-bar-value.component)
 *
 * Progress bar supports `width` and `background-color` transition:
 * @stacked-example(Progress bar interactive, progress-bar/progress-bar-interactive.component)
 *
 * @styles
 *
 * progress-bar-animation-duration:
 * progress-bar-border-radius:
 * progress-bar-text-font-family:
 * progress-bar-tiny-height:
 * progress-bar-tiny-text-font-size:
 * progress-bar-tiny-text-font-weight:
 * progress-bar-tiny-text-line-height:
 * progress-bar-small-height:
 * progress-bar-small-text-font-size:
 * progress-bar-small-text-font-weight:
 * progress-bar-small-text-line-height:
 * progress-bar-medium-height:
 * progress-bar-medium-text-font-size:
 * progress-bar-medium-text-font-weight:
 * progress-bar-medium-text-line-height:
 * progress-bar-large-height:
 * progress-bar-large-text-font-size:
 * progress-bar-large-text-font-weight:
 * progress-bar-large-text-line-height:
 * progress-bar-giant-height:
 * progress-bar-giant-text-font-size:
 * progress-bar-giant-text-font-weight:
 * progress-bar-giant-text-line-height:
 * progress-bar-basic-background-color:
 * progress-bar-basic-filled-background-color:
 * progress-bar-basic-text-color:
 * progress-bar-primary-background-color:
 * progress-bar-primary-filled-background-color:
 * progress-bar-primary-text-color:
 * progress-bar-success-background-color:
 * progress-bar-success-filled-background-color:
 * progress-bar-success-text-color:
 * progress-bar-info-background-color:
 * progress-bar-info-filled-background-color:
 * progress-bar-info-text-color:
 * progress-bar-warning-background-color:
 * progress-bar-warning-filled-background-color:
 * progress-bar-warning-text-color:
 * progress-bar-danger-background-color:
 * progress-bar-danger-filled-background-color:
 * progress-bar-danger-text-color:
 * progress-bar-control-background-color:
 * progress-bar-control-filled-background-color:
 * progress-bar-control-text-color:
 */
class NbProgressBarComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Progress bar value in percent (0 - 100)
         */
        this.value = 0;
        /**
         * Progress bar background (`basic` (default), `primary`, `info`, `success`, `warning`, `danger`, `control`)
         */
        this.status = 'basic';
        /**
         * Progress bar size (`tiny`, `small`, `medium` (default), `large`, `giant`)
         */
        this.size = 'medium';
        /**
         * Displays value inside progress bar
         */
        this.displayValue = false;
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-progress-bar',
                template: `
    <div class="progress-container">
      <div class="progress-value" [style.width.%]="value">
        <span *ngIf="displayValue">{{ value }}%</span>
        <ng-content></ng-content>
      </div>
    </div>
  `,
                styles: [":host{display:block}.progress-container{overflow:hidden}.progress-value{height:100%;text-align:center;overflow:hidden}\n"]
            },] }
];
NbProgressBarComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbProgressBarComponent.propDecorators = {
    value: [{ type: Input }],
    status: [{ type: Input }],
    size: [{ type: Input }],
    displayValue: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbProgressBarModule {
}
NbProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [NbProgressBarComponent],
                exports: [NbProgressBarComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbAlertModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Alert status, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Alert accent, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-border-radius:
 * alert-bottom-margin:
 * alert-padding:
 * alert-scrollbar-color:
 * alert-scrollbar-background-color:
 * alert-scrollbar-width:
 * alert-shadow:
 * alert-text-font-family:
 * alert-text-font-size:
 * alert-text-font-weight:
 * alert-text-line-height:
 * alert-closable-start-padding:
 * alert-tiny-height:
 * alert-small-height:
 * alert-medium-height:
 * alert-medium-padding:
 * alert-large-height:
 * alert-giant-height:
 * alert-basic-background-color:
 * alert-basic-text-color:
 * alert-primary-background-color:
 * alert-primary-text-color:
 * alert-success-background-color:
 * alert-success-text-color:
 * alert-info-background-color:
 * alert-info-text-color:
 * alert-warning-background-color:
 * alert-warning-text-color:
 * alert-danger-background-color:
 * alert-danger-text-color:
 * alert-control-background-color:
 * alert-control-text-color:
 * alert-accent-basic-color:
 * alert-accent-primary-color:
 * alert-accent-info-color:
 * alert-accent-success-color:
 * alert-accent-warning-color:
 * alert-accent-danger-color:
 * alert-accent-control-color:
 * alert-outline-width:
 * alert-outline-basic-color:
 * alert-outline-primary-color:
 * alert-outline-info-color:
 * alert-outline-success-color:
 * alert-outline-warning-color:
 * alert-outline-danger-color:
 * alert-outline-control-color:
 */
class NbAlertComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Alert size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         * Unset by default.
         */
        this.size = '';
        /**
         * Alert status (adds specific styles):
         * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        /**
         * Alert accent (color of the top border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.accent = '';
        /**
         * Alert outline (color of the border):
         * `basic`, `primary`, `success`, `info`, `warning`, `danger`, `control`.
         * Unset by default.
         */
        this.outline = '';
        this._closable = false;
        /**
         * Emits when chip is removed
         * @type EventEmitter<any>
         */
        this.close = new EventEmitter();
    }
    /**
     * Shows `close` icon
     */
    get closable() {
        return this._closable;
    }
    set closable(value) {
        this._closable = convertToBoolProperty(value);
    }
    /**
     * Emits the removed chip event
     */
    onClose() {
        this.close.emit();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get primaryAccent() {
        return this.accent === 'primary';
    }
    get successAccent() {
        return this.accent === 'success';
    }
    get infoAccent() {
        return this.accent === 'info';
    }
    get warningAccent() {
        return this.accent === 'warning';
    }
    get dangerAccent() {
        return this.accent === 'danger';
    }
    get basicAccent() {
        return this.accent === 'basic';
    }
    get controlAccent() {
        return this.accent === 'control';
    }
    get primaryOutline() {
        return this.outline === 'primary';
    }
    get successOutline() {
        return this.outline === 'success';
    }
    get infoOutline() {
        return this.outline === 'info';
    }
    get warningOutline() {
        return this.outline === 'warning';
    }
    get dangerOutline() {
        return this.outline === 'danger';
    }
    get basicOutline() {
        return this.outline === 'basic';
    }
    get controlOutline() {
        return this.outline === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-alert',
                template: `
    <button *ngIf="closable" type="button" class="close" aria-label="Close" (click)="onClose()">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content></ng-content>
  `,
                styles: [":host{display:flex;flex-direction:column;position:relative}[dir=ltr] :host .close{right:0}[dir=rtl] :host .close{left:0}.close{position:absolute;top:0;color:inherit;background-color:transparent;border:0;appearance:none}\n"]
            },] }
];
NbAlertComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbAlertComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    accent: [{ type: Input }],
    outline: [{ type: Input }],
    closable: [{ type: Input }, { type: HostBinding, args: ['class.closable',] }],
    close: [{ type: Output }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    primaryAccent: [{ type: HostBinding, args: ['class.accent-primary',] }],
    successAccent: [{ type: HostBinding, args: ['class.accent-success',] }],
    infoAccent: [{ type: HostBinding, args: ['class.accent-info',] }],
    warningAccent: [{ type: HostBinding, args: ['class.accent-warning',] }],
    dangerAccent: [{ type: HostBinding, args: ['class.accent-danger',] }],
    basicAccent: [{ type: HostBinding, args: ['class.accent-basic',] }],
    controlAccent: [{ type: HostBinding, args: ['class.accent-control',] }],
    primaryOutline: [{ type: HostBinding, args: ['class.outline-primary',] }],
    successOutline: [{ type: HostBinding, args: ['class.outline-success',] }],
    infoOutline: [{ type: HostBinding, args: ['class.outline-info',] }],
    warningOutline: [{ type: HostBinding, args: ['class.outline-warning',] }],
    dangerOutline: [{ type: HostBinding, args: ['class.outline-danger',] }],
    basicOutline: [{ type: HostBinding, args: ['class.outline-basic',] }],
    controlOutline: [{ type: HostBinding, args: ['class.outline-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbAlertModule {
}
NbAlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                declarations: [
                    NbAlertComponent,
                ],
                exports: [
                    NbAlertComponent,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat form component.
 *
 * Show a message form with a send message button.
 *
 * ```ts
 * <nb-chat-form showButton="true" buttonIcon="nb-send">
 * </nb-chat-form>
 * ```
 *
 * When `[dropFiles]="true"` handles files drag&drop with a file preview.
 *
 * Drag & drop available for files and images:
 * @stacked-example(Drag & Drop Chat, chat/chat-drop.component)
 *
 * New message could be tracked outside by using `(send)` output.
 *
 * ```ts
 * <nb-chat-form (send)="onNewMessage($event)">
 * </nb-chat-form>
 *
 * // ...
 *
 * onNewMessage({ message: string, files: any[] }) {
 *   this.service.sendToServer(message, files);
 * }
 * ```
 */
class NbChatFormComponent {
    constructor(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        this.status = 'basic';
        this.inputFocus = false;
        this.inputHover = false;
        this.droppedFiles = [];
        this.imgDropTypes = ['image/png', 'image/jpeg', 'image/gif'];
        /**
         * Predefined message text
         * @type {string}
         */
        this.message = '';
        /**
         * Message placeholder text
         * @type {string}
         */
        this.messagePlaceholder = 'Type a message';
        /**
         * Send button title
         * @type {string}
         */
        this.buttonTitle = '';
        /**
         * Send button icon, shown if `buttonTitle` is empty
         * @type {string}
         */
        this.buttonIcon = 'paper-plane-outline';
        /**
         * Show send button
         * @type {boolean}
         */
        this.showButton = true;
        /**
         * Show send button
         * @type {boolean}
         */
        this.dropFiles = false;
        /**
         * File drop placeholder text
         * @type {string}
         */
        this.dropFilePlaceholder = 'Drop file to send';
        /**
         *
         * @type {EventEmitter<{ message: string, files: File[] }>}
         */
        this.send = new EventEmitter();
        /**
         * Emits when message input value has been changed
         * @type {EventEmitter<string>}
         */
        this.onInputChange = new EventEmitter();
        this.fileOver = false;
    }
    onDrop(event) {
        if (this.dropFiles) {
            event.preventDefault();
            event.stopPropagation();
            this.fileOver = false;
            if (event.dataTransfer && event.dataTransfer.files) {
                for (const file of event.dataTransfer.files) {
                    const res = file;
                    if (this.imgDropTypes.includes(file.type)) {
                        const fr = new FileReader();
                        fr.onload = (e) => {
                            res.src = e.target.result;
                            res.urlStyle = this.domSanitizer.bypassSecurityTrustStyle(`url(${res.src})`);
                            this.cd.detectChanges();
                        };
                        fr.readAsDataURL(file);
                    }
                    this.droppedFiles.push(res);
                }
            }
        }
    }
    removeFile(file) {
        const index = this.droppedFiles.indexOf(file);
        if (index >= 0) {
            this.droppedFiles.splice(index, 1);
        }
    }
    onDragOver() {
        if (this.dropFiles) {
            this.fileOver = true;
        }
    }
    onDragLeave() {
        if (this.dropFiles) {
            this.fileOver = false;
        }
    }
    sendMessage() {
        if (this.droppedFiles.length || String(this.message).trim().length) {
            this.send.emit({ message: this.message, files: this.droppedFiles });
            this.message = '';
            this.droppedFiles = [];
        }
    }
    setStatus(status) {
        if (this.status !== status) {
            this.status = status;
            this.cd.detectChanges();
        }
    }
    getInputStatus() {
        if (this.fileOver) {
            return this.getHighlightStatus();
        }
        if (this.inputFocus || this.inputHover) {
            return this.status;
        }
        return 'basic';
    }
    getButtonStatus() {
        return this.getHighlightStatus();
    }
    getHighlightStatus() {
        if (this.status === 'basic' || this.status === 'control') {
            return 'primary';
        }
        return this.status;
    }
    onModelChange(value) {
        this.onInputChange.emit(value);
    }
}
NbChatFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-form',
                template: `
    <div class="dropped-files" *ngIf="droppedFiles?.length">
      <ng-container *ngFor="let file of droppedFiles">
        <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle">
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>

        <div *ngIf="!file.urlStyle">
          <nb-icon icon="file-text-outline" pack="nebular-essentials"></nb-icon>
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>
      </ng-container>
    </div>
    <div class="message-row">
      <input nbInput
             fullWidth
             [status]="getInputStatus()"
             (focus)="inputFocus = true"
             (blur)="inputFocus = false"
             (mouseenter)="inputHover = true"
             (mouseleave)="inputHover = false"
             [(ngModel)]="message"
             (ngModelChange)="onModelChange($event)"
             [class.with-button]="showButton"
             type="text"
             placeholder="{{ fileOver ? dropFilePlaceholder : messagePlaceholder }}"
             (keyup.enter)="sendMessage()">
      <button nbButton
              [status]="getButtonStatus()"
              *ngIf="showButton"
              [class.with-icon]="!buttonTitle"
              (click)="sendMessage()"
              class="send-button">
        <nb-icon *ngIf="!buttonTitle; else title" [icon]="buttonIcon" pack="nebular-essentials"></nb-icon>
        <ng-template #title>{{ buttonTitle }}</ng-template>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatFormComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
NbChatFormComponent.propDecorators = {
    message: [{ type: Input }],
    messagePlaceholder: [{ type: Input }],
    buttonTitle: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    showButton: [{ type: Input }],
    dropFiles: [{ type: Input }],
    dropFilePlaceholder: [{ type: Input }],
    send: [{ type: Output }],
    onInputChange: [{ type: Output }],
    fileOver: [{ type: HostBinding, args: ['class.file-over',] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover',] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave',] }]
};

/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
class NbCustomMessageService {
    constructor() {
        this.customMessages = new Map();
    }
    register(type, instance) {
        this.customMessages.set(type, instance);
    }
    unregister(type) {
        return this.customMessages.delete(type);
    }
    getInstance(type) {
        return this.customMessages.get(type);
    }
}
NbCustomMessageService.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
class NbChatMessageComponent {
    constructor(domSanitizer, customMessageService) {
        this.domSanitizer = domSanitizer;
        this.customMessageService = customMessageService;
        this.builtInMessageTypes = ['text', 'file', 'map', 'quote'];
        this._reply = false;
    }
    get _addReplyClass() {
        return this._areDefaultStylesEnabled() && this.reply;
    }
    get _addNotReplyClass() {
        return this._areDefaultStylesEnabled() && this.notReply;
    }
    get _addNoSpaceClass() {
        return this._areDefaultStylesEnabled() && !this.message;
    }
    get flyInOut() {
        return true;
    }
    get notReply() {
        return !this.reply;
    }
    /**
     * Determines if a message is a reply
     */
    get reply() {
        return this._reply;
    }
    set reply(value) {
        this._reply = convertToBoolProperty(value);
    }
    /**
     * Message send avatar
     * @type {string}
     */
    set avatar(value) {
        this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    getInitials() {
        if (this.sender) {
            const names = this.sender.split(' ');
            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }
    _isBuiltInMessageType() {
        // Unset type defaults to "text" type
        return this.type == null || this.builtInMessageTypes.includes(this.type);
    }
    _getTemplate() {
        const customMessage = this.getCustomMessage(this.type);
        return customMessage.templateRef;
    }
    _getTemplateContext() {
        return { $implicit: this.customMessageData, isReply: this.reply };
    }
    _areDefaultStylesEnabled() {
        const customMessageDirective = this.getCustomMessage(this.type);
        return !customMessageDirective.noStyles;
    }
    getCustomMessage(type) {
        const customMessageDirective = this.customMessageService.getInstance(type);
        if (!customMessageDirective) {
            throw new Error(`nb-chat: Can't find template for custom type '${type}'. ` +
                `Make sure you provide it in the chat component with *nbCustomMessage='${type}'.`);
        }
        return customMessageDirective;
    }
}
NbChatMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message',
                template: `
    <nb-chat-avatar *ngIf="notReply"
                    [initials]="getInitials()"
                    [avatarStyle]="avatarStyle">
    </nb-chat-avatar>

    <div class="message">
      <ng-container [ngSwitch]="type" *ngIf="_isBuiltInMessageType(); else customTemplate">
        <nb-chat-message-file *ngSwitchCase="'file'"
                              [sender]="sender"
                              [date]="date"
                              [dateFormat]="dateFormat"
                              [message]="message"
                              [files]="files">
        </nb-chat-message-file>

        <nb-chat-message-quote *ngSwitchCase="'quote'"
                               [sender]="sender"
                               [date]="date"
                               [dateFormat]="dateFormat"
                               [message]="message"
                               [quote]="quote">
        </nb-chat-message-quote>

        <nb-chat-message-map *ngSwitchCase="'map'"
                             [sender]="sender"
                             [date]="date"
                             [message]="message"
                             [latitude]="latitude"
                             [longitude]="longitude">
        </nb-chat-message-map>

        <nb-chat-message-text *ngSwitchDefault
                              [sender]="sender"
                              [date]="date"
                              [dateFormat]="dateFormat"
                              [message]="message">
        </nb-chat-message-text>
      </ng-container>
    </div>

    <ng-template #customTemplate>
      <nb-chat-message-text [sender]="sender"
                            [date]="date"
                            [dateFormat]="dateFormat"
                            [message]="message">
      </nb-chat-message-text>
      <div [class.nb-custom-message]="_areDefaultStylesEnabled()"
           [class.nb-custom-message-no-space]="_addNoSpaceClass"
           [class.nb-custom-message-reply]="_addReplyClass"
           [class.nb-custom-message-not-reply]="_addNotReplyClass"
           [class.nb-custom-message-full-width]="!_areDefaultStylesEnabled()">
        <ng-container [ngTemplateOutlet]="_getTemplate()"
                      [ngTemplateOutletContext]="_getTemplateContext()">
        </ng-container>
      </div>
    </ng-template>
  `,
                animations: [
                    trigger('flyInOut', [
                        state('in', style({ transform: 'translateX(0)' })),
                        transition('void => *', [
                            style({ transform: 'translateX(-100%)' }),
                            animate(80),
                        ]),
                        transition('* => void', [
                            animate(80, style({ transform: 'translateX(100%)' })),
                        ]),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NbCustomMessageService }
];
NbChatMessageComponent.propDecorators = {
    flyInOut: [{ type: HostBinding, args: ['@flyInOut',] }],
    notReply: [{ type: HostBinding, args: ['class.not-reply',] }],
    reply: [{ type: Input }, { type: HostBinding, args: ['class.reply',] }],
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    files: [{ type: Input }],
    quote: [{ type: Input }],
    latitude: [{ type: Input }],
    longitude: [{ type: Input }],
    avatar: [{ type: Input }],
    type: [{ type: Input }],
    customMessageData: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * # Custom message types
 *
 * Besides built-in message types, you could provide custom ones with their own template to render.
 * As an example, let's add the `link` message type.
 * <br>
 * First, you need to provide a template for the `link` message type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 * </nb-chat>
 * ```
 * Then, add the `nb-chat-message` component with the `link` type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 *   <nb-chat-message type="link"></nb-chat-message>
 * </nb-chat>
 * ```
 *
 * <div class="note note-warning">
 *   <div class="note-title">Important!</div>
 *   <div class="note-body">
 *     Custom chat messages must be defined before the `nb-chat-message`.
 *   </div>
 * </div>
 *
 * Custom message templates could have arbitrary data associated with them. Let's extract hardcoded link
 * href and text. To pass some data to the custom message template, use the `customMessageData` input
 * of the `nb-chat-message` component:
 * ```html
 * ...
 * <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 * </nb-chat-message>
 * ...
 * ```
 * When `customMessageData` is set, this object would become a template context and you'll be able
 * to reference it via `let varName` syntax:
 * ```html
 * <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 * ```
 *
 * That's it, full example will look like this:
 * ```html
 * <nb-chat title="Nebular Conversational UI">
 *   <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 *   <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 *   </nb-chat-message>
 * </nb-chat>
 * ```
 *
 * If you want to style your custom template from the ground up you could turn off generic message styling
 * (such as round borders, color, background, etc.) via the `noStyles` input:
 * ```html
 *   <div *nbCustomMessage="'my-custom-type'; noStyles: true">...</div>
 * ```
 * When you decide to use your own styles, the `isReply` property of the custom message template context
 * would come in handy. This property allows you to determine whether the message is a reply or not.
 * For example, to change link text color (as replies have a different background):
 * ```html
 * <a *nbCustomMessage="'link'; let data; let isReply=isReply"
 *    [href]="data.href"
 *    [class.link-control]="!isReply">
 *   {{ data.label }}
 * </a>
 * ```
 *
 * Below, you could find a more complex example with multiple custom message types:
 * @stacked-example(Custom message, chat/chat-custom-message.component)
 *
 * @styles
 *
 * chat-background-color:
 * chat-border:
 * chat-border-radius:
 * chat-shadow:
 * chat-padding:
 * chat-scrollbar-color:
 * chat-scrollbar-background-color:
 * chat-scrollbar-width:
 * chat-text-color:
 * chat-text-font-family:
 * chat-text-font-size:
 * chat-text-font-weight:
 * chat-text-line-height:
 * chat-header-text-font-family:
 * chat-header-text-font-size:
 * chat-header-text-font-weight:
 * chat-header-text-line-height:
 * chat-tiny-height:
 * chat-small-height:
 * chat-medium-height:
 * chat-large-height:
 * chat-giant-height:
 * chat-basic-background-color:
 * chat-basic-text-color:
 * chat-primary-background-color:
 * chat-primary-text-color:
 * chat-success-background-color:
 * chat-success-text-color:
 * chat-info-background-color:
 * chat-info-text-color:
 * chat-warning-background-color:
 * chat-warning-text-color:
 * chat-danger-background-color:
 * chat-danger-text-color:
 * chat-control-background-color:
 * chat-control-text-color:
 * chat-divider-color:
 * chat-divider-style:
 * chat-divider-width:
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
class NbChatComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Chat status color (adds specific styles):
         * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        this.noMessagesPlaceholder = 'No messages yet.';
        this._scrollBottom = true;
    }
    /**
     * Scroll chat to the bottom of the list when a new message arrives
     */
    get scrollBottom() {
        return this._scrollBottom;
    }
    set scrollBottom(value) {
        this._scrollBottom = convertToBoolProperty(value);
    }
    ngOnChanges(changes) {
        if ('status' in changes) {
            this.updateFormStatus();
        }
    }
    ngAfterContentInit() {
        this.updateFormStatus();
    }
    ngAfterViewInit() {
        this.messages.changes
            .subscribe((messages) => {
            this.messages = messages;
            this.updateView();
        });
        this.updateView();
    }
    updateView() {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    }
    scrollListBottom() {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    }
    updateFormStatus() {
        if (this.chatForm) {
            this.chatForm.setStatus(this.status);
        }
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbChatComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat',
                template: `
    <div class="header">{{ title }}</div>
    <div class="scrollable" #scrollable>
      <div class="messages">
        <ng-content select="nb-chat-message"></ng-content>
        <p class="no-messages" *ngIf="!messages?.length">{{ noMessagesPlaceholder }}</p>
      </div>
    </div>
    <div class="form">
      <ng-content select="nb-chat-form"></ng-content>
    </div>
  `,
                providers: [
                    NbCustomMessageService,
                ],
                styles: [":host{display:flex;flex-direction:column;position:relative;height:100%}\n"]
            },] }
];
NbChatComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbChatComponent.propDecorators = {
    title: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    noMessagesPlaceholder: [{ type: Input }],
    scrollBottom: [{ type: Input }],
    scrollable: [{ type: ViewChild, args: ['scrollable',] }],
    messages: [{ type: ContentChildren, args: [NbChatMessageComponent,] }],
    chatForm: [{ type: ContentChild, args: [NbChatFormComponent,] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbChatOptions {
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 */
class NbChatMessageMapComponent {
    constructor(options) {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
        this.mapKey = options.messageGoogleMapKey;
    }
    get file() {
        return {
            // tslint:disable-next-line:max-line-length
            url: `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=12&size=400x400&key=${this.mapKey}`,
            type: 'image/png',
            icon: 'location',
        };
    }
}
NbChatMessageMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-map',
                template: `
    <nb-chat-message-file [files]="[file]" [message]="message" [sender]="sender" [date]="date"
     [dateFormat]="dateFormat"></nb-chat-message-file>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageMapComponent.ctorParameters = () => [
    { type: NbChatOptions }
];
NbChatMessageMapComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    latitude: [{ type: Input }],
    longitude: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 */
class NbChatMessageFileComponent {
    constructor(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
    /**
     * Message file path
     * @type {Date}
     */
    set files(files) {
        this.readyFiles = (files || []).map((file) => {
            const isImage = this.isImage(file);
            return Object.assign(Object.assign({}, file), { urlStyle: isImage && this.domSanitizer.bypassSecurityTrustStyle(`url(${file.url})`), isImage: isImage });
        });
        this.cd.detectChanges();
    }
    isImage(file) {
        const type = file.type;
        if (type) {
            return ['image/png', 'image/jpeg', 'image/gif'].includes(type);
        }
        return false;
    }
}
NbChatMessageFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-file',
                template: `
    <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      {{ message }}
    </nb-chat-message-text>

    <ng-container *ngIf="readyFiles?.length > 1">
      <div class="message-content-group">
        <a *ngFor="let file of readyFiles" [href]="file.url" target="_blank">
          <nb-icon [icon]="file.icon" *ngIf="!file.urlStyle && file.icon"></nb-icon>
          <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle"></div>
        </a>
      </div>
    </ng-container>

    <ng-container *ngIf="readyFiles?.length === 1">
      <a [href]="readyFiles[0].url" target="_blank">
        <nb-icon [icon]="readyFiles[0].icon" *ngIf="!readyFiles[0].urlStyle && readyFiles[0].icon"></nb-icon>
        <div *ngIf="readyFiles[0].urlStyle" [style.background-image]="readyFiles[0].urlStyle"></div>
      </a>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageFileComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
NbChatMessageFileComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    files: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 */
class NbChatMessageQuoteComponent {
    constructor() {
        /**
          * Message send date format, default 'shortTime'
          * @type {string}
          */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageQuoteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-quote',
                template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date | date: dateFormat }}</time></p>
    <p class="quote">
      {{ quote }}
    </p>
    <nb-chat-message-text [message]="message">
      {{ message }}
    </nb-chat-message-text>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageQuoteComponent.propDecorators = {
    message: [{ type: Input }],
    sender: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }],
    quote: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 */
class NbChatMessageTextComponent {
    constructor() {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-message-text',
                template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date  | date: dateFormat }}</time></p>
    <p class="text" *ngIf="message">{{ message }}</p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatMessageTextComponent.propDecorators = {
    sender: [{ type: Input }],
    message: [{ type: Input }],
    date: [{ type: Input }],
    dateFormat: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/*
 * Class used as injection token to provide form element.
 **/
class NbFormFieldControl {
}
NbFormFieldControl.decorators = [
    { type: Injectable }
];
/*
 * Optional config to be provided on NbFormFieldControl to alter default settings.
 **/
class NbFormFieldControlConfig {
    constructor() {
        this.supportsPrefix = true;
        this.supportsSuffix = true;
    }
}
NbFormFieldControlConfig.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * Use `<nb-form-field>` to add custom content to the input field.
 * First import `NbFormFieldModule`. Then put the input field and custom content into
 * `<nb-form-field>` and add `nbPrefix` or `nbSuffix` directive to the custom content.
 * `nbPrefix` puts content before input and `nbSuffix` after.
 *
 * @stacked-example(Input with icon, form-field/form-field-input.component)
 * @stacked-example(Input with button, form-field/form-field-password.component)
 *
 * @styles
 *
 * input-border-style:
 * input-border-width:
 * input-outline-color:
 * input-outline-width:
 * input-placeholder-text-font-family:
 * input-text-font-family:
 * input-basic-text-color:
 * input-basic-placeholder-text-color:
 * input-basic-background-color:
 * input-basic-border-color:
 * input-basic-focus-background-color:
 * input-basic-focus-border-color:
 * input-basic-hover-background-color:
 * input-basic-hover-border-color:
 * input-basic-disabled-background-color:
 * input-basic-disabled-border-color:
 * input-basic-disabled-text-color:
 * input-basic-disabled-placeholder-text-color:
 * input-primary-text-color:
 * input-primary-placeholder-text-color:
 * input-primary-background-color:
 * input-primary-border-color:
 * input-primary-focus-background-color:
 * input-primary-focus-border-color:
 * input-primary-hover-background-color:
 * input-primary-hover-border-color:
 * input-primary-disabled-background-color:
 * input-primary-disabled-border-color:
 * input-primary-disabled-text-color:
 * input-primary-disabled-placeholder-text-color:
 * input-success-text-color:
 * input-success-placeholder-text-color:
 * input-success-background-color:
 * input-success-border-color:
 * input-success-focus-background-color:
 * input-success-focus-border-color:
 * input-success-hover-background-color:
 * input-success-hover-border-color:
 * input-success-disabled-background-color:
 * input-success-disabled-border-color:
 * input-success-disabled-text-color:
 * input-success-disabled-placeholder-text-color:
 * input-info-text-color:
 * input-info-placeholder-text-color:
 * input-info-background-color:
 * input-info-border-color:
 * input-info-focus-background-color:
 * input-info-focus-border-color:
 * input-info-hover-background-color:
 * input-info-hover-border-color:
 * input-info-disabled-background-color:
 * input-info-disabled-border-color:
 * input-info-disabled-text-color:
 * input-info-disabled-placeholder-text-color:
 * input-warning-text-color:
 * input-warning-placeholder-text-color:
 * input-warning-background-color:
 * input-warning-border-color:
 * input-warning-focus-background-color:
 * input-warning-focus-border-color:
 * input-warning-hover-background-color:
 * input-warning-hover-border-color:
 * input-warning-disabled-background-color:
 * input-warning-disabled-border-color:
 * input-warning-disabled-text-color:
 * input-warning-disabled-placeholder-text-color:
 * input-danger-text-color:
 * input-danger-placeholder-text-color:
 * input-danger-background-color:
 * input-danger-border-color:
 * input-danger-focus-background-color:
 * input-danger-focus-border-color:
 * input-danger-hover-background-color:
 * input-danger-hover-border-color:
 * input-danger-disabled-background-color:
 * input-danger-disabled-border-color:
 * input-danger-disabled-text-color:
 * input-danger-disabled-placeholder-text-color:
 * input-control-text-color:
 * input-control-placeholder-text-color:
 * input-control-background-color:
 * input-control-border-color:
 * input-control-focus-background-color:
 * input-control-focus-border-color:
 * input-control-hover-background-color:
 * input-control-hover-border-color:
 * input-control-disabled-background-color:
 * input-control-disabled-border-color:
 * input-control-disabled-text-color:
 * input-control-disabled-placeholder-text-color:
 * input-rectangle-border-radius:
 * input-semi-round-border-radius:
 * input-round-border-radius:
 * input-tiny-text-font-size:
 * input-tiny-text-font-weight:
 * input-tiny-text-line-height:
 * input-tiny-placeholder-text-font-size:
 * input-tiny-placeholder-text-font-weight:
 * input-tiny-placeholder-text-line-height:
 * input-tiny-padding:
 * input-tiny-max-width:
 * input-small-text-font-size:
 * input-small-text-font-weight:
 * input-small-text-line-height:
 * input-small-placeholder-text-font-size:
 * input-small-placeholder-text-font-weight:
 * input-small-placeholder-text-line-height:
 * input-small-padding:
 * input-small-max-width:
 * input-medium-text-font-size:
 * input-medium-text-font-weight:
 * input-medium-text-line-height:
 * input-medium-placeholder-text-font-size:
 * input-medium-placeholder-text-font-weight:
 * input-medium-placeholder-text-line-height:
 * input-medium-padding:
 * input-medium-max-width:
 * input-large-text-font-size:
 * input-large-text-font-weight:
 * input-large-text-line-height:
 * input-large-placeholder-text-font-size:
 * input-large-placeholder-text-font-weight:
 * input-large-placeholder-text-line-height:
 * input-large-padding:
 * input-large-max-width:
 * input-giant-text-font-size:
 * input-giant-text-font-weight:
 * input-giant-text-line-height:
 * input-giant-placeholder-text-font-size:
 * input-giant-placeholder-text-font-weight:
 * input-giant-placeholder-text-line-height:
 * input-giant-padding:
 * input-giant-max-width:
 */
class NbInputDirective {
    constructor(elementRef, focusMonitor, renderer, zone, statusService) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        /**
         * Field size modifications. Possible values: `small`, `medium` (default), `large`.
         */
        this.fieldSize = 'medium';
        /**
         * Field status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Field shapes modifications. Possible values: `rectangle` (default), `round`, `semi-round`.
         */
        this.shape = 'rectangle';
        this._fullWidth = false;
        /*
         * @docs-private
         **/
        this.status$ = new BehaviorSubject(this.status);
        /*
         * @docs-private
         **/
        this.size$ = new BehaviorSubject(this.fieldSize);
        /*
         * @docs-private
         **/
        this.focused$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.disabled$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.fullWidth$ = new BehaviorSubject(this.fullWidth);
    }
    /**
     * If set element will fill container. `false` by default.
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngDoCheck() {
        const isDisabled = this.elementRef.nativeElement.disabled;
        if (isDisabled !== this.disabled$.value) {
            this.disabled$.next(isDisabled);
        }
    }
    ngOnChanges({ status, fieldSize, fullWidth }) {
        if (status) {
            this.status$.next(this.status);
        }
        if (fieldSize) {
            this.size$.next(this.fieldSize);
        }
        if (fullWidth) {
            this.fullWidth$.next(this.fullWidth);
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.elementRef)), takeUntil(this.destroy$))
            .subscribe(this.focused$);
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    get tiny() {
        return this.fieldSize === 'tiny';
    }
    get small() {
        return this.fieldSize === 'small';
    }
    get medium() {
        return this.fieldSize === 'medium';
    }
    get large() {
        return this.fieldSize === 'large';
    }
    get giant() {
        return this.fieldSize === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
}
NbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbInput],textarea[nbInput]',
                providers: [
                    { provide: NbFormFieldControl, useExisting: NbInputDirective },
                ],
            },] }
];
NbInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbInputDirective.propDecorators = {
    fieldSize: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.input-full-width',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_INPUT_COMPONENTS = [
    NbInputDirective,
];
class NbInputModule {
}
NbInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule],
                declarations: NB_INPUT_COMPONENTS,
                exports: NB_INPUT_COMPONENTS,
            },] }
];

class NbChatAvatarComponent {
    constructor() {
        this.avatarClass = true;
    }
}
NbChatAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-chat-avatar',
                template: `
    <ng-container *ngIf="!avatarStyle">
      {{ initials }}
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbChatAvatarComponent.propDecorators = {
    initials: [{ type: Input }],
    avatarStyle: [{ type: Input }, { type: HostBinding, args: ['style.background-image',] }],
    avatarClass: [{ type: HostBinding, args: ['class.avatar',] }]
};

function throwCustomMessageTypeIsRequired() {
    throw new Error('[nbCustomMessage]: custom message type is required.');
}
/**
 * `[nbCustomMessage]` directive should be used as a structural directive or should be applied to the `ng-template`:
 *
 * ```html
 * <div *nbCustomMessage="'my-custom-type'; let data">
 *   <!-- custom message -->
 * </div>
 * ```
 * or
 * ```html
 * <ng-template nbCustomMessage='my-custom-type' let-data>
 *   <!-- custom message -->
 * </ng-template>
 * ```
 */
class NbChatCustomMessageDirective {
    constructor(templateRef, customMessageService) {
        this.templateRef = templateRef;
        this.customMessageService = customMessageService;
        this._noStyles = false;
    }
    /**
     * Defines a message type which should rendered with the custom message template.
     * @type {string}
     */
    get nbCustomMessage() {
        return this._type;
    }
    set nbCustomMessage(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Disables generic message styles, such as round corners, text color, background, etc.,
     * so a custom message could be styled from the ground up.
     *
     * @type {boolean}
     */
    set nbCustomMessageNoStyles(value) {
        this._noStyles = convertToBoolProperty(value);
    }
    get nbCustomMessageNoStyles() {
        return this._noStyles;
    }
    get noStyles() {
        return this.nbCustomMessageNoStyles;
    }
    ngOnInit() {
        if (!this._type) {
            throwCustomMessageTypeIsRequired();
        }
        this.customMessageService.register(this.type, this);
    }
    ngOnDestroy() {
        this.customMessageService.unregister(this.type);
    }
}
NbChatCustomMessageDirective.decorators = [
    { type: Directive, args: [{
                selector: `[nbCustomMessage]`,
            },] }
];
NbChatCustomMessageDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: NbCustomMessageService }
];
NbChatCustomMessageDirective.propDecorators = {
    nbCustomMessage: [{ type: Input }],
    nbCustomMessageNoStyles: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_CHAT_COMPONENTS = [
    NbChatComponent,
    NbChatMessageComponent,
    NbChatFormComponent,
    NbChatMessageTextComponent,
    NbChatMessageFileComponent,
    NbChatMessageQuoteComponent,
    NbChatMessageMapComponent,
    NbChatAvatarComponent,
];
const NB_CHAT_DIRECTIVES = [
    NbChatCustomMessageDirective,
];
class NbChatModule {
    static forRoot(options) {
        return {
            ngModule: NbChatModule,
            providers: [
                { provide: NbChatOptions, useValue: options || {} },
            ],
        };
    }
    static forChild(options) {
        return {
            ngModule: NbChatModule,
            providers: [
                { provide: NbChatOptions, useValue: options || {} },
            ],
        };
    }
}
NbChatModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                    NbInputModule,
                    NbButtonModule,
                ],
                declarations: [
                    ...NB_CHAT_COMPONENTS,
                    ...NB_CHAT_DIRECTIVES,
                ],
                exports: [
                    ...NB_CHAT_COMPONENTS,
                    ...NB_CHAT_DIRECTIVES,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Styled spinner component
 *
 * @styles
 *
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-basic-background-color:
 * spinner-basic-circle-filled-color:
 * spinner-basic-circle-empty-color:
 * spinner-primary-background-color:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-background-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-background-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-background-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-background-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-control-background-color:
 * spinner-control-circle-filled-color:
 * spinner-control-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
class NbSpinnerComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
        /**
         * Spinner size, available sizes:
         * tiny, small, medium, large, giant
         * @param {string} value
         */
        this.size = 'medium';
        /**
         * Spinner status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-spinner',
                template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `,
                styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem}\n"]
            },] }
];
NbSpinnerComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbSpinnerComponent.propDecorators = {
    message: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
class NbSpinnerDirective {
    constructor(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        /**
         * Spinner status color
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.spinnerStatus = 'basic';
        /**
         * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.spinnerSize = 'medium';
        this.isSpinnerExist = false;
    }
    /**
     * Directive value - show or hide spinner
     * @param {boolean} val
     */
    set nbSpinner(val) {
        if (this.componentFactory) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        else {
            this.shouldShow = val;
        }
    }
    ngOnInit() {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    }
    hide() {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    }
    show() {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    }
    setInstanceInputs(instance) {
        instance.message = this.spinnerMessage;
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    }
}
NbSpinnerDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSpinner]' },] }
];
NbSpinnerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ElementRef }
];
NbSpinnerDirective.propDecorators = {
    spinnerMessage: [{ type: Input, args: ['nbSpinnerMessage',] }],
    spinnerStatus: [{ type: Input, args: ['nbSpinnerStatus',] }],
    spinnerSize: [{ type: Input, args: ['nbSpinnerSize',] }],
    nbSpinner: [{ type: Input, args: ['nbSpinner',] }],
    isSpinnerExist: [{ type: HostBinding, args: ['class.nb-spinner-container',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbSpinnerModule {
}
NbSpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                ],
                exports: [NbSpinnerComponent, NbSpinnerDirective],
                declarations: [NbSpinnerComponent, NbSpinnerDirective],
                entryComponents: [NbSpinnerComponent],
            },] }
];

const NB_STEPPER = new InjectionToken('Nebular Stepper Component');

/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
class NbStepComponent {
    constructor(stepper) {
        this._hidden = false;
        this._completed = false;
        this.interacted = false;
        this.stepper = stepper;
    }
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    get hidden() {
        return this._hidden;
    }
    set hidden(value) {
        this._hidden = convertToBoolProperty(value);
    }
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    get isLabelTemplate() {
        return this.label instanceof TemplateRef;
    }
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    get completed() {
        return this._completed || this.isCompleted;
    }
    set completed(value) {
        this._completed = convertToBoolProperty(value);
    }
    get isCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /**
     * Mark step as selected
     * */
    select() {
        this.stepper.selected = this;
    }
    /**
     * Reset step and stepControl state
     * */
    reset() {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
}
NbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-step',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
            },] }
];
NbStepComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_STEPPER,] }] }
];
NbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    stepControl: [{ type: Input }],
    label: [{ type: Input }],
    hidden: [{ type: Input }],
    completed: [{ type: Input }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   </nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   </nb-step>
 * </nb-stepper>
 * ```
 *
 * When linear mode enabled user can't move forward unless current step is complete.
 * @stacked-example(Linear, stepper/stepper-linear.component)
 *
 * Specify `[stepControl]="form"` and stepper allow go to the next step only if form is valid.
 * You can disable it via `linear` mode setting.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   </nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * `disableStepNavigation` disables navigation by clicking on steps, so user can navigate only using
 * 'nbStepperPrevious' and 'nbStepperNext' buttons.
 * @stacked-example(Disabled steps navigation, stepper/stepper-disabled-step-nav.component)
 *
 * @styles
 *
 * stepper-step-text-color:
 * stepper-step-text-font-family:
 * stepper-step-text-font-size:
 * stepper-step-text-font-weight:
 * stepper-step-text-line-height:
 * stepper-step-active-text-color:
 * stepper-step-completed-text-color:
 * stepper-step-index-border-color:
 * stepper-step-index-border-style:
 * stepper-step-index-border-width:
 * stepper-step-index-border-radius:
 * stepper-step-index-width:
 * stepper-step-index-active-border-color:
 * stepper-step-index-completed-background-color:
 * stepper-step-index-completed-border-color:
 * stepper-step-index-completed-text-color:
 * stepper-connector-background-color:
 * stepper-connector-completed-background-color:
 * stepper-horizontal-connector-margin:
 * stepper-vertical-connector-margin:
 * stepper-step-content-padding:
 */
class NbStepperComponent {
    constructor() {
        this._selectedIndex = 0;
        this._disableStepNavigation = false;
        /**
         * Stepper orientation - `horizontal`|`vertical`
         */
        this.orientation = 'horizontal';
        this._linear = true;
    }
    /**
     * Selected step index
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        if (!this.steps) {
            this._selectedIndex = index;
            return;
        }
        this.markCurrentStepInteracted();
        if (this.canBeSelected(index)) {
            this._selectedIndex = index;
        }
    }
    /**
     * Disables navigation by clicking on steps. False by default
     * @param {boolean} value
     */
    set disableStepNavigation(value) {
        this._disableStepNavigation = convertToBoolProperty(value);
    }
    get disableStepNavigation() {
        return this._disableStepNavigation;
    }
    /**
     * Selected step component
     */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        if (!this.steps) {
            return;
        }
        this.selectedIndex = this.steps.toArray().indexOf(step);
    }
    /**
     * Allow moving forward only if the current step is complete
     * @default true
     */
    set linear(value) {
        this._linear = convertToBoolProperty(value);
    }
    get linear() {
        return this._linear;
    }
    get vertical() {
        return this.orientation === 'vertical';
    }
    get horizontal() {
        return this.orientation === 'horizontal';
    }
    /**
     * Navigate to next step
     * */
    next() {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.steps.length - 1);
    }
    /**
     * Navigate to previous step
     * */
    previous() {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset() {
        this._selectedIndex = 0;
        this.steps.forEach(step => step.reset());
    }
    isStepSelected(step) {
        return this.selected === step;
    }
    /*
     * @docs-private
     **/
    getStepTemplate(step) {
        if (step.isLabelTemplate) {
            return step.label;
        }
        return null;
    }
    isStepValid(index) {
        return this.steps.toArray()[index].completed;
    }
    canBeSelected(indexToCheck) {
        const noSteps = !this.steps || this.steps.length === 0;
        if (noSteps || indexToCheck < 0 || indexToCheck >= this.steps.length) {
            return false;
        }
        if (indexToCheck <= this.selectedIndex || !this.linear) {
            return true;
        }
        let isAllStepsValid = true;
        for (let i = this.selectedIndex; i < indexToCheck; i++) {
            if (!this.isStepValid(i)) {
                isAllStepsValid = false;
                break;
            }
        }
        return isAllStepsValid;
    }
    markCurrentStepInteracted() {
        if (this.selected) {
            this.selected.interacted = true;
        }
    }
}
NbStepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-stepper',
                template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template>\n<div class=\"header\">\n  <ng-container *ngFor=\"let step of steps; let index = index; let first = first\">\n\n    <div *ngIf=\"!first && !step.hidden\"\n         [class.connector-past]=\"index <= selectedIndex\"\n         class=\"connector\"></div>\n\n    <div *ngIf=\"!step.hidden\" class=\"step\"\n         [class.selected]=\"isStepSelected(step)\"\n         [class.completed]=\"!isStepSelected(step) && step.completed\"\n         [class.noninteractive]=\"disableStepNavigation\"\n         (click)=\"!disableStepNavigation && step.select()\">\n      <div class=\"label-index\">\n        <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span>\n        <nb-icon *ngIf=\"!isStepSelected(step) && step.completed\" icon=\"checkmark-outline\" pack=\"nebular-essentials\">\n        </nb-icon>\n      </div>\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.isLabelTemplate\">\n          <ng-container *ngTemplateOutlet=\"getStepTemplate(step)\"></ng-container>\n        </ng-container>\n        <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<div class=\"step-content\">\n  <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container>\n</div>\n",
                providers: [{ provide: NB_STEPPER, useExisting: NbStepperComponent }],
                styles: [":host(.horizontal) .header .step{flex-direction:column}:host(.horizontal) .header .connector{height:2px}:host(.horizontal) .label-index{margin-bottom:10px}:host(.vertical){display:flex;height:100%}:host(.vertical) .header{flex-direction:column}:host(.vertical) .header .label{margin:0 10px}:host(.vertical) .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .step.noninteractive{cursor:default}.header .label-index{display:flex;justify-content:center;align-items:center}.header .label{width:max-content}\n"]
            },] }
];
NbStepperComponent.propDecorators = {
    selectedIndex: [{ type: Input }],
    disableStepNavigation: [{ type: Input }],
    selected: [{ type: Input }],
    orientation: [{ type: Input }],
    linear: [{ type: Input }],
    vertical: [{ type: HostBinding, args: ['class.vertical',] }],
    horizontal: [{ type: HostBinding, args: ['class.horizontal',] }],
    steps: [{ type: ContentChildren, args: [NbStepComponent,] }]
};

class NbStepperNextDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    onClick() {
        this.stepper.next();
    }
}
NbStepperNextDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbStepperNext]',
            },] }
];
NbStepperNextDirective.ctorParameters = () => [
    { type: NbStepperComponent }
];
NbStepperNextDirective.propDecorators = {
    type: [{ type: Input }, { type: HostBinding, args: ['attr.type',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
class NbStepperPreviousDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    onClick() {
        this.stepper.previous();
    }
}
NbStepperPreviousDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbStepperPrevious]',
            },] }
];
NbStepperPreviousDirective.ctorParameters = () => [
    { type: NbStepperComponent }
];
NbStepperPreviousDirective.propDecorators = {
    type: [{ type: Input }, { type: HostBinding, args: ['attr.type',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbStepperModule {
}
NbStepperModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                ],
                declarations: [
                    NbStepperComponent,
                    NbStepComponent,
                    NbStepperNextDirective,
                    NbStepperPreviousDirective,
                ],
                exports: [
                    NbStepperComponent,
                    NbStepComponent,
                    NbStepperNextDirective,
                    NbStepperPreviousDirective,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode accordion can have multiple items expanded:
 * @stacked-example(Multiple expanded items, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several methods, for example it is possible to trigger item click/toggle:
 * @stacked-example(Expand API, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-border-radius:
 * accordion-padding:
 * accordion-shadow:
 * accordion-header-text-color:
 * accordion-header-text-font-family:
 * accordion-header-text-font-size:
 * accordion-header-text-font-weight:
 * accordion-header-text-line-height:
 * accordion-header-disabled-text-color:
 * accordion-header-border-color:
 * accordion-header-border-style:
 * accordion-header-border-width:
 * accordion-item-background-color:
 * accordion-item-text-color:
 * accordion-item-text-font-family:
 * accordion-item-text-font-size:
 * accordion-item-text-font-weight:
 * accordion-item-text-line-height:
 */
class NbAccordionComponent {
    constructor() {
        this.openCloseItems = new Subject();
        this.multiValue = false;
    }
    /**
     *  Allow multiple items to be expanded at the same time.
     * @type {boolean}
     */
    get multi() {
        return this.multiValue;
    }
    set multi(val) {
        this.multiValue = convertToBoolProperty(val);
    }
    /**
     * Opens all enabled accordion items.
     */
    openAll() {
        if (this.multi) {
            this.openCloseItems.next(false);
        }
    }
    /**
     * Closes all enabled accordion items.
     */
    closeAll() {
        this.openCloseItems.next(true);
    }
}
NbAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion',
                template: `
    <ng-content select="nb-accordion-item"></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbAccordionComponent.propDecorators = {
    multi: [{ type: Input, args: ['multi',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Component intended to be used within `<nb-accordion>` component
 */
class NbAccordionItemComponent {
    constructor(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new EventEmitter();
        this.accordionItemInvalidate = new Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.destroy$ = new Subject();
    }
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    get collapsed() {
        return this.collapsedValue;
    }
    set collapsed(val) {
        this.collapsedValue = convertToBoolProperty(val);
        this.collapsedChange.emit(this.collapsedValue);
        this.invalidate();
    }
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    get expanded() {
        return !this.collapsed;
    }
    set expanded(val) {
        this.collapsedValue = !convertToBoolProperty(val);
    }
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled() {
        return this.disabledValue;
    }
    set disabled(val) {
        this.disabledValue = convertToBoolProperty(val);
        this.invalidate();
    }
    /**
     * Open/close the item
     */
    toggle() {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            const willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    }
    /**
     * Open the item.
     */
    open() {
        !this.disabled && (this.collapsed = false);
    }
    /**
     * Collapse the item.
     */
    close() {
        !this.disabled && (this.collapsed = true);
    }
    ngOnInit() {
        this.accordion.openCloseItems
            .pipe(takeUntil(this.destroy$))
            .subscribe(collapsed => {
            !this.disabled && (this.collapsed = collapsed);
        });
    }
    ngOnChanges(changes) {
        this.accordionItemInvalidate.next(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.accordionItemInvalidate.complete();
    }
    invalidate() {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    }
}
NbAccordionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item',
                template: `
    <ng-content select="nb-accordion-item-header"></ng-content>
    <ng-content select="nb-accordion-item-body"></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column}\n"]
            },] }
];
NbAccordionItemComponent.ctorParameters = () => [
    { type: NbAccordionComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];
NbAccordionItemComponent.propDecorators = {
    collapsed: [{ type: Input, args: ['collapsed',] }, { type: HostBinding, args: ['class.collapsed',] }],
    expanded: [{ type: Input, args: ['expanded',] }, { type: HostBinding, args: ['class.expanded',] }],
    disabled: [{ type: Input, args: ['disabled',] }, { type: HostBinding, args: ['class.disabled',] }],
    collapsedChange: [{ type: Output }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const accordionItemBodyTrigger = trigger('accordionItemBody', [
    state('collapsed', style({
        overflow: 'hidden',
        visibility: 'hidden',
        height: 0,
    })),
    state('expanded', style({
        overflow: 'hidden',
        visibility: 'visible',
    })),
    transition('collapsed => expanded', animate('100ms ease-in')),
    transition('expanded => collapsed', animate('100ms ease-out')),
]);
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
class NbAccordionItemBodyComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get state() {
        return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
    }
    ngOnInit() {
        this.accordionItem.accordionItemInvalidate
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAccordionItemBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item-body',
                template: `
    <div [@accordionItemBody]="{ value: state }">
      <div class="item-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                animations: [accordionItemBodyTrigger],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbAccordionItemBodyComponent.ctorParameters = () => [
    { type: NbAccordionItemComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
class NbAccordionItemHeaderComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get isCollapsed() {
        return this.accordionItem.collapsed;
    }
    get expanded() {
        return !this.accordionItem.collapsed;
    }
    // issue #794
    get tabbable() {
        return this.accordionItem.disabled ? '-1' : '0';
    }
    get disabled() {
        return this.accordionItem.disabled;
    }
    toggle() {
        this.accordionItem.toggle();
    }
    get state() {
        if (this.isCollapsed) {
            return 'collapsed';
        }
        if (this.expanded) {
            return 'expanded';
        }
    }
    ngOnInit() {
        this.accordionItem.accordionItemInvalidate
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAccordionItemHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-accordion-item-header',
                template: `
    <ng-content select="nb-accordion-item-title"></ng-content>
    <ng-content select="nb-accordion-item-description"></ng-content>
    <ng-content></ng-content>
    <nb-icon icon="chevron-down-outline"
             pack="nebular-essentials"
             [@expansionIndicator]="state"
             *ngIf="!disabled"
             class="expansion-indicator">
    </nb-icon>
  `,
                animations: [
                    trigger('expansionIndicator', [
                        state('expanded', style({
                            transform: 'rotate(180deg)',
                        })),
                        transition('collapsed => expanded', animate('100ms ease-in')),
                        transition('expanded => collapsed', animate('100ms ease-out')),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0}\n"]
            },] }
];
NbAccordionItemHeaderComponent.ctorParameters = () => [
    { type: NbAccordionItemComponent, decorators: [{ type: Host }] },
    { type: ChangeDetectorRef }
];
NbAccordionItemHeaderComponent.propDecorators = {
    isCollapsed: [{ type: HostBinding, args: ['class.accordion-item-header-collapsed',] }],
    expanded: [{ type: HostBinding, args: ['class.accordion-item-header-expanded',] }, { type: HostBinding, args: ['attr.aria-expanded',] }],
    tabbable: [{ type: HostBinding, args: ['attr.tabindex',] }],
    disabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    toggle: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.space',] }, { type: HostListener, args: ['keydown.enter',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_ACCORDION_COMPONENTS = [
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
];
class NbAccordionModule {
}
NbAccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NbIconModule],
                exports: [...NB_ACCORDION_COMPONENTS],
                declarations: [...NB_ACCORDION_COMPONENTS],
                providers: [],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
class NbButtonToggleDirective extends NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        this._pressedChange$ = new Subject();
        this.appearance = 'filled';
        this._pressed = false;
        /**
         * Emits whenever button pressed state change
         **/
        this.pressedChange = new EventEmitter();
    }
    get pressedChange$() {
        return this._pressedChange$.asObservable();
    }
    /**
     * Controls button pressed state
     **/
    get pressed() {
        return this._pressed;
    }
    set pressed(value) {
        if (this.pressed !== convertToBoolProperty(value)) {
            this._pressed = !this.pressed;
            this.pressedChange.emit(this.pressed);
            this._pressedChange$.next({ source: this, pressed: this.pressed });
        }
    }
    get basic() {
        // By design, all toggle buttons should have a `basic` status when not pressed.
        return !this.pressed;
    }
    get primary() {
        return this.pressed && (this.status === 'basic' || this.status === 'primary');
    }
    get success() {
        return this.pressed && this.status === 'success';
    }
    get info() {
        return this.pressed && this.status === 'info';
    }
    get warning() {
        return this.pressed && this.status === 'warning';
    }
    get danger() {
        return this.pressed && this.status === 'danger';
    }
    get control() {
        return this.pressed && this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onClick() {
        this.pressed = !this.pressed;
    }
    /**
     * @docs-private
     */
    _updatePressed(value) {
        this.pressed = value;
        this.cd.markForCheck();
    }
}
NbButtonToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nbButtonToggle]',
                providers: [
                    { provide: NbButton, useExisting: NbButtonToggleDirective },
                ],
                exportAs: 'nbButtonToggle',
            },] }
];
NbButtonToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbButtonToggleDirective.propDecorators = {
    appearance: [{ type: Input }],
    value: [{ type: Input }],
    pressed: [{ type: Input }, { type: HostBinding, args: ['attr.aria-pressed',] }],
    pressedChange: [{ type: Output }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * `<nb-button-group>` visually groups buttons together and allow to control buttons properties and the state as a
 * group.
 * @stacked-example(Button Group Showcase, button-group/button-group-showcase.component)
 *
 * ### Installation
 *
 * Import `NbButtonGroupModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbButtonGroupModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * You can use `<nb-button-group>` to group a series of `[nbButton]` or `[nbButtonToggle]` components.
 * @stacked-example(Button and Button Toggle Groups, button-group/button-and-button-toggle-groups.component)
 *
 * For a group of multiple `[nbButtonToggle]` you also can control multi-selection behavior. By default, the group
 * component allows only one pressed button toggle at a time (similar to the radio group). To be able to keep multiple
 * toggles pressed, you need to add `multiple` attributes to the `<nb-button-toggle>`.
 * @stacked-example(Button Group Multiple, button-group/button-group-multiple.component)
 *
 * To know which buttons are currently pressed listen to `(valueChange)` on the `nb-button-group`. Event
 * contains an array of values of currently pressed button toggles. You can assign a value to the
 * `[nbButtonToggle]` via the `value` input.
 * @stacked-example(Button Group Value Change, button-group/button-group-value-change.component)
 *
 * To disable a group of buttons, add a `disabled` attribute to the `<nb-button-group>`.
 * @stacked-example(Button Group Disabled, button-group/button-group-disabled.component)
 *
 * The group component controls all visual attributes of buttons such as `appearance`, `status`, `size`, `shape`.
 * You can change it via the appropriate attributes.
 *
 * Button group appearances:
 * @stacked-example(Button Group Appearances, button-group/button-group-appearances.component)
 *
 * Button group statuses:
 * @stacked-example(Button Group Statuses, button-group/button-group-statuses.component)
 *
 * Button group sizes:
 * @stacked-example(Button Group Sizes, button-group/button-group-sizes.component)
 *
 * Buttons group shapes:
 * @additional-example(Button Group Shapes, button-group/button-group-shapes.component)
 *
 * @styles
 *
 * button-group-filled-button-basic-text-color:
 * button-group-filled-button-primary-text-color:
 * button-group-filled-button-success-text-color:
 * button-group-filled-button-info-text-color:
 * button-group-filled-button-warning-text-color:
 * button-group-filled-button-danger-text-color:
 * button-group-filled-button-control-text-color:
 * button-group-filled-basic-divider-color:
 * button-group-filled-primary-divider-color:
 * button-group-filled-success-divider-color:
 * button-group-filled-info-divider-color:
 * button-group-filled-warning-divider-color:
 * button-group-filled-danger-divider-color:
 * button-group-filled-control-divider-color:
 * button-group-ghost-divider-color:
 **/
class NbButtonGroupComponent {
    constructor(cd, statusService) {
        this.cd = cd;
        this.statusService = statusService;
        this.lastEmittedValue = [];
        this.destroy$ = new Subject();
        this.buttonsChange$ = new Subject();
        /**
         * Button group size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button group status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Button group shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button group appearance: `filled`, `outline`, `ghost`
         */
        this.appearance = 'filled';
        this._disabled = false;
        this._multiple = false;
        /**
         * Emits when `nbButtonToggle` pressed state change. `$event` contains an array of the currently pressed button
         * toggles.
         */
        this.valueChange = new EventEmitter();
        this.role = 'group';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
        }
    }
    /**
     * Allows to keep multiple button toggles pressed. Off by default.
     */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngOnChanges({ size, status, shape, multiple, filled, outline, ghost, disabled }) {
        var _a;
        if (size || status || shape || multiple || filled || outline || ghost || disabled) {
            this.syncButtonsProperties(((_a = this.buttons) === null || _a === void 0 ? void 0 : _a.toArray()) || []);
        }
    }
    ngAfterContentInit() {
        this.buttonsChange$
            .pipe(takeUntil(this.destroy$))
            .subscribe((buttons) => {
            this.listenButtonPressedState(buttons);
            this.syncButtonsProperties(buttons);
        });
        this.buttons.changes
            .pipe(
        // `buttons.changes` emit during change detection run after projected content already was initialized.
        // So at this time, it's too late to update projected buttons properties as updating bindings after
        // initialization doesn't make sense. Changes won't be picked up and should cause an "expression changed" error.
        // Instead, we wrap the new buttons list into a promise to defer update to the following microtask and also to
        // trigger change detection one more time.
        switchMap((buttons) => from(Promise.resolve(buttons.toArray()))), takeUntil(this.destroy$))
            .subscribe(this.buttonsChange$);
        this.buttonsChange$.next(this.buttons.toArray());
    }
    listenButtonPressedState(buttons) {
        const toggleButtons = buttons.filter((button) => {
            return button instanceof NbButtonToggleDirective;
        });
        if (!toggleButtons.length) {
            return;
        }
        const buttonsPressedChange$ = toggleButtons
            .map((button) => button.pressedChange$);
        merge(...buttonsPressedChange$)
            .pipe(filter(({ pressed }) => !this.multiple && pressed), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(({ source }) => {
            toggleButtons
                .filter((button) => button !== source)
                .forEach((button) => button._updatePressed(false));
        });
        merge(...buttonsPressedChange$)
            .pipe(
        // Use startWith to emit if some buttons are initially pressed.
        startWith(''), 
        // Use debounce to emit change once when pressed state change in multiple button toggles.
        debounceTime(0), takeUntil(merge(this.buttonsChange$, this.destroy$)))
            .subscribe(() => this.emitCurrentValue(toggleButtons));
    }
    syncButtonsProperties(buttons) {
        buttons.forEach((button) => {
            button.updateProperties({
                appearance: this.appearance,
                size: this.size,
                status: this.status,
                shape: this.shape,
                disabled: this.disabled,
            });
        });
    }
    emitCurrentValue(toggleButtons) {
        const pressedToggleValues = toggleButtons
            .filter((b) => b.pressed && typeof b.value !== 'undefined')
            .map((b) => b.value);
        // Prevent multiple emissions of empty value.
        if (pressedToggleValues.length === 0 && this.lastEmittedValue.length === 0) {
            return;
        }
        this.valueChange.emit(pressedToggleValues);
        this.lastEmittedValue = pressedToggleValues;
    }
}
NbButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-button-group',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbButtonGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NbStatusService }
];
NbButtonGroupComponent.propDecorators = {
    buttons: [{ type: ContentChildren, args: [NbButton,] }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    filled: [{ type: Input }],
    outline: [{ type: Input }],
    ghost: [{ type: Input }],
    valueChange: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbButtonGroupModule {
}
NbButtonGroupModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NbButtonGroupComponent, NbButtonToggleDirective],
                exports: [NbButtonGroupComponent, NbButtonToggleDirective],
            },] }
];

/**
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-divider-color:
 * list-item-divider-style:
 * list-item-divider-width:
 * list-item-padding:
 * list-item-text-color:
 * list-item-font-family:
 * list-item-font-size:
 * list-item-font-weight:
 * list-item-line-height:
 */
class NbListComponent {
    constructor() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'list';
    }
}
NbListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-list',
                template: `<ng-content select="nb-list-item"></ng-content>`,
                styles: [":host{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}\n"]
            },] }
];
NbListComponent.propDecorators = {
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }]
};
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */
class NbListItemComponent {
    constructor() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'listitem';
    }
}
NbListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-list-item',
                template: `<ng-content></ng-content>`,
                styles: [":host{display:flex;align-items:center;flex-shrink:0}\n"]
            },] }
];
NbListItemComponent.propDecorators = {
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }]
};

/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
class NbListPageTrackerDirective {
    constructor() {
        this.destroy$ = new Subject();
        /**
         * Page to start counting with.
         */
        this.startPage = 1;
        /**
         * Emits when another page become visible.
         */
        this.pageChange = new EventEmitter();
        this.observer = new IntersectionObserver(entries => this.checkForPageChange(entries), { threshold: 0.5 });
    }
    ngAfterViewInit() {
        if (this.listItems && this.listItems.length) {
            this.observeItems();
        }
        this.listItems.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.observeItems());
    }
    ngOnDestroy() {
        this.observer.disconnect && this.observer.disconnect();
    }
    observeItems() {
        this.listItems.forEach(i => this.observer.observe(i.nativeElement));
    }
    checkForPageChange(entries) {
        const mostVisiblePage = this.findMostVisiblePage(entries);
        if (mostVisiblePage && this.currentPage !== mostVisiblePage) {
            this.currentPage = mostVisiblePage;
            this.pageChange.emit(this.currentPage);
        }
    }
    findMostVisiblePage(entries) {
        const intersectionRatioByPage = new Map();
        for (const entry of entries) {
            if (entry.intersectionRatio < 0.5) {
                continue;
            }
            const elementIndex = this.elementIndex(entry.target);
            if (elementIndex === -1) {
                continue;
            }
            const page = this.startPage + Math.floor(elementIndex / this.pageSize);
            let ratio = entry.intersectionRatio;
            if (intersectionRatioByPage.has(page)) {
                ratio += intersectionRatioByPage.get(page);
            }
            intersectionRatioByPage.set(page, ratio);
        }
        let maxRatio = 0;
        let mostVisiblePage;
        intersectionRatioByPage.forEach((ratio, page) => {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisiblePage = page;
            }
        });
        return mostVisiblePage;
    }
    elementIndex(element) {
        return element.parentElement && element.parentElement.children
            ? Array.from(element.parentElement.children).indexOf(element)
            : -1;
    }
}
NbListPageTrackerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbListPageTracker]',
            },] }
];
NbListPageTrackerDirective.ctorParameters = () => [];
NbListPageTrackerDirective.propDecorators = {
    pageSize: [{ type: Input }],
    startPage: [{ type: Input }],
    pageChange: [{ type: Output }],
    listItems: [{ type: ContentChildren, args: [NbListItemComponent, { read: ElementRef },] }]
};

class NbScrollableContainerDimentions {
}
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to a given threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
class NbInfiniteListDirective {
    constructor(elementRef, scrollService, dimensionsService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.dimensionsService = dimensionsService;
        this.destroy$ = new Subject();
        this.windowScroll = false;
        /**
         * Emits when distance between list bottom and current scroll position is less than threshold.
         */
        this.bottomThreshold = new EventEmitter(true);
        /**
         * Emits when distance between list top and current scroll position is less than threshold.
         */
        this.topThreshold = new EventEmitter(true);
    }
    get elementScroll() {
        return !this.windowScroll;
    }
    /**
     * By default component observes list scroll position.
     * If set to `true`, component will observe position of page scroll instead.
     */
    set listenWindowScroll(value) {
        this.windowScroll = convertToBoolProperty(value);
    }
    onElementScroll() {
        if (this.elementScroll) {
            this.checkPosition(this.elementRef.nativeElement);
        }
    }
    ngAfterViewInit() {
        this.scrollService.onScroll()
            .pipe(filter(() => this.windowScroll), switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe(dimentions => this.checkPosition(dimentions));
        this.listItems.changes
            .pipe(
        // For some reason, changes are emitted before list item removed from dom,
        // so dimensions will be incorrect.
        // Check every 50ms for a second if dom and query are in sync.
        // Once they synchronized, we can get proper dimensions.
        switchMap(() => interval(50).pipe(filter(() => this.inSyncWithDom()), take(1), takeUntil(timer(1000)))), switchMap(() => this.getContainerDimensions()), takeUntil(this.destroy$))
            .subscribe(dimentions => this.checkPosition(dimentions));
        this.getContainerDimensions().subscribe(dimentions => this.checkPosition(dimentions));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkPosition({ scrollHeight, scrollTop, clientHeight }) {
        const initialCheck = this.lastScrollPosition == null;
        const manualCheck = this.lastScrollPosition === scrollTop;
        const scrollUp = scrollTop < this.lastScrollPosition;
        const scrollDown = scrollTop > this.lastScrollPosition;
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;
        if ((initialCheck || manualCheck || scrollDown) && distanceToBottom <= this.threshold) {
            this.bottomThreshold.emit();
        }
        if ((initialCheck || scrollUp) && scrollTop <= this.threshold) {
            this.topThreshold.emit();
        }
        this.lastScrollPosition = scrollTop;
    }
    getContainerDimensions() {
        if (this.elementScroll) {
            const { scrollTop, scrollHeight, clientHeight } = this.elementRef.nativeElement;
            return of({ scrollTop, scrollHeight, clientHeight });
        }
        return forkJoin([this.scrollService.getPosition(), this.dimensionsService.getDimensions()])
            .pipe(map(([scrollPosition, dimensions]) => ({
            scrollTop: scrollPosition.y,
            scrollHeight: dimensions.scrollHeight,
            clientHeight: dimensions.clientHeight,
        })));
    }
    inSyncWithDom() {
        return this.elementRef.nativeElement.children.length === this.listItems.length;
    }
}
NbInfiniteListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbInfiniteList]',
            },] }
];
NbInfiniteListDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbLayoutScrollService },
    { type: NbLayoutRulerService }
];
NbInfiniteListDirective.propDecorators = {
    threshold: [{ type: Input }],
    listenWindowScroll: [{ type: Input }],
    bottomThreshold: [{ type: Output }],
    topThreshold: [{ type: Output }],
    onElementScroll: [{ type: HostListener, args: ['scroll',] }],
    listItems: [{ type: ContentChildren, args: [NbListItemComponent,] }]
};

const components = [
    NbListComponent,
    NbListItemComponent,
    NbListPageTrackerDirective,
    NbInfiniteListDirective,
];
class NbListModule {
}
NbListModule.decorators = [
    { type: NgModule, args: [{
                declarations: components,
                exports: components,
            },] }
];

class NbDirectionality extends Directionality {
}
NbDirectionality.decorators = [
    { type: Injectable }
];

class NbBidiModule extends BidiModule {
}
NbBidiModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: NbDirectionality, useExisting: Directionality },
                ],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license infornbion.
 */
/**
 * Cell definition for the nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class NbCellDefDirective extends CdkCellDef {
}
NbCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: NbCellDefDirective }],
            },] }
];
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class NbHeaderCellDefDirective extends CdkHeaderCellDef {
}
NbHeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: NbHeaderCellDefDirective }],
            },] }
];
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class NbFooterCellDefDirective extends CdkFooterCellDef {
}
NbFooterCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: NbFooterCellDefDirective }],
            },] }
];
const NB_SORT_HEADER_COLUMN_DEF = new InjectionToken('NB_SORT_HEADER_COLUMN_DEF');
/**
 * Column definition for the nb-table.
 * Defines a set of cells available for a table column.
 */
class NbColumnDefDirective extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /** Whether this column should be sticky positioned on the end of the row */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(value) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(value);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
NbColumnDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbColumnDef]',
                providers: [
                    { provide: CdkColumnDef, useExisting: NbColumnDefDirective },
                    { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbColumnDefDirective },
                ],
            },] }
];
NbColumnDefDirective.propDecorators = {
    name: [{ type: Input, args: ['nbColumnDef',] }],
    sticky: [{ type: Input }],
    stickyEnd: [{ type: Input }]
};
/** Header cell template container that adds the right classes and role. */
class NbHeaderCellDirective extends CdkHeaderCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbHeaderCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-header-cell, th[nbHeaderCell]',
                host: {
                    'class': 'nb-header-cell',
                    'role': 'columnheader',
                },
            },] }
];
NbHeaderCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];
/** Footer cell template container that adds the right classes and role. */
class NbFooterCellDirective extends CdkFooterCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbFooterCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-footer-cell, td[nbFooterCell]',
                host: {
                    'class': 'nb-footer-cell',
                    'role': 'gridcell',
                },
            },] }
];
NbFooterCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];
/** Cell template container that adds the right classes and role. */
class NbCellDirective extends CdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`nb-column-${columnDef.cssClassFriendlyName}`);
    }
}
NbCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nb-cell, td[nbCell]',
                host: {
                    'class': 'nb-cell',
                    'role': 'gridcell',
                },
            },] }
];
NbCellDirective.ctorParameters = () => [
    { type: NbColumnDefDirective },
    { type: ElementRef }
];

class NbDataSource extends DataSource {
}

class NbDataRowOutletDirective extends DataRowOutlet {
}
NbDataRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbRowOutlet]',
                providers: [{ provide: DataRowOutlet, useExisting: NbDataRowOutletDirective }],
            },] }
];
class NbHeaderRowOutletDirective extends HeaderRowOutlet {
}
NbHeaderRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderRowOutlet]',
                providers: [{ provide: HeaderRowOutlet, useExisting: NbHeaderRowOutletDirective }],
            },] }
];
class NbFooterRowOutletDirective extends FooterRowOutlet {
}
NbFooterRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterRowOutlet]',
                providers: [{ provide: FooterRowOutlet, useExisting: NbFooterRowOutletDirective }],
            },] }
];
class NbNoDataRowOutletDirective extends NoDataRowOutlet {
}
NbNoDataRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbNoDataRowOutlet]',
                providers: [{ provide: NoDataRowOutlet, useExisting: NbNoDataRowOutletDirective }],
            },] }
];
class NbCellOutletDirective extends CdkCellOutlet {
}
NbCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbCellOutlet]',
                providers: [{ provide: CdkCellOutlet, useExisting: NbCellOutletDirective }],
            },] }
];
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class NbHeaderRowDefDirective extends CdkHeaderRowDef {
}
NbHeaderRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: NbHeaderRowDefDirective }],
            },] }
];
NbHeaderRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbHeaderRowDef',] }],
    sticky: [{ type: Input, args: ['nbHeaderRowDefSticky',] }]
};
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class NbFooterRowDefDirective extends CdkFooterRowDef {
}
NbFooterRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFooterRowDef]',
                providers: [{ provide: CdkFooterRowDef, useExisting: NbFooterRowDefDirective }],
            },] }
];
NbFooterRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbFooterRowDef',] }],
    sticky: [{ type: Input, args: ['nbFooterRowDefSticky',] }]
};
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class NbRowDefDirective extends CdkRowDef {
}
NbRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: NbRowDefDirective }],
            },] }
];
NbRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbRowDefColumns',] }],
    when: [{ type: Input, args: ['nbRowDefWhen',] }]
};
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class NbHeaderRowComponent extends CdkHeaderRow {
}
NbHeaderRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-header-row, tr[nbHeaderRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-header-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkHeaderRow, useExisting: NbHeaderRowComponent }]
            },] }
];
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class NbFooterRowComponent extends CdkFooterRow {
}
NbFooterRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-footer-row, tr[nbFooterRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-footer-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkFooterRow, useExisting: NbFooterRowComponent }]
            },] }
];
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class NbRowComponent extends CdkRow {
}
NbRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-row, tr[nbRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-row',
                    'role': 'row',
                },
                providers: [{ provide: CdkRow, useExisting: NbRowComponent }]
            },] }
];

const NbCdkRowDef = CdkRowDef;
const NbCdkRow = CdkRow;
const NbCdkCellDef = CdkCellDef;
const NbCdkHeaderRowDef = CdkHeaderRowDef;
const NbCdkHeaderRow = CdkHeaderRow;
const NbCdkHeaderCellDef = CdkHeaderCellDef;
const NbCdkFooterRowDef = CdkFooterRowDef;
const NbCdkFooterRow = CdkFooterRow;
const NbCdkFooterCellDef = CdkFooterCellDef;
const NbCdkColumnDef = CdkColumnDef;
const NbCdkCell = CdkCell;
const NbCdkHeaderCell = CdkHeaderCell;
const NbCdkFooterCell = CdkFooterCell;
const NB_STICKY_POSITIONING_LISTENER = STICKY_POSITIONING_LISTENER;

const NB_TABLE_TEMPLATE = `
  <ng-container nbHeaderRowOutlet></ng-container>
  <ng-container nbRowOutlet></ng-container>
  <ng-container nbNoDataRowOutlet></ng-container>
  <ng-container nbFooterRowOutlet></ng-container>
`;
const NB_VIEW_REPEATER_STRATEGY = _VIEW_REPEATER_STRATEGY;
const NB_COALESCED_STYLE_SCHEDULER = _COALESCED_STYLE_SCHEDULER;
const NB_TABLE_PROVIDERS = [
    { provide: NB_VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
    { provide: NB_COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
];
// tslint:disable-next-line:component-class-suffix
class NbTable extends CdkTable {
    constructor(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
    }
}
NbTable.decorators = [
    { type: Component, args: [{
                selector: 'nb-table-not-implemented',
                template: ``,
                providers: NB_TABLE_PROVIDERS
            },] }
];
NbTable.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NbDirectionality },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPlatform },
    { type: undefined, decorators: [{ type: Inject, args: [_VIEW_REPEATER_STRATEGY,] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: Inject, args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: NbViewportRulerAdapter },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [NB_STICKY_POSITIONING_LISTENER,] }] }
];
const COMPONENTS$1 = [
    NbTable,
    // Template defs
    NbHeaderCellDefDirective,
    NbHeaderRowDefDirective,
    NbColumnDefDirective,
    NbCellDefDirective,
    NbRowDefDirective,
    NbFooterCellDefDirective,
    NbFooterRowDefDirective,
    // Outlets
    NbDataRowOutletDirective,
    NbHeaderRowOutletDirective,
    NbFooterRowOutletDirective,
    NbNoDataRowOutletDirective,
    NbCellOutletDirective,
    // Cell directives
    NbHeaderCellDirective,
    NbCellDirective,
    NbFooterCellDirective,
    // Row directives
    NbHeaderRowComponent,
    NbRowComponent,
    NbFooterRowComponent,
];
class NbTableModule extends CdkTableModule {
}
NbTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbBidiModule],
                declarations: [...COMPONENTS$1],
                exports: [...COMPONENTS$1],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_DIALOG_CONFIG = new InjectionToken('Default dialog options');
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
class NbDialogConfig {
    constructor(config) {
        /**
         * If true than overlay will render backdrop under a dialog.
         * */
        this.hasBackdrop = true;
        /**
         * Class that'll be assigned to the backdrop element.
         * */
        this.backdropClass = 'overlay-backdrop';
        /**
         * Class that'll be assigned to the dialog overlay.
         * */
        this.dialogClass = '';
        /**
         * If true then mouse clicks by backdrop will close a dialog.
         * */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a dialog.
         * */
        this.closeOnEsc = true;
        /**
         * Disables scroll on content under dialog if true and does nothing otherwise.
         * */
        this.hasScroll = false;
        /**
         * Focuses dialog automatically after open if true.
         * */
        this.autoFocus = true;
        Object.assign(this, config);
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbDialogRef` helps to manipulate dialog after it was created.
 * The dialog can be dismissed by using `close` method of the dialogRef.
 * You can access rendered component as `content` property of the dialogRef.
 * `onBackdropClick` streams click events on the backdrop of the dialog.
 * */
class NbDialogRef {
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this.onClose$ = new Subject();
        this.onClose = this.onClose$.asObservable();
        this.onBackdropClick = this.overlayRef.backdropClick();
    }
    /**
     * Hides dialog.
     * */
    close(res) {
        this.overlayRef.detach();
        this.overlayRef.dispose();
        this.onClose$.next(res);
        this.onClose$.complete();
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
class NbDialogContainerComponent {
    constructor(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    ngOnInit() {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    }
    ngOnDestroy() {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    }
    attachComponentPortal(portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    }
}
NbDialogContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-dialog-container',
                template: '<ng-template nbPortalOutlet></ng-template>'
            },] }
];
NbDialogContainerComponent.ctorParameters = () => [
    { type: NbDialogConfig },
    { type: ElementRef },
    { type: NbFocusTrapFactoryService }
];
NbDialogContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [NbPortalOutletDirective, { static: true },] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbDialogService` helps to open dialogs.
 *
 * @stacked-example(Showcase, dialog/dialog-showcase.component)
 *
 * A new dialog is opened by calling the `open` method with a component to be loaded and an optional configuration.
 * `open` method will return `NbDialogRef` that can be used for the further manipulations.
 *
 * ### Installation
 *
 * Import `NbDialogModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install it with `NbDialogModule.forChild()`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * ```ts
 * const dialogRef = this.dialogService.open(MyDialogComponent, { ... });
 * ```
 *
 * `NbDialogRef` gives capability access reference to the rendered dialog component,
 * destroy dialog and some other options described below.
 *
 * Also, you can inject `NbDialogRef` in dialog component.
 *
 * ```ts
 * this.dialogService.open(MyDialogComponent, { ... });
 *
 * // my-dialog.component.ts
 * constructor(protected dialogRef: NbDialogRef) {
 * }
 *
 * close() {
 *   this.dialogRef.close();
 * }
 * ```
 *
 * Instead of component you can create dialog from TemplateRef:
 *
 * @stacked-example(Template ref, dialog/dialog-template.component)
 *
 * The dialog may return result through `NbDialogRef`. Calling component can receive this result with `onClose`
 * stream of `NbDialogRef`.
 *
 * @stacked-example(Result, dialog/dialog-result.component)
 *
 * ### Configuration
 *
 * As we mentioned above, `open` method of the `NbDialogService` may receive optional configuration options.
 * Also, you can provide global dialogs configuration through `NbDialogModule.forRoot({ ... })`.
 *
 * This config may contain the following:
 *
 * `context` - both, template and component may receive data through `config.context` property.
 * For components, this data will be assigned through inputs.
 * For templates, you can access it inside template as $implicit.
 *
 * ```ts
 * this.dialogService.open(template, { context: 'pass data in template' });
 * ```
 *
 * ```html
 * <ng-template let-some-additional-data>
 *   {{ some-additional-data }}
 * <ng-template/>
 * ```
 *
 * `hasBackdrop` - determines is service have to render backdrop under the dialog.
 * Default is true.
 * @stacked-example(Backdrop, dialog/dialog-has-backdrop.component)
 *
 * `closeOnBackdropClick` - close dialog on backdrop click if true.
 * Default is true.
 * @stacked-example(Backdrop click, dialog/dialog-backdrop-click.component)
 *
 * `closeOnEsc` - close dialog on escape button on the keyboard.
 * Default is true.
 * @stacked-example(Escape hit, dialog/dialog-esc.component)
 *
 * `hasScroll` - Disables scroll on content under dialog if true and does nothing otherwise.
 * Default is false.
 * Please, open dialogs in the separate window and try to scroll.
 * @stacked-example(Scroll, dialog/dialog-scroll.component)
 *
 * `autoFocus` - Focuses dialog automatically after open if true. It's useful to prevent misclicks on
 * trigger elements and opening multiple dialogs.
 * Default is true.
 *
 * As you can see, if you open dialog with auto focus dialog will focus first focusable element
 * or just blur previously focused automatically.
 * Otherwise, without auto focus, the focus will stay on the previously focused element.
 * Please, open dialogs in the separate window and try to click on the button without focus
 * and then hit space any times. Multiple same dialogs will be opened.
 * @stacked-example(Auto focus, dialog/dialog-auto-focus.component)
 * */
class NbDialogService {
    constructor(document, globalConfig, positionBuilder, overlay, injector, cfr) {
        this.document = document;
        this.globalConfig = globalConfig;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.injector = injector;
        this.cfr = cfr;
    }
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    open(content, userConfig = {}) {
        const config = new NbDialogConfig(Object.assign(Object.assign({}, this.globalConfig), userConfig));
        const overlayRef = this.createOverlay(config);
        const dialogRef = new NbDialogRef(overlayRef);
        const container = this.createContainer(config, overlayRef);
        this.createContent(config, content, container, dialogRef);
        this.registerCloseListeners(config, overlayRef, dialogRef);
        return dialogRef;
    }
    createOverlay(config) {
        const positionStrategy = this.createPositionStrategy();
        const scrollStrategy = this.createScrollStrategy(config.hasScroll);
        return this.overlay.create({
            positionStrategy,
            scrollStrategy,
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.dialogClass,
        });
    }
    createPositionStrategy() {
        return this.positionBuilder
            .global()
            .centerVertically()
            .centerHorizontally();
    }
    createScrollStrategy(hasScroll) {
        if (hasScroll) {
            return this.overlay.scrollStrategies.noop();
        }
        else {
            return this.overlay.scrollStrategies.block();
        }
    }
    createContainer(config, overlayRef) {
        const injector = new NbPortalInjector(this.createInjector(config), new WeakMap([[NbDialogConfig, config]]));
        const containerPortal = new NbComponentPortal(NbDialogContainerComponent, null, injector, this.cfr);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    createContent(config, content, container, dialogRef) {
        if (content instanceof TemplateRef) {
            const portal = this.createTemplatePortal(config, content, dialogRef);
            container.attachTemplatePortal(portal);
        }
        else {
            const portal = this.createComponentPortal(config, content, dialogRef);
            dialogRef.componentRef = container.attachComponentPortal(portal);
            if (config.context) {
                Object.assign(dialogRef.componentRef.instance, Object.assign({}, config.context));
            }
        }
    }
    createTemplatePortal(config, content, dialogRef) {
        return new NbTemplatePortal(content, null, { $implicit: config.context, dialogRef });
    }
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    createComponentPortal(config, content, dialogRef) {
        const injector = this.createInjector(config);
        const portalInjector = new NbPortalInjector(injector, new WeakMap([[NbDialogRef, dialogRef]]));
        return new NbComponentPortal(content, config.viewContainerRef, portalInjector);
    }
    createInjector(config) {
        return config.viewContainerRef && config.viewContainerRef.injector || this.injector;
    }
    registerCloseListeners(config, overlayRef, dialogRef) {
        if (config.closeOnBackdropClick) {
            overlayRef.backdropClick().subscribe(() => dialogRef.close());
        }
        if (config.closeOnEsc) {
            fromEvent(this.document, 'keyup')
                .pipe(filter((event) => event.keyCode === 27), takeUntil(dialogRef.onClose))
                .subscribe(() => dialogRef.close());
        }
    }
}
NbDialogService.decorators = [
    { type: Injectable }
];
NbDialogService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DIALOG_CONFIG,] }] },
    { type: NbPositionBuilderService },
    { type: NbOverlayService },
    { type: Injector },
    { type: ComponentFactoryResolver }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDialogModule {
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

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-border-style:
 * toastr-border-width:
 * toastr-border-radius:
 * toastr-padding:
 * toastr-shadow:
 * toastr-text-font-family:
 * toastr-text-font-size:
 * toastr-text-font-weight:
 * toastr-text-line-height:
 * toastr-title-text-font-family:
 * toastr-title-text-font-size:
 * toastr-title-text-font-weight:
 * toastr-title-text-line-height:
 * toastr-basic-background-color:
 * toastr-basic-border-color:
 * toastr-basic-text-color:
 * toastr-icon-basic-background-color:
 * toastr-icon-basic-color:
 * toastr-destroyable-basic-hover-background-color:
 * toastr-destroyable-basic-hover-border-color:
 * toastr-primary-background-color:
 * toastr-primary-border-color:
 * toastr-primary-text-color:
 * toastr-icon-primary-background-color:
 * toastr-icon-primary-color:
 * toastr-destroyable-primary-hover-background-color:
 * toastr-destroyable-primary-hover-border-color:
 * toastr-success-background-color:
 * toastr-success-border-color:
 * toastr-success-text-color:
 * toastr-icon-success-background-color:
 * toastr-icon-success-color:
 * toastr-destroyable-success-hover-background-color:
 * toastr-destroyable-success-hover-border-color:
 * toastr-info-background-color:
 * toastr-info-border-color:
 * toastr-info-text-color:
 * toastr-icon-info-background-color:
 * toastr-icon-info-color:
 * toastr-destroyable-info-hover-background-color:
 * toastr-destroyable-info-hover-border-color:
 * toastr-warning-background-color:
 * toastr-warning-border-color:
 * toastr-warning-text-color:
 * toastr-icon-warning-background-color:
 * toastr-icon-warning-color:
 * toastr-destroyable-warning-hover-background-color:
 * toastr-destroyable-warning-hover-border-color:
 * toastr-danger-background-color:
 * toastr-danger-border-color:
 * toastr-danger-text-color:
 * toastr-icon-danger-background-color:
 * toastr-icon-danger-color:
 * toastr-destroyable-danger-hover-background-color:
 * toastr-destroyable-danger-hover-border-color:
 * toastr-control-background-color:
 * toastr-control-border-color:
 * toastr-control-text-color:
 * toastr-icon-control-background-color:
 * toastr-icon-control-color:
 * toastr-destroyable-control-hover-background-color:
 * toastr-destroyable-control-hover-border-color:
 * */
class NbToastComponent {
    constructor(renderer, elementRef, statusService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.statusService = statusService;
        this.destroy = new EventEmitter();
    }
    get success() {
        return this.toast.config.status === 'success';
    }
    get info() {
        return this.toast.config.status === 'info';
    }
    get warning() {
        return this.toast.config.status === 'warning';
    }
    get primary() {
        return this.toast.config.status === 'primary';
    }
    get danger() {
        return this.toast.config.status === 'danger';
    }
    get basic() {
        return this.toast.config.status === 'basic';
    }
    get control() {
        return this.toast.config.status === 'control';
    }
    get destroyByClick() {
        return this.toast.config.destroyByClick;
    }
    get hasIcon() {
        const { icon } = this.toast.config;
        if (typeof icon === 'string') {
            return true;
        }
        return !!(icon && icon.icon);
    }
    get customIcon() {
        return !!this.icon;
    }
    get icon() {
        return this.toast.config.icon;
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.toast.config.status)) {
            return [this.statusService.getStatusClass(this.toast.config.status)];
        }
        return [];
    }
    onClick() {
        this.destroy.emit();
    }
    ngOnInit() {
        if (this.toast.config.toastClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.toast.config.toastClass);
        }
    }
}
NbToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-toast',
                template: "<div class=\"icon-container\" *ngIf=\"hasIcon && icon\">\n  <nb-icon [config]=\"icon\"></nb-icon>\n</div>\n<div class=\"content-container\">\n  <span class=\"title subtitle\">{{ toast.title }}</span>\n  <div class=\"message\">{{ toast.message }}</div>\n</div>\n",
                styles: [":host{display:flex;align-items:center;width:25rem;margin:0.5rem}:host .title{margin-right:0.25rem}:host.default .content-container,:host:not(.has-icon) .content-container{display:flex;flex-direction:row}:host.destroy-by-click{cursor:pointer}:host nb-icon{font-size:2.5rem}:host svg{width:2.5rem;height:2.5rem}\n"]
            },] }
];
NbToastComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NbStatusService }
];
NbToastComponent.propDecorators = {
    toast: [{ type: Input }],
    destroy: [{ type: Output }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    destroyByClick: [{ type: HostBinding, args: ['class.destroy-by-click',] }],
    hasIcon: [{ type: HostBinding, args: ['class.has-icon',] }],
    customIcon: [{ type: HostBinding, args: ['class.custom-icon',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const voidState = style({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
});
const defaultOptions = { params: { direction: '' } };
class NbToastrContainerComponent {
    constructor(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.destroy$ = new Subject();
        this.content = [];
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onDirectionChange());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onDirectionChange() {
        const direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction } };
    }
}
NbToastrContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-toastr-container',
                template: `
    <nb-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></nb-toast>`,
                animations: [
                    trigger('fadeIn', [
                        transition(':enter', [voidState, animate(100)], defaultOptions),
                        transition(':leave', [animate(100, voidState)], defaultOptions),
                    ]),
                ]
            },] }
];
NbToastrContainerComponent.ctorParameters = () => [
    { type: NbLayoutDirectionService },
    { type: NbPositionHelper }
];
NbToastrContainerComponent.propDecorators = {
    content: [{ type: Input }],
    context: [{ type: Input }],
    position: [{ type: Input }],
    toasts: [{ type: ViewChildren, args: [NbToastComponent,] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_TOASTR_CONFIG = new InjectionToken('Default toastr options');
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
class NbToastrConfig {
    constructor(config) {
        /**
         * Determines where on the screen toast have to be rendered.
         * */
        this.position = NbGlobalLogicalPosition.TOP_END;
        /**
         * Status chooses color scheme for the toast.
         * */
        this.status = 'basic';
        /**
         * Duration is timeout between toast appears and disappears.
         * */
        this.duration = 3000;
        /**
         * Destroy by click means you can hide the toast by clicking it.
         * */
        this.destroyByClick = true;
        /**
         * If preventDuplicates is true then the toast with the same title, message and status will not be rendered.
         * Find duplicates behaviour determined by `preventDuplicates`.
         * The default `previous` duplicate behaviour is used.
         * */
        this.preventDuplicates = false;
        /**
         * Determines the how to treat duplicates.
         * */
        this.duplicatesBehaviour = 'previous';
        /*
        * The number of visible toasts. If the limit exceeded the oldest toast will be removed.
        * */
        this.limit = null;
        /**
         * Class to be applied to the toast.
         */
        this.toastClass = '';
        /**
         * Determines render icon or not.
         * */
        this.hasIcon = true;
        /**
         * Icon name or icon config object that can be provided to render custom icon.
         * */
        this.icon = 'email';
        /**
         * Toast status icon-class mapping.
         * */
        this.icons = {
            danger: 'flash-outline',
            success: 'checkmark-outline',
            info: 'question-mark-outline',
            warning: 'alert-triangle-outline',
            primary: 'email-outline',
            control: 'email-outline',
            basic: 'email-outline',
        };
        this.patchIcon(config);
        Object.assign(this, config);
    }
    patchIcon(config) {
        if (!('icon' in config)) {
            config.icon = {
                icon: this.icons[config.status] || this.icons.basic,
                pack: 'nebular-essentials',
            };
        }
    }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbToastRef {
    constructor(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    close() {
        this.toastContainer.destroy(this.toast);
    }
}
class NbToastContainer {
    constructor(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
        this.toastDuplicateCompareFunc = (t1, t2) => {
            return t1.message === t2.message
                && t1.title === t2.title
                && t1.config.status === t2.config.status;
        };
    }
    get nativeElement() {
        return this.containerRef.location.nativeElement;
    }
    attach(toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return;
        }
        this.removeToastIfLimitReached(toast);
        const toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        return new NbToastRef(this, toast);
    }
    destroy(toast) {
        if (this.prevToast === toast) {
            this.prevToast = null;
        }
        this.toasts = this.toasts.filter(t => t !== toast);
        this.updateContainer();
    }
    isDuplicate(toast) {
        return toast.config.duplicatesBehaviour === 'previous'
            ? this.isDuplicatePrevious(toast)
            : this.isDuplicateAmongAll(toast);
    }
    isDuplicatePrevious(toast) {
        return this.prevToast && this.toastDuplicateCompareFunc(this.prevToast, toast);
    }
    isDuplicateAmongAll(toast) {
        return this.toasts.some(t => this.toastDuplicateCompareFunc(t, toast));
    }
    removeToastIfLimitReached(toast) {
        if (!toast.config.limit || this.toasts.length < toast.config.limit) {
            return;
        }
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            this.toasts.pop();
        }
        else {
            this.toasts.shift();
        }
    }
    attachToast(toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        }
        else {
            return this.attachToBottom(toast);
        }
    }
    attachToTop(toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    }
    attachToBottom(toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    }
    setDestroyTimeout(toast) {
        setTimeout(() => this.destroy(toast), toast.config.duration);
    }
    subscribeOnClick(toastComponent, toast) {
        toastComponent.destroy.subscribe(() => this.destroy(toast));
    }
    updateContainer() {
        patch(this.containerRef, { content: this.toasts, position: this.position });
    }
}
class NbToastrContainerRegistry {
    constructor(overlay, positionBuilder, positionHelper, cfr, document) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.document = document;
        this.overlays = new Map();
    }
    get(position) {
        const logicalPosition = this.positionHelper.toLogicalPosition(position);
        const overlayWithContainer = this.overlays.get(logicalPosition);
        if (!overlayWithContainer || !this.existsInDom(overlayWithContainer.toastrContainer)) {
            if (overlayWithContainer) {
                overlayWithContainer.overlayRef.dispose();
            }
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition).toastrContainer;
    }
    instantiateContainer(position) {
        const toastrOverlayWithContainer = this.createContainer(position);
        this.overlays.set(position, toastrOverlayWithContainer);
    }
    createContainer(position) {
        const positionStrategy = this.positionBuilder.global().position(position);
        const ref = this.overlay.create({ positionStrategy });
        this.addClassToOverlayHost(ref);
        const containerRef = ref.attach(new NbComponentPortal(NbToastrContainerComponent, null, null, this.cfr));
        return {
            overlayRef: ref,
            toastrContainer: new NbToastContainer(position, containerRef, this.positionHelper),
        };
    }
    addClassToOverlayHost(overlayRef) {
        overlayRef.hostElement.classList.add('toastr-overlay-container');
    }
    existsInDom(toastContainer) {
        return this.document.body.contains(toastContainer.nativeElement);
    }
}
NbToastrContainerRegistry.decorators = [
    { type: Injectable }
];
NbToastrContainerRegistry.ctorParameters = () => [
    { type: NbOverlayService },
    { type: NbPositionBuilderService },
    { type: NbPositionHelper },
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `basic`.
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title, message and status.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `duplicatesBehaviour` - determines how to treat the toasts duplication.
 * Compare with the previous message `previous`
 * or with all visible messages `all`.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-prevent-duplicates-behaviour.component)
 *
 * `limit` - the number of visible toasts in the toast container. The number of toasts is unlimited by default.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-limit.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
class NbToastrService {
    constructor(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    show(message, title, userConfig) {
        const config = new NbToastrConfig(Object.assign(Object.assign({}, this.globalConfig), userConfig));
        const container = this.containerRegistry.get(config.position);
        const toast = { message, title, config };
        return container.attach(toast);
    }
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'success' }));
    }
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'info' }));
    }
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'warning' }));
    }
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'primary' }));
    }
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'danger' }));
    }
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message, title, config) {
        return this.show(message, title, Object.assign(Object.assign({}, config), { status: 'basic' }));
    }
    /**
     * Shows control toast with message, title and user config.
     * */
    control(message, title, config) {
        return this.default(message, title, Object.assign(Object.assign({}, config), { status: 'control' }));
    }
}
NbToastrService.decorators = [
    { type: Injectable }
];
NbToastrService.ctorParameters = () => [
    { type: NbToastrConfig, decorators: [{ type: Inject, args: [NB_TOASTR_CONFIG,] }] },
    { type: NbToastrContainerRegistry }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbToastrModule {
    static forRoot(toastrConfig = {}) {
        return {
            ngModule: NbToastrModule,
            providers: [
                NbToastrService,
                NbToastrContainerRegistry,
                { provide: NB_TOASTR_CONFIG, useValue: toastrConfig },
            ],
        };
    }
}
NbToastrModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule, NbOverlayModule, NbIconModule],
                declarations: [NbToastrContainerComponent, NbToastComponent],
                entryComponents: [NbToastrContainerComponent, NbToastComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbToast {
}

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-icon-height:
 * tooltip-icon-width:
 * tooltip-max-width:
 * tooltip-basic-background-color:
 * tooltip-basic-border-color:
 * tooltip-basic-text-color:
 * tooltip-primary-background-color:
 * tooltip-primary-border-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-border-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-border-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-border-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-border-color:
 * tooltip-danger-text-color:
 * tooltip-control-background-color:
 * tooltip-control-border-color:
 * tooltip-control-text-color:
 * tooltip-shadow:
 */
class NbTooltipComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    get binding() {
        return `${this.position} ${this.statusClass}`;
    }
    get show() {
        return true;
    }
    get statusClass() {
        if (this.context.status) {
            return this.statusService.getStatusClass(this.context.status);
        }
        return '';
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
}
NbTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tooltip',
                template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `,
                animations: [
                    trigger('showTooltip', [
                        state('in', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate(100),
                        ]),
                        transition('* => void', [
                            animate(100, style({ opacity: 0 })),
                        ]),
                    ]),
                ],
                styles: [":host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon+span{margin-left:0.5rem}:host.right nb-icon+span{margin-right:0.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host(.bottom) .arrow{top:-6px;left:calc(50% - 6px)}:host(.bottom-start) .arrow{top:-6px}[dir=ltr] :host(.bottom-start) .arrow{right:6px}[dir=rtl] :host(.bottom-start) .arrow{left:6px}:host(.bottom-end) .arrow{top:-6px}[dir=ltr] :host(.bottom-end) .arrow{left:6px}[dir=rtl] :host(.bottom-end) .arrow{right:6px}:host(.left) .arrow,:host(.start) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.left) .arrow,[dir=ltr] :host(.start) .arrow{right:-8px;transform:rotate(90deg)}[dir=rtl] :host(.left) .arrow,[dir=rtl] :host(.start) .arrow{left:-8px;transform:rotate(270deg)}:host(.start-top) .arrow{right:-8px;bottom:6px;transform:rotate(90deg)}:host(.start-bottom) .arrow{right:-8px;top:6px;transform:rotate(90deg)}:host(.top) .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host(.top-start) .arrow{bottom:calc(-1 * 6px + 1px);transform:rotate(180deg)}[dir=ltr] :host(.top-start) .arrow{right:6px}[dir=rtl] :host(.top-start) .arrow{left:6px}:host(.top-end) .arrow{bottom:calc(-6px + 1px);transform:rotate(180deg)}[dir=ltr] :host(.top-end) .arrow{left:6px}[dir=rtl] :host(.top-end) .arrow{right:6px}:host(.right) .arrow,:host(.end) .arrow{top:calc(50% - 2.4px)}[dir=ltr] :host(.right) .arrow,[dir=ltr] :host(.end) .arrow{left:-8px;transform:rotate(270deg)}[dir=rtl] :host(.right) .arrow,[dir=rtl] :host(.end) .arrow{right:-8px;transform:rotate(90deg)}:host(.end-top) .arrow{left:calc(-6px - 6px / 2.5);bottom:6px;transform:rotate(270deg)}:host(.end-bottom) .arrow{left:calc(-6px - 6px / 2.5);top:6px;transform:rotate(270deg)}\n"]
            },] }
];
NbTooltipComponent.ctorParameters = () => [
    { type: NbStatusService }
];
NbTooltipComponent.propDecorators = {
    content: [{ type: Input }],
    position: [{ type: Input }],
    binding: [{ type: HostBinding, args: ['class',] }],
    show: [{ type: HostBinding, args: ['@showTooltip',] }],
    context: [{ type: Input }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * ### Installation
 *
 * Import `NbTooltipModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTooltipModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` property:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 * Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 */
class NbTooltipDirective {
    constructor(hostRef, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.destroy$ = new Subject();
        this.tooltipComponent = NbTooltipComponent;
        this.context = {};
        /**
         * Position will be calculated relatively host element based on the position.
         * Can be top, right, bottom, left, start or end.
         */
        this.position = NbPosition.TOP;
        this._adjustment = NbAdjustment.CLOCKWISE;
        this._tooltipClass = '';
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.HINT;
        /**
         * Determines tooltip overlay offset (in pixels).
         **/
        this.offset = 8;
        this.nbTooltipShowStateChange = new EventEmitter();
        this.overlayConfig = { panelClass: this.tooltipClass };
    }
    /**
     * Container position will change automatically based on this strategy if container can't fit view port.
     * Set this property to `noop` value if you want to disable automatic adjustment.
     * Available values: `clockwise` (default), `counterclockwise`, `vertical`, `horizontal`, `noop`.
     */
    get adjustment() {
        return this._adjustment;
    }
    set adjustment(value) {
        this._adjustment = value;
    }
    get tooltipClass() {
        return this._tooltipClass;
    }
    set tooltipClass(value) {
        if (value !== this.tooltipClass) {
            this._tooltipClass = value;
            this.overlayConfig = { panelClass: this.tooltipClass };
        }
    }
    /**
     * Accepts icon name or icon config object
     * @param {string | NbIconConfig} icon name or config object
     */
    set icon(icon) {
        this.context = Object.assign(this.context, { icon });
    }
    /**
     *
     * @param {string} status
     */
    set status(status) {
        this.context = Object.assign(this.context, { status });
    }
    get isShown() {
        return !!(this.dynamicOverlay && this.dynamicOverlay.isAttached);
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(this.tooltipComponent)
            .offset(this.offset);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.dynamicOverlay.isShown
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe((isShown) => this.nbTooltipShowStateChange.emit({ isShown }));
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .content(this.content)
            .context(this.context)
            .overlayConfig(this.overlayConfig);
    }
}
NbTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTooltip]',
                exportAs: 'nbTooltip',
                providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
            },] }
];
NbTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbDynamicOverlayHandler }
];
NbTooltipDirective.propDecorators = {
    content: [{ type: Input, args: ['nbTooltip',] }],
    position: [{ type: Input, args: ['nbTooltipPlacement',] }],
    adjustment: [{ type: Input, args: ['nbTooltipAdjustment',] }],
    tooltipClass: [{ type: Input, args: ['nbTooltipClass',] }],
    icon: [{ type: Input, args: ['nbTooltipIcon',] }],
    status: [{ type: Input, args: ['nbTooltipStatus',] }],
    trigger: [{ type: Input, args: ['nbTooltipTrigger',] }],
    offset: [{ type: Input, args: ['nbTooltipOffset',] }],
    nbTooltipShowStateChange: [{ type: Output }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTooltipModule {
}
NbTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbSharedModule, NbOverlayModule, NbIconModule],
                declarations: [NbTooltipComponent, NbTooltipDirective],
                exports: [NbTooltipDirective],
                entryComponents: [NbTooltipComponent],
            },] }
];

const NB_SELECT_INJECTION_TOKEN = new InjectionToken('NB_SELECT_INJECTION_TOKEN');

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// Component class scoped counter for aria attributes.
let lastOptionId = 0;
/**
 * NbOptionComponent
 *
 * @styles
 *
 * option-background-color:
 * option-text-color:
 * option-text-font-family:
 * option-hover-background-color:
 * option-hover-text-color:
 * option-active-background-color:
 * option-active-text-color:
 * option-focus-background-color:
 * option-focus-text-color:
 * option-selected-background-color:
 * option-selected-text-color:
 * option-selected-hover-background-color:
 * option-selected-hover-text-color:
 * option-selected-active-background-color:
 * option-selected-active-text-color:
 * option-selected-focus-background-color:
 * option-selected-focus-text-color:
 * option-disabled-background-color:
 * option-disabled-text-color:
 * option-tiny-text-font-size:
 * option-tiny-text-font-weight:
 * option-tiny-text-line-height:
 * option-tiny-padding:
 * option-small-text-font-size:
 * option-small-text-font-weight:
 * option-small-text-line-height:
 * option-small-padding:
 * option-medium-text-font-size:
 * option-medium-text-font-weight:
 * option-medium-text-line-height:
 * option-medium-padding:
 * option-large-text-font-size:
 * option-large-text-font-weight:
 * option-large-text-line-height:
 * option-large-padding:
 * option-giant-text-font-size:
 * option-giant-text-font-weight:
 * option-giant-text-line-height:
 * option-giant-padding:
 **/
class NbOptionComponent {
    constructor(parent, elementRef, cd, zone, renderer) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.zone = zone;
        this.renderer = renderer;
        this.disabledByGroup = false;
        this._disabled = false;
        /**
         * Fires value when option selection change.
         * */
        this.selectionChange = new EventEmitter();
        /**
         * Fires when option clicked
         */
        this.click$ = new Subject();
        this.selected = false;
        this.alive = true;
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-option-${lastOptionId++}`;
        this._active = false;
        this.parent = parent;
    }
    get disabled() {
        return this._disabled || this.disabledByGroup;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get click() {
        return this.click$.asObservable();
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    /**
     * Determines should we render checkbox.
     * */
    get withCheckbox() {
        return this.multiple && this.value != null;
    }
    get content() {
        return this.elementRef.nativeElement.textContent;
    }
    // TODO: replace with isShowCheckbox property to control this behaviour outside, issues/1965
    get multiple() {
        // We check parent existing because parent can be NbSelectComponent or
        // NbAutocomplete and `miltiple` property exists only in NbSelectComponent
        return this.parent ? this.parent.multiple : false;
    }
    get selectedClass() {
        return this.selected;
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    get tabindex() {
        return '-1';
    }
    get activeClass() {
        return this._active;
    }
    ;
    onClick(event) {
        this.click$.next(this);
        // Prevent scroll on space click, etc.
        event.preventDefault();
    }
    select() {
        this.setSelection(true);
    }
    deselect() {
        this.setSelection(false);
    }
    /**
     * Sets disabled by group state and marks component for check.
     */
    setDisabledByGroupState(disabled) {
        // Check if the component still alive as the option group defer method call so the component may become destroyed.
        if (this.disabledByGroup !== disabled && this.alive) {
            this.disabledByGroup = disabled;
            this.cd.markForCheck();
        }
    }
    setSelection(selected) {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         *
         * Also Angular can call writeValue on destroyed view (select implements ControlValueAccessor).
         * angular/angular#27803
         * */
        if (this.alive && this.selected !== selected) {
            this.selected = selected;
            this.selectionChange.emit(this);
            this.cd.markForCheck();
        }
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getLabel() {
        return this.content;
    }
    setActiveStyles() {
        this._active = true;
        this.cd.markForCheck();
    }
    setInactiveStyles() {
        this._active = false;
        this.cd.markForCheck();
    }
}
NbOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nb-checkbox *ngIf="withCheckbox"
                 [checked]="selected"
                 [disabled]="disabled"
                 aria-hidden="true">
    </nb-checkbox>
    <ng-content></ng-content>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host:hover{cursor:pointer}:host nb-checkbox{display:flex;pointer-events:none}[dir=ltr] :host nb-checkbox{margin-right:.5rem}[dir=rtl] :host nb-checkbox{margin-left:.5rem}:host nb-checkbox ::ng-deep .label{padding:0}:host([disabled]){pointer-events:none}:host(.nb-transition){transition-duration:0.15s;transition-property:background-color,color;transition-timing-function:ease-in}\n"]
            },] }
];
NbOptionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NB_SELECT_INJECTION_TOKEN,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
NbOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    selectionChange: [{ type: Output }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    multiple: [{ type: HostBinding, args: ['class.multiple',] }],
    selectedClass: [{ type: HostBinding, args: ['class.selected',] }],
    disabledAttribute: [{ type: HostBinding, args: ['attr.disabled',] }],
    tabindex: [{ type: HostBinding, args: ['tabIndex',] }],
    activeClass: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }, { type: HostListener, args: ['keydown.space', ['$event'],] }, { type: HostListener, args: ['keydown.enter', ['$event'],] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbSelectLabelComponent {
}
NbSelectLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-select-label',
                template: '<ng-content></ng-content>'
            },] }
];
function nbSelectFormFieldControlConfigFactory() {
    const config = new NbFormFieldControlConfig();
    config.supportsSuffix = false;
    return config;
}
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean the selection. Both `null` and `undefined` values will also clean the selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status is `basic`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are five select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `filled`:
 *
 * @stacked-example(Filled select, select/select-filled.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 * By default, the component selects options whose values are strictly equal (`===`) with the select value.
 * To change such behavior, pass a custom comparator function to the `compareWith` attribute.
 *
 * @stacked-example(Select custom comparator, select/select-compare-with.component)
 *
 * You can add an additional icon to the select via the `nb-form-field` component:
 * @stacked-example(Select with icon, select/select-icon.component)
 *
 * @additional-example(Interactive, select/select-interactive.component)
 *
 * @styles
 *
 * select-cursor:
 * select-disabled-cursor:
 * select-min-width:
 * select-outline-width:
 * select-outline-color:
 * select-icon-offset:
 * select-text-font-family:
 * select-placeholder-text-font-family:
 * select-tiny-text-font-size:
 * select-tiny-text-font-weight:
 * select-tiny-text-line-height:
 * select-tiny-placeholder-text-font-size:
 * select-tiny-placeholder-text-font-weight:
 * select-tiny-max-width:
 * select-small-text-font-size:
 * select-small-text-font-weight:
 * select-small-text-line-height:
 * select-small-placeholder-text-font-size:
 * select-small-placeholder-text-font-weight:
 * select-small-max-width:
 * select-medium-text-font-size:
 * select-medium-text-font-weight:
 * select-medium-text-line-height:
 * select-medium-placeholder-text-font-size:
 * select-medium-placeholder-text-font-weight:
 * select-medium-max-width:
 * select-large-text-font-size:
 * select-large-text-font-weight:
 * select-large-text-line-height:
 * select-large-placeholder-text-font-size:
 * select-large-placeholder-text-font-weight:
 * select-large-max-width:
 * select-giant-text-font-size:
 * select-giant-text-font-weight:
 * select-giant-text-line-height:
 * select-giant-placeholder-text-font-size:
 * select-giant-placeholder-text-font-weight:
 * select-giant-max-width:
 * select-rectangle-border-radius:
 * select-semi-round-border-radius:
 * select-round-border-radius:
 * select-outline-border-style:
 * select-outline-border-width:
 * select-outline-tiny-padding:
 * select-outline-small-padding:
 * select-outline-medium-padding:
 * select-outline-large-padding:
 * select-outline-giant-padding:
 * select-outline-basic-icon-color:
 * select-outline-basic-text-color:
 * select-outline-basic-placeholder-text-color:
 * select-outline-basic-background-color:
 * select-outline-basic-border-color:
 * select-outline-basic-focus-background-color:
 * select-outline-basic-focus-border-color:
 * select-outline-basic-hover-background-color:
 * select-outline-basic-hover-border-color:
 * select-outline-basic-disabled-background-color:
 * select-outline-basic-disabled-border-color:
 * select-outline-basic-disabled-icon-color:
 * select-outline-basic-disabled-text-color:
 * select-outline-primary-icon-color:
 * select-outline-primary-text-color:
 * select-outline-primary-placeholder-text-color:
 * select-outline-primary-background-color:
 * select-outline-primary-border-color:
 * select-outline-primary-focus-background-color:
 * select-outline-primary-focus-border-color:
 * select-outline-primary-hover-background-color:
 * select-outline-primary-hover-border-color:
 * select-outline-primary-disabled-background-color:
 * select-outline-primary-disabled-border-color:
 * select-outline-primary-disabled-icon-color:
 * select-outline-primary-disabled-text-color:
 * select-outline-success-icon-color:
 * select-outline-success-text-color:
 * select-outline-success-placeholder-text-color:
 * select-outline-success-background-color:
 * select-outline-success-border-color:
 * select-outline-success-focus-background-color:
 * select-outline-success-focus-border-color:
 * select-outline-success-hover-background-color:
 * select-outline-success-hover-border-color:
 * select-outline-success-disabled-background-color:
 * select-outline-success-disabled-border-color:
 * select-outline-success-disabled-icon-color:
 * select-outline-success-disabled-text-color:
 * select-outline-info-icon-color:
 * select-outline-info-text-color:
 * select-outline-info-placeholder-text-color:
 * select-outline-info-background-color:
 * select-outline-info-border-color:
 * select-outline-info-focus-background-color:
 * select-outline-info-focus-border-color:
 * select-outline-info-hover-background-color:
 * select-outline-info-hover-border-color:
 * select-outline-info-disabled-background-color:
 * select-outline-info-disabled-border-color:
 * select-outline-info-disabled-icon-color:
 * select-outline-info-disabled-text-color:
 * select-outline-warning-icon-color:
 * select-outline-warning-text-color:
 * select-outline-warning-placeholder-text-color:
 * select-outline-warning-background-color:
 * select-outline-warning-border-color:
 * select-outline-warning-focus-background-color:
 * select-outline-warning-focus-border-color:
 * select-outline-warning-hover-background-color:
 * select-outline-warning-hover-border-color:
 * select-outline-warning-disabled-background-color:
 * select-outline-warning-disabled-border-color:
 * select-outline-warning-disabled-icon-color:
 * select-outline-warning-disabled-text-color:
 * select-outline-danger-icon-color:
 * select-outline-danger-text-color:
 * select-outline-danger-placeholder-text-color:
 * select-outline-danger-background-color:
 * select-outline-danger-border-color:
 * select-outline-danger-focus-background-color:
 * select-outline-danger-focus-border-color:
 * select-outline-danger-hover-background-color:
 * select-outline-danger-hover-border-color:
 * select-outline-danger-disabled-background-color:
 * select-outline-danger-disabled-border-color:
 * select-outline-danger-disabled-icon-color:
 * select-outline-danger-disabled-text-color:
 * select-outline-control-icon-color:
 * select-outline-control-text-color:
 * select-outline-control-placeholder-text-color:
 * select-outline-control-background-color:
 * select-outline-control-border-color:
 * select-outline-control-focus-background-color:
 * select-outline-control-focus-border-color:
 * select-outline-control-hover-background-color:
 * select-outline-control-hover-border-color:
 * select-outline-control-disabled-background-color:
 * select-outline-control-disabled-border-color:
 * select-outline-control-disabled-icon-color:
 * select-outline-control-disabled-text-color:
 * select-outline-adjacent-border-style:
 * select-outline-adjacent-border-width:
 * select-outline-basic-open-border-color:
 * select-outline-basic-adjacent-border-color:
 * select-outline-primary-open-border-color:
 * select-outline-primary-adjacent-border-color:
 * select-outline-success-open-border-color:
 * select-outline-success-adjacent-border-color:
 * select-outline-info-open-border-color:
 * select-outline-info-adjacent-border-color:
 * select-outline-warning-open-border-color:
 * select-outline-warning-adjacent-border-color:
 * select-outline-danger-open-border-color:
 * select-outline-danger-adjacent-border-color:
 * select-outline-control-open-border-color:
 * select-outline-control-adjacent-border-color:
 * select-filled-border-style:
 * select-filled-border-width:
 * select-filled-tiny-padding:
 * select-filled-small-padding:
 * select-filled-medium-padding:
 * select-filled-large-padding:
 * select-filled-giant-padding:
 * select-filled-basic-background-color:
 * select-filled-basic-border-color:
 * select-filled-basic-icon-color:
 * select-filled-basic-text-color:
 * select-filled-basic-placeholder-text-color:
 * select-filled-basic-focus-background-color:
 * select-filled-basic-focus-border-color:
 * select-filled-basic-hover-background-color:
 * select-filled-basic-hover-border-color:
 * select-filled-basic-disabled-background-color:
 * select-filled-basic-disabled-border-color:
 * select-filled-basic-disabled-icon-color:
 * select-filled-basic-disabled-text-color:
 * select-filled-primary-background-color:
 * select-filled-primary-border-color:
 * select-filled-primary-icon-color:
 * select-filled-primary-text-color:
 * select-filled-primary-placeholder-text-color:
 * select-filled-primary-focus-background-color:
 * select-filled-primary-focus-border-color:
 * select-filled-primary-hover-background-color:
 * select-filled-primary-hover-border-color:
 * select-filled-primary-disabled-background-color:
 * select-filled-primary-disabled-border-color:
 * select-filled-primary-disabled-icon-color:
 * select-filled-primary-disabled-text-color:
 * select-filled-success-background-color:
 * select-filled-success-border-color:
 * select-filled-success-icon-color:
 * select-filled-success-text-color:
 * select-filled-success-placeholder-text-color:
 * select-filled-success-focus-background-color:
 * select-filled-success-focus-border-color:
 * select-filled-success-hover-background-color:
 * select-filled-success-hover-border-color:
 * select-filled-success-disabled-background-color:
 * select-filled-success-disabled-border-color:
 * select-filled-success-disabled-icon-color:
 * select-filled-success-disabled-text-color:
 * select-filled-info-background-color:
 * select-filled-info-border-color:
 * select-filled-info-icon-color:
 * select-filled-info-text-color:
 * select-filled-info-placeholder-text-color:
 * select-filled-info-focus-background-color:
 * select-filled-info-focus-border-color:
 * select-filled-info-hover-background-color:
 * select-filled-info-hover-border-color:
 * select-filled-info-disabled-background-color:
 * select-filled-info-disabled-border-color:
 * select-filled-info-disabled-icon-color:
 * select-filled-info-disabled-text-color:
 * select-filled-warning-background-color:
 * select-filled-warning-border-color:
 * select-filled-warning-icon-color:
 * select-filled-warning-text-color:
 * select-filled-warning-placeholder-text-color:
 * select-filled-warning-focus-background-color:
 * select-filled-warning-focus-border-color:
 * select-filled-warning-hover-background-color:
 * select-filled-warning-hover-border-color:
 * select-filled-warning-disabled-background-color:
 * select-filled-warning-disabled-border-color:
 * select-filled-warning-disabled-icon-color:
 * select-filled-warning-disabled-text-color:
 * select-filled-danger-background-color:
 * select-filled-danger-border-color:
 * select-filled-danger-icon-color:
 * select-filled-danger-text-color:
 * select-filled-danger-placeholder-text-color:
 * select-filled-danger-focus-background-color:
 * select-filled-danger-focus-border-color:
 * select-filled-danger-hover-background-color:
 * select-filled-danger-hover-border-color:
 * select-filled-danger-disabled-background-color:
 * select-filled-danger-disabled-border-color:
 * select-filled-danger-disabled-icon-color:
 * select-filled-danger-disabled-text-color:
 * select-filled-control-background-color:
 * select-filled-control-border-color:
 * select-filled-control-icon-color:
 * select-filled-control-text-color:
 * select-filled-control-placeholder-text-color:
 * select-filled-control-focus-background-color:
 * select-filled-control-focus-border-color:
 * select-filled-control-hover-background-color:
 * select-filled-control-hover-border-color:
 * select-filled-control-disabled-background-color:
 * select-filled-control-disabled-border-color:
 * select-filled-control-disabled-icon-color:
 * select-filled-control-disabled-text-color:
 * select-hero-tiny-padding:
 * select-hero-small-padding:
 * select-hero-medium-padding:
 * select-hero-large-padding:
 * select-hero-giant-padding:
 * select-hero-basic-left-background-color:
 * select-hero-basic-right-background-color:
 * select-hero-basic-icon-color:
 * select-hero-basic-text-color:
 * select-hero-basic-placeholder-text-color:
 * select-hero-basic-focus-left-background-color:
 * select-hero-basic-focus-right-background-color:
 * select-hero-basic-hover-left-background-color:
 * select-hero-basic-hover-right-background-color:
 * select-hero-basic-disabled-background-color:
 * select-hero-basic-disabled-icon-color:
 * select-hero-basic-disabled-text-color:
 * select-hero-primary-left-background-color:
 * select-hero-primary-right-background-color:
 * select-hero-primary-icon-color:
 * select-hero-primary-text-color:
 * select-hero-primary-placeholder-text-color:
 * select-hero-primary-focus-left-background-color:
 * select-hero-primary-focus-right-background-color:
 * select-hero-primary-hover-left-background-color:
 * select-hero-primary-hover-right-background-color:
 * select-hero-primary-disabled-background-color:
 * select-hero-primary-disabled-icon-color:
 * select-hero-primary-disabled-text-color:
 * select-hero-success-left-background-color:
 * select-hero-success-right-background-color:
 * select-hero-success-icon-color:
 * select-hero-success-text-color:
 * select-hero-success-placeholder-text-color:
 * select-hero-success-focus-left-background-color:
 * select-hero-success-focus-right-background-color:
 * select-hero-success-hover-left-background-color:
 * select-hero-success-hover-right-background-color:
 * select-hero-success-disabled-background-color:
 * select-hero-success-disabled-icon-color:
 * select-hero-success-disabled-text-color:
 * select-hero-info-left-background-color:
 * select-hero-info-right-background-color:
 * select-hero-info-icon-color:
 * select-hero-info-text-color:
 * select-hero-info-placeholder-text-color:
 * select-hero-info-focus-left-background-color:
 * select-hero-info-focus-right-background-color:
 * select-hero-info-hover-left-background-color:
 * select-hero-info-hover-right-background-color:
 * select-hero-info-disabled-background-color:
 * select-hero-info-disabled-icon-color:
 * select-hero-info-disabled-text-color:
 * select-hero-warning-left-background-color:
 * select-hero-warning-right-background-color:
 * select-hero-warning-icon-color:
 * select-hero-warning-text-color:
 * select-hero-warning-placeholder-text-color:
 * select-hero-warning-focus-left-background-color:
 * select-hero-warning-focus-right-background-color:
 * select-hero-warning-hover-left-background-color:
 * select-hero-warning-hover-right-background-color:
 * select-hero-warning-disabled-background-color:
 * select-hero-warning-disabled-icon-color:
 * select-hero-warning-disabled-text-color:
 * select-hero-danger-left-background-color:
 * select-hero-danger-right-background-color:
 * select-hero-danger-icon-color:
 * select-hero-danger-text-color:
 * select-hero-danger-placeholder-text-color:
 * select-hero-danger-focus-left-background-color:
 * select-hero-danger-focus-right-background-color:
 * select-hero-danger-hover-left-background-color:
 * select-hero-danger-hover-right-background-color:
 * select-hero-danger-disabled-background-color:
 * select-hero-danger-disabled-icon-color:
 * select-hero-danger-disabled-text-color:
 * select-hero-control-left-background-color:
 * select-hero-control-right-background-color:
 * select-hero-control-icon-color:
 * select-hero-control-text-color:
 * select-hero-control-placeholder-text-color:
 * select-hero-control-focus-left-background-color:
 * select-hero-control-focus-right-background-color:
 * select-hero-control-hover-left-background-color:
 * select-hero-control-hover-right-background-color:
 * select-hero-control-disabled-background-color:
 * select-hero-control-disabled-icon-color:
 * select-hero-control-disabled-text-color:
 * */
class NbSelectComponent {
    constructor(document, overlay, hostRef, positionBuilder, triggerStrategyBuilder, cd, focusKeyManagerFactoryService, focusMonitor, renderer, zone, statusService) {
        this.document = document;
        this.overlay = overlay;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.cd = cd;
        this.focusKeyManagerFactoryService = focusKeyManagerFactoryService;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        /**
         * Select size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Select status (adds specific styles):
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`
         */
        this.status = 'basic';
        /**
         * Select shapes: `rectangle` (default), `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Select appearances: `outline` (default), `filled`, `hero`
         */
        this.appearance = 'outline';
        this._fullWidth = false;
        /**
         * Renders select placeholder if nothing selected.
         * */
        this.placeholder = '';
        this._compareWith = (v1, v2) => v1 === v2;
        this._multiple = false;
        /**
         * Determines options overlay offset (in pixels).
         **/
        this.optionsOverlayOffset = 8;
        /**
         * Determines options overlay scroll strategy.
         **/
        this.scrollStrategy = 'block';
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
        /**
         * List of selected options.
         * */
        this.selectionModel = [];
        /**
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction and this directive can use only string.
         */
        this.overlayPosition = '';
        this.alive = true;
        this.destroy$ = new Subject();
        /**
         * Function passed through control value accessor to propagate changes.
         * */
        this.onChange = () => { };
        this.onTouched = () => { };
        /*
         * @docs-private
         **/
        this.status$ = new BehaviorSubject(this.status);
        /*
         * @docs-private
         **/
        this.size$ = new BehaviorSubject(this.size);
        /*
         * @docs-private
         **/
        this.focused$ = new BehaviorSubject(false);
        /*
         * @docs-private
         **/
        this.disabled$ = new BehaviorSubject(this.disabled);
        /*
         * @docs-private
         **/
        this.fullWidth$ = new BehaviorSubject(this.fullWidth);
    }
    /**
     * Adds `outline` styles
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Adds `filled` styles
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Adds `hero` styles
     */
    get hero() {
        return this.appearance === 'hero';
    }
    set hero(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'hero';
        }
    }
    /**
     * Disables the select
     */
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * If set element will fill its container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    /**
     * A function to compare option value with selected value.
     * By default, values are compared with strict equality (`===`).
     */
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            return;
        }
        this._compareWith = fn;
        if (this.selectionModel.length && this.canSelectValue()) {
            this.setSelection(this.selected);
        }
    }
    /**
     * Accepts selected item or array of selected items.
     * */
    set selected(value) {
        this.writeValue(value);
    }
    get selected() {
        return this.multiple
            ? this.selectionModel.map(o => o.value)
            : this.selectionModel[0].value;
    }
    /**
     * Gives capability just write `multiple` over the element.
     * */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    /**
     * Determines is select opened.
     * */
    get isOpen() {
        return this.ref && this.ref.hasAttached();
    }
    /**
     * Determines is select hidden.
     * */
    get isHidden() {
        return !this.isOpen;
    }
    /**
     * Returns width of the select button.
     * */
    get hostWidth() {
        return this.button.nativeElement.getBoundingClientRect().width;
    }
    get selectButtonClasses() {
        const classes = [];
        if (!this.selectionModel.length) {
            classes.push('placeholder');
        }
        if (!this.selectionModel.length && !this.placeholder) {
            classes.push('empty');
        }
        if (this.isOpen) {
            classes.push(this.overlayPosition);
        }
        return classes;
    }
    /**
     * Content rendered in the label.
     * */
    get selectionView() {
        if (this.selectionModel.length > 1) {
            return this.selectionModel.map((option) => option.content).join(', ');
        }
        return this.selectionModel[0].content;
    }
    ngOnChanges({ disabled, status, size, fullWidth }) {
        if (disabled) {
            this.disabled$.next(disabled.currentValue);
        }
        if (status) {
            this.status$.next(status.currentValue);
        }
        if (size) {
            this.size$.next(size.currentValue);
        }
        if (fullWidth) {
            this.fullWidth$.next(this.fullWidth);
        }
    }
    ngAfterContentInit() {
        this.options.changes
            .pipe(startWith(this.options), filter(() => this.queue != null && this.canSelectValue()), 
        // Call 'writeValue' when current change detection run is finished.
        // When writing is finished, change detection starts again, since
        // microtasks queue is empty.
        // Prevents ExpressionChangedAfterItHasBeenCheckedError.
        switchMap((options) => from(Promise.resolve(options))), takeUntil(this.destroy$))
            .subscribe(() => this.writeValue(this.queue));
    }
    ngAfterViewInit() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnButtonFocus();
        this.subscribeOnTriggers();
        this.subscribeOnOptionClick();
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.alive = false;
        this.destroy$.next();
        this.destroy$.complete();
        if (this.ref) {
            this.ref.dispose();
        }
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    show() {
        if (this.isHidden) {
            this.attachToOverlay();
            this.setActiveOption();
            this.cd.markForCheck();
        }
    }
    hide() {
        if (this.isOpen) {
            this.ref.detach();
            this.cd.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cd.markForCheck();
    }
    writeValue(value) {
        if (!this.alive) {
            return;
        }
        if (this.canSelectValue() && value != null) {
            this.setSelection(value);
            if (this.selectionModel.length) {
                this.queue = null;
            }
        }
        else {
            this.queue = value;
        }
    }
    /**
     * Selects option or clear all selected options if value is null.
     * */
    handleOptionClick(option) {
        this.queue = null;
        if (option.value == null) {
            this.reset();
        }
        else {
            this.selectOption(option);
        }
        this.cd.markForCheck();
    }
    /**
     * Deselect all selected options.
     * */
    reset() {
        this.selectionModel.forEach((option) => option.deselect());
        this.selectionModel = [];
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(this.multiple ? [] : null);
    }
    /**
     * Determines how to select option as multiple or single.
     * */
    selectOption(option) {
        if (this.multiple) {
            this.handleMultipleSelect(option);
        }
        else {
            this.handleSingleSelect(option);
        }
    }
    /**
     * Select single option.
     * */
    handleSingleSelect(option) {
        const selected = this.selectionModel.pop();
        if (selected && !this._compareWith(selected.value, option.value)) {
            selected.deselect();
        }
        this.selectionModel = [option];
        option.select();
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(option.value);
    }
    /**
     * Select for multiple options.
     * */
    handleMultipleSelect(option) {
        if (option.selected) {
            this.selectionModel = this.selectionModel.filter(s => !this._compareWith(s.value, option.value));
            option.deselect();
        }
        else {
            this.selectionModel.push(option);
            option.select();
        }
        this.emitSelected(this.selectionModel.map((opt) => opt.value));
    }
    attachToOverlay() {
        if (!this.ref) {
            this.createOverlay();
            this.subscribeOnPositionChange();
            this.createKeyManager();
            this.subscribeOnOverlayKeys();
        }
        this.ref.attach(this.portal);
    }
    setActiveOption() {
        if (this.selectionModel.length) {
            this.keyManager.setActiveItem(this.selectionModel[0]);
        }
        else {
            this.keyManager.setFirstItemActive();
        }
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy,
            panelClass: this.optionsPanelClass,
        });
    }
    createKeyManager() {
        this.keyManager = this.focusKeyManagerFactoryService.create(this.options).withTypeAhead(200);
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.button)
            .position(NbPosition.BOTTOM)
            .offset(this.optionsOverlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies[this.scrollStrategy]();
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$.subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(($event) => {
            this.hide();
            if (!this.isClickedWithinComponent($event)) {
                this.onTouched();
            }
        });
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => {
            this.overlayPosition = position;
            this.cd.detectChanges();
        });
    }
    subscribeOnOptionClick() {
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.options.changes
            .pipe(startWith(this.options), switchMap((options) => {
            return merge(...options.map(option => option.click));
        }), takeUntil(this.destroy$))
            .subscribe((clickedOption) => this.handleOptionClick(clickedOption));
    }
    subscribeOnOverlayKeys() {
        this.ref.keydownEvents()
            .pipe(filter(() => this.isOpen), takeUntil(this.destroy$))
            .subscribe((event) => {
            if (event.keyCode === ESCAPE) {
                this.button.nativeElement.focus();
                this.hide();
            }
            else {
                this.keyManager.onKeydown(event);
            }
        });
        this.keyManager.tabOut
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.hide();
            this.onTouched();
        });
    }
    subscribeOnButtonFocus() {
        this.focusMonitor.monitor(this.button)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.button)), takeUntil(this.destroy$))
            .subscribe(this.focused$);
    }
    getContainer() {
        return this.ref && this.ref.hasAttached() && {
            location: {
                nativeElement: this.ref.overlayElement,
            },
        };
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.onChange(selected);
        this.selectedChange.emit(selected);
    }
    /**
     * Set selected value in model.
     * */
    setSelection(value) {
        const isArray = Array.isArray(value);
        if (this.multiple && !isArray) {
            throw new Error('Can\'t assign single value if select is marked as multiple');
        }
        if (!this.multiple && isArray) {
            throw new Error('Can\'t assign array if select is not marked as multiple');
        }
        const previouslySelectedOptions = this.selectionModel;
        this.selectionModel = [];
        if (isArray) {
            value.forEach(option => this.selectValue(option));
        }
        else {
            this.selectValue(value);
        }
        // find options which were selected before and trigger deselect
        previouslySelectedOptions
            .filter((option) => !this.selectionModel.includes(option))
            .forEach((option) => option.deselect());
        this.cd.markForCheck();
    }
    /**
     * Selects value.
     * */
    selectValue(value) {
        const corresponding = this.options.find((option) => this._compareWith(option.value, value));
        if (corresponding) {
            corresponding.select();
            this.selectionModel.push(corresponding);
        }
    }
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched() {
        if (this.isHidden) {
            this.onTouched();
        }
    }
    isClickedWithinComponent($event) {
        return this.hostRef.nativeElement === $event.target || this.hostRef.nativeElement.contains($event.target);
    }
    canSelectValue() {
        return !!(this.options && this.options.length);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get round() {
        return this.shape === 'round';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
}
NbSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-select',
                template: "<button [disabled]=\"disabled\"\n        [ngClass]=\"selectButtonClasses\"\n        (blur)=\"trySetTouched()\"\n        (keydown.arrowDown)=\"show()\"\n        (keydown.arrowUp)=\"show()\"\n        class=\"select-button\"\n        type=\"button\"\n        #selectButton>\n\n    <ng-container *ngIf=\"selectionModel.length; else placeholderTemplate\">\n      <ng-container *ngIf=\"customLabel; else defaultSelectionTemplate\">\n        <ng-content select=\"nb-select-label\"></ng-content>\n      </ng-container>\n\n      <ng-template #defaultSelectionTemplate>{{ selectionView }}</ng-template>\n    </ng-container>\n\n    <ng-template #placeholderTemplate>{{ placeholder }}</ng-template>\n\n    <nb-icon icon=\"chevron-down-outline\" pack=\"nebular-essentials\" (click)=\"disabled && $event.stopPropagation()\" aria-hidden=\"true\">\n    </nb-icon>\n</button>\n\n<nb-option-list *nbPortal [size]=\"size\" [position]=\"overlayPosition\" [style.width.px]=\"hostWidth\" [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbSelectComponent),
                        multi: true,
                    },
                    { provide: NB_SELECT_INJECTION_TOKEN, useExisting: NbSelectComponent },
                    { provide: NbFormFieldControl, useExisting: NbSelectComponent },
                    { provide: NbFormFieldControlConfig, useFactory: nbSelectFormFieldControlConfigFactory },
                ],
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:inline-block;max-width:100%}[dir=ltr] :host .select-button{text-align:left}[dir=ltr] :host .select-button nb-icon{right:0.2em}[dir=rtl] :host .select-button{text-align:right}[dir=rtl] :host .select-button nb-icon{left:0.2em}:host(.full-width){width:100%}:host(.nb-transition) .select-button{transition-duration:0.15s;transition-property:background-color,border-color,border-radius,box-shadow,color;transition-timing-function:ease-in}.select-button{position:relative;width:100%;overflow:hidden;text-overflow:ellipsis;text-transform:none;white-space:nowrap}nb-icon{font-size:1.5em;position:absolute;top:50%;transform:translateY(-50%);transition-duration:0.15s;transition-property:transform;transition-timing-function:ease-in}[dir=ltr] nb-icon{right:.5rem}[dir=rtl] nb-icon{left:.5rem}:host(.open) nb-icon{transform:translateY(-50%) rotate(180deg)}\n"]
            },] }
];
NbSelectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbOverlayService },
    { type: ElementRef },
    { type: NbPositionBuilderService },
    { type: NbTriggerStrategyBuilderService },
    { type: ChangeDetectorRef },
    { type: NbFocusKeyManagerFactoryService },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbSelectComponent.propDecorators = {
    size: [{ type: Input }],
    status: [{ type: Input }],
    shape: [{ type: Input }],
    appearance: [{ type: Input }],
    optionsListClass: [{ type: Input }],
    optionsPanelClass: [{ type: Input }],
    outline: [{ type: Input }, { type: HostBinding, args: ['class.appearance-outline',] }],
    filled: [{ type: Input }, { type: HostBinding, args: ['class.appearance-filled',] }],
    hero: [{ type: Input }, { type: HostBinding, args: ['class.appearance-hero',] }],
    disabled: [{ type: Input }],
    fullWidth: [{ type: Input }, { type: HostBinding, args: ['class.full-width',] }],
    placeholder: [{ type: Input }],
    compareWith: [{ type: Input }],
    selected: [{ type: Input }],
    multiple: [{ type: Input }],
    optionsOverlayOffset: [{ type: Input }],
    scrollStrategy: [{ type: Input }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    selectedChange: [{ type: Output }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }],
    customLabel: [{ type: ContentChild, args: [NbSelectLabelComponent,] }],
    portal: [{ type: ViewChild, args: [NbPortalDirective,] }],
    button: [{ type: ViewChild, args: ['selectButton', { read: ElementRef },] }],
    isOpen: [{ type: HostBinding, args: ['class.open',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    rectangle: [{ type: HostBinding, args: ['class.shape-rectangle',] }],
    round: [{ type: HostBinding, args: ['class.shape-round',] }],
    semiRound: [{ type: HostBinding, args: ['class.shape-semi-round',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * NbOptionGroupComponent
 *
 * @styles
 *
 * option-group-text-color:
 * option-group-tiny-start-padding:
 * option-group-small-start-padding:
 * option-group-medium-start-padding:
 * option-group-large-start-padding:
 * option-group-giant-start-padding:
 **/
class NbOptionGroupComponent {
    constructor() {
        this.destroy$ = new Subject();
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
        if (this.options) {
            this.updateOptionsDisabledState();
        }
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    ngAfterContentInit() {
        if (this.options.length) {
            this.asyncUpdateOptionsDisabledState();
        }
        this.options.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.asyncUpdateOptionsDisabledState());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    updateOptionsDisabledState() {
        this.options.forEach((option) => option.setDisabledByGroupState(this.disabled));
    }
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    asyncUpdateOptionsDisabledState() {
        // Wrap Promise into Observable with `takeUntil(this.destroy$)` to prevent update if component destroyed.
        from(Promise.resolve())
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.updateOptionsDisabledState());
    }
}
NbOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span class="option-group-title">{{ title }}</span>
    <ng-content select="nb-option, ng-container"></ng-content>
  `,
                styles: [":host{display:block}.option-group-title{display:block}\n"]
            },] }
];
NbOptionGroupComponent.propDecorators = {
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    disabledAttribute: [{ type: HostBinding, args: ['attr.disabled',] }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }]
};

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
class NbOptionListComponent {
    constructor() {
        this.size = 'medium';
    }
    get positionTop() {
        return this.position === NbPosition.TOP;
    }
    get positionBottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get sizeTiny() {
        return this.size === 'tiny';
    }
    get sizeSmall() {
        return this.size === 'small';
    }
    get sizeMedium() {
        return this.size === 'medium';
    }
    get sizeLarge() {
        return this.size === 'large';
    }
    get sizeGiant() {
        return this.size === 'giant';
    }
}
NbOptionListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-option-list',
                template: `
    <ul class="option-list">
      <ng-content></ng-content>
    </ul>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbOptionListComponent.propDecorators = {
    size: [{ type: Input }],
    position: [{ type: Input }],
    positionTop: [{ type: HostBinding, args: ['class.position-top',] }],
    positionBottom: [{ type: HostBinding, args: ['class.position-bottom',] }],
    sizeTiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    sizeSmall: [{ type: HostBinding, args: ['class.size-small',] }],
    sizeMedium: [{ type: HostBinding, args: ['class.size-medium',] }],
    sizeLarge: [{ type: HostBinding, args: ['class.size-large',] }],
    sizeGiant: [{ type: HostBinding, args: ['class.size-giant',] }]
};

const NB_OPTION_LIST_COMPONENTS = [
    NbOptionListComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
];
class NbOptionModule {
}
NbOptionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...NB_OPTION_LIST_COMPONENTS,
                ],
                imports: [
                    CommonModule,
                    NbCheckboxModule,
                ],
                exports: [
                    ...NB_OPTION_LIST_COMPONENTS,
                ],
            },] }
];

const NB_SELECT_COMPONENTS = [
    NbSelectComponent,
    NbSelectLabelComponent,
];
class NbSelectModule {
}
NbSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbOverlayModule,
                    NbButtonModule,
                    NbInputModule,
                    NbCardModule,
                    NbIconModule,
                    NbOptionModule,
                ],
                exports: [
                    ...NB_SELECT_COMPONENTS,
                    NbOptionModule,
                ],
                declarations: [...NB_SELECT_COMPONENTS],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// Component class scoped counter for aria attributes.
let lastAutocompleteId = 0;
/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
class NbAutocompleteComponent {
    constructor(cd) {
        this.cd = cd;
        this.destroy$ = new Subject();
        /**
         * Component scoped id for aria attributes.
         * */
        this.id = `nb-autocomplete-${lastAutocompleteId++}`;
        /**
         * @docs-private
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction.
         */
        this._overlayPosition = '';
        /**
         * Autocomplete size, available sizes:
         * `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Flag passed as input to always make first option active.
         * */
        this.activeFirst = false;
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
    }
    get overlayPosition() {
        return this._overlayPosition;
    }
    set overlayPosition(value) {
        this._overlayPosition = value;
        // Need run change detection after first set from NbAutocompleteDirective
        this.cd.detectChanges();
    }
    /**
     * Returns width of the input.
     * */
    get hostWidth() {
        return this.hostRef.nativeElement.getBoundingClientRect().width;
    }
    ngAfterContentInit() {
        this.options.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef) {
        this.hostRef = hostRef;
    }
    /**
     * Propagate selected value.
     * */
    emitSelected(selected) {
        this.selectedChange.emit(selected);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
}
NbAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-autocomplete',
                template: "<nb-option-list *nbPortal\n                [size]=\"size\"\n                [position]=\"overlayPosition\"\n                [style.width.px]=\"hostWidth\"\n                role=\"listbox\"\n                [id]=\"id\"\n                [class.empty]=\"!options?.length\"\n                [ngClass]=\"optionsListClass\">\n  <ng-content select=\"nb-option, nb-option-group\"></ng-content>\n</nb-option-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host(:hover){cursor:pointer}nb-option-list.empty{border:none}\n"]
            },] }
];
NbAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NbAutocompleteComponent.propDecorators = {
    handleDisplayFn: [{ type: Input }],
    size: [{ type: Input }],
    activeFirst: [{ type: Input }],
    optionsListClass: [{ type: Input }],
    optionsPanelClass: [{ type: Input }],
    selectedChange: [{ type: Output }],
    options: [{ type: ContentChildren, args: [NbOptionComponent, { descendants: true },] }],
    portal: [{ type: ViewChild, args: [NbPortalDirective,] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbAutocompleteDirective` provides a capability to expand input with
 * `NbAutocompleteComponent` overlay containing options to select and fill input with.
 *
 * @stacked-example(Showcase, autocomplete/autocomplete-showcase.component)
 *
 * ### Installation
 *
 * Import `NbAutocompleteModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAutocompleteModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * You can bind control with form controls or ngModel.
 *
 * @stacked-example(Autocomplete form binding, autocomplete/autocomplete-form.component)
 *
 * Options in the autocomplete may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, autocomplete/autocomplete-group.component)
 *
 * Autocomplete may change selected option value via provided function.
 *
 * @stacked-example(Custom display, autocomplete/autocomplete-custom-display.component)
 *
 * Also, autocomplete may make first option in option list active automatically.
 *
 * @stacked-example(Active first, autocomplete/autocomplete-active-first.component)
 *
 * */
class NbAutocompleteDirective {
    constructor(hostRef, overlay, cd, triggerStrategyBuilder, positionBuilder, activeDescendantKeyManagerFactory, renderer) {
        this.hostRef = hostRef;
        this.overlay = overlay;
        this.cd = cd;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.positionBuilder = positionBuilder;
        this.activeDescendantKeyManagerFactory = activeDescendantKeyManagerFactory;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this._onChange = () => { };
        this._onTouched = () => { };
        /**
         * Determines options overlay offset (in pixels).
         **/
        this.overlayOffset = 8;
        this._focusInputOnValueChange = true;
        /**
         * Determines options overlay scroll strategy.
         **/
        this.scrollStrategy = 'block';
        this.role = 'combobox';
        this.ariaAutocomplete = 'list';
        this.hasPopup = 'true';
    }
    /**
     * Determines is autocomplete overlay opened.
     * */
    get isOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    /**
     * Determines is autocomplete overlay closed.
     * */
    get isClosed() {
        return !this.isOpen;
    }
    /**
     * Provides autocomplete component.
     * */
    get autocomplete() {
        return this._autocomplete;
    }
    set autocomplete(autocomplete) {
        this._autocomplete = autocomplete;
    }
    /**
     * Determines if the input will be focused when the control value is changed
     * */
    get focusInputOnValueChange() {
        return this._focusInputOnValueChange;
    }
    set focusInputOnValueChange(value) {
        this._focusInputOnValueChange = convertToBoolProperty(value);
    }
    get top() {
        return this.isOpen && this.autocomplete.options.length && this.autocomplete.overlayPosition === NbPosition.TOP;
    }
    get bottom() {
        return this.isOpen && this.autocomplete.options.length && this.autocomplete.overlayPosition === NbPosition.BOTTOM;
    }
    get ariaExpanded() {
        return this.isOpen && this.isOpen.toString();
    }
    get ariaOwns() {
        return this.isOpen ? this.autocomplete.id : null;
    }
    get ariaActiveDescendant() {
        return (this.isOpen && this.keyManager.activeItem) ? this.keyManager.activeItem.id : null;
    }
    ngAfterViewInit() {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
    }
    ngOnDestroy() {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
        if (this.positionStrategy) {
            this.positionStrategy.dispose();
        }
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    handleInput() {
        const currentValue = this.hostRef.nativeElement.value;
        this._onChange(currentValue);
        this.setHostInputValue(this.getDisplayValue(currentValue));
        this.show();
    }
    handleKeydown() {
        this.show();
    }
    handleBlur() {
        this._onTouched();
    }
    show() {
        if (this.isClosed) {
            this.attachToOverlay();
            this.setActiveItem();
        }
    }
    hide() {
        if (this.isOpen) {
            this.overlayRef.detach();
            // Need to update class via @HostBinding
            this.cd.markForCheck();
        }
    }
    writeValue(value) {
        this.handleInputValueUpdate(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(disabled) {
        this.renderer.setProperty(this.hostRef.nativeElement, 'disabled', disabled);
    }
    subscribeOnOptionClick() {
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.autocomplete.options.changes
            .pipe(tap(() => this.setActiveItem()), startWith(this.autocomplete.options), switchMap((options) => {
            return merge(...options.map(option => option.click));
        }), takeUntil(this.destroy$))
            .subscribe((clickedOption) => this.handleInputValueUpdate(clickedOption.value));
    }
    subscribeOnPositionChange() {
        this.positionStrategy.positionChange
            .pipe(takeUntil(this.destroy$))
            .subscribe((position) => {
            this.autocomplete.overlayPosition = position;
            this.cd.detectChanges();
        });
    }
    getActiveItem() {
        return this.keyManager.activeItem;
    }
    setupAutocomplete() {
        this.autocomplete.setHost(this.customOverlayHost || this.hostRef);
    }
    getDisplayValue(value) {
        const displayFn = this.autocomplete.handleDisplayFn;
        return displayFn ? displayFn(value) : value;
    }
    getContainer() {
        return this.overlayRef && this.isOpen && {
            location: {
                nativeElement: this.overlayRef.overlayElement,
            },
        };
    }
    handleInputValueUpdate(value) {
        if (value === undefined || value === null) {
            return;
        }
        this.setHostInputValue(value);
        this._onChange(value);
        if (this.focusInputOnValueChange) {
            this.hostRef.nativeElement.focus();
        }
        this.autocomplete.emitSelected(value);
        this.hide();
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$
            .pipe(filter(() => this.isClosed))
            .subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(() => this.hide());
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    createKeyManager() {
        this.keyManager = this.activeDescendantKeyManagerFactory
            .create(this.autocomplete.options);
    }
    setHostInputValue(value) {
        this.hostRef.nativeElement.value = this.getDisplayValue(value);
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.customOverlayHost || this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    subscribeOnOverlayKeys() {
        this.overlayRef.keydownEvents()
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => {
            if (event.keyCode === ESCAPE && this.isOpen) {
                event.preventDefault();
                this.hostRef.nativeElement.focus();
                this.hide();
            }
            else if (event.keyCode === ENTER) {
                event.preventDefault();
                const activeItem = this.getActiveItem();
                if (!activeItem) {
                    return;
                }
                this.handleInputValueUpdate(activeItem.value);
            }
            else {
                this.keyManager.onKeydown(event);
            }
        });
    }
    setActiveItem() {
        // If autocomplete has activeFirst input set to true,
        // keyManager set first option active, otherwise - reset active option.
        const mode = this.autocomplete.activeFirst
            ? NbKeyManagerActiveItemMode.FIRST_ACTIVE
            : NbKeyManagerActiveItemMode.RESET_ACTIVE;
        this.keyManager.setActiveItem(mode);
        this.cd.detectChanges();
    }
    attachToOverlay() {
        if (!this.overlayRef) {
            this.setupAutocomplete();
            this.initOverlay();
        }
        this.overlayRef.attach(this.autocomplete.portal);
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.overlayRef = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy, panelClass: this.autocomplete.optionsPanelClass });
    }
    initOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.createKeyManager();
        this.subscribeOnPositionChange();
        this.subscribeOnOptionClick();
        this.checkOverlayVisibility();
        this.createOverlay();
        this.subscribeOnOverlayKeys();
    }
    checkOverlayVisibility() {
        this.autocomplete.options.changes
            .pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (!this.autocomplete.options.length) {
                this.hide();
            }
        });
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies[this.scrollStrategy]();
    }
}
NbAutocompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbAutocomplete]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbAutocompleteDirective),
                        multi: true,
                    }],
            },] }
];
NbAutocompleteDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbOverlayService },
    { type: ChangeDetectorRef },
    { type: NbTriggerStrategyBuilderService },
    { type: NbPositionBuilderService },
    { type: NbActiveDescendantKeyManagerFactoryService },
    { type: Renderer2 }
];
NbAutocompleteDirective.propDecorators = {
    autocomplete: [{ type: Input, args: ['nbAutocomplete',] }],
    overlayOffset: [{ type: Input }],
    focusInputOnValueChange: [{ type: Input }],
    scrollStrategy: [{ type: Input }],
    customOverlayHost: [{ type: Input }],
    top: [{ type: HostBinding, args: ['class.nb-autocomplete-position-top',] }],
    bottom: [{ type: HostBinding, args: ['class.nb-autocomplete-position-bottom',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaAutocomplete: [{ type: HostBinding, args: ['attr.aria-autocomplete',] }],
    hasPopup: [{ type: HostBinding, args: ['attr.haspopup',] }],
    ariaExpanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    ariaOwns: [{ type: HostBinding, args: ['attr.aria-owns',] }],
    ariaActiveDescendant: [{ type: HostBinding, args: ['attr.aria-activedescendant',] }],
    handleInput: [{ type: HostListener, args: ['input',] }],
    handleKeydown: [{ type: HostListener, args: ['keydown.arrowDown',] }, { type: HostListener, args: ['keydown.arrowUp',] }],
    handleBlur: [{ type: HostListener, args: ['blur',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_AUTOCOMPLETE_COMPONENTS = [
    NbAutocompleteComponent,
    NbAutocompleteDirective,
];
class NbAutocompleteModule {
}
NbAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NbOverlayModule,
                    NbCardModule,
                    NbOptionModule,
                ],
                exports: [
                    ...NB_AUTOCOMPLETE_COMPONENTS,
                    NbOptionModule,
                ],
                declarations: [...NB_AUTOCOMPLETE_COMPONENTS],
            },] }
];

var NbWindowState;
(function (NbWindowState) {
    NbWindowState["MINIMIZED"] = "minimized";
    NbWindowState["MAXIMIZED"] = "maximized";
    NbWindowState["FULL_SCREEN"] = "full-screen";
})(NbWindowState || (NbWindowState = {}));
const NB_WINDOW_DEFAULT_BUTTONS_CONFIG = {
    minimize: true,
    maximize: true,
    fullScreen: true,
};
/**
 * Window configuration options.
 */
class NbWindowConfig {
    constructor(...configs) {
        /**
         * Window title.
         */
        this.title = '';
        /**
         * Initial window state. Full screen by default.
         */
        this.initialState = NbWindowState.FULL_SCREEN;
        /**
         * If true than backdrop will be rendered behind window.
         * By default set to true.
         */
        this.hasBackdrop = true;
        /**
         * If set to true mouse clicks on backdrop will close a window.
         * Default is true.
         */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a window.
         * Default is true.
         */
        this.closeOnEsc = true;
        /**
         * Class to be applied to the window.
         */
        this.windowClass = '';
        /**
         * Both, template and component may receive data through `config.context` property.
         * For components, this data will be set as component properties.
         * For templates, you can access it inside template as $implicit.
         */
        this.context = {};
        /**
         * Where the attached component should live in Angular's *logical* component tree.
         * This affects what is available for injection and the change detection order for the
         * component instantiated inside of the window. This does not affect where the window
         * content will be rendered.
         */
        this.viewContainerRef = null;
        /**
         * Windows control buttons can be hidden by setting according property to false.
         */
        this.buttons = {};
        Object.assign(this, ...configs);
        this.applyDefaultButtonConfig();
    }
    applyDefaultButtonConfig() {
        Object.assign(this, { buttons: Object.assign(Object.assign({}, NB_WINDOW_DEFAULT_BUTTONS_CONFIG), this.buttons) });
    }
}
const NB_WINDOW_CONTENT = new InjectionToken('Nebular Window Content');
const NB_WINDOW_CONFIG = new InjectionToken('Nebular Window Config');
const NB_WINDOW_CONTEXT = new InjectionToken('Nebular Window Context');

/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 */
class NbWindowRef {
    constructor(config) {
        this.config = config;
        this.stateChange$ = new ReplaySubject(1);
        this._closed = false;
        this.closed$ = new Subject();
        this.state = config.initialState;
    }
    /**
     * Current window state.
     */
    get state() {
        return this.stateValue;
    }
    set state(newState) {
        if (newState && this.stateValue !== newState) {
            this.prevStateValue = this.state;
            this.stateValue = newState;
            this.stateChange$.next({ oldState: this.prevStateValue, newState });
        }
    }
    /**
     * Emits when window state change.
     */
    get stateChange() {
        return this.stateChange$.asObservable();
    }
    /**
     * Emits when window was closed.
     */
    get onClose() {
        return this.closed$.asObservable();
    }
    /**
     * Minimize window.
     */
    minimize() {
        this.state = NbWindowState.MINIMIZED;
    }
    /**
     * Maximize window.
     */
    maximize() {
        this.state = NbWindowState.MAXIMIZED;
    }
    /**
     * Set window on top.
     */
    fullScreen() {
        this.state = NbWindowState.FULL_SCREEN;
    }
    toPreviousState() {
        this.state = this.prevStateValue;
    }
    /**
     * Closes window.
     * */
    close() {
        if (this._closed) {
            return;
        }
        this._closed = true;
        this.componentRef.destroy();
        this.stateChange$.complete();
        this.closed$.next();
        this.closed$.complete();
    }
}

class NbWindowsContainerComponent {
}
NbWindowsContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-windows-container',
                template: `<ng-container #viewContainerRef></ng-container>`,
                styles: [":host{display:flex;align-items:flex-end;overflow-x:auto}:host ::ng-deep nb-window:not(.full-screen){margin:0 2rem}\n"]
            },] }
];
NbWindowsContainerComponent.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ['viewContainerRef', { read: ViewContainerRef, static: true },] }]
};

class NbWindowComponent {
    constructor(content, context, windowRef, config, focusTrapFactory, elementRef, renderer) {
        this.content = content;
        this.context = context;
        this.windowRef = windowRef;
        this.config = config;
        this.focusTrapFactory = focusTrapFactory;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get isFullScreen() {
        return this.windowRef.state === NbWindowState.FULL_SCREEN;
    }
    get maximized() {
        return this.windowRef.state === NbWindowState.MAXIMIZED;
    }
    get minimized() {
        return this.windowRef.state === NbWindowState.MINIMIZED;
    }
    get showMinimize() {
        return this.config.buttons.minimize;
    }
    get showMaximize() {
        return this.config.buttons.maximize;
    }
    get showFullScreen() {
        return this.config.buttons.fullScreen;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.focusTrap.blurPreviouslyFocusedElement();
        this.focusTrap.focusInitialElement();
        if (this.config.windowClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.config.windowClass);
        }
    }
    ngAfterViewChecked() {
        if (!this.overlayContainer || this.overlayContainer.isAttached) {
            return;
        }
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else {
            this.attachComponent();
        }
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
        this.close();
    }
    minimize() {
        if (this.windowRef.state === NbWindowState.MINIMIZED) {
            this.windowRef.toPreviousState();
        }
        else {
            this.windowRef.minimize();
        }
    }
    maximize() {
        this.windowRef.maximize();
    }
    fullScreen() {
        this.windowRef.fullScreen();
    }
    maximizeOrFullScreen() {
        if (this.windowRef.state === NbWindowState.MINIMIZED && this.showMaximize) {
            this.maximize();
        }
        else {
            this.fullScreen();
        }
    }
    close() {
        this.windowRef.close();
    }
    attachTemplate() {
        this.overlayContainer
            .attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    }
}
NbWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-window',
                template: `
    <nb-card>
      <nb-card-header>
        <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <button nbButton ghost (click)="close()">
            <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
          </button>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `,
                styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"]
            },] }
];
NbWindowComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW_CONTENT,] }] },
    { type: Object, decorators: [{ type: Inject, args: [NB_WINDOW_CONTEXT,] }] },
    { type: NbWindowRef },
    { type: NbWindowConfig },
    { type: NbFocusTrapFactoryService },
    { type: ElementRef },
    { type: Renderer2 }
];
NbWindowComponent.propDecorators = {
    cfr: [{ type: Input }],
    isFullScreen: [{ type: HostBinding, args: ['class.full-screen',] }],
    maximized: [{ type: HostBinding, args: ['class.maximized',] }],
    minimized: [{ type: HostBinding, args: ['class.minimized',] }],
    overlayContainer: [{ type: ViewChild, args: [NbOverlayContainerComponent,] }]
};

/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 *
 * You can configure which buttons are available in a window via the `buttons` property of the window config.
 * @stacked-example(Control buttons, window/window-controls.component)
 *
 */
class NbWindowService {
    constructor(componentFactoryResolver, overlayService, overlayPositionBuilder, blockScrollStrategy, defaultWindowsConfig, cfr, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayService = overlayService;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.blockScrollStrategy = blockScrollStrategy;
        this.defaultWindowsConfig = defaultWindowsConfig;
        this.cfr = cfr;
        this.openWindows = [];
        this.document = document;
    }
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    open(windowContent, windowConfig = {}) {
        if (this.shouldCreateWindowsContainer()) {
            this.createWindowsContainer();
        }
        const config = new NbWindowConfig(this.defaultWindowsConfig, windowConfig);
        const windowRef = new NbWindowRef(config);
        windowRef.componentRef = this.appendWindow(windowContent, config, windowRef);
        this.openWindows.push(windowRef);
        this.subscribeToEvents(windowRef);
        return windowRef;
    }
    shouldCreateWindowsContainer() {
        if (this.windowsContainerViewRef) {
            const containerEl = this.windowsContainerViewRef.element.nativeElement;
            return !this.document.body.contains(containerEl);
        }
        return true;
    }
    createWindowsContainer() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = this.overlayService.create({
            scrollStrategy: this.overlayService.scrollStrategies.noop(),
            positionStrategy: this.overlayPositionBuilder.global().bottom().right(),
            hasBackdrop: true,
        });
        const windowsContainerPortal = new NbComponentPortal(NbWindowsContainerComponent, null, null, this.cfr);
        const overlayRef = this.overlayRef.attach(windowsContainerPortal);
        this.windowsContainerViewRef = overlayRef.instance.viewContainerRef;
    }
    appendWindow(content, config, windowRef) {
        const context = content instanceof TemplateRef
            ? { $implicit: config.context, windowRef }
            : config.context;
        const providers = [
            { provide: NB_WINDOW_CONTENT, useValue: content },
            { provide: NB_WINDOW_CONTEXT, useValue: context },
            { provide: NbWindowConfig, useValue: config },
            { provide: NbWindowRef, useValue: windowRef },
        ];
        const parentInjector = config.viewContainerRef
            ? config.viewContainerRef.injector
            : this.windowsContainerViewRef.injector;
        const injector = Injector.create({ parent: parentInjector, providers });
        const windowFactory = this.componentFactoryResolver.resolveComponentFactory(NbWindowComponent);
        const ref = this.windowsContainerViewRef.createComponent(windowFactory, null, injector);
        ref.instance.cfr = this.cfr;
        ref.changeDetectorRef.detectChanges();
        return ref;
    }
    subscribeToEvents(windowRef) {
        if (windowRef.config.closeOnBackdropClick) {
            this.overlayRef.backdropClick().subscribe(() => windowRef.close());
        }
        if (windowRef.config.closeOnEsc) {
            this.overlayRef.keydownEvents()
                .pipe(filter((event) => event.keyCode === 27))
                .subscribe(() => windowRef.close());
        }
        windowRef.stateChange.subscribe(() => this.checkAndUpdateOverlay());
        windowRef.onClose.subscribe(() => {
            this.openWindows.splice(this.openWindows.indexOf(windowRef), 1);
            this.checkAndUpdateOverlay();
        });
    }
    checkAndUpdateOverlay() {
        const fullScreenWindows = this.openWindows.filter(w => w.state === NbWindowState.FULL_SCREEN);
        if (fullScreenWindows.length > 0) {
            this.blockScrollStrategy.enable();
        }
        else {
            this.blockScrollStrategy.disable();
        }
        if (fullScreenWindows.some(w => w.config.hasBackdrop)) {
            this.overlayRef.backdropElement.removeAttribute('hidden');
        }
        else {
            this.overlayRef.backdropElement.setAttribute('hidden', '');
        }
    }
}
NbWindowService.decorators = [
    { type: Injectable }
];
NbWindowService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: NbOverlayService },
    { type: NbOverlayPositionBuilder },
    { type: NbBlockScrollStrategyAdapter },
    { type: NbWindowConfig, decorators: [{ type: Inject, args: [NB_WINDOW_CONFIG,] }] },
    { type: ComponentFactoryResolver },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];

class NbWindowModule {
    static forRoot(defaultConfig) {
        return {
            ngModule: NbWindowModule,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    }
    static forChild(defaultConfig) {
        return {
            ngModule: NbWindowModule,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    }
}
NbWindowModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NbOverlayModule, NbCardModule, NbIconModule, NbButtonModule],
                declarations: [
                    NbWindowsContainerComponent,
                    NbWindowComponent,
                ],
                entryComponents: [NbWindowsContainerComponent, NbWindowComponent],
            },] }
];

/**
 * The `NbTimePickerDirective` is form control that gives you ability to select a time. The timepicker
 * is shown when input receives a `focus` event.
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Showcase, timepicker/timepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTimepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbTimepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule,
 *   ],
 * })
 * export class PageModule { }
 *
 * ```
 * <div id="native-parse-issue" class="note note-warning">
 * <div class="note-title">Note</div>
 * <div class="note-body">
 * Timepicker uses native Date object by default, which doesn't support parsing by custom format.
 * According to the ECMAScript specification, the only supported format is a format described by ISO 8061 standard.
 * This standard requires date part to be included in the date string,
 * meaning you have to type a date+time in the input.
 * We highly recommend you to use NbDateFnsDateModule or NbMomentDateModule to be able to support time only strings in
 * the timepicker inputs. These modules use date-fns and moment date libraries, which provide capabilities
 * to parse time only strings.
 * See "Formatting Issue" at
 * <a href="https://akveo.github.io/nebular/docs/components/datepicker/overview#formatting-issue">Date picker docs</a>
 * for installation instructions.
 * </div>
 * </div>
 * <hr>
 *
 * ### Usage
 *
 * To show seconds column along with hours and minutes use `withSeconds` input
 *
 * ```html
 * <input [nbTimepicker]="timepicker">
 * <nb-timepicker #timepicker withSeconds></nb-timepicker>
 * ```
 * @stacked-example(Time picker with seconds, timepicker/timepicker-with-seconds.component)
 *
 * To force timepicker work in 12 hours format, use `twelveHoursFormat` input.
 * By default, timepicker choose 12 or 24 formats based on application locale standards
 *
 * ```html
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicker></nb-timepicker>
 * ```
 *
 * @stacked-example(Twelve hours format showcase, timepicker/timepicker-twelve-hours-format.component)
 *
 * A single column picker with options value as time and minute, so users won’t be able to pick
 * hours and minutes individually.
 * You can control options minutes offset via `step` input, e.g.: 11:00, 11:20, 11:40...'
 *
 * @stacked-example(Single column, timepicker/timepicker-single-column.component)
 *
 * Timepicker support forms and reactive forms API so you can provide value using `formControl` and `ngModel` directives
 * @stacked-example(Form control, timepicker/timepicker-form-control.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [formControl]="formControl"></nb-timepicker>
 *
 * @stacked-example(NgModel, timepicker/timepicker-ng-model.component)
 *
 * <input [nbTimepicker]="timepicker" twelveHoursFormat>
 * <nb-timepicker #timepicke [ngModel]="date"></nb-timepicker>
 *
 * You can provide localized versions of the timepicker text via the `localization` property of the config
 * object passed to the `forRoot` or `forChild` methods of the `NbTimepickerModule`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTimepickerModule.forRoot({
 *       localization: {
 *         hoursText: 'Hr',
 *         minutesText: 'Min',
 *         secondsText: 'Sec',
 *         ampmText: 'Am/Pm',
 *       }
 *     }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * @styles
 *
 * timepicker-cell-text-color:
 * timepicker-cell-hover-background-color:
 * timepicker-cell-hover-text-color:
 * timepicker-cell-focus-background-color:
 * timepicker-cell-focus-text-color:
 * timepicker-cell-active-background-color:
 * timepicker-cell-active-text-color:
 * timepicker-cell-text-font-size:
 * timepicker-cell-text-font-family:
 * timepicker-cell-text-line-height:
 * timepicker-cell-text-font-weight:
 * timepicker-cell-height:
 * timepicker-header-cell-text-color:
 * timepicker-header-cell-text-font-size:
 * timepicker-header-cell-text-font-family:
 * timepicker-header-cell-height:
 * timepicker-header-cell-text-line-height:
 * timepicker-header-cell-text-font-weight:
 * timepicker-border-color:
 * timepicker-border-style:
 * timepicker-border-width:
 * timepicker-scrollbar-color:
 * timepicker-scrollbar-background-color:
 * timepicker-scrollbar-width:
 * timepicker-single-column-width:
 * timepicker-multiple-column-width:
 * timepicker-title-height:
 * timepicker-title-padding:
 * timepicker-container-width:
 * timepicker-container-height:
 * */
class NbTimePickerDirective {
    constructor(document, positionBuilder, hostRef, triggerStrategyBuilder, overlay, cd, calendarTimeModelService, dateService, renderer, placeholder) {
        this.document = document;
        this.positionBuilder = positionBuilder;
        this.hostRef = hostRef;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.overlay = overlay;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
        this.dateService = dateService;
        this.renderer = renderer;
        this.placeholder = placeholder;
        /**
         * Time picker overlay offset.
         * */
        this.overlayOffset = 8;
        this.destroy$ = new Subject();
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    /**
     * Provides timepicker component.
     * */
    get timepicker() {
        return this._timePickerComponent;
    }
    set timepicker(timePicker) {
        this._timePickerComponent = timePicker;
    }
    /**
     * Returns html input element.
     * @docs-private
     * */
    get input() {
        return this.hostRef.nativeElement;
    }
    /**
     * Determines is timepicker overlay opened.
     * @docs-private
     * */
    get isOpen() {
        return this.overlayRef && this.overlayRef.hasAttached();
    }
    /**
     * Determines is timepicker overlay closed.
     * @docs-private
     * */
    get isClosed() {
        return !this.isOpen;
    }
    /**
     * Returns host input value.
     * @docs-private
     * */
    get inputValue() {
        return this.input.value;
    }
    set inputValue(value) {
        this.input.value = value;
    }
    ngAfterViewInit() {
        this.subscribeOnInputChange();
        if (!this.placeholder) {
            this.renderer.setProperty(this.input, 'placeholder', this.timepicker.timeFormat);
        }
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
        this.subscribeToBlur();
    }
    show() {
        if (this.isClosed) {
            this.attachToOverlay();
        }
    }
    hide() {
        if (this.isOpen) {
            this.overlayRef.detach();
            this.cd.markForCheck();
        }
    }
    /**
     * Attaches picker to the timepicker portal.
     * @docs-private
     * */
    attachToOverlay() {
        if (!this.overlayRef) {
            this.setupTimepicker();
            this.initOverlay();
        }
        this.overlayRef.attach(this.timepicker.portal);
    }
    setupTimepicker() {
        if (this.dateService.getId() === 'native' && isDevMode()) {
            console.warn('Date.parse does not support parsing time with custom format.' +
                ' See details here https://akveo.github.io/nebular/docs/components/datepicker/overview#native-parse-issue');
        }
        this.timepicker.setHost(this.hostRef);
        if (this.inputValue) {
            const val = this.dateService.getId() === 'native' ? this.parseNativeDateString(this.inputValue) : this.inputValue;
            this.timepicker.date = this.dateService.parse(val, this.timepicker.timeFormat);
        }
        else {
            this.timepicker.date = this.calendarTimeModelService.getResetTime();
        }
    }
    initOverlay() {
        this.positionStrategy = this.createPositionStrategy();
        this.subscribeOnApplyClick();
        this.createOverlay();
    }
    subscribeOnApplyClick() {
        this.timepicker.onSelectTime.pipe(takeUntil(this.destroy$)).subscribe((value) => {
            const time = this.dateService.format(value.time, this.timepicker.timeFormat).toUpperCase();
            this.inputValue = time;
            this.timepicker.date = value.time;
            this.onChange(value.time);
            if (value.save) {
                this.lastInputValue = time;
                this.hide();
            }
        });
    }
    createOverlay() {
        const scrollStrategy = this.createScrollStrategy();
        this.overlayRef = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy });
    }
    subscribeOnTriggers() {
        this.triggerStrategy.show$
            .pipe(filter(() => this.isClosed))
            .subscribe(() => this.show());
        this.triggerStrategy.hide$
            .pipe(filter(() => this.isOpen))
            .subscribe(() => {
            this.inputValue = this.lastInputValue || '';
            this.hide();
        });
    }
    createTriggerStrategy() {
        return this.triggerStrategyBuilder
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(() => this.getContainer())
            .build();
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(this.overlayOffset)
            .adjustment(NbAdjustment.VERTICAL);
    }
    getContainer() {
        return this.overlayRef && this.isOpen && {
            location: {
                nativeElement: this.overlayRef.overlayElement,
            },
        };
    }
    createScrollStrategy() {
        return this.overlay.scrollStrategies.block();
    }
    subscribeOnInputChange() {
        fromEvent(this.input, 'input')
            .pipe(map(() => this.inputValue), takeUntil(this.destroy$))
            .subscribe((value) => this.handleInputChange(value));
    }
    subscribeToBlur() {
        merge(this.timepicker.blur, fromEvent(this.input, 'blur').pipe(filter(() => !this.isOpen && this.document.activeElement !== this.input))).pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onTouched());
    }
    /**
     * Parses input value and write if it isn't null.
     * @docs-private
     * */
    handleInputChange(value) {
        if (this.dateService.getId() === 'native') {
            /**
             * Native date service dont parse only time string value,
             * and we adding year mouth and day to convert string to valid date format
             **/
            value = this.parseNativeDateString(value);
        }
        const isValidDate = this.dateService.isValidDateString(value, this.timepicker.timeFormat);
        if (isValidDate) {
            this.lastInputValue = value;
            const date = this.dateService.parse(value, this.timepicker.timeFormat);
            this.onChange(date);
            this.timepicker.date = date;
        }
    }
    updateValue(value) {
        if (value) {
            this.timepicker.date = value;
            const timeString = this.dateService.format(value, this.timepicker.timeFormat).toUpperCase();
            this.inputValue = timeString;
            this.lastInputValue = timeString;
        }
    }
    writeValue(value) {
        this.updateValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    parseNativeDateString(value) {
        const date = this.dateService.today();
        const year = this.dateService.getYear(date);
        const month = this.calendarTimeModelService.paddToTwoSymbols(this.dateService.getMonth(date));
        const day = this.calendarTimeModelService.paddToTwoSymbols(this.dateService.getDate(date));
        return `${year}-${month}-${day} ${value}`;
    }
}
NbTimePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbTimepicker]',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbTimePickerDirective),
                        multi: true,
                    }],
            },] }
];
NbTimePickerDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPositionBuilderService },
    { type: ElementRef },
    { type: NbTriggerStrategyBuilderService },
    { type: NbOverlayService },
    { type: ChangeDetectorRef },
    { type: NbCalendarTimeModelService },
    { type: NbDateService },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Attribute, args: ['placeholder',] }] }
];
NbTimePickerDirective.propDecorators = {
    timepicker: [{ type: Input, args: ['nbTimepicker',] }],
    overlayOffset: [{ type: Input }]
};

class NbTimePickerCellComponent {
    constructor(ngZone, platformService) {
        this.ngZone = ngZone;
        this.platformService = platformService;
        this.selectedChange$ = new Subject();
        this.unselected$ = this.selectedChange$.pipe(filter((selected) => !selected));
        this.destroy$ = new Subject();
        this.select = new EventEmitter();
    }
    set selected(selected) {
        if (selected) {
            this._selected = selected;
            this.scrollToElement();
        }
        this.selectedChange$.next(selected);
    }
    ;
    get selected() {
        return this._selected;
    }
    onClick() {
        this.select.emit({ value: this.value });
    }
    ngAfterViewInit() {
        if (this.selected) {
            // Since we render timepicker in the overlay, at the moment this hook called,
            // timepicker could be not fully rendered and placed. Because of it, we're waiting for Angular
            // to finish change detection run and only then scroll to the selected cell.
            this.ngZone.onStable
                .pipe(take(1), takeUntil(merge(this.unselected$, this.destroy$)))
                .subscribe(() => this.scrollToElement());
        }
    }
    scrollToElement() {
        if (this.valueContainerElement && this.platformService.isBrowser) {
            this.ngZone.runOutsideAngular(() => this.valueContainerElement.nativeElement.scrollIntoView({ block: 'center' }));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTimePickerCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-timepicker-cell',
                template: `
    <div #valueContainer>{{ value }}</div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;user-select:none}\n"]
            },] }
];
NbTimePickerCellComponent.ctorParameters = () => [
    { type: NgZone },
    { type: NbPlatform }
];
NbTimePickerCellComponent.propDecorators = {
    selected: [{ type: Input }],
    value: [{ type: Input }],
    select: [{ type: Output }],
    valueContainerElement: [{ type: ViewChild, args: ['valueContainer',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTimepickerModule {
    static forRoot(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
    static forChild(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
}
NbTimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbOverlayModule,
                    NbListModule,
                    NbCardModule,
                    NbCalendarKitModule,
                ],
                providers: [NbCalendarTimeModelService],
                exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDateAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDatepickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateAdapterService.decorators = [
    { type: Injectable }
];
NbDateAdapterService.ctorParameters = () => [
    { type: NbDateService }
];
class NbRangeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbRangepickerComponent;
    }
    parse(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format),
        };
    }
    format(range, format) {
        if (!range) {
            return '';
        }
        const start = this.dateService.format(range.start, format);
        const isStartValid = this.dateService.isValidDateString(start, format);
        if (!isStartValid) {
            return '';
        }
        const end = this.dateService.format(range.end, format);
        const isEndValid = this.dateService.isValidDateString(end, format);
        if (isEndValid) {
            return `${start} - ${end}`;
        }
        else {
            return start;
        }
    }
    isValid(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    }
}
NbRangeAdapterService.decorators = [
    { type: Injectable }
];
NbRangeAdapterService.ctorParameters = () => [
    { type: NbDateService }
];
class NbDateTimeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDateTimePickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateTimeAdapterService.decorators = [
    { type: Injectable }
];
NbDateTimeAdapterService.ctorParameters = () => [
    { type: NbDateService }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbDatepickerModule {
    static forRoot() {
        return {
            ngModule: NbDatepickerModule,
            providers: [
                DatePipe,
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbRangeAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateTimeAdapterService,
                },
            ],
        };
    }
}
NbDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbOverlayModule,
                    NbCalendarModule,
                    NbCalendarRangeModule,
                    NbCardModule,
                    NbBaseCalendarModule,
                    NbTimepickerModule,
                    NbCalendarKitModule,
                ],
                exports: [
                    NbDatepickerDirective,
                    NbDatepickerComponent,
                    NbRangepickerComponent,
                    NbDateTimePickerComponent,
                    NbCalendarWithTimeComponent,
                ],
                declarations: [
                    NbDatepickerDirective,
                    NbDatepickerContainerComponent,
                    NbCalendarWithTimeComponent,
                    NbDateTimePickerComponent,
                    NbDatepickerComponent,
                    NbRangepickerComponent,
                    NbBasePickerComponent,
                ],
                entryComponents: [
                    NbCalendarComponent,
                    NbCalendarRangeComponent,
                    NbDatepickerContainerComponent,
                    NbCalendarWithTimeComponent,
                ],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-width:
 * radio-height:
 * radio-border-style:
 * radio-border-width:
 * radio-text-font-family:
 * radio-text-font-size:
 * radio-text-font-weight:
 * radio-text-line-height:
 * radio-outline-color:
 * radio-outline-width:
 * radio-basic-text-color:
 * radio-basic-border-color:
 * radio-basic-background-color:
 * radio-basic-checked-background-color:
 * radio-basic-checked-border-color:
 * radio-basic-inner-circle-color:
 * radio-basic-focus-border-color:
 * radio-basic-focus-inner-circle-color:
 * radio-basic-hover-background-color:
 * radio-basic-hover-border-color:
 * radio-basic-hover-inner-circle-color:
 * radio-basic-hover-checked-background-color:
 * radio-basic-active-border-color:
 * radio-basic-active-inner-circle-color:
 * radio-basic-disabled-background-color:
 * radio-basic-disabled-border-color:
 * radio-basic-disabled-text-color:
 * radio-basic-disabled-checked-background-color:
 * radio-basic-disabled-checked-border-color:
 * radio-basic-disabled-checked-inner-circle-color:
 * radio-primary-text-color:
 * radio-primary-border-color:
 * radio-primary-background-color:
 * radio-primary-checked-background-color:
 * radio-primary-checked-border-color:
 * radio-primary-inner-circle-color:
 * radio-primary-focus-border-color:
 * radio-primary-focus-inner-circle-color:
 * radio-primary-hover-background-color:
 * radio-primary-hover-border-color:
 * radio-primary-hover-inner-circle-color:
 * radio-primary-hover-checked-background-color:
 * radio-primary-active-border-color:
 * radio-primary-active-inner-circle-color:
 * radio-primary-disabled-background-color:
 * radio-primary-disabled-border-color:
 * radio-primary-disabled-text-color:
 * radio-primary-disabled-checked-background-color:
 * radio-primary-disabled-checked-border-color:
 * radio-primary-disabled-checked-inner-circle-color:
 * radio-success-text-color:
 * radio-success-border-color:
 * radio-success-background-color:
 * radio-success-checked-background-color:
 * radio-success-checked-border-color:
 * radio-success-inner-circle-color:
 * radio-success-focus-border-color:
 * radio-success-focus-inner-circle-color:
 * radio-success-hover-background-color:
 * radio-success-hover-border-color:
 * radio-success-hover-inner-circle-color:
 * radio-success-hover-checked-background-color:
 * radio-success-active-border-color:
 * radio-success-active-inner-circle-color:
 * radio-success-disabled-background-color:
 * radio-success-disabled-border-color:
 * radio-success-disabled-text-color:
 * radio-success-disabled-checked-background-color:
 * radio-success-disabled-checked-border-color:
 * radio-success-disabled-checked-inner-circle-color:
 * radio-info-text-color:
 * radio-info-border-color:
 * radio-info-background-color:
 * radio-info-checked-background-color:
 * radio-info-checked-border-color:
 * radio-info-inner-circle-color:
 * radio-info-focus-border-color:
 * radio-info-focus-inner-circle-color:
 * radio-info-hover-background-color:
 * radio-info-hover-border-color:
 * radio-info-hover-inner-circle-color:
 * radio-info-hover-checked-background-color:
 * radio-info-active-border-color:
 * radio-info-active-inner-circle-color:
 * radio-info-disabled-background-color:
 * radio-info-disabled-border-color:
 * radio-info-disabled-text-color:
 * radio-info-disabled-checked-background-color:
 * radio-info-disabled-checked-border-color:
 * radio-info-disabled-checked-inner-circle-color:
 * radio-warning-text-color:
 * radio-warning-border-color:
 * radio-warning-background-color:
 * radio-warning-checked-background-color:
 * radio-warning-checked-border-color:
 * radio-warning-inner-circle-color:
 * radio-warning-focus-border-color:
 * radio-warning-focus-inner-circle-color:
 * radio-warning-hover-background-color:
 * radio-warning-hover-border-color:
 * radio-warning-hover-inner-circle-color:
 * radio-warning-hover-checked-background-color:
 * radio-warning-active-border-color:
 * radio-warning-active-inner-circle-color:
 * radio-warning-disabled-background-color:
 * radio-warning-disabled-border-color:
 * radio-warning-disabled-text-color:
 * radio-warning-disabled-checked-background-color:
 * radio-warning-disabled-checked-border-color:
 * radio-warning-disabled-checked-inner-circle-color:
 * radio-danger-text-color:
 * radio-danger-border-color:
 * radio-danger-background-color:
 * radio-danger-checked-background-color:
 * radio-danger-checked-border-color:
 * radio-danger-inner-circle-color:
 * radio-danger-focus-border-color:
 * radio-danger-focus-inner-circle-color:
 * radio-danger-hover-background-color:
 * radio-danger-hover-border-color:
 * radio-danger-hover-inner-circle-color:
 * radio-danger-hover-checked-background-color:
 * radio-danger-active-border-color:
 * radio-danger-active-inner-circle-color:
 * radio-danger-disabled-background-color:
 * radio-danger-disabled-border-color:
 * radio-danger-disabled-text-color:
 * radio-danger-disabled-checked-background-color:
 * radio-danger-disabled-checked-border-color:
 * radio-danger-disabled-checked-inner-circle-color:
 * radio-control-text-color:
 * radio-control-background-color:
 * radio-control-border-color:
 * radio-control-checked-background-color:
 * radio-control-checked-border-color:
 * radio-control-inner-circle-color:
 * radio-control-focus-border-color:
 * radio-control-focus-inner-circle-color:
 * radio-control-hover-background-color:
 * radio-control-hover-border-color:
 * radio-control-hover-inner-circle-color:
 * radio-control-hover-checked-background-color:
 * radio-control-active-border-color:
 * radio-control-active-inner-circle-color:
 * radio-control-disabled-background-color:
 * radio-control-disabled-border-color:
 * radio-control-disabled-text-color:
 * radio-control-disabled-checked-background-color:
 * radio-control-disabled-checked-border-color:
 * radio-control-disabled-checked-inner-circle-color:
 * */
class NbRadioComponent {
    constructor(cd, renderer, statusService) {
        this.cd = cd;
        this.renderer = renderer;
        this.statusService = statusService;
        this._checked = false;
        this._disabled = false;
        this.status = 'basic';
        this.valueChange = new EventEmitter();
        this.blur = new EventEmitter();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._name !== value) {
            this._name = value;
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        const boolValue = convertToBoolProperty(value);
        if (this._checked !== boolValue) {
            this._checked = boolValue;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        const boolValue = convertToBoolProperty(disabled);
        if (this._disabled !== boolValue) {
            this._disabled = boolValue;
        }
    }
    get isPrimary() {
        return this.status === 'primary';
    }
    get isSuccess() {
        return this.status === 'success';
    }
    get isWarning() {
        return this.status === 'warning';
    }
    get isDanger() {
        return this.status === 'danger';
    }
    get isInfo() {
        return this.status === 'info';
    }
    get isBasic() {
        return this.status === 'basic';
    }
    get isControl() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onChange(event) {
        event.stopPropagation();
        this.checked = true;
        this.valueChange.emit(this.value);
    }
    onClick(event) {
        event.stopPropagation();
    }
    /*
     * @docs-private
     * We use this method when setting radio inputs from radio group component.
     * Otherwise Angular won't detect changes in radio template as cached last rendered
     * value didn't updated.
     **/
    _markForCheck() {
        this.cd.markForCheck();
    }
    /*
     * @docs-private
     * Use this method when setting radio name from radio group component.
     * In case option 'name' isn't set on nb-radio component we need to set name
     * right away, so it won't overlap with options without names from other radio
     * groups. Otherwise they all would have same name and will be considered as
     * options from one group so only the last option will stay selected.
     **/
    _setName(name) {
        this.name = name;
        if (this.input) {
            this.renderer.setProperty(this.input.nativeElement, 'name', name);
        }
    }
}
NbRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-radio',
                template: `
    <label>
      <input
        #input
        type="radio"
        class="native-input visually-hidden"
        [name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
        (click)="onClick($event)">
      <span class="outer-circle"></span>
      <span class="inner-circle"></span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;position:relative}:host label{display:inline-flex;margin:0;min-height:inherit;padding:0.375rem 0;align-items:center}[dir=ltr] :host label{padding-right:1.5rem}[dir=rtl] :host label{padding-left:1.5rem}:host .outer-circle,:host .inner-circle{border-radius:50%;position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] :host .outer-circle,[dir=ltr] :host .inner-circle{left:0}[dir=rtl] :host .outer-circle,[dir=rtl] :host .inner-circle{right:0}:host .inner-circle{transform:translateY(-50%) scale(0.6)}[dir=ltr] :host .text{padding-left:.5rem}[dir=rtl] :host .text{padding-right:.5rem}\n"]
            },] }
];
NbRadioComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NbStatusService }
];
NbRadioComponent.propDecorators = {
    name: [{ type: Input }],
    checked: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    valueChange: [{ type: Output }],
    blur: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input', { read: ElementRef },] }],
    isPrimary: [{ type: HostBinding, args: ['class.status-primary',] }],
    isSuccess: [{ type: HostBinding, args: ['class.status-success',] }],
    isWarning: [{ type: HostBinding, args: ['class.status-warning',] }],
    isDanger: [{ type: HostBinding, args: ['class.status-danger',] }],
    isInfo: [{ type: HostBinding, args: ['class.status-info',] }],
    isBasic: [{ type: HostBinding, args: ['class.status-basic',] }],
    isControl: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * Radio group supports `ngModel` and reactive forms:
 * @stacked-example(Radio Group with forms, radio/radio-form.component)
 *
 * */
class NbRadioGroupComponent {
    constructor(hostElement, platformId, document) {
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.destroy$ = new Subject();
        this.onChange = (value) => { };
        this.onTouched = () => { };
        this._status = 'basic';
        this.valueChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateValues();
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this.updateNames();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = convertToBoolProperty(disabled);
        this.updateDisabled();
    }
    /**
     * Radio buttons status.
     * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
     */
    get status() {
        return this._status;
    }
    set status(value) {
        if (this._status !== value) {
            this._status = value;
            this.updateStatus();
        }
    }
    ngAfterContentInit() {
        // In case option 'name' isn't set on nb-radio component,
        // we need to set it's name right away, so it won't overlap with options
        // without names from other radio groups. Otherwise they all would have
        // same name and will be considered as options from one group so only the
        // last option will stay selected.
        this.updateNames();
        this.radios.changes
            .pipe(startWith(this.radios), 
        // 'changes' emit during change detection run and we can't update
        // option properties right of since they already was initialized.
        // Instead we schedule microtask to update radios after change detection
        // run is finished and trigger one more change detection run.
        switchMap((radios) => from(Promise.resolve(radios))), takeUntil(this.destroy$))
            .subscribe(() => this.updateAndSubscribeToRadios());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateAndSubscribeToRadios() {
        this.updateValueFromCheckedOption();
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.updateStatus();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    }
    updateNames() {
        if (this.radios) {
            this.radios.forEach((radio) => radio._setName(this.name));
        }
    }
    updateValues() {
        this.updateAndMarkForCheckRadios((radio) => radio.checked = radio.value === this.value);
    }
    updateDisabled() {
        if (typeof this.disabled !== 'undefined') {
            this.updateAndMarkForCheckRadios((radio) => radio.disabled = this.disabled);
        }
    }
    subscribeOnRadiosValueChange() {
        if (!this.radios || !this.radios.length) {
            return;
        }
        merge(...this.radios.map((radio) => radio.valueChange))
            .pipe(takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe((value) => {
            this.writeValue(value);
            this.propagateValue(value);
        });
    }
    propagateValue(value) {
        this.valueChange.emit(value);
        this.onChange(value);
    }
    subscribeOnRadiosBlur() {
        const hasNoRadios = !this.radios || !this.radios.length;
        if (!isPlatformBrowser(this.platformId) || hasNoRadios) {
            return;
        }
        const hostElement = this.hostElement.nativeElement;
        fromEvent(hostElement, 'focusin')
            .pipe(filter(event => hostElement.contains(event.target)), switchMap(() => merge(fromEvent(this.document, 'focusin'), fromEvent(this.document, 'click'))), filter(event => !hostElement.contains(event.target)), takeUntil(merge(this.radios.changes, this.destroy$)))
            .subscribe(() => this.onTouched());
    }
    updateStatus() {
        this.updateAndMarkForCheckRadios((radio) => radio.status = this.status);
    }
    updateAndMarkForCheckRadios(updateFn) {
        if (this.radios) {
            this.radios.forEach((radio) => {
                updateFn(radio);
                radio._markForCheck();
            });
        }
    }
    updateValueFromCheckedOption() {
        const checkedRadio = this.radios.find((radio) => radio.checked);
        const isValueMissing = this.value === undefined || this.value === null;
        if (checkedRadio && isValueMissing && checkedRadio.value !== this.value) {
            this.value = checkedRadio.value;
        }
    }
}
NbRadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-radio-group',
                template: `
    <ng-content select="nb-radio"></ng-content>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbRadioGroupComponent),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbRadioGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] }
];
NbRadioGroupComponent.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    radios: [{ type: ContentChildren, args: [NbRadioComponent, { descendants: true },] }],
    valueChange: [{ type: Output }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbRadioModule {
}
NbRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [NbRadioComponent, NbRadioGroupComponent],
                declarations: [NbRadioComponent, NbRadioGroupComponent],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
let tagUniqueId = 0;
/**
 *
 * To show a cross on a tag and enable `remove` event add the `removable` attribute.
 * @stacked-example(Removable tags, tag/tag-removable.component)
 *
 * You can change appearance via `appearance` input:
 * @stacked-example(Tag Appearance, tag/tag-appearance.component)
 *
 * You can change status via `status` input:
 * @stacked-example(Tag Status, tag/tag-status.component)
 *
 * @styles
 *
 * tag-text-font-family:
 * tag-text-transform:
 * tag-border-width:
 * tag-border-style:
 * tag-border-radius:
 * tag-tiny-text-font-size:
 * tag-tiny-text-font-weight:
 * tag-tiny-text-line-height:
 * tag-tiny-padding:
 * tag-tiny-close-offset:
 * tag-small-text-font-size:
 * tag-small-text-font-weight:
 * tag-small-text-line-height:
 * tag-small-padding:
 * tag-small-close-offset:
 * tag-medium-text-font-size:
 * tag-medium-text-font-weight:
 * tag-medium-text-line-height:
 * tag-medium-padding:
 * tag-medium-close-offset:
 * tag-large-text-font-size:
 * tag-large-text-font-weight:
 * tag-large-text-line-height:
 * tag-large-padding:
 * tag-large-close-offset:
 * tag-giant-text-font-size:
 * tag-giant-text-font-weight:
 * tag-giant-text-line-height:
 * tag-giant-padding:
 * tag-giant-close-offset:
 * tag-filled-basic-background-color:
 * tag-filled-basic-border-color:
 * tag-filled-basic-text-color:
 * tag-filled-basic-active-background-color:
 * tag-filled-basic-active-border-color:
 * tag-filled-basic-hover-background-color:
 * tag-filled-basic-hover-border-color:
 * tag-filled-basic-selected-background-color:
 * tag-filled-basic-selected-border-color:
 * tag-filled-primary-background-color:
 * tag-filled-primary-border-color:
 * tag-filled-primary-text-color:
 * tag-filled-primary-active-background-color:
 * tag-filled-primary-active-border-color:
 * tag-filled-primary-hover-background-color:
 * tag-filled-primary-hover-border-color:
 * tag-filled-primary-selected-background-color:
 * tag-filled-primary-selected-border-color:
 * tag-filled-success-background-color:
 * tag-filled-success-border-color:
 * tag-filled-success-text-color:
 * tag-filled-success-active-background-color:
 * tag-filled-success-active-border-color:
 * tag-filled-success-hover-background-color:
 * tag-filled-success-hover-border-color:
 * tag-filled-success-selected-background-color:
 * tag-filled-success-selected-border-color:
 * tag-filled-info-background-color:
 * tag-filled-info-border-color:
 * tag-filled-info-text-color:
 * tag-filled-info-active-background-color:
 * tag-filled-info-active-border-color:
 * tag-filled-info-hover-background-color:
 * tag-filled-info-hover-border-color:
 * tag-filled-info-selected-background-color:
 * tag-filled-info-selected-border-color:
 * tag-filled-warning-background-color:
 * tag-filled-warning-border-color:
 * tag-filled-warning-text-color:
 * tag-filled-warning-active-background-color:
 * tag-filled-warning-active-border-color:
 * tag-filled-warning-hover-background-color:
 * tag-filled-warning-hover-border-color:
 * tag-filled-warning-selected-background-color:
 * tag-filled-warning-selected-border-color:
 * tag-filled-danger-background-color:
 * tag-filled-danger-border-color:
 * tag-filled-danger-text-color:
 * tag-filled-danger-active-background-color:
 * tag-filled-danger-active-border-color:
 * tag-filled-danger-hover-background-color:
 * tag-filled-danger-hover-border-color:
 * tag-filled-danger-selected-background-color:
 * tag-filled-danger-selected-border-color:
 * tag-filled-control-background-color:
 * tag-filled-control-border-color:
 * tag-filled-control-text-color:
 * tag-filled-control-active-background-color:
 * tag-filled-control-active-border-color:
 * tag-filled-control-hover-background-color:
 * tag-filled-control-hover-border-color:
 * tag-filled-control-selected-background-color:
 * tag-filled-control-selected-border-color:
 * tag-outline-basic-background-color:
 * tag-outline-basic-border-color:
 * tag-outline-basic-text-color:
 * tag-outline-basic-active-background-color:
 * tag-outline-basic-active-border-color:
 * tag-outline-basic-active-text-color:
 * tag-outline-basic-hover-background-color:
 * tag-outline-basic-hover-border-color:
 * tag-outline-basic-hover-text-color:
 * tag-outline-basic-selected-background-color:
 * tag-outline-basic-selected-border-color:
 * tag-outline-basic-selected-text-color:
 * tag-outline-primary-background-color:
 * tag-outline-primary-border-color:
 * tag-outline-primary-text-color:
 * tag-outline-primary-active-background-color:
 * tag-outline-primary-active-border-color:
 * tag-outline-primary-active-text-color:
 * tag-outline-primary-hover-background-color:
 * tag-outline-primary-hover-border-color:
 * tag-outline-primary-hover-text-color:
 * tag-outline-primary-selected-background-color:
 * tag-outline-primary-selected-border-color:
 * tag-outline-primary-selected-text-color:
 * tag-outline-success-background-color:
 * tag-outline-success-border-color:
 * tag-outline-success-text-color:
 * tag-outline-success-active-background-color:
 * tag-outline-success-active-border-color:
 * tag-outline-success-active-text-color:
 * tag-outline-success-hover-background-color:
 * tag-outline-success-hover-border-color:
 * tag-outline-success-hover-text-color:
 * tag-outline-success-selected-background-color:
 * tag-outline-success-selected-border-color:
 * tag-outline-success-selected-text-color:
 * tag-outline-info-background-color:
 * tag-outline-info-border-color:
 * tag-outline-info-text-color:
 * tag-outline-info-active-background-color:
 * tag-outline-info-active-border-color:
 * tag-outline-info-active-text-color:
 * tag-outline-info-hover-background-color:
 * tag-outline-info-hover-border-color:
 * tag-outline-info-hover-text-color:
 * tag-outline-info-selected-background-color:
 * tag-outline-info-selected-border-color:
 * tag-outline-info-selected-text-color:
 * tag-outline-warning-background-color:
 * tag-outline-warning-border-color:
 * tag-outline-warning-text-color:
 * tag-outline-warning-active-background-color:
 * tag-outline-warning-active-border-color:
 * tag-outline-warning-active-text-color:
 * tag-outline-warning-hover-background-color:
 * tag-outline-warning-hover-border-color:
 * tag-outline-warning-hover-text-color:
 * tag-outline-warning-selected-background-color:
 * tag-outline-warning-selected-border-color:
 * tag-outline-warning-selected-text-color:
 * tag-outline-danger-background-color:
 * tag-outline-danger-border-color:
 * tag-outline-danger-text-color:
 * tag-outline-danger-active-background-color:
 * tag-outline-danger-active-border-color:
 * tag-outline-danger-active-text-color:
 * tag-outline-danger-hover-background-color:
 * tag-outline-danger-hover-border-color:
 * tag-outline-danger-hover-text-color:
 * tag-outline-danger-selected-background-color:
 * tag-outline-danger-selected-border-color:
 * tag-outline-danger-selected-text-color:
 * tag-outline-control-background-color:
 * tag-outline-control-border-color:
 * tag-outline-control-text-color:
 * tag-outline-control-active-background-color:
 * tag-outline-control-active-border-color:
 * tag-outline-control-active-text-color:
 * tag-outline-control-hover-background-color:
 * tag-outline-control-hover-border-color:
 * tag-outline-control-hover-text-color:
 * tag-outline-control-selected-background-color:
 * tag-outline-control-selected-border-color:
 * tag-outline-control-selected-text-color:
 */
class NbTagComponent {
    constructor(_hostElement, cd, renderer, zone, statusService) {
        this._hostElement = _hostElement;
        this.cd = cd;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this._destroy$ = new Subject();
        this._selected = false;
        this._removable = false;
        /**
         * Tag appearance: `filled`, `outline`.
         */
        this.appearance = 'filled';
        /**
         * Tag status: `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        /**
         * Tag size: `tiny`, `small`, `medium`, `large`, `giant`.
         */
        this.size = 'medium';
        this.role = 'option';
        /**
         * Emits when the user removes the tag
         * (whether by clicking on the remove button or by pressing `delete` or `backspace` key).
         */
        this.remove = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this._isActive = false;
        this._id = `nb-tag-${tagUniqueId++}`;
    }
    get destroy$() {
        return this._destroy$.asObservable();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (this.selected !== convertToBoolProperty(value)) {
            this._selected = !this.selected;
            this.selectedChange.emit({ tag: this, selected: this.selected });
        }
    }
    /**
     * Controls whether the user can remove a tag or not.
     */
    get removable() {
        return this._removable;
    }
    set removable(value) {
        this._removable = convertToBoolProperty(value);
    }
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    get basic() {
        return this.status === 'basic';
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get control() {
        return this.status === 'control';
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    _remove() {
        if (this.removable) {
            this.remove.emit(this);
        }
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this._hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this._destroy$.next(this);
    }
    _toggleSelection() {
        this.selected = !this.selected;
        this.cd.markForCheck();
    }
    setActiveStyles() {
        if (!this._isActive) {
            this._isActive = true;
            this.cd.markForCheck();
        }
    }
    setInactiveStyles() {
        if (this._isActive) {
            this._isActive = false;
            this.cd.markForCheck();
        }
    }
}
NbTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tag',
                template: "{{ text }}\n<nb-icon *ngIf=\"removable\"\n         (click)=\"_remove()\"\n         class=\"nb-tag-remove size-{{size}}\"\n         icon=\"close-outline\"\n         pack=\"nebular-essentials\"\n         aria-hidden=\"true\">\n</nb-icon>\n",
                exportAs: 'nbTag',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbTagComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbTagComponent.propDecorators = {
    text: [{ type: Input }],
    selected: [{ type: Input }, { type: HostBinding, args: ['class.selected',] }, { type: HostBinding, args: ['attr.aria-selected',] }],
    removable: [{ type: Input }],
    appearance: [{ type: Input }],
    status: [{ type: Input }],
    size: [{ type: Input }],
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }],
    remove: [{ type: Output }],
    selectedChange: [{ type: Output }],
    _isActive: [{ type: HostBinding, args: ['class.active',] }],
    _id: [{ type: HostBinding, args: ['attr.id',] }],
    filled: [{ type: HostBinding, args: ['class.appearance-filled',] }],
    outline: [{ type: HostBinding, args: ['class.appearance-outline',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    tiny: [{ type: HostBinding, args: ['class.size-tiny',] }],
    small: [{ type: HostBinding, args: ['class.size-small',] }],
    medium: [{ type: HostBinding, args: ['class.size-medium',] }],
    large: [{ type: HostBinding, args: ['class.size-large',] }],
    giant: [{ type: HostBinding, args: ['class.size-giant',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    _remove: [{ type: HostListener, args: ['keydown.delete',] }, { type: HostListener, args: ['keydown.backspace',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 */
class NbTagInputDirective extends NbInputDirective {
    constructor(_hostElement, focusMonitor, renderer, zone, statusService) {
        super(_hostElement, focusMonitor, renderer, zone, statusService);
        this._hostElement = _hostElement;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.keyDown$ = new Subject();
        /**
         * Controls which keys should trigger tag add event.
         */
        this.separatorKeys = [ENTER];
        /**
         * Emits when a tag need to be added.
         */
        this.tagAdd = new EventEmitter();
        this.nbTagInputClass = true;
    }
    get _value() {
        return this._hostElement.nativeElement.value;
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.keyDown$
            .pipe(filter(({ keyCode }) => this.isSeparatorKey(keyCode)), map(() => this._value), takeUntil(this.destroy$))
            .subscribe((value) => this.tagAdd.emit({ value, input: this._hostElement }));
    }
    isSeparatorKey(keyCode) {
        return this.separatorKeys.includes(keyCode);
    }
}
NbTagInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nbTagInput]',
                exportAs: 'nbTagInput',
                providers: [
                    { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
                ],
            },] }
];
NbTagInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NbFocusMonitor },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbStatusService }
];
NbTagInputDirective.propDecorators = {
    separatorKeys: [{ type: Input }],
    tagAdd: [{ type: Output }],
    nbTagInputClass: [{ type: HostBinding, args: ['class.nb-tag-input',] }],
    _onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 *
 * `nb-tag-list` component displays a list of `nb-tag` components.
 *
 * @stacked-example(Tag List Showcase, tag/tag-showcase.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 * tag-list-with-input-rectangle-border-radius:
 * tag-list-with-input-semi-round-border-radius:
 * tag-list-with-input-round-border-radius:
 */
class NbTagListComponent {
    constructor(hostElement, cd, renderer, zone, focusMonitor, activeDescendantKeyManagerFactory, directionService, statusService) {
        this.hostElement = hostElement;
        this.cd = cd;
        this.renderer = renderer;
        this.zone = zone;
        this.focusMonitor = focusMonitor;
        this.activeDescendantKeyManagerFactory = activeDescendantKeyManagerFactory;
        this.directionService = directionService;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        this.keyDown$ = new Subject();
        this.tagClick$ = new Subject();
        this.focused = false;
        /**
         * Controls tags offset.
         */
        this.size = 'medium';
        this.tabIndex = 0;
        this.role = 'listbox';
        this._multiple = false;
        this.activeTagId = null;
        /**
         * Emits when tag need to be removed (whether because of click on the remove button
         * or when `delete` or `backspace` key pressed).
         */
        this.tagRemove = new EventEmitter();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    get _hasInput() {
        return !!this.tagInput;
    }
    get _isFocused() {
        return this.focused;
    }
    get _isFullWidth() {
        var _a;
        return !!((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a.fullWidth);
    }
    get _inputClasses() {
        if (this._hasInput) {
            return [
                `shape-${this.tagInput.shape}`,
                `size-${this.tagInput.fieldSize}`,
                this.statusService.getStatusClass(this.tagInput.status),
            ];
        }
        return [`size-${this.size}`];
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    _onClick({ target }) {
        const clickedTag = this.tags.find((tag) => tag._hostElement.nativeElement === target);
        if (clickedTag) {
            this.tagClick$.next(clickedTag);
        }
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.hostElement, true)
            .pipe(map(origin => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.hostElement)), takeUntil(this.destroy$))
            .subscribe((isFocused) => this.onFocusChange(isFocused));
    }
    ngAfterContentInit() {
        this.initKeyManager();
        this.setAutocompleteCustomHost();
    }
    ngAfterViewInit() {
        this.listenToLayoutDirectionChange();
        this.listenListKeyDown();
        this.listenInputKeyDown();
        this.listenTagClick();
        this.listenTagRemove();
        this.listenTagDestroy();
        this.listenActiveTagChange();
        this.listenNoTags();
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    initKeyManager() {
        this.keyManager = this.activeDescendantKeyManagerFactory
            .create(this.tags)
            .withHorizontalOrientation(this.directionService.getDirection())
            .withWrap();
    }
    listenToLayoutDirectionChange() {
        this.directionService.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((direction) => this.keyManager.withHorizontalOrientation(direction));
    }
    listenListKeyDown() {
        const tagListKeyDown$ = this.keyDown$
            .pipe(filter(({ target }) => target === this.hostElement.nativeElement));
        const activeTagKeyDown$ = tagListKeyDown$
            .pipe(filter(() => !!this.keyManager.activeItem));
        tagListKeyDown$
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => this.keyManager.onKeydown(event));
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => keyCode === SPACE), takeUntil(this.destroy$))
            .subscribe((event) => {
            this.toggleTag(this.keyManager.activeItem);
            // Prevents page scroll.
            event.preventDefault();
        });
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => this.isBackspaceOrDelete(keyCode)), map(() => this.keyManager.activeItem), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => tagToRemove._remove());
    }
    listenInputKeyDown() {
        const inputKeyDown$ = this.keyDown$
            .pipe(filter(({ target }) => { var _a; return target === ((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a._hostElement.nativeElement); }));
        inputKeyDown$
            .pipe(filter(({ keyCode }) => {
            return this.tagInput._value === '' && this.isBackspaceOrDelete(keyCode) && this.tags.length > 0;
        }), takeUntil(this.destroy$))
            .subscribe(() => {
            this.hostElement.nativeElement.focus();
            this.keyManager.setLastItemActive();
            this.cd.markForCheck();
        });
    }
    listenTagClick() {
        this.tagClick$
            .pipe(takeUntil(this.destroy$))
            .subscribe((clickedTag) => {
            this.toggleTag(clickedTag);
            this.keyManager.setActiveItem(clickedTag);
        });
    }
    listenTagRemove() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.remove))), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => this.tagRemove.emit(tagToRemove));
    }
    listenTagDestroy() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.destroy$))), filter((destroyedTag) => destroyedTag === this.keyManager.activeItem), map((destroyedTag) => destroyedTag === this.tags.last), takeUntil(this.destroy$))
            .subscribe((isLastTagDestroyed) => {
            if (isLastTagDestroyed) {
                this.keyManager.setPreviousItemActive();
            }
            else {
                this.keyManager.setNextItemActive();
            }
        });
    }
    listenNoTags() {
        this.tags.changes
            .pipe(startWith(this.tags), filter((tags) => tags.length === 0), takeUntil(this.destroy$))
            .subscribe(() => this.focusInputIfActive());
    }
    listenActiveTagChange() {
        this.keyManager.change
            .pipe(map(() => { var _a; return (_a = this.keyManager.activeItem) === null || _a === void 0 ? void 0 : _a._id; }), takeUntil(this.destroy$))
            .subscribe((activeTagId) => {
            this.activeTagId = activeTagId;
            this.cd.markForCheck();
        });
    }
    onFocusChange(isFocused) {
        var _a;
        this.focused = isFocused;
        this.cd.markForCheck();
        if (!isFocused || ((_a = this.tagInput) === null || _a === void 0 ? void 0 : _a.focused$.value)) {
            this.keyManager.setActiveItem(-1);
            return;
        }
        // Focus input when focusing tag list without tags. Otherwise select first tag.
        if (this.tags.length === 0 && this._hasInput) {
            this.focusInput();
        }
        else {
            this.keyManager.setFirstItemActive();
        }
    }
    isBackspaceOrDelete(keyCode) {
        return keyCode === BACKSPACE || keyCode === DELETE;
    }
    setAutocompleteCustomHost() {
        if (this.autocompleteDirective) {
            this.autocompleteDirective.customOverlayHost = this.hostElement;
        }
    }
    toggleTag(tagToToggle) {
        tagToToggle._toggleSelection();
        if (tagToToggle.selected && !this.multiple) {
            this.tags.forEach((tag) => {
                if (tag !== tagToToggle) {
                    tag.selected = false;
                }
            });
        }
    }
    focusInput() {
        if (this._hasInput) {
            this.tagInput._hostElement.nativeElement.focus();
        }
    }
    focusInputIfActive() {
        if (this._isFocused) {
            this.focusInput();
        }
    }
}
NbTagListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tag-list',
                template: `
    <div class="nb-tag-list-tags-wrapper">
      <ng-content select="nb-tag, input[nbTagInput]"></ng-content>
    </div>
  `,
                exportAs: 'nbTagList',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NbTagListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: NbFocusMonitor },
    { type: NbActiveDescendantKeyManagerFactoryService },
    { type: NbLayoutDirectionService },
    { type: NbStatusService }
];
NbTagListComponent.propDecorators = {
    tags: [{ type: ContentChildren, args: [NbTagComponent,] }],
    tagInput: [{ type: ContentChild, args: [NbTagInputDirective,] }],
    autocompleteDirective: [{ type: ContentChild, args: [NbAutocompleteDirective,] }],
    size: [{ type: Input }],
    tabIndex: [{ type: Input }, { type: HostBinding, args: ['attr.tabindex',] }],
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['attr.aria-multiselectable',] }],
    activeTagId: [{ type: HostBinding, args: ['attr.aria-activedescendant',] }],
    tagRemove: [{ type: Output }],
    _hasInput: [{ type: HostBinding, args: ['class.nb-tag-list-with-input',] }],
    _isFocused: [{ type: HostBinding, args: ['class.focus',] }],
    _isFullWidth: [{ type: HostBinding, args: ['class.input-full-width',] }],
    _inputClasses: [{ type: HostBinding, args: ['class',] }],
    _onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    _onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTagModule {
}
NbTagModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbIconModule,
                ],
                declarations: [
                    NbTagComponent,
                    NbTagListComponent,
                    NbTagInputDirective,
                ],
                exports: [
                    NbTagComponent,
                    NbTagListComponent,
                    NbTagInputDirective,
                ],
            },] }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_DEFAULT_ROW_LEVEL = 0;
/**
 * Implicit context of cells and rows
 */
class NbTreeGridPresentationNode {
    constructor(
    /**
     * Data object associated with row
     */
    data, children, 
    /**
     * Row expand state
     */
    expanded, level) {
        this.data = data;
        this.children = children;
        this.expanded = expanded;
        this.level = level;
    }
    /**
     * True if row has child rows
     */
    hasChildren() {
        return !!this.children && !!this.children.length;
    }
}

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTreeGridDataService {
    constructor() {
        this.defaultGetters = {
            dataGetter: node => node.data,
            childrenGetter: d => d.children || undefined,
            expandedGetter: d => !!d.expanded,
        };
    }
    toPresentationNodes(nodes, customGetters, level = NB_DEFAULT_ROW_LEVEL) {
        const getters = Object.assign(Object.assign({}, this.defaultGetters), customGetters);
        return this.mapNodes(nodes, getters, level);
    }
    mapNodes(nodes, getters, level) {
        const { dataGetter, childrenGetter, expandedGetter } = getters;
        return nodes.map(node => {
            const childrenNodes = childrenGetter(node);
            let children;
            if (childrenNodes) {
                children = this.toPresentationNodes(childrenNodes, getters, level + 1);
            }
            return new NbTreeGridPresentationNode(dataGetter(node), children, expandedGetter(node), level);
        });
    }
    flattenExpanded(nodes) {
        return nodes.reduce((res, node) => {
            res.push(node);
            if (node.expanded && node.hasChildren()) {
                res.push(...this.flattenExpanded(node.children));
            }
            return res;
        }, []);
    }
    copy(nodes) {
        return nodes.map((node) => {
            let children;
            if (node.hasChildren()) {
                children = this.copy(node.children);
            }
            return new NbTreeGridPresentationNode(node.data, children, node.expanded, node.level);
        });
    }
}
NbTreeGridDataService.decorators = [
    { type: Injectable }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
class NbTreeGridFilterService {
    filter(query, data) {
        if (!query) {
            return data;
        }
        return data.reduce((filtered, node) => {
            let filteredChildren;
            if (node.children) {
                filteredChildren = this.filter(query, node.children);
                node.children = filteredChildren;
            }
            node.expanded = false;
            if (filteredChildren && filteredChildren.length) {
                node.expanded = true;
                filtered.push(node);
            }
            else if (this.filterPredicate(node.data, query)) {
                filtered.push(node);
            }
            return filtered;
        }, []);
    }
    filterPredicate(data, searchQuery) {
        const preparedQuery = searchQuery.trim().toLocaleLowerCase();
        for (const val of Object.values(data)) {
            const preparedVal = `${val}`.trim().toLocaleLowerCase();
            if (preparedVal.includes(preparedQuery)) {
                return true;
            }
        }
        return false;
    }
}
NbTreeGridFilterService.decorators = [
    { type: Injectable }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var NbSortDirection;
(function (NbSortDirection) {
    NbSortDirection["ASCENDING"] = "asc";
    NbSortDirection["DESCENDING"] = "desc";
    NbSortDirection["NONE"] = "";
})(NbSortDirection || (NbSortDirection = {}));
const sortDirections = [
    NbSortDirection.ASCENDING,
    NbSortDirection.DESCENDING,
    NbSortDirection.NONE,
];
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
class NbSortDirective {
    constructor() {
        this.sort = new EventEmitter();
    }
    emitSort(sortRequest) {
        if (this.sortable && this.sortable.sort) {
            this.sortable.sort(sortRequest);
        }
        this.sort.emit(sortRequest);
    }
}
NbSortDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSort]' },] }
];
NbSortDirective.propDecorators = {
    sortable: [{ type: Input, args: ['nbSort',] }],
    sort: [{ type: Output }]
};
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
class NbSortHeaderIconDirective {
}
NbSortHeaderIconDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbSortHeaderIcon]' },] }
];
class NbSortIconComponent {
    constructor() {
        this.direction = NbSortDirection.NONE;
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    isDirectionSet() {
        return this.isAscending() || this.isDescending();
    }
}
NbSortIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-sort-icon',
                template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `
            },] }
];
NbSortIconComponent.propDecorators = {
    direction: [{ type: Input }]
};
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
class NbSortHeaderComponent {
    constructor(sort, columnDef) {
        this.sort = sort;
        this.columnDef = columnDef;
        this.disabledValue = false;
    }
    /**
     * Disable sort header
     */
    set disabled(value) {
        this.disabledValue = convertToBoolProperty(value);
    }
    get disabled() {
        return this.disabledValue;
    }
    sortIfEnabled() {
        if (!this.disabled) {
            this.sortData();
        }
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    sortData() {
        const sortRequest = this.createSortRequest();
        this.sort.emitSort(sortRequest);
    }
    getIconContext() {
        return {
            $implicit: this.direction,
            isAscending: this.isAscending(),
            isDescending: this.isDescending(),
            isNone: !this.isAscending() && !this.isDescending(),
        };
    }
    getDisabledAttributeValue() {
        return this.disabled ? '' : null;
    }
    createSortRequest() {
        this.direction = this.getNextDirection();
        return { direction: this.direction, column: this.columnDef.name };
    }
    getNextDirection() {
        const sortDirectionCycle = sortDirections;
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
}
NbSortHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: '[nbSortHeader]',
                template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `
            },] }
];
NbSortHeaderComponent.ctorParameters = () => [
    { type: NbSortDirective },
    { type: undefined, decorators: [{ type: Inject, args: [NB_SORT_HEADER_COLUMN_DEF,] }] }
];
NbSortHeaderComponent.propDecorators = {
    sortIcon: [{ type: ContentChild, args: [NbSortHeaderIconDirective, { read: TemplateRef },] }],
    direction: [{ type: Input, args: ['nbSortHeader',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.disabled',] }],
    sortIfEnabled: [{ type: HostListener, args: ['click',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
class NbTreeGridSortService {
    sort(request, data) {
        if (!request) {
            return data;
        }
        const sorted = data.sort((na, nb) => this.comparator(request, na, nb));
        for (const node of data) {
            if (node.children) {
                node.children = this.sort(request, node.children);
            }
        }
        return sorted;
    }
    comparator(request, na, nb) {
        const key = request.column;
        const dir = request.direction;
        const a = na.data[key];
        const b = nb.data[key];
        let res = 0;
        if (a > b) {
            res = 1;
        }
        if (a < b) {
            res = -1;
        }
        return dir === NbSortDirection.ASCENDING ? res : res * -1;
    }
}
NbTreeGridSortService.decorators = [
    { type: Injectable }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTreeGridService {
    expand(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = true;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.expand(data, n.data, options));
        }
    }
    collapse(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = false;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.collapse(data, n.data, options));
        }
    }
    toggle(data, row, options = {}) {
        const node = this.find(data, row);
        if (node.expanded) {
            this.collapse(data, row, options);
        }
        else {
            this.expand(data, row, options);
        }
    }
    find(data, row) {
        const toCheck = [...data];
        for (const node of toCheck) {
            if (node.data === row) {
                return node;
            }
            if (node.hasChildren()) {
                toCheck.push(...node.children);
            }
        }
    }
}
NbTreeGridService.decorators = [
    { type: Injectable }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTreeGridDataSource extends NbDataSource {
    constructor(sortService, filterService, treeGridService, treeGridDataService) {
        super();
        this.sortService = sortService;
        this.filterService = filterService;
        this.treeGridService = treeGridService;
        this.treeGridDataService = treeGridDataService;
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this.renderData = new BehaviorSubject([]);
        this.filterRequest = new BehaviorSubject('');
        this.sortRequest = new BehaviorSubject(null);
    }
    setData(data, customGetters) {
        let presentationData = [];
        if (data) {
            presentationData = this.treeGridDataService.toPresentationNodes(data, customGetters);
        }
        this.data = new BehaviorSubject(presentationData);
        this.updateChangeSubscription();
    }
    connect(collectionViewer) {
        return this.renderData;
    }
    disconnect(collectionViewer) {
    }
    expand(row) {
        this.treeGridService.expand(this.data.value, row);
        this.data.next(this.data.value);
    }
    collapse(row) {
        this.treeGridService.collapse(this.data.value, row);
        this.data.next(this.data.value);
    }
    toggle(row, options) {
        this.treeGridService.toggle(this.data.value, row, options);
        this.data.next(this.data.value);
    }
    toggleByIndex(dataIndex, options) {
        const node = this.renderData.value && this.renderData.value[dataIndex];
        if (node) {
            this.toggle(node.data, options);
        }
    }
    getLevel(rowIndex) {
        const row = this.renderData.value[rowIndex];
        return row ? row.level : NB_DEFAULT_ROW_LEVEL;
    }
    sort(sortRequest) {
        this.sortRequest.next(sortRequest);
    }
    filter(searchQuery) {
        this.filterRequest.next(searchQuery);
    }
    updateChangeSubscription() {
        const dataStream = this.data;
        const filteredData = combineLatest([dataStream, this.filterRequest])
            .pipe(map(([data]) => this.treeGridDataService.copy(data)), map(data => this.filterData(data)));
        const sortedData = combineLatest([filteredData, this.sortRequest])
            .pipe(map(([data]) => this.sortData(data)));
        sortedData
            .pipe(map((data) => this.treeGridDataService.flattenExpanded(data)))
            .subscribe((data) => this.renderData.next(data));
    }
    filterData(data) {
        return this.filterService.filter(this.filterRequest.value, data);
    }
    sortData(data) {
        return this.sortService.sort(this.sortRequest.value, data);
    }
}
class NbTreeGridDataSourceBuilder {
    constructor(filterService, sortService, treeGridService, treeGridDataService) {
        this.filterService = filterService;
        this.sortService = sortService;
        this.treeGridService = treeGridService;
        this.treeGridDataService = treeGridDataService;
    }
    create(data, customGetters) {
        const dataSource = new NbTreeGridDataSource(this.sortService, this.filterService, this.treeGridService, this.treeGridDataService);
        dataSource.setData(data, customGetters);
        return dataSource;
    }
}
NbTreeGridDataSourceBuilder.decorators = [
    { type: Injectable }
];
NbTreeGridDataSourceBuilder.ctorParameters = () => [
    { type: NbTreeGridFilterService },
    { type: NbTreeGridSortService },
    { type: NbTreeGridService },
    { type: NbTreeGridDataService }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const NB_TREE_GRID = new InjectionToken('NB_TREE_GRID');

class NbColumnsService {
    constructor(differs) {
        this.differs = differs;
        this.columnHide$ = new Subject();
        this.columnShow$ = new Subject();
    }
    setColumns(columns) {
        if (!this.changesDiffer) {
            this.changesDiffer = this.differs.find(columns || []).create();
        }
        if (this.changesDiffer.diff(columns)) {
            this.allColumns = Array.from(columns);
            this.visibleColumns = Array.from(columns);
        }
    }
    getVisibleColumns() {
        return this.visibleColumns;
    }
    hideColumn(column) {
        const toRemove = this.visibleColumns.indexOf(column);
        if (toRemove > -1) {
            this.visibleColumns.splice(toRemove, 1);
            this.columnHide$.next();
        }
    }
    showColumn(column) {
        if (this.visibleColumns.includes(column)) {
            return;
        }
        this.visibleColumns.splice(this.findInsertIndex(column), 0, column);
        this.columnShow$.next();
    }
    onColumnsChange() {
        return merge(this.columnShow$, this.columnHide$);
    }
    findInsertIndex(column) {
        const initialIndex = this.allColumns.indexOf(column);
        if (initialIndex === 0 || !this.visibleColumns.length) {
            return 0;
        }
        if (initialIndex === this.allColumns.length - 1) {
            return this.visibleColumns.length;
        }
        const leftSiblingIndex = initialIndex - 1;
        for (let i = leftSiblingIndex; i >= 0; i--) {
            const leftSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(leftSibling);
            if (index !== -1) {
                return index + 1;
            }
        }
        const rightSiblingIndex = initialIndex + 1;
        for (let i = rightSiblingIndex; i < this.allColumns.length; i++) {
            const rightSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(rightSibling);
            if (index !== -1) {
                return index;
            }
        }
        throw new Error(`Can't restore column position.`);
    }
}
NbColumnsService.decorators = [
    { type: Injectable }
];
NbColumnsService.ctorParameters = () => [
    { type: IterableDiffers }
];

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Tree grid component that can be used to display nested rows of data.
 * Supports filtering and sorting.
 * @stacked-example(Showcase, tree-grid/tree-grid-showcase.component)
 *
 * ### Installation
 *
 * Import `NbTreeGridModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbTreeGridModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * As the most basic usage you need to define [nbTreeGridRowDef](docs/components/treegrid/api#nbtreegridrowdefdirective)
 * where you should pass columns to display in rows and
 * [nbTreeGridColumnDef](docs/components/treegrid/api#nbtreegridcolumndefdirective) - component containing cell
 * definitions for each column passed to row definition.
 * @stacked-example(Basic, tree-grid/tree-grid-basic.component)
 *
 * `NbTreeGridComponent`'s source input and `NbTreeGridDataSourceBuilder.create` expecting data to be an array of
 * objects with `data`, `children` and `expanded` properties. If your data doesn't match this interface, you can pass
 * getter functions for each property as arguments to `NbTreeGridDataSourceBuilder.create` method.
 * @stacked-example(Custom node structure, tree-grid/tree-grid-custom-node-structure.component)
 *
 * To use sorting you can add `nbSort` directive to table and subscribe to `sort` method. When user click on header,
 * sort event will be emitted. Event object contain clicked column name and desired sort direction.
 * @stacked-example(Sortable, tree-grid/tree-grid-sortable.component)
 *
 * You can use `Data Source Builder` to create `NbTreeGridDataSource` which would have toggle, sort and
 * filter methods. Then you can call this methods to change sort or toggle rows programmatically. Also `nbSort` and
 * `nbFilterInput` directives both support `NbTreeGridDataSource`, so you can pass it directly as an input and
 * directives will trigger sort, toggle themselves.
 * @stacked-example(Data Source Builder, tree-grid/tree-grid-showcase.component)
 *
 * You can create responsive grid by setting `hideOn` and `showOn` inputs of
 * [nbTreeGridColumnDef](docs/components/tree-grid/api#nbtreegridcolumndefdirective) directive.
 * When viewport reaches specified width grid hides or shows columns.
 * @stacked-example(Responsive columns, tree-grid/tree-grid-responsive.component)
 *
 * To customize sort or row toggle icons you can use `nbSortHeaderIcon` and `nbTreeGridRowToggle` directives
 * respectively. `nbSortHeaderIcon` is a structural directive and it's implicit context set to current direction.
 * Also context has three properties: `isAscending`, `isDescending` and `isNone`.
 * @stacked-example(Custom icons, tree-grid/tree-grid-custom-icons.component)
 *
 * By default, row to toggle happens when user clicks anywhere in the row. Also double click expands row deeply.
 * To disable this you can set `[clickToToggle]="false"` input of `nbTreeGridRow`.
 * @stacked-example(Disable click toggle, tree-grid/tree-grid-disable-click-toggle.component)
 *
 * @styles
 *
 * tree-grid-cell-border-width:
 * tree-grid-cell-border-style:
 * tree-grid-cell-border-color:
 * tree-grid-row-min-height:
 * tree-grid-cell-padding:
 * tree-grid-header-background-color:
 * tree-grid-header-text-color:
 * tree-grid-header-text-font-family:
 * tree-grid-header-text-font-size:
 * tree-grid-header-text-font-weight:
 * tree-grid-header-text-line-height:
 * tree-grid-footer-background-color:
 * tree-grid-footer-text-color:
 * tree-grid-footer-text-font-family:
 * tree-grid-footer-text-font-size:
 * tree-grid-footer-text-font-weight:
 * tree-grid-footer-text-line-height:
 * tree-grid-row-background-color:
 * tree-grid-row-even-background-color:
 * tree-grid-row-hover-background-color:
 * tree-grid-row-text-color:
 * tree-grid-row-text-font-family:
 * tree-grid-row-text-font-size:
 * tree-grid-row-text-font-weight:
 * tree-grid-row-text-line-height:
 * tree-grid-sort-header-button-background-color:
 * tree-grid-sort-header-button-border:
 * tree-grid-sort-header-button-padding:
 */
class NbTreeGridComponent extends NbTable {
    constructor(dataSourceBuilder, differs, changeDetectorRef, elementRef, role, dir, document, platform, window, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this.dataSourceBuilder = dataSourceBuilder;
        this.window = window;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this.destroy$ = new Subject();
        this.levelPadding = '';
        this.equalColumnsWidthValue = false;
        this.treeClass = true;
        this.platform = platform;
    }
    /**
     * The table's data
     * @param data
     * @type {<T>[] | NbTreeGridDataSource}
     */
    set source(data) {
        if (!data) {
            return;
        }
        if (data instanceof NbTreeGridDataSource) {
            this._source = data;
        }
        else {
            this._source = this.dataSourceBuilder.create(data);
        }
        this.dataSource = this._source;
    }
    /**
     * Make all columns equal width. False by default.
     */
    set equalColumnsWidth(value) {
        this.equalColumnsWidthValue = convertToBoolProperty(value);
    }
    get equalColumnsWidth() {
        return this.equalColumnsWidthValue;
    }
    ngAfterViewInit() {
        this.checkDefsCount();
        const rowsChange$ = merge(this._contentRowDefs.changes, this._contentHeaderRowDefs.changes, this._contentFooterRowDefs.changes);
        rowsChange$.pipe(takeUntil(this.destroy$))
            .subscribe(() => this.checkDefsCount());
        if (this.platform.isBrowser) {
            this.updateVisibleColumns();
            const windowResize$ = fromEvent(this.window, 'resize').pipe(debounceTime(50));
            merge(rowsChange$, this._contentColumnDefs.changes, windowResize$)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.updateVisibleColumns());
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow(row, options) {
        const context = this.getRowContext(row);
        this._source.toggle(context.$implicit.data, options);
    }
    toggleCellRow(cell) {
        const context = this.getCellContext(cell);
        this._source.toggle(context.$implicit.data);
    }
    getColumnWidth() {
        if (this.equalColumnsWidth) {
            return `${100 / this.getColumnsCount()}%`;
        }
        return '';
    }
    getCellLevel(cell, columnName) {
        if (this.isFirstColumn(columnName)) {
            return this.getCellContext(cell).$implicit.level;
        }
        return NB_DEFAULT_ROW_LEVEL;
    }
    getRowContext(row) {
        return this.getContextByRowEl(row.elementRef.nativeElement);
    }
    getCellContext(cell) {
        return this.getContextByCellEl(cell.elementRef.nativeElement);
    }
    getContextByCellEl(cellEl) {
        return this.getContextByRowEl(cellEl.parentElement);
    }
    getContextByRowEl(rowEl) {
        const rowsContainer = this._rowOutlet.viewContainer;
        for (let i = 0; i < rowsContainer.length; i++) {
            const rowViewRef = rowsContainer.get(i);
            if (rowViewRef.rootNodes.includes(rowEl)) {
                return rowViewRef.context;
            }
        }
    }
    getColumns() {
        let rowDef;
        if (this._contentHeaderRowDefs.length) {
            rowDef = this._contentHeaderRowDefs.first;
        }
        else {
            rowDef = this._contentRowDefs.first;
        }
        return Array.from(rowDef.getVisibleColumns() || []);
    }
    getColumnsCount() {
        return this.getColumns().length;
    }
    isFirstColumn(columnName) {
        return this.getColumns()[0] === columnName;
    }
    checkDefsCount() {
        if (this._contentRowDefs.length > 1) {
            throw new Error(`Found multiple row definitions`);
        }
        if (this._contentHeaderRowDefs.length > 1) {
            throw new Error(`Found multiple header row definitions`);
        }
        if (this._contentFooterRowDefs.length > 1) {
            throw new Error(`Found multiple footer row definitions`);
        }
    }
    updateVisibleColumns() {
        const width = this.window.innerWidth;
        const columnDefs = this._contentColumnDefs;
        const columnsToHide = columnDefs
            .filter((col) => col.shouldHide(width))
            .map(col => col.name);
        const columnsToShow = columnDefs
            .filter((col) => col.shouldShow(width))
            .map(col => col.name);
        if (!columnsToHide.length && !columnsToShow.length) {
            return;
        }
        const rowDefs = [
            this._contentHeaderRowDefs.first,
            this._contentRowDefs.first,
            this._contentFooterRowDefs.first,
        ].filter(d => !!d);
        for (const rowDef of rowDefs) {
            for (const column of columnsToHide) {
                rowDef.hideColumn(column);
            }
            for (const column of columnsToShow) {
                rowDef.showColumn(column);
            }
        }
    }
}
NbTreeGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'table[nbTreeGrid]',
                template: NB_TABLE_TEMPLATE,
                providers: [
                    { provide: NB_TREE_GRID, useExisting: NbTreeGridComponent },
                    NbColumnsService,
                    ...NB_TABLE_PROVIDERS,
                ],
                styles: [":host{table-layout:fixed;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;overflow:auto}::ng-deep .nb-tree-grid-cell,::ng-deep .nb-tree-grid-header-cell,::ng-deep .nb-tree-grid-footer-cell{overflow:hidden}\n"]
            },] }
];
NbTreeGridComponent.ctorParameters = () => [
    { type: NbTreeGridDataSourceBuilder },
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: NbDirectionality },
    { type: undefined, decorators: [{ type: Inject, args: [NB_DOCUMENT,] }] },
    { type: NbPlatform },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_VIEW_REPEATER_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_COALESCED_STYLE_SCHEDULER,] }] },
    { type: NbViewportRulerAdapter },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [NB_STICKY_POSITIONING_LISTENER,] }] }
];
NbTreeGridComponent.propDecorators = {
    source: [{ type: Input, args: ['nbTreeGrid',] }],
    levelPadding: [{ type: Input }],
    equalColumnsWidth: [{ type: Input }],
    treeClass: [{ type: HostBinding, args: ['class.nb-tree-grid',] }]
};

/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
class NbTreeGridRowDefDirective extends NbRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridRowDef]',
                providers: [{ provide: NbCdkRowDef, useExisting: NbTreeGridRowDefDirective }],
            },] }
];
NbTreeGridRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridRowDefColumns',] }]
};
class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridHeaderRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridHeaderRowDef]',
                providers: [{ provide: NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective }],
            },] }
];
NbTreeGridHeaderRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridHeaderRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridHeaderRowDef',] }]
};
class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridFooterRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridFooterRowDef]',
                providers: [{ provide: NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective }],
            },] }
];
NbTreeGridFooterRowDefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: NbColumnsService }
];
NbTreeGridFooterRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['nbTreeGridFooterRowDef',] }]
};
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class NbTreeGridCellDefDirective extends NbCellDefDirective {
}
NbTreeGridCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridCellDef]',
                providers: [{ provide: NbCdkCellDef, useExisting: NbTreeGridCellDefDirective }],
            },] }
];
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
}
NbTreeGridHeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridHeaderCellDef]',
                providers: [{ provide: NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective }],
            },] }
];
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
}
NbTreeGridFooterCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridFooterCellDef]',
                providers: [{ provide: NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective }],
            },] }
];

const NB_ROW_DOUBLE_CLICK_DELAY = 200;
/**
 * Cells container. Adds the right class and role.
 */
class NbTreeGridRowComponent extends NbRowComponent {
    constructor(tree, elementRef) {
        super();
        this.elementRef = elementRef;
        this.doubleClick$ = new Subject();
        /**
         * Time to wait for second click to expand row deeply.
         * 200ms by default.
         */
        this.doubleClickDelay = NB_ROW_DOUBLE_CLICK_DELAY;
        /**
         * Toggle row on click. Enabled by default.
         */
        this.clickToToggle = true;
        this.tree = tree;
    }
    toggleIfEnabledNode() {
        if (!this.clickToToggle) {
            return;
        }
        timer(NB_ROW_DOUBLE_CLICK_DELAY)
            .pipe(take(1), takeUntil(this.doubleClick$))
            .subscribe(() => this.tree.toggleRow(this));
    }
    toggleIfEnabledNodeDeep() {
        if (!this.clickToToggle) {
            return;
        }
        this.doubleClick$.next();
        this.tree.toggleRow(this, { deep: true });
    }
    ngOnDestroy() {
        this.doubleClick$.complete();
    }
}
NbTreeGridRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridRow]',
                template: `<ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkRow, useExisting: NbTreeGridRowComponent }]
            },] }
];
NbTreeGridRowComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: ElementRef }
];
NbTreeGridRowComponent.propDecorators = {
    doubleClickDelay: [{ type: Input }],
    clickToToggle: [{ type: Input }],
    toggleIfEnabledNode: [{ type: HostListener, args: ['click',] }],
    toggleIfEnabledNodeDeep: [{ type: HostListener, args: ['dblclick',] }]
};
class NbTreeGridHeaderRowComponent extends NbHeaderRowComponent {
}
NbTreeGridHeaderRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridHeaderRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-header-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent }]
            },] }
];
class NbTreeGridFooterRowComponent extends NbFooterRowComponent {
}
NbTreeGridFooterRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nbTreeGridFooterRow]',
                template: `
    <ng-container nbCellOutlet></ng-container>`,
                host: {
                    'class': 'nb-tree-grid-footer-row',
                    'role': 'row',
                },
                providers: [{ provide: NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent }]
            },] }
];

/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
class NbTreeGridColumnDefDirective extends NbColumnDefDirective {
    constructor() {
        super(...arguments);
        this.hideOnValue = null;
        this.showOnValue = null;
    }
    /**
     * Column name
     */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    get hideOn() {
        return this.hideOnValue;
    }
    set hideOn(value) {
        this.hideOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    get showOn() {
        return this.showOnValue;
    }
    set showOn(value) {
        this.showOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    ngOnChanges() {
        if (this.hideOn != null && this.showOn != null) {
            throw new Error(`hideOn and showOn are mutually exclusive and can't be used simultaneously.`);
        }
    }
    shouldHide(width) {
        return !this.shouldShow(width);
    }
    shouldShow(width) {
        if (this.hideOn == null && this.showOn == null) {
            return true;
        }
        if (this.hideOn != null) {
            return width > this.hideOn;
        }
        return width >= this.showOn;
    }
}
NbTreeGridColumnDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridColumnDef]',
                providers: [
                    { provide: NbCdkColumnDef, useExisting: NbTreeGridColumnDefDirective },
                    { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbTreeGridColumnDefDirective },
                ],
            },] }
];
NbTreeGridColumnDefDirective.propDecorators = {
    name: [{ type: Input, args: ['nbTreeGridColumnDef',] }],
    hideOn: [{ type: Input }],
    showOn: [{ type: Input }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbTreeGridCellDirective extends NbCellDirective {
    constructor(columnDef, elementRef, tree, platformId, window, sanitizer, directionService, columnService, cd) {
        super(columnDef, elementRef);
        this.platformId = platformId;
        this.window = window;
        this.sanitizer = sanitizer;
        this.directionService = directionService;
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.initialLeftPadding = '';
        this.initialRightPadding = '';
        this.tree = tree;
        this.columnDef = columnDef;
        this.elementRef = elementRef;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        if (this.latestWidth) {
            return this.latestWidth;
        }
        return null;
    }
    get leftPadding() {
        if (this.directionService.isLtr()) {
            return this.getStartPadding();
        }
        return null;
    }
    get rightPadding() {
        if (this.directionService.isRtl()) {
            return this.getStartPadding();
        }
        return null;
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            const style$$1 = this.window.getComputedStyle(this.elementRef.nativeElement);
            this.initialLeftPadding = style$$1.paddingLeft;
            this.initialRightPadding = style$$1.paddingRight;
        }
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleRow() {
        this.tree.toggleCellRow(this);
    }
    get initialStartPadding() {
        return this.directionService.isLtr()
            ? this.initialLeftPadding
            : this.initialRightPadding;
    }
    getStartPadding() {
        const rowLevel = this.tree.getCellLevel(this, this.columnDef.name);
        if (rowLevel === NB_DEFAULT_ROW_LEVEL) {
            return null;
        }
        const nestingLevel = rowLevel + 1;
        let padding = '';
        if (this.tree.levelPadding) {
            padding = `calc(${this.tree.levelPadding} * ${nestingLevel})`;
        }
        else if (this.initialStartPadding) {
            padding = `calc(${this.initialStartPadding} * ${nestingLevel})`;
        }
        if (!padding) {
            return null;
        }
        return this.sanitizer.bypassSecurityTrustStyle(padding);
    }
}
NbTreeGridCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nbTreeGridCell]',
                host: {
                    'class': 'nb-tree-grid-cell',
                    'role': 'gridcell',
                },
                providers: [{ provide: NbCdkCell, useExisting: NbTreeGridCellDirective }],
            },] }
];
NbTreeGridCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NB_WINDOW,] }] },
    { type: DomSanitizer },
    { type: NbLayoutDirectionService },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }],
    leftPadding: [{ type: HostBinding, args: ['style.padding-left',] }],
    rightPadding: [{ type: HostBinding, args: ['style.padding-right',] }]
};
class NbTreeGridHeaderCellDirective extends NbHeaderCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridHeaderCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'th[nbTreeGridHeaderCell]',
                host: {
                    'class': 'nb-tree-grid-header-cell',
                    'role': 'columnheader',
                },
                providers: [{ provide: NbCdkHeaderCell, useExisting: NbTreeGridHeaderCellDirective }],
            },] }
];
NbTreeGridHeaderCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridHeaderCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }]
};
class NbTreeGridFooterCellDirective extends NbFooterCellDirective {
    constructor(columnDef, elementRef, tree, columnService, cd) {
        super(columnDef, elementRef);
        this.columnService = columnService;
        this.cd = cd;
        this.destroy$ = new Subject();
        this.tree = tree;
    }
    get columnWidth() {
        this.latestWidth = this.tree.getColumnWidth();
        return this.latestWidth || null;
    }
    ngOnInit() {
        this.columnService.onColumnsChange()
            .pipe(filter(() => this.latestWidth !== this.tree.getColumnWidth()), takeUntil(this.destroy$))
            .subscribe(() => this.cd.detectChanges());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTreeGridFooterCellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nbTreeGridFooterCell]',
                host: {
                    'class': 'nb-tree-grid-footer-cell',
                    'role': 'gridcell',
                },
                providers: [{ provide: NbCdkFooterCell, useExisting: NbTreeGridFooterCellDirective }],
            },] }
];
NbTreeGridFooterCellDirective.ctorParameters = () => [
    { type: NbTreeGridColumnDefDirective },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NB_TREE_GRID,] }] },
    { type: NbColumnsService },
    { type: ChangeDetectorRef }
];
NbTreeGridFooterCellDirective.propDecorators = {
    columnWidth: [{ type: HostBinding, args: ['style.width',] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbFilterDirective {
    filter(filterRequest) {
        this.filterable.filter(filterRequest);
    }
}
NbFilterDirective.decorators = [
    { type: Directive, args: [{ selector: '[nbFilter]' },] }
];
NbFilterDirective.propDecorators = {
    filterable: [{ type: Input, args: ['nbFilter',] }]
};
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
class NbFilterInputDirective extends NbFilterDirective {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.destroy$ = new Subject();
        /**
         * Debounce time before triggering filter method. Set in milliseconds.
         * Default 200.
         */
        this.debounceTime = 200;
    }
    ngOnInit() {
        this.search$
            .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
            .subscribe((query) => {
            super.filter(query);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.search$.complete();
    }
    filter(event) {
        this.search$.next(event.target.value);
    }
}
NbFilterInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbFilterInput]',
                providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective }],
            },] }
];
NbFilterInputDirective.propDecorators = {
    filterable: [{ type: Input, args: ['nbFilterInput',] }],
    debounceTime: [{ type: Input }],
    filter: [{ type: HostListener, args: ['input', ['$event'],] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * When using custom row toggle, apply this directive on your toggle to toggle row on element click.
 */
class NbTreeGridRowToggleDirective {
    constructor(cell) {
        this.cell = cell;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
}
NbTreeGridRowToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbTreeGridRowToggle]',
            },] }
];
NbTreeGridRowToggleDirective.ctorParameters = () => [
    { type: NbTreeGridCellDirective }
];
NbTreeGridRowToggleDirective.propDecorators = {
    toggleRow: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * NbTreeGridRowToggleComponent
 */
class NbTreeGridRowToggleComponent {
    constructor(cell) {
        this.cell = cell;
    }
    set expanded(value) {
        this.expandedValue = value;
    }
    get expanded() {
        return this.expandedValue;
    }
    toggleRow($event) {
        this.cell.toggleRow();
        $event.stopPropagation();
    }
}
NbTreeGridRowToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-tree-grid-row-toggle',
                template: `
    <button class="row-toggle-button" [attr.aria-label]="expanded ? 'collapse' : 'expand'">
      <nb-icon [icon]="expanded ? 'chevron-down-outline' : 'chevron-right-outline'"
               pack="nebular-essentials"
               aria-hidden="true">
      </nb-icon>
    </button>
  `,
                styles: [`
    button {
      background: transparent;
      border: none;
      padding: 0;
    }
  `]
            },] }
];
NbTreeGridRowToggleComponent.ctorParameters = () => [
    { type: NbTreeGridCellDirective }
];
NbTreeGridRowToggleComponent.propDecorators = {
    expanded: [{ type: Input }],
    toggleRow: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const COMPONENTS$2 = [
    // Tree Grid
    NbTreeGridComponent,
    NbTreeGridRowDefDirective,
    NbTreeGridRowComponent,
    NbTreeGridCellDefDirective,
    NbTreeGridCellDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridHeaderRowComponent,
    NbTreeGridHeaderCellDefDirective,
    NbTreeGridHeaderCellDirective,
    NbTreeGridFooterRowDefDirective,
    NbTreeGridFooterRowComponent,
    NbTreeGridFooterCellDefDirective,
    NbTreeGridFooterCellDirective,
    NbTreeGridColumnDefDirective,
    // Sort directives
    NbSortDirective,
    NbSortHeaderComponent,
    NbSortIconComponent,
    // Filter directives
    NbFilterDirective,
    NbFilterInputDirective,
    NbTreeGridRowToggleDirective,
    NbTreeGridRowToggleComponent,
    NbSortHeaderIconDirective,
];
class NbTreeGridModule {
}
NbTreeGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NbTableModule, NbIconModule],
                declarations: [...COMPONENTS$2],
                exports: [NbTableModule, ...COMPONENTS$2],
                providers: [
                    NbTreeGridSortService,
                    NbTreeGridFilterService,
                    NbTreeGridService,
                    NbTreeGridDataService,
                    NbTreeGridDataSourceBuilder,
                ],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`
 *
 * @stacked-example(Toggle status, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-icon-size:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-cursor:
 * toggle-basic-text-color:
 * toggle-basic-background-color:
 * toggle-basic-border-color:
 * toggle-basic-checked-background-color:
 * toggle-basic-checked-border-color:
 * toggle-basic-checked-switcher-background-color:
 * toggle-basic-checked-switcher-checkmark-color:
 * toggle-basic-focus-background-color:
 * toggle-basic-focus-border-color:
 * toggle-basic-focus-checked-background-color:
 * toggle-basic-focus-checked-border-color:
 * toggle-basic-hover-background-color:
 * toggle-basic-hover-border-color:
 * toggle-basic-hover-checked-background-color:
 * toggle-basic-hover-checked-border-color:
 * toggle-basic-active-background-color:
 * toggle-basic-active-border-color:
 * toggle-basic-active-checked-background-color:
 * toggle-basic-active-checked-border-color:
 * toggle-basic-disabled-background-color:
 * toggle-basic-disabled-border-color:
 * toggle-basic-disabled-switcher-background-color:
 * toggle-basic-disabled-checked-switcher-checkmark-color:
 * toggle-basic-disabled-text-color:
 * toggle-primary-text-color:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-background-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-background-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-focus-checked-background-color:
 * toggle-primary-focus-checked-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-hover-checked-background-color:
 * toggle-primary-hover-checked-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-primary-active-checked-background-color:
 * toggle-primary-active-checked-border-color:
 * toggle-primary-disabled-background-color:
 * toggle-primary-disabled-border-color:
 * toggle-primary-disabled-switcher-background-color:
 * toggle-primary-disabled-checked-switcher-checkmark-color:
 * toggle-primary-disabled-text-color:
 * toggle-success-text-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-background-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-background-color:
 * toggle-success-focus-border-color:
 * toggle-success-focus-checked-background-color:
 * toggle-success-focus-checked-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-hover-checked-background-color:
 * toggle-success-hover-checked-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-success-active-checked-background-color:
 * toggle-success-active-checked-border-color:
 * toggle-success-disabled-background-color:
 * toggle-success-disabled-border-color:
 * toggle-success-disabled-switcher-background-color:
 * toggle-success-disabled-checked-switcher-checkmark-color:
 * toggle-success-disabled-text-color:
 * toggle-info-text-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-background-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-background-color:
 * toggle-info-focus-border-color:
 * toggle-info-focus-checked-background-color:
 * toggle-info-focus-checked-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-hover-checked-background-color:
 * toggle-info-hover-checked-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-info-active-checked-background-color:
 * toggle-info-active-checked-border-color:
 * toggle-info-disabled-background-color:
 * toggle-info-disabled-border-color:
 * toggle-info-disabled-switcher-background-color:
 * toggle-info-disabled-checked-switcher-checkmark-color:
 * toggle-info-disabled-text-color:
 * toggle-warning-text-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-background-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-background-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-focus-checked-background-color:
 * toggle-warning-focus-checked-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-hover-checked-background-color:
 * toggle-warning-hover-checked-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-warning-active-checked-background-color:
 * toggle-warning-active-checked-border-color:
 * toggle-warning-disabled-background-color:
 * toggle-warning-disabled-border-color:
 * toggle-warning-disabled-switcher-background-color:
 * toggle-warning-disabled-checked-switcher-checkmark-color:
 * toggle-warning-disabled-text-color:
 * toggle-danger-text-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-background-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-background-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-focus-checked-background-color:
 * toggle-danger-focus-checked-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-hover-checked-background-color:
 * toggle-danger-hover-checked-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 * toggle-danger-active-checked-background-color:
 * toggle-danger-active-checked-border-color:
 * toggle-danger-disabled-background-color:
 * toggle-danger-disabled-border-color:
 * toggle-danger-disabled-switcher-background-color:
 * toggle-danger-disabled-checked-switcher-checkmark-color:
 * toggle-danger-disabled-text-color:
 * toggle-control-text-color:
 * toggle-control-background-color:
 * toggle-control-border-color:
 * toggle-control-checked-background-color:
 * toggle-control-checked-border-color:
 * toggle-control-checked-switcher-background-color:
 * toggle-control-checked-switcher-checkmark-color:
 * toggle-control-focus-background-color:
 * toggle-control-focus-border-color:
 * toggle-control-focus-checked-background-color:
 * toggle-control-focus-checked-border-color:
 * toggle-control-hover-background-color:
 * toggle-control-hover-border-color:
 * toggle-control-hover-checked-background-color:
 * toggle-control-hover-checked-border-color:
 * toggle-control-active-background-color:
 * toggle-control-active-border-color:
 * toggle-control-active-checked-background-color:
 * toggle-control-active-checked-border-color:
 * toggle-control-disabled-background-color:
 * toggle-control-disabled-border-color:
 * toggle-control-disabled-switcher-background-color:
 * toggle-control-disabled-checked-switcher-checkmark-color:
 * toggle-control-disabled-text-color:
 */
class NbToggleComponent {
    constructor(changeDetector, layoutDirection, renderer, hostElement, zone, statusService) {
        this.changeDetector = changeDetector;
        this.layoutDirection = layoutDirection;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.zone = zone;
        this.statusService = statusService;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.destroy$ = new Subject();
        this._checked = false;
        this._disabled = false;
        /**
         * Toggle status.
         * Possible values are: `basic`, `primary`, `success`, `warning`, `danger`, `info`, `control`.
         */
        this.status = 'basic';
        /**
         * Toggle label position.
         * Possible values are: `left`, `right`, `start`, `end` (default)
         */
        this.labelPosition = 'end';
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    /**
     * Toggle checked
     * @type {boolean}
     */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = convertToBoolProperty(value);
    }
    /**
     * Controls input disabled state
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get info() {
        return this.status === 'info';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    get labelLeft() {
        return this.labelPosition === 'left';
    }
    get labelRight() {
        return this.labelPosition === 'right';
    }
    get labelStart() {
        return this.labelPosition === 'start';
    }
    get labelEnd() {
        return this.labelPosition === 'end';
    }
    ngOnInit() {
        this.layoutDirection.onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.changeDetector.detectChanges());
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkState() {
        if (this.checked) {
            return this.layoutDirection.isLtr() ? 'right' : 'left';
        }
        return this.layoutDirection.isLtr() ? 'left' : 'right';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this.checked = val;
        this.changeDetector.markForCheck();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
        this.changeDetector.markForCheck();
    }
    updateValue(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    }
    onInputClick(event) {
        event.stopPropagation();
    }
}
NbToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-toggle',
                animations: [
                    trigger('position', [
                        state('right', style({ right: 0, left: '*' })),
                        state('left', style({ left: 0, right: '*' })),
                        transition(':enter', [animate(0)]),
                        transition('right <=> left', [animate('0.15s')]),
                    ]),
                ],
                template: `
    <label class="toggle-label">
      <input type="checkbox"
             class="native-input visually-hidden"
             role="switch"
             [attr.aria-checked]="checked"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValue($event)"
             (blur)="onTouched()"
             (click)="onInputClick($event)">
      <div class="toggle" [class.checked]="checked">
        <span [@position]="checkState()" class="toggle-switcher">
          <nb-icon *ngIf="checked" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
        </span>
      </div>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NbToggleComponent),
                        multi: true,
                    }],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-flex;outline:none}:host(.toggle-label-left) .text:not(:empty){padding-right:0.6875rem}[dir=ltr] :host(.toggle-label-left) .text:not(:empty){order:-1}[dir=rtl] :host(.toggle-label-left) .text:not(:empty){order:1}:host(.toggle-label-right) .text:not(:empty){padding-left:0.6875rem}[dir=ltr] :host(.toggle-label-right) .text:not(:empty){order:1}[dir=rtl] :host(.toggle-label-right) .text:not(:empty){order:-1}:host(.toggle-label-start) .toggle-label{flex-direction:row-reverse}[dir=ltr] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-right:.6875rem}[dir=rtl] :host(.toggle-label-start) .toggle-label .text:not(:empty){padding-left:.6875rem}[dir=ltr] :host(.toggle-label-end) .text:not(:empty){padding-left:.6875rem}[dir=rtl] :host(.toggle-label-end) .text:not(:empty){padding-right:.6875rem}:host(.nb-transition) .toggle{transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.toggle-label{position:relative;display:inline-flex;align-items:center}.toggle{position:relative;display:inline-flex;box-sizing:content-box}.toggle-switcher{position:absolute;border-radius:50%;margin:1px}.toggle-switcher nb-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}\n"]
            },] }
];
NbToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NbLayoutDirectionService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone },
    { type: NbStatusService }
];
NbToggleComponent.propDecorators = {
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    status: [{ type: Input }],
    labelPosition: [{ type: Input }],
    checkedChange: [{ type: Output }],
    primary: [{ type: HostBinding, args: ['class.status-primary',] }],
    success: [{ type: HostBinding, args: ['class.status-success',] }],
    warning: [{ type: HostBinding, args: ['class.status-warning',] }],
    danger: [{ type: HostBinding, args: ['class.status-danger',] }],
    info: [{ type: HostBinding, args: ['class.status-info',] }],
    basic: [{ type: HostBinding, args: ['class.status-basic',] }],
    control: [{ type: HostBinding, args: ['class.status-control',] }],
    additionalClasses: [{ type: HostBinding, args: ['class',] }],
    labelLeft: [{ type: HostBinding, args: ['class.toggle-label-left',] }],
    labelRight: [{ type: HostBinding, args: ['class.toggle-label-right',] }],
    labelStart: [{ type: HostBinding, args: ['class.toggle-label-start',] }],
    labelEnd: [{ type: HostBinding, args: ['class.toggle-label-end',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
class NbToggleModule {
}
NbToggleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbIconModule,
                ],
                declarations: [NbToggleComponent],
                exports: [NbToggleComponent],
            },] }
];

class NbPrefixDirective {
}
NbPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbPrefix]',
            },] }
];

class NbSuffixDirective {
}
NbSuffixDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nbSuffix]',
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
function throwFormControlElementNotFound() {
    throw new Error(`NbFormFieldComponent must contain [nbInput]`);
}
/*
 * NbFormFieldComponent
 *
 * @styles
 *
 * form-field-addon-basic-text-color:
 * form-field-addon-basic-highlight-text-color:
 * form-field-addon-primary-text-color:
 * form-field-addon-primary-highlight-text-color:
 * form-field-addon-success-text-color:
 * form-field-addon-success-highlight-text-color:
 * form-field-addon-info-text-color:
 * form-field-addon-info-highlight-text-color:
 * form-field-addon-warning-text-color:
 * form-field-addon-warning-highlight-text-color:
 * form-field-addon-danger-text-color:
 * form-field-addon-danger-highlight-text-color:
 * form-field-addon-control-text-color:
 * form-field-addon-control-highlight-text-color:
 * form-field-addon-disabled-text-color:
 * form-field-addon-tiny-height:
 * form-field-addon-tiny-width:
 * form-field-addon-tiny-icon-size:
 * form-field-addon-tiny-font-size:
 * form-field-addon-tiny-line-height:
 * form-field-addon-tiny-font-weight:
 * form-field-addon-small-height:
 * form-field-addon-small-width:
 * form-field-addon-small-icon-size:
 * form-field-addon-small-font-size:
 * form-field-addon-small-line-height:
 * form-field-addon-small-font-weight:
 * form-field-addon-medium-height:
 * form-field-addon-medium-width:
 * form-field-addon-medium-icon-size:
 * form-field-addon-medium-font-size:
 * form-field-addon-medium-line-height:
 * form-field-addon-medium-font-weight:
 * form-field-addon-large-height:
 * form-field-addon-large-width:
 * form-field-addon-large-icon-size:
 * form-field-addon-large-font-size:
 * form-field-addon-large-line-height:
 * form-field-addon-large-font-weight:
 * form-field-addon-giant-height:
 * form-field-addon-giant-width:
 * form-field-addon-giant-icon-size:
 * form-field-addon-giant-font-size:
 * form-field-addon-giant-line-height:
 * form-field-addon-giant-font-weight:
 **/
class NbFormFieldComponent {
    constructor(cd, zone, elementRef, renderer) {
        this.cd = cd;
        this.zone = zone;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.destroy$ = new Subject();
        this.formControlState$ = new ReplaySubject(1);
        this.prefixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('prefix', s)));
        this.suffixClasses$ = this.formControlState$.pipe(map(s => this.getAddonClasses('suffix', s)));
    }
    ngAfterContentChecked() {
        if (!this.formControl) {
            throwFormControlElementNotFound();
        }
    }
    ngAfterContentInit() {
        this.subscribeToFormControlStateChange();
        this.subscribeToAddonChange();
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.elementRef.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    shouldShowPrefix() {
        return this.getFormControlConfig().supportsPrefix && !!this.prefix.length;
    }
    shouldShowSuffix() {
        return this.getFormControlConfig().supportsSuffix && !!this.suffix.length;
    }
    subscribeToFormControlStateChange() {
        const { disabled$, focused$, size$, status$, fullWidth$ } = this.formControl;
        combineLatest([disabled$, focused$, size$, status$, fullWidth$])
            .pipe(map(([disabled, focused, size, status, fullWidth]) => ({ disabled, focused, size, status, fullWidth })), distinctUntilChanged((oldState, state$$1) => this.isStatesEqual(oldState, state$$1)), tap(({ size, fullWidth }) => {
            const formFieldClasses = [`nb-form-field-size-${size}`];
            if (!fullWidth) {
                formFieldClasses.push('nb-form-field-limited-width');
            }
            this.formFieldClasses = formFieldClasses.join(' ');
        }), takeUntil(this.destroy$))
            .subscribe(this.formControlState$);
    }
    subscribeToAddonChange() {
        merge(this.prefix.changes, this.suffix.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    getAddonClasses(addon, state$$1) {
        const classes = [
            'nb-form-field-addon',
            `nb-form-field-${addon}-${state$$1.size}`,
        ];
        if (state$$1.disabled) {
            classes.push(`nb-form-field-addon-disabled`);
        }
        else if (state$$1.focused) {
            classes.push(`nb-form-field-addon-${state$$1.status}-highlight`);
        }
        else {
            classes.push(`nb-form-field-addon-${state$$1.status}`);
        }
        return classes;
    }
    getFormControlConfig() {
        return this.formControlConfig || new NbFormFieldControlConfig();
    }
    isStatesEqual(oldState, state$$1) {
        return oldState.status === state$$1.status &&
            oldState.disabled === state$$1.disabled &&
            oldState.focused === state$$1.focused &&
            oldState.fullWidth === state$$1.fullWidth &&
            oldState.size === state$$1.size;
    }
}
NbFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-form-field',
                template: "<div *ngIf=\"shouldShowPrefix()\" [ngClass]=\"prefixClasses$ | async\">\n  <ng-content select=\"[nbPrefix]\"></ng-content>\n</div>\n\n<div class=\"nb-form-control-container\"\n     [class.nb-form-field-control-with-prefix]=\"shouldShowPrefix()\"\n     [class.nb-form-field-control-with-suffix]=\"shouldShowSuffix()\">\n  <ng-content></ng-content>\n</div>\n\n<div *ngIf=\"shouldShowSuffix()\" [ngClass]=\"suffixClasses$ | async\">\n  <ng-content select=\"[nbSuffix]\"></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;align-items:center}.nb-form-control-container{width:100%}\n"]
            },] }
];
NbFormFieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
NbFormFieldComponent.propDecorators = {
    prefix: [{ type: ContentChildren, args: [NbPrefixDirective, { descendants: true },] }],
    suffix: [{ type: ContentChildren, args: [NbSuffixDirective, { descendants: true },] }],
    formControl: [{ type: ContentChild, args: [NbFormFieldControl, { static: false },] }],
    formControlConfig: [{ type: ContentChild, args: [NbFormFieldControlConfig, { static: false },] }],
    formFieldClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const COMPONENTS$3 = [
    NbFormFieldComponent,
    NbPrefixDirective,
    NbSuffixDirective,
];
class NbFormFieldModule {
}
NbFormFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS$3],
                exports: [...COMPONENTS$3],
            },] }
];

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// TODO: export all components

/**
 * Generated bundle index. Do not edit.
 */

export { NbCalendarActionsComponent as ɵe, NbActiveDescendantKeyManagerFactoryService as ɵd, NbFocusKeyManagerFactoryService as ɵc, NbCustomMessageService as ɵf, NbCalendarWithTimeComponent as ɵh, NbMenuInternalService as ɵa, NbSharedModule as ɵb, NbTimePickerCellComponent as ɵg, NbCalendarDayCellComponent, NbDateTimePickerComponent, NbCalendarYearPickerComponent, NbCalendarMonthPickerComponent, MONTHS_IN_VIEW, MONTHS_IN_COLUMN, NbCalendarDayPickerComponent, NbCalendarViewModeComponent, NbCalendarPageableNavigationComponent, NbCalendarDaysNamesComponent, NbCalendarWeekNumberComponent, NbCalendarMonthCellComponent, NbCalendarYearCellComponent, NbCalendarPickerRowComponent, NbCalendarPickerComponent, NbCalendarMonthModelService, NbNativeDateService, NbDateService, NbMenuService, NbMenuItem, NbSidebarService, NB_THEME_OPTIONS, NB_MEDIA_BREAKPOINTS, NB_BUILT_IN_JS_THEMES, NB_JS_THEMES, NB_WINDOW, NB_DOCUMENT, windowFactory, NbThemeModule, NbThemeService, NbSpinnerService, DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, NbColorHelper, NbLayoutDirection, NB_LAYOUT_DIRECTION, NbLayoutDirectionService, NbLayoutScrollService, NbLayoutRulerService, NbStatusService, BUILT_IN_THEMES, NbJSThemesRegistry, CORPORATE_THEME, COSMIC_THEME, DEFAULT_THEME, DARK_THEME, NbCardModule, NbCardHeaderComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardComponent, NbFlipCardComponent, NbRevealCardComponent, NbCardFrontComponent, NbCardBackComponent, NbCalendarModule, NbCalendarComponent, NbCalendarRangeModule, NbCalendarRangeComponent, NbBaseCalendarComponent, NbBaseCalendarModule, NbBaseCalendarRangeCell, NbCalendarRangeDayCellComponent, NbCalendarRangeMonthCellComponent, NbCalendarRangeYearCellComponent, NbCalendarYearModelService, NbCalendarTimeModelService, NbCalendarViewMode, NbCalendarSize, NbCalendarKitModule, NbLayoutModule, NbLayoutComponent, NbLayoutColumnComponent, NbLayoutHeaderComponent, NbLayoutFooterComponent, NbRestoreScrollTopHelper, NbMenuModule, NbToggleStates, NbMenuItemComponent, NbMenuComponent, NbRouteTabsetModule, NbRouteTabsetComponent, NbSidebarModule, NbSidebarHeaderComponent, NbSidebarFooterComponent, NbSidebarComponent, NbTabsetModule, NbTabComponent, NbTabsetComponent, NbUserModule, NbUserComponent, NbActionsModule, NbActionComponent, NbActionsComponent, NbSearchModule, NbSearchService, NbSearchFieldComponent, NbSearchComponent, NbCheckboxComponent, NbCheckboxModule, NbBadgeComponent, NbBadgeModule, NbPopoverDirective, NbPopoverModule, NbPopoverComponent, NbContextMenuDirective, NbContextMenuComponent, NbContextMenuModule, NbProgressBarComponent, NbProgressBarModule, NbAlertComponent, NbAlertModule, NbChatComponent, NbChatMessageComponent, NbChatMessageMapComponent, NbChatMessageFileComponent, NbChatMessageQuoteComponent, NbChatMessageTextComponent, NbChatFormComponent, NbChatModule, NbChatOptions, NbChatAvatarComponent, NbChatCustomMessageDirective, NbSpinnerComponent, NbSpinnerDirective, NbSpinnerModule, NB_STEPPER, NbStepperComponent, NbStepComponent, NbStepperNextDirective, NbStepperPreviousDirective, NbStepperModule, NbAccordionComponent, NbAccordionItemComponent, NbAccordionItemBodyComponent, NbAccordionItemHeaderComponent, NbAccordionModule, NbButton, NbButtonComponent, NbButtonModule, NbButtonGroupComponent, NbButtonGroupModule, NbButtonToggleDirective, NbListComponent, NbListItemComponent, NbListModule, NbListPageTrackerDirective, NbScrollableContainerDimentions, NbInfiniteListDirective, NbInputDirective, NbInputModule, NbOverlayModule, patch, createContainer, NbOverlayService, NbAdjustment, NbPosition, NbAdjustableConnectedPositionStrategy, NbGlobalPositionStrategy, NbPositionBuilderService, NbPositionedContainerComponent, NbOverlayContainerComponent, NbTrigger, NbTriggerStrategyBase, NbClickTriggerStrategy, NbHoverTriggerStrategy, NbHintTriggerStrategy, NbFocusTriggerStrategy, NbNoopTriggerStrategy, NbTriggerStrategyBuilderService, NbPortalDirective, NbPortalOutletDirective, NbComponentPortal, NbOverlay, NbOverlayPositionBuilder, NbTemplatePortal, NbOverlayContainer, NbFlexibleConnectedPositionStrategy, NbPortalInjector, NbCdkMappingModule, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbPositionHelper, NbDynamicOverlay, NbDynamicOverlayChange, NbDynamicOverlayHandler, NbPlatform, NbFocusMonitor, NbA11yModule, NbFocusTrap, NbFocusTrapFactoryService, NbCdkAdapterModule, NbBlockScrollStrategyAdapter, NbScrollStrategyOptions, NbOverlayContainerAdapter, NbScrollDispatcherAdapter, NbViewportRulerAdapter, NbDirectionality, NbBidiModule, NbCellDefDirective, NbHeaderCellDefDirective, NbFooterCellDefDirective, NB_SORT_HEADER_COLUMN_DEF, NbColumnDefDirective, NbHeaderCellDirective, NbFooterCellDirective, NbCellDirective, NbDataSource, NbDataRowOutletDirective, NbHeaderRowOutletDirective, NbFooterRowOutletDirective, NbNoDataRowOutletDirective, NbCellOutletDirective, NbHeaderRowDefDirective, NbFooterRowDefDirective, NbRowDefDirective, NbHeaderRowComponent, NbFooterRowComponent, NbRowComponent, NB_TABLE_TEMPLATE, NB_VIEW_REPEATER_STRATEGY, NB_COALESCED_STYLE_SCHEDULER, NB_TABLE_PROVIDERS, NbTable, NbTableModule, NB_DIALOG_CONFIG, NbDialogConfig, NbDialogRef, NbDialogService, NbDialogModule, NbToastrModule, NbToastRef, NbToastContainer, NbToastrContainerRegistry, NbToastrService, NbToast, NbToastComponent, NB_TOASTR_CONFIG, NbToastrConfig, NbToastrContainerComponent, NbTooltipModule, NbTooltipDirective, NbTooltipComponent, NbSelectModule, NbSelectLabelComponent, nbSelectFormFieldControlConfigFactory, NbSelectComponent, NbOptionModule, NbOptionComponent, NbOptionGroupComponent, NbOptionListComponent, NB_SELECT_INJECTION_TOKEN, NbAutocompleteModule, NbAutocompleteComponent, NbAutocompleteDirective, NbWindowModule, NbWindowService, NbWindowRef, NbWindowState, NB_WINDOW_DEFAULT_BUTTONS_CONFIG, NbWindowConfig, NB_WINDOW_CONTENT, NB_WINDOW_CONFIG, NB_WINDOW_CONTEXT, NbWindowComponent, NbWindowsContainerComponent, NbTimepickerModule, NB_TIME_PICKER_CONFIG, NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG, NbTimePickerComponent, NbTimePickerDirective, NbDatepickerModule, NbDatepickerAdapter, NbDatepicker, NB_DATE_ADAPTER, NB_DATE_SERVICE_OPTIONS, NbDatepickerDirective, NbDateAdapterService, NbRangeAdapterService, NbDateTimeAdapterService, NbDatepickerContainerComponent, NbBasePicker, NbBasePickerComponent, NbDatepickerComponent, NbRangepickerComponent, NbDialogContainerComponent, NbRadioModule, NbRadioGroupComponent, NbRadioComponent, NbTagModule, NbTagComponent, NbTagListComponent, NbTagInputDirective, NbTreeGridModule, NbTreeGridComponent, NB_ROW_DOUBLE_CLICK_DELAY, NbTreeGridRowComponent, NbTreeGridHeaderRowComponent, NbTreeGridFooterRowComponent, NB_TREE_GRID, NbSortDirection, NbSortDirective, NbSortHeaderIconDirective, NbSortIconComponent, NbSortHeaderComponent, NbTreeGridRowToggleComponent, NbTreeGridColumnDefDirective, NbTreeGridCellDirective, NbTreeGridHeaderCellDirective, NbTreeGridFooterCellDirective, NbTreeGridRowDefDirective, NbTreeGridHeaderRowDefDirective, NbTreeGridFooterRowDefDirective, NbTreeGridCellDefDirective, NbTreeGridHeaderCellDefDirective, NbTreeGridFooterCellDefDirective, NbFilterDirective, NbFilterInputDirective, NbTreeGridRowToggleDirective, NB_DEFAULT_ROW_LEVEL, NbTreeGridPresentationNode, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridDataService, NbTreeGridFilterService, NbTreeGridService, NbTreeGridSortService, NbColumnsService, NbIconModule, NbIconComponent, NbFontIcon, NbSvgIcon, NbIconPackType, NbIconDefinition, NbIconLibraries, NbToggleModule, NbToggleComponent, NbFormFieldModule, NbFormFieldComponent, NbPrefixDirective, NbSuffixDirective, NbFormFieldControl, NbFormFieldControlConfig };
