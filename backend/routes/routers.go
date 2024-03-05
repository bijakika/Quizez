// routes.go

package main

import (
	"Quizez/backend/controllers"
	"net/http"
)

func SetupRoutes() {
	http.HandleFunc("/api/register", controllers.Register)
	http.HandleFunc("/api/login", controllers.Login)
	http.HandleFunc("/api/quizzes", controllers.GetQuizzes)
}
