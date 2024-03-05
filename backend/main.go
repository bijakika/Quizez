// main.go

package main

import (
	"Quizez/backend/controllers"
	"log"
	"net/http"
)

func main() {
	// Membuat router baru
	http.HandleFunc("/api/register", controllers.Register)
	http.HandleFunc("/api/login", controllers.Login)
	http.HandleFunc("/api/quizzes", controllers.GetQuizzes)

	// Mengaktifkan server HTTP
	log.Println("Server started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
