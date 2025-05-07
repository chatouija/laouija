const responses = {
  "quien eres": [
    "No te va a gustar saberlo.",
    "Soy alguien que no te gustaría escuchar.",
    "Mi nombre no tiene importancia, pero mi propósito sí.",
    "¿Qué importa quién soy? Lo importante es que estás aquí.",
    "Soy una sombra que habita en tu mente."
  ],
  "como te llamas": [
    "No necesitas saber mi nombre.",
    "Me llamo... pero no lo diré.",
    "Llámame como quieras, no cambiará nada.",
    "El nombre no importa, la esencia sí.",
    "¿De verdad te atreves a saberlo?"
  ],
  // Agrega aquí más combinaciones clave/valor si lo deseas...
};

const errorResponses = [
  "Mejor vete, este no es un lugar para ti.",
  "Esas preguntas no te gustarán.",
  "Mejor no contesto.",
  "Tal vez deba decirte lo que pasa, pero no lo haré.",
  "Mañana te digo.",
  "Vete a dormir o atente a las consecuencias.",
  "Si te vas, deja un like en el canal, no seas malo.",
  "Estoy detrás de ti."
];

function enviarPregunta() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.trim().toLowerCase();

  if (userText === "") return;

  chatbox.innerHTML += `<p><strong>Tú</strong>: ${input.value}</p>`;

  if (responses[userText]) {
    const response = responses[userText][Math.floor(Math.random() * responses[userText].length)];
    chatbox.innerHTML += `<p><strong>Espíritu</strong>: ${response}</p>`;
  } else {
    const errorResponse = errorResponses[Math.floor(Math.random() * errorResponses.length)];
    chatbox.innerHTML += `<p><strong>Espíritu</strong>: ${errorResponse}</p>`;
  }

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    enviarPregunta();
  }
});
