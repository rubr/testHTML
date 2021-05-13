var klik=true;
function mainaBildi(elemn){
    //if (klik) document.getElementById("poga").src="images/possum_awake.png";
    //else document.getElementById("poga").src="images/possum.png";
    if (klik) elemn.src="images/possum_awake.png";
    else elemn.src="images/possum.png";
    klik=!klik;
}

function maina(){
    let stils1, stils2;
    let tt = document.getElementById("pogab");
    stils1 = tt.style.visibility;
    if (stils1=="visible") stils2="hidden"; else stils2="visible";
    tt.style.visibility = stils2;
    //setTimeout(function(){tt.style.visibility=stils1;},2000);
}

function clear() {
    var x = document.getElementsByClassName("hover-thingy");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function start() {
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
  document.getElementById("disp").innerHTML = text;
  
  sajukums(parseInt(x*x/2));
}

let list1 = ["possum","axolotl","olm","lyrebird","stick bug","sun bear","capybara","parrotfish","okapi","red-lipped batfish",
    "saiga antilope", "hummingbird hawk-moth", "poodle moth", "tenrec", "sea pen", "pangolin", "ferret", "narwhal"];
let list2 = ["possum.png","axolotl.png","olm.png","lyrebird.png","stickbug.png","sunbear.png","capybara.png","parrotfish.png",
    "okapi.png","batfish.png","saiga.png","hummingbird.png","poodle.png","tenrec.png","seapen.png","pangolin.png","ferret.png",
    "narwhal.png"];
let saraksts=[];
let type=[];
function sajukums(len){
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
    document.getElementById("disp").innerHTML = saraksts;
    
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
            var xx = x[0].getElementsByTagName('span');
            xx[0].innerHTML = saraksts[i];
        }
        else
        {
            var x = document.getElementById(String(i+1)).getElementsByTagName('img');
            x[0].style.display = "inline";
            x[0].src = "images/" + saraksts[i];
        }
    }
}

