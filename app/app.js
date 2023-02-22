const paragraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id, cumque aperiam tempora necessitatibus facilis earum explicabo minima commodi ut dicta molestiae quis neque eveniet odit, odio blanditiis impedit enim!</p>`;

let pageName;

// let title = `<h1>${eval(pageName)}</h1>`;
// let title = `<h1>HOME</h1>`;

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
    // console.log(entryTitle);
    // let title = aID.toUpperCase();

    // console.log(title);
    pageName = aID;
    console.log(pageName);
    let title = `<h1>${pageName}</h1>`;
    console.log(title);
    // $("#app").html(title);
  });
}
$(document).ready(function () {
  initListeners();
});
