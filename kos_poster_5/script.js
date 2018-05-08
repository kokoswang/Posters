function toggleShow1() {
    var x = document.getElementById("toggleblock1");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}
function toggleShow2() {
    var x = document.getElementById("toggleblock2");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}
function toggleShow3() {
    var x = document.getElementById("toggleblock3");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}
function toggleShow4() {
    var x = document.getElementById("toggleblock4");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}
function toggleShow5() {
    var x = document.getElementById("toggleblock5");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}
function toggleShow6() {
    var x = document.getElementById("toggleblock6");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
    }
}

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateNumber, options.refreshInterval);

            function updateNumber() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.number').countTo({
            from: 0,
            to: 1000000,
            speed: 35682,
            refreshInterval: 1,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
