#!/usr/bin/env node

var open = require("open");
var cfg = require('get-git-info')(process.cwd());

console.log(cfg)

open("https://github.com/" + cfg.user + "/" + cfg.project + "");