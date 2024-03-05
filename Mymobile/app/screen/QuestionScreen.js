import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';

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

  const QuestionScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }, [currentQuestionIndex]);
  
    const handleSelectAnswer = (optionId) => {
      setSelectedOption(optionId);
      if (optionId === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    };
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        // Navigate to result screen or perform any final actions
      }
    };
  
    return (
      <View>
        <Text>Question {currentQuestionIndex + 1}</Text>
        {currentQuestion && (
          <View>
            <Question question={currentQuestion.question} />
            {currentQuestion.options.map((option) => (
              <AnswerOption
                key={option.id}
                option={option.text}
                onSelectAnswer={() => handleSelectAnswer(option.id)}
                selected={selectedOption === option.id}
              />
            ))}
            <Button title="Next" onPress={handleNextQuestion} disabled={!selectedOption} />
          </View>
        )}
        <Text>Score: {score}</Text>
      </View>
    );
  };
  
  export default QuestionScreen;