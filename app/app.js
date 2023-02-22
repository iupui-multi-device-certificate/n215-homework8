import { home } from "../app/views/home.js";
import { blog } from "../app/views/blog.js";

const paragraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id, cumque aperiam tempora necessitatibus facilis earum explicabo minima commodi ut dicta molestiae quis neque eveniet odit, odio blanditiis impedit enim!</p>`;

// nice to use variable, but not ready for a templating system
// function setTitle(pageName) {
//   return `<h1>${pageName}</h1>`;
// }

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

    //TODO: fix. if click on nav a not there, it moves it to main
    let pageContent = eval(aID);
    // $("#app").html(setTitle(aID));
    // $("#app").html(blog);
    $("#app").html(pageContent);
  });
}
$(document).ready(function () {
  initListeners();
  // $("#app").html(setTitle("home"));
});
