const toggleSidebarButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("my-div").style.display = "block";
      document.getElementById("my-div").addEventListener("animationstart", function() {
        requestAnimationFrame(animate);
      });
    }, 1000);
  });
  
  function animate() {
    if (document.getElementById("my-div").style.top === "50%") {
      return;
    }
    document.getElementById("my-div").style.top = parseInt(document.getElementById("my-div").style.top) + 1 + "px";
    requestAnimationFrame(animate);
  }
  