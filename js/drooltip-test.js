function myCustomTrigger(data) {
    var obj = this;
    var tooltipDom = data["tooltip"]
    var sourceDom = data["source"]
    obj.hideTooltip(tooltipDom) // -> instance.hideTooltip()
    var timeout, exit = 0
    window.addEventListener("mouseover", function(e) {
        if (data["source"].contains(e.target) || data["tooltip"].contains(e.target)) {
            clearTimeout(exit)
        } else {
            exit = setTimeout(function() {
                if (data["tooltip"].classList.contains("open")) {
                    obj.deanimateTooltip(data) // -> instance.deanimateTooltip()
                }
            }, 1000);
        }
    })

    data["source"].addEventListener("mouseenter", function(e) {
        sourceDom.querySelector(".countdown").innerHTML = "Wait for 1 second";
        timeout = setTimeout(function() {
            obj.animateTooltip(data) // -> instance.animateTooltip()
            sourceDom.querySelector(".countdown").innerHTML = "Boom!";
        }, 1000);
    });

    data["source"].addEventListener("mouseleave", function(e) {
        sourceDom.querySelector(".countdown").innerHTML = "";
        clearTimeout(timeout)
    });
}
