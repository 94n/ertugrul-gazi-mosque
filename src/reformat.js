var pwlib = {};
pwlib.fileCache = {};
pwlib.tools = {};
pwlib.extensions = {};
pwlib.extend = function () {
    var A, D, B, C;
    if (typeof arguments[0] === "boolean") {
        force = arguments[0];
        dest = arguments[1];
        D = arguments[2]
    } else {
        force = false;
        dest = arguments[0];
        D = arguments[1]
    }
    if (typeof D === "undefined") {
        D = dest;
        dest = this
    }
    if (typeof dest === "undefined") {
        return
    }
    for (A in D) {
        B = D[A];
        C = dest[A];
        if (force || typeof C === "undefined") {
            dest[A] = B
        }
    }
};
pwlib.strf = function (D, C) {
    if (!D) {
        return D
    }
    var B, A;
    for (A in C) {
        B = new RegExp("{" + A + "}", "g");
        D = D.replace(B, C[A])
    }
    return D
};
pwlib.jsonParse = function (A) {
    A = A.replace(/\s*\/\*(\s|.)+?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    return JSON.parse(A)
};
pwlib.xhrLoad = function (A, B, G, C, E) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string!")
    }
    if (!G) {
        G = "GET"
    }
    if (!E) {
        E = {}
    }
    if (!C) {
        C = null
    }
    var D = new XMLHttpRequest();
    D.onreadystatechange = function () {
        B(D)
    };
    D.open(G, A);
    for (var F in E) {
        D.setRequestHeader(F, E[F])
    }
    D.send(C);
    return D
};
pwlib.isSameHost = function (B, D) {
    if (!B || !D) {
        return false
    }
    var E = B.indexOf(":"), C = B.substr(0, E + 1).toLowerCase();
    if (C === "data:") {
        return true
    }
    if (C !== "http:" && C !== "https:") {
        return false
    }
    var A = B.replace(/^https?:\/\//i, "");
    E = A.indexOf("/");
    if (E > -1) {
        A = A.substr(0, E)
    }
    A = A.replace(/:80$/, "");
    D = D.replace(/:80$/, "");
    if (!A || !D || A !== D) {
        return false
    }
    return true
};
pwlib.appEvent = function (B, A) {
    if (typeof B !== "string") {
        throw new TypeError("The first argument must be a string")
    } else {
        if (typeof A === "undefined") {
            A = false
        } else {
            if (typeof A !== "boolean") {
                throw new TypeError("The second argument must be a boolean")
            }
        }
    }
    this.target = null;
    this.cancelable = A;
    this.defaultPrevented = false;
    this.type = B;
    this.preventDefault = function () {
        if (A) {
            this.defaultPrevented = true
        }
    };
    this.stopPropagation = function () {
        this.propagationStopped_ = true
    };
    this.toString = function () {
        return"[pwlib.appEvent." + this.type + "]"
    }
};
pwlib.appEvent.appInit = function (B, A) {
    if (typeof B !== "number") {
        throw new TypeError("The first argument must be a number.")
    }
    this.INIT_NOT_STARTED = 0;
    this.INIT_STARTED = 1;
    this.INIT_DONE = 2;
    this.INIT_ERROR = -1;
    this.state = B;
    this.errorMessage = A || null;
    pwlib.appEvent.call(this, "appInit")
};
pwlib.appEvent.appDestroy = function () {
    pwlib.appEvent.call(this, "appDestroy")
};
pwlib.appEvent.guiShow = function () {
    pwlib.appEvent.call(this, "guiShow")
};
pwlib.appEvent.guiHide = function () {
    pwlib.appEvent.call(this, "guiHide")
};
pwlib.appEvent.toolPreactivate = function (B, A) {
    if (typeof B !== "string") {
        throw new TypeError("The first argument must be a string.")
    } else {
        if (A !== null && typeof A !== "string") {
            throw new TypeError("The second argument must be a string or null.")
        }
    }
    this.id = B;
    this.prevId = A;
    pwlib.appEvent.call(this, "toolPreactivate", true)
};
pwlib.appEvent.toolActivate = function (B, A) {
    if (typeof B !== "string") {
        throw new TypeError("The first argument must be a string.")
    } else {
        if (A !== null && typeof A !== "string") {
            throw new TypeError("The second argument must be a string or null.")
        }
    }
    this.id = B;
    this.prevId = A;
    pwlib.appEvent.call(this, "toolActivate")
};
pwlib.appEvent.toolRegister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "toolRegister")
};
pwlib.appEvent.toolUnregister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "toolUnregister")
};
pwlib.appEvent.extensionRegister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "extensionRegister")
};
pwlib.appEvent.extensionUnregister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "extensionUnregister")
};
pwlib.appEvent.commandRegister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "commandRegister")
};
pwlib.appEvent.commandUnregister = function (A) {
    if (typeof A !== "string") {
        throw new TypeError("The first argument must be a string.")
    }
    this.id = A;
    pwlib.appEvent.call(this, "commandUnregister")
};
pwlib.appEvent.imageSave = function (C, B, A) {
    this.dataURL = C;
    this.width = B;
    this.height = A;
    pwlib.appEvent.call(this, "imageSave", true)
};
pwlib.appEvent.imageSaveResult = function (C, A, B) {
    this.successful = C;
    this.url = A;
    this.urlNew = B;
    pwlib.appEvent.call(this, "imageSaveResult")
};
pwlib.appEvent.historyUpdate = function (C, A, B) {
    if (typeof C !== "number" || typeof A !== "number" || typeof B !== "number") {
        throw new TypeError("All arguments must be numbers.")
    }
    this.currentPos = C;
    this.previousPos = A;
    this.states = B;
    pwlib.appEvent.call(this, "historyUpdate")
};
pwlib.appEvent.imageSizeChange = function (B, A) {
    if (typeof B !== "number" || typeof A !== "number") {
        throw new TypeError("Both arguments must be numbers.")
    }
    this.width = B;
    this.height = A;
    pwlib.appEvent.call(this, "imageSizeChange")
};
pwlib.appEvent.canvasSizeChange = function (B, A, C) {
    if (typeof B !== "number" || typeof A !== "number" || typeof C !== "number") {
        throw new TypeError("All the arguments must be numbers.")
    }
    this.width = B;
    this.height = A;
    this.scale = C;
    pwlib.appEvent.call(this, "canvasSizeChange")
};
pwlib.appEvent.viewportSizeChange = function (B, A) {
    this.width = B;
    this.height = A;
    pwlib.appEvent.call(this, "viewportSizeChange")
};
pwlib.appEvent.imageZoom = function (A) {
    if (typeof A !== "number") {
        throw new TypeError("The first argument must be a number.")
    }
    this.zoom = A;
    pwlib.appEvent.call(this, "imageZoom", true)
};
pwlib.appEvent.imageCrop = function (B, D, C, A) {
    if (typeof B !== "number" || typeof D !== "number" || typeof C !== "number" || typeof A !== "number") {
        throw new TypeError("All arguments must be numbers.")
    }
    this.x = B;
    this.y = D;
    this.width = C;
    this.height = A;
    pwlib.appEvent.call(this, "imageCrop", true)
};
pwlib.appEvent.configChange = function (D, A, B, E, C) {
    if (typeof B !== "string") {
        throw new TypeError("The third argument must be a string.")
    } else {
        if (typeof E !== "string") {
            throw new TypeError("The fourth argument must be a string.")
        } else {
            if (typeof C !== "object") {
                throw new TypeError("The fifth argument must be an object.")
            }
        }
    }
    this.value = D;
    this.previousValue = A;
    this.config = B;
    this.group = E;
    this.groupRef = C;
    pwlib.appEvent.call(this, "configChange")
};
pwlib.appEvent.shadowAllow = function (A) {
    if (typeof A !== "boolean") {
        throw new TypeError("The first argument must be a boolean.")
    }
    this.allowed = A;
    pwlib.appEvent.call(this, "shadowAllow")
};
pwlib.appEvent.clipboardUpdate = function (A) {
    this.data = A;
    pwlib.appEvent.call(this, "clipboardUpdate")
};
pwlib.appEvents = function (C) {
    var B = {};
    var A = 1;
    this.add = function (E, D) {
        if (typeof E !== "string") {
            throw new TypeError("The first argument must be a string.")
        } else {
            if (typeof D !== "function") {
                throw new TypeError("The second argument must be a function.")
            }
        }
        var F = A++;
        if (!(E in B)) {
            B[E] = {}
        }
        B[E][F] = D;
        return F
    };
    this.remove = function (D, E) {
        if (typeof D !== "string") {
            throw new TypeError("The first argument must be a string.")
        }
        if (!(D in B) || !(E in B[D])) {
            return
        }
        delete B[D][E]
    };
    this.dispatch = function (E) {
        if (typeof E !== "object") {
            throw new TypeError("The second argument must be an object.")
        } else {
            if (typeof E.type !== "string") {
                throw new TypeError("The second argument must be an application event object.")
            }
        }
        if (!(E.type in B)) {
            return false
        }
        E.target = C;
        var F, D = B[E.type];
        for (F in D) {
            D[F].call(C, E);
            if (E.propagationStopped_) {
                break
            }
        }
        return E.defaultPrevented
    }
};
pwlib.browser = {};
(function () {
    var A = "";
    if (window.navigator && window.navigator.userAgent) {
        A = window.navigator.userAgent.toLowerCase()
    }
    pwlib.browser.opera = window.opera || /\bopera\b/.test(A);
    pwlib.browser.webkit = !pwlib.browser.opera && /\b(applewebkit|webkit)\b/.test(A);
    pwlib.browser.firefox = /\bfirefox\b/.test(A) && !pwlib.browser.opera;
    pwlib.browser.gecko = /\bgecko\b/.test(A) && !pwlib.browser.opera && !pwlib.browser.webkit;
    pwlib.browser.msie = /\bmsie\b/.test(A) && !pwlib.browser.opera;
    pwlib.browser.presto = /\bpresto\b/.test(A) || pwlib.browser.opera;
    pwlib.browser.os = (A.match(/\b(windows|linux)\b/) || [])[1];
    pwlib.browser.olpcxo = /\bolpc\b/.test(A) && /\bxo\b/.test(A);
    delete A
})();
pwlib.dom = {};
pwlib.dom.keyNames = {Help: 6, Backspace: 8, Tab: 9, Clear: 12, Enter: 13, Shift: 16, Control: 17, Alt: 18, Pause: 19, CapsLock: 20, Cancel: 24, Escape: 27, Space: 32, PageUp: 33, PageDown: 34, End: 35, Home: 36, Left: 37, Up: 38, Right: 39, Down: 40, PrintScreen: 44, Insert: 45, Delete: 46, Win: 91, ContextMenu: 93, "*": 106, "+": 107, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NumLock: 144, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222};
pwlib.dom.keyCodes = {3: "Enter", 6: "Help", 8: "Backspace", 9: "Tab", 10: "Enter", 12: "Clear", 13: "Enter", 14: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 24: "Cancel", 27: "Escape", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 45: "Insert", 46: "Delete", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 127: "Delete", 144: "NumLock", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"};
if (pwlib.browser.gecko) {
    pwlib.dom.keyCodes[3] = "Cancel"
}
pwlib.dom.keyCodes_fixes = {42: pwlib.dom.keyNames["*"], 47: pwlib.dom.keyNames["/"], 59: pwlib.dom.keyNames[";"], 61: pwlib.dom.keyNames["="], 96: 48, 97: 49, 98: 50, 99: 51, 100: 52, 101: 53, 102: 54, 103: 55, 104: 56, 105: 57, 109: pwlib.dom.keyNames["-"], 110: pwlib.dom.keyNames["."], 111: pwlib.dom.keyNames["/"]};
pwlib.dom.keyCodes_Safari2 = {63232: pwlib.dom.keyNames.Up, 63233: pwlib.dom.keyNames.Down, 63234: pwlib.dom.keyNames.Left, 63235: pwlib.dom.keyNames.Right, 63236: pwlib.dom.keyNames.F1, 63237: pwlib.dom.keyNames.F2, 63238: pwlib.dom.keyNames.F3, 63239: pwlib.dom.keyNames.F4, 63240: pwlib.dom.keyNames.F5, 63241: pwlib.dom.keyNames.F6, 63242: pwlib.dom.keyNames.F7, 63243: pwlib.dom.keyNames.F8, 63244: pwlib.dom.keyNames.F9, 63245: pwlib.dom.keyNames.F10, 63246: pwlib.dom.keyNames.F11, 63247: pwlib.dom.keyNames.F12, 63248: pwlib.dom.keyNames.PrintScreen, 63272: pwlib.dom.keyNames.Delete, 63273: pwlib.dom.keyNames.Home, 63275: pwlib.dom.keyNames.End, 63276: pwlib.dom.keyNames.PageUp, 63277: pwlib.dom.keyNames.PageDown, 63289: pwlib.dom.keyNames.NumLock, 63302: pwlib.dom.keyNames.Insert};
pwlib.dom.KeyboardEventListener = function (O, N) {
    var H = null;
    var L = null;
    var G = null;
    var I = null;
    var F = false;
    if (!N) {
        throw new TypeError("The first argument must be of type an object.")
    }
    if (!N.keydown && !N.keypress && !N.keyup) {
        throw new TypeError("The provided handlers object has no keyboard eventhandler.")
    }
    if (N.keydown && typeof N.keydown !== "function") {
        throw new TypeError("The keydown event handler is not a function!")
    }
    if (N.keypress && typeof N.keypress !== "function") {
        throw new TypeError("The keypress event handler is not a function!")
    }
    if (N.keyup && typeof N.keyup !== "function") {
        throw new TypeError("The keyup event handler is not a function!")
    }
    this.attach = function () {
        H = null;
        L = null;
        G = null;
        I = null;
        F = false;
        O.addEventListener("keydown", E, false);
        O.addEventListener("keypress", C, false);
        O.addEventListener("keyup", B, false)
    };
    this.detach = function () {
        O.removeEventListener("keydown", E, false);
        O.removeEventListener("keypress", C, false);
        O.removeEventListener("keyup", B, false);
        H = null;
        L = null;
        G = null;
        I = null;
        F = false
    };
    function J(Q, R) {
        if (!N[Q]) {
            return
        }
        var P = N[Q];
        if (Q === R.type) {
            P.call(O, R)
        } else {
            var S = {};
            pwlib.extend(S, R);
            S.type = Q;
            S.preventDefault = function () {
                R.preventDefault()
            };
            P.call(O, S)
        }
    }

    function E(Q) {
        var P = L;
        G = null;
        I = null;
        K(Q);
        Q.keyCode_ = H;
        Q.key_ = L;
        Q.repeat_ = L && P === L ? true : false;
        F = Q.repeat_;
        if (!F) {
            J("keydown", Q)
        }
        if (!A(L) && !D(Q)) {
            Q.type_ = "keydown";
            C(Q)
        }
    }

    function C(P) {
        if (!H) {
            K(P);
            F = false
        }
        P.keyCode_ = H;
        P.key_ = L;
        M(P);
        P.charCode_ = G;
        P.char_ = I;
        P.repeat_ = F;
        if (!F) {
            F = true
        }
        if (!A(L)) {
            J("keypress", P)
        }
    }

    function B(P) {
        K(P);
        P.keyCode_ = H;
        P.key_ = L;
        P.charCode_ = G;
        P.char_ = I;
        J("keyup", P);
        H = null;
        L = null;
        G = null;
        I = null;
        F = false
    }

    function A(P) {
        switch (P) {
            case"Shift":
            case"Control":
            case"Alt":
            case"Meta":
            case"Win":
                return true;
            default:
                return false
        }
    }

    function D(P) {
        if ((L === "Up" || L === "Down") && pwlib.browser.gecko && P.target && P.target.tagName.toLowerCase() === "input") {
            return false
        }
        if (!pwlib.browser.msie && !pwlib.browser.webkit) {
            return true
        }
        if (L && L !== "Space" && L !== "Enter" && L !== "Escape" && L.length !== 1) {
            return false
        }
        if (pwlib.browser.webkit && L === "Escape") {
            return false
        }
        if (pwlib.browser.msie && !P.shiftKey && (P.ctrlKey || P.altKey)) {
            return false
        }
        return true
    }

    function K(Q) {
        if (Q.type === "keyup" && !Q.keyCode && !Q.which && (!Q.keyIdentifier || Q.keyIdentifier === "Unidentified" || Q.keyIdentifier === "U+0000")) {
            return
        }
        H = null;
        L = null;
        if (Q.keyCode || Q.which) {
            H = Q.keyCode || Q.which;
            if (pwlib.browser.webkit) {
                if (H == 25 && this.shiftKey) {
                    H = pwlib.dom.keyNames.Tab
                } else {
                    if (H >= 63232 && H in pwlib.dom.keyCodes_Safari2) {
                        H = pwlib.dom.keyCodes_Safari2[H]
                    }
                }
            }
            if (H in pwlib.dom.keyCodes_fixes) {
                H = pwlib.dom.keyCodes_fixes[H]
            }
            L = pwlib.dom.keyCodes[H] || String.fromCharCode(H);
            return
        }
        var P = null, R = null, S = Q.keyIdentifier;
        if (!S || S === "Unidentified" || S === "U+0000") {
            return
        }
        if (S.substr(0, 2) === "U+") {
            R = parseInt(S.substr(2), 16)
        } else {
            if (S.length === 1) {
                R = S.charCodeAt(0);
                P = S
            } else {
                H = pwlib.dom.keyNames[S] || null;
                L = S;
                return
            }
        }
        if (R in pwlib.dom.keyCodes && (R <= 32 || R == 127 || R == 144)) {
            L = pwlib.dom.keyCodes[R]
        } else {
            if (!P) {
                P = String.fromCharCode(R)
            }
            L = P.toUpperCase();
            if (P !== L) {
                R = L.charCodeAt(0)
            }
        }
        if (L === "Delete" || L.length === 1 && L in pwlib.dom.keyNames) {
            R = pwlib.dom.keyNames[L]
        }
        H = R
    }

    function M(R) {
        G = null;
        I = null;
        if (R.charCode) {
            G = R.charCode;
            I = String.fromCharCode(R.charCode);
            return
        }
        if (R.keyCode || R.which) {
            var T = R.keyCode || R.which;
            var S = false;
            switch (T) {
                case pwlib.dom.keyNames.Tab:
                case pwlib.dom.keyNames.Enter:
                case pwlib.dom.keyNames.Space:
                    S = true
            }
            if (!S && L && L.length !== 1) {
                return
            }
            if (R.type_ === "keydown") {
                var Q = pwlib.dom.keyCodes[T];
                if (Q && Q.length === 1) {
                    G = Q.charCodeAt(0);
                    I = Q
                }
            } else {
                if (T >= 32 || S) {
                    G = T;
                    I = String.fromCharCode(T)
                }
            }
            if (G) {
                return
            }
        }
        var V = null, P = null, U = R.keyIdentifier;
        if (U && U !== "Unidentified" && U !== "U+0000" && (U.substr(0, 2) === "U+" || U.length === 1)) {
            if (U.length === 1) {
                P = U.charCodeAt(0);
                V = U
            } else {
                P = parseInt(U.substr(2), 16)
            }
            if (P == pwlib.dom.keyNames.Tab || P == pwlib.dom.keyNames.Enter || P >= 32 && P != 127 && P != pwlib.dom.keyNames.NumLock) {
                G = P;
                I = V || String.fromCharCode(P);
                return
            }
        }
        if (L && L.length === 1) {
            G = L.charCodeAt(0);
            I = L
        }
    }

    this.attach()
};
pwlib.tools.bcurve = function (F) {
    var K = this, M = F.win.clearInterval, D = F.config, B = F.buffer.context, C = F.gui, G = F.image, I = F.mouse, H = F.win.setInterval, E = F.toolSnapXY;
    var L = [];
    var A = null;
    var J = false;
    var N = false;
    this.deactivate = function () {
        if (A) {
            M(A);
            A = null
        }
        if (L.length > 0) {
            B.clearRect(0, 0, G.width, G.height)
        }
        N = false;
        L = [];
        return true
    };
    this.mousedown = function (O) {
        if (L.length === 0) {
            C.statusShow("bcurveSnapping");
            L.push([I.x, I.y])
        }
        if (!A) {
            A = H(K.draw, D.toolDrawDelay)
        }
        J = O.shiftKey;
        N = false;
        return true
    };
    this.mousemove = function (O) {
        J = O.shiftKey;
        N = true
    };
    this.draw = function () {
        if (!N) {
            return
        }
        var U = L.length;
        if (I.buttonDown) {
            if (J && U === 1) {
                E(L[0][0], L[0][1])
            }
            L.push([I.x, I.y]);
            U++
        }
        var T = L[0], R = L[1], Q = L[2], P = L[3] || L[2];
        if (I.buttonDown) {
            L.pop()
        }
        B.clearRect(0, 0, G.width, G.height);
        if (!U) {
            N = false;
            return
        }
        if (U === 2) {
            B.beginPath();
            B.moveTo(T[0], T[1] + 2);
            B.lineTo(R[0], R[1] + 2);
            if (D.shapeType === "fill") {
                var O = B.lineWidth, S = B.strokeStyle;
                B.lineWidth = 1;
                B.strokeStyle = B.fillStyle
            }
            B.stroke();
            B.closePath();
            if (D.shapeType === "fill") {
                B.lineWidth = O;
                B.strokeStyle = S
            }
            N = false;
            return
        }
        B.beginPath();
        B.moveTo(T[0], T[1]);
        B.bezierCurveTo(Q[0], Q[1], P[0], P[1], R[0], R[1]);
        if (D.shapeType !== "stroke") {
            B.fill()
        }
        if (D.shapeType !== "fill") {
            B.stroke()
        }
        B.closePath();
        N = false
    };
    this.mouseup = function (O) {
        var P = L.length;
        if (P === 1 && I.x === L[0][0] && I.y === L[0][1]) {
            I.buttonDown = true;
            return true
        }
        if (A) {
            M(A);
            A = null
        }
        if (P === 1 && O.shiftKey) {
            E(L[0][0], L[0][1])
        }
        if (P < 4) {
            L.push([I.x, I.y]);
            N = true;
            P++
        }
        J = O.shiftKey;
        K.draw();
        if (P === 2 || P === 3) {
            C.statusShow("bcurveControlPoint" + (P - 1))
        } else {
            if (P === 4) {
                C.statusShow("bcurveActive");
                F.layerUpdate();
                L = []
            }
        }
        return true
    };
    this.keydown = function (O) {
        if (!L.length || O.kid_ !== "Escape") {
            return false
        }
        if (A) {
            M(A);
            A = null
        }
        B.clearRect(0, 0, G.width, G.height);
        L = [];
        N = false;
        I.buttonDown = false;
        C.statusShow("bcurveActive");
        return true
    }
};
pwlib.tools.cbucket = function (D) {
    var L = this, A = D.config, I = D.layer.context, F = D.buffer.context, E = D.image.width, M = D.image.height, J = D.mouse;
    var C = 10000;
    var P = [];
    var B, H;
    this.preActivate = function () {
        if (!I.getImageData || !I.putImageData) {
            alert(D.lang.errorCbucketUnsupported);
            return false
        } else {
            return true
        }
    };
    this.activate = function () {
        D.shadowDisallow()
    };
    this.deactivate = function () {
        D.shadowAllow()
    };
    this.click = function (R) {
        if (R.type === "contextmenu" || R.button === 2 || R.shiftKey) {
            var Q = F.fillStyle;
            F.fillStyle = F.strokeStyle;
            F.fillRect(0, 0, 1, 1);
            F.fillStyle = Q
        } else {
            F.fillRect(0, 0, 1, 1)
        }
        B = F.getImageData(0, 0, 1, 1);
        B = [B.data[0], B.data[1], B.data[2], B.data[3]];
        F.clearRect(0, 0, 1, 1);
        var S = I.getImageData(J.x, J.y, 1, 1).data;
        S = S[0] + ";" + S[1] + ";" + S[2] + ";" + S[3];
        if (S === B.join(";")) {
            return false
        }
        O(J.x, J.y, S);
        D.historyAdd();
        return true
    };
    this.contextmenu = this.click;
    var O = function (W, V, X) {
        var R, S, Q, Y, U, T;
        N(V, W, W, 1);
        N(V + 1, W, W, -1);
        while (P.length > 0) {
            U = P.pop();
            Y = U[3];
            V = U[0] + Y;
            S = U[1];
            Q = U[2];
            H = null;
            T = I.getImageData(0, V, E, 1);
            H = T.data;
            for (W = S; W >= 0 && K(W) === X; W--) {
                G(W)
            }
            if (W >= S) {
                for (W++; W <= Q && K(W) !== X; W++) {
                }
                R = W;
                if (W > Q) {
                    I.putImageData(T, 0, V);
                    continue
                }
            } else {
                R = W + 1;
                if (R < S) {
                    N(V, R, S - 1, -Y)
                }
                W = S + 1
            }
            do {
                for (; W < E && K(W) === X; W++) {
                    G(W)
                }
                N(V, R, W - 1, Y);
                if (W > (Q + 1)) {
                    N(V, Q + 1, W - 1, -Y)
                }
                for (W++; W <= Q && K(W) !== X; W++) {
                }
                R = W
            } while (W <= Q);
            I.putImageData(T, 0, V)
        }
        H = null;
        T = null
    };
    var N = function (T, S, R, Q) {
        if (P.length < C && (T + Q) >= 0 && (T + Q) < M) {
            P.push([T, S, R, Q])
        }
    };
    var K = function (Q) {
        var R = 4 * Q;
        return H[R] + ";" + H[R + 1] + ";" + H[R + 2] + ";" + H[R + 3]
    };
    var G = function (Q) {
        var R = 4 * Q;
        H[R] = B[0];
        H[R + 1] = B[1];
        H[R + 2] = B[2];
        H[R + 3] = B[3]
    }
};
pwlib.tools.cpicker = function (G) {
    var M = this, L = G.extensions.colormixer, B = G.layer.context, C = G.gui, E = G.lang, J = Math.round, K = G.mouse;
    var I = null;
    var H = null;
    var A = null;
    var O = false;
    var N = false;
    this.preActivate = function () {
        if (!B.getImageData) {
            alert(E.errorCpickerUnsupported);
            return false
        }
        if (G.tool && G.tool._id) {
            I = G.tool._id
        }
        return true
    };
    this.activate = function () {
        if (L && L.targetInput) {
            H = C.colorInputs[L.targetInput.id]
        }
        if (H) {
            C.statusShow("cpicker_" + H.id)
        } else {
            C.statusShow("cpickerNormal")
        }
        G.shadowDisallow()
    };
    this.deactivate = function () {
        if (!N && H && A) {
            F(null, true)
        }
        G.shadowAllow()
    };
    this.mousedown = function (P) {
        if (L && L.targetInput) {
            H = C.colorInputs[L.targetInput.id]
        }
        if (H) {
            O = true;
            C.statusShow("cpicker_" + H.id)
        } else {
            O = false;
            C.statusShow("cpickerNormal");
            if (P.button === 2 || P.shiftKey) {
                H = C.colorInputs.strokeStyle
            } else {
                H = C.colorInputs.fillStyle
            }
        }
        D();
        M.mousemove = F;
        F(P);
        return true
    };
    function F(R, Q) {
        if (!H) {
            return
        }
        var S = Q ? A : B.getImageData(K.x, K.y, 1, 1), P = {red: S.data[0] / 255, green: S.data[1] / 255, blue: S.data[2] / 255, alpha: (S.data[3] / 255).toFixed(3)};
        if (O) {
            L.color.red = P.red;
            L.color.green = P.green;
            L.color.blue = P.blue;
            L.color.alpha = P.alpha;
            L.update_color("rgb")
        } else {
            H.updateColor(P)
        }
    }

    this.mouseup = function (S) {
        if (!H) {
            return false
        }
        delete M.mousemove;
        F(S);
        N = true;
        if (!O) {
            var P = H.color, V = H.configProperty, T = H.configGroup, R = H.configGroupRef, U = R[V], Q = "rgba(" + J(P.red * 255) + "," + J(P.green * 255) + "," + J(P.blue * 255) + "," + P.alpha + ")";
            if (U !== Q) {
                R[V] = Q;
                G.events.dispatch(new pwlib.appEvent.configChange(Q, U, V, T, R))
            }
        }
        if (I) {
            G.toolActivate(I, S)
        }
        return true
    };
    this.keydown = function (P) {
        if (!I || P.kid_ !== "Escape") {
            return false
        }
        K.buttonDown = false;
        G.toolActivate(I, P);
        return true
    };
    this.contextmenu = function () {
        return true
    };
    function D() {
        var P = O ? L.color : H.color;
        A = {width: 1, height: 1, data: [J(P.red * 255), J(P.green * 255), J(P.blue * 255), P.alpha * 255]}
    }
};
pwlib.tools.ellipse = function (G) {
    var M = this, Q = G.win.clearInterval, F = G.config, B = G.buffer.context, C = G.gui, H = G.image, E = Math.max, P = Math.min, J = G.mouse, I = G.win.setInterval;
    var A = null;
    var L = false;
    var R = false;
    var N = 4 * ((Math.SQRT2 - 1) / 3);
    var D = 0;
    var O = 0;
    this.deactivate = function () {
        if (A) {
            Q(A);
            A = null
        }
        if (J.buttonDown) {
            B.clearRect(0, 0, H.width, H.height)
        }
        R = false;
        return true
    };
    this.mousedown = function (K) {
        D = J.x;
        O = J.y;
        if (!A) {
            A = I(M.draw, F.toolDrawDelay)
        }
        L = K.shiftKey;
        R = false;
        C.statusShow("ellipseMousedown");
        return true
    };
    this.mousemove = function (K) {
        L = K.shiftKey;
        R = true
    };
    this.draw = function () {
        if (!R) {
            return
        }
        B.clearRect(0, 0, H.width, H.height);
        var Z = P(J.x, D), Y = E(J.x, D), W = P(J.y, O), V = E(J.y, O);
        var a = Y - Z, X = V - W;
        if (!a || !X) {
            R = false;
            return
        }
        if (L) {
            if (a > X) {
                V = W + a;
                if (W == J.y) {
                    W -= a - X;
                    V -= a - X
                }
                X = a
            } else {
                Y = Z + X;
                if (Z == J.x) {
                    Z -= X - a;
                    Y -= X - a
                }
                a = X
            }
        }
        var S = a / 2, K = X / 2;
        var U = Z + S, T = W + K;
        S *= N;
        K *= N;
        B.beginPath();
        B.moveTo(U, W);
        B.bezierCurveTo(U + S, W, Y, T - K, Y, T);
        B.bezierCurveTo(Y, T + K, U + S, V, U, V);
        B.bezierCurveTo(U - S, V, Z, T + K, Z, T);
        B.bezierCurveTo(Z, T - K, U - S, W, U, W);
        if (F.shapeType != "stroke") {
            B.fill()
        }
        if (F.shapeType != "fill") {
            B.stroke()
        }
        B.closePath();
        R = false
    };
    this.mouseup = function (K) {
        if (J.x == D && J.y == O) {
            J.buttonDown = true;
            return true
        }
        if (A) {
            Q(A);
            A = null
        }
        L = K.shiftKey;
        M.draw();
        G.layerUpdate();
        C.statusShow("ellipseActive");
        return true
    };
    this.keydown = function (K) {
        if (!J.buttonDown || K.kid_ != "Escape") {
            return false
        }
        if (A) {
            Q(A);
            A = null
        }
        B.clearRect(0, 0, H.width, H.height);
        J.buttonDown = false;
        R = false;
        C.statusShow("ellipseActive");
        return true
    }
};
pwlib.tools.eraser = function (F) {
    var K = this, B = F.buffer.context, O = F.win.clearInterval, E = F.config, J = F.history.pos, G = F.image, L = F.layer.context, I = F.mouse, H = F.win.setInterval;
    var C = null;
    var N = [];
    var D = 0;
    var M = 0;
    var P = null, A = null;
    this.deactivate = function () {
        if (C) {
            O(C);
            C = null
        }
        if (I.buttonDown) {
            if (P) {
                L.globalCompositeOperation = P
            }
            if (A) {
                L.lineWidth = A
            }
            F.historyGoto(J.pos)
        }
        N = [];
        F.shadowAllow()
    };
    this.activate = function () {
        F.shadowDisallow()
    };
    this.mousedown = function () {
        P = L.globalCompositeOperation;
        A = L.lineWidth;
        L.globalCompositeOperation = "destination-out";
        L.lineWidth = B.lineWidth;
        D = I.x;
        M = I.y;
        N = [];
        if (!C) {
            C = H(K.draw, E.toolDrawDelay)
        }
        return true
    };
    this.mousemove = function () {
        if (I.buttonDown) {
            N.push(I.x, I.y)
        }
    };
    this.draw = function () {
        var Q = 0, R = N.length;
        if (!R) {
            return
        }
        L.beginPath();
        L.moveTo(D, M);
        while (Q < R) {
            D = N[Q++];
            M = N[Q++];
            L.lineTo(D, M)
        }
        L.stroke();
        L.closePath();
        N = []
    };
    this.mouseup = function () {
        if (I.x == D && I.y == M) {
            N.push(D + 1, M + 1)
        }
        if (C) {
            O(C);
            C = null
        }
        K.draw();
        L.globalCompositeOperation = P;
        L.lineWidth = A;
        F.historyAdd();
        return true
    };
    this.keydown = function (Q) {
        if (!I.buttonDown || Q.kid_ != "Escape") {
            return false
        }
        if (C) {
            O(C);
            C = null
        }
        L.globalCompositeOperation = P;
        L.lineWidth = A;
        I.buttonDown = false;
        N = [];
        F.historyGoto(J.pos);
        return true
    }
};
pwlib.tools.hand = function (F) {
    var J = this, A = F.buffer.canvas, N = A.style, E = F.config;
    clearInterval = F.win.clearInterval, image = F.image, MathRound = Math.round, mouse = F.mouse, viewport = F.gui.elems.viewport, vheight = 0, vwidth = 0, setInterval = F.win.setInterval;
    var C = null;
    var L = false;
    this.prevTool = null;
    var D = 0, M = 0, B = 0, K = 0, H = 0, I = 0;
    this.preActivate = function () {
        if (!viewport) {
            return false
        }
        J.prevTool = F.tool._id;
        var R = F.win.getComputedStyle(viewport, null), S = parseInt(N.width), Q = parseInt(N.height);
        vwidth = parseInt(R.width), vheight = parseInt(R.height);
        if (vheight < Q || vwidth < S) {
            return true
        } else {
            return false
        }
    };
    this.activate = function () {
        N.cursor = "move";
        F.shadowDisallow()
    };
    this.deactivate = function (Q) {
        if (C) {
            clearInterval(C);
            C = null;
            F.doc.removeEventListener("mousemove", O, false);
            F.doc.removeEventListener("mouseup", P, false)
        }
        N.cursor = "";
        F.shadowAllow()
    };
    this.mousedown = function (Q) {
        D = Q.clientX;
        M = Q.clientY;
        H = viewport.scrollLeft;
        I = viewport.scrollTop;
        L = false;
        F.doc.addEventListener("mousemove", O, false);
        F.doc.addEventListener("mouseup", P, false);
        if (!C) {
            C = setInterval(G, E.toolDrawDelay)
        }
        return true
    };
    function O(Q) {
        B = Q.clientX;
        K = Q.clientY;
        L = true
    }

    function G() {
        if (L) {
            viewport.scrollTop = I - K + M;
            viewport.scrollLeft = H - B + D;
            L = false
        }
    }

    function P(Q) {
        if (C) {
            clearInterval(C);
            C = null
        }
        O(Q);
        G();
        F.doc.removeEventListener("mousemove", O, false);
        F.doc.removeEventListener("mouseup", P, false);
        mouse.buttonDown = false
    }

    this.keydown = function (Q) {
        if (!J.prevTool || Q.kid_ != "Escape") {
            return false
        }
        F.toolActivate(J.prevTool, Q);
        return true
    }
};
pwlib.tools.insertimg = function (H) {
    var G = this, R = H.image, J = H.win.clearInterval, V = H.config, E = H.buffer.context, M = H.gui, W = H.lang, P = Math.abs, U = Math.min, T = Math.round, K = H.mouse, A = H.win.setInterval;
    var D = H.tool ? H.tool._id : null;
    var I = null;
    var N = false;
    var O = false;
    var S = 0;
    var F = 0;
    var B = false;
    var C = 1;
    var Q = null;
    if (!this.url) {
        this.url = "http://"
    }
    this.preActivate = function () {
        if (!M.elems.viewport) {
            return false
        }
        G.url = prompt(W.promptInsertimg, G.url);
        if (!G.url || G.url.toLowerCase() === "http://") {
            return false
        }
        pwlib.extend(true, G.constructor.prototype, {url: G.url});
        if (!pwlib.isSameHost(G.url, H.win.location.host)) {
            alert(W.errorInsertimgHost);
            return false
        }
        return true
    };
    this.activate = function () {
        Q = new Image();
        Q.addEventListener("load", L, false);
        Q.src = G.url;
        return true
    };
    this.deactivate = function () {
        if (Q) {
            Q = null
        }
        if (I) {
            J(I);
            I = null
        }
        O = false;
        E.clearRect(0, 0, R.width, R.height);
        return true
    };
    function L() {
        if (B) {
            return
        }
        var X = T(M.elems.viewport.scrollLeft / R.canvasScale), Z = T(M.elems.viewport.scrollTop / R.canvasScale);
        E.clearRect(0, 0, R.width, R.height);
        try {
            E.drawImage(Q, X, Z)
        } catch (Y) {
            alert(W.errorInsertimg);
            return
        }
        B = true;
        O = false;
        if (!I) {
            I = A(G.draw, V.toolDrawDelay)
        }
        M.statusShow("insertimgLoaded")
    }

    this.mousedown = function (X) {
        if (!B) {
            alert(W.errorInsertimgNotLoaded);
            return false
        }
        S = K.x;
        F = K.y;
        C = Q.width / Q.height;
        N = X.shiftKey;
        M.statusShow("insertimgResize");
        if (X.stopPropagation) {
            X.stopPropagation()
        }
    };
    this.mousemove = function (X) {
        N = X.shiftKey;
        O = true
    };
    this.draw = function () {
        if (!B || !O) {
            return
        }
        E.clearRect(0, 0, R.width, R.height);
        if (K.buttonDown) {
            var Y = P(K.x - S), Z = P(K.y - F), X = U(K.x, S), a = U(K.y, F);
            if (!Y || !Z) {
                O = false;
                return
            }
            if (N) {
                if (Y > Z) {
                    if (a == K.y) {
                        a -= Y - Z
                    }
                    Z = T(Y / C)
                } else {
                    if (X == K.x) {
                        X -= Z - Y
                    }
                    Y = T(Z * C)
                }
            }
            E.drawImage(Q, X, a, Y, Z)
        } else {
            E.drawImage(Q, K.x, K.y)
        }
        O = false
    };
    this.mouseup = function (X) {
        if (!B) {
            return false
        }
        if (I) {
            J(I);
            I = null
        }
        H.layerUpdate();
        if (D) {
            H.toolActivate(D, X)
        }
        if (X.stopPropagation) {
            X.stopPropagation()
        }
    };
    this.keydown = function (X) {
        if (!D || X.kid_ != "Escape") {
            return false
        }
        if (I) {
            J(I);
            I = null
        }
        K.buttonDown = false;
        H.toolActivate(D, X);
        return true
    }
};
pwlib.tools.line = function (G) {
    var L = this, N = G.win.clearInterval, E = G.config, B = G.buffer.context, C = G.gui, H = G.image, J = G.mouse, I = G.win.setInterval, F = G.toolSnapXY;
    var A = null;
    var K = false;
    var O = false;
    var D = 0;
    var M = 0;
    this.deactivate = function () {
        if (A) {
            N(A);
            A = null
        }
        if (J.buttonDown) {
            B.clearRect(0, 0, H.width, H.height)
        }
        O = false;
        return true
    };
    this.mousedown = function (P) {
        D = J.x;
        M = J.y;
        if (!A) {
            A = I(L.draw, E.toolDrawDelay)
        }
        K = P.shiftKey;
        O = false;
        C.statusShow("lineMousedown");
        return true
    };
    this.mousemove = function (P) {
        K = P.shiftKey;
        O = true
    };
    this.draw = function () {
        if (!O) {
            return
        }
        B.clearRect(0, 0, H.width, H.height);
        if (K) {
            F(D, M)
        }
        B.beginPath();
        B.moveTo(D, M);
        B.lineTo(J.x, J.y);
        B.stroke();
        B.closePath();
        O = false
    };
    this.mouseup = function (P) {
        if (J.x == D && J.y == M) {
            J.buttonDown = true;
            return true
        }
        if (A) {
            N(A);
            A = null
        }
        K = P.shiftKey;
        L.draw();
        C.statusShow("lineActive");
        G.layerUpdate();
        return true
    };
    this.keydown = function (P) {
        if (!J.buttonDown || P.kid_ != "Escape") {
            return false
        }
        if (A) {
            N(A);
            A = null
        }
        B.clearRect(0, 0, H.width, H.height);
        J.buttonDown = false;
        O = false;
        C.statusShow("lineActive");
        return true
    }
};
pwlib.tools.pencil = function (D) {
    var H = this, K = D.win.clearInterval, B = D.buffer.context, E = D.image, G = D.mouse, F = D.win.setInterval;
    var A = null;
    var J = [];
    var C = 0;
    var I = 0;
    this.deactivate = function () {
        if (A) {
            K(A);
            A = null
        }
        if (G.buttonDown) {
            B.clearRect(0, 0, E.width, E.height)
        }
        J = []
    };
    this.mousedown = function () {
        C = G.x;
        I = G.y;
        J = [];
        if (!A) {
            A = F(H.draw, D.config.toolDrawDelay)
        }
        return true
    };
    this.mousemove = function () {
        if (G.buttonDown) {
            J.push(G.x, G.y)
        }
    };
    this.draw = function () {
        var L = 0, M = J.length;
        if (!M) {
            return
        }
        B.beginPath();
        B.moveTo(C, I);
        while (L < M) {
            C = J[L++];
            I = J[L++];
            B.lineTo(C, I)
        }
        B.stroke();
        B.closePath();
        J = []
    };
    this.mouseup = function () {
        if (G.x == C && G.y == I) {
            J.push(C + 1, I + 1)
        }
        if (A) {
            K(A);
            A = null
        }
        H.draw();
        D.layerUpdate();
        return true
    };
    this.keydown = function (L) {
        if (!G.buttonDown || L.kid_ != "Escape") {
            return false
        }
        if (A) {
            K(A);
            A = null
        }
        B.clearRect(0, 0, E.width, E.height);
        G.buttonDown = false;
        J = [];
        return true
    }
};
pwlib.tools.polygon = function (F) {
    var L = this, N = F.win.clearInterval, D = F.config, B = F.buffer.context, C = F.gui, G = F.image, H = Math.abs, J = F.mouse, I = F.win.setInterval, E = F.toolSnapXY;
    var M = [];
    var A = null;
    var K = false;
    var O = false;
    this.deactivate = function () {
        if (A) {
            N(A);
            A = null
        }
        if (M.length) {
            B.clearRect(0, 0, G.width, G.height)
        }
        O = false;
        M = [];
        return true
    };
    this.mousedown = function (P) {
        if (M.length == 0) {
            M.push([J.x, J.y])
        }
        if (!A) {
            A = I(L.draw, D.toolDrawDelay)
        }
        K = P.shiftKey;
        O = false;
        C.statusShow("polygonMousedown");
        return true
    };
    this.mousemove = function (P) {
        K = P.shiftKey;
        O = true
    };
    this.draw = function (Q) {
        if (!O) {
            return
        }
        var R = M.length;
        if (!R || (R == 1 && !J.buttonDown)) {
            O = false;
            return
        }
        if (J.buttonDown && K) {
            E(M[R - 1][0], M[R - 1][1])
        }
        B.clearRect(0, 0, G.width, G.height);
        B.beginPath();
        B.moveTo(M[0][0], M[0][1]);
        for (var P = 0; P < R; P++) {
            B.lineTo(M[P][0], M[P][1])
        }
        if (J.buttonDown) {
            B.lineTo(J.x, J.y)
        }
        if (D.shapeType != "stroke") {
            B.fill()
        }
        if (D.shapeType != "fill" || R == 1) {
            B.stroke()
        }
        B.closePath();
        O = false
    };
    this.mouseup = function (P) {
        var U = M.length;
        if (U == 1 && J.x == M[U - 1][0] && J.y == M[U - 1][1]) {
            J.buttonDown = true;
            return true
        }
        if (A) {
            N(A);
            A = null
        }
        K = P.shiftKey;
        O = true;
        if (P.shiftKey) {
            E(M[U - 1][0], M[U - 1][1])
        }
        var R = H(J.x - M[0][0]), T = H(J.y - M[0][1]), Q = H(J.x - M[U - 1][0]), S = H(J.y - M[U - 1][1]);
        if ((R < 5 && T < 5) || (Q < 5 && S < 5)) {
            M.push(M[0]);
            L.draw();
            M = [];
            C.statusShow("polygonActive");
            F.layerUpdate();
            return true
        }
        if (U > 3) {
            C.statusShow("polygonEnd")
        } else {
            C.statusShow("polygonAddPoint")
        }
        M.push([J.x, J.y]);
        L.draw();
        return true
    };
    this.keydown = function (P) {
        var Q = M.length;
        if (!Q || (P.kid_ != "Escape" && P.kid_ != "Enter")) {
            return false
        }
        if (A) {
            N(A);
            A = null
        }
        J.buttonDown = false;
        if (P.kid_ == "Escape") {
            B.clearRect(0, 0, G.width, G.height);
            O = false
        } else {
            if (P.kid_ == "Enter") {
                M.push([J.x, J.y]);
                M.push(M[0]);
                O = true;
                L.draw();
                F.layerUpdate()
            }
        }
        M = [];
        C.statusShow("polygonActive");
        return true
    }
};
pwlib.tools.rectangle = function (F) {
    var L = this, O = F.win.clearInterval, E = F.config, B = F.buffer.context, C = F.gui, G = F.image, H = Math.abs, N = Math.min, J = F.mouse, I = F.win.setInterval;
    var A = null;
    var K = false;
    var P = false;
    var D = 0;
    var M = 0;
    this.deactivate = function () {
        if (A) {
            O(A);
            A = null
        }
        if (J.buttonDown) {
            B.clearRect(0, 0, G.width, G.height)
        }
        P = false
    };
    this.mousedown = function (Q) {
        D = J.x;
        M = J.y;
        if (!A) {
            A = I(L.draw, E.toolDrawDelay)
        }
        K = Q.shiftKey;
        P = false;
        C.statusShow("rectangleMousedown");
        return true
    };
    this.mousemove = function (Q) {
        K = Q.shiftKey;
        P = true
    };
    this.draw = function () {
        if (!P) {
            return
        }
        B.clearRect(0, 0, G.width, G.height);
        var Q = N(J.x, D), T = N(J.y, M), R = H(J.x - D), S = H(J.y - M);
        if (!R || !S) {
            P = false;
            return
        }
        if (K) {
            if (R > S) {
                if (T == J.y) {
                    T -= R - S
                }
                S = R
            } else {
                if (Q == J.x) {
                    Q -= S - R
                }
                R = S
            }
        }
        if (E.shapeType != "stroke") {
            B.fillRect(Q, T, R, S)
        }
        if (E.shapeType != "fill") {
            B.strokeRect(Q, T, R, S)
        }
        P = false
    };
    this.mouseup = function (Q) {
        if (J.x == D && J.y == M) {
            J.buttonDown = true;
            return true
        }
        if (A) {
            O(A);
            A = null
        }
        K = Q.shiftKey;
        L.draw();
        F.layerUpdate();
        C.statusShow("rectangleActive");
        return true
    };
    this.keydown = function (Q) {
        if (!J.buttonDown || Q.kid_ != "Escape") {
            return false
        }
        if (A) {
            O(A);
            A = null
        }
        B.clearRect(0, 0, G.width, G.height);
        J.buttonDown = false;
        P = false;
        C.statusShow("rectangleActive");
        return true
    }
};
pwlib.tools.selection = function (E) {
    var K = this, R = pwlib.appEvent, N = E.buffer.context, q = E.win.clearInterval, f = E.config.selection, i = E.gui, H = E.image, I = E.lang, e = E.layer.canvas, V = E.layer.context, B = null, U = Math.abs, o = Math.min, r = Math.round, Z = E.mouse, J = E.win.setInterval, S = E.toolSnapXY;
    var X = null;
    var h = false;
    this.STATE_PENDING = -1;
    this.STATE_NONE = 0;
    this.STATE_DRAWING = 1;
    this.STATE_SELECTED = 2;
    this.STATE_DRAGGING = 3;
    this.STATE_RESIZING = 4;
    this.state = this.STATE_NONE;
    var O = 0;
    var C = 0;
    this.selection = {x: 0, y: 0, width: 0, height: 0, widthOriginal: 0, heightOriginal: 0, layerCleared: false, marquee: null, context: null, canvas: null};
    var c = "out";
    var a = null;
    var Y = this.selection, l = f.borderWidth * 2, T = null, j = null, P = false, L = false;
    var g = null;
    this.preActivate = function () {
        if (!("canvasContainer" in i.elems)) {
            alert(I.errorToolActivate);
            return false
        }
        Y.canvas = E.doc.createElement("canvas");
        if (!Y.canvas) {
            alert(I.errorToolActivate);
            return false
        }
        Y.canvas.width = 5;
        Y.canvas.height = 5;
        Y.context = Y.canvas.getContext("2d");
        if (!Y.context) {
            alert(I.errorToolActivate);
            return false
        }
        Y.marquee = E.doc.createElement("div");
        if (!Y.marquee) {
            alert(I.errorToolActivate);
            return false
        }
        Y.marquee.className = i.classPrefix + "selectionMarquee";
        B = Y.marquee.style;
        return true
    };
    this.activate = function () {
        if (!V.putImageData || !V.getImageData) {
            f.transparent = true
        }
        b();
        B.borderWidth = f.borderWidth + "px";
        Y.marquee.addEventListener("mousedown", M, false);
        Y.marquee.addEventListener("mousemove", Q, false);
        Y.marquee.addEventListener("mouseup", G, false);
        i.elems.canvasContainer.appendChild(Y.marquee);
        E.shadowDisallow();
        T = E.events.add("canvasSizeChange", D);
        j = E.events.add("configChange", W);
        E.commandRegister("selectionCrop", K.selectionCrop);
        E.commandRegister("selectionDelete", K.selectionDelete);
        E.commandRegister("selectionFill", K.selectionFill);
        if (!X) {
            X = J(p, E.config.toolDrawDelay)
        }
        return true
    };
    this.deactivate = function () {
        if (X) {
            q(X);
            X = null
        }
        K.selectionMerge();
        Y.marquee.removeEventListener("mousedown", M, false);
        Y.marquee.removeEventListener("mousemove", Q, false);
        Y.marquee.removeEventListener("mouseup", G, false);
        B = null;
        i.elems.canvasContainer.removeChild(Y.marquee);
        delete Y.context, Y.canvas, Y.marquee;
        E.shadowAllow();
        if (T) {
            E.events.remove("canvasSizeChange", T)
        }
        if (j) {
            E.events.remove("configChange", j)
        }
        E.commandUnregister("selectionCrop");
        E.commandUnregister("selectionDelete");
        E.commandUnregister("selectionFill");
        return true
    };
    this.mousedown = function (s) {
        if (K.state !== K.STATE_NONE && K.state !== K.STATE_SELECTED) {
            return false
        }
        O = Z.x;
        C = Z.y;
        L = s.shiftKey;
        P = s.ctrlKey;
        g = null;
        if (K.state === K.STATE_NONE) {
            K.state = K.STATE_DRAWING;
            B.display = "";
            i.statusShow("selectionDraw");
            return true
        }
        F();
        switch (c) {
            case"out":
                K.state = K.STATE_PENDING;
                b();
                i.statusShow("selectionActive");
                k();
                return true;
            case"in":
                K.state = K.STATE_DRAGGING;
                i.statusShow("selectionDrag");
                break;
            case"border":
                K.state = K.STATE_RESIZING;
                i.statusShow("selectionResize")
        }
        if (s.ctrlKey) {
            f.transform = !f.transform
        }
        if (Y.layerCleared && !f.transform) {
            k()
        } else {
            if (!Y.layerCleared && f.transform) {
                n()
            }
        }
        return true
    };
    this.mousemove = function (s) {
        L = s.shiftKey;
        h = true
    };
    function p() {
        if (!h) {
            return
        }
        switch (K.state) {
            case K.STATE_PENDING:
                K.state = K.STATE_DRAWING;
                B.display = "";
                i.statusShow("selectionDraw");
            case K.STATE_DRAWING:
                d();
                break;
            case K.STATE_SELECTED:
                F();
                break;
            case K.STATE_DRAGGING:
                m();
                break;
            case K.STATE_RESIZING:
                A()
        }
        h = false
    }

    this.mouseup = function (s) {
        if (K.state !== K.STATE_PENDING && Z.x === O && Z.y === C) {
            return true
        }
        h = false;
        L = s.shiftKey;
        if (P) {
            f.transform = !f.transform
        }
        if (K.state === K.STATE_PENDING) {
            K.state = K.STATE_NONE;
            E.events.dispatch(new R.selectionChange(K.state));
            return true
        } else {
            if (!g) {
                K.state = K.STATE_NONE;
                b();
                i.statusShow("selectionActive");
                E.events.dispatch(new R.selectionChange(K.state));
                return true
            }
        }
        Y.x = g.x;
        Y.y = g.y;
        if ("width" in g) {
            Y.width = g.width;
            Y.height = g.height
        }
        K.state = K.STATE_SELECTED;
        E.events.dispatch(new R.selectionChange(K.state, Y.x, Y.y, Y.width, Y.height));
        i.statusShow("selectionAvailable");
        return true
    };
    function M(s) {
        if (Z.buttonDown) {
            return
        }
        Z.buttonDown = true;
        s.preventDefault();
        K.mousedown(s)
    }

    function Q(s) {
        if ("layerX" in s) {
            Z.x = r((this.offsetLeft + s.layerX) / H.canvasScale);
            Z.y = r((this.offsetTop + s.layerY) / H.canvasScale)
        } else {
            if ("offsetX" in s) {
                Z.x = r((this.offsetLeft + s.offsetX) / H.canvasScale);
                Z.y = r((this.offsetTop + s.offsetY) / H.canvasScale)
            }
        }
        L = s.shiftKey;
        h = true
    }

    function G(s) {
        if (!Z.buttonDown) {
            return
        }
        Z.buttonDown = false;
        s.preventDefault();
        K.mouseup(s)
    }

    function b() {
        B.display = "none";
        B.top = "-" + (l + 50) + "px";
        B.left = "-" + (l + 50) + "px";
        B.width = "1px";
        B.height = "1px";
        B.cursor = ""
    }

    function d() {
        var s = o(Z.x, O), AA = o(Z.y, C), t = U(Z.x - O), v = U(Z.y - C);
        if (L) {
            if (t > v) {
                if (AA === Z.y) {
                    AA -= t - v
                }
                v = t
            } else {
                if (s === Z.x) {
                    s -= v - t
                }
                t = v
            }
        }
        var z = t * H.canvasScale - l, u = v * H.canvasScale - l;
        if (z < 1 || u < 1) {
            g = null;
            return
        }
        B.top = (AA * H.canvasScale) + "px";
        B.left = (s * H.canvasScale) + "px";
        B.width = z + "px";
        B.height = u + "px";
        g = {x: s, y: AA, width: t, height: v}
    }

    function m() {
        if (L) {
            S(O, C)
        }
        var s = Y.x + Z.x - O, t = Y.y + Z.y - C;
        if (f.transform) {
            N.clearRect(0, 0, H.width, H.height);
            if (!f.transparent) {
                N.fillRect(s, t, Y.width, Y.height)
            }
            N.drawImage(Y.canvas, s, t, Y.width, Y.height)
        }
        B.top = (t * H.canvasScale) + "px";
        B.left = (s * H.canvasScale) + "px";
        g = {x: s, y: t}
    }

    function A() {
        var u = Z.x - O, t = Z.y - C, AD = Y.x, AC = Y.y, AE = Y.width, z = Y.height;
        switch (a) {
            case"nw":
                AD += u;
                AC += t;
                AE -= u;
                z -= t;
                break;
            case"n":
                AC += t;
                z -= t;
                break;
            case"ne":
                AC += t;
                AE += u;
                z -= t;
                break;
            case"e":
                AE += u;
                break;
            case"se":
                AE += u;
                z += t;
                break;
            case"s":
                z += t;
                break;
            case"sw":
                AD += u;
                AE -= u;
                z += t;
                break;
            case"w":
                AD += u;
                AE -= u;
                break;
            default:
                g = null;
                return
        }
        if (!AE || !z) {
            g = null;
            return
        }
        if (L) {
            var s = Y.width / Y.height, v = AE, AB = z;
            switch (a.charAt(0)) {
                case"n":
                case"s":
                    v = r(z * s);
                    break;
                default:
                    AB = r(AE / s)
            }
            switch (a) {
                case"nw":
                case"sw":
                    AD -= v - AE;
                    AC -= AB - z
            }
            AE = v;
            z = AB
        }
        if (AE < 0) {
            AD += AE;
            AE *= -1
        }
        if (z < 0) {
            AC += z;
            z *= -1
        }
        var AF = AE * H.canvasScale - l, AA = z * H.canvasScale - l;
        if (AF < 1 || AA < 1) {
            g = null;
            return
        }
        if (f.transform) {
            N.clearRect(0, 0, H.width, H.height);
            if (!f.transparent) {
                N.fillRect(AD, AC, AE, z)
            }
            N.drawImage(Y.canvas, AD, AC, AE, z)
        }
        B.top = (AC * H.canvasScale) + "px";
        B.left = (AD * H.canvasScale) + "px";
        B.width = AF + "px";
        B.height = AA + "px";
        g = {x: AD, y: AC, width: AE, height: z}
    }

    function F() {
        var x = f.borderWidth / H.canvasScale, AB = "", u = Y.x + Y.width, z = Y.y + Y.height, t = u - x, s = z - x, v = Y.x, AA = Y.y, y = Y.x + x, w = Y.y + x;
        c = "out";
        if (Z.x < t && Z.y < s && Z.x > y && Z.y > w) {
            AB = "move";
            c = "in"
        } else {
            if (Z.x >= v && Z.x <= u && Z.y >= AA && Z.y <= w) {
                AB = "n"
            } else {
                if (Z.x >= v && Z.x <= u && Z.y >= s && Z.y <= z) {
                    AB = "s"
                }
            }
            if (Z.y >= AA && Z.y <= z && Z.x >= v && Z.x <= y) {
                AB += "w"
            } else {
                if (Z.y >= AA && Z.y <= z && Z.x >= t && Z.x <= u) {
                    AB += "e"
                }
            }
            if (AB !== "") {
                a = AB;
                AB += "-resize";
                c = "border"
            }
        }
        if (AB !== B.cursor) {
            B.cursor = AB
        }
    }

    function D(s) {
        if (K.state !== K.STATE_SELECTED) {
            return
        }
        B.top = (Y.y * s.scale) + "px";
        B.left = (Y.x * s.scale) + "px";
        B.width = (Y.width * s.scale - l) + "px";
        B.height = (Y.height * s.scale - l) + "px"
    }

    function W(s) {
        if (s.group !== "selection" || s.config !== "transparent" || !f.transform || K.state !== K.STATE_SELECTED) {
            return
        }
        if (!Y.layerCleared) {
            n()
        }
        N.clearRect(Y.x, Y.y, Y.width, Y.height);
        if (!s.value) {
            N.fillRect(Y.x, Y.y, Y.width, Y.height)
        }
        N.drawImage(Y.canvas, Y.x, Y.y, Y.width, Y.height)
    }

    function n() {
        var s = Y.x, AC = Y.y, u = Y.width, z = Y.height, AB = Y.x + Y.width, AA = Y.y + Y.height, v = 0, t = 0;
        Y.widthOriginal = u;
        Y.heightOriginal = z;
        if (s < 0) {
            u += s;
            v -= s;
            s = 0
        }
        if (AC < 0) {
            z += AC;
            t -= AC;
            AC = 0
        }
        if (AB > H.width) {
            u = H.width - Y.x
        }
        if (AA > H.height) {
            z = H.height - Y.y
        }
        if (!f.transparent) {
            N.fillRect(s, AC, u, z)
        }
        N.drawImage(e, s, AC, u, z, s, AC, u, z);
        Y.canvas.width = Y.widthOriginal;
        Y.canvas.height = Y.heightOriginal;
        Y.context.drawImage(e, s, AC, u, z, v, t, u, z);
        V.clearRect(s, AC, u, z);
        Y.layerCleared = true;
        E.historyAdd()
    }

    function k() {
        if (!Y.layerCleared) {
            return
        }
        if (!f.transparent) {
            V.fillRect(Y.x, Y.y, Y.width, Y.height)
        }
        V.drawImage(Y.canvas, Y.x, Y.y, Y.width, Y.height);
        N.clearRect(Y.x, Y.y, Y.width, Y.height);
        Y.layerCleared = false;
        Y.canvas.width = 5;
        Y.canvas.height = 5;
        E.historyAdd()
    }

    this.selectionMerge = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        k();
        K.state = K.STATE_NONE;
        b();
        i.statusShow("selectionActive");
        E.events.dispatch(new R.selectionChange(K.state));
        return true
    };
    this.selectAll = function () {
        if (K.state !== K.STATE_NONE && K.state !== K.STATE_SELECTED) {
            return false
        }
        if (K.state === K.STATE_SELECTED) {
            k()
        } else {
            K.state = K.STATE_SELECTED;
            B.display = ""
        }
        Y.x = 0;
        Y.y = 0;
        Y.width = H.width;
        Y.height = H.height;
        B.top = "0px";
        B.left = "0px";
        B.width = (Y.width * H.canvasScale - l) + "px";
        B.height = (Y.height * H.canvasScale - l) + "px";
        F();
        E.events.dispatch(new R.selectionChange(K.state, Y.x, Y.y, Y.width, Y.height));
        return true
    };
    this.selectionCut = function () {
        if (!K.selectionCopy()) {
            return false
        }
        if (Y.layerCleared) {
            N.clearRect(Y.x, Y.y, Y.width, Y.height);
            Y.canvas.width = 5;
            Y.canvas.height = 5;
            Y.layerCleared = false
        } else {
            V.clearRect(Y.x, Y.y, Y.width, Y.height);
            E.historyAdd()
        }
        K.state = K.STATE_NONE;
        b();
        E.events.dispatch(new R.selectionChange(K.state));
        i.statusShow("selectionActive");
        return true
    };
    this.selectionCopy = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        if (!V.getImageData || !V.putImageData) {
            alert(I.errorClipboardUnsupported);
            return false
        }
        if (!Y.layerCleared) {
            var s = Y.width, t = Y.height, v = Y.width + Y.x;
            sumY = Y.height + Y.y;
            if (v > H.width) {
                s = H.width - Y.x
            }
            if (sumY > H.height) {
                t = H.height - Y.y
            }
            try {
                E.clipboard = V.getImageData(Y.x, Y.y, s, t)
            } catch (u) {
                alert(I.failedSelectionCopy);
                return false
            }
        } else {
            try {
                E.clipboard = Y.context.getImageData(0, 0, Y.widthOriginal, Y.heightOriginal)
            } catch (u) {
                alert(I.failedSelectionCopy);
                return false
            }
        }
        E.events.dispatch(new R.clipboardUpdate(E.clipboard));
        return true
    };
    this.clipboardPaste = function () {
        if (!E.clipboard || K.state !== K.STATE_NONE && K.state !== K.STATE_SELECTED) {
            return false
        }
        if (!V.getImageData || !V.putImageData) {
            alert(I.errorClipboardUnsupported);
            return false
        }
        var s = r(i.elems.viewport.scrollLeft / H.canvasScale), v = r(i.elems.viewport.scrollTop / H.canvasScale), t = E.clipboard.width, u = E.clipboard.height;
        Y.canvas.width = t;
        Y.canvas.height = u;
        Y.context.putImageData(E.clipboard, 0, 0);
        if (K.state === K.STATE_SELECTED) {
            N.clearRect(Y.x, Y.y, Y.width, Y.height)
        } else {
            K.state = K.STATE_SELECTED
        }
        if (!f.transparent) {
            N.fillRect(s, v, t, u)
        }
        N.drawImage(Y.canvas, s, v, t, u);
        Y.widthOriginal = Y.width = t;
        Y.heightOriginal = Y.height = u;
        Y.x = s;
        Y.y = v;
        Y.layerCleared = true;
        B.top = (v * H.canvasScale) + "px";
        B.left = (s * H.canvasScale) + "px";
        B.width = (t * H.canvasScale - l) + "px";
        B.height = (u * H.canvasScale - l) + "px";
        B.display = "";
        if (!f.transform) {
            f.transform = true;
            E.events.dispatch(new R.configChange(true, false, "transform", "selection", f))
        }
        F();
        E.events.dispatch(new R.selectionChange(K.state, Y.x, Y.y, Y.width, Y.height));
        i.statusShow("selectionAvailable");
        return true
    };
    this.selectionDelete = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        if (!Y.layerCleared) {
            V.clearRect(Y.x, Y.y, Y.width, Y.height);
            E.historyAdd()
        } else {
            N.clearRect(Y.x, Y.y, Y.width, Y.height);
            Y.layerCleared = false;
            Y.canvas.width = 5;
            Y.canvas.height = 5;
            if (f.transform) {
                f.transform = false;
                E.events.dispatch(new R.configChange(false, true, "transform", "selection", f))
            }
        }
        return true
    };
    this.selectionDrop = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        if (Y.layerCleared) {
            N.clearRect(Y.x, Y.y, Y.width, Y.height);
            Y.canvas.width = 5;
            Y.canvas.height = 5;
            Y.layerCleared = false
        }
        K.state = K.STATE_NONE;
        b();
        i.statusShow("selectionActive");
        E.events.dispatch(new R.selectionChange(K.state));
        return true
    };
    this.selectionFill = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        if (Y.layerCleared) {
            Y.context.fillStyle = N.fillStyle;
            Y.context.fillRect(0, 0, Y.widthOriginal, Y.heightOriginal);
            N.fillRect(Y.x, Y.y, Y.width, Y.height)
        } else {
            V.fillStyle = N.fillStyle;
            V.fillRect(Y.x, Y.y, Y.width, Y.height);
            E.historyAdd()
        }
        return true
    };
    this.selectionCrop = function () {
        if (K.state !== K.STATE_SELECTED) {
            return false
        }
        K.selectionMerge();
        var s = Y.width, t = Y.height, v = Y.x + s, u = Y.y + t;
        if (v > H.width) {
            s -= v - H.width
        }
        if (u > H.height) {
            t -= u - H.height
        }
        E.imageCrop(Y.x, Y.y, s, t);
        return true
    };
    this.keydown = function (s) {
        switch (s.kid_) {
            case f.keys.transformToggle:
                f.transform = !f.transform;
                E.events.dispatch(new R.configChange(f.transform, !f.transform, "transform", "selection", f));
                break;
            case f.keys.selectionCrop:
                return K.selectionCrop(s);
            case f.keys.selectionDelete:
                return K.selectionDelete(s);
            case f.keys.selectionDrop:
                return K.selectionDrop(s);
            case f.keys.selectionFill:
                return K.selectionFill(s);
            default:
                return false
        }
        return true
    }
};
pwlib.appEvent.selectionChange = function (D, B, E, C, A) {
    this.STATE_NONE = 0;
    this.STATE_SELECTED = 2;
    this.state = D;
    this.x = B;
    this.y = E;
    this.width = C;
    this.height = A;
    pwlib.appEvent.call(this, "selectionChange")
};
pwlib.tools.text = function (L) {
    var J = this, O = L.win.clearInterval, X = L.config.text, E = L.buffer.context, Z = L.doc, R = L.gui, T = L.image, a = L.lang, W = Math.round, P = L.mouse, B = L.win.setInterval;
    var N = null;
    var D = L.tool ? L.tool._id : null;
    var V = false;
    var Y = null, S = null, I = null, H = "http://www.w3.org/2000/svg", Q = null, K = null, G = 0, A = 0;
    this.preActivate = function () {
        if (!R.inputs.textString || !R.inputs.text_fontFamily || !R.elems.viewport) {
            return false
        }
        if (E.fillText && E.strokeText) {
            return true
        }
        if (E.mozPathText) {
            return true
        }
        alert(a.errorTextUnsupported);
        return false
    };
    this.activate = function () {
        P.x = Math.round(R.elems.viewport.scrollLeft / T.canvasScale), P.y = Math.round(R.elems.viewport.scrollTop / T.canvasScale), S = R.inputs.text_fontFamily;
        Y = R.inputs.textString;
        if (!E.fillText && pwlib.browser.opera) {
            I = L.events.add("configChange", F);
            Y.addEventListener("input", F, false);
            Y.addEventListener("change", F, false)
        } else {
            I = L.events.add("configChange", C);
            Y.addEventListener("input", C, false);
            Y.addEventListener("change", C, false)
        }
        if (E.fillText && E.strokeText) {
            J.draw = J.draw_spec
        } else {
            if (pwlib.browser.opera) {
                J.draw = J.draw_opera;
                M()
            } else {
                if (E.mozPathText) {
                    J.draw = J.draw_moz;
                    G = E.mozMeasureText(Y.value)
                }
            }
        }
        if (!N) {
            N = B(J.draw, L.config.toolDrawDelay)
        }
        V = true
    };
    this.deactivate = function () {
        if (N) {
            O(N);
            N = null
        }
        V = false;
        if (I) {
            L.events.remove("configChange", I)
        }
        if (!E.fillText && pwlib.browser.opera) {
            Y.removeEventListener("input", F, false);
            Y.removeEventListener("change", F, false)
        } else {
            Y.removeEventListener("input", C, false);
            Y.removeEventListener("change", C, false)
        }
        K = null;
        Q = null;
        E.clearRect(0, 0, T.width, T.height);
        return true
    };
    function M() {
        Q = Z.createElementNS(H, "svg");
        Q.setAttributeNS(H, "version", "1.1");
        K = Z.createElementNS(H, "text");
        K.appendChild(Z.createTextNode(Y.value));
        Q.appendChild(K);
        K.style.font = E.font;
        if (L.config.shapeType !== "stroke") {
            K.style.fill = E.fillStyle
        } else {
            K.style.fill = "none"
        }
        if (L.config.shapeType !== "fill") {
            K.style.stroke = E.strokeStyle;
            K.style.strokeWidth = E.lineWidth
        } else {
            K.style.stroke = "none";
            K.style.strokeWidth = E.lineWidth
        }
        G = K.getComputedTextLength();
        A = K.getBBox().height;
        Q.setAttributeNS(H, "width", G);
        Q.setAttributeNS(H, "height", A + 10);
        K.setAttributeNS(H, "x", 0);
        K.setAttributeNS(H, "y", A)
    }

    function C(c) {
        if (c.type === "input" || c.type === "change" || (!c.group && c.config === "shapeType") || (c.group === "line" && c.config === "lineWidth")) {
            V = true;
            if (!E.fillText && E.mozMeasureText) {
                G = E.mozMeasureText(Y.value)
            }
            return
        }
        if (c.type !== "configChange" && c.group !== "text") {
            return
        }
        var b = "";
        switch (c.config) {
            case"fontFamily":
                if (c.value === "+") {
                    U(c)
                }
            case"bold":
            case"italic":
            case"fontSize":
                if (X.bold) {
                    b += "bold "
                }
                if (X.italic) {
                    b += "italic "
                }
                b += X.fontSize + "px " + X.fontFamily;
                E.font = b;
                if ("mozTextStyle" in E) {
                    E.mozTextStyle = b
                }
            case"textAlign":
            case"textBaseline":
                V = true
        }
        if (c.config !== "textAlign" && c.config !== "textBaseline" && !E.fillText && E.mozMeasureText) {
            G = E.mozMeasureText(Y.value)
        }
    }

    function F(c) {
        if (c.type === "input" || c.type === "change") {
            K.replaceChild(Z.createTextNode(this.value), K.firstChild);
            V = true
        }
        if (!c.group && c.config === "shapeType") {
            if (c.value !== "stroke") {
                K.style.fill = E.fillStyle
            } else {
                K.style.fill = "none"
            }
            if (c.value !== "fill") {
                K.style.stroke = E.strokeStyle;
                K.style.strokeWidth = E.lineWidth
            } else {
                K.style.stroke = "none";
                K.style.strokeWidth = E.lineWidth
            }
            V = true
        }
        if (!c.group && c.config === "fillStyle") {
            if (L.config.shapeType !== "stroke") {
                K.style.fill = c.value;
                V = true
            }
        }
        if ((!c.group && c.config === "strokeStyle") || (c.group === "line" && c.config === "lineWidth")) {
            if (L.config.shapeType !== "fill") {
                K.style.stroke = E.strokeStyle;
                K.style.strokeWidth = E.lineWidth;
                V = true
            }
        }
        if (c.type === "configChange" && c.group === "text") {
            var b = "";
            switch (c.config) {
                case"fontFamily":
                    if (c.value === "+") {
                        U(c)
                    }
                case"bold":
                case"italic":
                case"fontSize":
                    if (X.bold) {
                        b += "bold "
                    }
                    if (X.italic) {
                        b += "italic "
                    }
                    b += X.fontSize + "px " + X.fontFamily;
                    E.font = b;
                    K.style.font = b;
                case"textAlign":
                case"textBaseline":
                    V = true
            }
        }
        G = K.getComputedTextLength();
        A = K.getBBox().height;
        Q.setAttributeNS(H, "width", G);
        Q.setAttributeNS(H, "height", A + 10);
        K.setAttributeNS(H, "x", 0);
        K.setAttributeNS(H, "y", A)
    }

    function U(f) {
        var e = prompt(a.promptTextFont) || "";
        e = e.replace(/^\s+/, "").replace(/\s+$/, "") || f.previousValue;
        var c, d = e.toLowerCase(), g = S.options.length;
        for (var b = 0; b < g; b++) {
            c = S.options[b];
            if (c.value.toLowerCase() == d) {
                X.fontFamily = c.value;
                S.selectedIndex = b;
                S.value = X.fontFamily;
                f.value = X.fontFamily;
                return
            }
        }
        c = Z.createElement("option");
        c.value = e;
        c.appendChild(Z.createTextNode(e));
        S.insertBefore(c, S.options[g - 1]);
        S.selectedIndex = g - 1;
        S.value = e;
        f.value = e;
        X.fontFamily = e
    }

    this.mousemove = function () {
        V = true
    };
    this.draw_spec = function () {
        if (!V) {
            return
        }
        E.clearRect(0, 0, T.width, T.height);
        if (L.config.shapeType != "stroke") {
            E.fillText(Y.value, P.x, P.y)
        }
        if (L.config.shapeType != "fill") {
            E.beginPath();
            E.strokeText(Y.value, P.x, P.y);
            E.closePath()
        }
        V = false
    };
    this.draw_moz = function () {
        if (!V) {
            return
        }
        E.clearRect(0, 0, T.width, T.height);
        var b = P.x, c = P.y;
        if (X.textAlign === "center") {
            b -= W(G / 2)
        } else {
            if (X.textAlign === "right") {
                b -= G
            }
        }
        if (X.textBaseline === "top") {
            c += X.fontSize
        } else {
            if (X.textBaseline === "middle") {
                c += W(X.fontSize / 2)
            }
        }
        E.setTransform(1, 0, 0, 1, b, c);
        E.beginPath();
        E.mozPathText(Y.value);
        if (L.config.shapeType != "stroke") {
            E.fill()
        }
        if (L.config.shapeType != "fill") {
            E.stroke()
        }
        E.closePath();
        E.setTransform(1, 0, 0, 1, 0, 0);
        V = false
    };
    this.draw_opera = function () {
        if (!V) {
            return
        }
        E.clearRect(0, 0, T.width, T.height);
        var b = P.x, c = P.y;
        if (X.textAlign === "center") {
            b -= W(G / 2)
        } else {
            if (X.textAlign === "right") {
                b -= G
            }
        }
        if (X.textBaseline === "bottom") {
            c -= A
        } else {
            if (X.textBaseline === "middle") {
                c -= W(A / 2)
            }
        }
        E.drawImage(Q, b, c);
        V = false
    };
    this.click = function () {
        J.draw();
        L.layerUpdate()
    };
    this.keydown = function (b) {
        if (!D || b.kid_ != "Escape") {
            return false
        }
        P.buttonDown = false;
        L.toolActivate(D, b);
        return true
    }
};
pwlib.extensions.colormixer = function (F) {
    var I = this, E = F.config.colormixer, K = F.doc, B = F.gui, C = F.lang.colormixer, A = Math.floor, D = Math.max, J = Math.min, M = Math.pow, G = Math.round, H = F.resolution.scale;
    this.elems = {controls: null, chartDot: null, slider: null, cpaletteInput: null, cpaletteOutput: null, colorActive: null, colorOld: null};
    this.panel = null;
    this.panelInputs = null;
    this.panelSelector = null;
    this.context2d = false;
    this.targetInput = null;
    this.color = {red: 0, green: 0, blue: 0, alpha: 0, hex: 0, hue: 0, sat: 0, val: 0, cyan: 0, magenta: 0, yellow: 0, black: 0, cie_l: 0, cie_a: 0, cie_b: 0};
    this.inputs = {red: null, green: null, blue: null, alpha: null, hex: null, hue: null, sat: null, val: null, cyan: null, magenta: null, yellow: null, black: null, cie_l: null, cie_a: null, cie_b: null};
    this.abs_max = {};
    var L = [
        [255, 0, 0],
        [255, 255, 0],
        [0, 255, 0],
        [0, 255, 255],
        [0, 0, 255],
        [255, 0, 255],
        [255, 0, 0]
    ];
    this.ckey_active = "red";
    this.ckey_adjoint = false;
    this.ckey_active_group = false;
    this.ckey_grouping = {red: "rgb", green: "rgb", blue: "rgb", hue: "hsv", sat: "hsv", val: "hsv", cyan: "cmyk", magenta: "cmyk", yellow: "cmyk", black: "cmyk", cie_l: "lab", cie_a: "lab", cie_b: "lab"};
    this.sliderX = 0;
    this.sliderWidth = 0;
    this.sliderHeight = 0;
    this.sliderSpacing = 0;
    this.chartWidth = 0;
    this.chartHeight = 0;
    this.extensionRegister = function (a) {
        if (!B.elems || !B.elems.colormixer_canvas || !B.floatingPanels || !B.floatingPanels.colormixer || !B.tabPanels || !B.tabPanels.colormixer_inputs || !B.tabPanels.colormixer_selector || !I.init_lab()) {
            return false
        }
        I.panel = B.floatingPanels.colormixer;
        I.panelSelector = B.tabPanels.colormixer_selector;
        I.panelInputs = B.tabPanels.colormixer_inputs;
        I.context2d = B.elems.colormixer_canvas.getContext("2d");
        if (!I.context2d) {
            return false
        }
        var V, b, Y, N = E.inputValues, R = I.panelInputs.container;
        if (!R) {
            return false
        }
        for (var X in I.inputs) {
            V = R.elements.namedItem("ckey_" + X) || B.inputs["ckey_" + X];
            if (!V) {
                return false
            }
            if (X === "hex" || X === "alpha") {
                b = C.inputs[X]
            } else {
                b = C.inputs[I.ckey_grouping[X] + "_" + X]
            }
            Y = V.parentNode;
            Y.replaceChild(K.createTextNode(b), Y.firstChild);
            V.addEventListener("input", I.ev_input_change, false);
            V.addEventListener("change", I.ev_input_change, false);
            if (X !== "hex") {
                V.setAttribute("step", N[X][2]);
                V.setAttribute("max", G(N[X][1]));
                V.setAttribute("min", G(N[X][0]));
                I.abs_max[X] = N[X][1] - N[X][0]
            }
            V._ckey = X;
            I.inputs[X] = V
        }
        var O = R.ckey;
        if (!O) {
            return false
        }
        for (var X = 0, U = O.length; X < U; X++) {
            V = O[X];
            if (I.ckey_grouping[V.value] === "lab" && !I.context2d.putImageData) {
                V.disabled = true;
                continue
            }
            V.addEventListener("change", I.ev_change_ckey_active, false);
            if (V.value === I.ckey_active) {
                V.checked = true;
                I.update_ckey_active(I.ckey_active, true)
            }
        }
        I.elems.colorActive = B.elems.colormixer_colorActive.firstChild;
        I.elems.colorOld = B.elems.colormixer_colorOld.firstChild;
        I.elems.colorOld.addEventListener("click", I.ev_click_color, false);
        var W, S, Z = ["accept", "cancel", "saveColor", "pickColor"];
        for (var X = 0, U = Z.length; X < U; X++) {
            S = B.elems["colormixer_btn_" + Z[X]];
            if (!S) {
                continue
            }
            W = K.createElement("a");
            W.href = "#";
            W.appendChild(K.createTextNode(C.buttons[Z[X]]));
            W.addEventListener("click", I["ev_click_" + Z[X]], false);
            S.replaceChild(W, S.firstChild)
        }
        var Q, P = ["controls", "chartDot", "slider"];
        for (var X = 0, U = P.length; X < U; X++) {
            Q = P[X];
            V = B.elems["colormixer_" + Q];
            if (!V) {
                return false
            }
            V.addEventListener("mousedown", I.ev_canvas, false);
            V.addEventListener("mousemove", I.ev_canvas, false);
            V.addEventListener("mouseup", I.ev_canvas, false);
            I.elems[Q] = V
        }
        I.elems.cpaletteInput = B.inputs.colormixer_cpaletteInput;
        I.elems.cpaletteInput.addEventListener("change", I.ev_change_cpalette, false);
        var T;
        for (var X in E.colorPalettes) {
            T = E.colorPalettes[X];
            V = K.createElement("option");
            V.value = X;
            if (X === E.paletteDefault) {
                V.selected = true
            }
            V.appendChild(K.createTextNode(C.colorPalettes[X]));
            I.elems.cpaletteInput.appendChild(V)
        }
        I.elems.cpaletteOutput = B.elems.colormixer_cpaletteOutput;
        I.elems.cpaletteOutput.addEventListener("click", I.ev_click_color, false);
        I.cpalette_load(E.paletteDefault);
        F.events.add("canvasSizeChange", I.update_dimensions);
        I.panelSelector.events.add("guiTabActivate", I.ev_tabActivate);
        I.panel.events.add("guiFloatingPanelStateChange", I.ev_panel_stateChange);
        return true
    };
    this.init_lab = function () {
        var Q = E.lab;
        if (!Q) {
            return false
        }
        var S = Q.x_r, V = Q.y_r, Y = Q.x_g, h = Q.y_g, g = Q.x_b, j = Q.y_b, b = Q.ref_x / Q.ref_y, a = 1, Z = (1 - Q.ref_x - Q.ref_y) / Q.ref_y;
        Q.w_x = b;
        Q.w_y = a;
        Q.w_z = Z;
        var R = S / V, k = 1, U = (1 - S - V) / V, W = Y / h, N = 1, c = (1 - Y - h) / h, d = g / j, P = 1, i = (1 - g - j) / j, f = [R, k, U, W, N, c, d, P, i], T = I.calc_m3inv(f), X = I.calc_m1x3([b, a, Z], T);
        f = [X[0] * f[0], X[0] * f[1], X[0] * f[2], X[1] * f[3], X[1] * f[4], X[1] * f[5], X[2] * f[6], X[2] * f[7], X[2] * f[8]];
        Q.m_i = I.calc_m3inv(f);
        Q.m = f;
        var l = I.rgb2xyz([0, 1, 0]), e = I.xyz2lab(l), O = E.inputValues;
        O.cie_a[0] = e[1];
        l = I.rgb2xyz([1, 0, 1]);
        e = I.xyz2lab(l);
        O.cie_a[1] = e[1];
        l = I.rgb2xyz([0, 0, 1]);
        e = I.xyz2lab(l);
        O.cie_b[0] = e[2];
        l = I.rgb2xyz([1, 1, 0]);
        e = I.xyz2lab(l);
        O.cie_b[1] = e[2];
        return true
    };
    this.ev_tabActivate = function (N) {
        if (N.tabId === "mixer" && I.update_canvas_needed) {
            I.update_canvas(null, true)
        }
    };
    this.ev_click_accept = function (P) {
        P.preventDefault();
        var S = I.targetInput.configProperty, Q = I.targetInput.configGroup, O = I.targetInput.configGroupRef, R = O[S], N = "rgba(" + G(I.color.red * 255) + "," + G(I.color.green * 255) + "," + G(I.color.blue * 255) + "," + I.color.alpha + ")";
        I.hide();
        if (R !== N) {
            O[S] = N;
            F.events.dispatch(new pwlib.appEvent.configChange(N, R, S, Q, O))
        }
    };
    this.ev_click_cancel = function (N) {
        N.preventDefault();
        I.hide()
    };
    this.ev_click_saveColor = function (P) {
        P.preventDefault();
        var N = [I.color.red, I.color.green, I.color.blue], O = E.colorPalettes._saved;
        O.colors.push(N);
        I.elems.cpaletteInput.value = "_saved";
        I.cpalette_load("_saved");
        I.panelSelector.tabActivate("cpalettes");
        return true
    };
    this.ev_click_pickColor = function (N) {
        N.preventDefault();
        F.toolActivate("cpicker", N)
    };
    this.ev_change_cpalette = function (N) {
        I.cpalette_load(this.value)
    };
    this.cpalette_load = function (O) {
        if (!O || !(O in E.colorPalettes)) {
            return false
        }
        var N = E.colorPalettes[O];
        if (N.file) {
            pwlib.xhrLoad(PaintWeb.baseFolder + N.file, this.cpalette_loaded);
            return true
        } else {
            if (N.colors) {
                return this.cpalette_show(N.colors)
            } else {
                return false
            }
        }
    };
    this.cpalette_loaded = function (O) {
        if (!O || O.readyState !== 4) {
            return
        }
        if ((O.status !== 304 && O.status !== 200) || !O.responseText) {
            alert(C.failedColorPaletteLoad);
            return
        }
        var N = JSON.parse(O.responseText);
        O = null;
        I.cpalette_show(N)
    };
    this.cpalette_show = function (O) {
        if (!O || !(O instanceof Array)) {
            return false
        }
        var P, R, N, U = K.createDocumentFragment(), Q = this.elems.cpaletteOutput;
        Q.style.display = "none";
        while (Q.hasChildNodes()) {
            Q.removeChild(Q.firstChild)
        }
        for (var S = 0, T = O.length; S < T; S++) {
            P = O[S];
            P[0] = J(1, P[0]);
            P[1] = J(1, P[1]);
            P[2] = J(1, P[2]);
            N = "rgb(" + G(P[0] * 255) + "," + G(P[1] * 255) + "," + G(P[2] * 255) + ")";
            R = K.createElement("a");
            R.href = "#";
            R._color = P;
            R.style.backgroundColor = N;
            R.appendChild(K.createTextNode(N));
            U.appendChild(R)
        }
        Q.appendChild(U);
        Q.style.display = "block";
        O = U = null;
        return true
    };
    this.ev_click_color = function (O) {
        var N = O.target._color;
        if (!N) {
            return
        }
        O.preventDefault();
        I.color.red = N[0];
        I.color.green = N[1];
        I.color.blue = N[2];
        if (typeof (N[3]) !== "undefined") {
            I.color.alpha = N[3]
        }
        I.update_color("rgb")
    };
    this.update_dimensions = function () {
        if (H === F.resolution.scale) {
            return
        }
        H = F.resolution.scale;
        var O = I.context2d.canvas, R = O.width, N = O.height, S = R / H, P = N / H, Q;
        I.sliderWidth = G(R * E.sliderWidth);
        I.sliderHeight = N - 1;
        I.sliderSpacing = G(R * E.sliderSpacing);
        I.sliderX = R - I.sliderWidth - 2;
        I.chartWidth = I.sliderX - I.sliderSpacing;
        I.chartHeight = N;
        Q = I.elems.controls.style;
        Q.width = S + "px";
        Q.height = P + "px";
        Q = I.elems.slider.style;
        Q.width = (I.sliderWidth / H) + "px";
        Q.left = (I.sliderX / H) + "px";
        Q = O.style;
        Q.width = S + "px";
        Q.height = P + "px";
        if (I.panel.state !== I.panel.STATE_HIDDEN) {
            I.update_canvas()
        }
    };
    this.calc_m1x3 = function (O, N) {
        if (!(O instanceof Array) || !(N instanceof Array)) {
            return false
        } else {
            return[O[0] * N[0] + O[1] * N[3] + O[2] * N[6], O[0] * N[1] + O[1] * N[4] + O[2] * N[7], O[0] * N[2] + O[1] * N[5] + O[2] * N[8]]
        }
    };
    this.calc_m3inv = function (N) {
        if (!(N instanceof Array)) {
            return false
        }
        var P = (N[0] * N[4] * N[8] + N[1] * N[5] * N[6] + N[2] * N[3] * N[7]) - (N[2] * N[4] * N[6] + N[5] * N[7] * N[0] + N[8] * N[1] * N[3]);
        if (P === 0) {
            return false
        }
        var O = [N[4] * N[8] - N[5] * N[7], -N[3] * N[8] + N[5] * N[6], N[3] * N[7] - N[4] * N[6], -N[1] * N[8] + N[2] * N[7], N[0] * N[8] - N[2] * N[6], -N[0] * N[7] + N[1] * N[6], N[1] * N[5] - N[2] * N[4], -N[0] * N[5] + N[2] * N[3], N[0] * N[4] - N[1] * N[3]];
        O = [1 / P * O[0], 1 / P * O[3], 1 / P * O[6], 1 / P * O[1], 1 / P * O[4], 1 / P * O[7], 1 / P * O[2], 1 / P * O[5], 1 / P * O[8]];
        return O
    };
    this.ev_change_ckey_active = function () {
        if (this.value && this.value !== I.ckey_active) {
            I.update_ckey_active(this.value)
        }
    };
    this.update_ckey_active = function (O, R) {
        if (!I.inputs[O]) {
            return false
        }
        I.ckey_active = O;
        var Q = [], P = I.ckey_grouping[O];
        for (var N in I.ckey_grouping) {
            if (I.ckey_grouping[N] === P && N !== O) {
                Q.push(N)
            }
        }
        I.ckey_active_group = P;
        I.ckey_adjoint = Q;
        if (!R) {
            if (I.panelSelector.tabId !== "mixer") {
                I.update_canvas_needed = true;
                I.panelSelector.tabActivate("mixer")
            } else {
                I.update_canvas()
            }
            if (I.panelInputs.tabId !== P) {
                I.panelInputs.tabActivate(P)
            }
        }
        return true
    };
    this.show = function (R, O) {
        var Q = I.elems.colorActive.style, P = I.elems.colorOld, N = P.style;
        if (R) {
            if (I.targetInput) {
                I.targetInput.hide()
            }
            I.targetInput = R;
            I.targetInput.show()
        }
        if (O) {
            I.color.red = O.red;
            I.color.green = O.green;
            I.color.blue = O.blue;
            I.color.alpha = O.alpha;
            I.update_color("rgb");
            N.backgroundColor = Q.backgroundColor;
            N.opacity = Q.opacity;
            P._color = [O.red, O.green, O.blue, O.alpha]
        }
        I.panel.show()
    };
    this.hide = function () {
        I.panel.hide();
        I.ev_canvas_mode = false
    };
    this.ev_panel_stateChange = function (N) {
        if (N.state === N.STATE_HIDDEN) {
            if (I.targetInput) {
                I.targetInput.hide();
                I.targetInput = null
            }
            I.ev_canvas_mode = false
        }
    };
    this.ev_input_change = function () {
        if (!this._ckey) {
            return
        }
        if ((this._ckey === "hex" && !/^\#[a-f0-9]{6}$/i.test(this.value))) {
            return
        }
        if (this.getAttribute("type") === "number") {
            var P = parseInt(this.value), O = this.getAttribute("min"), N = this.getAttribute("max");
            if (isNaN(P)) {
                P = O
            }
            if (P < O) {
                P = O
            } else {
                if (P > N) {
                    P = N
                }
            }
            if (P != this.value) {
                this.value = P
            }
        }
        if (this._ckey === "hex") {
            I.color[this._ckey] = this.value
        } else {
            if (I.ckey_grouping[this._ckey] === "lab") {
                I.color[this._ckey] = parseInt(this.value)
            } else {
                I.color[this._ckey] = parseInt(this.value) / E.inputValues[this._ckey][1]
            }
        }
        I.update_color(this._ckey)
    };
    this.update_color = function (N) {
        var O = I.ckey_grouping[N] || N;
        switch (O) {
            case"rgb":
                I.rgb2hsv();
                I.rgb2hex();
                I.rgb2lab();
                I.rgb2cmyk();
                break;
            case"hsv":
                I.hsv2rgb();
                I.rgb2hex();
                I.rgb2lab();
                I.rgb2cmyk();
                break;
            case"hex":
                I.hex2rgb();
                I.rgb2hsv();
                I.rgb2lab();
                I.rgb2cmyk();
                break;
            case"lab":
                I.lab2rgb();
                I.rgb2hsv();
                I.rgb2hex();
                I.rgb2cmyk();
                break;
            case"cmyk":
                I.cmyk2rgb();
                I.rgb2lab();
                I.rgb2hsv();
                I.rgb2hex()
        }
        I.update_preview();
        I.update_inputs();
        if (N !== "alpha") {
            I.update_canvas(N)
        }
    };
    this.update_preview = function () {
        var Q = G(I.color.red * 255), P = G(I.color.green * 255), N = G(I.color.blue * 255), O = I.elems.colorActive.style;
        O.backgroundColor = "rgb(" + Q + "," + P + "," + N + ")";
        O.opacity = I.color.alpha
    };
    this.update_inputs = function () {
        var N;
        for (var O in I.inputs) {
            N = I.inputs[O];
            N._old_value = N.value;
            if (N._ckey === "hex") {
                N.value = I.color[O]
            } else {
                if (I.ckey_grouping[N._ckey] === "lab") {
                    N.value = G(I.color[O])
                } else {
                    N.value = G(I.color[O] * E.inputValues[O][1])
                }
            }
        }
    };
    this.rgb2cmyk = function () {
        var Q = I.color, U, V, S, N, O = Q.red, P = Q.green, T = Q.blue;
        U = 1 - O;
        V = 1 - P;
        S = 1 - T;
        N = J(U, V, S, 1);
        if (N === 1) {
            U = V = S = 0
        } else {
            var R = 1 - N;
            U = (U - N) / R;
            V = (V - N) / R;
            S = (S - N) / R
        }
        Q.cyan = U;
        Q.magenta = V;
        Q.yellow = S;
        Q.black = N
    };
    this.cmyk2rgb = function () {
        var O = I.color, N = 1 - O.black;
        O.red = 1 - O.cyan * N - O.black;
        O.green = 1 - O.magenta * N - O.black;
        O.blue = 1 - O.yellow * N - O.black
    };
    this.rgb2hsv = function () {
        var S, O, N, P = I.color.red, Q = I.color.green, U = I.color.blue, R = J(P, Q, U), T = D(P, Q, U), V = T - R, N = T;
        if (V === 0) {
            S = O = 0
        } else {
            O = V / T;
            if (T === P) {
                S = (Q - U) / V
            } else {
                if (T === Q) {
                    S = (U - P) / V + 2
                } else {
                    if (T === U) {
                        S = (P - Q) / V + 4
                    }
                }
            }
            S /= 6;
            if (S < 0) {
                S += 1
            }
        }
        I.color.hue = S;
        I.color.sat = O;
        I.color.val = N
    };
    this.hsv2rgb = function (Z, W) {
        var R = I.color, P, Q, a, Y, O, N;
        if (W) {
            Y = W[0];
            O = W[1];
            N = W[2]
        } else {
            Y = R.hue, O = R.sat, N = R.val
        }
        if (O === 0) {
            P = Q = a = N
        } else {
            var V = Y * 6;
            var T = A(V);
            var X = N * (1 - O), U = N * (1 - O * (V - T)), S = N * (1 - O * (1 - (V - T)));
            if (T === 0 || T === 6) {
                P = N;
                Q = S;
                a = X
            } else {
                if (T === 1) {
                    P = U;
                    Q = N;
                    a = X
                } else {
                    if (T === 2) {
                        P = X;
                        Q = N;
                        a = S
                    } else {
                        if (T === 3) {
                            P = X;
                            Q = U;
                            a = N
                        } else {
                            if (T === 4) {
                                P = S;
                                Q = X;
                                a = N
                            } else {
                                if (T === 5) {
                                    P = N;
                                    Q = X;
                                    a = U
                                }
                            }
                        }
                    }
                }
            }
        }
        if (!Z) {
            R.red = P;
            R.green = Q;
            R.blue = a
        }
        return[P, Q, a]
    };
    this.rgb2hex = function () {
        var Q = "#", O = ["red", "green", "blue"], P, R, N = I.color;
        for (P = 0; P < 3; P++) {
            R = G(N[O[P]] * 255).toString(16);
            if (R.length === 1) {
                R = "0" + R
            }
            Q += R
        }
        N.hex = Q
    };
    this.hex2rgb = function () {
        var O = ["red", "green", "blue"], P, R, N = I.color, Q = N.hex;
        Q = Q.substr(1);
        if (Q.length !== 6) {
            return
        }
        for (P = 0; P < 3; P++) {
            R = Q.substr(P * 2, 2);
            N[O[P]] = parseInt(R, 16) / 255
        }
    };
    this.rgb2lab = function () {
        var N = I.color, O = I.xyz2lab(I.rgb2xyz([N.red, N.green, N.blue]));
        N.cie_l = O[0];
        N.cie_a = O[1];
        N.cie_b = O[2]
    };
    this.lab2rgb = function () {
        var N = I.color, O = I.xyz2rgb(I.lab2xyz(N.cie_l, N.cie_a, N.cie_b));
        N.red = O[0];
        N.green = O[1];
        N.blue = O[2]
    };
    this.xyz2lab = function (R) {
        var P = E.lab, S = 216 / 24389, Q = 24389 / 27;
        R[0] /= P.w_x;
        R[1] /= P.w_y;
        R[2] /= P.w_z;
        if (R[0] > S) {
            R[0] = M(R[0], 1 / 3)
        } else {
            R[0] = (Q * R[0] + 16) / 116
        }
        if (R[1] > S) {
            R[1] = M(R[1], 1 / 3)
        } else {
            R[1] = (Q * R[1] + 16) / 116
        }
        if (R[2] > S) {
            R[2] = M(R[2], 1 / 3)
        } else {
            R[2] = (Q * R[2] + 16) / 116
        }
        var O = 116 * R[1] - 16, N = 500 * (R[0] - R[1]), T = 200 * (R[1] - R[2]);
        return[O, N, T]
    };
    this.lab2xyz = function (N, T, R) {
        var U = (N + 16) / 116, V = U + T / 500, S = U - R / 200, Q = 6 / 29, O = 1 / 3 * M(29 / 6, 2), W = 16 / 116, P = E.lab;
        if (V > Q) {
            V = M(V, 3)
        } else {
            V = (V - W) / O
        }
        if (U > Q) {
            U = M(U, 3)
        } else {
            U = (U - W) / O
        }
        if (S > Q) {
            S = M(S, 3)
        } else {
            S = (S - W) / O
        }
        V *= P.w_x;
        U *= P.w_y;
        S *= P.w_z;
        return[V, U, S]
    };
    this.xyz2rgb = function (N) {
        var O = I.calc_m1x3(N, E.lab.m_i);
        if (O[0] > 0.0031308) {
            O[0] = 1.055 * M(O[0], 1 / 2.4) - 0.055
        } else {
            O[0] *= 12.9232
        }
        if (O[1] > 0.0031308) {
            O[1] = 1.055 * M(O[1], 1 / 2.4) - 0.055
        } else {
            O[1] *= 12.9232
        }
        if (O[2] > 0.0031308) {
            O[2] = 1.055 * M(O[2], 1 / 2.4) - 0.055
        } else {
            O[2] *= 12.9232
        }
        if (O[0] < 0) {
            O[0] = 0
        } else {
            if (O[0] > 1) {
                O[0] = 1
            }
        }
        if (O[1] < 0) {
            O[1] = 0
        } else {
            if (O[1] > 1) {
                O[1] = 1
            }
        }
        if (O[2] < 0) {
            O[2] = 0
        } else {
            if (O[2] > 1) {
                O[2] = 1
            }
        }
        return O
    };
    this.rgb2xyz = function (N) {
        if (N[0] > 0.04045) {
            N[0] = M((N[0] + 0.055) / 1.055, 2.4)
        } else {
            N[0] /= 12.9232
        }
        if (N[1] > 0.04045) {
            N[1] = M((N[1] + 0.055) / 1.055, 2.4)
        } else {
            N[1] /= 12.9232
        }
        if (N[2] > 0.04045) {
            N[2] = M((N[2] + 0.055) / 1.055, 2.4)
        } else {
            N[2] /= 12.9232
        }
        return I.calc_m1x3(N, E.lab.m)
    };
    this.update_canvas = function (U, P) {
        if (I.panelSelector.tabId !== "mixer" && !P) {
            I.update_canvas_needed = true;
            return true
        }
        I.update_canvas_needed = false;
        var Q = I.elems.slider.style, T = I.elems.chartDot.style, R = I.color, N = I.ckey_active, Y = I.ckey_active_group, S = I.ckey_adjoint, O = I.chartWidth / H, Z = I.chartHeight / H, X, W, V;
        if (U !== S[0] && U !== S[1] && I.ev_canvas_mode !== "chart") {
            if (Y === "lab") {
                V = (R[N] - E.inputValues[N][0]) / I.abs_max[N]
            } else {
                V = R[N]
            }
            if (N !== "hue" && Y !== "lab") {
                V = 1 - V
            }
            Q.top = G(V * Z) + "px"
        }
        if (U !== N) {
            if (Y === "lab") {
                X = (R[S[0]] - E.inputValues[S[0]][0]) / I.abs_max[S[0]];
                W = (R[S[1]] - E.inputValues[S[1]][0]) / I.abs_max[S[1]]
            } else {
                X = R[S[0]];
                W = 1 - R[S[1]]
            }
            T.top = G(W * Z) + "px";
            T.left = G(X * O) + "px"
        }
        if (!I.draw_chart(U) || !I.draw_slider(U)) {
            return false
        } else {
            return true
        }
    };
    this.ev_canvas = function (S) {
        S.preventDefault();
        if (S.type === "mousedown" && !I.ev_canvas_mode) {
            I.ev_canvas_mode = true;
            K.addEventListener("mouseup", I.ev_canvas, false)
        }
        if (!I.ev_canvas_mode) {
            return false
        }
        if (S.type === "mouseup") {
            I.ev_canvas_mode = false;
            K.removeEventListener("mouseup", I.ev_canvas, false)
        }
        var N = I.elems;
        if (S.target === N.controls) {
            var U, T, O = I.context2d.canvas.width, V = I.context2d.canvas.height;
            if (S.layerX || S.layerX === 0) {
                U = S.layerX * H;
                T = S.layerY * H
            } else {
                if (S.offsetX || S.offsetX === 0) {
                    U = S.offsetX * H;
                    T = S.offsetY * H
                }
            }
            if (U >= 0 && U <= I.chartWidth) {
                mode = "chart"
            } else {
                if (U >= I.sliderX && U <= O) {
                    mode = "slider"
                }
            }
        } else {
            if (S.target === N.chartDot) {
                mode = "chart"
            } else {
                if (S.target === N.slider) {
                    mode = "slider"
                }
            }
        }
        if (mode && I.ev_canvas_mode === true) {
            I.ev_canvas_mode = mode
        }
        if (!mode || I.ev_canvas_mode !== mode || S.target !== N.controls) {
            return false
        }
        var P = I.color, R = U / I.chartWidth, Q = T / V;
        if (mode === "slider") {
            if (I.ckey_active === "hue") {
                P[I.ckey_active] = Q
            } else {
                if (I.ckey_active_group === "lab") {
                    P[I.ckey_active] = I.abs_max[I.ckey_active] * Q + E.inputValues[I.ckey_active][0]
                } else {
                    P[I.ckey_active] = 1 - Q
                }
            }
            return I.update_color(I.ckey_active)
        } else {
            if (mode === "chart") {
                if (R > 1) {
                    return false
                }
                if (I.ckey_active_group === "lab") {
                    R = I.abs_max[I.ckey_adjoint[0]] * R + E.inputValues[I.ckey_adjoint[0]][0];
                    Q = I.abs_max[I.ckey_adjoint[1]] * Q + E.inputValues[I.ckey_adjoint[1]][0]
                } else {
                    Q = 1 - Q
                }
                P[I.ckey_adjoint[0]] = R;
                P[I.ckey_adjoint[1]] = Q;
                return I.update_color(I.ckey_active_group)
            }
        }
        return false
    };
    this.draw_chart = function (P) {
        var Q = I.context2d, O, b, S, c;
        if (P === I.ckey_adjoint[0] || P === I.ckey_adjoint[1] || (I.ev_canvas_mode === "chart" && P === I.ckey_active_group)) {
            return true
        }
        var W = I.chartWidth, e = I.chartHeight;
        Q.clearRect(0, 0, W, e);
        if (I.ckey_active === "sat") {
            if (I.color.sat > 0) {
                O = Q.createLinearGradient(0, 0, W, 0);
                for (c = 0; c <= 6; c++) {
                    b = "rgb(" + L[c][0] + ", " + L[c][1] + ", " + L[c][2] + ")";
                    O.addColorStop(c * 1 / 6, b)
                }
                Q.fillStyle = O;
                Q.fillRect(0, 0, W, e);
                O = Q.createLinearGradient(0, 0, 0, e);
                O.addColorStop(0, "rgba(0, 0, 0, 0)");
                O.addColorStop(1, "rgba(0, 0, 0, 1)");
                Q.fillStyle = O;
                Q.fillRect(0, 0, W, e)
            }
            if (I.color.sat < 1) {
                S = 1 - I.color.sat;
                O = Q.createLinearGradient(0, 0, 0, e);
                O.addColorStop(0, "rgba(255, 255, 255, " + S + ")");
                O.addColorStop(1, "rgba(  0,   0,   0, " + S + ")");
                Q.fillStyle = O;
                Q.fillRect(0, 0, W, e)
            }
        } else {
            if (I.ckey_active === "val") {
                if (I.color.val > 0) {
                    O = Q.createLinearGradient(0, 0, W, 0);
                    for (c = 0; c <= 6; c++) {
                        b = "rgb(" + L[c][0] + ", " + L[c][1] + ", " + L[c][2] + ")";
                        O.addColorStop(c * 1 / 6, b)
                    }
                    Q.fillStyle = O;
                    Q.fillRect(0, 0, W, e);
                    O = Q.createLinearGradient(0, 0, 0, e);
                    O.addColorStop(0, "rgba(255, 255, 255, 0)");
                    O.addColorStop(1, "rgba(255, 255, 255, 1)");
                    Q.fillStyle = O;
                    Q.fillRect(0, 0, W, e)
                }
                if (I.color.val < 1) {
                    Q.fillStyle = "rgba(0, 0, 0, " + (1 - I.color.val) + ")";
                    Q.fillRect(0, 0, W, e)
                }
            } else {
                if (I.ckey_active === "hue") {
                    if (I.color.sat === 1 && I.color.val === 1) {
                        b = [I.color.red, I.color.green, I.color.blue]
                    } else {
                        b = I.hsv2rgb(true, [I.color.hue, 1, 1])
                    }
                    for (c = 0; c < 3; c++) {
                        b[c] = G(b[c] * 255)
                    }
                    Q.fillStyle = "rgb(" + b[0] + ", " + b[1] + ", " + b[2] + ")";
                    Q.fillRect(0, 0, W, e);
                    O = Q.createLinearGradient(0, 0, W, 0);
                    O.addColorStop(0, "rgba(255, 255, 255, 1)");
                    O.addColorStop(1, "rgba(255, 255, 255, 0)");
                    Q.fillStyle = O;
                    Q.fillRect(0, 0, W, e);
                    O = Q.createLinearGradient(0, 0, 0, e);
                    O.addColorStop(0, "rgba(0, 0, 0, 0)");
                    O.addColorStop(1, "rgba(0, 0, 0, 1)");
                    Q.fillStyle = O;
                    Q.fillRect(0, 0, W, e)
                } else {
                    if (I.ckey_active_group === "rgb") {
                        var f, d;
                        b = {red: 0, green: 0, blue: 0};
                        b[I.ckey_active] = G(I.color[I.ckey_active] * 255);
                        f = {red: 0, green: 0, blue: 0};
                        f[I.ckey_adjoint[1]] = 255;
                        d = {red: 0, green: 0, blue: 0};
                        d[I.ckey_adjoint[0]] = 255;
                        Q.fillStyle = "rgb(" + b.red + "," + b.green + "," + b.blue + ")";
                        Q.fillRect(0, 0, W, e);
                        var V = Q.globalCompositeOperation;
                        Q.globalCompositeOperation = "lighter";
                        O = Q.createLinearGradient(0, 0, 0, e);
                        O.addColorStop(0, "rgba(" + f.red + "," + f.green + "," + f.blue + ", 1)");
                        O.addColorStop(1, "rgba(" + f.red + "," + f.green + "," + f.blue + ", 0)");
                        Q.fillStyle = O;
                        Q.fillRect(0, 0, W, e);
                        O = Q.createLinearGradient(0, 0, W, 0);
                        O.addColorStop(0, "rgba(" + d.red + "," + d.green + "," + d.blue + ", 0)");
                        O.addColorStop(1, "rgba(" + d.red + "," + d.green + "," + d.blue + ", 1)");
                        Q.fillStyle = O;
                        Q.fillRect(0, 0, W, e);
                        Q.globalCompositeOperation = V
                    } else {
                        if (I.ckey_active_group === "lab") {
                            var g = false;
                            if (Q.createImageData) {
                                g = Q.createImageData(W, e)
                            } else {
                                if (Q.getImageData) {
                                    g = Q.getImageData(0, 0, W, e)
                                } else {
                                    g = {width: W, height: e, data: new Array(W * e * 4)}
                                }
                            }
                            var R = g.data, Y = g.data.length - 1, c = -1, X = 0, a, Z, j = [], N = [], U, T;
                            U = I.ckey_adjoint[0];
                            T = I.ckey_adjoint[1];
                            b = {cie_l: I.color.cie_l, cie_a: I.color.cie_a, cie_b: I.color.cie_b};
                            a = I.abs_max[U] / W;
                            Z = I.abs_max[T] / e;
                            b[U] = E.inputValues[U][0];
                            b[T] = E.inputValues[T][0];
                            while (c < Y) {
                                j = I.lab2xyz(b.cie_l, b.cie_a, b.cie_b);
                                N = I.xyz2rgb(j);
                                R[++c] = G(N[0] * 255);
                                R[++c] = G(N[1] * 255);
                                R[++c] = G(N[2] * 255);
                                R[++c] = 255;
                                X++;
                                b[U] += a;
                                if ((X % W) === 0) {
                                    b[U] = E.inputValues[U][0];
                                    b[T] += Z
                                }
                            }
                            Q.putImageData(g, 0, 0)
                        }
                    }
                }
            }
        }
        return true
    };
    this.draw_slider = function (Q) {
        if (I.ckey_active === Q) {
            return true
        }
        var R = I.context2d, X = I.sliderWidth, c = I.sliderHeight, V = I.sliderX, U = 0, P, a, d;
        P = R.createLinearGradient(V, U, V, c);
        if (I.ckey_active === "hue") {
            for (d = 0; d <= 6; d++) {
                a = "rgb(" + L[d][0] + ", " + L[d][1] + ", " + L[d][2] + ")";
                P.addColorStop(d * 1 / 6, a)
            }
            R.fillStyle = P;
            R.fillRect(V, U, X, c);
            if (I.color.sat < 1) {
                R.fillStyle = "rgba(255, 255, 255, " + (1 - I.color.sat) + ")";
                R.fillRect(V, U, X, c)
            }
            if (I.color.val < 1) {
                R.fillStyle = "rgba(0, 0, 0, " + (1 - I.color.val) + ")";
                R.fillRect(V, U, X, c)
            }
        } else {
            if (I.ckey_active === "sat") {
                if (I.color.sat === 1) {
                    a = [I.color.red, I.color.green, I.color.blue]
                } else {
                    a = I.hsv2rgb(true, [I.color.hue, 1, I.color.val])
                }
                for (d = 0; d < 3; d++) {
                    a[d] = G(a[d] * 255)
                }
                var f = G(I.color.val * 255);
                P.addColorStop(0, "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")");
                P.addColorStop(1, "rgb(" + f + ", " + f + ", " + f + ")");
                R.fillStyle = P;
                R.fillRect(V, U, X, c)
            } else {
                if (I.ckey_active === "val") {
                    if (I.color.val === 1) {
                        a = [I.color.red, I.color.green, I.color.blue]
                    } else {
                        a = I.hsv2rgb(true, [I.color.hue, I.color.sat, 1])
                    }
                    for (d = 0; d < 3; d++) {
                        a[d] = G(a[d] * 255)
                    }
                    P.addColorStop(0, "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")");
                    P.addColorStop(1, "rgb(0, 0, 0)");
                    R.fillStyle = P;
                    R.fillRect(V, U, X, c)
                } else {
                    if (I.ckey_active_group === "rgb") {
                        var T = G(I.color.red * 255), Y = G(I.color.green * 255), N = G(I.color.blue * 255);
                        a = {red: T, green: Y, blue: N};
                        a[I.ckey_active] = 255;
                        var e = {red: T, green: Y, blue: N};
                        e[I.ckey_active] = 0;
                        P.addColorStop(0, "rgb(" + a.red + "," + a.green + "," + a.blue + ")");
                        P.addColorStop(1, "rgb(" + e.red + "," + e.green + "," + e.blue + ")");
                        R.fillStyle = P;
                        R.fillRect(V, U, X, c)
                    } else {
                        if (I.ckey_active_group === "lab") {
                            var g = false;
                            if (R.createImageData) {
                                g = R.createImageData(1, c)
                            } else {
                                if (R.getImageData) {
                                    g = R.getImageData(0, 0, 1, c)
                                } else {
                                    g = {width: 1, height: c, data: new Array(c * 4)}
                                }
                            }
                            var S = g.data, Z = g.data.length - 1, b = I.ckey_active, d = -1, W, h, O;
                            a = {cie_l: I.color.cie_l, cie_a: I.color.cie_a, cie_b: I.color.cie_b};
                            a[b] = E.inputValues[b][0];
                            W = I.abs_max[b] / c;
                            while (d < Z) {
                                h = I.lab2xyz(a.cie_l, a.cie_a, a.cie_b);
                                O = I.xyz2rgb(h);
                                S[++d] = G(O[0] * 255);
                                S[++d] = G(O[1] * 255);
                                S[++d] = G(O[2] * 255);
                                S[++d] = 255;
                                a[b] += W
                            }
                            for (d = 0; d <= X; d++) {
                                R.putImageData(g, V + d, U)
                            }
                        }
                    }
                }
            }
        }
        R.strokeStyle = "#6d6d6d";
        R.strokeRect(V, U, X, c);
        return true
    }
};
pwlib.extensions.mousekeys = function (G) {
    var N = this, D = G.buffer.canvas, E = G.config, B = G.gui.elems.canvasContainer, P = G.doc, C = G.gui, H = G.image, M = Math.ceil, L = G.mouse, K = G.tool || {};
    var F = 1;
    var J = 0.1;
    var A = null;
    var O = null;
    this.extensionRegister = function () {
        J = E.mousekeys.accel;
        A = P.createElement("div");
        if (!A) {
            return false
        }
        O = A.style;
        A.className = C.classPrefix + "mousekeysPointer";
        O.display = "none";
        B.appendChild(A);
        D.addEventListener("mousemove", I, false);
        var T, S, R, U, Q = {};
        for (T in E.mousekeys.actions) {
            S = E.mousekeys.actions[T];
            for (R = 0, U = S.length; R < U; R++) {
                Q[S[R]] = {extension: N._id, action: T}
            }
        }
        pwlib.extend(E.keys, Q);
        return true
    };
    this.extensionUnregister = function () {
        B.removeChild(A);
        D.removeEventListener("mousemove", I, false);
        var Q, R;
        for (Q in E.keys) {
            R = E.keys[Q];
            if (R.extension === N._id) {
                delete E.keys[Q]
            }
        }
    };
    function I(Q) {
        if (!("kobj_" in Q) || !("extension" in Q.kobj_) || Q.kobj_.extension !== N._id) {
            if (O.display === "block") {
                O.display = "none"
            }
        }
    }

    this.keydown = function (Q) {
        F = 1;
        J = E.mousekeys.accel;
        if (O.display === "none") {
            O.display = "block";
            O.top = (L.y * H.canvasScale) + "px";
            O.left = (L.x * H.canvasScale) + "px";
            if (L.buttonDown) {
                A.className += " " + C.classPrefix + "mouseDown"
            } else {
                A.className = A.className.replace(" " + C.classPrefix + "mouseDown", "")
            }
        }
        K = G.tool || {};
        switch (Q.kobj_.action) {
            case"ButtonToggle":
                if (L.buttonDown) {
                    L.buttonDown = false;
                    if ("mouseup" in K) {
                        K.mouseup(Q)
                    }
                    if ("click" in K) {
                        K.click(Q)
                    }
                } else {
                    L.buttonDown = true;
                    if ("mousedown" in K) {
                        K.mousedown(Q)
                    }
                }
                break;
            case"ButtonClick":
                if (!L.buttonDown) {
                    L.buttonDown = true;
                    if ("mousedown" in K) {
                        K.mousedown(Q)
                    }
                }
                break;
            default:
                return false
        }
        if (L.buttonDown) {
            A.className += " " + C.classPrefix + "mouseDown"
        } else {
            A.className = A.className.replace(" " + C.classPrefix + "mouseDown", "")
        }
        return true
    };
    this.keypress = function (R) {
        if (R.shiftKey) {
            F += F * J * 3
        } else {
            F += F * J
        }
        var Q = M(F);
        switch (R.kobj_.action) {
            case"SouthWest":
                L.x -= Q;
                L.y += Q;
                break;
            case"South":
                L.y += Q;
                break;
            case"SouthEast":
                L.x += Q;
                L.y += Q;
                break;
            case"West":
                L.x -= Q;
                break;
            case"East":
                L.x += Q;
                break;
            case"NorthWest":
                L.x -= Q;
                L.y -= Q;
                break;
            case"North":
                L.y -= Q;
                break;
            case"NorthEast":
                L.x += Q;
                L.y -= Q;
                break;
            default:
                return false
        }
        if (L.x < 0) {
            L.x = 0
        } else {
            if (L.x > H.width) {
                L.x = H.width
            }
        }
        if (L.y < 0) {
            L.y = 0
        } else {
            if (L.y > H.height) {
                L.y = H.height
            }
        }
        O.top = (L.y * H.canvasScale) + "px";
        O.left = (L.x * H.canvasScale) + "px";
        if ("mousemove" in K) {
            K.mousemove(R)
        }
        return true
    };
    this.keyup = function (Q) {
        if (Q.kobj_.action == "ButtonClick" && L.buttonDown) {
            L.buttonDown = false;
            if ("mouseup" in K) {
                K.mouseup(Q)
            }
            if ("click" in K) {
                K.click(Q)
            }
            A.className = A.className.replace(" " + C.classPrefix + "mouseDown", "");
            return true
        }
        return false
    }
};
pwlib.gui = function (C) {
    var G = this, B = C.config, H = C.doc, A = C.lang, D = Math.round, I = window.pwlib, F = I.appEvent, E = C.win;
    this.app = C;
    this.idPrefix = "paintweb" + C.UID + "_", this.classPrefix = "paintweb_";
    this.elems = {};
    this.inputs = {};
    this.inputValues = {};
    this.colorInputs = {};
    this.tools = {};
    this.commands = {};
    this.floatingPanels = {zIndex_: 0};
    this.tabPanels = {};
    this.canvasResizer = null;
    this.viewportResizer = null;
    this.toolTabConfig = {bcurve: {lineTab: true, shapeType: true, lineWidth: true, lineWidthLabel: A.inputs.borderWidth, lineCap: true}, ellipse: {lineTab: true, shapeType: true, lineWidth: true, lineWidthLabel: A.inputs.borderWidth}, rectangle: {lineTab: true, shapeType: true, lineWidth: true, lineWidthLabel: A.inputs.borderWidth, lineJoin: true}, polygon: {lineTab: true, shapeType: true, lineWidth: true, lineWidthLabel: A.inputs.borderWidth, lineJoin: true, lineCap: true, miterLimit: true}, eraser: {lineTab: true, lineWidth: true, lineWidthLabel: A.inputs.eraserSize, lineJoin: true, lineCap: true, miterLimit: true}, pencil: {lineTab: true, lineWidth: true, lineWidthLabel: A.inputs.pencilSize, lineJoin: true, lineCap: true, miterLimit: true}, line: {lineTab: true, lineWidth: true, lineWidthLabel: A.inputs.line.lineWidth, lineJoin: true, lineCap: true, miterLimit: true}, text: {lineTab: true, lineTabLabel: A.tabs.main.textBorder, shapeType: true, lineWidth: true, lineWidthLabel: A.inputs.borderWidth}};
    this.init = function (K) {
        var O = B.guiPlaceholder, L = O.style;
        L.display = "none";
        L.height = "1px";
        L.overflow = "hidden";
        L.position = "absolute";
        L.visibility = "hidden";
        O.className += " " + this.classPrefix + "placeholder";
        if (!O.tabIndex || O.tabIndex == -1) {
            O.tabIndex = 1
        }
        if (!this.initImportDoc(K)) {
            C.initError(A.guiMarkupImportFailed);
            return false
        }
        K = null;
        if (!this.initParseMarkup()) {
            C.initError(A.guiMarkupParseFailed);
            return false
        }
        if (!this.initCanvas() || !this.initImageZoom() || !this.initSelectionTool() || !this.initTextTool() || !this.initKeyboardShortcuts()) {
            return false
        }
        var J = this.tabPanels.main;
        if (!J) {
            C.initError(A.noMainTabPanel);
            return false
        }
        if (!C.shadowSupported && "shadow" in J.tabs) {
            J.tabHide("shadow")
        }
        if (!("viewport" in this.elems)) {
            C.initError(A.missingViewport);
            return false
        }
        this.elems.viewport.style.height = B.viewportHeight;
        L.width = B.viewportWidth;
        var M = this.elems.canvasResizer;
        if (!M) {
            C.initError(A.missingCanvasResizer);
            return false
        }
        M.title = A.guiCanvasResizer;
        M.replaceChild(H.createTextNode(M.title), M.firstChild);
        M.addEventListener("mouseover", this.item_mouseover, false);
        M.addEventListener("mouseout", this.item_mouseout, false);
        this.canvasResizer = new I.guiResizer(this, M, this.elems.canvasContainer);
        this.canvasResizer.events.add("guiResizeStart", this.canvasResizeStart);
        this.canvasResizer.events.add("guiResizeEnd", this.canvasResizeEnd);
        var M = this.elems.viewportResizer;
        if (!M) {
            C.initError(A.missingViewportResizer);
            return false
        }
        M.title = A.guiViewportResizer;
        M.replaceChild(H.createTextNode(M.title), M.firstChild);
        M.addEventListener("mouseover", this.item_mouseover, false);
        M.addEventListener("mouseout", this.item_mouseout, false);
        this.viewportResizer = new I.guiResizer(this, M, this.elems.viewport);
        this.viewportResizer.dispatchMouseMove = true;
        this.viewportResizer.events.add("guiResizeMouseMove", this.viewportResizeMouseMove);
        this.viewportResizer.events.add("guiResizeEnd", this.viewportResizeEnd);
        if ("statusMessage" in this.elems) {
            this.elems.statusMessage._prevText = false
        }
        if ("version" in this.elems) {
            this.elems.version.appendChild(H.createTextNode(C.toString()))
        }
        var N = this.elems.imageSize;
        if (N) {
            N.replaceChild(H.createTextNode(C.image.width + "x" + C.image.height), N.firstChild)
        }
        C.events.add("canvasSizeChange", this.canvasSizeChange);
        C.events.add("commandRegister", this.commandRegister);
        C.events.add("commandUnregister", this.commandUnregister);
        C.events.add("configChange", this.configChangeHandler);
        C.events.add("imageSizeChange", this.imageSizeChange);
        C.events.add("imageZoom", this.imageZoom);
        C.events.add("appInit", this.appInit);
        C.events.add("shadowAllow", this.shadowAllow);
        C.events.add("toolActivate", this.toolActivate);
        C.events.add("toolRegister", this.toolRegister);
        C.events.add("toolUnregister", this.toolUnregister);
        if ("historyUndo" in this.commands && "historyRedo" in this.commands) {
            C.events.add("historyUpdate", this.historyUpdate)
        }
        C.commandRegister("about", this.commandAbout);
        return true
    };
    this.initCanvas = function () {
        var O = this.elems.canvasContainer, K = C.layer.canvas, N = C.layer.context, L = K.style, J = C.buffer.canvas;
        if (!O) {
            C.initError(A.missingCanvasContainer);
            return false
        }
        var M = O.style;
        O.className = this.classPrefix + "canvasContainer";
        K.className = this.classPrefix + "layerCanvas";
        J.className = this.classPrefix + "bufferCanvas";
        M.width = L.width;
        M.height = L.height;
        if (!B.checkersBackground || I.browser.olpcxo) {
            M.backgroundImage = "none"
        }
        O.appendChild(K);
        O.appendChild(J);
        if ("selection_transparent" in this.inputs && (!N.putImageData || !N.getImageData)) {
            this.inputs.selection_transparent.disabled = true;
            this.inputs.selection_transparent.checked = true
        }
        return true
    };
    this.initImportDoc = function (R) {
        var N = B.guiPlaceholder, O = C.ELEMENT_NODE, L, Q, J, K, S, P;
        if (typeof R === "string") {
            L = H.createElement("div");
            L.innerHTML = R;
            Q = L.firstChild
        } else {
            Q = R.documentElement
        }
        R = null;
        J = Q.getElementsByTagName("*");
        K = J.length;
        for (var M = 0; M < K; M++) {
            L = J[M];
            if (L.nodeType !== O || !L.tagName) {
                continue
            }
            S = L.tagName.toLowerCase();
            P = S === "input" || S === "select" || S === "textarea";
            if (L.id) {
                L.setAttribute("data-pwId", L.id);
                if (P) {
                    L.id = this.idPrefix + L.id
                } else {
                    L.removeAttribute("id")
                }
            }
            if (S === "label" && L.htmlFor) {
                L.htmlFor = this.idPrefix + L.htmlFor
            }
        }
        K = Q.childNodes.length;
        for (var M = 0; M < K; M++) {
            N.appendChild(H.importNode(Q.childNodes[M], true))
        }
        return true
    };
    this.initParseMarkup = function () {
        var M = B.guiPlaceholder.getElementsByTagName("*"), T = C.ELEMENT_NODE, P, V, U, R, S, L, O, N, K, J;
        for (var Q = 0; Q < M.length; Q++) {
            P = M[Q];
            if (P.nodeType !== T) {
                continue
            }
            V = P.tagName.toLowerCase();
            U = V === "input" || V === "select" || V === "textarea";
            O = P.getAttribute("data-pwCommand");
            if (O && !(O in this.commands)) {
                P.className += " " + this.classPrefix + "command";
                this.commands[O] = P
            }
            R = P.getAttribute("data-pwTool");
            if (R && !(R in this.tools)) {
                P.className += " " + this.classPrefix + "tool";
                this.tools[R] = P
            }
            S = P.getAttribute("data-pwTabPanel");
            if (S) {
                this.tabPanels[S] = new I.guiTabPanel(this, P)
            }
            L = P.getAttribute("data-pwFloatingPanel");
            if (L) {
                this.floatingPanels[L] = new I.guiFloatingPanel(this, P)
            }
            K = P.getAttribute("data-pwConfig");
            if (K) {
                if (U) {
                    this.initConfigInput(P, K)
                } else {
                    this.initConfigIcons(P, K)
                }
            }
            K = P.getAttribute("data-pwConfigToggle");
            if (K) {
                this.initConfigToggle(P, K)
            }
            if (P.getAttribute("data-pwColorInput")) {
                J = new I.guiColorInput(this, P);
                this.colorInputs[J.id] = J
            }
            N = P.getAttribute("data-pwId");
            if (N) {
                P.className += " " + this.classPrefix + N;
                if (U && !K) {
                    this.inputs[N] = P
                } else {
                    if (!U) {
                        this.elems[N] = P
                    }
                }
            }
        }
        return true
    };
    this.initConfigInput = function (S, J) {
        var T = J.replace(".", "_"), N = J.split("."), O = N.pop(), R = N.join("."), Q = B, K = A.inputs, P = S.parentNode;
        for (var M = 0, L = N.length; M < L; M++) {
            Q = Q[N[M]];
            K = K[N[M]]
        }
        S._pwConfigProperty = O;
        S._pwConfigGroup = R;
        S._pwConfigGroupRef = Q;
        S.title = K[O + "Title"] || K[O];
        S.className += " " + this.classPrefix + "cfg_" + T;
        this.inputs[T] = S;
        if (P.tagName.toLowerCase() !== "label") {
            P = P.getElementsByTagName("label")[0]
        }
        if (S.type === "checkbox" || P.htmlFor) {
            P.replaceChild(H.createTextNode(K[O]), P.lastChild)
        } else {
            P.replaceChild(H.createTextNode(K[O]), P.firstChild)
        }
        if (S.type === "checkbox") {
            S.checked = Q[O]
        } else {
            S.value = Q[O]
        }
        S.addEventListener("input", this.configInputChange, false);
        S.addEventListener("change", this.configInputChange, false)
    };
    this.initConfigIcons = function (W, J) {
        var X = J.replace(".", "_"), Q = J.split("."), R = Q.pop(), V = Q.join("."), T = B, K = A.inputs;
        for (var P = 0, M = Q.length; P < M; P++) {
            T = T[Q[P]];
            K = K[Q[P]]
        }
        W._pwConfigProperty = R;
        W._pwConfigGroup = V;
        W._pwConfigGroupRef = T;
        W.title = K[R + "Title"] || K[R];
        W.className += " " + this.classPrefix + "cfg_" + X;
        this.inputs[X] = W;
        var S = W.getElementsByTagName("p")[0];
        S.replaceChild(H.createTextNode(K[R]), S.firstChild);
        var N, O, L, U = " " + this.classPrefix + "configActive";
        nodes = W.getElementsByTagName("*"), elType = C.ELEMENT_NODE;
        for (var P = 0; P < nodes.length; P++) {
            N = nodes[P];
            if (N.nodeType !== elType) {
                continue
            }
            L = N.getAttribute("data-pwConfigValue");
            if (!L) {
                continue
            }
            O = H.createElement("a");
            O.href = "#";
            O.title = K[R + "_" + L];
            O.appendChild(H.createTextNode(O.title));
            N.className += " " + this.classPrefix + R + "_" + L + " " + this.classPrefix + "icon";
            N._pwConfigParent = W;
            if (T[R] == L) {
                N.className += U
            }
            O.addEventListener("click", this.configValueClick, false);
            O.addEventListener("mouseover", this.item_mouseover, false);
            O.addEventListener("mouseout", this.item_mouseout, false);
            N.replaceChild(O, N.firstChild);
            this.inputValues[V + "_" + R + "_" + L] = N
        }
    };
    this.initConfigToggle = function (S, J) {
        var T = J.replace(".", "_"), O = J.split("."), P = O.pop(), R = O.join("."), Q = B, K = A.inputs;
        for (var N = 0, L = O.length; N < L; N++) {
            Q = Q[O[N]];
            K = K[O[N]]
        }
        S._pwConfigProperty = P;
        S._pwConfigGroup = R;
        S._pwConfigGroupRef = Q;
        S.className += " " + this.classPrefix + "cfg_" + T + " " + this.classPrefix + "icon";
        if (Q[P]) {
            S.className += " " + this.classPrefix + "configActive"
        }
        var M = H.createElement("a");
        M.href = "#";
        M.title = K[P + "Title"] || K[P];
        M.appendChild(H.createTextNode(K[P]));
        M.addEventListener("click", this.configToggleClick, false);
        M.addEventListener("mouseover", this.item_mouseover, false);
        M.addEventListener("mouseout", this.item_mouseout, false);
        S.replaceChild(M, S.firstChild);
        this.inputs[T] = S
    };
    this.initImageZoom = function () {
        var J = this.inputs.imageZoom;
        if (!J) {
            return true
        }
        J.value = 100;
        J._old_value = 100;
        J.setAttribute("step", B.imageZoomStep * 100);
        J.setAttribute("max", B.imageZoomMax * 100);
        J.setAttribute("min", B.imageZoomMin * 100);
        var L = function () {
            C.imageZoomTo(parseInt(this.value) / 100)
        };
        J.addEventListener("change", L, false);
        J.addEventListener("input", L, false);
        var K = J.parentNode;
        if (K.tagName.toLowerCase() === "label") {
            K.replaceChild(H.createTextNode(A.imageZoomLabel), K.firstChild)
        }
        var M = this.elems.statusZoom;
        if (!M) {
            return true
        }
        M.title = A.imageZoomTitle;
        return true
    };
    this.initSelectionTool = function () {
        var J = " " + this.classPrefix + "disabled", V = this.commands.selectionCut, K = this.commands.selectionCopy, O = this.commands.clipboardPaste;
        if (O) {
            C.events.add("clipboardUpdate", this.clipboardUpdate);
            O.className += J
        }
        if (V && K) {
            C.events.add("selectionChange", this.selectionChange);
            V.className += J;
            K.className += J
        }
        var T = ["selectionCut", "selectionCopy", "clipboardPaste"], S, Q, P;
        for (var R = 0, N = T.length; R < N; R++) {
            P = T[R];
            Q = this.elems["selTab_" + P];
            if (!Q) {
                continue
            }
            S = H.createElement("a");
            S.title = A.commands[P];
            S.href = "#";
            S.appendChild(H.createTextNode(S.title));
            S.addEventListener("click", this.commandClick, false);
            Q.className += J + " " + this.classPrefix + "command " + this.classPrefix + "cmd_" + P;
            Q.setAttribute("data-pwCommand", P);
            Q.replaceChild(S, Q.firstChild)
        }
        var U = this.commands.selectionCrop, L = this.commands.selectionFill, M = this.commands.selectionDelete;
        U.className += J;
        L.className += J;
        M.className += J;
        return true
    };
    this.initTextTool = function () {
        if ("textString" in this.inputs) {
            this.inputs.textString.value = A.inputs.text.textString_value
        }
        if (!("text_fontFamily" in this.inputs) || !("text" in B) || !("fontFamilies" in B.text)) {
            return true
        }
        var L, J = this.inputs.text_fontFamily;
        for (var K = 0, M = B.text.fontFamilies.length; K < M; K++) {
            L = H.createElement("option");
            L.value = B.text.fontFamilies[K];
            L.appendChild(H.createTextNode(L.value));
            J.appendChild(L);
            if (L.value === B.text.fontFamily) {
                J.selectedIndex = K;
                J.value = L.value
            }
        }
        L = H.createElement("option");
        L.value = "+";
        L.appendChild(H.createTextNode(A.inputs.text.fontFamily_add));
        J.appendChild(L);
        return true
    };
    this.initKeyboardShortcuts = function () {
        var J = null, K = null;
        for (J in B.keys) {
            K = B.keys[J];
            if ("toolActivate" in K && K.toolActivate in A.tools) {
                A.tools[K.toolActivate] += " [ " + J + " ]"
            }
            if ("command" in K && K.command in A.commands) {
                A.commands[K.command] += " [ " + J + " ]"
            }
        }
        return true
    };
    this.appInit = function (M) {
        if (M.state !== PaintWeb.INIT_DONE) {
            return
        }
        if ("hand" in G.tools) {
            C.events.add("canvasSizeChange", G.toolHandStateChange);
            C.events.add("viewportSizeChange", G.toolHandStateChange);
            G.toolHandStateChange(M)
        }
        var N = B.guiPlaceholder, J = N.style;
        J.height = "";
        J.overflow = "";
        J.position = "";
        J.visibility = "";
        var K = E.getComputedStyle(N, null);
        if (K.position === "static") {
            J.position = "relative"
        }
        try {
            N.focus()
        } catch (L) {
        }
        C.events.dispatch(new F.guiShow())
    };
    this.canvasResizeStart = function () {
        this.resizeHandle.style.visibility = "hidden";
        this.timeout_ = setTimeout(function () {
            G.statusShow("guiCanvasResizerActive", true);
            clearTimeout(G.canvasResizer.timeout_);
            delete G.canvasResizer.timeout_
        }, 400)
    };
    this.canvasResizeEnd = function (J) {
        this.resizeHandle.style.visibility = "";
        C.imageCrop(0, 0, D(J.width / C.image.canvasScale), D(J.height / C.image.canvasScale));
        if (this.timeout_) {
            clearTimeout(this.timeout_);
            delete this.timeout_
        } else {
            G.statusShow(-1)
        }
    };
    this.viewportResizeMouseMove = function (J) {
        B.guiPlaceholder.style.width = J.width + "px"
    };
    this.viewportResizeEnd = function (K) {
        G.elems.viewport.style.width = "";
        G.resizeTo(K.width + "px", K.height + "px");
        try {
            B.guiPlaceholder.focus()
        } catch (J) {
        }
    };
    this.item_mouseover = function () {
        if (this.title || this.textConent) {
            G.statusShow(this.title || this.textContent, true)
        }
    };
    this.item_mouseout = function () {
        G.statusShow(-1)
    };
    this.statusShow = function (L, J) {
        var K = this.elems.statusMessage;
        if (L === -1 && K._prevText === false) {
            return false
        }
        if (L === -1) {
            L = K._prevText
        }
        if (L in A.status) {
            L = A.status[L]
        }
        if (!J) {
            K._prevText = L
        }
        if (K.firstChild) {
            K.removeChild(K.firstChild)
        }
        E.status = L;
        if (L) {
            K.appendChild(H.createTextNode(L))
        }
    };
    this.commandAbout = function () {
        G.floatingPanels.about.toggle()
    };
    this.toolClick = function (J) {
        C.toolActivate(this.parentNode.getAttribute("data-pwTool"), J);
        J.preventDefault()
    };
    this.toolActivate = function (U) {
        var R, O = G.tools[U.id], K = G.toolTabConfig[U.id] || {}, T = G.tabPanels.main, L = T.tabs.line, Q = G.inputs.shapeType, S = G.inputs.line_lineWidth, X = G.inputs.line_lineCap, J = G.inputs.line_lineJoin, P = G.inputs.line_miterLimit, W = null;
        O.className += " " + G.classPrefix + "toolActive";
        try {
            O.firstChild.focus()
        } catch (N) {
        }
        if ((U.id + "Active") in A.status) {
            G.statusShow(U.id + "Active")
        }
        if (Q) {
            if (K.shapeType) {
                Q.style.display = ""
            } else {
                Q.style.display = "none"
            }
        }
        if (U.prevId) {
            var M = G.tools[U.prevId], V = G.toolTabConfig[U.prevId] || {};
            M.className = M.className.replace(" " + G.classPrefix + "toolActive", "");
            if (V.lineTab && L) {
                T.tabHide("line");
                L.container.className = L.container.className.replace(" " + G.classPrefix + "main_line_" + U.prevId, " " + G.classPrefix + "main_line")
            }
            if (U.prevId in T.tabs) {
                T.tabHide(U.prevId)
            }
        }
        if (K.lineWidthLabel) {
            W = S.parentNode;
            W.replaceChild(H.createTextNode(K.lineWidthLabel), W.firstChild)
        }
        if (J) {
            if (K.lineJoin) {
                J.style.display = ""
            } else {
                J.style.display = "none"
            }
        }
        if (X) {
            if (K.lineCap) {
                X.style.display = ""
            } else {
                X.style.display = "none"
            }
        }
        if (P) {
            if (K.miterLimit) {
                P.parentNode.parentNode.style.display = ""
            } else {
                P.parentNode.parentNode.style.display = "none"
            }
        }
        if (S) {
            if (K.lineWidth) {
                S.parentNode.parentNode.style.display = ""
            } else {
                S.parentNode.parentNode.style.display = "none"
            }
        }
        if (K.lineTab && "line" in T.tabs) {
            R = L.button.firstChild;
            R.title = K.lineTabLabel || A.tabs.main[U.id];
            R.replaceChild(H.createTextNode(R.title), R.firstChild);
            if (U.id !== "line") {
                L.container.className = L.container.className.replace(" " + G.classPrefix + "main_line", " " + G.classPrefix + "main_line_" + U.id)
            }
            T.tabShow("line")
        }
        if (U.id in T.tabs) {
            T.tabShow(U.id)
        }
    };
    this.toolRegister = function (M) {
        var J = null, L = null, K = null;
        if (M.id in G.tools) {
            L = G.tools[M.id];
            J = L.getAttribute("data-pwTool");
            if (J && J !== M.id) {
                J = null;
                L = null;
                delete G.tools[M.id]
            }
        }
        if (!L) {
            L = H.createElement("li")
        }
        if (!J) {
            L.setAttribute("data-pwTool", M.id)
        }
        L.className += " " + G.classPrefix + "tool_" + M.id;
        K = H.createElement("a");
        K.title = A.tools[M.id];
        K.href = "#";
        K.appendChild(H.createTextNode(K.title));
        if (L.firstChild) {
            L.replaceChild(K, L.firstChild)
        } else {
            L.appendChild(K)
        }
        K.addEventListener("click", G.toolClick, false);
        K.addEventListener("mouseover", G.item_mouseover, false);
        K.addEventListener("mouseout", G.item_mouseout, false);
        if (!(M.id in G.tools)) {
            G.tools[M.id] = L;
            G.elems.tools.appendChild(L)
        }
        if (M.id === "text" && !C.layer.context.fillText && !C.layer.context.mozPathText && L) {
            L.className += " " + G.classPrefix + "disabled";
            K.title = A.tools.textUnsupported;
            K.removeEventListener("click", G.toolClick, false);
            K.addEventListener("click", function (N) {
                N.preventDefault()
            }, false)
        }
    };
    this.toolUnregister = function (J) {
        if (J.id in G.tools) {
            G.elems.tools.removeChild(G.tools[J.id]);
            delete G.tools[J.id]
        } else {
            return
        }
    };
    this.commandClick = function (K) {
        var L = this.parentNode.getAttribute("data-pwCommand");
        if (L && L in C.commands) {
            C.commands[L].call(this, K)
        }
        K.preventDefault();
        try {
            this.focus()
        } catch (J) {
        }
    };
    this.commandRegister = function (L) {
        var K = G.commands[L.id], J = null;
        if (!K) {
            return
        }
        K.className += " " + G.classPrefix + "cmd_" + L.id;
        J = H.createElement("a");
        J.title = A.commands[L.id];
        J.href = "#";
        J.appendChild(H.createTextNode(J.title));
        if (K.firstChild) {
            K.removeChild(K.firstChild)
        }
        K.appendChild(J);
        J.addEventListener("click", G.commandClick, false);
        J.addEventListener("mouseover", G.item_mouseover, false);
        J.addEventListener("mouseout", G.item_mouseout, false)
    };
    this.commandUnregister = function (L) {
        var K = G.commands[L.id], J = null;
        if (!K) {
            return
        }
        K.className = K.className.replace(" " + G.classPrefix + "cmd_" + L.id, "");
        J = K.firstChild;
        J.removeEventListener("click", this.commands[L.id], false);
        J.removeEventListener("mouseover", G.item_mouseover, false);
        J.removeEventListener("mouseout", G.item_mouseout, false);
        K.removeChild(J)
    };
    this.historyUpdate = function (N) {
        var J = G.commands.historyUndo, Q = false, P = G.commands.historyRedo, K = false, M = " " + G.classPrefix + "disabled", O = J.className.indexOf(M) === -1, L = P.className.indexOf(M) === -1;
        if (N.currentPos > 1) {
            Q = true
        }
        if (N.currentPos < N.states) {
            K = true
        }
        if (O !== Q) {
            if (Q) {
                J.className = J.className.replace(M, "")
            } else {
                J.className += M
            }
        }
        if (L !== K) {
            if (K) {
                P.className = P.className.replace(M, "")
            } else {
                P.className += M
            }
        }
    };
    this.imageSizeChange = function (J) {
        var K = G.elems.imageSize;
        if (K) {
            K.replaceChild(H.createTextNode(J.width + "x" + J.height), K.firstChild)
        }
    };
    this.canvasSizeChange = function (L) {
        var N = G.elems.canvasContainer, M = G.canvasResizer, J = " " + G.classPrefix + "disabled", K = M.resizeHandle;
        N.style.width = L.width + "px";
        N.style.height = L.height + "px";
        K.style.top = L.height + "px";
        K.style.left = L.width + "px"
    };
    this.imageZoom = function (K) {
        var J = G.inputs.imageZoom, L = D(K.zoom * 100);
        if (J && J.value != L) {
            J.value = L
        }
    };
    this.configChangeHandler = function (Q) {
        var M = "", R;
        if (Q.group) {
            M = Q.group.replace(".", "_") + "_"
        }
        M += Q.config;
        R = G.inputs[M];
        if (!R && (R = G.colorInputs[M])) {
            var K = Q.value.replace(/\s+/g, "").replace(/^rgba\(/, "").replace(/\)$/, "");
            K = K.split(",");
            R.updateColor({red: K[0] / 255, green: K[1] / 255, blue: K[2] / 255, alpha: K[3]});
            return
        }
        if (!R) {
            return
        }
        var S = R.tagName.toLowerCase(), P = S === "select" || S === "input" || S === "textarea";
        if (P) {
            if (R.type === "checkbox" && R.checked !== Q.value) {
                R.checked = Q.value
            }
            if (R.type !== "checkbox" && R.value !== Q.value) {
                R.value = Q.value
            }
            return
        }
        var N = " " + G.className + "configActive";
        if (R.hasAttribute("data-pwConfigToggle")) {
            var L = R.className.indexOf(N) !== -1;
            if (Q.value && !L) {
                R.className += N
            } else {
                if (!Q.value && L) {
                    R.className = R.className.replace(N, "")
                }
            }
        }
        var N = " " + G.className + "configActive", O = G.inputValues[M + "_" + Q.previousValue], J = G.inputValues[M + "_" + Q.value];
        if (O && O.className.indexOf(N) !== -1) {
            O.className = O.className.replace(N, "")
        }
        if (J && J.className.indexOf(N) === -1) {
            J.className += N
        }
    };
    this.configValueClick = function (P) {
        var S = this.parentNode, Q = S._pwConfigParent, K = S.getAttribute("data-pwConfigValue");
        if (!Q || !Q._pwConfigProperty) {
            return
        }
        P.preventDefault();
        var O = " " + G.classPrefix + "configActive", M = Q._pwConfigGroupRef, R = Q._pwConfigGroup, J = Q._pwConfigProperty, L = M[J], N = G.inputValues[R.replace(".", "_") + "_" + J + "_" + L];
        if (L == K) {
            return
        }
        if (N && N.className.indexOf(O) !== -1) {
            N.className = N.className.replace(O, "")
        }
        M[J] = K;
        if (S.className.indexOf(O) === -1) {
            S.className += O
        }
        C.events.dispatch(new F.configChange(K, L, J, R, M))
    };
    this.configInputChange = function () {
        if (!this._pwConfigProperty) {
            return
        }
        var L = this.type === "checkbox" ? this.checked : this.value, J = this._pwConfigGroupRef, K = this._pwConfigGroup, N = this._pwConfigProperty, M = J[N];
        if (this.getAttribute("type") === "number") {
            L = parseInt(L);
            if (L != this.value) {
                this.value = L
            }
        }
        if (L == M) {
            return
        }
        J[N] = L;
        C.events.dispatch(new F.configChange(L, M, N, K, J))
    };
    this.configToggleClick = function (M) {
        var L = " " + G.classPrefix + "configActive", K = this.parentNode, J = K._pwConfigGroupRef, N = K._pwConfigGroup, P = K._pwConfigProperty, O = K.className.indexOf(L) !== -1;
        M.preventDefault();
        J[P] = !J[P];
        if (J[P] && !O) {
            K.className += L
        } else {
            if (!J[P] && O) {
                K.className = K.className.replace(L, "")
            }
        }
        C.events.dispatch(new F.configChange(J[P], !J[P], P, N, J))
    };
    this.shadowAllow = function (J) {
        if ("shadow" in G.tabPanels.main.tabs) {
            if (J.allowed) {
                G.tabPanels.main.tabShow("shadow")
            } else {
                G.tabPanels.main.tabHide("shadow")
            }
        }
    };
    this.clipboardUpdate = function (N) {
        var K = " " + G.classPrefix + "disabled", M, O, J = [G.commands.clipboardPaste, G.elems.selTab_clipboardPaste];
        for (var L = 0, P = J.length; L < P; L++) {
            M = J[L];
            if (!M) {
                continue
            }
            O = M.className.indexOf(K) === -1;
            if (!N.data && O) {
                M.className += K
            } else {
                if (N.data && !O) {
                    M.className = M.className.replace(K, "")
                }
            }
        }
    };
    this.selectionChange = function (N) {
        var K = " " + G.classPrefix + "disabled", M, O, J = [G.commands.selectionCut, G.commands.selectionCopy, G.elems.selTab_selectionCut, G.elems.selTab_selectionCopy, G.commands.selectionDelete, G.commands.selectionFill, G.commands.selectionCrop];
        for (var L = 0, P = J.length; L < P; L++) {
            M = J[L];
            if (!M) {
                continue
            }
            O = M.className.indexOf(K) === -1;
            if (N.state === N.STATE_NONE && O) {
                M.className += K
            } else {
                if (N.state === N.STATE_SELECTED && !O) {
                    M.className = M.className.replace(K, "")
                }
            }
        }
    };
    this.show = function () {
        var M = B.guiPlaceholder, K = this.classPrefix + "placeholder", J = new RegExp("\\b" + K);
        if (!J.test(M.className)) {
            M.className += " " + K
        }
        try {
            M.focus()
        } catch (L) {
        }
        C.events.dispatch(new F.guiShow())
    };
    this.hide = function () {
        var K = B.guiPlaceholder, J = new RegExp("\\b" + this.classPrefix + "placeholder", "g");
        K.className = K.className.replace(J, "");
        C.events.dispatch(new F.guiHide())
    };
    this.destroy = function () {
        var J = B.guiPlaceholder;
        while (J.hasChildNodes()) {
            J.removeChild(J.firstChild)
        }
    };
    this.resizeTo = function (M, J) {
        if (!M || !J) {
            return
        }
        var K = B.viewportWidth, L = B.viewportHeight;
        B.viewportWidth = M;
        B.viewportHeight = J;
        C.events.dispatch(new F.configChange(M, K, "viewportWidth", "", B));
        C.events.dispatch(new F.configChange(J, L, "viewportHeight", "", B));
        B.guiPlaceholder.style.width = B.viewportWidth;
        this.elems.viewport.style.height = B.viewportHeight;
        C.events.dispatch(new F.viewportSizeChange(M, J))
    };
    this.toolHandStateChange = function (Q) {
        var L = 0, N = 0, O = " " + G.classPrefix + "disabled", K = G.tools.hand, M = G.elems.viewport;
        if (!K) {
            return
        }
        if (Q.type === "canvasSizeChange") {
            L = Q.width;
            N = Q.height
        } else {
            var P = G.elems.canvasContainer.style;
            L = parseInt(P.width);
            N = parseInt(P.height)
        }
        cs = E.getComputedStyle(M, null);
        var J = parseInt(cs.width), T = parseInt(cs.height), R = false, S = K.className.indexOf(O) === -1;
        if (T < N || J < L) {
            R = true
        }
        if (R && !S) {
            K.className = K.className.replace(O, "")
        } else {
            if (!R && S) {
                K.className += O
            }
        }
        if (!R && C.tool && C.tool._id === "hand" && "prevTool" in C.tool) {
            C.toolActivate(C.tool.prevTool, Q)
        }
    }
};
pwlib.guiFloatingPanel = function (Q, N) {
    var G = this, V = pwlib.appEvent, C = N.style, X = Q.app.doc, T = Q.app.config.guiPlaceholder, Y = Q.app.lang, E = Q.floatingPanels, J = Q.app.win, D = 200;
    var P, O;
    var K, L;
    this.STATE_HIDDEN = 0;
    this.STATE_VISIBLE = 1;
    this.STATE_MINIMIZED = 3;
    this.STATE_DRAGGING = 4;
    this.state = -1;
    this.id = null;
    this.container = N;
    this.viewport = null;
    this.events = null;
    this.content = null;
    var H = 0, W = 0, R = null, M = null;

    function S() {
        G.events = new pwlib.appEvents(G);
        G.id = G.container.getAttribute("data-pwFloatingPanel");
        var Z = G.container.getElementsByTagName("h1")[0], d = G.container.getElementsByTagName("div")[0], b = J.getComputedStyle(G.container, null), f = parseInt(b.zIndex);
        C.zIndex = b.zIndex;
        if (f > E.zIndex_) {
            E.zIndex_ = f
        }
        G.container.className += " " + Q.classPrefix + "floatingPanel " + Q.classPrefix + "floatingPanel_" + G.id;
        d.className += " " + Q.classPrefix + "floatingPanel_content";
        G.content = d;
        Z.className += " " + Q.classPrefix + "floatingPanel_title";
        Z.replaceChild(X.createTextNode(Y.floatingPanels[G.id]), Z.firstChild);
        Z.addEventListener("mousedown", A, false);
        if (G.container.getAttribute("data-pwPanelHide") === "true") {
            G.hide()
        } else {
            G.state = G.STATE_VISIBLE
        }
        var a = G.container.parentNode, e = null;
        while (!e && a) {
            if (a.nodeName.toLowerCase() === "html") {
                e = a;
                break
            }
            b = J.getComputedStyle(a, null);
            if (b && (b.overflow === "scroll" || b.overflow === "auto")) {
                e = a
            } else {
                a = a.parentNode
            }
        }
        G.viewport = e;
        M = X.createElement("a");
        M.href = "#";
        M.title = Y.floatingPanelMinimize;
        M.className = Q.classPrefix + "floatingPanel_minimize";
        M.addEventListener("click", B, false);
        M.appendChild(X.createTextNode(M.title));
        G.container.insertBefore(M, d);
        R = X.createElement("a");
        R.href = "#";
        R.title = Y.floatingPanelClose;
        R.className = Q.classPrefix + "floatingPanel_close";
        R.addEventListener("click", U, false);
        R.appendChild(X.createTextNode(R.title));
        G.container.insertBefore(R, d);
        if (G.container.getAttribute("data-pwPanelResizable") === "true") {
            var c = X.createElement("div");
            c.className = Q.classPrefix + "floatingPanel_resizer";
            G.container.appendChild(c);
            G.resizer = new pwlib.guiResizer(Q, c, G.container)
        }
    }

    function B(a) {
        a.preventDefault();
        try {
            this.focus()
        } catch (Z) {
        }
        var b = " " + Q.classPrefix + "floatingPanel_minimized";
        if (G.state === G.STATE_MINIMIZED) {
            G.state = G.STATE_VISIBLE;
            this.title = Y.floatingPanelMinimize;
            this.className = Q.classPrefix + "floatingPanel_minimize";
            this.replaceChild(X.createTextNode(this.title), this.firstChild);
            if (G.container.className.indexOf(b) !== -1) {
                G.container.className = G.container.className.replace(b, "")
            }
        } else {
            if (G.state === G.STATE_VISIBLE) {
                G.state = G.STATE_MINIMIZED;
                this.title = Y.floatingPanelRestore;
                this.className = Q.classPrefix + "floatingPanel_restore";
                this.replaceChild(X.createTextNode(this.title), this.firstChild);
                if (G.container.className.indexOf(b) === -1) {
                    G.container.className += b
                }
            }
        }
        G.events.dispatch(new V.guiFloatingPanelStateChange(G.state));
        G.bringOnTop()
    }

    function U(a) {
        a.preventDefault();
        G.hide();
        try {
            T.focus()
        } catch (Z) {
        }
    }

    function A(a) {
        G.state = G.STATE_DRAGGING;
        P = a.clientX;
        O = a.clientY;
        var Z = J.getComputedStyle(G.container, null);
        K = parseInt(Z.top);
        L = parseInt(Z.left);
        if (G.viewport) {
            H = G.viewport.scrollLeft;
            W = G.viewport.scrollTop
        }
        G.bringOnTop();
        X.addEventListener("mousemove", I, false);
        X.addEventListener("mouseup", F, false);
        G.events.dispatch(new V.guiFloatingPanelStateChange(G.state));
        if (a.preventDefault) {
            a.preventDefault()
        }
    }

    function I(a) {
        var Z = L + a.clientX - P, b = K + a.clientY - O;
        if (G.viewport) {
            if (G.viewport.scrollLeft !== H) {
                Z += G.viewport.scrollLeft - H
            }
            if (G.viewport.scrollTop !== W) {
                b += G.viewport.scrollTop - W
            }
        }
        C.left = Z + "px";
        C.top = b + "px"
    }

    function F(a) {
        if (G.container.className.indexOf(" " + Q.classPrefix + "floatingPanel_minimized") !== -1) {
            G.state = G.STATE_MINIMIZED
        } else {
            G.state = G.STATE_VISIBLE
        }
        X.removeEventListener("mousemove", I, false);
        X.removeEventListener("mouseup", F, false);
        try {
            T.focus()
        } catch (Z) {
        }
        G.events.dispatch(new V.guiFloatingPanelStateChange(G.state))
    }

    this.bringOnTop = function () {
        E.zIndex_ += D;
        C.zIndex = E.zIndex_
    };
    this.hide = function () {
        C.display = "none";
        G.state = G.STATE_HIDDEN;
        G.events.dispatch(new V.guiFloatingPanelStateChange(G.state))
    };
    this.show = function () {
        if (G.state === G.STATE_VISIBLE) {
            return
        }
        C.display = "block";
        G.state = G.STATE_VISIBLE;
        var Z = " " + Q.classPrefix + "floatingPanel_minimized";
        if (G.container.className.indexOf(Z) !== -1) {
            G.container.className = G.container.className.replace(Z, "");
            M.className = Q.classPrefix + "floatingPanel_minimize";
            M.title = Y.floatingPanelMinimize;
            M.replaceChild(X.createTextNode(M.title), M.firstChild)
        }
        G.events.dispatch(new V.guiFloatingPanelStateChange(G.state));
        G.bringOnTop()
    };
    this.toggle = function () {
        if (G.state === G.STATE_VISIBLE || G.state === G.STATE_MINIMIZED) {
            G.hide()
        } else {
            G.show()
        }
    };
    S()
};
pwlib.appEvent.guiFloatingPanelStateChange = function (A) {
    this.STATE_HIDDEN = 0;
    this.STATE_VISIBLE = 1;
    this.STATE_MINIMIZED = 3;
    this.STATE_DRAGGING = 4;
    this.state = A;
    pwlib.appEvent.call(this, "guiFloatingPanelStateChange")
};
pwlib.guiResizer = function (P, K, L) {
    var G = this, C = L.style, S = P.app.doc, E = pwlib.appEvent.guiResizeEnd, B = pwlib.appEvent.guiResizeMouseMove, M = pwlib.appEvent.guiResizeStart, J = P.app.win;
    this.events = null;
    this.resizeHandle = K;
    this.container = L;
    this.viewport = null;
    this.dispatchMouseMove = false;
    this.resizing = false;
    var O = 0, N = 0;
    var T = 0, D = 0;
    var H = 0, R = 0;

    function Q() {
        G.events = new pwlib.appEvents(G);
        K.addEventListener("mousedown", A, false);
        var V, U = G.container.parentNode, W = null;
        while (!W && U) {
            if (U.nodeName.toLowerCase() === "html") {
                W = U;
                break
            }
            V = J.getComputedStyle(U, null);
            if (V && (V.overflow === "scroll" || V.overflow === "auto")) {
                W = U
            } else {
                U = U.parentNode
            }
        }
        G.viewport = W
    }

    function A(W) {
        O = W.clientX;
        N = W.clientY;
        var U = J.getComputedStyle(G.container, null);
        T = parseInt(U.width);
        D = parseInt(U.height);
        var V = G.events.dispatch(new M(O, N, T, D));
        if (V) {
            return
        }
        if (G.viewport) {
            H = G.viewport.scrollLeft;
            R = G.viewport.scrollTop
        }
        G.resizing = true;
        S.addEventListener("mousemove", I, false);
        S.addEventListener("mouseup", F, false);
        if (W.preventDefault) {
            W.preventDefault()
        }
        if (W.stopPropagation) {
            W.stopPropagation()
        }
    }

    function I(W) {
        var U = T + W.clientX - O, V = D + W.clientY - N;
        if (G.viewport) {
            if (G.viewport.scrollLeft !== H) {
                U += G.viewport.scrollLeft - H
            }
            if (G.viewport.scrollTop !== R) {
                V += G.viewport.scrollTop - R
            }
        }
        C.width = U + "px";
        C.height = V + "px";
        if (G.dispatchMouseMove) {
            G.events.dispatch(new B(W.clientX, W.clientY, U, V))
        }
    }

    function F(V) {
        var U = G.events.dispatch(new E(V.clientX, V.clientY, parseInt(C.width), parseInt(C.height)));
        if (U) {
            return
        }
        G.resizing = false;
        S.removeEventListener("mousemove", I, false);
        S.removeEventListener("mouseup", F, false)
    }

    Q()
};
pwlib.appEvent.guiResizeStart = function (B, D, C, A) {
    this.x = B;
    this.y = D;
    this.width = C;
    this.height = A;
    pwlib.appEvent.call(this, "guiResizeStart", true)
};
pwlib.appEvent.guiResizeEnd = function (B, D, C, A) {
    this.x = B;
    this.y = D;
    this.width = C;
    this.height = A;
    pwlib.appEvent.call(this, "guiResizeEnd", true)
};
pwlib.appEvent.guiResizeMouseMove = function (B, D, C, A) {
    this.x = B;
    this.y = D;
    this.width = C;
    this.height = A;
    pwlib.appEvent.call(this, "guiResizeMouseMove")
};
pwlib.guiTabPanel = function (B, A) {
    var E = this, D = pwlib.appEvent, G = B.app.doc, C = B.app.lang;
    this.events = null;
    this.id = null;
    this.tabs = {};
    this.tabButtons = null;
    this.container = A;
    this.tabId = null;
    var H = null;

    function I() {
        E.events = new pwlib.appEvents(E);
        E.id = E.container.getAttribute("data-pwTabPanel");
        E.container.className += " " + B.classPrefix + "tabPanel " + B.classPrefix + "tabPanel_" + E.id;
        var L = G.createElement("ul"), P = null, O = E.container.getAttribute("data-pwTabDefault") || null, R = E.container.childNodes, Q = B.app.ELEMENT_NODE, K = null, J = null, N = null;
        L.className = B.classPrefix + "tabsList";
        for (var M = 0; K = R[M]; M++) {
            if (K.nodeType !== Q) {
                continue
            }
            J = K.getAttribute("data-pwTab");
            if (!J) {
                continue
            }
            K.className += " " + B.classPrefix + "tab " + B.classPrefix + E.id + "_" + J;
            P = G.createElement("li");
            P._pwTab = J;
            N = G.createElement("a");
            N.href = "#";
            N.addEventListener("click", F, false);
            if (E.id in C.tabs) {
                N.title = C.tabs[E.id][J + "Title"] || C.tabs[E.id][J];
                N.appendChild(G.createTextNode(C.tabs[E.id][J]))
            }
            if ((O && J === O) || (!O && !E.tabId)) {
                E.tabId = J;
                P.className = B.classPrefix + "tabActive"
            } else {
                H = J;
                K.style.display = "none"
            }
            if (K.getAttribute("data-pwTabHide") === "true") {
                P.style.display = "none"
            }
            E.tabs[J] = {container: K, button: P};
            P.appendChild(N);
            L.appendChild(P)
        }
        E.tabButtons = L;
        E.container.appendChild(L)
    }

    function F(J) {
        J.preventDefault();
        E.tabActivate(this.parentNode._pwTab)
    }

    this.tabActivate = function (J) {
        if (!J || !(J in this.tabs)) {
            return false
        } else {
            if (J === this.tabId) {
                return true
            }
        }
        var N = new D.guiTabActivate(J, this.tabId), M = this.events.dispatch(N), L = null, O = null;
        if (M) {
            return false
        }
        if (this.tabId in this.tabs) {
            L = this.tabs[this.tabId].container;
            L.style.display = "none";
            O = this.tabs[this.tabId].button;
            O.className = "";
            H = this.tabId
        }
        L = this.tabs[J].container;
        L.style.display = "";
        O = this.tabs[J].button;
        O.className = B.classPrefix + "tabActive";
        O.style.display = "";
        this.tabId = J;
        try {
            O.firstChild.focus()
        } catch (K) {
        }
        return true
    };
    this.tabHide = function (J) {
        if (!(J in this.tabs)) {
            return false
        }
        if (this.tabId === J) {
            this.tabActivate(H)
        }
        this.tabs[J].button.style.display = "none";
        return true
    };
    this.tabShow = function (J) {
        if (!(J in this.tabs)) {
            return false
        }
        this.tabs[J].button.style.display = "";
        return true
    };
    I()
};
pwlib.appEvent.guiTabActivate = function (A, B) {
    this.tabId = A;
    this.prevTabId = B;
    pwlib.appEvent.call(this, "guiTabActivate", true)
};
pwlib.guiColorInput = function (A, J) {
    var I = this, G = null, C = A.app.config, K = A.app.doc, F = Math.round, B = A.app.lang;
    this.id = null;
    this.input = J;
    this.configProperty = null;
    this.configGroup = null;
    this.configGroupRef = null;
    this.color = {red: 0, green: 0, blue: 0, alpha: 0};
    function L() {
        var M = I.input.getAttribute("data-pwColorInput"), X = M.replace(".", "_"), S = M.split("."), T = S.pop(), W = S.join("."), U = C, N = B.inputs, V = I.input.parentNode, R = K.createElement("a"), P;
        for (var Q = 0, O = S.length; Q < O; Q++) {
            U = U[S[Q]];
            N = N[S[Q]]
        }
        I.configProperty = T;
        I.configGroup = W;
        I.configGroupRef = U;
        I.id = X;
        I.input.className += " " + A.classPrefix + "colorInput " + A.classPrefix + I.id;
        V.replaceChild(K.createTextNode(N[T]), V.firstChild);
        P = I.configGroupRef[I.configProperty];
        P = P.replace(/\s+/g, "").replace(/^rgba\(/, "").replace(/\)$/, "");
        P = P.split(",");
        I.color.red = P[0] / 255;
        I.color.green = P[1] / 255;
        I.color.blue = P[2] / 255;
        I.color.alpha = P[3];
        R.style.backgroundColor = "rgb(" + P[0] + "," + P[1] + "," + P[2] + ")";
        R.style.opacity = P[3];
        R.href = "#";
        R.title = N[T + "Title"] || N[T];
        R.appendChild(K.createTextNode(B.inputs.colorInputAnchorContent));
        R.addEventListener("click", D, false);
        I.input.replaceChild(R, I.input.firstChild)
    }

    function D(M) {
        M.preventDefault();
        if (!G) {
            G = A.app.extensions.colormixer
        }
        if (!G.targetInput || G.targetInput.id !== I.id) {
            G.show({id: I.id, configProperty: I.configProperty, configGroup: I.configGroup, configGroupRef: I.configGroupRef, show: H, hide: E}, I.color)
        } else {
            G.hide()
        }
    }

    function H() {
        var M = " " + A.classPrefix + "colorInputActive", N = I.input.className.indexOf(M) !== -1;
        if (!N) {
            I.input.className += M
        }
    }

    function E() {
        var M = " " + A.classPrefix + "colorInputActive", N = I.input.className.indexOf(M) !== -1;
        if (N) {
            I.input.className = I.input.className.replace(M, "")
        }
    }

    this.updateColor = function (M) {
        var N = I.input.firstChild.style;
        N.opacity = M.alpha;
        N.backgroundColor = "rgb(" + F(M.red * 255) + "," + F(M.green * 255) + "," + F(M.blue * 255) + ")";
        I.color.red = M.red;
        I.color.green = M.green;
        I.color.blue = M.blue;
        I.color.alpha = M.alpha
    };
    L()
};
pwlib.fileCache["interfaces/default/layout.xhtml"] = '<div xmlns="http://www.w3.org/1999/xhtml">  <h1 class="paintweb_appTitle">PaintWeb</h1>  <div data-pwTabPanel="main" data-pwTabDefault="main">  <div data-pwTab="main">  <ul id="tools">  <li data-pwCommand="historyUndo">Undo</li>  <li data-pwCommand="historyRedo">Redo</li>  <li class="paintweb_toolSeparator">&#160;</li>  <li data-pwCommand="imageClear">Clear image</li>  <li data-pwCommand="imageSave">Save image</li>  <li data-pwTool="insertimg">Insert image</li>  <li class="paintweb_toolSeparator">&#160;</li>  <li data-pwCommand="selectionCut">Cut selection</li>  <li data-pwCommand="selectionCopy">Copy selection</li>  <li data-pwCommand="clipboardPaste">Clipboard paste</li>  <li class="paintweb_toolSeparator">&#160;</li>  <li data-pwTool="cpicker">Color picker</li>  <li data-pwTool="cbucket">Color bucket</li>  <li class="paintweb_toolsWrap">&#160;</li>  <li data-pwTool="selection">Selection</li>  <li data-pwTool="hand">Hand</li>  <li class="paintweb_toolSeparator">&#160;</li>  <li data-pwTool="rectangle">Rectangle</li>  <li data-pwTool="ellipse">Ellipse</li>  <li data-pwTool="polygon">Polygon</li>  <li data-pwTool="line">Line</li>  <li data-pwTool="bcurve">B\u00e9zier curve</li>  <li data-pwTool="text">Text</li>  <li data-pwTool="pencil">Pencil</li>  <li class="paintweb_toolSeparator">&#160;</li>  <li data-pwTool="eraser">Eraser</li>  <li class="paintweb_toolSeparator">&#160;</li>  </ul>  <div class="paintweb_strokeFillStyles">  <p class="paintweb_opt_fillStyle">Fill <span   data-pwColorInput="fillStyle">&#160;</span>  </p>  <p class="paintweb_opt_strokeStyle">Stroke <span   data-pwColorInput="strokeStyle">&#160;</span>  </p>  </div>  </div>  <div data-pwTab="line" data-pwTabHide="true">  <p class="paintweb_opt_lineWidth"><label>Line width <input   data-pwConfig="line.lineWidth" type="number" min="1" value="1"   /></label></p>  <p class="paintweb_opt_miterLimit"><label>Miter limit <input    data-pwConfig="line.miterLimit" type="number" min="1" value="10"   /></label></p>  <div data-pwConfig="line.lineCap">  <p>Line cap</p>  <div data-pwConfigValue="butt">Butt</div>  <div data-pwConfigValue="square">Square</div>  <div data-pwConfigValue="round">Round</div>  </div>  <div data-pwConfig="line.lineJoin">  <p>Line join</p>  <div data-pwConfigValue="miter">Miter</div>  <div data-pwConfigValue="round">Round</div>  <div data-pwConfigValue="bevel">Bevel</div>  </div>  <div data-pwConfig="shapeType">  <p>Shape type</p>  <div data-pwConfigValue="both">Both</div>  <div data-pwConfigValue="fill">Fill</div>  <div data-pwConfigValue="stroke">Stroke</div>  </div>  </div>  <div data-pwTab="selection" data-pwTabHide="true">  <p data-pwId="selTab_selectionCut">Cut selection</p>  <p data-pwId="selTab_selectionCopy">Copy selection</p>  <p data-pwId="selTab_clipboardPaste">Clipboard paste</p>  <p data-pwCommand="selectionCrop">Crop selection</p>  <p data-pwCommand="selectionDelete">Delete selection</p>  <p data-pwCommand="selectionFill">Fill selection</p>  <p class="paintweb_opt_selectionTransparent">  <label><input data-pwConfig="selection.transparent" type="checkbox"   value="1" checked="checked" /> Transparent background</label>  </p>  <p class="paintweb_opt_selectionTransform">  <label><input data-pwConfig="selection.transform" type="checkbox"   value="1" /> Transformation mode</label>  </p>  </div>  <div data-pwTab="text" data-pwTabHide="true">  <p class="paintweb_opt_fontFamily">  <label for="fontFamily">Font family:</label>  <select id="fontFamily" data-pwConfig="text.fontFamily"></select>  </p>  <p class="paintweb_opt_fontSize">  <label for="fontSize">Font size:</label>  <input id="fontSize" data-pwConfig="text.fontSize" type="number" min="6"   value="12" />  </p>  <div data-pwConfigToggle="text.bold">Bold</div>  <div data-pwConfigToggle="text.italic">Italic</div>  <div data-pwConfig="text.textAlign">  <p>Text alignment</p>  <div data-pwConfigValue="left">Left</div>  <div data-pwConfigValue="center">Center</div>  <div data-pwConfigValue="right">Right</div>  </div>  <p class="paintweb_opt_textString">  <label>String <textarea id="textString" rows="2" cols="4">Hello   world!</textarea></label>  </p>  </div>  <div data-pwTab="shadow">  <p class="paintweb_opt_shadowEnable"><label><input   data-pwConfig="shadow.enable" type="checkbox" value="1" /> Draw   shadows</label></p>  <p class="paintweb_opt_shadowColor">Color <span   data-pwColorInput="shadow.shadowColor">&#160;</span>  </p>  <p class="paintweb_opt_shadowOffsetX">  <label>Offset X  <input data-pwConfig="shadow.shadowOffsetX" type="number" value="5" />  </label>  </p>  <p class="paintweb_opt_shadowOffsetY">  <label>Offset Y  <input data-pwConfig="shadow.shadowOffsetY" type="number" value="5" />  </label>  </p>  <p class="paintweb_opt_shadowBlur">  <label>Blur  <input data-pwConfig="shadow.shadowBlur" type="number" value="5"   min="0" />  </label>  </p>  </div>  <p data-pwCommand="about">About</p>  </div>   <div id="viewport">  <div id="canvasContainer">  </div>  <div id="canvasResizer">Resize the image Canvas.</div>  </div>   <div class="paintweb_statusbar">  <p id="imageSize">WxH</p>  <p id="statusZoom" title="Zoom image">  <label>Zoom: <input id="imageZoom" type="number" min="20" max="400"   value="100" step="10" /></label>  </p>  <p id="statusMessage">Status</p>  <p id="viewportResizer">Resize the image viewport.</p>  </div>   <div data-pwFloatingPanel="colormixer" data-pwPanelHide="true">  <h1>Color mixer</h1>  <div>  <ol class="paintweb_colormixer_preview">  <li id="colormixer_colorActive"><span>&#160;</span> Active</li>  <li id="colormixer_colorOld"><span>&#160;</span> Old</li>  </ol>  <ol class="paintweb_colormixer_actions">  <li id="colormixer_btn_accept">Close</li>  <li id="colormixer_btn_cancel">Cancel</li>  <li id="colormixer_btn_saveColor">Save color</li>  <li id="colormixer_btn_pickColor">Pick color</li>  </ol>  <div data-pwTabPanel="colormixer_selector" data-pwTabDefault="mixer">  <div data-pwTab="mixer">  <canvas id="colormixer_canvas" width="200" height="195">Your browser   does not support Canvas.</canvas>  <div id="colormixer_controls">  <span id="colormixer_chartDot"></span>  <span id="colormixer_slider"></span>  </div>  </div>  <div data-pwTab="cpalettes">  <select id="colormixer_cpaletteInput"></select>  <div id="colormixer_cpaletteOutput"></div>  </div>  </div>  <ol class="paintweb_colormixer_hexalpha">  <li><label>HEX  <input id="ckey_hex" value="#RRGGBB" type="text" maxlength="7"   pattern="#[a-f0-9]{6}" /></label>  </li>  <li><label>Alpha  <input id="ckey_alpha" value="100" type="number" min="0" max="100"   step="1" /></label>  </li>  </ol>  <form data-pwTabPanel="colormixer_inputs" data-pwTabDefault="rgb">  <ol data-pwTab="rgb">  <li>  <input name="ckey" value="red" type="radio" />  <label>Red  <input name="ckey_red" value="0" type="number" min="0" max="255"   step="1" /></label>  </li>  <li>  <input name="ckey" value="green" type="radio" />  <label>Green  <input name="ckey_green" value="0" type="number" min="0" max="255"   step="1" /></label>  </li>  <li>  <input name="ckey" value="blue" type="radio" />  <label>Blue  <input name="ckey_blue" value="0" type="number" min="0" max="255"   step="1" /></label>  </li>  </ol>  <ol data-pwTab="hsv">  <li>  <input name="ckey" value="hue" type="radio" />  <label>Hue  <input name="ckey_hue" value="0" type="number" min="0" max="360"   step="1" /></label>  </li>  <li>  <input name="ckey" value="sat" type="radio" />  <label>Saturation  <input name="ckey_sat" value="0" type="number" min="0" max="255"   step="1" /></label>  </li>  <li>  <input name="ckey" value="val" type="radio" />  <label>Value  <input name="ckey_val" value="0" type="number" min="0" max="255"   step="1" /></label>  </li>  </ol>  <ol data-pwTab="lab">  <li>  <input name="ckey" value="cie_l" type="radio" />  <label>Lightness  <input name="ckey_cie_l" value="0" type="number" min="0"      max="100" step="1" /></label>  </li>  <li>  <input name="ckey" value="cie_a" type="radio" />  <label>a*  <input name="ckey_cie_a" value="0" type="number" min="-85"    max="94" step="1" /></label>  </li>  <li>  <input name="ckey" value="cie_b" type="radio" />  <label>b*  <input name="ckey_cie_b" value="0" type="number" min="-109"   max="95" step="1" /></label>  </li>  </ol>  <ol data-pwTab="cmyk">  <li>  <label>Cyan  <input name="ckey_cyan" value="0" type="number" min="0" max="100"   step="1" /></label>  </li>  <li>  <label>Magenta  <input name="ckey_magenta" value="0" type="number" min="0"   max="100" step="1" /></label>  </li>  <li>  <label>Yellow  <input name="ckey_yellow" value="0" type="number" min="0" max="100"   step="1" /></label>  </li>  <li>  <label>Key (Black)  <input name="ckey_black" value="0" type="number" min="0" max="100"   step="1" /></label>  </li>  </ol>  </form>   </div>   </div>   <div data-pwFloatingPanel="about" data-pwPanelHide="true">  <h1>About</h1>  <div>  <ul>  <li id="version"><strong>Version:</strong> </li>  <li><strong>Authors:</strong> <a href="http://www.robodesign.ro">Marius   and Mihai \u015eucan (ROBO Design)</a></li>  <li><strong>Project site:</strong> <a   href="http://code.google.com/p/paintweb">code.google.com/p/paintweb</a></li>  <li><strong>Code license:</strong> <a   href="http://www.gnu.org/licenses/gpl-3.0.html" title="GNU General   Public License, version 3">GPLv3</a></li>  </ul>  <p>For user and developer documentation please check out the <a   href="http://code.google.com/p/paintweb">project site</a>.</p>  </div>  </div>  </div>';
function PaintWeb(win, doc) {
    var _self = this;
    if (!win) {
        win = window
    }
    if (!doc) {
        doc = document
    }
    this.version = 0.9;
    this.build = 20100626;
    this.config = {showErrors: true};
    this.lang = {noComputedStyle: "Error: window.getComputedStyle is not available.", noXMLHttpRequest: "Error: window.XMLHttpRequest is not available.", noCanvasSupport: "Error: Your browser does not support Canvas.", guiPlaceholderWrong: "Error: The config.guiPlaceholder property must reference a DOM element!", initHandlerMustBeFunction: "The first argument must be a function.", noConfigFile: "Error: You must point to a configuration file by setting the config.configFile property!", failedConfigLoad: "Error: Failed loading the configuration file.", failedLangLoad: "Error: Failed loading the language file."};
    this.buffer = {canvas: null, context: null};
    this.layer = {id: null, canvas: null, context: null};
    this.tool = null;
    this.elems = {};
    this.mouse = {x: 0, y: 0, buttonDown: false};
    this.extensions = {};
    this.commands = {};
    this.gui = null;
    this.doc = doc;
    this.win = win;
    this.image = {width: 0, height: 0, zoom: 1, canvasScale: 1, modified: false};
    this.resolution = {elem: null, elemId: "paintweb_resInfo", cssText: "@media screen and (resolution:96dpi){#paintweb_resInfo{width:96px}}@media screen and (resolution:134dpi){#paintweb_resInfo{width:134px}}@media screen and (resolution:200dpi){#paintweb_resInfo{width:200px}}@media screen and (resolution:300dpi){#paintweb_resInfo{width:300px}}#paintweb_resInfo{display:block;height:100%;left:-3000px;position:fixed;top:0;visibility:hidden;z-index:-32}", dpiOptimal: 96, dpiLocal: 96, browserZoom: 1, scale: -1};
    this.history = {pos: 0, states: []};
    this.shadowSupported = true;
    this.shadowAllowed = true;
    this.clipboard = false;
    this.initialized = PaintWeb.INIT_NOT_STARTED;
    this.events = null;
    this.UID = 0;
    this.stateProperties = ["strokeStyle", "fillStyle", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor", "globalCompositeOperation", "font", "textAlign", "textBaseline"];
    var kbListener_ = null;
    var temp_ = {onInit: null, toolsLoadQueue: 0, extensionsLoadQueue: 0};
    var MathAbs = Math.abs, MathFloor = Math.floor, MathMax = Math.max, MathMin = Math.min, MathRound = Math.round, pwlib = null, appEvent = null, lang = this.lang;
    this.ELEMENT_NODE = window.Node ? Node.ELEMENT_NODE : 1;
    function preInit() {
        var d = new Date();
        if (_self.build === -1) {
            var dateArr = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
            if (dateArr[1] < 10) {
                dateArr[1] = "0" + dateArr[1]
            }
            if (dateArr[2] < 10) {
                dateArr[2] = "0" + dateArr[2]
            }
            _self.build = dateArr.join("")
        }
        _self.UID = d.getMilliseconds() * MathRound(Math.random() * 100);
        _self.elems.head = doc.getElementsByTagName("head")[0] || doc.body
    }

    this.init = function (handler) {
        if (this.initialized === PaintWeb.INIT_DONE) {
            return true
        }
        this.initialized = PaintWeb.INIT_STARTED;
        if (handler && typeof handler !== "function") {
            throw new TypeError(lang.initHandlerMustBeFunction)
        }
        temp_.onInit = handler;
        if (!doc.createElement("canvas").getContext) {
            this.initError(lang.noCanvasSupport);
            return false
        }
        if (!window.getComputedStyle) {
            try {
                if (!win.getComputedStyle(doc.createElement("div"), null)) {
                    this.initError(lang.noComputedStyle);
                    return false
                }
            } catch (err) {
                this.initError(lang.noComputedStyle);
                return false
            }
        }
        if (!window.XMLHttpRequest) {
            this.initError(lang.noXMLHttpRequest);
            return false
        }
        if (!this.config.configFile) {
            this.initError(lang.noConfigFile);
            return false
        }
        if (typeof this.config.guiPlaceholder !== "object" || this.config.guiPlaceholder.nodeType !== this.ELEMENT_NODE) {
            this.initError(lang.guiPlaceholderWrong);
            return false
        }
        if (typeof this.config.imageLoad !== "object" || this.config.imageLoad.nodeType !== this.ELEMENT_NODE) {
            this.config.imageLoad = null
        }
        if (!window.JSON) {
            this.scriptLoad(PaintWeb.baseFolder + "includes/json2.js", this.jsonlibReady)
        } else {
            this.jsonlibReady()
        }
        return true
    };
    this.jsonlibReady = function () {
        if (window.pwlib) {
            _self.pwlibReady()
        } else {
            _self.scriptLoad(PaintWeb.baseFolder + "includes/lib.js", _self.pwlibReady)
        }
    };
    this.pwlibReady = function () {
        pwlib = window.pwlib;
        appEvent = pwlib.appEvent;
        _self.events = new pwlib.appEvents(_self);
        _self.configLoad()
    };
    this.initError = function (msg) {
        switch (this.initialized) {
            case PaintWeb.INIT_ERROR:
            case PaintWeb.INIT_DONE:
            case PaintWeb.INIT_NOT_STARTED:
                return
        }
        this.initialized = PaintWeb.INIT_ERROR;
        var ev = null;
        if (this.events && "dispatch" in this.events && appEvent && "appInit" in appEvent) {
            ev = new appEvent.appInit(this.initialized, msg);
            this.events.dispatch(ev)
        }
        if (typeof temp_.onInit === "function") {
            if (!ev) {
                ev = {type: "appInit", state: this.initialized, errorMessage: msg}
            }
            temp_.onInit.call(this, ev)
        }
        if (this.config.showErrors) {
            alert(msg)
        } else {
            if (window.console && console.log) {
                console.log(msg)
            }
        }
    };
    this.configLoad = function () {
        pwlib.xhrLoad(PaintWeb.baseFolder + this.config.configFile, this.configReady)
    };
    this.configReady = function (xhr) {
        if (!xhr || xhr.readyState !== 4) {
            return
        }
        if ((xhr.status !== 304 && xhr.status !== 200) || !xhr.responseText) {
            _self.initError(lang.failedConfigLoad);
            return
        }
        var config = pwlib.jsonParse(xhr.responseText);
        pwlib.extend(_self.config, config);
        _self.langLoad()
    };
    this.langLoad = function () {
        var id = this.config.lang, file = PaintWeb.baseFolder;
        if (!(id in this.config.languages)) {
            id = this.config.lang = "en"
        }
        if ("file" in this.config.languages[id]) {
            file += this.config.languages[id].file
        } else {
            file += this.config.langFolder + "/" + id + ".json"
        }
        pwlib.xhrLoad(file, this.langReady)
    };
    this.langReady = function (xhr) {
        if (!xhr || xhr.readyState !== 4) {
            return
        }
        if ((xhr.status !== 304 && xhr.status !== 200) || !xhr.responseText) {
            _self.initError(lang.failedLangLoad);
            return
        }
        pwlib.extend(_self.lang, pwlib.jsonParse(xhr.responseText));
        if (_self.initCanvas() && _self.initContext()) {
            _self.guiLoad()
        } else {
            _self.initError(lang.errorInitCanvas)
        }
    };
    this.initCommands = function () {
        if (this.commandRegister("historyUndo", this.historyUndo) && this.commandRegister("historyRedo", this.historyRedo) && this.commandRegister("selectAll", this.selectAll) && this.commandRegister("selectionCut", this.selectionCut) && this.commandRegister("selectionCopy", this.selectionCopy) && this.commandRegister("clipboardPaste", this.clipboardPaste) && this.commandRegister("imageSave", this.imageSave) && this.commandRegister("imageClear", this.imageClear) && this.commandRegister("swapFillStroke", this.swapFillStroke) && this.commandRegister("imageZoomIn", this.imageZoomIn) && this.commandRegister("imageZoomOut", this.imageZoomOut) && this.commandRegister("imageZoomReset", this.imageZoomReset)) {
            return true
        } else {
            this.initError(lang.errorInitCommands);
            return false
        }
    };
    this.guiLoad = function () {
        var cfg = this.config, gui = this.config.gui, base = PaintWeb.baseFolder + cfg.interfacesFolder + "/" + gui + "/", style = base + cfg.guiStyle, script = base + cfg.guiScript;
        this.styleLoad(gui + "style", style);
        if (pwlib.gui) {
            this.guiScriptReady()
        } else {
            this.scriptLoad(script, this.guiScriptReady)
        }
    };
    this.guiScriptReady = function () {
        var cfg = _self.config, gui = _self.config.gui, base = cfg.interfacesFolder + "/" + gui + "/", markup = base + cfg.guiMarkup;
        _self.gui = new pwlib.gui(_self);
        if (markup in pwlib.fileCache) {
            if (_self.gui.init(pwlib.fileCache[markup])) {
                _self.initTools()
            } else {
                _self.initError(lang.errorInitGUI)
            }
        } else {
            pwlib.xhrLoad(PaintWeb.baseFolder + markup, _self.guiMarkupReady)
        }
    };
    this.guiMarkupReady = function (xhr) {
        if (!xhr || xhr.readyState !== 4) {
            return
        }
        if (xhr.status !== 304 && xhr.status !== 200) {
            _self.initError(lang.failedMarkupLoad);
            return
        }
        var param;
        if (xhr.responseXML && xhr.responseXML.documentElement) {
            param = xhr.responseXML
        } else {
            if (xhr.responseText) {
                param = xhr.responseText
            } else {
                _self.initError(lang.failedMarkupLoad);
                return
            }
        }
        if (_self.gui.init(param)) {
            _self.initTools()
        } else {
            _self.initError(lang.errorInitGUI)
        }
    };
    this.initCanvas = function () {
        var cfg = this.config, res = this.resolution, resInfo = doc.getElementById(res.elemId), layerCanvas = doc.createElement("canvas"), bufferCanvas = doc.createElement("canvas"), layerContext = layerCanvas.getContext("2d"), bufferContext = bufferCanvas.getContext("2d"), width = cfg.imageWidth, height = cfg.imageHeight, imageLoad = cfg.imageLoad;
        if (!resInfo) {
            var style = doc.createElement("style");
            style.type = "text/css";
            style.appendChild(doc.createTextNode(res.cssText));
            _self.elems.head.appendChild(style);
            resInfo = doc.createElement("div");
            resInfo.id = res.elemId;
            doc.body.appendChild(resInfo)
        }
        if (!resInfo) {
            this.initError(lang.errorInitCanvas);
            return false
        }
        if (!layerCanvas || !bufferCanvas || !layerContext || !bufferContext) {
            this.initError(lang.noCanvasSupport);
            return false
        }
        if (!pwlib.isSameHost(imageLoad.src, win.location.host)) {
            cfg.imageLoad = imageLoad = null;
            alert(lang.imageLoadDifferentHost)
        }
        if (imageLoad) {
            width = parseInt(imageLoad.width);
            height = parseInt(imageLoad.height)
        }
        res.elem = resInfo;
        this.image.width = layerCanvas.width = bufferCanvas.width = width;
        this.image.height = layerCanvas.height = bufferCanvas.height = height;
        this.layer.canvas = layerCanvas;
        this.layer.context = layerContext;
        this.buffer.canvas = bufferCanvas;
        this.buffer.context = bufferContext;
        if (imageLoad) {
            layerContext.drawImage(imageLoad, 0, 0)
        } else {
            var fillStyle = layerContext.fillStyle;
            layerContext.fillStyle = cfg.backgroundColor;
            layerContext.fillRect(0, 0, width, height);
            layerContext.fillStyle = fillStyle
        }
        var events = ["dblclick", "click", "mousedown", "mouseup", "mousemove", "contextmenu"], n = events.length;
        for (var i = 0; i < n; i++) {
            bufferCanvas.addEventListener(events[i], this.ev_canvas, false)
        }
        return true
    };
    this.initContext = function () {
        var bufferContext = this.buffer.context;
        if (!pwlib.browser.opera && bufferContext.shadowColor && "shadowOffsetX" in bufferContext && "shadowOffsetY" in bufferContext && "shadowBlur" in bufferContext) {
            this.shadowSupported = true
        } else {
            this.shadowSupported = false
        }
        var cfg = this.config, props = {fillStyle: cfg.fillStyle, font: cfg.text.fontSize + "px " + cfg.text.fontFamily, lineCap: cfg.line.lineCap, lineJoin: cfg.line.lineJoin, lineWidth: cfg.line.lineWidth, miterLimit: cfg.line.miterLimit, strokeStyle: cfg.strokeStyle, textAlign: cfg.text.textAlign, textBaseline: cfg.text.textBaseline};
        if (cfg.text.bold) {
            props.font = "bold " + props.font
        }
        if (cfg.text.italic) {
            props.font = "italic " + props.font
        }
        if (!bufferContext.fillText && "mozTextStyle" in bufferContext) {
            props.mozTextStyle = props.font
        }
        for (var prop in props) {
            bufferContext[prop] = props[prop]
        }
        if (cfg.shadow.enable && this.shadowSupported) {
            var layerContext = this.layer.context;
            layerContext.shadowColor = cfg.shadow.shadowColor;
            layerContext.shadowBlur = cfg.shadow.shadowBlur;
            layerContext.shadowOffsetX = cfg.shadow.shadowOffsetX;
            layerContext.shadowOffsetY = cfg.shadow.shadowOffsetY
        }
        return true
    };
    this.initComplete = function () {
        if (!this.initCommands()) {
            this.initError(lang.errorInitCommands);
            return
        }
        this.historyAdd();
        this.image.modified = false;
        kbListener_ = new pwlib.dom.KeyboardEventListener(this.config.guiPlaceholder, {keydown: this.ev_keyboard, keypress: this.ev_keyboard, keyup: this.ev_keyboard});
        this.updateCanvasScaling();
        this.win.addEventListener("resize", this.updateCanvasScaling, false);
        this.events.add("configChange", this.configChangeHandler);
        this.events.add("imageSaveResult", this.imageSaveResultHandler);
        if (typeof temp_.onInit === "function") {
            _self.events.add("appInit", temp_.onInit);
            delete temp_.onInit
        }
        this.initialized = PaintWeb.INIT_DONE;
        this.events.dispatch(new appEvent.appInit(this.initialized))
    };
    this.initTools = function () {
        var id = "", cfg = this.config, n = cfg.tools.length, base = PaintWeb.baseFolder + cfg.toolsFolder + "/";
        if (n < 1) {
            this.initError(lang.noToolConfigured);
            return
        }
        temp_.toolsLoadQueue = n;
        for (var i = 0; i < n; i++) {
            id = cfg.tools[i];
            if (id in pwlib.tools) {
                this.toolLoaded()
            } else {
                this.scriptLoad(base + id + ".js", this.toolLoaded)
            }
        }
    };
    this.toolLoaded = function () {
        temp_.toolsLoadQueue--;
        if (temp_.toolsLoadQueue === 0) {
            var t = _self.config.tools, n = t.length;
            for (var i = 0; i < n; i++) {
                if (!_self.toolRegister(t[i])) {
                    _self.initError(pwlib.strf(lang.toolRegisterFailed, {id: t[i]}));
                    return
                }
            }
            _self.initExtensions()
        }
    };
    this.initExtensions = function () {
        var id = "", cfg = this.config, n = cfg.extensions.length, base = PaintWeb.baseFolder + cfg.extensionsFolder + "/";
        if (n < 1) {
            this.initComplete();
            return
        }
        temp_.extensionsLoadQueue = n;
        for (var i = 0; i < n; i++) {
            id = cfg.extensions[i];
            if (id in pwlib.extensions) {
                this.extensionLoaded()
            } else {
                this.scriptLoad(base + id + ".js", this.extensionLoaded)
            }
        }
    };
    this.extensionLoaded = function () {
        temp_.extensionsLoadQueue--;
        if (temp_.extensionsLoadQueue === 0) {
            var e = _self.config.extensions, n = e.length;
            for (var i = 0; i < n; i++) {
                if (!_self.extensionRegister(e[i])) {
                    _self.initError(pwlib.strf(lang.extensionRegisterFailed, {id: e[i]}));
                    return
                }
            }
            _self.initComplete()
        }
    };
    this.updateCanvasScaling = function () {
        var res = _self.resolution, cs = win.getComputedStyle(res.elem, null), image = _self.image;
        bufferStyle = _self.buffer.canvas.style, layerStyle = _self.layer.canvas.style, scaleNew = 1, width = parseInt(cs.width), height = parseInt(cs.height);
        if (pwlib.browser.opera) {
            scaleNew = win.innerHeight / height;
            scaleNew = MathRound(scaleNew * 10) / 10
        } else {
            if (width && !isNaN(width) && width !== res.dpiOptimal) {
                res.dpiLocal = width;
                scaleNew = MathFloor(res.dpiLocal / res.dpiOptimal)
            } else {
                if (pwlib.browser.olpcxo && pwlib.browser.gecko) {
                    res.dpiLocal = 134;
                    var appUnitsPerCSSPixel = 60, devPixelsPerCSSPixel = res.dpiLocal / res.dpiOptimal;
                    appUnitsPerDevPixel = appUnitsPerCSSPixel / devPixelsPerCSSPixel;
                    scaleNew = appUnitsPerCSSPixel / MathFloor(appUnitsPerDevPixel);
                    if ("mozImageSmoothingEnabled" in layerStyle) {
                        layerStyle.mozImageSmoothingEnabled = bufferStyle.mozImageSmoothingEnabled = false
                    }
                }
            }
        }
        if (scaleNew === res.scale) {
            return
        }
        res.scale = scaleNew;
        var styleWidth = image.width / res.scale * image.zoom, styleHeight = image.height / res.scale * image.zoom;
        image.canvasScale = styleWidth / image.width;
        bufferStyle.width = layerStyle.width = styleWidth + "px";
        bufferStyle.height = layerStyle.height = styleHeight + "px";
        _self.events.dispatch(new appEvent.canvasSizeChange(styleWidth, styleHeight, image.canvasScale))
    };
    this.ev_canvas = function (ev) {
        if (!_self.tool) {
            return false
        }
        switch (ev.type) {
            case"mousedown":
                if (_self.mouse.buttonDown) {
                    return false
                }
                _self.mouse.buttonDown = true;
                break;
            case"mouseup":
                if (!_self.mouse.buttonDown) {
                    return false
                }
                _self.mouse.buttonDown = false
        }
        if ("layerX" in ev) {
            if (_self.image.canvasScale === 1) {
                _self.mouse.x = ev.layerX;
                _self.mouse.y = ev.layerY
            } else {
                _self.mouse.x = MathRound(ev.layerX / _self.image.canvasScale);
                _self.mouse.y = MathRound(ev.layerY / _self.image.canvasScale)
            }
        } else {
            if ("offsetX" in ev) {
                if (_self.image.canvasScale === 1) {
                    _self.mouse.x = ev.offsetX;
                    _self.mouse.y = ev.offsetY
                } else {
                    _self.mouse.x = MathRound(ev.offsetX / _self.image.canvasScale);
                    _self.mouse.y = MathRound(ev.offsetY / _self.image.canvasScale)
                }
            }
        }
        if (ev.type in _self.tool && _self.tool[ev.type](ev)) {
            ev.preventDefault();
            return true
        } else {
            return false
        }
    };
    this.ev_keyboard = function (ev) {
        if (!ev.key_) {
            return
        }
        if (ev.target && ev.target.nodeName) {
            switch (ev.target.nodeName.toLowerCase()) {
                case"input":
                    if (ev.type === "keypress" && (ev.key_ === "Up" || ev.key_ === "Down") && ev.target.getAttribute("type") === "number") {
                        _self.ev_numberInput(ev)
                    }
                case"select":
                case"textarea":
                case"button":
                    return
            }
        }
        if (ev.type === "keypress" && ev.char_) {
            var isZoomKey = true, imageZoomKeys = _self.config.imageZoomKeys;
            switch (ev.char_) {
                case imageZoomKeys["in"]:
                    _self.imageZoomIn(ev);
                    break;
                case imageZoomKeys.out:
                    _self.imageZoomOut(ev);
                    break;
                case imageZoomKeys.reset:
                    _self.imageZoomReset(ev);
                    break;
                default:
                    isZoomKey = false
            }
            if (isZoomKey) {
                ev.preventDefault();
                return
            }
        }
        ev.kid_ = "";
        var i, kmods = {altKey: "Alt", ctrlKey: "Control", shiftKey: "Shift"};
        for (i in kmods) {
            if (ev[i] && ev.key_ !== kmods[i]) {
                ev.kid_ += kmods[i] + " "
            }
        }
        ev.kid_ += ev.key_;
        if (_self.tool && ev.type in _self.tool && _self.tool[ev.type](ev)) {
            return true
        }
        var gkey = _self.config.keys[ev.kid_];
        if (!gkey) {
            return false
        }
        ev.kobj_ = gkey;
        if ("extension" in gkey) {
            var extension = _self.extensions[gkey.extension], method = gkey.method || ev.type;
            if (method in extension) {
                extension[method].call(this, ev)
            }
        } else {
            if ("command" in gkey && gkey.command in _self.commands) {
                _self.commands[gkey.command].call(this, ev)
            } else {
                if (ev.type === "keydown" && "toolActivate" in gkey) {
                    _self.toolActivate(gkey.toolActivate, ev)
                }
            }
        }
        if (ev.type === "keypress") {
            ev.preventDefault()
        }
    };
    this.ev_numberInput = function (ev) {
        var target = ev.target;
        var val, max = parseFloat(target.getAttribute("max")), min = parseFloat(target.getAttribute("min")), step = parseFloat(target.getAttribute("step"));
        if (target.value === "" || target.value === null) {
            val = !isNaN(min) ? min : 0
        } else {
            val = parseFloat(target.value.replace(/[,.]+/g, ".").replace(/[^0-9.\-]/g, ""))
        }
        if (isNaN(val)) {
            val = min || 0
        }
        if (isNaN(step)) {
            step = 1
        }
        if (ev.shiftKey) {
            step *= 2
        }
        if (ev.key_ === "Down") {
            step *= -1
        }
        val += step;
        if (!isNaN(max) && val > max) {
            val = max
        } else {
            if (!isNaN(min) && val < min) {
                val = min
            }
        }
        if (val == target.value) {
            return
        }
        target.value = val;
        if (doc.createEvent && target.dispatchEvent) {
            var ev_change = doc.createEvent("HTMLEvents");
            ev_change.initEvent("change", true, true);
            target.dispatchEvent(ev_change)
        }
    };
    this.imageZoomIn = function (ev) {
        if (ev && ev.shiftKey) {
            _self.config.imageZoomStep *= 2
        }
        var res = _self.imageZoomTo("+");
        if (ev && ev.shiftKey) {
            _self.config.imageZoomStep /= 2
        }
        return res
    };
    this.imageZoomOut = function (ev) {
        if (ev && ev.shiftKey) {
            _self.config.imageZoomStep *= 2
        }
        var res = _self.imageZoomTo("-");
        if (ev && ev.shiftKey) {
            _self.config.imageZoomStep /= 2
        }
        return res
    };
    this.imageZoomReset = function (ev) {
        return _self.imageZoomTo(1)
    };
    this.imageZoomTo = function (level) {
        var image = this.image, config = this.config, res = this.resolution;
        if (!level) {
            return false
        } else {
            if (level === "+") {
                level = image.zoom + config.imageZoomStep
            } else {
                if (level === "-") {
                    level = image.zoom - config.imageZoomStep
                } else {
                    if (typeof level !== "number") {
                        return false
                    }
                }
            }
        }
        if (level > config.imageZoomMax) {
            level = config.imageZoomMax
        } else {
            if (level < config.imageZoomMin) {
                level = config.imageZoomMin
            }
        }
        if (level === image.zoom) {
            return true
        }
        var cancel = this.events.dispatch(new appEvent.imageZoom(level));
        if (cancel) {
            return false
        }
        var styleWidth = image.width / res.scale * level, styleHeight = image.height / res.scale * level, bufferStyle = this.buffer.canvas.style, layerStyle = this.layer.canvas.style;
        image.canvasScale = styleWidth / image.width;
        bufferStyle.width = layerStyle.width = styleWidth + "px";
        bufferStyle.height = layerStyle.height = styleHeight + "px";
        image.zoom = level;
        this.events.dispatch(new appEvent.canvasSizeChange(styleWidth, styleHeight, image.canvasScale));
        return true
    };
    this.imageCrop = function (cropX, cropY, cropWidth, cropHeight) {
        var bufferCanvas = this.buffer.canvas, bufferContext = this.buffer.context, image = this.image, layerCanvas = this.layer.canvas, layerContext = this.layer.context;
        cropX = parseInt(cropX);
        cropY = parseInt(cropY);
        cropWidth = parseInt(cropWidth);
        cropHeight = parseInt(cropHeight);
        if (!cropWidth || !cropHeight || isNaN(cropX) || isNaN(cropY) || isNaN(cropWidth) || isNaN(cropHeight) || cropX >= image.width || cropY >= image.height) {
            return false
        }
        var cancel = this.events.dispatch(new appEvent.imageCrop(cropX, cropY, cropWidth, cropHeight));
        if (cancel) {
            return false
        }
        if (cropWidth > this.config.imageWidthMax) {
            cropWidth = this.config.imageWidthMax
        }
        if (cropHeight > this.config.imageHeightMax) {
            cropHeight = this.config.imageHeightMax
        }
        if (cropX === 0 && cropY === 0 && image.width === cropWidth && image.height === cropHeight) {
            return true
        }
        var layerData = null, bufferData = null, layerState = this.stateSave(layerContext), bufferState = this.stateSave(bufferContext), scaledWidth = cropWidth * image.canvasScale, scaledHeight = cropHeight * image.canvasScale, dataWidth = MathMin(image.width, cropWidth), dataHeight = MathMin(image.height, cropHeight), sumX = cropX + dataWidth, sumY = cropY + dataHeight;
        if (sumX > image.width) {
            dataWidth -= sumX - image.width
        }
        if (sumY > image.height) {
            dataHeight -= sumY - image.height
        }
        if (layerContext.getImageData) {
            try {
                layerData = layerContext.getImageData(cropX, cropY, dataWidth, dataHeight)
            } catch (err) {
            }
        }
        if (bufferContext.getImageData) {
            try {
                bufferData = bufferContext.getImageData(cropX, cropY, dataWidth, dataHeight)
            } catch (err) {
            }
        }
        bufferCanvas.style.width = layerCanvas.style.width = scaledWidth + "px";
        bufferCanvas.style.height = layerCanvas.style.height = scaledHeight + "px";
        layerCanvas.width = cropWidth;
        layerCanvas.height = cropHeight;
        if (layerData && layerContext.putImageData) {
            layerContext.putImageData(layerData, 0, 0)
        }
        this.stateRestore(layerContext, layerState);
        state = this.stateSave(bufferContext);
        bufferCanvas.width = cropWidth;
        bufferCanvas.height = cropHeight;
        if (bufferData && bufferContext.putImageData) {
            bufferContext.putImageData(bufferData, 0, 0)
        }
        this.stateRestore(bufferContext, bufferState);
        image.width = cropWidth;
        image.height = cropHeight;
        bufferState = layerState = layerData = bufferData = null;
        this.events.dispatch(new appEvent.imageSizeChange(cropWidth, cropHeight));
        this.events.dispatch(new appEvent.canvasSizeChange(scaledWidth, scaledHeight, image.canvasScale));
        return true
    };
    this.stateSave = function (context) {
        if (!context || !context.canvas || !this.stateProperties) {
            return false
        }
        var stateObj = {}, prop = null, n = this.stateProperties.length;
        for (var i = 0; i < n; i++) {
            prop = this.stateProperties[i];
            stateObj[prop] = context[prop]
        }
        return stateObj
    };
    this.stateRestore = function (context, stateObj) {
        if (!context || !context.canvas) {
            return false
        }
        for (var state in stateObj) {
            context[state] = stateObj[state]
        }
        return true
    };
    this.shadowAllow = function () {
        if (this.shadowAllowed || !this.shadowSupported) {
            return
        }
        var context = this.layer.context, cfg = this.config.shadow;
        if (cfg.enable) {
            context.shadowColor = cfg.shadowColor;
            context.shadowOffsetX = cfg.shadowOffsetX;
            context.shadowOffsetY = cfg.shadowOffsetY;
            context.shadowBlur = cfg.shadowBlur
        }
        this.shadowAllowed = true;
        this.events.dispatch(new appEvent.shadowAllow(true))
    };
    this.shadowDisallow = function () {
        if (!this.shadowAllowed || !this.shadowSupported) {
            return
        }
        if (this.config.shadow.enable) {
            var context = this.layer.context;
            context.shadowColor = "rgba(0,0,0,0)";
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 0
        }
        this.shadowAllowed = false;
        this.events.dispatch(new appEvent.shadowAllow(false))
    };
    this.layerUpdate = function () {
        this.layer.context.drawImage(this.buffer.canvas, 0, 0);
        this.buffer.context.clearRect(0, 0, this.image.width, this.image.height);
        this.historyAdd();
        return true
    };
    this.historyAdd = function () {
        var layerContext = this.layer.context, history = this.history, prevPos = history.pos;
        if (!layerContext.getImageData) {
            return false
        }
        if (prevPos < history.states.length) {
            history.states.splice(prevPos, history.states.length)
        }
        try {
            history.states.push(layerContext.getImageData(0, 0, this.image.width, this.image.height))
        } catch (err) {
            return false
        }
        if ("historyLimit" in this.config && history.states.length > this.config.historyLimit) {
            history.states.splice(0, history.states.length - this.config.historyLimit)
        }
        history.pos = history.states.length;
        this.image.modified = true;
        this.events.dispatch(new appEvent.historyUpdate(history.pos, prevPos, history.pos));
        return true
    };
    this.historyGoto = function (pos) {
        var layerContext = this.layer.context, image = this.image, history = this.history;
        if (!history.states.length || !layerContext.putImageData) {
            return false
        }
        var cpos = history.pos;
        if (pos === "undo") {
            pos = cpos - 1
        } else {
            if (pos === "redo") {
                pos = cpos + 1
            }
        }
        if (pos < 1 || pos > history.states.length) {
            return false
        }
        var himg = history.states[pos - 1];
        if (!himg) {
            return false
        }
        var w = MathMin(image.width, himg.width), h = MathMin(image.height, himg.height);
        layerContext.clearRect(0, 0, image.width, image.height);
        try {
            layerContext.putImageData(himg, 0, 0, 0, 0, w, h)
        } catch (err) {
            var tmp = doc.createElement("canvas");
            tmp.width = himg.width;
            tmp.height = himg.height;
            var tmp2 = tmp.getContext("2d");
            tmp2.putImageData(himg, 0, 0);
            layerContext.drawImage(tmp, 0, 0);
            tmp2 = tmp = null;
            delete tmp2, tmp
        }
        history.pos = pos;
        this.events.dispatch(new appEvent.historyUpdate(pos, cpos, history.states.length));
        return true
    };
    this.historyReset = function () {
        this.history.pos = 0;
        this.history.states = [];
        this.events.dispatch(new appEvent.historyUpdate(0, 0, 0))
    };
    this.toolSnapXY = function (x, y) {
        var diffx = MathAbs(_self.mouse.x - x), diffy = MathAbs(_self.mouse.y - y);
        if (diffx > diffy) {
            _self.mouse.y = y
        } else {
            _self.mouse.x = x
        }
    };
    this.toolActivate = function (id, ev) {
        if (!id || !(id in pwlib.tools) || typeof pwlib.tools[id] !== "function") {
            return false
        }
        var tool = pwlib.tools[id], prevId = this.tool ? this.tool._id : null;
        if (prevId && this.tool instanceof pwlib.tools[id]) {
            return true
        }
        var cancel = this.events.dispatch(new appEvent.toolPreactivate(id, prevId));
        if (cancel) {
            return false
        }
        var tool_obj = new tool(this, ev);
        if (!tool_obj) {
            return false
        }
        if ("preActivate" in tool_obj && !tool_obj.preActivate(ev)) {
            tool_obj = null;
            return false
        }
        if (this.tool && "deactivate" in this.tool) {
            this.tool.deactivate(ev)
        }
        this.tool = tool_obj;
        this.mouse.buttonDown = false;
        if ("activate" in this.tool) {
            this.tool.activate(ev)
        }
        this.events.dispatch(new appEvent.toolActivate(id, prevId));
        return true
    };
    this.toolRegister = function (id) {
        if (typeof id !== "string" || !id) {
            return false
        }
        var tool = pwlib.tools[id];
        if (typeof tool !== "function") {
            return false
        }
        tool.prototype._id = id;
        this.events.dispatch(new appEvent.toolRegister(id));
        if (!this.tool && id === this.config.toolDefault) {
            return this.toolActivate(id)
        } else {
            return true
        }
    };
    this.toolUnregister = function (id) {
        if (typeof id !== "string" || !id || !(id in pwlib.tools)) {
            return false
        }
        this.events.dispatch(new appEvent.toolUnregister(id));
        return true
    };
    this.extensionRegister = function (id) {
        if (typeof id !== "string" || !id) {
            return false
        }
        var func = pwlib.extensions[id];
        if (typeof func !== "function") {
            return false
        }
        func.prototype._id = id;
        var obj = new func(_self);
        if ("extensionRegister" in obj && !obj.extensionRegister()) {
            return false
        }
        this.extensions[id] = obj;
        this.events.dispatch(new appEvent.extensionRegister(id));
        return true
    };
    this.extensionUnregister = function (id) {
        if (typeof id !== "string" || !id || !(id in this.extensions)) {
            return false
        }
        this.events.dispatch(new appEvent.extensionUnregister(id));
        if ("extensionUnregister" in this.extensions[id]) {
            this.extensions[id].extensionUnregister()
        }
        delete this.extensions[id];
        return true
    };
    this.commandRegister = function (id, func) {
        if (typeof id !== "string" || !id || typeof func !== "function" || id in this.commands) {
            return false
        }
        this.commands[id] = func;
        this.events.dispatch(new appEvent.commandRegister(id));
        return true
    };
    this.commandUnregister = function (id) {
        if (typeof id !== "string" || !id || !(id in this.commands)) {
            return false
        }
        this.events.dispatch(new appEvent.commandUnregister(id));
        delete this.commands[id];
        return true
    };
    this.scriptLoad = function (url, handler) {
        if (!handler) {
            var elem = doc.createElement("script");
            elem.type = "text/javascript";
            elem.src = url;
            this.elems.head.appendChild(elem);
            return
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (!xhr || xhr.readyState !== 4) {
                return
            } else {
                if ((xhr.status !== 304 && xhr.status !== 200) || !xhr.responseText) {
                    handler(false, xhr)
                } else {
                    try {
                        eval.call(win, xhr.responseText)
                    } catch (err) {
                        eval(xhr.responseText, win)
                    }
                    handler(true, xhr)
                }
            }
            xhr = null
        };
        xhr.open("GET", url);
        xhr.send("")
    };
    this.styleLoad = function (id, url, media, handler) {
        id = "paintweb_style_" + id;
        var elem = doc.getElementById(id);
        if (elem) {
            return
        }
        if (!media) {
            media = "screen, projection"
        }
        elem = doc.createElement("link");
        if (handler) {
            elem.addEventListener("load", handler, false)
        }
        elem.id = id;
        elem.rel = "stylesheet";
        elem.type = "text/css";
        elem.media = media;
        elem.href = url;
        this.elems.head.appendChild(elem)
    };
    this.historyUndo = function () {
        return _self.historyGoto("undo")
    };
    this.historyRedo = function () {
        return _self.historyGoto("redo")
    };
    this.imageLoad = function (importImage) {
        if (!importImage || !importImage.width || !importImage.height || importImage.nodeType !== this.ELEMENT_NODE || !pwlib.isSameHost(importImage.src, win.location.host)) {
            return false
        }
        this.historyReset();
        var layerContext = this.layer.context, layerCanvas = this.layer.canvas, layerStyle = layerCanvas.style, bufferCanvas = this.buffer.canvas, bufferStyle = bufferCanvas.style, image = this.image, styleWidth = importImage.width * image.canvasScale, styleHeight = importImage.height * image.canvasScale, result = true;
        bufferCanvas.width = layerCanvas.width = importImage.width;
        bufferCanvas.height = layerCanvas.height = importImage.height;
        bufferStyle.width = layerStyle.width = styleWidth + "px";
        bufferStyle.height = layerStyle.height = styleHeight + "px";
        try {
            layerContext.drawImage(importImage, 0, 0)
        } catch (err) {
            result = false;
            bufferCanvas.width = layerCanvas.width = image.width;
            bufferCanvas.height = layerCanvas.height = image.height;
            styleWidth = image.width * image.canvasScale;
            styleHeight = image.height * image.canvasScale;
            bufferStyle.width = layerStyle.width = styleWidth + "px";
            bufferStyle.height = layerStyle.height = styleHeight + "px"
        }
        if (result) {
            image.width = importImage.width;
            image.height = importImage.height;
            _self.config.imageLoad = importImage;
            this.events.dispatch(new appEvent.imageSizeChange(image.width, image.height));
            this.events.dispatch(new appEvent.canvasSizeChange(styleWidth, styleHeight, image.canvasScale))
        }
        this.historyAdd();
        image.modified = false;
        return result
    };
    this.imageClear = function (ev) {
        var layerContext = _self.layer.context, image = _self.image;
        layerContext.clearRect(0, 0, image.width, image.height);
        var fillStyle = layerContext.fillStyle;
        layerContext.fillStyle = _self.config.backgroundColor;
        layerContext.fillRect(0, 0, image.width, image.height);
        layerContext.fillStyle = fillStyle;
        _self.historyAdd()
    };
    this.imageSave = function (type) {
        var canvas = _self.layer.canvas, cfg = _self.config, img = _self.image, imageLoad = _self.config.imageLoad, ext = "png", idata = null, src = null, pos;
        if (!canvas.toDataURL) {
            return false
        }
        var extMap = {jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", gif: "image/gif"};
        if (typeof type !== "string" || !type) {
            if (imageLoad && imageLoad.src && imageLoad.src.substr(0, 5) !== "data:") {
                src = imageLoad.src;
                pos = src.indexOf("?");
                if (pos !== -1) {
                    src = src.substr(0, pos)
                }
                ext = src.substr(src.lastIndexOf(".") + 1).toLowerCase()
            }
            type = extMap[ext] || "image/png"
        }
        if (type !== "image/png") {
            canvas = doc.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            context.fillStyle = cfg.backgroundColor;
            context.fillRect(0, 0, img.width, img.height);
            context.drawImage(_self.layer.canvas, 0, 0);
            context = null
        }
        try {
            if (type === "image/jpeg" && !pwlib.browser.gecko) {
                idata = canvas.toDataURL(type, cfg.jpegSaveQuality)
            } else {
                idata = canvas.toDataURL(type)
            }
        } catch (err) {
            alert(lang.errorImageSave + "\n" + err);
            return false
        }
        canvas = null;
        if (!idata || idata === "data:,") {
            return false
        }
        var ev = new appEvent.imageSave(idata, img.width, img.height), cancel = _self.events.dispatch(ev);
        if (cancel) {
            return true
        }
        var imgwin = _self.win.open();
        if (!imgwin) {
            return false
        }
        imgwin.location = idata;
        idata = null;
        _self.events.dispatch(new appEvent.imageSaveResult(true));
        return true
    };
    this.imageSaveResultHandler = function (ev) {
        if (ev.successful) {
            _self.image.modified = false
        }
    };
    this.swapFillStroke = function () {
        var fillStyle = _self.config.fillStyle, strokeStyle = _self.config.strokeStyle;
        _self.config.fillStyle = strokeStyle;
        _self.config.strokeStyle = fillStyle;
        var ev = new appEvent.configChange(strokeStyle, fillStyle, "fillStyle", "", _self.config);
        _self.events.dispatch(ev);
        ev = new appEvent.configChange(fillStyle, strokeStyle, "strokeStyle", "", _self.config);
        _self.events.dispatch(ev)
    };
    this.selectAll = function (ev) {
        if (_self.toolActivate("selection", ev)) {
            return _self.tool.selectAll(ev)
        } else {
            return false
        }
    };
    this.selectionCut = function (ev) {
        if (!_self.tool || _self.tool._id !== "selection") {
            return false
        } else {
            return _self.tool.selectionCut(ev)
        }
    };
    this.selectionCopy = function (ev) {
        if (!_self.tool || _self.tool._id !== "selection") {
            return false
        } else {
            return _self.tool.selectionCopy(ev)
        }
    };
    this.clipboardPaste = function (ev) {
        if (!_self.clipboard || !_self.toolActivate("selection", ev)) {
            return false
        } else {
            return _self.tool.clipboardPaste(ev)
        }
    };
    this.configChangeHandler = function (ev) {
        if (ev.group === "shadow" && _self.shadowSupported && _self.shadowAllowed) {
            var context = _self.layer.context, cfg = ev.groupRef;
            if (ev.config === "enable") {
                if (ev.value) {
                    context.shadowColor = cfg.shadowColor;
                    context.shadowOffsetX = cfg.shadowOffsetX;
                    context.shadowOffsetY = cfg.shadowOffsetY;
                    context.shadowBlur = cfg.shadowBlur
                } else {
                    context.shadowColor = "rgba(0,0,0,0)";
                    context.shadowOffsetX = 0;
                    context.shadowOffsetY = 0;
                    context.shadowBlur = 0
                }
                return
            }
            if (!cfg.enable) {
                return
            }
            switch (ev.config) {
                case"shadowBlur":
                case"shadowOffsetX":
                case"shadowOffsetY":
                    ev.value = parseInt(ev.value);
                case"shadowColor":
                    context[ev.config] = ev.value
            }
        } else {
            if (ev.group === "line") {
                switch (ev.config) {
                    case"lineWidth":
                    case"miterLimit":
                        ev.value = parseInt(ev.value);
                    case"lineJoin":
                    case"lineCap":
                        _self.buffer.context[ev.config] = ev.value
                }
            } else {
                if (ev.group === "text") {
                    switch (ev.config) {
                        case"textAlign":
                        case"textBaseline":
                            _self.buffer.context[ev.config] = ev.value
                    }
                } else {
                    if (!ev.group) {
                        switch (ev.config) {
                            case"fillStyle":
                            case"strokeStyle":
                                _self.buffer.context[ev.config] = ev.value
                        }
                    }
                }
            }
        }
    };
    this.destroy = function () {
        this.events.dispatch(new appEvent.appDestroy());
        for (var cmd in this.commands) {
            this.commandUnregister(cmd)
        }
        for (var ext in this.extensions) {
            this.extensionUnregister(ext)
        }
        for (var tool in this.gui.tools) {
            this.toolUnregister(tool)
        }
        this.gui.destroy();
        this.initialized = PaintWeb.INIT_NOT_STARTED
    };
    this.toString = function () {
        return"PaintWeb v" + this.version + " (build " + this.build + ")"
    };
    preInit()
}
PaintWeb.INIT_NOT_STARTED = 0;
PaintWeb.INIT_STARTED = 1;
PaintWeb.INIT_DONE = 2;
PaintWeb.INIT_ERROR = -1;
PaintWeb.baseFolder = "";
(function () {
    var A = document.getElementsByTagName("script"), E = A.length, D, C;
    for (var B = 0; B < E; B++) {
        C = A[B].src;
        if (!C || !/paintweb(\.dev|\.src)?\.js/.test(C)) {
            continue
        }
        D = C.lastIndexOf("/");
        if (D !== -1) {
            PaintWeb.baseFolder = C.substr(0, D + 1)
        }
        break
    }
})();