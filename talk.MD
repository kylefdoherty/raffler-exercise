# [fit] JavaScript

---
# Features
- Prototype based language (No classes, objects inherit from objects)
- Dynamic Typing
- Functional
- Load and Go

___

# 'Learn JavaScript or Die' - Ju
- The only language that all browsers run
- Actively optimized by Google, Apple, Mozilla (4th level LLVM)
- Ambitious frontend based apps 
- Top language on Github and in the world (argubly)

---	

# [fit] But it's a horrible language due to design mistakes

---

![](http://cl.ly/image/2g2Y3W3Y2E0H/JavaScript-the-good-parts.jpg)

---

# #lolwuts
````javascript
1 == 1   // true
1 == "1" // true
1 == "2" // Type conversion #WAT
[] = [] // false
````

````javascript
// NaN => Not A Number
5 + NaN = NaN // NaN is toxic
NaN == NaN // false
typeof(NaN) // 'number' #lololwut
````

---


# [fit] Made worst by Internet Explorer

---

![fit](/Users/daemonsy/Desktop/gifs/html5.png)

---

![fit](/Users/daemonsy/Desktop/IE_Meme.jpg)

---

# [fit] There's a story behind that

---


# [fit] The point is it's not easy to good code in JS thanks to the gotchas

---

# So how is JavaScript used?
1. Dom Manipulation
2. Frontend frameworks (maintaining states)
3. Server side (Node JS)

___

# Watch 
## [fit] https://www.youtube.com/watch?v=v2ifWcnQs6M

---

# Practise
## Codecademy, JavaScript and jQuery track
#### http://www.codecademy.com

---

# Read
## JavaScript, The Good Parts 
#### (When you're free, in our shared folder)

---

# Why is jQuery synonymous with JS?

- Vanilla JS is verbose and has confusing APIs 
- jQuery allows unified access $() and simple dom manipulations
- Used everywhere, Angular and Ember both uses jQuery to implement their frameworks


````javascript
// Vanilla JS 
document.getElementById('title').innerHTML = "Damon rocks"

// jQuery
$('#title').text("Damon rocks")
````

---


# [fit] Let's come back later in the afternoon

---

# Things to cover:
- Basic JavaScript
- The DOM
- Life outside of `document.ready()`
- The `this` problem 
- Closures 
java
---
# Things to cover:

- Building objects, functions and the new keyword
- We can do MVC pattern in JavaScript too!
- Stop manipulating the DOM by hand!
- Using console debugger
- (if we have time) A taste of using Angular JS

---


![](http://cl.ly/image/0e3e281w0y0e/Screen%20Shot%202014-06-03%20at%2020.31.53.png)
# [fit] Get Lucky Raffler

### git clone https://github.com/daemonsy/raffler-exercise

---

# Current State

- One page HTML served by Rails
- Some seed data embedded in the DOM 
- raffler.js contains all the JS currently

---

# Part 1 - Refactoring

- Get rid of the running all code in `$(document).ready()`
- Y U Global variable??????

````javascript

````

^ Refactor all code to a variable call run
^ Show that this variable is a global variable and how much junk is in window
^ Create a namespace called App

---


# The End