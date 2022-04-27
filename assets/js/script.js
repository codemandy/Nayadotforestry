const sectionOne = document.querySelector(".section-container");

const options = { };

const observer = new IntersectionObserver(function(entries, observer)
{
  entries.forEach(entry => {
    console.log(entry);
  })

}, options);

observer.observe(sectionOne);
