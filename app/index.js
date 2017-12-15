/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import { log } from 'util';
import 'rules.js'
import 'noframework.waypoints.min.js'

const rule1 = 'Preparação do Jogo';
const rule2 = 'Área de Trabalho';
const rule3 = 'As Rondas';
const rule4 = 'Contagem dos Pontos';
const rule5 = 'Entre Rondas';
const rule6 = 'Vitória!'

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
    document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/ fixed/g,'');
    clearMenu();
  },
  offset: '25%'
})

var waypointGentUpwards = new Waypoint({
  element: document.getElementById('gent-content'),
  handler: function(direction) {
    if(direction === 'up') {
      // console.log('You have scrolled to gent coming up')
      document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/ fixed/g,'');
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

var waypointGentMenuBeneath = new Waypoint({
  element: document.getElementById('baralho'),
  handler: function(direction) {
    if(direction === 'up') {
      clearMenu();
      document.getElementById('gent-button').className += " active";
    }
    // console.log('You have scrolled to gent section from beneath');
  },
  offset: '60%'
});

var waypointBaralho = new Waypoint({
  element: document.getElementById('baralho'),
  handler: function(direction) {
    if (direction === 'down') {
      clearMenu();
      document.getElementById('baralho-button').className += " active";
      if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
        document.getElementById('first-menu-mobile').className += " fixed";
      }
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

var waypointDesignersCard = new Waypoint({
  element: document.getElementById('designers-card'),
  handler: function(direction) {
    // console.log('You have scrolled to cartas content comming ' + direction);
    document.getElementById("card-type-title").innerText = 'designers';
    if (direction === 'down') {
      // document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
      if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('card-menu').className += " fixed";
      }
    } else {
      document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
    }
  },
  offset: 200
});

var waypointDesignersCardUp = new Waypoint({
  element: document.getElementById('managers-card'),
  handler: function(direction) {
    // console.log('You have scrolled to designer from beneath. Direction: ' + direction);
    if (direction === 'up') {
      document.getElementById("card-type-title").innerText = 'designers';
    }
  },
  offset: '80%'
});

var waypointManagersCard = new Waypoint({
  element: document.getElementById('managers-card'),
  handler: function(direction) {
    // console.log('You have scrolled to managers cartas comming ' + direction);
    document.getElementById("card-type-title").innerText = 'managers';
    if (direction === 'down') {
      // document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
      if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('card-menu').className += " fixed";
      }
    }
  },
  offset: 200
});

var waypointManagersCardUp = new Waypoint({
  element: document.getElementById('developers-card'),
  handler: function(direction) {
    // console.log('You have scrolled to managers from beneath. Direction: ' + direction);
    if (direction === 'up') {
      document.getElementById("card-type-title").innerText = 'managers';
    }
  },
  offset: '80%'
})

var waypointDevelopersCard = new Waypoint({
  element: document.getElementById('developers-card'),
  handler: function(direction) {
    document.getElementById("card-type-title").innerText = 'developers';
    // console.log('You have scrolled to developers cartas comming ' + direction);
    if (direction === 'down') {
      // document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
      if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('card-menu').className += " fixed";
      }
    }
  },
  offset: 200
})

var waypointDevelopersCardUp = new Waypoint({
  element: document.getElementById('condicionantes-card'),
  handler: function(direction) {
    // console.log('You have scrolled to developers from beneath. Direction: ' + direction);
    if (direction === 'up') {
      document.getElementById("card-type-title").innerText = 'developers';
    }
  },
  offset: '80%'
})

var waypointCondicionantesCard = new Waypoint({
  element: document.getElementById('condicionantes-card'),
  handler: function(direction) {
    // console.log('You have scrolled to condicionantes cartas comming ' + direction);
    if (direction === 'down') {
      // document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
      document.getElementById("card-type-title").innerText = 'condicionantes';
      if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('card-menu').className += " fixed";
      }
    }
  },
  offset: 200
});

var waypointCondicionantesCardUp = new Waypoint({
  element: document.getElementById('condicionantes-card'),
  handler: function(direction) {
    // console.log('You have scrolled to condicionantes from beneath. Direction: ' + direction);
    if (direction === 'up') {
      document.getElementById("card-type-title").innerText = 'condicionantes';
      if (document.getElementById('card-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('card-menu').className += " fixed";
      }
    }
  },
})

var waypointCondicionantesCardMenuBeneath = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    if (direction === 'up') {
      clearMenu();
      document.getElementById('baralho-button').className += " active";
    }
    // console.log('You have scrolled to condicionantes on the baralho section');
  },
  offset: '50%'
});

var waypointAccao = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    clearMenu();
    document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
    document.getElementById('accao-button').className += " active";
    if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
      document.getElementById('first-menu-mobile').className += " fixed";
    }
    // console.log('You have scrolled to accao');
  },
  offset: 80
});

var waypointAccaoUpwards = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    // console.log('You have scrolled to accao coming up');
    if(direction === 'up') {
      clearMenu();
      document.getElementById('accao-button').className += " active";
      if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
        document.getElementById('first-menu-mobile').className += " fixed";
      }
    }
  },
  offset: '-50%'
});


// MENU BUTTON SCROLL
// var scroll = new Scroll(document.body);

// document.getElementById('gent-button').onclick = function () {
//   clearMenu();
//   var myElement = document.getElementById('gent');
//   scroll.toElement(myElement).then(function () {
//     // done scrolling to the element
//   });
// };

// document.getElementById('baralho-button').onclick = function () {
//   clearMenu();
//   var myElement = document.getElementById('baralho');
//   scroll.toElement(myElement).then(function () {
//     // done scrolling to the element
//   });
// };

// document.getElementById('accao-button').onclick = function () {
//   clearMenu();
//   var myElement = document.getElementById('accao');
//   scroll.toElement(myElement).then(function () {
//     // done scrolling to the element
//   });
// };

// CARD MENU ACTIONS
function parseCardsDropdownMenu(clear = false) {
  if (clear) {
    document.getElementById('card-menu').className = document.getElementById('card-menu').className.replace(/ fixed/g,'');
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
  // console.log(subjectRectFrom.top + document.documentElement.scrollTop, subjectRectTo.top + document.documentElement.scrollTop);
  parseCardsDropdownMenu();
  // scroll.to(subjectRectFrom.top + document.documentElement.scrollTop, subjectRectTo.top + document.documentElement.scrollTop - 210).then(function () {
  //   // done scrolling to the element
  //   document.getElementById("card-toggle").checked = false;
  //   document.getElementById("card-type-title").innerText = type;
    // console.log('fui para' + type);
  // });
}

// document.getElementById("designer-button").addEventListener("click", function( event ) {
//   cardMenuPress('designers');
// }, false);

// document.getElementById("manager-button").addEventListener("click", function( event ) {
//   cardMenuPress('managers');
// }, false);

// document.getElementById("developer-button").addEventListener("click", function( event ) {
//   cardMenuPress('developers');
// }, false);

// document.getElementById("condicionantes-button").addEventListener("click", function( event ) {
//   cardMenuPress('condicionantes');
// }, false);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".mobile-menu-item").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(".dropdown-option").on('click', function(event) {
    // console.log('asda');
    // Make sure this.hash has a value before overriding default behavior
    event.preventDefault();
    var label;
    var target
    var offset = -200;
    switch (this.id) {
      case 'developer-button':
        label = 'developers'
        target = '#'+label+'-card';
        document.getElementById("card-toggle").checked = false;
        document.getElementById("card-type-title").innerText = label;
        break;
      case 'manager-button':
        label = 'managers'
        target = '#'+label+'-card';
        document.getElementById("card-toggle").checked = false;
        document.getElementById("card-type-title").innerText = label;
        break;
      case 'condicionantes-button':
        label = 'condicionantes';
        target = '#'+label+'-card';
        document.getElementById("card-toggle").checked = false;
        document.getElementById("card-type-title").innerText = label;
        break;
      case 'designer-button':
        label = 'designers';
        target = '#'+label+'-card';
        document.getElementById("card-toggle").checked = false;
        document.getElementById("card-type-title").innerText = label;
        break;
      case 'rule-1-button':
        label = 'rule-1';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule1;
        document.getElementById("rules-type-title-number").innerText = '01';
        break;
      case 'rule-2-button':
        label = 'rule-2';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule2;
        document.getElementById("rules-type-title-number").innerText = '02';
        break;
      case 'rule-3-button':
        label = 'rule-3';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule3;
        document.getElementById("rules-type-title-number").innerText = '03';
        break;
      case 'rule-4-button':
        label = 'rule-4';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule4;
        document.getElementById("rules-type-title-number").innerText = '04';
        break;
      case 'rule-5-button':
        label = 'rule-5';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule5;
        document.getElementById("rules-type-title-number").innerText = '05';
        break;
      case 'rule-6-button':
        label = 'rule-6';
        target = '#'+label;
        offset = -160;
        document.getElementById("rules-toggle").checked = false;
        document.getElementById("rules-type-title-text").innerText = rule6;
        document.getElementById("rules-type-title-number").innerText = '06';
        break;
    }
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(target).offset().top + offset
    }, 800, function(){});
  });

  const timer = 300;

  $('.menu-cartas a').on('click', function() {
    if (!$(this).hasClass('active')) {
      let $self = $(this);

      $('.menu-cartas a.active').removeClass('active');
      $self.addClass('active');

      $('.card-container.active').addClass('fade-out');
      window.setTimeout(() => {
        $('.card-container.active').removeClass('active fade-out');
        $('#' + $self.data('id')).addClass('prepare-to-fade-in fade-in');
        window.setTimeout(() => {
          $('#' + $self.data('id')).addClass('active').removeClass('fade-in prepare-to-fade-in');
        }, timer);
      }, timer);
    }
  });

  $('.rules-desktop-menu a').on('click', function() {
    if (!$(this).hasClass('active')) {
      let $self = $(this);

      $('.menu-cartas a.active').removeClass('active');
      $self.addClass('active');
    }
  });
});
