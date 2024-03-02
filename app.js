function fahrenheitNum(num) {
  console.log(num * 1.8 + 32);
  return (document.getElementById("result").innerHTML = `${
    num * 1.8 + 32
  } (°F )`);
}
