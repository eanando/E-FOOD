const quizData = [
    {
        level: 1,
        question: "Apa sumber energi utama yang dianjurkan dalam Isi Piringku?",
        a: "Protein",
        b: "Lemak",
        c: "Karbohidrat",
        d: "Vitamin",
        correct: "c"
    },
    {
        level: 1,
        question: "Manakah dari berikut ini yang merupakan sumber protein nabati?",
        a: "Daging",
        b: "Ikan",
        c: "Tahu",
        d: "Telur",
        correct: "c"
    },
    {
        level: 1,
        question: "Mengapa sayuran penting dalam gizi seimbang?",
        a: "Kaya akan serat, vitamin, dan mineral",
        b: "Sumber utama energi",
        c: "Penting untuk pertumbuhan tulang",
        d: "Mengandung lemak sehat",
        correct: "a"
    },
    {
        level: 1,
        question: "Apa manfaat utama dari buah-buahan?",
        a: "Sumber energi",
        b: "Sumber vitamin, mineral, dan serat",
        c: "Sumber protein",
        d: "Sumber lemak",
        correct: "b"
    },
    {
        level: 1,
        question: "Apa fungsi utama susu atau produk olahannya dalam diet?",
        a: "Sumber energi",
        b: "Sumber lemak",
        c: "Sumber kalsium dan protein",
        d: "Sumber vitamin",
        correct: "c"
    },
    {
        level: 1,
        question: "Berapa porsi sayuran yang dianjurkan per hari?",
        a: "1 porsi",
        b: "2 porsi",
        c: "3 porsi",
        d: "4 porsi",
        correct: "c"
    },
    {
        level: 1,
        question: "Mengapa penting untuk mengonsumsi berbagai jenis makanan?",
        a: "Untuk mengikuti tren",
        b: "Untuk mendapatkan semua nutrisi",
        c: "Untuk menambah berat badan",
        d: "Untuk menyenangkan lidah",
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
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 1!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});

