function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}

function updateTime() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'time.php', true);
    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById('date-time').innerHTML = this.responseText;
        }
    }
    xhr.send();
}

setInterval(updateTime, 1000);
