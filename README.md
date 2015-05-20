angular-scroll-complete is a directive for [AngularJS](http://angularjs.org/) to evaluate an expression when the bottom of the directive's element approaches the bottom of the scroll bar on percent completion, which can be used to implement infinite scrolling.

Demos
-----

Check out the running demos http://tushariscoolster.github.io/moving-man/.



angular-scroll-complete Scroll


Getting Started
---------------

* Download angular-scroll-complete from https://github.com/tushariscoolster/angular-scroll-complete or install it with:
* [Bower](http://bower.io/) via `bower install angular-scroll-complete`
* Include the script tag on your page after the AngularJS

<script type='text/javascript' src='path/to/angular.min.js'></script>
<script type='text/javascript' src='path/to/angular-scroll-complete.min.js'></script>

* Ensure that your application module specifies `angular-scroll-complete` as a dependency:

angular.module('myApplication', ['angular-scroll-complete']);

* Use the directive by specifying an `when-scrolled` attribute on an element.


```<div id="fixed" when-scrolled="loadMore()" percent="70">```

When scroll complete brodcast event to notify directive scroll is completed
`$scope.$broadcast('scrollCompleted')`
