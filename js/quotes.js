"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    

    var URL = "https://ivu7tuzx4f.execute-api.us-west-1.amazonaws.com/dev/todos";

    // Create an empty Headers instance
    var headers = new Headers();


    var request = new Request(URL, {
      method: 'GET', 
      mode: 'no-cors', 
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });

    fetch(request).then(function(response) { 
      // Convert to JSON
      console.log(response);
      return response;
    }).then(function(j) {
      // Yay, `j` is a JavaScript object
      console.log(j); 
    });

    // quotes are stored in an array of objects



    var quotes = [{
        "attrib": "Steve Jobs",
        "quote": "Design is not just what it looks like and feels like. Design is how it works."
      
    },{
        "attrib": "Bob Jobs",
        "quote": "Hello World."
      
    }];

    // function to load and display a new quote
    function newQuote() {
      var quoteID = Math.floor(Math.random() * quotes.length);
      $("#quote").html(quotes[quoteID].quote);
      $("#attrib").html(quotes[quoteID].attrib);
      $("#twitterButton").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[quoteID].quote + " -" + quotes[quoteID].attrib);
    }

    // wait for page load before displaying content
    $(document).ready(function () {
      // load an initial quote
      newQuote();

      // retrieve a new quote when the button is clicked
    $("#generateButton").on("click", function () {
        newQuote();
      });
    });


    // Generates a new quote every x seconds
    setInterval(function(){ 
      newQuote();
    }, 1000);

  }, {}] }, {}, [1]);
