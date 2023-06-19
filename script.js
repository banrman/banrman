function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "test") {
        window.location.href = 'content.html';
    } else {
        alert("Incorrect password. Access denied!");
    }
    
}

        // Simulating a delay for demonstration purposes
        setTimeout(function() {
            // Remove the loading screen once the game is loaded
            document.getElementById('loading-screen').style.display = 'none';
        }, 2000);


        window.addEventListener('DOMContentLoaded', () => {
            const audio = document.getElementById('bg-music');
            const volumeSlider = document.getElementById('volume-slider');
          
            audio.volume = volumeSlider.value; // Set initial volume
          
            volumeSlider.addEventListener('input', () => {
              audio.volume = volumeSlider.value; // Update volume when slider changes
            });
            
              audio.play();
          });

          document.addEventListener('DOMContentLoaded', function() {
          const quotes = [
            "More to come soon...",
            "I feel a song coming on...",
            "Am I forgetting something...",
            "Time to reread One Piece..."
          ];

          const skillsMenuItem = document.querySelector('.menu-item.skills');
          const skillsSubMenu = document.querySelector('.skills .sub-menu');

          skillsMenuItem.addEventListener('click', function() {
            skillsSubMenu.classList.toggle('show');
          });
          
          let currentQuoteIndex = 0;

          function rotateQuotes() {
            const quoteText = document.getElementById("quote-text");
            const speechBubble = document.querySelector(".speech-bubble");
          
            // Set the quote text
            quoteText.textContent = quotes[currentQuoteIndex];
          
            // Show the speech bubble
            speechBubble.style.display = "block";
          
            // Increment the quote index
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
          }
          
          // Call rotateQuotes function when the animation iteration starts
          document.querySelector(".speech-bubble").addEventListener("animationiteration", rotateQuotes);
          
          // Initial quote rotation
          rotateQuotes();
        });