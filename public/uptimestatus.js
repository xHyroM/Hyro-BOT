// client-side js
// run by the browser each time your view template is loaded


//const config = require("dotenv");

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

// Declares our bot,
// the disableEveryone prevents the client to ping @everyone
var apikey = "m784831136-dece66e3329ad38757dbde45"
var content = {
  api_key: apikey,
  all_time_uptime_ratio: 1,
  response_times: 1,
  logs: 1,
  log_types: "1"
};

var logcontent = {
  api_key: apikey,
  logs: 1
};

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

fetch("https://api.uptimerobot.com/v2/getMonitors", {
  method: "POST",
  body: JSON.stringify(content),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(data => {
    // all our code lies here:

    // log the output
    console.log(data);

    // get monitor length
    var monLen = data.monitors.length;
    console.log(monLen);

    // where the real magic happens
    for (let i = 0; i < monLen; i++) {
      let main = document.getElementById("main");

      console.log(data.monitors[i].friendly_name);

      var div = document.getElementsByClassName("monitor")[0];

      var p = document.getElementsByClassName("name")[0];
      let name = data.monitors[i].friendly_name
    //  p.innerText = decodeHtml(name);

      var url = document.getElementsByClassName("url")[0];
     // url.innerText = data.monitors[i].url;
    //  url.setAttribute("href", data.monitors[i].url);

      var statuspe = document.getElementsByClassName("statusuptime")[0];
      let statusuptime = data.monitors[i].status;
      if (statusuptime == 0) {
        statusuptime =
          '<span class = "bold-h3">Hyro BOT | Uptime Server » </span><span class = "italics"><font color="orange">Partial Outage <img class="emoji-img" src="https://discordemoji.com/assets/emoji/4077_warning.png" alt="success Discord Emoji" style="width: 22px;"></span></font> <a href="https://hyro-bot-uptime-glitch.glitch.me/">Link</a>';
      }else if (statusuptime == 1) {
        statusuptime =
          '<span class = "bold-h3">Hyro BOT | Uptime Server » </span><span class = "green"><font color="#36e30b">Server starting <img class="emoji-img" src="https://discordemoji.com/assets/emoji/8299_Loading.gif" alt="success Discord Emoji" style="width: 22px;"></font></span> <a href="https://hyro-bot-uptime-glitch.glitch.me/">Link</a>';
      //  div.style.border = "1px solid green";
      } else if (statusuptime == 2) {
        statusuptime =
          '<span class = "bold-h3">Hyro BOT | Uptime Server » </span><span class = "green"><font color="#36e30b">Operational <img class="emoji-img" src="https://discordemoji.com/assets/emoji/success.gif" alt="success Discord Emoji" style="width: 22px;"></font></span> <a href="https://hyro-bot-uptime-glitch.glitch.me/">Link</a>';
      //  div.style.border = "1px solid green";
      } else if (statusuptime == 9) {
        statusuptime =
          '<span class = "bold-h3">Hyro BOT | Uptime Server » </span><span class = "red">Major Outage <img class="emoji-img" src="https://upload.hicoria.com/files/pHEMrH6w.PNG" alt="success Discord Emoji" style="width: 22px;"></span> <a href="https://hyro-bot-uptime-glitch.glitch.me/">Link</a>';
       // div.style.border = "1px solid red";
      }
      statuspe.innerHTML = statusuptime;
      
      
      var interval = data.monitors[i].interval;
      interval = interval / 60;
      interval =
        "<span class = 'bold-h3'>Pinging interval</span><br/>" +
        interval +
        " minutes";
      var p = document.getElementsByClassName("interval")[0];
   //   p.innerHTML = interval;

      var p2 = document.getElementsByClassName("bold-h3")[2];
   //   p2.innerText = "Uptime Ratio";
    }
  });
