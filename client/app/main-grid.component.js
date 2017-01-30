"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var build_service_1 = require('./build.service');
require('app/modals.js');
var MainGridComponent = (function () {
    function MainGridComponent(buildService) {
        this.buildService = buildService;
    }
    MainGridComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    ;
    MainGridComponent.prototype.getRecords = function () {
        var _this = this;
        this.buildService.getRecords().then(function (records) {
            _this.records = records;
            for (var i in _this.records) {
                if (_this.records[i].timeStarted)
                    _this.records[i].timeStartedDate = new Date(_this.records[i].timeStarted);
            }
        });
    };
    MainGridComponent.prototype.openModal = function (id) {
        var st = '#' + id;
        document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
        showModal();
    };
    MainGridComponent.prototype.getRecordDetail = function (record) {
        var _this = this;
        if (record.state !== 'Running' && record.state !== 'Pending') {
            if (!record.open) {
                document.getElementById(record.id).setAttribute("style", "border-bottom: #ddd 0px solid");
                record.open = true;
                for (var i in this.records) {
                    if (this.records[i].id != record.id) {
                        document.getElementById(this.records[i].id).setAttribute("style", "border-bottom: #ddd 1px solid");
                        this.records[i].open = false;
                    }
                }
            }
            else {
                record.open = false;
                document.getElementById(record.id).setAttribute("style", "border-bottom: #ddd 1px solid");
            }
        }
        else {
            for (var i in this.records) {
                document.getElementById(this.records[i].id).setAttribute("style", "border-bottom: #ddd 1px solid");
                this.records[i].open = false;
            }
            showToast('No details available', 2000);
        }
        this.buildService.getRecordDetail(record.id).then(function (recordDetail) {
            _this.recordDetail = recordDetail;
            if (_this.recordDetail) {
                if (_this.recordDetail.timeEnded)
                    _this.recordDetail.timeEndedDate = new Date(_this.recordDetail.timeEnded);
                _this.recordDetail.unitTestSuccess = (_this.recordDetail.unitTestSuccessful / (_this.recordDetail.unitTestSuccessful + _this.recordDetail.unitTestFailing)) * 100;
                _this.recordDetail.funcTestSuccess = (_this.recordDetail.funcTestSuccessful / (_this.recordDetail.funcTestSuccessful + _this.recordDetail.funcTestFailing)) * 100;
                _this.setRecordArrow(_this.recordDetail, _this.recordDetail.testScoreChange, 'testArrow', 'testColor');
                _this.setRecordArrow(_this.recordDetail, _this.recordDetail.maintainabilityScoreChange, 'maintainabilityArrow', 'maintainabilityColor');
                _this.setRecordArrow(_this.recordDetail, _this.recordDetail.securityScoreChange, 'securityArrow', 'securityColor');
                _this.setRecordArrow(_this.recordDetail, _this.recordDetail.workmanshipScoreChange, 'workmanshipArrow', 'workmanshipColor');
                buildUnitChart(_this.recordDetail.id, _this.recordDetail.unitTestSuccessful, _this.recordDetail.unitTestFailing);
                buildUnitChart(_this.recordDetail.id, _this.recordDetail.unitTestSuccessful, _this.recordDetail.unitTestFailing);
            }
        });
    };
    ;
    MainGridComponent.prototype.getTestColor = function () {
        return this.recordDetail.testColor;
    };
    MainGridComponent.prototype.getMaintainabilityColor = function () {
        return this.recordDetail.maintainabilityColor;
    };
    MainGridComponent.prototype.getSecurityColor = function () {
        return this.recordDetail.securityColor;
    };
    MainGridComponent.prototype.getWorkmanshipColor = function () {
        return this.recordDetail.workmanshipColor;
    };
    MainGridComponent.prototype.getColor = function (value) {
        return getColorFunc(value);
    };
    MainGridComponent.prototype.getDetailColor = function (value) {
        return getDetailColorFunc(value);
    };
    MainGridComponent.prototype.getIcon = function (state) {
        return getIconFunc(state);
    };
    MainGridComponent.prototype.setRecordArrow = function (record, scoreChange, arrowProp, colorProp) {
        if (scoreChange == 0) {
            record[arrowProp] = 'arrow_forward';
            record[colorProp] = 'yellow';
        }
        else if (scoreChange > 0) {
            record[arrowProp] = 'arrow_upward';
            record[colorProp] = 'green';
        }
        else {
            record[arrowProp] = 'arrow_downward';
            record[colorProp] = 'red';
        }
    };
    MainGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-grid',
            templateUrl: 'main-grid.component.html',
            styleUrls: ['main-grid.component.css']
        }), 
        __metadata('design:paramtypes', [build_service_1.BuildService])
    ], MainGridComponent);
    return MainGridComponent;
}());
exports.MainGridComponent = MainGridComponent;
//# sourceMappingURL=main-grid.component.js.map