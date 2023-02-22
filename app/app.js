import { blog } from "../app/views/blog.js";

const paragraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id, cumque aperiam tempora necessitatibus facilis earum explicabo minima commodi ut dicta molestiae quis neque eveniet odit, odio blanditiis impedit enim!</p>`;

function setTitle(pageName) {
  return `<h1>${pageName}</h1>`;
}

/*
<div class="images">
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
</div>;

*/

function initListeners() {
  $("nav a").click(function (e) {
    e.preventDefault();
    let aID = e.currentTarget.id;

    $("#app").html(setTitle(aID));
    $("#app").append(blog);
  });
}
$(document).ready(function () {
  initListeners();
  $("#app").html(setTitle("home"));
});
