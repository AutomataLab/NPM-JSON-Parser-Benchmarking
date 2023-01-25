
//console.time() API for large data benchmarking
const JSki = require('jsonski')
const simdjson = require('simdjson');
const fs = require('fs');
console.log("Jsonski vs simdJSON vs Javascript 26 MB")
console.log("Jsonski")
console.time()
console.log(JSki.JSONSkiParser("$.tiger", "datasets/test.json"));
console.timeEnd()
var file_contents_big = fs.readFileSync('datasets/test.json')
var str0 = file_contents_big.toString()
console.log("\n")
console.log("simDjson")
console.time()
console.log(simdjson.lazyParse(str0).valueForKeyPath("tiger"));
console.timeEnd()
console.log("\n")
console.log("Javascript")
console.time()
console.log(JSON.parse(str0)["tiger"]);
console.timeEnd()



console.log("Jsonski vs simdJSON vs Javascript 189 MB")
console.log("Jsonski")
console.time()
console.log(JSki.JSONSkiParser("$.tiger", "datasets/citylots.json"));
console.timeEnd()
var file_contents_large = fs.readFileSync('datasets/citylots.json')
var str1 = file_contents_large.toString()
console.log("\n")
console.log("simDjson")
console.time()
console.log(simdjson.lazyParse(str1).valueForKeyPath("tiger"));
console.timeEnd()
console.log("\n")
console.log("Javascript")
console.time()
console.log(JSON.parse(str1)["tiger"]);
console.timeEnd()
