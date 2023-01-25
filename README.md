# NPM-JSON-Parser-Benchmarking

Benchmarking Node packages - JsonSki Vs simDjson vs Javascript for JSON files.

To run locally:

1. Download datasets from [here](https://drive.google.com/drive/folders/185SH188MJmmm-QTd14_8gq5QD-gyouNW?usp=share_link)

2. Add the downloaded files to the datasets folder

3. Run the following commands to immitate the results.

Note: Results may vary relatively depending up on the hardware. However, relative results are expected to remain same.
```
npm install
node benchmark.js 
node bench.js
```

Benchmark.js
```
Benchmarking is done using benchmarkify.js for smaller datasets.

```
Refer: https://www.npmjs.com/package/benchmarkify to add your own benchmarks


Bench.js
```
Benchmarking is done using console.time() API for larger datasets.

```
Refer: https://developer.mozilla.org/en-US/docs/Web/API/console/time to add your own benchmarks


### Results:
#### Execution time in milliseconds using console.time() API
<img width="581" alt="image" src="https://user-images.githubusercontent.com/55717003/208541162-791e6ff4-31bf-4353-9dae-06e57ab76d91.png">

#### Execution time in milliseconds using benchmarkify() API
<img width="624" alt="image" src="https://user-images.githubusercontent.com/55717003/208541722-f4e3a358-8150-42ff-843d-38f02e98c8e9.png">
