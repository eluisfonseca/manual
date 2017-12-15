// console.log('rules');

// var scrollRules = new Scroll(document.body);
const rule1 = 'Preparação do Jogo';
const rule2 = 'Área de Trabalho';
const rule3 = 'As Rondas';
const rule4 = 'Contagem dos Pontos';
const rule5 = 'Entre Rondas';
const rule6 = 'Vitória!'

function stickRulesDropdownMenu() {
  if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
    document.getElementById('rules-menu').className += " fixed";
  }
}

// function rulesMenuPress(number, text) {
//   var container = document.getElementById('accao');
//   var targetElement = document.getElementById('rule-' + number);
//   var subjectRectFrom = container.getBoundingClientRect();
//   var subjectRectTo = targetElement.getBoundingClientRect();
//   scrollRules.to(subjectRectFrom.top + document.documentElement.scrollTop, subjectRectTo.top + document.documentElement.scrollTop - 160).then(function () {
//     // done scrolling to the element
//     document.getElementById("rules-toggle").checked = false;
//     document.getElementById("rules-type-title-text").innerText = text;
//     document.getElementById("rules-type-title-number").innerText = '0'+number;
    // console.log('fui para rule-' + number);
//   });
// }

// document.getElementById("rule-1-button").addEventListener("click", function( event ) {
//   rulesMenuPress(1, rule1);
// }, false);

// document.getElementById("rule-2-button").addEventListener("click", function( event ) {
//   rulesMenuPress(2, rule2);
// }, false);

// document.getElementById("rule-3-button").addEventListener("click", function( event ) {
//   rulesMenuPress(3, rule3);
// }, false);

// document.getElementById("rule-4-button").addEventListener("click", function( event ) {
//   rulesMenuPress(4, rule4);
// }, false);

// document.getElementById("rule-5-button").addEventListener("click", function( event ) {
//   rulesMenuPress(5, rule5);
// }, false);

// document.getElementById("rule-6-button").addEventListener("click", function( event ) {
//   rulesMenuPress(6, rule6);
// }, false);

// WAYPOINTS
var unfixRulesMenu = new Waypoint({
  element: document.getElementById('accao'),
  handler: function(direction) {
    if (direction === 'up') {
      document.getElementById('rules-menu').className = document.getElementById('rules-menu').className.replace(/ fixed/g,'');
    } else {
      document.getElementById('rules-menu').className += ' fixed';
      document.getElementById("rules-type-title-text").innerText = rule1;
      document.getElementById("rules-type-title-number").innerText = '01';
    }
    // console.log('reached accao from ' + direction);
  },
  offset: 80
});

var arriveAtRule1 = new Waypoint({
  element: document.getElementById('rule-1'),
  handler: function(direction) {
    if (direction === 'up') {
      document.getElementById('rules-menu').className = document.getElementById('rules-menu').className.replace(/ fixed/g,'');
    } else {
      document.getElementById('rules-menu').className += ' fixed';
      document.getElementById("rules-type-title-text").innerText = rule1;
      document.getElementById("rules-type-title-number").innerText = '01';
    }
    // console.log('reached accao from ' + direction);
  },
  offset: -280
});

var arriveAtRule1Beneath = new Waypoint({
  element: document.getElementById('rule-2'),
  handler: function(direction) {
    // console.log('You have scrolled to rule-1 coming ' + direction);
    if (direction === 'up') {
      document.getElementById("rules-type-title-text").innerText = rule1;
      document.getElementById("rules-type-title-number").innerText = '01';
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: '70%'
});

var arriveAtRule2 = new Waypoint({
  element: document.getElementById('rule-2'),
  handler: function(direction) {
    // console.log('Rule 2 ' + direction);
    document.getElementById("rules-type-title-text").innerText = rule2;
    document.getElementById("rules-type-title-number").innerText = '02';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 160
});

var arriveAtRule2Beneath = new Waypoint({
  element: document.getElementById('rule-3'),
  handler: function(direction) {
    // console.log('Rule 2 beneath ' + direction);
    if (direction === 'up') {
      document.getElementById("rules-type-title-text").innerText = rule2;
      document.getElementById("rules-type-title-number").innerText = '02';
    }
  },
  offset: '70%'
});

var arriveAtRule3 = new Waypoint({
  element: document.getElementById('rule-3'),
  handler: function(direction) {
    // console.log('Rule 3 ' + direction);
    document.getElementById("rules-type-title-text").innerText = rule3;
    document.getElementById("rules-type-title-number").innerText = '03';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 160
});

var arriveAtRule3Beneath = new Waypoint({
  element: document.getElementById('rule-4'),
  handler: function(direction) {
    // console.log('Rule 3 beneath ' + direction);
    if (direction === 'up') {
      document.getElementById("rules-type-title-text").innerText = rule3;
      document.getElementById("rules-type-title-number").innerText = '03';
    }
  },
  offset: '70%'
});

var arriveAtRule4 = new Waypoint({
  element: document.getElementById('rule-4'),
  handler: function(direction) {
    // console.log('Rule 4 ' + direction);
    document.getElementById("rules-type-title-text").innerText = rule4;
    document.getElementById("rules-type-title-number").innerText = '04';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 160
});

var arriveAtRule4Beneath = new Waypoint({
  element: document.getElementById('rule-5'),
  handler: function(direction) {
    // console.log('Rule 4 beneath ' + direction);
    if (direction === 'up') {
      document.getElementById("rules-type-title-text").innerText = rule4;
      document.getElementById("rules-type-title-number").innerText = '04';
    }
  },
  offset: '70%'
});

var arriveAtRule5 = new Waypoint({
  element: document.getElementById('rule-5'),
  handler: function(direction) {
    // console.log('Rule 5 ' + direction);
    document.getElementById("rules-type-title-text").innerText = rule5;
    document.getElementById("rules-type-title-number").innerText = '05';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 160
});

var arriveAtRule5Beneath = new Waypoint({
  element: document.getElementById('rule-6'),
  handler: function(direction) {
    // console.log('Rule 5 beneath ' + direction);
    if (direction === 'up') {
      document.getElementById("rules-type-title-text").innerText = rule5;
      document.getElementById("rules-type-title-number").innerText = '05';
    }
  },
  offset: '70%'
});

var arriveAtRule6 = new Waypoint({
  element: document.getElementById('rule-6'),
  handler: function(direction) {
    // console.log('Rule 6 ' + direction);
    document.getElementById("rules-type-title-text").innerText = rule6;
    document.getElementById("rules-type-title-number").innerText = '06';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 160
});

var arriveAtRule6 = new Waypoint({
  element: document.getElementById('rule-6'),
  handler: function(direction) {
    document.getElementById("rules-type-title-text").innerText = rule6;
    document.getElementById("rules-type-title-number").innerText = '06';
    if (direction === 'down') {
      if (document.getElementById('rules-menu').className.indexOf(' fixed') == -1) {
        document.getElementById('rules-menu').className += " fixed";
      }
    }
  },
  offset: 'bottom-in-view'
});

$(document).ready(function() {
  document.getElementById('rules-menu').className = document.getElementById('rules-menu').className.replace(/ fixed/g,'');
  document.getElementById("rules-type-title-text").innerText = rule1;
  document.getElementById("rules-type-title-number").innerText = '01';
});
