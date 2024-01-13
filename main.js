var subcontainer = document.querySelector(".subcontainer");
var innercontainer = document.querySelector(".innercontainer");

function getName() {
  var name = document.querySelector("#userName").value;
  document.getElementById("nameChange").innerHTML = "Hello " + name + " !";
}

$("#sc-btn").click(function () {
  $(".subcontainer").hide();
  $(".mb_result").hide();
  $(".innercontainer").fadeIn("slow");
});
$("#mb").click(function () {
  $(".wrapper1").show();
  $(".wrapper2").hide();
  $(".wrapper3").hide();
  $(".wrapper4").hide();
  $(".rchome").hide();
  $('#mb').css("background" , "#280323");
  $('#sa').css("background" , "#8906e6");
  $('#fl').css("background" , "#8906e6");
  $('#wg').css("background" , "#8906e6");
});
$("#sa").click(function () {
  $(".wrapper1").hide();
  $(".wrapper2").show();
  $(".wrapper3").hide();
  $(".wrapper4").hide();
  $(".rchome").hide();
  $('#mb').css("background" , "#8906e6");
  $('#sa').css("background" , "#280323");
  $('#fl').css("background" , "#8906e6");
  $('#wg').css("background" , "#8906e6");
});
$("#fl").click(function () {
  $(".wrapper1").hide();
  $(".wrapper2").hide();
  $(".wrapper3").show();
  $(".wrapper4").hide();
  $(".rchome").hide();
  $('#mb').css("background" , "#8906e6");
  $('#sa').css("background" , "#8906e6");
  $('#fl').css("background" , "#280323");
  $('#wg').css("background" , "#8906e6");
});
$("#wg").click(function () {
  $(".wrapper1").hide();
  $(".wrapper2").hide();
  $(".wrapper3").hide();
  $(".wrapper4").show();
  $(".rchome").hide();
  $('#mb').css("background" , "#8906e6");
  $('#sa').css("background" , "#8906e6");
  $('#fl').css("background" , "#8906e6");
  $('#wg').css("background" , "#280323");
});



//Muscle Building
function generate() {
  $(".innercontainer").hide();
  $(".mb_result").fadeIn("slow");


  var mb_height = document.getElementById("mb_height").value;
  var mb_weight = document.getElementById("mb_weight").value;
  var bodytype = document.getElementById("mb_bodytype").value;
  var duration = document.getElementById("mb_duration").value;
  var gender = document.getElementById("mb_gender").value;
  var age = document.getElementById("mb_age").value;
  

  //BMR CALCULATION
  if(gender === "Male"){
    var BMR = 88.362 + (13.397 * mb_weight) + (4.799 * mb_height) - (5.677 * age);
    BMR = BMR.toFixed(2);
    document.getElementById('mb_bmr').innerHTML = BMR;
  }
  else if (gender === "Female")
  {
    var BMR = 447.593 + (9.247 * mb_weight) + (3.098 * mb_height) - (4.330 * age);
    BMR = BMR.toFixed(2);
    document.getElementById('mb_bmr').innerHTML = BMR;
  }

  // MC CALCULATION
  var MC = Math.round(BMR * 1.55);
  document.getElementById('mb_mc').innerHTML = MC;

  // RC CALCULATION
  // var r = Math.random()
  var RC = MC + (200 + Math.round(Math.random() * 69));
  document.getElementById('mb_rc').innerHTML = RC;

  // BMI CALCULATION
  var bmi = (mb_weight/mb_height/mb_height) * 10000;
  var BMI = bmi.toFixed(1);

  if ((BMI > 0) && (BMI < 18.5)) {
    document.getElementById('mb_category').innerHTML="UNDERWEIGHT";
  }
  else if((BMI >= 18.5) && (BMI <= 24.9)){
    document.getElementById('mb_category').innerHTML="HEALTHY";
  } 
  else if((BMI >= 25) && (BMI <= 29.9)){
    document.getElementById('mb_category').innerHTML="OVERWEIGHT";
  } 
  else if((BMI >= 30) && (BMI <= 40)){
    document.getElementById('mb_category').innerHTML="OBESE";
  }

  var name = document.querySelector("#userName").value;
  name = name.toUpperCase();
  document.getElementById('res_heading').innerHTML = "USER PROFILE";
  document.getElementById('name').innerHTML = "NAME : "+name.toUpperCase();
  document.getElementById('res_age').innerHTML = "AGE : "+age+" years";
  document.getElementById('res_gender').innerHTML = "GENDER : "+gender;
  document.getElementById('res_height').innerHTML = "HEIGHT : "+mb_height+" cm";
  document.getElementById('res_weight').innerHTML = "WEIGHT : "+mb_weight+" kg";
  document.getElementById('res_duration').innerHTML = "DURATION : "+duration;
  document.getElementById('res_bodytype').innerHTML = "BODY TYPE : "+bodytype;
  
  document.getElementById('mb_bmi').innerHTML = BMI;

}



function sa_generate(){
  $(".innercontainer").hide();
  $(".sa_result").fadeIn("slow");


  var sa_height = document.getElementById("sa_height").value;
  var sa_weight = document.getElementById("sa_weight").value;
  var sa_bodytype = document.getElementById("sa_bodytype").value;
  var sa_gender = document.getElementById("sa_gender").value;
  var sa_age = document.getElementById("sa_age").value;
  var sa_sport = document.getElementById("sa_sport").value;
  sa_sport = sa_sport.toUpperCase();

  //BMR CALCULATION
  if(sa_gender === "Male"){
    var sa_BMR = 88.362 + (13.397 * sa_weight) + (4.799 * sa_height) - (5.677 * sa_age);
    sa_BMR = sa_BMR.toFixed(2);
    document.getElementById('sa_bmr').innerHTML = sa_BMR;
  }
  else if (sa_gender === "Female")
  {
    var sa_BMR = 447.593 + (9.247 * sa_weight) + (3.098 * sa_height) - (4.330 * sa_age);
    sa_BMR = sa_BMR.toFixed(2);
    document.getElementById('sa_bmr').innerHTML = sa_BMR;
  }

  // MC CALCULATION
  var sa_MC = Math.round(sa_BMR * 1.55);
  document.getElementById('sa_mc').innerHTML = sa_MC;

  // RC CALCULATION
  // var r = Math.random()
  var sa_RC = sa_MC + (350 + Math.round(Math.random() * 69));
  document.getElementById('sa_rc').innerHTML = sa_RC;

  // BMI CALCULATION
  var sa_bmi = (sa_weight/sa_height/sa_height) * 10000;
  var sa_BMI = sa_bmi.toFixed(1);
  document.getElementById('sa_bmi').innerHTML = sa_BMI;

  if ((sa_BMI > 0) && (sa_BMI < 18.5)) {
    document.getElementById('sa_category').innerHTML="UNDERWEIGHT";
  }
  else if((sa_BMI >= 18.5) && (sa_BMI <= 24.9)){
    document.getElementById('sa_category').innerHTML="HEALTHY";
  } 
  else if((sa_BMI >= 25) && (sa_BMI <= 29.9)){
    document.getElementById('sa_category').innerHTML="OVERWEIGHT";
  } 
  else if((sa_BMI >= 30) && (sa_BMI <= 40)){
    document.getElementById('sa_category').innerHTML="OBESE";
  }

  // Suitable Sport PREDICTION
  if(sa_bodytype === "Ectomorph"){
    document.getElementById('sa_ss1').innerHTML = "RUNNING";
  }
  else if(sa_bodytype === "Endomorph"){
    document.getElementById('sa_ss1').innerHTML = "WRESTLING";
  }
  else if(sa_bodytype === "Mesomorph"){
    document.getElementById('sa_ss1').innerHTML = "SWIMMING";
  }

  // HORMONE LEVEL IDENTIFIER
  if(sa_gender === "Male")
  {
    document.getElementById('hormone').innerHTML = "TESTOSTERONE LEVELS";
    if(sa_age <= 25)
    {
      document.getElementById('hl').innerHTML = "75% - 100%";
    }
    else if(sa_gender > 25 && sa_gender <= 45)
    {
      document.getElementById('hl').innerHTML = "60% - 75%";
    }
    else if(sa_gender > 45 && sa_gender <= 60)
    {
      document.getElementById('hl').innerHTML = "45% - 60%";
    }
    else
    document.getElementById('hl').innerHTML = "BELOW 45%";
  }
  else if(sa_gender === "Female")
  {
    document.getElementById('hormone').innerHTML = "ESTROGEN LEVELS";
    if(sa_age <= 20)
    {
      document.getElementById('hl').innerHTML = "50% - 60%";
    }
    else if(sa_gender > 20 && sa_gender <= 40)
    {
      document.getElementById('hl').innerHTML = "60% - 100%";
    }
    else if(sa_gender > 40 && sa_gender <= 60)
    {
      document.getElementById('hl').innerHTML = "40% - 50%";
    }
    else
    document.getElementById('hl').innerHTML = "BELOW 40%";
  }

  var name = document.querySelector("#userName").value;
  name = name.toUpperCase();
  document.getElementById('res_sa_heading').innerHTML = "USER PROFILE";
  document.getElementById('sa_name').innerHTML = "NAME : "+name.toUpperCase();
  document.getElementById('res_sa_age').innerHTML = "AGE : "+sa_age+" years";
  document.getElementById('res_sa_gender').innerHTML = "GENDER : "+sa_gender;
  document.getElementById('res_sa_height').innerHTML = "HEIGHT : "+sa_height+" cm";
  document.getElementById('res_sa_weight').innerHTML = "WEIGHT : "+sa_weight+" kg";
  document.getElementById('res_sa_bodytype').innerHTML = "BODY TYPE : "+sa_bodytype;
  document.getElementById('res_sa_sport').innerHTML = "SPORT : "+sa_sport;

}

function fl_generate(){
  $(".innercontainer").hide();
  $(".fl_result").fadeIn("slow");

  var fl_height = document.getElementById("fl_height").value;
  var fl_weight = document.getElementById("fl_weight").value;
  var fl_age = document.getElementById("fl_age").value;
  var fl_waist = document.getElementById("fl_waist").value;
  var fl_bodytype = document.getElementById("fl_bodytype").value;
  var fl_gender = document.getElementById("fl_gender").value;


   //BMR CALCULATION
   if(fl_gender === "Male"){
    var fl_BMR = 88.362 + (13.397 * fl_weight) + (4.799 * fl_height) - (5.677 * fl_age);
    fl_BMR = fl_BMR.toFixed(2);
    document.getElementById('fl_bmr').innerHTML = fl_BMR;
  }
  else if (fl_gender === "Female")
  {
    var fl_BMR = 447.593 + (9.247 * fl_weight) + (3.098 * fl_height) - (4.330 * fl_age);
    fl_BMR = fl_BMR.toFixed(2);
    document.getElementById('fl_bmr').innerHTML = fl_BMR;
  }

  // MC CALCULATION
  var fl_MC = Math.round(fl_BMR * 1.55);
  document.getElementById('fl_mc').innerHTML = fl_MC;

  // RC CALCULATION
  var fl_RC = fl_MC - (200 + Math.round(Math.random() * 69));
  document.getElementById('fl_rc').innerHTML = fl_RC;

  // BMI CALCULATION
  var fl_bmi = (fl_weight/fl_height/fl_height) * 10000;
  var fl_BMI = fl_bmi.toFixed(1);
  document.getElementById('fl_bmi').innerHTML = fl_BMI;

  if ((fl_BMI > 0) && (fl_BMI < 18.5)) {
    document.getElementById('fl_category').innerHTML="UNDERWEIGHT";
  }
  else if((fl_BMI >= 18.5) && (fl_BMI <= 24.9)){
    document.getElementById('fl_category').innerHTML="HEALTHY";
  } 
  else if((fl_BMI >= 25) && (fl_BMI <= 29.9)){
    document.getElementById('fl_category').innerHTML="OVERWEIGHT";
  } 
  else if((fl_BMI >= 30) && (fl_BMI <= 40)){
    document.getElementById('fl_category').innerHTML="OBESE";
  }
  
  // RFM CALCULATION
  if(fl_gender === "Male")
  {
    var rfm = 64 - (20 * (fl_height/fl_waist));
    document.getElementById('rfm').innerHTML = rfm.toFixed(1) +"%" ;
  }
  else if(fl_gender === "Female")
  {
    var rfm = 76 - (20 * (fl_height/fl_waist));
    document.getElementById('rfm').innerHTML = rfm.toFixed(1) +"%" ;
  }
  
  // IDEAL WEIGHT
  if(fl_gender === "Male")
  {
    fl_height = fl_height / 100;
    var IW = 22 * ( fl_height * fl_height);
    document.getElementById('fl_iw').innerHTML = IW.toFixed(1) + " Kg";
  }
  else if(fl_gender === "Female")
  {
    fl_height = fl_height / 100;
    var IW = 22 * (( fl_height * fl_height) - 0.1);
    document.getElementById('fl_iw').innerHTML = IW.toFixed(1) + " Kg";
  }



  var name = document.querySelector("#userName").value;
  name = name.toUpperCase();
  document.getElementById('res_fl_heading').innerHTML = "USER PROFILE";
  document.getElementById('fl_name').innerHTML = "NAME : "+name.toUpperCase();
  document.getElementById('res_fl_age').innerHTML = "AGE : "+fl_age+" years";
  document.getElementById('res_fl_gender').innerHTML = "GENDER : "+fl_gender;
  document.getElementById('res_fl_height').innerHTML = "HEIGHT : "+fl_height+" cm";
  document.getElementById('res_fl_weight').innerHTML = "WEIGHT : "+fl_weight+" kg";
  document.getElementById('res_fl_waist').innerHTML = "WAIST : "+fl_waist+" cm";
  document.getElementById('res_fl_bodytype').innerHTML = "BODY TYPE : "+fl_bodytype;


}


function wg_generate(){
  $(".innercontainer").hide();
  $(".wg_result").fadeIn("slow");

  var wg_height = document.getElementById("wg_height").value;
  var wg_weight = document.getElementById("wg_weight").value;
  var wg_age = document.getElementById("wg_age").value;
  var wg_waist = document.getElementById("wg_waist").value;
  var wg_bodytype = document.getElementById("wg_bodytype").value;
  var wg_gender = document.getElementById("wg_gender").value;


   //BMR CALCULATION
   if(wg_gender === "Male"){
    var wg_BMR = 88.362 + (13.397 * wg_weight) + (4.799 * wg_height) - (5.677 * wg_age);
    wg_BMR = wg_BMR.toFixed(2);
    document.getElementById('wg_bmr').innerHTML = wg_BMR;
  }
  else if (wg_gender === "Female")
  {
    var wg_BMR = 447.593 + (9.247 * wg_weight) + (3.098 * wg_height) - (4.330 * wg_age);
    wg_BMR = fl_BMR.toFixed(2);
    document.getElementById('wg_bmr').innerHTML = wg_BMR;
  }

  // MC CALCULATION
  var wg_MC = Math.round(wg_BMR * 1.55);
  document.getElementById('wg_mc').innerHTML = wg_MC;

  // RC CALCULATION
  var wg_RC = wg_MC + (300 + Math.round(Math.random() * 69));
  document.getElementById('wg_rc').innerHTML = wg_RC;

  // BMI CALCULATION
  var wg_bmi = (wg_weight/wg_height/wg_height) * 10000;
  var wg_BMI = wg_bmi.toFixed(1);
  document.getElementById('wg_bmi').innerHTML = wg_BMI;

  if ((wg_BMI > 0) && (wg_BMI < 18.5)) {
    document.getElementById('wg_category').innerHTML="UNDERWEIGHT";
  }
  else if((wg_BMI >= 18.5) && (wg_BMI <= 24.9)){
    document.getElementById('wg_category').innerHTML="HEALTHY";
  } 
  else if((wg_BMI >= 25) && (wg_BMI <= 29.9)){
    document.getElementById('wg_category').innerHTML="OVERWEIGHT";
  } 
  else if((wg_BMI >= 30) && (wg_BMI <= 40)){
    document.getElementById('wg_category').innerHTML="OBESE";
  }
  
  // RFM CALCULATION
  if(wg_gender === "Male")
  {
    var wg_rfm = 64 - (20 * (wg_height/wg_waist));
    document.getElementById('rfmm').innerHTML = wg_rfm.toFixed(1) +"%" ;
  }
  else if(wg_gender === "Female")
  {
    var wg_rfm = 76 - (20 * (wg_height/wg_waist));
    document.getElementById('rfmm').innerHTML = wg_rfm.toFixed(1) +"%" ;
  }
  
  // IDEAL WEIGHT
  if(wg_gender === "Male")
  {
    wg_height = wg_height / 100;
    var IW = 22 * ( wg_height * wg_height);
    document.getElementById('wg_iw').innerHTML = IW.toFixed(1) + " Kg";
  }
  else if(fl_gender === "Female")
  {
    wg_height = wg_height / 100;
    var IW = 22 * (( wg_height * wg_height) - 0.1);
    document.getElementById('wg_iw').innerHTML = IW.toFixed(1) + " Kg";
  }


  var name = document.querySelector("#userName").value;
  name = name.toUpperCase();
  document.getElementById('res_wg_heading').innerHTML = "USER PROFILE";
  document.getElementById('wg_name').innerHTML = "NAME : "+name.toUpperCase();
  document.getElementById('res_wg_age').innerHTML = "AGE : "+wg_age+" years";
  document.getElementById('res_wg_gender').innerHTML = "GENDER : "+wg_gender;
  document.getElementById('res_wg_height').innerHTML = "HEIGHT : "+wg_height+" cm";
  document.getElementById('res_wg_weight').innerHTML = "WEIGHT : "+wg_weight+" kg";
  document.getElementById('res_wg_waist').innerHTML = "WAIST : "+wg_waist+" cm";
  document.getElementById('res_wg_bodytype').innerHTML = "BODY TYPE : "+wg_bodytype;


}
