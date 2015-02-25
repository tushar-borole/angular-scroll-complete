angular.module('scroll', []).directive('whenScrolled', function() {
return function(scope, elm, attr) {
var raw = elm[0];
elm.bind('scroll', function() {
var temp=raw.offsetHeight-raw.scrollHeight
var temp2=raw.scrollTop
var temp3=Math.abs((temp2/temp)*100)
if (temp3>attr.percent) {
scope.$apply(attr.whenScrolled);
}
});
};
});
