// authService.js

const login = async (email, password) => {
    try {
      // Lakukan panggilan API untuk login dan dapatkan token JWT
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data.token; // Mengembalikan token JWT dari respons API
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  export { login };
  