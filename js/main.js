(() => {

    //console.log("IIFE Fired");
    //////////////////////////////////variables

    //SCROLL ANIMATION STUFF
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 200; //how many still frames do we have?
    const images = []; //array to hold all of our images

    //object literal, that has a property of frame to hold the current frame
    const buds = {
      frame: 0
    }

    //MODEL VIEWER STUFF
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    //HAMB MENU
    let button = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    //SCROLL ANIMATION
    //run a for loop to populate our images array
    for(let i=0; i<frameCount; i++) {
      const img = new Image();
      img.src = `images/animation/redux${(i+1).toString().padStart(3, '0')}.png`;
      images.push(img);
    }

    //Greensock handling
    gsap.to(buds, {
      frame: 199,
      snap: "frame",
      scrollTrigger: {
          trigger: "#scr-animation",
          pin: true, //make the animation stay in place
          scrub: 1, //delay when it scrolls
          // markers: true,
          start: "top top"
      },
      onUpdate: render
    })

    //Array with content for the earbuds hotspots
  const infoBoxes = [
    {
      title: "Sound Processor",
      text: "The heart of your audio experience, the Sound Processor in these earbuds is a powerhouse of technology. It is responsible for enhancing and optimizing sound quality to deliver rich, clear, and immersive audio.",
      image: "ri-cpu-line",
    },

    {
        title: "High capacity battery",
        text: "These earbuds are equipped with a high-capacity battery that ensures an extended and uninterrupted listening experience.",
        image: "ri-battery-charge-fill",
    },

    {
        title: "Noise Reduction System",
        text: "Elevate your audio experience to a new level with the built-in Noise Reduction System. This cutting-edge technology actively minimizes or eliminates unwanted background noise, providing you with an undistracted and immersive audio environment.",
        image: "ri-surround-sound-line",
    },

    {
        title: "Charging spots",
        text: "These earbuds come with strategically placed and conveniently accessible charging spots designed to simplify the recharging process.",
        image: "ri-wireless-charging-line",
    }
  ]
  
    //functions

    //HAMB MENU
    function hamburgerMenu() {
      burgerCon.classList.toggle("slide-toggle");
      button.classList.toggle("expanded");
    };
    
    //MODEL VIEWER STUFF
    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
  
        //IMAGE ICON
        //Loading icons using classes from the icon library Remix Icon (I'll use the same library for my portfolio)
        //The class ri-3x increases the icon size by 3x
        //the infobox.image is loadded from the array
        const hotspotImg = document.createElement("i");
        hotspotImg.classList.add("ri-3x", infoBox.image);

        //HOTSPOT TITLE
        const hotspotName = document.createElement("h3");
        hotspotName.textContent = infoBox.title;

        //HOTSPOT TEXT
        const hotspotDesc = document.createElement("p");
        hotspotDesc.textContent = infoBox.text;

        selected.appendChild(hotspotImg);
        selected.appendChild(hotspotName);
        selected.appendChild(hotspotDesc);
      });
    }
  
    loadInfo();
  
  
    function showInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }

    //RENDER ANIMATION

    function render () {
      //console.log(buds.frame);
      //console.log(images[buds.frame]);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);

    }
  
    //Event Listeners

    //HAMB MENU
    button.addEventListener("click", hamburgerMenu, false);	

    //RENDER
    images[0].addEventListener("onload", render);

    //MODEL VIEWER STUFF
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });

  })();