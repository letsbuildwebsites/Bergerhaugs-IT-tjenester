document.addEventListener("DOMContentLoaded", function() {
    // Når "Litt om oss"-knappen trykkes
    document.getElementById("littOmOss").addEventListener("click", function() {
        document.getElementById("omOss").scrollIntoView({ behavior: "smooth" });
    });

    // Når "Garanti"-knappen trykkes
    document.getElementById("garanti").addEventListener("click", function() {
        document.getElementById("reklame").scrollIntoView({ behavior: "smooth" });
    });

    // Når noen av "Kontakt oss"-knappene trykkes
    document.getElementById("kontakt").addEventListener("click", function() {
        document.getElementById("kontaktOss").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("knapp1").addEventListener("click", function() {
        document.getElementById("kontaktOss").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("omOssKontakt").addEventListener("click", function() {
        document.getElementById("kontaktOss").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("tilbudKontakt").addEventListener("click", function() {
        document.getElementById("kontaktOss").scrollIntoView({ behavior: "smooth" });
    });
});
