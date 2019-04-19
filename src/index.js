import './index.scss';
import {Howl, Howler} from 'howler';
//import TweenMax from 'gsap';
// import noUiSlider from 'nouislider';
// import 'nouislider/distribute/nouislider.css';

//application object 
const App = function() {

    this.container = document.querySelector('#app');
    this.scene = document.querySelector('.scene');
    this.mixer = document.querySelector("#mixer");
    this.openMixerBtn = document.querySelector('#openMixer');
    this.closeMixerBtn = document.querySelector('#closeMixer');
    this.randomBtn = document.createElement('button');

    //run callback after all sound files have loaded
    this.onLoad = function(scene, callback) {
        Object.keys(scene).forEach(function(key, i) {
            const value = scene[key];
            if (scene.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {
                value.sound.on('load', function(){
                    if(++i == Object.keys(scene).length) {
                        callback();
                    }
                });
            }
        });
    }

    this.eventListeners = function() {

        //visual effects

        lines.background.image.style.opacity = 1;
        
        lines.the_self_the_trees.range.addEventListener('input', function(){
            lines.the_self_the_trees.image.style.opacity = this.value / 100;
        });

        lines.the_sky.range.addEventListener('input', function(){
            lines.the_sky.image.style.opacity = this.value / 100;
        });

        const noiseWrapper = document.createElement('div');
        noiseWrapper.classList = 'noise-wrapper';
        const noiseDiv = document.createElement('div');
        noiseDiv.classList = 'noise';
        noiseWrapper.appendChild(noiseDiv);
        lines.electricity.image.appendChild(noiseWrapper);

        lines.electricity.range.addEventListener('input', function(){
            lines.electricity.image.style.opacity = this.value / 100;
        });

        const pulseWrapper = document.createElement('div');
        pulseWrapper.classList = 'circle-wrapper circle';
        const pulseDiv = document.createElement('div');
        pulseDiv.classList = 'circle pulse';
        pulseWrapper.appendChild(pulseDiv);
        lines.heartbeat.image.appendChild(pulseWrapper);

        // const pulse = TweenMax.from('.circle', 1.4, {
        //     scale: 1,
        //     transformOrigin: "center bottom",
        //     ease: Power1.easeInOut,
        //     onComplete: function() {
        //         TweenMax.to('.pulse', 1, {
        //             scale: 2,
        //             transformOrigin: "center bottom",
        //             opacity: 0,
        //             repeat: -1,
        //             delay: 0
        //         });
        //     }
        // });

        lines.heartbeat.range.addEventListener('input', function(){
            pulseWrapper.style.opacity = this.value / 100;
        });
        
        const flashImage = document.createElement('div');
        flashImage.classList = 'flash-image';
        lines.turn_on_the_lights.image.appendChild(flashImage);

        setInterval(function() {
            flashImage.classList.add('is-flashed');
            setTimeout(function(){ 
                flashImage.classList.remove('is-flashed');
            }, 150);
        }, 1200);

        lines.turn_on_the_lights.range.addEventListener('input', function(){
            lines.turn_on_the_lights.image.style.opacity = this.value / 100;
        });

        //end visual effects

        //randomise all ranges and slide range to new value
        app.randomBtn.onclick = function() {
            Object.keys(lines).forEach(function(key, i) {
                const value = lines[key];
                if (lines.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {

                    //get current and set value and find the difference rounding up
                    const currVal = Math.round( document.querySelector(`#${value.id}Range`).value * 10) / 10,
                          setVal = Math.floor(Math.random() * 100) + 0,  
                          getDiff = function (a, b) { return Math.abs(a - b); },
                          diff = getDiff(Math.round(currVal * 10) / 10, Math.round(setVal * 10) / 10),
                          rangeSpeed = 25;

                    const updateProps = function(linkVal) {
                        value.sound.volume(linkVal);

                        if(value.id == 'heartbeat') {
                            pulseWrapper.style.opacity = linkVal / 100;
                        } else {
                            value.image.style.opacity = linkVal / 100;
                        }

                    }
                        
                    //increment or decrement every x seconds to set value
                    if(setVal > currVal) {
                        const increment = setInterval(function () {
                            document.querySelector(`#${value.id}Range`).value++;
                            
                            const linkVal = document.querySelector(`#${value.id}Range`).value;
                            updateProps(linkVal);

                            if(document.querySelector(`#${value.id}Range`).value == setVal) {
                                clearInterval(increment);
                            }
                        }, rangeSpeed);
                    }
                    else if (setVal < currVal) {
                        const decrement = setInterval(function () {
                            document.querySelector(`#${value.id}Range`).value--;
                            
                            const linkVal = document.querySelector(`#${value.id}Range`).value;
                            updateProps(linkVal);

                            if(document.querySelector(`#${value.id}Range`).value == setVal) {
                                clearInterval(decrement);
                            }
                        }, rangeSpeed);
                    }

                }
            });
        }

        //mixer toggle events
        const openMixer = function() { 
            app.mixer.classList.add('mixer--open');
            app.openMixerBtn.classList.add('open-mixer--hidden');
            app.container.classList.add('mixer--open');
        }
        const closeMixer = function() { 
            app.mixer.classList.remove('mixer--open');
            app.openMixerBtn.classList.remove('open-mixer--hidden');
            app.container.classList.remove('mixer--open');
        }
        app.openMixerBtn.onclick = function() { openMixer() }
        app.closeMixerBtn.onclick = function() { closeMixer() }
        app.scene.onclick = function() { closeMixer() }
        const toggleMixer = function(e) {
            if(e.which==77) {
                if(app.mixer.classList.contains('mixer--open')) {
                    closeMixer();
                } else {
                    openMixer();
                }
            } 
        }
        document.addEventListener('keyup', toggleMixer);

    }

    this.nodes = {
        randomBtn: function() {
            app.randomBtn = document.createElement('button');
            app.randomBtn.classList = 'mixer__button';
            app.randomBtn.id = 'randomRangeAll';
            app.randomBtn.innerText = 'Dissarange';
        
            app.mixer.appendChild(app.randomBtn);
        }
    }

    this.events = {
        loadApp: function() {
            document.querySelector('.scene-loader').innerHTML = 'I see destruction; a path gauged through wooded land to transport electric, static, down metal wires, to an un-framed city. <br> <span style="opacity:0.3">Please turn your volume up</span>';
            setTimeout(function(){ 
                document.querySelector('.scene-loader').classList.add('in-fade');
            }, 1000);
            document.querySelector('.navbar-heading').classList.add('in-fade');
            const vignette = document.createElement("div");
            vignette.classList = 'vignette';
            app.scene.appendChild(vignette);
            app.onLoad(lines, app.events.startApp);
        },
        startApp: function() {
            //sound.play(); //play automatically
            //console.log(lines)
            Object.keys(lines).forEach(function(key, i) {
                const value = lines[key];
                if (lines.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {
                    value.sound.play()
                }
            });
            setTimeout(function(){ 
                document.querySelector('.scene-loader').classList.remove('in-fade', 'out-fade');
                document.querySelector('.navbar-right').classList.add('in-fade');
                document.querySelector('.loader').style.display = 'none';
                document.querySelector('.navbar-heading').textContent = 'Lines - Krafta';
                document.querySelector('.scene').classList.add('in-fade');
                app.container.classList.add('mixer--open', 'in-fade');
            }, 4500);
        }
    }

}
const app = new App();

//path references
const FileSystem = function(scene, fileName) {
    const sceneSrc = 'https://joeypunkrock.github.io/lines-krafta/src/scenes/'+scene+'/';
    this.imageLayersSrc = sceneSrc+'image_layers/'+fileName;
    this.soundLayersSrc = sceneSrc+'sound_layers/'+fileName;
}

//build methods for each layer
const build = {

    image: function(scene, imageName, fileFormat='png', range, slider) {
        const file = new FileSystem(scene, imageName);
        const node = document.createElement("div");
        node.classList = 'image-full';
        node.id = imageName+'Image';
        node.style.backgroundImage = `url("${file.imageLayersSrc}.${fileFormat}")`;
        if(slider != false) { 
            node.style.opacity = range.value / 100; 
        } else {
            node.style.opacity = 0;
        }
        app.scene.appendChild(node);
        return node;
    },
    
    sound: function(scene, soundName, range) {
        const file = new FileSystem(scene, soundName);
        const sound = new Howl({
            src: [file.soundLayersSrc+'.ogg', file.soundLayersSrc+'.mp3'],
            volume: range.value / 100,
            loop: true,
        });
        return sound;
    },
    
    slider: function(layer) {
        const slider = document.createElement('div');
        slider.classList = 'slider';
        slider.innerHTML = `<div class="slider__title">${layer.title}</div>`;
        app.mixer.appendChild(slider);

        const range = document.createElement('input');
            range.id = layer.id+'Range';
            range.classList = 'slider__range';
            range.type = 'range';
            range.min = 0;
            range.max = 100;
            range.value = 0;
            range.step = 1;

        slider.appendChild(range);

        // noUiSlider.create(range, {
        //     start: [0],
        //     range: {
        //         'min': [0],
        //         'max': [100]
        //     }
        // });

        range.addEventListener("input", function(){
            layer.sound.volume(this.value / 100);
        });

        return range;
    }

}

//build a layer with range image and sound
const Layer = function(layer) {
    this.id = layer.id;
    this.title =  layer.title;
    if(layer.slider != false) this.range = build.slider(this);
    this.image = build.image(layer.scene, layer.id, layer.fileFormat, this.range, layer.slider);
    if(layer.sound != false) this.sound = build.sound(layer.scene, layer.id, this.range);
}

//scene object - lines
const Lines = function() {

    const sceneName = 'lines';
    
    this.background = new Layer({
        id: 'sky',
        fileFormat: 'jpg',
        slider: false,
        sound: false,
        scene: sceneName
    });

    this.the_sky = new Layer({
        id: 'the_sky',
        title: 'Upper Atmosphere',
        fileFormat: 'png',
        scene: sceneName
    });

    this.the_self_the_trees = new Layer({
        id: 'the_self_the_trees',
        title: 'Subjective Nature',
        fileFormat: 'png',
        scene: sceneName,
    });

    this.electricity = new Layer({
        id: 'electricity',
        title: 'Voltage',
        fileFormat: 'png',
        scene: sceneName
    });

    this.heartbeat = new Layer({
        id: 'heartbeat',
        title: 'Terra Pulse',
        fileFormat: 'png',
        scene: sceneName
    });

    this.turn_on_the_lights = new Layer({
        id: 'turn_on_the_lights',
        title: 'Luminate',
        fileFormat: 'png',
        scene: sceneName
    });

}

//build scene and load the application
const lines = new Lines();
app.events.loadApp();

window.onload = function() {
    app.nodes.randomBtn();
    app.eventListeners();
}

document.querySelector('.show-popup').addEventListener('click', function() {
    document.querySelector('.mask').classList.add('active');
});

function closeModal() {
    document.querySelector('.mask').classList.remove('active');
}

document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});

document.querySelector('.mask').addEventListener('click', function() {
    closeModal();
});
