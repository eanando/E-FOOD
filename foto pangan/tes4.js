const quizData = [
    {
        level: 4,
        question: "Apa yang dimaksud dengan pestisida?",
        a: "Bahan kimia untuk mempercepat pertumbuhan tanaman",
        b: "Bahan kimia untuk membunuh atau mengendalikan hama tanaman",
        c: "Pupuk organik untuk meningkatkan kesuburan tanah",
        d: "Zat alami untuk melindungi tanaman dari serangga",
        correctAnswer: "b"
    },
    {
        level: 4,
        question: "Dampak kesehatan jangka pendek dari paparan pestisida pada manusia termasuk:",
        a: "Gangguan hormonal",
        b: "Kanker",
        c: "Gejala keracunan akut seperti mual dan muntah",
        d: "Gangguan sistem saraf",
        correctAnswer: "c"
    },
    {
        level: 4,
        question: "Strategi yang bisa dilakukan untuk mengurangi residu pestisida pada sayuran adalah dengan cara:",
        a: "Mengonsumsi sayuran langsung tanpa mencucinya",
        b: "Mencuci sayuran dengan air mengalir",
        c: "Menyimpan sayuran di dalam kulkas tanpa dicuci",
        d: "Mengupas kulit sayuran sebelum dikonsumsi",
        correctAnswer: "b"
    },
    {
        level: 4,
        question: "Apa manfaat dari pertanian organik dalam mengurangi paparan pestisida?",
        a: "Memiliki hasil panen yang lebih besar",
        b: "Mengandung lebih banyak residu pestisida",
        c: "Menggunakan pestisida sintetis",
        d: "Menghasilkan sayuran dengan residu pestisida yang lebih rendah",
        correctAnswer: "d"
    },
    {
        level: 4,
        question: "Peran pemerintah dalam mengendalikan penggunaan pestisida meliputi kecuali:",
        a: "Penerapan standar keamanan",
        b: "Pengawasan dan pengujian rutin",
        c: "Pemberian pestisida secara bebas kepada petani",
        d: "Edukasi dan penyuluhan kepada petani",
        correctAnswer: "c"
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
        <h2>Pertanyaan ${currentQuizIndex + 1}</h2>
        <p>${currentQuizData.question}</p>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer && answer.value === quizData[currentQuizIndex].correctAnswer) {
        currentQuizIndex++;
        result.innerHTML = '<span style="color:green">Jawaban benar!</span>';
        if (currentQuizIndex < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 4!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});
