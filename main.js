var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClass() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifer = ml5.soundClassifier(
        "https://teachablemachine.withgoogle.com/models/ehavLhPwP/model.json",
        modelReady
    );
}

function modelReady() {
    classifer.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        animal = results[0].label;
        r = Math.floor(Math.random(1) * 255);
        g = Math.floor(Math.random(1) * 255);
        b = Math.floor(Math.random(1) * 255);
        console.log(r, g, b);
        document.getElementById("animal").innerHTML = results[0].label;
        document.getElementById("conf").innerHTML =
            "Confidence: " + results[0].confidence;
        if (animal == "Meowing") {
            cat = cat + 1;
            document.getElementById("count").innerHTML =
                "A cat has been heard " + cat + " time/s";
            document.getElementById("animalImg").src = "cat.png";
        } else if (animal == "Mooing") {
            cow = cow + 1
            document.getElementById('count').innerHTML =
                "A cow has been heard " + cow + " time/s"
            document.getElementById("animalImg").src = "cow.png";
        } else if (animal == "Barking") {
            dog = dog + 1
            document.getElementById('count').innerHTML =
                "A dog has been heard " + dog + " time/s"
            document.getElementById("animalImg").src = "dog.png";
        } else if (animal == "Roar") {
            lion = lion + 1
            document.getElementById('count').innerHTML =
                "A lion has been heard " + lion + " time/s"
            document.getElementById("animalImg").src = "lion.png";
        } else {
            document.getElementById("animalImg").src = "ear.png";
        }

    }
    1
}