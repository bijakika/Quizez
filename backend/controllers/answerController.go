package controllers

import (
	"Quizez/backend/models"
	"encoding/json"
	"log" // Import package log untuk tujuan debugging
	"net/http"
)

// Handler untuk menyimpan jawaban
func SaveAnswer(w http.ResponseWriter, r *http.Request) {
	var newAnswer models.Answer

	// Dekode data JSON dari body request
	err := json.NewDecoder(r.Body).Decode(&newAnswer)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Simpan jawaban ke dalam database
	err = models.SaveAnswer(newAnswer)
	if err != nil {
		log.Printf("Error saving answer: %v", err) // Log pesan error
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	// Kirim respons berhasil
	w.WriteHeader(http.StatusCreated)
}
