/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// Load js libraries
import ScrollSnap from 'scroll-snap'

// ================================
// START YOUR APP HERE
// ================================
const snapConfig = {
  scrollSnapDestination: '90% 0%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
  scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
  scrollTime: 300 // *OPTIONAL* (default = 300) time in ms for the smooth snap
}
 
function callback () {
  console.log('called when snap animation ends')
}
 
const element = document.getElementById('content')
const snapObject = new ScrollSnap(element, snapConfig)
 
snapObject.bind(callback)

console.log('ola');