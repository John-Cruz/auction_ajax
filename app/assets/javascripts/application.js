// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

// window.setInterval('ajaxCall()', 5000);

function ajaxCall() {
  response = $.ajax({
    url: "http://localhost:3000/items/2",
  });

  var box = $("div.row.collapse",response.responseText)[0];

  var highestBid = $("div div input#nothing", box[0]);


  $("div div input#nothing")[0].html(highestBid);
}



$(function() {
  $(document).foundation();
});
