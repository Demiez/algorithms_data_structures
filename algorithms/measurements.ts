const start: Date = new Date();
const hrstart = process.hrtime();
const simulateTime = 5000;

setTimeout(() => {
  // execution time simulated with setTimeout function
  const end = new Date().valueOf() - start.valueOf();
  const hrend = process.hrtime(hrstart);

  console.info('Execution time: %dms', end);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
}, simulateTime);
