// Store moods in an array
const moods = [];
// Select elements
const moodForm = document.querySelector("#moodForm");
const moodInput = document.querySelector("#moodInput");
const dateInput = document.querySelector("#dateInput");
const moodList = document.querySelector("#moodList");
const voidMessage = document.querySelector("#voidMessage");
// Add Mood (Arrow Function)
const addMood = (event) => {
  event.preventDefault(); // stop page refresh
  const mood = moodInput.value.trim();
  const date = dateInput.value;
  // Validation
  if (!mood) {
    alert("Please enter mood!");
    return;
  }
  if (!date) {
    alert("Please select date!");
    return;
  }
  // Create mood object
  const moodEntry = { date, mood };
  moods.push(moodEntry);
  // Clear inputs
  moodInput.value = "";
  dateInput.value = "";
  // Update UI
  displayMoods();
};
// Delete Mood (Arrow Function)
const deleteMood = (index) => {
  moods.splice(index, 1); // remove one entry at given index
  displayMoods();
};
// Display Moods
const displayMoods = () => {
  moodList.innerHTML = ""; // clear previous entries
  if (moods.length === 0) {
    voidMessage.style.display = "block";
    return;
  } else {
    voidMessage.style.display = "none";
  }
  moods.forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = ` ${entry.date} → ${entry.mood} 
      <button class="deleteButton" onclick="deleteMood(${index})">Delete</button>`;
    moodList.appendChild(li);
  });
};
// Event Listener
moodForm.addEventListener("submit", addMood);
