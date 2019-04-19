/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
 //import {Howl, Howler} from 'howler';
//import TweenMax from 'gsap';
// import noUiSlider from 'nouislider';
// import 'nouislider/distribute/nouislider.css';
//application object 

var App = function App() {
  this.container = document.querySelector('#app');
  this.scene = document.querySelector('.scene');
  this.mixer = document.querySelector("#mixer");
  this.openMixerBtn = document.querySelector('#openMixer');
  this.closeMixerBtn = document.querySelector('#closeMixer');
  this.randomBtn = document.createElement('button'); //run callback after all sound files have loaded

  this.onLoad = function (scene, callback) {
    Object.keys(scene).forEach(function (key, i) {
      var value = scene[key];
      callback(); // if (scene.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {
      //     value.sound.on('load', function(){
      //         if(++i == Object.keys(scene).length) {
      //             callback();
      //         }
      //     });
      // }
    });
  };

  this.eventListeners = function () {
    //visual effects
    lines.background.image.style.opacity = 1;
    lines.the_self_the_trees.range.addEventListener('input', function () {
      lines.the_self_the_trees.image.style.opacity = this.value / 100;
    });
    lines.the_sky.range.addEventListener('input', function () {
      lines.the_sky.image.style.opacity = this.value / 100;
    });
    var noiseWrapper = document.createElement('div');
    noiseWrapper.classList = 'noise-wrapper';
    var noiseDiv = document.createElement('div');
    noiseDiv.classList = 'noise';
    noiseWrapper.appendChild(noiseDiv);
    lines.electricity.image.appendChild(noiseWrapper);
    lines.electricity.range.addEventListener('input', function () {
      lines.electricity.image.style.opacity = this.value / 100;
    });
    var pulseWrapper = document.createElement('div');
    pulseWrapper.classList = 'circle-wrapper circle';
    var pulseDiv = document.createElement('div');
    pulseDiv.classList = 'circle pulse';
    pulseWrapper.appendChild(pulseDiv);
    lines.heartbeat.image.appendChild(pulseWrapper); // const pulse = TweenMax.from('.circle', 1.4, {
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

    lines.heartbeat.range.addEventListener('input', function () {
      pulseWrapper.style.opacity = this.value / 100;
    });
    var flashImage = document.createElement('div');
    flashImage.classList = 'flash-image';
    lines.turn_on_the_lights.image.appendChild(flashImage);
    setInterval(function () {
      flashImage.classList.add('is-flashed');
      setTimeout(function () {
        flashImage.classList.remove('is-flashed');
      }, 150);
    }, 1200);
    lines.turn_on_the_lights.range.addEventListener('input', function () {
      lines.turn_on_the_lights.image.style.opacity = this.value / 100;
    }); //end visual effects
    //randomise all ranges and slide range to new value

    app.randomBtn.onclick = function () {
      Object.keys(lines).forEach(function (key, i) {
        var value = lines[key];

        if (lines.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {
          //get current and set value and find the difference rounding up
          var currVal = Math.round(document.querySelector("#".concat(value.id, "Range")).value * 10) / 10,
              setVal = Math.floor(Math.random() * 100) + 0,
              getDiff = function getDiff(a, b) {
            return Math.abs(a - b);
          },
              diff = getDiff(Math.round(currVal * 10) / 10, Math.round(setVal * 10) / 10),
              rangeSpeed = 25;

          var updateProps = function updateProps(linkVal) {
            value.sound.volume(linkVal);

            if (value.id == 'heartbeat') {
              pulseWrapper.style.opacity = linkVal / 100;
            } else {
              value.image.style.opacity = linkVal / 100;
            }
          }; //increment or decrement every x seconds to set value


          if (setVal > currVal) {
            var increment = setInterval(function () {
              document.querySelector("#".concat(value.id, "Range")).value++;
              var linkVal = document.querySelector("#".concat(value.id, "Range")).value;
              updateProps(linkVal);

              if (document.querySelector("#".concat(value.id, "Range")).value == setVal) {
                clearInterval(increment);
              }
            }, rangeSpeed);
          } else if (setVal < currVal) {
            var decrement = setInterval(function () {
              document.querySelector("#".concat(value.id, "Range")).value--;
              var linkVal = document.querySelector("#".concat(value.id, "Range")).value;
              updateProps(linkVal);

              if (document.querySelector("#".concat(value.id, "Range")).value == setVal) {
                clearInterval(decrement);
              }
            }, rangeSpeed);
          }
        }
      });
    }; //mixer toggle events


    var openMixer = function openMixer() {
      app.mixer.classList.add('mixer--open');
      app.openMixerBtn.classList.add('open-mixer--hidden');
      app.container.classList.add('mixer--open');
    };

    var closeMixer = function closeMixer() {
      app.mixer.classList.remove('mixer--open');
      app.openMixerBtn.classList.remove('open-mixer--hidden');
      app.container.classList.remove('mixer--open');
    };

    app.openMixerBtn.onclick = function () {
      openMixer();
    };

    app.closeMixerBtn.onclick = function () {
      closeMixer();
    };

    app.scene.onclick = function () {
      closeMixer();
    };

    var toggleMixer = function toggleMixer(e) {
      if (e.which == 77) {
        if (app.mixer.classList.contains('mixer--open')) {
          closeMixer();
        } else {
          openMixer();
        }
      }
    };

    document.addEventListener('keyup', toggleMixer);
  };

  this.nodes = {
    randomBtn: function randomBtn() {
      app.randomBtn = document.createElement('button');
      app.randomBtn.classList = 'mixer__button';
      app.randomBtn.id = 'randomRangeAll';
      app.randomBtn.innerText = 'Dissarange';
      app.mixer.appendChild(app.randomBtn);
    }
  };
  this.events = {
    loadApp: function loadApp() {
      document.querySelector('.scene-loader').innerHTML = 'I see destruction; a path gauged through wooded land to transport electric, static, down metal wires, to an un-framed city. <br> <span style="opacity:0.3">Please turn your volume up</span>';
      setTimeout(function () {
        document.querySelector('.scene-loader').classList.add('in-fade');
      }, 1000);
      document.querySelector('.navbar-heading').classList.add('in-fade');
      var vignette = document.createElement("div");
      vignette.classList = 'vignette';
      app.scene.appendChild(vignette);
      app.onLoad(lines, app.events.startApp);
    },
    startApp: function startApp() {
      //sound.play(); //play automatically
      //console.log(lines)
      // Object.keys(lines).forEach(function(key, i) {
      //     const value = lines[key];
      //     if (lines.hasOwnProperty(key) && value.id != undefined && value.sound != undefined) {
      //         value.sound.play()
      //     }
      // });
      setTimeout(function () {
        document.querySelector('.scene-loader').classList.remove('in-fade', 'out-fade');
        document.querySelector('.navbar-right').classList.add('in-fade');
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.navbar-heading').textContent = 'Lines - Krafta';
        document.querySelector('.scene').classList.add('in-fade');
        app.container.classList.add('mixer--open', 'in-fade');
      }, 4500);
    }
  };
};

var app = new App(); //path references

var FileSystem = function FileSystem(scene, fileName) {
  var sceneSrc = 'https://joeypunkrock.github.io/lines-krafta/src/scenes/' + scene + '/';
  this.imageLayersSrc = sceneSrc + 'image_layers/' + fileName;
  this.soundLayersSrc = sceneSrc + 'sound_layers/' + fileName;
}; //build methods for each layer


var build = {
  image: function image(scene, imageName) {
    var fileFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'png';
    var range = arguments.length > 3 ? arguments[3] : undefined;
    var slider = arguments.length > 4 ? arguments[4] : undefined;
    var file = new FileSystem(scene, imageName);
    var node = document.createElement("div");
    node.classList = 'image-full';
    node.id = imageName + 'Image';
    node.style.backgroundImage = "url(\"".concat(file.imageLayersSrc, ".").concat(fileFormat, "\")");

    if (slider != false) {
      node.style.opacity = range.value / 100;
    } else {
      node.style.opacity = 0;
    }

    app.scene.appendChild(node);
    return node;
  },
  sound: function sound(scene, soundName, range) {
    var file = new FileSystem(scene, soundName); // const sound = new Howl({
    //     src: [file.soundLayersSrc+'.ogg', file.soundLayersSrc+'.mp3'],
    //     volume: range.value / 100,
    //     loop: true,
    // });

    return false;
  },
  slider: function slider(layer) {
    var slider = document.createElement('div');
    slider.classList = 'slider';
    slider.innerHTML = "<div class=\"slider__title\">".concat(layer.title, "</div>");
    app.mixer.appendChild(slider);
    var range = document.createElement('input');
    range.id = layer.id + 'Range';
    range.classList = 'slider__range';
    range.type = 'range';
    range.min = 0;
    range.max = 100;
    range.value = 0;
    range.step = 1;
    slider.appendChild(range); // noUiSlider.create(range, {
    //     start: [0],
    //     range: {
    //         'min': [0],
    //         'max': [100]
    //     }
    // });
    // range.addEventListener("input", function(){
    //     layer.sound.volume(this.value / 100);
    // });

    return range;
  } //build a layer with range image and sound

};

var Layer = function Layer(layer) {
  this.id = layer.id;
  this.title = layer.title;
  if (layer.slider != false) this.range = build.slider(this);
  this.image = build.image(layer.scene, layer.id, layer.fileFormat, this.range, layer.slider);
  if (layer.sound != false) this.sound = build.sound(layer.scene, layer.id, this.range);
}; //scene object - lines


var Lines = function Lines() {
  var sceneName = 'lines';
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
    scene: sceneName
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
}; //build scene and load the application


var lines = new Lines();
app.events.loadApp();

window.onload = function () {
  app.nodes.randomBtn();
  app.eventListeners();
};

document.querySelector('.show-popup').addEventListener('click', function () {
  document.querySelector('.mask').classList.add('active');
});

function closeModal() {
  document.querySelector('.mask').classList.remove('active');
}

document.querySelector('.close').addEventListener('click', function () {
  closeModal();
});
document.querySelector('.mask').addEventListener('click', function () {
  closeModal();
});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjZW5lIiwibWl4ZXIiLCJvcGVuTWl4ZXJCdG4iLCJjbG9zZU1peGVyQnRuIiwicmFuZG9tQnRuIiwiY3JlYXRlRWxlbWVudCIsIm9uTG9hZCIsImNhbGxiYWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpIiwidmFsdWUiLCJldmVudExpc3RlbmVycyIsImxpbmVzIiwiYmFja2dyb3VuZCIsImltYWdlIiwic3R5bGUiLCJvcGFjaXR5IiwidGhlX3NlbGZfdGhlX3RyZWVzIiwicmFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlX3NreSIsIm5vaXNlV3JhcHBlciIsImNsYXNzTGlzdCIsIm5vaXNlRGl2IiwiYXBwZW5kQ2hpbGQiLCJlbGVjdHJpY2l0eSIsInB1bHNlV3JhcHBlciIsInB1bHNlRGl2IiwiaGVhcnRiZWF0IiwiZmxhc2hJbWFnZSIsInR1cm5fb25fdGhlX2xpZ2h0cyIsInNldEludGVydmFsIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFwcCIsIm9uY2xpY2siLCJoYXNPd25Qcm9wZXJ0eSIsImlkIiwidW5kZWZpbmVkIiwic291bmQiLCJjdXJyVmFsIiwiTWF0aCIsInJvdW5kIiwic2V0VmFsIiwiZmxvb3IiLCJyYW5kb20iLCJnZXREaWZmIiwiYSIsImIiLCJhYnMiLCJkaWZmIiwicmFuZ2VTcGVlZCIsInVwZGF0ZVByb3BzIiwibGlua1ZhbCIsInZvbHVtZSIsImluY3JlbWVudCIsImNsZWFySW50ZXJ2YWwiLCJkZWNyZW1lbnQiLCJvcGVuTWl4ZXIiLCJjbG9zZU1peGVyIiwidG9nZ2xlTWl4ZXIiLCJlIiwid2hpY2giLCJjb250YWlucyIsIm5vZGVzIiwiaW5uZXJUZXh0IiwiZXZlbnRzIiwibG9hZEFwcCIsImlubmVySFRNTCIsInZpZ25ldHRlIiwic3RhcnRBcHAiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJGaWxlU3lzdGVtIiwiZmlsZU5hbWUiLCJzY2VuZVNyYyIsImltYWdlTGF5ZXJzU3JjIiwic291bmRMYXllcnNTcmMiLCJidWlsZCIsImltYWdlTmFtZSIsImZpbGVGb3JtYXQiLCJzbGlkZXIiLCJmaWxlIiwibm9kZSIsImJhY2tncm91bmRJbWFnZSIsInNvdW5kTmFtZSIsImxheWVyIiwidGl0bGUiLCJ0eXBlIiwibWluIiwibWF4Iiwic3RlcCIsIkxheWVyIiwiTGluZXMiLCJzY2VuZU5hbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjbG9zZU1vZGFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0Es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LEVBQWdDMEIsU0FBaEMsQ0FBMENZLE1BQTFDLENBQWlELFFBQWpEO0FBQ0g7O0FBRUR2QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUN1QixnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQsWUFBVztBQUNsRStFLFlBQVU7QUFDYixDQUZEO0FBSUF2RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0N1QixnQkFBaEMsQ0FBaUQsT0FBakQsRUFBMEQsWUFBVztBQUNqRStFLFlBQVU7QUFDYixDQUZELEU7Ozs7Ozs7Ozs7O0FDdlhBLHVDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcbi8vaW1wb3J0IHtIb3dsLCBIb3dsZXJ9IGZyb20gJ2hvd2xlcic7XG4vL2ltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcbi8vIGltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuLy8gaW1wb3J0ICdub3Vpc2xpZGVyL2Rpc3RyaWJ1dGUvbm91aXNsaWRlci5jc3MnO1xuXG4vL2FwcGxpY2F0aW9uIG9iamVjdCBcbmNvbnN0IEFwcCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG4gICAgdGhpcy5zY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpO1xuICAgIHRoaXMubWl4ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21peGVyXCIpO1xuICAgIHRoaXMub3Blbk1peGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5NaXhlcicpO1xuICAgIHRoaXMuY2xvc2VNaXhlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1peGVyJyk7XG4gICAgdGhpcy5yYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vcnVuIGNhbGxiYWNrIGFmdGVyIGFsbCBzb3VuZCBmaWxlcyBoYXZlIGxvYWRlZFxuICAgIHRoaXMub25Mb2FkID0gZnVuY3Rpb24oc2NlbmUsIGNhbGxiYWNrKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNjZW5lKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzY2VuZVtrZXldO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIC8vIGlmIChzY2VuZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHZhbHVlLmlkICE9IHVuZGVmaW5lZCAmJiB2YWx1ZS5zb3VuZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vICAgICB2YWx1ZS5zb3VuZC5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmKCsraSA9PSBPYmplY3Qua2V5cyhzY2VuZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvL3Zpc3VhbCBlZmZlY3RzXG5cbiAgICAgICAgbGluZXMuYmFja2dyb3VuZC5pbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgXG4gICAgICAgIGxpbmVzLnRoZV9zZWxmX3RoZV90cmVlcy5yYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsaW5lcy50aGVfc2VsZl90aGVfdHJlZXMuaW1hZ2Uuc3R5bGUub3BhY2l0eSA9IHRoaXMudmFsdWUgLyAxMDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpbmVzLnRoZV9za3kucmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGluZXMudGhlX3NreS5pbWFnZS5zdHlsZS5vcGFjaXR5ID0gdGhpcy52YWx1ZSAvIDEwMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgbm9pc2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vaXNlV3JhcHBlci5jbGFzc0xpc3QgPSAnbm9pc2Utd3JhcHBlcic7XG4gICAgICAgIGNvbnN0IG5vaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vaXNlRGl2LmNsYXNzTGlzdCA9ICdub2lzZSc7XG4gICAgICAgIG5vaXNlV3JhcHBlci5hcHBlbmRDaGlsZChub2lzZURpdik7XG4gICAgICAgIGxpbmVzLmVsZWN0cmljaXR5LmltYWdlLmFwcGVuZENoaWxkKG5vaXNlV3JhcHBlcik7XG5cbiAgICAgICAgbGluZXMuZWxlY3RyaWNpdHkucmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGluZXMuZWxlY3RyaWNpdHkuaW1hZ2Uuc3R5bGUub3BhY2l0eSA9IHRoaXMudmFsdWUgLyAxMDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHB1bHNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwdWxzZVdyYXBwZXIuY2xhc3NMaXN0ID0gJ2NpcmNsZS13cmFwcGVyIGNpcmNsZSc7XG4gICAgICAgIGNvbnN0IHB1bHNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHB1bHNlRGl2LmNsYXNzTGlzdCA9ICdjaXJjbGUgcHVsc2UnO1xuICAgICAgICBwdWxzZVdyYXBwZXIuYXBwZW5kQ2hpbGQocHVsc2VEaXYpO1xuICAgICAgICBsaW5lcy5oZWFydGJlYXQuaW1hZ2UuYXBwZW5kQ2hpbGQocHVsc2VXcmFwcGVyKTtcblxuICAgICAgICAvLyBjb25zdCBwdWxzZSA9IFR3ZWVuTWF4LmZyb20oJy5jaXJjbGUnLCAxLjQsIHtcbiAgICAgICAgLy8gICAgIHNjYWxlOiAxLFxuICAgICAgICAvLyAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlciBib3R0b21cIixcbiAgICAgICAgLy8gICAgIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXG4gICAgICAgIC8vICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICBUd2Vlbk1heC50bygnLnB1bHNlJywgMSwge1xuICAgICAgICAvLyAgICAgICAgICAgICBzY2FsZTogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlciBib3R0b21cIixcbiAgICAgICAgLy8gICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVsYXk6IDBcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgbGluZXMuaGVhcnRiZWF0LnJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHB1bHNlV3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gdGhpcy52YWx1ZSAvIDEwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmbGFzaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsYXNoSW1hZ2UuY2xhc3NMaXN0ID0gJ2ZsYXNoLWltYWdlJztcbiAgICAgICAgbGluZXMudHVybl9vbl90aGVfbGlnaHRzLmltYWdlLmFwcGVuZENoaWxkKGZsYXNoSW1hZ2UpO1xuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZmxhc2hJbWFnZS5jbGFzc0xpc3QuYWRkKCdpcy1mbGFzaGVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgIGZsYXNoSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmxhc2hlZCcpO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICAgbGluZXMudHVybl9vbl90aGVfbGlnaHRzLnJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxpbmVzLnR1cm5fb25fdGhlX2xpZ2h0cy5pbWFnZS5zdHlsZS5vcGFjaXR5ID0gdGhpcy52YWx1ZSAvIDEwMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9lbmQgdmlzdWFsIGVmZmVjdHNcblxuICAgICAgICAvL3JhbmRvbWlzZSBhbGwgcmFuZ2VzIGFuZCBzbGlkZSByYW5nZSB0byBuZXcgdmFsdWVcbiAgICAgICAgYXBwLnJhbmRvbUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaW5lcykuZm9yRWFjaChmdW5jdGlvbihrZXksIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxpbmVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdmFsdWUuaWQgIT0gdW5kZWZpbmVkICYmIHZhbHVlLnNvdW5kICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vZ2V0IGN1cnJlbnQgYW5kIHNldCB2YWx1ZSBhbmQgZmluZCB0aGUgZGlmZmVyZW5jZSByb3VuZGluZyB1cFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyVmFsID0gTWF0aC5yb3VuZCggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dmFsdWUuaWR9UmFuZ2VgKS52YWx1ZSAqIDEwKSAvIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMCwgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXREaWZmID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGdldERpZmYoTWF0aC5yb3VuZChjdXJyVmFsICogMTApIC8gMTAsIE1hdGgucm91bmQoc2V0VmFsICogMTApIC8gMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZVNwZWVkID0gMjU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlUHJvcHMgPSBmdW5jdGlvbihsaW5rVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zb3VuZC52b2x1bWUobGlua1ZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmlkID09ICdoZWFydGJlYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVsc2VXcmFwcGVyLnN0eWxlLm9wYWNpdHkgPSBsaW5rVmFsIC8gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5pbWFnZS5zdHlsZS5vcGFjaXR5ID0gbGlua1ZhbCAvIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9pbmNyZW1lbnQgb3IgZGVjcmVtZW50IGV2ZXJ5IHggc2Vjb25kcyB0byBzZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgaWYoc2V0VmFsID4gY3VyclZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ZhbHVlLmlkfVJhbmdlYCkudmFsdWUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dmFsdWUuaWR9UmFuZ2VgKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9wcyhsaW5rVmFsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ZhbHVlLmlkfVJhbmdlYCkudmFsdWUgPT0gc2V0VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW5jcmVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByYW5nZVNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXRWYWwgPCBjdXJyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNyZW1lbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dmFsdWUuaWR9UmFuZ2VgKS52YWx1ZS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt2YWx1ZS5pZH1SYW5nZWApLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb3BzKGxpbmtWYWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dmFsdWUuaWR9UmFuZ2VgKS52YWx1ZSA9PSBzZXRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChkZWNyZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJhbmdlU3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbWl4ZXIgdG9nZ2xlIGV2ZW50c1xuICAgICAgICBjb25zdCBvcGVuTWl4ZXIgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBhcHAubWl4ZXIuY2xhc3NMaXN0LmFkZCgnbWl4ZXItLW9wZW4nKTtcbiAgICAgICAgICAgIGFwcC5vcGVuTWl4ZXJCdG4uY2xhc3NMaXN0LmFkZCgnb3Blbi1taXhlci0taGlkZGVuJyk7XG4gICAgICAgICAgICBhcHAuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21peGVyLS1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvc2VNaXhlciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgIGFwcC5taXhlci5jbGFzc0xpc3QucmVtb3ZlKCdtaXhlci0tb3BlbicpO1xuICAgICAgICAgICAgYXBwLm9wZW5NaXhlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLW1peGVyLS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGFwcC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWl4ZXItLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBhcHAub3Blbk1peGVyQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgb3Blbk1peGVyKCkgfVxuICAgICAgICBhcHAuY2xvc2VNaXhlckJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IGNsb3NlTWl4ZXIoKSB9XG4gICAgICAgIGFwcC5zY2VuZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IGNsb3NlTWl4ZXIoKSB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZU1peGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS53aGljaD09NzcpIHtcbiAgICAgICAgICAgICAgICBpZihhcHAubWl4ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXhlci0tb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTWl4ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcGVuTWl4ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdG9nZ2xlTWl4ZXIpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgICAgcmFuZG9tQnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFwcC5yYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFwcC5yYW5kb21CdG4uY2xhc3NMaXN0ID0gJ21peGVyX19idXR0b24nO1xuICAgICAgICAgICAgYXBwLnJhbmRvbUJ0bi5pZCA9ICdyYW5kb21SYW5nZUFsbCc7XG4gICAgICAgICAgICBhcHAucmFuZG9tQnRuLmlubmVyVGV4dCA9ICdEaXNzYXJhbmdlJztcbiAgICAgICAgXG4gICAgICAgICAgICBhcHAubWl4ZXIuYXBwZW5kQ2hpbGQoYXBwLnJhbmRvbUJ0bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgbG9hZEFwcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtbG9hZGVyJykuaW5uZXJIVE1MID0gJ0kgc2VlIGRlc3RydWN0aW9uOyBhIHBhdGggZ2F1Z2VkIHRocm91Z2ggd29vZGVkIGxhbmQgdG8gdHJhbnNwb3J0IGVsZWN0cmljLCBzdGF0aWMsIGRvd24gbWV0YWwgd2lyZXMsIHRvIGFuIHVuLWZyYW1lZCBjaXR5LiA8YnI+IDxzcGFuIHN0eWxlPVwib3BhY2l0eTowLjNcIj5QbGVhc2UgdHVybiB5b3VyIHZvbHVtZSB1cDwvc3Bhbj4nO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtbG9hZGVyJykuY2xhc3NMaXN0LmFkZCgnaW4tZmFkZScpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWhlYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdpbi1mYWRlJyk7XG4gICAgICAgICAgICBjb25zdCB2aWduZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2aWduZXR0ZS5jbGFzc0xpc3QgPSAndmlnbmV0dGUnO1xuICAgICAgICAgICAgYXBwLnNjZW5lLmFwcGVuZENoaWxkKHZpZ25ldHRlKTtcbiAgICAgICAgICAgIGFwcC5vbkxvYWQobGluZXMsIGFwcC5ldmVudHMuc3RhcnRBcHApO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydEFwcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL3NvdW5kLnBsYXkoKTsgLy9wbGF5IGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobGluZXMpXG4gICAgICAgICAgICAvLyBPYmplY3Qua2V5cyhsaW5lcykuZm9yRWFjaChmdW5jdGlvbihrZXksIGkpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IGxpbmVzW2tleV07XG4gICAgICAgICAgICAvLyAgICAgaWYgKGxpbmVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdmFsdWUuaWQgIT0gdW5kZWZpbmVkICYmIHZhbHVlLnNvdW5kICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZS5zb3VuZC5wbGF5KClcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLWxvYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2luLWZhZGUnLCAnb3V0LWZhZGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXJpZ2h0JykuY2xhc3NMaXN0LmFkZCgnaW4tZmFkZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItaGVhZGluZycpLnRleHRDb250ZW50ID0gJ0xpbmVzIC0gS3JhZnRhJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKS5jbGFzc0xpc3QuYWRkKCdpbi1mYWRlJyk7XG4gICAgICAgICAgICAgICAgYXBwLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaXhlci0tb3BlbicsICdpbi1mYWRlJyk7XG4gICAgICAgICAgICB9LCA0NTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG4vL3BhdGggcmVmZXJlbmNlc1xuY29uc3QgRmlsZVN5c3RlbSA9IGZ1bmN0aW9uKHNjZW5lLCBmaWxlTmFtZSkge1xuICAgIGNvbnN0IHNjZW5lU3JjID0gJ2h0dHBzOi8vam9leXB1bmtyb2NrLmdpdGh1Yi5pby9saW5lcy1rcmFmdGEvc3JjL3NjZW5lcy8nK3NjZW5lKycvJztcbiAgICB0aGlzLmltYWdlTGF5ZXJzU3JjID0gc2NlbmVTcmMrJ2ltYWdlX2xheWVycy8nK2ZpbGVOYW1lO1xuICAgIHRoaXMuc291bmRMYXllcnNTcmMgPSBzY2VuZVNyYysnc291bmRfbGF5ZXJzLycrZmlsZU5hbWU7XG59XG5cbi8vYnVpbGQgbWV0aG9kcyBmb3IgZWFjaCBsYXllclxuY29uc3QgYnVpbGQgPSB7XG5cbiAgICBpbWFnZTogZnVuY3Rpb24oc2NlbmUsIGltYWdlTmFtZSwgZmlsZUZvcm1hdD0ncG5nJywgcmFuZ2UsIHNsaWRlcikge1xuICAgICAgICBjb25zdCBmaWxlID0gbmV3IEZpbGVTeXN0ZW0oc2NlbmUsIGltYWdlTmFtZSk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdCA9ICdpbWFnZS1mdWxsJztcbiAgICAgICAgbm9kZS5pZCA9IGltYWdlTmFtZSsnSW1hZ2UnO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ZpbGUuaW1hZ2VMYXllcnNTcmN9LiR7ZmlsZUZvcm1hdH1cIilgO1xuICAgICAgICBpZihzbGlkZXIgIT0gZmFsc2UpIHsgXG4gICAgICAgICAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSByYW5nZS52YWx1ZSAvIDEwMDsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFwcC5zY2VuZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgICBcbiAgICBzb3VuZDogZnVuY3Rpb24oc2NlbmUsIHNvdW5kTmFtZSwgcmFuZ2UpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlU3lzdGVtKHNjZW5lLCBzb3VuZE5hbWUpO1xuICAgICAgICAvLyBjb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcbiAgICAgICAgLy8gICAgIHNyYzogW2ZpbGUuc291bmRMYXllcnNTcmMrJy5vZ2cnLCBmaWxlLnNvdW5kTGF5ZXJzU3JjKycubXAzJ10sXG4gICAgICAgIC8vICAgICB2b2x1bWU6IHJhbmdlLnZhbHVlIC8gMTAwLFxuICAgICAgICAvLyAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIHNsaWRlcjogZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QgPSAnc2xpZGVyJztcbiAgICAgICAgc2xpZGVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic2xpZGVyX190aXRsZVwiPiR7bGF5ZXIudGl0bGV9PC9kaXY+YDtcbiAgICAgICAgYXBwLm1peGVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG5cbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcmFuZ2UuaWQgPSBsYXllci5pZCsnUmFuZ2UnO1xuICAgICAgICAgICAgcmFuZ2UuY2xhc3NMaXN0ID0gJ3NsaWRlcl9fcmFuZ2UnO1xuICAgICAgICAgICAgcmFuZ2UudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgICAgICByYW5nZS5taW4gPSAwO1xuICAgICAgICAgICAgcmFuZ2UubWF4ID0gMTAwO1xuICAgICAgICAgICAgcmFuZ2UudmFsdWUgPSAwO1xuICAgICAgICAgICAgcmFuZ2Uuc3RlcCA9IDE7XG5cbiAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKHJhbmdlKTtcblxuICAgICAgICAvLyBub1VpU2xpZGVyLmNyZWF0ZShyYW5nZSwge1xuICAgICAgICAvLyAgICAgc3RhcnQ6IFswXSxcbiAgICAgICAgLy8gICAgIHJhbmdlOiB7XG4gICAgICAgIC8vICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgLy8gICAgICAgICAnbWF4JzogWzEwMF1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBsYXllci5zb3VuZC52b2x1bWUodGhpcy52YWx1ZSAvIDEwMCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbn1cblxuLy9idWlsZCBhIGxheWVyIHdpdGggcmFuZ2UgaW1hZ2UgYW5kIHNvdW5kXG5jb25zdCBMYXllciA9IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgdGhpcy5pZCA9IGxheWVyLmlkO1xuICAgIHRoaXMudGl0bGUgPSAgbGF5ZXIudGl0bGU7XG4gICAgaWYobGF5ZXIuc2xpZGVyICE9IGZhbHNlKSB0aGlzLnJhbmdlID0gYnVpbGQuc2xpZGVyKHRoaXMpO1xuICAgIHRoaXMuaW1hZ2UgPSBidWlsZC5pbWFnZShsYXllci5zY2VuZSwgbGF5ZXIuaWQsIGxheWVyLmZpbGVGb3JtYXQsIHRoaXMucmFuZ2UsIGxheWVyLnNsaWRlcik7XG4gICAgaWYobGF5ZXIuc291bmQgIT0gZmFsc2UpIHRoaXMuc291bmQgPSBidWlsZC5zb3VuZChsYXllci5zY2VuZSwgbGF5ZXIuaWQsIHRoaXMucmFuZ2UpO1xufVxuXG4vL3NjZW5lIG9iamVjdCAtIGxpbmVzXG5jb25zdCBMaW5lcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc2NlbmVOYW1lID0gJ2xpbmVzJztcbiAgICBcbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgTGF5ZXIoe1xuICAgICAgICBpZDogJ3NreScsXG4gICAgICAgIGZpbGVGb3JtYXQ6ICdqcGcnLFxuICAgICAgICBzbGlkZXI6IGZhbHNlLFxuICAgICAgICBzb3VuZDogZmFsc2UsXG4gICAgICAgIHNjZW5lOiBzY2VuZU5hbWVcbiAgICB9KTtcblxuICAgIHRoaXMudGhlX3NreSA9IG5ldyBMYXllcih7XG4gICAgICAgIGlkOiAndGhlX3NreScsXG4gICAgICAgIHRpdGxlOiAnVXBwZXIgQXRtb3NwaGVyZScsXG4gICAgICAgIGZpbGVGb3JtYXQ6ICdwbmcnLFxuICAgICAgICBzY2VuZTogc2NlbmVOYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZV9zZWxmX3RoZV90cmVlcyA9IG5ldyBMYXllcih7XG4gICAgICAgIGlkOiAndGhlX3NlbGZfdGhlX3RyZWVzJyxcbiAgICAgICAgdGl0bGU6ICdTdWJqZWN0aXZlIE5hdHVyZScsXG4gICAgICAgIGZpbGVGb3JtYXQ6ICdwbmcnLFxuICAgICAgICBzY2VuZTogc2NlbmVOYW1lLFxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVjdHJpY2l0eSA9IG5ldyBMYXllcih7XG4gICAgICAgIGlkOiAnZWxlY3RyaWNpdHknLFxuICAgICAgICB0aXRsZTogJ1ZvbHRhZ2UnLFxuICAgICAgICBmaWxlRm9ybWF0OiAncG5nJyxcbiAgICAgICAgc2NlbmU6IHNjZW5lTmFtZVxuICAgIH0pO1xuXG4gICAgdGhpcy5oZWFydGJlYXQgPSBuZXcgTGF5ZXIoe1xuICAgICAgICBpZDogJ2hlYXJ0YmVhdCcsXG4gICAgICAgIHRpdGxlOiAnVGVycmEgUHVsc2UnLFxuICAgICAgICBmaWxlRm9ybWF0OiAncG5nJyxcbiAgICAgICAgc2NlbmU6IHNjZW5lTmFtZVxuICAgIH0pO1xuXG4gICAgdGhpcy50dXJuX29uX3RoZV9saWdodHMgPSBuZXcgTGF5ZXIoe1xuICAgICAgICBpZDogJ3R1cm5fb25fdGhlX2xpZ2h0cycsXG4gICAgICAgIHRpdGxlOiAnTHVtaW5hdGUnLFxuICAgICAgICBmaWxlRm9ybWF0OiAncG5nJyxcbiAgICAgICAgc2NlbmU6IHNjZW5lTmFtZVxuICAgIH0pO1xuXG59XG5cbi8vYnVpbGQgc2NlbmUgYW5kIGxvYWQgdGhlIGFwcGxpY2F0aW9uXG5jb25zdCBsaW5lcyA9IG5ldyBMaW5lcygpO1xuYXBwLmV2ZW50cy5sb2FkQXBwKCk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBhcHAubm9kZXMucmFuZG9tQnRuKCk7XG4gICAgYXBwLmV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LXBvcHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzaycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc2snKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNsb3NlTW9kYWwoKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==