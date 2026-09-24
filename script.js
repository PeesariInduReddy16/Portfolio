/* =========================================================
   INDU REDDY PEESARI — PORTFOLIO INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 600);

    });


    /* =========================
       NAVBAR
    ========================= */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("open");

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

            });

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    function updateActiveSection() {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 220;

            const bottom =
                top + section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {

                current = section.id;

            }

        });


        links.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveSection
    );

    updateActiveSection();


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealItems =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-grid, " +
            ".knowledge-card, " +
            ".internship-header, " +
            ".internship-description, " +
            ".internship-project, " +
            ".certificate-inline, " +
            ".project-card, " +
            ".certificate-card, " +
            ".resume-container, " +
            ".contact-grid"
        );


    revealItems.forEach(item => {

        item.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach(item => {

        observer.observe(item);

    });


    /* =========================
       STAGGER CARDS
    ========================= */

    const cardGroups = [
        ".knowledge-card",
        ".internship-project",
        ".certificate-card"
    ];


    cardGroups.forEach(selector => {

        document
            .querySelectorAll(selector)
            .forEach((card, index) => {

                card.style.transitionDelay =
                    `${index * 80}ms`;

            });

    });


    /* =========================
       PROFILE MOUSE EFFECT
    ========================= */

    const profile =
        document.querySelector(".hero-profile");


    if (profile && window.innerWidth > 850) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (window.innerWidth / 2 -
                        event.clientX) *
                    0.008;

                const y =
                    (window.innerHeight / 2 -
                        event.clientY) *
                    0.008;

                profile.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }


    /* =========================
       BUTTON RIPPLE EFFECT
    ========================= */

    document
        .querySelectorAll(".btn, .project-link")
        .forEach(button => {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement("span");

                    ripple.style.position = "absolute";
                    ripple.style.width = "10px";
                    ripple.style.height = "10px";
                    ripple.style.borderRadius = "50%";
                    ripple.style.background =
                        "rgba(255,255,255,.45)";
                    ripple.style.pointerEvents =
                        "none";

                    const rect =
                        this.getBoundingClientRect();

                    ripple.style.left =
                        `${event.clientX - rect.left}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top}px`;

                    ripple.style.transform =
                        "translate(-50%, -50%) scale(0)";

                    ripple.style.transition =
                        "transform .5s ease, opacity .5s ease";

                    this.style.position = "relative";
                    this.style.overflow = "hidden";

                    this.appendChild(ripple);

                    requestAnimationFrame(() => {

                        ripple.style.transform =
                            "translate(-50%, -50%) scale(18)";

                        ripple.style.opacity = "0";

                    });

                    setTimeout(() => {

                        ripple.remove();

                    }, 550);

                }
            );

        });


    /* =========================
       CLOSE MENU ON ESCAPE
    ========================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navLinks
            ) {

                navLinks.classList.remove("open");

            }

        }
    );

});