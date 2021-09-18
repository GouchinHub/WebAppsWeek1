var list = document.getElementById("list");
var addButton = document.getElementById("add-comment");
var removeCommentsButton = document.getElementById("remove-comments");
var editingModeOn = false;

addButton.onclick = function () {
  var commentDiv = document.createElement("div");
  var commentArea = document.getElementById("commentArea");
  var rating = document.getElementById("rating");
  commentDiv.className = "comment";
  commentDiv.innerHTML =
    `
  <div id="comment-rating" class="comment-rating">Rating: ` +
    rating.value +
    `</div>
  <div id="comment-text" class="comment-text"/>Comment: ` +
    commentArea.value +
    `</div>
  <button id="remove" class="remove-comment" onclick="return this.parentNode.remove();">X</button
  `;
  list.appendChild(commentDiv);
  commentArea.value = "";
};

removeCommentsButton.onclick = function () {
  var removeBtn = document.getElementsByClassName("remove-comment");
  if (!editingModeOn) {
    editingModeOn = !editingModeOn;
    removeCommentsButton.innerText = "Stop editing";
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].style.display = "block";
    }
  } else {
    editingModeOn = !editingModeOn;
    removeCommentsButton.innerText = "Edit comments";
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].style.display = "none";
    }
  }
};
