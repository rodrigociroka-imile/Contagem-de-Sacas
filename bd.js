// BD.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getDatabase, ref, push, update, onValue, remove, set, get } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuKRaFDaViCQj72lQgLH7HDFUxOk43fss",
  authDomain: "insumo-16085.firebaseapp.com",
  projectId: "insumo-16085",
  storageBucket: "insumo-16085.firebasestorage.app",
  messagingSenderId: "706106422021",
  appId: "1:706106422021:web:4e6b4fafda82104df93d6c",
  measurementId: "G-1Y7ZRBX658"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Função para enviar contagem ao Firebase
async function enviarContagem(tipo, unidades) {
  try {
    const contagemRef = ref(database, 'contagens');
    await push(contagemRef, {
      tipo,
      unidades,
      data: new Date().toISOString()
    });
    return true;
  } catch (e) {
    console.error('Erro ao enviar contagem:', e);
    return false;
  }
}

// Função para gerar QRCode (opcional, pode ser removida se não usada)
function gerarQRCode(elementId, texto) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerHTML = '';
    new window.QRCode(el, { text: texto, width: 100, height: 100 });
  }
}

// Exportar
export { database, ref, push, update, onValue, remove, set, get, enviarContagem, gerarQRCode };
