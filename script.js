// Function to update the resume preview in real-time
function updatePreview() {
    document.getElementById("preview-name").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("preview-email").innerText = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("preview-phone").innerText = document.getElementById("phone").value || "+91 9876543210";
    document.getElementById("preview-skills").innerText = document.getElementById("skills").value || "Your skills here...";
    document.getElementById("preview-education").innerText = document.getElementById("education").value || "Your education details here...";
    document.getElementById("preview-experience").innerText = document.getElementById("experience").value || "Your experience here...";
    document.getElementById("preview-projects").innerText=document.getElementById("projects").value || "Your projects here..."
}

function downloadResume() {
    const resume = document.getElementById("resume"); // Select the resume section

    // Capture high-resolution image
    html2canvas(resume, { scale: 3 }).then((canvas) => { 
        const imgData = canvas.toDataURL("image/png"); // Convert to PNG image
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4"); // Create an A4 PDF

        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = 297; // A4 height in mm

        const imgWidth = pdfWidth; // Full A4 width
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        // Ensure image fits inside A4 page
        if (imgHeight > pdfHeight) {
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        } else {
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        }

        pdf.save("Resume.pdf"); // Download PDF
    });
}
