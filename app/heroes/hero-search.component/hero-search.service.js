"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HeroSearchService = (function () {
    function HeroSearchService(http) {
        this.http = http;
    }
    HeroSearchService.prototype.search = function (term) {
        return this.http
            .get("app/heroes/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    return HeroSearchService;
}());
HeroSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroSearchService);
exports.HeroSearchService = HeroSearchService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
