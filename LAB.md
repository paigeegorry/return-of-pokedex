Pokedex
===

## Code Wars

* [Kata](https://www.codewars.com/kata/simple-validation-of-a-username-with-regex)
* https://regex101.com/ is your friend for regex!

## App

Build a searchable, sortable pokemon viewer. The lab includes the pokemon data you can use! (Use the images sources in the data)

Basic structure is like:

```
+-------------------------+
|  Filter and Sort        |
+-------------------------+
|      Pokedex            |
|◼️◻️◻️◼️◻️◻️◻️◻️◼️◻️◻️ |
|◻️◻️◼️◻️◻️◼️◻️◻️◼️◻️◻️ |
|◻️◻️◼️◻️◻️              |
|                         |
+-------------------------+
```

## Components

```
App
 |
 +-- Header
 |    |
 |    +-- Filter
 |    |
 |    +-- Sort
 |
 +-- Pokedex
      |
      + Pokemon
```

### App

Top-level container. Mediate between `Filter`/`Sort` in Header and Results.

`App` will need to own the data:
* pokedex
* filter/sort

And have a set of computed properties for applying the filter and the sort (the result of which will be passed to `Pokedex`)

#### Header

Container for Filter and Sort

##### Filter

Offers controls for filtering:

* Filtering based on `type`
    1. Notice there are two possible matches for each pokemon!
    1. Derive list of types from the pokemon data (put this as an api call, look at in-class example for collating all unique types)
* Pick _at least_ one quantified attribute (attack, defence, etc.)
    1. Allow user to enter a _minimum_ value.
    1. Make sure your input only allows whole, positive integer values.
* **BONUS** Add more filters

##### Sort

Offer sorting based one of:

1. Pokemon name (default)
1. Type (use `type_1`)
1. Attack
1. Defence
1. **BONUS** Add more sortable columns

#### Pokedex

Receives the filtered and sorted results from app and generates `Pokemon` tile components.

##### Pokemon

* Displays a pokemon image
* Name
* Relevant data (attack, defence, anything you used in filter/sort). 
* Color code based on type. 
* Feel free to put other attributes.

## Commit History

Your commits should have _at least_ this level of granularity (there can be some variability in order, but design of html/css should come before making the component dynamic):

1. Design (HTML and CSS) of `Pokedex` and `Pokemon`
1. Render list of all Pokemon in `Pokedex`
1. First filter term working
1. Commits additional filter term(s) working
1. Sort working

## Build

Travis CI:
* On for rest of BC2
* `.travis.yml` included in this lab
* Add `"test": "npm run lint"` to your `package.json` `scripts`

Git:
* `.gitignore` for `node_modules`
* Included in this lab

## Rubric

* Correct overall structure and organization **1pt**
* `Filter` and `Sort` components **3pts**
* `Results` and `Tile` components **3pts**
* Managing data (apply filter and sort) using computed properties **3pts**
