window.onload = function () {
  let sliders = document.querySelectorAll(".slider");

  sliders.forEach(function (slider) {
    let fullWidth = slider.offsetWidth;
    let totalCount = fullWidth / 1710 - 1;

    let maxSlides = Math.floor(totalCount);
    let lastSlide = totalCount - maxSlides;

    let currentSlide = 0;

    slider.parentElement
      .querySelector(".swiper-left")
      .addEventListener("click", function () {
        if (currentSlide >= 1 && currentSlide != totalCount) {
          currentSlide--;
        } else if (currentSlide == totalCount && lastSlide !== 0) {
          currentSlide -= lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 1715) + "px";
        console.log(currentSlide, totalCount, lastSlide);
      });

    slider.parentElement
      .querySelector(".swiper-right")
      .addEventListener("click", function () {
        if (currentSlide < maxSlides) {
          currentSlide++;
        } else if (currentSlide == maxSlides && lastSlide !== 0) {
          currentSlide += lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 1715) + "px";

        console.log(currentSlide, totalCount, lastSlide);
      });
  });

  let sliders1 = document.querySelectorAll(".slider1");

  sliders1.forEach(function (slider) {
    let fullWidth = slider.offsetWidth;
    let totalCount = fullWidth / 496 - 1;

    let maxSlides = Math.floor(totalCount);
    let lastSlide = totalCount - maxSlides;

    let currentSlide = 0;

    slider.parentElement
      .querySelector(".swiper-left")
      .addEventListener("click", function () {

        console.log("Clicked!");
        if (currentSlide >= 1 && currentSlide != totalCount) {
          currentSlide--;
        } else if (currentSlide == totalCount && lastSlide !== 0) {
          currentSlide -= lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 495) + "px";
        console.log(currentSlide, totalCount, lastSlide);
      });

    slider.parentElement
      .querySelector(".swiper-right")
      .addEventListener("click", function () {
        if (currentSlide < maxSlides) {
          currentSlide++;
        } else if (currentSlide == maxSlides && lastSlide !== 0) {
          currentSlide += lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 495) + "px";

        console.log(currentSlide, totalCount, lastSlide);
      });
  });
};

  let sliders1 = document.querySelectorAll(".slider2");

  sliders1.forEach(function (slider) {
    let fullWidth = slider.offsetWidth;
    let totalCount = fullWidth / 496 - 1;

    let maxSlides = Math.floor(totalCount);
    let lastSlide = totalCount - maxSlides;

    let currentSlide = 0;

    slider.parentElement
      .querySelector(".swiper-left")
      .addEventListener("click", function () {

        console.log("Clicked!");
        if (currentSlide >= 1 && currentSlide != totalCount) {
          currentSlide--;
        } else if (currentSlide == totalCount && lastSlide !== 0) {
          currentSlide -= lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 495) + "px";
        console.log(currentSlide, totalCount, lastSlide);
      });

    slider.parentElement
      .querySelector(".swiper-right")
      .addEventListener("click", function () {
        if (currentSlide < maxSlides) {
          currentSlide++;
        } else if (currentSlide == maxSlides && lastSlide !== 0) {
          currentSlide += lastSlide;
        }

        slider.style.marginLeft = -(currentSlide * 495) + "px";

        console.log(currentSlide, totalCount, lastSlide);
      });
  });



// scroll

window.addEventListener("scroll", function () {
  var bannerMovieDetail = document.querySelector(".banner-movie-detail");
  var banner = document.querySelector(".banner");

  var bannerMovieDetailPosition = window.addEventListener(
    "scroll",
    function () {
      var bannerMovieDetail = document.querySelector(".banner-movie-detail");
      var banner = document.querySelector(".banner");

      var bannerMovieDetailPosition =
        bannerMovieDetail.getBoundingClientRect().top;

      if (bannerMovieDetailPosition <= 0) {
        banner.classList.add("banner-scrolled");
      } else {
        banner.classList.remove("banner-scrolled");
      }
    }
  );
  bannerMovieDetail.getBoundingClientRect().top;

  if (bannerMovieDetailPosition <= 0) {
    banner.classList.add("banner-scrolled");
  } else {
    banner.classList.remove("banner-scrolled");
  }
});


const videoCards = [...document.querySelectorAll(".brand")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});


//   document.getElementsByClassName('movie-card').addEventListener("mouseenter",function(){

//             setTimeout(function(){

//                     document.getElementById("im").style.opacity=0;
//                     document.getElementById("vid").play();

//             },2000)

//         })


for(let i=1;i<=16;i++)
{
    let card = "movie-card"+i;
    console.log(card)
      document.getElementById(card).addEventListener("mouseenter",function(){

            setTimeout(function(){

                let im = "im"+i;
                let vid = "vid"+i;

                    document.getElementById(im).style.opacity=0;
                    document.getElementById(vid).play();

            },2000)

        })
}

document.getElementById("topic-rel").addEventListener("click",function(){
  document.getElementById("topic-rel").style.color = "white";   
  document.getElementById("topic-trailer").style.color = ""; 
});

document.getElementById("topic-trailer").addEventListener("click",function(){
  document.getElementById("topic-rel").style.color = "";
    document.getElementById("topic-trailer").style.color = "white";   
});

window.addEventListener("scroll", function () {
  var bannerMovieDetail = document.querySelector(".banner-movie-detail");
  var banner = document.querySelector(".banner-mv");

  var bannerMovieDetailPosition = window.addEventListener(
    "scroll",
    function () {
      var bannerMovieDetail = document.querySelector(".banner-movie-detail");
      var banner = document.querySelector(".banner-mv");

      var bannerMovieDetailPosition =
        bannerMovieDetail.getBoundingClientRect().top;

      if (bannerMovieDetailPosition <= 0) {
        banner.classList.add("banner-scrolled");
      } else {
        banner.classList.remove("banner-scrolled");
      }
    }
  );
  bannerMovieDetail.getBoundingClientRect().top;

  if (bannerMovieDetailPosition <= 0) {
    banner.classList.add("banner-scrolled");
  } else {
    banner.classList.remove("banner-scrolled");
  }
});

// const navButton = document.getElementById('nav-link-new');
// const navBarNames = document.querySelectorAll(".icon");
// const background = document.getElementById('detail')
// navButton.addEventListener('mouseenter', function() {
//     navBarNames.forEach(icon => {
//         icon.style.display = 'block';
//     });
//     background.style.opacity = '0.1'

//     // document.get
// });
// navButton.addEventListener('mouseleave', function() {
//     navBarNames.forEach(icon => {
//         icon.style.display = 'none';
//     });
//     background.style.opacity = '1'
// });

// navButton.addEventListener('mouseleave', function() {
//     navBarNames.style.display = 'none';
// });

// navBarNames.addEventListener('mouseenter', function() {
//     navBarNames.style.display = 'block';
// });

// navBarNames.addEventListener('mouseleave', function() {
//     navBarNames.style.display = 'none';
// });
