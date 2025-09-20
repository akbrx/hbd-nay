document.addEventListener('DOMContentLoaded', () => {
    // Daftar Pertanyaan dan Jawaban
    const quizzes = [
        {
            question: "Siapa orang paling ganteng?",
            answer: "akbar"
        },
        {
            question: "Siapa orang yang paling kamu sayangi?",
            answer: "akbar"
        },
        {
            question: "Siapa orang yang sayang banget sama kamu walaupun tidak kelihatan sayangnya?",
            answer: "akbar"
        }
    ];

    let currentQuizIndex = 0;

    // Ambil elemen dari HTML
    const quizContainer = document.getElementById('quiz-container');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackText = document.getElementById('feedback-text');
    const winScreen = document.getElementById('win-screen');

    function loadQuiz() {
        if (currentQuizIndex < quizzes.length) {
            questionText.innerText = quizzes[currentQuizIndex].question;
            answerInput.value = '';
            feedbackText.innerText = '';
            answerInput.focus();
        } else {
            showWinScreen();
        }
    }

    function handleSubmit() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = quizzes[currentQuizIndex].answer;

        if (!userAnswer) return; // Jangan lakukan apa-apa jika input kosong

        if (userAnswer === correctAnswer) {
            // Jawaban Benar
            feedbackText.innerText = "Benar! ❤️";
            feedbackText.className = 'feedback-correct';
            currentQuizIndex++;
            
            setTimeout(() => {
                loadQuiz();
            }, 1500); // Tunggu 1.5 detik sebelum ke pertanyaan berikutnya
        } else {
            // Jawaban Salah
            feedbackText.innerText = "Salah! Coba lagi dong...";
            feedbackText.className = 'feedback-incorrect';
            answerInput.classList.add('shake');
            
            setTimeout(() => {
                answerInput.classList.remove('shake');
                feedbackText.innerText = '';
            }, 1000); // Hapus pesan salah setelah 1 detik
        }
    }

    function showWinScreen() {
        quizContainer.classList.add('hidden');
        winScreen.classList.remove('hidden');
        
        // Efek confetti saat menang!
        confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    // Event Listeners
    submitBtn.addEventListener('click', handleSubmit);
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    });

    // Mulai kuis saat halaman dimuat
    loadQuiz();
});