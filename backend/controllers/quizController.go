// controllers/quizController.go

package controllers

import (
	"encoding/json"
	"net/http"
	"time"
)

// Quiz struct definition
type Quiz struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	StartTime   time.Time `json:"start_time"`
	EndTime     time.Time `json:"end_time"`
}

// Handler untuk mendapatkan daftar quiz
func GetQuizzes(w http.ResponseWriter, r *http.Request) {
	// Implementasi logika untuk mendapatkan daftar quiz
	// Misalnya, mengambil data quiz dari database dan mengirimkannya sebagai respons JSON

	// Simulasi pengambilan data dari database
	quizzes := []Quiz{
		{ID: 1, Title: "Quiz 1", Description: "This is quiz 1", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 2", Description: "This is quiz 2", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 3, Title: "Quiz 3", Description: "This is quiz 3", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 4", Description: "This is quiz 4", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 5", Description: "This is quiz 5", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 6", Description: "This is quiz 6", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 7", Description: "This is quiz 7", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 8", Description: "This is quiz 8", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 9", Description: "This is quiz 9", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
		{ID: 2, Title: "Quiz 10", Description: "This is quiz 10", StartTime: time.Now(), EndTime: time.Now().Add(1 * time.Hour)},
	}

	// Kirim data quiz sebagai respons JSON
	json.NewEncoder(w).Encode(quizzes)
}
