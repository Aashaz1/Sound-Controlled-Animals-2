function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K_3m9dxLj/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}