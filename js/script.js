var vue = new Vue ({
  el: '#root',
  data: {
    counter: 0,
    immagini: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ]
  },
  methods: {
    nextImg(){
      if (this.counter == this.immagini.length-1) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    },
    prevImg(){
      if (this.counter == 0) {
        this.counter = this.immagini.length-1;
      } else {
        this.counter--;
      }
    },
    pallinoAttivo(i){
      this.counter = i;
    }
  },
  mounted() {
  	addEventListener("keydown", e => {
  		if (e.keyCode == 37) {
        this.prevImg();
      } else if (e.keyCode == 39) {
        this.nextImg();
      }
	   });
  }
});
