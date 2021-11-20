const text_character = {
    text:['Welcome To','Welcome To','Welcome To','Welcome To',
          'Welcome To', 'Welcome To','Welcome To',
          'The Happy Village','The Happy Village','The Happy Village',
          'The Happy Village','The Happy Village','The Happy Village',
          'The Happy Village'],
    elem: document.querySelector("#text"),
    screenWidth: document.querySelector("#park").clientWidth,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 400,
    y: document.querySelector("#park").scrollHeight - 560,
    timerId: null,
    poseNumber: 0,
    index:1,
    index2:1,
    move: function () {
            if (this.index == 80) {
            this.x -=5;  
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            let text_change = this.elem ;
            text_change.innerHTML= this.text[this.poseNumber];    
            this.poseNumber = (this.poseNumber + 1) % 14;
            this.index2++;

                  if(this.index2==80){
                      this.x=400;
                      this.index=1;
                      this.index2=1;
                    }
                } 
            else{
                this.x +=5;
                this.elem.style.top = this.y + "px";
                this.elem.style.left = this.x + "px";
                let text_change = this.elem ;
                text_change.innerHTML= this.text[this.poseNumber]
                this.poseNumber = (this.poseNumber + 1) % 14;
                this.index++
                }
},       
};
const windmill_character={
windmill_imgs: ["windmill0000.png", "windmill0001.png", "windmill0002.png", 
                "windmill0003.png", "windmill0004.png", "windmill0005.png", 
                "windmill0006.png", "windmill0007.png", "windmill0008.png",
                "windmill0009.png", "windmill0010.png", "windmill0011.png", 
                "windmill0012.png", "windmill0013.png", "windmill0014.png", 
                "windmill0015.png", "windmill0016.png", "windmill0017.png",
                "windmill0018.png", "windmill0019.png", "windmill0020.png",
                "windmill0021.png", "windmill0022.png", "windmill0023.png",
                ],
poseNumber: 0,
elem: document.querySelector("#windmill"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: 650,
y: document.querySelector("#park").scrollHeight - 430,
timerId: null,
move: function () {
this.elem.style.top = this.y + "px";   
this.elem.style.left = this.x + "px";
this.elem.src =
this.windmill_imgs[this.poseNumber];
this.poseNumber = (this.poseNumber + 1) % 24;
}
};
const chicken_character={
chicken_imgs: [ "pickings0000.png","pickings0001.png","pickings0002.png",
                "pickings0003.png","pickings0004.png","pickings0005.png",
                "pickings0006.png","pickings0007.png","pickings0008.png"
              ],
poseNumber: 0,
elem: document.querySelector("#chicken"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: Math.floor(Math.random()*50) + 400,
y: Math.floor(Math.random()*50) + 300,
timerId: null,
index:1,
move: function () {
     if (this.index== 10 ){
        this.x=  Math.floor(Math.random()*50) + 400;
        this.y= Math.floor(Math.random()*50) + 300;
        this.index=1;
        }
    else{
        this.elem.style.top = this.y + "px";  
        this.elem.style.left = this.x + "px";
        this.elem.src =this.chicken_imgs[this.poseNumber];
        this.poseNumber = (this.poseNumber + 1) % 9;
        this.index++
        } 
}
}; 
const black_sheep_character={
black_sheep_imgs: [ "eatinge0000.png",  "eatinge0001s.png","eatinge0002s.png",
                    "eatinge0003s.png", "eatinge0004s.png","eatinge0005s.png", 
                    "eatinge0006s.png", "eatinge0007s.png","eatinge0008s.png"
                  ],
poseNumber: 0,
elem: document.querySelector("#black_sheep"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: 800,
y: document.querySelector("#park").scrollHeight - 310,
timerId: null,
move: function () {
this.elem.style.top = this.y + "px";   
this.elem.style.left = this.x + "px";
this.elem.src =
this.black_sheep_imgs[this.poseNumber];
this.poseNumber = (this.poseNumber + 1) % 9;
}
};

const horse_character = {
horse_imgs: ["runninge0000.png", "runninge0001.png","runninge0002.png", 
             "runninge0003.png", "runninge0004.png","runninge0005.png", 
             "runninge0006.png", "runninge0007.png",
            ],
horse_eating_imgs:["eatinge0001.png","eatinge0002.png","eatinge0003.png","eatinge0004.png","eatinge0005.png"],
poseNumber: 0,
elem: document.querySelector("#horse"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: 0,
y: document.querySelector("#park").scrollHeight - 200,
timerId: null,
index:1,
move: function () {
        if (this.x == 1200) {
            horse_character.x = 1200;
            this.elem.style.top = this.y + "px";   
            this.elem.src =this.horse_eating_imgs[this.poseNumber]; 
            this.poseNumber = (this.poseNumber + 1) % 5;
            this.index++;
            if (this.index==15){
                this.x=0
                this.index=1
            }
            }     
       else {
            this.x += 10;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src = this.horse_imgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;   
            }
}
};
const boat_character = {
boat_imgs:[ "fährt003.png",],
poseNumber: 0,
elem: document.querySelector("#boat"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: document.querySelector("#park").clientWidth,
y: document.querySelector("#park").scrollHeight - 150,
timerId: null,
move: function () {
        if (this.x < 0) {
            this.x = this.screenWidth;
            this.y= document.querySelector("#park").scrollHeight - 150;
             } 
        else {
            this.x -= Math.floor(Math.random() * 5+5);
            this.y +=Math.floor(Math.random() * 0.01);
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =this.boat_imgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 1;  
             }
}
};
const butterfly_character = {
butterfly_imgs: ["butterflyn0000.png", "butterflyn0001.png","butterflyn0002.png", 
                "butterflyn0003.png", "butterflyn0004.png","butterflyn0005.png", 
                "butterflyn0006.png",
                ],
poseNumber: 0,
elem: document.querySelector("#butterfly"),
screenWidth: document.querySelector("#park").clientWidth,
screenHeight: document.querySelector("#park").scrollHeight,
x: 20,
y: document.querySelector("#park").scrollHeight - 70,
timerId: null,
move: function () {
        if (this.y <260) {
            butterfly_character.x = 20;
            this.y =document.querySelector("#park").scrollHeight - 70;
             } 
        else {
            this.y -=2;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =this.butterfly_imgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 7;
             }
}
};

function move() {
    horse_character.timerId = setInterval(horse_frame, 100);
    boat_character.timerId = setInterval(boat_frame, 100);
    butterfly_character.timerId = setInterval(butterfly_frame, 100);
    black_sheep_character.timerId = setInterval(black_sheep_frame, 100);
    chicken_character.timerId = setInterval(chicken_frame, 100);
    windmill_character.timerId = setInterval(windmill_frame, 100);
    text_character.timerId = setInterval(text_frame,100);
    };
function horse_frame() {

    horse_character.move();
    };
 function boat_frame() {
    boat_character.move();
    };
function butterfly_frame () {
    butterfly_character.move();
    };
function black_sheep_frame() {
    black_sheep_character.move();
    };
function chicken_frame() {
    chicken_character.move();
    };
function windmill_frame() {
    windmill_character.move();
    };
    function text_frame() {
        text_character.move();
    };
function stopMoving() {
    clearInterval(horse_character.timerId);
    clearInterval(boat_character.timerId);
    clearInterval(butterfly_character.timerId);
    clearInterval(black_sheep_character.timerId);
    clearInterval(chicken_character.timerId);
    clearInterval(windmill_character.timerId);
    clearInterval(text_character.timerId);
    };

    