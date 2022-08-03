# Typescript-train

## goal
> LEARN, LEARN, LEARN!!
## HOW
> READ, READ, READ!! && DO, DO, DO!!
>> adn trying to explain them down below in own words. ***if you understand it, you can explain it.***

<br>
<br>

# What to learn/ better understand and master
## The 4 pillars of OOP
1. [x] Abstraction
1. [x] Encapsulation
1. [x] Inheritance
1. [x] Polymorphism

## SOLID 
- [x] S = Single Responsibility Principle (SRP)
  >“There should never be more than one reason for a class to change.”
  >> seperated engine and Radio from the car. also seperated fuel and put it with the engine.
  the fuel consumtion is getting called from the car drive method. and the engine is the one that consumes the fuel.
  added method handleFuel() inside the Egnine class.
  [x] O = Open-Close Principle (OCP)
  >  “Software entities … should be open for extension, but closed for modification.”
  >>   in other words. you should be able to build your classes in a way that you can extend them via childclasses
      and once you created the class it no longer needs to be changed.

    to make this true in this exercise i added an interface makesSound and implemented it to the animals classes.
  also gave every animal class an method makeSound and removed the makeSound method in the zoo. so every new animal
must have a makesound method that we them output in the function and we dont have to touch the zoo or the function to display them.

<br/>

- [x] L = Liskov Substitution Principle (LSP)
  >“Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.”
  >> all classes should behave the same way. even if you use the wrong class object, it still shouldnt give you errors.
to make this happen, i created 3 classes to replace the union.
- [x] I = Interface Segregation Principle
  >“Many client-specific interfaces are better than one general-purpose interface.”
  >> interfaces should behave a bit like in the srp principle. 
an interface can better be devided then to use more rules in 1 interface.
- [x] D = Dependency Inversion Principle (DIP)
  >“Depend upon abstractions, [not] concretions.”

<br>
<br>

![just-do-it-shia](https://user-images.githubusercontent.com/100337229/181348501-c3bc8e52-c299-4175-ba55-fb2c8fda83d8.gif)



