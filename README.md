# DnD Bot Example

## Introduction 
This first example of a DnD scraping bot has its target on the spells by classes, it provides an structure to match any spellcasting-class relations with the complete spells pool. To succeed in this task, it scraps all the spell's tables (cantrips and levelled) from a class and returns it on one document, this structure may change in the future.

## Running
To install and run this example, just clone the repo and run:

```
npm install
npm run dev
```

The current output for this example should be an object with the following structure logged on console after less than 10 seconds of runtime:

```
{
    "class": "warlock",
    "cantrips": ["cantrip name 1", ...],
    "level": {
        "level1": ["level1 spell name 1", ...],
        ...
        "level9": ["level9 spell name 1", ...]
    }
}
```

## Current stack
The purpose of this repo is to showcase the use of most components in our choice of a tech-stack at the backend of this project, currently this repo shows in action the following techs:
* Node.js
* TypeScript
* Puppeteer

## Formatting and more
With the intention of learning about quality improvement of our code, and improve the experience of anyone watching the project, the following add-ons may be included in the project:
* Linting (ESLint)
* Formatting (Prettier)
