// PrintGlass(5);   //(n *2) - 1

function PrintGlass(input) {

  // tiny straw for glass??
  //  for(var i = input; i > 0; i--) {
  //   var sp = input - i; 
  //   console.log(repeat(sp, " ") + repeat(1, "/"));
  // }

  for(var i = input; i > 0; i--) {     // reverse loop to decrease zeros while increasing spaces = v shape
    var n = (i * 2) - 1; 
    var sp = input - i; 
    console.log(repeat(sp, " ") + repeat(n, "0"));
  }

  for(var p = 0; p < input; p++) {
    console.log(repeat(input-1, " ") + "|");
  }
    console.log(repeat((input * 2) - 1, "="));

}

function repeat(num, char) {
  return Array(num+1).join(char);
}



