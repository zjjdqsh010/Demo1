var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : U[J.call(t)] || "object"
    }
    function e(e) {
        return "function" == t(e)
    }
    function n(t) {
        return null != t && t == t.window
    }
    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function i(e) {
        return "object" == t(e)
    }
    function o(t) {
        return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function a(t) {
        return "number" == typeof t.length
    }
    function s(t) {
        return P.call(t, function (t) {
            return null != t
        })
    }
    function u(t) {
        return t.length > 0 ? j.fn.concat.apply([], t) : t
    }
    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in Z ? Z[t] : Z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, e) {
        return "number" != typeof e || $[c(t)] ? e : e + "px"
    }
    function h(t) {
        var e,
        n;
        return L[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), L[t] = n),
        L[t]
    }
    function p(t) {
        return "children" in t ? O.call(t.children) : j.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }
    function d(t, e, n) {
        for (E in e)
            n && (o(e[E]) || G(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}), G(e[E]) && !G(t[E]) && (t[E] = []), d(t[E], e[E], n)) : e[E] !== w && (t[E] = e[E])
    }
    function m(t, e) {
        return null == e ? j(t) : j(t).filter(e)
    }
    function v(t, n, r, i) {
        return e(n) ? n.call(t, r, i) : n
    }
    function g(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function y(t, e) {
        var n = t.className,
        r = n && n.baseVal !== w;
        return e === w ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
    }
    function x(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? j.parseJSON(t) : t : e) : t
        } catch (n) {
            return t
        }
    }
    function b(t, e) {
        e(t);
        for (var n = 0, r = t.childNodes.length; r > n; n++)
            b(t.childNodes[n], e)
    }
    var w,
    E,
    j,
    S,
    T,
    C,
    N = [],
    O = N.slice,
    P = N.filter,
    A = window.document,
    L = {},
    Z = {},
    $ = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    _ = /^\s*<(\w+|!)[^>]*>/,
    D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    M = /^(?:body|html)$/i,
    k = /([A-Z])/g,
    z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    F = ["after", "prepend", "before", "append"],
    q = A.createElement("table"),
    H = A.createElement("tr"),
    I = {
        tr: A.createElement("tbody"),
        tbody: q,
        thead: q,
        tfoot: q,
        td: H,
        th: H,
        "*": A.createElement("div")
    },
    V = /complete|loaded|interactive/,
    B = /^[\w-]*$/,
    U = {},
    J = U.toString,
    X = {},
    W = A.createElement("div"),
    Y = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    G = Array.isArray || function (t) {
        return t instanceof Array
    };
    return X.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)
            return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)
            return n.call(t, e);
        var r,
        i = t.parentNode,
        o = !i;
        return o && (i = W).appendChild(t),
        r = ~X.qsa(i, e).indexOf(t),
        o && W.removeChild(t),
        r
    },
    T = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    },
    C = function (t) {
        return P.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    },
    X.fragment = function (t, e, n) {
        var r,
        i,
        a;
        return D.test(t) && (r = j(A.createElement(RegExp.$1))),
        r || (t.replace && (t = t.replace(R, "<$1></$2>")), e === w && (e = _.test(t) && RegExp.$1), e in I || (e = "*"), a = I[e], a.innerHTML = "" + t, r = j.each(O.call(a.childNodes), function () {
                    a.removeChild(this)
                })),
        o(n) && (i = j(r), j.each(n, function (t, e) {
                z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
            })),
        r
    },
    X.Z = function (t, e) {
        return t = t || [],
        t.__proto__ = j.fn,
        t.selector = e || "",
        t
    },
    X.isZ = function (t) {
        return t instanceof X.Z
    },
    X.init = function (t, n) {
        var r;
        if (!t)
            return X.Z();
        if ("string" == typeof t)
            if (t = t.trim(), "<" == t[0] && _.test(t))
                r = X.fragment(t, RegExp.$1, n), t = null;
            else {
                if (n !== w)
                    return j(n).find(t);
                r = X.qsa(A, t)
            }
        else {
            if (e(t))
                return j(A).ready(t);
            if (X.isZ(t))
                return t;
            if (G(t))
                r = s(t);
            else if (i(t))
                r = [t], t = null;
            else if (_.test(t))
                r = X.fragment(t.trim(), RegExp.$1, n), t = null;
            else {
                if (n !== w)
                    return j(n).find(t);
                r = X.qsa(A, t)
            }
        }
        return X.Z(r, t)
    },
    j = function (t, e) {
        return X.init(t, e)
    },
    j.extend = function (t) {
        var e,
        n = O.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()),
        n.forEach(function (n) {
            d(t, n, e)
        }),
        t
    },
    X.qsa = function (t, e) {
        var n,
        i = "#" == e[0],
        o = !i && "." == e[0],
        a = i || o ? e.slice(1) : e,
        s = B.test(a);
        return r(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : O.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    },
    j.contains = A.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    }
     : function (t, e) {
        for (; e && (e = e.parentNode); )
            if (e === t)
                return !0;
        return !1
    },
    j.type = t,
    j.isFunction = e,
    j.isWindow = n,
    j.isArray = G,
    j.isPlainObject = o,
    j.isEmptyObject = function (t) {
        var e;
        for (e in t)
            return !1;
        return !0
    },
    j.inArray = function (t, e, n) {
        return N.indexOf.call(e, t, n)
    },
    j.camelCase = T,
    j.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    },
    j.uuid = 0,
    j.support = {},
    j.expr = {},
    j.map = function (t, e) {
        var n,
        r,
        i,
        o = [];
        if (a(t))
            for (r = 0; r < t.length; r++)
                n = e(t[r], r), null != n && o.push(n);
        else
            for (i in t)
                n = e(t[i], i), null != n && o.push(n);
        return u(o)
    },
    j.each = function (t, e) {
        var n,
        r;
        if (a(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1)
                    return t
        } else
            for (r in t)
                if (e.call(t[r], r, t[r]) === !1)
                    return t;
        return t
    },
    j.grep = function (t, e) {
        return P.call(t, e)
    },
    window.JSON && (j.parseJSON = JSON.parse),
    j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    }),
    j.fn = {
        forEach: N.forEach,
        reduce: N.reduce,
        push: N.push,
        sort: N.sort,
        indexOf: N.indexOf,
        concat: N.concat,
        map: function (t) {
            return j(j.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
        },
        slice: function () {
            return j(O.apply(this, arguments))
        },
        ready: function (t) {
            return V.test(A.readyState) && A.body ? t(j) : A.addEventListener("DOMContentLoaded", function () {
                t(j)
            }, !1),
            this
        },
        get: function (t) {
            return t === w ? O.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return N.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : j(P.call(this, function (e) {
                    return X.matches(e, t)
                }))
        },
        add: function (t, e) {
            return j(C(this.concat(j(t, e))))
        },
        is: function (t) {
            return this.length > 0 && X.matches(this[0], t)
        },
        not: function (t) {
            var n = [];
            if (e(t) && t.call !== w)
                this.each(function (e) {
                    t.call(this, e) || n.push(this)
                });
            else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? O.call(t) : j(t);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return j(n)
        },
        has: function (t) {
            return this.filter(function () {
                return i(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !i(t) ? t : j(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !i(t) ? t : j(t)
        },
        find: function (t) {
            var e,
            n = this;
            return e = t ? "object" == typeof t ? j(t).filter(function () {
                    var t = this;
                    return N.some.call(n, function (e) {
                        return j.contains(e, t)
                    })
                }) : 1 == this.length ? j(X.qsa(this[0], t)) : this.map(function () {
                    return X.qsa(this, t)
                }) : []
        },
        closest: function (t, e) {
            var n = this[0],
            i = !1;
            for ("object" == typeof t && (i = j(t)); n && !(i ? i.indexOf(n) >= 0 : X.matches(n, t)); )
                n = n !== e && !r(n) && n.parentNode;
            return j(n)
        },
        parents: function (t) {
            for (var e = [], n = this; n.length > 0; )
                n = j.map(n, function (t) {
                        return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                    });
            return m(e, t)
        },
        parent: function (t) {
            return m(C(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return m(this.map(function () {
                    return p(this)
                }), t)
        },
        contents: function () {
            return this.map(function () {
                return O.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return m(this.map(function (t, e) {
                    return P.call(p(e.parentNode), function (t) {
                        return t !== e
                    })
                }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return j.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var n = e(t);
            if (this[0] && !n)
                var r = j(t).get(0), i = r.parentNode || this.length > 1;
            return this.each(function (e) {
                j(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var e; (e = t.children()).length; )
                    t = e.first();
                j(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var n = e(t);
            return this.each(function (e) {
                var r = j(this),
                i = r.contents(),
                o = n ? t.call(this, e) : t;
                i.length ? i.wrapAll(o) : r.append(o)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                j(this).replaceWith(j(this).children())
            }),
            this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = j(this);
                (t === w ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = this.innerHTML;
                j(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                if (1 === this.nodeType)
                    if (i(t))
                        for (E in t)
                            g(this, E, t[E]);
                    else
                        g(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : w
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && g(this, t)
            })
        },
        prop: function (t, e) {
            return t = Y[t] || t,
            1 in arguments ? this.each(function (n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (t, e) {
            var n = "data-" + t.replace(k, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? x(r) : w
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t)
                return this.each(function (e) {
                    var n = j(this),
                    r = v(this, t, e, n.offset()),
                    i = n.offsetParent().offset(),
                    o = {
                        top: r.top - i.top,
                        left: r.left - i.left
                    };
                    "static" == n.css("position") && (o.position = "relative"),
                    n.css(o)
                });
            if (!this.length)
                return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, n) {
            if (arguments.length < 2) {
                var r = this[0],
                i = getComputedStyle(r, "");
                if (!r)
                    return;
                if ("string" == typeof e)
                    return r.style[T(e)] || i.getPropertyValue(e);
                if (G(e)) {
                    var o = {};
                    return j.each(G(e) ? e : [e], function (t, e) {
                        o[e] = r.style[T(e)] || i.getPropertyValue(e)
                    }),
                    o
                }
            }
            var a = "";
            if ("string" == t(e))
                n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                        this.style.removeProperty(c(e))
                    });
            else
                for (E in e)
                    e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function () {
                        this.style.removeProperty(c(E))
                    });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return t ? N.some.call(this, function (t) {
                return this.test(y(t))
            }, l(t)) : !1
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                S = [];
                var n = y(this),
                r = v(this, t, e, n);
                r.split(/\s+/g).forEach(function (t) {
                    j(this).hasClass(t) || S.push(t)
                }, this),
                S.length && y(this, n + (n ? " " : "") + S.join(" "))
            }) : this
        },
        removeClass: function (t) {
            return this.each(function (e) {
                return t === w ? y(this, "") : (S = y(this), v(this, t, e, S).split(/\s+/g).forEach(function (t) {
                        S = S.replace(l(t), " ")
                    }), void y(this, S.trim()))
            })
        },
        toggleClass: function (t, e) {
            return t ? this.each(function (n) {
                var r = j(this),
                i = v(this, t, n, y(this));
                i.split(/\s+/g).forEach(function (t) {
                    (e === w ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === w ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                }
                     : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function (t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === w ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                    this.scrollLeft = t
                }
                     : function () {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0],
                e = this.offsetParent(),
                n = this.offset(),
                r = M.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                }
                 : e.offset();
                return n.top -= parseFloat(j(t).css("margin-top")) || 0,
                n.left -= parseFloat(j(t).css("margin-left")) || 0,
                r.top += parseFloat(j(e[0]).css("border-top-width")) || 0,
                r.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || A.body; t && !M.test(t.nodeName) && "static" == j(t).css("position"); )
                    t = t.offsetParent;
                return t
            })
        }
    },
    j.fn.detach = j.fn.remove,
    ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
        j.fn[t] = function (i) {
            var o,
            a = this[0];
            return i === w ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                a = j(this),
                a.css(t, v(this, i, e, a[t]()))
            })
        }
    }),
    F.forEach(function (e, n) {
        var r = n % 2;
        j.fn[e] = function () {
            var e,
            i,
            o = j.map(arguments, function (n) {
                    return e = t(n),
                    "object" == e || "array" == e || null == n ? n : X.fragment(n)
                }),
            a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
                i = r ? e : e.parentNode,
                e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = j.contains(A.documentElement, i);
                o.forEach(function (t) {
                    if (a)
                        t = t.cloneNode(!0);
                    else if (!i)
                        return j(t).remove();
                    i.insertBefore(t, e),
                    s && b(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        j.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return j(t)[e](this),
            this
        }
    }),
    X.Z.prototype = j.fn,
    X.uniq = C,
    X.deserializeValue = x,
    j.zepto = X,
    j
}
();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }
    function n(t, n, o, a) {
        if (n = r(n), n.ns)
            var s = i(n.ns);
        return (v[e(t)] || []).filter(function (t) {
            return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
        })
    }
    function r(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function i(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(t, e) {
        return t.del && !y && t.e in x || !!e
    }
    function a(t) {
        return b[t] || y && x[t] || t
    }
    function s(n, i, s, u, l, h, p) {
        var d = e(n),
        m = v[d] || (v[d] = []);
        i.split(/\s/).forEach(function (e) {
            if ("ready" == e)
                return t(document).ready(s);
            var i = r(e);
            i.fn = s,
            i.sel = l,
            i.e in b && (s = function (e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) : void 0
            }),
            i.del = h;
            var d = h || s;
            i.proxy = function (t) {
                if (t = c(t), !t.isImmediatePropagationStopped()) {
                    t.data = u;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()),
                    e
                }
            },
            i.i = m.length,
            m.push(i),
            "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
        })
    }
    function u(t, r, i, s, u) {
        var c = e(t);
        (r || "").split(/\s/).forEach(function (e) {
            n(t, e, i, s).forEach(function (e) {
                delete v[c][e.i],
                "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }
    function c(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(S, function (t, r) {
                var i = n[t];
                e[t] = function () {
                    return this[r] = w,
                    i && i.apply(n, arguments)
                },
                e[r] = E
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)),
        e
    }
    function l(t) {
        var e,
        n = {
            originalEvent: t
        };
        for (e in t)
            j.test(e) || t[e] === f || (n[e] = t[e]);
        return c(n, t)
    }
    var f,
    h = 1,
    p = Array.prototype.slice,
    d = t.isFunction,
    m = function (t) {
        return "string" == typeof t
    },
    v = {},
    g = {},
    y = "onfocusin" in window,
    x = {
        focus: "focusin",
        blur: "focusout"
    },
    b = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents",
    t.event = {
        add: s,
        remove: u
    },
    t.proxy = function (n, r) {
        var i = 2 in arguments && p.call(arguments, 2);
        if (d(n)) {
            var o = function () {
                return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
            };
            return o._zid = e(n),
            o
        }
        if (m(r))
            return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
        throw new TypeError("expected function")
    },
    t.fn.bind = function (t, e, n) {
        return this.on(t, e, n)
    },
    t.fn.unbind = function (t, e) {
        return this.off(t, e)
    },
    t.fn.one = function (t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var w = function () {
        return !0
    },
    E = function () {
        return !1
    },
    j = /^([A-Z]|returnValue$|layer[XY]$)/,
    S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, n) {
        return this.on(e, t, n)
    },
    t.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n)
    },
    t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    },
    t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    },
    t.fn.on = function (e, n, r, i, o) {
        var a,
        c,
        h = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
                h.on(t, n, r, e, o)
            }), h) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = f), (d(r) || r === !1) && (i = r, r = f), i === !1 && (i = E), h.each(function (f, h) {
                o && (a = function (t) {
                    return u(h, t.type, i),
                    i.apply(this, arguments)
                }),
                n && (c = function (e) {
                    var r,
                    o = t(e.target).closest(n, h).get(0);
                    return o && o !== h ? (r = t.extend(l(e), {
                                currentTarget: o,
                                liveFired: h
                            }), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) : void 0
                }),
                s(h, e, i, r, n, c || a)
            }))
    },
    t.fn.off = function (e, n, r) {
        var i = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
                i.off(t, n, e)
            }), i) : (m(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = E), i.each(function () {
                u(this, e, r, n)
            }))
    },
    t.fn.trigger = function (e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e),
        e._args = n,
        this.each(function () {
            "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    },
    t.fn.triggerHandler = function (e, r) {
        var i,
        o;
        return this.each(function (a, s) {
            i = l(m(e) ? t.Event(e) : e),
            i._args = r,
            i.target = s,
            t.each(n(s, e.type || e), function (t, e) {
                return o = e.proxy(i),
                i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        o
    },
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }),
    ["focus", "blur"].forEach(function (e) {
        t.fn[e] = function (t) {
            return t ? this.bind(e, t) : this.each(function () {
                try {
                    this[e]()
                } catch (t) {}
            }),
            this
        }
    }),
    t.Event = function (t, e) {
        m(t) || (e = t, t = e.type);
        var n = document.createEvent(g[t] || "Events"),
        r = !0;
        if (e)
            for (var i in e)
                "bubbles" == i ? r = !!e[i] : n[i] = e[i];
        return n.initEvent(t, r, !0),
        c(n)
    }
}
(Zepto), function (t) {
    function e(e, n, r) {
        var i = t.Event(n);
        return t(e).trigger(i, r),
        !i.isDefaultPrevented()
    }
    function n(t, n, r, i) {
        return t.global ? e(n || y, r, i) : void 0
    }
    function r(e) {
        e.global && 0 === t.active++ && n(e, null, "ajaxStart")
    }
    function i(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }
    function o(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, r, "ajaxSend", [t, e])
    }
    function a(t, e, r, i) {
        var o = r.context,
        a = "success";
        r.success.call(o, t, a, e),
        i && i.resolveWith(o, [t, a, e]),
        n(r, o, "ajaxSuccess", [e, r, t]),
        u(a, e, r)
    }
    function s(t, e, r, i, o) {
        var a = i.context;
        i.error.call(a, r, e, t),
        o && o.rejectWith(a, [r, e, t]),
        n(i, a, "ajaxError", [r, i, t || e]),
        u(e, r, i)
    }
    function u(t, e, r) {
        var o = r.context;
        r.complete.call(o, e, t),
        n(r, o, "ajaxComplete", [e, r]),
        i(r)
    }
    function c() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == j ? "html" : t == E ? "json" : b.test(t) ? "script" : w.test(t) && "xml") || "text"
    }
    function f(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function h(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }
    function p(e, n, r, i) {
        return t.isFunction(n) && (i = r, r = n, n = void 0),
        t.isFunction(r) || (i = r, r = void 0), {
            url: e,
            data: n,
            success: r,
            dataType: i
        }
    }
    function d(e, n, r, i) {
        var o,
        a = t.isArray(n),
        s = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u),
            i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"),
            !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
        })
    }
    var m,
    v,
    g = 0,
    y = window.document,
    x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    b = /^(?:text|application)\/javascript/i,
    w = /^(?:text|application)\/xml/i,
    E = "application/json",
    j = "text/html",
    S = /^\s*$/;
    t.active = 0,
    t.ajaxJSONP = function (e, n) {
        if (!("type" in e))
            return t.ajax(e);
        var r,
        i,
        u = e.jsonpCallback,
        c = (t.isFunction(u) ? u() : u) || "jsonp" + ++g,
        l = y.createElement("script"),
        f = window[c],
        h = function (e) {
            t(l).triggerHandler("error", e || "abort")
        },
        p = {
            abort: h
        };
        return n && n.promise(p),
        t(l).on("load error", function (o, u) {
            clearTimeout(i),
            t(l).off().remove(),
            "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n),
            window[c] = f,
            r && t.isFunction(f) && f(r[0]),
            f = r = void 0
        }),
        o(p, e) === !1 ? (h("abort"), p) : (window[c] = function () {
            r = arguments
        }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
                        h("timeout")
                    }, e.timeout)), p)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: E,
            xml: "application/xml, text/xml",
            html: j,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function (e) {
        var n = t.extend({}, e || {}),
        i = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings)
            void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
        r(n),
        n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
        n.url || (n.url = window.location.toString()),
        h(n);
        var u = n.dataType,
        p = /\?.+=\?/.test(n.url);
        if (p && (u = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (n.url = f(n.url, "_=" + Date.now())), "jsonp" == u)
            return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, i);
        var d,
        g = n.accepts[u],
        y = {},
        x = function (t, e) {
            y[t.toLowerCase()] = [t, e]
        },
        b = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
        w = n.xhr(),
        E = w.setRequestHeader;
        if (i && i.promise(w), n.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", g || "*/*"), (g = n.mimeType || g) && (g.indexOf(",") > -1 && (g = g.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(g)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && x("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
            for (v in n.headers)
                x(v, n.headers[v]);
        if (w.setRequestHeader = x, w.onreadystatechange = function () {
            if (4 == w.readyState) {
                w.onreadystatechange = c,
                clearTimeout(d);
                var e,
                r = !1;
                if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == b) {
                    u = u || l(n.mimeType || w.getResponseHeader("content-type")),
                    e = w.responseText;
                    try {
                        "script" == u ? (1, eval)(e) : "xml" == u ? e = w.responseXML : "json" == u && (e = S.test(e) ? null : t.parseJSON(e))
                    } catch (o) {
                        r = o
                    }
                    r ? s(r, "parsererror", w, n, i) : a(e, w, n, i)
                } else
                    s(w.statusText || null, w.status ? "error" : "abort", w, n, i)
            }
        }, o(w, n) === !1)
            return w.abort(), s(null, "abort", w, n, i), w;
        if (n.xhrFields)
            for (v in n.xhrFields)
                w[v] = n.xhrFields[v];
        var j = "async" in n ? n.async : !0;
        w.open(n.type, n.url, j, n.username, n.password);
        for (v in y)
            E.apply(w, y[v]);
        return n.timeout > 0 && (d = setTimeout(function () {
                    w.onreadystatechange = c,
                    w.abort(),
                    s(null, "timeout", w, n, i)
                }, n.timeout)),
        w.send(n.data ? n.data : null),
        w
    },
    t.get = function () {
        return t.ajax(p.apply(null, arguments))
    },
    t.post = function () {
        var e = p.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    },
    t.getJSON = function () {
        var e = p.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    },
    t.fn.load = function (e, n, r) {
        if (!this.length)
            return this;
        var i,
        o = this,
        a = e.split(/\s/),
        s = p(e, n, r),
        u = s.success;
        return a.length > 1 && (s.url = a[0], i = a[1]),
        s.success = function (e) {
            o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e),
            u && u.apply(o, arguments)
        },
        t.ajax(s),
        this
    };
    var T = encodeURIComponent;
    t.param = function (t, e) {
        var n = [];
        return n.add = function (t, e) {
            this.push(T(t) + "=" + T(e))
        },
        d(n, t, e),
        n.join("&").replace(/%20/g, "+")
    }
}
(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var e,
        n = [];
        return t([].slice.call(this.get(0).elements)).each(function () {
            e = t(this);
            var r = e.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != r && "reset" != r && "button" != r && ("radio" != r && "checkbox" != r || this.checked) && n.push({
                name: e.attr("name"),
                value: e.val()
            })
        }),
        n
    },
    t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    },
    t.fn.submit = function (e) {
        if (e)
            this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}
(Zepto), function (t) {
    "__proto__" in {}
     || t.extend(t.zepto, {
        Z: function (e, n) {
            return e = e || [],
            t.extend(e, t.fn),
            e.selector = n || "",
            e.__Z = !0,
            e
        },
        isZ: function (e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (e) {
        var n = getComputedStyle;
        window.getComputedStyle = function (t) {
            try {
                return n(t)
            } catch (e) {
                return null
            }
        }
    }
}
(Zepto); ;
!function (i) {
    function e(i) {
        var e = this.os = {},
        a = this.browser = {},
        o = i.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        t = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = !!i.match(/\(Macintosh\; Intel /),
        h = i.match(/(iPad).*OS\s([\d_]+)/),
        c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        s = !h && i.match(/(iPhone\sOS)\s([\d_]+)/),
        n = i.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        d = i.match(/Windows Phone ([\d.]+)/),
        m = n && i.match(/TouchPad/),
        l = i.match(/Kindle\/([\d.]+)/),
        b = i.match(/Silk\/([\d._]+)/),
        v = i.match(/(BlackBerry).*Version\/([\d.]+)/),
        p = i.match(/(BB10).*Version\/([\d.]+)/),
        S = i.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        k = i.match(/PlayBook/),
        P = i.match(/Chrome\/([\d.]+)/) || i.match(/CriOS\/([\d.]+)/),
        f = i.match(/Firefox\/([\d.]+)/),
        w = i.match(/MSIE\s([\d.]+)/) || i.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        _ = !P && i.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        u = _ || i.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (a.webkit = !!o) && (a.version = o[1]),
        t && (e.android = !0, e.version = t[2]),
        s && !c && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")),
        h && (e.ios = e.ipad = !0, e.version = h[2].replace(/_/g, ".")),
        c && (e.ios = e.ipod = !0, e.version = c[3] ? c[3].replace(/_/g, ".") : null),
        d && (e.wp = !0, e.version = d[1]),
        n && (e.webos = !0, e.version = n[2]),
        m && (e.touchpad = !0),
        v && (e.blackberry = !0, e.version = v[2]),
        p && (e.bb10 = !0, e.version = p[2]),
        S && (e.rimtabletos = !0, e.version = S[2]),
        k && (a.playbook = !0),
        l && (e.kindle = !0, e.version = l[1]),
        b && (a.silk = !0, a.version = b[1]),
        !b && e.android && i.match(/Kindle Fire/) && (a.silk = !0),
        P && (a.chrome = !0, a.version = P[1]),
        f && (a.firefox = !0, a.version = f[1]),
        w && (a.ie = !0, a.version = w[1]),
        u && (r || e.ios) && (a.safari = !0, r && (a.version = u[1])),
        _ && (a.webview = !0),
        e.tablet = !!(h || k || t && !i.match(/Mobile/) || f && i.match(/Tablet/) || w && !i.match(/Phone/) && i.match(/Touch/)),
        e.phone = !(e.tablet || e.ipod || !(t || s || n || v || p || P && i.match(/Android/) || P && i.match(/CriOS\/([\d.]+)/) || f && i.match(/Mobile/) || w && i.match(/Touch/)))
    }
    e.call(i, navigator.userAgent),
    i.__detect = e
}
(Zepto); ;
!function (t, n) {
    function i(t) {
        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function e(t) {
        return a ? a + t : t.toLowerCase()
    }
    var a,
    o,
    s,
    r,
    f,
    u,
    c,
    d,
    l,
    m,
    p = "",
    h = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    },
    y = window.document,
    x = y.createElement("div"),
    b = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    g = {};
    t.each(h, function (t, i) {
        return x.style[t + "TransitionProperty"] !== n ? (p = "-" + t.toLowerCase() + "-", a = i, !1) : void 0
    }),
    o = p + "transform",
    g[s = p + "transition-property"] = g[r = p + "transition-duration"] = g[u = p + "transition-delay"] = g[f = p + "transition-timing-function"] = g[c = p + "animation-name"] = g[d = p + "animation-duration"] = g[m = p + "animation-delay"] = g[l = p + "animation-timing-function"] = "",
    t.fx = {
        off: a === n && x.style.transitionProperty === n,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: p,
        transitionEnd: e("TransitionEnd"),
        animationEnd: e("AnimationEnd")
    },
    t.fn.animate = function (i, e, a, o, s) {
        return t.isFunction(e) && (o = e, a = n, e = n),
        t.isFunction(a) && (o = a, a = n),
        t.isPlainObject(e) && (a = e.easing, o = e.complete, s = e.delay, e = e.duration),
        e && (e = ("number" == typeof e ? e : t.fx.speeds[e] || t.fx.speeds._default) / 1e3),
        s && (s = parseFloat(s) / 1e3),
        this.anim(i, e, a, o, s)
    },
    t.fn.anim = function (e, a, p, h, y) {
        var x,
        w,
        E,
        v = {},
        T = "",
        L = this,
        P = t.fx.transitionEnd,
        j = !1;
        if (a === n && (a = t.fx.speeds._default / 1e3), y === n && (y = 0), t.fx.off && (a = 0), "string" == typeof e)
            v[c] = e, v[d] = a + "s", v[m] = y + "s", v[l] = p || "linear", P = t.fx.animationEnd;
        else {
            w = [];
            for (x in e)
                b.test(x) ? T += x + "(" + e[x] + ") " : (v[x] = e[x], w.push(i(x)));
            T && (v[o] = T, w.push(o)),
            a > 0 && "object" == typeof e && (v[s] = w.join(", "), v[r] = a + "s", v[u] = y + "s", v[f] = p || "linear")
        }
        return E = function (n) {
            if ("undefined" != typeof n) {
                if (n.target !== n.currentTarget)
                    return;
                t(n.target).unbind(P, E)
            } else
                t(this).unbind(P, E);
            j = !0,
            t(this).css(g),
            h && h.call(this)
        },
        a > 0 && (this.bind(P, E), setTimeout(function () {
                j || E.call(L)
            }, 1e3 * a + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(v),
        0 >= a && setTimeout(function () {
            L.each(function () {
                E.call(this)
            })
        }, 0),
        this
    },
    x = null
}
(Zepto); ;
!function (e) {
    function t(e, t, n, o) {
        return Math.abs(e - t) >= Math.abs(n - o) ? e - t > 0 ? "Left" : "Right" : n - o > 0 ? "Up" : "Down"
    }
    function n() {
        p = null,
        g.last && (g.el.trigger("longTap"), g = {})
    }
    function o() {
        p && clearTimeout(p),
        p = null
    }
    function i() {
        u && clearTimeout(u),
        l && clearTimeout(l),
        c && clearTimeout(c),
        p && clearTimeout(p),
        u = l = c = p = null,
        g = {}
    }
    function r(e) {
        return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
    }
    function a(e, t) {
        return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
    }
    var u,
    l,
    c,
    p,
    s,
    g = {},
    T = 750;
    e(document).ready(function () {
        var f,
        h,
        w,
        y,
        d = 0,
        m = 0;
        "MSGesture" in window && (s = new MSGesture, s.target = document.body),
        e(document).bind("MSGestureEnd", function (e) {
            var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
            t && (g.el && g.el.trigger("swipe"), g.el && g.el.trigger("swipe" + t))
        }).on("touchstart MSPointerDown pointerdown", function (t) {
            (!(y = a(t, "down")) || r(t)) && (w = y ? t : t.touches[0], t.touches && 1 === t.touches.length && g.x2 && (g.x2 = void 0, g.y2 = void 0), f = Date.now(), h = f - (g.last || f), g.el = e("tagName" in w.target ? w.target : w.target.parentNode), u && clearTimeout(u), g.x1 = w.pageX, g.y1 = w.pageY, h > 0 && 250 >= h && (g.isDoubleTap = !0), g.last = f, p = setTimeout(n, T), s && y && s.addPointer(t.pointerId))
        }).on("touchmove MSPointerMove pointermove", function (e) {
            (!(y = a(e, "move")) || r(e)) && (w = y ? e : e.touches[0], o(), g.x2 = w.pageX, g.y2 = w.pageY, d += Math.abs(g.x1 - g.x2), m += Math.abs(g.y1 - g.y2))
        }).on("touchend MSPointerUp pointerup", function (n) {
            (!(y = a(n, "up")) || r(n)) && (o(), g.x2 && Math.abs(g.x1 - g.x2) > 30 || g.y2 && Math.abs(g.y1 - g.y2) > 30 ? c = setTimeout(function () {
                        g.el && g.el.trigger("swipe"),
                        g.el && g.el.trigger("swipe" + t(g.x1, g.x2, g.y1, g.y2)),
                        g = {}
                    }, 0) : "last" in g && (30 > d && 30 > m ? l = setTimeout(function () {
                                var t = e.Event("tap");
                                t.cancelTouch = i,
                                g.el && g.el.trigger(t),
                                g.isDoubleTap ? (g.el && g.el.trigger("doubleTap"), g = {}) : u = setTimeout(function () {
                                        u = null,
                                        g.el && g.el.trigger("singleTap"),
                                        g = {}
                                    }, 250)
                            }, 0) : g = {}), d = m = 0)
        }).on("touchcancel MSPointerCancel pointercancel", i),
        e(window).on("scroll", i)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
        e.fn[t] = function (e) {
            return this.on(t, e)
        }
    })
}
(Zepto); ;
!function (t, e) {
    t.ES6Promise = e()
}
(this, function () {
    "use strict";
    function t(t) {
        return "function" == typeof t || "object" == typeof t && null !== t
    }
    function e(t) {
        return "function" == typeof t
    }
    function n(t) {
        I = t
    }
    function r(t) {
        J = t
    }
    function o() {
        return function () {
            return process.nextTick(a)
        }
    }
    function i() {
        return "undefined" != typeof H ? function () {
            H(a)
        }
         : c()
    }
    function s() {
        var t = 0,
        e = new V(a),
        n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }),
        function () {
            n.data = t = ++t % 2
        }
    }
    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
        function () {
            return t.port2.postMessage(0)
        }
    }
    function c() {
        var t = setTimeout;
        return function () {
            return t(a, 1)
        }
    }
    function a() {
        for (var t = 0; G > t; t += 2) {
            var e = $[t],
            n = $[t + 1];
            e(n),
            $[t] = void 0,
            $[t + 1] = void 0
        }
        G = 0
    }
    function f() {
        try {
            var t = require,
            e = t("vertx");
            return H = e.runOnLoop || e.runOnContext,
            i()
        } catch (n) {
            return c()
        }
    }
    function l(t, e) {
        var n = arguments,
        r = this,
        o = new this.constructor(p);
        void 0 === o[ee] && k(o);
        var i = r._state;
        return i ? !function () {
            var t = n[i - 1];
            J(function () {
                return C(i, o, t, r._result)
            })
        }
        () : E(r, o, t, e),
        o
    }
    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e)
            return t;
        var n = new e(p);
        return g(n, t),
        n
    }
    function p() {}
    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }
    function _() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function d(t) {
        try {
            return t.then
        } catch (e) {
            return ie.error = e,
            ie
        }
    }
    function y(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }
    function m(t, e, n) {
        J(function (t) {
            var r = !1,
            o = y(n, e, function (n) {
                    r || (r = !0, e !== n ? g(t, n) : S(t, n))
                }, function (e) {
                    r || (r = !0, j(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, j(t, o))
        }, t)
    }
    function b(t, e) {
        e._state === re ? S(t, e._result) : e._state === oe ? j(t, e._result) : E(e, void 0, function (e) {
            return g(t, e)
        }, function (e) {
            return j(t, e)
        })
    }
    function w(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === ie ? (j(t, ie.error), ie.error = null) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n)
    }
    function g(e, n) {
        e === n ? j(e, v()) : t(n) ? w(e, n, d(n)) : S(e, n)
    }
    function A(t) {
        t._onerror && t._onerror(t._result),
        T(t)
    }
    function S(t, e) {
        t._state === ne && (t._result = e, t._state = re, 0 !== t._subscribers.length && J(T, t))
    }
    function j(t, e) {
        t._state === ne && (t._state = oe, t._result = e, J(A, t))
    }
    function E(t, e, n, r) {
        var o = t._subscribers,
        i = o.length;
        t._onerror = null,
        o[i] = e,
        o[i + re] = n,
        o[i + oe] = r,
        0 === i && t._state && J(T, t)
    }
    function T(t) {
        var e = t._subscribers,
        n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
                r = e[s], o = e[s + n], r ? C(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }
    function M() {
        this.error = null
    }
    function P(t, e) {
        try {
            return t(e)
        } catch (n) {
            return se.error = n,
            se
        }
    }
    function C(t, n, r, o) {
        var i = e(r),
        s = void 0,
        u = void 0,
        c = void 0,
        a = void 0;
        if (i) {
            if (s = P(r, o), s === se ? (a = !0, u = s.error, s.error = null) : c = !0, n === s)
                return void j(n, _())
        } else
            s = o, c = !0;
        n._state !== ne || (i && c ? g(n, s) : a ? j(n, u) : t === re ? S(n, s) : t === oe && j(n, s))
    }
    function O(t, e) {
        try {
            e(function (e) {
                g(t, e)
            }, function (e) {
                j(t, e)
            })
        } catch (n) {
            j(t, n)
        }
    }
    function x() {
        return ue++
    }
    function k(t) {
        t[ee] = ue++,
        t._state = void 0,
        t._result = void 0,
        t._subscribers = []
    }
    function Y(t, e) {
        this._instanceConstructor = t,
        this.promise = new t(p),
        this.promise[ee] || k(this.promise),
        B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q())
    }
    function q() {
        return new Error("Array Methods must be provided an Array")
    }
    function F(t) {
        return new Y(this, t).promise
    }
    function D(t) {
        var e = this;
        return new e(B(t) ? function (n, r) {
            for (var o = t.length, i = 0; o > i; i++)
                e.resolve(t[i]).then(n, r)
        }
             : function (t, e) {
            return e(new TypeError("You must pass an array to race."))
        })
    }
    function K(t) {
        var e = this,
        n = new e(p);
        return j(n, t),
        n
    }
    function L() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }
    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }
    function U(t) {
        this[ee] = x(),
        this._result = this._state = void 0,
        this._subscribers = [],
        p !== t && ("function" != typeof t && L(), this instanceof U ? O(this, t) : N())
    }
    function W() {
        var t = void 0;
        if ("undefined" != typeof global)
            t = global;
        else if ("undefined" != typeof self)
            t = self;
        else
            try {
                t = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast)
                return
        }
        t.Promise = U
    }
    var z = void 0;
    z = Array.isArray ? Array.isArray : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    var B = z,
    G = 0,
    H = void 0,
    I = void 0,
    J = function (t, e) {
        $[G] = t,
        $[G + 1] = e,
        G += 2,
        2 === G && (I ? I(a) : te())
    },
    Q = "undefined" != typeof window ? window : void 0,
    R = Q || {},
    V = R.MutationObserver || R.WebKitMutationObserver,
    X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}
    .toString.call(process),
    Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
    $ = new Array(1e3),
    te = void 0;
    te = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
    var ee = Math.random().toString(36).substring(16),
    ne = void 0,
    re = 1,
    oe = 2,
    ie = new M,
    se = new M,
    ue = 0;
    return Y.prototype._enumerate = function () {
        for (var t = this.length, e = this._input, n = 0; this._state === ne && t > n; n++)
            this._eachEntry(e[n], n)
    },
    Y.prototype._eachEntry = function (t, e) {
        var n = this._instanceConstructor,
        r = n.resolve;
        if (r === h) {
            var o = d(t);
            if (o === l && t._state !== ne)
                this._settledAt(t._state, e, t._result);
            else if ("function" != typeof o)
                this._remaining--, this._result[e] = t;
            else if (n === U) {
                var i = new n(p);
                w(i, t, o),
                this._willSettleAt(i, e)
            } else
                this._willSettleAt(new n(function (e) {
                        return e(t)
                    }), e)
        } else
            this._willSettleAt(r(t), e)
    },
    Y.prototype._settledAt = function (t, e, n) {
        var r = this.promise;
        r._state === ne && (this._remaining--, t === oe ? j(r, n) : this._result[e] = n),
        0 === this._remaining && S(r, this._result)
    },
    Y.prototype._willSettleAt = function (t, e) {
        var n = this;
        E(t, void 0, function (t) {
            return n._settledAt(re, e, t)
        }, function (t) {
            return n._settledAt(oe, e, t)
        })
    },
    U.all = F,
    U.race = D,
    U.resolve = h,
    U.reject = K,
    U._setScheduler = n,
    U._setAsap = r,
    U._asap = J,
    U.prototype = {
        constructor: U,
        then: l,
        "catch": function (t) {
            return this.then(null, t)
        }
    },
    U.polyfill = W,
    U.Promise = U,
    U.polyfill(),
    U
}); ;
!function (e) {
    var n = "undefined" == typeof module ? e.baidu = e.baidu || {}
     : module.exports;
    n.template = function (n, a) {
        var r = function () {
            if (!e.document)
                return t._compile(n);
            var a = document.getElementById(n);
            if (a) {
                if (t.cache[n])
                    return t.cache[n];
                var r = /^(textarea|input)$/i.test(a.nodeName) ? a.value : a.innerHTML;
                return t._compile(r)
            }
            return t._compile(n)
        }
        (),
        p = t._isObject(a) ? r(a) : r;
        return r = null,
        p
    };
    var t = n.template;
    t.versions = t.versions || [],
    t.versions.push("1.0.6"),
    t.cache = {},
    t.LEFT_DELIMITER = t.LEFT_DELIMITER || "<%",
    t.RIGHT_DELIMITER = t.RIGHT_DELIMITER || "%>",
    t.ESCAPE = !0,
    t._encodeHTML = function (e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    },
    t._encodeReg = function (e) {
        return String(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    },
    t._encodeEventHTML = function (e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    },
    t._compile = function (e) {
        var n = "var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(var name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + t._analysisStr(e) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", n)
    },
    t._isObject = function (e) {
        return "function" == typeof e || !(!e || "object" != typeof e)
    },
    t._analysisStr = function (e) {
        var n = t.LEFT_DELIMITER,
        a = t.RIGHT_DELIMITER,
        r = t._encodeReg(n),
        p = t._encodeReg(a);
        return e = String(e).replace(new RegExp("(" + r + "[^" + p + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(r + "\\*.*?\\*" + p, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(r + "(?:(?!" + p + ")[\\s\\S])*" + p + "|((?:(?!" + r + ")[\\s\\S])+)", "g"), function (e, n) {
                var t = "";
                if (n)
                    for (t = n.replace(/\\/g, "&#92;").replace(/'/g, "&#39;"); /<[^<]*?&#39;[^<]*?>/g.test(t); )
                        t = t.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2");
                else
                    t = e;
                return t
            }),
        e = e.replace(new RegExp("(" + r + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + p, "g"), "$1;" + a).replace(new RegExp("(" + r + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + p + "]*?);[\\s]*?" + p, "g"), "$1" + a).split(n).join("	"),
        e = t.ESCAPE ? e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'") : e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':$1,'"),
        e = e.replace(new RegExp("\\t:h=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("	").join("');").split(a).join("_template_fun_array.push('").split("\r").join("\\'")
    }
}
(window); ;
!function () {
    function t(t, e) {
        if (t instanceof Array) {
            for (var n = 0, i = t.length; i > n; n++)
                if (e.call(t[n], t[n], n) === !1)
                    return
        } else
            for (var n in t)
                if (t.hasOwnProperty(n) && e.call(t[n], t[n], n) === !1)
                    return
    }
    function e(t, e) {
        if (Array.prototype.indexOf)
            return t.indexOf(e);
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return -1
    }
    function n(e, n) {
        if (Array.prototype.filter)
            return e.filter(n);
        var i = [];
        return t(e, function (t, e, a) {
            n(t, e, a) && i.push(t)
        }),
        i
    }
    function i(t, e) {
        return n(e, function (e) {
            return !r.loadingPaths[e] || !a(r.cache[e], t, [])
        })
    }
    function a(t, n, i) {
        if (!t || t._loaded)
            return !1;
        i.push(t.name);
        var s = t.deps || [];
        if (s.length) {
            if (e(s, n) > -1)
                return !0;
            for (var o = 0; o < s.length; o++)
                if (e(i, s[o]) < 0 && a(r.cache[s[o]], n, i))
                    return !0;
            return !1
        }
        return !1
    }
    function r(t, e) {
        this.name = e,
        this.path = t,
        this.fn = null,
        this.exports = {},
        this._loaded = !1,
        this._requiredStack = [],
        this._readyStack = [],
        r.cache[this.name] = this
    }
    function s(t) {
        var e = d(t);
        return r.initingPaths[t] || e.init(),
        e.exports
    }
    function o(e) {
        var n = !0;
        return t(e, function (t) {
            return t in r.loadedPaths ? void 0 : n = !1
        }),
        n
    }
    function h(t) {
        return c.baseUrl ? c.baseUrl + t : t
    }
    function d(t) {
        var e = t.indexOf(":") > -1 ? t : h(t);
        return r.cache[t] ? r.cache[t] : new r(e, t)
    }
    var u = {
        version: "2.0.0",
        debug: !1
    },
    c = {
        baseUrl: void 0
    };
    r.loadedPaths = {},
    r.loadingPaths = {},
    r.initingPaths = {},
    r.cache = {},
    r.paths = {},
    r.moduleFileMap = {},
    r.requiredPaths = {},
    r.lazyLoadPaths = {},
    r.prototype = {
        init: function () {
            if (!this._inited) {
                if (this._inited = !0, !this.fn)
                    throw new Error('Module "' + this.name + '" not found!');
                var t;
                r.initingPaths[this.name] = !0,
                (t = this.fn.call(null, s, this.exports)) && (this.exports = t),
                r.initingPaths[this.name] = !1
            }
        },
        load: function () {
            r.loadingPaths[this.path] = !0;
            var t = r.moduleFileMap[this.name] || this.path;
            l.create({
                src: t
            })
        },
        lazyLoad: function () {
            var t = this.name,
            e = this.path;
            r.lazyLoadPaths[t] ? (this.define(), delete r.lazyLoadPaths[t]) : r.loadedPaths[e] ? this.triggerStack() : r.loadingPaths[e] || (r.requiredPaths[this.name] = !0, this.load())
        },
        ready: function (t, e) {
            var n = e ? this._requiredStack : this._readyStack;
            t ? this._loaded ? (this.init(), t()) : n.push(t) : (this._loaded = !0, r.loadedPaths[this.path] = !0, delete r.loadingPaths[this.path], this.triggerStack())
        },
        triggerStack: function () {
            this._readyStack.length > 0 && (this.init(), t(this._readyStack, function (t) {
                    t.doing || (t.doing = !0, t())
                }), this._readyStack = []),
            this._requiredStack.length > 0 && (t(this._requiredStack, function (t) {
                    t.doing || (t.doing = !0, t())
                }), this._requiredStack = [])
        },
        define: function () {
            var e = this,
            n = this.deps,
            a = [];
            !n && u.debug && (this.deps = getDependents(e.fn)),
            n = i(e.path, this.deps),
            n.length ? (r.loadingPaths[this.path] = !0, t(n, function (t) {
                    var e = d(t);
                    a.push(e.path)
                }), t(n, function (t) {
                    var n = d(t);
                    n.ready(function () {
                        o(a) && e.ready()
                    }, !0),
                    n.lazyLoad()
                })) : this.ready()
        }
    };
    var l = {
        create: function (e) {
            if (!(e.src in this._paths)) {
                this._paths[e.src] = !0,
                t(this._rules, function (t) {
                    t.call(null, e)
                });
                var n = document.getElementsByTagName("head")[0],
                i = document.createElement("script");
                i.type = e.type || "text/javascript",
                e.charset && (i.charset = e.charset),
                i.src = e.src,
                i.onload = i.onerror = i.onreadystatechange = function () {
                    this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i.onload = i.onerror = i.onreadystatechange = null, i.parentNode && !u.debug && n.removeChild(i), i = void 0, e.loaded && e.loaded())
                },
                n.insertBefore(i, n.firstChild)
            }
        },
        _paths: {},
        _rules: [],
        addPathRule: function (t) {
            this._rules.push(t)
        }
    };
    u.use = function (e, n) {
        "string" == typeof e && (e = [e]);
        var i = [],
        a = [];
        t(e, function (t, e) {
            a[e] = !1
        }),
        t(e, function (e, r) {
            var s = d(e);
            s.ready(function () {
                i[r] = s.exports,
                a[r] = !0;
                var e = !0;
                t(a, function (t) {
                    return t === !1 ? e = !1 : void 0
                }),
                n && e && n.apply(null, i)
            }),
            s.lazyLoad()
        })
    },
    s.async = u.use,
    u.require = s,
    u.module = function (t, e, n) {
        var i = d(t);
        i.fn = e,
        i.deps = n || [],
        r.requiredPaths[t] ? i.define() : r.lazyLoadPaths[t] = !0
    },
    u.pathRule = function (t) {
        l.addPathRule(t)
    },
    u._fileMap = function (e, n) {
        "object" == typeof e ? t(e, function (t, e) {
            u._fileMap(e, t)
        }) : ("string" == typeof n && (n = [n]), t(n, function (t) {
                r.moduleFileMap[t] = e
            }))
    },
    u.config = function (t) {
        var e = t.baseUrl;
        "string" == typeof e && (e && "/" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), c.baseUrl = e)
    },
    "F" in window || (window.F = u)
}
(); ;
var _ = _ || {};
$.extend(_, function () {
    var t = {
        debug: !1,
        eventPool: $({}),
        observe: function () {
            this.eventPool.bind.apply(this.eventPool, arguments)
        },
        fire: function () {
            this.eventPool.trigger.apply(this.eventPool, arguments)
        },
        stopObserving: function () {
            this.eventPool.unbind.apply(this.eventPool, arguments)
        }
    },
    e = function (t) {
        t.hasOwnProperty("initial") && $.isFunction(t.initial) || (t.initial = new Function);
        var n = function (t) {
            var e = {
                noMethod: {},
                method: {}
            };
            for (var n in t)
                "prototype" != n && ($.isFunction(t[n]) ? e.method[n] = t[n] : e.noMethod[n] = $.isArray(t[n]) ? Array.prototype.slice.call(t[n], 0) : $.isPlainObject(t[n]) ? $.extend({}, t[n]) : t[n]);
            return e
        },
        r = function () {
            var e = n(t);
            $.extend(this, e.noMethod),
            r.prototype.initial && $.isFunction(r.prototype.initial) && r.prototype.initial.apply(this, arguments)
        };
        return r.extend = function (t) {
            var n = r.prototype,
            i = {};
            $.extend(i, n, t);
            var o = e(i);
            return $.extend(o.prototype, {
                __parent__: function (t) {
                    var e = this;
                    if (n.hasOwnProperty(t))
                        return $.isFunction(n[t]) ? function () {
                            n[t].apply(e, arguments)
                        }
                     : n[t]
                },
                __super__: function () {
                    return this.__parent__("initial").apply(this, arguments)
                }
            }),
            o
        },
        $.extend(r.prototype, t, {
            prototype: r.prototype
        }),
        r
    },
    n = e({
            type: "",
            target: null,
            initial: function (t, e) {
                this.type = t,
                this.target = e
            }
        }),
    r = e({
            _eventStack: {},
            initial: function () {},
            bind: function (t, e, n) {
                this._eventStack.hasOwnProperty(t) || (this._eventStack[t] = []),
                this._eventStack[t].push({
                    handler: e,
                    context: n
                })
            },
            unbind: function (t, e) {
                if (this._eventStack.hasOwnProperty(t)) {
                    if (!e || !$.isFunction(e))
                        return void delete this._eventStack[t];
                    for (var n = this._eventStack[t], r = 0, i = n.length; i > r; r++)
                        if (n[r].handler == e) {
                            n.splice(r, 1);
                            break
                        }
                }
            },
            trigger: function (t) {
                if (this._eventStack.hasOwnProperty(t) && this._eventStack[t].length) {
                    var e = new n(t, this),
                    r = Array.prototype.slice.call(arguments, 0),
                    i = [];
                    r.shift(),
                    r = [e].concat(r),
                    this._eventStack[t] && (i = Array.prototype.slice.call(this._eventStack[t]));
                    for (var o = 0, a = i, s = i.length; s > o; o++)
                        if (a && a[o]) {
                            var u = a[o],
                            c = u.handler,
                            l = u.context || null;
                            c && $.isFunction(c) && c.apply(l, r)
                        }
                }
            },
            observe: function () {
                t.observe.apply(t, arguments)
            },
            stopObserving: function () {
                t.stopObserving.apply(t, arguments)
            },
            fire: function () {
                t.fire.apply(t, arguments)
            }
        }),
    i = {
        component: ["component"],
        widget: ["widget"],
        controller: []
    },
    o = {
        component: ["component", "widget"],
        widget: ["component", "widget"],
        controller: ["component", "widget"]
    },
    a = {},
    s = /[^\/]*$/,
    u = function (t) {
        var e = function (e) {
            return t.apply(this, e)
        };
        return e.prototype = t.prototype,
        function () {
            return new e(arguments)
        }
    },
    c = {
        define: function (t) {
            if (t && t.hasOwnProperty("path") && t.hasOwnProperty("sub")) {
                var e = t.path,
                n = [],
                r = [],
                i = null,
                o = l.getModuleAttr(e);
                if (l.checkAndInitAlias(t), t.requires = l.convertPaths(t.requires, o), t.extend = l.convertAlias(t.extend, o), i = t.extend, r = t.requires, c._checkDeps(e, t), r && $.isArray(r) && r.length > 0)
                    for (var a = 0, s = r.length; s > a; a++)
                        n.push(l.getJsPath(r[a], o));
                i && "" != i && (i = l.getJsPath(i), n.push(i));
                var u = l.getJsPath(e);
                F.module(u, function (e, n) {
                    var r = $.extend({}, t.sub);
                    if (r.require = e, r.__attr = o, i) {
                        var a = e(i);
                        if (!a || !a.hasOwnProperty("cls"))
                            throw new Error("@ModuleFactroy : Superclass is not defined!");
                        n.cls = a.cls.extend(r)
                    } else
                        n.cls = l.extend(r)
                }, n)
            }
        },
        use: function (t, e, n, r) {
            var i = l.getModuleAttr(t);
            F.use(i.path, function (t) {
                var o,
                a,
                s;
                if (a = t.cls && u(t.cls) || null, s = $.isArray(e) ? e : [e], !a)
                    throw new Error("class is undefined! - " + i.path);
                o = a.apply(null, s),
                "widget" != i.type || "undefined" != typeof r && r === !1 || (window[i.scope] = window[i.scope] || {}, window[i.scope][i.module] = o),
                n && $.isFunction(n) && n.call(null, o)
            })
        },
        getInstance: function (t, e) {
            var n = l.getModuleAttr(t),
            r = (n.modulePath, c._checkGlobalInstance(t));
            r && "object" == typeof r ? e && $.isFunction(e) && e.call(null, r) : c.use(t, null, function (n) {
                n && "object" == typeof n && (c._addGlobalInstance(t, n), e && $.isFunction(e) && e.call(null, n))
            })
        },
        _checkGlobalInstance: function (t) {
            var e = l.getModuleAttr(t),
            n = e.modulePath;
            window.__moduleInstances__ || (window.__moduleInstances__ = {});
            var r = window.__moduleInstances__[n];
            return r ? r : null
        },
        _addGlobalInstance: function (t, e) {
            var n = c._checkGlobalInstance(t);
            if (n)
                return !1;
            var r = l.getModuleAttr(t),
            i = r.modulePath;
            return window.__moduleInstances__[i] = e,
            !0
        },
        _checkDeps: function (t, e) {
            var n = l.getModuleAttr(t);
            if (!i.hasOwnProperty(n.type))
                throw new Error("@ModuleFactroy._checkDeps : module type error! - " + t);
            if (e.extend && "" != e.extend && $.inArray(l.getModuleAttr(e.extend).type, i[n.type]) < 0)
                throw new Error("@ModuleFactroy._checkDeps : Can not extends module! - " + t);
            if (e.hasOwnProperty("requires") && $.isArray(e.requires))
                for (var r = 0, a = e.requires.length; a > r; r++) {
                    var s = l.getModuleAttr(e.requires[r], n);
                    if (s.module != n.module && $.inArray(s.type, o[n.type]) < 0)
                        throw new Error("@ModuleFactroy._checkDeps : can not require module!")
                }
        }
    },
    l = r.extend({
            __attr: {},
            initial: function () {},
            requireInstance: function (t, e) {
                if (t = l.convertAlias(t, this.__attr), this.__checkUse(t), !this.require || !$.isFunction(this.require))
                    throw new Error("@Module : this._require is not defined!");
                var n = l.getModuleAttr(t, this.__attr),
                r = n.path,
                i = this.require(r),
                o = u(i.cls),
                a = $.isArray(e) ? e : [e],
                s = o.apply(null, a);
                return s
            },
            use: function () {
                var t = arguments[0],
                e = Array.prototype.slice.call(arguments, 1);
                return this.requireInstance.apply(this, [t, e])
            },
            getInstance: function (t) {
                if (t = l.convertAlias(t, this.__attr), this.__checkUse(t), !this.require || !$.isFunction(this.require))
                    throw new Error("@Module : this._require is not defined!");
                var e = (l.getModuleAttr(t, this.__attr), c._checkGlobalInstance(t));
                return e && "object" == typeof e ? e : (e = this.requireInstance(t), c._addGlobalInstance(t, e), e)
            },
            requireInstanceAsync: function (t) {
                this.__checkUse(t),
                c.use.apply(null, arguments)
            },
            __checkUse: function (t) {
                if (t.indexOf("/") > 0) {
                    var e = l.getModuleAttr(t);
                    if ((e.scope != this.__attr.scope || e.type != this.__attr.type || e.module != this.__attr.module) && $.inArray(e.type, o[this.__attr.type]) < 0)
                        throw new Error("@Module : Can not use this Module!")
                }
            }
        });
    return l.checkAndInitAlias = function (t) {
        var e,
        n,
        r = t.path,
        i = r.match(s)[0];
        if (i !== r && "__alias" === i) {
            if (n = $.trim(r).split("/"), e = n[2], !t.sub.alias)
                throw new Error("@Module : __alias can not be used !");
            a[e] = t.sub.alias
        }
    },
    l.convertPaths = function (t, e) {
        var n = [];
        if ($.isArray(t))
            return $.each(t, function (t, r) {
                n.push(l.convertAlias(r, e))
            }), n
    },
    l.convertAlias = function (t, e) {
        var n,
        r;
        return e && t ? (n = e.module, r = a[n] || {}, r[t] && (t = r[t]), t) : t
    },
    l.getModuleAttr = function (t, e) {
        var n,
        r,
        i,
        o,
        a,
        s,
        u,
        c,
        p = "",
        h = "/";
        if (n = t.replace(/\/$/, "").split("/"), u = n.length, 1 == u && e)
            o = t, a = e.module, r = e.type, i = e.scope;
        else if (3 === u || 4 === u)
            r = n[1].toLowerCase(), a = n[2], i = n[0], o = u > 3 ? n[3] : n[2];
        else {
            if (!(u > 4))
                return !1;
            r = n[1].toLowerCase(),
            a = n[2],
            i = n[0];
            for (var d = 3; u - 1 > d; d++)
                p += n[d] + h;
            o = n[u - 1]
        }
        return o = l.nameToFile(o),
        s = (i + h + r + h + l.nameToFile(a) + h + p + o + ".js?class").toString(),
        c = (i + h + r + h + a + h + p + o).toString(), {
            scope: i,
            module: a,
            file: o,
            type: r,
            path: s,
            modulePath: c
        }
    },
    l.nameToFile = function (t) {
        return t.replace(/([a-z])([A-Z])/g, function () {
            return arguments[1] + "_" + arguments[2]
        }).toLowerCase()
    },
    l.getJsPath = function (t, e) {
        var n = l.getModuleAttr(t, e);
        return n.path
    }, {
        Module: {
            use: c.use,
            define: c.define,
            getInstance: c.getInstance
        },
        Class: e,
        Dispatcher: r,
        MessageManager: t
    }
}
    ()); ;
!function () {
    function n(n) {
        this.callbacks = "undefined" != typeof n && n.callbacks ? n.callbacks : {}
    }
    var t = t || {},
    e = /\s+/,
    p = Array.prototype.slice,
    i = Object.prototype.toString,
    g = /^(\S+)\s*(.*)$/,
    o = function (n, t, e) {
        var p;
        return p = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            n.apply(this, arguments)
        },
        $.extend(p, n),
        s.prototype = n.prototype,
        p.prototype = new s,
        t && $.extend(p.prototype, t),
        e && $.extend(p, e),
        p.prototype.constructor = p,
        p.__super__ = n.prototype,
        p
    },
    r = function (n, t) {
        var e = o(this, n, t);
        return e.extend = this.extend,
        e
    },
    s = function () {};
    n.extend = r,
    $.extend(n.prototype, {
        on: function (n, t, p) {
            var i,
            g,
            o,
            r,
            s;
            if (!t)
                return this;
            for (n = n.split(e), i = this.callbacks; g = n.shift(); )
                s = i[g], o = s ? s.tail : {},
            o.next = r = {},
            o.context = p,
            o.callback = t,
            i[g] = {
                tail: r,
                next: s ? s.next : o
            };
            return this
        },
        off: function (n, p, i) {
            var g,
            o,
            r,
            s,
            a,
            l;
            if (o = this.callbacks) {
                if (!(n || p || i))
                    return delete this.callbacks, this;
                for (n = n ? n.split(e) : t.keys(o); g = n.shift(); )
                    if (r = o[g], delete o[g], r && (p || i))
                        for (s = r.tail; (r = r.next) !== s; )
                            a = r.callback, l = r.context, (p && a !== p || i && l !== i) && this.on(g, a, l);
                return this
            }
        },
        trigger: function (n) {
            var t,
            i,
            g,
            o,
            r,
            s,
            a;
            if (!(g = this.callbacks))
                return this;
            for (s = g.all, n = n.split(e), a = p.call(arguments, 1); t = n.shift(); ) {
                if (i = g[t])
                    for (o = i.tail; (i = i.next) !== o; )
                        i.callback.apply(i.context || this, a);
                if (i = s)
                    for (o = i.tail, r = [t].concat(a); (i = i.next) !== o; )
                        i.callback.apply(i.context || this, r)
            }
            return this
        }
    }),
    t.bind = $.proxy;
    var a = new n,
    l = 0,
    c = function (n) {
        var t = l++;
        return n ? n + t : t
    },
    u = function (n, t) {
        return n && n[t] ? $.isFunction(n[t]) ? n[t]() : n[t] : null
    },
    h = {};
    t.setGlobalParam = function (n) {
        "undefined" != typeof n && $.isPlainObject(n) && (h = $.extend({}, h, n))
    },
    t.getGlobalParam = function () {
        return h
    };
    var f = function (n) {
        this.cid = c("widget"),
        this._configure(n || {}),
        this.options.$el || (this.options.$el = $(document.body)),
        this.setElement(this.options.$el),
        this.initialize.apply(this, arguments)
    };
    $.extend(f.prototype, {
        initialize: function () {},
        on: function (n, t, e) {
            this.eventCenter.on(n, t, e)
        },
        off: function (n, t, e) {
            this.eventCenter.off(n, t, e)
        },
        trigger: function (n) {
            this.eventCenter.trigger(n)
        },
        setGlobalParam: function (n) {
            t.setGlobalParam(n)
        },
        getGlobalParam: function (n) {
            return t.getGlobalParam(n)
        },
        eventCenter: a,
        _configure: function (n) {
            this.options && (n = $.extend({}, this.options, n)),
            this.options = n || {},
            this.options.eventCenter && (this.eventCenter = this.options.eventCenter)
        },
        delegateEvents: function (n) {
            if (n || (n = u(this, "events"))) {
                this.undelegateEvents();
                for (var e in n) {
                    var p = n[e];
                    if ($.isFunction(p) || (p = this[n[e]]), !p)
                        throw new Error('Method "' + n[e] + '" does not exist');
                    var i = e.match(g),
                    o = i[1],
                    r = i[2];
                    p = t.bind(p, this),
                    o += ".delegateEvents" + this.cid,
                    "" === r ? this.$el.bind(o, p) : this.$el.delegate(r, o, p)
                }
            }
        },
        setElement: function (n, t) {
            return this.$el && this.undelegateEvents(),
            this.$el = "[object Array]" == i.call(n) ? n : $(n),
            this.el = this.$el[0],
            t !== !1 && this.delegateEvents(),
            this
        },
        remove: function () {
            return this.$el.remove(),
            this
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        destroy: function () {
            this.undelegateEvents(),
            this.remove()
        }
    }),
    f.extend = r,
    t.Widget = f,
    t.Events = n,
    t.extend = r,
    t.eventCenter = a,
    $(window).bind("resize orientationchange", function () {
        t.eventCenter.trigger("window_resize")
    }),
    $.extend(window._, t)
}
(), function () {
    $.sendAjaxError = function (n) {
        if (!n)
            return !1;
        var t = {
            logmsg: "",
            logmodulepath: "",
            loglinenum: "",
            logversion: "wowap"
        },
        e = $.extend(t, n);
        try {
            var p = "//tieba.baidu.com/mo/q/felog?" + $.param(e);
            $.ajaxJSONP({
                url: p
            }),
            $.track({
                task: "wap_jserror_statistic",
                locate: "wap_jserror",
                type: "click"
            }, {
                logmsg: e.logmsg,
                logmodulepath: e.logmodulepath,
                loglinenum: e.loglinenum
            })
        } catch (i) {}
    }
}
(), function () {
    $.transforEmoji = function (n, t) {
        var e = ["º", "\u25CE", "-", "\u25AB", "\u25C6", "\u2664", "\u2640", "\u2642", "\u10DA", "\u266C", "\u261E", "\u261C", "\u2706", "\u260E", "\u264B", "\u03A9", "\u2103", "\u2109", "\uD83D\uDE04", "\uD83D\uDE0D", "\uD83D\uDE18", "\uD83D\uDE1A", "\uD83D\uDE1C", "\uD83D\uDE33", "\uD83D\uDE01", "\uD83D\uDE1E", "\uD83D\uDE22", "\uD83D\uDE02", "\uD83D\uDE2B", "\uD83D\uDE28", "\uD83D\uDE31", "\uD83D\uDE21", "\uD83D\uDE37", "\uD83D\uDE32", "\uD83D\uDE08", "\uD83D\uDC37", "\uD83D\uDC36", "\uD83D\uDC11", "\uD83D\uDC35", "\uD83D\uDC28", "\uD83D\uDC34", "\uD83D\uDC3C", "\uD83D\uDC2F", "\uD83C\uDF6A", "\uD83C\uDF7A", "\uD83C\uDF66", "\uD83C\uDF6D", "\uD83C\uDF57", "\uD83C\uDF7C", "\uD83D\uDD2F", "\uD83C\uDF52", "\uD83D\uDC40", "\uD83D\uDC2D", "\uD83D\uDE07", "\uD83D\uDE3A", "\uD83D\uDE3B", "\uD83D\uDE40", "\uD83D\uDE3F", "\uD83D\uDE39", "\uD83D\uDE3E", "\uD83D\uDC79", "\uD83D\uDC7A", "\uD83C\uDF1E", "\uD83C\uDF1D", "\uD83C\uDF1A", "\uD83C\uDF1C", "\uD83C\uDF1B", "\uD83D\uDC66", "\uD83D\uDC67", "\uD83C\uDF8E", "\uD83C\uDF38", "\uD83C\uDF40", "\uD83C\uDF39", "\uD83C\uDF3B", "\uD83C\uDF3A", "\uD83C\uDF41", "\uD83C\uDF3F", "\uD83C\uDF44", "\uD83C\uDF35", "\uD83C\uDF34", "\uD83C\uDF33", "\uD83C\uDF30", "\uD83C\uDF31", "\uD83C\uDF3C", "\uD83C\uDF10", "\uD83C\uDF19", "\uD83C\uDF0B", "\uD83C\uDF0C", "\u26C5", "\u26A1", "\u2614", "\u26C4", "\uD83C\uDF00", "\uD83C\uDF08", "\uD83C\uDF0A", "\uD83D\uDD25", "\u2728", "\uD83C\uDF1F", "\uD83D\uDCA5", "\uD83D\uDCAB", "\uD83D\uDCA2", "\uD83D\uDCA6", "\uD83D\uDCA7", "\uD83D\uDCA4", "\uD83D\uDCA8", "\uD83C\uDF80", "\uD83C\uDF02", "\uD83D\uDC84", "\uD83D\uDC95", "\uD83D\uDC96", "\uD83D\uDC9E", "\uD83D\uDC98", "\uD83D\uDC8C", "\uD83D\uDC8B", "\uD83D\uDC9D", "\uD83C\uDF92", "\uD83C\uDF93", "\uD83C\uDF8F", "\uD83C\uDF83", "\uD83D\uDC7B", "\uD83C\uDF85", "\uD83C\uDF84", "\uD83C\uDF81", "\uD83D\uDE48", "\uD83D\uDC12", "\uD83D\uDCAF", "\uD83D\uDC6F", "\uD83D\uDC8D"],
        p = ["1-1.png", "1-2.png", "1-3.png", "1-4.png", "1-5.png", "1-6.png", "1-7.png", "1-8.png", "1-9.png", "1-10.png", "1-11.png", "1-12.png", "1-13.png", "1-14.png", "1-15.png", "1-16.png", "1-17.png", "1-18.png", "1-19.png", "1-20.png", "1-21.png", "1-22.png", "1-23.png", "1-24.png", "1-25.png", "1-26.png", "1-27.png", "1-28.png", "1-29.png", "1-30.png", "1-31.png", "1-32.png", "1-33.png", "1-34.png", "1-35.png", "2-1.png", "2-2.png", "2-3.png", "2-4.png", "2-5.png", "2-6.png", "2-7.png", "2-8.png", "2-9.png", "2-10.png", "2-11.png", "2-12.png", "2-13.png", "2-14.png", "2-15.png", "2-16.png", "2-17.png", "2-18.png", "2-19.png", "2-20.png", "2-21.png", "2-22.png", "2-23.png", "2-24.png", "2-25.png", "2-26.png", "2-27.png", "2-28.png", "2-29.png", "2-30.png", "2-31.png", "2-32.png", "2-33.png", "2-34.png", "2-35.png", "3-1.png", "3-2.png", "3-3.png", "3-4.png", "3-5.png", "3-6.png", "3-7.png", "3-8.png", "3-9.png", "3-10.png", "3-11.png", "3-12.png", "3-13.png", "3-14.png", "3-15.png", "3-16.png", "3-17.png", "3-18.png", "3-19.png", "3-20.png", "3-21.png", "3-22.png", "3-23.png", "3-24.png", "3-25.png", "3-26.png", "3-27.png", "3-28.png", "3-29.png", "3-30.png", "3-31.png", "3-32.png", "3-33.png", "3-34.png", "3-35.png", "4-1.png", "4-2.png", "4-3.png", "4-4.png", "4-5.png", "4-6.png", "4-7.png", "4-8.png", "4-9.png", "4-10.png", "4-11.png", "4-12.png", "4-13.png", "4-14.png", "4-15.png", "4-16.png", "4-17.png", "4-18.png", "4-19.png", "4-20.png", "4-21.png", "4-22.png", "4-23.png"],
        i = {};
        e.forEach(function (n, t) {
            i[n] = "//tb1.bdstatic.com/tb/cms/nickemoji/" + p[t]
        });
        try {
            return t ? (e.forEach(function (n) {
                    t = t.replace(new RegExp(n, "g"), '<img src="' + i[n] + '" class="nicknameEmoji" style="width:13px;height:13px"/>')
                }), t) : n
        } catch (g) {}
    }
}
(); ;
F.module("messenger", function (e, t) {
    "use strict";
    var r = F.require("messengerProcesser"),
    i = F.require("messengerTarget"),
    s = function (e, t) {
        if (!e)
            throw new Error("Messenger name must be asigned");
        var i = t || "[PROJECT_NAME]";
        this.name = e,
        this.prefix = i.toString(),
        this.supportPostMessage = "postMessage" in window,
        this.origins = [],
        this.processer = new r,
        this.targets = {},
        this._initListen()
    };
    return s.prototype = {
        constructor: s,
        addTarget: function (e, t) {
            this.targets[t] = new i(this.prefix, e, t)
        },
        registerCommand: function (e) {
            this.processer.registerCommand(e)
        },
        registerOrigin: function (e) {
            var t = 0;
            for ("string" == typeof e && (e = [e]), t; t < e.length; t++)
                this.origins.push(e[t])
        },
        send: function (e) {
            var t,
            r = this.targets;
            for (t in r)
                r.hasOwnProperty(t) && r[t].send(e)
        },
        _initListen: function () {
            var e = this,
            t = function (t) {
                if ("object" == typeof t) {
                    if (t.origin && !e._checkOrigin(t.origin))
                        throw new Error("The post origin is not avaliable");
                    if (!t.data || "string" != typeof t.data)
                        throw new Error("The received message is not type of string");
                    t = t.data
                }
                t = t.slice(e.prefix.length),
                t = e._escapeHTML(t);
                try {
                    t = JSON.parse(t)
                } catch (r) {
                    throw new Error("The JSON string is not valid")
                }
                e.processer.process(t)
            };
            this.supportPostMessage ? "addEventListener" in document ? window.addEventListener("message", t, !1) : "attachEvent" in document && window.attachEvent("onmessage", t) : window.navigator[this.prefix + this.name] = t
        },
        _escapeHTML: function (e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/\\"/g, "&quot;")
        },
        _checkOrigin: function (e) {
            var t = 0,
            r = this.origins.length;
            for (t; r > t; ++t)
                if (this.origins[t] === e)
                    return !0;
            return !1
        }
    },
    t = s
}, []); ;
F.module("messengerProcesser", function (n, o) {
    "use strict";
    var t = function () {
        this.commandMap = {
            common_login: this.common_login,
            exception_all: this.exception_all
        }
    };
    return t.prototype = {
        constructor: t,
        registerCommand: function (n) {
            this.checkExistCommand(n) && (this.commandMap = $.extend(this.commandMap, n))
        },
        checkRange: function () {},
        checkExistCommand: function (n) {
            var o;
            for (o in n)
                if (n.hasOwnProperty(o) && o in this.commandMap)
                    throw new Error('The command "' + o + '" is already exist');
            return !0
        },
        process: function (n) {
            if (!(n.command && n.command in this.commandMap))
                throw new Error("Please check or register the data processing command");
            var o = this.commandMap[n.command];
            o(n.data)
        },
        common_login: function () {},
        exception_all: function () {
            throw new Error("Processing data exception")
        }
    },
    o = t
}, []); ;
F.module("messengerTarget", function (t, e) {
    "use strict";
    var r = function (t, e, r) {
        var o = "";
        if (arguments.length < 3 ? o = "Target error: target and name are both requied" : "object" != typeof e ? o = "Target error: target itself must be window object" : "string" != typeof r && (o = "Target error: target name must be string type"), o)
            throw new Error(o);
        this.prefix = t,
        this.target = e,
        this.name = r
    };
    return r.prototype = {
        constructor: r,
        send: function (t) {
            var e = "postMessage" in window;
            if (e)
                this.target.postMessage(this.prefix + t, "*");
            else {
                var r = window.navigator[this.prefix + this.name];
                if ("function" != typeof r)
                    throw new Error("Target error: target callback function is not defined");
                var o = window.location,
                i = {
                    origin: o.protocol + "//" + o.host,
                    data: this.prefix + t
                };
                r(i, window)
            }
        }
    },
    e = r
}, []); ;
!function e(t, n, r) {
    function o(u, f) {
        if (!n[u]) {
            if (!t[u]) {
                var a = "function" == typeof require && require;
                if (!f && a)
                    return a(u, !0);
                if (i)
                    return i(u, !0);
                var c = new Error("Cannot find module '" + u + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var s = n[u] = {
                exports: {}
            };
            t[u][0].call(s.exports, function (e) {
                var n = t[u][1][e];
                return o(n ? n : e)
            }, s, s.exports, e, t, n, r)
        }
        return n[u].exports
    }
    for (var i = "function" == typeof require && require, u = 0; u < r.length; u++)
        o(r[u]);
    return o
}
({
    1: [function (e, t, n) {
            "use strict";
            function r(e) {
                return o ? setImmediate(e) : setTimeout(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.asap = r;
            var o = "function" == typeof setImmediate
        }, {}
    ],
    2: [function (e) {
            "use strict";
            function t(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var n = e("./promise");
            !function (e) {
                var r = {
                    TBHY_COMMON_Share: {
                        share: {
                            timeout: 1e3
                        }
                    },
                    TBHY_COMMON_Dialog: {
                        alert: {},
                        toast: {}
                    },
                    TBHY_COMMON_Clipboard: {
                        copy: {}
                    },
                    TBHY_COMMON_Performance: {
                        trackFPS: {}
                    },
                    TBHY_COMMON_UISwitch: {
                        viewHideSwitch: {}
                    }
                },
                o = new Error("Bridge not avaliable"),
                i = function (e) {
                    return e.replace(/^\w/, function (e) {
                        return e.toUpperCase()
                    })
                },
                u = function (t) {
                    return isNaN(t) ? t = 5e3 : 500 > t && (t = 500),
                    new n.Promise(function (n, r) {
                        var i = !1,
                        u = function () {
                            e.TiebaJsBridge && "complete" === e.TiebaJsBridge.readyState ? n(e.TiebaJsBridge) : r(o)
                        };
                        e.TiebaJsBridge ? u() : (e.document.addEventListener("TiebaJsBridgeReady", function () {
                                i || u()
                            }, !1), setTimeout(function () {
                                return (i = !0) && u()
                            }, +t))
                    })
                },
                f = function (e, t, r, o) {
                    return u(o).then(function (n) {
                        return n.call(e, t, r, o)
                    }, n.Promise.reject)
                },
                a = function () {
                    for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)
                        t[r] = arguments[r];
                    return u().then(function (e) {
                        return e.register.apply(e, t)
                    }, n.Promise.reject)
                },
                c = function (e, t, n) {
                    return function (r) {
                        return f(e, t, r, n)
                    }
                },
                s = function (e) {
                    return function (t) {
                        var n = [];
                        for (var r in t)
                            n[n.length] = r + "=" + encodeURIComponent(t[r]);
                        return f("TBHY_COMMON_Navigator", "toNativePage", {
                            url: "tieba://" + e.toLowerCase() + "?" + n.join("&")
                        })
                    }
                },
                l = {
                    ready: u,
                    call: f,
                    toNativePage: function (e, t) {
                        return f("TBHY_COMMON_Navigator", "toNativePage", {
                            url: e
                        }, t)
                    },
                    register: a,
                    on: function () {
                        for (var e = arguments.length, n = Array(e), r = 0; e > r; r++)
                            n[r] = arguments[r];
                        var o = n.slice();
                        return o[3] = !1,
                        a.apply(void 0, t(o))
                    },
                    system: {
                        version: function () {
                            return u().then(function (e) {
                                return e.system.version()
                            }, n.Promise.reject)
                        },
                        platform: function () {
                            return u().then(function (e) {
                                return e.system.platform()
                            }, n.Promise.reject)
                        }
                    }
                };
                for (var v in r) {
                    var p = r[v];
                    l[v] = l[v] || {};
                    for (var d in p)
                        l[v][d] = c(v, d, p[d].timeout)
                }
                var h = ["frs", "pb", "person"];
                l.TBHY_COMMON_Navigator = {},
                h.forEach(function (e) {
                    l.TBHY_COMMON_Navigator["to" + i(e) + "Page"] = s(e)
                }),
                e.tb = l
            }
            (window)
        }, {
            "./promise": 3
        }
    ],
    3: [function (e, t, n) {
            "use strict";
            function r() {}
            function o(e) {
                try {
                    return e.then
                } catch (t) {
                    return m = t,
                    g
                }
            }
            function i(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return m = n,
                    g
                }
            }
            function u(e, t, n) {
                try {
                    e(t, n)
                } catch (r) {
                    return m = r,
                    g
                }
            }
            function f(e) {
                if ("object" !== y(this))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._value = null,
                this._deferreds = [],
                e !== r && d(e, this)
            }
            function a(e, t, n) {
                return new e.constructor(function (o, i) {
                    var u = new f(r);
                    u.then(o, i),
                    c(e, new p(t, n, u))
                })
            }
            function c(e, t) {
                for (; 3 === e._state; )
                    e = e._value;
                return 0 === e._state ? void e._deferreds.push(t) : void _.asap(function () {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n)
                        return void(1 === e._state ? s(t.promise, e._value) : l(t.promise, e._value));
                    var r = i(n, e._value);
                    r === g ? l(t.promise, m) : s(t.promise, r)
                })
            }
            function s(e, t) {
                if (t === e)
                    return l(e, new TypeError("A promise cannot be resolved with itself."));
                if (t && ("object" === ("undefined" == typeof t ? "undefined" : y(t)) || "function" == typeof t)) {
                    var n = o(t);
                    if (n === g)
                        return l(e, m);
                    if (n === e.then && t instanceof f)
                        return e._state = 3, e._value = t, void v(e);
                    if ("function" == typeof n)
                        return void d(n.bind(t), e)
                }
                e._state = 1,
                e._value = t,
                v(e)
            }
            function l(e, t) {
                e._state = 2,
                e._value = t,
                v(e)
            }
            function v(e) {
                for (var t = 0; t < e._deferreds.length; t++)
                    c(e, e._deferreds[t]);
                e._deferreds = null
            }
            function p(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function d(e, t) {
                var n = !1,
                r = u(e, function (e) {
                        n || (n = !0, s(t, e))
                    }, function (e) {
                        n || (n = !0, l(t, e))
                    });
                n || r !== g || (n = !0, l(t, m))
            }
            function h(e) {
                var t = new f(f._noop);
                return t._state = 1,
                t._value = e,
                t
            }
            var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
             : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.Promise = f;
            var _ = e("./asap"),
            m = null,
            g = {};
            f._noop = r,
            f.prototype.then = function (e, t) {
                if (this.constructor !== f)
                    return a(this, e, t);
                var n = new f(r);
                return c(this, new p(e, t, n)),
                n
            },
            f.prototype["catch"] = function (e) {
                return this.then(null, e)
            };
            var w = h(!0),
            b = h(!1),
            O = h(null),
            M = h(void 0),
            N = h(0),
            T = h("");
            f.resolve = function (e) {
                if (e instanceof f)
                    return e;
                if (null === e)
                    return O;
                if (void 0 === e)
                    return M;
                if (e === !0)
                    return w;
                if (e === !1)
                    return b;
                if (0 === e)
                    return N;
                if ("" === e)
                    return T;
                if ("object" === ("undefined" == typeof e ? "undefined" : y(e)) || "function" == typeof e)
                    try {
                        var t = e.then;
                        if ("function" == typeof t)
                            return new f(t.bind(e))
                    } catch (n) {
                        return new f(function (e, t) {
                            t(n)
                        })
                    }
                return h(e)
            },
            f.all = function (e) {
                var t = Array.prototype.slice.call(e);
                return new f(function (e, n) {
                    function r(i, u) {
                        if (u && ("object" === ("undefined" == typeof u ? "undefined" : y(u)) || "function" == typeof u)) {
                            if (u instanceof f && u.then === f.prototype.then) {
                                for (; 3 === u._state; )
                                    u = u._value;
                                return 1 === u._state ? r(i, u._value) : (2 === u._state && n(u._value), void u.then(function (e) {
                                        r(i, e)
                                    }, n))
                            }
                            var a = u.then;
                            if ("function" == typeof a) {
                                var c = new f(a.bind(u));
                                return void c.then(function (e) {
                                    r(i, e)
                                }, n)
                            }
                        }
                        t[i] = u,
                        0 === --o && e(t)
                    }
                    if (0 === t.length)
                        return e([]);
                    for (var o = t.length, i = 0; i < t.length; i++)
                        r(i, t[i])
                })
            },
            f.reject = function (e) {
                return new f(function (t, n) {
                    n(e)
                })
            },
            f.race = function (e) {
                return new f(function (t, n) {
                    e.forEach(function (e) {
                        f.resolve(e).then(t, n)
                    })
                })
            },
            f.prototype["catch"] = function (e) {
                return this.then(null, e)
            }
        }, {
            "./asap": 1
        }
    ]
}, {}, [2]);
!function (c) {
    void 0 === c && new Error("F is not defined, map config aborted."),
    c.tbConfig = function (t) {
        c.pathRule(function (c) {
            if (c.src.match(/^([\w-]+\/)*[\w-]+$/i)) {
                var t = c.src.split("/"),
                s = t.length;
                3 === s && (t.push(t[2]), c.src = t.join("/"))
            }
        }),
        c.pathRule(function (c) {
            var t = c.src.match(/([\w-]+\/[\w-]+\/[\w-]+\/[\w-]+)(\.js)?(\?class)?$/i);
            t && (c.src = t[1])
        }),
        c.pathRule(function (c) {
            c.src.match(/\.js/i) || (c.src += ".js");
            var s;
            return "object" == typeof t && (s = t[c.src]) ? (c.src = s, void(c.src = "//tb1.bdstatic.com" + c.src)) : void(c.src = "//tb1.bdstatic.com/tb/mobile/" + c.src)
        })
    }
}
(F); ;
var hashMoni = function (n) {
    var a = null,
    t = function (n) {
        var t;
        for (var e in a)
            if (t = new RegExp(e), t.test(n))
                return a[e]
    },
    e = function () {
        var n = $.location.getHash().replace("#", ""),
        a = t(n);
        a && a.call(this, n)
    };
    "object" == typeof n && (a = n, $(window).bind("hashchange", e))
}; ;
var scrollPos = function (t, o, e, r) {
    if ("undefined" != typeof t) {
        var f = /^[0-9]+.?[0-9]*$/,
        n = f.test(o) ? o : 200,
        i = f.test(t) ? t : $(t).length > 0 ? "[object Array]" == Object.prototype.toString.call(t) ? t.offset().top : "string" == typeof t ? $(t).offset().top : 0 : "error";
        "error" !== i && (r && f.test(r) && (i -= r), setTimeout(function () {
                if (e)
                    for (var t = window.pageYOffset, o = e, r = 10, f = o / r, n = (-t + i) / f, s = 1; f >= s; s++)
                        !function (o) {
                            window.setTimeout(function () {
                                scrollTo(0, o * n + t)
                            }, o * r)
                        }
                (s);
                else
                    window.scrollTo(0, i)
            }, n))
    }
}; ;
F.module("uri", function () {
    function t(r) {
        for (var e = t.options, a = e.parser[e.strictMode ? "strict" : "loose"].exec(r), o = {}, i = 14; i--; )
            o[e.key[i]] = a[i] || "";
        return o[e.q.name] = {},
        o[e.key[12]].replace(e.q.parser, function (t, r, a) {
            r && (o[e.q.name][r] = a)
        }),
        o
    }
    t.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    var r = function (r) {
        this.url = r,
        this.data = t(r)
    };
    return r.prototype = {
        getQueryParamValue: function (t) {
            return this.data.queryKey[t]
        },
        replaceQueryParam: function (t, r) {
            this.data.queryKey[t] = r.toString()
        },
        getKeyValue: function (t) {
            return this.data[t]
        },
        toString: function () {
            var t = this.data.protocol + "://" + this.data.authority + this.data.path;
            if (this.data.queryKey) {
                t += "?";
                for (var r in this.data.queryKey)
                    t += r + "=" + this.data.queryKey[r] + "&"
            }
            return t
        }
    },
    r
}); ;
function _registerScrollStop() {
    $(window).on("scroll", $.debounce(100, function () {
            $(document).trigger("scrollStop")
        }, !1))
}
function _touchstartHander() {
    $(window).off("scroll"),
    _registerScrollStop()
}
function _ortChange() {
    var t,
    n,
    e = "matchMedia" in window ? function () {
        return window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
    }
     : function () {
        var t = document.documentElement;
        return t.clientWidth / Math.max(t.clientHeight, 320) < 1.1 ? "portrait" : "landscape"
    },
    o = e(),
    r = function (r) {
        return "orientationchange" == r.type ? $(window).trigger("ortchange") : (n = 20, clearInterval(t), void(t = $.later(function () {
                        var r = e();
                        o !== r ? (o = r, clearInterval(t), $(window).trigger("ortchange")) : --n && clearInterval(t)
                    }, 50, !0)))
    };
    $(window).bind($.support.orientation ? "orientationchange" : "resize", $.debounce(r))
}
window.PageUnit = window.PageUnit || {
    load: function (t, n) {
        var e = "";
        return "object" == typeof PageUnitData && null != PageUnitData[t] && (e = PageUnitData[t], null != n && 0 == e.indexOf("<") && (e = $(e).tbattr(n).get(0).outerHTML)),
        e
    }
}, $(document).ready(function () {
    $(window).on("pageshow", function (t) {
        t.persisted && $(document).off("touchstart", _touchstartHander).one("touchstart", _touchstartHander)
    }),
    _registerScrollStop(),
    _ortChange()
}); ;
!function (i) {
    var e,
    r = navigator.userAgent,
    a = navigator.appVersion,
    o = i.browser;
    i.os.android = i.os.android || /HTC/.test(r),
    !i.os.android && (e = r.match(/(Android).*?([\d.]+)/)) && (i.os.android = !0, i.os.version = e[2]),
    i.extend(o, {
        qq: /qq/i.test(r),
        chrome: /chrome/i.test(r) || /CriOS/i.test(r),
        uc: /UC/i.test(r) || /UC/i.test(a),
        safari: /safari/i.test(a),
        baidu: /flyflow/i.test(r) || /baidubrowser/i.test(a),
        palmBaidu: /bdmobile/i.test(r),
        baiduFrame: /baiduboxapp/i.test(r)
    });
    var t = /(tieba)\/(([\d]{1,2})(\.(([\d])(\.([\d]?)?)?)?)?)/,
    s = t.exec(r);
    o.tieba = !!s,
    o.tiebaVersion = ["0.0.0", "0", "0", "0"],
    o.tieba && i.isArray(s) && (o.tiebaVersion.version = o.tiebaVersion[0] = s[2], o.tiebaVersion.first = o.tiebaVersion[1] = s[3], o.tiebaVersion.second = o.tiebaVersion[2] = s[6], o.tiebaVersion.third = o.tiebaVersion[3] = s[8]),
    o.safari = !(!o.safari || o.qq || o.uc || o.chrome || o.baidu || o.palmBaidu),
    o.version = o.uc ? a.match(/UC(?:Browser)?\/([\d.]+)/) : o.qq ? r.match(/MQQBrowser\/([\d.]+)/) : o.chrome ? r.match(/(?:CriOS|Chrome)\/([\d.]+)/) : o.baidu ? r.match(/(?:flyflow|baidubrowser)\/([\d.]+)/i) : o.palmBaidu ? r.match(/(?:bdmobile)\/([\d.]+)/i) : o.version,
    null !== o.version && "object" == typeof o.version && (o.version = o.version[1])
}
(Zepto); ;
!function (e) {
    e.parseTpl = function (e, r) {
        var p = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/<%=([\s\S]+?)%>/g, function (e, r) {
                return "'," + r.replace(/\\'/g, "'") + ",'"
            }).replace(/<%([\s\S]+?)%>/g, function (e, r) {
                return "');" + r.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
        n = new Function("obj", p);
        return r ? n(r) : n
    }
}
(Zepto); ;
!function (t) {
    t.getByteLength = function (t) {
        return t.replace(/[^\x00-\xff]/g, "mm").length
    },
    t.subByte = function (e, n, r) {
        if (t.getByteLength(e) <= n)
            return e;
        r = void 0 === r ? "..." : String(r),
        n -= t.getByteLength(r);
        for (var g = Math.floor(n / 2), o = t.getByteLength(e); o > g; g++) {
            var u = e.substring(0, g);
            if (t.getByteLength(u) >= n)
                return u + r
        }
        return e
    },
    t.padNum = function (t, e) {
        return (Array(e).join(0) + t).slice(-e)
    },
    t.dateFormat = function (t, e) {
        var n = new Date(e || ""),
        r = {
            "M+": n.getMonth() + 1,
            "d+": n.getDate(),
            "h+": n.getHours(),
            "m+": n.getMinutes(),
            "s+": n.getSeconds(),
            "q+": Math.floor((n.getMonth() + 3) / 3),
            S: n.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var g in r)
            new RegExp("(" + g + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[g] : ("00" + r[g]).substr(("" + r[g]).length)));
        return t
    },
    t.shuffle = function (t) {
        for (var e, n, r = t.length; r; e = parseInt(Math.random() * r), n = t[--r], t[r] = t[e], t[e] = n);
        return t
    },
    t.toString = function (t) {
        return Object.prototype.toString.call(t)
    },
    t.slice = function (t, e) {
        return Array.prototype.slice.call(t, e || 0)
    }
}
(Zepto); ;
!function (n) {
    n.support = n.extend(n.support || {}, {
            touch: "ontouchend" in document,
            cssTransitions: "WebKitTransitionEvent" in window,
            has3d: "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix
        })
}
(Zepto); ;
!function (t) {
    t.throttle = function (n, o, i) {
        function e() {
            function t() {
                r = Date.now(),
                o.apply(c, a)
            }
            function e() {
                u = void 0
            }
            var c = this,
            d = Date.now() - r,
            a = arguments;
            i && !u && t(),
            u && clearTimeout(u),
            void 0 === i && d > n ? t() : u = setTimeout(i ? e : t, void 0 === i ? n - d : n)
        }
        var u,
        r = 0;
        return "function" != typeof o && (i = o, o = n, n = 250),
        e._zid = o._zid = o._zid || t.proxy(o)._zid,
        e
    },
    t.debounce = function (n, o, i) {
        return void 0 === o ? t.throttle(250, n, !1) : t.throttle(n, o, void 0 === i ? !1 : i !== !1)
    },
    t.later = function (t, n, o, i, e) {
        return window["set" + (o ? "Interval" : "Timeout")](function () {
            t.apply(i, e)
        }, n || 0)
    }
}
(Zepto); ;
!function (e) {
    e.each("String Boolean RegExp Number Date Object Null Undefined".split(" "), function (n, t) {
        var o = "";
        switch (t) {
        case "Null":
            o = "obj === null";
            break;
        case "Undefined":
            o = "obj === undefined";
            break;
        default:
            o = "new RegExp('" + t + "]', 'i').test(Object.prototype.toString.call(obj))"
        }
        e["is" + t] = new Function("obj", "return " + o)
    })
}
(Zepto); ;
!function (t) {
    t.viewport = {
        getViewportHeight: function () {
            var e = document.documentElement.clientHeight;
            return !t.os.android && t.browser.safari && parseInt(t.os.version || 0, 10) < 7 ? e + 60 : e
        },
        getViewportWidth: function () {
            return window.innerWidth
        }
    }
}
(Zepto); ;
!function (e) {
    e.escapeHTML = function (e) {
        return "string" != typeof e ? "" : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;")
    },
    e.xssEncode = function (r, t) {
        if ("string" == typeof r)
            return e.escapeHTML(r);
        var a = e.isArray(t),
        c = {};
        for (var n in r) {
            var p = r[n];
            a && -1 === e.inArray(n, t) ? c[n] = p : r !== p && (c[n] = "object" == typeof p ? arguments.callee(p, c[n] || {}) : e.isArray(p) ? arguments.callee(p, c[n] || []) : "string" == typeof p ? e.escapeHTML(p) : p)
        }
        return c
    },
    e.unescapeHTML = function (e) {
        return "string" != typeof e ? "" : e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#039;/g, "'").replace(/&quot;/g, '"')
    }
}
(Zepto); ;
!function (e) {
    function n(e, n) {
        if ("undefined" != typeof n) {
            var t = /([.*+?^=!:${}()|[\]\/\\])/g,
            r = "{".replace(t, "\\$1"),
            f = "}".replace(t, "\\$1"),
            o = new RegExp("#" + r + "([^" + r + f + "]+)" + f, "g"),
            p = new RegExp("#" + r + "(\\d+)" + f, "g");
            if ("object" == typeof n)
                return e.replace(o, function (e, t) {
                    var r = n[t];
                    return "function" == typeof r && (r = r(t)),
                    "undefined" == typeof r ? "" : r
                });
            if ("undefined" != typeof n) {
                var u = Array.prototype.slice.call(arguments, 0),
                i = u.length;
                return e.replace(p, function (e, n) {
                    return n = parseInt(n, 10),
                    n >= i ? e : u[n]
                })
            }
        }
    }
    e.tbFormat = function (t, r) {
        if ("none" == r || null == r)
            return tempalte;
        for (var f in r)
            r[f] = e.escapeHTML(String(r[f]));
        return n(t, r)
    }
}
(Zepto); ;
!function (t) {
    var n = {
        tbattr: t.fn.attr,
        tbprop: t.fn.prop,
        tbdata: t.fn.data
    },
    a = {};
    for (var r in n)
        !function (r) {
            var f = n[r];
            a[r] = function () {
                var n = f.apply(this, arguments);
                return "string" == typeof n && (n = t.escapeHTML(n)),
                n
            }
        }
    (r);
    t.extend(t.fn, a)
}
(Zepto); ;
!function (e, o, n) {
    e.cookie = function (e, t, i, r, c, u) {
        if (t === n && "string" == typeof e) {
            var p = o.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return null != p ? unescape(p[2]) : !1
        }
        if (i && ("number" == typeof i || i.toUTCString)) {
            var m;
            "number" == typeof i ? (m = new Date, m.setTime(m.getTime() + 24 * i * 60 * 60 * 1e3)) : m = i,
            i = "; expires=" + m.toUTCString()
        }
        r = r ? "; path=" + r : ";path=/",
        c = c ? "; domain=" + c : "",
        u = u ? "; secure" : "",
        o.cookie = [e, "=", encodeURIComponent(t), i, r, c, u].join("")
    },
    e.removeCookie = function (o) {
        return null !== e.cookie(o) ? (e.cookie(o, null, -1), !0) : !1
    }
}
(Zepto, document); ;
!function (i) {
    var t = {
        type: void 0,
        isWifi: void 0,
        is2g: void 0,
        is3g: void 0,
        init: function (i) {
            this.type = i,
            this.isWifi = 1 == i,
            this.is2g = 2 == i,
            this.is3g = 3 == i
        }
    };
    i.netType = t
}
(Zepto); ;
!function (e) {
    e.location = {
        getHref: function () {
            return this._escape(location.href)
        },
        setHref: function (e) {
            location.href = e
        },
        getSearch: function () {
            return this._escape(location.search)
        },
        getHash: function () {
            return this._escape(location.hash)
        },
        setHash: function (e) {
            location.hash = e
        },
        getHost: function () {
            return location.host
        },
        getHostname: function () {
            return location.hostname
        },
        getPort: function () {
            return location.port
        },
        getProtocol: function () {
            return location.protocol
        },
        getPathname: function () {
            return this._escape(location.pathname)
        },
        reload: function () {
            location.reload()
        },
        getOrigin: function () {
            return this._escape(location.origin ? location.origin : location.protocol + "//" + location.host)
        },
        _escape: function (e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&nbsp;").replace(/"/g, "&quot;")
        },
        _escapeHTML: function (e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/"/g, "&quot;")
        },
        _unescapeHTML: function (e) {
            return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"')
        },
        _getSearchValue: function (e) {
            var t = location.search.replace(/^\?/, ""),
            n = {};
            if (!t)
                return void 0 === e ? n : void 0;
            t = t.split("&");
            for (var r, c = 0, o = t.length; o > c; c++)
                r = t[c].indexOf("="), r > 0 ? n[t[c].substring(0, r)] = t[c].substring(r + 1) : n[t[c]] = "";
            return void 0 === e ? n : n[e]
        },
        getSearchValue: function (e) {
            if (e) {
                var t = this.getSearch(e);
                return null != t ? this._escapeHTML(this._decode(t)) : null
            }
            var n = this.getSearch();
            for (var r in n)
                n[r] = this._escapeHTML(this._decode(n[r]));
            return n
        },
        getRealSearchValue: function (e) {
            if (!this._searchCache) {
                this._searchCache = {};
                for (var t, n = location.search.substr(1).split("&"), r = 0; r < n.length; r++)
                    t = n[r].split("=", 2), 2 === t.length && (this._searchCache[t[0]] = this._escapeHTML(this._decode(t[1])))
            }
            return 0 === arguments.length ? this._searchCache : this._searchCache[e]
        },
        _decode: function (e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
    }
}
(Zepto); ;
!function (t) {
    var n = "touchstart",
    e = "touchmove",
    i = "touchend",
    o = "touchcancel",
    s = "gesturestart",
    a = "gesturechange",
    r = "gestureend",
    c = "webkitTransitionEnd",
    l = Math,
    u = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
    d = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
            return setTimeout(t, 17)
        }
    }
    (),
    h = function () {
        return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || clearTimeout
    }
    (),
    p = 300,
    _ = 250,
    f = .1,
    m = 350,
    X = function (l) {
        this._options = {
            container: null,
            selector: null,
            wrap: null,
            hScroll: !1,
            vScroll: !1,
            momentum: !0,
            bounce: !0,
            bounceMaxX: null,
            bounceMaxY: null,
            speedScale: 1,
            zoomed: !0,
            vAutoScrollOutIn: !0,
            useTransition: !1,
            isDispatchClick: !0,
            isForceUse2d: !1,
            snap: !1,
            snapThreshold: 200,
            onScroll: null,
            onTouchStart: function (n) {
                t.os.android && n.preventDefault()
            },
            onTouchMoveStart: null,
            onTouchMoveEnd: null,
            onTouchEnd: null,
            onGestureStart: null,
            onGestureChange: null,
            onGestureEnd: null,
            onTransitionEnd: null,
            onBounceEnd: null,
            onMomentumStart: null,
            onScrollEnd: null,
            onSnapStart: null,
            onSnapUpdateEnd: null,
            onSnapBounceEnd: null
        },
        this.steps = [],
        this._data = {
            scale: 1,
            initX: 0,
            initY: 0,
            startTime: 0,
            pointX: 0,
            pointY: 0,
            isMoveX: !1,
            isMoveY: !1,
            moved: !1,
            distX: 0,
            distY: 0,
            adjustDistX: 0,
            adjustDistY: 0,
            currentX: 0,
            currentY: 0,
            isGesture: !1,
            scrollerOffset: null
        },
        this._base = {
            $container: null,
            $scroller: null,
            containerHeight: null,
            containerWidth: null
        },
        t.extend(this._options, l),
        this.refresh(),
        this._delegateEvent(n),
        this._delegateEvent(e),
        this._delegateEvent(i),
        this._delegateEvent(o),
        this._options.useTransition && this._delegateEvent(c),
        this._options.zoomed && (this._delegateEvent(s), this._delegateEvent(a), this._delegateEvent(r)),
        this._options.isForceUse2d && (u = !1)
    };
    X.prototype = {
        _snaping: "",
        _handleEvent: function (t) {
            var l = this;
            switch (t.type) {
            case n:
                l._touchStart(t);
                break;
            case e:
                l._touchMove(t);
                break;
            case i:
            case o:
                l._touchEnd(t);
                break;
            case s:
                l._gestureStart(t);
                break;
            case a:
                l._gestureChange(t);
                break;
            case r:
                l._gestureEnd(t);
                break;
            case c:
                l._transitionEnd(t)
            }
        },
        refresh: function () {
            var t = this,
            n = t._data,
            e = t._base,
            i = t._options;
            return e.$container = "string" == typeof i.container ? i.wrap.find(i.container).first() : i.container,
            e.$container && e.$container.length ? (_offset = e.$container.offset(), e.containerHeight = _offset.height, e.containerWidth = _offset.width, e.$scroller = "string" == typeof i.selector ? e.$container.find(i.selector).first() : i.selector, e.$scroller && e.$scroller.length ? void(n.scrollerOffset = e.$scroller.offset()) : !1) : !1
        },
        _preventDefault: function (t) {
            t.preventDefault()
        },
        _touchStart: function (n) {
            var e = this,
            i = e._data,
            o = e._base,
            s = e._options;
            o.$container = "string" == typeof s.container ? t(n.target).closest(s.container) : s.container;
            var a = o.$container.offset();
            e._enabledTouch = !0,
            e._data.isGesture = !1,
            o.$scroller = "string" == typeof s.selector ? t(n.target).closest(s.selector) : s.selector,
            o.$scroller.bind("click", e._preventDefault),
            o.containerHeight = a.height,
            o.containerWidth = a.width,
            i.startTime = n.timeStamp || Date.now(),
            !e._snaping && h(e.aniTime),
            s.useTransition && e.transitionTime(0),
            i.initX = i.currentX,
            i.initY = i.currentY,
            i.startX = i.currentX,
            i.startY = i.currentY,
            i.moved = !1,
            t.isFunction(s.onTouchStart) && s.onTouchStart.call(e, n),
            i.scrollerOffset = o.$scroller.offset(),
            i.isMoveX = i.scrollerOffset.width > o.containerWidth ? !0 : !1,
            i.isMoveY = i.scrollerOffset.height > o.containerHeight ? !0 : !1,
            i.minScrollX = i.isMoveX ? o.containerWidth - i.scrollerOffset.width - (i.scale - 1) * i.scrollerOffset.width / 2 : 0,
            i.minScrollY = i.isMoveY ? o.containerHeight - i.scrollerOffset.height - (i.scale - 1) * i.scrollerOffset.height / 2 : 0,
            i.maxScrollX = i.isMoveX ? (i.scale - 1) * i.scrollerOffset.width / 2 : 0,
            i.maxScrollY = i.isMoveY ? (i.scale - 1) * i.scrollerOffset.height / 2 : 0,
            i.isMoveX = s.hScroll || i.isMoveX,
            i.isMoveY = s.vScroll || i.isMoveY,
            s.bounceMaxX = l.abs(s.bounceMaxX) || o.containerWidth,
            s.bounceMaxY = l.abs(s.bounceMaxY) || o.containerHeight,
            1 === n.touches.length && (i.moved = !1, i.pointX = n.touches[0].pageX, i.pointY = n.touches[0].pageY)
        },
        _touchMove: function (n) {
            var e = this,
            i = e._options,
            o = e._base,
            s = e._data,
            a = Date.now();
            return e._snaping || 1 !== n.touches.length ? (s.pointX = n.touches[0].pageX, s.pointY = n.touches[0].pageY, e._enabledTouch = !1, t.isFunction(e._options.onTouchMoveStart) && e._options.onTouchMoveStart.call(e, n), !1) : (s.moved = !0, s.distX = n.touches[0].pageX - s.pointX, s.distY = n.touches[0].pageY - s.pointY, s.adjustDistX = s.isMoveX ? s.distX : 0, s.adjustDistY = s.isMoveY ? s.distY : 0, s.adjustDistX = s.adjustDistX / s.scale + s.initX, s.adjustDistY = s.adjustDistY / s.scale + s.initY, a - s.startTime > p && (s.startTime = a, s.startX = s.currentX, s.startY = s.currentY), e._options.vAutoScrollOutIn && (s.adjustDistY > s.maxScrollY && s.initY == s.maxScrollY || s.adjustDistY < s.minScrollY && s.initY == s.minScrollY ? (this._enabledTouch = !1, t.os.android && window.scrollTo(0, window.pageYOffset - s.distY)) : n.preventDefault()), e._options.bounce ? (s.adjustDistX = s.adjustDistX >= s.maxScrollX ? (s.adjustDistX - s.maxScrollX) * i.bounceMaxX / o.containerWidth + s.maxScrollX : s.adjustDistX < s.minScrollX ? (s.adjustDistX - s.minScrollX) * i.bounceMaxX / o.containerWidth + s.minScrollX : s.adjustDistX, s.adjustDistY = s.adjustDistY >= s.maxScrollY ? (s.adjustDistY - s.maxScrollY) * i.bounceMaxY / o.containerHeight + s.maxScrollY : s.adjustDistY < s.minScrollY ? (s.adjustDistY - s.minScrollY) * i.bounceMaxY / o.containerHeight + s.minScrollY : s.adjustDistY) : (s.adjustDistX = s.adjustDistX > s.maxScrollX ? s.maxScrollX : s.adjustDistX < s.minScrollX ? s.minScrollX : s.adjustDistX, s.adjustDistY = s.adjustDistY > s.maxScrollY ? s.maxScrollY : s.adjustDistY < s.minScrollY ? s.minScrollY : s.adjustDistY), t.isFunction(e._options.onTouchMoveStart) && e._options.onTouchMoveStart.call(e, n), e._enabledTouch ? (e.render(e._base.$scroller, s.scale, s.adjustDistX, s.adjustDistY), void(t.isFunction(e._options.onTouchMoveEnd) && e._options.onTouchMoveEnd.call(e, n))) : !1)
        },
        _touchEnd: function (n) {
            var e,
            i,
            s,
            a,
            r = this,
            c = r._data,
            u = r._base,
            d = r._options,
            h = {
                dist: 0,
                time: 0
            },
            X = {
                dist: 0,
                time: 0
            },
            v = (n.timeStamp || Date.now()) - c.startTime;
            if (this._enabledTouch)
                if (c.moved) {
                    if (t.isFunction(r._options.onMomentumStart) && r._options.onMomentumStart.call(r, n), s = c.currentX, a = c.currentY, i = c.initX + c.distX / l.abs(c.distX) * d.snapThreshold, d.snap && i >= c.minScrollX && i <= c.maxScrollX)
                        return s = _ > v || l.abs(c.distX) > f * u.containerWidth ? c.initX + c.distX / l.abs(c.distX) * d.snapThreshold : c.initX, r.snap(s, a), void(t.isFunction(r._options.onTouchEnd) && r._options.onTouchEnd.call(r));
                    p > v && d.momentum && (h = s ? r._momentum(s - c.startX, v, -s, c.scrollerOffset.width - u.containerWidth + s, d.bounce ? u.containerWidth : 0) : h, X = a ? r._momentum(a - c.startY, v, -a, c.scrollerOffset.height - u.containerHeight + a, d.bounce ? u.containerHeight : 0) : X, s += h.dist, a += X.dist, (c.currentX > c.maxScrollX && s > c.maxScrollX || c.currentX < c.minScrollX && s < c.minScrollX) && (h = {
                                dist: 0,
                                time: 0
                            }), (c.currentY < c.minScrollY && a < c.minScrollY || c.currentY > c.maxScrollY && a > c.maxScrollY) && (X = {
                                dist: 0,
                                time: 0
                            })),
                    h.dist || X.dist ? (e = l.max(l.max(h.time, X.time), 10), s = l.round(s), a = l.round(a), r.scrollTo(e, s, a), c.initX = s, c.initY = a) : r.fixPosition()
                } else
                    u.$scroller.unbind("click", r._preventDefault), d.isDispatchClick && t.os.android && n.type !== o && setTimeout(function () {
                        for (var t = n.target; 1 != t.nodeType; )
                            t = t.parentNode;
                        if ("SELECT" != t.tagName && "INPUT" != t.tagName && "TEXTAREA" != t.tagName) {
                            var e = document.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, n.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, 0, null),
                            e._fake = !0,
                            t.dispatchEvent(e)
                        }
                    }, m);
            else {
                if (c.initX = c.currentX, c.initY = c.currentY, r._snaping)
                    return !1;
                s = c.currentX,
                a = c.currentY,
                i = c.initX + c.distX / l.abs(c.distX) * d.snapThreshold,
                d.snap && i >= c.minScrollX && i <= c.maxScrollX && (s = _ > v || l.abs(c.distX) > f * u.containerWidth ? c.initX + c.distX / l.abs(c.distX) * d.snapThreshold : c.initX, r.snap(s, a))
            }
            t.isFunction(r._options.onTouchEnd) && r._options.onTouchEnd.call(r, n)
        },
        _gestureStart: function (n) {
            var e = this;
            e._enabledGesture = !0,
            t.isFunction(e._options.onGestureStart) && e._options.onGestureStart.call(e, n)
        },
        _gestureChange: function (n) {
            n.preventDefault();
            var e = this;
            return e._data.newScale = n.scale * e._data.scale,
            this._enabledGesture ? (e.render(e._base.$scroller, e._data.newScale, e._data.initX, e._data.initY), void(t.isFunction(e._options.onGestureChange) && e._options.onGestureChange.call(e, n))) : !1
        },
        _gestureEnd: function (n) {
            var e = this;
            e._data.scale = e._data.newScale,
            e._data.isGesture = !0,
            t.isFunction(e._options.onGestureEnd) && e._options.onGestureEnd.call(e, n)
        },
        _transitionEnd: function (n) {
            var e = this;
            n.target == e._base.$scroller[0] && (e.fixPosition(), "snapBounce" == e._snaping && t.isFunction(e._options.onSnapBounceEnd) && e._options.onSnapBounceEnd.call(e, n), "snapUpdate" == e._snaping && t.isFunction(e._options.onSnapUpdateEnd) && e._options.onSnapUpdateEnd.call(e, n), t.isFunction(e._options.onTransitionEnd) && e._options.onTransitionEnd.call(e), e._snaping = "")
        },
        _delegateEvent: function (t, n, e) {
            var i = this,
            o = i._options;
            return "object" == typeof o.selector ? void o.selector.bind(t, function (t) {
                i._handleEvent.call(i, t)
            }) : void(e || o.wrap || o.container).delegate(n || o.selector, t, function (t) {
                i._handleEvent.call(i, t)
            })
        },
        transitionTime: function (t) {
            this._base.$scroller.css("-webkit-transition-duration", t + "ms")
        },
        fixPosition: function (n) {
            var e = this,
            i = e._data,
            o = e._base,
            s = i.currentX,
            a = i.currentY;
            n = n || e._base.$scroller;
            var r = e._options.zoomed ? n.offset() : {
                width: i.scrollerOffset.width,
                height: i.scrollerOffset.height,
                left: i.currentX,
                top: i.currentY
            };
            if (i.isMoveX = r.width > o.containerWidth ? !0 : !1, i.isMoveY = r.height > o.containerHeight ? !0 : !1, i.isMoveY) {
                var c = r.top;
                c > 0 ? a -= c / i.scale : c + r.height < o.containerHeight && (a -= (c + r.height - o.containerHeight) / i.scale)
            } else
                a = 0;
            return i.isMoveX ? r.left > 0 ? s -= r.left / i.scale : r.left + r.width < o.containerWidth && (s -= (r.left + r.width - o.containerWidth) / i.scale) : s = 0,
            i.scale < 1 && (i.scale = 1),
            i.scaled = !1,
            i.initX = s,
            i.initY = a,
            s == i.currentX && a == i.currentY ? (t.isFunction(e._options.onScrollEnd) && e._options.onScrollEnd.call(e), !1) : void(e._options.bounce ? e.scrollTo(200, s, a, "bounce") : e.render(n, i.scale, s, a))
        },
        snap: function (n, e) {
            var i = this,
            o = i._data,
            s = n != o.initX ? "snapUpdate" : "snapBounce";
            o.initX = n,
            o.initY = e,
            i._snaping = s,
            t.isFunction(i._options.onSnapStart) && i._options.onSnapStart.call(i),
            i.scrollTo(200, n, e, s)
        },
        scrollTo: function (t, n, e, i) {
            var o = this;
            n = void 0 == n ? o._data.initX : n,
            e = void 0 == e ? o._data.initY : e,
            o.stop(),
            o.steps.push({
                x: n,
                y: e,
                time: t || 0
            }),
            o._startAni(i)
        },
        render: function (n, e, i, o) {
            var s = this;
            return n[0] ? (e = e || 1, i = i || 0, o = o || 0, !s._options.zoomed || t.os.ios ? n[0].style.webkitTransform = "scale(" + e + ") " + (u ? "translate3d" : "translate") + "(" + i + "px, " + o + "px" + (u ? ", 0px)" : ")") : (n[0].style.webkitTransform = "scale(" + e + ")", n.parent()[0].style.webkitTransform = (u ? "translate3d" : "translate") + "(" + i * e + "px, " + o * e + "px" + (u ? ", 0px)" : ")")), s._data.currentX = i, s._data.currentY = o, void(t.isFunction(s._options.onScroll) && s._options.onScroll.call(s))) : !1
        },
        _momentum: function (t, n, e, i, o) {
            var s = 6e-4,
            a = l.abs(t) * (this._options.speedScale || 1) / n,
            r = a * a / (2 * s),
            c = 0,
            u = 0;
            return t > 0 && r > e ? (u = o / (6 / (r / a * s)), e += u, a = a * e / r, r = e) : 0 > t && r > i && (u = o / (6 / (r / a * s)), i += u, a = a * i / r, r = i),
            r *= 0 > t ? -1 : 1,
            c = a / s, {
                dist: r,
                time: l.round(c)
            }
        },
        _startAni: function (n) {
            var e,
            i,
            o,
            s = this,
            a = s._data,
            r = a.currentX,
            c = a.currentY,
            u = Date.now(),
            h = s._base.$scroller;
            if (!s.animating && s.steps.length) {
                if (e = s.steps.shift(), e.x == r && e.y == c && (e.time = 0), s.animating = !0, s._options.useTransition)
                    return s.transitionTime(e.time), s.render(h, a.scale, e.x, e.y), void(s.animating = !1);
                o = function () {
                    var p,
                    _,
                    f = Date.now();
                    return f >= u + e.time ? (s.render(h, a.scale, e.x, e.y), s.animating = !1, s.fixPosition(), t.isFunction(s._options.onTransitionEnd) && s._options.onTransitionEnd.call(s), "bounce" === n && t.isFunction(s._options.onBounceEnd) && s._options.onBounceEnd.call(s), "snapBounce" === n && t.isFunction(s._options.onSnapBounceEnd) && s._options.onSnapBounceEnd.call(s), "snapUpdate" === n && t.isFunction(s._options.onSnapUpdateEnd) && s._options.onSnapUpdateEnd.call(s), void(s._snaping = "")) : (f = (f - u) / e.time - 1, i = l.sqrt(1 - f * f), p = (e.x - r) * i + r, _ = (e.y - c) * i + c, s.render(h, a.scale, p, _), void(s.animating && (s.aniTime = d(o))))
                },
                o()
            }
        },
        stop: function () {
            h(this.aniTime),
            this.steps = [],
            this.animating = !1
        },
        setOptions: function (t, n) {
            this._options[t] = n
        },
        setData: function (t, n) {
            this._data[t] = n
        },
        getData: function (t) {
            return this._data[t]
        },
        setBaseData: function (t, n) {
            this._base[t] = n
        },
        getBaseData: function (t) {
            return this._base[t]
        },
        getSnapingStatus: function () {
            return this._snaping
        },
        setSnapingStatus: function (t) {
            this._snaping = t
        },
        resetDatas: function (n) {
            if (!n[0])
                return !1;
            var e = this._data.scale;
            t.extend(this._data, {
                scale: 1,
                initX: 0,
                initY: 0,
                startTime: 0,
                pointX: 0,
                pointY: 0,
                isMoveX: !1,
                isMoveY: !1,
                moved: !1,
                distX: 0,
                distY: 0,
                adjustDistX: 0,
                adjustDistY: 0,
                currentX: 0,
                currentY: 0,
                isGesture: !1
            }),
            (1 !== e || n.height() > this._base.containerHeight) && this.render(n)
        },
        enableTouch: function () {
            this._enabledTouch = !0
        },
        disableTouch: function () {
            this.stop(),
            this._enabledTouch = !1
        },
        enableGesture: function () {
            this._enabledGesture = !0
        },
        disableGesture: function () {
            this._enabledGesture = !1
        },
        destory: function () {
            var t = this._options,
            n = t.wrap ? t.wrap : t.container;
            "string" == typeof t.selector ? n.undelegate(this._options.selector) : t.selector.unbind()
        }
    },
    t.iGesture = X
}
(Zepto); ;
!function (t) {
    var e = function (e, i) {
        var n,
        o = this;
        o.options = {
            damp: .001,
            horizon: !0,
            snap: !1,
            preventDefaultScroll: null,
            onBeforeScrollStart: null,
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null,
            predictByInertia: !1,
            overflow: "spring",
            getScrollerWidth: function () {
                return this.$scroller.width() || document.body.clientWidth
            },
            getContainerWidth: function () {
                return t(e).width() || document.body.clientWidth
            }
        };
        for (n in i)
            o.options[n] = i[n];
        o.direction = o.options.horizon ? "x" : "y",
        o.x = o.options.x,
        o.y = o.options.y,
        o._touchCache = [],
        o._usePercentPosition = t.os.ios || t.browser.chrome,
        o.$wrapper = t(e),
        o.$scroller = o.$wrapper.children().first(),
        o.$scroller.addClass("scroller"),
        o.$item = o.$scroller.children(),
        o.width = o.options.getScrollerWidth.call(o),
        o.containerWidth = o.options.getContainerWidth.call(o),
        o._bind("resize", window),
        o._bind("webkitTransitionEnd"),
        o._bind("touchstart"),
        o.currentPage = 0
    };
    e.prototype = {
        handleEvent: function (t) {
            var e = this;
            switch (t.type) {
            case "touchstart":
                e._start(t);
                break;
            case "touchmove":
                e._move(t);
                break;
            case "touchend":
            case "touchcancel":
                e._end(t);
                break;
            case "resize":
                e._resize();
                break;
            case "webkitTransitionEnd":
                e._transitionEnd(t)
            }
        },
        _prevent: function (t) {
            t.preventDefault()
        },
        _start: function (t) {
            var e = this;
            if (this.options.onScrollStart && this.options.onScrollStart.call(this, t), !(e.width * e.$item.length <= e.containerWidth)) {
                t.srcElement.addEventListener("click", e._prevent),
                e.started = !0,
                e.moved = !1,
                null === e.options.preventDefaultScroll && (e.useDefault = void 0);
                var i = e._getPos();
                e.startPos = {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY,
                    xTrans: i.x,
                    yTrans: i.y,
                    t: t.timeStamp || Date.now()
                },
                e._setTransition(0),
                e._bind("touchmove"),
                e._bind("touchend"),
                e._bind("touchcancel")
            }
        },
        doScrollMove: function (t) {
            var e = this;
            e.interval && (clearInterval(e.interval), e.interval = null),
            e._setPos(t)
        },
        _move: function (t) {
            var e = this;
            return e.started ? (e._cache(t), e.options.preventDefaultScroll === !0 ? (t.preventDefault(), e.doScrollMove(t)) : e.options.preventDefaultScroll === !1 ? e.doScrollMove(t) : (e.moved || e._setUseDefault(), e.useDefault ? (e._unbind("touchmove"), e._unbind("touchend"), e._unbind("touchcancel")) : (t.preventDefault(), t.stopPropagation(), e.doScrollMove(t))), void(e.moved = !0)) : void e._unbind("touchmove")
        },
        _end: function (t) {
            var e = this;
            if (e.moved) {
                t.preventDefault(),
                e._cacheTouchEnd(t);
                var i,
                n = e._getSpeed(),
                o = e._setPos(t)[e.direction] + e.width * e.currentPage,
                s = o / e.width,
                r = Math.abs(n / e.options.damp),
                h = 0;
                if (e.options.predictByInertia) {
                    s += r * n / 2 / e.width;
                    var a = (t.timeStamp || Date.now()) - e.startPos.t,
                    c = 1 / (-1 / (5e-5 * Math.pow(n, 2) * Math.pow(a, 3) + 1) + 1);
                    s * n > 0 && (h = s > 0 ? .4 :  - .4);
                    var l = -Math.round(s * c + h);
                    Math.abs(l) > 1 && c > 2 && n && (l = l > 0 ? 1 : -1)
                } else
                    l = 0, -10 > o && .2 > n ? l = 1 : o > 10 && n >  - .2 && (l = -1);
                e.setCurrentPage(e.currentPage + l),
                o += e.width * l,
                i = Math.abs(o / n * 2),
                50 > i ? i = 50 : i > 400 && (i = 400),
                e.scrollToPage(e.currentPage, i),
                e.options.onTouchEnd && e.options.onTouchEnd.call(e, t)
            } else
                t.srcElement.removeEventListener("click", e._prevent);
            e._unbind("touchmove"),
            e._unbind("touchend"),
            e._unbind("touchcancel")
        },
        _resize: function (t) {
            this.width = this.options.getScrollerWidth.call(this, t),
            this.containerWidth = this.options.getContainerWidth.call(this, t)
        },
        _transitionEnd: function () {
            this._setTransition(),
            this.options.onScrollEnd && this.options.onScrollEnd.call(this)
        },
        _bind: function (t, e, i) {
            (e || this.$wrapper[0]).addEventListener(t, this, !!i)
        },
        _unbind: function (t, e, i) {
            (e || this.$wrapper[0]).removeEventListener(t, this, !!i)
        },
        _getPos: function (e) {
            e = e ? t(e)[0] : this.$scroller[0];
            var i = getComputedStyle(this.$scroller[0], null).webkitTransform.replace(/[^0-9\-.,]/g, "").split(",");
            return {
                x: 1 * i[4] || 0,
                y: 1 * i[5] || 0
            }
        },
        _setPos: function (e, i) {
            i = t(i || this.$scroller);
            var n = {
                x: 0,
                y: 0
            },
            o = this.direction;
            if (e && void 0 !== e.x && void 0 !== e.y)
                n = e, i[0].style.webkitTransform = "translate(" + n.x + ", " + n.y + ") translateZ(0)";
            else {
                var s = void 0 === e || 0 === e.touches.length ? this._touchCache[0] : {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
                if (n[o] = s[o] - this.startPos[o] + this.startPos[o + "Trans"], this.options.overflow)
                    switch (this.options.overflow) {
                    case "spring":
                        n[o] > 0 ? n[o] /= 2 : n[o] < -this.width * this.$item.length + this.containerWidth && (n[o] -= (n[o] + this.width * this.$item.length - this.containerWidth) / 2);
                        break;
                    default:
                        n[o] > 0 ? n[o] = 0 : n[o] < -this.width * this.$item.length + this.containerWidth && (n[o] = -this.width * this.$item.length + this.containerWidth)
                    }
                i[0].style.webkitTransform = "translate(" + n.x + "px," + n.y + "px) translateZ(0)"
            }
            return n
        },
        _setTransition: function (e, i) {
            e = void 0 === e ? 200 : e,
            t(i || this.$scroller)[0].style.webkitTransitionDuration = e + "ms"
        },
        setCurrentPage: function (t) {
            return void 0 !== t ? (0 > t ? t = 0 : t > this.$item.length - 1 && (t = this.$item.length - 1), this.currentPage = t, this.currentPage) : void 0
        },
        _cache: function (t) {
            var e = t.timeStamp || Date.now();
            this._touchCache[0] && e - this._touchCache[0].t < 50 || (this._touchCache.length > 1 && (this._touchCache = [this._touchCache.shift()]), this._touchCache.unshift({
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY,
                    t: e
                }))
        },
        _cacheTouchEnd: function (t) {
            var e = t.timeStamp || Date.now();
            this._touchCache[0] && (this._touchCache[0].t = e)
        },
        _getSpeed: function () {
            var t = this.direction,
            e = this._touchCache;
            return 2 === e.length && t ? (e[0][t] - e[1][t]) / (e[0].t - e[1].t) : 1 === e.length ? (e[0][t] - this.startPos[t]) / (e[0].t - this.startPos.t) : void 0
        },
        _setUseDefault: function () {
            var t = this._touchCache;
            if (void 0 !== this.useDefault || t.length < 2)
                return -1;
            var e = Math.abs((t[0].y - t[1].y) / (t[0].x - t[1].x));
            this.useDefault = "y" === this.direction ? 1 > e : e > 1
        },
        scrollToPage: function (t, e) {
            var i = this.setCurrentPage(t);
            this._setPos((this.$item.length - i) * this.width >= this.containerWidth ? {
                x: this._usePercentPosition ? 100 * -t + "%" : this.width * -t + "px",
                y: 0
            }
                 : {
                x: this.containerWidth - this.$item.length * this.width + "px",
                y: 0
            }),
            this._setTransition(e)
        },
        destroy: function () {
            this.options.onDestroy && this.options.onDestroy.call(this),
            this._unbind("resize", window),
            this._unbind("webkitTransitionEnd"),
            this._unbind("touchstart"),
            this._unbind("touchmove"),
            this._unbind("touchend"),
            this._unbind("touchcancel")
        }
    },
    t.Scroll = e
}
(Zepto); ;
!function (t) {
    t.storage = {
        available: function () {
            try {
                return window.localStorage ? (window.localStorage.setItem("jQuery Store Availability test", !0), window.localStorage.removeItem("jQuery Store Availability test"), !0) : !1
            } catch (t) {
                return !1
            }
        },
        init: function () {},
        get: function (t) {
            return window.localStorage.getItem(t)
        },
        set: function (t, e) {
            window.localStorage.setItem(t, e)
        },
        del: function (t) {
            window.localStorage.removeItem(t)
        },
        flush: function () {
            window.localStorage.clear()
        }
    }
}
(Zepto); ;
!function (e) {
    e.sessionstorage = {
        available: function () {
            try {
                return window.sessionStorage ? (window.sessionStorage.setItem("jQuery Store Availability test", !0), window.sessionStorage.removeItem("jQuery Store Availability test"), !0) : !1
            } catch (e) {
                return !1
            }
        },
        init: function () {},
        get: function (e) {
            return window.sessionStorage.getItem(e)
        },
        set: function (e, t) {
            window.sessionStorage.setItem(e, t)
        },
        del: function (e) {
            window.sessionStorage.removeItem(e)
        },
        flush: function () {
            window.sessionStorage.clear()
        }
    }
}
(Zepto); ;
!function (e) {
    e.fn.imglazyload = function (t) {
        function o(t) {
            return e.slice(t).reverse()
        }
        function r(t) {
            var o = e("<img>"),
            r = d ? e("<" + d + ">") : o,
            n = e.unescapeHTML(t.tbattr(l.urlName));
            c && l.startload.call(this, t, r),
            o.on("load", function () {
                d && r.css("background-image", "url(" + n + ")"),
                t.replaceWith(r),
                s && l.loadcomplete.call(this, r),
                o.off("load")
            }).on("error", function () {
                t.trigger("error"),
                o.off("error")
            }).tbattr("src", n)
        }
        function n(e, t, o, r) {
            return o >= e && e + t >= r
        }
        function a() {
            if (l.refresh && i && (h = o(e(i))), 0 != h.length)
                for (var t, a, c = h.length, s = u.scrollTop(), d = s + u.height() + l.threshold, f = s - l.threshold; c--; )
                    t = e(a = h[c]).offset(), n(t.top, t.height, d, f) && r(e(a))
        }
        var l = e.extend({
                threshold: 0,
                container: window,
                urlName: "data-url",
                nodeTag: "",
                placeHolder: "",
                eventName: "scrollStop.lazyload",
                startload: null,
                refresh: !0
            }, t),
        i = this.selector.toString(),
        c = e.isFunction(l.startload),
        s = e.isFunction(l.loadcomplete),
        d = l.nodeTag,
        u = e(l.container),
        f = l.container === window ? e(document) : u,
        h = o(this);
        return e(document).ready(a),
        f.off(l.eventName).on(l.eventName, a),
        this
    }
}
(Zepto); ;
!function (t) {
    t.loadManager = {
        loaded: {},
        loading: {},
        load: function (t, e, o) {
            this.loadURL(t, e, o)
        },
        loadURL: function (t, e, o) {
            var a = this;
            void 0 !== this.loaded[t] ? "function" == typeof e && e(t, this.loaded[t]) : void 0 !== this.loading[t] ? "function" == typeof e && this.loading[t].push(e) : (this.loading[t] = [], "function" == typeof e && this.loading[t].push(e), this.createScriptTag(t, function (t, e) {
                    a.loaded[t] = e;
                    for (var o = 0, n = a.loading[t].length; n > o; o++)
                        a.loading[t][o](t, e);
                    delete a.loading[t]
                }, o))
        },
        createScriptTag: function (t, e, o) {
            var a = document.createElement("script");
            a.setAttribute("type", "text/javascript"),
            a.setAttribute("src", t),
            o && a.setAttribute("charset", o),
            a.onload = a.onreadystatechange = function () {
                this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a.onload = a.onreadystatechange = null, "function" == typeof e && e(t, !0))
            },
            a.onerror = function () {
                "function" == typeof e && e(t, !1)
            },
            document.getElementsByTagName("head")[0].appendChild(a)
        }
    }
}
(Zepto); ;
!function (t) {
    function i(i) {
        i = i || (t.os.android && t.browser.uc ? 1.5 : window.devicePixelRatio);
        var e = function (t, i) {
            return Math[t](window.innerHeight, window.innerWidth) * i
        },
        n = e("min", i),
        r = e("max", i);
        return {
            width: n,
            height: r
        }
    }
    function e(t) {
        t = parseInt(t, 10);
        var e = null;
        switch (t) {
        case 1:
            e = i();
            break;
        default:
            e = i(1)
        }
        return {
            width: e.width,
            height: e.height
        }
    }
    function n(t) {
        t = parseInt(t, 10);
        var i = "";
        switch (t) {
        case 2:
            i = 80;
            break;
        default:
            i = 100
        }
        return {
            quality: i
        }
    }
    t.resolution = i,
    t.getImgSizePara = e,
    t.getImgQualityPara = n
}
(Zepto); ;
!function (e) {
    var n = function () {
        var n = {};
        return {
            data: function (o) {
                e.extend(n, o)
            },
            send: function (o, t) {
                o = e.extend({}, n, o);
                var a = F.require("page_data"),
                i = new Image,
                c = "https:" === location.protocol ? "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/img/track.gif?" : "http://static.tieba.baidu.com/tb/img/track.gif?",
                d = ["client_type=wap_smart", "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer), "uname=" + (o.uname && encodeURIComponent(o.uname) || ""), "task=" + (o.task && encodeURIComponent(o.task) || ""), "page=" + (o.page && encodeURIComponent(o.page) || ""), "locate=" + (o.locate && encodeURIComponent(o.locate) || ""), "type=" + (o.type && encodeURIComponent(o.type) || "click"), "fname=" + (o.fname && encodeURIComponent(o.fname) || ""), "fid=" + (o.fid && encodeURIComponent(o.fid) || ""), "tid=" + (o.tid && encodeURIComponent(o.tid) || ""), "pid=" + (o.pid && encodeURIComponent(o.pid) || ""), "version=" + (e.os.android ? "android" : "iphone"), "first_dir=" + (o.firstDir && encodeURIComponent(o.firstDir) || ""), "second_dir=" + (o.secondDir && encodeURIComponent(o.secondDir) || ""), "net_type=" + e.netType.type, "is_new_user=" + (o.isNewUser && encodeURIComponent(o.isNewUser) || ""), "ab_type=" + (a && a.abtest && a.abtest.ue_revision ? "1" : "0"), "obj_id=" + (o.obj_id && encodeURIComponent(o.obj_id) || ""), "obj_name=" + (o.obj_name && encodeURIComponent(o.obj_name) || ""), "_t=" + 1e3 * new Date, "is_search=" + (o.is_search && encodeURIComponent(o.is_search) || ""), "search_type=" + (o.search_type && encodeURIComponent(o.search_type) || ""), "is_login=" + (o.is_login && encodeURIComponent(o.is_login) || "")];
                if (e.isPlainObject(t))
                    for (key in t)
                        d.push(key + "=" + t[key]);
                c += d.join("&"),
                i.src = c,
                o.callback ? i.onload = function () {
                    o.callback(),
                    i = null
                }
                 : i = null
            }
        }
    }
    ();
    e.track = n.send,
    e.track.data = n.data
}
(Zepto); ;
!function (e) {
    var n = function () {
        var n = "/mo/q/redirect?",
        t = {};
        return {
            data: function (n) {
                e.extend(t, n)
            },
            getUrl: function (o, r) {
                o = e.extend({}, t, o);
                var d = ["tbjump=" + (o.tbjump && encodeURIComponent(o.tbjump) || ""), "page=" + (o.page && encodeURIComponent(o.page) || ""), "task=" + (o.task && encodeURIComponent(o.task) || ""), "locate=" + (o.locate && encodeURIComponent(o.locate) || ""), "type=click", "fname=" + (o.fname && encodeURIComponent(e.escapeHTML(o.fname)) || ""), "fid=" + (o.fid && encodeURIComponent(o.fid) || ""), "tid=" + (o.tid && encodeURIComponent(o.tid) || ""), "pid=" + (o.pid && encodeURIComponent(o.pid) || ""), "version=" + (e.os.android ? "android" : "iphone"), "first_dir=" + (o.firstDir && encodeURIComponent(o.firstDir) || ""), "second_dir=" + (o.secondDir && encodeURIComponent(o.secondDir) || ""), "st_type=" + (o.stType && encodeURIComponent(o.stType) || ""), "st_param=" + (o.stParam && encodeURIComponent(o.stParam) || ""), "_t=" + 1e3 * new Date];
                if (o.redirectUrl && (n = o.redirectUrl + "?"), e.isPlainObject(r))
                    for (key in r)
                        d.push(key + "=" + r[key]);
                return n + d.join("&")
            },
            getadRedirect: function (n, o, r) {
                r || (r = "//www.tieba.baidu.com/mo/q/adredirect?");
                var n = e.extend({}, t, n),
                d = "";
                for (var i in n) {
                    var a = typeof n[i];
                    "string" != a && "number" != a || "" == n || (d += "&" + i + "=" + encodeURIComponent(n[i]))
                }
                return o = o ? o : "",
                d += "&bdirection=" + o,
                r + d.substr(1) + ""
            }
        }
    }
    ();
    e.redirect = n.getUrl,
    e.adredirect = n.getadRedirect,
    e.redirect.data = n.data
}
(Zepto); ;
!function (t) {
    function n(n, e) {
        var u = n[c],
        f = u && a[u];
        if (void 0 === e)
            return f || i(n);
        if (f) {
            if (e in f)
                return f[e];
            var s = o(e);
            if (s in f)
                return f[s]
        }
        return r.call(t(n), e)
    }
    function i(n, i, r) {
        var u = n[c] || (n[c] = ++t.uuid),
        f = a[u] || (a[u] = e(n));
        return void 0 !== i && (f[o(i)] = r),
        f
    }
    function e(n) {
        var i = {};
        return t.each(n.attributes, function (t, n) {
            0 == n.name.indexOf("data-") && (i[o(n.name.replace("data-", ""))] = n.value)
        }),
        i
    }
    var a = {},
    r = t.fn.data,
    o = t.camelCase || t.zepto.camelize,
    c = t.expando = "Zepto" + +new Date;
    t.fn.data = function (e, a) {
        return void 0 === a ? t.isPlainObject(e) ? this.each(function (n, a) {
            t.each(e, function (t, n) {
                i(a, t, n)
            })
        }) : 0 == this.length ? void 0 : n(this[0], e) : this.each(function () {
            i(this, e, a)
        })
    },
    t.fn.removeData = function (n) {
        return "string" == typeof n && (n = n.split(/\s+/)),
        this.each(function () {
            var i = this[c],
            e = i && a[i];
            e && t.each(n, function () {
                delete e[o(this)]
            })
        })
    },
    t.fn.scrollTop = function () {
        return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
    }
}
(Zepto); ;
!function (t, i) {
    function n() {
        return s++
    }
    function e(i, n) {
        var e = {};
        return Object.create ? e = Object.create(i) : e.__proto__ = i,
        t.extend(e, n || {})
    }
    function r(i, n) {
        return n && (o(i, n), t.extend(i.prototype, n)),
        t.extend(i, {
            plugins: [],
            register: function (i) {
                return t.isObject(i) ? void t.extend(this.prototype, i) : void this.plugins.push(i)
            }
        })
    }
    function o(i, n) {
        var r,
        o = n.inherit || f,
        a = o.prototype;
        return r = i.prototype = e(a, {
                $factory: i,
                $super: function (i) {
                    var n = a[i];
                    return t.isFunction(n) ? n.apply(this, t.slice(arguments, 1)) : n
                }
            }),
        r._data = t.extend({}, a._data, n._data),
        delete n._data,
        i
    }
    function a(n) {
        t.fn[n] = function (e) {
            var r,
            o,
            a = t.slice(arguments, 1);
            return t.each(this, function (s, u) {
                if (o = t(u).data(d + n) || t.ui[n](u, t.extend(t.isPlainObject(e) ? e : {}, {
                                setup: !0
                            })), t.isString(e)) {
                    if (r = t.isFunction(o[e]) && o[e].apply(o, a), "this" == e || r !== o && r !== i)
                        return !1;
                    r = null
                }
            }),
            r || ("this" == e ? o : this)
        }
    }
    t.ui = t.ui || {
        version: "2.0.3",
        guid: n,
        define: function (i, o, s) {
            s && (o.inherit = s);
            var u = t.ui[i] = r(function (r, o) {
                    var a = e(u.prototype, {
                            _id: t.parseTpl(c, {
                                name: i,
                                id: n()
                            })
                        });
                    return a._createWidget.call(a, r, o, u.plugins),
                    a
                }, o);
            return a(i, u)
        },
        isWidget: function (n, e) {
            return n instanceof(e === i ? f : t.ui[e] || u)
        }
    };
    var s = 1,
    u = function () {},
    c = "<%=name%>-<%=id%>",
    d = "gmu-widget",
    f = function () {};
    t.extend(f.prototype, {
        _data: {
            status: !0
        },
        data: function (i, n) {
            var e = this._data;
            return t.isObject(i) ? t.extend(e, i) : t.isUndefined(n) ? e[i] : e[i] = n
        },
        _createWidget: function (n, e, r) {
            t.isObject(n) && (e = n || {}, n = i);
            var o = t.extend({}, this._data, e);
            t.extend(this, {
                _el: n ? t(n) : i,
                _data: o
            });
            var a = this;
            t.each(r, function (i, n) {
                var e = n.apply(a);
                if (e && t.isPlainObject(e)) {
                    var r = a._data.disablePlugin;
                    (!r || t.isString(r) && -1 == r.indexOf(e.pluginName)) && (delete e.pluginName, t.each(e, function (i, n) {
                            var e;
                            a[i] = (e = a[i]) && t.isFunction(n) ? function () {
                                return a[i + "Org"] = e,
                                n.apply(a, arguments)
                            }
                             : n
                        }))
                }
            }),
            o.setup ? this._setup(n && n.getAttribute("data-mode")) : this._create(),
            this._init();
            var a = this,
            s = this.trigger("init").root();
            s.on("tap", function (t) {
                (t.bubblesList || (t.bubblesList = [])).push(a)
            }),
            s.data(d + this._id.split("-")[0], this)
        },
        _create: function () {},
        _setup: function () {},
        root: function (t) {
            return this._el = t || this._el
        },
        id: function (t) {
            return this._id = t || this._id
        },
        destroy: function () {
            var i,
            n = this;
            t.each(this.data("components") || [], function (t, i) {
                i.destroy()
            }),
            i = this.trigger("destroy").off().root(),
            i.find("*").off(),
            i.removeData(d).off().remove(),
            this.__proto__ = null,
            t.each(this, function (t) {
                delete n[t]
            })
        },
        component: function (i) {
            var n = this.data("components") || this.data("components", []);
            try {
                n.push(t.isFunction(i) ? i.apply(this) : i)
            } catch (e) {}
            return this
        },
        on: function (i, n) {
            return this.root().on(i, t.proxy(n, this)),
            this
        },
        off: function (t, i) {
            return this.root().off(t, i),
            this
        },
        trigger: function (i, n) {
            i = t.isString(i) ? t.Event(i) : i;
            var e,
            r = this.data(i.type);
            return r && t.isFunction(r) && (i.data = n, e = r.apply(this, [i].concat(n)), e === !1 || i.defaultPrevented) ? this : (this.root().trigger(i, n), this)
        }
    })
}
(Zepto); ;
!function (e, t) {
    e.ui.define("refresh", {
        _data: {
            ready: null,
            statechange: null
        },
        _setup: function () {
            var e = this,
            t = e._data,
            n = e.root();
            return t.$upElem = n.find(".ui-refresh-up"),
            t.$downElem = n.find(".ui-refresh-down"),
            n.addClass("ui-refresh"),
            e
        },
        _init: function () {
            var t = this,
            n = t._data;
            return e.each(["up", "down"], function (e, a) {
                var i = n["$" + a + "Elem"],
                r = i.get(0);
                i.length && (t._status(a, !0), (!r.childNodes.length || i.find(".ui-refresh-icon").length && i.find(".ui-refresh-label").length) && (!r.childNodes.length && t._createBtn(a), n.refreshInfo || (n.refreshInfo = {}), n.refreshInfo[a] = {
                            $icon: i.find(".ui-refresh-icon"),
                            $label: i.find(".ui-refresh-label"),
                            text: i.find(".ui-refresh-label").html()
                        }), i.on("click", function () {
                        t._status(a) && !n._actDir && (t._setStyle(a, "loading"), t._loadingAction(a, "click"))
                    }))
            }),
            t
        },
        _createBtn: function (e) {
            return this._data["$" + e + "Elem"].html('<span class="ui-refresh-icon"></span><span class="ui-refresh-label">\u52A0\u8F7D\u66F4\u591A</span>'),
            this
        },
        _setStyle: function (t, n) {
            var a = this,
            i = e.Event("statechange");
            return a.trigger(i, [a._data["$" + t + "Elem"], n, t]),
            i.defaultPrevented ? a : a._changeStyle(t, n)
        },
        _changeStyle: function (e, t) {
            var n = this._data,
            a = n.refreshInfo[e];
            switch (t) {
            case "loaded":
                a.$label.html(a.text),
                a.$icon.removeClass(),
                n._actDir = "";
                break;
            case "loading":
                a.$label.html(""),
                a.$icon.addClass("ui-loading"),
                n._actDir = e;
                break;
            case "disable":
                a.$label.html("")
            }
            return this
        },
        _loadingAction: function (t, n) {
            var a = this,
            i = a._data,
            r = i.ready;
            return e.isFunction(r) && r.call(a, t, n),
            a._status(t, !1),
            a
        },
        afterDataLoading: function (e) {
            var t = this,
            n = e || t._data._actDir;
            return t._setStyle(n, "loaded"),
            t._status(n, !0),
            t
        },
        _status: function (e, n) {
            var a = this._data;
            return n === t ? a["_" + e + "Open"] : a["_" + e + "Open"] = !!n
        },
        _setable: function (t, n, a) {
            var i = this,
            r = i._data,
            s = n ? [n] : ["up", "down"];
            return e.each(s, function (e, n) {
                var s = r["$" + n + "Elem"];
                s.length && (t ? s.show() : a ? s.hide() : i._setStyle(n, "disable"), i._status(n, t))
            }),
            i
        },
        disable: function (e, t) {
            return this._setable(!1, e, t)
        },
        enable: function (e) {
            return this._setable(!0, e)
        }
    })
}
(Zepto); ;
!function (e) {
    e.ui.refresh.register(function () {
        return {
            pluginName: "lite",
            _init: function () {
                var t = this,
                r = t._data,
                n = t.root();
                return t._initOrg(),
                r.seamless && e(document).on("scrollStop", e.proxy(t._eventHandler, t)),
                n.on("touchstart touchmove touchend touchcancel", e.proxy(t._eventHandler, t)),
                r.wrapperH = t.root().height(),
                r.wrapperTop = t.root().offset().top,
                r._win = window,
                r._body = document.body,
                t
            },
            _changeStyle: function (e, t) {
                var r = this,
                n = r._data.refreshInfo[e];
                return "beforeload" == t && (n.$icon.removeClass("ui-loading"), n.$label.html("")),
                r._changeStyleOrg(e, t)
            },
            _startHandler: function (e) {
                this._data._startY = e.touches[0].pageY
            },
            _moveHandler: function (e) {
                var t = this,
                r = t._data,
                n = r._startY,
                o = n - e.touches[0].pageY,
                a = window.innerHeight,
                i = r.threshold || (r.wrapperH < a ? r.wrapperH / 2 + r.wrapperTop || 0 : a / 2);
                if (t._status("down") && !(0 > o))
                    return !r._refreshing && n >= document.body.scrollHeight - a + i && o > 10 && (t._setStyle("down", "beforeload"), r._refreshing = !0), t
            },
            _endHandler: function () {
                var e = this,
                t = e._data;
                return e._setStyle("down", "loading"),
                e._loadingAction("down", "pull"),
                t._refreshing = !1,
                e
            },
            _eventHandler: function (t) {
                var r = this,
                n = r._data;
                switch (t.type) {
                case "touchstart":
                    r._startHandler(t);
                    break;
                case "touchmove":
                    clearTimeout(n._endTimer),
                    n._endTimer = e.later(function () {
                            r._endHandler()
                        }, 300),
                    r._moveHandler(t);
                    break;
                case "touchend":
                case "touchcancel":
                    clearTimeout(n._endTimer),
                    n._refreshing && r._endHandler();
                    break;
                case "scrollStop":
                    !n._refreshing && n._win.pageYOffset >= n._body.scrollHeight - n._win.innerHeight + (n.threshold || -1) && r._endHandler()
                }
                return r
            }
        }
    })
}
(Zepto);

F.module("sglobal/widget/pic_free_mode_adapter", function (e, i) {
    return i = _.Widget.extend({
            initialize: function () {
                var e = this.$el,
                i = setTimeout(function () {
                        e.addClass("pic_free_mode")
                    }, 1e3),
                o = new Image;
                o.onerror = function () {
                    clearTimeout(i),
                    e.removeClass("pic_free_mode")
                },
                o.src = "//0.0.0.0/"
            }
        })
}, []);
F.module("sglobal/widget/appStarterConf", function (t, e) {
    return e = _.Widget.extend({
            initialize: function () {
                PageUnit.load("app_starter_conf_port")
            }
        })
}, []);

F.module("swebview/widget/downloadPage", function (o, t) {
    return t = _.Widget.extend({
            initialize: function (o) {
                this.opts = $.extend({}, o),
                this.bindEvent();
                var t = navigator.userAgent,
                n = / tieba\//i.test(t);
                0 != this.opts.autoDownLoad || n || this.downApp()
            },
            getQueryString: function (o) {
                var t = new RegExp("(^|&)" + o + "=([^&]*)(&|$)", "i"),
                n = window.location.search.substr(1).match(t);
                return null != n ? n[2] : null
            },
            bindEvent: function () {
                var o = this,
                t = navigator.userAgent,
                n = / tieba\//i.test(t);
                n && "bawu" == o.getQueryString("fr") ? $(".j_prompt").on("click", function () {
                    $(".j_prompt").hide()
                }) : ($(".downBtn").on("click", function () {
                        o.downApp()
                    }), $(".j_prompt").on("click", function () {
                        $(".j_prompt").hide()
                    }))
            },
            downApp: function () {
                var o = this;
                $.track({
                    task: "H5\u5BFC\u6D41",
                    locate: o.opts.from,
                    type: "click",
                    page: "h5",
                    obj_id: $.os.ios ? "1" : "0",
                    obj_name: $.os.version
                }),
                !$.os.ios && navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0 || $.os.ios && navigator.userAgent.toLowerCase().indexOf("weibo") >= 0 ? $(".j_prompt").show() : location.href = $.os.ios ? o.opts.iosUrl : o.opts.androidUrl
            }
        })
}, []);


