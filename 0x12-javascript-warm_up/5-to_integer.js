#!/usr/bin/node
// this is a script that prints number converted to an integer;

if (isNaN(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
