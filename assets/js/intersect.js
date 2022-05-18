// function selectElementByClass(className) {
//   return document.querySelector("class");
// }


// const sections = [
//   selectElementByClass('dramaturgy'),
//   selectElementByClass('choreography'),
//   selectElementByClass('collective-works'),
//   selectElementByClass('about'),
// ];

// const navItems = {
//   home: selectElementByClass('homeNavItem'),
//   choreography: selectElementByClass('choreographyNavItem'),
//   dramaturgy: selectElementByClass('dramaturgyNavItem'),
//   collective: selectElementByClass('collectiveNavItem'),
//   about: selectElementByClass('aboutNavItem'),
// };


// // intersection observer setup
// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // get the nav item corresponding to the id of the section
//       // that is currently in view
//       const navItem = navItems[entry.target.id];
//       // add 'active' class on the navItem
//       navItem.classList.add('active-active');
//       // remove 'active' class from any navItem that is not
//       // same as 'navItem' defined above
//       Object.values(navItems).forEach((item) => {
//         if (item != navItem) {
//           item.classList.remove('active-active');
//         }
//       });
//     }
//   });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// sections.forEach((sec) => observer.observe(sec));
