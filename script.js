function getTriangleArea(a, h) {
  if(a <= 0 || h <= 0) {
    console.log("Nieprawidlowe dane");
  } else  {
    return a*h/2;
  }
};

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-7, 14);
var triangle3Area = getTriangleArea(5, 10);

console.log(triangle2Area);
