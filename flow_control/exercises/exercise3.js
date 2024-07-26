function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    console.log(num % 2 ? 'odd' : 'even');
  } else {
    console.log('That is not an integer!');
  }
}

evenOrOdd(4);
evenOrOdd(10);
evenOrOdd('not an integer');
evenOrOdd(5);
evenOrOdd(53);