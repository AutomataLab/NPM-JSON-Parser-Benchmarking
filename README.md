# NPM-JSON-Parser-Benchmarking

Benchmarking Node.js packages - JSONSki Vs simdjson vs Javascript for JSON files.

## Quick Start

1. Download datasets from [here](https://drive.google.com/drive/folders/185SH188MJmmm-QTd14_8gq5QD-gyouNW?usp=share_link)

2. Add the downloaded files to the datasets folder
  <img width="160" alt="image" src="https://user-images.githubusercontent.com/55717003/219518796-409eac49-30a4-4a19-8b13-67c2969de112.png">

3. Run the following commands to immitate the results.


```
npm install
node nested_json_benchmark.js 
node small_json_benchmark.js
node large_json_benchmark.js
```

## Performance Measurement APIs


- Benchmarkify.js Read More: https://www.npmjs.com/package/benchmarkify to add your own benchmarks

- console.time()  Read More: https://developer.mozilla.org/en-US/docs/Web/API/console/time to add your own benchmarks

## Files

small_json_benchmark.js
```
Benchmarking is done using benchmarkify.js for smaller datasets.
```

large_json_benchmark.js
```
Benchmarking is done using console.time() API for larger datasets.
```

nested_json_benchmark.js
```
Benchmarking is done using console.time() API for larger datasets and complex nested queries.
```


## Performance

#### Machine Configuration

- Processor: 2.6 GHz 6 - Core Intel Core I7

- Memory : 16 GB 2667 MHz DDR4

#### Execution Results:

- Execution time in milliseconds using console.time() API
<img width="581" alt="image" src="https://user-images.githubusercontent.com/55717003/208541162-791e6ff4-31bf-4353-9dae-06e57ab76d91.png">

- Execution time in milliseconds using benchmarkify() API
<img width="624" alt="image" src="https://user-images.githubusercontent.com/55717003/208541722-f4e3a358-8150-42ff-843d-38f02e98c8e9.png">

- Note: Results may vary depending on the hardware. However, relative results are expected to remain same.
