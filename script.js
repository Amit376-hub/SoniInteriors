// Navbar item click effect
const navItems = document.querySelectorAll(".navbar ul li");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Button click event
const appointmentBtn = document.querySelector(".btn button");
appointmentBtn.addEventListener("click", () => {
  alert("Thank you! Our team will contact you soon for an appointment.");
});

// Project card hover scale
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 15px 25px rgba(0, 0, 0, 0.2)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
  });
});

// Dynamic Content Handler
const contentBox = document.getElementById("dynamic-content");

// HOME click - scroll to top and hide content
document.getElementById("home").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  contentBox.style.display = "none";
});

// ABOUT click - show About content
document.getElementById("about").addEventListener("click", () => {
    contentBox.innerHTML = `
      <h2 style="font-size:40px; margin-bottom:20px; font-family:'Georgia', serif; color:#222;">About Us</h2>
      <p style="font-size:20px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333; line-height:1.8; margin-bottom:15px;">
        We provide customized interior design solutions blending modern aesthetics and functional layouts.
      </p>
      <p style="font-size:20px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333; line-height:1.8; margin-bottom:15px;">
        From cozy living rooms to elegant dining areas and tranquil bedrooms, we tailor every detail to reflect your personal style and comfort.
      </p>
      <p style="font-size:20px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333; line-height:1.8;">
        <strong>Contact us</strong> to transform your home today!
      </p>
    `;
    contentBox.style.display = "block";
    contentBox.scrollIntoView({ behavior: "smooth" });
  });
  

// SERVICES click - show Services content
document.getElementById("services").addEventListener("click", () => {
    contentBox.innerHTML = `
      <h2 style="font-size:36px; margin-bottom:20px; color: black;">Our Services</h2>
      <ul style="list-style:none; padding:0; font-size:20px; line-height:2;">
        <li style="color:black;">✔ Wallpaper</li>
        <li style="color:black;">✔ Rods</li>
        <li style="color:black;">✔ PVC Doors</li>
        <li style="color:black;">✔ Modular Kitchen</li>
        <li style="color:black;">✔ Fall Ceiling</li>
        <li style="color:black;">✔ Floorings</li>
      </ul>
    `;
    contentBox.style.display = "block";
    contentBox.scrollIntoView({ behavior: "smooth" });
  });  
// CONTACT click - show Contact details
document.getElementById("contact").addEventListener("click", () => {
  contentBox.innerHTML = `
    <h2 style="font-size:36px; margin-bottom:20px;">Contact Us</h2>
    <p style="font-size:24px;">📞 9891524047</p>
    <p style="font-size:24px;">📞 9555780498</p>
    <p style="font-size:24px;">📞 8800836844</p>
  `;
  contentBox.style.display = "block";
  contentBox.scrollIntoView({ behavior: "smooth" });
});
