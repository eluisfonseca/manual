/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import { log } from 'util';

function clearMenu() {
  var items = document.getElementsByClassName("mobile-menu-item");
  
  for (let i=0; i<items.length; i++) {
    items[i].className = items[i].className.replace(/active/g,'');
  }
}

// MENU WAYPOINTS

var waypointLanding = new Waypoint({
  element: document.getElementById('gent'),
  handler: function(direction) {
    // console.log('You have scrolled to gent')
    document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/fixed/g,'');
    clearMenu();
  },
  offset: '25%'
})

var waypointGentUpwards = new Waypoint({
  element: document.getElementById('gent-content'),
  handler: function(direction) {
    if(direction === 'up') {
      // console.log('You have scrolled to gent coming up')
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
    // console.log('You have scrolled to a gent-banner');
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
    // console.log('You have scrolled to baralho');
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
      // console.log('You have scrolled to baralho comming up');
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
    // console.log('You have scrolled to accao');
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
      // console.log('You have scrolled to accao coming up');
    }
  },
  offset: 'bottom-in-view'
});


// MENU BUTTON SCROLL
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

// CARD MENU ACTIONS
function parseDropdownMenu(clear = false) {
  if (clear) {
    document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/fixed/g,'');
  } else {
    if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
      document.getElementById('card-menu').className += " fixed";
    }
  }
}

function cardMenuPress(type) {
  var container = document.getElementById('cartas');
  var myElement = document.getElementById(type+'-card');
  var subjectRectFrom = container.getBoundingClientRect();
  var subjectRectTo = myElement.getBoundingClientRect();
  console.log(subjectRectFrom.top + document.documentElement.scrollTop, subjectRectTo.top + document.documentElement.scrollTop);
  parseDropdownMenu();
  scroll.to(subjectRectFrom.top + document.documentElement.scrollTop, subjectRectTo.top + document.documentElement.scrollTop - 210).then(function () {
    // done scrolling to the element
    document.getElementById("card-toggle").checked = false;
    document.getElementById("card-type-title").innerText = type;
    console.log('fui para' + type);
  });
}

document.getElementById("designer-button").addEventListener("click", function( event ) {
  cardMenuPress('designers');
}, false);

document.getElementById("manager-button").addEventListener("click", function( event ) {
  cardMenuPress('managers');
}, false);

document.getElementById("developer-button").addEventListener("click", function( event ) {
  cardMenuPress('developers');
}, false);

document.getElementById("condicionantes-button").addEventListener("click", function( event ) {
  cardMenuPress('condicionantes');
}, false);

// Helper function to get an element's exact position
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
  console.log(el);
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
   
  // deal with the page getting resized or scrolled
  window.addEventListener("scroll", updatePosition, false);
  window.addEventListener("resize", updatePosition, false);
   
  function updatePosition() {
    // add your code to update the position when your browser
    // is resized or scrolled
  }

  function getOffsetLeft( elem )
  {
      var offsetLeft = 0;
      do {
        if ( !isNaN( elem.offsetLeft ) )
        {
            offsetLeft += elem.offsetLeft;
        }
      } while( elem = elem.offsetParent );
      return offsetLeft;
  }