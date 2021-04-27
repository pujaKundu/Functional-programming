//Learn About Functional Programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
//Understand Functional Programming Terminology
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
//Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

    // Only change code below this line

    var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//Avoid Mutations and Side Effects Using Functional Programming
// The global variable
var fixedValue = 4;

function incrementer() {
    // Only change code below this line
    let val = fixedValue
    val++
    return val
        // Only change code above this line
}
console.log(incrementer())
    //Pass Arguments to Avoid External Dependence in a Function
    // The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(val) {
    val = fixedValue + 1;
    return val;
    // Only change code above this line
}
console.log(incrementer())
    //Refactor Global Variables Out of Functions
    // The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newArr = arr.slice(0)
    newArr.push(bookName);
    return newArr;

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    let newArr = arr.slice(0)
    var book_index = newArr.indexOf(bookName);
    if (book_index >= 0) {

        newArr.splice(newArr.indexOf(bookName), 1);
        return newArr;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
//Use the map Method to Extract Data from an Array
// The global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

var ratings = [];
ratings = watchList.map(function(el) {
    return {
        title: el.Title,
        rating: el.imdbRating
    }
})

//ratings.push(watchList.map(el=>el.imdbRating))
// Only change code above this line

console.log(JSON.stringify(ratings));
//Implement map on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line
    s.forEach((e) => {
            newArray.push(callback(e))
        })
        // Only change code above this line
    return newArray;
};

var new_s = s.myMap(function(item) {
    return item * 2;
});
console.log(new_s)
    //Use the filter Method to Extract Data from an Array
    // The global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line
var filtered = watchList.filter(movie => movie.imdbRating >= 8.0)
var filteredList = filtered
    .map(function(el) {
        return {
            title: el.Title,
            rating: el.imdbRating
        }
    })

// Only change code above this line

console.log(filteredList);
//Implement the filter Method on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    var newArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 !== 0)
            newArray.push(s[i])
    }
    // Only change code above this line
    return newArray;
};

var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});
console.log(new_s)
    //Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line

    return anim.slice(beginSlice, endSlice)

    // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
//Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);

    // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach)

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));
//Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
//Use the reduce Method to Analyze Data
var averageRating =
    watchList
    .filter(elem => elem.Director === "Christopher Nolan")
    .reduce((total, elem, index, arr) => {
        return total + Number(elem.imdbRating) / arr.length;
    }, 0);
//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
    // Only change code below this line
    const squareList = arr
  
  .filter(num => num > 0 && num % parseInt(num) === 0)
  
  .map(num => Math.pow(num, 2));
  
  {
  
  return arr.reduce((sqrIntegers, num) => {
  
    return Number.isInteger(num) && num > 0
  
    ? sqrIntegers.concat(num * num)
  
    : sqrIntegers;
  
  }, []);
  };
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  //Sort an Array Alphabetically using the sort Method
  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort();
    // Only change code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  //Return a Sorted Array Without Changing the Original Array
  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  const newArr = arr.slice(0,globalArray.length);
  
  return newArr.sort((a,b)=>a-b);

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
//Split a String into an Array Using the split Method
function splitify(str) {
    // Only change code below this line
    
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var arr = str.replace(regex, ' ');
    const newArr = arr.split(' ')
    return newArr;
  
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));
  //Combine an Array into a String Using the join Method
  function sentensify(str) {
    // Only change code below this line
    return str.split(/\W/).join(' ')
  
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));
  //Apply Functional Programming to Convert Strings to URL Slugs
  // Only change code below this line
function urlSlug(title) {
    //The trim() method removes whitespace from both sides of a string.
    // Only change code below this line
    return title.trim().toLowerCase().split(/\s+/).join("-");
    }
    // Only change code above this line
    console.log(urlSlug(" Winter Is  Coming"))

//Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    // Only change code below this line
    return arr.every((currentValue)=>currentValue>0) 
   //The every() method checks if all elements in an array pass a test (provided as a function).
    // Only change code above this line
  }
  console.log(checkPositive([0, 2, 3, -4, 5]));

  //Use the some Method to Check that Any Elements in an Array Meet a Criteria
  function checkPositive(arr) {
    // Only change code below this line
    return arr.some(el=>el>0)
  //The some() method checks if any of the elements in an array pass a test (provided as a function)
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
//Introduction to Currying and Partial Application
function add(x) {
    // Only change code below this line
    return function(y) {
      return function(z){
        return x+y+z
      }
    
  }
  
    // Only change code above this line
  }
  console.log(add(10)(20)(30));

