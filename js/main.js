function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    }
    
    
    function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    
    if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
    }
    alert("Form submitted successfully!");
    return true;
    }
