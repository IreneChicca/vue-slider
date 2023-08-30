// creo l'array che contiene tutte le informazioni dei film

const { createApp } = Vue;

createApp({
  data() {
    return {
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],

      // creo una chiave che rappresenterà l'img visualizzata sullo slider
      activeImg: 0,
      autoplay: false,
    };
  },

  // creo due metodi che regolamentano l'aumento e il decremento dell'indice dell'img visualizzata
  methods: {
    goNext() {
      // aggiungo i controlli

      if (this.activeImg < this.slides.length - 1) {
        this.activeImg++;
      } else {
        this.activeImg = 0;
      }
    },
    goPrev() {
      if (this.activeImg > 0) {
        this.activeImg--;
      } else {
        this.activeImg = this.slides.length - 1;
      }
    },

    // aggiungo una funzione che in base alla thumb cliccata cambi anche l'immagine grande visualizzata
    clickImg(index) {
      console.log(this.activeImg);
      this.activeImg = index;
    },

    // creo una funzione che al completamento del caricamento oggetto vue, setta un interval di 3 secondi e lancia la funzione go next che skippa la slide visualizzata

    setAutoplay() {
      this.autoplay = setInterval(() => {
        this.goNext();
      }, 1000);
    },

    // creo una funzione che clear l'interval dell'autoplay
    stopAutoplay() {
      if (this.autoplay) {
        clearInterval(this.autoplay);
        this.autoplay = false;
      }
    },
  },

  created() {
    this.setAutoplay();
  },
}).mount("#app");
