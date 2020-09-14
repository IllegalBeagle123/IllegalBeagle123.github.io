window.onload=function(){
  var input = document.getElementById("ip");

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });
}
var onetime = false;
async function hack() {
  if (onetime == false) {
    var ip = document.getElementById("ip").value;
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)){
      onetime = true;
      var console = document.getElementById("console");
      console.innerHTML += "sudo hack " + ip;
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Sending 256 packets to " + ip);
      var lost = 0;
      var newlost = 0;
      for (i = 1; i < 9; i++) {
        await new Promise(r => setTimeout(r, Math.random()*500));
        newlost = Math.floor(Math.random()*16);
        lost += newlost;
        print("Sent " + i*32 + " packets out of 256, " + newlost + " packets lost.");
      }
      print(256 - lost + " (" + Math.floor((256 - lost) / 2.56)  +"%) of 256 packets received.")
      print("Decoding Packets")
      for (i = 1; i < 8; i++) {
        await new Promise(r => setTimeout(r, Math.random()*1000));
        console.innerHTML += ".";
      }
      print("Breaching Firewall")
      for (i = 1; i < 8; i++) {
        await new Promise(r => setTimeout(r, Math.random()*1000));
        console.innerHTML += ".";
      }
      print("Attempting TCP override.")
      await new Promise(r => setTimeout(r, Math.random()*1000));
      print("Error: Connection Failed.")
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Attempting to decrypt VPN shield")
      for (i = 1; i < 8; i++) {
        await new Promise(r => setTimeout(r, Math.random()*1000));
        console.innerHTML += ".";
      }
      print("CRSF Token succesfully validated.")
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Initiating multithreaded SQL injection.")
      await new Promise(r => setTimeout(r, Math.random()*1000));
      print("SUCCESS: Access Granted.");
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Clearing security logs.");
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Backdooring the operating system.");
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Generating false key-value pairs");
      for (i = 1; i < 8; i++) {
        await new Promise(r => setTimeout(r, Math.random()*500));
        console.innerHTML += ".";
      }
      print("<br>root@" + ip +": ~$ ")
    }
    else{
      print("sudo hack " + ip);
      await new Promise(r => setTimeout(r, Math.random()*500));
      print("Error: Could not resolve hostname");
    }
  }
}

function print(msg) {
  var console = document.getElementById("console");
  console.innerHTML += "<br>" + msg;
  console.parentNode.scrollTop = console.parentNode.scrollHeight;
}