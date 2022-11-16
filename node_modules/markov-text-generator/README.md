# markov-text-generator
A Markov chain based text generator.
See this [Medium article](https://medium.com/@emmabocuma/using-markov-to-tweet-like-trump-part-1-the-set-up-43d567826bef) about Markov chains and building the library.

[![Build Status](https://travis-ci.org/emmaBocuma/markov-text-generator.svg?branch=master)](https://travis-ci.org/emmaBocuma/markov-text-generator)

## Installation

    npm install markov-text-generator

## Example

The following script will log out three paragraphs of Markov generated text using Grimms' Fairy Tales as the training text. Three text files of Grimm training text are available - the 'quality' of text output, and length of time to build, both differ depending on size of training text used.

    npm run example

## Implementation Example

    
    import MarkovTextGenerator from "markov-text-generator";

    const options = {
      startAsSentence: true,
      endAsSentence: false,
      filterFunction: word => word.indexOf("http") === -1
    };
    const markov = new MarkovTextGenerator(2, options);
    markov.setTrainingText("a long text string goes here");
    markov.generateText(50);

## Documentation

Methods must be called in following order:

    constructor()
    setTrainingText()
    generateText()

The following methods take parameters:

    constructor(order, options)

`order`  A positive integer representing the order of the Markov chain. A recommended number is between 2 and 4 inclusive, depending on how much training text is being used, and results required. Higher numbers, particularly with shorter source text, can result in sections of source text reproduced in the generated text.

`options` An object of three optional settings: `startAsSentence`, which will force the generated text to start with a word initialised with a capital letter; `endAsSentence`, which will force the generated text to end with punctuation; `filterFunction`, a function used to filter and remove words from the training text - it should act like a standard Javascript filter function - see example above.

    setTrainingText(text)

`text` A string used as source text. The larger the text source, the better generated results you'll likely to achieve (in terms of being random but staying coherent), but also the longer the setTrainingText method will take longer to process the text.

    generateText(num)

`num` An integer representing number of words to be generated. If `endAsSentence` is set to true, the generated text may extend this amount in an attempt to find a word that ends with punctuation.

## Testing

A method to set a seed for testing purposes is available.

    setSeed(string)

`string` A string used to seed the random generation, resulting in same text generation results each time


## Acknowledgments

Inspired to create this Javascript library after working with Markov chain text generation in [Coursera's Java Programming and Software Engineering Fundamentals course](https://www.coursera.org/specializations/java-programming)
