// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {

  var body = $("body");

  body.attr('style', 'text-align: center');

  var formHtml = "";

  formHtml += "<h1>Todoly</h1>";
  formHtml += "<form>";
  formHtml += "<input type='text' name='todo' id='todo' />";
  formHtml += "<br>";
  formHtml += "<input type='submit' value='Create Todo' id='addtodo'/>";
  formHtml += "</form>";

  var todosHtml = "";

  todosHtml += "<h2>Todo!</h2>";
  todosHtml += "<div id='flashmsgs'></div>"
  todosHtml += "<ul>";
  todosHtml += "<li></li>";
  todosHtml += "</ul>";

  body.append(formHtml + todosHtml);

  $("#addtodo").on("click", function (e) {
    e.preventDefault();
    var flashmsg = "<div id='flashmsg'>Todo Created <span class='closeflashmsg'>x</span></div>";
    var todo = $("#todo").val();
    $("#flashmsgs").append(flashmsg);
    body.append("<li>" + todo + "<span class='closetodos'>x</span></li>");
    $("#flashmsg").fadeOut(8000);
    setTimeout(function () {
      $("#flashmsg").remove();
    }, 8000);

    $(".closeflashmsg").on("click", function () {
      $(this).parent("#flashmsg").remove()
    });

    $(".closetodos").on("click", function () {
      $(this).parent("li").remove()
    });




  });

//  var body = $("body");

//  alert(body.length);

//  body.append("<a href='/hello' id='Miji'>Mi Ji</a>");

//  var linkClick = function(event) {
//    $(event.target).parents('li');
//    event.preventDefault();
//    alert("hello")
//  }
//
//  $("a").on("click", linkClick);

});

