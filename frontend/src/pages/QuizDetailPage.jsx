import React, { useState } from 'react';

const QuizDetailPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'Apa yang dimaksud dengan URL?',
      options: [
        { id: 'A', text: 'Uniform Resource Locator' },
        { id: 'B', text: 'Uniform Request Locator' },
        { id: 'C', text: 'Unified Resource Locator' },
        { id: 'D', text: 'Unified Request Locator' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 2,
      question: 'Apa singkatan dari TIK?',
      options: [
        { id: 'A', text: 'Teknologi Informasi dan Komunikasi' },
        { id: 'B', text: 'Teknologi Informatika dan Komunikasi' },
        { id: 'C', text: 'Teknik Informatika dan Komputer' },
        { id: 'D', text: 'Telekomunikasi dan Internet' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 3,
      question: 'Apa itu perangkat lunak?',
      options: [
        { id: 'A', text: 'Perangkat keras komputer' },
        { id: 'B', text: 'Program yang menjalankan komputer' },
        { id: 'C', text: 'Sistem operasi komputer' },
        { id: 'D', text: 'Perangkat yang digunakan untuk komunikasi' }
      ],
      correctAnswer: 'B',
    },
    {
      id: 4,
      question: 'Apa yang dimaksud dengan RAM?',
      options: [
        { id: 'A', text: 'Random Access Memory' },
        { id: 'B', text: 'Read Access Memory' },
        { id: 'C', text: 'Random Available Memory' },
        { id: 'D', text: 'Read Available Memory' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 5,
      question: 'Apa fungsi dari sistem operasi?',
      options: [
        { id: 'A', text: 'Mengontrol perangkat keras dan memberikan layanan kepada aplikasi' },
        { id: 'B', text: 'Mengontrol perangkat lunak dan memberikan layanan kepada pengguna' },
        { id: 'C', text: 'Mengontrol akses internet dan memberikan layanan kepada pengguna' },
        { id: 'D', text: 'Mengontrol jaringan dan memberikan layanan kepada aplikasi' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 6,
      question: 'Apa itu algoritma?',
      options: [
        { id: 'A', text: 'Sebuah bahasa pemrograman' },
        { id: 'B', text: 'Serangkaian instruksi untuk menyelesaikan tugas' },
        { id: 'C', text: 'Sebuah sistem operasi' },
        { id: 'D', text: 'Sebuah perangkat keras komputer' }
      ],
      correctAnswer: 'B',
    },
    {
      id: 7,
      question: 'Apa yang dimaksud dengan cloud computing?',
      options: [
        { id: 'A', text: 'Komputer yang berada di awan' },
        { id: 'B', text: 'Penyimpanan data secara lokal' },
        { id: 'C', text: 'Layanan komputasi yang disediakan melalui internet' },
        { id: 'D', text: 'Penggunaan komputer tanpa koneksi internet' }
      ],
      correctAnswer: 'C',
    },
    {
      id: 8,
      question: 'Apa itu jaringan komputer?',
      options: [
        { id: 'A', text: 'Kumpulan komputer yang terhubung bersama-sama' },
        { id: 'B', text: 'Komputer tunggal yang berfungsi sendiri' },
        { id: 'C', text: 'Jaringan internet global' },
        { id: 'D', text: 'Komputer yang tidak terhubung dengan jaringan' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 9,
      question: 'Apa yang dimaksud dengan database?',
      options: [
        { id: 'A', text: 'Kumpulan data yang tersimpan di dalam komputer' },
        { id: 'B', text: 'Alat untuk mengakses internet' },
        { id: 'C', text: 'Kumpulan program komputer' },
        { id: 'D', text: 'Pengaturan untuk mengelola printer' }
      ],
      correctAnswer: 'A',
    },
    {
      id: 10,
      question: 'Apa fungsi dari browser web?',
      options: [
        { id: 'A', text: 'Mengelola data pengguna' },
        { id: 'B', text: 'Menjalankan program komputer' },
        { id: 'C', text: 'Menampilkan konten web' },
        { id: 'D', text: 'Mengatur jaringan komputer' }
      ],
      correctAnswer: 'C',
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleAnswer = () => {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
      setScore(score + 10); // Tambah 10 poin jika jawaban benar
    }
  };

  return (
    <div>
      <h2>Quiz Detail</h2>
      <p>Question {currentQuestion + 1}: {questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map(option => (
          <li key={option.id}>
            <label>
              <input
                type="radio"
                name="option"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
              />
              {option.text}
            </label>
          </li>
        ))}
      </ul>
      <div>
        {currentQuestion > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentQuestion < questions.length - 1 && <button onClick={handleNext}>Next</button>}
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleAnswer}>Finish</button>
        )}
      </div>
      {currentQuestion === questions.length && (
        <div>
          <p>Score: {score}</p>
          <button onClick={() => setCurrentQuestion(0)}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizDetailPage;
