// models/quiz.go

package models

import (
	"database/sql"
	"time"
)

// Quiz adalah struktur data untuk kuis
type Quiz struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	StartTime   time.Time `json:"start_time"`
	EndTime     time.Time `json:"end_time"`
}

// GetAllQuizzes mengembalikan daftar semua kuis dari database
func GetAllQuizzes() ([]Quiz, error) {
	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// Lakukan query untuk mendapatkan semua kuis
	rows, err := db.Query("SELECT * FROM quiz")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	// Iterasi melalui hasil query dan membangun slice Quiz
	quizzes := []Quiz{}
	for rows.Next() {
		var quiz Quiz
		err := rows.Scan(&quiz.ID, &quiz.Title, &quiz.Description, &quiz.StartTime, &quiz.EndTime)
		if err != nil {
			return nil, err
		}
		quizzes = append(quizzes, quiz)
	}

	// Periksa apakah ada kesalahan selama iterasi
	if err := rows.Err(); err != nil {
		return nil, err
	}

	return quizzes, nil
}

// CreateQuiz membuat kuis baru dalam database
func CreateQuiz(quiz Quiz) error {
	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return err
	}
	defer db.Close()

	// Eksekusi pernyataan SQL untuk menyimpan kuis baru
	_, err = db.Exec("INSERT INTO quiz (title, description, start_time, end_time) VALUES (?, ?, ?, ?)",
		quiz.Title, quiz.Description, quiz.StartTime, quiz.EndTime)
	if err != nil {
		return err
	}

	return nil
}
