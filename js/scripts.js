const targetDate = new Date(2024, 11, 4); // December 4, 2024

function daysUntilTargetDate(currentDate, targetDate) {
  const timeDiff = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysRemaining;
}

let countdownDiv = document.getElementById("countdownDays");

if (countdownDiv) {
  var x = setInterval(function() {
    const currentDate = new Date(); // Get the current date
    const daysRemaining = daysUntilTargetDate(currentDate, targetDate); // Update the days remaining

    if (daysRemaining > 0) {
      countdownDiv.innerHTML = `<span>${daysRemaining} days</span> until we get married. 💍 👰🏻‍♀️🤵🏻`;
    } else {
      countdownDiv.innerHTML = "We are married 🎉!!!";
      clearInterval(x); // Clear the interval after reaching December 4, 2024
    }
  }, 1000);
}

