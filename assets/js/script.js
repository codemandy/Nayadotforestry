const posts = document.querySelectorAll(".TOUCH")

const observer = new IntersectionObserver(entries =>  {
console.log(entries)
})

observer.observe(posts[0])
