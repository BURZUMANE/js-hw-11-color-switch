const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    start: document.querySelector('#start-btn'),
    stop: document.querySelector('#stop-btn'),
    backGroud: document.querySelector('body'),
    startToggle: document.querySelector('.start-toggle'),
    stopToggle: document.querySelector('.stop-toggle'),


}



const colorChanger = {
    isActive: false,
    randomIntegerFromInterval: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    changeColor() {
        console.log('color');
        const colorIndex = this.randomIntegerFromInterval(0, colors.length);
        refs.backGroud.style.backgroundColor = colors[colorIndex];
    },
    start(e){
        if(this.isActive){
            return;
        }
        refs.stopToggle.disabled = false;
        this.colorInterval = setInterval(() =>{
            this.changeColor();
        }, 1000)
        e.target.disabled = true;
        this.isActive = true;
        refs.startToggle.setAttribute('checked', true);

    },
    stop(e){
        clearInterval(this.colorInterval);
        refs.startToggle.disabled = false;
        refs.stopToggle.disabled = true;
        refs.startToggle.removeAttribute('checked');
        this.isActive = false;
    }
}

refs.stopToggle.disabled = true;
refs.start.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stop.addEventListener('click', colorChanger.stop.bind(colorChanger));
