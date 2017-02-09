"use strict";
var Heroes = require("../heroes/heroes-exports");
exports.Heroes = Heroes;
var Models = require("../models/models-exports");
exports.Models = Models;
// NGC bug fix (we can't use Heroes.HeroesModule in dashboard.module imports)
var Modules = {
    HeroesModule: Heroes.HeroesModule
};
exports.Modules = Modules;
