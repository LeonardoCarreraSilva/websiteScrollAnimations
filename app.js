const observer = new IntersectionObserver((entries) => {
  debugger
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
  observer.observe(element);
});
