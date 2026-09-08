
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");
 
  if (!form) return;
 
  form.addEventListener("submit", (event) => {
    event.preventDefault();
 
    if (!form.checkValidity()) {
      status.textContent = "Fill in every field before sending.";
      return;
    }
 
    // No backend is wired up yet — this just confirms the form works.
    // Swap this for a real request (e.g. to Formspree or your own API)
    // when you're ready to actually receive messages.
    status.textContent = "Message ready to send — connect a backend to deliver it.";
    form.reset();
  });
});
 
