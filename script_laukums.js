function clear() {
    var x = document.getElementsByClassName("hover-thingy");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

var len = 0;
var time = 0;
var timer;
function start() {
    statu = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    click = 0;
    click1 = -1;
    click2 = -1;
    time = 0;
    
    clearInterval(timer);
    timer = setInterval(function() { time++; document.getElementById("timetext").innerHTML = "Time: " + String(time) + " seconds"; }, 1000);
    document.getElementById("timetext").innerHTML = "Time: 0 seconds";
    
    var x, text;

  // Get the value of the input field with id="size"
  x = document.getElementById("size").value;

  // do things with the size
  clear();
  let xx;
  let i;
  switch (x)
  {
      case "2":
            xx = document.getElementsByClassName("2x2");
            for (i = 0; i < xx.length; i++) {
                xx[i].style.display = "inline-block";
            }
      break;

      case "4":
            xx = document.getElementsByClassName("4x4");
            for (i = 0; i < xx.length; i++) {
                xx[i].style.display = "inline-block";
            }
      break;

      case "6":
            xx = document.getElementsByClassName("6x6");
            for (i = 0; i < xx.length; i++) {
                xx[i].style.display = "inline-block";
            }
      break;
      
      default:
            text = "uhhhh....";
  }
  //document.getElementById("disp").innerHTML = text;
  
  len = parseInt(x*x/2);
  
  sajukums();
}

let list1 = ["possum","axolotl","olm","lyrebird","stick bug","sun bear","capybara","parrotfish","okapi","red-lipped batfish",
    "saiga antilope", "hummingbird hawk-moth", "poodle moth", "tenrec", "sea pen", "pangolin", "ferret", "narwhal"];
let list2 = ["possum.png","axolotl.png","olm.png","lyrebird.png","stickbug.png","sunbear.png","capybara.png","parrotfish.png",
    "okapi.png","batfish.png","saiga.png","hummingbird.png","poodle.png","tenrec.png","seapen.png","pangolin.png","ferret.png",
    "narwhal.png"];
let saraksts=[];
let type=[];
function sajukums(){
    saraksts=[];
    type=[]; // 0 = text; 1 = image
    for(let i=0;i<len;i++){
        saraksts.push(list1[i]);
        saraksts.push(list2[i]);
        type.push(0);
        type.push(1);
    }
    for(let i=0;i<saraksts.length;i++){
        var rand=Math.floor(Math.random()*saraksts.length);
        var tmp=saraksts[rand];
        saraksts[rand]=saraksts[i];
        saraksts[i]=tmp;
        
        tmp = type[rand];
        type[rand]=type[i];
        type[i]=tmp;
    }
    //document.getElementById("disp").innerHTML = saraksts;
    
    var xxx = document.getElementsByClassName("hover-thingy");
    for (let i = 0; i < xxx.length; i++) {
        var x = xxx[i].getElementsByTagName('button');
        x[0].style.display = "none";
        x = xxx[i].getElementsByTagName('img');
        x[0].style.display = "none";
    }
    
    for (let i = 0; i < saraksts.length; i++)
    {
        if (type[i] == 0)
        {
            var x = document.getElementById(String(i+1)).getElementsByTagName('button');
            x[0].style.display = "inline";
            x[0].style.visibility = "hidden";
            x[0].style.backgroundColor = "red";
            var xx = x[0].getElementsByTagName('span');
            xx[0].innerHTML = saraksts[i];
        }
        else
        {
            var x = document.getElementById(String(i+1)).getElementsByTagName('img');
            x[0].style.display = "inline";
            x[0].style.visibility = "hidden";
            x[0].src = "images/" + saraksts[i];
        }
    }
}

var click = 0;
var click1 = -1;
var click2 = -1;
var statu = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function change(idee) {
    var actid = parseInt(idee.id) - 1;
    if (statu[actid] == 0)
    {
        statu[actid] = 1;
        click++;
        
        switch (click)
        {
            case 1:
                click1 = actid;
                if (type[actid] == 0)
                {
                    var x = idee.getElementsByTagName('button');
                    x[0].style.visibility = "visible";
                }
                else
                {
                    var x = idee.getElementsByTagName('img');
                    x[0].style.visibility = "visible";
                }
                break;
                
            case 2:
                click2 = actid;
                if (type[actid] == 0)
                {
                    var x = idee.getElementsByTagName('button');
                    x[0].style.visibility = "visible";
                }
                else
                {
                    var x = idee.getElementsByTagName('img');
                    x[0].style.visibility = "visible";
                }
                if (list1.indexOf(saraksts[click1]) == list2.indexOf(saraksts[click2]) && list1.indexOf(saraksts[click1]) != -1 && list2.indexOf(saraksts[click2]) != -1 ||
                list2.indexOf(saraksts[click1]) == list1.indexOf(saraksts[click2]) && list2.indexOf(saraksts[click1]) != -1 && list1.indexOf(saraksts[click2]) != -1)
                {
                    statu[click1] = 2;
                    statu[click2] = 2;
                    if (type[click1] == 0)
                    {
                        var x = document.getElementById(String(click1+1)).getElementsByTagName('button');
                        x[0].style.backgroundColor = "orange";
                    }
                    if (type[click2] == 0)
                    {
                        var x = document.getElementById(String(click2+1)).getElementsByTagName('button');
                        x[0].style.backgroundColor = "orange";
                    }
                    click = 0;
                    click1 = -1;
                    click2 = -1;
                    let win_question = true;
                    for (let i = 0; i < 2 * len; i++)
                    {
                        if (statu[i] != 2) win_question = false;
                    }
                    if (win_question == true) win();
                }
                break;
                
            case 3:
                statu[click1] = 0;
                statu[click2] = 0;
                statu[actid] = 0;
                if (type[click1] == 0) {
                    var x = document.getElementById(String(click1+1)).getElementsByTagName('button');
                    x[0].style.visibility = "hidden";
                }
                else {
                    var x = document.getElementById(String(click1+1)).getElementsByTagName('img');
                    x[0].style.visibility = "hidden";
                }
                if (type[click2] == 0) {
                    var x = document.getElementById(String(click2+1)).getElementsByTagName('button');
                    x[0].style.visibility = "hidden";
                }
                else {
                    var x = document.getElementById(String(click2+1)).getElementsByTagName('img');
                    x[0].style.visibility = "hidden";
                }
                click = 0;
                click1 = -1;
                click2 = -1;
                break;
        }
        //document.getElementById("disp").innerHTML = String(click);
        //document.getElementById("disp2").innerHTML = String(statu);
        //document.getElementById("disp3").innerHTML = String(list1.indexOf(saraksts[click1])) + "/" + 
                //String(list2.indexOf(saraksts[click2]));
        
        
    }
}

function win() {
    clearInterval(timer);
    document.getElementById("timetext").innerHTML = "You win! Final time: " + String(time) + " seconds";
}

clear();