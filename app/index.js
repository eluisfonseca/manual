/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import { log } from 'util';

var waypointLanding = new Waypoint({
  element: document.getElementById('gent'),
  handler: function(direction) {
    console.log('You have scrolled to gent')
    document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/fixed/g,'');
    clearMenu();
  },
  offset: '25%'
})

var waypointGentUpwards = new Waypoint({
  element: document.getElementById('gent-content'),
  handler: function(direction) {
    if(direction === 'up') {
      console.log('You have scrolled to gent coming up')
      document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/fixed/g,'');
      clearMenu();
    }
  },
  offset: '95%'
})

var waypointGent = new Waypoint({
  element: document.getElementById('gent-banner'),
  handler: function(direction) {
    clearMenu();
    document.getElementById('gent-button').className += " active";
    if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
      document.getElementById('first-menu-mobile').className += " fixed";
    }
    console.log('You have scrolled to a gent-banner');
  },
  offset: 'bottom-in-view'
})

var waypointBaralho = new Waypoint({
  element: document.getElementById('baralho'),
  handler: function(direction) {
    clearMenu();
    document.getElementById('baralho-button').className += " active";
    if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
      document.getElementById('first-menu-mobile').className += " fixed";
    }
    console.log('You have scrolled to baralho');
  },
  offset: '70%'
})

var waypointBaralhoUpwards = new Waypoint({
  element: document.getElementById('baralho'),
  handler: function(direction) {
    if(direction === 'up') {
      clearMenu();
      document.getElementById('baralho-button').className += " active";
      if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
        document.getElementById('first-menu-mobile').className += " fixed";
      }
      console.log('You have scrolled to baralho comming up');
    }
  },
  offset: 'bottom-in-view'
})

var waypointAccao = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    clearMenu();
    document.getElementById('accao-button').className += " active";
    if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
      document.getElementById('first-menu-mobile').className += " fixed";
    }
    console.log('You have scrolled to accao');
  },
  offset: '90%'
});

var waypointAccaoUpwards = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    if(direction === 'up') {
      clearMenu();
      document.getElementById('accao-button').className += " active";
      if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
        document.getElementById('first-menu-mobile').className += " fixed";
      }
      console.log('You have scrolled to accao coming up');
    }
  },
  offset: 'bottom-in-view'
});


var scroll = new Scroll(document.body);

document.getElementById('gent-button').onclick = function () {
  clearMenu();
  var myElement = document.getElementById('gent');
  scroll.toElement(myElement).then(function () {
    // done scrolling to the element
  });
};

document.getElementById('baralho-button').onclick = function () {
  clearMenu();
  var myElement = document.getElementById('baralho');
  scroll.toElement(myElement).then(function () {
    // done scrolling to the element
  });
};

document.getElementById('accao-button').onclick = function () {
  clearMenu();
  var myElement = document.getElementById('accao');
  scroll.toElement(myElement).then(function () {
    // done scrolling to the element
  });
};

function clearMenu() {
  var items = document.getElementsByClassName("mobile-menu-item");
  
  for (let i=0; i<items.length; i++) {
    console.log('asaa');
    items[i].className = items[i].className.replace(/active/g,'');
  }
}