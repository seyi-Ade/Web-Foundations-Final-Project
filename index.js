const jobs = document.querySelectorAll(".available_jobs li")
const navList = document.querySelectorAll(".nav_lists li")
const footLinks = document.querySelectorAll(".links .link li")


// jobs.addEventListener('click', function() {
//     console.log("clicked");
// })

// jobs.forEach((job) => {
//     job.addEventListener("click", function() {
//         job.classList.add("active")
//         // job.classList.remove("active")
//     })
// })

// navList.forEach((nav) => {
//     nav.addEventListener("click", function(e) {
//         nav.classList.add("active")
//         // nav.classList.remove("active")
//     })
// })

const removeActiveClass = () => {
    const activeElements = document.querySelectorAll('.available_jobs li');
    for (const activeElement of activeElements) {
      activeElement.classList.remove('active');
    }
    for (const nav_list of navList) {
        nav_list.classList.remove('active');
    }
    for (const link of footLinks) {
        link.classList.remove('active');
    }
  };

  const onClick = (e) => {
    removeActiveClass();
    e.target.classList.add('active');
  };
  

  jobs.forEach((job) => {
    job.addEventListener('click', onClick)
  })

  navList.forEach((nav) => {
    nav.addEventListener('click', onClick)
  })

  footLinks.forEach((footLink) => {
    footLink.addEventListener('click', onClick)
  })