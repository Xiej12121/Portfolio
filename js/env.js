// env.js

let open = false; // This mirrors Alpine's `open` state

const env = document.getElementById('env');

// Function to hide the env div with transition
function hideEnv() {
  if (!env) return;

  // Add leave-start classes
  env.classList.remove('opacity-100', 'scale-100');
  env.classList.add('transition', 'duration-1000', 'ease-in-out', 'opacity-100', 'scale-100');

  // Force reflow to ensure transition classes apply
  void env.offsetWidth;

  // Apply leave-end classes
  env.classList.remove('opacity-100', 'scale-100');
  env.classList.add('opacity-0', 'scale-90');

  // Wait for transition to finish before hiding element
  setTimeout(() => {
    env.style.display = 'none';
  }, 1000); // Matches transition duration
}

// Function to show the env div
function showEnv() {
  if (!env) return;

  env.style.display = 'flex'; // or 'block' depending on layout

  // Reset to leave-end state first
  env.classList.remove('opacity-100', 'scale-100');
  env.classList.add('opacity-0', 'scale-90');

  // Force reflow
  void env.offsetWidth;

  // Trigger enter transition
  env.classList.remove('opacity-0', 'scale-90');
  env.classList.add('transition', 'duration-1000', 'ease-in-out', 'opacity-100', 'scale-100');
}

// Toggle function
function toggleEnv() {
  open = !open;
  if (open) {
    hideEnv();
  } else {
    showEnv();
  }
}

// Export toggle if using modules
// export { toggleEnv };
