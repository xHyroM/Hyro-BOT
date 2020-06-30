// client-side js


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
var apikey = "m784731062-4db615f496bc657b55ffaa90"
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

      var statusp = document.getElementsByClassName("status")[0];
      let status = data.monitors[i].status;
      if (status == 0) {
        status =
          '<span class = "bold-h3">Hyro BOT | Server » </span><span class = "italics"><font color="orange">The server is currently paused. Please try again later for an updated status!  <img class="emoji-img" src="https://discordemoji.com/assets/emoji/4077_warning.png" alt="success Discord Emoji" style="width: 22px;"></span></font>';
      }else if (status == 1) {
        status =
          '<span class = "bold-h3">Hyro BOT | Server » </span><span class = "green"><font color="#36e30b">Server starting <img class="emoji-img" src="https://discordemoji.com/assets/emoji/8299_Loading.gif" alt="success Discord Emoji" style="width: 22px;"></font></span>';
      //  div.style.border = "1px solid green";
      } else if (status == 2) {
        status =
          '<span class = "bold-h3">Hyro BOT | Server » </span><span class = "green"><font color="#36e30b">Operational <img class="emoji-img" src="https://discordemoji.com/assets/emoji/success.gif" alt="success Discord Emoji" style="width: 22px;"></font></span>';
      //  div.style.border = "1px solid green";
      } else if (status == 9) {
        status =
          '<span class = "bold-h3">Hyro BOT | Server » </span><span class = "red">Major Outage <img class="emoji-img" src="https://upload.hicoria.com/files/pHEMrH6w.PNG" alt="success Discord Emoji" style="width: 22px;"></span>';
       // div.style.border = "1px solid red";
      }
      statusp.innerHTML = status;

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

      var canvas = document.getElementsByClassName("canvas")[0];
      var up = data.monitors[i].all_time_uptime_ratio;
      var down = 100 - up;
      var myPieChart = new Chart(canvas, {
        type: "doughnut",
        data: {
          datasets: [
           {
              backgroundColor: ["#13B132", "#F42121"],
              borderColor: ["#13B132", "#F42121"],
              data: [up, down]
            }
          ],
          labels: ["Uptime", "Downtime"]
        },
        options: {
				responsive: true,
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
        
        
      });

      var lastdown = document.getElementsByClassName("lastdown")[0];
      let lastdate = data.monitors[i].logs[0].datetime;
      // let date = new Date(lastdate).toLocaleString();
      let date = lastdate * 1000;
      let datetime = new Date(date).toUTCString();
      let lastdur = data.monitors[i].logs[0].duration;
      let dur = lastdur / 60 + " minutes";
      let lastreason = data.monitors[i].logs[0].reason.detail;
      let str = `<span class = 'bold-h3'>Last Downtime</span><br /><br /><b>DATE</b><br />${datetime}<br /><br /><b>DURATION</b><br />${dur}<br /><br /><b>REASON</b><br />${lastreason}`;
      lastdown.innerHTML = str;
      
      var started = document.getElementsByClassName("started")[0];
      let starteddate = data.monitors[i].create_datetime;
      let date2 = starteddate * 1000;
      starteddate = new Date(date2).toUTCString();
      let str2 = '<i>This monitor was started on ' + starteddate + '</i>';
   //   started.innerHTML = str2;

    }
  });

fetch("https://api.uptimerobot.com/v2/getMonitors", {
  method: "POST",
  body: JSON.stringify(logcontent),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  
    let loglength = data.monitors[0].logs.length;
    let log = data.monitors[0].logs
    for (let i = 0; i < 20; i++) {
      let logtype = log[i].type;
      let logdatetime = log[i].datetime * 1000;
      let datetime = new Date(logdatetime).toUTCString();
      // let datetime = new Date(logdatetime).toLocaleString('en-GB', { timeZone: 'UTC' });
      // let datetime = moment(logdatetime).format("DD-MM-YYYY h:mm:ss");
      let logdur = log[i].duration;
      let dur = logdur / 60 + " minutes"
      let logreason = log[i].reason.detail;
      let logcode = log[i].reason.code;
      let str = `<b>Type</b> ${logtype}<br />
<b>Date & Time</b> ${datetime} seconds<br />
<b>Duration</b> ${logdur}</br>
<b>Status</b> ${logreason} (${logcode})<br />
`
      let logp = document.createElement("p");
      logp.setAttribute("class", "log");
 //     logp.innerHTML = str;
      document.body.appendChild(logp);
    }
  });
