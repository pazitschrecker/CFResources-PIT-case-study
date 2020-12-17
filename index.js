$(document).ready(function () {
  $("#navbar-phases").click(function () {
    $("#phases-dropdown").toggle();
  });
  $("#li.tab1").addClass("active");
  $("templates-prototype").addClass("active");

  $("uj1-tab").click(function () {
    $("#uj1").show();
  });
  $("uj2-tab").click(function () {
    $("#uj2").show();
  });
  $("uj3-tab").click(function () {
    $("#uj3").show();
  });
  $("uj4-tab").click(function () {
    $("#uj4").show();
  });
});
