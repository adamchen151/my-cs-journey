# My Coding Journey
## Coding Projects to-do:
Coding stuff I haven’t done: https://docs.google.com/document/d/1hu8Ds_ZQ-iEeTfOhveOlSu1rzSQjDLae4uJ_NG3XDVM/edit

## Programming
ICS3U1 - C++
ICS4U1 - C++ (Classes)
CS135 - Racket
CS136 - C
CS136L - Bash
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

### High School

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

### CS 135



## Computer Architecture
CS 330

## DSA
CS231 - Algorithms
Two pointers, Sliding Window, Greedy, Divide and Conquer, DP, BFS, DFS, Bitmask, (Sorting)
CS234 - Data Types and Structures
Array (String), Linked List, Hashmap/Set, Stack, Queue (Heap-Priority Queue), Trees, Graphs (Unweighted, weighted)
[https://leetcode.com/](https://leetcode.com/u/adamchen151/)

## Operating Systems

## Computer Networking
CS 330

## Databases
CS 338?

## Languages and Compilers

## Distributed Systems
