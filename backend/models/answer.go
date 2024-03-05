// models/answer.go

package models

import (
	"database/sql"
)

// Answer represents a user's answer to a question
type Answer struct {
	ID                int `json:"id"`
	UserID            int `json:"user_id"`
	QuizID            int `json:"quiz_id"`
	QuestionID        int `json:"question_id"`
	ParticipantAnswer int `json:"participant_answer"`
	Score             int `json:"score"`
}

// SaveAnswer menyimpan jawaban peserta ke dalam database
func SaveAnswer(answer Answer) error {
	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return err
	}
	defer db.Close()

	// Eksekusi pernyataan SQL untuk menyimpan jawaban peserta
	_, err = db.Exec("INSERT INTO jawaban_peserta (id_user, id_quiz, id_pertanyaan, jawaban_peserta, skor) VALUES (?, ?, ?, ?, ?)",
		answer.UserID, answer.QuizID, answer.QuestionID, answer.ParticipantAnswer, answer.Score)
	if err != nil {
		return err
	}

	return nil
}
