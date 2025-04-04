document.querySelectorAll(".balloon").forEach((balloon) => {
  balloon.addEventListener("mouseover", (e) => {
    const remainingBalloons = document.querySelectorAll(".balloon");
    console.log("---" + remainingBalloons.length);
    if (remainingBalloons.length > 0) {
      e.target.classList.remove("balloon");
      e.target.style.backgroundColor = "#EDEDED";
      e.target.textContent = "POP!";
    } else {
      document.getElementById("yay-no-balloons").style.display = "block";
      document.getElementById("balloon-gallery").style.display = "none";
    }
  });
});
