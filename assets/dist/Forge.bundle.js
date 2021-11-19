!function(){"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._lang=t||"fr",this._activeTrack="Rock",this._audio=new Audio("/assets/audio/".concat(this._activeTrack,"Extract.mp3")),this._handlePlayback(),this._handleClick()}var n,a;return n=e,(a=[{key:"_handlePlayback",value:function(){var e=this,t=document.getElementById("play-pause");t.src="/assets/img/play.svg";var n=document.getElementById("progress-bar"),a=document.getElementById("current-progress"),o=!1;t.addEventListener("click",(function(){!0===o?(o=!1,t.src="/assets/img/play.svg",e._audio.pause()):(o=!0,t.src="/assets/img/pause.svg",e._audio.play())})),this._audio.addEventListener("timeupdate",(function(){a.style.width="".concat(e._audio.currentTime/e._audio.duration*100,"%")})),this._audio.addEventListener("ended",(function(){e._audio.currentTime=0,a.style.width="0",t.src="/assets/img/play.svg",o=!1})),n.addEventListener("click",(function(t){if(!0===o){var i=n.getBoundingClientRect();e._audio.currentTime=(t.clientX-i.left)/i.width*e._audio.duration,a.style.width="".concat(e._audio.currentTime/e._audio.duration*100,"%")}}))}},{key:"_handleClick",value:function(){var e=this,t=document.getElementById("current-progress"),n={fr:"Compositeur",en:"Composer"},a={fr:"Auteur",en:"Author"},o=["Rock","Etica","Forge","Pox","Dur","Macadam"],i=["The Forge","The Forge","The Forge","Small Pox","Le Forge","Macadam Forge"],c=["4:07","32:44","39:00","29:35","19:00","8:11"],l=["<h3>1. Rock'n'Roll – 4:07</h3><p><i>".concat(n[this._lang],"</i> : Luc Boulogne</p>"),"<h3>1. R U S H – 5:38</h3><p><i>".concat(n[this._lang],"</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>2. Metalfloyd – 6:41</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>3. Acoustica – 6:59</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p><h3>4. Etica Nikomak – 13:26</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Paul Boulogne<br>Tom Souty, Vincent Boulogne</p>"),"<h3>1. Can You Heal My Pain? – 5:16</h3><p><i>".concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>2. Doliprane – 6:13</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>3. Far From City – 4:46</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>4. Fight Is Always Run – 7:57</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>5. Mirage – 6:35</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>6. Heart Of Stone – 8:10</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p>"),"<h3>1. Just The Reality – 7:14</h3><p><i>".concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>2. Doliprane – 6:42</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>3. Mirage – 5:59</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p><h3>4. Close My Eyes – 9:37</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Stéphane Philippe</p>"),"<h3>1. Président Samouraï – 5:14</h3><p><i>".concat(n[this._lang],"</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p><h3>2. In / Out – 5:44</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p><h3>3. Aime Moi – 4:47</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p><h3>4. Macadam – 3:13</h3><p><i>").concat(n[this._lang],"</i> : Luc Boulogne, Michel Mathieu, Vincent Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p>"),"<h3>1. Loulou – 4:03</h3><p><i>".concat(n[this._lang],"</i> : Christophe Boulogne, Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p><h3>2. Montpar' Blues – 4:08</h3><p><i>").concat(n[this._lang],"</i> : Christophe Boulogne, Luc Boulogne<br><i>").concat(a[this._lang],"</i> : Michel Mathieu</p>")],s=["Rock'n'Roll","Etica Nikomak","The Forge","Small Pox","Dur d'Être Apache...","Loulou/Montpar' Blues"],r=["","08D3o3S0y7Y3I2z2YD95Wb","6JOsCQ7bUWptYKCtA04Jt7","6v6HlX4bDfFDWrrTRXeQj7","22mM01wqd6mZNqt41Bqyq4",""],u=["","etica-nikomak/1590605239","the-forge/1590930991","small-pox-ep/1591523883","président-samouraï/1591523511?i=1591523512",""],d=["","B09JLK7CQJ","B09JS8XW45","B09K3S3Y66","B09K34PWZX",""],h=["","201425661","201669802","202078894","202078865",""],m=["","266135292","266746652","267582302","267582372",""],g=["v=wap0ZVifTfA","v=v8yQdRsJah4&list=PLGrV25VkQxOeALepofxUafUZR2_4Hhy8K","v=4JecXQAe7nQ&list=PLGrV25VkQxOdBaIl_kHM0Z9mjq_1D3LrK","v=VRg5BQkyIiE&list=PLGrV25VkQxOde4ci3lta5oX6WJbPb7iXU","v=ZuLNodgTtzI&list=PLGrV25VkQxOdkK4Hjc80bQ5pdcBfB9N_M","v=NjlcpdkZnb8&list=PLGrV25VkQxOfFnRPT0QqYXeIk-hNdPvQO"],p=["21011362-The-Forge-RocknRoll","20503012-The-Forge-Etica-Nikomak","20560249-The-Forge-The-Forge","20548198-Small-Pox-Small-Pox","20515321-Le-Forge-Dur-dÊtre-Apache","21012571-Macadam-Forge-Loulou-Montpar-Blues"],y=["rocknroll-single","etica-nikomak","the-forge","small-pox","dur-d-tre-apache","loulou-montpar-blues-single"],B={fr:["15 Novembre 2021","7 Octobre 2021","6 Octobre 2021","5 Octobre 2021","4 Octobre 2021","17 Novembre 2021"],en:["November 15, 2021","October 7, 2021","October 6, 2021","October 5, 2021","October 4, 2021","November 17, 2021"]},b=function(n){document.getElementById("release-background").classList.remove(e._activeTrack.toLowerCase()),document.getElementById("release-background-bottom").classList.remove(e._activeTrack.toLowerCase()),document.getElementById("spotify").classList.remove("disabled"),document.getElementById("apple").classList.remove("disabled"),document.getElementById("amazon").classList.remove("disabled"),document.getElementById("deezer").classList.remove("disabled"),e._audio.pause(),e._audio.currentTime=0,t.style.width="0",e._activeTrack=o[n],document.getElementById("release-background").classList.add(e._activeTrack.toLowerCase()),document.getElementById("release-background-bottom").classList.add(e._activeTrack.toLowerCase()),document.getElementById("release-cover").src="/assets/img/".concat(e._activeTrack,".webp"),document.getElementById("release-duration").innerHTML=c[n],document.getElementById("release-title").innerHTML=s[n],document.getElementById("band-name").innerHTML=i[n],document.getElementById("release-date").innerHTML=B[e._lang][n],document.getElementById("release-tracklist").innerHTML=l[n],document.getElementById("spotify").href="https://open.spotify.com/album/".concat(r[n]),""===r[n]&&document.getElementById("spotify").classList.add("disabled"),document.getElementById("apple").href="https://music.apple.com/us/album/".concat(u[n]),""===u[n]&&document.getElementById("apple").classList.add("disabled"),document.getElementById("amazon").href="https://music.amazon.fr/albums/".concat(d[n]),""===d[n]&&document.getElementById("amazon").classList.add("disabled"),document.getElementById("deezer").href="https://www.deezer.com/fr/album/".concat(m[n]),""===m[n]&&document.getElementById("deezer").classList.add("disabled"),document.getElementById("youtube").href="https://www.youtube.com/watch?".concat(g[n]),document.getElementById("bandcamp").href="https://theforgeband.bandcamp.com/album/".concat(y[n]),e._audio=new Audio("/assets/audio/".concat(e._activeTrack,"Extract.mp3")),e._handlePlayback()},_=0;document.getElementById("release-previous").addEventListener("click",(function(e){e.target.blur(),b(_=(6+_-1)%6)})),document.getElementById("release-next").addEventListener("click",(function(e){e.target.blur(),b(_=(_+1)%6)}));var L=document.getElementById("modal-overlay");document.getElementById("modal-overlay").addEventListener("click",(function(){L.style.opacity=0,setTimeout((function(){L.innerHTML="",L.style.display="none"}),400)})),document.getElementById("see-more-links").addEventListener("click",(function(){fetch("/assets/html/seemoremodal.html").then((function(e){L.style.display="flex",e.text().then((function(e){L.appendChild(document.createRange().createContextualFragment(e)),document.getElementById("tidal").href="https://listen.tidal.com/album/".concat(h[_]),""===h[_]&&document.getElementById("tidal").classList.add("disabled"),document.getElementById("discogs").href="https://www.discogs.com/release/".concat(p[_]),requestAnimationFrame((function(){return L.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))}))}}])&&t(n.prototype,a),e}();e.default=n,window.Forge=e.default}();