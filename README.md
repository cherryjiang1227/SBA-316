# SBA 316: The Document Object Model  
## HYROX Volunteer Signup

## Project Overview
For this skill-based assessment, I built a single-page web application for a fictional HYROX Volunteer Sign-Up form. HYROX is a global fitness racing event, and this application allows users to register as volunteers, select available shifts, and learn more about each role.

The goal of the project was to demonstrate strong understanding of the DOM, event-driven programming, BOM methods, and dynamic user interaction using JavaScript.

---

## Features
- Volunteer registration form with validation
- Dynamic shift description updates
- Real-time form submission handling
- Confirmation and validation alerts
- Dynamic DOM updates using JavaScript
- Feedback messages after submission

---

## Technical Breakdown

### HTML Structure
The application is built using semantic HTML elements:
- `<form>` collects user input
- `<select>` dropdown allows shift selection

HTML5 validation attributes such as `required`, `type="email"`, and `minlength` were used to ensure proper input structure.

---

### CSS Styling
The styling uses a simple black and white theme just like the offical Hyrox landing page:
- Black background for contrast
- White form containers for readability
- Minimal design for clarity and usability
- Clean spacing and layout using Flexbox principles

---

### JavaScript Functionality

This project demonstrates strong DOM manipulation and event-driven programming:

#### DOM Selection
- `getElementById()` used for primary elements
- `querySelectorAll()` used to select multiple inputs

#### DOM Navigation
- `parentNode.appendChild()` used to insert dynamic elements

#### Iteration
- `forEach()` used to loop through all inputs for interactivity effects

#### Dynamic Element Creation
- `createElement()` used to generate confirmation messages

#### Event Listeners
- `change` event for shift selection
- `submit` event for form handling

#### BOM Methods
- `alert()` used for notifications
- `confirm()` used for submission confirmation
- `console.log()` used for debugging

#### Form Validation
- HTML validation attributes
- JavaScript validation for empty fields and email format

#### Style & Attribute Manipulation
- `style` property used for dynamic UI feedback
- `setAttribute()` used to track submission state

---

## User Experience
The application provides immediate feedback as users interact with the form. Shift descriptions update dynamically, inputs visually respond to focus, and users receive confirmation when successfully registering.

---

## Reflection

One challenge I encountered was ensuring that all requirements were met. I had to figure out how to properly use DOM and BOM methods in a meaningful way throughout the application. I also had a hard time coming up with a topic, but after realizing that I actually volunteered for HYROX on May 30, 2026, I decided to use that experience as the basis for this assessment.

Another challenge was deciding how to structure the DOM requirements such as iteration and element creation in a meaningful way. I solved this by applying input highlighting and dynamically generated confirmation messages to improve user interaction.

If I had more time, I would improve the UI further with animations and possibly store submissions using localStorage to simulate a backend system.

---

## Future Improvements
- Add backend database for storing volunteers
- Improve UI with animations and transitions