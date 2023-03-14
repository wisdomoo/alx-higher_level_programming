#!/usr/bin/node

// Rectangle class that defines a rectangle with 
// an instance methode called print() that prints
// the rectagle using the character X:

class Rectangle {
  constructor (w, h) {
    if (((w = parseInt(w)) > 0) && ((h = parseInt(h)) > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    console.log(('X'.repeat(this.width) + '\n').repeat(this.height - 1) + 'X'.repeat(this.width));
  }
}
module.exports = Rectangle;
