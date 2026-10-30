// Enable scroll animations
document.documentElement.classList.add('js-fade');

document.addEventListener('DOMContentLoaded', function() {

   // Select all memories
   const memories = document.querySelectorAll('.memory');

   // Detect when memories enter or leave the screen
   const observer = new IntersectionObserver(function(entries) {

      entries.forEach(function(entry) {

         if (entry.isIntersecting) {

            // Fade in when the memory enters the screen
            entry.target.classList.add('visible');

         } else {

            // Fade out when the memory leaves the screen
            entry.target.classList.remove('visible');

         }

      });

   }, {
      threshold: 0.1
   });

   // Observe each memory
   memories.forEach(function(memory) {
      observer.observe(memory);
   });

});