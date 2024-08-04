//  browser object modal
location;
history;

// open new tab in javascript
open("home");
open(
  "https://next-intl-docs.vercel.app/docs/getting-started/app-router",
  "name",
  ".."
);
close(); // it can close only the tab which is opened by open()
resizeTo(); // same as above
print(); //to print the page

// ====== // bubbling and capture ===

// click event can go to till window(flow up wards  )
parent;
body;
document;
window;

// bubbling and capture
// bubbling (inner to outer)
// capture (outer to inner)

document.addEventListener(
  "event",
  (e) => {
    console.log(e, "event");
  },
  { capture: true, once: true }
); //if we add true then it become capture otherwise it is bubbling
// if we pass once true then it click only once

// === event delegation
// dom manipulation

// browser is multiple threaded
// javascript is single threaded

// alert prompt all synchronous
