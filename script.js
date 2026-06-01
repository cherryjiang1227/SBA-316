const form = document.getElementById("volunteerForm");
const shift = document.getElementById("shift");
const message = document.getElementById("message");
const shiftDescription = document.getElementById("shiftDescription");
// Selects first name, last name, email, event date, and shift inputs
const inputs = document.querySelectorAll("input, select");

const shiftInfo = {
  "Registration & Packet Pickup": "Check athletes in and distribute race information packets.",
  "Bag Check / Drop": "Store and secure athlete belongings before event.",
  "Hydration / Aid Station": "Provide hydration support.",
  "Finish Line & Merchandise": "Assist athletes at finish line and sell official Hyrox merchandise.",
  "Sled Push (Assistant Judge)": "Help ensure proper sled push standards.",
  "Farmer's Carry (Assistant Judge)": "Assist judging farmer’s carry.",
  "Wall Balls (Assistant Judge)": "Count reps and ensure form.",
  "Lunges (Assistant Judge)": "Monitor lunge technique.",
  "Sled Pull (Assistant Judge)": "Support sled pull station.",
  "Ski Erg (Assistant Judge)": "Assist Ski Erg station.",
  "Burpee Broad Jumps (Assistant Judge)": "Ensure correct movement standards."
};

shift.addEventListener("change", function () {
  const selected = shift.value;

  shiftDescription.textContent =
    shiftInfo[selected] || "Select a shift to view details.";

  shiftDescription.style.backgroundColor = "lightgray";
  shiftDescription.style.padding = "10px";
  shiftDescription.style.borderRadius = "6px";
});

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.backgroundColor = "#f2f2f2";
  });

  input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventDate = document.getElementById("eventDate").value;
  const shiftValue = shift.value;

  if (!firstName || !lastName || !email || !eventDate || !shiftValue) {
    alert("Please fill out all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid email format.");
    return;
  }

  const confirmSubmit = confirm("Submit your volunteer registration?");
  if (!confirmSubmit) return;

  message.textContent = `Thanks ${firstName}! You're signed up for ${shiftValue} on ${eventDate}.`;

  const note = document.createElement("p");
  note.textContent = "We will contact you soon with event details.";

  message.parentNode.appendChild(note);

  console.log("Form submitted for:", firstName, lastName);
  alert("Registration successful!");

  form.reset();

  shiftDescription.textContent =
    "Select a volunteer shift to learn more about the role.";

  form.setAttribute("status", "submitted");
});