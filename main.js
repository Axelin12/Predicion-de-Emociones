
var prediccion_1 ="";
var prediccion_2="";
Webcam.set({
    width:440, height:340, image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        }
    )
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W1oijoWuM/model.json",juancito);
function juancito(){
    console.log("el modelo ya se cargo");
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        if(prediction_1=="Feliz"){
            console.log(prediction_1);
            document.getElementById("update_emoji").innerHTML= "&#128512;";
        }else if(prediction_1=="Enojo"){
            console.log(prediction_1);
            document.getElementById("update_emoji").innerHTML= "&#128545;";   
        }else if(prediction_1=="Tristeza"){
            console.log(prediction_1);
            document.getElementById("update_emoji").innerHTML= "&#128532;";   
        }else if(prediction_1=="Miedo"){
            console.log(prediction_1);
            document.getElementById("update_emoji").innerHTML= "&#128534;";   
        }
        if(prediction_2=="Feliz"){
            console.log(prediction_2);
            document.getElementById("update_emoji2").innerHTML= "&#128512;";
        }else if(prediction_2=="Enojo"){
            console.log(prediction_2);
            document.getElementById("update_emoji2").innerHTML= "&#128545;";   
        }else if(prediction_2=="Tristeza"){
            console.log(prediction_2);
            document.getElementById("update_emoji2").innerHTML= "&#128532;";   
        }else if(prediction_2=="Miedo"){
            console.log(prediction_2);
            document.getElementById("update_emoji2").innerHTML= "&#128534;";   
        }
    }
}