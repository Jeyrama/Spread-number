/*
It would be cool if we could create arrays filled by numbers from 1 to n like this arr = [...n].
Your task is to do something with Number to make it possible.
In your code you shouldn't do anything else, only modify Number.

Example:
  [...1] => [1]
  [...2] => [1, 2]
  [...3] => [1, 2, 3]
  [...4] => [1, 2, 3, 4]
  [...5] => [1, 2, 3, 4, 5]
*/


// Solution

function rankings(arr) {
  let sorted = arr.concat().sort(function(a,b) {
  return b-a;
  });

  return arr.map(function (element) {
    return sorted.indexOf(element) +1
    });
}

// or

function rankings(arr) {
  const a = arr.slice().sort((a,b)=>b-a)
  return arr.map(x=>a.indexOf(x)+1)
}