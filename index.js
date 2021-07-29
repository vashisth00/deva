function getParameters() {
  let urlString = window.location.href;
  let paramString = urlString.split(".html")[1];
  let params_arr = paramString.split("&");
  for (let i = 0; i < params_arr.length; i++) {
    let pair = params_arr[i].split("=");
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
    //   document.getElementById("demo").innerHTML = pair[1];
    if (pair[0] == "light_mode=" || pair[1] == "1") {
      document.getElementById("demo").className = "white-mode";
      document.getElementById("light-image1").src =
        "https://vidzee.s3.ap-south-1.amazonaws.com/data/content/html/test/assets/Festivals/lanternSvgrepoCom-dark.png";
document.getElementsByClassName("light-image1").src =
        "https://vidzee.s3.ap-south-1.amazonaws.com/data/content/html/test/assets/Festivals/lanternSvgrepoCom-dark.png";
      document.getElementById("light-image2").src =
        "https://vidzee.s3.ap-south-1.amazonaws.com/data/content/html/test/assets/Thumbs+up/invalidName-dark.png";
    } else if (pair[1] == "0") {
      document.getElementById("demo").className = "dark";

      document.getElementById("light-image1").src =
        "https://vidzee.s3.ap-south-1.amazonaws.com/data/content/html/test/assets/Festivals/lanternSvgrepoCom.png";
      document.getElementById("light-image2").src =
        "https://vidzee.s3.ap-south-1.amazonaws.com/data/content/html/test/assets/Thumbs+up/invalidName.png";
    }
  }
}
