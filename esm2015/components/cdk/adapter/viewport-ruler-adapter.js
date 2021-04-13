import { Injectable, NgZone } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';
import { NbPlatform } from '../platform/platform-service';
import { NbLayoutRulerService } from '../../../services/ruler.service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
export class NbViewportRulerAdapter extends ViewportRuler {
    constructor(platform, ngZone, ruler, scroll) {
        super(platform, ngZone);
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
    { type: NbLayoutScrollService }
];
//# sourceMappingURL=viewport-ruler-adapter.js.map