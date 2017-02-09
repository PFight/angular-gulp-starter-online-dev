"use strict";
require("../rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component/dashboard.component");
var dashboard_imports_1 = require("./dashboard-imports");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            dashboard_routing_module_1.DashboardRoutingModule,
            dashboard_imports_1.Modules.HeroesModule
        ],
        declarations: [
            dashboard_component_1.DashboardComponent
        ],
        providers: []
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
