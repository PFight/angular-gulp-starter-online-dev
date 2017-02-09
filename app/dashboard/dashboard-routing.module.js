"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component/dashboard.component");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
