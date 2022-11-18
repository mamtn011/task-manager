// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1JEHZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"adjPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _uiJs = require("./Ui.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
(0, _uiJsDefault.default).init();

},{"./Ui.js":"8vzuR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vzuR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _manipulationJs = require("./Manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _storageJs = require("./Storage.js");
var _storageJsDefault = parcelHelpers.interopDefault(_storageJs);
class Ui {
    selectDomElements() {
        const submitBtns = document.querySelector(".submit-btns");
        const titleInputElm = document.querySelector("#title");
        const descriptionInputElm = document.querySelector("#description");
        const assignedToInputElm = document.querySelector("#assigned-to");
        const startInputElm = document.querySelector("#start-date");
        const endInputElm = document.querySelector("#end-date");
        const priorityInputElms = document.getElementsByName("priority");
        const statusInputElms = document.getElementsByName("status");
        const completed = document.querySelector("#completed");
        const completedPercentage = document.querySelector(".completed-percentage");
        const raangeInputElm = document.querySelector("#char-range");
        const amountInputElm = document.querySelector("#char-amount");
        const addTaskBtn = document.querySelector(".add-task");
        const updateTaskBtn = document.querySelector(".update-task");
        const goBackBtn = document.querySelector(".go-back");
        const messageElm = document.querySelector(".message");
        const displayTaskArea = document.querySelector(".display-task-area");
        const taskBody = document.querySelector("#task-body");
        const totalElm = document.querySelector(".total");
        const newElm = document.querySelector(".new");
        const inProgressElm = document.querySelector(".in-progress");
        const completedElm = document.querySelector(".completed");
        return {
            submitBtns,
            titleInputElm,
            descriptionInputElm,
            assignedToInputElm,
            startInputElm,
            endInputElm,
            priorityInputElms,
            statusInputElms,
            completed,
            completedPercentage,
            raangeInputElm,
            amountInputElm,
            addTaskBtn,
            updateTaskBtn,
            goBackBtn,
            messageElm,
            displayTaskArea,
            taskBody,
            totalElm,
            newElm,
            inProgressElm,
            completedElm
        };
    }
    #clearMessage(elm) {
        setTimeout(()=>{
            elm.textContent = "";
        }, 3000);
    }
    showMessage(msg, action = "success") {
        const { messageElm  } = this.selectDomElements();
        let elm = `<div class="alert alert-${action}">${msg}</div>`;
        messageElm.insertAdjacentHTML("afterbegin", elm);
        this.#clearMessage(messageElm);
    }
    showStorageDataToUI(tasks) {
        const { displayTaskArea  } = this.selectDomElements();
        if ((0, _storageJsDefault.default).allTask.length > 0) displayTaskArea.style.display = "block";
        else displayTaskArea.style.display = "none";
    }
    resetInputs() {
        const { titleInputElm , descriptionInputElm , assignedToInputElm , startInputElm , endInputElm , priorityInputElms , statusInputElms , raangeInputElm , amountInputElm  } = this.selectDomElements();
        (0, _manipulationJsDefault.default).id = 0;
        Array.from(priorityInputElms).find((el)=>el.checked).checked = false;
        Array.from(statusInputElms).find((el)=>el.checked).checked = false;
        titleInputElm.value = "";
        descriptionInputElm.value = "";
        assignedToInputElm.value = "";
        startInputElm.value = "";
        endInputElm.value = "";
        raangeInputElm.value = 10;
        amountInputElm.value = 10;
    }
    #getPriorityBg(priority) {
        let pBg = "";
        if (priority === "High") pBg = "warning";
        else if (priority === "Medium") pBg = "info";
        else pBg = "primary";
        return pBg;
    }
    #getAmountBg(amount) {
        let aBg = "";
        if (amount >= 100) aBg = "success";
        else if (amount >= 70) aBg = "info";
        else if (amount >= 40) aBg = "primary";
        else if (amount >= 20) aBg = "warning";
        else aBg = "danger";
        return aBg;
    }
    #countTaskByStatus(task) {
        const { totalElm , newElm , inProgressElm , completedElm  } = this.selectDomElements();
        let snew = 0;
        let sinprogress = 0;
        let scompleted = 0;
        task.forEach((el)=>{
            if (el.status === "New") snew++;
            else if (el.status === "In Progress") sinprogress++;
            else scompleted++;
        });
        totalElm.textContent = task.length;
        newElm.textContent = snew;
        inProgressElm.textContent = sinprogress;
        completedElm.textContent = scompleted;
    }
    showTaskToUI(tasks) {
        const { taskBody  } = this.selectDomElements();
        this.#countTaskByStatus(tasks);
        taskBody.textContent = "";
        let elm = "";
        const sortedTask = tasks.sort((a, b)=>b.id - a.id);
        sortedTask.forEach((task, index)=>{
            const { id , title , worker , end , priority , status , amount  } = task;
            const priorityBg = this.#getPriorityBg(priority);
            const amountBg = this.#getAmountBg(Number(amount));
            const comClass = status === "Completed" ? "completed-task" : "";
            elm += `<tr><th scope="row">${index + 1}</th>
      <td>${title}</td>
      <td><span class="badge badge-pill badge-${priorityBg}">${priority}</span></td>
      <td class="${comClass}">${status}</td>
      <td>${end}</td>
      <td>${worker}</td>
      <td>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-${amountBg}"
            role="progressbar"
            style="width: ${amount}%"
            aria-valuenow="${amount}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span class="text-black font-weight-bold">${amount}%</span>
          </div>
        </div>
      </td>
      <td id="manipulate-task" data-id="${id}">
        <i class="fas fa-edit text-primary edit-task"></i>
        <i class="fas fa-check-square text-success complete-task"></i>
        <i class="fas fa-trash-alt text-danger delete-task"></i>
      </td></tr>`;
        });
        taskBody.insertAdjacentHTML("beforeend", elm);
        const manipulateTask = document.querySelectorAll("#manipulate-task");
        manipulateTask.forEach((el)=>{
            el.addEventListener("click", (e)=>(0, _manipulationJsDefault.default).handleManipulation(e));
        });
    }
    #adjustPercentage(e) {
        const { raangeInputElm , amountInputElm , statusInputElms  } = this.selectDomElements();
        if (e.target.classList.contains("percentage-range")) {
            amountInputElm.value = raangeInputElm.value;
            if (Number(amountInputElm.value) >= 100) statusInputElms[2].checked = true;
            else statusInputElms[2].checked = false;
        } else {
            raangeInputElm.value = amountInputElm.value;
            if (Number(raangeInputElm.value) >= 100) statusInputElms[2].checked = true;
            else statusInputElms[2].checked = false;
        }
    }
    #fixPercentage(e1) {
        const { raangeInputElm: raangeInputElm1 , amountInputElm: amountInputElm1  } = this.selectDomElements();
        if (e1.target.id === "completed") {
            amountInputElm1.value = 100;
            raangeInputElm1.value = 100;
        }
    }
    displayUpdateBtn() {
        const { addTaskBtn , updateTaskBtn , goBackBtn  } = this.selectDomElements();
        updateTaskBtn.style.display = "block";
        goBackBtn.style.display = "block";
        addTaskBtn.style.display = "none";
    }
    hideUpdateBtn() {
        const { addTaskBtn , updateTaskBtn , goBackBtn  } = this.selectDomElements();
        updateTaskBtn.style.display = "none";
        goBackBtn.style.display = "none";
        addTaskBtn.style.display = "block";
    }
    populateEditData(id) {
        const data = (0, _storageJsDefault.default).allTask.find((el)=>el.id === id);
        const { title , description , worker , start , end , priority , status , amount  } = data;
        const { titleInputElm , descriptionInputElm , assignedToInputElm , startInputElm , endInputElm , priorityInputElms , statusInputElms , raangeInputElm , amountInputElm  } = this.selectDomElements();
        Array.from(priorityInputElms).find((el)=>el.value === priority).checked = true;
        Array.from(statusInputElms).find((el)=>el.value === status).checked = true;
        titleInputElm.value = title;
        descriptionInputElm.value = description;
        assignedToInputElm.value = worker;
        startInputElm.value = start;
        endInputElm.value = end;
        raangeInputElm.value = amount;
        amountInputElm.value = amount;
        this.displayUpdateBtn();
    }
    init() {
        const { completedPercentage , statusInputElms  } = this.selectDomElements();
        this.showStorageDataToUI();
        completedPercentage.addEventListener("change", (e)=>this.#adjustPercentage(e));
        statusInputElms.forEach((elm)=>elm.addEventListener("change", (e)=>this.#fixPercentage(e)));
        (0, _manipulationJsDefault.default).init();
    }
}
const ui = new Ui();
exports.default = ui;

},{"./Manipulation.js":"5KUBq","./Storage.js":"5r0fU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KUBq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiJs = require("./Ui.js");
var _uiJsDefault = parcelHelpers.interopDefault(_uiJs);
var _storageJs = require("./Storage.js");
var _storageJsDefault = parcelHelpers.interopDefault(_storageJs);
class Manipulation {
    id = 0;
    #receiveInputsData() {
        const { titleInputElm , descriptionInputElm , assignedToInputElm , startInputElm , endInputElm , priorityInputElms , statusInputElms , raangeInputElm , amountInputElm  } = (0, _uiJsDefault.default).selectDomElements();
        let priority = Array.from(priorityInputElms).find((el)=>el.checked);
        let status = Array.from(statusInputElms).find((el)=>el.checked);
        const id = this.id ? this.id : Date.now();
        return {
            id,
            title: titleInputElm.value,
            description: descriptionInputElm.value,
            worker: assignedToInputElm.value,
            start: startInputElm.value,
            end: endInputElm.value,
            priority: priority ? priority.value : "",
            status: status ? status.value : "",
            range: Number(raangeInputElm.value),
            amount: Number(amountInputElm.value)
        };
    }
    #validateInputsData(data) {
        const isValid = true;
        const { title , description , worker , start , end , priority: priority1 , status: status1 , amount  } = data;
        const a = new Date(start);
        const b = new Date(end);
        const c = new Date();
        if (!title) {
            (0, _uiJsDefault.default).showMessage("Title shouldn't be empty!", "danger");
            return;
        } else if (!description) {
            (0, _uiJsDefault.default).showMessage("Description shouldn't be empty!", "danger");
            return;
        } else if (!worker) {
            (0, _uiJsDefault.default).showMessage("You should assined the task to someone!", "danger");
            return;
        } else if (!start || !end || a.getTime() >= b.getTime()) {
            (0, _uiJsDefault.default).showMessage("Must to give 24 hours for the task!", "danger");
            return;
        } else if (!priority1) {
            (0, _uiJsDefault.default).showMessage("Priority should be checked!", "danger");
            return;
        } else if (!status1) {
            (0, _uiJsDefault.default).showMessage("Status should be checked!", "danger");
            return;
        } else if (Number(amount) > 100) {
            (0, _uiJsDefault.default).showMessage("Completed in Percentage shouldn't be more then 100 !", "danger");
            return;
        }
        return isValid;
    }
    #handleAddingTask() {
        const inputsData = this.#receiveInputsData();
        const isValid1 = this.#validateInputsData(inputsData);
        if (!isValid1) return;
        (0, _storageJsDefault.default).saveData(inputsData);
        (0, _uiJsDefault.default).showMessage("Task added successfully!");
        (0, _uiJsDefault.default).showTaskToUI((0, _storageJsDefault.default).allTask);
        (0, _uiJsDefault.default).resetInputs();
        (0, _uiJsDefault.default).showStorageDataToUI();
    }
    #handleUpdatingingTask() {
        const inputsData1 = this.#receiveInputsData();
        const isValid2 = this.#validateInputsData(inputsData1);
        if (!isValid2) return;
        (0, _storageJsDefault.default).updateStorage(inputsData1);
        (0, _uiJsDefault.default).showMessage("Task updated successfully!");
        (0, _uiJsDefault.default).showTaskToUI((0, _storageJsDefault.default).allTask);
        (0, _uiJsDefault.default).hideUpdateBtn();
        (0, _uiJsDefault.default).resetInputs();
    }
    #handleFormSubmit(e) {
        e.preventDefault();
        if (e.target.classList.contains("add-task")) this.#handleAddingTask();
        else if (e.target.classList.contains("update-task")) this.#handleUpdatingingTask();
        else if (e.target.classList.contains("go-back")) {
            (0, _uiJsDefault.default).resetInputs();
            (0, _uiJsDefault.default).hideUpdateBtn();
        }
    }
    handleManipulation = (e)=>{
        const { updateTaskBtn  } = (0, _uiJsDefault.default).selectDomElements();
        if (e.target.classList.contains("edit-task")) {
            this.id = Number(e.target.parentElement.dataset.id);
            (0, _uiJsDefault.default).populateEditData(this.id);
        } else if (e.target.classList.contains("complete-task")) {
            this.id = Number(e.target.parentElement.dataset.id);
            (0, _storageJsDefault.default).completeTask(this.id);
            (0, _uiJsDefault.default).showTaskToUI((0, _storageJsDefault.default).allTask);
            if (updateTaskBtn.style.display === "block") (0, _uiJsDefault.default).resetInputs();
            (0, _uiJsDefault.default).hideUpdateBtn();
        } else if (e.target.classList.contains("delete-task")) {
            this.id = Number(e.target.parentElement.dataset.id);
            (0, _storageJsDefault.default).deleteTask(this.id);
            (0, _uiJsDefault.default).showMessage("Task deleted successfully!", "info");
            (0, _uiJsDefault.default).showTaskToUI((0, _storageJsDefault.default).allTask);
            if (updateTaskBtn.style.display === "block") (0, _uiJsDefault.default).resetInputs();
            (0, _uiJsDefault.default).hideUpdateBtn();
            (0, _uiJsDefault.default).showStorageDataToUI((0, _storageJsDefault.default).allTask);
        }
    };
    init() {
        const { submitBtns  } = (0, _uiJsDefault.default).selectDomElements();
        submitBtns.addEventListener("click", (e)=>this.#handleFormSubmit(e));
        (0, _uiJsDefault.default).showTaskToUI((0, _storageJsDefault.default).allTask);
    }
}
const manipulation = new Manipulation();
exports.default = manipulation;

},{"./Ui.js":"8vzuR","./Storage.js":"5r0fU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5r0fU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Storage {
    allTask = localStorage.getItem("mobin-task-data") ? JSON.parse(localStorage.getItem("mobin-task-data")) : [];
    saveData(data) {
        this.allTask.push(data);
        localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
    }
    updateStorage(data) {
        const tasks = this.allTask.filter((task)=>task.id !== data.id);
        this.allTask = tasks;
        this.allTask.push(data);
        localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
    }
    deleteTask(id) {
        const tasks = this.allTask.filter((task)=>task.id !== id);
        this.allTask = tasks;
        localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
    }
    completeTask(id) {
        let index;
        this.allTask.forEach((task)=>{
            if (task.id === id) index = this.allTask.indexOf(task);
        });
        this.allTask[index].status = "Completed";
        this.allTask[index].amount = 100;
        localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
    }
}
const store = new Storage();
exports.default = store;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1JEHZ","adjPd"], "adjPd", "parcelRequire5890")

//# sourceMappingURL=index.63aff760.js.map
