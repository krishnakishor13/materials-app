var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var contentdjango = this.nextElementSibling;
    if (contentdjango.style.display === "block") {
      contentdjango.style.display = "none";
    } else {
      contentdjango.style.display = "block";
    }
  });
}
