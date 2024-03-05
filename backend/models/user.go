// models/user.go

package models

import (
	"database/sql"
)

// User represents a user
type User struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}

// GetUserByEmailAndPassword mengembalikan user berdasarkan email dan password
func GetUserByEmailAndPassword(email, password string) (*User, error) {
	var user User

	// Buka koneksi ke database
	db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/quizdb")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	// Lakukan query untuk mencari user berdasarkan email dan password
	err = db.QueryRow("SELECT id, name, email, password, role FROM user WHERE email = ? AND password = ?", email, password).
		Scan(&user.ID, &user.Name, &user.Email, &user.Password, &user.Role)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil // User not found or error occurred
		}
		return nil, err // Error occurred

	}
	return &user, nil
}
