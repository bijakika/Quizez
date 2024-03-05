// controllers/questionController.go

package controllers

import (
	"Quizez/backend/models"
	"encoding/json"
	"net/http"
	"strconv"
)

// Handler untuk mendapatkan daftar pertanyaan berdasarkan ID quiz
func GetQuestions(w http.ResponseWriter, r *http.Request) {
	// Mendapatkan ID quiz dari parameter URL
	// Misalnya, /api/questions?id_quiz=1
	queryValues := r.URL.Query()
	quizIDStr := queryValues.Get("id_quiz")

	// Konversi ID quiz menjadi tipe data integer
	quizID, err := strconv.Atoi(quizIDStr)
	if err != nil {
		http.Error(w, "Invalid quiz ID", http.StatusBadRequest)
		return
	}

	// Mendapatkan daftar pertanyaan dari database berdasarkan ID quiz
	questions, err := models.GetQuestionsByQuizID(quizID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Kirim data pertanyaan sebagai respons JSON
	json.NewEncoder(w).Encode(questions)
}

// Handler untuk membuat pertanyaan baru
func CreateQuestion(w http.ResponseWriter, r *http.Request) {
	// Dekode data JSON yang diterima dari body request
	var newQuestion models.Question
	err := json.NewDecoder(r.Body).Decode(&newQuestion)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Simpan pertanyaan ke dalam database
	err = models.CreateQuestion(newQuestion)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Kirim respons berhasil
	w.WriteHeader(http.StatusCreated)
}
