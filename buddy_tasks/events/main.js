const btnEl = document.getElementById('btn');
const parentEl = document.getElementById('parent');


btnEl.addEventListener('click', (e)=>{
  console.log("HEY I Am Grand Parent....")
  btnEl.style.background = 'red'
  // e.stopPropagation();
})       

btnEl.addEventListener('mouseover', (e)=>{
  btnEl.style.background = 'gold'
  console.log("mouse over event....")
  // e.stopPropagation();
})   

btnEl.addEventListener('mouseout', (e)=>{
  btnEl.style.background = 'white'
  console.log("mouse over event....")
  // e.stopPropagation();
}) 
/// True Indicate Hirechary Change..
/// False Indicates Will Go For Futher...

parentEl.addEventListener('click', (e)=>{
  console.log("HEY I Am  Parent....")
  parentEl.style.background = 'yellow'
  // e.stopPropagation();
})

parentEl.addEventListener('mouseover', (e)=>{
  console.log("HEY I Am Child.....")
  parentEl.style.background = 'blue'
  // alert("Hey I, Am Child Element...")
  // childEl.style.background = 'blue'
  // e.stopImmediatePropagation();
  // e.stopPropagation();
})

parentEl.addEventListener('mouseout', (e)=>{
  console.log("HEY I Am Child.....")
  parentEl.style.background = 'white'
  // alert("Hey I, Am Child Element...")
  // childEl.style.background = 'blue'
  // e.stopImmediatePropagation();
  // e.stopPropagation();
})
// childEl.addEventListener('click', (e)=>{
//   console.log("HEY I Am Child 2nd time.....")
//   childEl.style.background = 'gold'
//   alert("Hey, I , Am Also A Child Element.....")
//   e.stopPropagation();
// })


//////////////// MOuseOver && MouseOut //////////////

// document.getElementById('btn').addEventListener("mouseover", (e) => {
//   grandparentEl.style.border = '7px solid gold';
//   // e.stopPropagation();

// });
// document.getElementById('btn').addEventListener("mouseout", (e) => {
//   grandparentEl.style.border = '1px solid black';
// });

// document.getElementById("parent").addEventListener("mouseover", (e) => {
//   parentEl.style.border = '7px solid pink';
//   // e.stopPropagation();
// });
// document.getElementById("parent").addEventListener("mouseout", (e) => {
//   parentEl.style.border = '1px solid black';
// });

// document.getElementById("child").addEventListener("mouseover", (e) => {
//   childEl.style.border = '7px solid orange';
//   // e.stopPropagation();
// });
// document.getElementById("child").addEventListener("mouseout", (e) => {
//   childEl.style.border = '1px solid black';

// });



// //////// MouseDown && MouseUp /////////////


// document.getElementById("btn").addEventListener("mousedown", (e) => {
//   grandparentEl.style.background = 'green';
//   // e.stopPropagation();

// });
// document.getElementById("btn").addEventListener("mouseup", (e) => {
//   grandparentEl.style.background = 'white';
// });

// document.getElementById("parent").addEventListener("mousedown", (e) => {
//   parentEl.style.background = '#B00B69';
//   // e.stopPropagation();
// });
// document.getElementById("parent").addEventListener("mouseup", (e) => {
//   parentEl.style.background = 'white';
// });

// document.getElementById("child").addEventListener("mousedown", (e) => {
//   childEl.style.background = '#CC99FF';
//   // e.stopPropagation();
// });
// document.getElementById("child").addEventListener("mouseup", (e) => {
//   childEl.style.background = 'white';
// });




/// KEYBOARD EVENTS ///


//// 1. keydown --> will effect if each of the keyboard,
///  2. keypress --> will effect only when key presses, 
///  3. keyup --> occurence in sequence.



//// Prevent Default ////

/// if we use preventdefault i will not do any default actions



//////   BOM  (Browser Object Model)  /////

/// --> 1. Window: innerHeight, innerWidth
/// --> 2. Screen: height, width, availWidth, availHeight, colorDepth, pixelDepth
/// --> 3. Location: href, hostname, pathname, protocol, assign()
/// --> 4. History: back(), forward()
/// --> 5. Navigator: appName, appCodeName, platform
/// --> 6. PopUp Alert: alert, confirm.
/// --> 7. Timing: setTimeOut, setInterval, clearTimeout, clearInterval
/// --> 8. Cookies


///////  DOM  (Document Object Model)   //////


//// ---> all the methods and objects related with the present or present running file or document.


////  --->   Depending on the kind of element being changed and the way the user interacts with the element, 
/////   the change event fires at a different moment