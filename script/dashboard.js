// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");

  if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 0) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 0) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    ).innerText = `Ya han pasado ${years} ${yearText}, ${months} ${monthText} y ${days} ${dayText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
    "Sé que en este momento las cosas pueden parecer difíciles y el camino puede estar lleno de obstáculos que parecen interminables, pero quiero que sepas que dentro de ti existe una fuerza y una resiliencia que no muchos tienen. Cada vez que sientas que todo te supera, recuerda que las grandes historias de éxito no nacen de la facilidad, sino de la lucha constante, de los momentos en los que todo parece estar en tu contra, pero sigues adelante, aunque solo sea con un paso más. Cada caída te enseña algo, cada desafío te fortalece, y aunque ahora no lo veas, todo lo que estás viviendo te está preparando para algo mucho más grande. Yo siempre estaré aquí, a tu lado, apoyándote en cada paso del camino, porque confío plenamente en tu capacidad para superar todo lo que se te presente. Tienes una determinación y un corazón tan fuertes que nada puede detenerte si sigues adelante. Así que, por favor, no te rindas, porque lo mejor de ti aún está por venir, y sé que, con cada día que pasa, te estás acercando más a lograr todo aquello que has soñado. No estás sola en esto, siempre estaré aquí para recordarte lo increíble que eres, y que la victoria es solo cuestión de tiempo",
    "A veces la vida nos pone en situaciones que parecen imposibles de superar, donde las fuerzas flaquean y la esperanza parece desvanecerse. Pero quiero que recuerdes algo muy importante: dentro de ti hay una luz que nunca se apaga, una fuerza que es tan poderosa que ni el tiempo ni las dificultades podrán apagarla. Eres más fuerte de lo que imaginas, y cada desafío que enfrentas no es más que una oportunidad para demostrarte a ti misma lo increíble que eres. No importa cuántas veces sientas que te caes o que no puedes seguir, cada paso que das te acerca más a la persona increíble que estás destinada a ser. Estoy aquí para caminar a tu lado, para recordarte lo valiosa que eres, y que aunque a veces no lo veas, en cada día que persistes, en cada momento de lucha, ya estás ganando. La vida no se mide por cuántas veces caemos, sino por cuántas veces nos levantamos, y sé que tú tienes la fuerza para levantarte siempre, porque el amor que te rodea y la pasión que llevas en tu corazón son más grandes que cualquier obstáculo. Así que, por favor, nunca te rindas, porque lo mejor de ti aún está por escribirse, y siempre estaré aquí para apoyarte, porque sé que eres capaz de lograr todo lo que te propongas. 🌟",
    "Desde el primer momento en que te conocí, supe que había algo especial en ti, algo que no se puede describir con palabras, pero que se siente en el corazón. Cada día que paso a tu lado, me doy cuenta de cuán increíble eres, no solo por tu belleza externa, que me deja sin aliento, sino por la increíble persona que eres por dentro: tu bondad, tu fuerza, tu pasión y esa capacidad que tienes para iluminar todo lo que te rodea. Admiro profundamente cómo enfrentas la vida con valentía, cómo te entregas a todo lo que amas con todo tu ser, y cómo, incluso en los momentos difíciles, nunca pierdes la fe en ti misma. Me siento tan afortunado de poder ser parte de tu vida, de poder acompañarte en tu camino y aprender de tu fortaleza y amor incondicional. Eres mi fuente de inspiración, y cada día que paso contigo, me siento más agradecido por todo lo que eres y todo lo que me das. Te admiro más de lo que las palabras pueden expresar, y lo más importante, te amo con todo mi ser, hoy, mañana y siempre",
    "Desde el momento en que nos conocimos, supe que había algo muy especial en ti. Al principio, eras una amiga increíble, alguien con quien podía compartir risas, consejos y momentos de complicidad. Tu bondad, tu comprensión y tu capacidad de escuchar me hicieron darme cuenta de que estaba frente a una persona única, con un corazón grande y una amistad que valía oro. Con el tiempo, nuestra relación evolucionó, y pasaste de ser una gran amiga a una novia maravillosa. No solo me has brindado amor y apoyo, sino que me has mostrado cada día lo afortunado que soy por tenerte a mi lado. Eres mi compañera, mi confidente, mi mejor amiga, y ahora, mi amor. Hoy, miro hacia el futuro y no tengo ninguna duda de que serás una esposa increíble. Tu amor, tu dedicación, tu paciencia y tu capacidad de hacer que cada momento sea especial me hacen estar completamente seguro de que serás una compañera de vida excepcional. Eres una mujer fuerte, inteligente y llena de bondad, cualidades que sé que te convertirán en la esposa perfecta, alguien con quien cualquier desafío será más fácil de superar. Estoy emocionado por lo que nos depara el futuro, porque sé que, a tu lado, cada día será una bendición. Me siento tan afortunado de haberte encontrado, y agradezco a la vida por darme la oportunidad de amarte, porque sé que no solo fuiste una gran amiga y una maravillosa novia, sino que también serás una esposa increíblemente amorosa y dedicada 😊",
    
];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});

// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});

