(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activate-account/activate-account.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/activate-account/activate-account.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2YXRlLWFjY291bnQvYWN0aXZhdGUtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/activate-account/activate-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/activate-account/activate-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n\t<div fxFlex=\"40\">{{message}}</div>\n</div>"

/***/ }),

/***/ "./src/app/activate-account/activate-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/activate-account/activate-account.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAccountComponent", function() { return ActivateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivateAccountComponent = /** @class */ (function () {
    function ActivateAccountComponent(authService, route, snackbar, router) {
        this.authService = authService;
        this.route = route;
        this.snackbar = snackbar;
        this.router = router;
        this.message = {};
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.paramMap.get('token');
        this.authService.activateAccount(token)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.message = res.message;
                _this.router.navigate(['/login']);
            }
            else {
                _this.snackbar.open(res.message, 'close');
                _this.message = res.message;
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ActivateAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-account',
            template: __webpack_require__(/*! ./activate-account.component.html */ "./src/app/activate-account/activate-account.component.html"),
            styles: [__webpack_require__(/*! ./activate-account.component.css */ "./src/app/activate-account/activate-account.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());



/***/ }),

/***/ "./src/app/addtask-dialog/addtask-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/addtask-dialog/addtask-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRhc2stZGlhbG9nL2FkZHRhc2stZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addtask-dialog/addtask-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/addtask-dialog/addtask-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add task</h2>\n<mat-dialog-content>\n\t\t<form [formGroup]=\"addTaskForm\" (ngSubmit)=\"onSubmit(addTaskForm,formDirective)\"  #formDirective=\"ngForm\">\n\t \t\t<div class=\"form-container\" fxLayout=\"column\">\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t\t<mat-form-field fxFlex=\"100\">\n\t \t\t\t\t\t  \t<mat-select placeholder=\"Time\" formControlName=\"time\">\n\t \t\t\t\t\t    \t<mat-option *ngFor=\"let Time of Times\" [value]=\"Time.value\">\n\t \t\t\t\t\t      \t\t\t{{Time.viewValue}}\n\t \t\t\t\t\t    \t</mat-option>\n\t \t\t\t\t\t  \t</mat-select>\n\t \t\t\t\t\t  \t<mat-icon matSuffix>alarm</mat-icon>\n\t \t\t\t\t\t  \t<mat-error *ngFor=\"let validation of validationMessages.bedId\">\n\t \t\t\t\t\t      \t<mat-error class=\"error-message\" *ngIf=\"addTaskForm.get('time').hasError(validation.type) && (addTaskForm.get('time').dirty || addTaskForm.get('time').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t\t  \t</mat-error>\n\t \t\t\t\t\t</mat-form-field>\n\t \t\t\t</div>\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t<mat-form-field fxFlex=\"100\">\n\t \t\t\t\t\t<mat-select placeholder=\"Bed\" formControlName=\"bedId\">\n\t \t\t\t\t\t    <mat-option *ngFor=\"let bed of beds\" [value]=\"bed._id\">\n\t \t\t\t\t\t      \t\t\t{{bed.bedName}}\n\t \t\t\t\t\t    </mat-option>\n\t \t\t\t\t\t</mat-select>\n\t \t\t\t\t\t<mat-icon matSuffix>hotel</mat-icon>\n\t \t\t\t\t\t<mat-error *ngFor=\"let validation of validationMessages.bedId\">\n\t \t\t\t\t\t    <mat-error class=\"error-message\" *ngIf=\"addTaskForm.get('bedId').hasError(validation.type) && (addTaskForm.get('bedId').dirty || addTaskForm.get('bedId').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t\t</mat-error>\n\t \t\t\t\t</mat-form-field>\n\t \t\t\t</div>\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t    <input matInput placeholder=\"Enter Medicine name\" type=\"text\" formControlName=\"medicineName\">\n\t \t\t\t\t    <mat-icon matSuffix>opacity</mat-icon>\n\t \t\t\t\t    <mat-error *ngFor=\"let validation of validationMessages.medicineName\">\n\t \t\t\t\t    \t<mat-error class=\"error-message\" *ngIf=\"addTaskForm.get('medicineName').hasError(validation.type) && (addTaskForm.get('medicineName').dirty || addTaskForm.get('medicineName').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t    </mat-error>\n\t \t\t\t\t </mat-form-field>\n\t \t\t\t\t <mat-form-field fxFlex=\"50\">\n\t \t\t\t\t     <input matInput placeholder=\"Enter medicine volume\" type=\"text\" formControlName=\"medicineVolume\">\n\t \t\t\t\t     <mat-icon matSuffix>local_drink</mat-icon>\n\t \t\t\t\t     <mat-error *ngFor=\"let validation of validationMessages.medicineVolume\">\n\t \t\t\t\t     \t<mat-error class=\"error-message\" *ngIf=\"addTaskForm.get('medicineVolume').hasError(validation.type) && (addTaskForm.get('medicineVolume').dirty || addTaskForm.get('medicineVolume').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t     </mat-error>\n\t \t\t\t\t  </mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t\t\t\t \t<mat-form-field fxFlex=\"50\">\n\t\t\t\t \t\t<input matInput placeholder=\"Enter Time for infusion in Hrs\" type=\"text\" formControlName=\"timeForInfusion\">\n\t\t\t\t \t\t<mat-icon matSuffix>alarm</mat-icon>\n\t\t\t\t \t</mat-form-field>\n\t\t\t\t \t<mat-form-field fxFlex=\"50\">\n\t\t\t\t \t\t<input matInput placeholder=\"Enter medicine rate\" type=\"text\" formControlName=\"medicineRate\">\n\t\t\t\t \t\t<mat-icon matSuffix>trending_up</mat-icon>\n\t\t\t\t \t\t<mat-error *ngFor=\"let validation of validationMessages.medicineRate\">\n\t\t\t\t \t\t\t<mat-error class=\"error-message\" *ngIf=\"addTaskForm.get('medicineRate').hasError(validation.type) && (addTaskForm.get('medicineRate').dirty || addTaskForm.get('medicineRate').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t\t</mat-error>\n\t\t\t\t \t</mat-form-field>\n\t\t\t\t</div>\n\t \t\t</div>\n\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"addTaskForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!addTaskForm.valid\">Submit</button>\n\t \t</form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/addtask-dialog/addtask-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/addtask-dialog/addtask-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: AddtaskDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskDialogComponent", function() { return AddtaskDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddtaskDialogComponent = /** @class */ (function () {
    function AddtaskDialogComponent(fb, nurse, snackbar, dialogRef) {
        var _this = this;
        this.fb = fb;
        this.nurse = nurse;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.beds = [];
        this.taskData = [];
        this.Times = [
            { value: '0', viewValue: '12 AM' }, { value: '1', viewValue: '1 AM' }, { value: '2', viewValue: '2 AM' }, { value: '3', viewValue: '3 AM' }, { value: '4', viewValue: '4 AM' },
            { value: '5', viewValue: '5 AM' }, { value: '6', viewValue: '6 AM' }, { value: '7', viewValue: '7 AM' }, { value: '8', viewValue: '8 AM' },
            { value: '9', viewValue: '9 AM' }, { value: '10', viewValue: '10 AM' }, { value: '11', viewValue: '11 AM' }, { value: '12', viewValue: '12 PM' }, { value: '13', viewValue: '1 PM' },
            { value: '14', viewValue: '2 PM' }, { value: '15', viewValue: '3 PM' }, { value: '16', viewValue: '4 PM' }, { value: '17', viewValue: '5 PM' }, { value: '18', viewValue: '6 PM' },
            { value: '19', viewValue: '7 PM' }, { value: '20', viewValue: '8 PM' }, { value: '21', viewValue: '9 PM' }, { value: '22', viewValue: '10 PM' }, { value: '23', viewValue: '11 PM' }
        ];
        this.validationMessages = {
            'time': [
                { type: 'required', message: 'time  is required' }
            ],
            'bedId': [
                { type: 'required', message: 'Bed name is required' }
            ],
            'medicineName': [
                { type: 'required', message: 'Medicine name is required' }
            ],
            'medicineVolume': [
                { type: 'required', message: 'Medicine Volume is required' }
            ],
            'medicineRate': [
                { type: 'required', message: 'Medicine rate is required' }
            ],
        };
        this.addTaskForm = this.fb.group({
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medicineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medicineVolume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medicineRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timeForInfusion: ['']
        });
        var toi = this.addTaskForm.get('timeForInfusion');
        var mr = this.addTaskForm.get('medicineRate');
        var mv = this.addTaskForm.get('medicineVolume');
        toi.valueChanges.subscribe(function (val) {
            var valMv = _this.addTaskForm.value.medicineVolume;
            mr.setValue(Math.floor(valMv / val));
        });
    }
    AddtaskDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nurse.readOccupiedBed()
            .subscribe(function (res) {
            if (res.success) {
                _this.beds = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddtaskDialogComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.taskData = this.addTaskForm.value;
        this.nurse.createTask(this.taskData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
                formDirective.resetForm();
                _this.addTaskForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddtaskDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtask-dialog',
            template: __webpack_require__(/*! ./addtask-dialog.component.html */ "./src/app/addtask-dialog/addtask-dialog.component.html"),
            styles: [__webpack_require__(/*! ./addtask-dialog.component.css */ "./src/app/addtask-dialog/addtask-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _nurse_service__WEBPACK_IMPORTED_MODULE_3__["NurseService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], AddtaskDialogComponent);
    return AddtaskDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin-mbed/admin-mbed.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-mbed/admin-mbed.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWJlZC9hZG1pbi1tYmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbWJlZC9hZG1pbi1tYmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2Nyb2xsYWJsZSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-mbed/admin-mbed.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-mbed/admin-mbed.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"40\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let bed of beds |filter:term\">\n\t\t\t\t<div fxFlex=\"50\" fxFlex.xs=\"60\">{{bed.bedName}}<br>{{bed.stationName}}</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(bed)\" class=\"mat-button\">Edit</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(bed)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(bed)\" class=\"mat-button\">Remove</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(bed)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"60\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"60\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Beds</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Add Beds</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form [formGroup]=\"createBedForm\" (ngSubmit)=\"onSubmit(createBedForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t\t \t\t\t\t<mat-form-field>\n\t\t\t\t\t \t\t\t  \t\t<mat-select placeholder=\"Station\" formControlName=\"stationId\">\n\t\t\t\t\t \t\t\t    \t\t<mat-option *ngFor=\"let station of stations\" [value]=\"station._id\">\n\t\t\t\t\t \t\t\t      \t\t\t{{station.stationName}}\n\t\t\t\t\t \t\t\t    \t\t</mat-option>\n\t\t\t\t\t \t\t\t  \t\t</mat-select>\n\t\t\t\t\t \t\t\t  \t\t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t\t\t\t \t\t\t  \t\t<mat-error *ngFor=\"let validation of validationMessages.stationId\">\n\t\t\t\t\t \t\t\t      \t\t<mat-error class=\"error-message\" *ngIf=\"createBedForm.get('stationId').hasError(validation.type) && (createBedForm.get('stationId').dirty || createBedForm.get('stationId').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t\t\t  \t\t</mat-error>\n\t\t\t\t\t \t\t\t\t</mat-form-field>\n\t\t\t\t\t \t\t\t\t<mat-form-field>\n\t\t\t\t\t \t    \t\t\t<input matInput placeholder=\"Enter bed name\" type=\"text\" formControlName=\"bedName\">\n\t\t\t\t\t \t    \t\t<mat-icon matSuffix>hotel</mat-icon>\n\t\t\t\t\t \t    \t\t<mat-error *ngFor=\"let validation of validationMessages.bedName\">\n\t\t\t\t\t \t    \t    \t<mat-error class=\"error-message\" *ngIf=\"createBedForm.get('bedName').hasError(validation.type) && (createBedForm.get('bedName').dirty || createBedForm.get('bedName').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t    \t\t</mat-error>\n\t\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t\t \t\t</div>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createBedForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createBedForm.valid\">Submit</button>\n\t\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"40\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Beds</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Filters</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"search bed\" type=\"text\" [(ngModel)]=term>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin-mbed/admin-mbed.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-mbed/admin-mbed.component.ts ***!
  \****************************************************/
/*! exports provided: AdminMbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMbedComponent", function() { return AdminMbedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _editbed_dialog_editbed_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editbed-dialog/editbed-dialog.component */ "./src/app/editbed-dialog/editbed-dialog.component.ts");
/* harmony import */ var _deletebed_dialog_deletebed_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deletebed-dialog/deletebed-dialog.component */ "./src/app/deletebed-dialog/deletebed-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMbedComponent = /** @class */ (function () {
    function AdminMbedComponent(fb, admin, snackbar, dialog) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.bedData = {};
        this.stations = [];
        this.beds = [];
        this.validationMessages = {
            'stationId': [
                { type: 'required', message: 'Station name is required' }
            ],
            'bedName': [
                { type: 'required', message: 'Bed name is required' },
                { type: 'pattern', message: 'Eg: B101,B102,B103' }
            ]
        };
        this.createBedForm = this.fb.group({
            stationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bedName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Za-z0-9]+((,|-)[A-Za-z0-9]+)*[A-Za-z0-9]+$')])]
        });
    }
    AdminMbedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readStation()
            .subscribe(function (res) {
            if (res.success) {
                _this.stations = res.data;
            }
        }, function (err) {
            console.log(err);
        });
        this.admin.readBed()
            .subscribe(function (res) {
            if (res.success) {
                _this.beds = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMbedComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.bedData = this.createBedForm.value;
        this.admin.createBed(this.bedData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.admin.readBed()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.beds = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createBedForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMbedComponent.prototype.openEditDialog = function (bed) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            _id: bed._id,
            bedName: bed.bedName
        };
        var dialogRef = this.dialog.open(_editbed_dialog_editbed_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditbedDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readBed()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.beds = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMbedComponent.prototype.openDeleteDialog = function (station) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            _id: station._id,
            stationName: station.stationName,
            title: 'Remove User'
        };
        var dialogRef = this.dialog.open(_deletebed_dialog_deletebed_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeletebedDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readBed()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.beds = res.data;
                    }
                    else {
                        _this.beds = [];
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMbedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mbed',
            template: __webpack_require__(/*! ./admin-mbed.component.html */ "./src/app/admin-mbed/admin-mbed.component.html"),
            styles: [__webpack_require__(/*! ./admin-mbed.component.css */ "./src/app/admin-mbed/admin-mbed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminMbedComponent);
    return AdminMbedComponent;
}());



/***/ }),

/***/ "./src/app/admin-mdripo/admin-mdripo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-mdripo/admin-mdripo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWRyaXBvL2FkbWluLW1kcmlwby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1kcmlwby9hZG1pbi1tZHJpcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-mdripo/admin-mdripo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-mdripo/admin-mdripo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"40\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let dripo of dripos |filter:term\">\n\t\t\t\t<div fxFlex=\"50\" fxFlex.xs=\"60\">{{dripo.dripoId}} <br>{{dripo.stationName}}</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(dripo)\" class=\"mat-button\">Edit</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(dripo)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(dripo)\" class=\"mat-button\">Remove</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(dripo)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"60\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"60\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Dripo</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Add Dripo</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form [formGroup]=\"createDripoForm\" (ngSubmit)=\"onSubmit(createDripoForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t\t \t\t  \t\t<mat-select placeholder=\"Station\" formControlName=\"stationId\">\n\t\t\t\t\t \t\t    \t\t<mat-option *ngFor=\"let station of stations\" [value]=\"station._id\">\n\t\t\t\t\t \t\t      \t\t\t{{station.stationName}}\n\t\t\t\t\t \t\t    \t\t</mat-option>\n\t\t\t\t\t \t\t  \t\t</mat-select>\n\t\t\t\t\t \t\t  \t\t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t\t\t\t \t\t  \t\t<mat-error *ngFor=\"let validation of validationMessages.stationId\">\n\t\t\t\t\t \t\t      \t\t<mat-error class=\"error-message\" *ngIf=\"createDripoForm.get('stationId').hasError(validation.type) && (createDripoForm.get('stationId').dirty || createDripoForm.get('stationId').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t\t  \t\t</mat-error>\n\t\t\t\t\t \t\t\t</mat-form-field>\n\t\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t\t \t  \t\t    <input matInput placeholder=\"Enter dripo id\" type=\"text\" formControlName=dripoId>\n\t\t\t\t\t \t  \t\t    <mat-icon matSuffix>speaker_phone</mat-icon>\n\t\t\t\t\t \t  \t\t    <mat-error *ngFor=\"let validation of validationMessages.dripoId\">\n\t\t\t\t\t \t  \t\t    \t<mat-error class=\"error-message\" *ngIf=\"createDripoForm.get('dripoId').hasError(validation.type) && (createDripoForm.get('dripoId').dirty || createDripoForm.get('dripoId').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t  \t\t    </mat-error>\n\t\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t\t \t\t</div>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createDripoForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createDripoForm.valid\">Submit</button>\n\t\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"40\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Dripo</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Filters</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"search station\" type=\"text\" [(ngModel)]=term>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin-mdripo/admin-mdripo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-mdripo/admin-mdripo.component.ts ***!
  \********************************************************/
/*! exports provided: AdminMdripoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMdripoComponent", function() { return AdminMdripoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _editdripo_dialog_editdripo_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editdripo-dialog/editdripo-dialog.component */ "./src/app/editdripo-dialog/editdripo-dialog.component.ts");
/* harmony import */ var _deletedripo_dialog_deletedripo_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deletedripo-dialog/deletedripo-dialog.component */ "./src/app/deletedripo-dialog/deletedripo-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMdripoComponent = /** @class */ (function () {
    function AdminMdripoComponent(fb, admin, snackbar, dialog) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.dripoData = {};
        this.stations = [];
        this.dripos = [];
        this.validationMessages = {
            'stationId': [
                { type: 'required', message: 'Station name is required' }
            ],
            'dripoId': [
                { type: 'required', message: 'dripo id is required' }
            ]
        };
        this.createDripoForm = this.fb.group({
            stationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dripoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AdminMdripoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readDripo()
            .subscribe(function (res) {
            if (res.success) {
                _this.dripos = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
        this.admin.readStation()
            .subscribe(function (res) {
            if (res.success) {
                _this.stations = res.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMdripoComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.dripoData = this.createDripoForm.value;
        this.admin.createDripo(this.dripoData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.admin.readDripo()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.dripos = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createDripoForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMdripoComponent.prototype.openEditDialog = function (dripo) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '300px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            stationId: dripo.stationId,
            stationName: dripo.stationName,
            dripoId: dripo.dripoId,
            _id: dripo._id
        };
        var dialogRef = this.dialog.open(_editdripo_dialog_editdripo_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditdripoDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readDripo()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.dripos = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMdripoComponent.prototype.openDeleteDialog = function (dripo) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            stationName: dripo.stationName,
            dripoId: dripo.dripoId,
            _id: dripo._id
        };
        var dialogRef = this.dialog.open(_deletedripo_dialog_deletedripo_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeletedripoDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readDripo()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.dripos = res.data;
                    }
                    else {
                        _this.dripos = [];
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMdripoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mdripo',
            template: __webpack_require__(/*! ./admin-mdripo.component.html */ "./src/app/admin-mdripo/admin-mdripo.component.html"),
            styles: [__webpack_require__(/*! ./admin-mdripo.component.css */ "./src/app/admin-mdripo/admin-mdripo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminMdripoComponent);
    return AdminMdripoComponent;
}());



/***/ }),

/***/ "./src/app/admin-mivset/admin-mivset.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-mivset/admin-mivset.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWl2c2V0L2FkbWluLW1pdnNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1pdnNldC9hZG1pbi1taXZzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-mivset/admin-mivset.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-mivset/admin-mivset.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"40\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let ivset of ivsets |filter:term\">\n\t\t\t\t<div fxFlex=\"50\" fxFlex.xs=\"60\">{{ivset.ivsetModel}} <br>{{ivset.ivsetDpf}}</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(ivset)\" class=\"mat-button\">Edit</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(ivset)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(ivset)\" class=\"mat-button\">Remove</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(ivset)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"60\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"60\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>IV-Set</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Add IV Set</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form [formGroup]=\"createIvsetForm\" (ngSubmit)=\"onSubmit(createIvsetForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t\t \t    \t\t<input matInput placeholder=\"Enter ivset model\" type=\"text\" formControlName=ivsetModel>\n\t\t\t\t\t \t    \t\t<mat-icon matSuffix>info</mat-icon>\n\t\t\t\t\t \t    \t\t<mat-error *ngFor=\"let validation of validationMessages.ivsetModel\">\n\t\t\t\t\t \t    \t    \t<mat-error class=\"error-message\" *ngIf=\"createIvsetForm.get('ivsetModel').hasError(validation.type) && (createIvsetForm.get('ivsetModel').dirty || createIvsetForm.get('ivsetModel').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t    \t\t</mat-error>\n\t\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t\t \t  \t\t    <input matInput placeholder=\"Enter ivset drop factor\" type=\"number\" formControlName=ivsetDpf>\n\t\t\t\t\t \t  \t\t    <mat-icon matSuffix>opacity</mat-icon>\n\t\t\t\t\t \t  \t\t    <mat-error *ngFor=\"let validation of validationMessages.ivsetDpf\">\n\t\t\t\t\t \t  \t\t    \t<mat-error class=\"error-message\" *ngIf=\"createIvsetForm.get('ivsetDpf').hasError(validation.type) && (createIvsetForm.get('ivsetDpf').dirty || createIvsetForm.get('ivsetDpf').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t  \t\t    </mat-error>\n\t\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t\t \t\t</div>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createIvsetForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createIvsetForm.valid\">Submit</button>\n\t\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"40\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>IV-Set</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Filters</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"search station\" type=\"text\" [(ngModel)]=term>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-mivset/admin-mivset.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-mivset/admin-mivset.component.ts ***!
  \********************************************************/
/*! exports provided: AdminMivsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMivsetComponent", function() { return AdminMivsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _editivset_dialog_editivset_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editivset-dialog/editivset-dialog.component */ "./src/app/editivset-dialog/editivset-dialog.component.ts");
/* harmony import */ var _deleteivset_dialog_deleteivset_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deleteivset-dialog/deleteivset-dialog.component */ "./src/app/deleteivset-dialog/deleteivset-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMivsetComponent = /** @class */ (function () {
    function AdminMivsetComponent(fb, admin, snackbar, dialog) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.ivsetData = {};
        this.ivsets = [];
        this.validationMessages = {
            'ivsetModel': [
                { type: 'required', message: 'Ivset model is required' }
            ],
            'ivsetDpf': [
                { type: 'required', message: 'Ivset drop factor is required' }
            ]
        };
        this.createIvsetForm = this.fb.group({
            ivsetModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ivsetDpf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AdminMivsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readIvset()
            .subscribe(function (res) {
            if (res.success) {
                _this.ivsets = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMivsetComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.ivsetData = this.createIvsetForm.value;
        console.log(this.ivsetData);
        this.admin.createIvset(this.ivsetData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.admin.readIvset()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.ivsets = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createIvsetForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMivsetComponent.prototype.openEditDialog = function (ivset) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '300px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            _id: ivset._id,
            ivsetModel: ivset.ivsetModel,
            ivsetDpf: ivset.ivsetDpf
        };
        var dialogRef = this.dialog.open(_editivset_dialog_editivset_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditivsetDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readIvset()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.ivsets = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMivsetComponent.prototype.openDeleteDialog = function (ivset) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            _id: ivset._id,
            ivsetModel: ivset.ivsetModel,
            ivsetDpf: ivset.ivsetDpf
        };
        var dialogRef = this.dialog.open(_deleteivset_dialog_deleteivset_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteivsetDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readIvset()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.ivsets = res.data;
                    }
                    else {
                        _this.ivsets = [];
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMivsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mivset',
            template: __webpack_require__(/*! ./admin-mivset.component.html */ "./src/app/admin-mivset/admin-mivset.component.html"),
            styles: [__webpack_require__(/*! ./admin-mivset.component.css */ "./src/app/admin-mivset/admin-mivset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminMivsetComponent);
    return AdminMivsetComponent;
}());



/***/ }),

/***/ "./src/app/admin-mstation/admin-mstation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-mstation/admin-mstation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbXN0YXRpb24vYWRtaW4tbXN0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tc3RhdGlvbi9hZG1pbi1tc3RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNjcm9sbGFibGUge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-mstation/admin-mstation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-mstation/admin-mstation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"40\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let station of stations |filter:term\">\n\t\t\t\t<div fxFlex=\"50\" fxFlex.xs=\"60\">{{station.stationName}}</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(station)\" class=\"mat-button\">Edit</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(station)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(station)\" class=\"mat-button\">Remove</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(station)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"60\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"60\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Create Nursing Station</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Add a Nursing Station</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<form [formGroup]=\"createStationForm\" (ngSubmit)=\"onSubmit(createStationForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t\t \t    \t\t<input matInput placeholder=\"Enter station name\" type=\"text\" formControlName=\"stationName\">\n\t\t\t\t\t \t    \t\t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t\t\t\t \t    \t\t<mat-error *ngFor=\"let validation of validationMessages.stationName\">\n\t\t\t\t\t \t    \t    \t<mat-error class=\"error-message\" *ngIf=\"createStationForm.get('stationName').hasError(validation.type) && (createStationForm.get('stationName').dirty || createStationForm.get('stationName').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t\t \t    \t\t</mat-error>\n\t\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t\t \t\t</div>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createStationForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createStationForm.valid\">Submit</button>\n\t\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"40\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Nursing Station</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Filters</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"search station\" type=\"text\" [(ngModel)]=\"term\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-mstation/admin-mstation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-mstation/admin-mstation.component.ts ***!
  \************************************************************/
/*! exports provided: AdminMstationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMstationComponent", function() { return AdminMstationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _editstation_dialog_editstation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editstation-dialog/editstation-dialog.component */ "./src/app/editstation-dialog/editstation-dialog.component.ts");
/* harmony import */ var _deletestation_dialog_deletestation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deletestation-dialog/deletestation-dialog.component */ "./src/app/deletestation-dialog/deletestation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMstationComponent = /** @class */ (function () {
    function AdminMstationComponent(fb, admin, snackbar, dialog) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.stationData = {};
        this.stations = [];
        this.validationMessages = {
            'stationName': [
                { type: 'required', message: 'Station name is required' }
            ],
        };
        this.createStationForm = this.fb.group({
            stationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AdminMstationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readStation()
            .subscribe(function (res) {
            if (res.success) {
                _this.stations = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMstationComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.stationData = this.createStationForm.value;
        console.log(this.stationData);
        this.admin.createStation(this.stationData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.admin.readStation()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.stations = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createStationForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMstationComponent.prototype.openEditDialog = function (station) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            _id: station._id,
            stationName: station.stationName
        };
        var dialogRef = this.dialog.open(_editstation_dialog_editstation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditstationDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readStation()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.stations = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMstationComponent.prototype.openDeleteDialog = function (station) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            _id: station._id,
            stationName: station.stationName,
            title: 'Remove User'
        };
        var dialogRef = this.dialog.open(_deletestation_dialog_deletestation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeletestationDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readStation()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.stations = res.data;
                    }
                    else {
                        _this.stations = [];
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMstationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-mstation',
            template: __webpack_require__(/*! ./admin-mstation.component.html */ "./src/app/admin-mstation/admin-mstation.component.html"),
            styles: [__webpack_require__(/*! ./admin-mstation.component.css */ "./src/app/admin-mstation/admin-mstation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminMstationComponent);
    return AdminMstationComponent;
}());



/***/ }),

/***/ "./src/app/admin-muser/admin-muser.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-muser/admin-muser.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbXVzZXIvYWRtaW4tbXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tdXNlci9hZG1pbi1tdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNjcm9sbGFibGUge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-muser/admin-muser.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-muser/admin-muser.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"40\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let user of users |filter:term\">\n\t\t\t\t<div fxFlex=\"50\" fxFlex.xs=\"60\">{{user.userName}} <br>{{user.permission}}</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(user._id)\" class=\"mat-button\">Change Password</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(user._id)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"25\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(user)\" class=\"mat-button\">Remove</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDeleteDialog(user)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"60\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"60\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Create User Account</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Add a nurse/doctor account</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<form [formGroup]=\"createUserForm\" (ngSubmit)=\"onSubmit(createUserForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t \t    \t\t<input matInput placeholder=\"Enter username\" type=\"text\" formControlName=\"userName\">\n\t\t\t\t \t    \t\t<mat-icon matSuffix>person</mat-icon>\n\t\t\t\t \t    \t\t<mat-error *ngFor=\"let validation of validationMessages.userName\">\n\t\t\t\t \t    \t    \t<mat-error class=\"error-message\" *ngIf=\"createUserForm.get('userName').hasError(validation.type) && (createUserForm.get('userName').dirty || createUserForm.get('userName').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t    \t\t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t    \t<input matInput placeholder=\"Enter a password\" type=\"password\" formControlName=\"password\">\n\t\t\t\t \t  \t    \t<mat-icon matSuffix>vpn_key</mat-icon>\n\t\t\t\t \t  \t    \t<mat-error *ngFor=\"let validation of validationMessages.password\">\n\t\t\t\t \t  \t    \t    <mat-error class=\"error-message\" *ngIf=\"createUserForm.get('password').hasError(validation.type) && (createUserForm.get('password').dirty || createUserForm.get('password').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t  \t    \t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t    \t<input matInput placeholder=\"Confirm password\" type=\"password\" formControlName=\"confirmPassword\">\n\t\t\t\t \t  \t    \t<mat-icon matSuffix>vpn_key</mat-icon>\n\t\t\t\t \t  \t    \t<mat-error class=\"error-message\" *ngIf=\"createUserForm.controls.confirmPassword.invalid\">Password missmatch</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t  \t\t<mat-select placeholder=\"Account type\" formControlName=\"accountType\">\n\t\t\t\t \t  \t    \t\t<mat-option *ngFor=\"let accountType of accountTypes\" [value]=\"accountType.value\">\n\t\t\t\t \t  \t      \t\t\t{{accountType.viewValue}}\n\t\t\t\t \t  \t    \t\t</mat-option>\n\t\t\t\t \t  \t  \t\t</mat-select>\n\t\t\t\t \t  \t  \t\t<mat-icon matSuffix>account_box</mat-icon>\n\t\t\t\t \t  \t  \t\t<mat-error *ngFor=\"let validation of validationMessages.accountType\">\n\t\t\t\t \t  \t      \t\t<mat-error class=\"error-message\" *ngIf=\"createUserForm.get('accountType').hasError(validation.type) && (createUserForm.get('accountType').dirty || createUserForm.get('accountType').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t  \t  \t\t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t\t</div>\n\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createUserForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createUserForm.valid\">Submit</button>\n\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"40\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Accounts</mat-card-title>\n\t\t\t\t  \t<mat-card-subtitle>Filters</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"search user\" type=\"text\" [(ngModel)]=term>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-muser/admin-muser.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-muser/admin-muser.component.ts ***!
  \******************************************************/
/*! exports provided: AdminMuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMuserComponent", function() { return AdminMuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validator */ "./src/app/validator.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edituser_dialog_edituser_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edituser-dialog/edituser-dialog.component */ "./src/app/edituser-dialog/edituser-dialog.component.ts");
/* harmony import */ var _deleteuser_dialog_deleteuser_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../deleteuser-dialog/deleteuser-dialog.component */ "./src/app/deleteuser-dialog/deleteuser-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminMuserComponent = /** @class */ (function () {
    function AdminMuserComponent(fb, admin, router, snackbar, dialog) {
        var _this = this;
        this.fb = fb;
        this.admin = admin;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.accountTypes = [
            { value: 'nurse', viewValue: 'Nurse account' },
            { value: 'doctor', viewValue: 'Doctor account' }
        ];
        this.userData = {};
        this.users = [];
        this.validationMessages = {
            'userName': [
                { type: 'required', message: 'Username is required' },
                { type: 'validUsername', message: 'Your username has already been taken' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
            ],
            'accountType': [
                { type: 'required', message: 'Account type is required' }
            ]
        };
        this.createUserForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])],
            confirmPassword: ['', _validator__WEBPACK_IMPORTED_MODULE_4__["passValidator"]],
            accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        //Observable to update validator if password field changed again
        this.createUserForm.controls.password.valueChanges
            .subscribe(function (x) { return _this.createUserForm.controls.confirmPassword.updateValueAndValidity(); });
    }
    AdminMuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readUser()
            .subscribe(function (res) {
            if (res.success) {
                _this.users = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMuserComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.userData = this.createUserForm.value;
        this.admin.createUser(this.userData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.admin.readUser()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.users = res.data;
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createUserForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminMuserComponent.prototype.openEditDialog = function (userid) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '300px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            id: userid,
            title: 'Change password'
        };
        var dialogRef = this.dialog.open(_edituser_dialog_edituser_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EdituserDialogComponent"], dialogConfig);
    };
    AdminMuserComponent.prototype.openDeleteDialog = function (user) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            id: user._id,
            userName: user.userName,
            title: 'Remove User'
        };
        var dialogRef = this.dialog.open(_deleteuser_dialog_deleteuser_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteuserDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.admin.readUser()
                    .subscribe(function (res) {
                    if (res.success) {
                        console.log(res);
                        _this.users = res.data;
                    }
                    else {
                        _this.users = [];
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AdminMuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-muser',
            template: __webpack_require__(/*! ./admin-muser.component.html */ "./src/app/admin-muser/admin-muser.component.html"),
            styles: [__webpack_require__(/*! ./admin-muser.component.css */ "./src/app/admin-muser/admin-muser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AdminMuserComponent);
    return AdminMuserComponent;
}());



/***/ }),

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http, router) {
        this.http = http;
        this.router = router;
        this.manageUserUrl = 'http://173.230.145.245:4000/api/admin/user';
        this.manageStationUrl = 'http://173.230.145.245:4000/api/admin/station';
        this.manageBedUrl = 'http://173.230.145.245:4000/api/admin/bed';
        this.manageIvsetUrl = 'http://173.230.145.245:4000/api/admin/ivset';
        this.manageDripoUrl = 'http://173.230.145.245:4000/api/admin/dripo';
    }
    AdminService.prototype.createUser = function (userData) {
        return this.http.post(this.manageUserUrl, userData);
    };
    AdminService.prototype.readUser = function () {
        return this.http.get(this.manageUserUrl);
    };
    AdminService.prototype.updateUser = function (editUserData) {
        return this.http.put(this.manageUserUrl, editUserData);
    };
    AdminService.prototype.deleteUser = function (deleteUserData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteUserData.id);
        return this.http.delete(this.manageUserUrl, { params: params });
    };
    AdminService.prototype.createStation = function (stationData) {
        return this.http.post(this.manageStationUrl, stationData);
    };
    AdminService.prototype.readStation = function () {
        return this.http.get(this.manageStationUrl);
    };
    AdminService.prototype.updateStation = function (stationData) {
        return this.http.put(this.manageStationUrl, stationData);
    };
    AdminService.prototype.deleteStation = function (deleteStationData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteStationData._id);
        return this.http.delete(this.manageStationUrl, { params: params });
    };
    AdminService.prototype.createBed = function (bedData) {
        return this.http.post(this.manageBedUrl, bedData);
    };
    AdminService.prototype.readBed = function () {
        return this.http.get(this.manageBedUrl);
    };
    AdminService.prototype.updateBed = function (bedData) {
        return this.http.put(this.manageBedUrl, bedData);
    };
    AdminService.prototype.deleteBed = function (deleteBedData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteBedData._id);
        return this.http.delete(this.manageBedUrl, { params: params });
    };
    AdminService.prototype.createIvset = function (ivsetData) {
        return this.http.post(this.manageIvsetUrl, ivsetData);
    };
    AdminService.prototype.readIvset = function () {
        return this.http.get(this.manageIvsetUrl);
    };
    AdminService.prototype.updateIvset = function (ivsetData) {
        return this.http.put(this.manageIvsetUrl, ivsetData);
    };
    AdminService.prototype.deleteIvset = function (deleteIvsetData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteIvsetData._id);
        return this.http.delete(this.manageIvsetUrl, { params: params });
    };
    AdminService.prototype.createDripo = function (dripoData) {
        return this.http.post(this.manageDripoUrl, dripoData);
    };
    AdminService.prototype.readDripo = function () {
        return this.http.get(this.manageDripoUrl);
    };
    AdminService.prototype.updateDripo = function (dripoData) {
        return this.http.put(this.manageDripoUrl, dripoData);
    };
    AdminService.prototype.deleteDripo = function (deleteDripoData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteDripoData._id);
        return this.http.delete(this.manageDripoUrl, { params: params });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _select_station_select_station_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-station/select-station.component */ "./src/app/select-station/select-station.component.ts");
/* harmony import */ var _nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nurse-home/nurse-home.component */ "./src/app/nurse-home/nurse-home.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_muser_admin_muser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-muser/admin-muser.component */ "./src/app/admin-muser/admin-muser.component.ts");
/* harmony import */ var _admin_mstation_admin_mstation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-mstation/admin-mstation.component */ "./src/app/admin-mstation/admin-mstation.component.ts");
/* harmony import */ var _admin_mbed_admin_mbed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-mbed/admin-mbed.component */ "./src/app/admin-mbed/admin-mbed.component.ts");
/* harmony import */ var _admin_mivset_admin_mivset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-mivset/admin-mivset.component */ "./src/app/admin-mivset/admin-mivset.component.ts");
/* harmony import */ var _admin_mdripo_admin_mdripo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-mdripo/admin-mdripo.component */ "./src/app/admin-mdripo/admin-mdripo.component.ts");
/* harmony import */ var _nurse_mpatient_nurse_mpatient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nurse-mpatient/nurse-mpatient.component */ "./src/app/nurse-mpatient/nurse-mpatient.component.ts");
/* harmony import */ var _nurse_phistory_nurse_phistory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nurse-phistory/nurse-phistory.component */ "./src/app/nurse-phistory/nurse-phistory.component.ts");
/* harmony import */ var _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./activate-account/activate-account.component */ "./src/app/activate-account/activate-account.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _role_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role-guard.service */ "./src/app/role-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '*',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'activate/:token',
        component: _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_15__["ActivateAccountComponent"]
    },
    {
        path: 'forgotpassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"]
    },
    {
        path: 'resetpassword/:token',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'unauthorized',
        component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedComponent"]
    },
    {
        path: 'admin/home',
        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_7__["AdminHomeComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'admin/manageusers',
        component: _admin_muser_admin_muser_component__WEBPACK_IMPORTED_MODULE_8__["AdminMuserComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'admin/managestations',
        component: _admin_mstation_admin_mstation_component__WEBPACK_IMPORTED_MODULE_9__["AdminMstationComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'admin/managebeds',
        component: _admin_mbed_admin_mbed_component__WEBPACK_IMPORTED_MODULE_10__["AdminMbedComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'admin/manageivsets',
        component: _admin_mivset_admin_mivset_component__WEBPACK_IMPORTED_MODULE_11__["AdminMivsetComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'admin/managedripos',
        component: _admin_mdripo_admin_mdripo_component__WEBPACK_IMPORTED_MODULE_12__["AdminMdripoComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'admin'
        }
    },
    {
        path: 'nurse/selectstation',
        component: _select_station_select_station_component__WEBPACK_IMPORTED_MODULE_5__["SelectStationComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'nurse'
        }
    },
    {
        path: 'nurse/home',
        component: _nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_6__["NurseHomeComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'nurse'
        }
    },
    {
        path: 'nurse/managepatients',
        component: _nurse_mpatient_nurse_mpatient_component__WEBPACK_IMPORTED_MODULE_13__["NurseMpatientComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'nurse'
        }
    },
    {
        path: 'nurse/patienthistory/:id',
        component: _nurse_phistory_nurse_phistory_component__WEBPACK_IMPORTED_MODULE_14__["NursePhistoryComponent"],
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["RoleGuardService"]],
        data: {
            expectedRole: 'nurse'
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-spacer {\n    flex: 1 1 auto;\n}\n.toolbar-active{\n\tcolor:black;\n}\n.main-container {\n  width: 100%;\n  height: 94%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  background: #eee;\n\n}\n.active-list-item {\n  color: #3F51B5 !important; /* Note: You could also use a custom theme */\n  background-color: inherit !important;\n}\n.mat-list-item{\n\tbackground-color: inherit !important;\n\n}\n.form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGlCQUFpQjs7Q0FFbEI7QUFHRDtFQUNFLDBCQUEwQixDQUFDLDZDQUE2QztFQUN4RSxxQ0FBcUM7Q0FDdEM7QUFDRDtDQUNDLHFDQUFxQzs7Q0FFckM7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG4udG9vbGJhci1hY3RpdmV7XG5cdGNvbG9yOmJsYWNrO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTQlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG5cbn1cblxuXG4uYWN0aXZlLWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjM0Y1MUI1ICFpbXBvcnRhbnQ7IC8qIE5vdGU6IFlvdSBjb3VsZCBhbHNvIHVzZSBhIGN1c3RvbSB0aGVtZSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWxpc3QtaXRlbXtcblx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuXG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\t<button mat-icon-button *ngIf=\"authService.loggedIn() && authService.stationSelected()\" aria-label=\"Toggle sidenav\" (click)=\"drawer.toggle()\"><mat-icon>menu</mat-icon></button>\n  \t<span *ngIf=\"!authService.loggedIn()\">Evelabs Care</span>\n  \t<span class=\"toolbar-spacer\"></span>\n  \t<button *ngIf=\"!authService.loggedIn()\" mat-button routerLink=\"/login\" routerLinkActive=\"toolbar-active\">Login</button>\n  \t<button *ngIf=\"!authService.loggedIn()\" mat-button routerLink=\"/register\" routerLinkActive=\"toolbar-active\">Register</button>\n    <button *ngIf=\"nursePermission()\" mat-button>{{authService.getStationName()}}</button>\n  \t<button *ngIf=\"authService.loggedIn()\" mat-button [matMenuTriggerFor]=\"accountMenu\" routerLinkActive=\"toolbar-active\"><mat-icon>account_circle</mat-icon></button>\n  \t<mat-menu #accountMenu=\"matMenu\">\n  \t  <button mat-menu-item disabled>\n  \t      <mat-icon>person_outline</mat-icon>\n  \t      <span>{{authService.getUserName()}}</span>\n  \t    </button>\n  \t    <button mat-menu-item disabled>\n  \t      <mat-icon>local_hospital</mat-icon>\n  \t      <span>{{authService.getHospitalName()}}</span>\n  \t    </button>\n  \t    <button mat-menu-item (click)=\"authService.logoutUser()\">\n  \t      <mat-icon>power_settings_new</mat-icon>\n  \t      <span>Logout</span>\n  \t    </button>\n  \t</mat-menu>\n\n</mat-toolbar>\n<mat-sidenav-container class=\"main-container\" [hasBackdrop]=\"true\">\n\t<mat-sidenav #drawer mode=\"over\" closed role=\"navigation\">\n    \t<mat-nav-list  *ngFor=\"let item of authService.getMenu()\" (click)=\"drawer.close()\">\n      \t\t<a mat-list-item routerLinkActive=\"active-list-item\" routerLink='{{item.href}}' style=\"padding-right: 20px;\"><mat-icon style=\"padding-right: 20px;\">{{item.icon}}</mat-icon><span>{{item.menu}}</span></a>\n    \t</mat-nav-list>\n  \t</mat-sidenav>\n  \t<mat-sidenav-content>\n    \t<router-outlet></router-outlet>\n  \t</mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'EvelabsCare';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.menuItems = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            if (decodedToken.permission == 'nurse' && decodedToken.stationName) {
                this.router.navigate(['/nurse/home']);
            }
            else if (decodedToken.permission == 'nurse' && !decodedToken.stationName) {
                this.router.navigate(['/nurse/selectstation']);
            }
            else if (decodedToken.permission == 'admin') {
                this.router.navigate(['/admin/home']);
            }
        }
        else {
            // this.router.navigate(['/login'])
        }
    };
    AppComponent.prototype.adminPermission = function () {
        if (this.authService.loggedIn()) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            if (decodedToken.permission == 'admin') {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AppComponent.prototype.nursePermission = function () {
        if (this.authService.loggedIn()) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            if (decodedToken.permission == 'nurse') {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _select_station_select_station_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select-station/select-station.component */ "./src/app/select-station/select-station.component.ts");
/* harmony import */ var _nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nurse-home/nurse-home.component */ "./src/app/nurse-home/nurse-home.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nurse.service */ "./src/app/nurse.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _admin_mstation_admin_mstation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-mstation/admin-mstation.component */ "./src/app/admin-mstation/admin-mstation.component.ts");
/* harmony import */ var _admin_muser_admin_muser_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-muser/admin-muser.component */ "./src/app/admin-muser/admin-muser.component.ts");
/* harmony import */ var _admin_mbed_admin_mbed_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-mbed/admin-mbed.component */ "./src/app/admin-mbed/admin-mbed.component.ts");
/* harmony import */ var _admin_mivset_admin_mivset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-mivset/admin-mivset.component */ "./src/app/admin-mivset/admin-mivset.component.ts");
/* harmony import */ var _admin_mdripo_admin_mdripo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-mdripo/admin-mdripo.component */ "./src/app/admin-mdripo/admin-mdripo.component.ts");
/* harmony import */ var _edituser_dialog_edituser_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edituser-dialog/edituser-dialog.component */ "./src/app/edituser-dialog/edituser-dialog.component.ts");
/* harmony import */ var _deleteuser_dialog_deleteuser_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./deleteuser-dialog/deleteuser-dialog.component */ "./src/app/deleteuser-dialog/deleteuser-dialog.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _editstation_dialog_editstation_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editstation-dialog/editstation-dialog.component */ "./src/app/editstation-dialog/editstation-dialog.component.ts");
/* harmony import */ var _deletestation_dialog_deletestation_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./deletestation-dialog/deletestation-dialog.component */ "./src/app/deletestation-dialog/deletestation-dialog.component.ts");
/* harmony import */ var _editbed_dialog_editbed_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./editbed-dialog/editbed-dialog.component */ "./src/app/editbed-dialog/editbed-dialog.component.ts");
/* harmony import */ var _deletebed_dialog_deletebed_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./deletebed-dialog/deletebed-dialog.component */ "./src/app/deletebed-dialog/deletebed-dialog.component.ts");
/* harmony import */ var _editivset_dialog_editivset_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./editivset-dialog/editivset-dialog.component */ "./src/app/editivset-dialog/editivset-dialog.component.ts");
/* harmony import */ var _deleteivset_dialog_deleteivset_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./deleteivset-dialog/deleteivset-dialog.component */ "./src/app/deleteivset-dialog/deleteivset-dialog.component.ts");
/* harmony import */ var _editdripo_dialog_editdripo_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./editdripo-dialog/editdripo-dialog.component */ "./src/app/editdripo-dialog/editdripo-dialog.component.ts");
/* harmony import */ var _deletedripo_dialog_deletedripo_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./deletedripo-dialog/deletedripo-dialog.component */ "./src/app/deletedripo-dialog/deletedripo-dialog.component.ts");
/* harmony import */ var _nurse_mpatient_nurse_mpatient_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./nurse-mpatient/nurse-mpatient.component */ "./src/app/nurse-mpatient/nurse-mpatient.component.ts");
/* harmony import */ var _editpatient_dialog_editpatient_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./editpatient-dialog/editpatient-dialog.component */ "./src/app/editpatient-dialog/editpatient-dialog.component.ts");
/* harmony import */ var _dischargepatient_dialog_dischargepatient_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dischargepatient-dialog/dischargepatient-dialog.component */ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.ts");
/* harmony import */ var _addtask_dialog_addtask_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./addtask-dialog/addtask-dialog.component */ "./src/app/addtask-dialog/addtask-dialog.component.ts");
/* harmony import */ var _taskactivity_dialog_taskactivity_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./taskactivity-dialog/taskactivity-dialog.component */ "./src/app/taskactivity-dialog/taskactivity-dialog.component.ts");
/* harmony import */ var _nurse_phistory_nurse_phistory_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nurse-phistory/nurse-phistory.component */ "./src/app/nurse-phistory/nurse-phistory.component.ts");
/* harmony import */ var _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./activate-account/activate-account.component */ "./src/app/activate-account/activate-account.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _select_station_select_station_component__WEBPACK_IMPORTED_MODULE_12__["SelectStationComponent"],
                _nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_13__["NurseHomeComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_19__["AdminHomeComponent"],
                _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_20__["UnauthorizedComponent"],
                _admin_mstation_admin_mstation_component__WEBPACK_IMPORTED_MODULE_21__["AdminMstationComponent"],
                _admin_muser_admin_muser_component__WEBPACK_IMPORTED_MODULE_22__["AdminMuserComponent"],
                _admin_mbed_admin_mbed_component__WEBPACK_IMPORTED_MODULE_23__["AdminMbedComponent"],
                _admin_mivset_admin_mivset_component__WEBPACK_IMPORTED_MODULE_24__["AdminMivsetComponent"],
                _admin_mdripo_admin_mdripo_component__WEBPACK_IMPORTED_MODULE_25__["AdminMdripoComponent"],
                _edituser_dialog_edituser_dialog_component__WEBPACK_IMPORTED_MODULE_26__["EdituserDialogComponent"],
                _deleteuser_dialog_deleteuser_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DeleteuserDialogComponent"],
                _editstation_dialog_editstation_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EditstationDialogComponent"],
                _deletestation_dialog_deletestation_dialog_component__WEBPACK_IMPORTED_MODULE_30__["DeletestationDialogComponent"],
                _editbed_dialog_editbed_dialog_component__WEBPACK_IMPORTED_MODULE_31__["EditbedDialogComponent"],
                _deletebed_dialog_deletebed_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DeletebedDialogComponent"],
                _editivset_dialog_editivset_dialog_component__WEBPACK_IMPORTED_MODULE_33__["EditivsetDialogComponent"],
                _deleteivset_dialog_deleteivset_dialog_component__WEBPACK_IMPORTED_MODULE_34__["DeleteivsetDialogComponent"],
                _editdripo_dialog_editdripo_dialog_component__WEBPACK_IMPORTED_MODULE_35__["EditdripoDialogComponent"],
                _deletedripo_dialog_deletedripo_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DeletedripoDialogComponent"],
                _nurse_mpatient_nurse_mpatient_component__WEBPACK_IMPORTED_MODULE_37__["NurseMpatientComponent"],
                _editpatient_dialog_editpatient_dialog_component__WEBPACK_IMPORTED_MODULE_38__["EditpatientDialogComponent"],
                _dischargepatient_dialog_dischargepatient_dialog_component__WEBPACK_IMPORTED_MODULE_39__["DischargepatientDialogComponent"],
                _addtask_dialog_addtask_dialog_component__WEBPACK_IMPORTED_MODULE_40__["AddtaskDialogComponent"],
                _taskactivity_dialog_taskactivity_dialog_component__WEBPACK_IMPORTED_MODULE_41__["TaskactivityDialogComponent"],
                _nurse_phistory_nurse_phistory_component__WEBPACK_IMPORTED_MODULE_42__["NursePhistoryComponent"],
                _activate_account_activate_account_component__WEBPACK_IMPORTED_MODULE_43__["ActivateAccountComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_44__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_45__["ResetPasswordComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_8__["SlickModule"].forRoot(),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_28__["Ng2SearchPipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"],
                    multi: true
                }, _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _admin_service__WEBPACK_IMPORTED_MODULE_15__["AdminService"], _nurse_service__WEBPACK_IMPORTED_MODULE_16__["NurseService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_edituser_dialog_edituser_dialog_component__WEBPACK_IMPORTED_MODULE_26__["EdituserDialogComponent"], _deleteuser_dialog_deleteuser_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DeleteuserDialogComponent"], _editstation_dialog_editstation_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EditstationDialogComponent"],
                _deletestation_dialog_deletestation_dialog_component__WEBPACK_IMPORTED_MODULE_30__["DeletestationDialogComponent"], _editbed_dialog_editbed_dialog_component__WEBPACK_IMPORTED_MODULE_31__["EditbedDialogComponent"], _deletebed_dialog_deletebed_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DeletebedDialogComponent"], _editivset_dialog_editivset_dialog_component__WEBPACK_IMPORTED_MODULE_33__["EditivsetDialogComponent"],
                _deleteivset_dialog_deleteivset_dialog_component__WEBPACK_IMPORTED_MODULE_34__["DeleteivsetDialogComponent"], _editdripo_dialog_editdripo_dialog_component__WEBPACK_IMPORTED_MODULE_35__["EditdripoDialogComponent"], _deletedripo_dialog_deletedripo_dialog_component__WEBPACK_IMPORTED_MODULE_36__["DeletedripoDialogComponent"], _editpatient_dialog_editpatient_dialog_component__WEBPACK_IMPORTED_MODULE_38__["EditpatientDialogComponent"],
                _dischargepatient_dialog_dischargepatient_dialog_component__WEBPACK_IMPORTED_MODULE_39__["DischargepatientDialogComponent"], _addtask_dialog_addtask_dialog_component__WEBPACK_IMPORTED_MODULE_40__["AddtaskDialogComponent"], _taskactivity_dialog_taskactivity_dialog_component__WEBPACK_IMPORTED_MODULE_41__["TaskactivityDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.registerUrl = "http://173.230.145.245:4000/api/register";
        this.loginUrl = "http://173.230.145.245:4000/api/login";
        this.activateAccountUrl = "http://173.230.145.245:4000/api/activate";
        this.forgotPasswordUrl = "http://173.230.145.245:4000/api/forgotpassword";
        this.resetPasswordUrl = "http://173.230.145.245:4000/api/resetpassword";
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.nullArray = [{}];
        this.adminMenuItems = [{ menu: 'Home', icon: 'home', href: '/admin/home' },
            { menu: 'Manage User', icon: 'account_circle', href: '/admin/manageusers' },
            { menu: 'Manage Station', icon: 'important_devices', href: '/admin/managestations' },
            { menu: 'Manage Beds', icon: 'hotel', href: '/admin/managebeds' },
            { menu: 'Manage Ivset', icon: 'opacity', href: '/admin/manageivsets' },
            { menu: 'Manage Dripo', icon: 'speaker_phone', href: '/admin/managedripos' }];
        this.nurseMenuItems = [{ menu: 'Home', icon: 'home', href: 'nurse/home' },
            { menu: 'Manage Patient', icon: 'people', href: 'nurse/managepatients' }];
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    AuthService.prototype.activateAccount = function (token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("token", token);
        return this.http.get(this.activateAccountUrl, { params: params });
    };
    AuthService.prototype.forgotPassword = function (userData) {
        return this.http.put(this.forgotPasswordUrl, userData);
    };
    AuthService.prototype.checkResetPasswordLink = function (token) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("token", token);
        return this.http.get(this.resetPasswordUrl, { params: params });
    };
    AuthService.prototype.resetPassword = function (resetData) {
        return this.http.post(this.resetPasswordUrl, resetData);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        var decodedToken = this.jwtHelper.decodeToken(token);
        if (decodedToken) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.stationSelected = function () {
        if (!!localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            this.stationName = decodedToken.stationName;
            if (decodedToken.permission == 'admin') {
                return true;
            }
            else if (decodedToken.permission == 'nurse' && !this.stationName) {
                return false;
            }
            else if (decodedToken.permission == 'nurse' && this.stationName) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    //function to set dashboard for different accounts
    AuthService.prototype.getMenu = function () {
        if (!!localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            if (decodedToken.permission == 'admin') {
                return this.adminMenuItems;
            }
            else if (decodedToken.permission == 'nurse') {
                return this.nurseMenuItems;
            }
            else {
                return this.nullArray;
            }
        }
        else {
            return this.nullArray;
        }
    };
    AuthService.prototype.getUserName = function () {
        if (!!localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            this.userName = decodedToken.userName;
            return this.userName;
        }
        else {
            return 'username';
        }
    };
    AuthService.prototype.getHospitalName = function () {
        if (!!localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            this.hospitalName = decodedToken.hospitalName;
            return this.hospitalName;
        }
        else {
            return 'hospitalname';
        }
    };
    AuthService.prototype.getStationName = function () {
        if (!!localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var decodedToken = this.jwtHelper.decodeToken(token);
            this.stationName = decodedToken.stationName;
            return this.stationName;
        }
        else {
            return 'stationName';
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/deletebed-dialog/deletebed-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/deletebed-dialog/deletebed-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWJlZC1kaWFsb2cvZGVsZXRlYmVkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/deletebed-dialog/deletebed-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/deletebed-dialog/deletebed-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Remove Bed</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to remove {{deleteBedData.bedName}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeBed()\">Remove</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/deletebed-dialog/deletebed-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/deletebed-dialog/deletebed-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DeletebedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletebedDialogComponent", function() { return DeletebedDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeletebedDialogComponent = /** @class */ (function () {
    function DeletebedDialogComponent(admin, snackbar, dialogRef, data) {
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteBedData = { bedName: '' };
        this.deleteBedData = data;
    }
    DeletebedDialogComponent.prototype.ngOnInit = function () {
    };
    DeletebedDialogComponent.prototype.removeBed = function () {
        var _this = this;
        this.admin.deleteBed(this.deleteBedData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DeletebedDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deletebed-dialog',
            template: __webpack_require__(/*! ./deletebed-dialog.component.html */ "./src/app/deletebed-dialog/deletebed-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deletebed-dialog.component.css */ "./src/app/deletebed-dialog/deletebed-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeletebedDialogComponent);
    return DeletebedDialogComponent;
}());



/***/ }),

/***/ "./src/app/deletedripo-dialog/deletedripo-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/deletedripo-dialog/deletedripo-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWRyaXBvLWRpYWxvZy9kZWxldGVkcmlwby1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/deletedripo-dialog/deletedripo-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/deletedripo-dialog/deletedripo-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Remove Dripo</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to remove {{deleteDripoData.dripoId}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeDripo()\">Remove</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/deletedripo-dialog/deletedripo-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deletedripo-dialog/deletedripo-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: DeletedripoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletedripoDialogComponent", function() { return DeletedripoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeletedripoDialogComponent = /** @class */ (function () {
    function DeletedripoDialogComponent(admin, snackbar, dialogRef, data) {
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteDripoData = { dripoId: '' };
        this.deleteDripoData = data;
    }
    DeletedripoDialogComponent.prototype.ngOnInit = function () {
    };
    DeletedripoDialogComponent.prototype.removeDripo = function () {
        var _this = this;
        this.admin.deleteDripo(this.deleteDripoData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DeletedripoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deletedripo-dialog',
            template: __webpack_require__(/*! ./deletedripo-dialog.component.html */ "./src/app/deletedripo-dialog/deletedripo-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deletedripo-dialog.component.css */ "./src/app/deletedripo-dialog/deletedripo-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeletedripoDialogComponent);
    return DeletedripoDialogComponent;
}());



/***/ }),

/***/ "./src/app/deleteivset-dialog/deleteivset-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/deleteivset-dialog/deleteivset-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZWl2c2V0LWRpYWxvZy9kZWxldGVpdnNldC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/deleteivset-dialog/deleteivset-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/deleteivset-dialog/deleteivset-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Remove Ivset</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to remove {{deleteIvsetData.ivsetModel}} with dpf {{deleteIvsetData.ivsetDpf}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeIvset()\">Remove</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/deleteivset-dialog/deleteivset-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deleteivset-dialog/deleteivset-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteivsetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteivsetDialogComponent", function() { return DeleteivsetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeleteivsetDialogComponent = /** @class */ (function () {
    function DeleteivsetDialogComponent(admin, snackbar, dialogRef, data) {
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteIvsetData = { ivsetModel: '', ivsetDpf: '' };
        this.deleteIvsetData = data;
    }
    DeleteivsetDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteivsetDialogComponent.prototype.removeIvset = function () {
        var _this = this;
        this.admin.deleteIvset(this.deleteIvsetData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DeleteivsetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deleteivset-dialog',
            template: __webpack_require__(/*! ./deleteivset-dialog.component.html */ "./src/app/deleteivset-dialog/deleteivset-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deleteivset-dialog.component.css */ "./src/app/deleteivset-dialog/deleteivset-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteivsetDialogComponent);
    return DeleteivsetDialogComponent;
}());



/***/ }),

/***/ "./src/app/deletestation-dialog/deletestation-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/deletestation-dialog/deletestation-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZXN0YXRpb24tZGlhbG9nL2RlbGV0ZXN0YXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/deletestation-dialog/deletestation-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/deletestation-dialog/deletestation-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Remove Station</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to remove {{deleteStationData.stationName}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeStation()\">Remove</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/deletestation-dialog/deletestation-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/deletestation-dialog/deletestation-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: DeletestationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletestationDialogComponent", function() { return DeletestationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeletestationDialogComponent = /** @class */ (function () {
    function DeletestationDialogComponent(admin, snackbar, dialogRef, data) {
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteStationData = { stationName: '' };
        this.deleteStationData = data;
    }
    DeletestationDialogComponent.prototype.ngOnInit = function () {
    };
    DeletestationDialogComponent.prototype.removeStation = function () {
        var _this = this;
        this.admin.deleteStation(this.deleteStationData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DeletestationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deletestation-dialog',
            template: __webpack_require__(/*! ./deletestation-dialog.component.html */ "./src/app/deletestation-dialog/deletestation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deletestation-dialog.component.css */ "./src/app/deletestation-dialog/deletestation-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeletestationDialogComponent);
    return DeletestationDialogComponent;
}());



/***/ }),

/***/ "./src/app/deleteuser-dialog/deleteuser-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/deleteuser-dialog/deleteuser-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZXVzZXItZGlhbG9nL2RlbGV0ZXVzZXItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/deleteuser-dialog/deleteuser-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/deleteuser-dialog/deleteuser-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 mat-dialog-title>Remove User</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to remove {{deleteUserData.userName}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeUser()\">Remove</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/deleteuser-dialog/deleteuser-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/deleteuser-dialog/deleteuser-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteuserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteuserDialogComponent", function() { return DeleteuserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeleteuserDialogComponent = /** @class */ (function () {
    function DeleteuserDialogComponent(admin, snackbar, dialogRef, data) {
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteUserData = { userName: '' };
        this.deleteUserData = data;
    }
    DeleteuserDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteuserDialogComponent.prototype.removeUser = function () {
        var _this = this;
        this.admin.deleteUser(this.deleteUserData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DeleteuserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deleteuser-dialog',
            template: __webpack_require__(/*! ./deleteuser-dialog.component.html */ "./src/app/deleteuser-dialog/deleteuser-dialog.component.html"),
            styles: [__webpack_require__(/*! ./deleteuser-dialog.component.css */ "./src/app/deleteuser-dialog/deleteuser-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteuserDialogComponent);
    return DeleteuserDialogComponent;
}());



/***/ }),

/***/ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dischargepatient-dialog/dischargepatient-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NoYXJnZXBhdGllbnQtZGlhbG9nL2Rpc2NoYXJnZXBhdGllbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dischargepatient-dialog/dischargepatient-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Discharge Patient</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to discharge {{dischargePatientData.patientName}} from {{dischargePatientData.bedName}} ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removePatient()\">Remove</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dischargepatient-dialog/dischargepatient-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: DischargepatientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DischargepatientDialogComponent", function() { return DischargepatientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DischargepatientDialogComponent = /** @class */ (function () {
    function DischargepatientDialogComponent(nurse, snackbar, dialogRef, data) {
        this.nurse = nurse;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.dischargePatientData = { bedName: '', patientName: '' };
        this.dischargePatientData = data;
    }
    DischargepatientDialogComponent.prototype.ngOnInit = function () {
    };
    DischargepatientDialogComponent.prototype.removePatient = function () {
        var _this = this;
        this.nurse.dischargePatient(this.dischargePatientData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    DischargepatientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dischargepatient-dialog',
            template: __webpack_require__(/*! ./dischargepatient-dialog.component.html */ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.html"),
            styles: [__webpack_require__(/*! ./dischargepatient-dialog.component.css */ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_nurse_service__WEBPACK_IMPORTED_MODULE_2__["NurseService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DischargepatientDialogComponent);
    return DischargepatientDialogComponent;
}());



/***/ }),

/***/ "./src/app/editbed-dialog/editbed-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/editbed-dialog/editbed-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGJlZC1kaWFsb2cvZWRpdGJlZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0YmVkLWRpYWxvZy9lZGl0YmVkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editbed-dialog/editbed-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/editbed-dialog/editbed-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Bed</h2>\n<mat-dialog-content>\n\t<form [formGroup]=\"editBedForm\" (ngSubmit)=\"onSubmit(editBedForm)\" >\n\t\t<div class=\"form-container\">\n\t\t\t<mat-form-field>\n\t\t    \t<input matInput placeholder=\"Enter bed name\" type=\"text\" formControlName=\"bedName\">\n\t\t    \t<mat-icon matSuffix>hotel</mat-icon>\n\t\t    \t<mat-error *ngFor=\"let validation of validationMessages.bedName\">\n\t\t    \t    <mat-error class=\"error-message\" *ngIf=\"editBedForm.get('bedName').hasError(validation.type) && (editBedForm.get('bedName').dirty || editBedForm.get('bedName').touched)\">{{validation.message}}</mat-error>\n\t\t    \t</mat-error>\n\t\t  \t</mat-form-field>\n\t\t</div>\n\t\t<button mat-raised-button color=\"accent\"  type=\"reset\" [mat-dialog-close]=\"true\" style=\"margin-right: 20px;\">cancel</button>\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!editBedForm.valid\">Submit</button>\n\t</form>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/editbed-dialog/editbed-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/editbed-dialog/editbed-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: EditbedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbedDialogComponent", function() { return EditbedDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditbedDialogComponent = /** @class */ (function () {
    function EditbedDialogComponent(fb, admin, snackbar, dialogRef, data) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editBedId = { '_id': '' };
        this.editBedData = { '_id': '' };
        this.validationMessages = {
            'bedName': [
                { type: 'required', message: 'Bed name is required' }
            ],
        };
        this.editBedId = data;
        this.editBedForm = this.fb.group({
            bedName: [data.bedName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EditbedDialogComponent.prototype.ngOnInit = function () {
    };
    EditbedDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editBedData = this.editBedForm.value;
        this.editBedData._id = this.editBedId._id;
        this.admin.updateBed(this.editBedData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditbedDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editbed-dialog',
            template: __webpack_require__(/*! ./editbed-dialog.component.html */ "./src/app/editbed-dialog/editbed-dialog.component.html"),
            styles: [__webpack_require__(/*! ./editbed-dialog.component.css */ "./src/app/editbed-dialog/editbed-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditbedDialogComponent);
    return EditbedDialogComponent;
}());



/***/ }),

/***/ "./src/app/editdripo-dialog/editdripo-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/editdripo-dialog/editdripo-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGRyaXBvLWRpYWxvZy9lZGl0ZHJpcG8tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdGRyaXBvLWRpYWxvZy9lZGl0ZHJpcG8tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editdripo-dialog/editdripo-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/editdripo-dialog/editdripo-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Dripo</h2>\n<mat-dialog-content>\n\t<form [formGroup]=\"editDripoForm\" (ngSubmit)=\"onSubmit(editDripoForm)\" >\n\t\t<div class=\"form-container\">\n\t\t\t<mat-form-field>\n\t\t\t  \t<mat-select placeholder=\"Station\" formControlName=\"stationId\">\n\t\t\t    \t<mat-option *ngFor=\"let station of stations\" [value]=\"station._id\">\n\t\t\t      \t\t{{station.stationName}}\n\t\t\t    \t</mat-option>\n\t\t\t  \t</mat-select>\n\t\t\t  \t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t\t  \t<mat-error *ngFor=\"let validation of validationMessages.stationId\">\n\t\t\t      \t<mat-error class=\"error-message\" *ngIf=\"editDripoForm.get('stationId').hasError(validation.type) && (editDripoForm.get('stationId').dirty || editDripoForm.get('stationId').touched)\">{{validation.message}}</mat-error>\n\t\t\t  \t</mat-error>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t    <input matInput placeholder=\"Enter dripo id\" type=\"text\" formControlName=dripoId>\n\t\t\t    <mat-icon matSuffix>speaker_phone</mat-icon>\n\t\t\t    <mat-error *ngFor=\"let validation of validationMessages.dripoId\">\n\t\t\t    \t<mat-error class=\"error-message\" *ngIf=\"editDripoForm.get('dripoId').hasError(validation.type) && (editDripoForm.get('dripoId').dirty || editDripoForm.get('dripoId').touched)\">{{validation.message}}</mat-error>\n\t\t\t    </mat-error>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<button mat-raised-button color=\"accent\"  type=\"reset\" [mat-dialog-close]=\"true\" style=\"margin-right: 20px;\">cancel</button>\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!editDripoForm.valid\">Submit</button>\n\t</form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/editdripo-dialog/editdripo-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/editdripo-dialog/editdripo-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EditdripoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdripoDialogComponent", function() { return EditdripoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditdripoDialogComponent = /** @class */ (function () {
    function EditdripoDialogComponent(fb, admin, snackbar, dialogRef, data) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editDripoId = { '_id': '' };
        this.editDripoData = { '_id': '' };
        this.stations = [];
        this.validationMessages = {
            'stationId': [
                { type: 'required', message: 'Station name is required' }
            ],
            'dripoId': [
                { type: 'required', message: 'dripo id is required' }
            ]
        };
        this.editDripoId = data;
        this.editDripoForm = this.fb.group({
            stationId: [data.stationId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dripoId: [data.dripoId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EditdripoDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.readStation()
            .subscribe(function (res) {
            if (res.success) {
                _this.stations = res.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditdripoDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editDripoData = this.editDripoForm.value;
        this.editDripoData._id = this.editDripoId._id;
        this.admin.updateDripo(this.editDripoData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditdripoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editdripo-dialog',
            template: __webpack_require__(/*! ./editdripo-dialog.component.html */ "./src/app/editdripo-dialog/editdripo-dialog.component.html"),
            styles: [__webpack_require__(/*! ./editdripo-dialog.component.css */ "./src/app/editdripo-dialog/editdripo-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditdripoDialogComponent);
    return EditdripoDialogComponent;
}());



/***/ }),

/***/ "./src/app/editivset-dialog/editivset-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/editivset-dialog/editivset-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdGl2c2V0LWRpYWxvZy9lZGl0aXZzZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdGl2c2V0LWRpYWxvZy9lZGl0aXZzZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editivset-dialog/editivset-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/editivset-dialog/editivset-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Ivset</h2>\n<mat-dialog-content>\n\t<form [formGroup]=\"editIvsetForm\" (ngSubmit)=\"onSubmit(editIvsetForm)\" >\n\t\t<div class=\"form-container\">\n\t\t\t<mat-form-field>\n\t\t\t    <input matInput placeholder=\"Enter ivset model\" type=\"text\" formControlName=\"ivsetModel\">\n\t\t\t    \t<mat-icon matSuffix>info</mat-icon>\n\t\t\t    \t<mat-error *ngFor=\"let validation of validationMessages.ivsetModel\">\n\t\t\t    \t    <mat-error class=\"error-message\" *ngIf=\"editIvsetForm.get('ivsetModel').hasError(validation.type) && (editIvsetForm.get('ivsetModel').dirty || editIvsetForm.get('ivsetModel').touched)\">{{validation.message}}</mat-error>\n\t\t\t    \t</mat-error>\n\t\t\t  \t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t    \t<input matInput placeholder=\"Enter ivset dpf\" type=\"text\" formControlName=\"ivsetDpf\">\n\t\t    \t<mat-icon matSuffix>opacity</mat-icon>\n\t\t    \t<mat-error *ngFor=\"let validation of validationMessages.ivsetDpf\">\n\t\t    \t    <mat-error class=\"error-message\" *ngIf=\"editIvsetForm.get('ivsetDpf').hasError(validation.type) && (editIvsetForm.get('ivsetDpf').dirty || editIvsetForm.get('ivsetDpf').touched)\">{{validation.message}}</mat-error>\n\t\t    \t</mat-error>\n\t\t  \t</mat-form-field>\n\t\t</div>\n\t\t<button mat-raised-button color=\"accent\"  type=\"reset\" [mat-dialog-close]=\"true\" style=\"margin-right: 20px;\">cancel</button>\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!editIvsetForm.valid\">Submit</button>\n\t</form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/editivset-dialog/editivset-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/editivset-dialog/editivset-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EditivsetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditivsetDialogComponent", function() { return EditivsetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditivsetDialogComponent = /** @class */ (function () {
    function EditivsetDialogComponent(fb, admin, snackbar, dialogRef, data) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editIvsetId = { '_id': '' };
        this.editIvsetData = { '_id': '' };
        this.validationMessages = {
            'ivsetModel': [
                { type: 'required', message: 'ivset model name is required' }
            ],
            'ivsetDpf': [
                { type: 'required', message: 'ivset dpf  is required' }
            ],
        };
        this.editIvsetId = data;
        this.editIvsetForm = this.fb.group({
            ivsetModel: [data.ivsetModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ivsetDpf: [data.ivsetDpf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EditivsetDialogComponent.prototype.ngOnInit = function () {
    };
    EditivsetDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editIvsetData = this.editIvsetForm.value;
        this.editIvsetData._id = this.editIvsetId._id;
        this.admin.updateIvset(this.editIvsetData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditivsetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editivset-dialog',
            template: __webpack_require__(/*! ./editivset-dialog.component.html */ "./src/app/editivset-dialog/editivset-dialog.component.html"),
            styles: [__webpack_require__(/*! ./editivset-dialog.component.css */ "./src/app/editivset-dialog/editivset-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditivsetDialogComponent);
    return EditivsetDialogComponent;
}());



/***/ }),

/***/ "./src/app/editpatient-dialog/editpatient-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/editpatient-dialog/editpatient-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwYXRpZW50LWRpYWxvZy9lZGl0cGF0aWVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/editpatient-dialog/editpatient-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/editpatient-dialog/editpatient-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Patient</h2>\n<mat-dialog-content>\n\t\t<form [formGroup]=\"editPatientForm\" (ngSubmit)=\"onSubmit(editPatientForm,formDirective)\"  #formDirective=\"ngForm\">\n\t \t\t<div class=\"form-container\" fxLayout=\"column\">\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t\t    <input matInput placeholder=\"Enter patient name\" type=\"text\" formControlName=\"patientName\">\n\t \t\t\t\t\t    <mat-icon matSuffix>person</mat-icon>\n\t \t\t\t\t\t    <mat-error *ngFor=\"let validation of validationMessages.patientName\">\n\t \t\t\t\t\t    \t<mat-error class=\"error-message\" *ngIf=\"editPatientForm.get('patientName').hasError(validation.type) && (editPatientForm.get('patientName').dirty || editPatientForm.get('patientName').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t\t    </mat-error>\n\t \t\t\t\t\t </mat-form-field>\n\t \t\t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t\t  \t<mat-select placeholder=\"Bed\" formControlName=\"bedId\">\n\t \t\t\t\t\t    \t<mat-option *ngFor=\"let bed of beds\" [value]=\"bed._id\">\n\t \t\t\t\t\t      \t\t\t{{bed.bedName}}\n\t \t\t\t\t\t    \t</mat-option>\n\t \t\t\t\t\t  \t</mat-select>\n\t \t\t\t\t\t  \t<mat-icon matSuffix>hotel</mat-icon>\n\t \t\t\t\t\t  \t<mat-error *ngFor=\"let validation of validationMessages.bedId\">\n\t \t\t\t\t\t      \t<mat-error class=\"error-message\" *ngIf=\"editPatientForm.get('bedId').hasError(validation.type) && (editPatientForm.get('bedId').dirty || editPatientForm.get('bedId').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t\t  \t</mat-error>\n\t \t\t\t\t\t</mat-form-field>\n\t \t\t\t</div>\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t    <input matInput placeholder=\"Enter patient age\" type=\"number\" formControlName=\"patientAge\">\n\t \t\t\t\t    <mat-icon matSuffix>info</mat-icon>\n\t \t\t\t\t</mat-form-field>\n\t \t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t    <input matInput placeholder=\"Enter patient weight\" type=\"number\" formControlName=\"patientWeight\">\n\t \t\t\t\t    <mat-icon matSuffix>info</mat-icon>\n\t \t\t\t\t</mat-form-field>\n\t \t\t\t</div>\n\t \t\t\t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t \t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t  \t<mat-select placeholder=\"gender\" formControlName=\"patientGender\">\n\t \t\t\t\t    \t<mat-option *ngFor=\"let patientGender of patientGenders\" [value]=\"patientGender.value\">\n\t \t\t\t\t      \t\t{{patientGender.viewValue}}\n\t \t\t\t\t    \t</mat-option>\n\t \t\t\t\t  \t</mat-select>\n\t \t\t\t\t  \t<mat-icon matSuffix>account_box</mat-icon>\n\t \t\t\t\t  \t<mat-error *ngFor=\"let validation of validationMessages.patientGender\">\n\t \t\t\t\t      \t<mat-error class=\"error-message\" *ngIf=\"editPatientForm.get('patientGender').hasError(validation.type) && (editPatientForm.get('patientGender').dirty || editPatientForm.get('patientGender').touched)\">{{validation.message}}</mat-error>\n\t \t\t\t\t  \t</mat-error>\n\t \t\t\t\t</mat-form-field>\n\t \t\t\t\t<mat-form-field fxFlex=\"50\">\n\t \t\t\t\t  \t<mat-select placeholder=\"Doctor\" formControlName=\"doctor\">\n\t \t\t\t\t    \t<mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.userName\">\n\t \t\t\t\t      \t\t\t{{doctor.userName}}\n\t \t\t\t\t    \t</mat-option>\n\t \t\t\t\t  \t</mat-select>\n\t \t\t\t\t  \t<mat-icon matSuffix>assignment_ind</mat-icon>\n\t \t\t\t\t</mat-form-field>\n\t \t\t\t</div>\n\t \t\t</div>\n\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"editPatientForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!editPatientForm.valid\">Submit</button>\n\t \t</form>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/editpatient-dialog/editpatient-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/editpatient-dialog/editpatient-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: EditpatientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpatientDialogComponent", function() { return EditpatientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditpatientDialogComponent = /** @class */ (function () {
    function EditpatientDialogComponent(fb, nurse, snackbar, dialogRef, data) {
        this.fb = fb;
        this.nurse = nurse;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editPatientId = { '_id': '' };
        this.editPatientData = { '_id': '' };
        this.beds = [];
        this.doctors = [];
        this.patientGenders = [
            { value: 'male', viewValue: 'Male' },
            { value: 'female', viewValue: 'Female' }
        ];
        this.validationMessages = {
            'patientName': [
                { type: 'required', message: 'Patient name is required' }
            ],
            'bedId': [
                { type: 'required', message: 'Bed name is required' },
            ],
            'patientGender': [
                { type: 'required', message: 'Patient gender is required' }
            ]
        };
        this.editPatientId = data;
        this.editPatientForm = this.fb.group({
            patientName: [data.patientName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bedId: [data.bedId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patientAge: [data.patientAge],
            patientWeight: [data.patientWeight],
            patientGender: [data.patientGender, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doctor: [data.doctor]
        });
    }
    EditpatientDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nurse.readBed()
            .subscribe(function (res) {
            if (res.success) {
                _this.beds = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
        this.nurse.readDoctor()
            .subscribe(function (res) {
            if (res.success) {
                _this.doctors = res.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditpatientDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editPatientData = this.editPatientForm.value;
        this.editPatientData._id = this.editPatientId._id;
        this.nurse.updatePatient(this.editPatientData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditpatientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpatient-dialog',
            template: __webpack_require__(/*! ./editpatient-dialog.component.html */ "./src/app/editpatient-dialog/editpatient-dialog.component.html"),
            styles: [__webpack_require__(/*! ./editpatient-dialog.component.css */ "./src/app/editpatient-dialog/editpatient-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _nurse_service__WEBPACK_IMPORTED_MODULE_3__["NurseService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditpatientDialogComponent);
    return EditpatientDialogComponent;
}());



/***/ }),

/***/ "./src/app/editstation-dialog/editstation-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/editstation-dialog/editstation-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHN0YXRpb24tZGlhbG9nL2VkaXRzdGF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VkaXRzdGF0aW9uLWRpYWxvZy9lZGl0c3RhdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/editstation-dialog/editstation-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/editstation-dialog/editstation-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Station</h2>\n<mat-dialog-content>\n\t<form [formGroup]=\"editStationForm\" (ngSubmit)=\"onSubmit(editStationForm)\" >\n\t\t<div class=\"form-container\">\n\t\t\t<mat-form-field>\n\t\t    \t<input matInput placeholder=\"Enter station name\" type=\"text\" formControlName=\"stationName\">\n\t\t    \t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t    \t<mat-error *ngFor=\"let validation of validationMessages.stationName\">\n\t\t    \t    <mat-error class=\"error-message\" *ngIf=\"editStationForm.get('stationName').hasError(validation.type) && (editStationForm.get('stationName').dirty || editStationForm.get('stationName').touched)\">{{validation.message}}</mat-error>\n\t\t    \t</mat-error>\n\t\t  \t</mat-form-field>\n\t\t</div>\n\t\t<button mat-raised-button color=\"accent\"  type=\"reset\" [mat-dialog-close]=\"true\" style=\"margin-right: 20px;\">cancel</button>\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!editStationForm.valid\">Submit</button>\n\t</form>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/editstation-dialog/editstation-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/editstation-dialog/editstation-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: EditstationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstationDialogComponent", function() { return EditstationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditstationDialogComponent = /** @class */ (function () {
    function EditstationDialogComponent(fb, admin, snackbar, dialogRef, data) {
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editStationId = { '_id': '' };
        this.editStationData = { '_id': '' };
        this.validationMessages = {
            'stationName': [
                { type: 'required', message: 'Station name is required' }
            ],
        };
        this.editStationId = data;
        this.editStationForm = this.fb.group({
            stationName: [data.stationName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EditstationDialogComponent.prototype.ngOnInit = function () {
    };
    EditstationDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editStationData = this.editStationForm.value;
        this.editStationData._id = this.editStationId._id;
        this.admin.updateStation(this.editStationData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditstationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editstation-dialog',
            template: __webpack_require__(/*! ./editstation-dialog.component.html */ "./src/app/editstation-dialog/editstation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./editstation-dialog.component.css */ "./src/app/editstation-dialog/editstation-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditstationDialogComponent);
    return EditstationDialogComponent;
}());



/***/ }),

/***/ "./src/app/edituser-dialog/edituser-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/edituser-dialog/edituser-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHVzZXItZGlhbG9nL2VkaXR1c2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VkaXR1c2VyLWRpYWxvZy9lZGl0dXNlci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Gb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/edituser-dialog/edituser-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/edituser-dialog/edituser-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Change password</h2>\n<mat-dialog-content>\n\t<form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit(changePasswordForm)\" >\n\t\t<div class=\"Form-container\">\n\t\t\t<mat-form-field>\n\t\t    \t<input matInput placeholder=\"Enter a password\" type=\"password\" formControlName=\"password\">\n\t\t    \t<mat-icon matSuffix>vpn_key</mat-icon>\n\t\t    \t<mat-error *ngFor=\"let validation of validationMessages.password\">\n\t\t    \t    <mat-error class=\"error-message\" *ngIf=\"changePasswordForm.get('password').hasError(validation.type) && (changePasswordForm.get('password').dirty || changePasswordForm.get('password').touched)\">{{validation.message}}</mat-error>\n\t\t    \t</mat-error>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t    \t<input matInput placeholder=\"Confirm password\" type=\"password\" formControlName=\"confirmPassword\">\n\t\t    \t<mat-icon matSuffix>vpn_key</mat-icon>\n\t\t    \t<mat-error class=\"error-message\" *ngIf=\"changePasswordForm.controls.confirmPassword.invalid\">Password missmatch</mat-error>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"close()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!changePasswordForm.valid\">Submit</button>\n\t</form>\n</mat-dialog-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/edituser-dialog/edituser-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edituser-dialog/edituser-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: EdituserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserDialogComponent", function() { return EdituserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/app/validator.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EdituserDialogComponent = /** @class */ (function () {
    function EdituserDialogComponent(fb, admin, snackbar, dialogRef, data) {
        var _this = this;
        this.fb = fb;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.editUserId = { 'id': '' };
        this.editUserData = { '_id': '' };
        this.validationMessages = {
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
            ]
        };
        this.editUserId = data;
        this.changePasswordForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            confirmPassword: ['', _validator__WEBPACK_IMPORTED_MODULE_3__["passValidator"]]
        });
        //Observable to update validator if password field changed again
        this.changePasswordForm.controls.password.valueChanges
            .subscribe(function (x) { return _this.changePasswordForm.controls.confirmPassword.updateValueAndValidity(); });
    }
    EdituserDialogComponent.prototype.ngOnInit = function () {
    };
    EdituserDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EdituserDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.editUserData = this.changePasswordForm.value;
        this.editUserData._id = this.editUserId.id;
        this.admin.updateUser(this.editUserData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close();
            }
        }, function (err) {
            console.log(err);
        });
    };
    EdituserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edituser-dialog',
            template: __webpack_require__(/*! ./edituser-dialog.component.html */ "./src/app/edituser-dialog/edituser-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edituser-dialog.component.css */ "./src/app/edituser-dialog/edituser-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EdituserDialogComponent);
    return EdituserDialogComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Gb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n    <mat-card fxFlex=\"40\" fxFlex.xs=\"80\">\n        <mat-card-header>\n            <mat-card-title>Request Password reset link</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n                <form [formGroup]=\"requestForm\" (ngSubmit)=\"onSubmit()\" class=\"Form-container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Enter your registered email\"  type=\"text\" formControlName=\"userName\">\n                        <mat-icon matSuffix>email</mat-icon>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!requestForm.valid\">Request</button>\n                </form>\n        </mat-card-content>\n        <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%\">\n            <button mat-button color=\"accent\" routerLink=\"/login\">Login</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, auth, router, snackbar) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.snackbar = snackbar;
        this.requestData = {};
        this.requestForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.requestData = this.requestForm.value;
        this.auth.forgotPassword(this.requestData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.login-card {\n\twidth:600px;\n  max-width: 400px;\n  align-items: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7Q0FDQyxZQUFZO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5Gb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sb2dpbi1jYXJkIHtcblx0d2lkdGg6NjAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n    <mat-card fxFlex=\"40\" fxFlex.xs=\"80\">\n        <mat-card-header>\n            <mat-card-title>Login</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"loginForm-container\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Enter your registered email\"  type=\"text\" formControlName=\"userName\">\n                        <mat-icon matSuffix>email</mat-icon>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Enter password\" type=\"password\" formControlName=\"password\">\n                        <mat-icon matSuffix>vpn_key</mat-icon>\n                    </mat-form-field>\n                    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n                </form>\n        </mat-card-content>\n        <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%\">\n            <button mat-button color=\"accent\" routerLink=\"/forgotpassword\">Forgot Password</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.loginData = {};
        this.loginForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginData = this.loginForm.value;
        this.auth.loginUser(this.loginData)
            .subscribe(function (res) {
            if (res.success == true && res.permission == 'admin') {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/admin/home']);
            }
            else if (res.success == true && res.permission == 'nurse') {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/nurse/selectstation']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nurse-home/nurse-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nurse-home/nurse-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-btn{\n\tposition: fixed;\n\tbottom: 1rem;\n\tright:1rem;\n}\n\n@media(min-width: 1024px) {\n   .action-btn {\n    bottom: 1.5rem;\n    right: 1.5rem;\n  }\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n\n.arrange {\n  display: -webkit-flex; /* Safari */\n  -webkit-align-items: center; /* Safari 7.0+ */\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  text-align: center;\n\n}\n\n.rotate-90 {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.slick-list{\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVyc2UtaG9tZS9udXJzZS1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFdBQVc7Q0FDWDs7QUFFRDtHQUNHO0lBQ0MsZUFBZTtJQUNmLGNBQWM7R0FDZjtDQUNGOztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCLENBQUMsWUFBWTtFQUNuQyw0QkFBNEIsQ0FBQyxpQkFBaUI7RUFDOUMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1COztDQUVwQjs7QUFFRDtJQUNJLGlDQUFpQztJQUlqQyx5QkFBeUI7Q0FDNUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9udXJzZS1ob21lL251cnNlLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tYnRue1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMXJlbTtcblx0cmlnaHQ6MXJlbTtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAuYWN0aW9uLWJ0biB7XG4gICAgYm90dG9tOiAxLjVyZW07XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgfVxufVxuLnNjcm9sbGFibGUge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5hcnJhbmdlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAvKiBTYWZhcmkgKi9cbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyOyAvKiBTYWZhcmkgNy4wKyAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLnJvdGF0ZS05MCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc2xpY2stbGlzdHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/nurse-home/nurse-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/nurse-home/nurse-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n <div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n \t<div fxFlex=\"80\" fxLayoutGap=\"10px\" fxFlex.xs=\"50\" class=\"scrollable\">\n \t\t<mat-grid-list [cols]=\"cols\" (window:resize)=\"onResize($event)\" rowHeight=\"240px\" gutterSize=\"10px\">\n \t\t  <mat-grid-tile\n \t\t      *ngFor=\"let task of activeTasks\"\n \t\t      [colspan]=\"1\"\n \t\t      [rowspan]=\"1\" >\n\t\t\t\t<mat-card fxLayout=\"column\" style=\"height: 100%;width: 100%;padding: 0px;\" matTooltip=\"Click to delete task\">\n\t\t\t\t\t<div fxFlex=\"10\" style=\"background-color: #616161\" fxLayout=\"row\" (click)=\"openTaskActivity(task)\">\n\t\t\t\t\t\t<div fxFlex=\"15\"></div>\n\t\t\t\t\t\t<div fxFlex=\"15\">\n\t\t\t\t\t\t\t<mat-icon style=\"color: white;\">network_wifi</mat-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"40\"></div>\n\t\t\t\t\t\t<div fxFlex=\"15\">\n\t\t\t\t\t\t\t<mat-icon style=\"color: white;\">battery_std</mat-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"15\" style=\"font-size: 14px;color: white;\">{{task.deviceCharge}}%</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%\" style=\"background-color: #212121;color: white;\" (click)=\"openTaskActivity(task)\">\n\t\t\t\t\t\t<h3 fxFlex=\"30\">{{task._bed.bedName}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex (click)=\"openTaskActivity(task)\">\n\t\t\t\t\t\t<mat-progress-bar [value]=\"task.percentage\"></mat-progress-bar>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"50\" style=\"background-color: #616161;height: 100%;width: 100%\" (click)=\"openTaskActivity(task)\">\n\t\t\t\t\t\t<ngx-slick  class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" style=\"height: 100%;width: 100%;\" >\n\t\t\t\t\t\t\t<div fxLayout=\"column\" ngxSlickItem class=\"slide\" style=\"height: 100%;width: 100%;\">\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\"></div>\n\t\t\t\t\t\t\t\t<div style=\"color: #EEEEEE;padding-top: 10px;padding-left: 8px;\">Rate</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%;padding-top: 5px;\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"70\"  style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 0px;margin:0px;font-size: 40px\">{{task.rate}} / {{task._medication.medicineRate}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\" style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"75\"></div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"25\">ml/hr</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div fxLayout=\"column\" ngxSlickItem class=\"slide\" style=\"height: 100%;width: 100%;\">\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\"></div>\n\t\t\t\t\t\t\t\t<div style=\"color: #EEEEEE;padding-top: 10px;padding-left: 8px;\">Remaining Time</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%;padding-top: 30px;\" style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t<div style=\"margin:0px;font-size: 40px;padding-left: 8px;\">{{task.timeRemaining /60 | number:'1.0-0'}}  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div style=\"padding-left: 10px;padding-top: 7px;\">Hrs</div>\n\t\t\t\t\t\t\t\t\t<div style=\"padding: 0px;margin:0px;font-size: 40px\">{{task.timeRemaining%60}} \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div style=\"padding-left: 10px;padding-top: 7px;\">Mins</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\" style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"70\"></div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"30\">Approx</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div fxLayout=\"column\" ngxSlickItem class=\"slide\" style=\"height: 100%;width: 100%;\">\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\"></div>\n\t\t\t\t\t\t\t\t<div style=\"color: #EEEEEE;padding-top: 10px;padding-left: 8px;\">Volume</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%;\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"70\" style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 0px;margin:0px;font-size: 40px;padding-top: 5px;\">{{task.infusedVolume}} / {{task._medication.medicineVolume}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div fxFlex=\"10\" style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"85\"></div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"15\">ml</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ngx-slick>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"20\" *ngIf=\"task.status=='ongoing'\" style=\"height: 100%;width: 100%\">\n\t\t\t\t\t\t<button mat-flat-button color=\"primary\"  style=\"font-size:17px;height: 100%;width: 100%\">{{task.infusionStatus}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"20\"  style=\"height: 100%;width: 100%\" *ngIf=\"task.status=='alerted'\" matTooltip=\"Click to acknoledge\">\n\t\t\t\t\t\t<button mat-flat-button color=\"accent\" (click)=\"acknowledge(task);\" style=\"height: 100%;width:100%;\">{{task.infusionStatus}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card>\n \t\t  </mat-grid-tile>\n \t\t</mat-grid-list>\t\t\n \t</div>\n \t<div fxFlex=\"20\" fxLayout=\"column\" fxFlex.xs=\"50\" fxLayoutGap=\"10px\">\n \t\t<mat-card fxFlex=\"50\" class=\"scrollable\" *ngIf=\"delayedTaskFlag\" style=\"padding: 3px\">\n \t\t\t<b *ngIf=\"delayedTaskFlag\"  style=\"color: #616161;\">Delayed Tasks</b>\n \t\t\t<div fxLayout=\"column\" style=\"padding-bottom: 3px;\" *ngFor=\"let delayedTask of delayedTasks\" (click)=\"openTaskActivity(delayedTask)\">\n \t\t\t\t<mat-card fxLayout=\"row\" style=\"padding: 0px;\" matTooltip=\"Click to delete task\">\n \t\t\t\t\t<div fxFlex=\"27\" style=\"background-color:#E91E63;padding: 10px;color: white;\"><b>{{delayedTask._bed.bedName}}</b></div>\n \t\t\t\t\t<div fxFlex=\"50\" style=\"background-color:#757575;padding: 10px;color: white;color: white;font-size: 12px\">{{delayedTask._medication.medicineName}}</div>\n \t\t\t\t\t<div fxFlex=\"23\" style=\"background-color:#616161;padding: 10px;color: white;\">{{delayedTask.timeIn12}}</div>\n \t\t\t\t</mat-card> \n \t\t\t</div>\n \t\t</mat-card>\n \t\t<mat-card fxFlex=\"50\" class=\"scrollable\" style=\"padding: 3px\"  *ngIf=\"upcomingTaskFlag\">\n \t\t\t<b *ngIf=\"upcomingTaskFlag\" style=\"color: #616161;\">Upcoming Tasks</b>\n \t\t\t<div fxLayout=\"column\" style=\"padding-bottom: 3px;\" *ngFor=\"let upcomingTask of upcomingTasks\" (click)=\"openTaskActivity(upcomingTask)\">\n\t\t\t\t<mat-card fxLayout=\"row\" style=\"padding: 0px;\" matTooltip=\"Click to delete task\">\n\t\t\t\t\t<div fxFlex=\"27\" style=\"background-color:#3F51B5;padding: 10px;color: white;\"><b>{{upcomingTask._bed.bedName}}</b></div>\n\t\t\t\t\t<div fxFlex=\"50\" style=\"background-color:#757575;padding: 10px;color: white;font-size: 12px;\">{{upcomingTask._medication.medicineName}}</div>\n\t\t\t\t\t<div fxFlex=\"23\" style=\"background-color: #616161;padding: 10px;color: white;\">{{upcomingTask.timeIn12}}</div>\n\t\t\t\t</mat-card> \n \t\t\t</div>\n \t\t</mat-card>\n \t</div>\n </div>\n\n\n <button mat-fab color=\"primary\" class=\"action-btn\" (click)=\"openAddDialog()\"><mat-icon>add</mat-icon></button>\n"

/***/ }),

/***/ "./src/app/nurse-home/nurse-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nurse-home/nurse-home.component.ts ***!
  \****************************************************/
/*! exports provided: NurseHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseHomeComponent", function() { return NurseHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _addtask_dialog_addtask_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addtask-dialog/addtask-dialog.component */ "./src/app/addtask-dialog/addtask-dialog.component.ts");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _taskactivity_dialog_taskactivity_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../taskactivity-dialog/taskactivity-dialog.component */ "./src/app/taskactivity-dialog/taskactivity-dialog.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NurseHomeComponent = /** @class */ (function () {
    function NurseHomeComponent(observableMedia, nurse, snackbar, dialog, socketService) {
        this.observableMedia = observableMedia;
        this.nurse = nurse;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.socketService = socketService;
        this.activeTasks = [];
        this.iterates = [];
        this.upcomingTasks = [];
        this.upcomingTaskFlag = false;
        this.delayedTasks = [];
        this.delayedTaskFlag = false;
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": false,
            "infinite": true,
            "autoplay": true,
            "autoplaySpeed": 1500
        };
    }
    NurseHomeComponent.prototype.onResize = function (event) {
        this.cols = (event.target.innerWidth <= 400) ? 2 : 5;
    };
    NurseHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = (window.innerWidth <= 400) ? 2 : 5;
        //interval function to change task from upcoming to delayed
        this.interval = setInterval(function () {
            var currentMin = new Date().getMinutes();
            if (currentMin == 59) {
                _this.nurse.readUpcomingTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.upcomingTasks = res.data;
                        _this.upcomingTaskFlag = true;
                    }
                    else {
                        console.log(res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.nurse.readDelayedTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.delayedTasks = res.data;
                        _this.delayedTaskFlag = true;
                    }
                    else {
                        console.log(res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }, 60000);
        this.nurse.readUpcomingTask()
            .subscribe(function (res) {
            if (res.success) {
                _this.upcomingTasks = res.data;
                _this.upcomingTaskFlag = true;
            }
            else {
                console.log(res.message);
            }
        }, function (err) {
            console.log(err);
        });
        this.nurse.readDelayedTask()
            .subscribe(function (res) {
            if (res.success) {
                _this.delayedTasks = res.data;
                _this.delayedTaskFlag = true;
            }
            else {
                console.log(res.message);
            }
        }, function (err) {
            console.log(err);
        });
        this.nurse.readActiveTask()
            .subscribe(function (res) {
            if (res.success) {
                _this.activeTasks = res.data;
            }
            else {
                console.log(res.message);
            }
        }, function (err) {
            console.log(err);
        });
        this.socketService.onMessage().subscribe(function (msg) {
            if (msg.infusionStatus == 'Start') {
                var indexValue = null;
                _this.activeTasks.forEach(function (task, index) {
                    if (msg._id == task._id) {
                        indexValue = index;
                    }
                });
                if (indexValue == null) {
                    var length = _this.activeTasks.push(msg);
                }
            }
            else if (msg.infusionStatus == 'Infusing') {
                _this.activeTasks.forEach(function (task, index) {
                    if (msg._id == task._id) {
                        task.rate = msg.rate;
                        task.status = 'ongoing';
                        task.infusionStatus = 'Infusing';
                        task.infusedVolume = msg.infusedVolume;
                        task.timeRemaining = msg.timeRemaining;
                        task.percentage = msg.percentage;
                        task.deviceCharge = msg.deviceCharge;
                        task.commonTopic = msg.commonTopic;
                    }
                });
            }
            else if (msg.infusionStatus == 'Block' || msg.infusionStatus == 'Rate Error'
                || msg.infusionStatus == 'Almost Done' || msg.infusionStatus == 'Done') {
                var indexValue;
                _this.activeTasks.forEach(function (task, index) {
                    if (msg._id == task._id) {
                        indexValue = index;
                    }
                });
                var removed = _this.activeTasks.splice(indexValue, 1);
                var length = _this.activeTasks.unshift(msg);
            }
            else if (msg.infusionStatus == 'Stop') {
                var indexValue;
                _this.activeTasks.forEach(function (task, index) {
                    if (msg._id == task._id) {
                        indexValue = index;
                    }
                });
                var removed = _this.activeTasks.splice(indexValue, 1);
            }
            else if (msg.infusionStatus == 'Error_ACK') {
                _this.activeTasks.forEach(function (task, index) {
                    if (msg._id == task._id) {
                        task.status = 'ongoing';
                        task.infusionStatus = 'Infusing';
                        task.rate = msg.rate;
                        task.infusedVolume = msg.infusedVolume;
                        task.timeRemaining = msg.timeRemaining;
                        task.percentage = msg.percentage;
                        task.deviceCharge = msg.deviceCharge;
                        task.commonTopic = msg.commonTopic;
                    }
                });
            }
        });
    };
    NurseHomeComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.width = '600px';
        var dialogRef = this.dialog.open(_addtask_dialog_addtask_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AddtaskDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                console.log("closed");
                _this.nurse.readUpcomingTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.upcomingTasks = res.data;
                        _this.upcomingTaskFlag = true;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    NurseHomeComponent.prototype.openTaskActivity = function (task) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '500px';
        dialogConfig.data = {
            _id: task._id,
        };
        var dialogRef = this.dialog.open(_taskactivity_dialog_taskactivity_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TaskactivityDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.nurse.readUpcomingTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.upcomingTasks = res.data;
                        _this.upcomingTaskFlag = true;
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.nurse.readDelayedTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.delayedTasks = res.data;
                        _this.delayedTaskFlag = true;
                    }
                    else {
                        console.log(res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.nurse.readActiveTask()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.activeTasks = res.data;
                    }
                    else {
                        console.log(res.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    NurseHomeComponent.prototype.acknowledge = function (task) {
        this.socketService.sendMessage(task.topic + 'mon', task._id + '-' + 'Block_ACK' + '-' + task.rate + '-' + task.infusedVolume + '-' + task.timeRemaining + '-' + task.totalVolume + '-' + task.deviceCharge);
        this.socketService.sendMessage(task.topic + 'staAck', 'STA_ACK');
    };
    NurseHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nurse-home',
            template: __webpack_require__(/*! ./nurse-home.component.html */ "./src/app/nurse-home/nurse-home.component.html"),
            styles: [__webpack_require__(/*! ./nurse-home.component.css */ "./src/app/nurse-home/nurse-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["ObservableMedia"], _nurse_service__WEBPACK_IMPORTED_MODULE_2__["NurseService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], NurseHomeComponent);
    return NurseHomeComponent;
}());



/***/ }),

/***/ "./src/app/nurse-mpatient/nurse-mpatient.component.css":
/*!*************************************************************!*\
  !*** ./src/app/nurse-mpatient/nurse-mpatient.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.scrollable {\n  overflow-y: scroll;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVyc2UtbXBhdGllbnQvbnVyc2UtbXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9udXJzZS1tcGF0aWVudC9udXJzZS1tcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNjcm9sbGFibGUge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/nurse-mpatient/nurse-mpatient.component.html":
/*!**************************************************************!*\
  !*** ./src/app/nurse-mpatient/nurse-mpatient.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column-reverse wrap\" style=\"height: 100%;width: 100%; margin-top: 10px;\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0px\">\n\t<div fxFlex=\"70\" fxFlex.xs=\"25\" class=\"scrollable\">\n\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" >\n\t\t\t<mat-card fxLayout=\"row\" *ngFor=\"let patient of patients |filter:term\">\n\t\t\t\t<div fxFlex=\"40\" fxFlex.xs=\"60\">{{patient.patientName}}  <br><b>{{patient.bedName}}</b></div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"true\" fxHide.sm=\"true\" [routerLink]=\"['/nurse/patienthistory',patient._id]\" style=\"color: green\"  class=\"mat-button\">Info</div>\n\t\t\t\t<div fxFlex=\"20\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: green\" [routerLink]=\"['/patienthistory',5]\"  class=\"mat-button\">\n\t\t\t\t\t<mat-icon>info</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"20\" *ngIf=\"patient.patientStatus == 'active'\"  fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: blue\" (click)=\"openEditDialog(patient)\" class=\"mat-button\">Edit</div>\n\t\t\t\t<div fxFlex=\"20\" *ngIf=\"patient.patientStatus == 'active'\"  fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: blue\" (click)=\"openEditDialog(patient)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"20\" *ngIf=\"patient.patientStatus == 'active'\" fxHide.xs=\"true\" fxHide.sm=\"true\" style=\"color: red\" (click)=\"openDischargeDialog(patient)\" class=\"mat-button\">Discharge</div>\n\t\t\t\t<div fxFlex=\"20\" *ngIf=\"patient.patientStatus == 'active'\" fxHide.xs=\"false\" fxHide.sm=\"false\" fxHide.md=\"true\" fxHide.lg=\"true\" fxHide.xl=\"true\" style=\"color: red\" (click)=\"openDischargeDialog(patient)\" class=\"mat-button\">\n\t\t\t\t\t<mat-icon>close</mat-icon>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n\t<div fxFlex=\"30\" fxFlex.xs=\"75\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<div fxFlex=\"75\" fxFlex.xs=\"100\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-header>\n\t\t\t\t  \t<mat-card-title>Add Patients</mat-card-title>\n\t\t\t\t</mat-card-header>\n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<form [formGroup]=\"createPatientForm\" (ngSubmit)=\"onSubmit(createPatientForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t \t    \t\t<input matInput placeholder=\"Enter patient name\" type=\"text\" formControlName=\"patientName\">\n\t\t\t\t \t    \t\t<mat-icon matSuffix>person</mat-icon>\n\t\t\t\t \t    \t\t<mat-error *ngFor=\"let validation of validationMessages.patientName\">\n\t\t\t\t \t    \t    \t<mat-error class=\"error-message\" *ngIf=\"createPatientForm.get('patientName').hasError(validation.type) && (createPatientForm.get('patientName').dirty || createPatientForm.get('patientName').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t    \t\t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t\t  \t<mat-select placeholder=\"Bed\" formControlName=\"bedId\">\n\t\t\t\t \t  \t\t    \t<mat-option *ngFor=\"let bed of beds\" [value]=\"bed._id\">\n\t\t\t\t \t  \t\t      \t\t\t{{bed.bedName}}\n\t\t\t\t \t  \t\t    \t</mat-option>\n\t\t\t\t \t  \t\t  \t</mat-select>\n\t\t\t\t \t  \t\t  \t<mat-icon matSuffix>hotel</mat-icon>\n\t\t\t\t \t  \t\t  \t<mat-error *ngFor=\"let validation of validationMessages.bedId\">\n\t\t\t\t \t  \t\t      \t<mat-error class=\"error-message\" *ngIf=\"createPatientForm.get('bedId').hasError(validation.type) && (createPatientForm.get('bedId').dirty || createPatientForm.get('bedId').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t  \t\t  \t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t\t    <input matInput placeholder=\"Enter patient age\" type=\"number\" formControlName=\"patientAge\">\n\t\t\t\t \t  \t\t    <mat-icon matSuffix>info</mat-icon>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t\t    <input matInput placeholder=\"Enter patient weight\" type=\"number\" formControlName=\"patientWeight\">\n\t\t\t\t \t  \t\t    <mat-icon matSuffix>info</mat-icon>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t\t  \t<mat-select placeholder=\"gender\" formControlName=\"patientGender\">\n\t\t\t\t \t  \t\t    \t<mat-option *ngFor=\"let patientGender of patientGenders\" [value]=\"patientGender.value\">\n\t\t\t\t \t  \t\t      \t\t{{patientGender.viewValue}}\n\t\t\t\t \t  \t\t    \t</mat-option>\n\t\t\t\t \t  \t\t  \t</mat-select>\n\t\t\t\t \t  \t\t  \t<mat-icon matSuffix>account_box</mat-icon>\n\t\t\t\t \t  \t\t  \t<mat-error *ngFor=\"let validation of validationMessages.patientGender\">\n\t\t\t\t \t  \t\t      \t<mat-error class=\"error-message\" *ngIf=\"createPatientForm.get('patientGender').hasError(validation.type) && (createPatientForm.get('patientGender').dirty || createPatientForm.get('patientGender').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t  \t\t  \t</mat-error>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t  \t\t<mat-form-field>\n\t\t\t\t \t  \t\t  \t<mat-select placeholder=\"Doctor\" formControlName=\"doctor\">\n\t\t\t\t \t  \t\t    \t<mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor.userName\">\n\t\t\t\t \t  \t\t      \t\t\t{{doctor.userName}}\n\t\t\t\t \t  \t\t    \t</mat-option>\n\t\t\t\t \t  \t\t  \t</mat-select>\n\t\t\t\t \t  \t\t  \t<mat-icon matSuffix>assignment_ind</mat-icon>\n\t\t\t\t \t  \t\t</mat-form-field>\n\t\t\t\t \t\t</div>\n\t\t\t\t \t\t<button mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"createPatientForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t \t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createPatientForm.valid\">Submit</button>\n\t\t\t\t \t</form>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t</div>\n\t\t<div fxFlex=\"25\" fxFlex.xs=\"50\"  fxHide.xs=\"true\">\n\t\t\t<mat-card>\n\t\t\t\t<mat-card-content class=\"form-container\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t\t<mat-select placeholder=\"Active/Discharged\" [(ngModel)]=\"term\">\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let status of Statuses\" [value]=\"status.value\">\n\t\t\t\t\t\t\t      {{status.viewValue}}\n\t\t\t\t\t\t\t    </mat-option>\n\t\t\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t<input  matInput placeholder=\"Search Patient\" type=\"text\"  [(ngModel)]=term>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-card-content>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/nurse-mpatient/nurse-mpatient.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nurse-mpatient/nurse-mpatient.component.ts ***!
  \************************************************************/
/*! exports provided: NurseMpatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseMpatientComponent", function() { return NurseMpatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
/* harmony import */ var _editpatient_dialog_editpatient_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editpatient-dialog/editpatient-dialog.component */ "./src/app/editpatient-dialog/editpatient-dialog.component.ts");
/* harmony import */ var _dischargepatient_dialog_dischargepatient_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dischargepatient-dialog/dischargepatient-dialog.component */ "./src/app/dischargepatient-dialog/dischargepatient-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NurseMpatientComponent = /** @class */ (function () {
    function NurseMpatientComponent(fb, snackbar, dialog, nurse) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.nurse = nurse;
        this.patientData = {};
        this.beds = [];
        this.doctors = [];
        this.patients = [];
        this.patientGenders = [
            { value: 'male', viewValue: 'Male' },
            { value: 'female', viewValue: 'Female' }
        ];
        this.Statuses = [
            { value: 'active', viewValue: 'Active' },
            { value: 'discharged', viewValue: 'Discharged' }
        ];
        this.validationMessages = {
            'patientName': [
                { type: 'required', message: 'Patient name is required' }
            ],
            'bedId': [
                { type: 'required', message: 'Bed name is required' },
            ],
            'patientGender': [
                { type: 'required', message: 'Patient gender is required' }
            ]
        };
        this.createPatientForm = this.fb.group({
            patientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patientAge: [''],
            patientWeight: [''],
            patientGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doctor: [''],
        });
    }
    NurseMpatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nurse.readPatient()
            .subscribe(function (res) {
            if (res.success) {
                _this.patients = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
        this.nurse.readBed()
            .subscribe(function (res) {
            if (res.success) {
                _this.beds = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
        this.nurse.readDoctor()
            .subscribe(function (res) {
            if (res.success) {
                _this.doctors = res.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    NurseMpatientComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.patientData = this.createPatientForm.value;
        this.nurse.createPatient(this.patientData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.nurse.readBed()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.beds = res.data;
                    }
                    else {
                        _this.snackbar.open(res.message, 'close');
                    }
                }, function (err) {
                    console.log(err);
                });
                _this.nurse.readPatient()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.patients = res.data;
                    }
                    else {
                        _this.snackbar.open(res.message, 'close');
                    }
                }, function (err) {
                    console.log(err);
                });
                formDirective.resetForm();
                _this.createPatientForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    NurseMpatientComponent.prototype.openEditDialog = function (patient) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.width = '700px';
        dialogConfig.data = {
            _id: patient._id,
            patientName: patient.patientName,
            bedId: patient._bed,
            bedName: patient.bedName,
            patientAge: patient.patientAge,
            patientWeight: patient.patientWeight,
            patientGender: patient.patientGender,
            doctor: patient.doctor
        };
        var dialogRef = this.dialog.open(_editpatient_dialog_editpatient_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditpatientDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.nurse.readPatient()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.patients = res.data;
                    }
                    else {
                        _this.snackbar.open(res.message, 'close');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    NurseMpatientComponent.prototype.openDischargeDialog = function (patient) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '200px';
        dialogConfig.width = '400px';
        dialogConfig.data = {
            _id: patient._id,
            patientName: patient.patientName,
            bedId: patient._bed,
            bedName: patient.bedName,
        };
        var dialogRef = this.dialog.open(_dischargepatient_dialog_dischargepatient_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DischargepatientDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'success') {
                _this.nurse.readPatient()
                    .subscribe(function (res) {
                    if (res.success) {
                        _this.patients = res.data;
                    }
                    else {
                        _this.snackbar.open(res.message, 'close');
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    NurseMpatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nurse-mpatient',
            template: __webpack_require__(/*! ./nurse-mpatient.component.html */ "./src/app/nurse-mpatient/nurse-mpatient.component.html"),
            styles: [__webpack_require__(/*! ./nurse-mpatient.component.css */ "./src/app/nurse-mpatient/nurse-mpatient.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _nurse_service__WEBPACK_IMPORTED_MODULE_3__["NurseService"]])
    ], NurseMpatientComponent);
    return NurseMpatientComponent;
}());



/***/ }),

/***/ "./src/app/nurse-phistory/nurse-phistory.component.css":
/*!*************************************************************!*\
  !*** ./src/app/nurse-phistory/nurse-phistory.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    width: 100%;\n    border-radius: 3px;\n    background: #fcfcfc;\n    overflow: hidden;\nbox-shadow: 0px 0px 3px 1px rgba(181,181,181,1);\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n    border: 1px solid #efefef;\n}\n\ntr:nth-child(even){background-color: #f2f2f2}\n\nth {\n    background-color: #999;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVyc2UtcGhpc3RvcnkvbnVyc2UtcGhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFHckIsZ0RBQWdEO0NBQy9DOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7O0FBRUQsbUJBQW1CLHlCQUF5QixDQUFDOztBQUU3QztJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbnVyc2UtcGhpc3RvcnkvbnVyc2UtcGhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSgxODEsMTgxLDE4MSwxKTtcbi1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYmEoMTgxLDE4MSwxODEsMSk7XG5ib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSgxODEsMTgxLDE4MSwxKTtcbn1cblxudGgsIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nurse-phistory/nurse-phistory.component.html":
/*!**************************************************************!*\
  !*** ./src/app/nurse-phistory/nurse-phistory.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"width:100%;height: 100%;\" fxLayoutGap=\"10px\">\n\t<div fxFlex=\"none\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<mat-accordion>\n\t\t  <mat-expansion-panel>\n\t\t    <mat-expansion-panel-header>\n\t\t      <mat-panel-title>\n\t\t        Personal Details\n\t\t      </mat-panel-title>\n\t\t      <mat-panel-description>\n\t\t      \tof {{history.patientName}}\n\t\t      </mat-panel-description>\n\t\t    </mat-expansion-panel-header>\n\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t<div fxFlex=\"50\" fxLayout=\"row\">\n\t\t\t\t\t\t<div fxFlex=\"33\">Age : {{history.patientAge}}</div>\n\t\t\t\t\t\t<div fxFlex=\"33\">weight : {{history.patientWeight}} Kg</div>\n\t\t\t\t\t\t<div fxFlex=\"33\">Gender : {{history.patientGender}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxFlex=\"50\" fxLayout=\"row\">\n\t\t\t\t\t\t<div fxFlex=\"33\">Status : {{history.patientStatus}}</div>\n\t\t\t\t\t\t<div fxFlex=\"33\">Admitted On : {{history.admittedOn | date:'fullDate'}}</div>\n\t\t\t\t\t\t<div fxFlex=\"33\">Discharged On : {{history.dischargedOn}}</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\n\t\t  </mat-expansion-panel>\n\t\t</mat-accordion>\n\t</div>\n\n\n\n\t<div fxFlex=\"none\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t\t<mat-accordion>\n\t\t  <mat-expansion-panel *ngFor=\"let medication of history._medication\">\n\t\t    <mat-expansion-panel-header>\n\t\t      <mat-panel-title>\n\t\t        Infusion\n\t\t      </mat-panel-title>\n\t\t      <mat-panel-description>\n\t\t        at {{medication._infusionhistory.infusionDate | date:'fullDate'}} on {{medication._infusionhistory.startingTime}}\n\t\t      </mat-panel-description>\n\t\t    </mat-expansion-panel-header>\n\n\t\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" style=\"width:100%;height: 100%;\">\n\t\t\t\t<div fxFlex=\"5\" fxLayout=\"row\">\n\t\t\t\t\t<div fxFlex=\"20\">Medicine : {{medication.medicineName}} </div>\n\t\t\t\t\t<div fxFlex=\"20\">Volume : {{medication.medicineVolume}} ml</div>\n\t\t\t\t\t<div fxFlex=\"20\">Rate : {{medication.medicineRate}} ml/hr</div>\n\t\t\t\t\t<div fxFlex=\"20\">Infused Volume : {{medication._infusionhistory.infusedVolume}} ml</div>\n\t\t\t\t\t<div fxFlex=\"20\">Ending Time : {{medication._infusionhistory.endingTime}} </div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"printArea\">\n\t\t\t\t    <table style=\"width:100%\">\n\t\t\t\t          <tr>\n\t\t\t\t            <th>Status</th>\n\t\t\t\t            <th>Time</th> \n\t\t\t\t          </tr>\n\t\t\t\t          <tr *ngFor=\"let msg of medication._infusionhistory.message\">\n\t\t\t\t            <td >{{msg.status}}</td>\n\t\t\t\t            <td>{{msg.time}}</td>\n\t\t\t\t          </tr>\n\t\t\t\t    </table>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t  </mat-expansion-panel>\n\t\t</mat-accordion>\n\t</div>\n\t<div fxFlex=\"5\">\n\t\t<button mat-raised-button color=\"accent\" style=\"margin-left: 10px;\" [routerLink]=\"['/nurse/managepatients']\">Back</button>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/nurse-phistory/nurse-phistory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nurse-phistory/nurse-phistory.component.ts ***!
  \************************************************************/
/*! exports provided: NursePhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursePhistoryComponent", function() { return NursePhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NursePhistoryComponent = /** @class */ (function () {
    function NursePhistoryComponent(route, snackbar, router, nurse) {
        this.route = route;
        this.snackbar = snackbar;
        this.router = router;
        this.nurse = nurse;
        this.history = [];
    }
    NursePhistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.nurse.readPatientHistory(id)
            .subscribe(function (res) {
            if (res.success) {
                _this.history = res.data;
                console.log(_this.history);
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    NursePhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nurse-phistory',
            template: __webpack_require__(/*! ./nurse-phistory.component.html */ "./src/app/nurse-phistory/nurse-phistory.component.html"),
            styles: [__webpack_require__(/*! ./nurse-phistory.component.css */ "./src/app/nurse-phistory/nurse-phistory.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _nurse_service__WEBPACK_IMPORTED_MODULE_2__["NurseService"]])
    ], NursePhistoryComponent);
    return NursePhistoryComponent;
}());



/***/ }),

/***/ "./src/app/nurse.service.ts":
/*!**********************************!*\
  !*** ./src/app/nurse.service.ts ***!
  \**********************************/
/*! exports provided: NurseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseService", function() { return NurseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NurseService = /** @class */ (function () {
    function NurseService(http, router) {
        this.http = http;
        this.router = router;
        this.getStationsUrl = 'http://173.230.145.245:4000/api/nurse/station';
        this.setStationUrl = 'http://173.230.145.245:4000/api/nurse/setstation';
        this.getBedsUrl = 'http://173.230.145.245:4000/api/nurse/bed';
        this.getDoctorsUrl = 'http://173.230.145.245:4000/api/nurse/doctor';
        this.managePatientUrl = 'http://173.230.145.245:4000/api/nurse/patient';
        this.getOccupiedBedsUrl = 'http://173.230.145.245:4000/api/nurse/occupiedbed';
        this.manageTaskUrl = 'http://173.230.145.245:4000/api/nurse/task';
        this.getUpcomingTaskUrl = 'http://173.230.145.245:4000/api/nurse/upcomingtask';
        this.getDelayedTaskUrl = 'http://173.230.145.245:4000/api/nurse/delayedtask';
        this.getActiveTaskUrl = 'http://173.230.145.245:4000/api/nurse/activetask';
        this.getPhistoryUrl = 'http://173.230.145.245:4000/api/nurse/patienthistory';
    }
    NurseService.prototype.readStation = function () {
        return this.http.get(this.getStationsUrl);
    };
    NurseService.prototype.setStation = function (stationData) {
        return this.http.post(this.setStationUrl, stationData);
    };
    NurseService.prototype.readBed = function () {
        return this.http.get(this.getBedsUrl);
    };
    NurseService.prototype.readDoctor = function () {
        return this.http.get(this.getDoctorsUrl);
    };
    NurseService.prototype.createPatient = function (patientData) {
        return this.http.post(this.managePatientUrl, patientData);
    };
    NurseService.prototype.readPatient = function () {
        return this.http.get(this.managePatientUrl);
    };
    NurseService.prototype.updatePatient = function (editPatientData) {
        return this.http.put(this.managePatientUrl, editPatientData);
    };
    NurseService.prototype.dischargePatient = function (dischargePatientData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", dischargePatientData._id);
        return this.http.delete(this.managePatientUrl, { params: params });
    };
    NurseService.prototype.readOccupiedBed = function () {
        return this.http.get(this.getOccupiedBedsUrl);
    };
    NurseService.prototype.createTask = function (taskData) {
        return this.http.post(this.manageTaskUrl, taskData);
    };
    NurseService.prototype.readUpcomingTask = function () {
        return this.http.get(this.getUpcomingTaskUrl);
    };
    NurseService.prototype.readDelayedTask = function () {
        return this.http.get(this.getDelayedTaskUrl);
    };
    NurseService.prototype.readActiveTask = function () {
        return this.http.get(this.getActiveTaskUrl);
    };
    NurseService.prototype.deleteTask = function (deleteTaskData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", deleteTaskData._id);
        return this.http.delete(this.manageTaskUrl, { params: params });
    };
    NurseService.prototype.readPatientHistory = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("_id", id);
        return this.http.get(this.getPhistoryUrl, { params: params });
    };
    NurseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NurseService);
    return NurseService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.register-card {\n  max-width: 500px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlckZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlZ2lzdGVyLWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n<mat-card class=\"register-card\" fxFlex=\"40\" fxFlex.xs=\"80\">\n    <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"registerForm-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter your email\"  type=\"text\" formControlName=\"userName\">\n                    <mat-icon matSuffix>email</mat-icon>\n                    <mat-error *ngFor=\"let validation of validationMessages.userName\">\n                           <mat-error class=\"error-message\" *ngIf=\"registerForm.get('userName').hasError(validation.type) && (registerForm.get('userName').dirty || registerForm.get('userName').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter Hospital name\" type=\"text\" formControlName=\"hospitalName\">\n                    <mat-icon matSuffix>local_hospital</mat-icon>\n                    <mat-error *ngFor=\"let validation of validationMessages.hospitalName\">\n                           <mat-error class=\"error-message\" *ngIf=\"registerForm.get('hospitalName').hasError(validation.type) && (registerForm.get('hospitalName').dirty || registerForm.get('hospitalName').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Enter password\" type=\"password\" formControlName=\"password\">\n                    <mat-icon matSuffix>vpn_key</mat-icon>\n                    <mat-error *ngFor=\"let validation of validationMessages.password\">\n                           <mat-error class=\"error-message\" *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty || registerForm.get('password').touched)\">{{validation.message}}</mat-error>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Repeat password\" type=\"password\" formControlName=\"confirmPassword\">\n                    <mat-icon matSuffix>vpn_key</mat-icon>\n                    <mat-error class=\"error-message\" *ngIf=\"registerForm.controls.confirmPassword.invalid\">Password missmatch</mat-error>\n                </mat-form-field>\n                <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n            </form>\n    </mat-card-content>\n    <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%\">\n        <button mat-button color=\"accent\" routerLink=\"/login\">Login</button>\n    </mat-card-actions>\n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/app/validator.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, auth, snackbar) {
        var _this = this;
        this.fb = fb;
        this.auth = auth;
        this.snackbar = snackbar;
        this.userData = {};
        this.validationMessages = {
            'userName': [
                { type: 'required', message: 'Username is required' },
                { type: 'validUsername', message: 'Your username has already been taken' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'hospitalName': [
                { type: 'required', message: 'Hospital name is required' },
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
            ]
        };
        this.registerForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            hospitalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            confirmPassword: ['', _validator__WEBPACK_IMPORTED_MODULE_3__["passValidator"]]
        });
        //Observable to update validator if password field changed again
        this.registerForm.controls.password.valueChanges
            .subscribe(function (x) { return _this.registerForm.controls.confirmPassword.updateValueAndValidity(); });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userData = this.registerForm.value;
        this.auth.registerUser(this.userData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resetForm-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.reset-card {\n  max-width: 500px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldEZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlc2V0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n    <mat-card fxFlex=\"40\" fxFlex.xs=\"80\">\n        <mat-card-header>\n            <mat-card-title>Reset Password</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n             <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\" class=\"resetForm-container\">\n                 <mat-form-field>\n                     <input matInput placeholder=\"Enter password\" type=\"password\" formControlName=\"password\">\n                     <mat-icon matSuffix>vpn_key</mat-icon>\n                     <mat-error *ngFor=\"let validation of validationMessages.password\">\n                            <mat-error class=\"error-message\" *ngIf=\"resetForm.get('password').hasError(validation.type) && (resetForm.get('password').dirty || resetForm.get('password').touched)\">{{validation.message}}</mat-error>\n                     </mat-error>\n                 </mat-form-field>\n                 <mat-form-field>\n                     <input matInput placeholder=\"Repeat password\" type=\"password\" formControlName=\"confirmPassword\">\n                     <mat-icon matSuffix>vpn_key</mat-icon>\n                     <mat-error class=\"error-message\" *ngIf=\"resetForm.controls.confirmPassword.invalid\">Password missmatch</mat-error>\n                 </mat-form-field>\n                 <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!resetForm.valid\">reset</button>\n             </form>   \n        </mat-card-content>\n        <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;width: 100%\">\n            <button mat-button color=\"accent\" routerLink=\"/login\">Login</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator */ "./src/app/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, authService, route, snackbar, router) {
        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.snackbar = snackbar;
        this.router = router;
        this.resetData = { 'userName': '' };
        this.validationMessages = {
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
            ]
        };
        this.resetForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])],
            confirmPassword: ['', _validator__WEBPACK_IMPORTED_MODULE_5__["passValidator"]]
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.paramMap.get('token');
        this.authService.checkResetPasswordLink(token)
            .subscribe(function (res) {
            if (res.success) {
                console.log(res.data.userName);
                _this.userName = res.data.userName;
                _this.snackbar.open(res.message, 'close');
            }
            else {
                _this.snackbar.open(res.message, 'close');
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.resetData = this.resetForm.value;
        this.resetData.userName = this.userName;
        console.log(this.resetData);
        this.authService.resetPassword(this.resetData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/role-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/role-guard.service.ts ***!
  \***************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    RoleGuardService.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('token');
        // decode the token to get its payload
        var decodedToken = this.jwtHelper.decodeToken(token);
        if (this.authService.loggedIn() && decodedToken.permission == expectedRole) {
            return true;
        }
        else {
            this.router.navigate(['/unauthorized']);
            return false;
        }
    };
    RoleGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "./src/app/select-station/select-station.component.css":
/*!*************************************************************!*\
  !*** ./src/app/select-station/select-station.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXN0YXRpb24vc2VsZWN0LXN0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Qtc3RhdGlvbi9zZWxlY3Qtc3RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/select-station/select-station.component.html":
/*!**************************************************************!*\
  !*** ./src/app/select-station/select-station.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/bg.jpg)'}\"  style=\"height: 100%;width: 100%\">\n\t<mat-card fxFlex=\"40\" fxFlex.xs=\"80\">\n\t\t\t<mat-card-header>\n\t\t\t  \t<mat-card-title>Select Station</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t\t<form [formGroup]=\"selectStationForm\" (ngSubmit)=\"onSubmit(selectStationForm,formDirective)\"  #formDirective=\"ngForm\">\n\t\t\t\t \t\t<div class=\"form-container\">\n\t\t\t\t \t\t\t<mat-form-field>\n\t\t\t\t \t\t\t  \t<mat-select placeholder=\"Station\" formControlName=\"stationId\">\n\t\t\t\t \t\t\t    \t<mat-option *ngFor=\"let station of stations\" [value]=\"station._id\">\n\t\t\t\t \t\t\t      \t\t{{station.stationName}}\n\t\t\t\t \t\t\t    \t</mat-option>\n\t\t\t\t \t\t\t  \t</mat-select>\n\t\t\t\t \t\t\t  \t<mat-icon matSuffix>important_devices</mat-icon>\n\t\t\t\t \t\t\t  \t<mat-error *ngFor=\"let validation of validationMessages.stationId\">\n\t\t\t\t \t\t\t      \t<mat-error class=\"error-message\" *ngIf=\"selectStationForm.get('stationId').hasError(validation.type) && (selectStationForm.get('stationId').dirty || selectStationForm.get('stationId').touched)\">{{validation.message}}</mat-error>\n\t\t\t\t \t\t\t  \t</mat-error>\n\t\t\t\t \t\t\t</mat-form-field>\n\t\t\t\t \t\t</div>\n\t\t\t\t \t\t<div fxLayout=\"row\">\n\t\t\t\t \t\t\t<button fxFlex=\"50\" mat-raised-button color=\"accent\"  type=\"reset\" (click)=\"selectStationForm.reset()\" style=\"margin-right: 20px;\">cancel</button>\n\t\t\t\t \t\t\t<button fxFlex=\"50\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!selectStationForm.valid\">Submit</button>\n\t\t\t\t \t\t</div>\n\t\t\t\t \t</form>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/select-station/select-station.component.ts":
/*!************************************************************!*\
  !*** ./src/app/select-station/select-station.component.ts ***!
  \************************************************************/
/*! exports provided: SelectStationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStationComponent", function() { return SelectStationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectStationComponent = /** @class */ (function () {
    function SelectStationComponent(router, fb, nurse, admin, snackbar, dialog) {
        this.router = router;
        this.fb = fb;
        this.nurse = nurse;
        this.admin = admin;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.stations = [];
        this.stationData = {};
        this.validationMessages = {
            'stationId': [
                { type: 'required', message: 'Station name is required' }
            ]
        };
        this.selectStationForm = this.fb.group({
            stationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SelectStationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nurse.readStation()
            .subscribe(function (res) {
            if (res.success) {
                _this.stations = res.data;
            }
            else {
                _this.snackbar.open(res.message, 'close');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SelectStationComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        this.stationData = this.selectStationForm.value;
        this.nurse.setStation(this.stationData)
            .subscribe(function (res) {
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/nurse/home']);
                formDirective.resetForm();
                _this.selectStationForm.reset();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SelectStationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-station',
            template: __webpack_require__(/*! ./select-station.component.html */ "./src/app/select-station/select-station.component.html"),
            styles: [__webpack_require__(/*! ./select-station.component.css */ "./src/app/select-station/select-station.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _nurse_service__WEBPACK_IMPORTED_MODULE_3__["NurseService"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SelectStationComponent);
    return SelectStationComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://173.230.145.245:4000');
    }
    // EMITTER
    SocketService.prototype.sendMessage = function (topic, msg) {
        this.socket.emit('publish', { topic: topic, message: msg });
    };
    // HANDLER
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('dripo', function (msg) {
                observer.next(msg);
            });
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/taskactivity-dialog/taskactivity-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/taskactivity-dialog/taskactivity-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2thY3Rpdml0eS1kaWFsb2cvdGFza2FjdGl2aXR5LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/taskactivity-dialog/taskactivity-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/taskactivity-dialog/taskactivity-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Task</h2>\n\n<mat-dialog-content>\n\n\tAre you sure you want to delete this task ?\n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button mat-primary\" color=\"primary\" [mat-dialog-close]=\"true\">Close</button>\n    <button class=\"mat-raised-button mat-accent\"(click)=\"removeTask()\">Remove</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/taskactivity-dialog/taskactivity-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/taskactivity-dialog/taskactivity-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaskactivityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskactivityDialogComponent", function() { return TaskactivityDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nurse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nurse.service */ "./src/app/nurse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TaskactivityDialogComponent = /** @class */ (function () {
    function TaskactivityDialogComponent(nurse, snackbar, dialogRef, data) {
        this.nurse = nurse;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.deleteTaskData = {};
        this.deleteTaskData = data;
    }
    TaskactivityDialogComponent.prototype.ngOnInit = function () {
    };
    TaskactivityDialogComponent.prototype.removeTask = function () {
        var _this = this;
        this.nurse.deleteTask(this.deleteTaskData)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackbar.open(res.message, 'close');
                _this.dialogRef.close('success');
            }
        }, function (err) {
            console.log(err);
        });
    };
    TaskactivityDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskactivity-dialog',
            template: __webpack_require__(/*! ./taskactivity-dialog.component.html */ "./src/app/taskactivity-dialog/taskactivity-dialog.component.html"),
            styles: [__webpack_require__(/*! ./taskactivity-dialog.component.css */ "./src/app/taskactivity-dialog/taskactivity-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_nurse_service__WEBPACK_IMPORTED_MODULE_2__["NurseService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TaskactivityDialogComponent);
    return TaskactivityDialogComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector, snackbar) {
        this.injector = injector;
        this.snackbar = snackbar;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
            //intercept the respons error and displace it to the console
            _this.handleAuthError(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
        }));
    };
    TokenInterceptorService.prototype.handleAuthError = function (err) {
        //handle your auth error or rethrow
        if (err.status === 422 || err.status === 404) {
            //navigate /delete cookies or whatever
            if (err.error.message) {
                this.snackbar.open(err.error.message, 'close');
            }
            else if (err.error.errors) {
                this.snackbar.open(err.error.errors[0].msg, 'close');
            }
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err.message);
        }
        throw err;
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.css":
/*!*********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.html":
/*!**********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{background: 'url(../../assets/images/noaccess.jpg)'}\"  style=\"height: 100%;width: 100%\">\n</div>\n"

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! ./unauthorized.component.html */ "./src/app/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/unauthorized/unauthorized.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/validator.ts":
/*!******************************!*\
  !*** ./src/app/validator.ts ***!
  \******************************/
/*! exports provided: passValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passValidator", function() { return passValidator; });
function passValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
        var cnfpassValue = control.value;
        var passControl = control.root.get('password'); // magic is this
        if (passControl) {
            var passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ksumsb3pro37/Desktop/EvelabsCare/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map