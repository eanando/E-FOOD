const quizData = [
    {
        level: 2,
        question: "Apa jenis sampah yang paling banyak dihasilkan di Sulawesi Tenggara?",
        a: "Sampah plastik",
        b: "Sampah makanan",
        c: "Sampah kertas",
        d: "Sampah logam",
        correct: "b"
    },
    {
        level: 2,
        question: "Apa yang bisa dilakukan dengan sisa makanan yang masih layak konsumsi?",
        a: "Membuangnya",
        b: "Memberikannya kepada yang membutuhkan",
        c: "Membiarkannya membusuk",
        d: "Membakarnya",
        correct: "b"
    },
    {
        level: 2,
        question: "Apa dampak dari sampah makanan yang tidak dikelola dengan baik?",
        a: "Pencemaran udara",
        b: "Pencemaran tanah",
        c: "Pencemaran air",
        d: "Semua jawaban benar",
        correct: "d"
    },
    {
        level: 2,
        question: "Bagaimana cara terbaik mengurangi sampah makanan?",
        a: "Menggunakan kembali sisa makanan",
        b: "Membuang semua sisa makanan",
        c: "Membakar sisa makanan",
        d: "Membiarkan sisa makanan membusuk",
        correct: "a"
    },
    {
        level: 2,
        question: "Apa yang bisa dilakukan dengan sisa makanan yang masih layak konsumsi?",
        a: "Membuangnya",
        b: "Memberikannya kepada yang membutuhkan",
        c: "Membiarkannya membusuk",
        d: "Membakarnya",
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
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 2!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});
