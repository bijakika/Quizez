// controllers/authController.go

package controllers

import (
	"encoding/json"
	"net/http"
)

type User struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}

var users []User // Simpan pengguna yang telah terdaftar secara sederhana

// Handler untuk registrasi pengguna
func Register(w http.ResponseWriter, r *http.Request) {
	var newUser User
	_ = json.NewDecoder(r.Body).Decode(&newUser)

	// Simulasi: Tambahkan pengguna baru ke dalam slice pengguna
	users = append(users, newUser)

	// Simulasi: Kirim respons berhasil
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newUser)
}

// Handler untuk login pengguna
func Login(w http.ResponseWriter, r *http.Request) {
	var loginUser User
	_ = json.NewDecoder(r.Body).Decode(&loginUser)

	// Simulasi: Verifikasi email dan password dengan pengguna yang telah terdaftar
	for _, user := range users {
		if user.Email == loginUser.Email && user.Password == loginUser.Password {
			// Simulasi: Kirim token JWT sebagai respons jika berhasil
			// Anda perlu mengimplementasikan logika pembuatan token JWT sesuai dengan paket yang Anda gunakan
			// Misalnya, menggunakan paket github.com/dgrijalva/jwt-go
			// Lihat dokumentasi paket tersebut untuk detail implementasi token JWT
			// Di sini, saya hanya mengirim respons berhasil sebagai contoh sederhana
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
			return
		}
	}

	// Simulasi: Kirim respons gagal jika email atau password tidak cocok
	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(map[string]string{"error": "Invalid email or password"})
}
