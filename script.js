document.getElementById("deletionForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;
    
    if (email) {
        // Simulate sending the request
        console.log(`Account deletion requested for: ${email}, Reason: ${reason}`);
        
        // Display success message
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = `Your account deletion request has been submitted for ${email}.`;
        successMessage.style.display = "block";
        
        // Reset form
        document.getElementById("deletionForm").reset();
    }
});
