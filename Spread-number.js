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

// The spread operator only works on iteratable objects, so we need to make Number iteratable.
Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  while (i < this) yield ++i;
}

// or

Number.prototype[Symbol.iterator] = function*() {
  yield* [...Array(+this).keys()].map((n) => n + 1);
}