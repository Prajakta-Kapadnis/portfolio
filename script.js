// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Scroll Reveal Animation
function revealElements() {
  const reveals = document.querySelectorAll(".reveal")

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight
    const elementTop = reveals[i].getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    }
  }
}

window.addEventListener("scroll", revealElements)
window.addEventListener("load", revealElements)

// Typing Animation
function setupTypingAnimation() {
  const typingElement = document.querySelector(".typing-text")
  if (!typingElement) return

  const text = typingElement.textContent
  typingElement.textContent = ""

  let i = 0
  const typingSpeed = 100 // milliseconds per character

  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, typingSpeed)
    }
  }

  // Start typing animation after a short delay
  setTimeout(typeWriter, 1000)
}

window.addEventListener("load", setupTypingAnimation)

// Form Submission (you can customize this to work with your backend)
const contactForm = document.querySelector(".contact-form form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to your server
    // For now, we'll just log it to the console
    console.log("Form submitted:", { name, email, subject, message })

    // Show success message (you can customize this)
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

// Header scroll effect
const header = document.querySelector("header")
let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    header.style.background = "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.boxShadow = "none"
    header.style.background = "rgba(255, 255, 255, 0.95)"
  }

  lastScrollTop = scrollTop
})

