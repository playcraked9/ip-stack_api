// Live Background Particles
function createParticles() {
    const background = document.getElementById("background");
    const particleCount = 30; // Adjust number of particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const size = Math.random() * 8 + 4; // Particle size between 4px to 12px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random Position and Animation Delay
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        background.appendChild(particle);
    }
}

// Fetch IP Address
const apiKey = "99bd0930af05687c9115adc1f315a369"; // Replace with your IPStack API Key
const ipElement = document.getElementById("ip");

async function fetchIP() {
    try {
        const response = await fetch(`https://api.ipstack.com/check?access_key=${apiKey}`);
        const data = await response.json();

        if (data.ip) {
            ipElement.textContent = `IP Address: ${data.ip}`;
        } else {
            ipElement.textContent = "Unable to fetch IP address.";
        }
    } catch (error) {
        console.error("Error fetching IP:", error);
        ipElement.textContent = "An error occurred.";
    }
}

// Initialize
createParticles();
fetchIP();
