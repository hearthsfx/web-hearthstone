// TODO: wtf are these methods doing

let openmenuSnd = new Audio("src/media/sounds/openmenu.mp3"),
    menubtnsSnd = new Audio("src/media/sounds/menubtnpress.mp3"),
    purchaseSnd = new Audio("src/media/sounds/purchase.mp3"),
    menuhoverSnd = new Audio("src/media/sounds/menuselect.mp3"),
    shophoverSnd = new Audio("src/media/sounds/shophover.mp3"),
    shoponclickSnd = new Audio("src/media/sounds/shoponclick.mp3"),
    startTutorialSnd = new Audio("src/media/sounds/voiceovers/innkeeper_starttutorial.mp3"),
    battlebeginSnd = new Audio("src/media/sounds/voiceovers/innkeeper_tutorialbattle.mp3"),
    jainathreatSnd = new Audio("src/media/sounds/voiceovers/jaina_tutorialbattle.mp3"),
    hasPlayedBattleBeginSnd = new Boolean(false),
    isInGame = new Boolean(false),
    tutorialIntroRunning = new Boolean(false);
// Initial volume of 0.20
// Make sure it's a multiple of 0.05
let vol = 0.5,
    interval = 175; // 200ms interval
// soundtrack's to be randomly selected in game
let lichkingOST = new Audio("src/media/sounds/ost/knights_of_the_frozen_throne.mp3"),
    songs = [
        "src/media/sounds/ost/mulligan.mp3",
        "src/media/sounds/ost/bad_reputation.mp3",
        "src/media/sounds/ost/better_hand.mp3",
        "src/media/sounds/ost/dont_let_your_guard_down.mp3",
        "src/media/sounds/ost/duel.mp3",
        "src/media/sounds/ost/the_forge.mp3"
    ]

let item = songs[Math.floor(Math.random() * songs.length)];

// converts the string into an audio element
let song = new Audio(item);

/* boolean to check if the audio is already playing to ensure multiple audio 
files do not play at the same time when the end turn button is clicked */
let audioIsPlayed = new Boolean(false)

// plays a random song and sets the volume to 70% from the array defined above
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function (e) {
    song.volume = e.currentTarget.value / 100;
})

document.addEventListener("keydown", function () {
    let x = event.keyCode || event.which;
    if (x == 27) {
        let game = document.getElementById("game"),
            gamemenu = document.getElementById("gamemenu"),
            gamemenuContent = document.getElementById("gamemenuContent");
        if (gamemenuContent.style.display === "block") {
            // hide options menu
            if (document.getElementById('optionsmenuContent').style.display === "block") {
                document.getElementById('optionsmenu').style.display = "none";
                document.getElementById('optionsmenuContent').style.display = "none";
                document.getElementById('optionsmenuContent').classList.remove('openMenuAnim');
            } else {
                // show game
                document.getElementById("gamemenuContent").classList.remove('openMenuAnim');
                document.getElementById("gamemenu").style.display = "none";
                document.getElementById("gamemenuContent").style.display = "none";
            }
        } else if (document.getElementById("shopmenu").style.display == "block") {
            document.getElementById("shopmenu").style.display = "none";
            document.getElementById("shopmenuContent").style.display = "none";
            document.getElementById("shopmenuContent").classList.remove("openMenuAnim");
            document.getElementById("mainmenu").style.filter = "none";
        } else {
            // show game menu
            document.getElementById("gamemenu").style.display = "block";
            document.getElementById("gamemenuContent").style.display = "block";
            document.getElementById("gamemenuContent").classList.add('openMenuAnim');
            concedebtn.disabled = !isInGame;
            openmenuSnd.play();
        }
    }
})

// on button hover play sound
let concedebtn = document.querySelector('#concedebutton'),
    optionsbtn = document.querySelector('#optionsbutton'),
    quitbtn = document.querySelector('#quitbutton'),
    resumebtn = document.querySelector('#resumebutton'),
    miscellaneousbtn = document.querySelector('#miscellaneousbutton'),
    confirmbtn = document.querySelector('#confirm'),
    endturnbtn = document.getElementById("endturn"),
    playbtn = document.querySelector('#playbutton'),
    tutorialbtn = document.querySelector('#tutorialbutton'),
    howtoplaybtn = document.querySelector('#howtoplaybutton'),
    openpacksbtn = document.querySelector('#openpacksbutton'),
    shopbtn = document.querySelector('#shopbutton'),
    buybtn = document.querySelector('#buybutton'),
    starttutorialbtn = document.querySelector('#starttutorialbutton'),
    backfrompackbtn = document.querySelector('#backfrompackbtn'),
    donepackbtn = document.querySelector('#donepackbutton');
// skipcinematicbtn = document.querySelector('#skipcinematicbtn');

concedebtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
optionsbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
quitbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
resumebtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
miscellaneousbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
playbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
tutorialbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
howtoplaybtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
openpacksbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
starttutorialbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
backfrompackbtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})
shopbtn.addEventListener('mouseover', function () {
    shophoverSnd.play();
})
buybtn.addEventListener('mouseover', function () {
    menuhoverSnd.play();
})

concedebtn.onclick = function () {
    openmenuSnd.play()
    alert("You've Lost!")
    location.reload();
};

optionsbtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById('optionsmenu').style.display = "block";
    document.getElementById('optionsmenuContent').style.display = "block";
    document.getElementById('optionsmenuContent').classList.add('openMenuAnim');
};

quitbtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById('interactive');
    document.getElementById('contents').style.visibility = "hidden";
    document.getElementById('contents').style.opacity = "0";
    document.getElementById('contents').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
    // may not work as can only close tabs with scripts that were opened with
    window.close();
};

resumebtn.onclick = function () {
    openmenuSnd.play()
    document.getElementById("gamemenuContent").classList.remove('openMenuAnim');
    document.getElementById("gamemenu").style.display = "none";
    document.getElementById("gamemenuContent").style.display = "none";
};

confirmbtn.onclick = function () {
    document.querySelector("#block").style.zIndex = "9";
    document.querySelector('#triangle').style.visibility = "hidden";
    document.querySelector('#triangle').style.opacity = "0";
    document.querySelector('#triangle').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
    document.querySelector('#hintbackbackground').style.visibility = "hidden";
    document.querySelector('#hintbackbackground').style.opacity = "0";
    document.querySelector('#hintbackbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
    document.querySelector('#hintbackground').style.visibility = "hidden";
    document.querySelector('#hintbackground').style.opacity = "0";
    document.querySelector('#hintbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
    document.querySelector('#hint').style.visibility = "hidden";
    document.querySelector('#hint').style.opacity = "0";
    document.querySelector('#hint').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
    document.querySelector(".opponentHeroContainer").style.zIndex = "5";
    document.querySelector(".playerHeroHealth").innerText = "30";
    document.querySelector(".opponentHeroHealth").innerText = "10";
    document.querySelector('#confirm').classList.remove("packHoverAnim");
    document.querySelector("#confirm").classList.add("openPackAnim");
    endturnbtn.disabled = true;
    setTimeout(function () {
        startTutorialSnd.play();
        setTimeout(function () {
            document.querySelector(".playerhero").style.visibility = "visible";
            document.querySelector('.playerhero').classList.add("tutorialHeroAnim");
            document.getElementById("game").classList.add("shakeScreenAnim");
            document.querySelector('#confirm').style.visibility = "hidden";
        }, 0.25 * 1000);
        setTimeout(function () {
            document.querySelector('#block').style.opacity = "0";
            document.querySelector('#block').style.transition = "opacity 2s linear";
            setTimeout(function () {
                document.querySelector('.playerhero').style.zIndex = "9";
                setTimeout(function () {
                    document.querySelector(".opponentHeroContainer").style.visibility = "visible";
                    document.querySelector(".opponentHeroContainer").classList.add("tutorialHoggerAnim");
                    setTimeout(function () {
                        setTimeout(function () {
                            document.querySelector("#computerbubble").innerHTML = "...";
                            document.querySelector("#computerbubble").style.visibility = "visible";
                            document.querySelector('#computerbubble').classList.add("openMenuAnim");
                        }, 1 * 1000);
                        document.querySelector(".opponentHeroContainer").style.zIndex = "11";
                        document.querySelector(".playerhero").style.zIndex = "9";
                        setTimeout(function () {
                            document.querySelector('#computerbubble').classList.add("easeOutAnim");
                            document.querySelector('#computerbubble').classList.remove("openMenuAnim");
                            setTimeout(function () {
                                document.querySelector("#computerbubble").style.visibility = "hidden";
                                document.querySelector('#computerbubble').classList.remove("easeOutAnim");
                                setTimeout(function () {
                                    document.querySelector("#tutorialmenu").style.display = "block";
                                    document.querySelector("#tutorialmenuContent").style.display = "block";
                                    document.querySelector("#tutorialmenuContent").classList.add("openMenuAnim");
                                }, 1 * 1000);
                            }, 0.25 * 1000);
                        }, 3.5 * 1000);
                        document.querySelector('.playerHeroHealth').style.visibility = "visible";
                        document.querySelector('.playerHeroHealth').style.opacity = "1";
                        document.querySelector('.playerHeroHealth').style.transition = "visibility 0.5s, opacity 0.5s linear";
                        document.querySelector('.opponentHeroHealth').style.visibility = "visible";
                        document.querySelector('.opponentHeroHealth').style.opacity = "1";
                        document.querySelector('.opponentHeroHealth').style.transition = "visibility 0.5s, opacity 0.5s linear";
                    }, 1 * 1000);
                }, 0.925 * 1000);
            }, 2 * 1000);
        }, 8 * 1000);
    }, 1 * 1000);

    /* when not in tutorial
        document.querySelector('#block').style.visibility = "hidden";
        document.querySelector('#block').style.opacity = "0";
        document.querySelector('#block').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('#confirm').style.visibility = "hidden";
        document.querySelector('#confirm').style.opacity = "0";
        document.querySelector('#confirm').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
        document.querySelector('.playerHeroHealth').style.visibility = "visible";
        document.querySelector('.playerHeroHealth').style.opacity = "1";
        document.querySelector('.playerHeroHealth').style.transition = "visibility 0.5s, opacity 0.5s linear";
        document.querySelector('.opponentHeroHealth').style.visibility = "visible";
        document.querySelector('.opponentHeroHealth').style.opacity = "1";
        document.querySelector('.opponentHeroHealth').style.transition = "visibility 0.5s, opacity 0.5s linear";
        document.querySelector(".playerhero").style.zIndex = "5";
        document.querySelector(".opponentHeroContainer").style.zIndex = "5";
        if (!audioIsPlayed) {
            lichkingOST.play();
            song.volume = 0.7;
            audioIsPlayed = true;
        }
    */
};

// miscellaneous button (in options (press esc))
miscellaneousbtn.onclick = function () {
    openmenuSnd.play();
    window.open(
        'https://playhearthstone.com/en-gb',
        '_blank' // <- This is what makes it open in a new window.
    );
};

// play button on click
playbtn.onclick = function () {
    isInGame = true;
    let cinematicvideo = document.getElementById("cinematicVideo");
    cinematicvideo.style.display = "none";
    // document.getElementById("skipcinematicbtn").style.display = "none";
    document.getElementById("block").style.visibility = "visible";
    // fade out the volume of the mainmenuOST
    let fadeout = setInterval(
        function () {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (vol > 0.05) {
                vol -= 0.05;
                mainmenuOST.volume = vol;
            } else {
                // Stop the setInterval when 0 is reached
                clearInterval(fadeout);
            }
        }, interval);
    menubtnsSnd.play();
    setTimeout(function () {
        mainmenuOST.pause();
    }, 1.75 * 1000);
    crowdSnd.pause();
    document.getElementById('transitionblock').style.visibility = "visible";
    document.getElementById('transitionblock').classList.add("fadeInAnim");
    setTimeout(function () {
        document.getElementById('transitionblock').classList.add("fadeOutAnim");
        setTimeout(function () {
            document.getElementById('transitionblock').style.visibility = "hidden";
        }, 1 * 1000);
    }, 1 * 1000);
    document.getElementById('mainmenu').style.visibility = "hidden";
    setTimeout(function () {
        document.getElementById('contents').style.visibility = "visible";
        document.getElementById("playerlabel").style.visibility = "visible";
        document.getElementById("playerclasslabel").style.visibility = "visible";
        document.getElementById("opponentlabel").style.visibility = "visible";
        document.getElementById("vs").style.visibility = "visible";
        (new Audio("src/media/sounds/ongameload.mp3")).play();
        document.querySelector('.playerhero').classList.add("onLoadPlayerAnim");
        document.querySelector('.opponentHeroContainer').classList.add("onLoadComputerAnim");
        setTimeout(function () {
            document.querySelector('#playerlabel').style.visibility = "hidden";
            document.querySelector('#playerlabel').style.opacity = "0";
            document.querySelector('#playerlabel').style.transition = "visibility 0s 0.1s, opacity 0.1s linear";
            document.querySelector('#playerclasslabel').style.visibility = "hidden";
            document.querySelector('#playerclasslabel').style.opacity = "0";
            document.querySelector('#playerclasslabel').style.transition = "visibility 0s 0.1s, opacity 0.1s linear";
            document.querySelector('#opponentlabel').style.visibility = "hidden";
            document.querySelector('#opponentlabel').style.opacity = "0";
            document.querySelector('#opponentlabel').style.transition = "visibility 0s 0.1s, opacity 0.1s linear";
        }, 5.25 * 1000);
        setTimeout(function () {
            document.querySelector('#vs').style.visibility = "hidden";
            document.querySelector('#vs').style.opacity = "0";
            document.querySelector('#vs').style.transition = "visibility 0s 0.2s, opacity 0.2s linear";
            setTimeout(function () {
                document.querySelector(".opponentHeroContainer").style.zIndex = "9";
                setTimeout(function () {
                    document.querySelector("#playerbubble").style.visibility = "visible";
                    document.querySelector('#playerbubble').classList.add("openMenuAnim");
                }, 0.25 * 1000);
                setTimeout(function () {
                    document.querySelector('#playerbubble').classList.add("easeOutAnim");
                    document.querySelector('#playerbubble').classList.remove("openMenuAnim");
                    setTimeout(function () {
                        document.querySelector("#playerbubble").style.visibility = "hidden";
                    }, 0.25 * 1000);
                    setTimeout(function () {
                        document.querySelector("#computerbubble").style.visibility = "visible";
                        document.querySelector('#computerbubble').classList.add("openMenuAnim");
                    }, 0.25 * 1000);
                    document.querySelector(".opponentHeroContainer").style.zIndex = "11";
                    document.querySelector(".playerhero").style.zIndex = "9";
                    setTimeout(function () {
                        document.querySelector('#computerbubble').classList.add("easeOutAnim");
                        document.querySelector('#computerbubble').classList.remove("openMenuAnim");
                        setTimeout(function () {
                            document.querySelector("#computerbubble").style.visibility = "hidden";
                            document.querySelector('#computerbubble').classList.remove("easeOutAnim");
                        }, 0.25 * 1000);
                        document.querySelector(".opponentHeroContainer").style.zIndex = "9";
                        document.querySelector('#confirm').style.display = "block";
                    }, 5.5 * 1000);
                }, 1.5 * 1000);
            }, 2 * 1000);
        }, 6 * 1000);
    }, 1 * 1000);
};

/* function tutorial called on tutorial button on click 
and on page load if local storage hasPlayedTutorial == null */
function tutorial() {
    isInGame = true;
    // fade out the volume of the mainmenuOST
    let fadeout = setInterval(
        function () {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (vol > 0.05) {
                vol -= 0.05;
                mainmenuOST.volume = vol;
            } else {
                // Stop the setInterval when 0 is reached
                clearInterval(fadeout);
            }
        }, interval);

    setTimeout(function () {
        mainmenuOST.pause();
    }, 1 * 1750);

    crowdSnd.pause();
    let introcinematic = document.getElementById("cinematicVideo");
    // introcinematic.play();
    introcinematic.style.display = "none";
    document.getElementById('mainmenu').style.visibility = "hidden";
    document.getElementById('contents').style.visibility = "visible";

    document.querySelector('#confirm').style.display = "block";
    document.querySelector('#confirm').classList.add("packHoverAnim");
    document.querySelector('#confirm').innerText = "";
    document.querySelector('#confirm').style.backgroundColor = "transparent";
    document.querySelector('#confirm').style.border = "none";
    document.querySelector('#confirm').style.width = "11%";
    document.querySelector('#confirm').style.height = "25%";
    document.querySelector('#confirm').style.top = "34%";
    document.querySelector('#confirm').style.left = "44.7%";
    document.querySelector('#confirm').style.transform = "rotate(-15deg)";
    document.querySelector('#confirm').style.backgroundImage = "url(src/media/images/pack.png)";
    setTimeout(function () {
        if (tutorialIntroRunning == false) {
            tutorialIntroRunning = true;
            // document.getElementById("skipcinematicbtn").style.display = "none";
            introcinematic.style.display = "none";
            document.querySelector(".playerhero").style.visibility = "hidden";
            document.querySelector(".opponentHeroContainer").style.visibility = "hidden";
            document.querySelector(".opponentHeroContainer").style.backgroundImage = "url(src/media/images/hogger.png)";
            document.querySelector('#endturn').style.zIndex = "10";
            document.querySelector(".playerhero").style.zIndex = "20";
            document.querySelector(".opponentHeroContainer").style.zIndex = "5";
            document.getElementById('transitionblock').style.visibility = "visible";
            document.getElementById("block").style.visibility = "visible";
            document.querySelector('#endturn').style.zIndex = "9";
            setTimeout(function () {
                document.getElementById('transitionblock').classList.add("fadeInAnim");
                document.getElementById('transitionblock').classList.add("fadeOutAnim");
                setTimeout(function () {
                    document.getElementById('transitionblock').style.visibility = "hidden";
                    document.querySelector('#triangle').style.visibility = "visible";
                    document.querySelector('#hintbackbackground').style.visibility = "visible";
                    document.querySelector('#hintbackground').style.visibility = "visible";
                    document.querySelector('#hint').style.visibility = "visible";
                    document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                    document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                    document.querySelector('#hintbackground').classList.add("openMenuAnim");
                    document.querySelector('#hint').classList.add("openMenuAnim");
                }, 1 * 1000);
            }, 1 * 1000);
        }
    }, 48 * 1000);
}

// tutorial button on click called the tutorial function
tutorialbtn.onclick = function () {
    menubtnsSnd.play();
    tutorial();
};

howtoplaybtn.onclick = function () {
    menubtnsSnd.play();
    document.querySelector("#mainmenu").style.display = "none";
    document.querySelector("#howtoplay").style.display = "block";
};

openpacksbtn.onclick = function () {
    openmenuSnd.play();
    // fade out the volume of the mainmenuOST
    let fadeout = setInterval(
        function () {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (vol > 0.05) {
                vol -= 0.05;
                mainmenuOST.volume = vol;
            } else {
                // Stop the setInterval when 0 is reached
                clearInterval(fadeout);
            }
        }, interval);

    setTimeout(function () {
        mainmenuOST.pause();
    }, 1750);

    crowdSnd.pause();
    let packElements = document.getElementsByClassName("pack");
    document.querySelector("#mainmenu").style.display = "none";
    document.querySelector("#openpacks").style.display = "block";
    document.querySelector("#pkcollisionbox").style.display = "block";

    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "block";
    }

    let myPacks = Number(localStorage.getItem('myPacks'));
    if (myPacks >= 1) {
        init();
    }
};

// shop function called on shop button on click
function shop() {
    shoponclickSnd.play();
    document.getElementById("shopmenu").style.display = "block";
    document.getElementById("shopmenuContent").style.display = "block";
    document.getElementById("shopmenuContent").classList.add("openMenuAnim");
    document.getElementById("mainmenu").style.filter = "blur(5px)";
}

// shop button on click calls the shop function
shopbtn.onclick = function () {
    shop();
};

buybtn.onclick = function () {
    openmenuSnd.play();
    let myGold = Number(localStorage.getItem('myGold'));
    myGold -= 100;
    if (myGold >= 0) {
        setTimeout(function () {
            purchaseSnd.play();
        }, 150)
        createPack();
        let myPacks = Number(localStorage.getItem('myPacks'));
        myPacks++;
        localStorage.setItem('myGold', myGold.toString());
        localStorage.setItem('myPacks', myPacks.toString());
        document.getElementById("myGold").innerText = myGold + "🪙";
        document.getElementById("myPacks").innerText = myPacks;
    } else {
        myGold += 100;
    }
};

// back button when in the pack screen
backfrompackbtn.onclick = function () {
    openmenuSnd.play();
    crowdSnd.play();
    let packElements = document.getElementsByClassName("pack");
    document.querySelector("#mainmenu").style.display = "block";
    document.querySelector("#openpacks").style.display = "none";
    document.querySelector("#pkcollisionbox").style.display = "none";
    for (let i = 0; i < packElements.length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "none";
    }
};

// start tutorial button on click
starttutorialbtn.onclick = function () {
    openmenuSnd.play();
    document.querySelector('#endturn').style.zIndex = "1";
    document.querySelector('#triangle').classList.remove("triangleOpenMenuAnim");
    document.querySelector('#hintbackbackground').classList.remove("openMenuAnim");
    document.querySelector('#hintbackground').classList.remove("openMenuAnim");
    document.querySelector('#hint').classList.remove("openMenuAnim");
    document.querySelector(".opponentHeroContainer").style.zIndex = "2";
    document.querySelector(".playerhero").style.zIndex = "0";
    document.getElementById("game").classList.remove("shakeScreenAnim");
    startTutorialSnd.addEventListener("ended", function () {
        if (hasPlayedBattleBeginSnd == false) {
            battlebeginSnd.play();
            hasPlayedBattleBeginSnd = true;
        }
    })

    if ((hasPlayedBattleBeginSnd == false) && (startTutorialSnd.paused)) {
        battlebeginSnd.play();
    }

    document.querySelector(".playerhero").style.zIndex = "8";
    document.querySelector("#endturn").style.zIndex = "21";
    document.querySelector("#tutorialmenuContent").classList.add("straightEaseOutAnim");
    setTimeout(function () {
        battlebeginSnd.onended = function () {
            jainathreatSnd.play();
            document.querySelector("#playerbubble").innerHTML = "...";
            document.querySelector("#playerbubble").style.visibility = "visible";
            document.querySelector('#playerbubble').classList.add("openMenuAnim");
            setTimeout(function () {
                document.querySelector('#playerbubble').classList.add("easeOutAnim");
                document.querySelector('#playerbubble').classList.remove("openMenuAnim");
                setTimeout(function () {
                    document.querySelector("#playerbubble").style.visibility = "hidden";
                    document.querySelector('#playerbubble').classList.remove("easeOutAnim");
                    setTimeout(function () {
                        // start tutorial
                        document.querySelector('#block').style.visibility = "hidden";
                        document.getElementById("gifhint").style.display = "block";
                        document.getElementById("texthint").style.display = "block";
                        endturnbtn.disabled = false;
                        setTimeout(function () {
                            document.querySelector('#triangle').style.visibility = "visible";
                            document.querySelector('#triangle').style.opacity = "1";
                            document.querySelector('#triangle').style.transition = "none";
                            document.querySelector('#triangle').style.top = "82.75%";
                            document.querySelector('#triangle').style.left = "56%";
                            document.querySelector('#hintbackbackground').style.visibility = "visible";
                            document.querySelector('#hintbackbackground').style.opacity = "1";
                            document.querySelector('#hintbackbackground').style.transition = "none";
                            document.querySelector('#hintbackbackground').style.top = "78.8%";
                            document.querySelector('#hintbackbackground').style.left = "58.5%";
                            document.querySelector('#hintbackground').style.visibility = "visible";
                            document.querySelector('#hintbackground').style.opacity = "1";
                            document.querySelector('#hintbackground').style.transition = "none";
                            document.querySelector('#hintbackground').style.top = "79%";
                            document.querySelector('#hintbackground').style.left = "58.7%";
                            document.querySelector('#hint').style.opacity = "1";
                            document.querySelector('#hint').style.transition = "none";
                            document.querySelector('#hint').style.visibility = "visible";
                            document.querySelector('#hint').style.opacity = "1";
                            document.querySelector('#hint').style.transition = "none";
                            document.querySelector('#hint').style.top = "80%";
                            document.querySelector('#hint').style.left = "59.25%";
                            document.querySelector('#hintlabel').style.left = "10%";
                            document.querySelector('#hintlabel').style.top = "17%";
                            document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                            document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                            document.querySelector('#hintbackground').classList.add("openMenuAnim");
                            document.querySelector('#hint').classList.add("openMenuAnim");
                            document.querySelector('#hintlabel').innerText = "If you run out of\nHealth, you lose.";
                            setTimeout(function () {
                                document.querySelector('#triangle').style.visibility = "hidden";
                                document.querySelector('#triangle').style.opacity = "0";
                                document.querySelector('#triangle').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hintbackbackground').style.visibility = "hidden";
                                document.querySelector('#hintbackbackground').style.opacity = "0";
                                document.querySelector('#hintbackbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hintbackground').style.visibility = "hidden";
                                document.querySelector('#hintbackground').style.opacity = "0";
                                document.querySelector('#hintbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#hint').style.visibility = "hidden";
                                document.querySelector('#hint').style.opacity = "0";
                                document.querySelector('#hint').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                document.querySelector('#triangle').classList.remove("triangleOpenMenuAnim");
                                document.querySelector('#hintbackbackground').classList.remove("openMenuAnim");
                                document.querySelector('#hintbackground').classList.remove("openMenuAnim");
                                document.querySelector('#hint').classList.remove("openMenuAnim");
                                setTimeout(function () {
                                    setTimeout(function () {
                                        document.querySelector('#triangle').style.visibility = "visible";
                                        document.querySelector('#triangle').style.opacity = "1";
                                        document.querySelector('#triangle').style.transition = "none";
                                        document.querySelector('#triangle').style.top = "24.75%";
                                        document.querySelector('#triangle').style.left = "56%";
                                        document.querySelector('#hintbackbackground').style.visibility = "visible";
                                        document.querySelector('#hintbackbackground').style.opacity = "1";
                                        document.querySelector('#hintbackbackground').style.transition = "none";
                                        document.querySelector('#hintbackbackground').style.top = "21.3%";
                                        document.querySelector('#hintbackbackground').style.left = "58.5%";
                                        document.querySelector('#hintbackground').style.visibility = "visible";
                                        document.querySelector('#hintbackground').style.opacity = "1";
                                        document.querySelector('#hintbackground').style.transition = "none";
                                        document.querySelector('#hintbackground').style.top = "21.5%";
                                        document.querySelector('#hintbackground').style.left = "58.7%";
                                        document.querySelector('#hint').style.opacity = "1";
                                        document.querySelector('#hint').style.transition = "none";
                                        document.querySelector('#hint').style.visibility = "visible";
                                        document.querySelector('#hint').style.opacity = "1";
                                        document.querySelector('#hint').style.transition = "none";
                                        document.querySelector('#hint').style.top = "22.5%";
                                        document.querySelector('#hint').style.left = "59.25%";
                                        document.querySelector('#hintlabel').style.left = "10%";
                                        document.querySelector('#hintlabel').style.top = "17%";
                                        document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                                        document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                                        document.querySelector('#hintbackground').classList.add("openMenuAnim");
                                        document.querySelector('#hint').classList.add("openMenuAnim");
                                        document.querySelector('#hintlabel').style.width = "100%";
                                        document.querySelector('#hintlabel').style.left = "0";
                                        document.querySelector('#hintlabel').innerText = "When Hogger has\nno Health, you win.";
                                        setTimeout(function () {
                                            document.querySelector('#triangle').style.visibility = "hidden";
                                            document.querySelector('#triangle').style.opacity = "0";
                                            document.querySelector('#triangle').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hintbackbackground').style.visibility = "hidden";
                                            document.querySelector('#hintbackbackground').style.opacity = "0";
                                            document.querySelector('#hintbackbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hintbackground').style.visibility = "hidden";
                                            document.querySelector('#hintbackground').style.opacity = "0";
                                            document.querySelector('#hintbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                            document.querySelector('#hint').style.visibility = "hidden";
                                            document.querySelector('#hint').style.opacity = "0";
                                            document.querySelector('#hint').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                            setTimeout(function () {
                                                document.querySelector('#triangle').style.visibility = "visible";
                                                document.querySelector('#triangle').style.opacity = "1";
                                                document.querySelector('#triangle').style.transition = "none";
                                                document.querySelector('#triangle').style.top = "74%";
                                                document.querySelector('#triangle').style.left = "63%";
                                                document.querySelector('#hintbackbackground').style.visibility = "visible";
                                                document.querySelector('#hintbackbackground').style.opacity = "1";
                                                document.querySelector('#hintbackbackground').style.transition = "none";
                                                document.querySelector('#hintbackbackground').style.top = "70.3%";
                                                document.querySelector('#hintbackbackground').style.left = "64.9%";
                                                document.querySelector('#hintbackground').style.visibility = "visible";
                                                document.querySelector('#hintbackground').style.opacity = "1";
                                                document.querySelector('#hintbackground').style.transition = "none";
                                                document.querySelector('#hintbackground').style.top = "70.5%";
                                                document.querySelector('#hintbackground').style.left = "65.1%";
                                                document.querySelector('#hint').style.opacity = "1";
                                                document.querySelector('#hint').style.transition = "none";
                                                document.querySelector('#hint').style.visibility = "visible";
                                                document.querySelector('#hint').style.opacity = "1";
                                                document.querySelector('#hint').style.transition = "none";
                                                document.querySelector('#hint').style.top = "71.5%";
                                                document.querySelector('#hint').style.left = "65.7%";
                                                document.querySelector('#hintlabel').style.left = "0%";
                                                document.querySelector('#hintlabel').style.top = "17%";
                                                document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
                                                document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
                                                document.querySelector('#hintbackground').classList.add("openMenuAnim");
                                                document.querySelector('#hint').classList.add("openMenuAnim");
                                                document.querySelector('#hintlabel').style.width = "100%";
                                                document.querySelector('#hintlabel').style.left = "0";
                                                document.querySelector('#hintlabel').innerText = "Spend 2 mana to deal 1 damage to an opponent!";
                                                setTimeout(function () {
                                                    document.querySelector('#triangle').style.visibility = "hidden";
                                                    document.querySelector('#triangle').style.opacity = "0";
                                                    document.querySelector('#triangle').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                                    document.querySelector('#hintbackbackground').style.visibility = "hidden";
                                                    document.querySelector('#hintbackbackground').style.opacity = "0";
                                                    document.querySelector('#hintbackbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                                    document.querySelector('#hintbackground').style.visibility = "hidden";
                                                    document.querySelector('#hintbackground').style.opacity = "0";
                                                    document.querySelector('#hintbackground').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                                    document.querySelector('#hint').style.visibility = "hidden";
                                                    document.querySelector('#hint').style.opacity = "0";
                                                    document.querySelector('#hint').style.transition = "visibility 0s 0.5s, opacity 0.5s linear";
                                                }, 4 * 1000)
                                            }, 1 * 1000)
                                        }, 4 * 1000)
                                    }, 1 * 1000)
                                }, 1 * 1000)
                            }, 4 * 1000)
                        }, 2 * 1000)
                    }, 1 * 1000)
                }, 0.25 * 1000);
            }, 1 * 1000);
            setTimeout(function () {
                song.play();
            }, 1 * 1000)
        }
        document.querySelector("#tutorialmenuContent").style.display = "none";
        document.querySelector("#tutorialmenu").style.display = "none";
    }, 0.125 * 1000);
};

// done pack button on click
donepackbtn.onclick = function () {
    document.getElementById('openpacks').classList.remove("openPackShakeScreenAnim");
    for (let i = 0; i < document.getElementsByClassName("pack").length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "none";
    }

    for (let i = 0; i < document.getElementsByClassName("pack").length; i++) {
        document.getElementsByClassName("pack")[i].style.display = "block";
    }

    // if remaining packs still exist run this function again
    let myPacks = Number(localStorage.getItem('myPacks'));
    if (myPacks >= 1) {
        init();
    }

    donepackbtn.style.display = "none";
    document.getElementById("openpacks").style.filter = "none";
    document.getElementById("backfrompackbtn").disabled = false;
    document.getElementById("containerOpenPack").style.display = "none";
    elementsToRemove = document.querySelectorAll(".flip-card");
    for (let i = 0; i < 5; i++) {
        elementsToRemove[i].remove();
    }
}

const targetDiv = document.getElementById("fps");
document.getElementById('togglefps').onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

/* on page load prompts the user to click in order to start/play the game and is 
done in order to prevent chrome and other browsers policy conflicts such as CORS */
const preventCORSbtn = document.getElementById('preventCORS');
preventCORSbtn.onclick = function () {
    document.getElementById('preventCORS').classList.add("fadeOutAnim");
    setTimeout(function () {
        document.getElementById('preventCORS').style.visibility = "hidden";
    }, 1 * 1000)
    if (hasPlayedTutorial_deserailized === null) {
        tutorial();
    } else {
        mainmenuOST.play();
        mainmenuOST.volume = 0.7;
        setTimeout(function () {
            voiceover.play();
        }, 0.55 * 1000);
        if (typeof crowdSnd.loop == 'boolean') {
            crowdSnd.loop = true;
        }
        else {
            crowdSnd.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        }

        crowdSnd.play();
        crowdSnd.volume = 0.5;
        document.querySelector('#blockmainmenu').style.display = "block";
        document.getElementById('mainmenu').style.visibility = "visible";
        document.getElementById('mainmenu').classList.add("zoomOutAnim");
        setTimeout(function () {
            document.querySelector('#blockmainmenu').style.display = "none";
            document.getElementById('mainmenu').classList.remove("zoomOutAnim");
        }, 4 * 1000);
    }

    tutorialIntroRunning = true;
    // document.getElementById("skipcinematicbtn").style.display = "none";
    let cinematicvideo = document.getElementById("cinematicVideo");
    cinematicvideo.pause();
    cinematicvideo.style.display = "none";
    document.querySelector(".playerhero").style.visibility = "hidden";
    document.querySelector(".opponentHeroContainer").style.visibility = "hidden";
    document.querySelector(".opponentHeroContainer").style.backgroundImage = "url(src/media/images/hogger.png)";
    document.querySelector('#endturn').style.zIndex = "10";
    document.querySelector(".playerhero").style.zIndex = "20";
    document.querySelector(".opponentHeroContainer").style.zIndex = "5";
    document.getElementById('transitionblock').style.visibility = "visible";
    document.getElementById("block").style.visibility = "visible";
    document.querySelector('#endturn').style.zIndex = "9";
    setTimeout(function () {
        document.getElementById('transitionblock').classList.add("fadeInAnim");
        document.getElementById('transitionblock').classList.add("fadeOutAnim");
        setTimeout(function () {
            document.getElementById('transitionblock').style.visibility = "hidden";
            document.querySelector('#triangle').style.visibility = "visible";
            document.querySelector('#hintbackbackground').style.visibility = "visible";
            document.querySelector('#hintbackground').style.visibility = "visible";
            document.querySelector('#hint').style.visibility = "visible";
            document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
            document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
            document.querySelector('#hintbackground').classList.add("openMenuAnim");
            document.querySelector('#hint').classList.add("openMenuAnim");
        }, 1 * 1000);
    }, 1 * 1000);
}
// button to skip the cinematic for the tutorial
// skipcinematicbtn.onclick = function () {
// tutorialIntroRunning = true;
// document.getElementById("skipcinematicbtn").style.display = "none";
// let cinematicvideo = document.getElementById("cinematicVideo");
// cinematicvideo.pause();
// cinematicvideo.style.display = "none";
// document.querySelector(".playerhero").style.visibility = "hidden";
// document.querySelector(".opponentHeroContainer").style.visibility = "hidden";
// document.querySelector(".opponentHeroContainer").style.backgroundImage = "url(src/media/images/hogger.png)";
// document.querySelector('#endturn').style.zIndex = "10";
// document.querySelector(".playerhero").style.zIndex = "20";
// document.querySelector(".opponentHeroContainer").style.zIndex = "5";
// document.getElementById('transitionblock').style.visibility = "visible";
// document.getElementById("block").style.visibility = "visible";
// document.querySelector('#endturn').style.zIndex = "9";
// setTimeout(function () {
//     document.getElementById('transitionblock').classList.add("fadeInAnim");
//     document.getElementById('transitionblock').classList.add("fadeOutAnim");
//     setTimeout(function () {
//         document.getElementById('transitionblock').style.visibility = "hidden";
//         document.querySelector('#triangle').style.visibility = "visible";
//         document.querySelector('#hintbackbackground').style.visibility = "visible";
//         document.querySelector('#hintbackground').style.visibility = "visible";
//         document.querySelector('#hint').style.visibility = "visible";
//         document.querySelector('#triangle').classList.add("triangleOpenMenuAnim");
//         document.querySelector('#hintbackbackground').classList.add("openMenuAnim");
//         document.querySelector('#hintbackground').classList.add("openMenuAnim");
//         document.querySelector('#hint').classList.add("openMenuAnim");
//     }, 1 * 1000);
// }, 1 * 1000);
// };

// custom cursor when attacking with the use of svg
const onMouseOuterMove = (e) => {
    document.getElementById('outercursor').style.left = e.pageX + 'px';
    document.getElementById('outercursor').style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseOuterMove);

const onMouseInnerMove = (e) => {
    document.getElementById('innercursor').style.left = e.pageX + 'px';
    document.getElementById('innercursor').style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseInnerMove);

const onMouseTriangleMove = (e) => {
    document.getElementById('arrowcursor').style.left = e.pageX + 'px';
    document.getElementById('arrowcursor').style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseTriangleMove);
