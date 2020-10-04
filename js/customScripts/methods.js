define(['jquery'], function($) {
   var methods = {};
   methods.changeHTML = function(args) {
       $('body').html('I was clicked');
   }
   methods.alert = function(args) {
   	   alert(args);
   }

   return methods;
});