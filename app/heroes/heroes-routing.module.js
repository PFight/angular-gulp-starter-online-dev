"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("./hero-detail.component/hero-detail.component");
var heroes_component_1 = require("./heroes.component/heroes.component");
var routes = [
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent }
];
var HeroesRoutingModule = (function () {
    function HeroesRoutingModule() {
    }
    return HeroesRoutingModule;
}());
HeroesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], HeroesRoutingModule);
exports.HeroesRoutingModule = HeroesRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
