/ pages/index.vue

<template>
    <section class="section">
      <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
      <div class="browser-alert">
        <h3>Download Chrome you twat</h3>
      </div>
      <div class="container app-container">
        <div id="results">
          <span id="final_span" class="final"></span>
          <span id="interim_span" class="interim"></span>
          <p></p>
        </div>
        <div id="visualization"></div>
        <div id="button">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="microphone" data-container-transform="translate(3)" viewBox="0 0 16 20" x="0px" y="0px"><path d="M4.5 0c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5zm-4.125 6.188a.5.5 0 0 0-.375.5v.813c0 2.302 1.763 4.184 4 4.438v3.063h-2c-.6 0-1 .4-1 1h7c0-.6-.4-1-1-1h-2v-3.063c2.237-.254 4-2.136 4-4.438v-.813a.5.5 0 1 0-1 0v.813c0 1.927-1.573 3.5-3.5 3.5s-3.5-1.573-3.5-3.5v-.813a.5.5 0 0 0-.563-.5.5.5 0 0 0-.063 0z" transform="translate(3)"/></svg>
          <div id="contents"></div>
        </div>
          <div id="viz1" class="visual"></div>
          <div id="viz2" class="visual"></div>
          <div id="viz3" class="visual"></div>
          <div id="viz4" class="visual"></div>
        <div id="tip">Press and hold to speak</div>
      </div>
    </section>
</template>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
body, html {
  background-color: #222;
  color: rgba(255, 255, 255, 0.85);
  -webkit-font-smoothing: antialiased;
}

body {
  height: 100vh;
  overflow: hidden;
}

.table {
  display: table;
  width: 100%;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
}

#results {
  width: 100%;
  padding: 0 20px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5em;
}

#interim_span {
  opacity: 0.4;
}

#tip {
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 250px;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.75);
  margin-left: -125px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  -webkit-transform: translateY(20px);
          transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease-in;
}
#tip.show {
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  transition: all 0.3s ease-out;
}

.visual {
  position: absolute;
  bottom: 0;
  width: 400px;
  height: 400px;
  margin-bottom: -155px;
  border-radius: 100%;
  left: 50%;
  margin-left: -200px;
  z-index: 0;
  -webkit-transform: scale(0.001);
          transform: scale(0.001);
  mix-blend-mode: screen;
  opacity: 0;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.1);
}

 /*
#viz1 {
  background-color: #ff0000;
}
#viz2 {
  background-color: #00ff00;
}
#viz3 {
  background-color: #0000ff;
}*/
#visualization {
  position: absolute;
}
#visualization div {
  background-color: orange;
  padding: 10px;
  margin: 3px;
  width: 100px;
  display: inline-block;
  vertical-algin: bottom;
}

#button {
  background-color: #595959;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  bottom: 20px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  z-index: 5;
}
#button:active {
  background-color: #dd0022;
}
#button #microphone {
  fill: #fff;
  width: 30px;
  position: absolute;
  left: 50%;
  margin-left: -14px;
  top: 20%;
}
#button.cancel #microphone {
  fill: transparent;
}
#button.cancel:before, #button.cancel:after {
  position: absolute;
  background-color: #fff;
  width: 2px;
  height: 16px;
  display: block;
  content: '';
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  left: 50%;
  top: 50%;
  margin-left: -1px;
  margin-top: -8px;
  opacity: 0.8;
  z-index: 15;
}
#button.cancel:after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
#button .element {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 3;
}
#button .element .slice {
  background-color: #595959;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 24px;
  height: 24px;
  border-radius: 24px 0 0 0;
  z-index: 10;
}
#button .loading {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  border: 2px solid white;
  border-color: white transparent transparent transparent;
}
#button .loading.ring {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.4);
  z-index: 4;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

</style>

<script>
var $ = require("jquery");

// ----- On render -----
$(function() {
  document.title = "New Tab"
  var tip;
  var defaultBehavior = {
    secondaryResponse: 'Pretty sure I just fucking told that there\'s no API yet...',
    firstHit: 'Fuck, I forgot the fucking API'
  };
  var keywords = [{
    keyword: 'test',
    response: 'Stop testing this shit'
  }]
  var precursors = [
    'on',
    'on my',
    'in',
    'in my',
    'from',
    'from my',
    "'",
    "'s"
  ];
  var worthlessPrefixes = [
    "what's the",
    "what is the",
    "find",
    "show",
    "i want to",
    "let me",
    "show me",
    "search for",
    "look up",
    "look for",
    "search"
  ];
  var final_transcript = '';
  var recognizing = false;
  var cancel = false;

  if (!('webkitSpeechRecognition' in window)) {
    unsupported('speechRecog');
  } else {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    var recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.onstart = function() {}
    recognition.onresult = function(e) {
      var interim_transcript = '';

      for (var i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          final_transcript = final_transcript + e.results[i][0].transcript;
        } else {
          interim_transcript = interim_transcript + e.results[i][0].transcript;
        }
      }
      final_transcript = capitalize(final_transcript);
      $('#final_span').empty().html(linebreak(final_transcript));
      $('#interim_span').empty().html(linebreak(interim_transcript));
    };
  }
  recognition.onerror = function(e) {}

  function startButton(event) {
    final_transcript = '';
    //recognition.lang = select_dialect.value;
    recognition.start();
  }

  function unsupported(supportedType) {
    if (supportedType == 'speechRecog') {
      console.log('Webkit speech api is not supported in your browser');
    } else if (supportedType == 'speechSynth') {
      console.log('speechSynthesis api is not supported in your browser');
    } else {
      console.log(supportedType + ' not supported in your browser');
    }
    $('.browser-alert').show();
  }

  // Main start event
  $('#button').on('mousedown touchstart', function() {
    if (cancel) {
      TweenMax.killAll();
      reset();
    } else {
      startRecog();
    }
  });

  function startRecog() {
    if (!recognizing) {
      recognition.start();
      final_transcript = '';
      $('#final_span').empty();
      $('#interim_span').empty();
      $(this).text('done');
      recognizing = true;
    }
  };

  $(document).on('touchend mouseup', function() {
    endRecog();
  })

  function endRecog() {
    if (recognizing) {
      recognizing = false;
      recognition.stop();
    }
  }

  recognition.onend = function() {
    var string = final_transcript.toLowerCase(); 
    if (string.trim() != '') {
      recognizing = false;
      cancel = true;
      var counter = {
          t: 0
        },
        border = '2px solid white',
        loading = $('<div class="element"><div class="loading"></div><div class="slice"></div></div>'),
        fill = $('<div class="loading ring">')
      $('#button #contents').append(loading).append(fill);
      $('#button').addClass('cancel');
      TweenMax.to(counter, 2, {
        t: 100,
        ease: Linear.easeNone,
        onUpdate: function() {
          TweenMax.set($('#button .element .loading'), {
            rotation: (counter.t * 3.6) - 45
          });
          if (counter.t >= 25) {
            $('#button > #contents > .loading.ring').css('border-top', border);
          };
          if (counter.t >= 50) {
            $('#button > #contents > .loading.ring').css('border-right', border);
            $('#button .element .slice').remove();
          }
          if (counter.t >= 75) {
            $('#button > #contents > .loading.ring').css('border-bottom', border);
          }
        },
        onComplete: function() {
          process(string);
          reset();
        }
      });
    } else {
      showTip();
    }
  }

  let success = false;

  function process(string) {
    string = string.toLowerCase();
    success = false;
    $.each(keywords, function() {
      if ($.isArray(this.keyword)) {
        var self = this;
        $(this.keyword).each(function() {
          var keyword = this.toLowerCase();
          if (String(string).indexOf(keyword) > -1) {
            //string ops
            console.log(string, self);
            var passIt = self;
            passIt.keyword = keyword;
            string = parseString(string, self);
            success = true;
            return false;
          }
        });
      } else {
        var keyword = this.keyword;
        keyword = keyword.toLowerCase();
        if (String(string).indexOf(keyword) > -1) {
          //string ops
          string = parseString(string, this);
          success = true;
          return false;
        }
      }
    });
    if (!success) {
      noKeyword(string);
    }
  }

  function noKeyword(string) {
    getThat(defaultBehavior, string.trim(), 'firstHit')
  }

  function parseString(string, keyword) {
    var found = false;
    // strip out useless human context
    $(worthlessPrefixes).each(function() {
      if (string.indexOf(this) == 0) {
        string = string.substring(this.length + 1);
        return false;
      }
    });
    if (string.trim() == keyword.keyword.toLowerCase()) {
      console.log('no string')
      newKeyword = {
        response: 'Oi dickhead! Say something that\'s fucking useful'
      };
      getThat(newKeyword, '');
    } else {
      // There is a string here, so query it

      $(precursors).each(function() {
        var onKeyword = String(this) + ' ' + keyword.keyword.toLowerCase();
        if (string.indexOf(onKeyword) > -1 && string.indexOf(onKeyword) == string.length - onKeyword.length) {
          string = string.substring(0, string.length - onKeyword.length).trim();
          found = true;
          return false
        }
      });

      var searchXFor = keyword.keyword.toLowerCase() + ' for';
      if (string.indexOf(searchXFor) == 0 && !found) {
        string = string.substring(searchXFor.length + 1);
      }

      if (!found) {
        string = string.replace(keyword.keyword.toLowerCase(), '')
      }
      getThat(keyword, string.trim());
    }
  }

  function getThat(command, query, firstHit) {
    if (('speechSynthesis' in window)) {
      var synth = window.speechSynthesis;

      var suffix = '';
      if (command.suffix) {
        suffix = command.suffix
      }
      var utterThis = '';
      if (firstHit) {
        console.log(defaultBehavior.firstHit + suffix);
        utterThis = new SpeechSynthesisUtterance(defaultBehavior.firstHit + suffix);
      } else {
        console.log(command.response + suffix);
        utterThis = new SpeechSynthesisUtterance(defaultBehavior.firstHit + suffix);
      }

      synth.speak(utterThis);
    } else {
      unsupported('speechSynth')
    }
  }

  function reset() {
    TweenMax.set($("#button .loading"), {
      clearProps: "all"
    });
    $('#button').removeClass('cancel');
    $('#button #contents').empty();
    cancel = false;
    final_transcript = '';
    $('#final_span').text('');
  }

  function showTip() {
    reset();
    $('#tip').addClass('show');
    if (tip) {
      window.clearTimeout(tip);
    }
    tip = setTimeout(function() {
      $('#tip').removeClass('show');
    }, 3000);
    console.log('press and hold to speak');

  }

  /// ##### VISUALIZATION STUFF #####

  var liveSource;
  var analyser;
  var frequencyData;
  var scaling = 1.5;

  function update() {
      requestAnimationFrame(update);

      if (recognizing) {
        analyser.getByteFrequencyData(frequencyData);
        TweenMax.set($('.visual'), {
            autoAlpha: 0.75
          })

        TweenMax.set($('#viz1'), {
          scale: (((frequencyData[8] + 1) / 100) / scaling)
        });
        TweenMax.set($('#viz2'), {
          scale: (((frequencyData[15] + 1) / 100) / scaling)
        });
        TweenMax.set($('#viz3'), {
          scale: (((frequencyData[21] + 1) / 100) / scaling)
        });
      } else {
        TweenMax.set($('.visual'), {
          autoAlpha: 0
        })
      }
    }
    // creates an audiocontext and hooks up the audio input
  var context = new AudioContext();
  navigator.webkitGetUserMedia({
    audio: true
  }, function(stream) {
    console.log("Connected live audio input");
    if (!analyser) {
      liveSource = context.createMediaStreamSource(stream);
      // Create the analyser
      analyser = context.createAnalyser();
      analyser.smoothingTimeConstant = 0.3;
      analyser.fftSize = 64;
      frequencyData = new Uint8Array(analyser.frequencyBinCount);
      liveSource.connect(analyser);
    };
    update();
  }, function() {
    console.log('Error connecting to audio')
  });

});

/// ##### BASIC UTILS #####

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function linebreak(s) {
  var two_line = /\n\n/g;
  var one_line = /\n/g;
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

    export default {
    };
</script>