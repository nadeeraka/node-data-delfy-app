if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    //console.log(position.coords.latitude);
    //console.log(position.coords.longitude);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const btn = document.getElementsByClassName("btn");

    // btn.addEventListener("click", () => {
    //   alert("click");
    //   document.getElementById("lat").textContent = lat;
    //   document.getElementById("lon").textContent = lon;
    // });
    document.getElementById("lat").textContent = lat;
    document.getElementById("lon").textContent = lon;

    console.log(position);
  });
} else {
  alert("use google chrome");
}
