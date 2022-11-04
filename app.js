const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", () => {
 createNotification();
});
  
function createNotification(){  
  const notification = document.createElement("div");
  notification.classList.add("toast");
  
  notification.innerText = "New Notification";
  
  container.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2800);
}
