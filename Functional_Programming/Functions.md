# Functionsl Programming
Functional programming is a style of programming where solutions are simple, isolated functions,
 without any side effects outside of the function scope:  
  _INPUT -> PROCESS -> OUTPUT_  


Functional programming is about:  

 **1.Isolated functions**
- there is no dependence on the state of the program, which includes global variables that are subject to change  

 **2.Pure functions**
- the same input always gives the same output  

 **3.Functions with limited side effects**
- any changes, or mutations, to the state of the program outside the function are carefully controlled.  


## Some Functional Terminologies

**Callbacks**
- Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.  

**First Class Functions**
- Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.  

**Higher Order Functions**
- The functions that take a function as an argument, or return a function as a return value, are called higher order functions.  

**Lambda Functions**
When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

___

#### Mutations
- One of the core principles of functional programming is to not change things. Changes lead to bugs. 

- It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

- create new variables and objects and return them if need be from a function.

- Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect

- Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variables.