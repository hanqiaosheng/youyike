;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-pingmusuoding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M865.205 699.504l135.175-228.929-106.834 0c-20.714-222.388-207.126-395.721-433.874-395.721-242.011 0-437.145 195.135-437.145 437.145s195.135 437.145 437.145 437.145c128.636 0 243.101-55.598 322.681-142.809l-43.605-44.695c-68.678 76.309-168.972 125.366-279.075 125.366-206.035 0-373.917-167.882-373.917-373.917s167.882-373.917 373.917-373.917c192.954 0 351.024 146.078 371.737 332.492l-101.382 0 135.175 227.839zM459.674 262.359c-68.678 0-124.276 56.688-124.276 124.276l0 82.851-41.425 0 0 228.929 332.492 0 0-227.839-41.425 0 0-82.851c-1.09-69.77-55.598-125.366-125.366-125.366zM521.811 470.575l-124.276 0 0-82.851c0-33.794 27.253-63.228 63.228-63.228 33.794 0 63.228 27.253 63.228 63.228l-2.18 82.851z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 344l-89.6 94.4C824 332.8 675.2 268.8 512 268.8c-163.2 0-312 64-422.4 169.6L0 344C132.8 217.6 313.6 139.2 512 139.2 710.4 139.2 891.2 217.6 1024 344zM846.4 532.8l-89.6 94.4c-64-60.8-150.4-97.6-244.8-97.6-94.4 0-180.8 36.8-244.8 97.6l-89.6-94.4c86.4-83.2 204.8-132.8 334.4-132.8C641.6 398.4 758.4 449.6 846.4 532.8zM667.2 720 512 884.8 356.8 720c40-38.4 96-62.4 155.2-62.4C572.8 657.6 627.2 681.6 667.2 720z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao-dianchiman" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M915.264507 446.328301v-65.670675c0-36.264948-28.512381-65.670675-63.681368-65.670675H140.574642c-35.167964 0-63.681368 29.405727-63.681368 65.670675v262.682701c0 36.281321 28.513404 65.670675 63.681368 65.670676h711.00952c35.168987 0 63.681368-29.389354 63.681368-65.670676V577.669652c17.569144 0 31.840172-14.688537 31.840172-32.834826v-65.670675c-0.001023-18.11866-14.272052-32.835849-31.841195-32.83585m-31.841196 197.012026c0 18.148335-14.271028 32.834826-31.841196 32.834826H140.574642c-17.59882 0-31.841196-14.687514-31.841195-32.834826V380.658649c0-18.11866 14.242376-32.834826 31.841195-32.834826h711.00952c17.569144 0 31.840172 14.718213 31.840172 32.834826v262.681678h-0.001023z" fill="" ></path>' +
    '' +
    '<path d="M801.112654 643.340327h-610.299817c-28.399817 0-51.421136-23.022343-51.421137-51.421136V430.413843c0-28.399817 23.022343-51.421136 51.421137-51.421136h610.299817c28.399817 0 51.421136 23.022343 51.421136 51.421136v161.504324c0.001023 28.399817-23.02132 51.42216-51.421136 51.42216z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)