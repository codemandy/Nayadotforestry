const sections = document.querySelectorAll("section");

const options = {
  rootMargin: "-150px"

};

const observer = new IntersectionObserver(function(entries, observer)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle('inverse');
  })

}, options);

sections.forEach(section => {
  observer.observe(section);
})
