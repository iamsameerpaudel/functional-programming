"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const db = ['sameer', 'strange', 'steve', 'tony', 'peter', 'william', 'stephen', 'peter'];
const fakeSearch = (query) => {
    return new Promise(resolve => {
        resolve(db.filter(item => item.toLowerCase().startsWith(query.toLowerCase())));
    });
};
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Type to search: ");
(0, rxjs_1.fromEvent)(rl, 'line').pipe((0, operators_1.switchMap)(query => fakeSearch(query.trim()))).subscribe(results => {
    console.clear();
    console.log('Suggestions:');
    results.length
        ? results.forEach(item => console.log(item))
        : console.log('Nothing found');
    console.log('\nKeep typing');
});
