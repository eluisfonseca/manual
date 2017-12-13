/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

console.log('ola');

var waypointLanding = new Waypoint({
  element: document.getElementById('gent'),
  handler: function(direction) {
    console.log('You have scrolled')
    document.getElementById('first-menu-mobile').className = document.getElementById('first-menu-mobile').className.replace(/fixed/g,'');
    document.getElementById('gent-button').className = document.getElementById('gent-button').className.replace(/active/g,'');
  },
  offset: '25%'
})

var waypointGent = new Waypoint({
  element: document.getElementById('gent'),
  handler: function(direction) {
    if (document.getElementById('gent-button').className.indexOf(' active') == -1) {
      document.getElementById('gent-button').className = " active";
    }
    if (document.getElementById('first-menu-mobile').className.indexOf(' fixed') == -1) {
      document.getElementById('first-menu-mobile').className += " fixed";
    }
    console.log('You have scrolled to a thing')
  },
  offset: 'bottom-in-view'
})