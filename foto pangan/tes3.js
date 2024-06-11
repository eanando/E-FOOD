const quizData = [
    {
        level: 3,
        question: "Pola makan sehat mencakup pemilihan makanan yang tepat, seimbang, dan bervariasi untuk memenuhi kebutuhan gizi tubuh secara optimal. Tujuan dari pola makan sehat adalah untuk:",
        a: "Meningkatkan risiko penyakit",
        b: "Menjaga kesehatan, mendukung fungsi tubuh yang baik, dan mencegah penyakit",
        c: "Mengurangi asupan nutrisi",
        d: "Membuat tubuh tidak seimbang",
        correct: "b"
    },
    {
        level: 3,
        question: "Prinsip dasar pola makan sehat mencakup kecuali:",
        a: "Seimbang",
        b: "Bervariasi",
        c: "Berlebihan",
        d: "Moderasi",
        correct: "c"
    },
    {
        level: 3,
        question: "Kelompok pangan yang termasuk dalam pola makan sehat adalah:",
        a: "Lemak dan gula",
        b: "Karbohidrat dan protein",
        c: "Vitamin dan mineral",
        d: "Alkohol dan kafein",
        correct: "b"
    },
    {
        level: 3,
        question: "Tips praktis untuk membantu mengadopsi pola makan sehat termasuk kecuali:",
        a: "Perencanaan makanan",
        b: "Membaca label makanan",
        c: "Makan berlebihan",
        d: "Memasak sendiri",
        correct: "c"
    },
    {
        level: 3,
        question: "Beberapa kondisi kesehatan yang memerlukan penyesuaian pola makan termasuk:",
        a: "Gangguan tidur",
        b: "Kegemukan/Obesitas",
        c: "Kebutuhan gizi yang normal",
        d: "Hobi olahraga",
        correct: "b"
    }
];


let currentQuizIndex = 0;

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuizIndex];

    quiz.innerHTML = `
        <h2>Level ${currentQuizData.level}</h2>
        <p>${currentQuizData.question}</p>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer && answer.value === quizData[currentQuizIndex].correct) {
        currentQuizIndex++;
        result.innerHTML = '<span style="color:green">Jawaban benar!</span>';
        if (currentQuizIndex < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 3!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});
