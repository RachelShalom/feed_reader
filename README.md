# Project Overview

This is a web-based application that reads RSS feeds that uses testing with [Jasmine](http://jasmine.github.io/) 


## The different performed tests:


1. A test to make sure that the allFeeds variable has been defined and that it is not empty by checking the length  of allfeeds variable
2. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty by checking feed.url is defined and not equal to empty string.
3. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty by checking feed.name is defined and not equal to empty string.
4. A  new test suite named: `"The menu"`with:
5. A test that ensures the menu element is hidden by default bt checking if the body element has the class 'menu-hidden'.
6. A test that ensures the menu changes visibility when the menu icon is clicked.  it checks if the menu display when clicked by checking if the body element does not have the menu- hidden class after clicking and the bodu does have the menu-hidden class when clicking again. 
7. A test suite named `"Initial Entries"` with:
8. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container by checking the $(feed a) length after calling the liadfeed function.
9. A test suite named `"New Feed Selection"`.
10. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes by comparing the feed element when loadFeed(0) is called with feed element when  loadfeed(1) is called
### Dependencies:
Jquery, Jasmin, google feed