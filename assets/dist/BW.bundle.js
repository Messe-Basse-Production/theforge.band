!function(){"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._lang=-1!==["fr","es","de"].indexOf(navigator.language.substring(0,2))?navigator.language.substring(0,2):"en",this._nls=null,this._band=null,this._version="0.2.1",this._fetchLang().then(this._fetchBandInfo.bind(this)).then(this._init.bind(this)).catch((function(e){console.error("BandWebsite v".concat(t._version," : Fatal error during initialization, please contact support :\n"),e)})).finally((function(){}))}var n,s;return n=e,(s=[{key:"_fetchLang",value:function(){var e=this;return new Promise((function(t,n){fetch("assets/json/".concat(e._lang,".json")).then((function(s){s.json().then((function(n){e._nls=n,t()})).catch((function(e){n(e)}))})).catch((function(e){n(e)}))}))}},{key:"_fetchBandInfo",value:function(){var e=this;return new Promise((function(t,n){fetch("assets/json/band.json").then((function(s){s.json().then((function(n){e._band=n,t()})).catch((function(e){n(e)}))})).catch((function(e){n(e)}))}))}},{key:"_init",value:function(){var e=this;return new Promise((function(t,n){"index"===document.body.dataset.type?e._buildIndexPage():"listen"===document.body.dataset.type?e._buildListenPage():"tree"===document.body.dataset.type?e._buildTreePage():n(new Error("Invalid <body> type. Should be either index, listen or tree")),t()}))}},{key:"_buildIndexPage",value:function(){document.querySelector("#band-name").innerHTML=this._nls.band.name,document.querySelector("#band-desc").innerHTML=this._nls.band.desc,document.querySelector("#listen-link").innerHTML='<img src="./assets/img/controls/disc.svg" alt="listen">'.concat(this._nls.listenLink),document.querySelector("#tree-link").innerHTML='<img src="./assets/img/controls/find.svg" alt="listen">'.concat(this._nls.treeLink),document.querySelector("#musicians-section").innerHTML=this._nls.musicians,document.querySelector("#works-section").innerHTML=this._nls.works;for(var e=0;e<this._band.members.length;++e){var t=document.createElement("DIV");t.dataset.artist=this._band.members[e].fullName;var n=document.createElement("IMG");n.src="./assets/img/artists/".concat(this._band.members[e].picture);var s=document.createElement("P");s.innerHTML="\n        ".concat(this._band.members[e].fullName,"<br>\n        <span>© ").concat(this._band.members[e].pictureCredit,'</span><br>\n        <span id="learn-more" class="learn-more">').concat(this._nls.learnMore,"</span>\n      "),t.addEventListener("click",this._artistModal.bind(this,this._band.members[e])),t.appendChild(n),t.appendChild(s),document.getElementById("artists").appendChild(t)}for(var a=0;a<this._band.releases.length;++a){var r=document.createElement("DIV");r.dataset.url=this._getReleaseLink(this._band.releases[a].links);var i=document.createElement("IMG");i.src="./assets/img/releases/".concat(this._band.releases[a].cover);var l=document.createElement("P");l.innerHTML="\n        ".concat(this._band.releases[a].title,"<br>\n        <span>").concat(this._band.releases[a].artist,"</span><br>\n        <span>").concat(this._buildReleaseDate(this._band.releases[a].date),"</span>\n      "),r.addEventListener("click",this._openReleaseVideo.bind(this,r.dataset.url)),r.appendChild(i),r.appendChild(l),document.getElementById("releases").appendChild(r)}new window.ScrollBar({target:document.body})}},{key:"_buildListenPage",value:function(){var e=this;document.querySelector("#release-from").innerHTML=this._nls.from,document.querySelector("#listen-online").innerHTML=this._nls.listenOnline,document.querySelector("#see-more-links").innerHTML=this._nls.seeMore,document.querySelector("#published-on").innerHTML=this._nls.publishedOn;var t=document.getElementById("current-progress"),n=document.getElementById("modal-overlay"),s=new Audio,a=0,r=function(){s.pause(),s.currentTime=0,t.style.width="0";var n=e._band.releases[a];document.getElementById("release-background").style.backgroundImage="url('assets/img/releases/".concat(n.cover,"')"),document.getElementById("release-background-bottom").style.backgroundImage="url('assets/img/releases/".concat(n.cover,"')"),document.getElementById("release-cover").src="assets/img/releases/".concat(n.cover),document.getElementById("release-duration").innerHTML=n.duration,document.getElementById("release-title").innerHTML=n.title,document.getElementById("release-artist").innerHTML=n.artist,document.getElementById("release-date").innerHTML=e._buildReleaseDate(n.date),document.getElementById("label-link").innerHTML=n.label,document.getElementById("label-link").href=n.labelLink;for(var r=0;r<n.links.length;++r)""===n.links[r].url?document.getElementById(n.links[r].type).classList.add("disabled"):(document.getElementById(n.links[r].type).classList.remove("disabled"),document.getElementById(n.links[r].type).href=n.links[r].url);document.getElementById("release-tracklist").innerHTML=e._buildTrackCredits(n.tracks),document.getElementById("release-tracklist").scrollHeight>document.getElementById("release-tracklist").clientHeight&&(document.getElementById("release-tracklist").style.display="inherit",new window.ScrollBar({target:document.getElementById("release-tracklist")})),s=new Audio("assets/audio/".concat(n.audio)),i(s)},i=function(){var e=document.getElementById("play-pause");e.src="assets/img/controls/play.svg";var t=document.getElementById("progress-bar"),n=document.getElementById("current-progress"),a=!1;e.addEventListener("click",(function(){!0===a?(a=!1,e.src="assets/img/controls/play.svg",s.pause()):(a=!0,e.src="assets/img/controls/pause.svg",s.play())})),s.addEventListener("timeupdate",(function(){n.style.width="".concat(s.currentTime/s.duration*100,"%")})),s.addEventListener("ended",(function(){s.currentTime=0,n.style.width="0",e.src="assets/img/controls/play.svg",a=!1})),t.addEventListener("click",(function(e){if(!0===a){var r=t.getBoundingClientRect();s.currentTime=(e.clientX-r.left)/r.width*s.duration,n.style.width="".concat(s.currentTime/s.duration*100,"%")}}))};1===this._band.releases.length?(document.getElementById("release-previous").style.display="none",document.getElementById("release-next").style.display="none"):(document.getElementById("release-previous").addEventListener("click",(function(t){t.target.blur(),a=(e._band.releases.length+a-1)%e._band.releases.length,r()})),document.getElementById("release-next").addEventListener("click",(function(t){t.target.blur(),a=(a+1)%e._band.releases.length,r()}))),document.getElementById("modal-overlay").addEventListener("click",(function(){n.style.opacity=0,setTimeout((function(){n.innerHTML="",n.style.display="none"}),400)})),document.getElementById("see-more-links").addEventListener("click",(function(){fetch("assets/html/seemoremodal.html").then((function(t){n.style.display="flex",t.text().then((function(t){n.appendChild(document.createRange().createContextualFragment(t));for(var s=e._band.releases[a],r=0;r<s.moreLinks.length;++r)""===s.moreLinks[r].url?document.getElementById(s.moreLinks[r].type).classList.add("disabled"):(document.getElementById(s.moreLinks[r].type).classList.remove("disabled"),document.getElementById(s.moreLinks[r].type).href=s.moreLinks[r].url);requestAnimationFrame((function(){return n.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))})),r()}},{key:"_buildTreePage",value:function(){for(var e=0;e<this._band.links.length;++e)document.querySelector("#link-wrapper").innerHTML+='\n      <a href="'.concat(this._band.links[e].url,'" class="link" target="_blank" rel="noopener noreferrer">\n        <img src="assets/img/logo/').concat(this._band.links[e].type,'.svg" width="25px">\n        <p>').concat(this._band.links[e].name,"</p>\n      </a>\n      ");new window.ScrollBar({target:document.getElementById("link-wrapper")})}},{key:"_artistModal",value:function(e){var t=this,n=document.getElementById("modal-overlay");document.getElementById("modal-overlay").addEventListener("click",(function(){n.style.opacity=0,setTimeout((function(){n.innerHTML="",n.style.display="none"}),400)})),fetch("assets/html/biomodal.html").then((function(s){n.style.display="flex",s.text().then((function(s){var a=document.createRange().createContextualFragment(s);a.querySelector("#artist-name").innerHTML=e.fullName,a.querySelector("#artist-picture").src="./assets/img/artists/".concat(e.picture),a.querySelector("#artist-bio").innerHTML=e.bio[t._lang],n.appendChild(a),requestAnimationFrame((function(){return n.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))}},{key:"_getReleaseLink",value:function(e){for(var t="",n=0;n<e.length;++n)if(""!==e[n].url&&(t=e[n].url,"youtube"===e[n].type))return e[n].url;return t}},{key:"_openReleaseVideo",value:function(e){window.open(e,"_blank").focus()}},{key:"_buildReleaseDate",value:function(e){var t=e.split("-");return"en"===this._lang?"".concat(this._nls.months[t[1]-1]," ").concat(t[0].replace(/^0+/,""),", ").concat(t[2]):"".concat(t[0].replace(/^0+/,"")," ").concat(this._nls.months[t[1]-1]," ").concat(t[2])}},{key:"_buildTrackCredits",value:function(e){for(var t="",n=0;n<e.length;++n)t+="<h3>".concat(n+1,". ").concat(e[n].title," – ").concat(e[n].duration,"</h3><p>"),""!==e[n].composer&&(t+="<i>".concat(this._nls.composer,"</i> : ").concat(e[n].composer,"<br>")),""!==e[n].author&&(t+="<i>".concat(this._nls.author,"</i> : ").concat(e[n].author)),t+="</p>";return t}}])&&t(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.default=n,window.BW=e.default}();