"use strict";
require("../rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var heroes_routing_module_1 = require("./heroes-routing.module");
var heroes_component_1 = require("./heroes.component/heroes.component");
var hero_detail_component_1 = require("./hero-detail.component/hero-detail.component");
var hero_search_component_1 = require("./hero-search.component/hero-search.component");
var hero_service_1 = require("./services/hero.service");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            heroes_routing_module_1.HeroesRoutingModule
        ],
        declarations: [
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent
        ],
        providers: [hero_service_1.HeroService],
        exports: [hero_search_component_1.HeroSearchComponent]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;
