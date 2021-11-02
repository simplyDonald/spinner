const spinners = `|/-\\|/-\\|`
// console.log(spinners);
let delay = 100;
spinners.split('').forEach((elem)=>{
  
  setTimeout(() => {
    process.stdout.write(elem + '\r');
  }, delay);
  delay += 200;
})
process.stdout.write('');

