function first() {
  //simulate a code delay
  setTimeout(function() {
    console.log("First!");
  }, 500);
}

function second() {
  console.log("Second!");
}

//first();
//second();

// Create a callback:

// 1st way: self-callback
function doHomework(subject, callback) {
  console.warn(`Starting my ${subject} homework`);
  callback();
}

// This provides its own callback.
doHomework("math", function() {
  console.log("Finished my homework");
});

//doHomework("math");

// 2nd way: separate function callback:
function doHomework2(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished() {
  console.log("Also finished my homework.");
}

doHomework("Worldly Wise", alertFinished);
