var div = document.querySelector(".for_modal_content");
var popup = document.querySelector(".modal_content");
var storage = localStorage.getItem("[name=person]");
var storage_child = localStorage.getItem("[name=children]");

div.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal_content_show");     
if (storage) {
  person.value = storage;    
}
if (storage_child) {
  children.value = storage;    
}
});