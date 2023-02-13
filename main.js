function mrda(){
  var a = parseInt(document.querySelector("#conc").value);
  var b = document.querySelector("#LA").value;

  var mrd;

  if(b == "lido"){
    mrd = (500/(a*10)).toFixed(2)

  } else if (b == "arti") {
    mrd = (500/(a*10)).toFixed(2)
  } else if (b == "mepi") {
    mrd = (400/(a*10)).toFixed(2)
  } else if (b == "prilo") {
    mrd = (600/(a*10)).toFixed(2)
  } else if (b == "bupi") {
    mrd = (200/(a*10)).toFixed(2)

  }

document.querySelector("#result").innerHTML=mrd;
}

function mrdw(){

  var b =document.querySelector('#LA').value;
  var w =parseInt(document.querySelector('#wt').value);

  var mrd2;
  if(b == "lido"){
    mrd2 = (w * 7).toFixed(2)
     if(mrd2 > 500){
       mrd2= 500
    }

  } else if (b=="arti") {
    mrd2 = (w*7).toFixed(2)
  } else if (b=="mepi") {
    mrd2 = (w* 6.6).toFixed(2)
    if(mrd2 > 400){
      mrd2= 400
    }
  } else if (b=="prilo") {
    mrd2 = (w*8).toFixed(2)
     if(mrd2 > 600){
       mrd2= 600
    }
  } else if (b=="bupi") {
    mrd2 = (w*2).toFixed(2)
     if(mrd2 > 90){
       mrd2 = 90
    }

  }
document.querySelector("#done").innerHTML=mrd2;
}
