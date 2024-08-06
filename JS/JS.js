window.onload = function() {
  const ikoner = Array.from(document.querySelectorAll('.ikon'));
  console.log('Fant', ikoner.length, 'ikon-elementer');

  // Legg til en event listener til scroll-eventet
  window.addEventListener('scroll', () => {
    // Få posisjonen til vinduet
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Beregn 20% av skjermen
    const threshold = windowHeight * 0.3;

    // Animere ikonene inn og ut
    ikoner.forEach((ikon) => {
      const ikonPosition = ikon.getBoundingClientRect().top;
      if (scrollPosition > threshold && scrollPosition + windowHeight > ikonPosition) {
        ikon.classList.add('animate-in');
      } else if (scrollPosition < threshold) {
        ikon.classList.remove('animate-in');
      }
    });
  });
};


// Spill av videoen automatisk når siden lastes
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");
    video.play();
});



// Reklame-seksjon

document.addEventListener('DOMContentLoaded', () => {
  const reklame = document.getElementById('reklame');

  if (reklame) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const reklameTop = reklame.offsetTop;
      const reklameHeight = reklame.offsetHeight;

      // Juster denne linjen for å få reklamen til å dukke opp tidligere
      if (scrollPosition >= reklameTop - window.innerHeight / 1.4 && scrollPosition <= reklameTop + reklameHeight) {
        reklame.style.opacity = 1;
        reklame.style.transform = 'translateX(0) rotate(0deg) scale(1)';
      } else {
        reklame.style.opacity = 0;
        reklame.style.transform = 'translateX(100%) rotate(90deg) scale(0.5)';
      }
    });
  } else {
    console.log('Element #reklame not found');
  }
});




// omOss

document.addEventListener('DOMContentLoaded', () => {
  const omOssEl = document.getElementById('omOss');

  if (reklame) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const omOssElTop = omOssEl.offsetTop;
      const omOssElHeight = omOssEl.offsetHeight;

      // Juster denne linjen for å få reklamen til å dukke opp tidligere
      if (scrollPosition >= omOssElTop - window.innerHeight / 1.4 && scrollPosition <= omOssElTop + omOssElHeight) {
        omOssEl.style.opacity = 1;
      } else {
        omOssEl.style.opacity = 0;
      }
    });
  } else {
    console.log('Element #omOssEl not found');
  }
});




// Tilbud

document.addEventListener('DOMContentLoaded', () => {
  const tilbudEl = document.getElementById('tilbud');

  if (reklame) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const tilbudElTop = tilbudEl.offsetTop;
      const tilbudElHeight = tilbudEl.offsetHeight;

      // Juster denne linjen for å få reklamen til å dukke opp tidligere
      if (scrollPosition >= tilbudElTop - window.innerHeight / 1.4 && scrollPosition <= tilbudElTop + tilbudElHeight) {
        tilbudEl.style.opacity = 1;
        tilbudEl.style.transform = 'scale(1)';
      } else {
        tilbudEl.style.opacity = 0;
        tilbudEl.style.transform = 'scale(0.01)';
      }
    });
  } else {
    console.log('Element #tilbudEl not found');
  }
});




// Automatisk skrolling
document.addEventListener('DOMContentLoaded', () => {
    
// Få tak i alle målene
let hjemMål = document.getElementById("en");
let våreMål = document.getElementById("to");
let omOssMål = document.getElementById("tre");
let tilbudMål = document.getElementById("fire");
let kontaktOssMål = document.getElementById("fem");

// Få tak i alle knappene
let hjemEl = document.getElementById("hjem1");
let våreMålEl = document.getElementById("våreMål1");
let omOssEl = document.getElementById("omOss1");
let tilbudEl = document.getElementById("tilbud1");
let kontaktOssEl = document.getElementById("kontaktOss1");
let omOssKontaktEl = document.getElementById("omOssKontakt");
let knapp1El = document.getElementById("knapp1");
let knapp2El = document.getElementById("knapp2");

// Legg til lyttere på knappene
hjemEl.addEventListener("click", flyttHjem);
våreMålEl.addEventListener("click", flyttVåreMål);
omOssEl.addEventListener("click", flyttOmOss);
tilbudEl.addEventListener("click", flyttTilbud);
kontaktOssEl.addEventListener("click", flyttKontaktOss);
omOssKontaktEl.addEventListener("click", flyttKontaktOss);
knapp1El.addEventListener("click", flyttOmOss);
knapp2El.addEventListener("click", flyttKontaktOss);

// Flytt-funksjoner
function flyttHjem(){
    hjemMål.scrollIntoView({ behavior: 'smooth' });
}

function flyttVåreMål(){
    våreMål.scrollIntoView({ behavior: 'smooth' });
}

function flyttOmOss(){
    omOssMål.scrollIntoView({ behavior: 'smooth' });
}

function flyttTilbud(){
    tilbudMål.scrollIntoView({ behavior: 'smooth' });
}

function flyttKontaktOss(){
    kontaktOssMål.scrollIntoView({ behavior: 'smooth' });
}

});
