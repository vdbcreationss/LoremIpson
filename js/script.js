/*======================================
=comportements
======================================*/

// -------------------------
// =mobilemenu
// -------------------------

(function () {
  var linkOpen = document.querySelector(".js-navopen");
  var linkClose = document.querySelector(".js-navclose");
  var mobileMenu = document.querySelector(".js-mobilemenu");

  var allLinks = [linkOpen, linkClose];

  for (var i = 0; i < allLinks.length; i++) {
    var clickableItem = allLinks[i];

    clickableItem.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        mobileMenu.classList.toggle("is-shown");
        linkClose.classList.toggle("is-shown");
        linkOpen.classList.toggle("is-shown");
      },
      false
    );
  }
})();

// -------------------------
// =3Dcard
// -------------------------

(function cardFliper() {
  const allCards = document.querySelectorAll(".js-yourproduct__card");

  function init() {
    allCards.forEach(function (item) {
      const btnFront = item.querySelector(".js-yourproduct__btn--front");
      const btnBack = item.querySelector(".js-yourproduct__btn--back");
      btnFront.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          item.classList.add("is-flipped");
        },
        false
      );
      btnBack.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          item.classList.remove("is-flipped");
        },
        false
      );
    });
  }

  init();
})();

// -------------------------
// =TotalPrice
// -------------------------

(function priceCalc() {
  const finalPrice = document.querySelector(".js-yourproduct__price");
  var finalPriceNum = parseInt(finalPrice.textContent);
  const checkbox80 = document.querySelector(".js-yourproduct__ckeckbox80");
  const checkbox20 = document.querySelector(".js-yourproduct__ckeckbox20");

  checkbox80.addEventListener("click", function (event) {
    if (checkbox80.checked) {
      finalPriceNum += 80;
    } else {
      finalPriceNum -= 80;
    }
    finalPrice.textContent = finalPriceNum;
  });
  checkbox20.addEventListener("click", function (event) {
    if (checkbox20.checked) {
      finalPriceNum += 20;
    } else {
      finalPriceNum -= 20;
    }
    finalPrice.textContent = finalPriceNum;
  });
})();

/*======================================
=animation
======================================*/

// -------------------------
// =HeaderContent
// -------------------------

(function () {
  const content = document.querySelectorAll(".js-headerinfo__contentitem");
  const ourPhilo = document.querySelectorAll(".js-ourphilo");

  gsap.set(ourPhilo, {
    opacity: 0,
    y: 250,
  });

  gsap.from(content, {
    y: 25,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power1.out",
    onComplete: function () {
      gsap.to(ourPhilo, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.out",
      });
    },
  });
})();

// -------------------------
// =HeaderIllu
// -------------------------

(function () {
  const illu = document.querySelector("#illu");
  const groupPerso = document.querySelector("#g-perso");
  const circleM = document.querySelector("#circle-small");
  const circleS = document.querySelector("#circle-medium");

  /**
   *
   * @returns gsap timeline
   */
  function animSetup() {
    const tl = gsap.timeline();
    tl.set(illu, {
      y: 120,
      opacity: 0,
    });

    return tl;
  }
  /**
   *
   * @returns gsap timeline
   */

  function animStart() {
    const tl = gsap.timeline();
    tl.to(illu, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    })
      .to(pen, {
        y: 10,
        rotate: 1,
        transformOrigin: "50% 100%",
        duration: 3,
        delay: -1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })
      .to(groupPerso, {
        y: -5,
        duration: 2,
        delay: -2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })
      .to(circleM, {
        y: 5,
        duration: 2.5,
        delay: -3,
        transformOrigin: "50% 50%",
        rotate: 10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      })
      .to(circleS, {
        y: 5,
        duration: 3,
        delay: -2.5,
        transformOrigin: "50% 50%",
        rotate: -10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

    return tl;
  }

  const master = gsap.timeline();
  master.pause();

  master.add(animSetup()).add(animStart());

  master.play();
})();

// -------------------------
// =Scroll trigger
// -------------------------

gsap.registerPlugin(ScrollTrigger);

//
// =Img clip path
//

(function ImgClipPath() {
  const allImages = document.querySelectorAll(".js-anim__clippath");
  allImages.forEach((image) => {
    image.classList.add("js-anim__clippath--hide");
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "bottom 90%",
      },

      clipPath: "inset(100% 0 0 0)",
      duration: 1.5,
      ease: "power3.inOut",
    });
  });
})();

//
// = Overview
//

(function Overview() {
  const mutchMore = document.querySelector(".js-mutchmore");
  const pen = document.querySelector(".js-pen");
  const content = document.querySelector(".js-overview__content");

  pen.style.display = "inline-block";

  if (window.window.innerWidth < 1024) {
    gsap.to(pen, {
      scrollTrigger: {
        trigger: content,
        start: "top 50%",
      },
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  gsap.from(mutchMore, {
    scrollTrigger: {
      trigger: content,
      start: "top 50%",
    },
    y: 10,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  });

  gsap.from(content, {
    scrollTrigger: {
      trigger: content,
      start: "top 50%",
    },
    y: 150,
    opacity: 0,
    duration: 2,
    delay: 0.2,
    ease: "power3.out",
  });
})();
