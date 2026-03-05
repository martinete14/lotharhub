/* ==============================
   LOTHAR HUB INTERACTIVITY
   ============================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       COPIAR IP DEL SERVIDOR
       ============================== */

    const botonesIP = document.querySelectorAll(".btn-copy-ip");
    const ipInfo = document.getElementById("ipInfo");

    const serverIP = "135.148.136.225:20010";

    botonesIP.forEach(btn => {

        btn.addEventListener("click", () => {

            navigator.clipboard.writeText(serverIP);

            if(ipInfo){

                ipInfo.textContent = "IP copiada al portapapeles: " + serverIP;

                ipInfo.style.opacity = "1";

                setTimeout(() => {

                    ipInfo.style.opacity = "0";

                },3000);

            }

            /* efecto visual del botón */

            btn.style.transform = "scale(0.95)";

            setTimeout(() => {
                btn.style.transform = "scale(1)";
            },150);

        });

    });



    /* ==============================
       SMOOTH SCROLL NAV
       ============================== */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", (e) => {

            const targetId = link.getAttribute("href");

            if(targetId.startsWith("#")){

                e.preventDefault();

                const target = document.querySelector(targetId);

                if(target){

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });



    /* ==============================
       HOVER EFFECT GALERIA
       ============================== */

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.filter = "brightness(1.2)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.filter = "brightness(1)";

        });

    });

});