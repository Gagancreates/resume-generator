// Function to update the resume preview in real-time
function updatePreview() {
    document.getElementById("preview-name").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("preview-email").innerText = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("preview-phone").innerText = document.getElementById("phone").value || "+91 9876543210";
    document.getElementById("preview-skills").innerText = document.getElementById("skills").value || "Your skills here...";
    document.getElementById("preview-education").innerText = document.getElementById("education").value || "Your education details here...";
    document.getElementById("preview-experience").innerText = document.getElementById("experience").value || "Your experience here...";
}

function downloadResume() {
    const resume = document.getElementById("resume"); // Resume section

    html2canvas(resume).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4"); // A4 size PDF

        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Resume.pdf");
    });
}