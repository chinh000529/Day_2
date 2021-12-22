function fibonacci(x) {
  const f = [4n, 7n, 5n];
  if (x < 3) {
    return f[x];
  }
  let i = 3,
    result;
  while (i <= x) {
    result = f[0] + f[1] + f[2];
    f[0] = f[1];
    f[1] = f[2];
    f[2] = result;
    i++;
  }
  return result;
}
console.log(fibonacci(1000000));
