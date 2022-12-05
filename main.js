let story;

function getStory(playerName) {
    return {
        currentScene: "begin",
        begin: {
            title: "You wake up.",
            description: "You find yourself sitting on a desk chair. Your head hurts and you have no memory of how or when you ended up here. The room is dark and in front of you lies a bright computer monitor with some text flickering on it.",
            choices: [
                {
                    choice: "Look around.",
                    destination: "scenedescription"
                },
                {
                    choice: "Forget about it and try to go back to sleep.",
                    destination: "ending1"
                }
            ]
        },

        ending1: {
            title: "<span>You died.</span>",
            description: "You decide to ignore the messages on the screen. Your eyelids grow heavy and your mind drifts away falling asleep. You die without knowing why or how. Perhaps this is the fate you deserve.",
            defaultDestination: "begin",
            buttonText:"Try again"
        },

        scenedescription: {
            title: "You look around.",
            description: "In front of you lays an ordinary black colored desk. On it stands a flickering monitor along with a keyboard and a mouse. Besides the monitor you can spot a small rectangular paper box laying on its side. ",
            choices: [
                {
                    choice: "Look at the screen.",
                    destination: "pcscreen"
                },
                {
                    choice: "Check the box.",
                    destination: "boxscene"
                }
            ]
        },

        boxscene: {
            title: "You pick up the box.",
            description: "The box is small with a red stripe on the edge and the title says <b>Belsomra</b>. Small letters cover the rest of the box and inside you find a blister pack of pills along with an instruction leaflet.",
            choices: [
                {
                    choice: "Check the pills.",
                    destination: "pillcount"
                },
                {
                    choice: "Read the leaflet.",
                    destination: "leafletread"
                },
                {
                    choice:"Put down the box.",
                    destination:"scenedescription"
                }
            ]
        },

        pillcount: {
            title: "You hold the blister pack",
            description: "The pack is a bit worn and you see most of the blister slots are empty. There is one pill left.",
            choices: [
                {
                    choice: "Take the pill.",
                    destination: "takepillending"
                },
                {
                    choice: "You put the pack back in the box.",
                    destination: "boxscene"
                }
            ]

        },

        takepillending: {
            title: "<span>You died.</span>",
            description: "You decide to take the pill. All you can think about is getting some sleep without troubling your mind with how and why you are here. You don't think its important anyway. You drift away and never wake up again.",
            defaultDestination: "begin",
            buttonText:"Try again"
        },

        leafletread: {
            title: "You pick up the leaflet.",
            description: "The paper is unopened and in pristine condition as if nobody ever bothered to read it before. Quickly you realize the instructions are about sleeping pills. You skip through most of the tiny writing till you reach a bold headline that says <b>SIDE EFFECTS</b>. Bellow it you find a list of potential side effects. You start feeling uneasy as your eye catches the phrases <i><b>suicidal thoughts, muscle weakness, short term memory loss, parasomnia</i></b>.",
            choices: [
                {
                    choice: "You put the instruction leaflet back in the box.",
                    destination: "boxscene"
                }
            ]
        },

        pcscreen: {
            title: "You look at the screen.",
            description: "You notice two open tabs on a strange internet browser.",
            choices: [
                {
                    choice: "Use the computer.",
                    destination: "usecomputer"
                },
                {
                    choice: "Try to leave the room.",
                    destination: "leaveroom"
                },
                {
                    choice: "Look around.",
                    destination: "scenedescription"
                }
            ],
        },

        usecomputer: {
            title: "You use the computer.",
            description: "Your left hand hovers on top of the keyboard and your right hand lays comfortably on the mouse. ",
            choices: [
                {
                    choice: "Click on the first tab.",
                    destination: "firsttab"
                },
                {
                    choice: "Click on the second tab",
                    destination: "secondtab"
                },
                {
                    choice: "Play video games.",
                    destination: "videogameending3"
                },
                {
                    choice: "Go back.",
                    destination: "pcscreen"
                }
            ],
        },

        videogameending3:{
            title: "<span>You died.</span>",
            description: "<i>Screw all this</i>, you think to yourself. You open your favourite video game. It's a MOBA type of game with a huge player base. You've spent half your life playing this game and even if you don't even enjoy it most of the time, you keep on playing every single day. You join the queue, the screen flashes the words <i>Accept match?</i> you click <i>Yes</i> and eventually you start playing. Sometime passes by and you hear a strange noise coming from within your house. You pay no attention to it since the match isn't over yet and you are so close to winning. At least that's what you think. Moments pass and you feel a sharp pain on your back and then... darkness. Your mind is filled with questions and as you dose off the last thing you hear coming from the computer is... <b>Defeat</b>.",
            defaultDestination: "begin",
            buttonText:"Try again"

        },

        firsttab: {
            title:"You click the first tab.",
            description: "The tab on the right seems to contain some kind of a primitive chatting service filled with messages of red text and an input bar on the bottom.",
            choices: [
                {
                    choice: "Read the messages.",
                    destination: "readmessages"
                },
              
                {
                    choice: "Go back.",
                    destination: "usecomputer"
                }
            ],
        },

        readmessages:{
            title:"You read the messages",
            description: `The exchange seems to be between <b>${playerName}</b> and a user called <b>alexron223</b> and the time stamps indicate the conversation took place 2 hours ago. You have no memory of being part of this but you see unmistakably your username on the screen. Strangely, the other user <b>alexron223</b> appears to know you and from your response it seems that you know them too. <p> The topic you discuss is related to the deep web, so that explains the odd browser you are currently on. You heard of stories on the deep web about people buying illegal stuff and hiring assasins but you decided it was all a tale meant to spread fear. Alex, as their username suggests, tries to convince you that they found a very suspicious looking site that might change your mind about the existence of red rooms particularly. </p>You already know what <b>red rooms</b> are but you never believed the stories you read online. After that text a link follows with strange characters accompanied by a .orion suffix. You don't remember clicking it but what harm could it do, you think to yourself.`,
            choices: [
                {
                    choice: "Click on the link.",
                    destination: "linkclick"
                },
              
                {
                    choice: "Go back.",
                    destination: "usecomputer"
                }
            ],
        },

        linkclick:{
            title:"You click the link.",
            description: "As your mouse hovers the link Alex sent you, second thoughts appear on your mind. Surely, they wouldn't send something malicious, you reassure yourself even though you don't even remember who Alex is. You decide to ignore all your reservations and finally click on the link in front of you. A few seconds pass and ...nothing. The website that opens is empty, just a white page. You think that this was a waste of time, probably a stupid prank.",
            choices: [
                {
                    choice: "Forget about it and look at the screen.",
                    destination: "usecomputer"
                },
            ]
        },

        secondtab:{
            title:"You click the second tab.",
            description: `The view sends a chill down your spine. In the middle of the webpage appears to be some kind of a low quality webcam feed showing a person sitting on a chair. You don't initially recognize the person on the screen until it finally hits you. The person on the screen is <b> you</b>. <p>Your heart starts to race as you notice bellow the feed, with bright red letters <b> ${playerName} </b> written along with a timer currently showing <b>15 minutes and 24 seconds.</p></b>`,
            choices: [
                {
                    choice: "Try to cover the camera.",
                    destination: "cameracover"
                },
                {
                    choice: "Skim through the page.",
                    destination: "skimpage"
                },
                {
                    choice: "Try to text the person on the first tab.",
                    destination: "typemessage"
                },
                {
                    choice: "Go back.",
                    destination: "usecomputer"
                }
            ],

        },

        typemessage:{
            title: "You text the person on the first tab.",
            description:"After switching tabs you place both of your hands on the keyboard. Your fingers tremble from the stress and you stretch them trying to shake off the feeling. You think about how to approach this for a moment and decide to explain everything you saw sparing no detail. You press send and wait for a response. Suddenly, at the bottom of the screen an indicator flashes followed by the text <i> <b>alexron223</b> is typing... </i>. As if they were expecting your text the response came in an instant. <p>You clench your fists in agony as you read the response, your eyes fixed on the screen, your mouth slightily agape. You can't initially comprehend the message in front of you so you read it again and again until you have no other choice than to believe it, as if you waited somehow it would change. You have been trapped all along, by the person you can't remember knowing. They admitted to have sent you a link that collects all your personal information from your computer and sends them to none other than the red room operators. You realize that sometime before you wake up you must have clicked the link without knowing the consequences that would follow. As to why Alex would betray your trust and endanger your life, you have no answer yet. </p><p>Determined to get to the bottom of this you demand an explanation.</p>",
            choices: [
                {
                    choice:"Demand an explanation.",
                    destination: "explanationscene"
                },
                {
                    choice:"Leave the chat.",
                    destination: "secondtab"
                    
                }
            ]

        },

        explanationscene:{
            title:"You demand an explanation.",
            description:"Your hands type fast, driven by pure rage. You are determined to get to the bottom of this and right know the only one that can help you is <b>alexron223</b>. You hate them, that's certain, but they are your only hope. You stop typing for a moment, trying collect your thoughts. You read the message you've written so far and even though you are absolutely justified you know you shouldn't be so vulgar if you expect them to cooperate. Your index finger moves all the way to the backspace button and after pressing on it all the text disappears. <p>You close your eyes, take a big breath and as calm as one can be in a situation like this you begin once again to type. It doesn't take long to finish and again almost immediately the reply arrives. Fear overwhelms you but you have to know the truth at last. The message is simple, the words familiar yet your conscious takes a moment to make the connection. The good news? There is a way out of your situation. The bad news? The only way you can escape your predicament is to trade your place. </p><p>You think for a second, the word trade troubles you. Surely they don't mean to sacrifice someone you know. Then you realize that Alex was facing exactly the same dilemma, and they chose to save themselves at your expense. You probably deserved it since you foolishly clicked the link but you shrug off that thought immediately. Now all that is left is for you to make a choice. </p><p>Do you betray someone you know, possible leading them to their demise, in a vague attempt to survive? Or do you refuse to be a pawn in some strangers sick game, hoping that there is possibly another way out?</p>",
            choices: [
                {
                    choice:"Send the link.",
                    destination: "lastchance"
                },
                {
                    choice:"Try to find another way out.",
                    destination:"usecomputer"
                }
            ]

        },

        lastchance:{
            title:"You decide to send the link",
            description:"The time has come and now all that's left is to decide is where to send the link. There is no room for error, you know very well that your life depends on this moment. At first, you think about sending it to someone you dislike, you imagine it's going to be easier on your conscience if you have a <i>good</i> reason. It feels petty though and you cant think of anyone that actually deserves that fate. You can convince yourself that you aren't the bad guy and you have no other choice but in the end it all comes down to your life or someone else's and you are not dying today. <p>Drifting back to the problem at hand you realize that besides the person, you need to make sure that they are someone who will certainly open the link as fast as possible. This narrows down your options a little, so for starters you decide to check to see who is online at the moment. You open your usual messaging platform and then head to the available tab. Since it's late you don't expect to see many people but to your surprise there is in fact only one person online. You gulp as you read the name shown on the screen. It's your best friend. It makes sense since you usually play video games together at this hour. The gravity of the situation comes crushing down on you, you know that they are the perfect candidate, they trust you enough to click to whatever you send them with minimum questions asked, but can you really betray them?</p> Faced with an impossible decision you contemplate on it one last time...",
            choices: [
                {
                    choice:"Send the link to your friend.",
                    destination:"surviveending"
                },
                {
                    choice:"Don't send the link.",
                    destination:"ending6"
                }
            ]
        },

        surviveending:{
            title:"You survived.",
            description:"There is no going back now and you have made up your mind. You quickly switch tabs in order to copy the link <b>alexron223</b> previously sent you and then you return to the messaging app. You click on <b>Jade M. 's</b> profile, that's the name of your childhood friend, you also notice their profile picture which is them smiling at the camera with drinks and neon lights as the background. You remember when they took that picture, it was at the local bar where they celebrated their 21st birthday about a year ago. </p><p>You start to have second thoughts about all this. How can you betray them so easily, you think over and over again, yet you shrug off all your thoughts in an instant and you click send after pasting the link on the chat input. This is the only way, you tell to yourself. Not long after they reply asking about your cryptic message. You lie of course, you want them to click it so you respond with something generic about a video game you are playing lately. And then nothing no response, did it work? Are you safe now? The only way of knowing for sure is to check the red room website. <p>You head back there and the place where your face used to appear is empty. Above it the text <i>We'll be back shortly...</i> appears. You hold your breath, counting the seconds, until the website starts to buffer and then as if nothing changed a person appears on the screen. You don't know which scenario scares you more, your face appearing again on the screen or your friend's. You take a second to collect yourself and you decide to look carefully at the screen. Its Jade, simply staring at their screen, not knowing that they are currently broadcasted in a site hosted in the deep web. </p><p>A thought passes over your head, you need to warn them. Before you can even process the thought you hear a notification sound. You received a message from <b>alexron223</b>. Without hesitation you click it and as you were afraid it would, it reads: <i>You can't <b>warn</b> them, and you can't let them know unless they reach you first. These are the rules.</i> Defeated, you lay back on your chair pondering your actions once again. There is nothing you can do now, some would say you've done enough as it is. </p><p>You check the timer on the website and it says <b>2 hours 30 minutes</b>. Your eyes stuck on the screen, watching your friend simply existing without knowing that they have only two and a half hours to live is a feeling worse than anything you have experienced so far. You imagine the others that watch the stream, their deranged perverted minds enjoying the show of your helpless friend just like they watched you before. At that moment you wonder, are you really fitted to judge anyone considering what you just did? That thought brings you pain, like somebody stubbing your chest only this time there is no wound. You decide to close the page and wait, hoping that somehow Jade will reach out and you will be able to save them...</p>",
            defaultDestination: "begin",
            buttonText:"The End"
        },

        ending6:{
            title:"You died.",
            description:"This is the end and you know it. Yet you feel surprisingly relaxed and composed, almost peaceful. It's probably due to fact that, in a way you actually have a say in how things will unfold for the first time since you woke up today. You know that any minute now your life will be over and you don't even try to prevent it, tired and defeated. At least nobody else has to die because of you, your morals are intact till the very end. Maybe it's for the best, you think for a moment, you never believed your life had much meaning anyway. You lay back on the chair relax your arms, close your eyes and wait for the inevitable fate that awaits you...",
            defaultDestination: "begin",
            buttonText:"Try again"
        },

        skimpage: {
            title:"You skim through the page.",
            description:"While trying to contain your panic you click around the page trying to get some more info about this website. After a moment everything is finally clear to you. This is a <b>red room</b> where people pay to watch someone do unspeakable things to a victim of their choice and your appearance there can only mean one thing. You are the victim.",
            choices: [
                {
                    choice: "Go back.",
                    destination: "usecomputer"
                }
            ]
        },

        cameracover: {
            title:"You try to cover the camera.",
            description:"You try to find something around you to cover the webcam that sits on top of your monitor. Unfortunately there is nothing sufficient so in a state of desperation you pull the camera with your hand and subsequently unplug it from the pc. The feed on the website also stops as a consequence showing static.",
            choices:[
                {
                    choice: "Relax with the result.",
                    destination: "ending5"
                },
                {
                    choice: "Something still doesn't feel right. Go back.",
                    destination: "usecomputer"
                }

            ]
        },

        ending5: {
            title:"<span>You died.</span>",
            description:"You relax as you see static where the stream used to be and decide to take sometime to think about the situation. You reach the conclusion that a virus probably infected your computer and that's how people got access to your webcam. You think a simple format will fix your problem and you lean back to your chair victorious. <p>Around 8 minutes pass and you notice that there is movement coming from your monitor. Taking a closer look you find out that the stream is back on but this time it doesn't show your face. Instead there is a shaky footage probably originating of somebody's phone camera. The individual appears to be walking slowly and carefully as if they try not to get caught. You start to feel uneasy as the person holding the camera lockpicks a door of a house with great ease and enters a hallway. The hallway although dark seems somewhat familiar. Your subconscious picks up a noise that your conscious ignores, transfixed on the monitor.</p> The person on the stream now approaches something at the far end of the room. As they get closer you realize its a person sitting on a desk chair looking at their pc monitor. In a flash of a second you make the connection. The person appearing on the stream is once more your only this time your attacker is seconds away. You attempt to look behind you and as you do a sharp pain pierces through your stomach as the attackers knife penetrates your flesh. You fall on the ground and as your vision fades away you see a person standing above you, filming your last moments on earth. ",
            defaultDestination: "begin",
            buttonText:"Try again"

        },

        leaveroom: {
            title: "You try to leave.",
            description: "As you try to get up from the chair you realize your legs don't respond to your commands.",
            choices: [
                {
                    choice: "Try to scream",
                    destination: "screamscene"
                },
                {
                    choice: "Keep trying to get up.",
                    destination: "ending4"
                },
                {
                    choice: "Look around.",
                    destination: "scenedescription"
                }
            ]

        },
////
        ending4: {
            title: "<span>You died.</span>",
            description: "You keep trying to get up squirming and fighting on your chair until you suddenly slip and fall on the floor. Your vision is blurry, your back aches but you are determined so you use your hands trying to crawl till the door. As you aproach the door you hear a click on the lock and the door opens. Panic washes over you as you tilt your head upwards, waiting for whatever is standing behind the door to appear. A masked man stands above you holding what appears to be a knife. You turn your upper body in an attempt to crawl away from the threat screaming for help but you are too slow and in a flash of a moment the intruder gets on top of you and slashes your throat from behind. Suddenly the room is silent once more and you linger helplessly on the floor as life exits your body.",
            defaultDestination: "begin",
            buttonText:"Try again"

        },

        screamscene:{
            title:"You try to scream.",
            description:"You open your mouth, take the biggest breath your lungs can hold and scream like your life depends on it, because it does. Unfortunately you are all alone in the house and nobody responds to your pleas.",
            choices: [
                {
                    choice: "Go back.",
                    destination: "leaveroom"
                }
            ]
        }

    }
}


document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button');
    let content = document.querySelector('#content');
    const playerName = document.querySelector('#name-input');
    button.addEventListener('click', function() {
        const playerName = document.querySelector('#name-input');
        story = getStory(playerName.value);
        renderScene();
    })
})

function renderScene(){
    let text = "Continue";
    if(story[story.currentScene].buttonText){
        text= story[story.currentScene].buttonText;
    }
    content.innerHTML=`
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].description}</p>
        ${getInputs()}
        <button id="submit-button">${text}</button>
     `
    let button = document.querySelector("#submit-button")
    button.addEventListener('click', function() {
        getRadioChoice()
    }) 
};

function getRadioChoice(){
   let radioInput = document.querySelectorAll('input[type="radio"]')
   for(let i=0; i< radioInput.length; i++){
    if(radioInput[i].checked){
        story.currentScene = radioInput[i].getAttribute('data--destination');
        renderScene();
        return ;
    }   
   }
   story.currentScene = story[story.currentScene].defaultDestination;
   renderScene();
}

function getInputs(){
    let input = "";
    if(!story[story.currentScene].choices){
        return "";
    }
    for(let i=0; i<story[story.currentScene].choices.length; i++){
        input += `
        <div>
            <input data--destination=${story[story.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices"></input>
            <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
        };
        return input;
}




