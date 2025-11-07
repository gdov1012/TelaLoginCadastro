
 if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
      }

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDTymzt9Ty_pe9gmqx_HmBZ3oLjLQ5o4wk",
    authDomain: "atividadepam-67ec6.firebaseapp.com",
    projectId: "atividadepam-67ec6",
    storageBucket: "atividadepam-67ec6.firebasestorage.app",
    messagingSenderId: "46163802879",
    appId: "1:46163802879:web:e5f89245744972fd586aca",
    measurementId: "G-J98SFKM1KC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  window.cadastrar = function() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Usuário cadastrado com sucesso!"))
    .catch(e => alert("Erro: " + e.message));
}

window.login = function() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Login realizado com sucesso!"))
    .catch(e => alert("Erro: " + e.message));
}