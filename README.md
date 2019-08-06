# MyReads Project

This is final assessment project for Udacity's React Fundamentals course.in this app you can shelf your books as currentlyReading or readed or wantToRead   

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available         search terms to use in this app.
├── package.json # npm package manager file. 
├── public
│   └── index.html #
└── src
    ├── Component # this is folder of all components of this app
    │   ├── myReadsComponents
    |   |   ├── MyReads.js #this component that render shelves                  component and openSearch component
    |   |   ├── shelves.js # this component render all shelves that             you will choose as read or currentReading or wantToRead 
    |   |   └── openseach.js #this component to view search Page 
    │   ├── SearchComponent
    |   |   ├── searchPageComponent.js #this component that render              booksfounded component and query search
    |   |   ├── booksFounded.js #render all books that you will                 search from query search
    |   |   └── querySearch.js # component to search for a specific             book.
    |   |    
    |   ├── App.css # Styles for your app. 
    |   └── App.js # This is the root of this app. Contains static                         HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```




## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work , so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

