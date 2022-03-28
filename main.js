

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img src="'+data_uri+'" id="image">';
    })
}

console.log("ml5 version is", ml5.version);
classifer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hDXljzAMT/model.json", modelLoaded);


function modelLoaded(){
    console.log("any message");
}

function check(){
    img=document.getElementById('image');
    classifer.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion_name").innerHTML= results[0].label;
        prediction_1= results[0].label;

        

        if(prediction_1== 'Victory'){
            document.getElementById("emoji").innerHTML="✌";
            document.getElementById("emotion_name").innerHTML="Victory";
        }

        if(prediction_1== 'Thumbs up'){
            document.getElementById("emoji").innerHTML="👍";
            document.getElementById("emotion_name").innerHTML="Thumbs Up";
        }

        if(prediction_1== 'Chill'){
            document.getElementById("emoji").innerHTML="🤘";
            document.getElementById("emotion_name").innerHTML="Chill";
        }

        if(prediction_1== 'Fingers crossed'){
            document.getElementById("emoji").innerHTML="🤞";
            document.getElementById("emotion_name").innerHTML="Fingers crossed";
        }

    }
    speak();
}

prediction_1= " ";
function speak(){
    var synth= window.speechSynthesis;
    data1= "The prediction is "+ prediction_1;
    var utterThis= new SpeechSynthesisUtterance(data1);
    synth.speak(utterThis);
}

