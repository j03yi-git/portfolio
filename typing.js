const typingElement = document.getElementById("typing");

// Text for typing animation
const textArray = ["Ng Joe Yi"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentText = textArray[arrayIndex];
    const speed = isDeleting ? 50 : 100; // Typing and deleting speeds

    if (isDeleting) {
        // Remove characters
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        // Add characters
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    // Ensure the entire word is displayed before pausing
    if (!isDeleting && charIndex === currentText.length + 1) {
        charIndex--; // Fix to keep the full word visible
        setTimeout(() => {
            isDeleting = true;
            typeAnimation();
        }, 2000); // Pause before deleting
        return;
    }

    // Switch to retyping after deleting
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % textArray.length; // Loop through words
        setTimeout(typeAnimation, 500); // Pause before retyping
        return;
    }

    // Continue typing or deleting
    setTimeout(typeAnimation, speed);
}

// Start the typing animation
typeAnimation();