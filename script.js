// Function to trigger animation when div is in the viewport
const boxes = document.querySelectorAll('.box');

const observerOptions = {
    root: null, // Observing the viewport
    rootMargin: '0px', // No margin around the viewport
    threshold: 0.5 // When 50% of the element is in the viewport
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the element comes into view
            entry.target.classList.add('visible');
        } else {
            // Remove the 'visible' class when the element is out of view
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe each box
boxes.forEach(box => {
    observer.observe(box);
});


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === "block";
      
      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));

      if (!isOpen) {
        answer.style.display = "block";
        button.classList.add("active");
      }
    });
  });

  
  
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // Check if the answer is open or closed
      const isOpen = answer.style.maxHeight;

      // Close all answers first
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.maxHeight = null;
        a.classList.remove('open'); // Remove the 'open' class to collapse all answers
      });
      document.querySelectorAll(".faq-question").forEach(q => {
        q.classList.remove("active");
      });

      // If the answer is closed, open it
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px"; 
        answer.style.overflow = "visible"; // Ensure full visibility
 // Ensure the full answer is visible
    
 // Allow it to expand
        answer.classList.add('open'); // Add the open class for padding
        button.classList.add("active");
      }
    });
  });



