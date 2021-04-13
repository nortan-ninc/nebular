/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSidebarService } from './sidebar.service';
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
export class NbSidebarHeaderComponent {
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
export class NbSidebarFooterComponent {
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
export class NbSidebarComponent {
    constructor(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.destroy$ = new Subject();
        this.containerFixedValue = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
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
        this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
    }
    // TODO: rename stateValue to state (take a look to the card component)
    get expanded() {
        return this.stateValue === NbSidebarComponent.STATE_EXPANDED;
    }
    get collapsed() {
        return this.stateValue === NbSidebarComponent.STATE_COLLAPSED;
    }
    get compacted() {
        return this.stateValue === NbSidebarComponent.STATE_COMPACTED;
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
    set state(val) {
        this.stateValue = val;
    }
    /**
     * Makes sidebar listen to media query events and change its behaviour
     * @type {boolean}
     */
    set responsive(val) {
        this.responsiveValue = convertToBoolProperty(val);
    }
    toggleResponsive(enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    }
    ngOnChanges(changes) {
        if (changes.responsive) {
            this.toggleResponsive(this.responsiveValue);
        }
    }
    ngOnInit() {
        this.sidebarService.onToggle()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            if (!this.tag || this.tag === data.tag) {
                this.toggle(data.compact);
            }
        });
        this.sidebarService.onExpand()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            if (!this.tag || this.tag === data.tag) {
                this.expand();
            }
        });
        this.sidebarService.onCollapse()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            if (!this.tag || this.tag === data.tag) {
                this.collapse();
            }
        });
        this.sidebarService.onCompact()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            if (!this.tag || this.tag === data.tag) {
                this.compact();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
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
        this.state = NbSidebarComponent.STATE_COLLAPSED;
    }
    /**
     * Expands the sidebar
     */
    expand() {
        this.state = NbSidebarComponent.STATE_EXPANDED;
    }
    /**
     * Compacts the sidebar (minimizes)
     */
    compact() {
        this.state = NbSidebarComponent.STATE_COMPACTED;
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
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        const closedStates = [NbSidebarComponent.STATE_COMPACTED, NbSidebarComponent.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent.STATE_EXPANDED : NbSidebarComponent.STATE_COLLAPSED;
        }
    }
    onMediaQueryChanges() {
        return this.themeService.onMediaQueryChange()
            .subscribe(([prev, current]) => {
            const isCollapsed = this.collapsedBreakpoints.includes(current.name);
            const isCompacted = this.compactedBreakpoints.includes(current.name);
            if (isCompacted) {
                this.fixed = this.containerFixedValue;
                this.compact();
                this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_TABLET;
            }
            if (isCollapsed) {
                this.fixed = true;
                this.collapse();
                this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_MOBILE;
            }
            if (!isCollapsed && !isCompacted && prev.width < current.width) {
                this.expand();
                this.fixed = false;
                this.responsiveState = NbSidebarComponent.RESPONSIVE_STATE_PC;
            }
        });
    }
    responsiveEnabled() {
        return this.responsiveValue;
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
}
NbSidebarComponent.STATE_EXPANDED = 'expanded';
NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
NbSidebarComponent.STATE_COMPACTED = 'compacted';
NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
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
                styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start{right:0}[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host ::ng-deep nb-sidebar-footer{margin-top:auto;display:block}:host ::ng-deep nb-sidebar-header{display:block}\n"]
            },] }
];
NbSidebarComponent.ctorParameters = () => [
    { type: NbSidebarService },
    { type: NbThemeService },
    { type: ElementRef }
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
    collapsedBreakpoints: [{ type: Input }]
};
//# sourceMappingURL=sidebar.component.js.map