const students = [
    {
        name: "Arthur D´eÇa Morgenstern Vinhas Marchetti",
        email: "avinhasmarchetti@gmail.com",
        quote: "Precision thinking and curiosity drive innovation — keep building systems that others rely on.",
        feature: 1
    },
    {
        name: "Caue Roriz Casonato",
        email: "caueroriz@gmail.com",
        quote: "Strong engineers turn challenges into architecture — continue shaping solutions with confidence.",
        feature: 2
    },
    {
        name: "Giovanna Pietra Nicolodi",
        email: "giovannapietranicolodi@gmail.com",
        quote: "Consistency beats complexity — your discipline will scale farther than any tool.",
        feature: 3
    },
    {
        name: "Guilherme Dos Santos Araujo",
        email: "guigudf@hotmail.com",
        quote: "Real progress comes from persistence — your determination will define your impact.",
        feature: 4
    },
    {
        name: "Kohei Fujiwara",
        email: "k.pino519@gmail.com",
        quote: "Thoughtful builders create stable futures — keep refining both craft and mindset.",
        feature: 5
    },
    {
        name: "Leonardo Augusto Mingotti",
        email: "lamingotti@hotmail.com",
        quote: "Adaptability is power in tech — your ability to evolve is your greatest advantage.",
        feature: 6
    },
    {
        name: "Diego Pachas Crisostomo",
        email: "diego.pachas@outlook.com",
        quote: "Innovation begins where comfort ends — continue pushing boundaries with purpose.",
        feature: 7
    },
    {
        name: "Sureeporn Apaikawee",
        email: "sureeporn.apaikawee@gmail.com",
        quote: "Clarity and focus produce excellence — your dedication sets a strong example.",
        feature: 8
    }
];

const container = document.getElementById("cardContainer");

// Shuffle
students.sort(() => Math.random() - 0.5);

// Render cards
students.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div>
            <div class="name">${s.name}</div>
            <div class="email">${s.email}</div>
            <div class="quote">"${s.quote}"</div>

            <a href="feature${s.feature}.html" class="feature-btn">
                View Feature ${s.feature}
            </a>
        </div>
        <div class="tag">DevOps Cohort</div>
    `;

    container.appendChild(card);
});
