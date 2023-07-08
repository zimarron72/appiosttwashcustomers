(self["webpackChunkttwash"] = self["webpackChunkttwash"] || []).push([["src_app_tab-cliente-profile_tab-cliente-profile_module_ts"],{

/***/ 45396:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS": function() { return /* binding */ MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS; },
/* harmony export */   "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR": function() { return /* binding */ MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR; },
/* harmony export */   "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR": function() { return /* binding */ MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; },
/* harmony export */   "MatSlideToggle": function() { return /* binding */ MatSlideToggle; },
/* harmony export */   "MatSlideToggleChange": function() { return /* binding */ MatSlideToggleChange; },
/* harmony export */   "MatSlideToggleModule": function() { return /* binding */ MatSlideToggleModule; },
/* harmony export */   "MatSlideToggleRequiredValidator": function() { return /* binding */ MatSlideToggleRequiredValidator; },
/* harmony export */   "_MatSlideToggleRequiredValidatorModule": function() { return /* binding */ _MatSlideToggleRequiredValidatorModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ 18553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 19238);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 39490);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */





const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function (a0) { return { enterDuration: a0 }; };
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: () => ({ disableToggleValue: false })
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggle),
    multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
    constructor(
    /** The source MatSlideToggle of the event. */
    source, 
    /** The new `checked` value of the MatSlideToggle. */
    checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
const _MatSlideToggleBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}))));
/** Represents a slidable "switch" toggle that can be moved between on and off. */
class MatSlideToggle extends _MatSlideToggleBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /** Name value will be applied to the input element if present. */
        this.name = null;
        /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
        this.labelPosition = 'after';
        /** Used to set the aria-label attribute on the underlying input element. */
        this.ariaLabel = null;
        /** Used to set the aria-labelledby attribute on the underlying input element. */
        this.ariaLabelledby = null;
        /** An event will be dispatched each time the slide-toggle changes its value. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tabIndex = parseInt(tabIndex) || 0;
        this.color = this.defaultColor = defaults.color || 'accent';
        this._noopAnimations = animationMode === 'NoopAnimations';
    }
    /** Whether the slide-toggle is required. */
    get required() { return this._required; }
    set required(value) { this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value); }
    /** Whether the slide-toggle element is checked or not. */
    get checked() { return this._checked; }
    set checked(value) {
        this._checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        this._changeDetectorRef.markForCheck();
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this._onTouched());
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Method being called whenever the underlying input emits a change event. */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /** Method being called whenever the slide-toggle has been clicked. */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
        this.checked = !!value;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the slide-toggle. */
    focus(options, origin) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    /** Toggles the checked state of the slide-toggle. */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8)); };
MatSlideToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked", ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { change: "change", toggleChange: "toggleChange" }, exportAs: ["matSlideToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 20, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx._noopAnimations ? 0 : 150));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
MatSlideToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE,] }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['toggleBar',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-describedby',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_noopAnimations'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['toggleBar']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggleRequiredValidator),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
}
MatSlideToggleRequiredValidator.ɵfac = /*@__PURE__*/ function () { let ɵMatSlideToggleRequiredValidator_BaseFactory; return function MatSlideToggleRequiredValidator_Factory(t) { return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator)))(t || MatSlideToggleRequiredValidator); }; }();
MatSlideToggleRequiredValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based slide-toggle implementations. */
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); };
_MatSlideToggleRequiredValidatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); };
MatSlideToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _MatSlideToggleRequiredValidatorModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
        ], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule,
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=slide-toggle.js.map

/***/ }),

/***/ 58086:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/camera/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinationType": function() { return /* binding */ DestinationType; },
/* harmony export */   "EncodingType": function() { return /* binding */ EncodingType; },
/* harmony export */   "MediaType": function() { return /* binding */ MediaType; },
/* harmony export */   "PictureSourceType": function() { return /* binding */ PictureSourceType; },
/* harmony export */   "PopoverArrowDirection": function() { return /* binding */ PopoverArrowDirection; },
/* harmony export */   "Direction": function() { return /* binding */ Direction; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
Camera.ɵfac = /*@__PURE__*/ function () { var ɵCamera_BaseFactory; return function Camera_Factory(t) { return (ɵCamera_BaseFactory || (ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Camera)))(t || Camera); }; }();
Camera.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Camera, factory: function (t) { return Camera.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Camera, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Camera;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9jYW1lcmEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBc0Y1RixNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0FBQzFCLElBQUMsNkRBQVksQ0FBQTtBQUFDLElBQ2IsNkRBQVEsQ0FBQTtBQUFDLElBQ1QsaUVBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7QUFDdkIsSUFBQywrQ0FBUSxDQUFBO0FBQUMsSUFDVCw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztBQUNwQixJQUFDLCtDQUFXLENBQUE7QUFBQyxJQUNaLDJDQUFLLENBQUE7QUFBQyxJQUNOLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0FBQzVCLElBQUMseUVBQWdCLENBQUE7QUFBQyxJQUNqQiw2REFBTSxDQUFBO0FBQUMsSUFDUCwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtBQUNoQyxJQUFDLHlFQUFZLENBQUE7QUFBQyxJQUNiLDZFQUFVLENBQUE7QUFBQyxJQUNYLDZFQUFVLENBQUE7QUFBQyxJQUNYLCtFQUFXLENBQUE7QUFBQyxJQUNaLDJFQUFTLENBQUE7QUFDWCxDQUFDLEVBTlcscUJBQXFCLEtBQXJCLHFCQUFxQixRQU1oQztBQUVELE1BQU0sQ0FBTixJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7QUFDcEIsSUFBQyx5Q0FBUSxDQUFBO0FBQUMsSUFDVCwyQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBQ0Q7QUFJUSxJQWdEb0IsMEJBQTBCO0FBQUM7QUFFdkM7QUFHSyxRQUpuQjtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUscUJBQWUsR0FBRztBQUNwQixZQUFJLGdLQUFnSztBQUNwSyxZQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsWUFBSSw0RUFBNEU7QUFDaEYsWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksMERBQTBEO0FBQzlELFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsU0FBRyxDQUFDO0FBQ0osUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsa0JBQVksR0FBRztBQUNqQixZQUFJLGdDQUFnQztBQUNwQyxZQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsWUFBSSwrQkFBK0I7QUFDbkMsWUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNWLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGVBQVMsR0FBRztBQUNkLFlBQUksd0dBQXdHO0FBQzVHLFlBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxZQUFJLHNEQUFzRDtBQUMxRCxZQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osWUFBSSwyQ0FBMkM7QUFDL0MsWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFNBQUcsQ0FBQztBQUNKLFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLHVCQUFpQixHQUFHO0FBQ3RCLFlBQUksMkVBQTJFO0FBQy9FLFlBQUksWUFBWSxFQUFFLENBQUM7QUFDbkIsWUFBSSwrQkFBK0I7QUFDbkMsWUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNiLFlBQUksOEVBQThFO0FBQ2xGLFlBQUksZUFBZSxFQUFFLENBQUM7QUFDdEIsU0FBRyxDQUFDO0FBQ0osUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsMkJBQXFCLEdBQUc7QUFDMUIsWUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNmLFlBQUksVUFBVSxFQUFFLENBQUM7QUFDakIsWUFBSSxVQUFVLEVBQUUsQ0FBQztBQUNqQixZQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLFlBQUksU0FBUyxFQUFFLEVBQUU7QUFDakIsU0FBRyxDQUFDO0FBQ0osUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsZUFBUyxHQUFHO0FBQ2QsWUFBSSxpQ0FBaUM7QUFDckMsWUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFlBQUksa0NBQWtDO0FBQ3RDLFlBQUksS0FBSyxFQUFFLENBQUM7QUFDWixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFRbkIsMkJBQVUsYUFBQyxPQUF1QjtBQUtTLElBUTNDLHdCQUFPO0FBSTRDO0FBQWtDO0FBQTZDO0FBQTJDO0FBQXFFOzBDQS9GblAsVUFBVTs7OzswQkFDTDtBQUFDLGlCQTlLUDtBQUFFLEVBOEswQiwwQkFBMEI7QUFDckQsU0FEWSxNQUFNO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbWVyYSwgQ2FtZXJhT3B0aW9ucyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jYW1lcmEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcbiAqICAgcXVhbGl0eTogMTAwLFxuICogICBkZXN0aW5hdGlvblR5cGU6IHRoaXMuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSxcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxuICogfVxuICpcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgLy8gaW1hZ2VEYXRhIGlzIGVpdGhlciBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBvciBhIGZpbGUgVVJJXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xuICogfSwgKGVycikgPT4ge1xuICogIC8vIEhhbmRsZSBlcnJvclxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYW1lcmFPcHRpb25zXG4gKiBDYW1lcmFQb3BvdmVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbWVyYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBkZXN0aW5hdGlvbiB0eXBlc1xuICAgKi9cbiAgRGVzdGluYXRpb25UeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gYmFzZTY0IGVuY29kZWQgc3RyaW5nLiBEQVRBX1VSTCBjYW4gYmUgdmVyeSBtZW1vcnkgaW50ZW5zaXZlIGFuZCBjYXVzZSBhcHAgY3Jhc2hlcyBvciBvdXQgb2YgbWVtb3J5IGVycm9ycy4gVXNlIEZJTEVfVVJJIG9yIE5BVElWRV9VUkkgaWYgcG9zc2libGUgKi9cbiAgICBEQVRBX1VSTDogMCxcbiAgICAvKiogUmV0dXJuIGZpbGUgdXJpIChjb250ZW50Oi8vbWVkaWEvZXh0ZXJuYWwvaW1hZ2VzL21lZGlhLzIgZm9yIEFuZHJvaWQpICovXG4gICAgRklMRV9VUkk6IDEsXG4gICAgLyoqIFJldHVybiBuYXRpdmUgdXJpIChlZy4gYXNzZXQtbGlicmFyeTovLy4uLiBmb3IgaU9TKSAqL1xuICAgIE5BVElWRV9VUkk6IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDEsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBNZWRpYVR5cGUgPSB7XG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULiBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGUgKi9cbiAgICBQSUNUVVJFOiAwLFxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgT05MWSBSRVRVUk5TIFVSTCAqL1xuICAgIFZJREVPOiAxLFxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXMgKi9cbiAgICBBTExNRURJQTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBpY3R1cmVTb3VyY2VUeXBlID0ge1xuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgUEhPVE9MSUJSQVJZIGZvciBBbmRyb2lkKSAqL1xuICAgIFBIT1RPTElCUkFSWTogMCxcbiAgICAvKiogVGFrZSBwaWN0dXJlIGZyb20gY2FtZXJhICovXG4gICAgQ0FNRVJBOiAxLFxuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgU0FWRURQSE9UT0FMQlVNIGZvciBBbmRyb2lkKSAqL1xuICAgIFNBVkVEUEhPVE9BTEJVTTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIERpcmVjdGlvbiA9IHtcbiAgICAvKiogVXNlIHRoZSBiYWNrLWZhY2luZyBjYW1lcmEgKi9cbiAgICBCQUNLOiAwLFxuICAgIC8qKiBVc2UgdGhlIGZyb250LWZhY2luZyBjYW1lcmEgKi9cbiAgICBGUk9OVDogMSxcbiAgfTtcblxuICAvKipcbiAgICogVGFrZSBhIHBpY3R1cmUgb3IgdmlkZW8sIG9yIGxvYWQgb25lIGZyb20gdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7Q2FtZXJhT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBwYXNzIHRvIHRoZSBjYW1lcmEuIEVuY29kaW5nIHR5cGUsIHF1YWxpdHksIGV0Yy4gUGxhdGZvcm0tc3BlY2lmaWMgcXVpcmtzIGFyZSBkZXNjcmliZWQgaW4gdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSNjYW1lcmFvcHRpb25zLWVycmF0YS0pLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggQmFzZTY0IGVuY29kaW5nIG9mIHRoZSBpbWFnZSBkYXRhLCBvciB0aGUgaW1hZ2UgZmlsZSBVUkksIGRlcGVuZGluZyBvbiBjYW1lcmFPcHRpb25zLCBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgY2xlYW51cCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 22014:
/*!*********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/chooser/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chooser": function() { return /* binding */ Chooser; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var Chooser = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (accept) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFile", {}, arguments); };
    Chooser.prototype.getFileMetadata = function (accept) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFileMetadata", {}, arguments); };
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
Chooser.ɵfac = /*@__PURE__*/ function () { var ɵChooser_BaseFactory; return function Chooser_Factory(t) { return (ɵChooser_BaseFactory || (ɵChooser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Chooser)))(t || Chooser); }; }();
Chooser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Chooser, factory: function (t) { return Chooser.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Chooser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Chooser;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9jaG9vc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztBQUM1RjtBQUVlLElBaURjLDJCQUEwQjtBQUFDO0FBRXZDO0FBRWE7QUFBTSxJQUtsQyx5QkFBTyxhQUFDLE1BQWU7QUFFdEIsSUFVRCxpQ0FBZSxhQUFDLE1BQWU7QUFJNUI7QUFBb0M7QUFBK0M7QUFBbUM7QUFBcUU7MkNBMUIvTCxVQUFVOzs7OzBCQUNMO0FBQUMsa0JBckRQO0FBQUUsRUFxRDJCLDBCQUEwQjtBQUN0RCxTQURZLE9BQU87QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XG4gIGRhdGE/OiBVaW50OEFycmF5O1xuICBkYXRhVVJJPzogc3RyaW5nO1xuICBtZWRpYVR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBDaG9vc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEZpbGUgY2hvb3NlciBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxuICogYGBgeG1sXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICA8ZWRpdC1jb25maWdcbiAqICAgIGZpbGU9XCJhcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbFwiXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XG4gKiAgICA8YXBwbGljYXRpb24gYW5kcm9pZDpsYXJnZUhlYXA9XCJ0cnVlXCIgLz5cbiAqICA8L2VkaXQtY29uZmlnPlxuICogPC9wbGF0Zm9ybT5cbiAqIGBgYFxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDaG9vc2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Nob29zZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjaG9vc2VyOiBDaG9vc2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jaG9vc2VyLmdldEZpbGUoKVxuICogICAudGhlbihmaWxlID0+IGNvbnNvbGUubG9nKGZpbGUgPyBmaWxlLm5hbWUgOiAnY2FuY2VsZWQnKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2hvb3NlclJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENob29zZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXB0XSBPcHRpb25hbCBNSU1FIHR5cGUgZmlsdGVyIChlLmcuICdpbWFnZS9naWYsdmlkZW8vKicpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIGNvbnRhaW5pbmcgc2VsZWN0ZWQgZmlsZSdzIHJhdyBiaW5hcnkgZGF0YSxcbiAgICogYmFzZTY0LWVuY29kZWQgZGF0YTogVVJJLCBNSU1FIHR5cGUsIGRpc3BsYXkgbmFtZSwgYW5kIG9yaWdpbmFsIFVSSS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RmlsZShhY2NlcHQ/OiBzdHJpbmcpOiBQcm9taXNlPENob29zZXJSZXN1bHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthY2NlcHRdIE9wdGlvbmFsIE1JTUUgdHlwZSBmaWx0ZXIgKGUuZy4gJ2ltYWdlL2dpZix2aWRlby8qJykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3MgTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXG4gICAqIElmIHVzZXIgY2FuY2VscywgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIGFzIHVuZGVmaW5lZC5cbiAgICogSWYgZXJyb3Igb2NjdXJzLCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZpbGVNZXRhZGF0YShhY2NlcHQ/OiBzdHJpbmcpOiBQcm9taXNlPENob29zZXJSZXN1bHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 71484:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/file/__ivy_ngcc__/ngx/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": function() { return /* binding */ File; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var File = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     *
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @param err
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param dr
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param de
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param writer
     * @param gu
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @param writer
     * @param file
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        /**
         *
         */
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationStorageDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "dataDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "cacheDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalApplicationStorageDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalDataDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalCacheDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalRootDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "tempDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "syncedDataDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "documentsDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "sharedDirectory"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
File.ɵfac = /*@__PURE__*/ function () { var ɵFile_BaseFactory; return function File_Factory(t) { return (ɵFile_BaseFactory || (ɵFile_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](File)))(t || File); }; }();
File.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: File, factory: function (t) { return File.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](File, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return File;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9maWxlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHlGQUtMLFVBQVUsRUFDWCxNQUFNLCtCQUErQixDQUFDOztBQUN2QztBQUdDLElBa3BCeUIsd0JBQTBCO0FBQUM7QUFFdkM7QUFFVSxRQTBEdEIsc0JBQWdCLEdBQVE7QUFDMUIsWUFBSSxDQUFDLEVBQUUsZUFBZTtBQUN0QixZQUFJLENBQUMsRUFBRSxjQUFjO0FBQ3JCLFlBQUksQ0FBQyxFQUFFLFdBQVc7QUFDbEIsWUFBSSxDQUFDLEVBQUUsa0JBQWtCO0FBQ3pCLFlBQUksQ0FBQyxFQUFFLGNBQWM7QUFDckIsWUFBSSxDQUFDLEVBQUUsNkJBQTZCO0FBQ3BDLFlBQUksQ0FBQyxFQUFFLG1CQUFtQjtBQUMxQixZQUFJLENBQUMsRUFBRSxZQUFZO0FBQ25CLFlBQUksQ0FBQyxFQUFFLDBCQUEwQjtBQUNqQyxZQUFJLEVBQUUsRUFBRSxvQkFBb0I7QUFDNUIsWUFBSSxFQUFFLEVBQUUsbUJBQW1CO0FBQzNCLFlBQUksRUFBRSxFQUFFLGlCQUFpQjtBQUN6QixZQUFJLEVBQUUsRUFBRSxrQkFBa0I7QUFDMUIsWUFBSSxFQUFFLEVBQUUsY0FBYztBQUN0QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFLbkIsK0JBQWdCO0FBQWlCO0FBQ2Q7QUFDcEIsbURBRnFDO0FBQ3RDLGdCQUFJLE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07QUFBSSxvQkFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hILGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FB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RCwwQkFMcUIsb0NBQWtCO0FBQUk7QUFLakM7QUFJVDtBQUNJO0FBQ087QUFBUSwwQkFOQyxpQ0FBZTtBQUFJO0FBS3hDO0FBR2lCO0FBQ1g7QUFDRDtBQUFRO0FBQ1M7QUFDTTtBQUV0QjtBQUVVO3dDQTdFZixVQUFVOzs7OzBCQUNMO0FBQUMsZUE3cEJQO0FBQUUsRUE2cEJ3QiwwQkFBMEI7QUFDbkQsU0FEWSxJQUFJO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgZ2V0UHJvbWlzZSxcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlIGV4dGVuZHMgQmxvYiB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBmaWxlLCB3aXRob3V0IHBhdGggaW5mb3JtYXRpb25cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxuICAgKi9cbiAgbGFzdE1vZGlmaWVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZERhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFNpemUgaW4gYnl0ZXNcbiAgICovXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqXG4gICAqIEZpbGUgbWltZSB0eXBlXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIGxvY2FsVVJMOiBzdHJpbmc7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgXCJzbGljZVwiIG9mIHRoZSBmaWxlLiBTaW5jZSBDb3Jkb3ZhIEZpbGVzIGRvbid0IGNvbnRhaW4gdGhlIGFjdHVhbFxuICAgKiBjb250ZW50LCB0aGlzIHJlYWxseSByZXR1cm5zIGEgRmlsZSB3aXRoIGFkanVzdGVkIHN0YXJ0IGFuZCBlbmQuXG4gICAqIFNsaWNlcyBvZiBzbGljZXMgYXJlIHN1cHBvcnRlZC5cbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0IHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBzdGFydCB0aGUgc2xpY2UgKGluY2x1c2l2ZSkuXG4gICAqIEBwYXJhbSBlbmQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGVuZCB0aGUgc2xpY2UgKGV4Y2x1c2l2ZSkuXG4gICAqL1xuICBzbGljZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IEJsb2I7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2Ugd2l0aCBubyBndWFyYW50ZWUgb2YgcGVyc2lzdGVuY2UuXG4gICAqL1xuICBURU1QT1JBUlk6IG51bWJlcjtcblxuICAvKipcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB0aGF0IHNob3VsZCBub3QgYmUgcmVtb3ZlZCBieSB0aGUgdXNlciBhZ2VudCB3aXRob3V0IGFwcGxpY2F0aW9uIG9yIHVzZXIgcGVybWlzc2lvbi5cbiAgICovXG4gIFBFUlNJU1RFTlQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmVxdWVzdHMgYSBmaWxlc3lzdGVtIGluIHdoaWNoIHRvIHN0b3JlIGFwcGxpY2F0aW9uIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIFdoZXRoZXIgdGhlIGZpbGVzeXN0ZW0gcmVxdWVzdGVkIHNob3VsZCBiZSBwZXJzaXN0ZW50LCBhcyBkZWZpbmVkIGFib3ZlLiBVc2Ugb25lIG9mIFRFTVBPUkFSWSBvclxuICAgKiAgIFBFUlNJU1RFTlQuXG4gICAqIEBwYXJhbSBzaXplIFRoaXMgaXMgYW4gaW5kaWNhdG9yIG9mIGhvdyBtdWNoIHN0b3JhZ2Ugc3BhY2UsIGluIGJ5dGVzLCB0aGUgYXBwbGljYXRpb24gZXhwZWN0cyB0byBuZWVkLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIFRoZSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGFnZW50IHByb3ZpZGVzIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBmaWxlc3lzdGVtIGlzXG4gICAqICAgZGVuaWVkLlxuICAgKi9cbiAgcmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gbG9vayB1cCB0aGUgRW50cnkgZm9yIGEgZmlsZSBvciBkaXJlY3RvcnkgcmVmZXJyZWQgdG8gYnkgYSBsb2NhbCBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgQSBVUkwgcmVmZXJyaW5nIHRvIGEgbG9jYWwgZmlsZSBpbiBhIGZpbGVzeXN0ZW0gYWNjZXNzYWJsZSB2aWEgdGhpcyBBUEkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXBvcnQgdGhlIEZpbGVFbnRyeSB0byB3aGljaCB0aGUgc3VwcGxpZWQgVVJMIHJlZmVycy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBFbnRyeSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodXJsOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjazogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogc2VlIHJlcXVlc3RGaWxlU3lzdGVtLlxuICAgKi9cbiAgd2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGZpbGUgb3IgZGlyZWN0b3J5IHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIG1vZGlmaWNhdGlvblRpbWU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy4gVGhpcyBtdXN0IHJldHVybiAwIGZvciBkaXJlY3Rvcmllcy5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ3Mge1xuICAvKipcbiAgICogVXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBhIGZpbGUgb3IgZGlyZWN0b3J5IGlmIGl0IHdhcyBub3QgcHJldmlvdXNseSB0aGVyZS5cbiAgICovXG4gIGNyZWF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ5IGl0c2VsZiwgZXhjbHVzaXZlIG11c3QgaGF2ZSBubyBlZmZlY3QuIFVzZWQgd2l0aCBjcmVhdGUsIGl0IG11c3QgY2F1c2UgZ2V0RmlsZSBhbmQgZ2V0RGlyZWN0b3J5IHRvIGZhaWwgaWYgdGhlXG4gICAqIHRhcmdldCBwYXRoIGFscmVhZHkgZXhpc3RzLlxuICAgKi9cbiAgZXhjbHVzaXZlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBzcGVjaWZpY3Mgb2YgbmFtaW5nIGZpbGVzeXN0ZW1zIGlzIHVuc3BlY2lmaWVkLCBidXQgYSBuYW1lIG11c3QgYmUgdW5pcXVlXG4gICAqIGFjcm9zcyB0aGUgbGlzdCBvZiBleHBvc2VkIGZpbGUgc3lzdGVtcy5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgZmlsZSBzeXN0ZW0uXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcm9vdDogRGlyZWN0b3J5RW50cnk7XG5cbiAgdG9KU09OKCk6IHN0cmluZztcblxuICBlbmNvZGVVUklQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeSB7XG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGZpbGUuXG4gICAqL1xuICBpc0ZpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVudHJ5IGlzIGEgZGlyZWN0b3J5LlxuICAgKi9cbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgbWV0YWRhdGEgYWJvdXQgdGhpcyBlbnRyeS5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxuICAgKlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxuICAgKiBAcGFyYW0gbWV0YWRhdGFPYmplY3Qge01ldGFkYXRhfSBrZXlzIGFuZCB2YWx1ZXMgdG8gc2V0XG4gICAqL1xuICBzZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IEVycm9yQ2FsbGJhY2ssIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSwgZXhjbHVkaW5nIHRoZSBwYXRoIGxlYWRpbmcgdG8gaXQuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZnVsbCBhYnNvbHV0ZSBwYXRoIGZyb20gdGhlIHJvb3QgdG8gdGhlIGVudHJ5LlxuICAgKi9cbiAgZnVsbFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWxlIHN5c3RlbSBvbiB3aGljaCB0aGUgZW50cnkgcmVzaWRlcy5cbiAgICovXG4gIGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW07XG4gIC8qKlxuICAgKiBhbiBhbHRlcm5hdGUgVVJMIHdoaWNoIGNhbiBiZSB1c2VkIGJ5IG5hdGl2ZSB3ZWJ2aWV3IGNvbnRyb2xzLCBmb3IgZXhhbXBsZSBtZWRpYSBwbGF5ZXJzLlxuICAgKi9cbiAgbmF0aXZlVVJMOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1vdmUgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XG4gICAqXG4gICAqIDx1aT5cbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XG4gICAqIDx1bD5cbiAgICpcbiAgICogQSBtb3ZlIG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS5cbiAgICogQSBtb3ZlIG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGRpcmVjdG9yeS5cbiAgICovXG4gIG1vdmVUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDb3B5IGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWw+XG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cbiAgICogPGxpPiBjb3B5IGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XG4gICAqIDxsaT4gY29weSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdFxuICAgKiBkaXJlY3RvcnkuPC9saT5cbiAgICogPC91bD5cbiAgICpcbiAgICogRGlyZWN0b3J5IGNvcGllcyBhcmUgYWx3YXlzIHJlY3Vyc2l2ZS0tdGhhdCBpcywgdGhleSBjb3B5IGFsbCBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5LlxuICAgKi9cbiAgY29weVRvKFxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXG4gICAgbmV3TmFtZT86IHN0cmluZyxcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGlzIGVudHJ5LiBVbmxpa2UgdGhlIFVSTiBkZWZpbmVkIGluIFtGSUxFLUFQSS1FRF0sIGl0IGhhcyBubyBzcGVjaWZpY1xuICAgKiBleHBpcmF0aW9uOyBhcyBpdCBkZXNjcmliZXMgYSBsb2NhdGlvbiBvbiBkaXNrLCBpdCBzaG91bGQgYmUgdmFsaWQgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGF0IGxvY2F0aW9uIGV4aXN0cy5cbiAgICovXG4gIHRvVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJuIGEgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5LlxuICAgKlxuICAgKiBAcmV0dXJucyBzdHJpbmcgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5XG4gICAqL1xuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cbiAgICogYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcbiAgICogaXMgaXRzZWxmLlxuICAgKlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBwYXJlbnQgRW50cnkuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0UGFyZW50KHN1Y2Nlc3NDYWxsYmFjazogRGlyZWN0b3J5RW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBFbnRyeSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERpcmVjdG9yeVJlYWRlciB0byByZWFkIEVudHJpZXMgZnJvbSB0aGlzIERpcmVjdG9yeS5cbiAgICovXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxuICAgKiAgIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZmlsZSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlLCBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCBjcmVhdGUgaXQgYXMgYVxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBkaXJlY3RvcnksIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBGaWxlIHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0RmlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBGbGFncywgc3VjY2Vzc0NhbGxiYWNrPzogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZGlyZWN0b3J5IHRvIGJlIGxvb2tlZCB1cFxuICAgKiAgIG9yIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiAgICAgPHVsPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IGNyZWF0ZSBhbmQgcmV0dXJuXG4gICAqICAgYSBjb3JyZXNwb25kaW5nIERpcmVjdG9yeUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGZpbGUsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgcmV0dXJuIGEgRGlyZWN0b3J5RW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrICAgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIERpcmVjdG9yeUVudHJ5IHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0RGlyZWN0b3J5KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmxhZ3MsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGlyZWN0b3J5IGFuZCBhbGwgb2YgaXRzIGNvbnRlbnRzLCBpZiBhbnkuIEluIHRoZSBldmVudCBvZiBhbiBlcnJvciBbZS5nLiB0cnlpbmcgdG8gZGVsZXRlIGEgZGlyZWN0b3J5XG4gICAqIHRoYXQgY29udGFpbnMgYSBmaWxlIHRoYXQgY2Fubm90IGJlIHJlbW92ZWRdLCBzb21lIG9mIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5IG1heSBiZSBkZWxldGVkLiBJdCBpcyBhbiBlcnJvclxuICAgKiB0byBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICByZW1vdmVSZWN1cnNpdmVseShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBsZXRzIGEgdXNlciBsaXN0IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBhIGRpcmVjdG9yeS4gSWYgdGhlcmUgYXJlIG5vIGFkZGl0aW9ucyB0byBvclxuICogZGVsZXRpb25zIGZyb20gYSBkaXJlY3RvcnkgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIGxhc3QgY2FsbCB0byByZWFkRW50cmllcywgYW5kIG5vIGVycm9ycyBvY2N1ciwgdGhlbjpcbiAqIDx1bD5cbiAqIDxsaT4gQSBzZXJpZXMgb2YgY2FsbHMgdG8gcmVhZEVudHJpZXMgbXVzdCByZXR1cm4gZWFjaCBlbnRyeSBpbiB0aGUgZGlyZWN0b3J5IGV4YWN0bHkgb25jZS48L2xpPlxuICogPGxpPiBPbmNlIGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIG5leHQgY2FsbCB0byByZWFkRW50cmllcyBtdXN0IHByb2R1Y2UgYW4gZW1wdHkgYXJyYXkuPC9saT5cbiAqIDxsaT4gSWYgbm90IGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIGFycmF5IHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGJlIGVtcHR5LjwvbGk+XG4gKiA8bGk+IFRoZSBlbnRyaWVzIHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGluY2x1ZGUgdGhlIGRpcmVjdG9yeSBpdHNlbGYgW1wiLlwiXSBvciBpdHMgcGFyZW50IFtcIi4uXCJdLjwvbGk+XG4gKiA8L3VsPlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVJlYWRlciB7XG4gIGxvY2FsVVJMOiBzdHJpbmc7XG4gIGhhc1JlYWRFbnRyaWVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBuZXh0IGJsb2NrIG9mIGVudHJpZXMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBDYWxsZWQgb25jZSBwZXIgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlYWRFbnRyaWVzIHRvIGRlbGl2ZXIgdGhlIG5leHQgcHJldmlvdXNseS11bnJlcG9ydGVkXG4gICAqICAgc2V0IG9mIEVudHJpZXMgaW4gdGhlIGFzc29jaWF0ZWQgRGlyZWN0b3J5LiBJZiBhbGwgRW50cmllcyBoYXZlIGFscmVhZHkgYmVlbiByZXR1cm5lZCBmcm9tIHByZXZpb3VzIGludm9jYXRpb25zXG4gICAqICAgb2YgcmVhZEVudHJpZXMsIHN1Y2Nlc3NDYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgemVyby1sZW5ndGggYXJyYXkgYXMgYW4gYXJndW1lbnQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgaW5kaWNhdGluZyB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvciByZWFkaW5nIGZyb20gdGhlIERpcmVjdG9yeS5cbiAgICovXG4gIHJlYWRFbnRyaWVzKHN1Y2Nlc3NDYWxsYmFjazogRW50cmllc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlV3JpdGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBuZXcgRmlsZVdyaXRlci5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBjcmVhdGVXcml0ZXIoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlV3JpdGVyQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIEZpbGUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIEZpbGUuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZmlsZShzdWNjZXNzQ2FsbGJhY2s6IEZpbGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFdoZW4gcmVxdWVzdEZpbGVTeXN0ZW0oKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlU3lzdGVtQ2FsbGJhY2sgPSAoZmlsZXN5c3RlbTogRmlsZVN5c3RlbSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBGaWxlRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IEZpbGVFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBEaXJlY3RvcnlFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBXaGVuIHJlYWRFbnRyaWVzKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cmllc0NhbGxiYWNrID0gKGVudHJpZXM6IEVudHJ5W10pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgZmlsZSBhbmQgZGlyZWN0b3J5IG1ldGFkYXRhLlxuICovXG5leHBvcnQgdHlwZSBNZXRhZGF0YUNhbGxiYWNrID0gKG1ldGFkYXRhOiBNZXRhZGF0YSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gY3JlYXRlIGEgRmlsZVdyaXRlci5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVdyaXRlckNhbGxiYWNrID0gKGZpbGVXcml0ZXI6IEZpbGVXcml0ZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIG9idGFpbiBhIEZpbGUuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVDYWxsYmFjayA9IChmaWxlOiBJRmlsZSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGdlbmVyaWMgY2FsbGJhY2sgdXNlZCB0byBpbmRpY2F0ZSBzdWNjZXNzIG9mIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuXG4gKi9cbmV4cG9ydCB0eXBlIFZvaWRDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiBhbiBlcnJvciBvY2N1cnMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnI6IEZpbGVFcnJvcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVSZXN1bHQge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBmaWxlUmVtb3ZlZDogRW50cnk7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlU2F2ZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBGaWxlU2F2ZXIgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgdXNlciBhZ2VudCBtdXN0IHJldHVybiBhIG5ldyBGaWxlU2F2ZXIgb2JqZWN0IHdpdGggcmVhZHlTdGF0ZSBzZXQgdG9cbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XG4gICAqIDxvbD5cbiAgICogPGxpPiBJZiByZWFkeVN0YXRlID09IERPTkUgb3IgcmVhZHlTdGF0ZSA9PSBJTklULCB0ZXJtaW5hdGUgdGhpcyBvdmVyYWxsIHNlcmllcyBvZiBzdGVwcyB3aXRob3V0IGRvaW5nIGFueXRoaW5nXG4gICAqIGVsc2UuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cbiAgICogPGxpPiBJZiB0aGVyZSBhcmUgYW55IHRhc2tzIGZyb20gdGhlIG9iamVjdCdzIEZpbGVTYXZlciB0YXNrIHNvdXJjZSBpbiBvbmUgb2YgdGhlIHRhc2sgcXVldWVzLCB0aGVuIHJlbW92ZSB0aG9zZVxuICAgKiB0YXNrcy4gPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHRoZSBlcnJvciBhdHRyaWJ1dGUgdG8gYSBET01FcnJvciBvYmplY3Qgb2YgdHlwZSBcIkFib3J0RXJyb3JcIi4gPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZSBlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvYiBpcyBiZWluZyB3cml0dGVuLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIElOSVQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgaGFzIGJlZW4gY29uc3RydWN0ZWQsIGJ1dCB0aGVyZSBpcyBubyBwZW5kaW5nIHdyaXRlLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIFdSSVRJTkc6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBlbnRpcmUgQmxvYiBoYXMgYmVlbiB3cml0dGVuIHRvIHRoZSBmaWxlLCBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHdyaXRlLCBvciB0aGUgd3JpdGUgd2FzIGFib3J0ZWQgdXNpbmdcbiAgICogYWJvcnQoKS4gVGhlIEZpbGVTYXZlciBpcyBubyBsb25nZXIgd3JpdGluZyB0aGUgYmxvYi5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBET05FOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgRmlsZVNhdmVyIG9iamVjdCBjYW4gYmUgaW4gb25lIG9mIDMgc3RhdGVzLiBUaGUgcmVhZHlTdGF0ZSBhdHRyaWJ1dGUsIG9uIGdldHRpbmcsIG11c3QgcmV0dXJuIHRoZSBjdXJyZW50XG4gICAqIHN0YXRlLCB3aGljaCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICogPHVsPlxuICAgKiA8bGk+SU5JVDwvbGk+XG4gICAqIDxsaT5XUklUSU5HPC9saT5cbiAgICogPGxpPkRPTkU8L2xpPlxuICAgKiA8dWw+XG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcmVhZHlTdGF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCBvbiB0aGUgRmlsZVNhdmVyLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGVycm9yOiBFcnJvcjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIHN0YXJ0IGV2ZW50c1xuICAgKi9cbiAgb253cml0ZXN0YXJ0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBwcm9ncmVzcyBldmVudHMuXG4gICAqL1xuICBvbnByb2dyZXNzOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBldmVudHMuXG4gICAqL1xuICBvbndyaXRlOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBhYm9ydCBldmVudHMuXG4gICAqL1xuICBvbmFib3J0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBlcnJvciBldmVudHMuXG4gICAqL1xuICBvbmVycm9yOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBlbmQgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZWVuZDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFRoaXMgaW50ZXJmYWNlIGV4cGFuZHMgb24gdGhlIEZpbGVTYXZlciBpbnRlcmZhY2UgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHdyaXRlIGFjdGlvbnMsIHJhdGhlciB0aGFuIGp1c3Qgc2F2aW5nIGFcbiAqICAgc2luZ2xlIEJsb2IuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVXcml0ZXIgZXh0ZW5kcyBGaWxlU2F2ZXIge1xuICAvKipcbiAgICogVGhlIGJ5dGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHRvIHRoZSBmaWxlIHdpbGwgb2NjdXIuIFRoaXMgbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gbGVuZ3RoLlxuICAgKiBBIG5ld2x5LWNyZWF0ZWQgRmlsZVdyaXRlciBtdXN0IGhhdmUgcG9zaXRpb24gc2V0IHRvIDAuXG4gICAqL1xuICBwb3NpdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBmaWxlLiBJZiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHJlYWQgYWNjZXNzIHRvIHRoZSBmaWxlLCB0aGlzIG11c3QgYmUgdGhlIGhpZ2hlc3QgYnl0ZSBvZmZzZXQgYXRcbiAgICogd2hpY2ggdGhlIHVzZXIgaGFzIHdyaXR0ZW4uXG4gICAqL1xuICBsZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogV3JpdGUgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIGZpbGUgYXQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHdyaXRlLlxuICAgKi9cbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXQgSWYgbm9ubmVnYXRpdmUsIGFuIGFic29sdXRlIGJ5dGUgb2Zmc2V0IGludG8gdGhlIGZpbGUuIElmIG5lZ2F0aXZlLCBhbiBvZmZzZXQgYmFjayBmcm9tIHRoZSBlbmQgb2ZcbiAgICogICB0aGUgZmlsZS5cbiAgICovXG4gIHNlZWsob2Zmc2V0OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgdG8gdGhhdCBzcGVjaWZpZWQuIElmIHNob3J0ZW5pbmcgdGhlIGZpbGUsIGRhdGEgYmV5b25kIHRoZSBuZXcgbGVuZ3RoIG11c3QgYmVcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXG4gICAqXG4gICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIHRvIHdoaWNoIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgaXMgdG8gYmUgYWRqdXN0ZWQsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgKi9cbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIGFwcGVuZD86IGJvb2xlYW47XG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZUVycm9yIHtcbiAgc3RhdGljIE5PVF9GT1VORF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgQUJPUlRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT1RfUkVBREFCTEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9TVEFURV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUVVPVEFfRVhDRUVERURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUEFUSF9FWElTVFNfRVJSOiBudW1iZXI7XG4gIC8qKiBFcnJvciBjb2RlICovXG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUmVhZGVyIHtcbiAgc3RhdGljIEVNUFRZOiBudW1iZXI7XG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XG4gIHN0YXRpYyBET05FOiBudW1iZXI7XG4gIHN0YXRpYyBSRUFEX0NIVU5LX1NJWkU6IG51bWJlcjtcblxuICByZWFkeVN0YXRlOiBudW1iZXI7IC8vIHNlZSBjb25zdGFudHMgaW4gdmFyIGRlY2xhcmF0aW9uIGJlbG93XG4gIGVycm9yOiBFcnJvcjtcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxuXG4gIG9ubG9hZHN0YXJ0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uZXJyb3I6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25hYm9ydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICBhYm9ydCgpOiB2b2lkO1xuXG4gIHJlYWRBc1RleHQoZmU6IElGaWxlLCBlbmNvZGluZz86IHN0cmluZyk6IHZvaWQ7XG5cbiAgcmVhZEFzRGF0YVVSTChmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0FycmF5QnVmZmVyKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxudHlwZSBXaW5kb3cgPSBMb2NhbEZpbGVTeXN0ZW07XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XG5cbi8qKlxuICogQG5hbWUgRmlsZVxuICogQHByZW1pZXIgZmlsZXN5c3RlbVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpbXBsZW1lbnRzIGEgRmlsZSBBUEkgYWxsb3dpbmcgcmVhZC93cml0ZSBhY2Nlc3MgdG8gZmlsZXMgcmVzaWRpbmcgb24gdGhlIGRldmljZS5cbiAqXG4gKiBUaGUgRmlsZSBjbGFzcyBpbXBsZW1lbnRzIHN0YXRpYyBjb252ZW5pZW5jZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZS5jaGVja0Rpcih0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSwgJ215ZGlyJykudGhlbihfID0+IGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZXhpc3RzJykpLmNhdGNoKGVyciA9PlxuICogICBjb25zb2xlLmxvZygnRGlyZWN0b3J5IGRvZXNuJ3QgZXhpc3QnKSk7XG4gKlxuICogYGBgXG4gKlxuICogIFRoaXMgcGx1Z2luIGlzIGJhc2VkIG9uIHNldmVyYWwgc3BlY3MsIGluY2x1ZGluZyA6IFRoZSBIVE1MNSBGaWxlIEFQSSBodHRwOiAvL3d3dy53My5vcmcvVFIvRmlsZUFQSS9cbiAqICBUaGUgKG5vdy1kZWZ1bmN0KSBEaXJlY3RvcmllcyBhbmQgU3lzdGVtIGV4dGVuc2lvbnMgTGF0ZXN0OiBodHRwOiAvL3d3dy53My5vcmcvVFIvMjAxMi9XRC1maWxlLXN5c3RlbS1hcGktMjAxMjA0MTcvXG4gKiAgQWx0aG91Z2ggbW9zdCBvZiB0aGUgcGx1Z2luIGNvZGUgd2FzIHdyaXR0ZW4gd2hlbiBhbiBlYXJsaWVyIHNwZWMgd2FzIGN1cnJlbnQ6IGh0dHA6XG4gKiAgIC8vd3d3LnczLm9yZy9UUi8yMDExL1dELWZpbGUtc3lzdGVtLWFwaS0yMDExMDQxOS8gSXQgYWxzbyBpbXBsZW1lbnRzIHRoZSBGaWxlV3JpdGVyIHNwZWMgOiBodHRwOlxuICogICAvL2Rldi53My5vcmcvMjAwOS9kYXAvZmlsZS1zeXN0ZW0vZmlsZS13cml0ZXIuaHRtbFxuICogIEBpbnRlcmZhY2VzXG4gKiAgSUZpbGVcbiAqICBFbnRyeVxuICogIERpcmVjdG9yeUVudHJ5XG4gKiAgRGlyZWN0b3J5UmVhZGVyXG4gKiAgRmlsZVN5c3RlbVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5maWxlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25EaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBhcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogV2hlcmUgdG8gcHV0IGFwcC1zcGVjaWZpYyBkYXRhIGZpbGVzLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FjaGVkIGZpbGVzIHRoYXQgc2hvdWxkIHN1cnZpdmUgYXBwIHJlc3RhcnRzLlxuICAgKiBBcHBzIHNob3VsZCBub3QgcmVseSBvbiB0aGUgT1MgdG8gZGVsZXRlIGZpbGVzIGluIGhlcmUuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgY2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIHNwYWNlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxBcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogIEFuZHJvaWQ6IFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcyBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsRGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gY2FjaGUgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbENhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBleHRlcm5hbCBzdG9yYWdlIChTRCBjYXJkKSByb290LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsUm9vdERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IFRlbXAgZGlyZWN0b3J5IHRoYXQgdGhlIE9TIGNhbiBjbGVhciBhdCB3aWxsLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHRlbXBEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBIb2xkcyBhcHAtc3BlY2lmaWMgZmlsZXMgdGhhdCBzaG91bGQgYmUgc3luY2VkIChlLmcuIHRvIGlDbG91ZCkuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc3luY2VkRGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IEZpbGVzIHByaXZhdGUgdG8gdGhlIGFwcCwgYnV0IHRoYXQgYXJlIG1lYW5pbmdmdWwgdG8gb3RoZXIgYXBwbGljYXRpb25zIChlLmcuIE9mZmljZSBmaWxlcylcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb2N1bWVudHNEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQmxhY2tCZXJyeTEwOiBGaWxlcyBnbG9iYWxseSBhdmFpbGFibGUgdG8gYWxsIGFwcHNcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzaGFyZWREaXJlY3Rvcnk6IHN0cmluZztcblxuICBjb3Jkb3ZhRmlsZUVycm9yOiBhbnkgPSB7XG4gICAgMTogJ05PVF9GT1VORF9FUlInLFxuICAgIDI6ICdTRUNVUklUWV9FUlInLFxuICAgIDM6ICdBQk9SVF9FUlInLFxuICAgIDQ6ICdOT1RfUkVBREFCTEVfRVJSJyxcbiAgICA1OiAnRU5DT0RJTkdfRVJSJyxcbiAgICA2OiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJyxcbiAgICA3OiAnSU5WQUxJRF9TVEFURV9FUlInLFxuICAgIDg6ICdTWU5UQVhfRVJSJyxcbiAgICA5OiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJyxcbiAgICAxMDogJ1FVT1RBX0VYQ0VFREVEX0VSUicsXG4gICAgMTE6ICdUWVBFX01JU01BVENIX0VSUicsXG4gICAgMTI6ICdQQVRIX0VYSVNUU19FUlInLFxuICAgIDEzOiAnV1JPTkdfRU5UUllfVFlQRScsXG4gICAgMTQ6ICdESVJfUkVBRF9FUlInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVtYWluaW5nIGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldEZyZWVEaXNrU3BhY2UoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvcmRvdmEuZXhlYyhyZXNvbHZlIGFzIChkYXRhOiBhbnkpID0+IGFueSwgcmVqZWN0IGFzIChkYXRhOiBhbnkpID0+IGFueSwgJ0ZpbGUnLCAnZ2V0RnJlZURpc2tTcGFjZScsIFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGRpcmVjdG9yeSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY2hlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgZGlyZWN0b3J5IGV4aXN0cyBvciByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0RpcihwYXRoOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpcikpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aCArIGRpcjtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKGZ1bGxQYXRoKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZGlyZWN0b3J5IGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBEaXJlY3RvcnlFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgfTtcblxuICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgb3B0aW9ucy5leGNsdXNpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aCkudGhlbigoZnNlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBkaXJlY3RvcnkgYXQgYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShkZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgZGlyZWN0b3J5IHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHNvdXJjZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIHNvdXJjZSBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBUaGUgZGVzdGluYXRpb24gcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIFRoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeXxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBEaXJlY3RvcnlFbnRyeSBvYmplY3Qgb3JcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5IHwgRW50cnk+IHtcbiAgICBuZXdEaXJOYW1lID0gbmV3RGlyTmFtZSB8fCBkaXJOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoc3JjZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZW5hdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZGUsIGRlc3RlbmF0aW9uLCBuZXdEaXJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZGlyZWN0b3J5IGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZGVzdGluYXRpb24gZGlyZWN0b3J5IGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIE5ldyBuYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9iamVjdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY29weURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoc3JjZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZGUsIGRlc3RlLCBuZXdEaXJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGZpbGVzIGFuZCBkaXJlY3RvcnkgZnJvbSBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnlbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgRW50cnkgb2JqZWN0cyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbGlzdERpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxFbnRyeVtdPihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChmc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwge1xuICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGRlLmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkRW50cmllcyhyZWFkZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmlsZXMgYW5kIHRoZSBkaXJlY3RvcnkgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8UmVtb3ZlUmVzdWx0PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChmc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW1yYWYoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKHBhdGggKyBmaWxlKS50aGVuKChmc2UpID0+IHtcbiAgICAgIGlmIChmc2UuaXNGaWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGZpbGUnO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8Ym9vbGVhbj4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZpbGUgaW4gdGhlIHNwZWNpZmljIHBhdGguXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGZpbGUgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZmlsZSBmcm9tIGEgZGVzaXJlZCBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGZlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IGZpbGUgdG8gdGhlIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgY29udGVudCwgYmxvYiBvciBBcnJheUJ1ZmZlciB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IHdoZXRoZXIgdG8gcmVwbGFjZS9hcHBlbmQgdG8gYW4gZXhpc3RpbmcgZmlsZS4gU2VlIElXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICB3cml0ZUZpbGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLFxuICAgIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWxlT3B0czogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6ICFvcHRpb25zLmFwcGVuZCxcbiAgICAgIGV4Y2x1c2l2ZTogIW9wdGlvbnMucmVwbGFjZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZSwgZ2V0RmlsZU9wdHMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVFbnRyeShmaWxlRW50cnksIHRleHQsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgY29udGVudCB0byBGaWxlRW50cnkuXG4gICAqXG4gICAqIEBoaWRkZW5cbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cbiAgICogQHBhcmFtIHtGaWxlRW50cnl9IGZlIGZpbGUgZW50cnkgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gb3B0aW9ucyByZXBsYWNlIGZpbGUgaWYgc2V0IHRvIHRydWUuIFNlZSBXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59ICBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUVudHJ5KGZlOiBGaWxlRW50cnksIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlciwgb3B0aW9uczogSVdyaXRlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyaXRlcihmZSlcbiAgICAgIC50aGVuKCh3cml0ZXIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XG4gICAgICAgICAgd3JpdGVyLnNlZWsod3JpdGVyLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy50cnVuY2F0ZSkge1xuICAgICAgICAgIHdyaXRlci50cnVuY2F0ZShvcHRpb25zLnRydW5jYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKHdyaXRlciwgdGV4dCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gZmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9ifSB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgd3JpdGVFeGlzdGluZ0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfCBCbG9iKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlKHBhdGgsIGZpbGVOYW1lLCB0ZXh0LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgY29udGVudHMgb2YgYSBmaWxlIGFzIHRleHQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIG9yIHJlamVjdHMgd2l0aFxuICAgKiAgIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc1RleHQocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ1RleHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmFzZTY0IGVuY29kZWQgZGF0YSB1cmwuXG4gICAqIEEgZGF0YSB1cmwgaXMgb2YgdGhlIGZvcm06XG4gICAqICAgICAgZGF0YTogWzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBkYXRhIFVSTCBvciByZWplY3RzXG4gICAqICAgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNEYXRhVVJMKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdEYXRhVVJMJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJpbmFyeSBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyByZWplY3RzIHdpdGggYW5cbiAgICogICBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNCaW5hcnlTdHJpbmcocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0JpbmFyeVN0cmluZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBBcnJheUJ1ZmZlciBvclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNBcnJheUJ1ZmZlcihwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxBcnJheUJ1ZmZlcj4ocGF0aCwgZmlsZSwgJ0FycmF5QnVmZmVyJyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGZpbGUgdG8gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBtb3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gbW92ZSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChmc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHNyY2ZlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbigoZGVzdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgYSBmaWxlIGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZmlsZSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjb3B5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNvcHlGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChzcmNmZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oKGRlc3RlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZXJyXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBlcnIubWVzc2FnZSA9IHRoaXMuY29yZG92YUZpbGVFcnJvcltlcnIuY29kZV07XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGZpbGUgc3lzdGVtIFVSTFxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBmaWxlIHN5c3RlbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZmlsZVVybDogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChcbiAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgIChlbnRyeTogRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZW50cnkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZGlyZWN0b3J5IHVybFxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0b3J5VXJsIHtzdHJpbmd9IGRpcmVjdG9yeSBzeXN0ZW0gdXJsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZXNvbHZlRGlyZWN0b3J5VXJsKGRpcmVjdG9yeVVybDogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZGlyZWN0b3J5VXJsKS50aGVuKChkZSkgPT4ge1xuICAgICAgaWYgKGRlLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBkZSBhcyBEaXJlY3RvcnlFbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBkaXJlY3RvcnknO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RGlyZWN0b3J5RW50cnk+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGlyZWN0b3J5XG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcbiAgICogQHBhcmFtIGRpcmVjdG9yeU5hbWUge3N0cmluZ30gRGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RGlyZWN0b3J5KGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSwgZGlyZWN0b3J5TmFtZTogc3RyaW5nLCBmbGFnczogRmxhZ3MpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPERpcmVjdG9yeUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXREaXJlY3RvcnkoXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZSxcbiAgICAgICAgICBmbGFncyxcbiAgICAgICAgICAoZGUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGaWxlKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCBmbGFncywgcmVzb2x2ZSwgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XG4gICAgICAgIHJlamVjdCh4Yyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRGaWxlPFQ+KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlOiBzdHJpbmcsXG4gICAgcmVhZEFzOiAnQXJyYXlCdWZmZXInIHwgJ0JpbmFyeVN0cmluZycgfCAnRGF0YVVSTCcgfCAnVGV4dCdcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIGdldFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZGVyLnJlc3VsdCAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5yZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIGFueSBhcyBUKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVhZGVyLmVycm9yICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLmVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHsgY29kZTogbnVsbCwgbWVzc2FnZTogJ1JFQURFUl9PTkxPQURFTkRfRVJSJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZmlsZUVudHJ5LmZpbGUoXG4gICAgICAgICAgICAoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLnJlbW92ZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZmUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3JjZVxuICAgKiBAcGFyYW0gZGVzdGRpclxuICAgKiBAcGFyYW0gbmV3TmFtZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIG1vdmUoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLm1vdmVUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgKGRlc3RlKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3JjZVxuICAgKiBAcGFyYW0gZGVzdGRpclxuICAgKiBAcGFyYW0gbmV3TmFtZVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcHkoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLmNvcHlUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgKGRlc3RlKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZHJcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkRW50cmllcyhkcjogRGlyZWN0b3J5UmVhZGVyKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxuICAgICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZW50cmllcyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZGVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByaW1yYWYoZGU6IERpcmVjdG9yeUVudHJ5KTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkZS5yZW1vdmVSZWN1cnNpdmVseShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVXcml0ZXIoZmU6IEZpbGVFbnRyeSk6IFByb21pc2U8RmlsZVdyaXRlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaWxlV3JpdGVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZS5jcmVhdGVXcml0ZXIoXG4gICAgICAgICh3cml0ZXIpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHdyaXRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gd3JpdGVyXG4gICAqIEBwYXJhbSBndVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGd1IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyLCBndSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGlmICh3cml0ZXIuZXJyb3IpIHtcbiAgICAgICAgICByZWplY3Qod3JpdGVyLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGV2dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cml0ZXIud3JpdGUoZ3UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB3cml0ZXJcbiAgICogQHBhcmFtIGZpbGVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVJbkNodW5rcyh3cml0ZXI6IEZpbGVXcml0ZXIsIGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBCTE9DS19TSVpFID0gMTAyNCAqIDEwMjQ7XG4gICAgbGV0IHdyaXR0ZW5TaXplID0gMDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gd3JpdGVOZXh0Q2h1bmsoKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oQkxPQ0tfU0laRSwgZmlsZS5zaXplIC0gd3JpdHRlblNpemUpO1xuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xuXG4gICAgICB3cml0dGVuU2l6ZSArPSBzaXplO1xuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbmVycm9yID0gcmVqZWN0IGFzIChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgICAgIHdyaXRlci5vbndyaXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcbiAgICAgICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 10014:
/*!******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/account/account.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": function() { return /* binding */ AccountComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account.component.html */ 55619);
/* harmony import */ var _account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component.scss */ 42023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);
/* harmony import */ var _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/servicio.autenticacion */ 10240);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);














let AccountComponent = class AccountComponent {
    constructor(formBuilder, snackBar, router, localstorage, servicioprofile, loading, servicioauth, camera, file, http) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.router = router;
        this.localstorage = localstorage;
        this.servicioprofile = servicioprofile;
        this.loading = loading;
        this.servicioauth = servicioauth;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.xusername = true;
        this.xfusername = false;
        this.xpassword = true;
        this.xfpassword = false;
        this.rostro = './assets/imgs/foto_perfil.svg';
        this.baseUrl = 'https://washtt.com';
        this.aviso = false;
    }
    /******************************************************CODIGO CAMARA ************************************************* */
    fromCamara() {
        const options = {
            quality: 80,
            targetWidth: 100,
            targetHeight: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            /*  var base64Image = imageData;
              await this.localstorage.setData('imagen_perfil',base64Image )
              this.picture = await this.localstorage.getData('imagen_perfil')
              alert('aqui0'+this.picture)*/
            this.uploadPhoto(imageData);
        }), (err) => {
            this.snackBar.open('Sorry, an error occurred,please try again or later' + JSON.stringify(err), "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        });
    }
    /******************************************************CODIGO GALERIA********************************************* */
    fromGallery() {
        this.camera.getPicture({
            quality: 80,
            targetWidth: 100,
            targetHeight: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }).then(imageData => {
            // let picture = 'data:image/jpeg;base64,' + imageData;
            this.uploadPhoto(imageData);
        }, error => {
            console.log(JSON.stringify(error));
            this.snackBar.open('Sorry, an error occurred,please try again or later' + JSON.stringify(error), "Close", {
                horizontalPosition: "start",
                verticalPosition: "top",
            });
        });
    }
    /********************************************************************************************************************* */
    uploadPhoto(imageFileUri) {
        this.loading.simpleLoader();
        this.file.resolveLocalFilesystemUrl(imageFileUri)
            .then(entry => entry.file(file => this.readFile(file)))
            .catch(err => console.log(err));
    }
    readFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            const reader = new FileReader();
            console.log("reading file", file);
            reader.onloadend = () => {
                const formData = new FormData();
                const imgBlob = new Blob([reader.result], { type: file.type });
                formData.append('file', imgBlob, file.name);
                formData.append('email', user.email);
                formData.append('idtoken', idtoken);
                formData.append('autenticacion_tipo', autenticacion_tipo);
                this.uploadImage(formData);
            };
            reader.readAsArrayBuffer(file);
        });
    }
    /* async postData(formData: FormData) {
     
      this.uploadImage(formData ).then((result: ApiResponse) => {
        this.loading.dismissLoader()
        console.log('SUCCESS!')
    alert('SUCCESS!' + result.message)
      }, (err) => {
        this.loading.dismissLoader()
        console.log(err);
        alert('NOT SUCCESS!' + err.message)
      });
    }*/
    uploadImage(formData) {
        return new Promise((_resolve, _reject) => {
            /* this.post('v1_api_admin_rostro_upload.php',  formData
             )*/
            this.http.post('https://washtt.com/v1_api_clientes_rostro_upload.php', formData).subscribe(response => {
                //  resolve(response);
                this.loading.dismissLoader();
                this.aviso = true;
                var datos = response;
                // alert(datos.success + datos.message)
                switch (datos.success) {
                    case true:
                        this.snackBar.open("Your picture was uploaded successfully", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                    case false:
                        this.snackBar.open("Sorry, the picture could not be loaded" + datos.message, "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                }
            }, err => {
                console.log(err);
                //reject(err);
                this.loading.dismissLoader();
                this.snackBar.open("Sorry, the picture could not be loaded" + err, "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            });
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    reactiveForm() {
        /* this.form_username = this.formBuilder.group({
           username: [, { validators: [Validators.required]}],
         });*/
        this.form_password = this.formBuilder.group({
            password: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required] }],
        });
    }
    /* edit_username() {
       this.xusername = false
       this.xfusername = true
     }*/
    edit_password() {
        this.xpassword = false;
        this.xfpassword = true;
    }
    /* cancel_username() {
       this.xusername = true
       this.xfusername = false
     }*/
    cancel_password() {
        this.xpassword = true;
        this.xfpassword = false;
    }
    /*  async submit_username() {
    
        var user = JSON.parse(await this.localstorage.getData('usuario'))
        var idtoken = await this.localstorage.getData('idtoken')
        var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
       
    
        if (this.form_username.valid) {
          var username = this.form_username.get("username").value;
          this.http.post<any>('https://washtt.com/v1_api_clientes_editinfocuenta.php', {
            email : user.email,
            idtoken : idtoken ,
            autenticacion_tipo : autenticacion_tipo,
            campo : 'username',
            valor : username
          }).subscribe({
              next: async data => {
        switch(data.respuesta) {
        case 'ERROR':
          this.localstorage.clearData()
          this.router.navigate(['/login'])
          this.snackBar.open("Sorry, an error occurred,please login again", "Close",
          {
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
        break;
    
        case 'DUPLICADO_USUARIO':
                 
          this.snackBar.open("Sorry, With this username there is already a registered user", "Close",
          {
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
        break;
    
        case 'TOKEN ERROR':
          this.localstorage.clearData()
          this.router.navigate(['/login'])
          this.snackBar.open("Invalid or expired token,please login again", "Close",
          {
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
          console.log(data.mensaje);
        break;
       
        case 'OK_TODO':
          this.username = username
          this.xusername = true
        this.xfusername = false
        this.snackBar.open("The data was updated successfully", "Close",
          {
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          );
        break;
        
        }
                  
              },
              error: error => {
                  var errorMensaje = error.message;
                  console.error('There was an error!', errorMensaje);
                  this.localstorage.clearData()
                  this.router.navigate(['/login'])
                  this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                  {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                  }
                  );
              }
          })
    
    
    
         }
        else
        {
          this.snackBar.open("Enter the new username", "Close",
          {
            horizontalPosition: "start",
            verticalPosition: "top",
          }
          
          
          );
        }
        
      }*/
    submit_password() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form_password.valid) {
                var password = this.form_password.get("password").value;
                return this.servicioauth.cambiarpassword(password);
            }
            else {
                this.snackBar.open("Enter the new password", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.doRefresh(null);
            this.reactiveForm();
        });
    }
    doRefresh($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.loading.simpleLoader();
            this.aviso = false;
            if (user) {
                this.servicioprofile.getDataCuenta(idtoken, autenticacion_tipo, user.email).subscribe(val => {
                    var datos = val;
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    switch (datos.respuesta) {
                        case 'ERROR':
                            console.log(datos.mensaje);
                            break;
                        case 'TOKEN ERROR':
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Invalid or expired token,please login again4", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(datos.mensaje);
                            break;
                        case '200_OK':
                            console.log(datos);
                            this.username = datos.u_name;
                            this.email = datos.email;
                            this.password = datos.password;
                            this.fullname = datos.fullname;
                            this.address = datos.street;
                            this.rostro = this.baseUrl + '/' + datos.rostro;
                            break;
                    }
                }, error => {
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    console.error('There was an error!', error);
                    // borramos la informacion local
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again6", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                });
            }
            else {
                // borramos la informacion local
                this.loading.dismissLoader();
                if ($event)
                    $event.target.complete();
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again6", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_3__.ServiciosProfile },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _shared_servicio_autenticacion__WEBPACK_IMPORTED_MODULE_5__.ServicioAutenticacion },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient }
];
AccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-account',
        template: _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountComponent);



/***/ }),

/***/ 79335:
/*!****************************************************************!*\
  !*** ./src/app/tab-cliente-profile/addcar/addcar.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcarComponent": function() { return /* binding */ AddcarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addcar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addcar.component.html */ 54310);
/* harmony import */ var _addcar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcar.component.scss */ 45669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);











let AddcarComponent = class AddcarComponent {
    constructor(snackBar, formBuilder, http, router, serviciosprofile, loading, localstorage) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.serviciosprofile = serviciosprofile;
        this.loading = loading;
        this.localstorage = localstorage;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.form_truck = this.formBuilder.group({
                model: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                mark: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                unitnumber: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                color: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                licenseplate: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                detail: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                vehicletypes: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }]
            });
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.serviciosprofile.getFormtipovehiculos(idtoken, autenticacion_tipo).subscribe({
                next: vehicletypes => {
                    this.vehicletypes = vehicletypes;
                    this.vehicletypes = Object.values(this.vehicletypes);
                    this.vehicletypes = this.vehicletypes.filter(((valor) => valor !== 'OK_DATA'));
                    console.log(this.vehicletypes);
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
            this.serviciosprofile.getFormtipoDetalles(idtoken, autenticacion_tipo).subscribe({
                next: tipodetalles => {
                    this.tipodetalles = tipodetalles;
                    this.tipodetalles = Object.values(this.tipodetalles);
                    this.tipodetalles = this.tipodetalles.filter(((valor) => valor !== 'OK_DATA'));
                    console.log(this.tipodetalles);
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form_truck.valid) {
                this.loading.simpleLoader();
                var user = JSON.parse(yield this.localstorage.getData('usuario'));
                var idtoken = yield this.localstorage.getData('idtoken');
                var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
                var model = this.form_truck.get("model").value;
                var mark = this.form_truck.get("mark").value;
                var unitnumber = this.form_truck.get("unitnumber").value;
                var licenseplate = this.form_truck.get("licenseplate").value;
                var color = this.form_truck.get("color").value;
                var detail = this.form_truck.get("detail").value;
                var defaults = '0';
                var vehicletypes = this.form_truck.get('vehicletypes').value;
                this.http.post('https://washtt.com/v1_api_clientes_addcamion.php', {
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    email: user.email,
                    model: model,
                    mark: mark,
                    unitnumber: unitnumber,
                    color: color,
                    detail: detail,
                    defaults: defaults,
                    licenseplate: licenseplate,
                    vehicletypes: vehicletypes
                }).subscribe({
                    next: data => {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TRUCK':
                                this.router.navigate(['/tabs-cliente/profile/fleet']);
                                this.snackBar.open('The vehicle was successfully added', "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    },
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMessage = error.message;
                        console.error('There was an error!' + errorMessage);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Invalid or expired token,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("Please fill all  field", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    cancel() {
        this.router.navigate(['/tabs-cliente/profile/fleet']);
    }
};
AddcarComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_2__.ServiciosProfile },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
AddcarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-addcar',
        template: _raw_loader_addcar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addcar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddcarComponent);



/***/ }),

/***/ 20985:
/*!******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/addsite/addsite.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddsiteComponent": function() { return /* binding */ AddsiteComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addsite_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addsite.component.html */ 9095);
/* harmony import */ var _addsite_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addsite.component.scss */ 12666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);











let AddsiteComponent = class AddsiteComponent {
    constructor(snackBar, formBuilder, http, router, localstorage, loading, serviciosprofile) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.localstorage = localstorage;
        this.loading = loading;
        this.serviciosprofile = serviciosprofile;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.form_site = this.formBuilder.group({
                suite: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                street: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                address: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                zip: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                state: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
                city: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
            });
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.serviciosprofile.getFormciudades(idtoken, autenticacion_tipo).subscribe({
                next: cities => {
                    this.cities = cities;
                    this.cities = Object.values(this.cities);
                    this.cities = this.cities.filter(((valor) => valor !== 'OK_DATA'));
                    console.log(this.cities);
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
            this.serviciosprofile.getFormestados(idtoken, autenticacion_tipo).subscribe({
                next: estados => {
                    this.estados = estados;
                    this.estados = Object.values(this.estados);
                    this.estados = this.estados.filter(((valor) => valor !== 'OK_DATA'));
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form_site.valid) {
                this.loading.simpleLoader();
                var user = JSON.parse(yield this.localstorage.getData('usuario'));
                var idtoken = yield this.localstorage.getData('idtoken');
                var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
                var suite = this.form_site.get("suite").value;
                var street = this.form_site.get("street").value;
                var address = this.form_site.get("address").value;
                var zip = this.form_site.get("zip").value;
                var state = this.form_site.get("state").value;
                var city = this.form_site.get("city").value;
                var defaults = '0';
                this.http.post('https://washtt.com/v1_api_clientes_addsitio.php', {
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    email: user.email,
                    suite: suite,
                    street: street,
                    address: address,
                    state: state,
                    city: city,
                    zip: zip,
                    defaults: defaults
                }).subscribe({
                    next: data => {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.router.navigate(['/tabs-cliente/profile/locations']);
                                this.snackBar.open("Location added successfully ", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    },
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMessage = error.message;
                        console.error('There was an error!' + errorMessage);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Invalid or expired token,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
                console.log(this.form_site.value);
            }
            else {
                this.snackBar.open("Please fill all  field", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    cancel() {
        this.router.navigate(['/tabs-cliente/profile/locations']);
    }
};
AddsiteComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_3__.ServiciosProfile }
];
AddsiteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-addsite',
        template: _raw_loader_addsite_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addsite_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddsiteComponent);



/***/ }),

/***/ 69529:
/*!**************************************************************************!*\
  !*** ./src/app/tab-cliente-profile/billaddress/billaddress.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BilladdressComponent": function() { return /* binding */ BilladdressComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_billaddress_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./billaddress.component.html */ 86745);
/* harmony import */ var _billaddress_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billaddress.component.scss */ 92001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);











let BilladdressComponent = class BilladdressComponent {
    constructor(snackBar, formBuilder, router, localstorage, servicioprofile, http, loading) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.localstorage = localstorage;
        this.servicioprofile = servicioprofile;
        this.http = http;
        this.loading = loading;
        this.customertypes = [
            { valor: '', etiqueta: 'Select' },
            { valor: 1, etiqueta: 'Person' },
            { valor: 2, etiqueta: 'Company or fleet' }
        ];
        this.ver = false;
        this.xnombre = true;
        this.xfnombre = false;
        this.xapellido = true;
        this.xfapellido = false;
        this.xfullname = true;
        this.xffullname = false;
        this.xcustomer = true;
        this.xfcustomer = false;
        this.xempresa = true;
        this.xfempresa = false;
        this.xrif = true;
        this.xfrif = false;
        this.xcasa = true;
        this.xfcasa = false;
        this.xcalle = true;
        this.xfcalle = false;
        this.xdireccion = true;
        this.xfdireccion = false;
        this.xzip = true;
        this.xfzip = false;
        this.xestado = true;
        this.xfestado = false;
        this.xciudad = true;
        this.xfciudad = false;
        this.xtelefono = true;
        this.xftelefono = false;
        this.xcelular = true;
        this.xfcelular = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.doRefresh(null);
            this.reactiveForm();
            /*  var user = JSON.parse(await this.localstorage.getData('usuario'))
              var idtoken = await this.localstorage.getData('idtoken')
              var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
              this.loading.simpleLoader()
              this.servicioprofile.getFormciudades(idtoken , autenticacion_tipo).subscribe({
                next: cities => {this.cities = cities;
               
                  this.cities = Object.values(this.cities)
                 this.cities =  this.cities.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
              
                  console.log(this.cities)
                
                },
                error: error => {
                    
                  var errorMessage = error.message;
                  console.error('There was an error!' + errorMessage);
                  this.localstorage.clearData()
                  this.router.navigate(['/login'])
                  this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                  {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                  }
                  );
              }
              
              })
          
              this.servicioprofile.getFormestados(idtoken , autenticacion_tipo).subscribe({
                next: estados => {this.estados = estados;
               
                  this.estados = Object.values(this.estados)
                 this.estados =  this.estados.filter(((valor: string | any[]) => valor !== 'OK_DATA'))
              
                
                
                },
                error: error => {
                    
                  var errorMessage = error.message;
                  console.error('There was an error!' + errorMessage);
                  this.localstorage.clearData()
                  this.router.navigate(['/login'])
                  this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                  {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                  }
                  );
              }
              
              })
          
              if(user) {
          
                this.servicioprofile.getInfobill(idtoken,autenticacion_tipo,user.email).subscribe(
                  val => { var datos = val
                    this.loading.dismissLoader()
                    switch(datos.respuesta) {
            
                      case 'ERROR':
                        console.log(datos.mensaje)
                        this.localstorage.clearData()
                        this.router.navigate(['/login']);
                        
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                        {
                          horizontalPosition: "start",
                          verticalPosition: "top",
                        }
                        );
                      break;
                      case 'TOKEN ERROR':
                              this.localstorage.clearData()
                              this.router.navigate(['/login'])
                            this.snackBar.open("Invalid or expired token,please login again4", "Close",
                            {
                              horizontalPosition: "start",
                              verticalPosition: "top",
                            }
                            );
                            console.log(datos.mensaje);
                      break;
                    
                      case '200_OK':
                     console.log(datos)
            
                     this.apellido = datos.l_name
                     this.nombre = datos.f_name
          
                     var tipo = datos.client_type
                     switch(tipo){
                       case '1':
                        this.tipocliente = 'Person'
                        this.ver = false
                       break;
                       case '2':
                         this.tipocliente = 'Company or fleet'
                         this.ver = true
                       break;
                     }
                     this.empresa = datos.firma_name
                     this.rif = datos.firma_code
                     this.casa = datos.home
                     this.calle = datos.street_nr
                     this.direccion = datos.street
                     this.codigopostal = datos.zip
                     this.estado = datos.state
                     this.ciudad = datos.city
                     this.telefono = datos.phone
                     this.celular = datos.mobil_phone
                     this.fullname = datos.fullname
            
            break;
                    }
                  },
                  error => {
                    this.loading.dismissLoader()
                    console.error('There was an error!', error);
                    // borramos la informacion local
            this.localstorage.clearData()
            this.router.navigate(['/login']);
            
            this.snackBar.open("Sorry, an error occurred,please login again", "Close",
            {
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
                }
            
            
                )
              }
            else {
            
            // borramos la informacion local
            this.loading.dismissLoader()
            this.localstorage.clearData()
            this.router.navigate(['/login']);
            
            this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
            {
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
            
            }*/
        });
    }
    reactiveForm() {
        this.form_firtname = this.formBuilder.group({
            firstname: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_lastname = this.formBuilder.group({
            lastname: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_fullname = this.formBuilder.group({
            fullname: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_customer = this.formBuilder.group({
            customer: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_empresa = this.formBuilder.group({
            empresa: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_rif = this.formBuilder.group({
            rif: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_suite = this.formBuilder.group({
            casa: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_calle = this.formBuilder.group({
            calle: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_direccion = this.formBuilder.group({
            direccion: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_zip = this.formBuilder.group({
            zip: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_state = this.formBuilder.group({
            estado: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_city = this.formBuilder.group({
            ciudad: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_phone = this.formBuilder.group({
            phone: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
        this.form_mobilphone = this.formBuilder.group({
            mobil: [, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }],
        });
    }
    cambiar($event) {
        if ($event.target.value == 2) {
            this.ver = true;
            /*this.form_empresa.get("empresa").setValidators([Validators.required]);
            this.form_empresa.get("empresa").updateValueAndValidity();
            
            this.form_rif.get("rif").setValidators([Validators.required]);
            this.form_rif.get("rif").updateValueAndValidity();*/
        }
        else {
            this.ver = false;
            /*  this.form_empresa.get("empresa").clearValidators();
             this.form_empresa.get("empresa").updateValueAndValidity();
             
             this.form_rif.get("rif").clearValidators();
             this.form_rif.get("rif").updateValueAndValidity();*/
        }
    }
    edit_firstname() {
        this.xnombre = false;
        this.xfnombre = true;
    }
    edit_lastname() {
        this.xapellido = false;
        this.xfapellido = true;
    }
    edit_fullname() {
        this.xfullname = false;
        this.xffullname = true;
    }
    edit_customer() {
        this.xcustomer = false;
        this.xfcustomer = true;
    }
    edit_empresa() {
        this.xempresa = false;
        this.xfempresa = true;
    }
    edit_rif() {
        this.xrif = false;
        this.xfrif = true;
    }
    edit_casa() {
        this.xcasa = false;
        this.xfcasa = true;
    }
    edit_calle() {
        this.xcalle = false;
        this.xfcalle = true;
    }
    edit_direccion() {
        this.xdireccion = false;
        this.xfdireccion = true;
    }
    edit_zip() {
        this.xzip = false;
        this.xfzip = true;
    }
    edit_estado() {
        this.xestado = false;
        this.xfestado = true;
    }
    edit_ciudad() {
        this.xciudad = false;
        this.xfciudad = true;
    }
    edit_telefono() {
        this.xtelefono = false;
        this.xftelefono = true;
    }
    edit_celular() {
        this.xcelular = false;
        this.xfcelular = true;
    }
    cancel_firstname() {
        this.xnombre = true;
        this.xfnombre = false;
    }
    cancel_lastname() {
        this.xapellido = true;
        this.xfapellido = false;
    }
    cancel_fullname() {
        this.xfullname = true;
        this.xffullname = false;
    }
    cancel_customer() {
        this.xcustomer = true;
        this.xfcustomer = false;
    }
    cancel_empresa() {
        this.xempresa = true;
        this.xfempresa = false;
    }
    cancel_rif() {
        this.xrif = true;
        this.xfrif = false;
    }
    cancel_casa() {
        this.xcasa = true;
        this.xfcasa = false;
    }
    cancel_calle() {
        this.xcalle = true;
        this.xfcalle = false;
    }
    cancel_direccion() {
        this.xdireccion = true;
        this.xfdireccion = false;
    }
    cancel_zip() {
        this.xzip = true;
        this.xfzip = false;
    }
    cancel_estado() {
        this.xestado = true;
        this.xfestado = false;
    }
    cancel_ciudad() {
        this.xciudad = true;
        this.xfciudad = false;
    }
    cancel_telefono() {
        this.xtelefono = true;
        this.xftelefono = false;
    }
    cancel_celular() {
        this.xcelular = true;
        this.xfcelular = false;
    }
    submit_firstname() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_firtname.valid) {
                this.loading.simpleLoader();
                var nombre = this.form_firtname.get("firstname").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'nombre',
                    valor: nombre
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.nombre = nombre;
                                this.xnombre = true;
                                this.xfnombre = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_lastname() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_lastname.valid) {
                this.loading.simpleLoader();
                var valor = this.form_lastname.get("lastname").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'apellido',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.apellido = valor;
                                this.xapellido = true;
                                this.xfapellido = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_fullname() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_fullname.valid) {
                this.loading.simpleLoader();
                var valor = this.form_fullname.get("fullname").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'fullname',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.fullname = valor;
                                this.xfullname = true;
                                this.xffullname = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_customer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_customer.valid) {
                this.loading.simpleLoader();
                var valor = this.form_customer.get("customer").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'customer',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                var tipo = valor;
                                switch (tipo) {
                                    case 1:
                                        this.tipocliente = 'Person';
                                        this.ver = false;
                                        break;
                                    case 2:
                                        this.tipocliente = 'Company or fleet';
                                        this.ver = true;
                                        break;
                                }
                                this.xcustomer = true;
                                this.xfcustomer = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_empresa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_empresa.valid) {
                this.loading.simpleLoader();
                var valor = this.form_empresa.get("empresa").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'empresa',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.empresa = valor;
                                this.xempresa = true;
                                this.xfempresa = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_rif() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_rif.valid) {
                this.loading.simpleLoader();
                var valor = this.form_rif.get("rif").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'rif',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.rif = valor;
                                this.xrif = true;
                                this.xfrif = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_casa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_suite.valid) {
                this.loading.simpleLoader();
                var valor = this.form_suite.get("casa").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'casa',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.casa = valor;
                                this.xcasa = true;
                                this.xfcasa = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_calle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_calle.valid) {
                this.loading.simpleLoader();
                var valor = this.form_calle.get("calle").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'calle',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.calle = valor;
                                this.xcalle = true;
                                this.xfcalle = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_direccion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_calle.valid) {
                this.loading.simpleLoader();
                var valor = this.form_direccion.get("direccion").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'direccion',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.direccion = valor;
                                this.xdireccion = true;
                                this.xfdireccion = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_zip() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_zip.valid) {
                this.loading.simpleLoader();
                var valor = this.form_zip.get("zip").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'zip',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.codigopostal = valor;
                                this.xzip = true;
                                this.xfzip = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_estado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_state.valid) {
                this.loading.simpleLoader();
                var valor = this.form_state.get("estado").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'estado',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.estado = valor;
                                this.xestado = true;
                                this.xfestado = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_ciudad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_city.valid) {
                this.loading.simpleLoader();
                var valor = this.form_city.get("ciudad").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'ciudad',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.ciudad = valor;
                                this.xciudad = true;
                                this.xfciudad = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("this information is required", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_telefono() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_phone.valid) {
                this.loading.simpleLoader();
                var valor = this.form_phone.get("phone").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'telefono',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.telefono = valor;
                                this.xtelefono = true;
                                this.xftelefono = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("Incomplete phone", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    submit_celular() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (this.form_mobilphone.valid) {
                this.loading.simpleLoader();
                var valor = this.form_mobilphone.get("mobil").value;
                this.http.post('https://washtt.com/v1_api_clientes_editinfobill.php', {
                    email: user.email,
                    idtoken: idtoken,
                    autenticacion_tipo: autenticacion_tipo,
                    campo: 'celular',
                    valor: valor
                }).subscribe({
                    next: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.loading.dismissLoader();
                        switch (data.respuesta) {
                            case 'ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                            case 'TOKEN ERROR':
                                this.localstorage.clearData();
                                this.router.navigate(['/login']);
                                this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                console.log(data.mensaje);
                                break;
                            case 'OK_TODO':
                                this.celular = valor;
                                this.xcelular = true;
                                this.xfcelular = false;
                                this.snackBar.open("The data was updated successfully", "Close", {
                                    horizontalPosition: "start",
                                    verticalPosition: "top",
                                });
                                break;
                        }
                    }),
                    error: error => {
                        this.loading.dismissLoader();
                        var errorMensaje = error.message;
                        console.error('There was an error!', errorMensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                    }
                });
            }
            else {
                this.snackBar.open("incomplete mobil phone", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    doRefresh($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.loading.simpleLoader();
            this.servicioprofile.getFormciudades(idtoken, autenticacion_tipo).subscribe({
                next: cities => {
                    this.cities = cities;
                    this.cities = Object.values(this.cities);
                    this.cities = this.cities.filter(((valor) => valor !== 'OK_DATA'));
                    console.log(this.cities);
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
            this.servicioprofile.getFormestados(idtoken, autenticacion_tipo).subscribe({
                next: estados => {
                    this.estados = estados;
                    this.estados = Object.values(this.estados);
                    this.estados = this.estados.filter(((valor) => valor !== 'OK_DATA'));
                },
                error: error => {
                    var errorMessage = error.message;
                    console.error('There was an error!' + errorMessage);
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                }
            });
            if (user) {
                this.servicioprofile.getInfobill(idtoken, autenticacion_tipo, user.email).subscribe(val => {
                    var datos = val;
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    switch (datos.respuesta) {
                        case 'ERROR':
                            console.log(datos.mensaje);
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            break;
                        case 'TOKEN ERROR':
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Invalid or expired token,please login again4", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(datos.mensaje);
                            break;
                        case '200_OK':
                            console.log(datos);
                            this.apellido = datos.l_name;
                            this.nombre = datos.f_name;
                            var tipo = datos.client_type;
                            switch (tipo) {
                                case '1':
                                    this.tipocliente = 'Person';
                                    this.ver = false;
                                    break;
                                case '2':
                                    this.tipocliente = 'Company or fleet';
                                    this.ver = true;
                                    break;
                            }
                            this.empresa = datos.firma_name;
                            this.rif = datos.firma_code;
                            this.casa = datos.home;
                            this.calle = datos.street_nr;
                            this.direccion = datos.street;
                            this.codigopostal = datos.zip;
                            this.estado = datos.state;
                            this.ciudad = datos.city;
                            this.telefono = datos.phone;
                            this.celular = datos.mobil_phone;
                            this.fullname = datos.fullname;
                            break;
                    }
                }, error => {
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    console.error('There was an error!', error);
                    // borramos la informacion local
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                });
            }
            else {
                // borramos la informacion local
                this.loading.dismissLoader();
                if ($event)
                    $event.target.complete();
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again6", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
};
BilladdressComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_3__.ServiciosProfile },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
BilladdressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-billaddress',
        template: _raw_loader_billaddress_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_billaddress_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BilladdressComponent);



/***/ }),

/***/ 83368:
/*!**************************************************************!*\
  !*** ./src/app/tab-cliente-profile/fleet/fleet.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FleetComponent": function() { return /* binding */ FleetComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_fleet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fleet.component.html */ 33731);
/* harmony import */ var _fleet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet.component.scss */ 93307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);











let FleetComponent = class FleetComponent {
    constructor(servicioprofile, localstorage, router, snackBar, loading) {
        this.servicioprofile = servicioprofile;
        this.localstorage = localstorage;
        this.router = router;
        this.snackBar = snackBar;
        this.loading = loading;
        this.columnsToDisplay = ['unit_number', 'type_vehicle', 'Expand'];
        this.itemTabla = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.doRefresh(null);
        });
    }
    /*  async ionViewWillEnter() {
      
        var user = JSON.parse(await this.localstorage.getData('usuario'))
          var idtoken = await this.localstorage.getData('idtoken')
          var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
      
          if(user) {
            this.loading.simpleLoader()
        this.servicioprofile.getFleet(idtoken,autenticacion_tipo,user.email).subscribe(
          val => { var datos = val
            this.loading.dismissLoader()
            switch(datos.respuesta) {
    
              case 'ERROR':
                console.log(datos.mensaje)
                this.localstorage.clearData()
                this.router.navigate(['/login']);
                
                this.snackBar.open("Sorry, an error occurred,please login again", "Close",
                {
                  horizontalPosition: "start",
                  verticalPosition: "top",
                }
                );
              break;
            
              case 'TOKEN ERROR':
                this.localstorage.clearData()
                this.router.navigate(['/login'])
              this.snackBar.open("Invalid or expired token,please login again", "Close",
              {
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              );
              console.log(datos.mensaje);
              break;
              
              case '200_OK':
    
              
              this.fleet = Object.values(datos)
              this.fleet =  this.fleet.filter(((valor: string | any[]) => valor !== '200_OK'))
    
              this.itemTabla.data = this.fleet
              break;
    
              
            }
    
    
    
          },
          error => {
            this.loading.dismissLoader()
            console.error('There was an error!', error);
              // borramos la informacion local
        this.localstorage.clearData()
        this.router.navigate(['/login']);
        
        this.snackBar.open("Sorry, an error occurred,please login again6", "Close",
        {
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
        }
    
    
        )
    
      }
    
      else {
        // borramos la informacion local
        this.localstorage.clearData()
        this.router.navigate(['/login']);
        
        this.snackBar.open("Sorry, an error occurred,please login again", "Close",
        {
          horizontalPosition: "start",
          verticalPosition: "top",
        }
        );
      }
      }*/
    doRefresh($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (user) {
                this.loading.simpleLoader();
                this.servicioprofile.getFleet(idtoken, autenticacion_tipo, user.email).subscribe(val => {
                    var datos = val;
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    switch (datos.respuesta) {
                        case 'ERROR':
                            console.log(datos.mensaje);
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            break;
                        case 'TOKEN ERROR':
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(datos.mensaje);
                            break;
                        case '200_OK':
                            this.fleet = Object.values(datos);
                            this.fleet = this.fleet.filter(((valor) => valor !== '200_OK'));
                            this.itemTabla.data = this.fleet;
                            break;
                    }
                }, error => {
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    console.error('There was an error!', error);
                    // borramos la informacion local
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again6", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                });
            }
            else {
                // borramos la informacion local
                if ($event)
                    $event.target.complete();
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    Borrar(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.simpleLoader();
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.servicioprofile.deleteTruck(idtoken, autenticacion_tipo, id, user.email).subscribe(val => {
                var datos = val;
                this.loading.dismissLoader();
                switch (datos.respuesta) {
                    case 'ERROR':
                        console.log(datos.mensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                    case 'TOKEN ERROR':
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Invalid or expired token,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        console.log(datos.mensaje);
                        break;
                    case 'NO BORRAR':
                        this.snackBar.open("Sorry, Cannot be deleted: your fleet must contain at least one vehicle ", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                    case '200_OK':
                        this.router.navigate(['/tabs-cliente/profile']);
                        this.snackBar.open('Vehicle deleted successfully ', "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                }
            }, error => {
                this.loading.dismissLoader();
                console.error('There was an error!', error);
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            });
        });
    }
    add() {
        this.router.navigate(['tabs-cliente/profile/addcar/']);
    }
};
FleetComponent.ctorParameters = () => [
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_2__.ServiciosProfile },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
FleetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-fleet',
        template: _raw_loader_fleet_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
            ])
        ],
        styles: [_fleet_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FleetComponent);



/***/ }),

/***/ 89939:
/*!**********************************************************************!*\
  !*** ./src/app/tab-cliente-profile/locations/locations.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsComponent": function() { return /* binding */ LocationsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./locations.component.html */ 35353);
/* harmony import */ var _locations_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations.component.scss */ 23042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios.profile */ 19646);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/storage.service */ 86945);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading.services */ 68369);











let LocationsComponent = class LocationsComponent {
    constructor(servicioprofile, localstorage, router, snackBar, loading) {
        this.servicioprofile = servicioprofile;
        this.localstorage = localstorage;
        this.router = router;
        this.snackBar = snackBar;
        this.loading = loading;
        this.columnsToDisplay = ['suite', 'zip', 'Expand'];
        this.itemTabla = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    }
    ngOnInit() {
        this.doRefresh(null);
    }
    /*async ionViewWillEnter() {
     
      var user = JSON.parse(await this.localstorage.getData('usuario'))
      var idtoken = await this.localstorage.getData('idtoken')
      var autenticacion_tipo = await this.localstorage.getData('autenticacion_tipo')
  
      if(user) {
        this.loading.simpleLoader()
      this.servicioprofile.getLocations(idtoken,autenticacion_tipo,user.email).subscribe(
        val => { var datos = val
          this.loading.dismissLoader()
          switch(datos.respuesta) {
  
            case 'ERROR':
              console.log(datos.mensaje)
              this.localstorage.clearData()
              this.router.navigate(['/login']);
              
              this.snackBar.open("Sorry, an error occurred,please login again", "Close",
              {
                horizontalPosition: "start",
                verticalPosition: "top",
              }
              );
            break;
          
            case 'TOKEN ERROR':
              this.localstorage.clearData()
              this.router.navigate(['/login'])
            this.snackBar.open("Invalid or expired token,please login again", "Close",
            {
              horizontalPosition: "start",
              verticalPosition: "top",
            }
            );
            console.log(datos.mensaje);
            break;
          
            case '200_OK':
  
            
            this.locations = Object.values(datos)
            this.locations =  this.locations.filter(((valor: string | any[]) => valor !== '200_OK'))
  
            this.itemTabla.data = this.locations
  
  
  
            break;
          }
  
  
  
        },
        error => {
          this.loading.dismissLoader()
          console.error('There was an error!', error);
            // borramos la informacion local
      this.localstorage.clearData()
      this.router.navigate(['/login']);
      
      this.snackBar.open("Sorry, an error occurred,please login again", "Close",
      {
        horizontalPosition: "start",
        verticalPosition: "top",
      }
      );
      }
  
  
      )
    }
  
    else {
  
    // borramos la informacion local
    this.localstorage.clearData()
    this.router.navigate(['/login']);
    
    this.snackBar.open("Sorry, an error occurred,please login again", "Close",
    {
      horizontalPosition: "start",
      verticalPosition: "top",
    }
    );
    }
  
    }*/
    doRefresh($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var user = JSON.parse(yield this.localstorage.getData('usuario'));
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            if (user) {
                this.loading.simpleLoader();
                this.servicioprofile.getLocations(idtoken, autenticacion_tipo, user.email).subscribe(val => {
                    var datos = val;
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    switch (datos.respuesta) {
                        case 'ERROR':
                            console.log(datos.mensaje);
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            break;
                        case 'TOKEN ERROR':
                            this.localstorage.clearData();
                            this.router.navigate(['/login']);
                            this.snackBar.open("Invalid or expired token,please login again", "Close", {
                                horizontalPosition: "start",
                                verticalPosition: "top",
                            });
                            console.log(datos.mensaje);
                            break;
                        case '200_OK':
                            this.locations = Object.values(datos);
                            this.locations = this.locations.filter(((valor) => valor !== '200_OK'));
                            this.itemTabla.data = this.locations;
                            break;
                    }
                }, error => {
                    this.loading.dismissLoader();
                    if ($event)
                        $event.target.complete();
                    console.error('There was an error!', error);
                    // borramos la informacion local
                    this.localstorage.clearData();
                    this.router.navigate(['/login']);
                    this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                        horizontalPosition: "start",
                        verticalPosition: "top",
                    });
                });
            }
            else {
                if ($event)
                    $event.target.complete();
                // borramos la informacion local
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            }
        });
    }
    Borrar(id, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.simpleLoader();
            var idtoken = yield this.localstorage.getData('idtoken');
            var autenticacion_tipo = yield this.localstorage.getData('autenticacion_tipo');
            this.servicioprofile.deleteSitio(idtoken, autenticacion_tipo, id, status).subscribe(val => {
                var datos = val;
                this.loading.dismissLoader();
                switch (datos.respuesta) {
                    case 'ERROR':
                        console.log(datos.mensaje);
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                    case 'TOKEN ERROR':
                        this.localstorage.clearData();
                        this.router.navigate(['/login']);
                        this.snackBar.open("Invalid or expired token,please login again", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        console.log(datos.mensaje);
                        break;
                    case 'NO BORRAR':
                        this.snackBar.open("Sorry, Cannot be deleted: the site is your current billing address", "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                    case '200_OK':
                        this.router.navigate(['/tabs-cliente/profile']);
                        this.snackBar.open('Location deleted successfully ', "Close", {
                            horizontalPosition: "start",
                            verticalPosition: "top",
                        });
                        break;
                }
            }, error => {
                this.loading.dismissLoader();
                console.error('There was an error!', error);
                this.localstorage.clearData();
                this.router.navigate(['/login']);
                this.snackBar.open("Sorry, an error occurred,please login again", "Close", {
                    horizontalPosition: "start",
                    verticalPosition: "top",
                });
            });
        });
    }
    add() {
        this.router.navigate(['tabs-cliente/profile/addsitio/']);
    }
};
LocationsComponent.ctorParameters = () => [
    { type: _servicios_profile__WEBPACK_IMPORTED_MODULE_2__.ServiciosProfile },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar },
    { type: _shared_loading_services__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
LocationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-locations',
        template: _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
            ])
        ],
        styles: [_locations_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationsComponent);



/***/ }),

/***/ 24:
/*!******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/profile/profile.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 99983);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 55774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileComponent);



/***/ }),

/***/ 19646:
/*!**********************************************************!*\
  !*** ./src/app/tab-cliente-profile/servicios.profile.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosProfile": function() { return /* binding */ ServiciosProfile; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let ServiciosProfile = class ServiciosProfile {
    constructor(http) {
        this.http = http;
    }
    getFleet(idtoken, autenticacion_tipo, email) {
        return this.http.post('https://washtt.com/v1_api_clientes_getfleetcliente.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            email: email
        });
    }
    getLocations(idtoken, autenticacion_tipo, email) {
        return this.http.post('https://washtt.com/v1_api_clientes_getlocationscliente.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            email: email
        });
    }
    getInfobill(idtoken, autenticacion_tipo, email) {
        return this.http.post('https://washtt.com/v1_api_clientes_getinfobill.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            email: email
        });
    }
    getDataCuenta(idtoken, autenticacion_tipo, email) {
        return this.http.post('https://washtt.com/v1_api_clientes_getinfocuenta.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            email: email
        });
    }
    deleteTruck(idtoken, autenticacion_tipo, idvehiculo, email) {
        return this.http.post('https://washtt.com/v1_api_clientes_deletevehiculocliente.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            idvehiculo: idvehiculo,
            email: email
        });
    }
    deleteSitio(idtoken, autenticacion_tipo, idsitio, status) {
        return this.http.post('https://washtt.com/v1_api_clientes_deletesitiocliente.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            idsitio: idsitio,
            status: status
        });
    }
    /*getFormtipovehiculos(uid) {
       return this.http.post<any>('https://washtt.com/apiformtipovehiculos.php', uid);
    }*/
    getFormciudades(idtoken, autenticacion_tipo) {
        return this.http.post('https://washtt.com/v1_api_clientes_formciudades.php', { idtoken: idtoken, autenticacion_tipo: autenticacion_tipo });
    }
    getFormestados(idtoken, autenticacion_tipo) {
        return this.http.post('https://washtt.com/v1_api_clientes_formestados.php', { idtoken: idtoken, autenticacion_tipo: autenticacion_tipo });
    }
    getFormtipovehiculos(idtoken, autenticacion_tipo) {
        return this.http.post('https://washtt.com/v1_api_clientes_formtipovehiculos.php', { idtoken: idtoken, autenticacion_tipo: autenticacion_tipo });
    }
    getFormtipoDetalles(idtoken, autenticacion_tipo) {
        return this.http.post('https://washtt.com/v1_api_clientes_formtipodetallesvehiculo.php', { idtoken: idtoken, autenticacion_tipo: autenticacion_tipo });
    }
    updateImage(idtoken, autenticacion_tipo, email, image) {
        return this.http.post('https://washtt.com/v1_api_clientes_updatefotocliente.php', {
            idtoken: idtoken,
            autenticacion_tipo: autenticacion_tipo,
            email: email,
            image: image
        });
    }
};
ServiciosProfile.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ServiciosProfile = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ServiciosProfile);



/***/ }),

/***/ 7564:
/*!***************************************************************************!*\
  !*** ./src/app/tab-cliente-profile/tab-cliente-profile-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabClienteProfilePageRoutingModule": function() { return /* binding */ TabClienteProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab_cliente_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-cliente-profile.page */ 66223);
/* harmony import */ var _fleet_fleet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleet/fleet.component */ 83368);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 24);
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locations/locations.component */ 89939);
/* harmony import */ var _billaddress_billaddress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billaddress/billaddress.component */ 69529);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ 10014);
/* harmony import */ var _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addsite/addsite.component */ 20985);
/* harmony import */ var _addcar_addcar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addcar/addcar.component */ 79335);











const routes = [
    {
        path: '',
        component: _tab_cliente_profile_page__WEBPACK_IMPORTED_MODULE_0__.TabClienteProfilePage,
        children: [
            { path: 'fleet', component: _fleet_fleet_component__WEBPACK_IMPORTED_MODULE_1__.FleetComponent },
            { path: 'nav-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent },
            { path: 'locations', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_3__.LocationsComponent },
            { path: 'billaddress', component: _billaddress_billaddress_component__WEBPACK_IMPORTED_MODULE_4__.BilladdressComponent },
            { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent },
            { path: 'addsitio', component: _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_6__.AddsiteComponent },
            { path: 'addcar', component: _addcar_addcar_component__WEBPACK_IMPORTED_MODULE_7__.AddcarComponent },
            {
                path: '',
                redirectTo: '/tabs-cliente/profile/nav-profile',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs-cliente/profile/nav-profile',
    },
];
let TabClienteProfilePageRoutingModule = class TabClienteProfilePageRoutingModule {
};
TabClienteProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    })
], TabClienteProfilePageRoutingModule);



/***/ }),

/***/ 84013:
/*!*******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/tab-cliente-profile.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabClienteProfilePageModule": function() { return /* binding */ TabClienteProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tab_cliente_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-cliente-profile-routing.module */ 7564);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _servicios_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.profile */ 19646);
/* harmony import */ var _shared_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/database-service */ 21904);
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/storage.service */ 86945);
/* harmony import */ var _tab_cliente_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-cliente-profile.page */ 66223);
/* harmony import */ var _fleet_fleet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fleet/fleet.component */ 83368);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 24);
/* harmony import */ var _billaddress_billaddress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billaddress/billaddress.component */ 69529);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account.component */ 10014);
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locations/locations.component */ 89939);
/* harmony import */ var _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addsite/addsite.component */ 20985);
/* harmony import */ var _addcar_addcar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addcar/addcar.component */ 79335);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ 22014);







// servicio



// components








// Angular Material








// Form

// Other




let TabClienteProfilePageModule = class TabClienteProfilePageModule {
};
TabClienteProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule,
            _tab_cliente_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabClienteProfilePageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_28__.IonicStorageModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__.MatSlideToggleModule
        ],
        declarations: [
            _tab_cliente_profile_page__WEBPACK_IMPORTED_MODULE_4__.TabClienteProfilePage,
            _fleet_fleet_component__WEBPACK_IMPORTED_MODULE_5__.FleetComponent,
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent,
            _locations_locations_component__WEBPACK_IMPORTED_MODULE_9__.LocationsComponent,
            _billaddress_billaddress_component__WEBPACK_IMPORTED_MODULE_7__.BilladdressComponent,
            _account_account_component__WEBPACK_IMPORTED_MODULE_8__.AccountComponent,
            _addsite_addsite_component__WEBPACK_IMPORTED_MODULE_10__.AddsiteComponent,
            _addcar_addcar_component__WEBPACK_IMPORTED_MODULE_11__.AddcarComponent,
        ],
        providers: [_servicios_profile__WEBPACK_IMPORTED_MODULE_1__.ServiciosProfile, _shared_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService, _shared_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService, _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_12__.Camera, _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File, _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__.Chooser]
    })
], TabClienteProfilePageModule);



/***/ }),

/***/ 66223:
/*!*****************************************************************!*\
  !*** ./src/app/tab-cliente-profile/tab-cliente-profile.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabClienteProfilePage": function() { return /* binding */ TabClienteProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab_cliente_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab-cliente-profile.page.html */ 58345);
/* harmony import */ var _tab_cliente_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-cliente-profile.page.scss */ 78720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabClienteProfilePage = class TabClienteProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
TabClienteProfilePage.ctorParameters = () => [];
TabClienteProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab-cliente-profile',
        template: _raw_loader_tab_cliente_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab_cliente_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabClienteProfilePage);



/***/ }),

/***/ 42023:
/*!********************************************************************!*\
  !*** ./src/app/tab-cliente-profile/account/account.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);\n  overflow: visible;\n  margin: 50px 0 24px;\n  position: relative;\n  padding-top: 60px;\n}\nion-card .img-wrapper {\n  position: absolute;\n  left: 50%;\n  top: -30px;\n  transform: translateX(-50%);\n}\nion-card .img-wrapper img {\n  border-radius: 10px;\n  width: 80px;\n  height: 80px;\n}\nion-card .img-wrapper ion-button {\n  --border-width: 1px;\n  --border-color: var(--ion-color-light-shade);\n  --border-style: solid;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  right: -10px;\n  bottom: -10px;\n}\nion-card .img-wrapper ion-button ion-icon {\n  width: 14px;\n  height: 14px;\n}\nion-card .etiquetas {\n  color: black;\n}\n.cancel {\n  background-color: #cb033c !important;\n  color: #fff;\n  border-radius: 5px;\n}\n.pen {\n  color: #cb033c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUNOO0FBQU07RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFDTTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFEUjtBQUdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFEVjtBQU9JO0VBRUUsWUFBQTtBQU5OO0FBV0U7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0E7RUFDSSx5QkFBQTtBQVJKIiwiZmlsZSI6ImFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1hcmdpbjogNTBweCAwIDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICBcbiAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiAtMzBweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICAuZXRpcXVldGFzIHtcblxuICAgICAgY29sb3I6YmxhY2tcbiAgfVxuXG4gIH1cblxuICAuY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMzNjICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1cyA6NXB4O1xufVxuXG4ucGVuIHtcbiAgICBjb2xvcjogI2NiMDMzYyAhaW1wb3J0YW50O1xufVxuICAiXX0= */");

/***/ }),

/***/ 45669:
/*!******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/addcar/addcar.component.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addcar {\n  background-color: #cea907 !important;\n  border-radius: unset !important;\n  box-shadow: none;\n}\n\nion-content {\n  --ion-background-color:#cea907;\n}\n\n.addcar-continuar {\n  background-color: #cb033c;\n  width: 100%;\n}\n\n.addcar-cancel {\n  background-color: #142f5f;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVHO0VBQ0MsOEJBQUE7QUFDSjs7QUFFRTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVFO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiYWRkY2FyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGNhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlYTkwNyAhaW1wb3J0YW50OyBcbiAgICBib3JkZXItcmFkaXVzOiAgdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgfVxuICBcbiAgIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2NlYTkwNztcbiAgfVxuICBcbiAgLmFkZGNhci1jb250aW51YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IwMzNjO1xuICB3aWR0aDogMTAwJVxuICB9XG4gIFxuICAuYWRkY2FyLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDJmNWY7XG4gIHdpZHRoOiAxMDAlXG4gIH0iXX0= */");

/***/ }),

/***/ 12666:
/*!********************************************************************!*\
  !*** ./src/app/tab-cliente-profile/addsite/addsite.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addsite {\n  background-color: #cea907 !important;\n  border-radius: unset !important;\n  box-shadow: none;\n}\n\nion-content {\n  --ion-background-color:#cea907;\n}\n\n.addsite-continuar {\n  background-color: #cb033c;\n  width: 100%;\n}\n\n.addsite-cancel {\n  background-color: #142f5f;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRztFQUNDLDhCQUFBO0FBQ0o7O0FBRUU7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFRTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImFkZHNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkc2l0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlYTkwNyAhaW1wb3J0YW50OyBcbiAgICBib3JkZXItcmFkaXVzOiAgdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgfVxuICBcbiAgIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2NlYTkwNztcbiAgfVxuICBcbiAgLmFkZHNpdGUtY29udGludWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiMDMzYztcbiAgd2lkdGg6IDEwMCVcbiAgfVxuICBcbiAgLmFkZHNpdGUtY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MmY1ZjtcbiAgd2lkdGg6IDEwMCVcbiAgfSJdfQ== */");

/***/ }),

/***/ 92001:
/*!****************************************************************************!*\
  !*** ./src/app/tab-cliente-profile/billaddress/billaddress.component.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".etiquetas {\n  color: black;\n}\n\n::ng-deep .mat-select-value {\n  color: #cb033c !important;\n}\n\n.cancel {\n  background-color: #cb033c !important;\n  color: #fff;\n  border-radius: 5px;\n}\n\n.pen {\n  color: #cb033c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxhZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKIiwiZmlsZSI6ImJpbGxhZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV0aXF1ZXRhcyB7XG5cbiAgICBjb2xvcjpibGFja1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiAjY2IwMzNjICFpbXBvcnRhbnQ7XG59XG5cbi5jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjAzM2MgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzIDo1cHg7XG59XG5cbi5wZW4ge1xuICAgIGNvbG9yOiAjY2IwMzNjICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 93307:
/*!****************************************************************!*\
  !*** ./src/app/tab-cliente-profile/fleet/fleet.component.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #142f5f;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  box-sizing: border-box;\n  background: #f2eae1;\n  color: #142f5f;\n  padding: 10px;\n  border-radius: 4px;\n  font-size: 14px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  text-align: justify;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  text-align: center;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.delete {\n  width: 100%;\n  background: #142f5f !important;\n  margin-bottom: 5px;\n}\n\n.ticket {\n  text-align: center;\n  margin: unset;\n}\n\n.tickets {\n  text-align: left;\n  margin: unset;\n  color: #cb033c;\n}\n\n::ng-deep .mat-table tbody {\n  background: #cb033c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFFSixrQkFBQTtFQUNBLGVBQUE7RUFFQSwrR0FBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBRUUsa0JBQUE7QUFESjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFFRSxXQUFBO0VBQ0EsOEJBQUE7RUFDRSxrQkFBQTtBQUpKOztBQU9BO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0FBTEY7O0FBUUE7RUFFRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTkY7O0FBVUE7RUFFRSw4QkFBQTtBQVJGIiwiZmlsZSI6ImZsZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE0MmY1ZjtcbiAgfVxuICBcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxuICAgIGJhY2tncm91bmQ6ICNmMmVhZTE7XG4gICAgY29sb3I6ICMxNDJmNWY7XG4gICAgcGFkZGluZzogMTBweDsgIFxuXG5ib3JkZXItcmFkaXVzOiA0cHg7XG5mb250LXNpemU6IDE0cHg7XG4td2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbmJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVsZXRlIHtcblxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE0MmY1ZiAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aWNrZXQge1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiB1bnNldDtcbn1cblxuLnRpY2tldHMge1xuXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogdW5zZXQ7XG4gIGNvbG9yOiAjY2IwMzNjO1xuXG59XG5cbjo6bmctZGVlcCAgLm1hdC10YWJsZSB0Ym9keSB7XG5cbiAgYmFja2dyb3VuZDogI2NiMDMzYyAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ 23042:
/*!************************************************************************!*\
  !*** ./src/app/tab-cliente-profile/locations/locations.component.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #142f5f;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  box-sizing: border-box;\n  background: #f2eae1;\n  color: #142f5f;\n  padding: 10px;\n  border-radius: 4px;\n  font-size: 14px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  text-align: justify;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  text-align: center;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.delete {\n  width: 100%;\n  background: #142f5f !important;\n  margin-bottom: 5px;\n}\n\n.ticket {\n  text-align: center;\n  margin: unset;\n}\n\n.tickets {\n  text-align: left;\n  margin: unset;\n  color: #cb033c;\n}\n\n::ng-deep .mat-table tbody {\n  background: #cb033c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBRUosa0JBQUE7RUFDQSxlQUFBO0VBRUEsK0dBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFHRTtFQUVFLGtCQUFBO0FBREo7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBRUUsV0FBQTtFQUNBLDhCQUFBO0VBQ0Usa0JBQUE7QUFKSjs7QUFRQTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVNBO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVdBO0VBRUUsOEJBQUE7QUFURiIsImZpbGUiOiJsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQyZjVmO1xuICB9XG4gIFxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgYmFja2dyb3VuZDogI2YyZWFlMTtcbiAgICBjb2xvcjogIzE0MmY1ZjtcbiAgICBwYWRkaW5nOiAxMHB4OyAgXG5cbmJvcmRlci1yYWRpdXM6IDRweDtcbmZvbnQtc2l6ZTogMTRweDtcbi13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG5cbnRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZWxldGUge1xuXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTQyZjVmICAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4udGlja2V0IHtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogdW5zZXQ7XG59XG5cbi50aWNrZXRzIHtcblxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IHVuc2V0O1xuICBjb2xvcjogI2NiMDMzYztcblxufVxuXG46Om5nLWRlZXAgIC5tYXQtdGFibGUgdGJvZHkge1xuXG4gIGJhY2tncm91bmQ6ICNjYjAzM2MgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 55774:
/*!********************************************************************!*\
  !*** ./src/app/tab-cliente-profile/profile/profile.component.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".figura {\n  color: f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWd1cmEge1xuICAgIGNvbG9yOiBmMmYyZjI7XG59Il19 */");

/***/ }),

/***/ 78720:
/*!*******************************************************************!*\
  !*** ./src/app/tab-cliente-profile/tab-cliente-profile.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItY2xpZW50ZS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 55619:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/account/account.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >  \n  <ion-toolbar  color=\"primary\">   \n     <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>    \n    <ion-title>Account</ion-title>   \n  </ion-toolbar>\n  <ion-toolbar *ngIf = \"aviso\"> \n    <ion-icon name=\"information-circle\" slot='start' style=\"color:#f2f2f2\"></ion-icon>\n    <ion-title size=\"small\" style=\"color: #ffffff;\">refresh view to see changes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n<ion-card color=\"secondary\">\n  <div class=\"img-wrapper\">\n    <img [src]=\"rostro\" />\n  </div>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" (click) = \"fromCamara()\">\n          <ion-icon slot=\"start\" name=\"camera-outline\" color=\"medium\">\n         \n          </ion-icon>\n          Camare\n        </ion-button>\n      </ion-col>\n  \n      <ion-col>\n        <ion-button color=\"primary\" (click) = \"fromGallery()\">\n          <ion-icon slot=\"end\" name=\"albums-outline\" color=\"medium\"></ion-icon>\n         \n     Gallery\n        </ion-button>\n      </ion-col>\n \n    </ion-row>\n    </ion-grid>\n\n\n  <ion-card-content class=\"ion-text-center\">\n    <h2>{{fullname}}</h2>\n    <ion-text color=\"medium\">\n      <div style=\"display: flex;\" class=\"ion-justify-content-center\">\n        <ion-icon name=\"location-outline\" color=\"medium\">\n        </ion-icon>\n        <p>{{address}}</p>\n      </div>\n    </ion-text>\n    \n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n            <h3>Email</h3>\n          </ion-text>       \n          <ion-text style=\"color:#f2f2f2\">\n            <p>{{email}}</p>\n          </ion-text>\n        </ion-label>        \n      </ion-item>\n\n    <div *ngIf = \"xusername\">\n      <ion-item>\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n            <h3>Username</h3>\n          </ion-text>       \n          <ion-text style=\"color:#f2f2f2\">\n            <p>{{username}}</p>\n          </ion-text>\n        </ion-label>\n        <!--<ion-button slot=\"end\" (click) = \"edit_username()\">       \n          <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n        </ion-button>-->\n      </ion-item>\n  </div>\n  <!--<div *ngIf = \"xfusername\">\n      <form [formGroup]=\"form_username\" (ngSubmit)=\"submit_username()\" novalidate>\n        <ion-item lines=\"full\">\n          <ion-label  position=\"floating\" class=\"etiqueta\">Enter the new username</ion-label>\n          <ion-input placeholder=\"Enter the new username\" color=\"tertiary\"  formControlName=\"username\" type=\"text\" required ></ion-input>       \n        </ion-item>\n        <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n        </form>\n        <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_username()\" >Cancel</ion-button>\n  </div>--> \n\n  <div *ngIf = \"xpassword\">\n \n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n          <h3>Change password</h3>\n        </ion-text>       \n        <ion-text style=\"color:#f2f2f2\">\n          <p>................</p>\n        </ion-text>\n      </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_password()\">       \n        <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n\n</div>\n<div *ngIf = \"xfpassword\">\n  <p>Password: 8 characters minimum that includes at least one number, one capital letter and one symbol</p>\n    <form [formGroup]=\"form_password\" (ngSubmit)=\"submit_password()\" novalidate>\n      <ion-item lines=\"full\">\n        <ion-label  position=\"floating\" class=\"etiqueta\">Enter the new password</ion-label>\n        <ion-input placeholder=\"Enter the new password\" color=\"tertiary\"  formControlName=\"password\"  required ></ion-input>       \n      </ion-item> \n      <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n      </form>\n      <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_password()\" >Cancel</ion-button>\n</div> \n\n  </ion-card-content>\n</ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 54310:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/addcar/addcar.component.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n    </ion-buttons>\n  \n    <ion-title>Add new vehicle</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <mat-card class=\"addcar\">\n    <mat-card-content >\n      <form  [formGroup]=\"form_truck\" (ngSubmit)=\"submit()\">\n  \n        <mat-form-field>\n          <mat-select placeholder=\"Vehicle type\"  formControlName=\"vehicletypes\"  >\n              <mat-option *ngFor=\"let vehicletype of vehicletypes\"  [value]=\"vehicletype.vehiculo\" >\n                {{vehicletype.vehiculo}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"(form_truck.get('vehicletypes').hasError('required') && form_truck.get('vehicletypes').touched)\">Vehicle type is required</mat-error>      \n        </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput placeholder=\"Model\" class=\"form-control\" type=\"text\"   formControlName=\"model\">\n        <mat-error *ngIf=\"(form_truck.get('model').hasError('required') && form_truck.get('model').touched)\">Model is required</mat-error>         \n      </mat-form-field>\n      <br>\n  \n      <mat-form-field>\n        <input matInput placeholder=\"Mark\" class=\"form-control\" type=\"text\"  formControlName=\"mark\">\n        <mat-error *ngIf=\"(form_truck.get('mark').hasError('required') && form_truck.get('mark').touched)\">Mark is required</mat-error> \n      </mat-form-field>\n      <br>\n  \n      <mat-form-field>\n        <input matInput placeholder=\"Color\" class=\"form-control\" type=\"text\" formControlName=\"color\">\n        <mat-error *ngIf=\"(form_truck.get('color').hasError('required') && form_truck.get('color').touched)\">Color is required</mat-error> \n      </mat-form-field>\n      <br>\n  \n       <mat-form-field>\n        <input matInput placeholder=\"Vehicle license plate\" class=\"form-control\" type=\"text\" formControlName=\"licenseplate\">\n        <mat-error *ngIf=\"(form_truck.get('licenseplate').hasError('required') && form_truck.get('licenseplate').touched)\">Vehicle license plate is required</mat-error> \n      </mat-form-field>\n      <br> \n  \n      <mat-form-field>\n        <input matInput placeholder=\"Unit number\" class=\"form-control\" type=\"text\" formControlName=\"unitnumber\">\n        <mat-error *ngIf=\"(form_truck.get('unitnumber').hasError('required') && form_truck.get('unitnumber').touched)\">Unit number is required</mat-error> \n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select placeholder=\"Vehicle appearance\"  formControlName=\"detail\"  >\n          \n          <mat-option *ngFor=\"let tipodetalle of tipodetalles\"  [value]=\"tipodetalle.valor\" >\n            {{tipodetalle.etiqueta}}\n          </mat-option>\n            \n          </mat-select>\n          <mat-error *ngIf=\"(form_truck.get('detail').hasError('required') && form_truck.get('detail').touched)\">Vehicle appearance is required</mat-error> \n      </mat-form-field>     \n      <br>  \n            <button id=\"btnSubmit\" mat-flat-button type=\"submit\" class=\"addcar-continuar\">Send</button>\n      </form><br>\n      <button  mat-flat-button  class=\"addcar-cancel\" (click)='cancel()'>Cancel</button>  \n   \n  </mat-card-content >\n</mat-card >\n  \n  </ion-content>\n");

/***/ }),

/***/ 9095:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/addsite/addsite.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons> \n    <ion-title>Add new location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <mat-card class=\"addsite\">\n    <mat-card-content >\n      <form id=\"form_site\" [formGroup]=\"form_site\" (ngSubmit)=\"submit()\">\n      <mat-form-field>\n        <input matInput placeholder=\"Suite\" class=\"form-control\" type=\"text\"   formControlName=\"suite\">\n        <mat-error *ngIf=\"(form_site.get('suite').hasError('required') && form_site.get('suite').touched)\">Suite is required</mat-error>\n         \n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Street No.\" class=\"form-control\" type=\"text\"  formControlName=\"street\">\n        <mat-error *ngIf=\"(form_site.get('street').hasError('required') && form_site.get('street').touched)\">Street No. is required</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Address\" class=\"form-control\" type=\"text\" formControlName=\"address\"></textarea>\n        <mat-error *ngIf=\"(form_site.get('address').hasError('required') && form_site.get('address').touched)\">Address  is required</mat-error>\n      </mat-form-field>\n      <br> <mat-form-field>\n        <input matInput placeholder=\"Postal Code\" class=\"form-control\" type=\"text\" formControlName=\"zip\">\n        <mat-error *ngIf=\"(form_site.get('zip').hasError('required') && form_site.get('zip').touched)\">Postal code is required</mat-error>\n      </mat-form-field>\n      <br> \n     <mat-form-field>\n        <mat-select placeholder=\"State\"  formControlName=\"state\"  >\n            <mat-option *ngFor=\"let estado of estados\"  [value]=\"estado.estado\" >\n              {{estado.estado}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"(form_site.get('state').hasError('required') && form_site.get('state').touched)\">State telephone is required</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <mat-select placeholder=\"City\"  formControlName=\"city\"  >\n            <mat-option *ngFor=\"let city of cities\"  [value]=\"city.city\" >\n              {{city.city}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"(form_site.get('city').hasError('required') && form_site.get('city').touched)\">City is required</mat-error>\n      </mat-form-field>\n      <br><br>  \n  \n  \n  \n     \n      <button id=\"btnSubmit\" mat-flat-button type=\"submit\" class=\"addsite-continuar\">Send</button>\n      </form><br>\n      <button id=\"btnSubmit\" mat-flat-button  class=\"addsite-cancel\" (click) = \"cancel()\">Cancel</button>\n    </mat-card-content>\n    </mat-card >\n</ion-content>\n");

/***/ }),

/***/ 86745:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/billaddress/billaddress.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-title>Bill information</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-icon name=\"information-circle\" slot='start' style=\"color:#f2f2f2\"></ion-icon>\n    <ion-title size=\"small\" style=\"color: #ffffff;\">This information is used to prepare billing</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n  <ion-content>  \n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n\n\n<div *ngIf = \"xnombre\">\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n          <h3>Firstname</h3>\n        </ion-text>       \n        <ion-text style=\"color:#f2f2f2\">\n          <p>{{nombre}}</p>\n        </ion-text>\n      </ion-label>\n      <ion-button slot=\"end\" (click) = \"edit_firstname()\">       \n        <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n      </ion-button>\n    </ion-item>\n</div>\n<div *ngIf = \"xfnombre\">\n    <form [formGroup]=\"form_firtname\" (ngSubmit)=\"submit_firstname()\" novalidate>\n      <ion-item lines=\"full\">\n        <ion-label  position=\"floating\" class=\"etiqueta\">New firstname</ion-label>\n        <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"firstname\" type=\"text\" required ></ion-input>       \n      </ion-item>\n      <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n      </form>\n      <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_firstname()\" >Cancel</ion-button>\n</div>      \n\n<div *ngIf = \"xapellido\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Lastname</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{apellido}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_lastname()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfapellido\">\n  <form [formGroup]=\"form_lastname\" (ngSubmit)=\"submit_lastname()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New lastname</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"lastname\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_lastname()\" >Cancel</ion-button>\n</div>\n\n<div *ngIf = \"xfullname\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Fullname</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{fullname}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_fullname()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xffullname\">\n  <form [formGroup]=\"form_fullname\" (ngSubmit)=\"submit_fullname()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New fullname</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"fullname\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_fullname()\" >Cancel</ion-button>\n</div> \n\n<div *ngIf = \"xcustomer\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Customer</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{tipocliente}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_customer()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfcustomer\">\n  <form [formGroup]=\"form_customer\" (ngSubmit)=\"submit_customer()\" novalidate>\n    <ion-item>\n      <ion-label>New customer type</ion-label>\n      <ion-select placeholder=\"Select new data\" formControlName=\"customer\" (ionChange) =\"cambiar($event)\">        \n        <ion-select-option *ngFor=\"let customertype of customertypes\"  [value]=\"customertype.valor\">  \n          {{customertype.etiqueta}}\n        </ion-select-option>    \n      </ion-select>\n       </ion-item> \n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_customer()\" >Cancel</ion-button>\n</div> \n<div *ngIf=\"ver\">\n\n<div *ngIf = \"xempresa\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Company</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{empresa}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_empresa()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfempresa\">\n  <form [formGroup]=\"form_empresa\" (ngSubmit)=\"submit_empresa()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New Company</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"empresa\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_empresa()\" >Cancel</ion-button>\n</div>\n\n<div *ngIf = \"xrif\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Tax ID</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{rif}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_rif()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfrif\">\n  <form [formGroup]=\"form_rif\" (ngSubmit)=\"submit_rif()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New Tax ID</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"rif\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_rif()\" >Cancel</ion-button>\n</div> \n\n</div>\n\n<div *ngIf = \"xcasa\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Suite</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{casa}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_casa()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfcasa\">\n  <form [formGroup]=\"form_suite\" (ngSubmit)=\"submit_casa()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New suite</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"casa\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_casa()\" >Cancel</ion-button>\n</div>\n\n<div *ngIf = \"xcalle\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Street No.</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{calle}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_calle()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfcalle\">\n  <form [formGroup]=\"form_calle\" (ngSubmit)=\"submit_calle()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New street No.</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"calle\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_calle()\" >Cancel</ion-button>\n</div> \n\n<div *ngIf = \"xdireccion\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Address</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{direccion}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_direccion()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfdireccion\">\n  <form [formGroup]=\"form_direccion\" (ngSubmit)=\"submit_direccion()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New address</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"direccion\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_direccion()\" >Cancel</ion-button>\n</div> \n\n<div *ngIf = \"xzip\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Postal Code</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{codigopostal}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_zip()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfzip\">\n  <form [formGroup]=\"form_zip\" (ngSubmit)=\"submit_zip()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New postal Code</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"zip\" type=\"text\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button  class=\"cancel\" expand=\"block\" (click) = \"cancel_zip()\" >Cancel</ion-button>\n</div> \n\n<div *ngIf = \"xestado\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>State</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{estado}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_estado()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfestado\">\n  <form [formGroup]=\"form_state\" (ngSubmit)=\"submit_estado()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  >New state</ion-label>\n      <ion-select placeholder=\"Select\" formControlName=\"estado\" >     \n        <ion-select-option *ngFor=\"let estado of estados\"  [value]=\"estado.estado\">  \n          {{estado.estado}}\n        </ion-select-option>    \n      </ion-select>\n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button  class=\"cancel\" expand=\"block\" (click) = \"cancel_estado()\" >Cancel</ion-button>\n</div>\n\n<div *ngIf = \"xciudad\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>City</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{ciudad}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_ciudad()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfciudad\">\n  <form [formGroup]=\"form_city\" (ngSubmit)=\"submit_ciudad()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New city</ion-label>\n      <ion-select placeholder=\"Select\" formControlName=\"ciudad\" >\n      <ion-select-option *ngFor=\"let city of cities\"  [value]=\"city.city\">  \n        {{city.city}}\n      </ion-select-option> \n    </ion-select>\n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_ciudad()\" >Cancel</ion-button>\n</div>\n\n<div *ngIf = \"xtelefono\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Phone</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{telefono}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_telefono()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xftelefono\">\n  <form [formGroup]=\"form_phone\" (ngSubmit)=\"submit_telefono()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New phone</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"phone\" type=\"tel\" maxlength = \"10\" minlength = \"10\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button  class=\"cancel\" expand=\"block\" (click) = \"cancel_telefono()\" >Cancel</ion-button>\n</div> \n\n<div *ngIf = \"xcelular\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text style=\"color:#f2f2f2; font-weight: bold;\">\n        <h3>Mobil</h3>\n      </ion-text>       \n      <ion-text style=\"color:#f2f2f2\">\n        <p>{{celular}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" (click) = \"edit_celular()\">       \n      <ion-icon slot=\"icon-only\" name=\"pencil\" class=\"pen\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</div>\n<div *ngIf = \"xfcelular\">\n  <form [formGroup]=\"form_mobilphone\" (ngSubmit)=\"submit_celular()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label  position=\"floating\" class=\"etiqueta\">New mobil</ion-label>\n      <ion-input placeholder=\"Enter the new data\" style=\"color:#f2f2f2\"  formControlName=\"mobil\" type=\"tel\" maxlength = \"10\" minlength = \"10\" required ></ion-input>       \n    </ion-item>\n    <ion-button  type=\"submit\" color=\"primary\" expand=\"block\" >Send</ion-button>\n    </form>\n    <ion-button   class=\"cancel\" expand=\"block\" (click) = \"cancel_celular()\" >Cancel</ion-button>\n</div> \n\n\n\n   \n\n     \n       \n\n  </ion-content>");

/***/ }),

/***/ 33731:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/fleet/fleet.component.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\"><ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  \n    <ion-title>Fleet</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-icon name=\"information-circle\" slot='start' style=\"color:#f2f2f2\"></ion-icon>\n    <ion-title size=\"small\" style=\"color: #ffffff;\">With a fleet you acquire benefits and discounts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n \n  <!--Tabla de cart principal-->\n<table mat-table [dataSource]=\"itemTabla\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n         \n <!--<ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}}  </td>\n\n  </ng-container>-->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"unit_number\">\n    <th mat-header-cell *matHeaderCellDef> No Vehiculo </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.unit_number}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"type_vehicle\">\n    <th mat-header-cell *matHeaderCellDef> Type</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.type_vehicle}} </td>\n  </ng-container>\n\n \n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Expand\">\n    <th mat-header-cell *matHeaderCellDef> Expand </th>\n    <td mat-cell *matCellDef=\"let element\"><mat-icon>unfold_more</mat-icon></td>\n  </ng-container>\n\n  \n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n    <div class=\"example-element-diagram\">\n          <p class=\"tickets\">License:</p>\n          <p class=\"ticket\">{{element.license}}</p>\n          <p class=\"tickets\"> Modelo:</p>\n          <p class=\"ticket\">{{element.model}}</p>\n          <p class=\"tickets\">Mark:</p>\n          <p class=\"ticket\">{{element.mark}}</p>\n          <p class=\"tickets\">Color:</p>\n          <p class=\"ticket\">{{element.color}}</p>\n          <p class=\"tickets\">Appearance:</p>\n          <p class=\"ticket\">{{element.appearance}}</p>\n         <br>\n      \n   <div >\n\n    <button mat-flat-button class=\"delete\" (click) = \"add()\">Add a new vehicle</button>\n    <button mat-flat-button class=\"delete\" (click) = \"Borrar(element.id)\">Delete</button> \n\n         \n        </div>\n        <br>\n       \n       \n\n        \n          \n         \n         \n        \n              \n      </div>\n      </div>\n    </td>\n    \n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  \n\n</table>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ 35353:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/locations/locations.component.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\"><ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>  \n    <ion-title>Locations</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-icon name=\"information-circle\" slot='start' style=\"color:#f2f2f2\"></ion-icon>\n    <ion-title size=\"small\" style=\"color: #ffffff;\">Hold two or more locations for your future reservations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n \n  <!--Tabla de cart principal-->\n<table mat-table [dataSource]=\"itemTabla\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n         \n\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"suite\">\n    <th mat-header-cell *matHeaderCellDef> Suite </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.suite}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"zip\">\n    <th mat-header-cell *matHeaderCellDef> Code Zip</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.zip}} </td>\n  </ng-container>\n\n \n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Expand\">\n    <th mat-header-cell *matHeaderCellDef> Expand </th>\n    <td mat-cell *matCellDef=\"let element\"><mat-icon>unfold_more</mat-icon></td>\n  </ng-container>\n\n  \n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n    <div class=\"example-element-diagram\">\n      \n          <p class=\"tickets\" >Address:</p> \n          <p class=\"ticket\" >{{element.address}}</p>\n          <p class=\"tickets\" >Street No:</p> \n          <p class=\"ticket\" >{{element.street_nr}}</p>        \n          <p class=\"tickets\" >State:</p>\n          <p class=\"ticket\" >{{element.state}}</p>\n          <p class=\"tickets\" >City:</p>\n          <p class=\"ticket\" >{{element.city}}</p><br>\n            \n          <button mat-flat-button class=\"delete\" (click) = \"add()\">Add a new Location</button>\n          <button mat-flat-button class=\"delete\" (click) = \"Borrar(element.id , element.default )\">Delete</button>           \n    </div>\n    \n     \n     \n      </div>\n    </td>\n    \n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  \n\n</table>\n\n</ion-content>\n\n\n\n");

/***/ }),

/***/ 99983:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/profile/profile.component.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n \n  <ion-list>\n\n    <ion-item  routerLink=\"/tabs-cliente/profile/account\">\n      <ion-label floating ion-left>\n        <ion-icon name=\"person\" item-start class=\"text-primary\" class =\"figura\"></ion-icon>          \n        DATA ACCOUNT       \n      </ion-label>  \n    </ion-item>\n\n    <ion-item  routerLink=\"/tabs-cliente/profile/billaddress\">\n      <ion-label  floating ion-left> \n        <ion-icon name=\"id-card\" item-start class=\"text-primary\" class =\"figura\"></ion-icon>       \n        BILLING ADDRESS       \n      </ion-label>  \n    </ion-item>\n\n    <ion-item  routerLink=\"/tabs-cliente/profile/locations\">      \n      <ion-label  floating ion-left> \n        <ion-icon name=\"location\" item-start class=\"text-primary\" class =\"figura\"></ion-icon>       \n        YOUR LOCATIONS       \n      </ion-label>  \n    </ion-item>\n\n    <ion-item  routerLink=\"/tabs-cliente/profile/fleet\">\n      <ion-label  floating ion-left>\n        <ion-icon name=\"car\" item-start class=\"text-primary\" class =\"figura\"></ion-icon>     \n        YOUR FLEET OF VEHICLES      \n      </ion-label>  \n    </ion-item>\n  \n  </ion-list> \n\n\n  \n</ion-content>\n");

/***/ }),

/***/ 58345:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-cliente-profile/tab-cliente-profile.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n  <ion-router-outlet></ion-router-outlet>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab-cliente-profile_tab-cliente-profile_module_ts-es2015.js.map