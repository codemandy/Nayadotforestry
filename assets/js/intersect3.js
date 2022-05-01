const options = {
threshold: 0.6
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target);
      let currentActive = document.querySelector("nav a.active");

      if (currentActive) {
      currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `nav a[class="${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");

    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});
