
var imgUrls = 
    {
  "PARROT": "images/img1.jpg",
  "MOOSE": "images/img2.jpg",
  "HORSE": "images/img3.jpg",
  "RACCOON": "images/img4.jpg",
  "RABBIT": "images/img5.jpg",
  "YAK": "images/img6.jpg",
  "WOLF": "images/img7.jpg",
  "CAT": "images/img8.jpg",
  "EAGLE": "images/img9.jpg",
  "FOX": "images/img10.jpg",
  "RAT": "images/img11.jpg",
  "TIGER": "images/img12.jpg"
}

function loadGraphics()
{
    for(var key in imgUrls)
    {
      var modal = document.getElementById('modal');
      var modalImg = document.getElementById('modalImg');
      var caption = document.getElementById('caption');
      var imgContainer = document.createElement('div');
      var imgDesc = document.createElement('div');
      var img = document.createElement('img'); 
      imgContainer.setAttribute("id", "imageContainer"+key);
      imgContainer.className = "itemContainer";
      imgDesc.className = "overlay";
      img.src = imgUrls[key];
      img.className = "item";
      img.alt = key;
      img.onclick = function()
      {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
      }
      var span = document.getElementById('close'); 
      span.onclick = function()
      {
        modal.style.display = "none";
      }

      imgDesc.innerHTML = key;
      document.getElementById('container').appendChild(imgContainer);
      document.getElementById('imageContainer'+key).appendChild(img);
      document.getElementById('imageContainer'+key).appendChild(imgDesc);

    }
}

function hoverEffect()
{
  $(".item").wrap('<div class="alt-wrap"/>');
  $(".item").each(function() {
  $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })
}

window.onload = function()
{
    loadGraphics();
};
