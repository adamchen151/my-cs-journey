# My Coding Journey
## Coding Projects to-do:
Coding stuff I haven’t done: https://docs.google.com/document/d/1hu8Ds_ZQ-iEeTfOhveOlSu1rzSQjDLae4uJ_NG3XDVM/edit

## Programming
CS246 - C++

Git, Bash (ls, cd, mkdir, rm, filter commands)
C++, Python, React, SQL

Basic Concepts:
Functional vs Imperative Programming
Variables/Constants
Types (String, Integer, etc)
Loops/Recursion
Functions
Conditionals/Boolean Operators
Structs
Pointers
Classes (Inheritance, Polymorphism, Member functions, setters/getters)

## High School (ICS3U1 and ICS4U1)

Penguin wants to make a new D&D class called the coder, who destroys monsters with the power of code. He is trying to figure out how to describe his character’s attributes, such as his health, or his character name. To do this, he uses variables, such as:
```c++
int x = 5;
string name = “Penguin”;
```
If he wants to change the name, he can do so:
```c++
name = “Epic Penguin”;
```
But the name is a string, which means he can’t change the name to an integer
```c++
name = 123 // Not allowed!
```
This is an example of static typing, which means that once a variable is one type, it can't change into another type. C++ is a statically typed language, but Racket and Python are dynamically typed.

Penguin then makes a variable called max_hp, but realises that his max_hp will always be the same. He decides to make it a constant, so it can't be changed, even by accident:
```c++
const int max_hp = 69;
```

Even though Penguin will never die, he still wants a way to check, so he uses an if/else block, and a boolean operator
```c++
if (max_hp <= 0) {
  // Penguin is dead :(
} else {
  // Penguin is alive!!
}
```

To hit a skeleton monster, he needs to call a function, which is basically a block of code that can be reused:
```c++
void hit(Creature c1, Creature c2) {
  c2.get_health() -= c1.get_damage();
}
```
The parameters are c1 and c2, and void is the return type.

He sees a skeleton, and tries to hit it five times. He could call the function 5 times, but that would take 5 lines of code. Instead, he could use a loop:
```c++
for (int i = 0; i < 5; i++) {
  hit(player, skeleton);
}
```

Penguin notices that if he could put everything relating to himself in a class, the code would be a lot cleaner than having scattered functions. So he makes a class:
```c++
class Penguin {
  private:
    std::string name;
    const int max_hp;
    int current_hp;
    const int damage;
  public:
    // Getters and Setters

    void hit(Creature c2) {
      c2.get_health() -= this->get_damage();
    }
}
```

He then realises that all of the monsters in this game have max_hp, current_hp, and damage attributes. He makes a class "Creature", then lets the "Penguin" class inherit from "Creature"
```c++
class Creature {
  // The code previously in the Penguin class
}

// Penguin inherits from Creature
class Penguin: Creature {
  public:
    void waddle() {
      std::cout << "Yo what the skibidi";
    }
}
```
He also wants to make an evil penguin who can also waddle in a different way. He can do this with polymorphism:
```c++
class EvilPenguin: Creature {
  public:
    void waddle() {
      std::cout << "Erm what the sigma";
    }
}
```

He then decides to switch languages to Racket because the University of Waterloo told him to do so.

## CS 135

### Functions

To define a function in Racket to subtract damage from his current_hp, Penguin does:
```racket
;; This is a comment! 
(define (take_hit current_hp damage)
  (- current_hp damage))
```
In Racket, everything is a function, even operators like plus and minus. Because of this, instead of writing a + b, Penguin writes (+ a b)!

To debug his code, Penguin traces it using stepping rules. For example:
```racket
(take_hit 40 5)
= (- 40 5)
= 35
```

Penguin notices that in Racket, there are no variables (only constants), no loops, and that functions can only have one expression in them.

### Helper Functions and Wrapper Functions

Penguin makes a function to see what kind of pizza the skeletons love the most, so he can lure them all to one place.

### Booleans

While implementing the function which checks if he is dead, Penguin notices that booleans operators are also functions, so he writes:
```racket
(<= current_hp 0)
```
He comes up with the fancy name "predicate" to describle a function that returns a boolean.

He realises there are ways to simplify conditional expressions.
```racket
(cond [(<= current_hp 0) "dead"]
      [else (cond [(<= current_hp 10) "fine"]
                  [else "healthy"])]
;; Can be simplifed to:
(cond [(<= current_hp 0) "dead"]
      [(<= current_hp 10) "fine"]
      [else "healthy"])
```

### Design Recipe

Penguin comes across an ancient text called the "CS 135 style guide", which gives him guidelines for good style, which can help readability.
In it, he finds a forbidden piece of knowledge:

A design recipe has 5 components:
- Purpose: Describes what the function does
- Examples
- Contract: Describes what types the function consumes and produces (eg: Str Str -> Bool)
- Definition: The function header and body
- Tests

He learns that he can write tests:
```racket
;; Use check-expect for exact values
(check-expect (+ 1 1) 2)

;; Use check-within for inexact values
(check-within (- pi 3.14) 0.1)

;; Use check-error if you are expecting an error
(check-error (- 1 "huh"))
```

### Structures

Penguin decides to move his "Creature" code to Racket. He uses a Racket struct:
```
;; Definition
(define-struct creature (name hp damage))

;; Constructor
(define penguin (make-creature "Penguin" 69 10))

;; Selectors
(define hp (creature-hp penguin))
```

### Lists

To Penguin's annoyance, in the Beginning Student version of Racket, lists are written as:
```
(define penguin-list (cons "first item" (cons "second item" (cons "etc" empty))))
```
Penguin uses first and rest to access parts of the list, and some other helpful functions
```
;; First returns the first value in the list
(first (cons 1 (cons 2 empty)))
= 1

;; Rest returns the rest of the list
(rest (cons 1 (cons 2 empty)))
= (cons 2 empty)

(cons? penguin-list) produces true if penguin-list is a non-empty list, and false otherwise
(empty? penguin-list) is pretty self explanatory
(list? penguin-list) produces true if penguin-list is any type of list, whether empty or not
```

He wonders how to iterate through the list, because there are no loops, and he has created a list of skeletons to hit. Luckly, he learns of recursion!
```
;; (define (hit-multiple-skeletons penguin skeletons) lets penguin hit every skeleton in skeletons!
;; hit-multiple-skeletons: Creature (listof Int) -> (listof Int)
(define (hit-multiple-skeletons penguin skeletons)
  (cond [(empty? skeletons) empty]
        [else (cons (- (first skeletons)
                       (creature-damage penguin))
                    (hit-multiple-skeletons penguin (rest skeletons)))]))
```

He also finds out about templates, which help him write code faster by giving him a template to work of off rather than starting from scratch
```
;; listof-X-template: (listof X) -> Any
(define (listof-X-template lox)
  (cond [(empty? lox) ...]
        [(cons? lox) (... (X-template (first lox))
                          (listof-X-template (rest lox)))]))
```

Sorting

### Natural Numbers, and More Lists

Penguin wants to be fancy, so he only lets damage be in the set natural numbers. But he needs to define this, so he says:
```
A Nat is one of:
* 0
* (+ 1 Nat)
```

Penguin uses a dictonary to store the key-value pairs for his favorite foods

He finds new notation for writing lists
```
(define penguin-list (cons "first item" (cons "second item" (cons "etc" empty))))
;; becomes
(define penguin-list (list "first item" "second item" "etc"))
```

### All stepping rules
```
(f v1...vn) => v when f is built-in
(f v1...vn) => exp when (define (f x1...xn) exp) occurs to the left (basically replace constants with their value)
(and false ...) => false
(and true ...) => (and ...)
(and) => true
(or true ...) => true
(or false ...) => (or ...)
(or) => false
(cond [false exp] ...) => (cond ...)
(cond [true exp] ...) => exp
(cond [else exp] ...) => exp

;; Structures
(sname-fname i (name-sname v1...vn)) => vi
(sname? (make-sname v1...vn)) => true
(sname? v) => false for any other type
```

## CS136 - C

## CS136L - Bash


## Computer Architecture
CS 330

## DSA

## CS231 - Algorithms
Two pointers, Sliding Window, Greedy, Divide and Conquer, DP, BFS, DFS, Bitmask, (Sorting)

## CS234 - Data Types and Structures
Array (String), Linked List, Hashmap/Set, Stack, Queue (Heap-Priority Queue), Trees, Graphs (Unweighted, weighted)
[https://leetcode.com/](https://leetcode.com/u/adamchen151/)

## Operating Systems

## Computer Networking
CS 330

## Databases
CS 338?

## Languages and Compilers

## Distributed Systems
