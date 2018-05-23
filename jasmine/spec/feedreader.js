/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty by checking allFeeds element is defined and has a length tht is not 0
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty by checking feed.url is defind and does not have an empty String
         */
        it("each feed in the allfeeds should be defined with a url and url is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');

            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty by checking feed.name is defind and does not have an empty String
         */
        it("each feed in the allfeeds should be defined with a name and name is not empty", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');

            });
        });

    });


    /* This ia a test suite named "The menu" */
    describe("the menu", function() {

        /* This is  a test that ensures the menu element is
         * hidden by default by checking if the body element had the menu-hidden class
         */
        it("the menu should be hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*This is a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         *  have two expectations: the menu display when
         * clicked- by checking that the body element does not have the class menu-hidden after user clicked
         *  and s it hide when clicked again.- by checking after an additional click on menu-icon if the body element has 
         * the menu-hidden class 
         */
        it("menu is visible when icon is clicked", function() {
            if ($('body').hasClass('menu-hidden')) {
                $('.menu-icon-link').click();
            }
            expect($('body').hasClass('menu-hidden')).toBe(false);

        })
        it("menu is not visible when icon is clicked again", function() {
            if (!$('body').hasClass('menu-hidden')) {
                $('.menu-icon-link').click();
            }
            expect($('body').hasClass('menu-hidden')).toBe(true);

        })
    });
    /* This is  test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* this is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container by checking if the $(.feed article.entry) length is greater than 1
         * 
         * 
         */
        beforeEach(function(done) {
            loadFeed(0, done);

        });

        it("there at least one entry element withnin the feed container", function(done) {
            expect($('.feed article.entry').length >= 1).toBeTruthy();
            done();
        })
    });
    /* This is a test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* It is a test that ensuresthat  when a new feed is loaded
         * by the loadFeed function that the content actually changes by laoding the feed twice
         * first with loadFeed(0) and save a the entries in allEntries_zero variable.
         * second with loadfeed(1) and save the entries in allEntries_one variable.
         * Then I compare between allEntries_one to allEntries_zero to see if they are different.
         */
        var allEntries_zero,
            allEntries_one
        beforeEach(function(done) {
            loadFeed(0, function() {
                allEntries_zero = $('.feed').html();
                loadFeed(1, function() {
                    allEntries_one = $('.feed').html();
                    done();
                });
            });
        });

        it('changed the content when a new feed is loaded', function(done) {
            expect(allEntries_zero === allEntries_one).toBe(false);

            done();
        })

    });
}());