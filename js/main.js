(() => {

    //console.log("IIFE Fired");
    //////////////////////////////////variables

    //MODEL VIEWER STUFF
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    //HAMB MENU
    let button = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

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
  
    //Event Listeners

    //HAMB MENU
    button.addEventListener("click", hamburgerMenu, false);	

    //MODEL VIEWER STUFF
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });

  })();