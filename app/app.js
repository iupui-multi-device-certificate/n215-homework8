import { homeContent } from "../app/views/home.js";
import { blogContent } from "../app/views/blog.js";

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;

    let contentID = aID + "Content";

    $("#app").html(eval(contentID));
  });
}
$(document).ready(function () {
  initListeners();
  // $("#app").html(homeContent);
});
