var list = document.getElementById("list");
var addButton = document.getElementById("add-comment");
var removeButton = document.getElementById("remove-comments");

addButton.onclick = function () {
  var li = document.createElement("li");
  var commentArea = document.getElementById("comment");
  li.innerText = commentArea.value;
  list.appendChild(li);
  commentArea.value = "";
};

removeButton.onclick = function () {
  if (window.confirm("Are you sure you want to clear all comments?"))
    list.innerHTML = "";
  else window.close();
};
