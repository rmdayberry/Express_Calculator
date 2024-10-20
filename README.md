# Express_Calculator

This is a simple Express.js application that performs basic statistical operations on a set of numbers provided via query parameters. The app supports three main operations: Mean (average) Median (midpoint) Mode (most frequent number) Each operation is available via separate routes (/mean, /median, and /mode), and the results are returned as JSON responses. The app also handles errors such as invalid inputs and missing numbers.

# Features

- Mean, Median, and Mode calculations via GET requests.
- Graceful error handling for invalid inputs and missing query parameters.
- /all route to compute all three operations at once and return the results in a single response.
- Optional save parameter to store the results in a results.json file with a timestamp.
- Returns JSON or HTML based on the Accept header.
