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

$(document).ready(function () {

  var formHtml = "";

  formHtml += "<h1>Todoly</h1>";
  formHtml += "<form id='createToDo'>";
  formHtml += "<input type='text' name='todo' id='todo' autofocus='true' />";
  formHtml += "<br>";
  formHtml += "<input type='submit' value='Create Todo' id='addtodo'/>";
  formHtml += "</form>";

  var todosHtml = "";

  todosHtml += "<h2>Todo!</h2>";
  todosHtml += "<div id='flashmsgs'></div>";
  todosHtml += "<ul id='listOfToDo'>";
  todosHtml += "</ul>";

  var body = $("body");

  body.append(formHtml + todosHtml);

  var initialList = $.get("/todos");

  initialList.done(function (arrayOfToDos) {
    arrayOfToDos.forEach(function (singleToDo) {
      var toDoHtml = "<li id='todo-list'>" + singleToDo.todo + "<span class='deleteToDo'>x</span></li>";
      $("#listOfToDo").append(toDoHtml);
    })
  });

  $(document).on("click", ".deleteToDo", function () {

    var li = $(this).parent("li"),

      object = $.parseHTML(li.html());

    console.log(object[0].data);

    var destroy = $.ajax ({
      type: "DELETE",
      url: "/todos/" + object[0].data,
      data: { todo: object[0].data }
    });

    destroy.done( function () {
      li.remove()
    } )

});


$(document).ready(function () {

  $("#createToDo").on("submit", function () {
    var todo = $("#todo");
//    console.log(todo.val());
    var post = $.post("/todos", { todo: todo.val()});

    post.done(function (response) {

      var toDoHtml = "<li id='todo-list'>" + response.todo + "<span class='deleteToDo'>x</span></li>";
      $("#listOfToDo").append(toDoHtml);
      todo.val("")

    });

    post.fail(function (jqXHR) {
      console.log(jqXHR.responseJSON.errors);
      alert(jqXHR.responseJSON.errors[0])
    });

    return false;
  });

});



//  $(".deleteToDo").on('click', function () {
//   $(this).parent('li').remove();
//  });

//  $(".deleteToDo").on("click", function () {
//    alert("clicked");
//
//    var li = $(this).parent("li");
//
//    console.log(li);

//    var destroy = $.ajax({
//      url: "/todos/"
//    })

//  });
});
//    how to tackle delete/complete individual todo
//    turn this string into jquery object and use jquery .on (event)
//    data attribute data-id = response.id


//  $("#todo").on("keyup", function (event) {
//    console.log(event.target.value)
//  });
