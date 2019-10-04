

var speedRange = document.getElementById('speedRange');

if(speedRange){
    speedRange.oninput = function () {
        chrome.storage.sync.set({
            speed: speedRange.value
        }, function () {
            
        });
    };
}


