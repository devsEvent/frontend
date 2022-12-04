// first we need to convert maxCost to string because of split method then reverse array because we
// seprate numbers from right to left then join charaters to together to make it ready for match method
// in which this will seprate 3 by 3 charaters after that we need to reverse these 3 by 3 charaters
// because these reversed in the first stage
// in the end due to reversing cost we have to reverse it again to neutralize the first one.

export const NumSeparate = (number: number) =>
  number
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.map((item) => item.toString().split("").reverse().join(""))
    ?.reverse()
    ?.join(",");
