"use strict";
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var heroes_module_1 = require("./heroes/heroes.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            dashboard_module_1.DashboardModule,
            heroes_module_1.HeroesModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
