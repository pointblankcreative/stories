$(document).ready(function(){
  // Load More
  $(".content").slice(0, 3).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 3).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("Share stories").addClass("noContent");
    }
  });
  
})

// Modal Script
const modal = document.getElementById('modalContainer');
const btn = document.getElementById('storyBtn')
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Expand Text
function expand() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    moreText.style.display = 'none'
  } else {
    dots.style.display = 'none';
    moreText.style.display = 'inline';
  }
}


