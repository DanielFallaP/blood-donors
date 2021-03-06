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
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var DonorService = (function () {
    function DonorService(http) {
        this.http = http;
    }
    DonorService.prototype.getDonors = function () {
        return this.http.get('http://localhost:8080/api/donors')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DonorService.prototype.getComments = function () {
        // ...using get request
        return this.http.get('http://localhost:8080/api/donors')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    DonorService.prototype.getDonorDetail = function (id) {
        return this.http.get('http://localhost:8080/api/donors/' + id)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DonorService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    DonorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DonorService);
    return DonorService;
}());
exports.DonorService = DonorService;
//# sourceMappingURL=donor.service.js.map