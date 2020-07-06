#!/usr/bin/env node
const ntc = require("./ntc");
const color = process.argv[2];

const name = ntc.name(color);
console.log(name);
return name;
