Pokedex
===

## Code Wars

* [Kata Two](https://www.codewars.com/kata/simple-validation-of-a-username-with-regex)

## App

Build a searchable, sortable pokemon viewer. The lab includes the pokemon data you can use!

Basic structure is like:

```sh
+-------------------------+
|  Filter and Sort        |
+-------------------------+
|      Results            |
|◼️◻️◻️◼️◻️◻️◻️◻️◼️◻️◻️ |
|◻️◻️◼️◻️◻️◼️◻️◻️◼️◻️◻️ |
|◻️◻️◼️◻️◻️              |
|                         |
+-------------------------+
```

## Components

```sh
App
 |
 +-- Header
 |    |
 |    +-- Filter
 |    |
 |    +-- Sort
 |
 +-- Results
      |
      + Tile
```

### App

Top-level container. Mediate between `Filter`/`Sort` in Header and Results.

`App` will need to own the pokedex data and have a set of computed properties for applying 
the filter and the sort (this is what will be based to `Results`

#### Header

Container for Filter and Sort

##### Filter

Offers controls for filtering:

* Filtering based on type
    * Notice there are two possible matches for each pokemon!
    * Derive list of types from the pokemon data (put this as an api call)
    * (HINT: look at in-class example for collating all unique types)
* Pick at least one quantified attribute (attack, defence, etc.) and allow user to enter a minimum value.
    * Make sure your input only allows whole, positive integer values.

##### Sort

Offer sorting based one of:

1. Pokemon name (default)
1. Type (use `type_1`)
1. Attack
1. Defence

#### Results

Receives the filtered and sorted results from app and generates `Tile` components.

##### Tile

* Displays a pokemon image
* Name
* Relevant data (attack, defence, anything you used in filter/sort). 
* Color code based on type. 
* Feel free to put other attributes.

## Rubric

* Correct overall structure and organization **1pt**
* `Filter` and `Sort` components **3pts**
* `Results` and `Tile` components **3pts**
* Managing data (apply filter and sort) using computed properties **3pts**
