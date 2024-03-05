// models/question.go

package models

import (
	"database/sql"
)

// Question adalah struktur data untuk pertanyaan
type Question struct {
	ID            int    `json:"id"`
	QuizID        int    `json:"quiz_id"`
	QuestionText  string `json:"question_text"`
	Options       string `json:"options"` // Opsi jawaban dipisahkan oleh koma
	CorrectAnswer int    `json:"correct_answer"`
}

// GetQuestionsByQuizID mengembalikan daftar pertanyaan berdasarkan ID quiz
func GetQuestionsByQuizID(quizID int) ([]Question, error) {
	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// Lakukan query untuk mendapatkan pertanyaan berdasarkan ID quiz
	rows, err := db.Query("SELECT * FROM pertanyaan WHERE id_quiz = ?", quizID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	// Iterasi melalui hasil query dan membangun slice Question
	questions := []Question{}
	for rows.Next() {
		var question Question
		err := rows.Scan(&question.ID, &question.QuizID, &question.QuestionText, &question.Options, &question.CorrectAnswer)
		if err != nil {
			return nil, err
		}
		questions = append(questions, question)
	}

	// Periksa apakah ada kesalahan selama iterasi
	if err := rows.Err(); err != nil {
		return nil, err
	}

	return questions, nil
}

// CreateQuestion membuat pertanyaan baru dalam database
func CreateQuestion(question Question) error {
	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return err
	}
	defer db.Close()

	// Eksekusi pernyataan SQL untuk menyimpan pertanyaan baru
	_, err = db.Exec("INSERT INTO pertanyaan (id_quiz, pertanyaan, opsi_jawaban, jawaban_benar) VALUES (?, ?, ?, ?)",
		question.QuizID, question.QuestionText, question.Options, question.CorrectAnswer)
	if err != nil {
		return err
	}

	return nil
}
