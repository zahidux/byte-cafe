function Em(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var sr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Cm = { exports: {} },
  cl = {},
  km = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = Symbol.for("react.element"),
  Nw = Symbol.for("react.portal"),
  Iw = Symbol.for("react.fragment"),
  Pw = Symbol.for("react.strict_mode"),
  Aw = Symbol.for("react.profiler"),
  Rw = Symbol.for("react.provider"),
  Lw = Symbol.for("react.context"),
  Ow = Symbol.for("react.forward_ref"),
  Mw = Symbol.for("react.suspense"),
  Dw = Symbol.for("react.memo"),
  jw = Symbol.for("react.lazy"),
  lh = Symbol.iterator;
function Bw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lh && e[lh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _m = Object.assign,
  Tm = {};
function oa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tm),
    (this.updater = n || Sm);
}
oa.prototype.isReactComponent = {};
oa.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
oa.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nm() {}
Nm.prototype = oa.prototype;
function Xu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tm),
    (this.updater = n || Sm);
}
var Ju = (Xu.prototype = new Nm());
Ju.constructor = Xu;
_m(Ju, oa.prototype);
Ju.isPureReactComponent = !0;
var ch = Array.isArray,
  Im = Object.prototype.hasOwnProperty,
  Zu = { current: null },
  Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Im.call(t, r) && !Pm.hasOwnProperty(r) && (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var u = Array(c), h = 0; h < c; h++) u[h] = arguments[h + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) i[r] === void 0 && (i[r] = c[r]);
  return {
    $$typeof: Eo,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Zu.current,
  };
}
function $w(e, t) {
  return {
    $$typeof: Eo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ed(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Eo;
}
function zw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var uh = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zw("" + e.key)
    : t.toString(36);
}
function ds(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Eo:
          case Nw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Zl(o, 0) : r),
      ch(i)
        ? ((n = ""),
          e != null && (n = e.replace(uh, "$&/") + "/"),
          ds(i, t, n, "", function (h) {
            return h;
          }))
        : i != null &&
          (ed(i) &&
            (i = $w(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(uh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ch(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var u = r + Zl(a, c);
      o += ds(a, t, n, u, i);
    }
  else if (((u = Bw(e)), typeof u == "function"))
    for (e = u.call(e), c = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + Zl(a, c++)), (o += ds(a, t, n, u, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ho(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ds(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function Uw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var At = { current: null },
  fs = { transition: null },
  Fw = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: fs,
    ReactCurrentOwner: Zu,
  };
ke.Children = {
  map: Ho,
  forEach: function (e, t, n) {
    Ho(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ho(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ho(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ed(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ke.Component = oa;
ke.Fragment = Iw;
ke.Profiler = Aw;
ke.PureComponent = Xu;
ke.StrictMode = Pw;
ke.Suspense = Mw;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fw;
ke.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _m({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Zu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (u in t)
      Im.call(t, u) &&
        !Pm.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    c = Array(u);
    for (var h = 0; h < u; h++) c[h] = arguments[h + 2];
    r.children = c;
  }
  return { $$typeof: Eo, type: e.type, key: i, ref: a, props: r, _owner: o };
};
ke.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rw, _context: e }),
    (e.Consumer = e)
  );
};
ke.createElement = Am;
ke.createFactory = function (e) {
  var t = Am.bind(null, e);
  return (t.type = e), t;
};
ke.createRef = function () {
  return { current: null };
};
ke.forwardRef = function (e) {
  return { $$typeof: Ow, render: e };
};
ke.isValidElement = ed;
ke.lazy = function (e) {
  return { $$typeof: jw, _payload: { _status: -1, _result: e }, _init: Uw };
};
ke.memo = function (e, t) {
  return { $$typeof: Dw, type: e, compare: t === void 0 ? null : t };
};
ke.startTransition = function (e) {
  var t = fs.transition;
  fs.transition = {};
  try {
    e();
  } finally {
    fs.transition = t;
  }
};
ke.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ke.useCallback = function (e, t) {
  return At.current.useCallback(e, t);
};
ke.useContext = function (e) {
  return At.current.useContext(e);
};
ke.useDebugValue = function () {};
ke.useDeferredValue = function (e) {
  return At.current.useDeferredValue(e);
};
ke.useEffect = function (e, t) {
  return At.current.useEffect(e, t);
};
ke.useId = function () {
  return At.current.useId();
};
ke.useImperativeHandle = function (e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
ke.useInsertionEffect = function (e, t) {
  return At.current.useInsertionEffect(e, t);
};
ke.useLayoutEffect = function (e, t) {
  return At.current.useLayoutEffect(e, t);
};
ke.useMemo = function (e, t) {
  return At.current.useMemo(e, t);
};
ke.useReducer = function (e, t, n) {
  return At.current.useReducer(e, t, n);
};
ke.useRef = function (e) {
  return At.current.useRef(e);
};
ke.useState = function (e) {
  return At.current.useState(e);
};
ke.useSyncExternalStore = function (e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
ke.useTransition = function () {
  return At.current.useTransition();
};
ke.version = "18.2.0";
km.exports = ke;
var D = km.exports;
const p = ll(D),
  Vw = Em({ __proto__: null, default: p }, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hw = D,
  Ww = Symbol.for("react.element"),
  Kw = Symbol.for("react.fragment"),
  Yw = Object.prototype.hasOwnProperty,
  Gw = Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Yw.call(t, r) && !qw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ww,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Gw.current,
  };
}
cl.Fragment = Kw;
cl.jsx = Rm;
cl.jsxs = Rm;
Cm.exports = cl;
var m = Cm.exports,
  Bc = {},
  Lm = { exports: {} },
  Wt = {},
  Om = { exports: {} },
  Mm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(F, ee) {
    var z = F.length;
    F.push(ee);
    e: for (; 0 < z; ) {
      var fe = (z - 1) >>> 1,
        H = F[fe];
      if (0 < i(H, ee)) (F[fe] = ee), (F[z] = H), (z = fe);
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var ee = F[0],
      z = F.pop();
    if (z !== ee) {
      F[0] = z;
      e: for (var fe = 0, H = F.length, G = H >>> 1; fe < G; ) {
        var Y = 2 * (fe + 1) - 1,
          _ = F[Y],
          R = Y + 1,
          me = F[R];
        if (0 > i(_, z))
          R < H && 0 > i(me, _)
            ? ((F[fe] = me), (F[R] = z), (fe = R))
            : ((F[fe] = _), (F[Y] = z), (fe = Y));
        else if (R < H && 0 > i(me, z)) (F[fe] = me), (F[R] = z), (fe = R);
        else break e;
      }
    }
    return ee;
  }
  function i(F, ee) {
    var z = F.sortIndex - ee.sortIndex;
    return z !== 0 ? z : F.id - ee.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      c = o.now();
    e.unstable_now = function () {
      return o.now() - c;
    };
  }
  var u = [],
    h = [],
    g = 1,
    y = null,
    b = 3,
    N = !1,
    S = !1,
    k = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(F) {
    for (var ee = n(h); ee !== null; ) {
      if (ee.callback === null) r(h);
      else if (ee.startTime <= F)
        r(h), (ee.sortIndex = ee.expirationTime), t(u, ee);
      else break;
      ee = n(h);
    }
  }
  function L(F) {
    if (((k = !1), E(F), !S))
      if (n(u) !== null) (S = !0), ht(A);
      else {
        var ee = n(h);
        ee !== null && we(L, ee.startTime - F);
      }
  }
  function A(F, ee) {
    (S = !1), k && ((k = !1), w(B), (B = -1)), (N = !0);
    var z = b;
    try {
      for (
        E(ee), y = n(u);
        y !== null && (!(y.expirationTime > ee) || (F && !te()));

      ) {
        var fe = y.callback;
        if (typeof fe == "function") {
          (y.callback = null), (b = y.priorityLevel);
          var H = fe(y.expirationTime <= ee);
          (ee = e.unstable_now()),
            typeof H == "function" ? (y.callback = H) : y === n(u) && r(u),
            E(ee);
        } else r(u);
        y = n(u);
      }
      if (y !== null) var G = !0;
      else {
        var Y = n(h);
        Y !== null && we(L, Y.startTime - ee), (G = !1);
      }
      return G;
    } finally {
      (y = null), (b = z), (N = !1);
    }
  }
  var C = !1,
    O = null,
    B = -1,
    $ = 5,
    K = -1;
  function te() {
    return !(e.unstable_now() - K < $);
  }
  function re() {
    if (O !== null) {
      var F = e.unstable_now();
      K = F;
      var ee = !0;
      try {
        ee = O(!0, F);
      } finally {
        ee ? Z() : ((C = !1), (O = null));
      }
    } else C = !1;
  }
  var Z;
  if (typeof v == "function")
    Z = function () {
      v(re);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      Se = ye.port2;
    (ye.port1.onmessage = re),
      (Z = function () {
        Se.postMessage(null);
      });
  } else
    Z = function () {
      I(re, 0);
    };
  function ht(F) {
    (O = F), C || ((C = !0), Z());
  }
  function we(F, ee) {
    B = I(function () {
      F(e.unstable_now());
    }, ee);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (F) {
      F.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || N || ((S = !0), ht(A));
    }),
    (e.unstable_forceFrameRate = function (F) {
      0 > F || 125 < F
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < F ? Math.floor(1e3 / F) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return b;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (F) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = b;
      }
      var z = b;
      b = ee;
      try {
        return F();
      } finally {
        b = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (F, ee) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var z = b;
      b = F;
      try {
        return ee();
      } finally {
        b = z;
      }
    }),
    (e.unstable_scheduleCallback = function (F, ee, z) {
      var fe = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? fe + z : fe))
          : (z = fe),
        F)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = z + H),
        (F = {
          id: g++,
          callback: ee,
          priorityLevel: F,
          startTime: z,
          expirationTime: H,
          sortIndex: -1,
        }),
        z > fe
          ? ((F.sortIndex = z),
            t(h, F),
            n(u) === null &&
              F === n(h) &&
              (k ? (w(B), (B = -1)) : (k = !0), we(L, z - fe)))
          : ((F.sortIndex = H), t(u, F), S || N || ((S = !0), ht(A))),
        F
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (F) {
      var ee = b;
      return function () {
        var z = b;
        b = ee;
        try {
          return F.apply(this, arguments);
        } finally {
          b = z;
        }
      };
    });
})(Mm);
Om.exports = Mm;
var Qw = Om.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm = D,
  Ht = Qw;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jm = new Set(),
  Xa = {};
function ui(e, t) {
  Yi(e, t), Yi(e + "Capture", t);
}
function Yi(e, t) {
  for (Xa[e] = t, e = 0; e < t.length; e++) jm.add(t[e]);
}
var Yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $c = Object.prototype.hasOwnProperty,
  Xw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dh = {},
  fh = {};
function Jw(e) {
  return $c.call(fh, e)
    ? !0
    : $c.call(dh, e)
    ? !1
    : Xw.test(e)
    ? (fh[e] = !0)
    : ((dh[e] = !0), !1);
}
function Zw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function e2(e, t, n, r) {
  if (t === null || typeof t > "u" || Zw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Rt(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var Et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Et[e] = new Rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Et[t] = new Rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Et[e] = new Rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Et[e] = new Rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Et[e] = new Rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Et[e] = new Rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Et[e] = new Rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Et[e] = new Rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Et[e] = new Rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var td = /[\-:]([a-z])/g;
function nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(td, nd);
    Et[t] = new Rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(td, nd);
    Et[t] = new Rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(td, nd);
  Et[t] = new Rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Et[e] = new Rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Et.xlinkHref = new Rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Et[e] = new Rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rd(e, t, n, r) {
  var i = Et.hasOwnProperty(t) ? Et[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (e2(t, n, i, r) && (n = null),
    r || i === null
      ? Jw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Jn = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wo = Symbol.for("react.element"),
  Ci = Symbol.for("react.portal"),
  ki = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  zc = Symbol.for("react.profiler"),
  Bm = Symbol.for("react.provider"),
  $m = Symbol.for("react.context"),
  ad = Symbol.for("react.forward_ref"),
  Uc = Symbol.for("react.suspense"),
  Fc = Symbol.for("react.suspense_list"),
  od = Symbol.for("react.memo"),
  fr = Symbol.for("react.lazy"),
  zm = Symbol.for("react.offscreen"),
  hh = Symbol.iterator;
function wa(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hh && e[hh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xe = Object.assign,
  ec;
function Ra(e) {
  if (ec === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ec = (t && t[1]) || "";
    }
  return (
    `
` +
    ec +
    e
  );
}
var tc = !1;
function nc(e, t) {
  if (!e || tc) return "";
  tc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      e();
    }
  } catch (h) {
    if (h && r && typeof h.stack == "string") {
      for (
        var i = h.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          c = a.length - 1;
        1 <= o && 0 <= c && i[o] !== a[c];

      )
        c--;
      for (; 1 <= o && 0 <= c; o--, c--)
        if (i[o] !== a[c]) {
          if (o !== 1 || c !== 1)
            do
              if ((o--, c--, 0 > c || i[o] !== a[c])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= c);
          break;
        }
    }
  } finally {
    (tc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ra(e) : "";
}
function t2(e) {
  switch (e.tag) {
    case 5:
      return Ra(e.type);
    case 16:
      return Ra("Lazy");
    case 13:
      return Ra("Suspense");
    case 19:
      return Ra("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nc(e.type, !1)), e;
    case 11:
      return (e = nc(e.type.render, !1)), e;
    case 1:
      return (e = nc(e.type, !0)), e;
    default:
      return "";
  }
}
function Vc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ki:
      return "Fragment";
    case Ci:
      return "Portal";
    case zc:
      return "Profiler";
    case id:
      return "StrictMode";
    case Uc:
      return "Suspense";
    case Fc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $m:
        return (e.displayName || "Context") + ".Consumer";
      case Bm:
        return (e._context.displayName || "Context") + ".Provider";
      case ad:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case od:
        return (
          (t = e.displayName || null), t !== null ? t : Vc(e.type) || "Memo"
        );
      case fr:
        (t = e._payload), (e = e._init);
        try {
          return Vc(e(t));
        } catch {}
    }
  return null;
}
function n2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Vc(t);
    case 8:
      return t === id ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Um(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function r2(e) {
  var t = Um(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ko(e) {
  e._valueTracker || (e._valueTracker = r2(e));
}
function Fm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Um(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ns(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hc(e, t) {
  var n = t.checked;
  return Xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ph(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Vm(e, t) {
  (t = t.checked), t != null && rd(e, "checked", t, !1);
}
function Wc(e, t) {
  Vm(e, t);
  var n = Pr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Kc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kc(e, t.type, Pr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Kc(e, t, n) {
  (t !== "number" || Ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var La = Array.isArray;
function ji(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92));
      if (La(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pr(n) };
}
function Hm(e, t) {
  var n = Pr(t.value),
    r = Pr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yo,
  Km = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Yo = Yo || document.createElement("div"),
          Yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ja(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ba = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  i2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ba).forEach(function (e) {
  i2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ba[t] = Ba[e]);
  });
});
function Ym(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ba.hasOwnProperty(e) && Ba[e])
    ? ("" + t).trim()
    : t + "px";
}
function Gm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ym(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var a2 = Xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qc(e, t) {
  if (t) {
    if (a2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function Qc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xc = null;
function sd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jc = null,
  Bi = null,
  $i = null;
function yh(e) {
  if ((e = So(e))) {
    if (typeof Jc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = pl(t)), Jc(e.stateNode, e.type, t));
  }
}
function qm(e) {
  Bi ? ($i ? $i.push(e) : ($i = [e])) : (Bi = e);
}
function Qm() {
  if (Bi) {
    var e = Bi,
      t = $i;
    if ((($i = Bi = null), yh(e), t)) for (e = 0; e < t.length; e++) yh(t[e]);
  }
}
function Xm(e, t) {
  return e(t);
}
function Jm() {}
var rc = !1;
function Zm(e, t, n) {
  if (rc) return e(t, n);
  rc = !0;
  try {
    return Xm(e, t, n);
  } finally {
    (rc = !1), (Bi !== null || $i !== null) && (Jm(), Qm());
  }
}
function Za(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var Zc = !1;
if (Yn)
  try {
    var ba = {};
    Object.defineProperty(ba, "passive", {
      get: function () {
        Zc = !0;
      },
    }),
      window.addEventListener("test", ba, ba),
      window.removeEventListener("test", ba, ba);
  } catch {
    Zc = !1;
  }
function o2(e, t, n, r, i, a, o, c, u) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (g) {
    this.onError(g);
  }
}
var $a = !1,
  Is = null,
  Ps = !1,
  eu = null,
  s2 = {
    onError: function (e) {
      ($a = !0), (Is = e);
    },
  };
function l2(e, t, n, r, i, a, o, c, u) {
  ($a = !1), (Is = null), o2.apply(s2, arguments);
}
function c2(e, t, n, r, i, a, o, c, u) {
  if ((l2.apply(this, arguments), $a)) {
    if ($a) {
      var h = Is;
      ($a = !1), (Is = null);
    } else throw Error(U(198));
    Ps || ((Ps = !0), (eu = h));
  }
}
function di(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function e0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wh(e) {
  if (di(e) !== e) throw Error(U(188));
}
function u2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = di(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return wh(i), e;
        if (a === r) return wh(i), t;
        a = a.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, c = i.child; c; ) {
        if (c === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (c === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        c = c.sibling;
      }
      if (!o) {
        for (c = a.child; c; ) {
          if (c === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (c === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!o) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function t0(e) {
  return (e = u2(e)), e !== null ? n0(e) : null;
}
function n0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = n0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var r0 = Ht.unstable_scheduleCallback,
  bh = Ht.unstable_cancelCallback,
  d2 = Ht.unstable_shouldYield,
  f2 = Ht.unstable_requestPaint,
  lt = Ht.unstable_now,
  h2 = Ht.unstable_getCurrentPriorityLevel,
  ld = Ht.unstable_ImmediatePriority,
  i0 = Ht.unstable_UserBlockingPriority,
  As = Ht.unstable_NormalPriority,
  p2 = Ht.unstable_LowPriority,
  a0 = Ht.unstable_IdlePriority,
  ul = null,
  Tn = null;
function m2(e) {
  if (Tn && typeof Tn.onCommitFiberRoot == "function")
    try {
      Tn.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mn = Math.clz32 ? Math.clz32 : y2,
  g2 = Math.log,
  v2 = Math.LN2;
function y2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((g2(e) / v2) | 0)) | 0;
}
var Go = 64,
  qo = 4194304;
function Oa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var c = o & ~i;
    c !== 0 ? (r = Oa(c)) : ((a &= o), a !== 0 && (r = Oa(a)));
  } else (o = n & ~i), o !== 0 ? (r = Oa(o)) : a !== 0 && (r = Oa(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function w2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function b2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - mn(a),
      c = 1 << o,
      u = i[o];
    u === -1
      ? (!(c & n) || c & r) && (i[o] = w2(c, t))
      : u <= t && (e.expiredLanes |= c),
      (a &= ~c);
  }
}
function tu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function o0() {
  var e = Go;
  return (Go <<= 1), !(Go & 4194240) && (Go = 64), e;
}
function ic(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Co(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mn(t)),
    (e[t] = n);
}
function x2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - mn(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function cd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Re = 0;
function s0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var l0,
  ud,
  c0,
  u0,
  d0,
  nu = !1,
  Qo = [],
  yr = null,
  wr = null,
  br = null,
  eo = new Map(),
  to = new Map(),
  pr = [],
  E2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yr = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      br = null;
      break;
    case "pointerover":
    case "pointerout":
      eo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      to.delete(t.pointerId);
  }
}
function xa(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = So(t)), t !== null && ud(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function C2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (yr = xa(yr, e, t, n, r, i)), !0;
    case "dragenter":
      return (wr = xa(wr, e, t, n, r, i)), !0;
    case "mouseover":
      return (br = xa(br, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return eo.set(a, xa(eo.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), to.set(a, xa(to.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function f0(e) {
  var t = Kr(e.target);
  if (t !== null) {
    var n = di(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = e0(n)), t !== null)) {
          (e.blockedOn = t),
            d0(e.priority, function () {
              c0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xc = r), n.target.dispatchEvent(r), (Xc = null);
    } else return (t = So(n)), t !== null && ud(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eh(e, t, n) {
  hs(e) && n.delete(t);
}
function k2() {
  (nu = !1),
    yr !== null && hs(yr) && (yr = null),
    wr !== null && hs(wr) && (wr = null),
    br !== null && hs(br) && (br = null),
    eo.forEach(Eh),
    to.forEach(Eh);
}
function Ea(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nu ||
      ((nu = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, k2)));
}
function no(e) {
  function t(i) {
    return Ea(i, e);
  }
  if (0 < Qo.length) {
    Ea(Qo[0], e);
    for (var n = 1; n < Qo.length; n++) {
      var r = Qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yr !== null && Ea(yr, e),
      wr !== null && Ea(wr, e),
      br !== null && Ea(br, e),
      eo.forEach(t),
      to.forEach(t),
      n = 0;
    n < pr.length;
    n++
  )
    (r = pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pr.length && ((n = pr[0]), n.blockedOn === null); )
    f0(n), n.blockedOn === null && pr.shift();
}
var zi = Jn.ReactCurrentBatchConfig,
  Ls = !0;
function S2(e, t, n, r) {
  var i = Re,
    a = zi.transition;
  zi.transition = null;
  try {
    (Re = 1), dd(e, t, n, r);
  } finally {
    (Re = i), (zi.transition = a);
  }
}
function _2(e, t, n, r) {
  var i = Re,
    a = zi.transition;
  zi.transition = null;
  try {
    (Re = 4), dd(e, t, n, r);
  } finally {
    (Re = i), (zi.transition = a);
  }
}
function dd(e, t, n, r) {
  if (Ls) {
    var i = ru(e, t, n, r);
    if (i === null) pc(e, t, r, Os, n), xh(e, r);
    else if (C2(i, e, t, n, r)) r.stopPropagation();
    else if ((xh(e, r), t & 4 && -1 < E2.indexOf(e))) {
      for (; i !== null; ) {
        var a = So(i);
        if (
          (a !== null && l0(a),
          (a = ru(e, t, n, r)),
          a === null && pc(e, t, r, Os, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else pc(e, t, r, null, n);
  }
}
var Os = null;
function ru(e, t, n, r) {
  if (((Os = null), (e = sd(r)), (e = Kr(e)), e !== null))
    if (((t = di(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = e0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Os = e), null;
}
function h0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (h2()) {
        case ld:
          return 1;
        case i0:
          return 4;
        case As:
        case p2:
          return 16;
        case a0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null,
  fd = null,
  ps = null;
function p0() {
  if (ps) return ps;
  var e,
    t = fd,
    n = t.length,
    r,
    i = "value" in gr ? gr.value : gr.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (ps = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ms(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xo() {
  return !0;
}
function Ch() {
  return !1;
}
function Kt(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Xo
        : Ch),
      (this.isPropagationStopped = Ch),
      this
    );
  }
  return (
    Xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xo));
      },
      persist: function () {},
      isPersistent: Xo,
    }),
    t
  );
}
var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hd = Kt(sa),
  ko = Xe({}, sa, { view: 0, detail: 0 }),
  T2 = Kt(ko),
  ac,
  oc,
  Ca,
  dl = Xe({}, ko, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ca &&
            (Ca && e.type === "mousemove"
              ? ((ac = e.screenX - Ca.screenX), (oc = e.screenY - Ca.screenY))
              : (oc = ac = 0),
            (Ca = e)),
          ac);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : oc;
    },
  }),
  kh = Kt(dl),
  N2 = Xe({}, dl, { dataTransfer: 0 }),
  I2 = Kt(N2),
  P2 = Xe({}, ko, { relatedTarget: 0 }),
  sc = Kt(P2),
  A2 = Xe({}, sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R2 = Kt(A2),
  L2 = Xe({}, sa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  O2 = Kt(L2),
  M2 = Xe({}, sa, { data: 0 }),
  Sh = Kt(M2),
  D2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  j2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  B2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = B2[e]) ? !!t[e] : !1;
}
function pd() {
  return $2;
}
var z2 = Xe({}, ko, {
    key: function (e) {
      if (e.key) {
        var t = D2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ms(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? j2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pd,
    charCode: function (e) {
      return e.type === "keypress" ? ms(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ms(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  U2 = Kt(z2),
  F2 = Xe({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _h = Kt(F2),
  V2 = Xe({}, ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pd,
  }),
  H2 = Kt(V2),
  W2 = Xe({}, sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  K2 = Kt(W2),
  Y2 = Xe({}, dl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  G2 = Kt(Y2),
  q2 = [9, 13, 27, 32],
  md = Yn && "CompositionEvent" in window,
  za = null;
Yn && "documentMode" in document && (za = document.documentMode);
var Q2 = Yn && "TextEvent" in window && !za,
  m0 = Yn && (!md || (za && 8 < za && 11 >= za)),
  Th = " ",
  Nh = !1;
function g0(e, t) {
  switch (e) {
    case "keyup":
      return q2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function v0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Si = !1;
function X2(e, t) {
  switch (e) {
    case "compositionend":
      return v0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Nh = !0), Th);
    case "textInput":
      return (e = t.data), e === Th && Nh ? null : e;
    default:
      return null;
  }
}
function J2(e, t) {
  if (Si)
    return e === "compositionend" || (!md && g0(e, t))
      ? ((e = p0()), (ps = fd = gr = null), (Si = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return m0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Z2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ih(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Z2[e.type] : t === "textarea";
}
function y0(e, t, n, r) {
  qm(r),
    (t = Ms(t, "onChange")),
    0 < t.length &&
      ((n = new hd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ua = null,
  ro = null;
function e5(e) {
  I0(e, 0);
}
function fl(e) {
  var t = Ni(e);
  if (Fm(t)) return e;
}
function t5(e, t) {
  if (e === "change") return t;
}
var w0 = !1;
if (Yn) {
  var lc;
  if (Yn) {
    var cc = "oninput" in document;
    if (!cc) {
      var Ph = document.createElement("div");
      Ph.setAttribute("oninput", "return;"),
        (cc = typeof Ph.oninput == "function");
    }
    lc = cc;
  } else lc = !1;
  w0 = lc && (!document.documentMode || 9 < document.documentMode);
}
function Ah() {
  Ua && (Ua.detachEvent("onpropertychange", b0), (ro = Ua = null));
}
function b0(e) {
  if (e.propertyName === "value" && fl(ro)) {
    var t = [];
    y0(t, ro, e, sd(e)), Zm(e5, t);
  }
}
function n5(e, t, n) {
  e === "focusin"
    ? (Ah(), (Ua = t), (ro = n), Ua.attachEvent("onpropertychange", b0))
    : e === "focusout" && Ah();
}
function r5(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(ro);
}
function i5(e, t) {
  if (e === "click") return fl(t);
}
function a5(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function o5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vn = typeof Object.is == "function" ? Object.is : o5;
function io(e, t) {
  if (vn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$c.call(t, i) || !vn(e[i], t[i])) return !1;
  }
  return !0;
}
function Rh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lh(e, t) {
  var n = Rh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rh(n);
  }
}
function x0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? x0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function E0() {
  for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ns(e.document);
  }
  return t;
}
function gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function s5(e) {
  var t = E0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    x0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Lh(n, a));
        var o = Lh(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var l5 = Yn && "documentMode" in document && 11 >= document.documentMode,
  _i = null,
  iu = null,
  Fa = null,
  au = !1;
function Oh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  au ||
    _i == null ||
    _i !== Ns(r) ||
    ((r = _i),
    "selectionStart" in r && gd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fa && io(Fa, r)) ||
      ((Fa = r),
      (r = Ms(iu, "onSelect")),
      0 < r.length &&
        ((t = new hd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _i))));
}
function Jo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ti = {
    animationend: Jo("Animation", "AnimationEnd"),
    animationiteration: Jo("Animation", "AnimationIteration"),
    animationstart: Jo("Animation", "AnimationStart"),
    transitionend: Jo("Transition", "TransitionEnd"),
  },
  uc = {},
  C0 = {};
Yn &&
  ((C0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ti.animationend.animation,
    delete Ti.animationiteration.animation,
    delete Ti.animationstart.animation),
  "TransitionEvent" in window || delete Ti.transitionend.transition);
function hl(e) {
  if (uc[e]) return uc[e];
  if (!Ti[e]) return e;
  var t = Ti[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in C0) return (uc[e] = t[n]);
  return e;
}
var k0 = hl("animationend"),
  S0 = hl("animationiteration"),
  _0 = hl("animationstart"),
  T0 = hl("transitionend"),
  N0 = new Map(),
  Mh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lr(e, t) {
  N0.set(e, t), ui(t, [e]);
}
for (var dc = 0; dc < Mh.length; dc++) {
  var fc = Mh[dc],
    c5 = fc.toLowerCase(),
    u5 = fc[0].toUpperCase() + fc.slice(1);
  Lr(c5, "on" + u5);
}
Lr(k0, "onAnimationEnd");
Lr(S0, "onAnimationIteration");
Lr(_0, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(T0, "onTransitionEnd");
Yi("onMouseEnter", ["mouseout", "mouseover"]);
Yi("onMouseLeave", ["mouseout", "mouseover"]);
Yi("onPointerEnter", ["pointerout", "pointerover"]);
Yi("onPointerLeave", ["pointerout", "pointerover"]);
ui(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ui(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ui(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ui(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ui(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ma =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  d5 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));
function Dh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), c2(r, t, void 0, e), (e.currentTarget = null);
}
function I0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var c = r[o],
            u = c.instance,
            h = c.currentTarget;
          if (((c = c.listener), u !== a && i.isPropagationStopped())) break e;
          Dh(i, c, h), (a = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((c = r[o]),
            (u = c.instance),
            (h = c.currentTarget),
            (c = c.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          Dh(i, c, h), (a = u);
        }
    }
  }
  if (Ps) throw ((e = eu), (Ps = !1), (eu = null), e);
}
function Ve(e, t) {
  var n = t[uu];
  n === void 0 && (n = t[uu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (P0(t, e, 2, !1), n.add(r));
}
function hc(e, t, n) {
  var r = 0;
  t && (r |= 4), P0(n, e, r, t);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[Zo]) {
    (e[Zo] = !0),
      jm.forEach(function (n) {
        n !== "selectionchange" && (d5.has(n) || hc(n, !1, e), hc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || ((t[Zo] = !0), hc("selectionchange", !1, t));
  }
}
function P0(e, t, n, r) {
  switch (h0(t)) {
    case 1:
      var i = S2;
      break;
    case 4:
      i = _2;
      break;
    default:
      i = dd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Zc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function pc(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var c = r.stateNode.containerInfo;
        if (c === i || (c.nodeType === 8 && c.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; c !== null; ) {
          if (((o = Kr(c)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = a = o;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  Zm(function () {
    var h = a,
      g = sd(n),
      y = [];
    e: {
      var b = N0.get(e);
      if (b !== void 0) {
        var N = hd,
          S = e;
        switch (e) {
          case "keypress":
            if (ms(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = U2;
            break;
          case "focusin":
            (S = "focus"), (N = sc);
            break;
          case "focusout":
            (S = "blur"), (N = sc);
            break;
          case "beforeblur":
          case "afterblur":
            N = sc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = kh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = I2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = H2;
            break;
          case k0:
          case S0:
          case _0:
            N = R2;
            break;
          case T0:
            N = K2;
            break;
          case "scroll":
            N = T2;
            break;
          case "wheel":
            N = G2;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = O2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = _h;
        }
        var k = (t & 4) !== 0,
          I = !k && e === "scroll",
          w = k ? (b !== null ? b + "Capture" : null) : b;
        k = [];
        for (var v = h, E; v !== null; ) {
          E = v;
          var L = E.stateNode;
          if (
            (E.tag === 5 &&
              L !== null &&
              ((E = L),
              w !== null && ((L = Za(v, w)), L != null && k.push(oo(v, L, E)))),
            I)
          )
            break;
          v = v.return;
        }
        0 < k.length &&
          ((b = new N(b, S, null, n, g)), y.push({ event: b, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((b = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          b &&
            n !== Xc &&
            (S = n.relatedTarget || n.fromElement) &&
            (Kr(S) || S[Gn]))
        )
          break e;
        if (
          (N || b) &&
          ((b =
            g.window === g
              ? g
              : (b = g.ownerDocument)
              ? b.defaultView || b.parentWindow
              : window),
          N
            ? ((S = n.relatedTarget || n.toElement),
              (N = h),
              (S = S ? Kr(S) : null),
              S !== null &&
                ((I = di(S)), S !== I || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((N = null), (S = h)),
          N !== S)
        ) {
          if (
            ((k = kh),
            (L = "onMouseLeave"),
            (w = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = _h),
              (L = "onPointerLeave"),
              (w = "onPointerEnter"),
              (v = "pointer")),
            (I = N == null ? b : Ni(N)),
            (E = S == null ? b : Ni(S)),
            (b = new k(L, v + "leave", N, n, g)),
            (b.target = I),
            (b.relatedTarget = E),
            (L = null),
            Kr(g) === h &&
              ((k = new k(w, v + "enter", S, n, g)),
              (k.target = E),
              (k.relatedTarget = I),
              (L = k)),
            (I = L),
            N && S)
          )
            t: {
              for (k = N, w = S, v = 0, E = k; E; E = Ei(E)) v++;
              for (E = 0, L = w; L; L = Ei(L)) E++;
              for (; 0 < v - E; ) (k = Ei(k)), v--;
              for (; 0 < E - v; ) (w = Ei(w)), E--;
              for (; v--; ) {
                if (k === w || (w !== null && k === w.alternate)) break t;
                (k = Ei(k)), (w = Ei(w));
              }
              k = null;
            }
          else k = null;
          N !== null && jh(y, b, N, k, !1),
            S !== null && I !== null && jh(y, I, S, k, !0);
        }
      }
      e: {
        if (
          ((b = h ? Ni(h) : window),
          (N = b.nodeName && b.nodeName.toLowerCase()),
          N === "select" || (N === "input" && b.type === "file"))
        )
          var A = t5;
        else if (Ih(b))
          if (w0) A = a5;
          else {
            A = r5;
            var C = n5;
          }
        else
          (N = b.nodeName) &&
            N.toLowerCase() === "input" &&
            (b.type === "checkbox" || b.type === "radio") &&
            (A = i5);
        if (A && (A = A(e, h))) {
          y0(y, A, n, g);
          break e;
        }
        C && C(e, b, h),
          e === "focusout" &&
            (C = b._wrapperState) &&
            C.controlled &&
            b.type === "number" &&
            Kc(b, "number", b.value);
      }
      switch (((C = h ? Ni(h) : window), e)) {
        case "focusin":
          (Ih(C) || C.contentEditable === "true") &&
            ((_i = C), (iu = h), (Fa = null));
          break;
        case "focusout":
          Fa = iu = _i = null;
          break;
        case "mousedown":
          au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (au = !1), Oh(y, n, g);
          break;
        case "selectionchange":
          if (l5) break;
        case "keydown":
        case "keyup":
          Oh(y, n, g);
      }
      var O;
      if (md)
        e: {
          switch (e) {
            case "compositionstart":
              var B = "onCompositionStart";
              break e;
            case "compositionend":
              B = "onCompositionEnd";
              break e;
            case "compositionupdate":
              B = "onCompositionUpdate";
              break e;
          }
          B = void 0;
        }
      else
        Si
          ? g0(e, n) && (B = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (B = "onCompositionStart");
      B &&
        (m0 &&
          n.locale !== "ko" &&
          (Si || B !== "onCompositionStart"
            ? B === "onCompositionEnd" && Si && (O = p0())
            : ((gr = g),
              (fd = "value" in gr ? gr.value : gr.textContent),
              (Si = !0))),
        (C = Ms(h, B)),
        0 < C.length &&
          ((B = new Sh(B, e, null, n, g)),
          y.push({ event: B, listeners: C }),
          O ? (B.data = O) : ((O = v0(n)), O !== null && (B.data = O)))),
        (O = Q2 ? X2(e, n) : J2(e, n)) &&
          ((h = Ms(h, "onBeforeInput")),
          0 < h.length &&
            ((g = new Sh("onBeforeInput", "beforeinput", null, n, g)),
            y.push({ event: g, listeners: h }),
            (g.data = O)));
    }
    I0(y, t);
  });
}
function oo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ms(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = Za(e, n)),
      a != null && r.unshift(oo(e, a, i)),
      (a = Za(e, t)),
      a != null && r.push(oo(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Ei(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jh(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var c = n,
      u = c.alternate,
      h = c.stateNode;
    if (u !== null && u === r) break;
    c.tag === 5 &&
      h !== null &&
      ((c = h),
      i
        ? ((u = Za(n, a)), u != null && o.unshift(oo(n, u, c)))
        : i || ((u = Za(n, a)), u != null && o.push(oo(n, u, c)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var f5 = /\r\n?/g,
  h5 = /\u0000|\uFFFD/g;
function Bh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      f5,
      `
`
    )
    .replace(h5, "");
}
function es(e, t, n) {
  if (((t = Bh(t)), Bh(e) !== t && n)) throw Error(U(425));
}
function Ds() {}
var ou = null,
  su = null;
function lu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var cu = typeof setTimeout == "function" ? setTimeout : void 0,
  p5 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $h = typeof Promise == "function" ? Promise : void 0,
  m5 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $h < "u"
      ? function (e) {
          return $h.resolve(null).then(e).catch(g5);
        }
      : cu;
function g5(e) {
  setTimeout(function () {
    throw e;
  });
}
function mc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), no(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  no(t);
}
function xr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var la = Math.random().toString(36).slice(2),
  _n = "__reactFiber$" + la,
  so = "__reactProps$" + la,
  Gn = "__reactContainer$" + la,
  uu = "__reactEvents$" + la,
  v5 = "__reactListeners$" + la,
  y5 = "__reactHandles$" + la;
function Kr(e) {
  var t = e[_n];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gn] || n[_n])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zh(e); e !== null; ) {
          if ((n = e[_n])) return n;
          e = zh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function So(e) {
  return (
    (e = e[_n] || e[Gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ni(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function pl(e) {
  return e[so] || null;
}
var du = [],
  Ii = -1;
function Or(e) {
  return { current: e };
}
function He(e) {
  0 > Ii || ((e.current = du[Ii]), (du[Ii] = null), Ii--);
}
function ze(e, t) {
  Ii++, (du[Ii] = e.current), (e.current = t);
}
var Ar = {},
  Tt = Or(Ar),
  Dt = Or(!1),
  ei = Ar;
function Gi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function jt(e) {
  return (e = e.childContextTypes), e != null;
}
function js() {
  He(Dt), He(Tt);
}
function Uh(e, t, n) {
  if (Tt.current !== Ar) throw Error(U(168));
  ze(Tt, t), ze(Dt, n);
}
function A0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(U(108, n2(e) || "Unknown", i));
  return Xe({}, n, r);
}
function Bs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ar),
    (ei = Tt.current),
    ze(Tt, e),
    ze(Dt, Dt.current),
    !0
  );
}
function Fh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n
    ? ((e = A0(e, t, ei)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      He(Dt),
      He(Tt),
      ze(Tt, e))
    : He(Dt),
    ze(Dt, n);
}
var Mn = null,
  ml = !1,
  gc = !1;
function R0(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function w5(e) {
  (ml = !0), R0(e);
}
function Mr() {
  if (!gc && Mn !== null) {
    gc = !0;
    var e = 0,
      t = Re;
    try {
      var n = Mn;
      for (Re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mn = null), (ml = !1);
    } catch (i) {
      throw (Mn !== null && (Mn = Mn.slice(e + 1)), r0(ld, Mr), i);
    } finally {
      (Re = t), (gc = !1);
    }
  }
  return null;
}
var Pi = [],
  Ai = 0,
  $s = null,
  zs = 0,
  Jt = [],
  Zt = 0,
  ti = null,
  zn = 1,
  Un = "";
function Vr(e, t) {
  (Pi[Ai++] = zs), (Pi[Ai++] = $s), ($s = e), (zs = t);
}
function L0(e, t, n) {
  (Jt[Zt++] = zn), (Jt[Zt++] = Un), (Jt[Zt++] = ti), (ti = e);
  var r = zn;
  e = Un;
  var i = 32 - mn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - mn(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (zn = (1 << (32 - mn(t) + i)) | (n << i) | r),
      (Un = a + e);
  } else (zn = (1 << a) | (n << i) | r), (Un = e);
}
function vd(e) {
  e.return !== null && (Vr(e, 1), L0(e, 1, 0));
}
function yd(e) {
  for (; e === $s; )
    ($s = Pi[--Ai]), (Pi[Ai] = null), (zs = Pi[--Ai]), (Pi[Ai] = null);
  for (; e === ti; )
    (ti = Jt[--Zt]),
      (Jt[Zt] = null),
      (Un = Jt[--Zt]),
      (Jt[Zt] = null),
      (zn = Jt[--Zt]),
      (Jt[Zt] = null);
}
var Vt = null,
  Ft = null,
  Ke = !1,
  pn = null;
function O0(e, t) {
  var n = en(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Vt = e), (Ft = xr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Ft = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ti !== null ? { id: zn, overflow: Un } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = en(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Vt = e),
            (Ft = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hu(e) {
  if (Ke) {
    var t = Ft;
    if (t) {
      var n = t;
      if (!Vh(e, t)) {
        if (fu(e)) throw Error(U(418));
        t = xr(n.nextSibling);
        var r = Vt;
        t && Vh(e, t)
          ? O0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Vt = e));
      }
    } else {
      if (fu(e)) throw Error(U(418));
      (e.flags = (e.flags & -4097) | 2), (Ke = !1), (Vt = e);
    }
  }
}
function Hh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Vt = e;
}
function ts(e) {
  if (e !== Vt) return !1;
  if (!Ke) return Hh(e), (Ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lu(e.type, e.memoizedProps))),
    t && (t = Ft))
  ) {
    if (fu(e)) throw (M0(), Error(U(418)));
    for (; t; ) O0(e, t), (t = xr(t.nextSibling));
  }
  if ((Hh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ft = xr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ft = null;
    }
  } else Ft = Vt ? xr(e.stateNode.nextSibling) : null;
  return !0;
}
function M0() {
  for (var e = Ft; e; ) e = xr(e.nextSibling);
}
function qi() {
  (Ft = Vt = null), (Ke = !1);
}
function wd(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
var b5 = Jn.ReactCurrentBatchConfig;
function dn(e, t) {
  if (e && e.defaultProps) {
    (t = Xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Us = Or(null),
  Fs = null,
  Ri = null,
  bd = null;
function xd() {
  bd = Ri = Fs = null;
}
function Ed(e) {
  var t = Us.current;
  He(Us), (e._currentValue = t);
}
function pu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  (Fs = e),
    (bd = Ri = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function nn(e) {
  var t = e._currentValue;
  if (bd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ri === null)) {
      if (Fs === null) throw Error(U(308));
      (Ri = e), (Fs.dependencies = { lanes: 0, firstContext: e });
    } else Ri = Ri.next = e;
  return t;
}
var Yr = null;
function Cd(e) {
  Yr === null ? (Yr = [e]) : Yr.push(e);
}
function D0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Cd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    qn(e, r)
  );
}
function qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hr = !1;
function kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function j0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      qn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Cd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    qn(e, n)
  );
}
function gs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
  }
}
function Wh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Vs(e, t, n, r) {
  var i = e.updateQueue;
  hr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var u = c,
      h = u.next;
    (u.next = null), o === null ? (a = h) : (o.next = h), (o = u);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (c = g.lastBaseUpdate),
      c !== o &&
        (c === null ? (g.firstBaseUpdate = h) : (c.next = h),
        (g.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var y = i.baseState;
    (o = 0), (g = h = u = null), (c = a);
    do {
      var b = c.lane,
        N = c.eventTime;
      if ((r & b) === b) {
        g !== null &&
          (g = g.next =
            {
              eventTime: N,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var S = e,
            k = c;
          switch (((b = t), (N = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                y = S.call(N, y, b);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (b = typeof S == "function" ? S.call(N, y, b) : S),
                b == null)
              )
                break e;
              y = Xe({}, y, b);
              break e;
            case 2:
              hr = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (b = i.effects),
          b === null ? (i.effects = [c]) : b.push(c));
      } else
        (N = {
          eventTime: N,
          lane: b,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          g === null ? ((h = g = N), (u = y)) : (g = g.next = N),
          (o |= b);
      if (((c = c.next), c === null)) {
        if (((c = i.shared.pending), c === null)) break;
        (b = c),
          (c = b.next),
          (b.next = null),
          (i.lastBaseUpdate = b),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (u = y),
      (i.baseState = u),
      (i.firstBaseUpdate = h),
      (i.lastBaseUpdate = g),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (ri |= o), (e.lanes = o), (e.memoizedState = y);
  }
}
function Kh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(U(191, i));
        i.call(r);
      }
    }
}
var B0 = new Dm.Component().refs;
function mu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? di(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      i = kr(e),
      a = Wn(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Er(e, a, i)),
      t !== null && (gn(t, e, i, r), gs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      i = kr(e),
      a = Wn(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Er(e, a, i)),
      t !== null && (gn(t, e, i, r), gs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pt(),
      r = kr(e),
      i = Wn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Er(e, i, r)),
      t !== null && (gn(t, e, r, n), gs(t, e, r));
  },
};
function Yh(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !io(n, r) || !io(i, a)
      : !0
  );
}
function $0(e, t, n) {
  var r = !1,
    i = Ar,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = nn(a))
      : ((i = jt(t) ? ei : Tt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Gi(e, i) : Ar)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Gh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function gu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = B0), kd(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = nn(a))
    : ((a = jt(t) ? ei : Tt.current), (i.context = Gi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (mu(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && gl.enqueueReplaceState(i, i.state, null),
      Vs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ka(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var c = i.refs;
            c === B0 && (c = i.refs = {}),
              o === null ? delete c[a] : (c[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function ns(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qh(e) {
  var t = e._init;
  return t(e._payload);
}
function z0(e) {
  function t(w, v) {
    if (e) {
      var E = w.deletions;
      E === null ? ((w.deletions = [v]), (w.flags |= 16)) : E.push(v);
    }
  }
  function n(w, v) {
    if (!e) return null;
    for (; v !== null; ) t(w, v), (v = v.sibling);
    return null;
  }
  function r(w, v) {
    for (w = new Map(); v !== null; )
      v.key !== null ? w.set(v.key, v) : w.set(v.index, v), (v = v.sibling);
    return w;
  }
  function i(w, v) {
    return (w = Sr(w, v)), (w.index = 0), (w.sibling = null), w;
  }
  function a(w, v, E) {
    return (
      (w.index = E),
      e
        ? ((E = w.alternate),
          E !== null
            ? ((E = E.index), E < v ? ((w.flags |= 2), v) : E)
            : ((w.flags |= 2), v))
        : ((w.flags |= 1048576), v)
    );
  }
  function o(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function c(w, v, E, L) {
    return v === null || v.tag !== 6
      ? ((v = Cc(E, w.mode, L)), (v.return = w), v)
      : ((v = i(v, E)), (v.return = w), v);
  }
  function u(w, v, E, L) {
    var A = E.type;
    return A === ki
      ? g(w, v, E.props.children, L, E.key)
      : v !== null &&
        (v.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === fr &&
            qh(A) === v.type))
      ? ((L = i(v, E.props)), (L.ref = ka(w, v, E)), (L.return = w), L)
      : ((L = Es(E.type, E.key, E.props, null, w.mode, L)),
        (L.ref = ka(w, v, E)),
        (L.return = w),
        L);
  }
  function h(w, v, E, L) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== E.containerInfo ||
      v.stateNode.implementation !== E.implementation
      ? ((v = kc(E, w.mode, L)), (v.return = w), v)
      : ((v = i(v, E.children || [])), (v.return = w), v);
  }
  function g(w, v, E, L, A) {
    return v === null || v.tag !== 7
      ? ((v = Jr(E, w.mode, L, A)), (v.return = w), v)
      : ((v = i(v, E)), (v.return = w), v);
  }
  function y(w, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Cc("" + v, w.mode, E)), (v.return = w), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Wo:
          return (
            (E = Es(v.type, v.key, v.props, null, w.mode, E)),
            (E.ref = ka(w, null, v)),
            (E.return = w),
            E
          );
        case Ci:
          return (v = kc(v, w.mode, E)), (v.return = w), v;
        case fr:
          var L = v._init;
          return y(w, L(v._payload), E);
      }
      if (La(v) || wa(v))
        return (v = Jr(v, w.mode, E, null)), (v.return = w), v;
      ns(w, v);
    }
    return null;
  }
  function b(w, v, E, L) {
    var A = v !== null ? v.key : null;
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return A !== null ? null : c(w, v, "" + E, L);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Wo:
          return E.key === A ? u(w, v, E, L) : null;
        case Ci:
          return E.key === A ? h(w, v, E, L) : null;
        case fr:
          return (A = E._init), b(w, v, A(E._payload), L);
      }
      if (La(E) || wa(E)) return A !== null ? null : g(w, v, E, L, null);
      ns(w, E);
    }
    return null;
  }
  function N(w, v, E, L, A) {
    if ((typeof L == "string" && L !== "") || typeof L == "number")
      return (w = w.get(E) || null), c(v, w, "" + L, A);
    if (typeof L == "object" && L !== null) {
      switch (L.$$typeof) {
        case Wo:
          return (w = w.get(L.key === null ? E : L.key) || null), u(v, w, L, A);
        case Ci:
          return (w = w.get(L.key === null ? E : L.key) || null), h(v, w, L, A);
        case fr:
          var C = L._init;
          return N(w, v, E, C(L._payload), A);
      }
      if (La(L) || wa(L)) return (w = w.get(E) || null), g(v, w, L, A, null);
      ns(v, L);
    }
    return null;
  }
  function S(w, v, E, L) {
    for (
      var A = null, C = null, O = v, B = (v = 0), $ = null;
      O !== null && B < E.length;
      B++
    ) {
      O.index > B ? (($ = O), (O = null)) : ($ = O.sibling);
      var K = b(w, O, E[B], L);
      if (K === null) {
        O === null && (O = $);
        break;
      }
      e && O && K.alternate === null && t(w, O),
        (v = a(K, v, B)),
        C === null ? (A = K) : (C.sibling = K),
        (C = K),
        (O = $);
    }
    if (B === E.length) return n(w, O), Ke && Vr(w, B), A;
    if (O === null) {
      for (; B < E.length; B++)
        (O = y(w, E[B], L)),
          O !== null &&
            ((v = a(O, v, B)), C === null ? (A = O) : (C.sibling = O), (C = O));
      return Ke && Vr(w, B), A;
    }
    for (O = r(w, O); B < E.length; B++)
      ($ = N(O, w, B, E[B], L)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? B : $.key),
          (v = a($, v, B)),
          C === null ? (A = $) : (C.sibling = $),
          (C = $));
    return (
      e &&
        O.forEach(function (te) {
          return t(w, te);
        }),
      Ke && Vr(w, B),
      A
    );
  }
  function k(w, v, E, L) {
    var A = wa(E);
    if (typeof A != "function") throw Error(U(150));
    if (((E = A.call(E)), E == null)) throw Error(U(151));
    for (
      var C = (A = null), O = v, B = (v = 0), $ = null, K = E.next();
      O !== null && !K.done;
      B++, K = E.next()
    ) {
      O.index > B ? (($ = O), (O = null)) : ($ = O.sibling);
      var te = b(w, O, K.value, L);
      if (te === null) {
        O === null && (O = $);
        break;
      }
      e && O && te.alternate === null && t(w, O),
        (v = a(te, v, B)),
        C === null ? (A = te) : (C.sibling = te),
        (C = te),
        (O = $);
    }
    if (K.done) return n(w, O), Ke && Vr(w, B), A;
    if (O === null) {
      for (; !K.done; B++, K = E.next())
        (K = y(w, K.value, L)),
          K !== null &&
            ((v = a(K, v, B)), C === null ? (A = K) : (C.sibling = K), (C = K));
      return Ke && Vr(w, B), A;
    }
    for (O = r(w, O); !K.done; B++, K = E.next())
      (K = N(O, w, B, K.value, L)),
        K !== null &&
          (e && K.alternate !== null && O.delete(K.key === null ? B : K.key),
          (v = a(K, v, B)),
          C === null ? (A = K) : (C.sibling = K),
          (C = K));
    return (
      e &&
        O.forEach(function (re) {
          return t(w, re);
        }),
      Ke && Vr(w, B),
      A
    );
  }
  function I(w, v, E, L) {
    if (
      (typeof E == "object" &&
        E !== null &&
        E.type === ki &&
        E.key === null &&
        (E = E.props.children),
      typeof E == "object" && E !== null)
    ) {
      switch (E.$$typeof) {
        case Wo:
          e: {
            for (var A = E.key, C = v; C !== null; ) {
              if (C.key === A) {
                if (((A = E.type), A === ki)) {
                  if (C.tag === 7) {
                    n(w, C.sibling),
                      (v = i(C, E.props.children)),
                      (v.return = w),
                      (w = v);
                    break e;
                  }
                } else if (
                  C.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === fr &&
                    qh(A) === C.type)
                ) {
                  n(w, C.sibling),
                    (v = i(C, E.props)),
                    (v.ref = ka(w, C, E)),
                    (v.return = w),
                    (w = v);
                  break e;
                }
                n(w, C);
                break;
              } else t(w, C);
              C = C.sibling;
            }
            E.type === ki
              ? ((v = Jr(E.props.children, w.mode, L, E.key)),
                (v.return = w),
                (w = v))
              : ((L = Es(E.type, E.key, E.props, null, w.mode, L)),
                (L.ref = ka(w, v, E)),
                (L.return = w),
                (w = L));
          }
          return o(w);
        case Ci:
          e: {
            for (C = E.key; v !== null; ) {
              if (v.key === C)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === E.containerInfo &&
                  v.stateNode.implementation === E.implementation
                ) {
                  n(w, v.sibling),
                    (v = i(v, E.children || [])),
                    (v.return = w),
                    (w = v);
                  break e;
                } else {
                  n(w, v);
                  break;
                }
              else t(w, v);
              v = v.sibling;
            }
            (v = kc(E, w.mode, L)), (v.return = w), (w = v);
          }
          return o(w);
        case fr:
          return (C = E._init), I(w, v, C(E._payload), L);
      }
      if (La(E)) return S(w, v, E, L);
      if (wa(E)) return k(w, v, E, L);
      ns(w, E);
    }
    return (typeof E == "string" && E !== "") || typeof E == "number"
      ? ((E = "" + E),
        v !== null && v.tag === 6
          ? (n(w, v.sibling), (v = i(v, E)), (v.return = w), (w = v))
          : (n(w, v), (v = Cc(E, w.mode, L)), (v.return = w), (w = v)),
        o(w))
      : n(w, v);
  }
  return I;
}
var Qi = z0(!0),
  U0 = z0(!1),
  _o = {},
  Nn = Or(_o),
  lo = Or(_o),
  co = Or(_o);
function Gr(e) {
  if (e === _o) throw Error(U(174));
  return e;
}
function Sd(e, t) {
  switch ((ze(co, t), ze(lo, e), ze(Nn, _o), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gc(t, e));
  }
  He(Nn), ze(Nn, t);
}
function Xi() {
  He(Nn), He(lo), He(co);
}
function F0(e) {
  Gr(co.current);
  var t = Gr(Nn.current),
    n = Gc(t, e.type);
  t !== n && (ze(lo, e), ze(Nn, n));
}
function _d(e) {
  lo.current === e && (He(Nn), He(lo));
}
var qe = Or(0);
function Hs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vc = [];
function Td() {
  for (var e = 0; e < vc.length; e++)
    vc[e]._workInProgressVersionPrimary = null;
  vc.length = 0;
}
var vs = Jn.ReactCurrentDispatcher,
  yc = Jn.ReactCurrentBatchConfig,
  ni = 0,
  Qe = null,
  ut = null,
  mt = null,
  Ws = !1,
  Va = !1,
  uo = 0,
  x5 = 0;
function kt() {
  throw Error(U(321));
}
function Nd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vn(e[n], t[n])) return !1;
  return !0;
}
function Id(e, t, n, r, i, a) {
  if (
    ((ni = a),
    (Qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vs.current = e === null || e.memoizedState === null ? S5 : _5),
    (e = n(r, i)),
    Va)
  ) {
    a = 0;
    do {
      if (((Va = !1), (uo = 0), 25 <= a)) throw Error(U(301));
      (a += 1),
        (mt = ut = null),
        (t.updateQueue = null),
        (vs.current = T5),
        (e = n(r, i));
    } while (Va);
  }
  if (
    ((vs.current = Ks),
    (t = ut !== null && ut.next !== null),
    (ni = 0),
    (mt = ut = Qe = null),
    (Ws = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function Pd() {
  var e = uo !== 0;
  return (uo = 0), e;
}
function Sn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return mt === null ? (Qe.memoizedState = mt = e) : (mt = mt.next = e), mt;
}
function rn() {
  if (ut === null) {
    var e = Qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ut.next;
  var t = mt === null ? Qe.memoizedState : mt.next;
  if (t !== null) (mt = t), (ut = e);
  else {
    if (e === null) throw Error(U(310));
    (ut = e),
      (e = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null,
      }),
      mt === null ? (Qe.memoizedState = mt = e) : (mt = mt.next = e);
  }
  return mt;
}
function fo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wc(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = ut,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var c = (o = null),
      u = null,
      h = a;
    do {
      var g = h.lane;
      if ((ni & g) === g)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : e(r, h.action));
      else {
        var y = {
          lane: g,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        u === null ? ((c = u = y), (o = r)) : (u = u.next = y),
          (Qe.lanes |= g),
          (ri |= g);
      }
      h = h.next;
    } while (h !== null && h !== a);
    u === null ? (o = r) : (u.next = c),
      vn(r, t.memoizedState) || (Mt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Qe.lanes |= a), (ri |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bc(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    vn(a, t.memoizedState) || (Mt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function V0() {}
function H0(e, t) {
  var n = Qe,
    r = rn(),
    i = t(),
    a = !vn(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Mt = !0)),
    (r = r.queue),
    Ad(Y0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (mt !== null && mt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ho(9, K0.bind(null, n, r, i, t), void 0, null),
      gt === null)
    )
      throw Error(U(349));
    ni & 30 || W0(n, t, i);
  }
  return i;
}
function W0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Qe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function K0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), G0(t) && q0(e);
}
function Y0(e, t, n) {
  return n(function () {
    G0(t) && q0(e);
  });
}
function G0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vn(e, n);
  } catch {
    return !0;
  }
}
function q0(e) {
  var t = qn(e, 1);
  t !== null && gn(t, e, 1, -1);
}
function Qh(e) {
  var t = Sn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = k5.bind(null, Qe, e)),
    [t.memoizedState, e]
  );
}
function ho(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Qe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Q0() {
  return rn().memoizedState;
}
function ys(e, t, n, r) {
  var i = Sn();
  (Qe.flags |= e),
    (i.memoizedState = ho(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var i = rn();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ut !== null) {
    var o = ut.memoizedState;
    if (((a = o.destroy), r !== null && Nd(r, o.deps))) {
      i.memoizedState = ho(t, n, a, r);
      return;
    }
  }
  (Qe.flags |= e), (i.memoizedState = ho(1 | t, n, a, r));
}
function Xh(e, t) {
  return ys(8390656, 8, e, t);
}
function Ad(e, t) {
  return vl(2048, 8, e, t);
}
function X0(e, t) {
  return vl(4, 2, e, t);
}
function J0(e, t) {
  return vl(4, 4, e, t);
}
function Z0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function eg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, Z0.bind(null, t, e), n)
  );
}
function Rd() {}
function tg(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ng(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rg(e, t, n) {
  return ni & 21
    ? (vn(n, t) || ((n = o0()), (Qe.lanes |= n), (ri |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function E5(e, t) {
  var n = Re;
  (Re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yc.transition;
  yc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Re = n), (yc.transition = r);
  }
}
function ig() {
  return rn().memoizedState;
}
function C5(e, t, n) {
  var r = kr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ag(e))
  )
    og(t, n);
  else if (((n = D0(e, t, n, r)), n !== null)) {
    var i = Pt();
    gn(n, e, r, i), sg(n, t, r);
  }
}
function k5(e, t, n) {
  var r = kr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ag(e)) og(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          c = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = c), vn(c, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Cd(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = D0(e, t, i, r)),
      n !== null && ((i = Pt()), gn(n, e, r, i), sg(n, t, r));
  }
}
function ag(e) {
  var t = e.alternate;
  return e === Qe || (t !== null && t === Qe);
}
function og(e, t) {
  Va = Ws = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
  }
}
var Ks = {
    readContext: nn,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useInsertionEffect: kt,
    useLayoutEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useMutableSource: kt,
    useSyncExternalStore: kt,
    useId: kt,
    unstable_isNewReconciler: !1,
  },
  S5 = {
    readContext: nn,
    useCallback: function (e, t) {
      return (Sn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nn,
    useEffect: Xh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ys(4194308, 4, Z0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ys(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ys(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Sn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Sn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = C5.bind(null, Qe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Sn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qh,
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      return (Sn().memoizedState = e);
    },
    useTransition: function () {
      var e = Qh(!1),
        t = e[0];
      return (e = E5.bind(null, e[1])), (Sn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Qe,
        i = Sn();
      if (Ke) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = t()), gt === null)) throw Error(U(349));
        ni & 30 || W0(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Xh(Y0.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        ho(9, K0.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Sn(),
        t = gt.identifierPrefix;
      if (Ke) {
        var n = Un,
          r = zn;
        (n = (r & ~(1 << (32 - mn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = uo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = x5++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _5 = {
    readContext: nn,
    useCallback: tg,
    useContext: nn,
    useEffect: Ad,
    useImperativeHandle: eg,
    useInsertionEffect: X0,
    useLayoutEffect: J0,
    useMemo: ng,
    useReducer: wc,
    useRef: Q0,
    useState: function () {
      return wc(fo);
    },
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      var t = rn();
      return rg(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = wc(fo)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: H0,
    useId: ig,
    unstable_isNewReconciler: !1,
  },
  T5 = {
    readContext: nn,
    useCallback: tg,
    useContext: nn,
    useEffect: Ad,
    useImperativeHandle: eg,
    useInsertionEffect: X0,
    useLayoutEffect: J0,
    useMemo: ng,
    useReducer: bc,
    useRef: Q0,
    useState: function () {
      return bc(fo);
    },
    useDebugValue: Rd,
    useDeferredValue: function (e) {
      var t = rn();
      return ut === null ? (t.memoizedState = e) : rg(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = bc(fo)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: H0,
    useId: ig,
    unstable_isNewReconciler: !1,
  };
function Ji(e, t) {
  try {
    var n = "",
      r = t;
    do (n += t2(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function xc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var N5 = typeof WeakMap == "function" ? WeakMap : Map;
function lg(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gs || ((Gs = !0), (Tu = r)), vu(e, t);
    }),
    n
  );
}
function cg(e, t, n) {
  (n = Wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        vu(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        vu(e, t),
          typeof r != "function" &&
            (Cr === null ? (Cr = new Set([this])) : Cr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Jh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new N5();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = F5.bind(null, e, t, n)), t.then(e, e));
}
function Zh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ep(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wn(-1, 1)), (t.tag = 2), Er(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var I5 = Jn.ReactCurrentOwner,
  Mt = !1;
function It(e, t, n, r) {
  t.child = e === null ? U0(t, null, n, r) : Qi(t, e.child, n, r);
}
function tp(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Ui(t, i),
    (r = Id(e, t, n, r, a, i)),
    (n = Pd()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qn(e, t, i))
      : (Ke && n && vd(t), (t.flags |= 1), It(e, t, r, i), t.child)
  );
}
function np(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !zd(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), ug(e, t, a, r, i))
      : ((e = Es(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : io), n(o, r) && e.ref === t.ref)
    )
      return Qn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Sr(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ug(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (io(a, r) && e.ref === t.ref)
      if (((Mt = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (Mt = !0);
      else return (t.lanes = e.lanes), Qn(e, t, i);
  }
  return yu(e, t, n, r, i);
}
function dg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ze(Oi, Ut),
        (Ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ze(Oi, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        ze(Oi, Ut),
        (Ut |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ze(Oi, Ut),
      (Ut |= r);
  return It(e, t, i, n), t.child;
}
function fg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yu(e, t, n, r, i) {
  var a = jt(n) ? ei : Tt.current;
  return (
    (a = Gi(t, a)),
    Ui(t, i),
    (n = Id(e, t, n, r, a, i)),
    (r = Pd()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qn(e, t, i))
      : (Ke && r && vd(t), (t.flags |= 1), It(e, t, n, i), t.child)
  );
}
function rp(e, t, n, r, i) {
  if (jt(n)) {
    var a = !0;
    Bs(t);
  } else a = !1;
  if ((Ui(t, i), t.stateNode === null))
    ws(e, t), $0(t, n, r), gu(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      c = t.memoizedProps;
    o.props = c;
    var u = o.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = nn(h))
      : ((h = jt(n) ? ei : Tt.current), (h = Gi(t, h)));
    var g = n.getDerivedStateFromProps,
      y =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((c !== r || u !== h) && Gh(t, o, r, h)),
      (hr = !1);
    var b = t.memoizedState;
    (o.state = b),
      Vs(t, r, o, i),
      (u = t.memoizedState),
      c !== r || b !== u || Dt.current || hr
        ? (typeof g == "function" && (mu(t, n, g, r), (u = t.memoizedState)),
          (c = hr || Yh(t, n, c, r, b, u, h))
            ? (y ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = h),
          (r = c))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      j0(e, t),
      (c = t.memoizedProps),
      (h = t.type === t.elementType ? c : dn(t.type, c)),
      (o.props = h),
      (y = t.pendingProps),
      (b = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = nn(u))
        : ((u = jt(n) ? ei : Tt.current), (u = Gi(t, u)));
    var N = n.getDerivedStateFromProps;
    (g =
      typeof N == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((c !== y || b !== u) && Gh(t, o, r, u)),
      (hr = !1),
      (b = t.memoizedState),
      (o.state = b),
      Vs(t, r, o, i);
    var S = t.memoizedState;
    c !== y || b !== S || Dt.current || hr
      ? (typeof N == "function" && (mu(t, n, N, r), (S = t.memoizedState)),
        (h = hr || Yh(t, n, h, r, b, S, u) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (c === e.memoizedProps && b === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && b === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = u),
        (r = h))
      : (typeof o.componentDidUpdate != "function" ||
          (c === e.memoizedProps && b === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && b === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wu(e, t, n, r, a, i);
}
function wu(e, t, n, r, i, a) {
  fg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Fh(t, n, !1), Qn(e, t, a);
  (r = t.stateNode), (I5.current = t);
  var c =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Qi(t, e.child, null, a)), (t.child = Qi(t, null, c, a)))
      : It(e, t, c, a),
    (t.memoizedState = r.state),
    i && Fh(t, n, !0),
    t.child
  );
}
function hg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uh(e, t.context, !1),
    Sd(e, t.containerInfo);
}
function ip(e, t, n, r, i) {
  return qi(), wd(i), (t.flags |= 256), It(e, t, n, r), t.child;
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function xu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pg(e, t, n) {
  var r = t.pendingProps,
    i = qe.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    c;
  if (
    ((c = o) ||
      (c = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    c
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ze(qe, i & 1),
    e === null)
  )
    return (
      hu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = bl(o, r, 0, null)),
              (e = Jr(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = xu(n)),
              (t.memoizedState = bu),
              e)
            : Ld(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((c = i.dehydrated), c !== null)))
    return P5(e, t, o, r, c, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (c = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Sr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      c !== null ? (a = Sr(c, a)) : ((a = Jr(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? xu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = bu),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Sr(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ld(e, t) {
  return (
    (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function rs(e, t, n, r) {
  return (
    r !== null && wd(r),
    Qi(t, e.child, null, n),
    (e = Ld(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function P5(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xc(Error(U(422)))), rs(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = bl({ mode: "visible", children: r.children }, i, 0, null)),
        (a = Jr(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Qi(t, e.child, null, o),
        (t.child.memoizedState = xu(o)),
        (t.memoizedState = bu),
        a);
  if (!(t.mode & 1)) return rs(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (a = Error(U(419))), (r = xc(a, r, void 0)), rs(e, t, o, r);
  }
  if (((c = (o & e.childLanes) !== 0), Mt || c)) {
    if (((r = gt), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), qn(e, i), gn(r, e, i, -1));
    }
    return $d(), (r = xc(Error(U(421)))), rs(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = V5.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ft = xr(i.nextSibling)),
      (Vt = t),
      (Ke = !0),
      (pn = null),
      e !== null &&
        ((Jt[Zt++] = zn),
        (Jt[Zt++] = Un),
        (Jt[Zt++] = ti),
        (zn = e.id),
        (Un = e.overflow),
        (ti = t)),
      (t = Ld(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ap(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pu(e.return, t, n);
}
function Ec(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function mg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((It(e, t, r.children, n), (r = qe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ap(e, n, t);
        else if (e.tag === 19) ap(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ze(qe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Hs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ec(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Hs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ec(t, !0, n, null, a);
        break;
      case "together":
        Ec(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ws(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ri |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Sr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Sr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function A5(e, t, n) {
  switch (t.tag) {
    case 3:
      hg(t), qi();
      break;
    case 5:
      F0(t);
      break;
    case 1:
      jt(t.type) && Bs(t);
      break;
    case 4:
      Sd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ze(Us, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ze(qe, qe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pg(e, t, n)
          : (ze(qe, qe.current & 1),
            (e = Qn(e, t, n)),
            e !== null ? e.sibling : null);
      ze(qe, qe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ze(qe, qe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dg(e, t, n);
  }
  return Qn(e, t, n);
}
var gg, Eu, vg, yg;
gg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Eu = function () {};
vg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Gr(Nn.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Hc(e, i)), (r = Hc(e, r)), (a = []);
        break;
      case "select":
        (i = Xe({}, i, { value: void 0 })),
          (r = Xe({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Yc(e, i)), (r = Yc(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ds);
    }
    qc(n, r);
    var o;
    n = null;
    for (h in i)
      if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
        if (h === "style") {
          var c = i[h];
          for (o in c) c.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (Xa.hasOwnProperty(h)
              ? a || (a = [])
              : (a = a || []).push(h, null));
    for (h in r) {
      var u = r[h];
      if (
        ((c = i != null ? i[h] : void 0),
        r.hasOwnProperty(h) && u !== c && (u != null || c != null))
      )
        if (h === "style")
          if (c) {
            for (o in c)
              !c.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                c[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (a || (a = []), a.push(h, n)), (n = u);
        else
          h === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (c = c ? c.__html : void 0),
              u != null && c !== u && (a = a || []).push(h, u))
            : h === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(h, "" + u)
            : h !== "suppressContentEditableWarning" &&
              h !== "suppressHydrationWarning" &&
              (Xa.hasOwnProperty(h)
                ? (u != null && h === "onScroll" && Ve("scroll", e),
                  a || c === u || (a = []))
                : (a = a || []).push(h, u));
    }
    n && (a = a || []).push("style", n);
    var h = a;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
yg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sa(e, t) {
  if (!Ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function St(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function R5(e, t, n) {
  var r = t.pendingProps;
  switch ((yd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return St(t), null;
    case 1:
      return jt(t.type) && js(), St(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xi(),
        He(Dt),
        He(Tt),
        Td(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pn !== null && (Pu(pn), (pn = null)))),
        Eu(e, t),
        St(t),
        null
      );
    case 5:
      _d(t);
      var i = Gr(co.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return St(t), null;
        }
        if (((e = Gr(Nn.current)), ts(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[_n] = t), (r[so] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ve("cancel", r), Ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ve("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ma.length; i++) Ve(Ma[i], r);
              break;
            case "source":
              Ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ve("error", r), Ve("load", r);
              break;
            case "details":
              Ve("toggle", r);
              break;
            case "input":
              ph(r, a), Ve("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                Ve("invalid", r);
              break;
            case "textarea":
              gh(r, a), Ve("invalid", r);
          }
          qc(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var c = a[o];
              o === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (a.suppressHydrationWarning !== !0 &&
                      es(r.textContent, c, e),
                    (i = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (a.suppressHydrationWarning !== !0 &&
                      es(r.textContent, c, e),
                    (i = ["children", "" + c]))
                : Xa.hasOwnProperty(o) &&
                  c != null &&
                  o === "onScroll" &&
                  Ve("scroll", r);
            }
          switch (n) {
            case "input":
              Ko(r), mh(r, a, !0);
              break;
            case "textarea":
              Ko(r), vh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ds);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[_n] = t),
            (e[so] = r),
            gg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Qc(n, r)), n)) {
              case "dialog":
                Ve("cancel", e), Ve("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ma.length; i++) Ve(Ma[i], e);
                i = r;
                break;
              case "source":
                Ve("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Ve("error", e), Ve("load", e), (i = r);
                break;
              case "details":
                Ve("toggle", e), (i = r);
                break;
              case "input":
                ph(e, r), (i = Hc(e, r)), Ve("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Xe({}, r, { value: void 0 })),
                  Ve("invalid", e);
                break;
              case "textarea":
                gh(e, r), (i = Yc(e, r)), Ve("invalid", e);
                break;
              default:
                i = r;
            }
            qc(n, i), (c = i);
            for (a in c)
              if (c.hasOwnProperty(a)) {
                var u = c[a];
                a === "style"
                  ? Gm(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Km(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ja(e, u)
                    : typeof u == "number" && Ja(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Xa.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && Ve("scroll", e)
                      : u != null && rd(e, a, u, o));
              }
            switch (n) {
              case "input":
                Ko(e), mh(e, r, !1);
                break;
              case "textarea":
                Ko(e), vh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? ji(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      ji(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ds);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return St(t), null;
    case 6:
      if (e && t.stateNode != null) yg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (((n = Gr(co.current)), Gr(Nn.current), ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_n] = t),
            (a = r.nodeValue !== n) && ((e = Vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                es(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  es(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_n] = t),
            (t.stateNode = r);
      }
      return St(t), null;
    case 13:
      if (
        (He(qe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ke && Ft !== null && t.mode & 1 && !(t.flags & 128))
          M0(), qi(), (t.flags |= 98560), (a = !1);
        else if (((a = ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(U(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(U(317));
            a[_n] = t;
          } else
            qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          St(t), (a = !1);
        } else pn !== null && (Pu(pn), (pn = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || qe.current & 1 ? dt === 0 && (dt = 3) : $d())),
          t.updateQueue !== null && (t.flags |= 4),
          St(t),
          null);
    case 4:
      return (
        Xi(), Eu(e, t), e === null && ao(t.stateNode.containerInfo), St(t), null
      );
    case 10:
      return Ed(t.type._context), St(t), null;
    case 17:
      return jt(t.type) && js(), St(t), null;
    case 19:
      if ((He(qe), (a = t.memoizedState), a === null)) return St(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Sa(a, !1);
        else {
          if (dt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Hs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sa(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ze(qe, (qe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            lt() > Zi &&
            ((t.flags |= 128), (r = !0), Sa(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sa(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !Ke)
            )
              return St(t), null;
          } else
            2 * lt() - a.renderingStartTime > Zi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sa(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = lt()),
          (t.sibling = null),
          (n = qe.current),
          ze(qe, r ? (n & 1) | 2 : n & 1),
          t)
        : (St(t), null);
    case 22:
    case 23:
      return (
        Bd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ut & 1073741824 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : St(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function L5(e, t) {
  switch ((yd(t), t.tag)) {
    case 1:
      return (
        jt(t.type) && js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xi(),
        He(Dt),
        He(Tt),
        Td(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _d(t), null;
    case 13:
      if (
        (He(qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        qi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return He(qe), null;
    case 4:
      return Xi(), null;
    case 10:
      return Ed(t.type._context), null;
    case 22:
    case 23:
      return Bd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var is = !1,
  _t = !1,
  O5 = typeof WeakSet == "function" ? WeakSet : Set,
  J = null;
function Li(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        tt(e, t, r);
      }
    else n.current = null;
}
function Cu(e, t, n) {
  try {
    n();
  } catch (r) {
    tt(e, t, r);
  }
}
var op = !1;
function M5(e, t) {
  if (((ou = Ls), (e = E0()), gd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            c = -1,
            u = -1,
            h = 0,
            g = 0,
            y = e,
            b = null;
          t: for (;;) {
            for (
              var N;
              y !== n || (i !== 0 && y.nodeType !== 3) || (c = o + i),
                y !== a || (r !== 0 && y.nodeType !== 3) || (u = o + r),
                y.nodeType === 3 && (o += y.nodeValue.length),
                (N = y.firstChild) !== null;

            )
              (b = y), (y = N);
            for (;;) {
              if (y === e) break t;
              if (
                (b === n && ++h === i && (c = o),
                b === a && ++g === r && (u = o),
                (N = y.nextSibling) !== null)
              )
                break;
              (y = b), (b = y.parentNode);
            }
            y = N;
          }
          n = c === -1 || u === -1 ? null : { start: c, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (su = { focusedElem: e, selectionRange: n }, Ls = !1, J = t; J !== null; )
    if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (J = e);
    else
      for (; J !== null; ) {
        t = J;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    I = S.memoizedState,
                    w = t.stateNode,
                    v = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : dn(t.type, k),
                      I
                    );
                  w.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = "")
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (L) {
          tt(t, t.return, L);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (J = e);
          break;
        }
        J = t.return;
      }
  return (S = op), (op = !1), S;
}
function Ha(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Cu(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function yl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_n], delete t[so], delete t[uu], delete t[v5], delete t[y5])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ds));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Su(e, t, n), e = e.sibling; e !== null; ) Su(e, t, n), (e = e.sibling);
}
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_u(e, t, n), e = e.sibling; e !== null; ) _u(e, t, n), (e = e.sibling);
}
var wt = null,
  fn = !1;
function lr(e, t, n) {
  for (n = n.child; n !== null; ) xg(e, t, n), (n = n.sibling);
}
function xg(e, t, n) {
  if (Tn && typeof Tn.onCommitFiberUnmount == "function")
    try {
      Tn.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _t || Li(n, t);
    case 6:
      var r = wt,
        i = fn;
      (wt = null),
        lr(e, t, n),
        (wt = r),
        (fn = i),
        wt !== null &&
          (fn
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        (fn
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8
              ? mc(e.parentNode, n)
              : e.nodeType === 1 && mc(e, n),
            no(e))
          : mc(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (i = fn),
        (wt = n.stateNode.containerInfo),
        (fn = !0),
        lr(e, t, n),
        (wt = r),
        (fn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_t &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Cu(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      lr(e, t, n);
      break;
    case 1:
      if (
        !_t &&
        (Li(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          tt(n, t, c);
        }
      lr(e, t, n);
      break;
    case 21:
      lr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_t = (r = _t) || n.memoizedState !== null), lr(e, t, n), (_t = r))
        : lr(e, t, n);
      break;
    default:
      lr(e, t, n);
  }
}
function lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new O5()),
      t.forEach(function (r) {
        var i = H5.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ln(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          c = o;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (wt = c.stateNode), (fn = !1);
              break e;
            case 3:
              (wt = c.stateNode.containerInfo), (fn = !0);
              break e;
            case 4:
              (wt = c.stateNode.containerInfo), (fn = !0);
              break e;
          }
          c = c.return;
        }
        if (wt === null) throw Error(U(160));
        xg(a, o, i), (wt = null), (fn = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (h) {
        tt(i, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Eg(t, e), (t = t.sibling);
}
function Eg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(t, e), kn(e), r & 4)) {
        try {
          Ha(3, e, e.return), yl(3, e);
        } catch (k) {
          tt(e, e.return, k);
        }
        try {
          Ha(5, e, e.return);
        } catch (k) {
          tt(e, e.return, k);
        }
      }
      break;
    case 1:
      ln(t, e), kn(e), r & 512 && n !== null && Li(n, n.return);
      break;
    case 5:
      if (
        (ln(t, e),
        kn(e),
        r & 512 && n !== null && Li(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ja(i, "");
        } catch (k) {
          tt(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          c = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            c === "input" && a.type === "radio" && a.name != null && Vm(i, a),
              Qc(c, o);
            var h = Qc(c, a);
            for (o = 0; o < u.length; o += 2) {
              var g = u[o],
                y = u[o + 1];
              g === "style"
                ? Gm(i, y)
                : g === "dangerouslySetInnerHTML"
                ? Km(i, y)
                : g === "children"
                ? Ja(i, y)
                : rd(i, g, y, h);
            }
            switch (c) {
              case "input":
                Wc(i, a);
                break;
              case "textarea":
                Hm(i, a);
                break;
              case "select":
                var b = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var N = a.value;
                N != null
                  ? ji(i, !!a.multiple, N, !1)
                  : b !== !!a.multiple &&
                    (a.defaultValue != null
                      ? ji(i, !!a.multiple, a.defaultValue, !0)
                      : ji(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[so] = a;
          } catch (k) {
            tt(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ln(t, e), kn(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (k) {
          tt(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ln(t, e), kn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          no(t.containerInfo);
        } catch (k) {
          tt(e, e.return, k);
        }
      break;
    case 4:
      ln(t, e), kn(e);
      break;
    case 13:
      ln(t, e),
        kn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Dd = lt())),
        r & 4 && lp(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_t = (h = _t) || g), ln(t, e), (_t = h)) : ln(t, e),
        kn(e),
        r & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !g && e.mode & 1)
        )
          for (J = e, g = e.child; g !== null; ) {
            for (y = J = g; J !== null; ) {
              switch (((b = J), (N = b.child), b.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ha(4, b, b.return);
                  break;
                case 1:
                  Li(b, b.return);
                  var S = b.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = b), (n = b.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      tt(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Li(b, b.return);
                  break;
                case 22:
                  if (b.memoizedState !== null) {
                    up(y);
                    continue;
                  }
              }
              N !== null ? ((N.return = b), (J = N)) : up(y);
            }
            g = g.sibling;
          }
        e: for (g = null, y = e; ; ) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                (i = y.stateNode),
                  h
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((c = y.stateNode),
                      (u = y.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (c.style.display = Ym("display", o)));
              } catch (k) {
                tt(e, e.return, k);
              }
            }
          } else if (y.tag === 6) {
            if (g === null)
              try {
                y.stateNode.nodeValue = h ? "" : y.memoizedProps;
              } catch (k) {
                tt(e, e.return, k);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            (y.child.return = y), (y = y.child);
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            g === y && (g = null), (y = y.return);
          }
          g === y && (g = null), (y.sibling.return = y.return), (y = y.sibling);
        }
      }
      break;
    case 19:
      ln(t, e), kn(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      ln(t, e), kn(e);
  }
}
function kn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ja(i, ""), (r.flags &= -33));
          var a = sp(e);
          _u(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            c = sp(e);
          Su(e, c, o);
          break;
        default:
          throw Error(U(161));
      }
    } catch (u) {
      tt(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function D5(e, t, n) {
  (J = e), Cg(e);
}
function Cg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var i = J,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || is;
      if (!o) {
        var c = i.alternate,
          u = (c !== null && c.memoizedState !== null) || _t;
        c = is;
        var h = _t;
        if (((is = o), (_t = u) && !h))
          for (J = i; J !== null; )
            (o = J),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? dp(i)
                : u !== null
                ? ((u.return = o), (J = u))
                : dp(i);
        for (; a !== null; ) (J = a), Cg(a), (a = a.sibling);
        (J = i), (is = c), (_t = h);
      }
      cp(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (J = a)) : cp(e);
  }
}
function cp(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Kh(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kh(t, o, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var h = t.alternate;
                if (h !== null) {
                  var g = h.memoizedState;
                  if (g !== null) {
                    var y = g.dehydrated;
                    y !== null && no(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        _t || (t.flags & 512 && ku(t));
      } catch (b) {
        tt(t, t.return, b);
      }
    }
    if (t === e) {
      J = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (J = n);
      break;
    }
    J = t.return;
  }
}
function up(e) {
  for (; J !== null; ) {
    var t = J;
    if (t === e) {
      J = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (J = n);
      break;
    }
    J = t.return;
  }
}
function dp(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (u) {
            tt(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              tt(t, i, u);
            }
          }
          var a = t.return;
          try {
            ku(t);
          } catch (u) {
            tt(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ku(t);
          } catch (u) {
            tt(t, o, u);
          }
      }
    } catch (u) {
      tt(t, t.return, u);
    }
    if (t === e) {
      J = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (J = c);
      break;
    }
    J = t.return;
  }
}
var j5 = Math.ceil,
  Ys = Jn.ReactCurrentDispatcher,
  Od = Jn.ReactCurrentOwner,
  tn = Jn.ReactCurrentBatchConfig,
  Ie = 0,
  gt = null,
  ct = null,
  xt = 0,
  Ut = 0,
  Oi = Or(0),
  dt = 0,
  po = null,
  ri = 0,
  wl = 0,
  Md = 0,
  Wa = null,
  Ot = null,
  Dd = 0,
  Zi = 1 / 0,
  On = null,
  Gs = !1,
  Tu = null,
  Cr = null,
  as = !1,
  vr = null,
  qs = 0,
  Ka = 0,
  Nu = null,
  bs = -1,
  xs = 0;
function Pt() {
  return Ie & 6 ? lt() : bs !== -1 ? bs : (bs = lt());
}
function kr(e) {
  return e.mode & 1
    ? Ie & 2 && xt !== 0
      ? xt & -xt
      : b5.transition !== null
      ? (xs === 0 && (xs = o0()), xs)
      : ((e = Re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : h0(e.type))),
        e)
    : 1;
}
function gn(e, t, n, r) {
  if (50 < Ka) throw ((Ka = 0), (Nu = null), Error(U(185)));
  Co(e, n, r),
    (!(Ie & 2) || e !== gt) &&
      (e === gt && (!(Ie & 2) && (wl |= n), dt === 4 && mr(e, xt)),
      Bt(e, r),
      n === 1 && Ie === 0 && !(t.mode & 1) && ((Zi = lt() + 500), ml && Mr()));
}
function Bt(e, t) {
  var n = e.callbackNode;
  b2(e, t);
  var r = Rs(e, e === gt ? xt : 0);
  if (r === 0)
    n !== null && bh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bh(n), t === 1))
      e.tag === 0 ? w5(fp.bind(null, e)) : R0(fp.bind(null, e)),
        m5(function () {
          !(Ie & 6) && Mr();
        }),
        (n = null);
    else {
      switch (s0(r)) {
        case 1:
          n = ld;
          break;
        case 4:
          n = i0;
          break;
        case 16:
          n = As;
          break;
        case 536870912:
          n = a0;
          break;
        default:
          n = As;
      }
      n = Ag(n, kg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kg(e, t) {
  if (((bs = -1), (xs = 0), Ie & 6)) throw Error(U(327));
  var n = e.callbackNode;
  if (Fi() && e.callbackNode !== n) return null;
  var r = Rs(e, e === gt ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Qs(e, r);
  else {
    t = r;
    var i = Ie;
    Ie |= 2;
    var a = _g();
    (gt !== e || xt !== t) && ((On = null), (Zi = lt() + 500), Xr(e, t));
    do
      try {
        z5();
        break;
      } catch (c) {
        Sg(e, c);
      }
    while (!0);
    xd(),
      (Ys.current = a),
      (Ie = i),
      ct !== null ? (t = 0) : ((gt = null), (xt = 0), (t = dt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = tu(e)), i !== 0 && ((r = i), (t = Iu(e, i)))), t === 1)
    )
      throw ((n = po), Xr(e, 0), mr(e, r), Bt(e, lt()), n);
    if (t === 6) mr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !B5(i) &&
          ((t = Qs(e, r)),
          t === 2 && ((a = tu(e)), a !== 0 && ((r = a), (t = Iu(e, a)))),
          t === 1))
      )
        throw ((n = po), Xr(e, 0), mr(e, r), Bt(e, lt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Hr(e, Ot, On);
          break;
        case 3:
          if (
            (mr(e, r), (r & 130023424) === r && ((t = Dd + 500 - lt()), 10 < t))
          ) {
            if (Rs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Pt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = cu(Hr.bind(null, e, Ot, On), t);
            break;
          }
          Hr(e, Ot, On);
          break;
        case 4:
          if ((mr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - mn(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = lt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * j5(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = cu(Hr.bind(null, e, Ot, On), r);
            break;
          }
          Hr(e, Ot, On);
          break;
        case 5:
          Hr(e, Ot, On);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Bt(e, lt()), e.callbackNode === n ? kg.bind(null, e) : null;
}
function Iu(e, t) {
  var n = Wa;
  return (
    e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256),
    (e = Qs(e, t)),
    e !== 2 && ((t = Ot), (Ot = n), t !== null && Pu(t)),
    e
  );
}
function Pu(e) {
  Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
}
function B5(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!vn(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mr(e, t) {
  for (
    t &= ~Md,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fp(e) {
  if (Ie & 6) throw Error(U(327));
  Fi();
  var t = Rs(e, 0);
  if (!(t & 1)) return Bt(e, lt()), null;
  var n = Qs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tu(e);
    r !== 0 && ((t = r), (n = Iu(e, r)));
  }
  if (n === 1) throw ((n = po), Xr(e, 0), mr(e, t), Bt(e, lt()), n);
  if (n === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Hr(e, Ot, On),
    Bt(e, lt()),
    null
  );
}
function jd(e, t) {
  var n = Ie;
  Ie |= 1;
  try {
    return e(t);
  } finally {
    (Ie = n), Ie === 0 && ((Zi = lt() + 500), ml && Mr());
  }
}
function ii(e) {
  vr !== null && vr.tag === 0 && !(Ie & 6) && Fi();
  var t = Ie;
  Ie |= 1;
  var n = tn.transition,
    r = Re;
  try {
    if (((tn.transition = null), (Re = 1), e)) return e();
  } finally {
    (Re = r), (tn.transition = n), (Ie = t), !(Ie & 6) && Mr();
  }
}
function Bd() {
  (Ut = Oi.current), He(Oi);
}
function Xr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), p5(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var r = n;
      switch ((yd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && js();
          break;
        case 3:
          Xi(), He(Dt), He(Tt), Td();
          break;
        case 5:
          _d(r);
          break;
        case 4:
          Xi();
          break;
        case 13:
          He(qe);
          break;
        case 19:
          He(qe);
          break;
        case 10:
          Ed(r.type._context);
          break;
        case 22:
        case 23:
          Bd();
      }
      n = n.return;
    }
  if (
    ((gt = e),
    (ct = e = Sr(e.current, null)),
    (xt = Ut = t),
    (dt = 0),
    (po = null),
    (Md = wl = ri = 0),
    (Ot = Wa = null),
    Yr !== null)
  ) {
    for (t = 0; t < Yr.length; t++)
      if (((n = Yr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Yr = null;
  }
  return e;
}
function Sg(e, t) {
  do {
    var n = ct;
    try {
      if ((xd(), (vs.current = Ks), Ws)) {
        for (var r = Qe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ws = !1;
      }
      if (
        ((ni = 0),
        (mt = ut = Qe = null),
        (Va = !1),
        (uo = 0),
        (Od.current = null),
        n === null || n.return === null)
      ) {
        (dt = 1), (po = t), (ct = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          c = n,
          u = t;
        if (
          ((t = xt),
          (c.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var h = u,
            g = c,
            y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var b = g.alternate;
            b
              ? ((g.updateQueue = b.updateQueue),
                (g.memoizedState = b.memoizedState),
                (g.lanes = b.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var N = Zh(o);
          if (N !== null) {
            (N.flags &= -257),
              ep(N, o, c, a, t),
              N.mode & 1 && Jh(a, h, t),
              (t = N),
              (u = h);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Jh(a, h, t), $d();
              break e;
            }
            u = Error(U(426));
          }
        } else if (Ke && c.mode & 1) {
          var I = Zh(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              ep(I, o, c, a, t),
              wd(Ji(u, c));
            break e;
          }
        }
        (a = u = Ji(u, c)),
          dt !== 4 && (dt = 2),
          Wa === null ? (Wa = [a]) : Wa.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var w = lg(a, u, t);
              Wh(a, w);
              break e;
            case 1:
              c = u;
              var v = a.type,
                E = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (E !== null &&
                    typeof E.componentDidCatch == "function" &&
                    (Cr === null || !Cr.has(E))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var L = cg(a, c, t);
                Wh(a, L);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Ng(n);
    } catch (A) {
      (t = A), ct === n && n !== null && (ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _g() {
  var e = Ys.current;
  return (Ys.current = Ks), e === null ? Ks : e;
}
function $d() {
  (dt === 0 || dt === 3 || dt === 2) && (dt = 4),
    gt === null || (!(ri & 268435455) && !(wl & 268435455)) || mr(gt, xt);
}
function Qs(e, t) {
  var n = Ie;
  Ie |= 2;
  var r = _g();
  (gt !== e || xt !== t) && ((On = null), Xr(e, t));
  do
    try {
      $5();
      break;
    } catch (i) {
      Sg(e, i);
    }
  while (!0);
  if ((xd(), (Ie = n), (Ys.current = r), ct !== null)) throw Error(U(261));
  return (gt = null), (xt = 0), dt;
}
function $5() {
  for (; ct !== null; ) Tg(ct);
}
function z5() {
  for (; ct !== null && !d2(); ) Tg(ct);
}
function Tg(e) {
  var t = Pg(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ng(e) : (ct = t),
    (Od.current = null);
}
function Ng(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = L5(n, t)), n !== null)) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (dt = 6), (ct = null);
        return;
      }
    } else if (((n = R5(n, t, Ut)), n !== null)) {
      ct = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ct = t;
      return;
    }
    ct = t = e;
  } while (t !== null);
  dt === 0 && (dt = 5);
}
function Hr(e, t, n) {
  var r = Re,
    i = tn.transition;
  try {
    (tn.transition = null), (Re = 1), U5(e, t, n, r);
  } finally {
    (tn.transition = i), (Re = r);
  }
  return null;
}
function U5(e, t, n, r) {
  do Fi();
  while (vr !== null);
  if (Ie & 6) throw Error(U(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (x2(e, a),
    e === gt && ((ct = gt = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      as ||
      ((as = !0),
      Ag(As, function () {
        return Fi(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = tn.transition), (tn.transition = null);
    var o = Re;
    Re = 1;
    var c = Ie;
    (Ie |= 4),
      (Od.current = null),
      M5(e, n),
      Eg(n, e),
      s5(su),
      (Ls = !!ou),
      (su = ou = null),
      (e.current = n),
      D5(n),
      f2(),
      (Ie = c),
      (Re = o),
      (tn.transition = a);
  } else e.current = n;
  if (
    (as && ((as = !1), (vr = e), (qs = i)),
    (a = e.pendingLanes),
    a === 0 && (Cr = null),
    m2(n.stateNode),
    Bt(e, lt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Gs) throw ((Gs = !1), (e = Tu), (Tu = null), e);
  return (
    qs & 1 && e.tag !== 0 && Fi(),
    (a = e.pendingLanes),
    a & 1 ? (e === Nu ? Ka++ : ((Ka = 0), (Nu = e))) : (Ka = 0),
    Mr(),
    null
  );
}
function Fi() {
  if (vr !== null) {
    var e = s0(qs),
      t = tn.transition,
      n = Re;
    try {
      if (((tn.transition = null), (Re = 16 > e ? 16 : e), vr === null))
        var r = !1;
      else {
        if (((e = vr), (vr = null), (qs = 0), Ie & 6)) throw Error(U(331));
        var i = Ie;
        for (Ie |= 4, J = e.current; J !== null; ) {
          var a = J,
            o = a.child;
          if (J.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var u = 0; u < c.length; u++) {
                var h = c[u];
                for (J = h; J !== null; ) {
                  var g = J;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ha(8, g, a);
                  }
                  var y = g.child;
                  if (y !== null) (y.return = g), (J = y);
                  else
                    for (; J !== null; ) {
                      g = J;
                      var b = g.sibling,
                        N = g.return;
                      if ((wg(g), g === h)) {
                        J = null;
                        break;
                      }
                      if (b !== null) {
                        (b.return = N), (J = b);
                        break;
                      }
                      J = N;
                    }
                }
              }
              var S = a.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var I = k.sibling;
                    (k.sibling = null), (k = I);
                  } while (k !== null);
                }
              }
              J = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (J = o);
          else
            e: for (; J !== null; ) {
              if (((a = J), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ha(9, a, a.return);
                }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (J = w);
                break e;
              }
              J = a.return;
            }
        }
        var v = e.current;
        for (J = v; J !== null; ) {
          o = J;
          var E = o.child;
          if (o.subtreeFlags & 2064 && E !== null) (E.return = o), (J = E);
          else
            e: for (o = v; J !== null; ) {
              if (((c = J), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, c);
                  }
                } catch (A) {
                  tt(c, c.return, A);
                }
              if (c === o) {
                J = null;
                break e;
              }
              var L = c.sibling;
              if (L !== null) {
                (L.return = c.return), (J = L);
                break e;
              }
              J = c.return;
            }
        }
        if (
          ((Ie = i), Mr(), Tn && typeof Tn.onPostCommitFiberRoot == "function")
        )
          try {
            Tn.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Re = n), (tn.transition = t);
    }
  }
  return !1;
}
function hp(e, t, n) {
  (t = Ji(n, t)),
    (t = lg(e, t, 1)),
    (e = Er(e, t, 1)),
    (t = Pt()),
    e !== null && (Co(e, 1, t), Bt(e, t));
}
function tt(e, t, n) {
  if (e.tag === 3) hp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Cr === null || !Cr.has(r)))
        ) {
          (e = Ji(n, e)),
            (e = cg(t, e, 1)),
            (t = Er(t, e, 1)),
            (e = Pt()),
            t !== null && (Co(t, 1, e), Bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function F5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    gt === e &&
      (xt & n) === n &&
      (dt === 4 || (dt === 3 && (xt & 130023424) === xt && 500 > lt() - Dd)
        ? Xr(e, 0)
        : (Md |= n)),
    Bt(e, t);
}
function Ig(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qo), (qo <<= 1), !(qo & 130023424) && (qo = 4194304))
      : (t = 1));
  var n = Pt();
  (e = qn(e, t)), e !== null && (Co(e, t, n), Bt(e, n));
}
function V5(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ig(e, n);
}
function H5(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  r !== null && r.delete(t), Ig(e, n);
}
var Pg;
Pg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Mt = !1), A5(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else (Mt = !1), Ke && t.flags & 1048576 && L0(t, zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ws(e, t), (e = t.pendingProps);
      var i = Gi(t, Tt.current);
      Ui(t, n), (i = Id(null, t, r, e, i, n));
      var a = Pd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            jt(r) ? ((a = !0), Bs(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            kd(t),
            (i.updater = gl),
            (t.stateNode = i),
            (i._reactInternals = t),
            gu(t, r, e, n),
            (t = wu(null, t, r, !0, a, n)))
          : ((t.tag = 0), Ke && a && vd(t), It(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ws(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = K5(r)),
          (e = dn(r, e)),
          i)
        ) {
          case 0:
            t = yu(null, t, r, e, n);
            break e;
          case 1:
            t = rp(null, t, r, e, n);
            break e;
          case 11:
            t = tp(null, t, r, e, n);
            break e;
          case 14:
            t = np(null, t, r, dn(r.type, e), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dn(r, i)),
        yu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dn(r, i)),
        rp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((hg(t), e === null)) throw Error(U(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          j0(e, t),
          Vs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Ji(Error(U(423)), t)), (t = ip(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ji(Error(U(424)), t)), (t = ip(e, t, r, n, i));
            break e;
          } else
            for (
              Ft = xr(t.stateNode.containerInfo.firstChild),
                Vt = t,
                Ke = !0,
                pn = null,
                n = U0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qi(), r === i)) {
            t = Qn(e, t, n);
            break e;
          }
          It(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        F0(t),
        e === null && hu(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        lu(r, i) ? (o = null) : a !== null && lu(r, a) && (t.flags |= 32),
        fg(e, t),
        It(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && hu(t), null;
    case 13:
      return pg(e, t, n);
    case 4:
      return (
        Sd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qi(t, null, r, n)) : It(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dn(r, i)),
        tp(e, t, r, i, n)
      );
    case 7:
      return It(e, t, t.pendingProps, n), t.child;
    case 8:
      return It(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return It(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          ze(Us, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (vn(a.value, o)) {
            if (a.children === i.children && !Dt.current) {
              t = Qn(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var c = a.dependencies;
              if (c !== null) {
                o = a.child;
                for (var u = c.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = Wn(-1, n & -n)), (u.tag = 2);
                      var h = a.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var g = h.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (h.pending = u);
                      }
                    }
                    (a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      pu(a.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(U(341));
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  pu(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        It(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ui(t, n),
        (i = nn(i)),
        (r = r(i)),
        (t.flags |= 1),
        It(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = dn(r, t.pendingProps)),
        (i = dn(r.type, i)),
        np(e, t, r, i, n)
      );
    case 15:
      return ug(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dn(r, i)),
        ws(e, t),
        (t.tag = 1),
        jt(r) ? ((e = !0), Bs(t)) : (e = !1),
        Ui(t, n),
        $0(t, r, i),
        gu(t, r, i, n),
        wu(null, t, r, !0, e, n)
      );
    case 19:
      return mg(e, t, n);
    case 22:
      return dg(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function Ag(e, t) {
  return r0(e, t);
}
function W5(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function en(e, t, n, r) {
  return new W5(e, t, n, r);
}
function zd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K5(e) {
  if (typeof e == "function") return zd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ad)) return 11;
    if (e === od) return 14;
  }
  return 2;
}
function Sr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = en(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Es(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) zd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ki:
        return Jr(n.children, i, a, t);
      case id:
        (o = 8), (i |= 8);
        break;
      case zc:
        return (
          (e = en(12, n, t, i | 2)), (e.elementType = zc), (e.lanes = a), e
        );
      case Uc:
        return (e = en(13, n, t, i)), (e.elementType = Uc), (e.lanes = a), e;
      case Fc:
        return (e = en(19, n, t, i)), (e.elementType = Fc), (e.lanes = a), e;
      case zm:
        return bl(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bm:
              o = 10;
              break e;
            case $m:
              o = 9;
              break e;
            case ad:
              o = 11;
              break e;
            case od:
              o = 14;
              break e;
            case fr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = en(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Jr(e, t, n, r) {
  return (e = en(7, e, r, t)), (e.lanes = n), e;
}
function bl(e, t, n, r) {
  return (
    (e = en(22, e, r, t)),
    (e.elementType = zm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cc(e, t, n) {
  return (e = en(6, e, null, t)), (e.lanes = n), e;
}
function kc(e, t, n) {
  return (
    (t = en(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y5(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ic(0)),
    (this.expirationTimes = ic(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ic(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ud(e, t, n, r, i, a, o, c, u) {
  return (
    (e = new Y5(e, t, n, c, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = en(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kd(a),
    e
  );
}
function G5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ci,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rg(e) {
  if (!e) return Ar;
  e = e._reactInternals;
  e: {
    if (di(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (jt(n)) return A0(e, n, t);
  }
  return t;
}
function Lg(e, t, n, r, i, a, o, c, u) {
  return (
    (e = Ud(n, r, !0, e, i, a, o, c, u)),
    (e.context = Rg(null)),
    (n = e.current),
    (r = Pt()),
    (i = kr(n)),
    (a = Wn(r, i)),
    (a.callback = t ?? null),
    Er(n, a, i),
    (e.current.lanes = i),
    Co(e, i, r),
    Bt(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var i = t.current,
    a = Pt(),
    o = kr(i);
  return (
    (n = Rg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wn(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Er(i, t, o)),
    e !== null && (gn(e, i, o, a), gs(e, i, o)),
    o
  );
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fd(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function q5() {
  return null;
}
var Og =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vd(e) {
  this._internalRoot = e;
}
El.prototype.render = Vd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  xl(e, t, null, null);
};
El.prototype.unmount = Vd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ii(function () {
      xl(null, e, null, null);
    }),
      (t[Gn] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = u0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++);
    pr.splice(n, 0, e), n === 0 && f0(e);
  }
};
function Hd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mp() {}
function Q5(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var h = Xs(o);
        a.call(h);
      };
    }
    var o = Lg(t, r, e, 0, null, !1, !1, "", mp);
    return (
      (e._reactRootContainer = o),
      (e[Gn] = o.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      ii(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var h = Xs(u);
      c.call(h);
    };
  }
  var u = Ud(e, 0, !1, null, null, !1, !1, "", mp);
  return (
    (e._reactRootContainer = u),
    (e[Gn] = u.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    ii(function () {
      xl(t, u, n, r);
    }),
    u
  );
}
function kl(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var c = i;
      i = function () {
        var u = Xs(o);
        c.call(u);
      };
    }
    xl(t, o, e, i);
  } else o = Q5(n, t, e, i, r);
  return Xs(o);
}
l0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oa(t.pendingLanes);
        n !== 0 &&
          (cd(t, n | 1), Bt(t, lt()), !(Ie & 6) && ((Zi = lt() + 500), Mr()));
      }
      break;
    case 13:
      ii(function () {
        var r = qn(e, 1);
        if (r !== null) {
          var i = Pt();
          gn(r, e, 1, i);
        }
      }),
        Fd(e, 1);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = qn(e, 134217728);
    if (t !== null) {
      var n = Pt();
      gn(t, e, 134217728, n);
    }
    Fd(e, 134217728);
  }
};
c0 = function (e) {
  if (e.tag === 13) {
    var t = kr(e),
      n = qn(e, t);
    if (n !== null) {
      var r = Pt();
      gn(n, e, t, r);
    }
    Fd(e, t);
  }
};
u0 = function () {
  return Re;
};
d0 = function (e, t) {
  var n = Re;
  try {
    return (Re = e), t();
  } finally {
    Re = n;
  }
};
Jc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = pl(r);
            if (!i) throw Error(U(90));
            Fm(r), Wc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Hm(e, n);
      break;
    case "select":
      (t = n.value), t != null && ji(e, !!n.multiple, t, !1);
  }
};
Xm = jd;
Jm = ii;
var X5 = { usingClientEntryPoint: !1, Events: [So, Ni, pl, qm, Qm, jd] },
  _a = {
    findFiberByHostInstance: Kr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  J5 = {
    bundleType: _a.bundleType,
    version: _a.version,
    rendererPackageName: _a.rendererPackageName,
    rendererConfig: _a.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = t0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _a.findFiberByHostInstance || q5,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!os.isDisabled && os.supportsFiber)
    try {
      (ul = os.inject(J5)), (Tn = os);
    } catch {}
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X5;
Wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hd(t)) throw Error(U(200));
  return G5(e, t, null, n);
};
Wt.createRoot = function (e, t) {
  if (!Hd(e)) throw Error(U(299));
  var n = !1,
    r = "",
    i = Og;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ud(e, 1, !1, null, null, n, !1, r, i)),
    (e[Gn] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new Vd(t)
  );
};
Wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return (e = t0(t)), (e = e === null ? null : e.stateNode), e;
};
Wt.flushSync = function (e) {
  return ii(e);
};
Wt.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(U(200));
  return kl(null, e, t, !0, n);
};
Wt.hydrateRoot = function (e, t, n) {
  if (!Hd(e)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = Og;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Lg(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[Gn] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new El(t);
};
Wt.render = function (e, t, n) {
  if (!Cl(t)) throw Error(U(200));
  return kl(null, e, t, !1, n);
};
Wt.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (ii(function () {
        kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gn] = null);
        });
      }),
      !0)
    : !1;
};
Wt.unstable_batchedUpdates = jd;
Wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return kl(e, t, n, !1, r);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function Mg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mg);
    } catch (e) {
      console.error(e);
    }
}
Mg(), (Lm.exports = Wt);
var Wd = Lm.exports;
const Z5 = ll(Wd),
  eb = Em({ __proto__: null, default: Z5 }, [Wd]);
var gp = Wd;
(Bc.createRoot = gp.createRoot), (Bc.hydrateRoot = gp.hydrateRoot);
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nt() {
  return (
    (nt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nt.apply(this, arguments)
  );
}
var st;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(st || (st = {}));
const vp = "popstate";
function tb(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: c } = r.location;
    return mo(
      "",
      { pathname: a, search: o, hash: c },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : oi(i);
  }
  return rb(t, n, null, e);
}
function be(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ai(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function nb() {
  return Math.random().toString(36).substr(2, 8);
}
function yp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function mo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nt(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Zn(t) : t,
      { state: n, key: (t && t.key) || r || nb() }
    )
  );
}
function oi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Zn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function rb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    c = st.Pop,
    u = null,
    h = g();
  h == null && ((h = 0), o.replaceState(nt({}, o.state, { idx: h }), ""));
  function g() {
    return (o.state || { idx: null }).idx;
  }
  function y() {
    c = st.Pop;
    let I = g(),
      w = I == null ? null : I - h;
    (h = I), u && u({ action: c, location: k.location, delta: w });
  }
  function b(I, w) {
    c = st.Push;
    let v = mo(k.location, I, w);
    n && n(v, I), (h = g() + 1);
    let E = yp(v, h),
      L = k.createHref(v);
    try {
      o.pushState(E, "", L);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      i.location.assign(L);
    }
    a && u && u({ action: c, location: k.location, delta: 1 });
  }
  function N(I, w) {
    c = st.Replace;
    let v = mo(k.location, I, w);
    n && n(v, I), (h = g());
    let E = yp(v, h),
      L = k.createHref(v);
    o.replaceState(E, "", L),
      a && u && u({ action: c, location: k.location, delta: 0 });
  }
  function S(I) {
    let w = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof I == "string" ? I : oi(I);
    return (
      be(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, w)
    );
  }
  let k = {
    get action() {
      return c;
    },
    get location() {
      return e(i, o);
    },
    listen(I) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(vp, y),
        (u = I),
        () => {
          i.removeEventListener(vp, y), (u = null);
        }
      );
    },
    createHref(I) {
      return t(i, I);
    },
    createURL: S,
    encodeLocation(I) {
      let w = S(I);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: b,
    replace: N,
    go(I) {
      return o.go(I);
    },
  };
  return k;
}
var et;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(et || (et = {}));
const ib = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ab(e) {
  return e.index === !0;
}
function Au(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, a) => {
      let o = [...n, a],
        c = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (be(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        be(
          !r[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ab(i))
      ) {
        let u = nt({}, i, t(i), { id: c });
        return (r[c] = u), u;
      } else {
        let u = nt({}, i, t(i), { id: c, children: void 0 });
        return (
          (r[c] = u), i.children && (u.children = Au(i.children, t, o, r)), u
        );
      }
    })
  );
}
function Mi(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Zn(t) : t,
    i = Rr(r.pathname || "/", n);
  if (i == null) return null;
  let a = Dg(e);
  sb(a);
  let o = null;
  for (let c = 0; o == null && c < a.length; ++c) o = gb(a[c], yb(i));
  return o;
}
function ob(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Dg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, o, c) => {
    let u = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    u.relativePath.startsWith("/") &&
      (be(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let h = Kn([r, u.relativePath]),
      g = n.concat(u);
    a.children &&
      a.children.length > 0 &&
      (be(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + h + '".')
      ),
      Dg(a.children, t, g, h)),
      !(a.path == null && !a.index) &&
        t.push({ path: h, score: pb(h, a.index), routesMeta: g });
  };
  return (
    e.forEach((a, o) => {
      var c;
      if (a.path === "" || !((c = a.path) != null && c.includes("?"))) i(a, o);
      else for (let u of jg(a.path)) i(a, o, u);
    }),
    t
  );
}
function jg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [a, ""] : [a];
  let o = jg(r.join("/")),
    c = [];
  return (
    c.push(...o.map((u) => (u === "" ? a : [a, u].join("/")))),
    i && c.push(...o),
    c.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function sb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : mb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const lb = /^:\w+$/,
  cb = 3,
  ub = 2,
  db = 1,
  fb = 10,
  hb = -2,
  wp = (e) => e === "*";
function pb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(wp) && (r += hb),
    t && (r += ub),
    n
      .filter((i) => !wp(i))
      .reduce((i, a) => i + (lb.test(a) ? cb : a === "" ? db : fb), r)
  );
}
function mb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function gb(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let c = n[o],
      u = o === n.length - 1,
      h = i === "/" ? t : t.slice(i.length) || "/",
      g = Ru(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        h
      );
    if (!g) return null;
    Object.assign(r, g.params);
    let y = c.route;
    a.push({
      params: r,
      pathname: Kn([i, g.pathname]),
      pathnameBase: Eb(Kn([i, g.pathnameBase])),
      route: y,
    }),
      g.pathnameBase !== "/" && (i = Kn([i, g.pathnameBase]));
  }
  return a;
}
function Ru(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = vb(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, "$1"),
    c = i.slice(1);
  return {
    params: r.reduce((h, g, y) => {
      let { paramName: b, isOptional: N } = g;
      if (b === "*") {
        let k = c[y] || "";
        o = a.slice(0, a.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const S = c[y];
      return N && !S ? (h[b] = void 0) : (h[b] = wb(S || "", b)), h;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function vb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ai(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, c, u) => (
            r.push({ paramName: c, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function yb(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ai(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function wb(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ai(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Rr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function bb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Zn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : xb(n, t)) : t,
    search: Cb(r),
    hash: kb(i),
  };
}
function xb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Sc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Sl(e, t) {
  let n = Bg(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function _l(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Zn(e))
    : ((i = nt({}, e)),
      be(
        !i.pathname || !i.pathname.includes("?"),
        Sc("?", "pathname", "search", i)
      ),
      be(
        !i.pathname || !i.pathname.includes("#"),
        Sc("#", "pathname", "hash", i)
      ),
      be(!i.search || !i.search.includes("#"), Sc("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "",
    o = a ? "/" : i.pathname,
    c;
  if (o == null) c = n;
  else if (r) {
    let y = t.length === 0 ? [] : t[t.length - 1].replace(/^\//, "").split("/");
    if (o.startsWith("..")) {
      let b = o.split("/");
      for (; b[0] === ".."; ) b.shift(), y.pop();
      i.pathname = b.join("/");
    }
    c = "/" + y.join("/");
  } else {
    let y = t.length - 1;
    if (o.startsWith("..")) {
      let b = o.split("/");
      for (; b[0] === ".."; ) b.shift(), (y -= 1);
      i.pathname = b.join("/");
    }
    c = y >= 0 ? t[y] : "/";
  }
  let u = bb(i, c),
    h = o && o !== "/" && o.endsWith("/"),
    g = (a || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (h || g) && (u.pathname += "/"), u;
}
const Kn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Eb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Kd {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function $g(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const zg = ["post", "put", "patch", "delete"],
  Sb = new Set(zg),
  _b = ["get", ...zg],
  Tb = new Set(_b),
  Nb = new Set([301, 302, 303, 307, 308]),
  Ib = new Set([307, 308]),
  _c = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Pb = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ta = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Ug = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ab = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Fg = "remix-router-transitions";
function Rb(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  be(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let T = e.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: T(P) });
  } else i = Ab;
  let a = {},
    o = Au(e.routes, i, void 0, a),
    c,
    u = e.basename || "/",
    h = nt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    g = null,
    y = new Set(),
    b = null,
    N = null,
    S = null,
    k = e.hydrationData != null,
    I = Mi(o, e.history.location, u),
    w = null;
  if (I == null) {
    let T = Xt(404, { pathname: e.history.location.pathname }),
      { matches: P, route: j } = Tp(o);
    (I = P), (w = { [j.id]: T });
  }
  let v,
    E = I.some((T) => T.route.lazy),
    L = I.some((T) => T.route.loader);
  if (E) v = !1;
  else if (!L) v = !0;
  else if (h.v7_partialHydration) {
    let T = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null;
    v = I.every(
      (j) =>
        j.route.loader &&
        j.route.loader.hydrate !== !0 &&
        ((T && T[j.route.id] !== void 0) || (P && P[j.route.id] !== void 0))
    );
  } else v = e.hydrationData != null;
  let A,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: I,
      initialized: v,
      navigation: _c,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || w,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = st.Pop,
    B = !1,
    $,
    K = !1,
    te = new Map(),
    re = null,
    Z = !1,
    ye = !1,
    Se = [],
    ht = [],
    we = new Map(),
    F = 0,
    ee = -1,
    z = new Map(),
    fe = new Set(),
    H = new Map(),
    G = new Map(),
    Y = new Set(),
    _ = new Map(),
    R = new Map(),
    me = !1;
  function W() {
    if (
      ((g = e.history.listen((T) => {
        let { action: P, location: j, delta: q } = T;
        if (me) {
          me = !1;
          return;
        }
        ai(
          R.size === 0 || q != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let Q = fa({
          currentLocation: C.location,
          nextLocation: j,
          historyAction: P,
        });
        if (Q && q != null) {
          (me = !0),
            e.history.go(q * -1),
            xn(Q, {
              state: "blocked",
              location: j,
              proceed() {
                xn(Q, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: j,
                }),
                  e.history.go(q);
              },
              reset() {
                let ve = new Map(C.blockers);
                ve.set(Q, Ta), ie({ blockers: ve });
              },
            });
          return;
        }
        return he(P, j);
      })),
      n)
    ) {
      Hb(t, te);
      let T = () => Wb(t, te);
      t.addEventListener("pagehide", T),
        (re = () => t.removeEventListener("pagehide", T));
    }
    return C.initialized || he(st.Pop, C.location, { initialHydration: !0 }), A;
  }
  function Oe() {
    g && g(),
      re && re(),
      y.clear(),
      $ && $.abort(),
      C.fetchers.forEach((T, P) => on(P)),
      C.blockers.forEach((T, P) => Ln(P));
  }
  function le(T) {
    return y.add(T), () => y.delete(T);
  }
  function ie(T, P) {
    P === void 0 && (P = {}), (C = nt({}, C, T));
    let j = [],
      q = [];
    h.v7_fetcherPersist &&
      C.fetchers.forEach((Q, ve) => {
        Q.state === "idle" && (Y.has(ve) ? q.push(ve) : j.push(ve));
      }),
      [...y].forEach((Q) =>
        Q(C, {
          deletedFetchers: q,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      h.v7_fetcherPersist &&
        (j.forEach((Q) => C.fetchers.delete(Q)), q.forEach((Q) => on(Q)));
  }
  function oe(T, P, j) {
    var q, Q;
    let { flushSync: ve } = j === void 0 ? {} : j,
      se =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        hn(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((q = T.state) == null ? void 0 : q._isRedirect) !== !0,
      ae;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (ae = P.actionData)
        : (ae = null)
      : se
      ? (ae = C.actionData)
      : (ae = null);
    let V = P.loaderData
        ? _p(C.loaderData, P.loaderData, P.matches || [], P.errors)
        : C.loaderData,
      ce = C.blockers;
    ce.size > 0 && ((ce = new Map(ce)), ce.forEach((pe, Te) => ce.set(Te, Ta)));
    let De =
      B === !0 ||
      (C.navigation.formMethod != null &&
        hn(C.navigation.formMethod) &&
        ((Q = T.state) == null ? void 0 : Q._isRedirect) !== !0);
    c && ((o = c), (c = void 0)),
      Z ||
        O === st.Pop ||
        (O === st.Push
          ? e.history.push(T, T.state)
          : O === st.Replace && e.history.replace(T, T.state));
    let ue;
    if (O === st.Pop) {
      let pe = te.get(C.location.pathname);
      pe && pe.has(T.pathname)
        ? (ue = { currentLocation: C.location, nextLocation: T })
        : te.has(T.pathname) &&
          (ue = { currentLocation: T, nextLocation: C.location });
    } else if (K) {
      let pe = te.get(C.location.pathname);
      pe
        ? pe.add(T.pathname)
        : ((pe = new Set([T.pathname])), te.set(C.location.pathname, pe)),
        (ue = { currentLocation: C.location, nextLocation: T });
    }
    ie(
      nt({}, P, {
        actionData: ae,
        loaderData: V,
        historyAction: O,
        location: T,
        initialized: !0,
        navigation: _c,
        revalidation: "idle",
        restoreScrollPosition: fi(T, P.matches || C.matches),
        preventScrollReset: De,
        blockers: ce,
      }),
      { viewTransitionOpts: ue, flushSync: ve === !0 }
    ),
      (O = st.Pop),
      (B = !1),
      (K = !1),
      (Z = !1),
      (ye = !1),
      (Se = []),
      (ht = []);
  }
  async function Je(T, P) {
    if (typeof T == "number") {
      e.history.go(T);
      return;
    }
    let j = Lu(
        C.location,
        C.matches,
        u,
        h.v7_prependBasename,
        T,
        h.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: q,
        submission: Q,
        error: ve,
      } = bp(h.v7_normalizeFormMethod, !1, j, P),
      se = C.location,
      ae = mo(C.location, q, P && P.state);
    ae = nt({}, ae, e.history.encodeLocation(ae));
    let V = P && P.replace != null ? P.replace : void 0,
      ce = st.Push;
    V === !0
      ? (ce = st.Replace)
      : V === !1 ||
        (Q != null &&
          hn(Q.formMethod) &&
          Q.formAction === C.location.pathname + C.location.search &&
          (ce = st.Replace));
    let De =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      ue = (P && P.unstable_flushSync) === !0,
      pe = fa({ currentLocation: se, nextLocation: ae, historyAction: ce });
    if (pe) {
      xn(pe, {
        state: "blocked",
        location: ae,
        proceed() {
          xn(pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ae,
          }),
            Je(T, P);
        },
        reset() {
          let Te = new Map(C.blockers);
          Te.set(pe, Ta), ie({ blockers: Te });
        },
      });
      return;
    }
    return await he(ce, ae, {
      submission: Q,
      pendingError: ve,
      preventScrollReset: De,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: ue,
    });
  }
  function pt() {
    if (
      (rt(),
      ie({ revalidation: "loading" }),
      C.navigation.state !== "submitting")
    ) {
      if (C.navigation.state === "idle") {
        he(C.historyAction, C.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      he(O || C.historyAction, C.navigation.location, {
        overrideNavigation: C.navigation,
      });
    }
  }
  async function he(T, P, j) {
    $ && $.abort(),
      ($ = null),
      (O = T),
      (Z = (j && j.startUninterruptedRevalidation) === !0),
      pa(C.location, C.matches),
      (B = (j && j.preventScrollReset) === !0),
      (K = (j && j.enableViewTransition) === !0);
    let q = c || o,
      Q = j && j.overrideNavigation,
      ve = Mi(q, P, u),
      se = (j && j.flushSync) === !0;
    if (!ve) {
      let Te = Xt(404, { pathname: P.pathname }),
        { matches: Ct, route: it } = Tp(q);
      rr(),
        oe(
          P,
          { matches: Ct, loaderData: {}, errors: { [it.id]: Te } },
          { flushSync: se }
        );
      return;
    }
    if (
      C.initialized &&
      !ye &&
      Bb(C.location, P) &&
      !(j && j.submission && hn(j.submission.formMethod))
    ) {
      oe(P, { matches: ve }, { flushSync: se });
      return;
    }
    $ = new AbortController();
    let ae = Ia(e.history, P, $.signal, j && j.submission),
      V,
      ce;
    if (j && j.pendingError) ce = { [Ya(ve).route.id]: j.pendingError };
    else if (j && j.submission && hn(j.submission.formMethod)) {
      let Te = await Ze(ae, P, j.submission, ve, {
        replace: j.replace,
        flushSync: se,
      });
      if (Te.shortCircuited) return;
      (V = Te.pendingActionData),
        (ce = Te.pendingActionError),
        (Q = Tc(P, j.submission)),
        (se = !1),
        (ae = new Request(ae.url, { signal: ae.signal }));
    }
    let {
      shortCircuited: De,
      loaderData: ue,
      errors: pe,
    } = await Ee(
      ae,
      P,
      ve,
      Q,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      se,
      V,
      ce
    );
    De ||
      (($ = null),
      oe(
        P,
        nt({ matches: ve }, V ? { actionData: V } : {}, {
          loaderData: ue,
          errors: pe,
        })
      ));
  }
  async function Ze(T, P, j, q, Q) {
    Q === void 0 && (Q = {}), rt();
    let ve = Fb(P, j);
    ie({ navigation: ve }, { flushSync: Q.flushSync === !0 });
    let se,
      ae = Mu(q, P);
    if (!ae.route.action && !ae.route.lazy)
      se = {
        type: et.error,
        error: Xt(405, {
          method: T.method,
          pathname: P.pathname,
          routeId: ae.route.id,
        }),
      };
    else if (
      ((se = await Na("action", T, ae, q, a, i, u, h.v7_relativeSplatPath)),
      T.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Vi(se)) {
      let V;
      return (
        Q && Q.replace != null
          ? (V = Q.replace)
          : (V = se.location === C.location.pathname + C.location.search),
        await We(C, se, { submission: j, replace: V }),
        { shortCircuited: !0 }
      );
    }
    if (Ga(se)) {
      let V = Ya(q, ae.route.id);
      return (
        (Q && Q.replace) !== !0 && (O = st.Push),
        {
          pendingActionData: {},
          pendingActionError: { [V.route.id]: se.error },
        }
      );
    }
    if (qr(se)) throw Xt(400, { type: "defer-action" });
    return { pendingActionData: { [ae.route.id]: se.data } };
  }
  async function Ee(T, P, j, q, Q, ve, se, ae, V, ce, De) {
    let ue = q || Tc(P, Q),
      pe = Q || ve || Pp(ue),
      Te = c || o,
      [Ct, it] = xp(
        e.history,
        C,
        j,
        pe,
        P,
        h.v7_partialHydration && ae === !0,
        ye,
        Se,
        ht,
        Y,
        H,
        fe,
        Te,
        u,
        ce,
        De
      );
    if (
      (rr(
        (_e) =>
          !(j && j.some((Be) => Be.route.id === _e)) ||
          (Ct && Ct.some((Be) => Be.route.id === _e))
      ),
      (ee = ++F),
      Ct.length === 0 && it.length === 0)
    ) {
      let _e = Rn();
      return (
        oe(
          P,
          nt(
            { matches: j, loaderData: {}, errors: De || null },
            ce ? { actionData: ce } : {},
            _e ? { fetchers: new Map(C.fetchers) } : {}
          ),
          { flushSync: V }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Z && (!h.v7_partialHydration || !ae)) {
      it.forEach((Be) => {
        let qt = C.fetchers.get(Be.key),
          gi = Pa(void 0, qt ? qt.data : void 0);
        C.fetchers.set(Be.key, gi);
      });
      let _e = ce || C.actionData;
      ie(
        nt(
          { navigation: ue },
          _e
            ? Object.keys(_e).length === 0
              ? { actionData: null }
              : { actionData: _e }
            : {},
          it.length > 0 ? { fetchers: new Map(C.fetchers) } : {}
        ),
        { flushSync: V }
      );
    }
    it.forEach((_e) => {
      we.has(_e.key) && $t(_e.key),
        _e.controller && we.set(_e.key, _e.controller);
    });
    let Gt = () => it.forEach((_e) => $t(_e.key));
    $ && $.signal.addEventListener("abort", Gt);
    let {
      results: yt,
      loaderResults: ir,
      fetcherResults: sn,
    } = await Ce(C.matches, j, Ct, it, T);
    if (T.signal.aborted) return { shortCircuited: !0 };
    $ && $.signal.removeEventListener("abort", Gt),
      it.forEach((_e) => we.delete(_e.key));
    let En = Np(yt);
    if (En) {
      if (En.idx >= Ct.length) {
        let _e = it[En.idx - Ct.length].key;
        fe.add(_e);
      }
      return await We(C, En.result, { replace: se }), { shortCircuited: !0 };
    }
    let { loaderData: zr, errors: ma } = Sp(C, j, Ct, ir, De, it, sn, _);
    _.forEach((_e, Be) => {
      _e.subscribe((qt) => {
        (qt || _e.done) && _.delete(Be);
      });
    });
    let pi = Rn(),
      ar = bn(ee),
      mi = pi || ar || it.length > 0;
    return nt(
      { loaderData: zr, errors: ma },
      mi ? { fetchers: new Map(C.fetchers) } : {}
    );
  }
  function Ye(T, P, j, q) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    we.has(T) && $t(T);
    let Q = (q && q.unstable_flushSync) === !0,
      ve = c || o,
      se = Lu(
        C.location,
        C.matches,
        u,
        h.v7_prependBasename,
        j,
        h.v7_relativeSplatPath,
        P,
        q == null ? void 0 : q.relative
      ),
      ae = Mi(ve, se, u);
    if (!ae) {
      Ae(T, P, Xt(404, { pathname: se }), { flushSync: Q });
      return;
    }
    let {
      path: V,
      submission: ce,
      error: De,
    } = bp(h.v7_normalizeFormMethod, !0, se, q);
    if (De) {
      Ae(T, P, De, { flushSync: Q });
      return;
    }
    let ue = Mu(ae, V);
    if (((B = (q && q.preventScrollReset) === !0), ce && hn(ce.formMethod))) {
      Ge(T, P, V, ue, ae, Q, ce);
      return;
    }
    H.set(T, { routeId: P, path: V }), Ue(T, P, V, ue, ae, Q, ce);
  }
  async function Ge(T, P, j, q, Q, ve, se) {
    if ((rt(), H.delete(T), !q.route.action && !q.route.lazy)) {
      let Be = Xt(405, { method: se.formMethod, pathname: j, routeId: P });
      Ae(T, P, Be, { flushSync: ve });
      return;
    }
    let ae = C.fetchers.get(T);
    ne(T, Vb(se, ae), { flushSync: ve });
    let V = new AbortController(),
      ce = Ia(e.history, j, V.signal, se);
    we.set(T, V);
    let De = F,
      ue = await Na("action", ce, q, Q, a, i, u, h.v7_relativeSplatPath);
    if (ce.signal.aborted) {
      we.get(T) === V && we.delete(T);
      return;
    }
    if (Y.has(T)) {
      ne(T, dr(void 0));
      return;
    }
    if (Vi(ue))
      if ((we.delete(T), ee > De)) {
        ne(T, dr(void 0));
        return;
      } else
        return fe.add(T), ne(T, Pa(se)), We(C, ue, { fetcherSubmission: se });
    if (Ga(ue)) {
      Ae(T, P, ue.error);
      return;
    }
    if (qr(ue)) throw Xt(400, { type: "defer-action" });
    let pe = C.navigation.location || C.location,
      Te = Ia(e.history, pe, V.signal),
      Ct = c || o,
      it =
        C.navigation.state !== "idle"
          ? Mi(Ct, C.navigation.location, u)
          : C.matches;
    be(it, "Didn't find any matches after fetcher action");
    let Gt = ++F;
    z.set(T, Gt);
    let yt = Pa(se, ue.data);
    C.fetchers.set(T, yt);
    let [ir, sn] = xp(
      e.history,
      C,
      it,
      se,
      pe,
      !1,
      ye,
      Se,
      ht,
      Y,
      H,
      fe,
      Ct,
      u,
      { [q.route.id]: ue.data },
      void 0
    );
    sn
      .filter((Be) => Be.key !== T)
      .forEach((Be) => {
        let qt = Be.key,
          gi = C.fetchers.get(qt),
          Hl = Pa(void 0, gi ? gi.data : void 0);
        C.fetchers.set(qt, Hl),
          we.has(qt) && $t(qt),
          Be.controller && we.set(qt, Be.controller);
      }),
      ie({ fetchers: new Map(C.fetchers) });
    let En = () => sn.forEach((Be) => $t(Be.key));
    V.signal.addEventListener("abort", En);
    let {
      results: zr,
      loaderResults: ma,
      fetcherResults: pi,
    } = await Ce(C.matches, it, ir, sn, Te);
    if (V.signal.aborted) return;
    V.signal.removeEventListener("abort", En),
      z.delete(T),
      we.delete(T),
      sn.forEach((Be) => we.delete(Be.key));
    let ar = Np(zr);
    if (ar) {
      if (ar.idx >= ir.length) {
        let Be = sn[ar.idx - ir.length].key;
        fe.add(Be);
      }
      return We(C, ar.result);
    }
    let { loaderData: mi, errors: _e } = Sp(
      C,
      C.matches,
      ir,
      ma,
      void 0,
      sn,
      pi,
      _
    );
    if (C.fetchers.has(T)) {
      let Be = dr(ue.data);
      C.fetchers.set(T, Be);
    }
    bn(Gt),
      C.navigation.state === "loading" && Gt > ee
        ? (be(O, "Expected pending action"),
          $ && $.abort(),
          oe(C.navigation.location, {
            matches: it,
            loaderData: mi,
            errors: _e,
            fetchers: new Map(C.fetchers),
          }))
        : (ie({
            errors: _e,
            loaderData: _p(C.loaderData, mi, it, _e),
            fetchers: new Map(C.fetchers),
          }),
          (ye = !1));
  }
  async function Ue(T, P, j, q, Q, ve, se) {
    let ae = C.fetchers.get(T);
    ne(T, Pa(se, ae ? ae.data : void 0), { flushSync: ve });
    let V = new AbortController(),
      ce = Ia(e.history, j, V.signal);
    we.set(T, V);
    let De = F,
      ue = await Na("loader", ce, q, Q, a, i, u, h.v7_relativeSplatPath);
    if (
      (qr(ue) && (ue = (await Wg(ue, ce.signal, !0)) || ue),
      we.get(T) === V && we.delete(T),
      !ce.signal.aborted)
    ) {
      if (Y.has(T)) {
        ne(T, dr(void 0));
        return;
      }
      if (Vi(ue))
        if (ee > De) {
          ne(T, dr(void 0));
          return;
        } else {
          fe.add(T), await We(C, ue);
          return;
        }
      if (Ga(ue)) {
        Ae(T, P, ue.error);
        return;
      }
      be(!qr(ue), "Unhandled fetcher deferred data"), ne(T, dr(ue.data));
    }
  }
  async function We(T, P, j) {
    let {
      submission: q,
      fetcherSubmission: Q,
      replace: ve,
    } = j === void 0 ? {} : j;
    P.revalidate && (ye = !0);
    let se = mo(T.location, P.location, { _isRedirect: !0 });
    if ((be(se, "Expected a location on the redirect navigation"), n)) {
      let pe = !1;
      if (P.reloadDocument) pe = !0;
      else if (Ug.test(P.location)) {
        const Te = e.history.createURL(P.location);
        pe = Te.origin !== t.location.origin || Rr(Te.pathname, u) == null;
      }
      if (pe) {
        ve ? t.location.replace(P.location) : t.location.assign(P.location);
        return;
      }
    }
    $ = null;
    let ae = ve === !0 ? st.Replace : st.Push,
      { formMethod: V, formAction: ce, formEncType: De } = T.navigation;
    !q && !Q && V && ce && De && (q = Pp(T.navigation));
    let ue = q || Q;
    if (Ib.has(P.status) && ue && hn(ue.formMethod))
      await he(ae, se, {
        submission: nt({}, ue, { formAction: P.location }),
        preventScrollReset: B,
      });
    else {
      let pe = Tc(se, q);
      await he(ae, se, {
        overrideNavigation: pe,
        fetcherSubmission: Q,
        preventScrollReset: B,
      });
    }
  }
  async function Ce(T, P, j, q, Q) {
    let ve = await Promise.all([
        ...j.map((V) => Na("loader", Q, V, P, a, i, u, h.v7_relativeSplatPath)),
        ...q.map((V) =>
          V.matches && V.match && V.controller
            ? Na(
                "loader",
                Ia(e.history, V.path, V.controller.signal),
                V.match,
                V.matches,
                a,
                i,
                u,
                h.v7_relativeSplatPath
              )
            : { type: et.error, error: Xt(404, { pathname: V.path }) }
        ),
      ]),
      se = ve.slice(0, j.length),
      ae = ve.slice(j.length);
    return (
      await Promise.all([
        Ip(
          T,
          j,
          se,
          se.map(() => Q.signal),
          !1,
          C.loaderData
        ),
        Ip(
          T,
          q.map((V) => V.match),
          ae,
          q.map((V) => (V.controller ? V.controller.signal : null)),
          !0
        ),
      ]),
      { results: ve, loaderResults: se, fetcherResults: ae }
    );
  }
  function rt() {
    (ye = !0),
      Se.push(...rr()),
      H.forEach((T, P) => {
        we.has(P) && (ht.push(P), $t(P));
      });
  }
  function ne(T, P, j) {
    j === void 0 && (j = {}),
      C.fetchers.set(T, P),
      ie(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (j && j.flushSync) === !0 }
      );
  }
  function Ae(T, P, j, q) {
    q === void 0 && (q = {});
    let Q = Ya(C.matches, P);
    on(T),
      ie(
        { errors: { [Q.route.id]: j }, fetchers: new Map(C.fetchers) },
        { flushSync: (q && q.flushSync) === !0 }
      );
  }
  function wn(T) {
    return (
      h.v7_fetcherPersist &&
        (G.set(T, (G.get(T) || 0) + 1), Y.has(T) && Y.delete(T)),
      C.fetchers.get(T) || Pb
    );
  }
  function on(T) {
    let P = C.fetchers.get(T);
    we.has(T) && !(P && P.state === "loading" && z.has(T)) && $t(T),
      H.delete(T),
      z.delete(T),
      fe.delete(T),
      Y.delete(T),
      C.fetchers.delete(T);
  }
  function Lt(T) {
    if (h.v7_fetcherPersist) {
      let P = (G.get(T) || 0) - 1;
      P <= 0 ? (G.delete(T), Y.add(T)) : G.set(T, P);
    } else on(T);
    ie({ fetchers: new Map(C.fetchers) });
  }
  function $t(T) {
    let P = we.get(T);
    be(P, "Expected fetch controller: " + T), P.abort(), we.delete(T);
  }
  function zt(T) {
    for (let P of T) {
      let j = wn(P),
        q = dr(j.data);
      C.fetchers.set(P, q);
    }
  }
  function Rn() {
    let T = [],
      P = !1;
    for (let j of fe) {
      let q = C.fetchers.get(j);
      be(q, "Expected fetcher: " + j),
        q.state === "loading" && (fe.delete(j), T.push(j), (P = !0));
    }
    return zt(T), P;
  }
  function bn(T) {
    let P = [];
    for (let [j, q] of z)
      if (q < T) {
        let Q = C.fetchers.get(j);
        be(Q, "Expected fetcher: " + j),
          Q.state === "loading" && ($t(j), z.delete(j), P.push(j));
      }
    return zt(P), P.length > 0;
  }
  function Vl(T, P) {
    let j = C.blockers.get(T) || Ta;
    return R.get(T) !== P && R.set(T, P), j;
  }
  function Ln(T) {
    C.blockers.delete(T), R.delete(T);
  }
  function xn(T, P) {
    let j = C.blockers.get(T) || Ta;
    be(
      (j.state === "unblocked" && P.state === "blocked") ||
        (j.state === "blocked" && P.state === "blocked") ||
        (j.state === "blocked" && P.state === "proceeding") ||
        (j.state === "blocked" && P.state === "unblocked") ||
        (j.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + j.state + " -> " + P.state
    );
    let q = new Map(C.blockers);
    q.set(T, P), ie({ blockers: q });
  }
  function fa(T) {
    let { currentLocation: P, nextLocation: j, historyAction: q } = T;
    if (R.size === 0) return;
    R.size > 1 && ai(!1, "A router only supports one blocker at a time");
    let Q = Array.from(R.entries()),
      [ve, se] = Q[Q.length - 1],
      ae = C.blockers.get(ve);
    if (
      !(ae && ae.state === "proceeding") &&
      se({ currentLocation: P, nextLocation: j, historyAction: q })
    )
      return ve;
  }
  function rr(T) {
    let P = [];
    return (
      _.forEach((j, q) => {
        (!T || T(q)) && (j.cancel(), P.push(q), _.delete(q));
      }),
      P
    );
  }
  function ha(T, P, j) {
    if (((b = T), (S = P), (N = j || null), !k && C.navigation === _c)) {
      k = !0;
      let q = fi(C.location, C.matches);
      q != null && ie({ restoreScrollPosition: q });
    }
    return () => {
      (b = null), (S = null), (N = null);
    };
  }
  function jo(T, P) {
    return (
      (N &&
        N(
          T,
          P.map((q) => ob(q, C.loaderData))
        )) ||
      T.key
    );
  }
  function pa(T, P) {
    if (b && S) {
      let j = jo(T, P);
      b[j] = S();
    }
  }
  function fi(T, P) {
    if (b) {
      let j = jo(T, P),
        q = b[j];
      if (typeof q == "number") return q;
    }
    return null;
  }
  function hi(T) {
    (a = {}), (c = Au(T, i, void 0, a));
  }
  return (
    (A = {
      get basename() {
        return u;
      },
      get future() {
        return h;
      },
      get state() {
        return C;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: W,
      subscribe: le,
      enableScrollRestoration: ha,
      navigate: Je,
      fetch: Ye,
      revalidate: pt,
      createHref: (T) => e.history.createHref(T),
      encodeLocation: (T) => e.history.encodeLocation(T),
      getFetcher: wn,
      deleteFetcher: Lt,
      dispose: Oe,
      getBlocker: Vl,
      deleteBlocker: Ln,
      _internalFetchControllers: we,
      _internalActiveDeferreds: _,
      _internalSetRoutes: hi,
    }),
    A
  );
}
function Lb(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Lu(e, t, n, r, i, a, o, c) {
  let u, h;
  if (o) {
    u = [];
    for (let y of t)
      if ((u.push(y), y.route.id === o)) {
        h = y;
        break;
      }
  } else (u = t), (h = t[t.length - 1]);
  let g = _l(i || ".", Sl(u, a), Rr(e.pathname, n) || e.pathname, c === "path");
  return (
    i == null && ((g.search = e.search), (g.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      h &&
      h.route.index &&
      !Yd(g.search) &&
      (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (g.pathname = g.pathname === "/" ? n : Kn([n, g.pathname])),
    oi(g)
  );
}
function bp(e, t, n, r) {
  if (!r || !Lb(r)) return { path: n };
  if (r.formMethod && !Ub(r.formMethod))
    return { path: n, error: Xt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Xt(400, { type: "invalid-body" }) }),
    a = r.formMethod || "get",
    o = e ? a.toUpperCase() : a.toLowerCase(),
    c = Hg(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!hn(o)) return i();
      let b =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((N, S) => {
              let [k, I] = S;
              return (
                "" +
                N +
                k +
                "=" +
                I +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: b,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!hn(o)) return i();
      try {
        let b = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: b,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  be(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, h;
  if (r.formData) (u = Ou(r.formData)), (h = r.formData);
  else if (r.body instanceof FormData) (u = Ou(r.body)), (h = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (h = kp(u));
  else if (r.body == null) (u = new URLSearchParams()), (h = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (h = kp(u));
    } catch {
      return i();
    }
  let g = {
    formMethod: o,
    formAction: c,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (hn(g.formMethod)) return { path: n, submission: g };
  let y = Zn(n);
  return (
    t && y.search && Yd(y.search) && u.append("index", ""),
    (y.search = "?" + u),
    { path: oi(y), submission: g }
  );
}
function Ob(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function xp(e, t, n, r, i, a, o, c, u, h, g, y, b, N, S, k) {
  let I = k ? Object.values(k)[0] : S ? Object.values(S)[0] : void 0,
    w = e.createURL(t.location),
    v = e.createURL(i),
    E = k ? Object.keys(k)[0] : void 0,
    A = Ob(n, E).filter((O, B) => {
      if (a) return Mb(t, O.route);
      if (O.route.lazy) return !0;
      if (O.route.loader == null) return !1;
      if (
        Db(t.loaderData, t.matches[B], O) ||
        c.some((te) => te === O.route.id)
      )
        return !0;
      let $ = t.matches[B],
        K = O;
      return Ep(
        O,
        nt(
          {
            currentUrl: w,
            currentParams: $.params,
            nextUrl: v,
            nextParams: K.params,
          },
          r,
          {
            actionResult: I,
            defaultShouldRevalidate:
              o ||
              w.pathname + w.search === v.pathname + v.search ||
              w.search !== v.search ||
              Vg($, K),
          }
        )
      );
    }),
    C = [];
  return (
    g.forEach((O, B) => {
      if (a || !n.some((Z) => Z.route.id === O.routeId) || h.has(B)) return;
      let $ = Mi(b, O.path, N);
      if (!$) {
        C.push({
          key: B,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let K = t.fetchers.get(B),
        te = Mu($, O.path),
        re = !1;
      y.has(B)
        ? (re = !1)
        : u.includes(B)
        ? (re = !0)
        : K && K.state !== "idle" && K.data === void 0
        ? (re = o)
        : (re = Ep(
            te,
            nt(
              {
                currentUrl: w,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: v,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: I, defaultShouldRevalidate: o }
            )
          )),
        re &&
          C.push({
            key: B,
            routeId: O.routeId,
            path: O.path,
            matches: $,
            match: te,
            controller: new AbortController(),
          });
    }),
    [A, C]
  );
}
function Mb(e, t) {
  return t.loader
    ? t.loader.hydrate
      ? !0
      : e.loaderData[t.id] === void 0 &&
        (!e.errors || e.errors[t.id] === void 0)
    : !1;
}
function Db(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Vg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ep(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Cp(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  be(i, "No route found in manifest");
  let a = {};
  for (let o in r) {
    let u = i[o] !== void 0 && o !== "hasErrorBoundary";
    ai(
      !u,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !ib.has(o) && (a[o] = r[o]);
  }
  Object.assign(i, a), Object.assign(i, nt({}, t(i), { lazy: void 0 }));
}
async function Na(e, t, n, r, i, a, o, c, u) {
  u === void 0 && (u = {});
  let h,
    g,
    y,
    b = (k) => {
      let I,
        w = new Promise((v, E) => (I = E));
      return (
        (y = () => I()),
        t.signal.addEventListener("abort", y),
        Promise.race([
          k({ request: t, params: n.params, context: u.requestContext }),
          w,
        ])
      );
    };
  try {
    let k = n.route[e];
    if (n.route.lazy)
      if (k) {
        let I,
          w = await Promise.all([
            b(k).catch((v) => {
              I = v;
            }),
            Cp(n.route, a, i),
          ]);
        if (I) throw I;
        g = w[0];
      } else if ((await Cp(n.route, a, i), (k = n.route[e]), k)) g = await b(k);
      else if (e === "action") {
        let I = new URL(t.url),
          w = I.pathname + I.search;
        throw Xt(405, { method: t.method, pathname: w, routeId: n.route.id });
      } else return { type: et.data, data: void 0 };
    else if (k) g = await b(k);
    else {
      let I = new URL(t.url),
        w = I.pathname + I.search;
      throw Xt(404, { pathname: w });
    }
    be(
      g !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (k) {
    (h = et.error), (g = k);
  } finally {
    y && t.signal.removeEventListener("abort", y);
  }
  if (zb(g)) {
    let k = g.status;
    if (Nb.has(k)) {
      let w = g.headers.get("Location");
      if (
        (be(
          w,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Ug.test(w))
      )
        w = Lu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, w, c);
      else if (!u.isStaticRequest) {
        let v = new URL(t.url),
          E = w.startsWith("//") ? new URL(v.protocol + w) : new URL(w),
          L = Rr(E.pathname, o) != null;
        E.origin === v.origin && L && (w = E.pathname + E.search + E.hash);
      }
      if (u.isStaticRequest) throw (g.headers.set("Location", w), g);
      return {
        type: et.redirect,
        status: k,
        location: w,
        revalidate: g.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: g.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: h === et.error ? et.error : et.data, response: g };
    let I;
    try {
      let w = g.headers.get("Content-Type");
      w && /\bapplication\/json\b/.test(w)
        ? (I = await g.json())
        : (I = await g.text());
    } catch (w) {
      return { type: et.error, error: w };
    }
    return h === et.error
      ? { type: h, error: new Kd(k, g.statusText, I), headers: g.headers }
      : { type: et.data, data: I, statusCode: g.status, headers: g.headers };
  }
  if (h === et.error) return { type: h, error: g };
  if ($b(g)) {
    var N, S;
    return {
      type: et.deferred,
      deferredData: g,
      statusCode: (N = g.init) == null ? void 0 : N.status,
      headers:
        ((S = g.init) == null ? void 0 : S.headers) &&
        new Headers(g.init.headers),
    };
  }
  return { type: et.data, data: g };
}
function Ia(e, t, n, r) {
  let i = e.createURL(Hg(t)).toString(),
    a = { signal: n };
  if (r && hn(r.formMethod)) {
    let { formMethod: o, formEncType: c } = r;
    (a.method = o.toUpperCase()),
      c === "application/json"
        ? ((a.headers = new Headers({ "Content-Type": c })),
          (a.body = JSON.stringify(r.json)))
        : c === "text/plain"
        ? (a.body = r.text)
        : c === "application/x-www-form-urlencoded" && r.formData
        ? (a.body = Ou(r.formData))
        : (a.body = r.formData);
  }
  return new Request(i, a);
}
function Ou(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function kp(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function jb(e, t, n, r, i) {
  let a = {},
    o = null,
    c,
    u = !1,
    h = {};
  return (
    n.forEach((g, y) => {
      let b = t[y].route.id;
      if (
        (be(!Vi(g), "Cannot handle redirect results in processLoaderData"),
        Ga(g))
      ) {
        let N = Ya(e, b),
          S = g.error;
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[N.route.id] == null && (o[N.route.id] = S),
          (a[b] = void 0),
          u || ((u = !0), (c = $g(g.error) ? g.error.status : 500)),
          g.headers && (h[b] = g.headers);
      } else
        qr(g)
          ? (i.set(b, g.deferredData), (a[b] = g.deferredData.data))
          : (a[b] = g.data),
          g.statusCode != null &&
            g.statusCode !== 200 &&
            !u &&
            (c = g.statusCode),
          g.headers && (h[b] = g.headers);
    }),
    r && ((o = r), (a[Object.keys(r)[0]] = void 0)),
    { loaderData: a, errors: o, statusCode: c || 200, loaderHeaders: h }
  );
}
function Sp(e, t, n, r, i, a, o, c) {
  let { loaderData: u, errors: h } = jb(t, n, r, i, c);
  for (let g = 0; g < a.length; g++) {
    let { key: y, match: b, controller: N } = a[g];
    be(
      o !== void 0 && o[g] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let S = o[g];
    if (!(N && N.signal.aborted))
      if (Ga(S)) {
        let k = Ya(e.matches, b == null ? void 0 : b.route.id);
        (h && h[k.route.id]) || (h = nt({}, h, { [k.route.id]: S.error })),
          e.fetchers.delete(y);
      } else if (Vi(S)) be(!1, "Unhandled fetcher revalidation redirect");
      else if (qr(S)) be(!1, "Unhandled fetcher deferred data");
      else {
        let k = dr(S.data);
        e.fetchers.set(y, k);
      }
  }
  return { loaderData: u, errors: h };
}
function _p(e, t, n, r) {
  let i = nt({}, t);
  for (let a of n) {
    let o = a.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && a.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Ya(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Tp(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Xt(e, t) {
  let { pathname: n, routeId: r, method: i, type: a } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    c = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (c =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : a === "defer-action"
          ? (c = "defer() is not supported in actions")
          : a === "invalid-body" && (c = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (c = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (c = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (c =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (c = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Kd(e || 500, o, new Error(c), !0)
  );
}
function Np(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Vi(n)) return { result: n, idx: t };
  }
}
function Hg(e) {
  let t = typeof e == "string" ? Zn(e) : e;
  return oi(nt({}, t, { hash: "" }));
}
function Bb(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function qr(e) {
  return e.type === et.deferred;
}
function Ga(e) {
  return e.type === et.error;
}
function Vi(e) {
  return (e && e.type) === et.redirect;
}
function $b(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function zb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Ub(e) {
  return Tb.has(e.toLowerCase());
}
function hn(e) {
  return Sb.has(e.toLowerCase());
}
async function Ip(e, t, n, r, i, a) {
  for (let o = 0; o < n.length; o++) {
    let c = n[o],
      u = t[o];
    if (!u) continue;
    let h = e.find((y) => y.route.id === u.route.id),
      g = h != null && !Vg(h, u) && (a && a[u.route.id]) !== void 0;
    if (qr(c) && (i || g)) {
      let y = r[o];
      be(y, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Wg(c, y, i).then((b) => {
          b && (n[o] = b || n[o]);
        });
    }
  }
}
async function Wg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: et.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: et.error, error: i };
      }
    return { type: et.data, data: e.deferredData.data };
  }
}
function Yd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Mu(e, t) {
  let n = typeof t == "string" ? Zn(t).search : t.search;
  if (e[e.length - 1].route.index && Yd(n || "")) return e[e.length - 1];
  let r = Bg(e);
  return r[r.length - 1];
}
function Pp(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: a,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Tc(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Fb(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Pa(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Vb(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function dr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Hb(e, t) {
  try {
    let n = e.sessionStorage.getItem(Fg);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, a] of Object.entries(r || {}))
        a && Array.isArray(a) && t.set(i, new Set(a || []));
    }
  } catch {}
}
function Wb(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Fg, JSON.stringify(n));
    } catch (r) {
      ai(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    go.apply(this, arguments)
  );
}
const To = D.createContext(null),
  Gd = D.createContext(null),
  er = D.createContext(null),
  Tl = D.createContext(null),
  tr = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kg = D.createContext(null);
function Kb(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ca() || be(!1);
  let { basename: r, navigator: i } = D.useContext(er),
    { hash: a, pathname: o, search: c } = Il(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Kn([r, o])),
    i.createHref({ pathname: u, search: c, hash: a })
  );
}
function ca() {
  return D.useContext(Tl) != null;
}
function Dr() {
  return ca() || be(!1), D.useContext(Tl).location;
}
function Yg(e) {
  D.useContext(er).static || D.useLayoutEffect(e);
}
function Nl() {
  let { isDataRoute: e } = D.useContext(tr);
  return e ? a3() : Yb();
}
function Yb() {
  ca() || be(!1);
  let e = D.useContext(To),
    { basename: t, future: n, navigator: r } = D.useContext(er),
    { matches: i } = D.useContext(tr),
    { pathname: a } = Dr(),
    o = JSON.stringify(Sl(i, n.v7_relativeSplatPath)),
    c = D.useRef(!1);
  return (
    Yg(() => {
      c.current = !0;
    }),
    D.useCallback(
      function (h, g) {
        if ((g === void 0 && (g = {}), !c.current)) return;
        if (typeof h == "number") {
          r.go(h);
          return;
        }
        let y = _l(h, JSON.parse(o), a, g.relative === "path");
        e == null &&
          t !== "/" &&
          (y.pathname = y.pathname === "/" ? t : Kn([t, y.pathname])),
          (g.replace ? r.replace : r.push)(y, g.state, g);
      },
      [t, r, o, a, e]
    )
  );
}
const Gb = D.createContext(null);
function qb(e) {
  let t = D.useContext(tr).outlet;
  return t && D.createElement(Gb.Provider, { value: e }, t);
}
function Il(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = D.useContext(er),
    { matches: i } = D.useContext(tr),
    { pathname: a } = Dr(),
    o = JSON.stringify(Sl(i, r.v7_relativeSplatPath));
  return D.useMemo(() => _l(e, JSON.parse(o), a, n === "path"), [e, o, a, n]);
}
function Qb(e, t, n, r) {
  ca() || be(!1);
  let { navigator: i } = D.useContext(er),
    { matches: a } = D.useContext(tr),
    o = a[a.length - 1],
    c = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let h = Dr(),
    g;
  if (t) {
    var y;
    let I = typeof t == "string" ? Zn(t) : t;
    u === "/" || ((y = I.pathname) != null && y.startsWith(u)) || be(!1),
      (g = I);
  } else g = h;
  let b = g.pathname || "/",
    N = u === "/" ? b : b.slice(u.length) || "/",
    S = Mi(e, { pathname: N }),
    k = t3(
      S &&
        S.map((I) =>
          Object.assign({}, I, {
            params: Object.assign({}, c, I.params),
            pathname: Kn([
              u,
              i.encodeLocation
                ? i.encodeLocation(I.pathname).pathname
                : I.pathname,
            ]),
            pathnameBase:
              I.pathnameBase === "/"
                ? u
                : Kn([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(I.pathnameBase).pathname
                      : I.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      r
    );
  return t && k
    ? D.createElement(
        Tl.Provider,
        {
          value: {
            location: go(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: st.Pop,
          },
        },
        k
      )
    : k;
}
function Xb() {
  let e = i3(),
    t = $g(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    a = null;
  return D.createElement(
    D.Fragment,
    null,
    D.createElement("h2", null, "Unexpected Application Error!"),
    D.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? D.createElement("pre", { style: i }, n) : null,
    a
  );
}
const Jb = D.createElement(Xb, null);
class Zb extends D.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? D.createElement(
          tr.Provider,
          { value: this.props.routeContext },
          D.createElement(Kg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function e3(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = D.useContext(To);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    D.createElement(tr.Provider, { value: t }, r)
  );
}
function t3(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if ((a = n) != null && a.errors) e = n.matches;
    else return null;
  }
  let o = e,
    c = (i = n) == null ? void 0 : i.errors;
  if (c != null) {
    let g = o.findIndex(
      (y) => y.route.id && (c == null ? void 0 : c[y.route.id])
    );
    g >= 0 || be(!1), (o = o.slice(0, Math.min(o.length, g + 1)));
  }
  let u = !1,
    h = -1;
  if (n && r && r.v7_partialHydration)
    for (let g = 0; g < o.length; g++) {
      let y = o[g];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = g),
        y.route.loader &&
          y.route.id &&
          n.loaderData[y.route.id] === void 0 &&
          (!n.errors || n.errors[y.route.id] === void 0))
      ) {
        (u = !0), h >= 0 ? (o = o.slice(0, h + 1)) : (o = [o[0]]);
        break;
      }
    }
  return o.reduceRight((g, y, b) => {
    let N,
      S = !1,
      k = null,
      I = null;
    n &&
      ((N = c && y.route.id ? c[y.route.id] : void 0),
      (k = y.route.errorElement || Jb),
      u &&
        (h < 0 && b === 0
          ? (o3("route-fallback", !1), (S = !0), (I = null))
          : h === b &&
            ((S = !0), (I = y.route.hydrateFallbackElement || null))));
    let w = t.concat(o.slice(0, b + 1)),
      v = () => {
        let E;
        return (
          N
            ? (E = k)
            : S
            ? (E = I)
            : y.route.Component
            ? (E = D.createElement(y.route.Component, null))
            : y.route.element
            ? (E = y.route.element)
            : (E = g),
          D.createElement(e3, {
            match: y,
            routeContext: { outlet: g, matches: w, isDataRoute: n != null },
            children: E,
          })
        );
      };
    return n && (y.route.ErrorBoundary || y.route.errorElement || b === 0)
      ? D.createElement(Zb, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: N,
          children: v(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Gg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Gg || {}),
  ea = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ea || {});
function n3(e) {
  let t = D.useContext(To);
  return t || be(!1), t;
}
function qg(e) {
  let t = D.useContext(Gd);
  return t || be(!1), t;
}
function r3(e) {
  let t = D.useContext(tr);
  return t || be(!1), t;
}
function qd(e) {
  let t = r3(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || be(!1), n.route.id;
}
function Qd() {
  let e = qg(ea.UseLoaderData),
    t = qd(ea.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function i3() {
  var e;
  let t = D.useContext(Kg),
    n = qg(ea.UseRouteError),
    r = qd(ea.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function a3() {
  let { router: e } = n3(Gg.UseNavigateStable),
    t = qd(ea.UseNavigateStable),
    n = D.useRef(!1);
  return (
    Yg(() => {
      n.current = !0;
    }),
    D.useCallback(
      function (i, a) {
        a === void 0 && (a = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, go({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const Ap = {};
function o3(e, t, n) {
  !t && !Ap[e] && (Ap[e] = !0);
}
function s3(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ca() || be(!1);
  let { future: a, static: o } = D.useContext(er),
    { matches: c } = D.useContext(tr),
    { pathname: u } = Dr(),
    h = Nl(),
    g = _l(t, Sl(c, a.v7_relativeSplatPath), u, i === "path"),
    y = JSON.stringify(g);
  return (
    D.useEffect(
      () => h(JSON.parse(y), { replace: n, state: r, relative: i }),
      [h, y, i, n, r]
    ),
    null
  );
}
function l3(e) {
  return qb(e.context);
}
function c3(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = st.Pop,
    navigator: a,
    static: o = !1,
    future: c,
  } = e;
  ca() && be(!1);
  let u = t.replace(/^\/*/, "/"),
    h = D.useMemo(
      () => ({
        basename: u,
        navigator: a,
        static: o,
        future: go({ v7_relativeSplatPath: !1 }, c),
      }),
      [u, c, a, o]
    );
  typeof r == "string" && (r = Zn(r));
  let {
      pathname: g = "/",
      search: y = "",
      hash: b = "",
      state: N = null,
      key: S = "default",
    } = r,
    k = D.useMemo(() => {
      let I = Rr(g, u);
      return I == null
        ? null
        : {
            location: { pathname: I, search: y, hash: b, state: N, key: S },
            navigationType: i,
          };
    }, [u, g, y, b, N, S, i]);
  return k == null
    ? null
    : D.createElement(
        er.Provider,
        { value: h },
        D.createElement(Tl.Provider, { children: n, value: k })
      );
}
new Promise(() => {});
function u3(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: D.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: D.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: D.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function Qg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function d3(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function f3(e, t) {
  return e.button === 0 && (!t || t === "_self") && !d3(e);
}
const h3 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  p3 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ];
function m3(e, t) {
  return Rb({
    basename: t == null ? void 0 : t.basename,
    future: ta({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: tb({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || g3(),
    routes: e,
    mapRouteProperties: u3,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function g3() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ta({}, t, { errors: v3(t.errors) })), t;
}
function v3(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Kd(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let a = window[i.__subType];
        if (typeof a == "function")
          try {
            let o = new a(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let a = new Error(i.message);
        (a.stack = ""), (n[r] = a);
      }
    } else n[r] = i;
  return n;
}
const Xg = D.createContext({ isTransitioning: !1 }),
  y3 = D.createContext(new Map()),
  w3 = "startTransition",
  Rp = Vw[w3],
  b3 = "flushSync",
  Lp = eb[b3];
function x3(e) {
  Rp ? Rp(e) : e();
}
function Aa(e) {
  Lp ? Lp(e) : e();
}
let E3 = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
};
function C3(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, a] = D.useState(n.state),
    [o, c] = D.useState(),
    [u, h] = D.useState({ isTransitioning: !1 }),
    [g, y] = D.useState(),
    [b, N] = D.useState(),
    [S, k] = D.useState(),
    I = D.useRef(new Map()),
    { v7_startTransition: w } = r || {},
    v = D.useCallback(
      (O) => {
        w ? x3(O) : O();
      },
      [w]
    ),
    E = D.useCallback(
      (O, B) => {
        let {
          deletedFetchers: $,
          unstable_flushSync: K,
          unstable_viewTransitionOpts: te,
        } = B;
        $.forEach((Z) => I.current.delete(Z)),
          O.fetchers.forEach((Z, ye) => {
            Z.data !== void 0 && I.current.set(ye, Z.data);
          });
        let re =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!te || re) {
          K ? Aa(() => a(O)) : v(() => a(O));
          return;
        }
        if (K) {
          Aa(() => {
            b && (g && g.resolve(), b.skipTransition()),
              h({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: te.currentLocation,
                nextLocation: te.nextLocation,
              });
          });
          let Z = n.window.document.startViewTransition(() => {
            Aa(() => a(O));
          });
          Z.finished.finally(() => {
            Aa(() => {
              y(void 0), N(void 0), c(void 0), h({ isTransitioning: !1 });
            });
          }),
            Aa(() => N(Z));
          return;
        }
        b
          ? (g && g.resolve(),
            b.skipTransition(),
            k({
              state: O,
              currentLocation: te.currentLocation,
              nextLocation: te.nextLocation,
            }))
          : (c(O),
            h({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: te.currentLocation,
              nextLocation: te.nextLocation,
            }));
      },
      [n.window, b, g, I, v]
    );
  D.useLayoutEffect(() => n.subscribe(E), [n, E]),
    D.useEffect(() => {
      u.isTransitioning && !u.flushSync && y(new E3());
    }, [u]),
    D.useEffect(() => {
      if (g && o && n.window) {
        let O = o,
          B = g.promise,
          $ = n.window.document.startViewTransition(async () => {
            v(() => a(O)), await B;
          });
        $.finished.finally(() => {
          y(void 0), N(void 0), c(void 0), h({ isTransitioning: !1 });
        }),
          N($);
      }
    }, [v, o, g, n.window]),
    D.useEffect(() => {
      g && o && i.location.key === o.location.key && g.resolve();
    }, [g, b, i.location, o]),
    D.useEffect(() => {
      !u.isTransitioning &&
        S &&
        (c(S.state),
        h({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        k(void 0));
    }, [u.isTransitioning, S]),
    D.useEffect(() => {}, []);
  let L = D.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (O) => n.navigate(O),
        push: (O, B, $) =>
          n.navigate(O, {
            state: B,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
        replace: (O, B, $) =>
          n.navigate(O, {
            replace: !0,
            state: B,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
      }),
      [n]
    ),
    A = n.basename || "/",
    C = D.useMemo(
      () => ({ router: n, navigator: L, static: !1, basename: A }),
      [n, L, A]
    );
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      To.Provider,
      { value: C },
      D.createElement(
        Gd.Provider,
        { value: i },
        D.createElement(
          y3.Provider,
          { value: I.current },
          D.createElement(
            Xg.Provider,
            { value: u },
            D.createElement(
              c3,
              {
                basename: A,
                location: i.location,
                navigationType: i.historyAction,
                navigator: L,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? D.createElement(k3, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function k3(e) {
  let { routes: t, future: n, state: r } = e;
  return Qb(t, void 0, r, n);
}
const S3 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bt = D.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: a,
        replace: o,
        state: c,
        target: u,
        to: h,
        preventScrollReset: g,
        unstable_viewTransition: y,
      } = t,
      b = Qg(t, h3),
      { basename: N } = D.useContext(er),
      S,
      k = !1;
    if (typeof h == "string" && _3.test(h) && ((S = h), S3))
      try {
        let E = new URL(window.location.href),
          L = h.startsWith("//") ? new URL(E.protocol + h) : new URL(h),
          A = Rr(L.pathname, N);
        L.origin === E.origin && A != null
          ? (h = A + L.search + L.hash)
          : (k = !0);
      } catch {}
    let I = Kb(h, { relative: i }),
      w = I3(h, {
        replace: o,
        state: c,
        target: u,
        preventScrollReset: g,
        relative: i,
        unstable_viewTransition: y,
      });
    function v(E) {
      r && r(E), E.defaultPrevented || w(E);
    }
    return D.createElement(
      "a",
      ta({}, b, { href: S || I, onClick: k || a ? r : v, ref: n, target: u })
    );
  }),
  T3 = D.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: a = "",
        end: o = !1,
        style: c,
        to: u,
        unstable_viewTransition: h,
        children: g,
      } = t,
      y = Qg(t, p3),
      b = Il(u, { relative: y.relative }),
      N = Dr(),
      S = D.useContext(Gd),
      { navigator: k } = D.useContext(er),
      I = S != null && P3(b) && h === !0,
      w = k.encodeLocation ? k.encodeLocation(b).pathname : b.pathname,
      v = N.pathname,
      E =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    i ||
      ((v = v.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (w = w.toLowerCase()));
    const L = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
    let A = v === w || (!o && v.startsWith(w) && v.charAt(L) === "/"),
      C =
        E != null &&
        (E === w || (!o && E.startsWith(w) && E.charAt(w.length) === "/")),
      O = { isActive: A, isPending: C, isTransitioning: I },
      B = A ? r : void 0,
      $;
    typeof a == "function"
      ? ($ = a(O))
      : ($ = [
          a,
          A ? "active" : null,
          C ? "pending" : null,
          I ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let K = typeof c == "function" ? c(O) : c;
    return D.createElement(
      bt,
      ta({}, y, {
        "aria-current": B,
        className: $,
        ref: n,
        style: K,
        to: u,
        unstable_viewTransition: h,
      }),
      typeof g == "function" ? g(O) : g
    );
  });
var Du;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Du || (Du = {}));
var Op;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Op || (Op = {}));
function N3(e) {
  let t = D.useContext(To);
  return t || be(!1), t;
}
function I3(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: a,
      relative: o,
      unstable_viewTransition: c,
    } = t === void 0 ? {} : t,
    u = Nl(),
    h = Dr(),
    g = Il(e, { relative: o });
  return D.useCallback(
    (y) => {
      if (f3(y, n)) {
        y.preventDefault();
        let b = r !== void 0 ? r : oi(h) === oi(g);
        u(e, {
          replace: b,
          state: i,
          preventScrollReset: a,
          relative: o,
          unstable_viewTransition: c,
        });
      }
    },
    [h, u, g, r, i, n, e, a, o, c]
  );
}
function P3(e, t) {
  t === void 0 && (t = {});
  let n = D.useContext(Xg);
  n == null && be(!1);
  let { basename: r } = N3(Du.useViewTransitionState),
    i = Il(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let a = Rr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Rr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ru(i.pathname, o) != null || Ru(i.pathname, a) != null;
}
const A3 = "/assets/b-1-PRK7SCiX.jpg",
  R3 = () =>
    m.jsxs("section", {
      className: "",
      children: [
        m.jsx("div", {
          className: "",
          children: m.jsx("img", {
            className: "w-full md:h-[750px] ",
            src: A3,
          }),
        }),
        m.jsxs("div", {
          className:
            "container absolute top-[15%] md:top-[35%] left-48 md:left-[55%] text-white ",
          children: [
            m.jsx("p", {
              className: "font-semibold text-xl ",
              children: "Welcome To Tasty Salt",
            }),
            m.jsxs("h1", {
              className: " text-3xl md:text-6xl font-extrabold md:mt-3 md:mb-5",
              children: ["Find Your Favorite ", m.jsx("br", {}), " Tasty Food"],
            }),
            m.jsx("p", {
              className: "text-lg font-normal ",
              children:
                "Creative space for food where you will find healthy culinary inspiration.",
            }),
            m.jsx("button", {
              className:
                "text-white bg-orange-600 text-xl md:text-2xl py-2 md:py-3 px-3 md:px-7 rounded-lg mt-2 md:mt-6 font-medium hover:bg-orange-500",
              children: "Discover More",
            }),
          ],
        }),
      ],
    }),
  Xd = ({ subHeading: e, Heading: t }) =>
    m.jsxs("div", {
      children: [
        m.jsx("p", {
          className: "text-base text-orange-400 font-semibold mb-3",
          children: e,
        }),
        m.jsx("h2", {
          className: "text-3xl text-slate-900 font-bold",
          children: t,
        }),
      ],
    }),
  Mp = ({ category: e }) => {
    const { id: t, title: n, image: r, description: i } = e;
    return m.jsxs("section", {
      className: "text-center shadow-xl p-4 rounded-lg bg-slate-50",
      children: [
        m.jsx("div", {
          className: "p-4 ",
          children: m.jsx("img", {
            className: "w-full rounded-xl h-[200px]",
            src: r,
            alt: "",
          }),
        }),
        m.jsx("h3", {
          className: "text-2xl font-medium text-slate-800 my-6",
          children: n,
        }),
        m.jsx("p", {
          className: "text-base font-normal text-slate-600 mb-8",
          children: i,
        }),
      ],
    });
  },
  L3 = () => {
    const [e, t] = D.useState([]),
      [n, r] = D.useState(!1);
    let i;
    return (
      n || (i = e.slice(0, 3).map((a) => m.jsx(Mp, { category: a }, a.id))),
      n && (i = e.slice(0, 6).map((a) => m.jsx(Mp, { category: a }, a.id))),
      D.useEffect(() => {
        fetch("https://localhost:5000/categories")
          .then((a) => a.json())
          .then((a) => t(a))
          .catch((a) => console.log(a));
      }, []),
      m.jsxs("section", {
        className: "mt-28",
        children: [
          m.jsx("div", {
            className: "text-center",
            children: m.jsx(Xd, {
              subHeading: "-- All Category --",
              Heading: "Choose a Category",
            }),
          }),
          m.jsx("div", {
            className: "container grid grid-cols-1 md:grid-cols-3 gap-6 mt-16",
            children: i,
          }),
          m.jsx("div", {
            className: "text-center text-xl ",
            children: n
              ? m.jsx("button", {
                  onClick: () => {
                    r(!1);
                  },
                  className:
                    "bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 hover:bg-orange-700 ",
                  children: "See Less",
                })
              : m.jsx("button", {
                  onClick: () => {
                    r(!0);
                  },
                  className:
                    "bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 hover:bg-orange-700 ",
                  children: "See All",
                }),
          }),
          ";",
        ],
      })
    );
  };
var Jg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Dp = p.createContext && p.createContext(Jg),
  _r = function () {
    return (
      (_r =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      _r.apply(this, arguments)
    );
  },
  O3 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function Zg(e) {
  return (
    e &&
    e.map(function (t, n) {
      return p.createElement(t.tag, _r({ key: n }, t.attr), Zg(t.child));
    })
  );
}
function yn(e) {
  return function (t) {
    return p.createElement(M3, _r({ attr: _r({}, e.attr) }, t), Zg(e.child));
  };
}
function M3(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      a = e.title,
      o = O3(e, ["attr", "size", "title"]),
      c = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      p.createElement(
        "svg",
        _r(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: _r(_r({ color: e.color || n.color }, n.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        a && p.createElement("title", null, a),
        e.children
      )
    );
  };
  return Dp !== void 0
    ? p.createElement(Dp.Consumer, null, function (n) {
        return t(n);
      })
    : t(Jg);
}
function D3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z",
        },
      },
    ],
  })(e);
}
const j3 = (e) => (
    D.useEffect(() => {
      document.title = `${e} - Byte Cafe`;
    }, [e]),
    m.jsx("div", {})
  ),
  B3 = ({ chef: e }) => {
    const {
      _id: t,
      name: n,
      image_url: r,
      bio: i,
      experience: a,
      phone: o,
      email: c,
      recipes: u,
      best_recipe: h,
      recipes_list: g,
    } = e;
    return (
      j3("Chef's"),
      m.jsxs("section", {
        className: "bg-slate-900 rounded-xl p-5 shadow-2xl",
        children: [
          m.jsx("div", {
            className: " rounded-xl",
            children: m.jsx("img", { src: r, alt: "" }),
          }),
          m.jsxs("div", {
            className: "my-5",
            children: [
              m.jsx("h3", {
                className: "text-orange-500 text-2xl font-semibold my-5",
                children: n,
              }),
              m.jsxs("p", {
                className: " font-medium text-slate-300",
                children: [a, " Year of experience"],
              }),
              m.jsxs("span", {
                className: "font-medium text-slate-300",
                children: [u, " Recipes"],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex justify-between",
            children: [
              m.jsxs("p", {
                className:
                  "flex items-center gap-2 text-orange-500 text-2xl font-semibold ",
                children: [
                  m.jsx(D3, { className: " cursor-pointer" }),
                  Math.round(a / 2),
                ],
              }),
              m.jsx("button", {
                className:
                  "bg-orange-500 text-white font-semibold py-3 px-4 rounded-xl text-lg",
                children: m.jsx(bt, {
                  to: `/chef/${t}`,
                  children: " View Recipes",
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  ev = () => {
    const [e, t] = D.useState([]);
    return (
      D.useEffect(() => {
        fetch("https://localhost:5000/chef")
          .then((n) => n.json())
          .then((n) => t(n));
      }, []),
      m.jsxs("section", {
        className: "my-12 ",
        children: [
          m.jsx("div", {
            className: "text-center",
            children: m.jsx(Xd, {
              subHeading: "Team of Restaurant",
              Heading: "Our Expertise Chef",
            }),
          }),
          m.jsx("div", {
            className: "container grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",
            children: e.map((n) => m.jsx(B3, { chef: n }, n._id)),
          }),
        ],
      })
    );
  },
  jp = ({ item: e }) => {
    const { image: t, name: n, recipe: r, price: i } = e;
    return m.jsxs("div", {
      className: "flex mt-12",
      children: [
        m.jsx("img", {
          className: "w-28 rounded-tr-3xl rounded-bl-3xl",
          src: t,
          alt: "",
        }),
        m.jsxs("div", {
          className: "ml-5 flex gap-12",
          children: [
            m.jsxs("div", {
              className: "",
              children: [
                m.jsxs("h3", {
                  className: "text-xl font-medium text-slate-900 mr-10",
                  children: [n, " -----"],
                }),
                m.jsx("p", {
                  className: "text-base text-slate-800",
                  children: r,
                }),
              ],
            }),
            m.jsxs("span", {
              className: "text-orange-600",
              children: [" $", i],
            }),
          ],
        }),
      ],
    });
  },
  $3 = () => {
    const [e, t] = D.useState([]),
      [n, r] = D.useState(!1);
    let i;
    return (
      n || (i = e.slice(0, 8).map((a) => m.jsx(jp, { item: a }, a._id))),
      n && (i = e.slice(0, 6).map((a) => m.jsx(jp, { item: a }, a._id))),
      D.useEffect(() => {
        fetch("https://localhost:5000/menu")
          .then((a) => a.json())
          .then((a) => t(a))
          .catch((a) => console.log(a));
      }, []),
      m.jsxs("section", {
        className: "my-16",
        children: [
          m.jsx("div", {
            className: "text-center",
            children: m.jsx(Xd, {
              subHeading: "Sweet Food",
              Heading: "Byte Cafe Menu",
            }),
          }),
          m.jsx("div", {
            className: "container grid grid-cols-1 md:grid-cols-2 gap-x-16",
            children: i,
          }),
          m.jsx("div", {
            className: "text-center text-xl ",
            children: n
              ? m.jsx("button", {
                  onClick: () => {
                    r(!1);
                  },
                  className:
                    "bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-12 hover:bg-orange-700 ",
                  children: "See Less",
                })
              : m.jsx("button", {
                  onClick: () => {
                    r(!0);
                  },
                  className:
                    "bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-12 hover:bg-orange-700 ",
                  children: "See All",
                }),
          }),
        ],
      })
    );
  },
  z3 = () =>
    m.jsxs("div", {
      children: [m.jsx(R3, {}), m.jsx(L3, {}), m.jsx(ev, {}), m.jsx($3, {})],
    });
function U3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        },
      },
    ],
  })(e);
}
function F3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
      },
    ],
  })(e);
}
function V3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
      },
    ],
  })(e);
}
function H3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
      },
    ],
  })(e);
}
function W3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
function K3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
      },
    ],
  })(e);
}
function Y3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
      },
    ],
  })(e);
}
function G3(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z",
        },
      },
    ],
  })(e);
}
const ju = "/assets/logo-d0JRMw9X.png",
  cn = ({ to: e, children: t }) =>
    m.jsx(T3, {
      to: e,
      className: ({ isActive: n }) =>
        n
          ? " text-orange-500 font-bold  text-secondary text-xl"
          : "font-medium",
      children: t,
    });
var Bp = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tv = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  q3 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const a = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (a & 63));
      } else if (i > 239 && i < 365) {
        const a = e[n++],
          o = e[n++],
          c = e[n++],
          u =
            (((i & 7) << 18) | ((a & 63) << 12) | ((o & 63) << 6) | (c & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (u >> 10))),
          (t[r++] = String.fromCharCode(56320 + (u & 1023)));
      } else {
        const a = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((a & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  nv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const a = e[i],
          o = i + 1 < e.length,
          c = o ? e[i + 1] : 0,
          u = i + 2 < e.length,
          h = u ? e[i + 2] : 0,
          g = a >> 2,
          y = ((a & 3) << 4) | (c >> 4);
        let b = ((c & 15) << 2) | (h >> 6),
          N = h & 63;
        u || ((N = 64), o || (b = 64)), r.push(n[g], n[y], n[b], n[N]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(tv(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : q3(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const a = n[e.charAt(i++)],
          c = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const h = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const y = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, a == null || c == null || h == null || y == null))
          throw new Q3();
        const b = (a << 2) | (c >> 4);
        if ((r.push(b), h !== 64)) {
          const N = ((c << 4) & 240) | (h >> 2);
          if ((r.push(N), y !== 64)) {
            const S = ((h << 6) & 192) | y;
            r.push(S);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Q3 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const X3 = function (e) {
    const t = tv(e);
    return nv.encodeByteArray(t, !0);
  },
  rv = function (e) {
    return X3(e).replace(/\./g, "");
  },
  iv = function (e) {
    try {
      return nv.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J3() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Z3 = () => J3().__FIREBASE_DEFAULTS__,
  e4 = () => {
    if (typeof process > "u" || typeof Bp > "u") return;
    const e = Bp.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  t4 = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && iv(e[1]);
    return t && JSON.parse(t);
  },
  Jd = () => {
    try {
      return Z3() || e4() || t4();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  n4 = (e) => {
    var t, n;
    return (n =
      (t = Jd()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  av = () => {
    var e;
    return (e = Jd()) === null || e === void 0 ? void 0 : e.config;
  },
  ov = (e) => {
    var t;
    return (t = Jd()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r4 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function i4() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())
  );
}
function a4() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function o4() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function s4() {
  const e = Nt();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function l4() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function c4() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var a;
          t(
            ((a = i.error) === null || a === void 0 ? void 0 : a.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const u4 = "FirebaseError";
class jr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = u4),
      Object.setPrototypeOf(this, jr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, No.prototype.create);
  }
}
class No {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      a = this.errors[t],
      o = a ? d4(a, r) : "Error",
      c = `${this.serviceName}: ${o} (${i}).`;
    return new jr(i, c, r);
  }
}
function d4(e, t) {
  return e.replace(f4, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const f4 = /\{\$([^}]+)}/g;
function h4(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Js(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const a = e[i],
      o = t[i];
    if ($p(a) && $p(o)) {
      if (!Js(a, o)) return !1;
    } else if (a !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function $p(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Io(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Da(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, a] = r.split("=");
          t[decodeURIComponent(i)] = decodeURIComponent(a);
        }
      }),
    t
  );
}
function ja(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function p4(e, t) {
  const n = new m4(e, t);
  return n.subscribe.bind(n);
}
class m4 {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    g4(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = Nc),
      i.error === void 0 && (i.error = Nc),
      i.complete === void 0 && (i.complete = Nc);
    const a = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      a
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function g4(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Nc() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function An(e) {
  return e && e._delegate ? e._delegate : e;
}
class na {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v4 {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new r4();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (a) {
        if (i) return null;
        throw a;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (w4(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Wr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const a = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(a);
        } catch {}
      }
    }
  }
  clearInstance(t = Wr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Wr) {
    return this.instances.has(t);
  }
  getOptions(t = Wr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [a, o] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(a);
      r === c && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      a =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    a.add(t), this.onInitCallbacks.set(i, a);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        a.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: y4(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Wr) {
    return this.component ? (this.component.multipleInstances ? t : Wr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function y4(e) {
  return e === Wr ? void 0 : e;
}
function w4(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b4 {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new v4(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var je;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(je || (je = {}));
const x4 = {
    debug: je.DEBUG,
    verbose: je.VERBOSE,
    info: je.INFO,
    warn: je.WARN,
    error: je.ERROR,
    silent: je.SILENT,
  },
  E4 = je.INFO,
  C4 = {
    [je.DEBUG]: "log",
    [je.VERBOSE]: "log",
    [je.INFO]: "info",
    [je.WARN]: "warn",
    [je.ERROR]: "error",
  },
  k4 = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = C4[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class sv {
  constructor(t) {
    (this.name = t),
      (this._logLevel = E4),
      (this._logHandler = k4),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in je))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? x4[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, je.DEBUG, ...t),
      this._logHandler(this, je.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, je.VERBOSE, ...t),
      this._logHandler(this, je.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, je.INFO, ...t),
      this._logHandler(this, je.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, je.WARN, ...t),
      this._logHandler(this, je.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, je.ERROR, ...t),
      this._logHandler(this, je.ERROR, ...t);
  }
}
const S4 = (e, t) => t.some((n) => e instanceof n);
let zp, Up;
function _4() {
  return (
    zp ||
    (zp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function T4() {
  return (
    Up ||
    (Up = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const lv = new WeakMap(),
  Bu = new WeakMap(),
  cv = new WeakMap(),
  Ic = new WeakMap(),
  Zd = new WeakMap();
function N4(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", a), e.removeEventListener("error", o);
      },
      a = () => {
        n(Tr(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", a), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && lv.set(n, e);
      })
      .catch(() => {}),
    Zd.set(t, e),
    t
  );
}
function I4(e) {
  if (Bu.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", a),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      a = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", a),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  Bu.set(e, t);
}
let $u = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Bu.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || cv.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Tr(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function P4(e) {
  $u = e($u);
}
function A4(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Pc(this), t, ...n);
        return cv.set(r, t.sort ? t.sort() : [t]), Tr(r);
      }
    : T4().includes(e)
    ? function (...t) {
        return e.apply(Pc(this), t), Tr(lv.get(this));
      }
    : function (...t) {
        return Tr(e.apply(Pc(this), t));
      };
}
function R4(e) {
  return typeof e == "function"
    ? A4(e)
    : (e instanceof IDBTransaction && I4(e),
      S4(e, _4()) ? new Proxy(e, $u) : e);
}
function Tr(e) {
  if (e instanceof IDBRequest) return N4(e);
  if (Ic.has(e)) return Ic.get(e);
  const t = R4(e);
  return t !== e && (Ic.set(e, t), Zd.set(t, e)), t;
}
const Pc = (e) => Zd.get(e);
function L4(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
  const o = indexedDB.open(e, t),
    c = Tr(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(Tr(o.result), u.oldVersion, u.newVersion, Tr(o.transaction), u);
      }),
    n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)),
    c
      .then((u) => {
        a && u.addEventListener("close", () => a()),
          i &&
            u.addEventListener("versionchange", (h) =>
              i(h.oldVersion, h.newVersion, h)
            );
      })
      .catch(() => {}),
    c
  );
}
const O4 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  M4 = ["put", "add", "delete", "clear"],
  Ac = new Map();
function Fp(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Ac.get(t)) return Ac.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = M4.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || O4.includes(n))
  )
    return;
  const a = async function (o, ...c) {
    const u = this.transaction(o, i ? "readwrite" : "readonly");
    let h = u.store;
    return (
      r && (h = h.index(c.shift())),
      (await Promise.all([h[n](...c), i && u.done]))[0]
    );
  };
  return Ac.set(t, a), a;
}
P4((e) => ({
  ...e,
  get: (t, n, r) => Fp(t, n) || e.get(t, n, r),
  has: (t, n) => !!Fp(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D4 {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (j4(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function j4(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const zu = "@firebase/app",
  Vp = "0.9.25";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const si = new sv("@firebase/app"),
  B4 = "@firebase/app-compat",
  $4 = "@firebase/analytics-compat",
  z4 = "@firebase/analytics",
  U4 = "@firebase/app-check-compat",
  F4 = "@firebase/app-check",
  V4 = "@firebase/auth",
  H4 = "@firebase/auth-compat",
  W4 = "@firebase/database",
  K4 = "@firebase/database-compat",
  Y4 = "@firebase/functions",
  G4 = "@firebase/functions-compat",
  q4 = "@firebase/installations",
  Q4 = "@firebase/installations-compat",
  X4 = "@firebase/messaging",
  J4 = "@firebase/messaging-compat",
  Z4 = "@firebase/performance",
  ex = "@firebase/performance-compat",
  tx = "@firebase/remote-config",
  nx = "@firebase/remote-config-compat",
  rx = "@firebase/storage",
  ix = "@firebase/storage-compat",
  ax = "@firebase/firestore",
  ox = "@firebase/firestore-compat",
  sx = "firebase",
  lx = "10.7.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uu = "[DEFAULT]",
  cx = {
    [zu]: "fire-core",
    [B4]: "fire-core-compat",
    [z4]: "fire-analytics",
    [$4]: "fire-analytics-compat",
    [F4]: "fire-app-check",
    [U4]: "fire-app-check-compat",
    [V4]: "fire-auth",
    [H4]: "fire-auth-compat",
    [W4]: "fire-rtdb",
    [K4]: "fire-rtdb-compat",
    [Y4]: "fire-fn",
    [G4]: "fire-fn-compat",
    [q4]: "fire-iid",
    [Q4]: "fire-iid-compat",
    [X4]: "fire-fcm",
    [J4]: "fire-fcm-compat",
    [Z4]: "fire-perf",
    [ex]: "fire-perf-compat",
    [tx]: "fire-rc",
    [nx]: "fire-rc-compat",
    [rx]: "fire-gcs",
    [ix]: "fire-gcs-compat",
    [ax]: "fire-fst",
    [ox]: "fire-fst-compat",
    "fire-js": "fire-js",
    [sx]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zs = new Map(),
  Fu = new Map();
function ux(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    si.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function vo(e) {
  const t = e.name;
  if (Fu.has(t))
    return (
      si.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Fu.set(t, e);
  for (const n of Zs.values()) ux(n, e);
  return !0;
}
function uv(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dx = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Nr = new No("app", "Firebase", dx);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fx {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new na("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Nr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Po = lx;
function dv(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Uu, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Nr.create("bad-app-name", { appName: String(i) });
  if ((n || (n = av()), !n)) throw Nr.create("no-options");
  const a = Zs.get(i);
  if (a) {
    if (Js(n, a.options) && Js(r, a.config)) return a;
    throw Nr.create("duplicate-app", { appName: i });
  }
  const o = new b4(i);
  for (const u of Fu.values()) o.addComponent(u);
  const c = new fx(n, r, o);
  return Zs.set(i, c), c;
}
function hx(e = Uu) {
  const t = Zs.get(e);
  if (!t && e === Uu && av()) return dv();
  if (!t) throw Nr.create("no-app", { appName: e });
  return t;
}
function Hi(e, t, n) {
  var r;
  let i = (r = cx[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const a = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (a || o) {
    const c = [`Unable to register library "${i}" with version "${t}":`];
    a &&
      c.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      a && o && c.push("and"),
      o &&
        c.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      si.warn(c.join(" "));
    return;
  }
  vo(new na(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const px = "firebase-heartbeat-database",
  mx = 1,
  yo = "firebase-heartbeat-store";
let Rc = null;
function fv() {
  return (
    Rc ||
      (Rc = L4(px, mx, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              e.createObjectStore(yo);
          }
        },
      }).catch((e) => {
        throw Nr.create("idb-open", { originalErrorMessage: e.message });
      })),
    Rc
  );
}
async function gx(e) {
  try {
    return await (await fv()).transaction(yo).objectStore(yo).get(hv(e));
  } catch (t) {
    if (t instanceof jr) si.warn(t.message);
    else {
      const n = Nr.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      si.warn(n.message);
    }
  }
}
async function Hp(e, t) {
  try {
    const r = (await fv()).transaction(yo, "readwrite");
    await r.objectStore(yo).put(t, hv(e)), await r.done;
  } catch (n) {
    if (n instanceof jr) si.warn(n.message);
    else {
      const r = Nr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      si.warn(r.message);
    }
  }
}
function hv(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vx = 1024,
  yx = 30 * 24 * 60 * 60 * 1e3;
class wx {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new xx(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      a = Wp();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === a ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === a)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: a, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const c = new Date(o.date).valueOf();
            return Date.now() - c <= yx;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = Wp(),
      { heartbeatsToSend: r, unsentEntries: i } = bx(
        this._heartbeatsCache.heartbeats
      ),
      a = rv(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      a
    );
  }
}
function Wp() {
  return new Date().toISOString().substring(0, 10);
}
function bx(e, t = vx) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const a = n.find((o) => o.agent === i.agent);
    if (a) {
      if ((a.dates.push(i.date), Kp(n) > t)) {
        a.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Kp(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class xx {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return l4()
      ? c4()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await gx(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Hp(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Hp(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Kp(e) {
  return rv(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ex(e) {
  vo(new na("platform-logger", (t) => new D4(t), "PRIVATE")),
    vo(new na("heartbeat", (t) => new wx(t), "PRIVATE")),
    Hi(zu, Vp, e),
    Hi(zu, Vp, "esm2017"),
    Hi("fire-js", "");
}
Ex("");
var Cx = "firebase",
  kx = "10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Hi(Cx, kx, "app");
const Sx = {
    apiKey: "AIzaSyB55KUpf5eWv0rS18guRHN4qfTfwA_x_YI",
    authDomain: "byte-cafe-9e40f.firebaseapp.com",
    projectId: "byte-cafe-9e40f",
    storageBucket: "byte-cafe-9e40f.appspot.com",
    messagingSenderId: "1096292248437",
    appId: "1:1096292248437:web:bb1769b5762c264a01413c",
  },
  _x = dv(Sx);
function ef(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function pv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const Tx = pv,
  mv = new No("auth", "Firebase", pv());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const el = new sv("@firebase/auth");
function Nx(e, ...t) {
  el.logLevel <= je.WARN && el.warn(`Auth (${Po}): ${e}`, ...t);
}
function Cs(e, ...t) {
  el.logLevel <= je.ERROR && el.error(`Auth (${Po}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function an(e, ...t) {
  throw tf(e, ...t);
}
function In(e, ...t) {
  return tf(e, ...t);
}
function gv(e, t, n) {
  const r = Object.assign(Object.assign({}, Tx()), { [t]: n });
  return new No("auth", "Firebase", r).create(t, { appName: e.name });
}
function Ix(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && an(e, "argument-error"),
      gv(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function tf(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return mv.create(e, ...t);
}
function de(e, t, ...n) {
  if (!e) throw tf(t, ...n);
}
function Fn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Cs(t), new Error(t));
}
function Xn(e, t) {
  e || Fn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vu() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function Px() {
  return Yp() === "http:" || Yp() === "https:";
}
function Yp() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ax() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (Px() || a4() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function Rx() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ao {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      Xn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = i4() || o4());
  }
  get() {
    return Ax()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nf(e, t) {
  Xn(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vv {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Fn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Fn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Fn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lx = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ox = new Ao(3e4, 6e4);
function Br(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function nr(e, t, n, r, i = {}) {
  return yv(e, i, async () => {
    let a = {},
      o = {};
    r && (t === "GET" ? (o = r) : (a = { body: JSON.stringify(r) }));
    const c = Io(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      u = await e._getAdditionalHeaders();
    return (
      (u["Content-Type"] = "application/json"),
      e.languageCode && (u["X-Firebase-Locale"] = e.languageCode),
      vv.fetch()(
        wv(e, e.config.apiHost, n, c),
        Object.assign(
          { method: t, headers: u, referrerPolicy: "no-referrer" },
          a
        )
      )
    );
  });
}
async function yv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, Lx), t);
  try {
    const i = new Dx(e),
      a = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await a.json();
    if ("needConfirmation" in o)
      throw ss(e, "account-exists-with-different-credential", o);
    if (a.ok && !("errorMessage" in o)) return o;
    {
      const c = a.ok ? o.errorMessage : o.error.message,
        [u, h] = c.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ss(e, "credential-already-in-use", o);
      if (u === "EMAIL_EXISTS") throw ss(e, "email-already-in-use", o);
      if (u === "USER_DISABLED") throw ss(e, "user-disabled", o);
      const g = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (h) throw gv(e, g, h);
      an(e, g);
    }
  } catch (i) {
    if (i instanceof jr) throw i;
    an(e, "network-request-failed", { message: String(i) });
  }
}
async function Ro(e, t, n, r, i = {}) {
  const a = await nr(e, t, n, r, i);
  return (
    "mfaPendingCredential" in a &&
      an(e, "multi-factor-auth-required", { _serverResponse: a }),
    a
  );
}
function wv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? nf(e.config, i) : `${e.config.apiScheme}://${i}`;
}
function Mx(e) {
  switch (e) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class Dx {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(In(this.auth, "network-request-failed")),
          Ox.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ss(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = In(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
function Gp(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class jx {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return Mx(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === "ENFORCE" ||
      this.getProviderEnforcementState(t) === "AUDIT"
    );
  }
}
async function Bx(e, t) {
  return nr(e, "GET", "/v2/recaptchaConfig", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $x(e, t) {
  return nr(e, "POST", "/v1/accounts:delete", t);
}
async function zx(e, t) {
  return nr(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qa(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function Ux(e, t = !1) {
  const n = An(e),
    r = await n.getIdToken(t),
    i = rf(r);
  de(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const a = typeof i.firebase == "object" ? i.firebase : void 0,
    o = a == null ? void 0 : a.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: qa(Lc(i.auth_time)),
    issuedAtTime: qa(Lc(i.iat)),
    expirationTime: qa(Lc(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (a == null ? void 0 : a.sign_in_second_factor) || null,
  };
}
function Lc(e) {
  return Number(e) * 1e3;
}
function rf(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return Cs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = iv(n);
    return i
      ? JSON.parse(i)
      : (Cs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Cs(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function Fx(e) {
  const t = rf(e);
  return (
    de(t, "internal-error"),
    de(typeof t.exp < "u", "internal-error"),
    de(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ra(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof jr &&
        Vx(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function Vx({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hx {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bv {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = qa(this.lastLoginAt)),
      (this.creationTime = qa(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tl(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await ra(e, zx(n, { idToken: r }));
  de(i == null ? void 0 : i.users.length, n, "internal-error");
  const a = i.users[0];
  e._notifyReloadListener(a);
  const o =
      !((t = a.providerUserInfo) === null || t === void 0) && t.length
        ? Yx(a.providerUserInfo)
        : [],
    c = Kx(e.providerData, o),
    u = e.isAnonymous,
    h = !(e.email && a.passwordHash) && !(c != null && c.length),
    g = u ? h : !1,
    y = {
      uid: a.localId,
      displayName: a.displayName || null,
      photoURL: a.photoUrl || null,
      email: a.email || null,
      emailVerified: a.emailVerified || !1,
      phoneNumber: a.phoneNumber || null,
      tenantId: a.tenantId || null,
      providerData: c,
      metadata: new bv(a.createdAt, a.lastLoginAt),
      isAnonymous: g,
    };
  Object.assign(e, y);
}
async function Wx(e) {
  const t = An(e);
  await tl(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function Kx(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function Yx(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = ef(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Gx(e, t) {
  const n = await yv(e, {}, async () => {
    const r = Io({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: a } = e.config,
      o = wv(e, i, "/v1/token", `key=${a}`),
      c = await e._getAdditionalHeaders();
    return (
      (c["Content-Type"] = "application/x-www-form-urlencoded"),
      vv.fetch()(o, { method: "POST", headers: c, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function qx(e, t) {
  return nr(e, "POST", "/v2/accounts:revokeToken", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wo {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    de(t.idToken, "internal-error"),
      de(typeof t.idToken < "u", "internal-error"),
      de(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : Fx(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      de(!this.accessToken || this.refreshToken, t, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(t, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: a } = await Gx(t, n);
    this.updateTokensAndExpiration(r, i, Number(a));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: a } = n,
      o = new wo();
    return (
      r &&
        (de(typeof r == "string", "internal-error", { appName: t }),
        (o.refreshToken = r)),
      i &&
        (de(typeof i == "string", "internal-error", { appName: t }),
        (o.accessToken = i)),
      a &&
        (de(typeof a == "number", "internal-error", { appName: t }),
        (o.expirationTime = a)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new wo(), this.toJSON());
  }
  _performRefresh() {
    return Fn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cr(e, t) {
  de(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Zr {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      a = ef(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new Hx(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = a.displayName || null),
      (this.email = a.email || null),
      (this.emailVerified = a.emailVerified || !1),
      (this.phoneNumber = a.phoneNumber || null),
      (this.photoURL = a.photoURL || null),
      (this.isAnonymous = a.isAnonymous || !1),
      (this.tenantId = a.tenantId || null),
      (this.providerData = a.providerData ? [...a.providerData] : []),
      (this.metadata = new bv(a.createdAt || void 0, a.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await ra(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      de(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return Ux(this, t);
  }
  reload() {
    return Wx(this);
  }
  _assign(t) {
    this !== t &&
      (de(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Zr(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    de(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await tl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await ra(this, $x(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, a, o, c, u, h, g;
    const y = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      b = (i = n.email) !== null && i !== void 0 ? i : void 0,
      N = (a = n.phoneNumber) !== null && a !== void 0 ? a : void 0,
      S = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      k = (c = n.tenantId) !== null && c !== void 0 ? c : void 0,
      I = (u = n._redirectEventId) !== null && u !== void 0 ? u : void 0,
      w = (h = n.createdAt) !== null && h !== void 0 ? h : void 0,
      v = (g = n.lastLoginAt) !== null && g !== void 0 ? g : void 0,
      {
        uid: E,
        emailVerified: L,
        isAnonymous: A,
        providerData: C,
        stsTokenManager: O,
      } = n;
    de(E && O, t, "internal-error");
    const B = wo.fromJSON(this.name, O);
    de(typeof E == "string", t, "internal-error"),
      cr(y, t.name),
      cr(b, t.name),
      de(typeof L == "boolean", t, "internal-error"),
      de(typeof A == "boolean", t, "internal-error"),
      cr(N, t.name),
      cr(S, t.name),
      cr(k, t.name),
      cr(I, t.name),
      cr(w, t.name),
      cr(v, t.name);
    const $ = new Zr({
      uid: E,
      auth: t,
      email: b,
      emailVerified: L,
      displayName: y,
      isAnonymous: A,
      photoURL: S,
      phoneNumber: N,
      tenantId: k,
      stsTokenManager: B,
      createdAt: w,
      lastLoginAt: v,
    });
    return (
      C &&
        Array.isArray(C) &&
        ($.providerData = C.map((K) => Object.assign({}, K))),
      I && ($._redirectEventId = I),
      $
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new wo();
    i.updateFromServerResponse(n);
    const a = new Zr({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await tl(a), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qp = new Map();
function Vn(e) {
  Xn(e instanceof Function, "Expected a class definition");
  let t = qp.get(e);
  return t
    ? (Xn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), qp.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
xv.type = "NONE";
const Qp = xv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ks(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Wi {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: a } = this.auth;
    (this.fullUserKey = ks(this.userKey, i.apiKey, a)),
      (this.fullPersistenceKey = ks("persistence", i.apiKey, a)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Zr._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Wi(Vn(Qp), t, r);
    const i = (
      await Promise.all(
        n.map(async (h) => {
          if (await h._isAvailable()) return h;
        })
      )
    ).filter((h) => h);
    let a = i[0] || Vn(Qp);
    const o = ks(r, t.config.apiKey, t.name);
    let c = null;
    for (const h of n)
      try {
        const g = await h._get(o);
        if (g) {
          const y = Zr._fromJSON(t, g);
          h !== a && (c = y), (a = h);
          break;
        }
      } catch {}
    const u = i.filter((h) => h._shouldAllowMigration);
    return !a._shouldAllowMigration || !u.length
      ? new Wi(a, t, r)
      : ((a = u[0]),
        c && (await a._set(o, c.toJSON())),
        await Promise.all(
          n.map(async (h) => {
            if (h !== a)
              try {
                await h._remove(o);
              } catch {}
          })
        ),
        new Wi(a, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xp(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (kv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (Ev(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (_v(t)) return "Blackberry";
  if (Tv(t)) return "Webos";
  if (af(t)) return "Safari";
  if ((t.includes("chrome/") || Cv(t)) && !t.includes("edge/")) return "Chrome";
  if (Sv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Ev(e = Nt()) {
  return /firefox\//i.test(e);
}
function af(e = Nt()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function Cv(e = Nt()) {
  return /crios\//i.test(e);
}
function kv(e = Nt()) {
  return /iemobile/i.test(e);
}
function Sv(e = Nt()) {
  return /android/i.test(e);
}
function _v(e = Nt()) {
  return /blackberry/i.test(e);
}
function Tv(e = Nt()) {
  return /webos/i.test(e);
}
function Pl(e = Nt()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function Qx(e = Nt()) {
  var t;
  return (
    Pl(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function Xx() {
  return s4() && document.documentMode === 10;
}
function Nv(e = Nt()) {
  return Pl(e) || Sv(e) || Tv(e) || _v(e) || /windows phone/i.test(e) || kv(e);
}
function Jx() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Iv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Xp(Nt());
      break;
    case "Worker":
      n = `${Xp(Nt())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Po}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zx {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (a) =>
      new Promise((o, c) => {
        try {
          const u = t(a);
          o(u);
        } catch (u) {
          c(u);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eE(e, t = {}) {
  return nr(e, "GET", "/v2/passwordPolicy", Br(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tE = 6;
class nE {
  constructor(t) {
    var n, r, i, a;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : tE),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (a = t.forceUpgradeOnSignin) !== null && a !== void 0 ? a : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, a, o, c;
    const u = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, u),
      this.validatePasswordCharacterOptions(t, u),
      u.isValid &&
        (u.isValid =
          (n = u.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      u.isValid &&
        (u.isValid =
          (r = u.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      u.isValid &&
        (u.isValid =
          (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      u.isValid &&
        (u.isValid =
          (a = u.containsUppercaseLetter) !== null && a !== void 0 ? a : !0),
      u.isValid &&
        (u.isValid =
          (o = u.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      u.isValid &&
        (u.isValid =
          (c = u.containsNonAlphanumericCharacter) !== null && c !== void 0
            ? c
            : !0),
      u
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, a) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rE {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Jp(this)),
      (this.idTokenSubscription = new Jp(this)),
      (this.beforeStateQueue = new Zx(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = mv),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Vn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Wi.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      a = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        c = i == null ? void 0 : i._redirectEventId,
        u = await this.tryRedirectSignIn(t);
      (!o || o === c) && u != null && u.user && ((i = u.user), (a = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (a)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      de(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await tl(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = Rx();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? An(t) : null;
    return (
      n &&
        de(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && de(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(Vn(t));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await eE(this),
      n = new nE(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new No("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await qx(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Vn(t)) || this._popupRedirectResolver;
      de(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Wi.create(
          this,
          [Vn(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const a = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const c = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (de(c, this, "internal-error"),
      c.then(() => {
        o || a(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const u = t.addObserver(n, r, i);
      return () => {
        (o = !0), u();
      };
    } else {
      const u = t.addObserver(n);
      return () => {
        (o = !0), u();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      de(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Iv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        Nx(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function $r(e) {
  return An(e);
}
class Jp {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = p4((n) => (this.observer = n)));
  }
  get next() {
    return (
      de(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iE() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
function Pv(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", e),
      (r.onload = t),
      (r.onerror = (i) => {
        const a = In("internal-error");
        (a.customData = i), n(a);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      iE().appendChild(r);
  });
}
function aE(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const oE = "https://www.google.com/recaptcha/enterprise.js?render=",
  sE = "recaptcha-enterprise",
  lE = "NO_RECAPTCHA";
class cE {
  constructor(t) {
    (this.type = sE), (this.auth = $r(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(a) {
      if (!n) {
        if (a.tenantId == null && a._agentRecaptchaConfig != null)
          return a._agentRecaptchaConfig.siteKey;
        if (
          a.tenantId != null &&
          a._tenantRecaptchaConfigs[a.tenantId] !== void 0
        )
          return a._tenantRecaptchaConfigs[a.tenantId].siteKey;
      }
      return new Promise(async (o, c) => {
        Bx(a, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((u) => {
            if (u.recaptchaKey === void 0)
              c(new Error("recaptcha Enterprise site key undefined"));
            else {
              const h = new jx(u);
              return (
                a.tenantId == null
                  ? (a._agentRecaptchaConfig = h)
                  : (a._tenantRecaptchaConfigs[a.tenantId] = h),
                o(h.siteKey)
              );
            }
          })
          .catch((u) => {
            c(u);
          });
      });
    }
    function i(a, o, c) {
      const u = window.grecaptcha;
      Gp(u)
        ? u.enterprise.ready(() => {
            u.enterprise
              .execute(a, { action: t })
              .then((h) => {
                o(h);
              })
              .catch(() => {
                o(lE);
              });
          })
        : c(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((a, o) => {
      r(this.auth)
        .then((c) => {
          if (!n && Gp(window.grecaptcha)) i(c, a, o);
          else {
            if (typeof window > "u") {
              o(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            Pv(oE + c)
              .then(() => {
                i(c, a, o);
              })
              .catch((u) => {
                o(u);
              });
          }
        })
        .catch((c) => {
          o(c);
        });
    });
  }
}
async function Zp(e, t, n, r = !1) {
  const i = new cE(e);
  let a;
  try {
    a = await i.verify(n);
  } catch {
    a = await i.verify(n, !0);
  }
  const o = Object.assign({}, t);
  return (
    r
      ? Object.assign(o, { captchaResp: a })
      : Object.assign(o, { captchaResponse: a }),
    Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    o
  );
}
async function Hu(e, t, n, r) {
  var i;
  if (
    !((i = e._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const a = await Zp(e, t, n, n === "getOobCode");
    return r(e, a);
  } else
    return r(e, t).catch(async (a) => {
      if (a.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const o = await Zp(e, t, n, n === "getOobCode");
        return r(e, o);
      } else return Promise.reject(a);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uE(e, t) {
  const n = uv(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      a = n.getOptions();
    if (Js(a, t ?? {})) return i;
    an(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function dE(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Vn);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function fE(e, t, n) {
  const r = $r(e);
  de(r._canInitEmulator, r, "emulator-config-failed"),
    de(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    a = Av(t),
    { host: o, port: c } = hE(t),
    u = c === null ? "" : `:${c}`;
  (r.config.emulator = { url: `${a}//${o}${u}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: c,
      protocol: a.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || pE();
}
function Av(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function hE(e) {
  const t = Av(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const a = i[1];
    return { host: a, port: em(r.substr(a.length + 1)) };
  } else {
    const [a, o] = r.split(":");
    return { host: a, port: em(o) };
  }
}
function em(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function pE() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class of {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return Fn("not implemented");
  }
  _getIdTokenResponse(t) {
    return Fn("not implemented");
  }
  _linkToIdToken(t, n) {
    return Fn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Fn("not implemented");
  }
}
async function mE(e, t) {
  return nr(e, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function gE(e, t) {
  return Ro(e, "POST", "/v1/accounts:signInWithPassword", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function vE(e, t) {
  return Ro(e, "POST", "/v1/accounts:signInWithEmailLink", Br(e, t));
}
async function yE(e, t) {
  return Ro(e, "POST", "/v1/accounts:signInWithEmailLink", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bo extends of {
  constructor(t, n, r, i = null) {
    super("password", r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(t, n) {
    return new bo(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new bo(t, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Hu(t, n, "signInWithPassword", gE);
      case "emailLink":
        return vE(t, { email: this._email, oobCode: this._password });
      default:
        an(t, "internal-error");
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Hu(t, r, "signUpPassword", mE);
      case "emailLink":
        return yE(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        an(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ki(e, t) {
  return Ro(e, "POST", "/v1/accounts:signInWithIdp", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wE = "http://localhost";
class li extends of {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new li(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : an("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      a = ef(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new li(r, i);
    return (
      (o.idToken = a.idToken || void 0),
      (o.accessToken = a.accessToken || void 0),
      (o.secret = a.secret),
      (o.nonce = a.nonce),
      (o.pendingToken = a.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Ki(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Ki(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Ki(t, n);
  }
  buildRequest() {
    const t = { requestUri: wE, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Io(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bE(e) {
  switch (e) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function xE(e) {
  const t = Da(ja(e)).link,
    n = t ? Da(ja(t)).deep_link_id : null,
    r = Da(ja(e)).deep_link_id;
  return (r ? Da(ja(r)).link : null) || r || n || t || e;
}
class sf {
  constructor(t) {
    var n, r, i, a, o, c;
    const u = Da(ja(t)),
      h = (n = u.apiKey) !== null && n !== void 0 ? n : null,
      g = (r = u.oobCode) !== null && r !== void 0 ? r : null,
      y = bE((i = u.mode) !== null && i !== void 0 ? i : null);
    de(h && g && y, "argument-error"),
      (this.apiKey = h),
      (this.operation = y),
      (this.code = g),
      (this.continueUrl =
        (a = u.continueUrl) !== null && a !== void 0 ? a : null),
      (this.languageCode =
        (o = u.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (c = u.tenantId) !== null && c !== void 0 ? c : null);
  }
  static parseLink(t) {
    const n = xE(t);
    try {
      return new sf(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ua {
  constructor() {
    this.providerId = ua.PROVIDER_ID;
  }
  static credential(t, n) {
    return bo._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = sf.parseLink(n);
    return de(r, "argument-error"), bo._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
ua.PROVIDER_ID = "password";
ua.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
ua.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lf {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lo extends lf {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dn extends Lo {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return li._fromParams({
      providerId: Dn.PROVIDER_ID,
      signInMethod: Dn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Dn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Dn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Dn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Dn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Dn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jn extends Lo {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return li._fromParams({
      providerId: jn.PROVIDER_ID,
      signInMethod: jn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return jn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return jn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return jn.credential(n, r);
    } catch {
      return null;
    }
  }
}
jn.GOOGLE_SIGN_IN_METHOD = "google.com";
jn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bn extends Lo {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return li._fromParams({
      providerId: Bn.PROVIDER_ID,
      signInMethod: Bn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Bn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Bn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Bn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Bn.GITHUB_SIGN_IN_METHOD = "github.com";
Bn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $n extends Lo {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return li._fromParams({
      providerId: $n.PROVIDER_ID,
      signInMethod: $n.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return $n.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return $n.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return $n.credential(n, r);
    } catch {
      return null;
    }
  }
}
$n.TWITTER_SIGN_IN_METHOD = "twitter.com";
$n.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function EE(e, t) {
  return Ro(e, "POST", "/v1/accounts:signUp", Br(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ci {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const a = await Zr._fromIdTokenResponse(t, r, i),
      o = tm(r);
    return new ci({
      user: a,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = tm(r);
    return new ci({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function tm(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nl extends jr {
  constructor(t, n, r, i) {
    var a;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, nl.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (a = t.tenantId) !== null && a !== void 0 ? a : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new nl(t, n, r, i);
  }
}
function Rv(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((a) => {
    throw a.code === "auth/multi-factor-auth-required"
      ? nl._fromErrorAndOperation(e, a, t, r)
      : a;
  });
}
async function CE(e, t, n = !1) {
  const r = await ra(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return ci._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function kE(e, t, n = !1) {
  const { auth: r } = e,
    i = "reauthenticate";
  try {
    const a = await ra(e, Rv(r, i, t, e), n);
    de(a.idToken, r, "internal-error");
    const o = rf(a.idToken);
    de(o, r, "internal-error");
    const { sub: c } = o;
    return de(e.uid === c, r, "user-mismatch"), ci._forOperation(e, i, a);
  } catch (a) {
    throw (
      ((a == null ? void 0 : a.code) === "auth/user-not-found" &&
        an(r, "user-mismatch"),
      a)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Lv(e, t, n = !1) {
  const r = "signIn",
    i = await Rv(e, r, t),
    a = await ci._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(a.user)), a;
}
async function SE(e, t) {
  return Lv($r(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ov(e) {
  const t = $r(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function _E(e, t, n) {
  const r = $r(e),
    o = await Hu(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      EE
    ).catch((u) => {
      throw (u.code === "auth/password-does-not-meet-requirements" && Ov(e), u);
    }),
    c = await ci._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(c.user), c;
}
function TE(e, t, n) {
  return SE(An(e), ua.credential(t, n)).catch(async (r) => {
    throw (r.code === "auth/password-does-not-meet-requirements" && Ov(e), r);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function NE(e, t) {
  return nr(e, "POST", "/v1/accounts:update", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function IE(e, { displayName: t, photoURL: n }) {
  if (t === void 0 && n === void 0) return;
  const r = An(e),
    a = {
      idToken: await r.getIdToken(),
      displayName: t,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await ra(r, NE(r.auth, a));
  (r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
  const c = r.providerData.find(({ providerId: u }) => u === "password");
  c && ((c.displayName = r.displayName), (c.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o);
}
function PE(e, t, n, r) {
  return An(e).onIdTokenChanged(t, n, r);
}
function AE(e, t, n) {
  return An(e).beforeAuthStateChanged(t, n);
}
function RE(e, t, n, r) {
  return An(e).onAuthStateChanged(t, n, r);
}
function LE(e) {
  return An(e).signOut();
}
const rl = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(rl, "1"),
          this.storage.removeItem(rl),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OE() {
  const e = Nt();
  return af(e) || Pl(e);
}
const ME = 1e3,
  DE = 10;
class Dv extends Mv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = OE() && Jx()),
      (this.fallbackToPolling = Nv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, c, u) => {
        this.notifyListeners(o, u);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (t.newValue !== o)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      a = this.storage.getItem(r);
    Xx() && a !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, DE)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, ME));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Dv.type = "LOCAL";
const jE = Dv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jv extends Mv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
jv.type = "SESSION";
const Bv = jv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function BE(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Al {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new Al(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: a } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const c = Array.from(o).map(async (h) => h(n.origin, a)),
      u = await BE(c);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: u,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Al.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cf(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $E {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let a, o;
    return new Promise((c, u) => {
      const h = cf("", 20);
      i.port1.start();
      const g = setTimeout(() => {
        u(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(y) {
          const b = y;
          if (b.data.eventId === h)
            switch (b.data.status) {
              case "ack":
                clearTimeout(g),
                  (a = setTimeout(() => {
                    u(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(a), c(b.data.response);
                break;
              default:
                clearTimeout(g),
                  clearTimeout(a),
                  u(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: t, eventId: h, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pn() {
  return window;
}
function zE(e) {
  Pn().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $v() {
  return (
    typeof Pn().WorkerGlobalScope < "u" &&
    typeof Pn().importScripts == "function"
  );
}
async function UE() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function FE() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function VE() {
  return $v() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zv = "firebaseLocalStorageDb",
  HE = 1,
  il = "firebaseLocalStorage",
  Uv = "fbase_key";
class Oo {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Rl(e, t) {
  return e.transaction([il], t ? "readwrite" : "readonly").objectStore(il);
}
function WE() {
  const e = indexedDB.deleteDatabase(zv);
  return new Oo(e).toPromise();
}
function Wu() {
  const e = indexedDB.open(zv, HE);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(il, { keyPath: Uv });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(il)
          ? t(r)
          : (r.close(), await WE(), t(await Wu()));
      });
  });
}
async function nm(e, t, n) {
  const r = Rl(e, !0).put({ [Uv]: t, value: n });
  return new Oo(r).toPromise();
}
async function KE(e, t) {
  const n = Rl(e, !1).get(t),
    r = await new Oo(n).toPromise();
  return r === void 0 ? null : r.value;
}
function rm(e, t) {
  const n = Rl(e, !0).delete(t);
  return new Oo(n).toPromise();
}
const YE = 800,
  GE = 3;
class Fv {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Wu()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > GE) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return $v() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Al._getInstance(VE())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await UE()), !this.activeServiceWorker))
      return;
    this.sender = new $E(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        FE() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Wu();
      return await nm(t, rl, "1"), await rm(t, rl), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => nm(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => KE(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => rm(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const a = Rl(i, !1).getAll();
      return new Oo(a).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: a } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(a) &&
            (this.notifyListeners(i, a), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), YE));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Fv.type = "LOCAL";
const qE = Fv;
new Ao(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vv(e, t) {
  return t
    ? Vn(t)
    : (de(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uf extends of {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Ki(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Ki(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Ki(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function QE(e) {
  return Lv(e.auth, new uf(e), e.bypassAuthState);
}
function XE(e) {
  const { auth: t, user: n } = e;
  return de(n, t, "internal-error"), kE(n, new uf(e), e.bypassAuthState);
}
async function JE(e) {
  const { auth: t, user: n } = e;
  return de(n, t, "internal-error"), CE(n, new uf(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hv {
  constructor(t, n, r, i, a = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = a),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: a,
      error: o,
      type: c,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: a || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(c)(u));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return QE;
      case "linkViaPopup":
      case "linkViaRedirect":
        return JE;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return XE;
      default:
        an(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Xn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Xn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZE = new Ao(2e3, 1e4);
async function ls(e, t, n) {
  const r = $r(e);
  Ix(e, t, lf);
  const i = Vv(r, n);
  return new Qr(r, "signInViaPopup", t, i).executeNotNull();
}
class Qr extends Hv {
  constructor(t, n, r, i, a) {
    super(t, n, i, a),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Qr.currentPopupAction && Qr.currentPopupAction.cancel(),
      (Qr.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return de(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Xn(this.filter.length === 1, "Popup operations only handle one event");
    const t = cf();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(In(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(In(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Qr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(In(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, ZE.get());
    };
    t();
  }
}
Qr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const e6 = "pendingRedirect",
  Ss = new Map();
class t6 extends Hv {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Ss.get(this.auth._key());
    if (!t) {
      try {
        const r = (await n6(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Ss.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Ss.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function n6(e, t) {
  const n = a6(t),
    r = i6(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function r6(e, t) {
  Ss.set(e._key(), t);
}
function i6(e) {
  return Vn(e._redirectPersistence);
}
function a6(e) {
  return ks(e6, e.config.apiKey, e.name);
}
async function o6(e, t, n = !1) {
  const r = $r(e),
    i = Vv(r, t),
    o = await new t6(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s6 = 10 * 60 * 1e3;
class l6 {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !c6(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Wv(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(In(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= s6 &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(im(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(im(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function im(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Wv({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function c6(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Wv(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function u6(e, t = {}) {
  return nr(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const d6 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  f6 = /^https?/;
async function h6(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await u6(e);
  for (const n of t)
    try {
      if (p6(n)) return;
    } catch {}
  an(e, "unauthorized-domain");
}
function p6(e) {
  const t = Vu(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!f6.test(n)) return !1;
  if (d6.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const m6 = new Ao(3e4, 6e4);
function am() {
  const e = Pn().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function g6(e) {
  return new Promise((t, n) => {
    var r, i, a;
    function o() {
      am(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            am(), n(In(e, "network-request-failed"));
          },
          timeout: m6.get(),
        });
    }
    if (
      !(
        (i = (r = Pn().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((a = Pn().gapi) === null || a === void 0) && a.load) o();
    else {
      const c = aE("iframefcb");
      return (
        (Pn()[c] = () => {
          gapi.load ? o() : n(In(e, "network-request-failed"));
        }),
        Pv(`https://apis.google.com/js/api.js?onload=${c}`).catch((u) => n(u))
      );
    }
  }).catch((t) => {
    throw ((_s = null), t);
  });
}
let _s = null;
function v6(e) {
  return (_s = _s || g6(e)), _s;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y6 = new Ao(5e3, 15e3),
  w6 = "__/auth/iframe",
  b6 = "emulator/auth/iframe",
  x6 = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  E6 = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function C6(e) {
  const t = e.config;
  de(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? nf(t, b6) : `https://${e.config.authDomain}/${w6}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Po },
    i = E6.get(e.config.apiHost);
  i && (r.eid = i);
  const a = e._getFrameworks();
  return a.length && (r.fw = a.join(",")), `${n}?${Io(r).slice(1)}`;
}
async function k6(e) {
  const t = await v6(e),
    n = Pn().gapi;
  return (
    de(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: C6(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: x6,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, a) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = In(e, "network-request-failed"),
            c = Pn().setTimeout(() => {
              a(o);
            }, y6.get());
          function u() {
            Pn().clearTimeout(c), i(r);
          }
          r.ping(u).then(u, () => {
            a(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S6 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  _6 = 500,
  T6 = 600,
  N6 = "_blank",
  I6 = "http://localhost";
class om {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function P6(e, t, n, r = _6, i = T6) {
  const a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = "";
  const u = Object.assign(Object.assign({}, S6), {
      width: r.toString(),
      height: i.toString(),
      top: a,
      left: o,
    }),
    h = Nt().toLowerCase();
  n && (c = Cv(h) ? N6 : n), Ev(h) && ((t = t || I6), (u.scrollbars = "yes"));
  const g = Object.entries(u).reduce((b, [N, S]) => `${b}${N}=${S},`, "");
  if (Qx(h) && c !== "_self") return A6(t || "", c), new om(null);
  const y = window.open(t || "", c, g);
  de(y, e, "popup-blocked");
  try {
    y.focus();
  } catch {}
  return new om(y);
}
function A6(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const R6 = "__/auth/handler",
  L6 = "emulator/auth/handler",
  O6 = encodeURIComponent("fac");
async function sm(e, t, n, r, i, a) {
  de(e.config.authDomain, e, "auth-domain-config-required"),
    de(e.config.apiKey, e, "invalid-api-key");
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: Po,
    eventId: i,
  };
  if (t instanceof lf) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      h4(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [g, y] of Object.entries(a || {})) o[g] = y;
  }
  if (t instanceof Lo) {
    const g = t.getScopes().filter((y) => y !== "");
    g.length > 0 && (o.scopes = g.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const c = o;
  for (const g of Object.keys(c)) c[g] === void 0 && delete c[g];
  const u = await e._getAppCheckToken(),
    h = u ? `#${O6}=${encodeURIComponent(u)}` : "";
  return `${M6(e)}?${Io(c).slice(1)}${h}`;
}
function M6({ config: e }) {
  return e.emulator ? nf(e, L6) : `https://${e.authDomain}/${R6}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oc = "webStorageSupport";
class D6 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Bv),
      (this._completeRedirectFn = o6),
      (this._overrideRedirectResult = r6);
  }
  async _openPopup(t, n, r, i) {
    var a;
    Xn(
      (a = this.eventManagers[t._key()]) === null || a === void 0
        ? void 0
        : a.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await sm(t, n, r, Vu(), i);
    return P6(t, o, cf());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const a = await sm(t, n, r, Vu(), i);
    return zE(a), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: a } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Xn(a, "If manager is not set, promise should be"), a);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await k6(t),
      r = new l6(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          de(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      Oc,
      { type: Oc },
      (i) => {
        var a;
        const o =
          (a = i == null ? void 0 : i[0]) === null || a === void 0
            ? void 0
            : a[Oc];
        o !== void 0 && n(!!o), an(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = h6(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Nv() || af() || Pl();
  }
}
const j6 = D6;
var lm = "@firebase/auth",
  cm = "1.5.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B6 {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    de(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $6(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function z6(e) {
  vo(
    new na(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          a = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: c } = r.options;
        de(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const u = {
            apiKey: o,
            authDomain: c,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Iv(e),
          },
          h = new rE(r, i, a, u);
        return dE(h, n), h;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    vo(
      new na(
        "auth-internal",
        (t) => {
          const n = $r(t.getProvider("auth").getImmediate());
          return ((r) => new B6(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Hi(lm, cm, $6(e)),
    Hi(lm, cm, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const U6 = 5 * 60,
  F6 = ov("authIdTokenMaxAge") || U6;
let um = null;
const V6 = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > F6) return;
  const i = n == null ? void 0 : n.token;
  um !== i &&
    ((um = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function H6(e = hx()) {
  const t = uv(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = uE(e, { popupRedirectResolver: j6, persistence: [qE, jE, Bv] }),
    r = ov("authTokenSyncURL");
  if (r) {
    const a = V6(r);
    AE(n, a, () => a(n.currentUser)), PE(n, (o) => a(o));
  }
  const i = n4("auth");
  return i && fE(n, `http://${i}`), n;
}
z6("Browser");
const ur = H6(_x),
  da = D.createContext(),
  W6 = ({ children: e }) => {
    const [t, n] = D.useState({}),
      [r, i] = D.useState(!0),
      a = () => {
        const S = new jn();
        return i(!0), ls(ur, S);
      },
      o = () => {
        const S = new Bn();
        return i(!0), ls(ur, S);
      },
      c = () => {
        const S = new $n();
        return i(!0), ls(ur, S);
      },
      u = () => {
        const S = new Dn();
        return i(!0), ls(ur, S);
      },
      h = (S, k) => (i(!0), TE(ur, S, k)),
      g = (S, k) => (i(!0), _E(ur, S, k)),
      y = () => LE(ur);
    D.useEffect(() => {
      const S = RE(ur, (k) => {
        n(k), i(!1);
      });
      return () => {
        S();
      };
    }, []);
    const N = {
      user: t,
      loading: r,
      googleSignIn: a,
      githubSignIn: o,
      twitterSignIn: c,
      facebookSignIn: u,
      singIn: h,
      signUp: g,
      logOut: y,
      profileUpdate: (S, k, I) => IE(S, { displayName: k, photoURL: I }),
    };
    return m.jsx(da.Provider, { value: N, children: e });
  },
  Kv = () => {
    const { user: e, logOut: t } = D.useContext(da),
      [n, r] = D.useState(!1);
    return m.jsxs("div", {
      className: "ml-4 relative profile hidden md:block text-white ",
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
      children: [
        m.jsx(bt, {
          to: "/profile",
          className:
            "flex items-center text-gray-300 hover:text-primary transition-all duration-300 ease-in-out",
          children:
            e != null && e.photoURL
              ? m.jsx("img", {
                  className:
                    "h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]",
                  src: e == null ? void 0 : e.photoURL,
                  alt: "User avatar",
                })
              : m.jsx("img", {
                  className:
                    "h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]",
                  src: "https://i.pravatar.cc/300",
                  alt: "User avatar",
                }),
        }),
        m.jsxs("div", {
          className: `absolute right-0 mt-2 max-w-xs min-w-[200px] bg-slate-900 rounded-xl p-5 shadow-lg origin-top-right transition-all duration-300 ease-in-out ${
            n ? "top-full scale-100" : "top-12 scale-0"
          }`,
          children: [
            (e == null ? void 0 : e.displayName) &&
              m.jsxs("p", {
                to: "/",
                className:
                  "relative block w-full px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 z-10",
                children: [
                  e == null ? void 0 : e.displayName,
                  m.jsx(bt, {
                    to: "/edit",
                    className:
                      "absolute top-0 right-0 bg-secondary p-2 rounded-full z-40 m-1 hover:shadow-lg hover:shadow-secondary transition-all duration-300 ease-in-out",
                    children: m.jsx(G3, { className: "text-xs text-white" }),
                  }),
                ],
              }),
            e.email &&
              m.jsxs("p", {
                to: "/",
                className:
                  "block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100",
                children: ["Email: ", m.jsx("br", {}), " ", e.email],
              }),
            m.jsx("button", {
              className: "w-full font-semibold text-orange-700  mt-3  text-xl",
              onClick: () => t(),
              children: "LogOut",
            }),
          ],
        }),
      ],
    });
  },
  K6 = () => {
    const [e, t] = D.useState(!1),
      { user: n, logOut: r } = D.useContext(da),
      i = () => {
        t(!e);
      },
      [a, o] = D.useState(!1),
      c = () => {
        window.scrollY > 40 ? o(!0) : o(!1);
      };
    return (
      D.useEffect(() => {
        window.addEventListener("scroll", c);
      }, []),
      m.jsx("header", {
        className: `fixed w-full z-50 transition-all duration-200 ease-in-out ${
          a ? "bg-white shadow-lg" : "bg-[#00000070] text-white"
        }`,
        children: m.jsx("nav", {
          className: `py-2 relative transition-all duration-200 ease-in-out ${
            a ? "py-2" : "py-5"
          }`,
          children: m.jsxs("div", {
            className:
              "container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto flex justify-between items-center",
            children: [
              m.jsx(bt, {
                to: "/",
                className: "text-3xl",
                children: a
                  ? m.jsx("img", {
                      className: "w-52",
                      src: ju,
                      alt: "tasty-salt",
                    })
                  : m.jsx("img", {
                      className: "w-52",
                      src: ju,
                      alt: "tasty-salt",
                    }),
              }),
              m.jsx("button", {
                className:
                  "block md:hidden text-secondary focus:outline-none text-3xl",
                id: "navbar-toggle",
                onClick: i,
                children: e ? m.jsx(U3, {}) : m.jsx(Y3, {}),
              }),
              m.jsxs("ul", {
                className: "hidden md:flex gap-10 text-darkGray",
                children: [
                  m.jsx(cn, { to: "/", children: "Home" }),
                  m.jsx(cn, { to: "/all-chef", children: "Chef's" }),
                  m.jsx(cn, { to: "/recipes", children: "Recipes" }),
                  m.jsx(cn, { to: "/blogs", children: "Blogs" }),
                  m.jsx(cn, { to: "/addItems", children: "Add New " }),
                  m.jsx(cn, { to: "/allItems", children: "ALL Items " }),
                ],
              }),
              n
                ? m.jsx(Kv, { user: n, logOut: r })
                : m.jsx(bt, {
                    to: "/login",
                    className: "hidden md:block btn_regular",
                    children: "Login",
                  }),
              m.jsx("div", {
                onClick: () => t(!1),
                className: `absolute md:hidden w-full h-screen top-0 left-0 bg-[#0000007b] transition-all duration-200 ease-in-out ${
                  e ? "scale-100" : "scale-0"
                }`,
              }),
              m.jsxs("ul", {
                className: `flex md:hidden flex-col gap-5 absolute w-64 h-screen p-8 top-0 bg-dark transition-all duration-300 ease-in-out bg-primary text-white z-50 ${
                  e ? "-left-4" : "-left-full"
                }`,
                children: [
                  m.jsx(cn, { to: "/", children: "Home" }),
                  m.jsx(cn, { to: "/all-chef", children: "Chef's" }),
                  m.jsx(cn, { to: "/recipes", children: "Recipes" }),
                  m.jsx(cn, { to: "/blog", children: "Blogs" }),
                  m.jsx(cn, { to: "/createNew", children: "Create New " }),
                  m.jsx("div", {
                    children:
                      n != null && n.photoURL
                        ? m.jsx("img", {
                            className:
                              "h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]",
                            src: n == null ? void 0 : n.photoURL,
                            alt: "User avatar",
                          })
                        : m.jsx("img", {
                            className:
                              "h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]",
                            src: "https://i.pravatar.cc/300",
                            alt: "User avatar",
                          }),
                  }),
                  m.jsx("button", {
                    onClick: () => r(),
                    className: "btn_regular logout",
                    children: "LogOut",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  Y6 = () =>
    m.jsx("footer", {
      className: "bg-[#222D3B]",
      children: m.jsxs("div", {
        className: "container px-4 md:px-8 mx-auto text-slate-300",
        children: [
          m.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center py-20 font-semibold",
            children: [
              m.jsxs("div", {
                children: [
                  m.jsx("h1", {
                    className: "text-3xl  mb-4 text-white",
                    children: "Subscribe",
                  }),
                  m.jsx("p", {
                    className: "text-white mb-5",
                    children:
                      "Register and get notified about all the news & updates before it gets too late.",
                  }),
                  m.jsxs("div", {
                    className: "flex box-border w-full font-semibold",
                    children: [
                      m.jsx("input", {
                        className: "pl-4 w-full py-2  outline-orange-400",
                        type: "text",
                        placeholder: "Your email address",
                      }),
                      m.jsx("button", {
                        className:
                          "text-white text-xl bg-orange-500 w-52 hover:bg-orange-700",
                        children: "Subscribe",
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                children: [
                  m.jsx(bt, {
                    to: "/",
                    className: "text-3xl font-semibold",
                    children: m.jsx("img", {
                      className: "w-56 m-auto",
                      src: ju,
                      alt: "tasty-salt",
                    }),
                  }),
                  m.jsx("p", {
                    className: "text-white my-8",
                    children:
                      "Be the first to know about new collections, going on at Our social network",
                  }),
                  m.jsxs("div", {
                    className:
                      "flex items-center justify-center text-white text-2xl",
                    children: [
                      m.jsx(bt, {
                        to: "/",
                        className: "mr-4 text-blue",
                        children: m.jsx(F3, {}),
                      }),
                      m.jsx(bt, {
                        to: "/",
                        className: "mr-4 text-blue",
                        children: m.jsx(W3, {}),
                      }),
                      m.jsx(bt, {
                        to: "/",
                        className: "mr-4 text-red-600",
                        children: m.jsx(H3, {}),
                      }),
                      m.jsx(bt, {
                        to: "/",
                        className: "mr-4 text-red-700",
                        children: m.jsx(K3, {}),
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                children: [
                  m.jsx("h1", {
                    className: "text-3xl font-semibold mb-4 ",
                    children: "Contact Us",
                  }),
                  m.jsxs("p", {
                    children: [
                      "Byte Cafe Restaurant ",
                      m.jsx("br", {}),
                      " 71 Madison Ave, New York, USA",
                    ],
                  }),
                  m.jsx("p", {
                    className: "my-2",
                    children: "+39-057-098754,+39-066-666999",
                  }),
                  m.jsx("p", { children: "zahid@bytecafe.com" }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className:
              "border-t border-white flex flex-col md:flex-row items-center justify-between py-5 text-white text-center",
            children: [
              m.jsx("p", {
                children: "@Copyright by Byte Cafe-2023, All Right Reserved.",
              }),
              m.jsxs("div", {
                children: [
                  m.jsx(bt, { to: "/", children: "Privacy & Policy" }),
                  "|",
                  m.jsx(bt, { to: "/", children: "Terms and Conditions" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  G6 = () =>
    m.jsxs("div", { children: [m.jsx(K6, {}), m.jsx(l3, {}), m.jsx(Y6, {})] });
var Yv = { exports: {} },
  Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vt = typeof Symbol == "function" && Symbol.for,
  df = vt ? Symbol.for("react.element") : 60103,
  ff = vt ? Symbol.for("react.portal") : 60106,
  Ll = vt ? Symbol.for("react.fragment") : 60107,
  Ol = vt ? Symbol.for("react.strict_mode") : 60108,
  Ml = vt ? Symbol.for("react.profiler") : 60114,
  Dl = vt ? Symbol.for("react.provider") : 60109,
  jl = vt ? Symbol.for("react.context") : 60110,
  hf = vt ? Symbol.for("react.async_mode") : 60111,
  Bl = vt ? Symbol.for("react.concurrent_mode") : 60111,
  $l = vt ? Symbol.for("react.forward_ref") : 60112,
  zl = vt ? Symbol.for("react.suspense") : 60113,
  q6 = vt ? Symbol.for("react.suspense_list") : 60120,
  Ul = vt ? Symbol.for("react.memo") : 60115,
  Fl = vt ? Symbol.for("react.lazy") : 60116,
  Q6 = vt ? Symbol.for("react.block") : 60121,
  X6 = vt ? Symbol.for("react.fundamental") : 60117,
  J6 = vt ? Symbol.for("react.responder") : 60118,
  Z6 = vt ? Symbol.for("react.scope") : 60119;
function Yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case df:
        switch (((e = e.type), e)) {
          case hf:
          case Bl:
          case Ll:
          case Ml:
          case Ol:
          case zl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case jl:
              case $l:
              case Fl:
              case Ul:
              case Dl:
                return e;
              default:
                return t;
            }
        }
      case ff:
        return t;
    }
  }
}
function Gv(e) {
  return Yt(e) === Bl;
}
Le.AsyncMode = hf;
Le.ConcurrentMode = Bl;
Le.ContextConsumer = jl;
Le.ContextProvider = Dl;
Le.Element = df;
Le.ForwardRef = $l;
Le.Fragment = Ll;
Le.Lazy = Fl;
Le.Memo = Ul;
Le.Portal = ff;
Le.Profiler = Ml;
Le.StrictMode = Ol;
Le.Suspense = zl;
Le.isAsyncMode = function (e) {
  return Gv(e) || Yt(e) === hf;
};
Le.isConcurrentMode = Gv;
Le.isContextConsumer = function (e) {
  return Yt(e) === jl;
};
Le.isContextProvider = function (e) {
  return Yt(e) === Dl;
};
Le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === df;
};
Le.isForwardRef = function (e) {
  return Yt(e) === $l;
};
Le.isFragment = function (e) {
  return Yt(e) === Ll;
};
Le.isLazy = function (e) {
  return Yt(e) === Fl;
};
Le.isMemo = function (e) {
  return Yt(e) === Ul;
};
Le.isPortal = function (e) {
  return Yt(e) === ff;
};
Le.isProfiler = function (e) {
  return Yt(e) === Ml;
};
Le.isStrictMode = function (e) {
  return Yt(e) === Ol;
};
Le.isSuspense = function (e) {
  return Yt(e) === zl;
};
Le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ll ||
    e === Bl ||
    e === Ml ||
    e === Ol ||
    e === zl ||
    e === q6 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Fl ||
        e.$$typeof === Ul ||
        e.$$typeof === Dl ||
        e.$$typeof === jl ||
        e.$$typeof === $l ||
        e.$$typeof === X6 ||
        e.$$typeof === J6 ||
        e.$$typeof === Z6 ||
        e.$$typeof === Q6))
  );
};
Le.typeOf = Yt;
Yv.exports = Le;
var pf = Yv.exports;
function eC(e) {
  function t(H, G, Y, _, R) {
    for (
      var me = 0,
        W = 0,
        Oe = 0,
        le = 0,
        ie,
        oe,
        Je = 0,
        pt = 0,
        he,
        Ze = (he = ie = 0),
        Ee = 0,
        Ye = 0,
        Ge = 0,
        Ue = 0,
        We = Y.length,
        Ce = We - 1,
        rt,
        ne = "",
        Ae = "",
        wn = "",
        on = "",
        Lt;
      Ee < We;

    ) {
      if (
        ((oe = Y.charCodeAt(Ee)),
        Ee === Ce &&
          W + le + Oe + me !== 0 &&
          (W !== 0 && (oe = W === 47 ? 10 : 47),
          (le = Oe = me = 0),
          We++,
          Ce++),
        W + le + Oe + me === 0)
      ) {
        if (
          Ee === Ce &&
          (0 < Ye && (ne = ne.replace(b, "")), 0 < ne.trim().length)
        ) {
          switch (oe) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ne += Y.charAt(Ee);
          }
          oe = 59;
        }
        switch (oe) {
          case 123:
            for (
              ne = ne.trim(), ie = ne.charCodeAt(0), he = 1, Ue = ++Ee;
              Ee < We;

            ) {
              switch ((oe = Y.charCodeAt(Ee))) {
                case 123:
                  he++;
                  break;
                case 125:
                  he--;
                  break;
                case 47:
                  switch ((oe = Y.charCodeAt(Ee + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Ze = Ee + 1; Ze < Ce; ++Ze)
                          switch (Y.charCodeAt(Ze)) {
                            case 47:
                              if (
                                oe === 42 &&
                                Y.charCodeAt(Ze - 1) === 42 &&
                                Ee + 2 !== Ze
                              ) {
                                Ee = Ze + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (oe === 47) {
                                Ee = Ze + 1;
                                break e;
                              }
                          }
                        Ee = Ze;
                      }
                  }
                  break;
                case 91:
                  oe++;
                case 40:
                  oe++;
                case 34:
                case 39:
                  for (; Ee++ < Ce && Y.charCodeAt(Ee) !== oe; );
              }
              if (he === 0) break;
              Ee++;
            }
            switch (
              ((he = Y.substring(Ue, Ee)),
              ie === 0 && (ie = (ne = ne.replace(y, "").trim()).charCodeAt(0)),
              ie)
            ) {
              case 64:
                switch (
                  (0 < Ye && (ne = ne.replace(b, "")),
                  (oe = ne.charCodeAt(1)),
                  oe)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ye = G;
                    break;
                  default:
                    Ye = ht;
                }
                if (
                  ((he = t(G, Ye, he, oe, R + 1)),
                  (Ue = he.length),
                  0 < F &&
                    ((Ye = n(ht, ne, Ge)),
                    (Lt = c(3, he, Ye, G, Z, re, Ue, oe, R, _)),
                    (ne = Ye.join("")),
                    Lt !== void 0 &&
                      (Ue = (he = Lt.trim()).length) === 0 &&
                      ((oe = 0), (he = ""))),
                  0 < Ue)
                )
                  switch (oe) {
                    case 115:
                      ne = ne.replace(C, o);
                    case 100:
                    case 109:
                    case 45:
                      he = ne + "{" + he + "}";
                      break;
                    case 107:
                      (ne = ne.replace(v, "$1 $2")),
                        (he = ne + "{" + he + "}"),
                        (he =
                          Se === 1 || (Se === 2 && a("@" + he, 3))
                            ? "@-webkit-" + he + "@" + he
                            : "@" + he);
                      break;
                    default:
                      (he = ne + he), _ === 112 && (he = ((Ae += he), ""));
                  }
                else he = "";
                break;
              default:
                he = t(G, n(G, ne, Ge), he, _, R + 1);
            }
            (wn += he),
              (he = Ge = Ye = Ze = ie = 0),
              (ne = ""),
              (oe = Y.charCodeAt(++Ee));
            break;
          case 125:
          case 59:
            if (
              ((ne = (0 < Ye ? ne.replace(b, "") : ne).trim()),
              1 < (Ue = ne.length))
            )
              switch (
                (Ze === 0 &&
                  ((ie = ne.charCodeAt(0)),
                  ie === 45 || (96 < ie && 123 > ie)) &&
                  (Ue = (ne = ne.replace(" ", ":")).length),
                0 < F &&
                  (Lt = c(1, ne, G, H, Z, re, Ae.length, _, R, _)) !== void 0 &&
                  (Ue = (ne = Lt.trim()).length) === 0 &&
                  (ne = "\0\0"),
                (ie = ne.charCodeAt(0)),
                (oe = ne.charCodeAt(1)),
                ie)
              ) {
                case 0:
                  break;
                case 64:
                  if (oe === 105 || oe === 99) {
                    on += ne + Y.charAt(Ee);
                    break;
                  }
                default:
                  ne.charCodeAt(Ue - 1) !== 58 &&
                    (Ae += i(ne, ie, oe, ne.charCodeAt(2)));
              }
            (Ge = Ye = Ze = ie = 0), (ne = ""), (oe = Y.charCodeAt(++Ee));
        }
      }
      switch (oe) {
        case 13:
        case 10:
          W === 47
            ? (W = 0)
            : 1 + ie === 0 &&
              _ !== 107 &&
              0 < ne.length &&
              ((Ye = 1), (ne += "\0")),
            0 < F * z && c(0, ne, G, H, Z, re, Ae.length, _, R, _),
            (re = 1),
            Z++;
          break;
        case 59:
        case 125:
          if (W + le + Oe + me === 0) {
            re++;
            break;
          }
        default:
          switch ((re++, (rt = Y.charAt(Ee)), oe)) {
            case 9:
            case 32:
              if (le + me + W === 0)
                switch (Je) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    rt = "";
                    break;
                  default:
                    oe !== 32 && (rt = " ");
                }
              break;
            case 0:
              rt = "\\0";
              break;
            case 12:
              rt = "\\f";
              break;
            case 11:
              rt = "\\v";
              break;
            case 38:
              le + W + me === 0 && ((Ye = Ge = 1), (rt = "\f" + rt));
              break;
            case 108:
              if (le + W + me + ye === 0 && 0 < Ze)
                switch (Ee - Ze) {
                  case 2:
                    Je === 112 && Y.charCodeAt(Ee - 3) === 58 && (ye = Je);
                  case 8:
                    pt === 111 && (ye = pt);
                }
              break;
            case 58:
              le + W + me === 0 && (Ze = Ee);
              break;
            case 44:
              W + Oe + le + me === 0 && ((Ye = 1), (rt += "\r"));
              break;
            case 34:
            case 39:
              W === 0 && (le = le === oe ? 0 : le === 0 ? oe : le);
              break;
            case 91:
              le + W + Oe === 0 && me++;
              break;
            case 93:
              le + W + Oe === 0 && me--;
              break;
            case 41:
              le + W + me === 0 && Oe--;
              break;
            case 40:
              if (le + W + me === 0) {
                if (ie === 0)
                  switch (2 * Je + 3 * pt) {
                    case 533:
                      break;
                    default:
                      ie = 1;
                  }
                Oe++;
              }
              break;
            case 64:
              W + Oe + le + me + Ze + he === 0 && (he = 1);
              break;
            case 42:
            case 47:
              if (!(0 < le + me + Oe))
                switch (W) {
                  case 0:
                    switch (2 * oe + 3 * Y.charCodeAt(Ee + 1)) {
                      case 235:
                        W = 47;
                        break;
                      case 220:
                        (Ue = Ee), (W = 42);
                    }
                    break;
                  case 42:
                    oe === 47 &&
                      Je === 42 &&
                      Ue + 2 !== Ee &&
                      (Y.charCodeAt(Ue + 2) === 33 &&
                        (Ae += Y.substring(Ue, Ee + 1)),
                      (rt = ""),
                      (W = 0));
                }
          }
          W === 0 && (ne += rt);
      }
      (pt = Je), (Je = oe), Ee++;
    }
    if (((Ue = Ae.length), 0 < Ue)) {
      if (
        ((Ye = G),
        0 < F &&
          ((Lt = c(2, Ae, Ye, H, Z, re, Ue, _, R, _)),
          Lt !== void 0 && (Ae = Lt).length === 0))
      )
        return on + Ae + wn;
      if (((Ae = Ye.join(",") + "{" + Ae + "}"), Se * ye !== 0)) {
        switch ((Se !== 2 || a(Ae, 2) || (ye = 0), ye)) {
          case 111:
            Ae = Ae.replace(L, ":-moz-$1") + Ae;
            break;
          case 112:
            Ae =
              Ae.replace(E, "::-webkit-input-$1") +
              Ae.replace(E, "::-moz-$1") +
              Ae.replace(E, ":-ms-input-$1") +
              Ae;
        }
        ye = 0;
      }
    }
    return on + Ae + wn;
  }
  function n(H, G, Y) {
    var _ = G.trim().split(I);
    G = _;
    var R = _.length,
      me = H.length;
    switch (me) {
      case 0:
      case 1:
        var W = 0;
        for (H = me === 0 ? "" : H[0] + " "; W < R; ++W)
          G[W] = r(H, G[W], Y).trim();
        break;
      default:
        var Oe = (W = 0);
        for (G = []; W < R; ++W)
          for (var le = 0; le < me; ++le)
            G[Oe++] = r(H[le] + " ", _[W], Y).trim();
    }
    return G;
  }
  function r(H, G, Y) {
    var _ = G.charCodeAt(0);
    switch ((33 > _ && (_ = (G = G.trim()).charCodeAt(0)), _)) {
      case 38:
        return G.replace(w, "$1" + H.trim());
      case 58:
        return H.trim() + G.replace(w, "$1" + H.trim());
      default:
        if (0 < 1 * Y && 0 < G.indexOf("\f"))
          return G.replace(w, (H.charCodeAt(0) === 58 ? "" : "$1") + H.trim());
    }
    return H + G;
  }
  function i(H, G, Y, _) {
    var R = H + ";",
      me = 2 * G + 3 * Y + 4 * _;
    if (me === 944) {
      H = R.indexOf(":", 9) + 1;
      var W = R.substring(H, R.length - 1).trim();
      return (
        (W = R.substring(0, H).trim() + W + ";"),
        Se === 1 || (Se === 2 && a(W, 1)) ? "-webkit-" + W + W : W
      );
    }
    if (Se === 0 || (Se === 2 && !a(R, 1))) return R;
    switch (me) {
      case 1015:
        return R.charCodeAt(10) === 97 ? "-webkit-" + R + R : R;
      case 951:
        return R.charCodeAt(3) === 116 ? "-webkit-" + R + R : R;
      case 963:
        return R.charCodeAt(5) === 110 ? "-webkit-" + R + R : R;
      case 1009:
        if (R.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + R + R;
      case 978:
        return "-webkit-" + R + "-moz-" + R + R;
      case 1019:
      case 983:
        return "-webkit-" + R + "-moz-" + R + "-ms-" + R + R;
      case 883:
        if (R.charCodeAt(8) === 45) return "-webkit-" + R + R;
        if (0 < R.indexOf("image-set(", 11))
          return R.replace(te, "$1-webkit-$2") + R;
        break;
      case 932:
        if (R.charCodeAt(4) === 45)
          switch (R.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                R.replace("-grow", "") +
                "-webkit-" +
                R +
                "-ms-" +
                R.replace("grow", "positive") +
                R
              );
            case 115:
              return (
                "-webkit-" + R + "-ms-" + R.replace("shrink", "negative") + R
              );
            case 98:
              return (
                "-webkit-" +
                R +
                "-ms-" +
                R.replace("basis", "preferred-size") +
                R
              );
          }
        return "-webkit-" + R + "-ms-" + R + R;
      case 964:
        return "-webkit-" + R + "-ms-flex-" + R + R;
      case 1023:
        if (R.charCodeAt(8) !== 99) break;
        return (
          (W = R.substring(R.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + W + "-webkit-" + R + "-ms-flex-pack" + W + R
        );
      case 1005:
        return S.test(R)
          ? R.replace(N, ":-webkit-") + R.replace(N, ":-moz-") + R
          : R;
      case 1e3:
        switch (
          ((W = R.substring(13).trim()),
          (G = W.indexOf("-") + 1),
          W.charCodeAt(0) + W.charCodeAt(G))
        ) {
          case 226:
            W = R.replace(A, "tb");
            break;
          case 232:
            W = R.replace(A, "tb-rl");
            break;
          case 220:
            W = R.replace(A, "lr");
            break;
          default:
            return R;
        }
        return "-webkit-" + R + "-ms-" + W + R;
      case 1017:
        if (R.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((G = (R = H).length - 10),
          (W = (R.charCodeAt(G) === 33 ? R.substring(0, G) : R)
            .substring(H.indexOf(":", 7) + 1)
            .trim()),
          (me = W.charCodeAt(0) + (W.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > W.charCodeAt(8)) break;
          case 115:
            R = R.replace(W, "-webkit-" + W) + ";" + R;
            break;
          case 207:
          case 102:
            R =
              R.replace(W, "-webkit-" + (102 < me ? "inline-" : "") + "box") +
              ";" +
              R.replace(W, "-webkit-" + W) +
              ";" +
              R.replace(W, "-ms-" + W + "box") +
              ";" +
              R;
        }
        return R + ";";
      case 938:
        if (R.charCodeAt(5) === 45)
          switch (R.charCodeAt(6)) {
            case 105:
              return (
                (W = R.replace("-items", "")),
                "-webkit-" + R + "-webkit-box-" + W + "-ms-flex-" + W + R
              );
            case 115:
              return "-webkit-" + R + "-ms-flex-item-" + R.replace(B, "") + R;
            default:
              return (
                "-webkit-" +
                R +
                "-ms-flex-line-pack" +
                R.replace("align-content", "").replace(B, "") +
                R
              );
          }
        break;
      case 973:
      case 989:
        if (R.charCodeAt(3) !== 45 || R.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (K.test(H) === !0)
          return (W = H.substring(H.indexOf(":") + 1)).charCodeAt(0) === 115
            ? i(H.replace("stretch", "fill-available"), G, Y, _).replace(
                ":fill-available",
                ":stretch"
              )
            : R.replace(W, "-webkit-" + W) +
                R.replace(W, "-moz-" + W.replace("fill-", "")) +
                R;
        break;
      case 962:
        if (
          ((R =
            "-webkit-" + R + (R.charCodeAt(5) === 102 ? "-ms-" + R : "") + R),
          Y + _ === 211 &&
            R.charCodeAt(13) === 105 &&
            0 < R.indexOf("transform", 10))
        )
          return (
            R.substring(0, R.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") +
            R
          );
    }
    return R;
  }
  function a(H, G) {
    var Y = H.indexOf(G === 1 ? ":" : "{"),
      _ = H.substring(0, G !== 3 ? Y : 10);
    return (
      (Y = H.substring(Y + 1, H.length - 1)),
      ee(G !== 2 ? _ : _.replace($, "$1"), Y, G)
    );
  }
  function o(H, G) {
    var Y = i(G, G.charCodeAt(0), G.charCodeAt(1), G.charCodeAt(2));
    return Y !== G + ";"
      ? Y.replace(O, " or ($1)").substring(4)
      : "(" + G + ")";
  }
  function c(H, G, Y, _, R, me, W, Oe, le, ie) {
    for (var oe = 0, Je = G, pt; oe < F; ++oe)
      switch ((pt = we[oe].call(g, H, Je, Y, _, R, me, W, Oe, le, ie))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Je = pt;
      }
    if (Je !== G) return Je;
  }
  function u(H) {
    switch (H) {
      case void 0:
      case null:
        F = we.length = 0;
        break;
      default:
        if (typeof H == "function") we[F++] = H;
        else if (typeof H == "object")
          for (var G = 0, Y = H.length; G < Y; ++G) u(H[G]);
        else z = !!H | 0;
    }
    return u;
  }
  function h(H) {
    return (
      (H = H.prefix),
      H !== void 0 &&
        ((ee = null),
        H
          ? typeof H != "function"
            ? (Se = 1)
            : ((Se = 2), (ee = H))
          : (Se = 0)),
      h
    );
  }
  function g(H, G) {
    var Y = H;
    if ((33 > Y.charCodeAt(0) && (Y = Y.trim()), (fe = Y), (Y = [fe]), 0 < F)) {
      var _ = c(-1, G, Y, Y, Z, re, 0, 0, 0, 0);
      _ !== void 0 && typeof _ == "string" && (G = _);
    }
    var R = t(ht, Y, G, 0, 0);
    return (
      0 < F &&
        ((_ = c(-2, R, Y, Y, Z, re, R.length, 0, 0, 0)),
        _ !== void 0 && (R = _)),
      (fe = ""),
      (ye = 0),
      (re = Z = 1),
      R
    );
  }
  var y = /^\0+/g,
    b = /[\0\r\f]/g,
    N = /: */g,
    S = /zoo|gra/,
    k = /([,: ])(transform)/g,
    I = /,\r+?/g,
    w = /([\t\r\n ])*\f?&/g,
    v = /@(k\w+)\s*(\S*)\s*/,
    E = /::(place)/g,
    L = /:(read-only)/g,
    A = /[svh]\w+-[tblr]{2}/,
    C = /\(\s*(.*)\s*\)/g,
    O = /([\s\S]*?);/g,
    B = /-self|flex-/g,
    $ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    K = /stretch|:\s*\w+\-(?:conte|avail)/,
    te = /([^-])(image-set\()/,
    re = 1,
    Z = 1,
    ye = 0,
    Se = 1,
    ht = [],
    we = [],
    F = 0,
    ee = null,
    z = 0,
    fe = "";
  return (g.use = u), (g.set = h), e !== void 0 && h(e), g;
}
var tC = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function nC(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  dm = nC(function (e) {
    return (
      rC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  mf = pf,
  iC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  aC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  oC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  qv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gf = {};
gf[mf.ForwardRef] = oC;
gf[mf.Memo] = qv;
function fm(e) {
  return mf.isMemo(e) ? qv : gf[e.$$typeof] || iC;
}
var sC = Object.defineProperty,
  lC = Object.getOwnPropertyNames,
  hm = Object.getOwnPropertySymbols,
  cC = Object.getOwnPropertyDescriptor,
  uC = Object.getPrototypeOf,
  pm = Object.prototype;
function Qv(e, t, n) {
  if (typeof t != "string") {
    if (pm) {
      var r = uC(t);
      r && r !== pm && Qv(e, r, n);
    }
    var i = lC(t);
    hm && (i = i.concat(hm(t)));
    for (var a = fm(e), o = fm(t), c = 0; c < i.length; ++c) {
      var u = i[c];
      if (!aC[u] && !(n && n[u]) && !(o && o[u]) && !(a && a[u])) {
        var h = cC(t, u);
        try {
          sC(e, u, h);
        } catch {}
      }
    }
  }
  return e;
}
var dC = Qv;
const fC = ll(dC);
var Qt = {};
function Hn() {
  return (Hn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var mm = function (e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  Ku = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !pf.typeOf(e)
    );
  },
  al = Object.freeze([]),
  Ir = Object.freeze({});
function xo(e) {
  return typeof e == "function";
}
function gm(e) {
  return e.displayName || e.name || "Component";
}
function vf(e) {
  return e && typeof e.styledComponentId == "string";
}
var ia =
    (typeof process < "u" &&
      Qt !== void 0 &&
      (Qt.REACT_APP_SC_ATTR || Qt.SC_ATTR)) ||
    "data-styled",
  yf = typeof window < "u" && "HTMLElement" in window,
  hC = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Qt !== void 0 &&
      (Qt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Qt.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? Qt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          Qt.REACT_APP_SC_DISABLE_SPEEDY
        : Qt.SC_DISABLE_SPEEDY !== void 0 &&
          Qt.SC_DISABLE_SPEEDY !== "" &&
          Qt.SC_DISABLE_SPEEDY !== "false" &&
          Qt.SC_DISABLE_SPEEDY));
function Mo(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var pC = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var i = this.groupSizes, a = i.length, o = a; n >= o; )
            (o <<= 1) < 0 && Mo(16, "" + n);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(i),
            (this.length = o);
          for (var c = a; c < o; c++) this.groupSizes[c] = 0;
        }
        for (var u = this.indexOfGroup(n + 1), h = 0, g = r.length; h < g; h++)
          this.tag.insertRule(u, r[h]) && (this.groupSizes[n]++, u++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            i = this.indexOfGroup(n),
            a = i + r;
          this.groupSizes[n] = 0;
          for (var o = i; o < a; o++) this.tag.deleteRule(i);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var i = this.groupSizes[n],
            a = this.indexOfGroup(n),
            o = a + i,
            c = a;
          c < o;
          c++
        )
          r +=
            this.tag.getRule(c) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  Ts = new Map(),
  ol = new Map(),
  Qa = 1,
  cs = function (e) {
    if (Ts.has(e)) return Ts.get(e);
    for (; ol.has(Qa); ) Qa++;
    var t = Qa++;
    return Ts.set(e, t), ol.set(t, e), t;
  },
  mC = function (e) {
    return ol.get(e);
  },
  gC = function (e, t) {
    t >= Qa && (Qa = t + 1), Ts.set(e, t), ol.set(t, e);
  },
  vC = "style[" + ia + '][data-styled-version="5.3.11"]',
  yC = new RegExp("^" + ia + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  wC = function (e, t, n) {
    for (var r, i = n.split(","), a = 0, o = i.length; a < o; a++)
      (r = i[a]) && e.registerName(t, r);
  },
  bC = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        i = 0,
        a = n.length;
      i < a;
      i++
    ) {
      var o = n[i].trim();
      if (o) {
        var c = o.match(yC);
        if (c) {
          var u = 0 | parseInt(c[1], 10),
            h = c[2];
          u !== 0 && (gC(h, u), wC(e, h, c[3]), e.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(o);
      }
    }
  },
  xC = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  Xv = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (c) {
        for (var u = c.childNodes, h = u.length; h >= 0; h--) {
          var g = u[h];
          if (g && g.nodeType === 1 && g.hasAttribute(ia)) return g;
        }
      })(n),
      a = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(ia, "active"),
      r.setAttribute("data-styled-version", "5.3.11");
    var o = xC();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, a), r;
  },
  EC = (function () {
    function e(n) {
      var r = (this.element = Xv(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (i) {
          if (i.sheet) return i.sheet;
          for (var a = document.styleSheets, o = 0, c = a.length; o < c; o++) {
            var u = a[o];
            if (u.ownerNode === i) return u;
          }
          Mo(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  CC = (function () {
    function e(n) {
      var r = (this.element = Xv(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var i = document.createTextNode(r),
            a = this.nodes[n];
          return this.element.insertBefore(i, a || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  kC = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  vm = yf,
  SC = { isServer: !yf, useCSSOMInjection: !hC },
  Jv = (function () {
    function e(n, r, i) {
      n === void 0 && (n = Ir),
        r === void 0 && (r = {}),
        (this.options = Hn({}, SC, {}, n)),
        (this.gs = r),
        (this.names = new Map(i)),
        (this.server = !!n.isServer),
        !this.server &&
          yf &&
          vm &&
          ((vm = !1),
          (function (a) {
            for (
              var o = document.querySelectorAll(vC), c = 0, u = o.length;
              c < u;
              c++
            ) {
              var h = o[c];
              h &&
                h.getAttribute(ia) !== "active" &&
                (bC(a, h), h.parentNode && h.parentNode.removeChild(h));
            }
          })(this));
    }
    e.registerId = function (n) {
      return cs(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            Hn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((i = (r = this.options).isServer),
            (a = r.useCSSOMInjection),
            (o = r.target),
            (n = i ? new kC(o) : a ? new EC(o) : new CC(o)),
            new pC(n)))
        );
        var n, r, i, a, o;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((cs(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var i = new Set();
          i.add(r), this.names.set(n, i);
        }
      }),
      (t.insertRules = function (n, r, i) {
        this.registerName(n, r), this.getTag().insertRules(cs(n), i);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(cs(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), i = r.length, a = "", o = 0; o < i; o++) {
            var c = mC(o);
            if (c !== void 0) {
              var u = n.names.get(c),
                h = r.getGroup(o);
              if (u && h && u.size) {
                var g = ia + ".g" + o + '[id="' + c + '"]',
                  y = "";
                u !== void 0 &&
                  u.forEach(function (b) {
                    b.length > 0 && (y += b + ",");
                  }),
                  (a +=
                    "" +
                    h +
                    g +
                    '{content:"' +
                    y +
                    `"}/*!sc*/
`);
              }
            }
          }
          return a;
        })(this);
      }),
      e
    );
  })(),
  _C = /(a)(d)/gi,
  ym = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Yu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = ym(t % 52) + n;
  return (ym(t % 52) + n).replace(_C, "$1-$2");
}
var Di = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Zv = function (e) {
    return Di(5381, e);
  };
function TC(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (xo(n) && !vf(n)) return !1;
  }
  return !0;
}
var NC = Zv("5.3.11"),
  IC = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && TC(t)),
        (this.componentId = n),
        (this.baseHash = Di(NC, n)),
        (this.baseStyle = r),
        Jv.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.componentId,
          a = [];
        if (
          (this.baseStyle &&
            a.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
            a.push(this.staticRulesId);
          else {
            var o = aa(this.rules, t, n, r).join(""),
              c = Yu(Di(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(i, c)) {
              var u = r(o, "." + c, void 0, i);
              n.insertRules(i, c, u);
            }
            a.push(c), (this.staticRulesId = c);
          }
        else {
          for (
            var h = this.rules.length,
              g = Di(this.baseHash, r.hash),
              y = "",
              b = 0;
            b < h;
            b++
          ) {
            var N = this.rules[b];
            if (typeof N == "string") y += N;
            else if (N) {
              var S = aa(N, t, n, r),
                k = Array.isArray(S) ? S.join("") : S;
              (g = Di(g, k + b)), (y += k);
            }
          }
          if (y) {
            var I = Yu(g >>> 0);
            if (!n.hasNameForId(i, I)) {
              var w = r(y, "." + I, void 0, i);
              n.insertRules(i, I, w);
            }
            a.push(I);
          }
        }
        return a.join(" ");
      }),
      e
    );
  })(),
  PC = /^\s*\/\/.*$/gm,
  AC = [":", "[", ".", "#"];
function RC(e) {
  var t,
    n,
    r,
    i,
    a = e === void 0 ? Ir : e,
    o = a.options,
    c = o === void 0 ? Ir : o,
    u = a.plugins,
    h = u === void 0 ? al : u,
    g = new eC(c),
    y = [],
    b = (function (k) {
      function I(w) {
        if (w)
          try {
            k(w + "}");
          } catch {}
      }
      return function (w, v, E, L, A, C, O, B, $, K) {
        switch (w) {
          case 1:
            if ($ === 0 && v.charCodeAt(0) === 64) return k(v + ";"), "";
            break;
          case 2:
            if (B === 0) return v + "/*|*/";
            break;
          case 3:
            switch (B) {
              case 102:
              case 112:
                return k(E[0] + v), "";
              default:
                return v + (K === 0 ? "/*|*/" : "");
            }
          case -2:
            v.split("/*|*/}").forEach(I);
        }
      };
    })(function (k) {
      y.push(k);
    }),
    N = function (k, I, w) {
      return (I === 0 && AC.indexOf(w[n.length]) !== -1) || w.match(i)
        ? k
        : "." + t;
    };
  function S(k, I, w, v) {
    v === void 0 && (v = "&");
    var E = k.replace(PC, ""),
      L = I && w ? w + " " + I + " { " + E + " }" : E;
    return (
      (t = v),
      (n = I),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (i = new RegExp("(\\" + n + "\\b){2,}")),
      g(w || !I ? "" : I, L)
    );
  }
  return (
    g.use(
      [].concat(h, [
        function (k, I, w) {
          k === 2 &&
            w.length &&
            w[0].lastIndexOf(n) > 0 &&
            (w[0] = w[0].replace(r, N));
        },
        b,
        function (k) {
          if (k === -2) {
            var I = y;
            return (y = []), I;
          }
        },
      ])
    ),
    (S.hash = h.length
      ? h
          .reduce(function (k, I) {
            return I.name || Mo(15), Di(k, I.name);
          }, 5381)
          .toString()
      : ""),
    S
  );
}
var e1 = p.createContext();
e1.Consumer;
var t1 = p.createContext(),
  LC = (t1.Consumer, new Jv()),
  Gu = RC();
function OC() {
  return D.useContext(e1) || LC;
}
function MC() {
  return D.useContext(t1) || Gu;
}
var n1 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, a) {
        a === void 0 && (a = Gu);
        var o = r.name + a.hash;
        i.hasNameForId(r.id, o) ||
          i.insertRules(r.id, o, a(r.rules, o, "@keyframes"));
      }),
        (this.toString = function () {
          return Mo(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Gu), this.name + t.hash;
      }),
      e
    );
  })(),
  DC = /([A-Z])/,
  jC = /([A-Z])/g,
  BC = /^ms-/,
  $C = function (e) {
    return "-" + e.toLowerCase();
  };
function wm(e) {
  return DC.test(e) ? e.replace(jC, $C).replace(BC, "-ms-") : e;
}
var bm = function (e) {
  return e == null || e === !1 || e === "";
};
function aa(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, a = [], o = 0, c = e.length; o < c; o += 1)
      (i = aa(e[o], t, n, r)) !== "" &&
        (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
    return a;
  }
  if (bm(e)) return "";
  if (vf(e)) return "." + e.styledComponentId;
  if (xo(e)) {
    if (
      typeof (h = e) != "function" ||
      (h.prototype && h.prototype.isReactComponent) ||
      !t
    )
      return e;
    var u = e(t);
    return aa(u, t, n, r);
  }
  var h;
  return e instanceof n1
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Ku(e)
    ? (function g(y, b) {
        var N,
          S,
          k = [];
        for (var I in y)
          y.hasOwnProperty(I) &&
            !bm(y[I]) &&
            ((Array.isArray(y[I]) && y[I].isCss) || xo(y[I])
              ? k.push(wm(I) + ":", y[I], ";")
              : Ku(y[I])
              ? k.push.apply(k, g(y[I], I))
              : k.push(
                  wm(I) +
                    ": " +
                    ((N = I),
                    (S = y[I]) == null || typeof S == "boolean" || S === ""
                      ? ""
                      : typeof S != "number" ||
                        S === 0 ||
                        N in tC ||
                        N.startsWith("--")
                      ? String(S).trim()
                      : S + "px") +
                    ";"
                ));
        return b ? [b + " {"].concat(k, ["}"]) : k;
      })(e)
    : e.toString();
}
var xm = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function r1(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return xo(e) || Ku(e)
    ? xm(aa(mm(al, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : xm(aa(mm(e, n)));
}
var zC = function (e, t, n) {
    return (
      n === void 0 && (n = Ir), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  UC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  FC = /(^-|-$)/g;
function Mc(e) {
  return e.replace(UC, "-").replace(FC, "");
}
var i1 = function (e) {
  return Yu(Zv(e) >>> 0);
};
function us(e) {
  return typeof e == "string" && !0;
}
var qu = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  VC = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function HC(e, t, n) {
  var r = e[n];
  qu(t) && qu(r) ? a1(r, t) : (e[n] = t);
}
function a1(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var i = 0, a = n; i < a.length; i++) {
    var o = a[i];
    if (qu(o)) for (var c in o) VC(c) && HC(e, o[c], c);
  }
  return e;
}
var o1 = p.createContext();
o1.Consumer;
var Dc = {};
function s1(e, t, n) {
  var r = vf(e),
    i = !us(e),
    a = t.attrs,
    o = a === void 0 ? al : a,
    c = t.componentId,
    u =
      c === void 0
        ? (function (v, E) {
            var L = typeof v != "string" ? "sc" : Mc(v);
            Dc[L] = (Dc[L] || 0) + 1;
            var A = L + "-" + i1("5.3.11" + L + Dc[L]);
            return E ? E + "-" + A : A;
          })(t.displayName, t.parentComponentId)
        : c,
    h = t.displayName,
    g =
      h === void 0
        ? (function (v) {
            return us(v) ? "styled." + v : "Styled(" + gm(v) + ")";
          })(e)
        : h,
    y =
      t.displayName && t.componentId
        ? Mc(t.displayName) + "-" + t.componentId
        : t.componentId || u,
    b = r && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o,
    N = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (N = t.shouldForwardProp
      ? function (v, E, L) {
          return e.shouldForwardProp(v, E, L) && t.shouldForwardProp(v, E, L);
        }
      : e.shouldForwardProp);
  var S,
    k = new IC(n, y, r ? e.componentStyle : void 0),
    I = k.isStatic && o.length === 0,
    w = function (v, E) {
      return (function (L, A, C, O) {
        var B = L.attrs,
          $ = L.componentStyle,
          K = L.defaultProps,
          te = L.foldedComponentIds,
          re = L.shouldForwardProp,
          Z = L.styledComponentId,
          ye = L.target,
          Se = (function (_, R, me) {
            _ === void 0 && (_ = Ir);
            var W = Hn({}, R, { theme: _ }),
              Oe = {};
            return (
              me.forEach(function (le) {
                var ie,
                  oe,
                  Je,
                  pt = le;
                for (ie in (xo(pt) && (pt = pt(W)), pt))
                  W[ie] = Oe[ie] =
                    ie === "className"
                      ? ((oe = Oe[ie]),
                        (Je = pt[ie]),
                        oe && Je ? oe + " " + Je : oe || Je)
                      : pt[ie];
              }),
              [W, Oe]
            );
          })(zC(A, D.useContext(o1), K) || Ir, A, B),
          ht = Se[0],
          we = Se[1],
          F = (function (_, R, me, W) {
            var Oe = OC(),
              le = MC(),
              ie = R
                ? _.generateAndInjectStyles(Ir, Oe, le)
                : _.generateAndInjectStyles(me, Oe, le);
            return ie;
          })($, O, ht),
          ee = C,
          z = we.$as || A.$as || we.as || A.as || ye,
          fe = us(z),
          H = we !== A ? Hn({}, A, {}, we) : A,
          G = {};
        for (var Y in H)
          Y[0] !== "$" &&
            Y !== "as" &&
            (Y === "forwardedAs"
              ? (G.as = H[Y])
              : (re ? re(Y, dm, z) : !fe || dm(Y)) && (G[Y] = H[Y]));
        return (
          A.style &&
            we.style !== A.style &&
            (G.style = Hn({}, A.style, {}, we.style)),
          (G.className = Array.prototype
            .concat(te, Z, F !== Z ? F : null, A.className, we.className)
            .filter(Boolean)
            .join(" ")),
          (G.ref = ee),
          D.createElement(z, G)
        );
      })(S, v, E, I);
    };
  return (
    (w.displayName = g),
    ((S = p.forwardRef(w)).attrs = b),
    (S.componentStyle = k),
    (S.displayName = g),
    (S.shouldForwardProp = N),
    (S.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : al),
    (S.styledComponentId = y),
    (S.target = r ? e.target : e),
    (S.withComponent = function (v) {
      var E = t.componentId,
        L = (function (C, O) {
          if (C == null) return {};
          var B,
            $,
            K = {},
            te = Object.keys(C);
          for ($ = 0; $ < te.length; $++)
            (B = te[$]), O.indexOf(B) >= 0 || (K[B] = C[B]);
          return K;
        })(t, ["componentId"]),
        A = E && E + "-" + (us(v) ? v : Mc(gm(v)));
      return s1(v, Hn({}, L, { attrs: b, componentId: A }), n);
    }),
    Object.defineProperty(S, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = r ? a1({}, e.defaultProps, v) : v;
      },
    }),
    Object.defineProperty(S, "toString", {
      value: function () {
        return "." + S.styledComponentId;
      },
    }),
    i &&
      fC(S, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    S
  );
}
var Qu = function (e) {
  return (function t(n, r, i) {
    if ((i === void 0 && (i = Ir), !pf.isValidElementType(r)))
      return Mo(1, String(r));
    var a = function () {
      return n(r, i, r1.apply(void 0, arguments));
    };
    return (
      (a.withConfig = function (o) {
        return t(n, r, Hn({}, i, {}, o));
      }),
      (a.attrs = function (o) {
        return t(
          n,
          r,
          Hn({}, i, {
            attrs: Array.prototype.concat(i.attrs, o).filter(Boolean),
          })
        );
      }),
      a
    );
  })(s1, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  Qu[e] = Qu(e);
});
function wf(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = r1.apply(void 0, [e].concat(n)).join(""),
    a = i1(i);
  return new n1(a, i);
}
const Do = Qu;
var WC = function (t, n) {
  return function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof r[t] < "u") return r[t];
    if (t && t.indexOf(".") > 0) {
      for (
        var i = t.split("."), a = i.length, o = r[i[0]], c = 1;
        o != null && c < a;

      )
        (o = o[i[c]]), (c += 1);
      if (typeof o < "u") return o;
    }
    return n;
  };
};
function Ne(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var KC = {};
Ne(KC, "Hourglass", () => YC);
const Me = "#4fa94d",
  Pe = { "aria-busy": !0, role: "status" };
function YC({
  visible: e = !0,
  width: t = "80",
  height: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "hourglass-loading",
  colors: o = ["#306cce", "#72a1ed"],
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: t,
          height: n,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 350 350",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "hourglass-svg",
          ...Pe,
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "0; 0; -30; 360; 360",
          keyTimes: "0; 0.40; 0.55; 0.65; 1",
          dur: "3s",
          begin: "0s",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement(
          "g",
          null,
          p.createElement("path", {
            fill: o[0],
            stroke: o[0],
            d: "M324.658,20.572v-2.938C324.658,7.935,316.724,0,307.025,0H40.313c-9.699,0-17.635,7.935-17.635,17.634v2.938     c0,9.699,7.935,17.634,17.635,17.634h6.814c3.5,0,3.223,3.267,3.223,4.937c0,19.588,8.031,42.231,14.186,56.698     c12.344,29.012,40.447,52.813,63.516,69.619c4.211,3.068,3.201,5.916,0.756,7.875c-22.375,17.924-51.793,40.832-64.271,70.16     c-6.059,14.239-13.934,36.4-14.18,55.772c-0.025,1.987,0.771,5.862-3.979,5.862h-6.064c-9.699,0-17.635,7.936-17.635,17.634v2.94     c0,9.698,7.935,17.634,17.635,17.634h266.713c9.699,0,17.633-7.936,17.633-17.634v-2.94c0-9.698-7.934-17.634-17.633-17.634     h-3.816c-7,0-6.326-5.241-6.254-7.958c0.488-18.094-4.832-38.673-12.617-54.135c-17.318-34.389-44.629-56.261-61.449-68.915     c-3.65-2.745-4.018-6.143,0-8.906c17.342-11.929,44.131-34.526,61.449-68.916c8.289-16.464,13.785-38.732,12.447-57.621     c-0.105-1.514-0.211-4.472,3.758-4.472h6.482C316.725,38.206,324.658,30.272,324.658,20.572z M270.271,93.216     c-16.113,31.998-41.967,54.881-64.455,68.67c-1.354,0.831-3.936,2.881-3.936,8.602v6.838c0,6.066,2.752,7.397,4.199,8.286     c22.486,13.806,48.143,36.636,64.191,68.508c7.414,14.727,11.266,32.532,10.885,46.702c-0.078,2.947,1.053,8.308-6.613,8.308     H72.627c-6.75,0-6.475-3.37-6.459-5.213c0.117-12.895,4.563-30.757,12.859-50.255c14.404-33.854,44.629-54.988,64.75-67.577     c0.896-0.561,2.629-1.567,2.629-6.922v-10.236c0-5.534-2.656-7.688-4.057-8.57c-20.098-12.688-49.256-33.618-63.322-66.681     c-8.383-19.702-12.834-37.732-12.861-50.657c-0.002-1.694,0.211-4.812,3.961-4.812h206.582c4.168,0,4.127,3.15,4.264,4.829     C282.156,57.681,278.307,77.257,270.271,93.216z",
          }),
          p.createElement(
            "g",
            null,
            p.createElement("path", {
              fill: o[1],
              stroke: o[1],
              d: "M169.541,196.2l-68.748,86.03c-2.27,2.842-1.152,5.166,2.484,5.166h140.781c3.637,0,4.756-2.324,2.484-5.166     l-68.746-86.03C175.525,193.358,171.811,193.358,169.541,196.2z",
            }),
            p.createElement("animate", {
              attributeName: "opacity",
              values: "0; 0; 1; 1; 0; 0",
              keyTimes: "0; 0.1; 0.4; 0.6; 0.61; 1",
              dur: "3s",
              repeatCount: "indefinite",
            })
          ),
          p.createElement(
            "g",
            null,
            p.createElement("path", {
              fill: o[1],
              stroke: o[1],
              d: "M168.986,156.219c2.576,2.568,6.789,2.568,9.363,0l34.576-34.489c2.574-2.568,1.707-4.67-1.932-4.67H136.34     c-3.637,0-4.506,2.102-1.932,4.67L168.986,156.219z",
            }),
            p.createElement("animate", {
              attributeName: "opacity",
              values: "1; 1; 0; 0; 1; 1",
              keyTimes: "0; 0.1; 0.4; 0.65; 0.66; 1",
              dur: "3s",
              repeatCount: "indefinite",
            })
          )
        )
      )
    : null;
}
var GC = {};
Ne(GC, "Blocks", () => qC);
function qC({
  visible: e = !0,
  width: t = "80",
  height: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "blocks-loading",
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: t,
          height: n,
          className: r,
          style: i,
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          "aria-label": a,
          "data-testid": "blocks-svg",
          ...Pe,
        },
        p.createElement(
          "rect",
          { x: "17", y: "17", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "40", y: "17", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.125s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "63", y: "17", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.25s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "17", y: "40", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.875s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "63", y: "40", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.375s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "17", y: "63", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.75s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "40", y: "63", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.625s",
            calcMode: "discrete",
          })
        ),
        p.createElement(
          "rect",
          { x: "63", y: "63", width: "20", height: "20", fill: "#577c9b" },
          p.createElement("animate", {
            attributeName: "fill",
            values: "#0dceff;#577c9b;#577c9b",
            keyTimes: "0;0.125;1",
            dur: "1s",
            repeatCount: "indefinite",
            begin: "0.5s",
            calcMode: "discrete",
          })
        )
      )
    : null;
}
var QC = {};
Ne(QC, "Comment", () => XC);
function XC({
  visible: e = !0,
  width: t = "80",
  height: n = "80",
  backgroundColor: r = "#ff6d00",
  color: i = "#fff",
  wrapperClass: a = "",
  wrapperStyle: o = {},
  ariaLabel: c = "comment-loading",
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: t,
          height: n,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: a,
          style: o,
          "aria-label": c,
          "data-testid": "comment-svg",
          ...Pe,
        },
        p.createElement("path", {
          d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",
          "ng-attr-fill": "{{config.c1}}",
          fill: r,
        }),
        p.createElement(
          "circle",
          {
            cx: "30",
            cy: "47",
            r: "5",
            "ng-attr-fill": "{{config.c2}}",
            fill: i,
          },
          p.createElement("animate", {
            attributeName: "opacity",
            calcMode: "linear",
            values: "0;1;1",
            keyTimes: "0;0.2;1",
            dur: "1",
            begin: "0s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "circle",
          {
            cx: "50",
            cy: "47",
            r: "5",
            "ng-attr-fill": "{{config.c3}}",
            fill: i,
          },
          p.createElement("animate", {
            attributeName: "opacity",
            calcMode: "linear",
            values: "0;0;1;1",
            keyTimes: "0;0.2;0.4;1",
            dur: "1",
            begin: "0s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "circle",
          {
            cx: "70",
            cy: "47",
            r: "5",
            "ng-attr-fill": "{{config.c4}}",
            fill: i,
          },
          p.createElement("animate", {
            attributeName: "opacity",
            calcMode: "linear",
            values: "0;0;1;1",
            keyTimes: "0;0.4;0.6;1",
            dur: "1",
            begin: "0s",
            repeatCount: "indefinite",
          })
        )
      )
    : null;
}
var JC = {};
Ne(JC, "ColorRing", () => ZC);
function ZC({
  visible: e = !0,
  width: t = "80",
  height: n = "80",
  colors: r = ["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"],
  wrapperClass: i = "",
  wrapperStyle: a = {},
  ariaLabel: o = "color-ring-loading",
}) {
  return e
    ? p.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          width: t,
          height: n,
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: i,
          style: a,
          "aria-label": o,
          "data-testid": "color-ring-svg",
          ...Pe,
        },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "mask",
            { id: "ldio-4offds5dlws-mask" },
            p.createElement(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "26",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeDasharray: "122.52211349000194 40.840704496667314",
                strokeWidth: "9",
                transform: "rotate(198.018 50 50)",
              },
              p.createElement("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                values: "0 50 50;360 50 50",
                keyTimes: "0;1",
                dur: "1s",
                repeatCount: "indefinite",
              })
            )
          )
        ),
        p.createElement(
          "g",
          { mask: "url(#ldio-4offds5dlws-mask)" },
          p.createElement(
            "rect",
            { x: "14.5", y: "0", width: "15", height: "100", fill: r[0] },
            p.createElement("animate", {
              attributeName: "fill",
              values: r.join(";").toString(),
              keyTimes: "0;0.25;0.5;0.75;1",
              dur: "1s",
              repeatCount: "indefinite",
              begin: "-0.8s",
            })
          ),
          p.createElement(
            "rect",
            { x: "28.5", y: "0", width: "15", height: "100", fill: r[1] },
            p.createElement("animate", {
              attributeName: "fill",
              values: r.join(";").toString(),
              keyTimes: "0;0.25;0.5;0.75;1",
              dur: "1s",
              repeatCount: "indefinite",
              begin: "-0.6s",
            })
          ),
          p.createElement(
            "rect",
            { x: "42.5", y: "0", width: "15", height: "100", fill: r[2] },
            p.createElement("animate", {
              attributeName: "fill",
              values: r.join(";").toString(),
              keyTimes: "0;0.25;0.5;0.75;1",
              dur: "1s",
              repeatCount: "indefinite",
              begin: "-0.4s",
            })
          ),
          p.createElement(
            "rect",
            { x: "56.5", y: "0", width: "15", height: "100", fill: r[3] },
            p.createElement("animate", {
              attributeName: "fill",
              values: r.join(";").toString(),
              keyTimes: "0;0.25;0.5;0.75;1",
              dur: "1s",
              repeatCount: "indefinite",
              begin: "-0.2s",
            })
          ),
          p.createElement(
            "rect",
            { x: "70.5", y: "0", width: "15", height: "100", fill: r[4] },
            p.createElement("animate", {
              attributeName: "fill",
              values: r.join(";").toString(),
              keyTimes: "0;0.25;0.5;0.75;1",
              dur: "1s",
              repeatCount: "indefinite",
              begin: "0s",
            })
          )
        )
      )
    : null;
}
var ek = {};
Ne(ek, "Discuss", () => tk);
function tk({
  visible: e = !0,
  width: t = "80",
  height: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "discuss-loading",
  colors: o = ["#ff727d", "#ff727d"],
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: t,
          height: n,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "discuss-svg",
          ...Pe,
        },
        p.createElement("path", {
          "ng-attr-d": "{{config.d}}",
          "ng-attr-stroke-width": "{{config.width}}",
          "ng-attr-stroke": "{{config.stroke}}",
          fill: "none",
          d: "M82 50A32 32 0 1 1 23.533421623214014 32.01333190873183 L21.71572875253809 21.7157287525381 L32.013331908731814 23.53342162321403 A32 32 0 0 1 82 50",
          strokeWidth: "5",
          stroke: o[0],
        }),
        p.createElement(
          "circle",
          {
            cx: "50",
            cy: "50",
            "ng-attr-r": "{{config.radius2}}",
            "ng-attr-stroke-width": "{{config.width}}",
            "ng-attr-stroke": "{{config.stroke}}",
            "ng-attr-stroke-dasharray": "{{config.dasharray}}",
            fill: "none",
            strokeLinecap: "round",
            r: "20",
            strokeWidth: "5",
            stroke: o[1],
            strokeDasharray: "31.41592653589793 31.41592653589793",
            transform: "rotate(96 50 50)",
          },
          p.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            calcMode: "linear",
            values: "0 50 50;360 50 50",
            keyTimes: "0;1",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite",
          })
        )
      )
    : null;
}
var nk = {};
Ne(nk, "FidgetSpinner", () => rk);
function rk({
  width: e = "80",
  height: t = "80",
  backgroundColor: n = Me,
  ballColors: r = ["#fc636b", "#6a67ce", "#ffb900"],
  wrapperClass: i = "",
  wrapperStyle: a = {},
  ariaLabel: o = "fidget-spinner-loader",
  visible: c = !0,
}) {
  return c
    ? p.createElement(
        "svg",
        {
          width: e,
          height: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: i,
          style: a,
          "aria-label": o,
          "data-testid": "fidget-spinner-svg",
          ...Pe,
        },
        p.createElement(
          "g",
          { transform: "rotate(6 50 50)" },
          p.createElement(
            "g",
            { transform: "translate(50 50)" },
            p.createElement(
              "g",
              {
                "ng-attr-transform": "scale({{config.r}})",
                transform: "scale(0.9)",
              },
              p.createElement(
                "g",
                { transform: "translate(-50 -58)" },
                p.createElement("path", {
                  "ng-attr-fill": "{{config.c2}}",
                  d: "M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z",
                  fill: r[0],
                }),
                p.createElement("path", {
                  "ng-attr-fill": "{{config.c3}}",
                  d: "M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z",
                  fill: r[1],
                }),
                p.createElement("circle", {
                  "ng-attr-fill": "{{config.c4}}",
                  cx: "50",
                  cy: "27",
                  r: "7.4",
                  fill: r[2],
                }),
                p.createElement("path", {
                  "ng-attr-fill": "{{config.c1}}",
                  d: "M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z",
                  fill: n,
                })
              )
            )
          ),
          p.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            calcMode: "linear",
            values: "0 50 50;360 50 50",
            keyTimes: "0;1",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite",
          })
        )
      )
    : null;
}
var ik = {};
Ne(ik, "MagnifyingGlass", () => ak);
function ak({
  visible: e = !0,
  height: t = "80",
  width: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "magnifying-glass-loading",
  glassColor: o = "#c0efff",
  color: c = "#e15b64",
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: n,
          height: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "magnifying-glass-svg",
          ...Pe,
        },
        p.createElement(
          "g",
          { transform: "translate(50,50)" },
          p.createElement(
            "g",
            {
              "ng-attr-transform": "scale({{config.scale}})",
              transform: "scale(0.82)",
            },
            p.createElement(
              "g",
              { transform: "translate(-50,-50)" },
              p.createElement(
                "g",
                { transform: "translate(16.3636 -20)" },
                p.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "translate",
                  calcMode: "linear",
                  values: "-20 -20;20 -20;0 20;-20 -20",
                  keyTimes: "0;0.33;0.66;1",
                  dur: "1s",
                  begin: "0s",
                  repeatCount: "indefinite",
                }),
                p.createElement("path", {
                  "ng-attr-fill": "{{config.glass}}",
                  d: "M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z",
                  fill: o,
                }),
                p.createElement("path", {
                  "ng-attr-fill": "{{config.frame}}",
                  d: "M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z",
                  fill: c,
                })
              )
            )
          )
        )
      )
    : null;
}
var ok = {};
Ne(ok, "ProgressBar", () => sk);
function sk({
  visible: e = !0,
  height: t = "80",
  width: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "progress-bar-loading",
  borderColor: o = "#F4442E",
  barColor: c = "#51E5FF",
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: n,
          height: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "progress-bar-svg",
          ...Pe,
        },
        p.createElement(
          "defs",
          null,
          p.createElement(
            "clipPath",
            {
              "ng-attr-id": "{{config.cpid}}",
              x: "0",
              y: "0",
              width: "100",
              height: "100",
              id: "lds-progress-cpid-5009611b8a418",
            },
            p.createElement(
              "rect",
              { x: "0", y: "0", width: "66.6667", height: "100" },
              p.createElement("animate", {
                attributeName: "width",
                calcMode: "linear",
                values: "0;100;100",
                keyTimes: "0;0.5;1",
                dur: "1",
                begin: "0s",
                repeatCount: "indefinite",
              }),
              p.createElement("animate", {
                attributeName: "x",
                calcMode: "linear",
                values: "0;0;100",
                keyTimes: "0;0.5;1",
                dur: "1",
                begin: "0s",
                repeatCount: "indefinite",
              })
            )
          )
        ),
        p.createElement("path", {
          fill: "none",
          "ng-attr-stroke": "{{config.c1}}",
          strokeWidth: "2.7928",
          d: "M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",
          stroke: o,
        }),
        p.createElement("path", {
          "ng-attr-fill": "{{config.c2}}",
          "ng-attr-clip-path": "url(#{{config.cpid}})",
          d: "M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",
          fill: c,
          clipPath: "url(#lds-progress-cpid-5009611b8a418)",
        })
      )
    : null;
}
var lk = {};
Ne(lk, "Radio", () => ck);
function ck({
  visible: e = !0,
  height: t = "80",
  width: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "radio-loading",
  colors: o = [Me, Me, Me],
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: n,
          height: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "radio-bar-svg",
          ...Pe,
        },
        p.createElement(
          "circle",
          {
            cx: "28",
            cy: "75",
            r: "11",
            "ng-attr-fill": "{{config.c1}}",
            fill: o[0],
          },
          p.createElement("animate", {
            attributeName: "fill-opacity",
            calcMode: "linear",
            values: "0;1;1",
            keyTimes: "0;0.2;1",
            dur: "1",
            begin: "0s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "path",
          {
            d: "M28 47A28 28 0 0 1 56 75",
            fill: "none",
            "ng-attr-stroke": "{{config.c2}}",
            strokeWidth: "10",
            stroke: o[1],
          },
          p.createElement("animate", {
            attributeName: "stroke-opacity",
            calcMode: "linear",
            values: "0;1;1",
            keyTimes: "0;0.2;1",
            dur: "1",
            begin: "0.1s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "path",
          {
            d: "M28 25A50 50 0 0 1 78 75",
            fill: "none",
            "ng-attr-stroke": "{{config.c3}}",
            strokeWidth: "10",
            stroke: o[2],
          },
          p.createElement("animate", {
            attributeName: "stroke-opacity",
            calcMode: "linear",
            values: "0;1;1",
            keyTimes: "0;0.2;1",
            dur: "1",
            begin: "0.2s",
            repeatCount: "indefinite",
          })
        )
      )
    : null;
}
var uk = {};
Ne(uk, "RotatingTriangles", () => dk);
function dk({
  visible: e = !0,
  height: t = "80",
  width: n = "80",
  wrapperClass: r = "",
  wrapperStyle: i = {},
  ariaLabel: a = "rotating-triangle-loading",
  colors: o = ["#1B5299", "#EF8354", "#DB5461"],
}) {
  return e
    ? p.createElement(
        "svg",
        {
          width: n,
          height: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          className: r,
          style: i,
          "aria-label": a,
          "data-testid": "rotating-triangle-svg",
          ...Pe,
        },
        p.createElement(
          "g",
          { transform: "translate(50,42)" },
          p.createElement(
            "g",
            { transform: "scale(0.8)" },
            p.createElement(
              "g",
              { transform: "translate(-50,-50)" },
              p.createElement(
                "polygon",
                {
                  "ng-attr-fill": "{{config.c1}}",
                  points: "72.5,50 50,11 27.5,50 50,50",
                  fill: o[0],
                  transform: "rotate(186 50 38.5)",
                },
                p.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  calcMode: "linear",
                  values: "0 50 38.5;360 50 38.5",
                  keyTimes: "0;1",
                  dur: "1s",
                  begin: "0s",
                  repeatCount: "indefinite",
                })
              ),
              p.createElement(
                "polygon",
                {
                  "ng-attr-fill": "{{config.c2}}",
                  points: "5,89 50,89 27.5,50",
                  fill: o[1],
                  transform: "rotate(186 27.5 77.5)",
                },
                p.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  calcMode: "linear",
                  values: "0 27.5 77.5;360 27.5 77.5",
                  keyTimes: "0;1",
                  dur: "1s",
                  begin: "0s",
                  repeatCount: "indefinite",
                })
              ),
              p.createElement(
                "polygon",
                {
                  "ng-attr-fill": "{{config.c3}}",
                  points: "72.5,50 50,89 95,89",
                  fill: o[2],
                  transform: "rotate(186 72.2417 77.5)",
                },
                p.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  calcMode: "linear",
                  values: "0 72.5 77.5;360 72 77.5",
                  keyTimes: "0;1",
                  dur: "1s",
                  begin: "0s",
                  repeatCount: "indefinite",
                })
              )
            )
          )
        )
      )
    : null;
}
var fk = {};
Ne(fk, "Vortex", () => hk);
const hk = ({
  visible: e = !0,
  height: t = "80",
  width: n = "80",
  ariaLabel: r = "vortex-loading",
  wrapperStyle: i,
  wrapperClass: a,
  colors: o = [
    "#1B5299",
    "#EF8354",
    "#DB5461",
    "#1B5299",
    "#EF8354",
    "#DB5461",
  ],
}) =>
  e
    ? p.createElement(
        "svg",
        {
          height: t,
          width: n,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
          "data-testid": "vortex-svg",
          "aria-label": r,
          style: i,
          className: a,
          ...Pe,
        },
        p.createElement(
          "g",
          { transform: "translate(50,50)" },
          p.createElement(
            "g",
            { transform: "scale(0.7)" },
            p.createElement(
              "g",
              { transform: "translate(-50,-50)" },
              p.createElement(
                "g",
                { transform: "rotate(137.831 50 50)" },
                p.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  repeatCount: "indefinite",
                  values: "360 50 50;0 50 50",
                  keyTimes: "0;1",
                  dur: "1",
                  keySplines: "0.5 0.5 0.5 0.5",
                  calcMode: "spline",
                }),
                p.createElement("path", {
                  fill: o[0],
                  d: "M30.4,9.7c-7.4,10.9-11.8,23.8-12.3,37.9c0.2,1,0.5,1.9,0.7,2.8c1.4-5.2,3.4-10.3,6.2-15.1 c2.6-4.4,5.6-8.4,9-12c0.7-0.7,1.4-1.4,2.1-2.1c7.4-7,16.4-12,26-14.6C51.5,3.6,40.2,4.9,30.4,9.7z",
                }),
                p.createElement("path", {
                  fill: o[1],
                  d: "M24.8,64.2c-2.6-4.4-4.5-9.1-5.9-13.8c-0.3-0.9-0.5-1.9-0.7-2.8c-2.4-9.9-2.2-20.2,0.4-29.8 C10.6,25.5,6,36,5.3,46.8C11,58.6,20,68.9,31.9,76.3c0.9,0.3,1.9,0.5,2.8,0.8C31,73.3,27.6,69,24.8,64.2z",
                }),
                p.createElement("path", {
                  fill: o[2],
                  d: "M49.6,78.9c-5.1,0-10.1-0.6-14.9-1.8c-1-0.2-1.9-0.5-2.8-0.8c-9.8-2.9-18.5-8.2-25.6-15.2 c2.8,10.8,9.5,20,18.5,26c13.1,0.9,26.6-1.7,38.9-8.3c0.7-0.7,1.4-1.4,2.1-2.1C60.7,78.2,55.3,78.9,49.6,78.9z",
                }),
                p.createElement("path", {
                  fill: o[3],
                  d: "M81.1,49.6c-1.4,5.2-3.4,10.3-6.2,15.1c-2.6,4.4-5.6,8.4-9,12c-0.7,0.7-1.4,1.4-2.1,2.1 c-7.4,7-16.4,12-26,14.6c10.7,3,22.1,1.7,31.8-3.1c7.4-10.9,11.8-23.8,12.3-37.9C81.6,51.5,81.4,50.6,81.1,49.6z",
                }),
                p.createElement("path", {
                  fill: o[4],
                  d: "M75.2,12.9c-13.1-0.9-26.6,1.7-38.9,8.3c-0.7,0.7-1.4,1.4-2.1,2.1c5.2-1.4,10.6-2.2,16.2-2.2 c5.1,0,10.1,0.6,14.9,1.8c1,0.2,1.9,0.5,2.8,0.8c9.8,2.9,18.5,8.2,25.6,15.2C90.9,28.1,84.2,18.9,75.2,12.9z",
                }),
                p.createElement("path", {
                  fill: o[5],
                  d: "M94.7,53.2C89,41.4,80,31.1,68.1,23.7c-0.9-0.3-1.9-0.5-2.8-0.8c3.8,3.8,7.2,8.1,10,13 c2.6,4.4,4.5,9.1,5.9,13.8c0.3,0.9,0.5,1.9,0.7,2.8c2.4,9.9,2.2,20.2-0.4,29.8C89.4,74.5,94,64,94.7,53.2z",
                })
              )
            )
          )
        )
      )
    : null;
var pk = {};
Ne(pk, "FallingLines", () => mk);
const mk = ({ color: e = Me, width: t = "100", visible: n = !0 }) =>
  n
    ? p.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: t,
          viewBox: "0 0 100 100",
          "data-testid": "falling-lines",
          ...Pe,
        },
        p.createElement(
          "rect",
          {
            y: "25",
            width: "10",
            height: "50",
            rx: "4",
            ry: "4",
            fill: e,
            "data-testid": "falling-lines-rect-1",
          },
          p.createElement("animate", {
            attributeName: "x",
            values: "10;100",
            dur: "1.2s",
            repeatCount: "indefinite",
          }),
          p.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 10 70",
            to: "-60 100 70",
            dur: "1.2s",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "opacity",
            values: "0;1;0",
            dur: "1.2s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "rect",
          { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: e },
          p.createElement("animate", {
            attributeName: "x",
            values: "10;100",
            dur: "1.2s",
            begin: "0.4s",
            repeatCount: "indefinite",
          }),
          p.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 10 70",
            to: "-60 100 70",
            dur: "1.2s",
            begin: "0.4s",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "opacity",
            values: "0;1;0",
            dur: "1.2s",
            begin: "0.4s",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "rect",
          {
            y: "25",
            width: "10",
            height: "50",
            rx: "4",
            ry: "4",
            fill: e,
            "data-testid": "falling-lines-rect-2",
          },
          p.createElement("animate", {
            attributeName: "x",
            values: "10;100",
            dur: "1.2s",
            begin: "0.8s",
            repeatCount: "indefinite",
          }),
          p.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 10 70",
            to: "-60 100 70",
            dur: "1.2s",
            begin: "0.8s",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "opacity",
            values: "0;1;0",
            dur: "1.2s",
            begin: "0.8s",
            repeatCount: "indefinite",
          })
        )
      )
    : null;
var gk = {};
Ne(gk, "Watch", () => vk);
const ft = (e) => ({ display: e ? "flex" : "none" }),
  vk = ({
    height: e = 80,
    width: t = 80,
    radius: n = 48,
    color: r = Me,
    ariaLabel: i = "watch-loading",
    wrapperStyle: a,
    wrapperClass: o,
    visible: c = !0,
  }) =>
    p.createElement(
      "div",
      {
        style: { ...ft(c), ...a },
        className: o,
        "data-testid": "watch-loading",
        "aria-label": i,
        ...Pe,
      },
      p.createElement(
        "svg",
        {
          width: t,
          height: e,
          version: "1.1",
          id: "L2",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100",
          enableBackground: "new 0 0 100 100",
          xmlSpace: "preserve",
          "data-testid": "watch-svg",
        },
        p.createElement("circle", {
          fill: "none",
          stroke: r,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          cx: "50",
          cy: "50",
          r: n,
        }),
        p.createElement(
          "line",
          {
            fill: "none",
            strokeLinecap: "round",
            stroke: r,
            strokeWidth: "4",
            strokeMiterlimit: "10",
            x1: "50",
            y1: "50",
            x2: "85",
            y2: "50.5",
          },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "2s",
            type: "rotate",
            from: "0 50 50",
            to: "360 50 50",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "line",
          {
            fill: "none",
            strokeLinecap: "round",
            stroke: r,
            strokeWidth: "4",
            strokeMiterlimit: "10",
            x1: "50",
            y1: "50",
            x2: "49.5",
            y2: "74",
          },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "15s",
            type: "rotate",
            from: "0 50 50",
            to: "360 50 50",
            repeatCount: "indefinite",
          })
        )
      )
    );
var yk = {};
Ne(yk, "Triangle", () => l1);
const wk = wf`
 to {
    stroke-dashoffset: 136;
  }
`,
  bk = Do.polygon`
  stroke-dasharray: 17;
  animation: ${wk} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,
  xk = Do.svg`
  transform-origin: 50% 65%;
`,
  l1 = ({
    height: e = 80,
    width: t = 80,
    color: n = Me,
    ariaLabel: r = "triangle-loading",
    wrapperStyle: i,
    wrapperClass: a,
    visible: o = !0,
  }) =>
    p.createElement(
      "div",
      {
        style: { ...ft(o), ...i },
        className: `${a}`,
        "data-testid": "triangle-loading",
        "aria-label": r,
        ...Pe,
      },
      p.createElement(
        xk,
        {
          id: "triangle",
          width: t,
          height: e,
          viewBox: "-3 -4 39 39",
          "data-testid": "triangle-svg",
        },
        p.createElement(bk, {
          fill: "transparent",
          stroke: n,
          strokeWidth: "1",
          points: "16,0 32,32 0,32",
        })
      )
    );
var Ek = {};
Ne(Ek, "ThreeDots", () => Ck);
const Ck = ({
  height: e = 80,
  width: t = 80,
  radius: n = 9,
  color: r = Me,
  ariaLabel: i = "three-dots-loading",
  wrapperStyle: a,
  wrapperClass: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...a },
      className: o,
      "data-testid": "three-dots-loading",
      "aria-label": i,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: r,
        "data-testid": "three-dots-svg",
      },
      p.createElement(
        "circle",
        { cx: "15", cy: "15", r: Number(n) + 6 },
        p.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "fill-opacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        {
          cx: "60",
          cy: "15",
          r: n,
          attributeName: "fill-opacity",
          from: "1",
          to: "0.3",
        },
        p.createElement("animate", {
          attributeName: "r",
          from: "9",
          to: "9",
          begin: "0s",
          dur: "0.8s",
          values: "9;15;9",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "fill-opacity",
          from: "0.5",
          to: "0.5",
          begin: "0s",
          dur: "0.8s",
          values: ".5;1;.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "105", cy: "15", r: Number(n) + 6 },
        p.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "fill-opacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      )
    )
  );
var kk = {};
Ne(kk, "ThreeCircles", () => Sk);
const Sk = ({
  wrapperStyle: e = {},
  visible: t = !0,
  wrapperClass: n = "",
  height: r = 100,
  width: i = 100,
  color: a = Me,
  ariaLabel: o = "three-circles-loading",
  outerCircleColor: c,
  innerCircleColor: u,
  middleCircleColor: h,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(t), ...e },
      className: n,
      "data-testid": "three-circles-wrapper",
      "aria-label": o,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        version: "1.1",
        height: `${r}`,
        width: `${i}`,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "data-testid": "three-circles-svg",
      },
      p.createElement(
        "path",
        {
          fill: c || a,
          d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "2s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "path",
        {
          fill: h || a,
          d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "-360 50 50",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "path",
        {
          fill: u || a,
          d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "2s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      )
    )
  );
var _k = {};
Ne(_k, "TailSpin", () => Tk);
const Tk = ({
  height: e = 80,
  width: t = 80,
  strokeWidth: n = 2,
  radius: r = 1,
  color: i = Me,
  ariaLabel: a = "tail-spin-loading",
  wrapperStyle: o,
  wrapperClass: c,
  visible: u = !0,
}) => {
  const h = parseInt(String(n)),
    g = h + 36,
    y = h / 2,
    b = y + parseInt(String(r)) - 1;
  return p.createElement(
    "div",
    {
      style: { ...ft(u), ...o },
      className: c,
      "data-testid": "tail-spin-loading",
      "aria-label": a,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: `0 0 ${g} ${g}`,
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "tail-spin-svg",
      },
      p.createElement(
        "defs",
        null,
        p.createElement(
          "linearGradient",
          { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
          p.createElement("stop", {
            stopColor: i,
            stopOpacity: "0",
            offset: "0%",
          }),
          p.createElement("stop", {
            stopColor: i,
            stopOpacity: ".631",
            offset: "63.146%",
          }),
          p.createElement("stop", { stopColor: i, offset: "100%" })
        )
      ),
      p.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        p.createElement(
          "g",
          { transform: `translate(${y} ${y})` },
          p.createElement(
            "path",
            {
              d: "M36 18c0-9.94-8.06-18-18-18",
              id: "Oval-2",
              stroke: i,
              strokeWidth: n,
            },
            p.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite",
            })
          ),
          p.createElement(
            "circle",
            { fill: "#fff", cx: "36", cy: "18", r: b },
            p.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite",
            })
          )
        )
      )
    )
  );
};
var Nk = {};
Ne(Nk, "RotatingLines", () => Lk);
const Ik = wf`
 to {
    transform: rotate(360deg);
  }
`,
  Pk = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330],
  Ak = Do.svg`
  animation: ${Ik} 0.75s steps(12, end) infinite;
  animation-duration: ${WC("speed", "0.75")}s;
`,
  Rk = Do.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
function Lk({
  strokeColor: e = Me,
  strokeWidth: t = "5",
  animationDuration: n = "0.75",
  width: r = "96",
  visible: i = !0,
  ariaLabel: a = "rotating-lines-loading",
}) {
  const o = D.useCallback(
    () =>
      Pk.map((c) =>
        p.createElement(Rk, {
          key: c,
          points: "24,12 24,4",
          width: t,
          transform: `rotate(${c}, 24, 24)`,
        })
      ),
    [t]
  );
  return i
    ? p.createElement(
        Ak,
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          width: r,
          stroke: e,
          speed: n,
          "data-testid": "rotating-lines-svg",
          "aria-label": a,
          ...Pe,
        },
        o()
      )
    : null;
}
var Ok = {};
Ne(Ok, "RotatingSquare", () => Mk);
const Mk = ({
  wrapperClass: e = "",
  color: t = Me,
  height: n = 100,
  width: r = 100,
  strokeWidth: i = 4,
  ariaLabel: a = "rotating-square-loading",
  wrapperStyle: o = {},
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...o },
      className: e,
      "data-testid": "rotating-square-wrapper",
      "aria-label": a,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        height: `${n}`,
        width: `${r}`,
        "data-testid": "rotating-square-svg",
        xmlSpace: "preserve",
      },
      p.createElement(
        "rect",
        {
          fill: "none",
          stroke: t,
          strokeWidth: i,
          x: "25",
          y: "25",
          width: "50",
          height: "50",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          dur: "0.5s",
          from: "0 50 50",
          to: "180 50 50",
          type: "rotate",
          id: "strokeBox",
          attributeType: "XML",
          begin: "rectBox.end",
        })
      ),
      p.createElement(
        "rect",
        { x: "27", y: "27", fill: t, width: "46", height: "50" },
        p.createElement("animate", {
          attributeName: "height",
          dur: "1.3s",
          attributeType: "XML",
          from: "50",
          to: "0",
          id: "rectBox",
          fill: "freeze",
          begin: "0s;strokeBox.end",
        })
      )
    )
  );
var Dk = {};
Ne(Dk, "Rings", () => jk);
const jk = ({
  height: e = 80,
  width: t = 80,
  radius: n = 6,
  color: r = Me,
  ariaLabel: i = "rings-loading",
  wrapperStyle: a,
  wrapperClass: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...a },
      className: o,
      "data-testid": "rings-loading",
      "aria-label": i,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: r,
        "data-testid": "rings-svg",
      },
      p.createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          transform: "translate(1 1)",
          strokeWidth: "2",
        },
        p.createElement(
          "circle",
          { cx: "22", cy: "22", r: n, strokeOpacity: "0" },
          p.createElement("animate", {
            attributeName: "r",
            begin: "1.5s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "1.5s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "stroke-width",
            begin: "1.5s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "circle",
          { cx: "22", cy: "22", r: n, strokeOpacity: "0" },
          p.createElement("animate", {
            attributeName: "r",
            begin: "3s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "3s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "strokeWidth",
            begin: "3s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "circle",
          { cx: "22", cy: "22", r: Number(n) + 2 },
          p.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        )
      )
    )
  );
var Bk = {};
Ne(Bk, "RevolvingDot", () => $k);
const $k = ({
  radius: e = 45,
  strokeWidth: t = 5,
  color: n = Me,
  secondaryColor: r,
  ariaLabel: i = "revolving-dot-loading",
  wrapperStyle: a,
  wrapperClass: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...a },
      className: o,
      "aria-label": i,
      "data-testid": "revolving-dot-loading",
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        version: "1.1",
        width: `calc(${e} * 2.5)`,
        height: `calc(${e} * 2.5)`,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "data-testid": "revolving-dot-svg",
      },
      p.createElement("circle", {
        fill: "none",
        stroke: r || n,
        strokeWidth: t,
        cx: `calc(${e} * 1.28)`,
        cy: `calc(${e} * 1.28)`,
        r: e,
        style: { opacity: 0.5 },
      }),
      p.createElement(
        "circle",
        {
          fill: n,
          stroke: n,
          strokeWidth: "3",
          cx: `calc(${e} * 1.28)`,
          cy: `calc(${e} / 3.5)`,
          r: `calc(${e} / 5)`,
          style: { transformOrigin: "50% 50%" },
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0",
          to: "360",
          repeatCount: "indefinite",
        })
      )
    )
  );
var zk = {};
Ne(zk, "Puff", () => Uk);
const Uk = ({
  height: e = 80,
  width: t = 80,
  radius: n = 1,
  color: r = Me,
  ariaLabel: i = "puff-loading",
  wrapperStyle: a,
  wrapperClass: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...a },
      className: o,
      "data-testid": "puff-loading",
      "aria-label": i,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: r,
        "data-testid": "puff-svg",
      },
      p.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
        p.createElement(
          "circle",
          { cx: "22", cy: "22", r: n },
          p.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "0s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "circle",
          { cx: "22", cy: "22", r: n },
          p.createElement("animate", {
            attributeName: "r",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite",
          }),
          p.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite",
          })
        )
      )
    )
  );
var Fk = {};
Ne(Fk, "Oval", () => Wk);
const jc = 20,
  Vk = (e) => ["M" + e + " 0c0-9.94-8.06", e, e, e].join("-"),
  Hk = (e, t, n) => {
    const r = Math.max(e, t),
      i = -n - r / 2 + 1,
      a = n * 2 + r;
    return [i, i, a, a].join(" ");
  },
  Wk = ({
    height: e = 80,
    width: t = 80,
    color: n = Me,
    secondaryColor: r = Me,
    ariaLabel: i = "oval-loading",
    wrapperStyle: a,
    wrapperClass: o,
    visible: c = !0,
    strokeWidth: u = 2,
    strokeWidthSecondary: h,
  }) =>
    p.createElement(
      "div",
      {
        style: { ...ft(c), ...a },
        className: o,
        "data-testid": "oval-loading",
        "aria-label": i,
        ...Pe,
      },
      p.createElement(
        "svg",
        {
          width: t,
          height: e,
          viewBox: Hk(Number(u), Number(h || u), jc),
          xmlns: "http://www.w3.org/2000/svg",
          stroke: n,
          "data-testid": "oval-svg",
        },
        p.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          p.createElement(
            "g",
            {
              transform: "translate(1 1)",
              strokeWidth: Number(h || u),
              "data-testid": "oval-secondary-group",
            },
            p.createElement("circle", {
              strokeOpacity: ".5",
              cx: "0",
              cy: "0",
              r: jc,
              stroke: r,
              strokeWidth: u,
            }),
            p.createElement(
              "path",
              { d: Vk(jc) },
              p.createElement("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 0 0",
                to: "360 0 0",
                dur: "1s",
                repeatCount: "indefinite",
              })
            )
          )
        )
      )
    );
var Kk = {};
Ne(Kk, "MutatingDots", () => Yk);
const Yk = ({
  height: e = 90,
  width: t = 80,
  radius: n = 12.5,
  color: r = Me,
  secondaryColor: i = Me,
  ariaLabel: a = "mutating-dots-loading",
  wrapperStyle: o,
  wrapperClass: c,
  visible: u = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(u), ...o },
      className: c,
      "data-testid": "mutating-dots-loading",
      "aria-label": a,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        id: "goo-loader",
        width: t,
        height: e,
        "data-testid": "mutating-dots-svg",
      },
      p.createElement(
        "filter",
        { id: "fancy-goo" },
        p.createElement("feGaussianBlur", {
          in: "SourceGraphic",
          stdDeviation: "6",
          result: "blur",
        }),
        p.createElement("feColorMatrix", {
          in: "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "goo",
        }),
        p.createElement("feComposite", {
          in: "SourceGraphic",
          in2: "goo",
          operator: "atop",
        })
      ),
      p.createElement(
        "g",
        { filter: "url(#fancy-goo)" },
        p.createElement("animateTransform", {
          id: "mainAnim",
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 50 50",
          to: "359 50 50",
          dur: "1.2s",
          repeatCount: "indefinite",
        }),
        p.createElement(
          "circle",
          { cx: "50%", cy: "40", r: n, fill: r },
          p.createElement("animate", {
            id: "cAnim1",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0;cAnim1.end+0.2s",
            calcMode: "spline",
            values: "40;20;40",
            keyTimes: "0;0.3;1",
            keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1",
          })
        ),
        p.createElement(
          "circle",
          { cx: "50%", cy: "60", r: n, fill: i },
          p.createElement("animate", {
            id: "cAnim2",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0.4s;cAnim2.end+0.2s",
            calcMode: "spline",
            values: "60;80;60",
            keyTimes: "0;0.3;1",
            keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1",
          })
        )
      )
    )
  );
var Gk = {};
Ne(Gk, "LineWave", () => qk);
const qk = ({
  wrapperStyle: e = {},
  visible: t = !0,
  wrapperClass: n = "",
  height: r = 100,
  width: i = 100,
  color: a = Me,
  ariaLabel: o = "line-wave-loading",
  firstLineColor: c,
  middleLineColor: u,
  lastLineColor: h,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(t), ...e },
      className: n,
      "data-testid": "line-wave-wrapper",
      "aria-label": o,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        version: "1.1",
        height: `${r}`,
        width: `${i}`,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 0 0",
        xmlSpace: "preserve",
        "data-testid": "line-wave-svg",
      },
      p.createElement(
        "rect",
        { x: "20", y: "50", width: "4", height: "10", fill: c || a },
        p.createElement("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "translate",
          values: "0 0; 0 20; 0 0",
          begin: "0",
          dur: "0.6s",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "30", y: "50", width: "4", height: "10", fill: u || a },
        p.createElement("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "translate",
          values: "0 0; 0 20; 0 0",
          begin: "0.2s",
          dur: "0.6s",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "40", y: "50", width: "4", height: "10", fill: h || a },
        p.createElement("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "translate",
          values: "0 0; 0 20; 0 0",
          begin: "0.4s",
          dur: "0.6s",
          repeatCount: "indefinite",
        })
      )
    )
  );
var Qk = {};
Ne(Qk, "InfinitySpin", () => eS);
const un = 242.776657104492,
  Xk = 1.6,
  Jk = wf`
  12.5% {
    stroke-dasharray: ${un * 0.14}px, ${un}px;
    stroke-dashoffset: -${un * 0.11}px;
  }
  43.75% {
    stroke-dasharray: ${un * 0.35}px, ${un}px;
    stroke-dashoffset: -${un * 0.35}px;
  }
  100% {
    stroke-dasharray: ${un * 0.01}px, ${un}px;
    stroke-dashoffset: -${un * 0.99}px;
  }
`,
  Zk = Do.path`
  stroke-dasharray: ${un * 0.01}px, ${un};
  stroke-dashoffset: 0;
  animation: ${Jk} ${Xk}s linear infinite;
`,
  eS = ({ color: e = Me, width: t = "200" }) =>
    p.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: `${t}`,
        height: `${Number(t) * 0.5}`,
        viewBox: `0 0 ${t} 100`,
        "data-testid": "infinity-spin",
      },
      p.createElement(Zk, {
        "data-testid": "infinity-spin-path-1",
        stroke: e,
        fill: "none",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z",
      }),
      p.createElement("path", {
        "data-testid": "infinity-spin-path-2",
        opacity: "0.07",
        fill: "none",
        stroke: e,
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z",
      })
    );
var tS = {};
Ne(tS, "Hearts", () => nS);
const nS = ({
  height: e = 80,
  width: t = 80,
  color: n = Me,
  ariaLabel: r = "hearts-loading",
  wrapperStyle: i,
  wrapperClass: a,
  visible: o = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(o), ...i },
      className: a,
      "data-testid": "hearts-loading",
      "aria-label": r,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        "data-testid": "hearts-svg",
      },
      p.createElement(
        "path",
        {
          d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5",
        },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "path",
        {
          d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5",
        },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0.7s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement("path", {
        d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z",
      })
    )
  );
var rS = {};
Ne(rS, "Grid", () => iS);
const iS = ({
  height: e = 80,
  width: t = 80,
  radius: n = 12.5,
  color: r = Me,
  ariaLabel: i = "grid-loading",
  wrapperStyle: a,
  wrapperClass: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...a },
      className: o,
      "data-testid": "grid-loading",
      "aria-label": i,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 105 105",
        fill: r,
        "data-testid": "grid-svg",
      },
      p.createElement(
        "circle",
        { cx: "12.5", cy: "12.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "12.5", cy: "52.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "100ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "52.5", cy: "12.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "300ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "52.5", cy: "52.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "600ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "92.5", cy: "12.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "800ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "92.5", cy: "52.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "400ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "12.5", cy: "92.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "700ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "52.5", cy: "92.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "500ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        { cx: "92.5", cy: "92.5", r: `${n}` },
        p.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "200ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      )
    )
  );
var aS = {};
Ne(aS, "CirclesWithBar", () => oS);
const oS = ({
  wrapperStyle: e = {},
  visible: t = !0,
  wrapperClass: n = "",
  height: r = 100,
  width: i = 100,
  color: a = Me,
  outerCircleColor: o,
  innerCircleColor: c,
  barColor: u,
  ariaLabel: h = "circles-with-bar-loading",
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(t), ...e },
      className: n,
      "aria-label": h,
      ...Pe,
      "data-testid": "circles-with-bar-wrapper",
    },
    p.createElement(
      "svg",
      {
        version: "1.1",
        id: "L1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        height: `${r}`,
        width: `${i}`,
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "data-testid": "circles-with-bar-svg",
      },
      p.createElement(
        "circle",
        {
          fill: "none",
          stroke: `${o || a}`,
          strokeWidth: "6",
          strokeMiterlimit: "15",
          strokeDasharray: "14.2472,14.2472",
          cx: "50",
          cy: "50",
          r: "47",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "5s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "circle",
        {
          fill: "none",
          stroke: `${c || a}`,
          strokeWidth: "1",
          strokeMiterlimit: "10",
          strokeDasharray: "10,10",
          cx: "50",
          cy: "50",
          r: "39",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "5s",
          from: "0 50 50",
          to: "-360 50 50",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "g",
        { fill: `${u || a}`, "data-testid": "circles-with-bar-svg-bar" },
        p.createElement(
          "rect",
          { x: "30", y: "35", width: "5", height: "30" },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.1",
          })
        ),
        p.createElement(
          "rect",
          { x: "40", y: "35", width: "5", height: "30" },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.2",
          })
        ),
        p.createElement(
          "rect",
          { x: "50", y: "35", width: "5", height: "30" },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.3",
          })
        ),
        p.createElement(
          "rect",
          { x: "60", y: "35", width: "5", height: "30" },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.4",
          })
        ),
        p.createElement(
          "rect",
          { x: "70", y: "35", width: "5", height: "30" },
          p.createElement("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.5",
          })
        )
      )
    )
  );
var sS = {};
Ne(sS, "Circles", () => lS);
const lS = ({
  height: e = 80,
  width: t = 80,
  color: n = Me,
  ariaLabel: r = "circles-loading",
  wrapperStyle: i,
  wrapperClass: a,
  visible: o = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(o), ...i },
      className: a,
      "aria-label": r,
      "data-testid": "circles-loading",
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        "data-testid": "circles-svg",
      },
      p.createElement(
        "path",
        {
          d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "-360 67 67",
          dur: "2.5s",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "path",
        {
          d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",
        },
        p.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "360 67 67",
          dur: "8s",
          repeatCount: "indefinite",
        })
      )
    )
  );
var cS = {};
Ne(cS, "Bars", () => uS);
const uS = ({
  height: e = 80,
  width: t = 80,
  color: n = Me,
  ariaLabel: r = "bars-loading",
  wrapperStyle: i,
  wrapperClass: a,
  visible: o = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(o), ...i },
      className: a,
      "data-testid": "bars-loading",
      "aria-label": r,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        width: t,
        height: e,
        fill: n,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "bars-svg",
      },
      p.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        p.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        p.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        p.createElement("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        p.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      ),
      p.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        p.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        p.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        })
      )
    )
  );
var dS = {};
Ne(dS, "BallTriangle", () => fS);
const fS = ({
  height: e = 100,
  width: t = 100,
  radius: n = 5,
  color: r = Me,
  ariaLabel: i = "ball-triangle-loading",
  wrapperClass: a,
  wrapperStyle: o,
  visible: c = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(c), ...o },
      className: a,
      "data-testid": "ball-triangle-loading",
      "aria-label": i,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        height: e,
        width: t,
        stroke: r,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "ball-triangle-svg",
      },
      p.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        p.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          p.createElement(
            "circle",
            { cx: "5", cy: "50", r: n },
            p.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;5;50;50",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            p.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              values: "5;27;49;5",
              calcMode: "linear",
              repeatCount: "indefinite",
            })
          ),
          p.createElement(
            "circle",
            { cx: "27", cy: "5", r: n },
            p.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              from: "5",
              to: "5",
              values: "5;50;50;5",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            p.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              from: "27",
              to: "27",
              values: "27;49;5;27",
              calcMode: "linear",
              repeatCount: "indefinite",
            })
          ),
          p.createElement(
            "circle",
            { cx: "49", cy: "50", r: n },
            p.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;50;5;50",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            p.createElement("animate", {
              attributeName: "cx",
              from: "49",
              to: "49",
              begin: "0s",
              dur: "2.2s",
              values: "49;5;27;49",
              calcMode: "linear",
              repeatCount: "indefinite",
            })
          )
        )
      )
    )
  );
var hS = {};
Ne(hS, "Audio", () => pS);
const pS = ({
  height: e = "100",
  width: t = "100",
  color: n = Me,
  ariaLabel: r = "audio-loading",
  wrapperStyle: i = {},
  wrapperClass: a,
  visible: o = !0,
}) =>
  p.createElement(
    "div",
    {
      style: { ...ft(o), ...i },
      className: a,
      "data-testid": "audio-loading",
      "aria-label": r,
      ...Pe,
    },
    p.createElement(
      "svg",
      {
        height: `${e}`,
        width: `${t}`,
        fill: n,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "audio-svg",
      },
      p.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 80)" },
        p.createElement(
          "rect",
          { width: "10", height: "20", rx: "3" },
          p.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "4.3s",
            values:
              "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          p.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "80;55;33;5;75;23;73;33;12;14;60;80",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          p.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "1.4s",
            values: "50;34;78;23;56;23;34;76;80;54;21;50",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        p.createElement(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          p.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "30;45;13;80;56;72;45;76;34;23;67;30",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        )
      )
    )
  );
var mS = {};
Ne(mS, "DNA", () => gS);
const gS = ({
    visible: e = !0,
    width: t = "80",
    height: n = "80",
    wrapperClass: r = "",
    wrapperStyle: i = {},
    ariaLabel: a = "dna-loading",
  }) =>
    e
      ? p.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: t,
            height: n,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            className: r,
            style: i,
            "aria-label": a,
            "data-testid": "dna-svg",
            ...Pe,
          },
          p.createElement(
            "circle",
            {
              cx: "6.451612903225806",
              cy: "60.6229",
              r: "3.41988",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.5s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "0s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.5s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "6.451612903225806",
              cy: "39.3771",
              r: "2.58012",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.5s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.5s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "16.129032258064512",
              cy: "68.1552",
              r: "3.17988",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.7s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.2s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.7s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "16.129032258064512",
              cy: "31.8448",
              r: "2.82012",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.7s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.2s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.7s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "25.806451612903224",
              cy: "69.3634",
              r: "2.93988",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.9s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.4s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.9s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "25.806451612903224",
              cy: "30.6366",
              r: "3.06012",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.9s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.4s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.9s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "35.48387096774193",
              cy: "65.3666",
              r: "2.69988",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.1s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.6s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.1s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "35.48387096774193",
              cy: "34.6334",
              r: "3.30012",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.1s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.6s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.1s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "45.16129032258064",
              cy: "53.8474",
              r: "2.45988",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.3s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-0.8s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.3s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "45.16129032258064",
              cy: "46.1526",
              r: "3.54012",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.3s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.8s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.3s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "54.838709677419345",
              cy: "39.3771",
              r: "2.58012",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.5s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.5s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "54.838709677419345",
              cy: "60.6229",
              r: "3.41988",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.5s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.5s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "64.51612903225805",
              cy: "31.8448",
              r: "2.82012",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.7s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.2s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.7s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "64.51612903225805",
              cy: "68.1552",
              r: "3.17988",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.7s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.2s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.7s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "74.19354838709677",
              cy: "30.6366",
              r: "3.06012",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.9s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.4s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.9s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "74.19354838709677",
              cy: "69.3634",
              r: "2.93988",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.9s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.4s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.9s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "83.87096774193547",
              cy: "34.6334",
              r: "3.30012",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.1s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.6s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.1s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "83.87096774193547",
              cy: "65.3666",
              r: "2.69988",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-3.1s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.6s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.1s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "93.54838709677418",
              cy: "46.1526",
              r: "3.54012",
              fill: "rgba(233, 12, 89, 0.5125806451612902)",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.3s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-1.8s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values:
                "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.3s",
            })
          ),
          p.createElement(
            "circle",
            {
              cx: "93.54838709677418",
              cy: "53.8474",
              r: "2.45988",
              fill: "#46dff0",
            },
            p.createElement("animate", {
              attributeName: "r",
              keyTimes: "0;0.5;1",
              values:
                "2.4000000000000004;3.5999999999999996;2.4000000000000004",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-3.3s",
            }),
            p.createElement("animate", {
              attributeName: "cy",
              keyTimes: "0;0.5;1",
              values: "30.5;69.5;30.5",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.8s",
              keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
              calcMode: "spline",
            }),
            p.createElement("animate", {
              attributeName: "fill",
              keyTimes: "0;0.5;1",
              values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
              dur: "2s",
              repeatCount: "indefinite",
              begin: "-2.3s",
            })
          )
        )
      : null,
  vS = () =>
    m.jsx("div", {
      className: "h-screen w-full flex items-center justify-center",
      children: m.jsx(l1, {
        height: "100",
        width: "100",
        color: "#f89223",
        ariaLabel: "triangle-loading",
        visible: !0,
      }),
    }),
  yS = ({ children: e }) => {
    const { user: t, loading: n } = D.useContext(da),
      r = Dr();
    return n
      ? m.jsx(vS, {})
      : t
      ? e
      : m.jsx(s3, { to: "/login", state: { from: r }, replace: !0 });
  },
  wS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX////qQzU0qFNChfT7vAUxffTQ4PI4gPSdu/ixyPr7ugDqQDH7uAD/vQDqPzDpOioaokMrpk3pNiUopUv86ejpMB3pMR7pLBdDg/zU6tkRoT/4xsP97+773tzpOCf1raj8wgDB4ciXzqTd7+EzqkWj06761tTyl5LrTD/zo57tYVf++PfsWU7+89r914X/9+hdtnPy+fRsvH/yk43taV/wiIHsVUnoJgz2ubX+7cjpNzf//fX+6sD80W/i7PZCh+1OsWcWp1d/q+60271RsmnvenLucmr4zMn1s6/+57L3pAD7wi3uZDryhDT8yEj3pCjsVjzwdTn1lTD5ryPyhzX93JT1ly78zmRcl+250fBRkuj81n3924/94aeRs/OWuuzo2ZeWsTpdrE3UuSeytTZ/sEfnuxtYrE/V4/XLuC1wou2otDyGxpU/i9s8lLk4now+kMk6mp82onQ7l6s3oIA9k745nJJuvr5FAAAK4UlEQVR4nO2baXvbxhGAIYiyYoEHCIhESUqkSQriJSckJcpKndi0qctVz7Ru7BzumTR12ab37y8OHiCJXcwusIulyvdDrueJgNczmJk9JEkbNmzYsGHDhg3R0Dk4Ll3cVloNh1arclEqHR904n6tKOgcllpXJ82ykdcsyhmHctn653zeyDTbg9bFYdzvSM3BTeWqaeS0clpRtvxR0pmyljPOB7drp9kpnZ5r+XIGpbYkmtFymbPWcdxvDeaw1TbyQLk56XI+d317EPfLB3N8upUrpwntZpZari225PGpkiMO3rKkcXYhaJHtVJph9WaRvBLwm9wfaFoUei4Z4/w2bqNFjq+NTGR6DoqWa4jzRZbaOdragqOcH4jhWDrPs/CzyRgCON6c5KL7/Hwc8414C+vhmcHSz6acb8XndzAwWOWnF615E5NgRYu4fqJQjOs4PsfDkzwfP5uMUeEu2OKSoHPyJ/tc/fabGlc/i7TBs+LcMu0QKPJtXl9j5zoXg59FOl/iIniocCqhPhinHARvmfd4HNoJ80wdxJShU9IZtkvHTpt7DV1GMViuHPe34vsE5+QGzASPqbeYIkUxWDX/mydx1pgZSpqVYMmI281BybASvBVEkFkEK4II3vsIMhO8EERwU2RouXkSt5sDuwjuxz6pOSgaK8EO8giXK+wiKJ2IMaox+walq3LccjYMI1iJeT3owjCCx0L0CYaCnUgOdafvmXYu09h/SRP9WIYpKp1FsuJV0vatmUz7anDaaLUap6eDq5OMe9MG9L+zi6BUCb9xb9+VaV63SqtXguzbUk0j+OyDZQQPw1aZdNnYOi3hdsf2L67y+Ls37Bq9RTPcR5gx2hXI290MFPQpMssISo0w05qilRvwy2o3qJsOLL9B6TBEo0jnzi/InnbQKPvcVmEqGGJaS+fOKE5tO5X0ctKwFaSuo0quTbstXcksjIhsBQ9oP0KtGeaA6NRzM4etoDSg6/WhzzH329PcUcpMBSnLjBbBWfStG0ambcKiTVNmlCeRHETvn2uMG71FiWaayTSjuq3dMNJsv0FJOqeYZvLX0T2/lGcsWKLoFEaD7TtFS5P8K2R6bhk5r37UJPRTcnFdPaPjLpH48Q+JBPMC3svG8HEykXj0EwJFJbdmv/Ly072EpfgzuKGxXhGUHlshtBWTPweG0eBzUyk6Pt1LuDz6BUhxvaqoxdOpoKX4a4CitlZ90ObrZGKu+MvATM2cxf3CxNzNY2gTkKnKlqC/o4TmcXJBMPHoM6zikzUroxYfLobQztQm2nH9PkJJSiwb4jI1fRL365LzcXJVMPHoVwhFZhfMGPKlTwidTL0vOSr5+Tn4jOLKVtxvS8FyJcVmam7dpjWb10hDaxRfytR1LDOTZQVKcWkUX7NFr8tTdAgdR++iMd2O+21p+ARvaI3iax7C1YFmRXE2iivncb8sFXdBhonZgKMRng+KwVOA4HTRqMX9slT4jmz+mZrh8QtI0YPphsuZaqzZ7tqEzyFZ6oTxs/WsM74rJwSvqR/y7AFbnmGeHdDvvSQfUxs+3GHLG8yz0WP3CnvUgtLD3W2m7GKe/QpsuPepuIY7mDT9CvwZJl8JbPgW/WxwKU0kPxLXcPcD9LMhM5ubpAl6QfaG79HPhkYwsfe5wIbbz5GPBk2lbpLSd0MOhjvIR38ELqXJT4Q2RBZT2NztGNL3ex6GD1CPDlrgewxDCLI33EW2C3jDD1NKORj+BvXor6GGe3diG74LbximWXAwRDZE8Po3zFTKw/AL1KPBY+nel0Ibols+3PDDjeHaG34ltuF2eEPBY4g0hNdSwQ2RWXpfusX/s+F9mWm2kR0fPHmLPpciDeGrpxC7pTxiiJxLCdaHT0U2RE/e8C1vsdf46NUT/NhC7H0a9Ar4vuy17T5EPht8uCb2filmWx93XWjRUOQ9b8xe2/ySfnCaCnxugTt8en0vzp4we9735PwQc25BcgYc4kNkbog75uZzjs/6dO0l5uHwuxjJ34priG6H8EPgVOp3Q3rDnV0qoIa4U27oCjGV+P0LtU5r+OADKl5CFXE3FYDna6k/yLKs12gNKXm7AzXsYX4KaDJN/eWFbCtyc3N5B40hpllIkLsKqcQ3jqCsVjmpTXgOFMSWUsAd4dS38pQhF7Epz6BJij4fdQha5qf++GJmqBY4yTm8BRea77A/B78InmWoQ7bLSc7hDVAQe63NBreAsjLUI8g3iD1okmJnNhvMrnDqzwt+fIMIHoTQWxgTkMN3KvXNkiDXcgqtpLjl7wTEaJr69k8rghY85Gy+Aycptt87+PeLlQx14TbYvAdPpUGfof/gZg3avoKyXKSeTokAN8Pgz1DyS1N70PYXlLND5nY24Kk7qBs6rKSpM2ij4JKn8BAGDKUuy9V0MmijKHJoim/AIURv6HtZmL4XxxhfAotXWMDrJkivsPEugz2DNgr2fR/st42+o7CAZzb1DtqxfYrwTgFM0vnWt98Y44c6YilIkKPAJJ3VGsQY40OR4fT2jGRnDlJJHZwFBmKM8Y8iu4IKHki3Ye3exZpr0GMMX0V4o9gO2GVb5A6eoWwVXxJ8hNhfJVnmFW6MQSiy+BbfkQiC64wDWQAdimbMgvA6YzNSyRXVccSCRCkasJu/ypDcUFa7kQ5wb8gEyUIoSVWKIMpZObp68+w54REVvFVM6GYpFOViVBMcySQzgfQRBZogWkPqMJJV/3tiQeIQStKYKohWGMMXnOrzHxBHkDiEktTT6QxlPRtuEq93i/JfSRV3cAe/KEy6PLVQh/Ttvz4uWslz9DdCRcJCOmFImae24yWdY72vug89+p6olBL2wtnjitSGclYdkudqtavO/lD1IUm7CN4l9adG+ym676iOSdpjvaar3qTJHv0dnKkEi4olwgjKTiBrMMl6bVhc+eM8+gdQEbp54fdg6mIzRVfV/gjbInv1UV9VfbPl6J+wTKUrMy709XROVlflvlmtrwytvXrVHA91VUdWtCyobRCtmlagG958LHW1qMrd/nhcM2vj8bjfla3/gJGbAGgbAVcTgqDu+/6iFrqu23+D/skdfb8dlKmhBK35NETLiAR9+AU2jOFy1CaKTzEc2LaxQ19HZ/QjTVQqRXTbQP8GEAkhpreoFNFtg7rXe+nFbohsG+E/QpfwjT88R//yUdwhX/YiiL2g2or/XmkbJFvAQVQFUNSXMzWaKjPFFEBRPvrPgmKYcVRYxf96FSMpo8IpztvGbtSCIgw3sj3ZTgYcyMWZ9VScDDi7LAQlaSRCojptg5Eg5WlG5FgDTvTf4JQ6eF3H1JDlfcHeMPaVhj5kfAurH3Omqn22fha1WOtNZOd3OAqB+0fMyHK6Wt7rxpSpOvuLkFPiaf6R34XAUZe519Qs2xuCq/AuOBHf9IBQ4NkauQfQxVR5FdVin3sAXXp9Lo6qzPm3Ob0ULplXVV2N/sYcEVWZqWNWHceUoB5G7ByzxT6f3zsKYjRk8j1mVUH8bKrdYtSOelGA/PRSH+sR9sesKtfE8rPpmUP/GwfE6MVujP0BS30sh5bU1UtTvPB5KNTk4AsIKLK6OjTFqS5I6uZlkcJSV4vdddBz6VVrl7ibMqux0y9rVaGT04dewezLVjB1zBZk1nJTi/LYLKyb3YxefWSOu1b1t9HnOP+eHXbHZnV95bz0evVCtToyzZqNaY6q1UK9dy/UNmzYsGHDhg1C8D/J9batc1Yi+wAAAABJRU5ErkJggg==";
function bS(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function xS(e) {
  return yn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
const ES = () => {
    var N, S;
    const {
        googleSignIn: e,
        githubSignIn: t,
        twitterSignIn: n,
        facebookSignIn: r,
        singIn: i,
      } = D.useContext(da),
      a = Nl(),
      c =
        ((S = (N = Dr().state) == null ? void 0 : N.from) == null
          ? void 0
          : S.pathname) || "/",
      u = (k) => {
        k.preventDefault();
        const I = k.target,
          w = I.email.value;
        console.log(w);
        const v = I.password.value;
        console.log(w, v),
          i(w, v)
            .then((E) => {
              E.user, I.reset(), a(c, { replace: !0 }), a("/");
            })
            .catch((E) => {
              alert(E.message, { position: "top-center", autoClose: 4e3 });
            });
      },
      h = () => {
        e()
          .then((k) => {
            k.user, a("/");
          })
          .catch((k) => {
            console.log(k);
          });
      },
      g = () => {
        t()
          .then((k) => {
            k.user, a("/");
          })
          .catch((k) => {
            console.log(k);
          });
      },
      y = () => {
        n()
          .then((k) => {
            const I = k.user;
            console.log(I);
          })
          .catch((k) => {
            console.log(k);
          });
      },
      b = () => {
        r();
      };
    return m.jsx("section", {
      className:
        " flex flex-col items-center justify-center pt-64 pb-20 bg-slate-700",
      children: m.jsxs("div", {
        className:
          "container w-full md:w-[450px] bg-white p-8 rounded-lg shadow-2xl",
        children: [
          m.jsx("h2", {
            className: "text-3xl text-slate-800 font-bold text-center mb-5",
            children: "Please Login",
          }),
          m.jsxs("form", {
            onSubmit: u,
            children: [
              m.jsxs("div", {
                className: " rounded-md shadow-sm flex flex-col gap-4",
                children: [
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-lg font-medium text-slate-900",
                        children: "Email :",
                      }),
                      m.jsx("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        required: !0,
                        placeholder: "Email Address",
                        className:
                          "py-2 pl-2 rounded-lg outline-orange-400 w-full  ",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-lg font-medium text-slate-900 ",
                        children: "Password :",
                      }),
                      m.jsx("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        required: !0,
                        placeholder: "Password",
                        className:
                          "py-2 pl-2 rounded-lg outline-orange-400 w-full",
                      }),
                      m.jsx("p", { children: "Forget password" }),
                    ],
                  }),
                ],
              }),
              m.jsx("div", {
                className: "text-center ",
                children: m.jsx("button", {
                  type: "submit",
                  className:
                    "mt-7 text-2xl bg-orange-400 py-3 rounded-lg w-full text-white font-semibold shadow-2xl hover:bg-orange-700",
                  children: "Login",
                }),
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex gap-5 items-center my-6",
            children: [
              m.jsx("span", {
                className: "border-b  w-full ml-8 text-slate-400",
              }),
              m.jsx("p", { children: "OR" }),
              m.jsx("span", {
                className: "border-b  w-full mr-8 text-slate-400 ",
              }),
            ],
          }),
          m.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-3 gap-5   ",
            children: [
              m.jsxs("button", {
                onClick: h,
                className: "flex gap-1 shadow-xl rounded-lg p-3",
                children: [
                  m.jsx("img", { className: "w-[25px]", src: wS, alt: "" }),
                  " Google",
                ],
              }),
              m.jsxs("button", {
                onClick: g,
                className: "flex er gap-1 shadow-xl rounded-lg p-3",
                children: [m.jsx(bS, { className: "text-2xl" }), "GitHub"],
              }),
              m.jsxs("button", {
                onClick: b,
                className: "flex  gap-1 shadow-xl rounded-lg p-3",
                children: [
                  m.jsx(V3, { className: "text-2xl text-blue" }),
                  " Facebook",
                ],
              }),
              m.jsxs("button", {
                onClick: y,
                className: "flex  gap-1 shadow-xl rounded-lg p-3 ",
                children: [
                  m.jsx(xS, { className: "text-2xl text-blue" }),
                  " Twitter",
                ],
              }),
            ],
          }),
          m.jsx("p", {
            className: "text-center mt-8 text-zinc-700",
            children: m.jsx(bt, {
              to: "/signUp",
              children: " New to Byte Cafe!! Register Now",
            }),
          }),
        ],
      }),
    });
  },
  CS = () => {
    const { signUp: e } = D.useContext(da),
      t = Nl(),
      n = (r) => {
        r.preventDefault();
        const i = r.target;
        i.name.value;
        const a = i.email.value,
          o = i.password.value,
          c = i.confirmPassword.value;
        if (
          (e(a, o)
            .then((u) => {
              const h = u.user;
              console.log(h), i.reset(), t("/");
            })
            .catch((u) => {
              console.error(u.message);
            }),
          o < 6)
        ) {
          alert("the password is less then 6 ");
          return;
        }
        if (o !== c) {
          alert("Password doesn't match");
          return;
        }
      };
    return m.jsx("section", {
      className:
        " flex flex-col items-center justify-center pt-40 pb-20 bg-slate-700",
      children: m.jsxs("div", {
        className:
          "container w-full md:w-[450px] bg-white p-8 rounded-lg shadow-2xl",
        children: [
          m.jsx("h2", {
            className: "text-3xl text-slate-800 font-bold text-center mb-5",
            children: "Sign Up",
          }),
          m.jsxs("form", {
            onSubmit: n,
            children: [
              m.jsxs("div", {
                className: " shadow-sm flex flex-col gap-4",
                children: [
                  m.jsx("p", {
                    className: "text-lg font-medium text-slate-900",
                    children: "Name :",
                  }),
                  m.jsx("input", {
                    type: "text",
                    name: "name",
                    id: "",
                    required: !0,
                    placeholder: "Name",
                    className: "py-2 pl-2 rounded-lg outline-orange-400  ",
                  }),
                  m.jsx("p", {
                    className: "text-lg font-medium text-slate-900",
                    children: "Email :",
                  }),
                  m.jsx("input", {
                    type: "email",
                    name: "email",
                    id: "",
                    required: !0,
                    placeholder: "Email Address",
                    className: "py-2 pl-2 rounded-lg outline-orange-400  ",
                  }),
                  m.jsx("p", {
                    className: "text-lg font-medium text-slate-900 ",
                    children: "Password :",
                  }),
                  m.jsx("input", {
                    type: "password",
                    name: "password",
                    id: "",
                    required: !0,
                    placeholder: "Password",
                    className: "py-2 pl-2 rounded-lg outline-orange-400",
                  }),
                  m.jsx("p", {
                    className: "text-lg font-medium text-slate-900 ",
                    children: "Confirm Password :",
                  }),
                  m.jsx("input", {
                    type: "password",
                    name: "confirmPassword",
                    id: "",
                    required: !0,
                    placeholder: "Password",
                    className: "py-2 pl-2 rounded-lg outline-orange-400",
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        htmlFor: "photoUrl",
                        className: "text-lg font-medium text-slate-900",
                        children: "Photo URL :",
                      }),
                      m.jsx("input", {
                        id: "photoUrl",
                        name: "photo_Url",
                        type: "text",
                        placeholder: "Photo URL",
                        className:
                          "w-full py-2 pl-3 rounded-lg outline-orange-400",
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx("div", {
                className: "text-center ",
                children: m.jsx("button", {
                  className:
                    "mt-7 text-2xl bg-orange-400 py-3 rounded-lg w-full text-white font-semibold shadow-2xl hover:bg-orange-700",
                  children: "Login",
                }),
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex gap-5 items-center my-6",
            children: [
              m.jsx("span", {
                className: "border-b  w-full ml-8 text-slate-400",
              }),
              m.jsx("p", { children: "OR" }),
              m.jsx("span", {
                className: "border-b  w-full mr-8 text-slate-400 ",
              }),
            ],
          }),
          m.jsx("p", {
            className: "text-center mt-8 text-zinc-700",
            children: m.jsx(bt, {
              to: "/login",
              children: " Already have an account!! Login ",
            }),
          }),
        ],
      }),
    });
  },
  kS =
    "data:image/jpeg;base64,UklGRvoMAABXRUJQVlA4WAoAAAAgAAAAaQEAuwAAVlA4INwMAABwSACdASpqAbwAPp1KoEwlpCMiI7UqGLATiWlu/HA5VOtQwP04/u/ox8AfyH9ryUTWHmb/KvvN+38uf9t4N/Fj/I9QL8Z/oP+g3m2bD1Bfc76j+tf4zelT/W+hviAfmdxwnovsCfo7/u+nj9Wfkz7dPqH/0e4f+tn/Y9dv2N/vH7Qn7gEDbU2ChegIU/lQuQ2uNqbBQvQEKfyoXIbToR3/lZfeyGf8wW1eoolrzg43JQvQEKcGIAw63CxtTN4+aYjcBKpFMInZQbdw9D/a0kTd81ceXsbfy+xr4mw9SDHcO6GcXVBAZnTUGav1xsnxLopKA6tBBP14uSF0uMGhfMgnA2XtyuLxjlHz1Nu+N+ASFBxwL3HPEPKAQWHdrX7LRqQ7maKDkZ60p89HWnqM0aNT2+fVSzRIM47N7HxJqAdqepr4yrwSYShZFljnyDCVl6c0posoFRkM6JO5SqX2GBqc8J2W+oob0o03ug2OFuP3vmPtm7xzlZVnVCkGCjNXYdjvJ9ZXP5SVYC7sbG13X+W0uFeTFsC1cUUInMC9G1hzYX/FGNIDsMMqe6Dp0NPlC8ThtoZHdSF2wUL0FDWu/v0h0/giL/vtte2KdxHTBazb+GuLMVrV+uNqbBQvQD6Wvy+zBUx9Vku01Ux5O9zljjsqDz2qnCVWcuFmLL9HrX3vmkMBURhpB+Uy2vluyoyT5W2j+qhuXuNASGblY/iQYVfkY6hchtcYfpW9ze5vc3rh40MLKhchtcbU2ChegIU/lQuQ2uNqbBQvQEKfeAAA/v9OGABdHNRtV2aIY9fjpZNUK4Ma7VuRMNJFyo2At2lsABgKbPnyTq9ChsGichDSuRhWxBgpwzsdyDAteLLhf6KsqFpCqVOs6oucuI3o9YvuMBLpYgnyNc5MV4XZYTibXZgl94dIGSYunV6RhwOP0GHVpD/aQM8u4305XrAUKKHzd9VNgaDMO7IxLi+gCEVCWDEddQ6AW/XjQvxMVDbCBOFlkNZ9SPJtcmCpq3LLyAPcqSKyFOD3c8qnYuUiWVPhXlUlTMQ5UxmO1mFdPCchYtOB3EXANLrYBHDmiL3V/hbDO8lXcQTqimXRFhMcFZawVyD6umke4yWCEOVqwlq3Dtj7W1zLTsZSV+dM5r8A0TgO5iDtUAbsg9RexkIFze9Kgk5uWzEVIsuqwvm7KFB8jzWRjuN4Kf8VetBNx2W9yqq5MJyuDIBYvNbyJhE3JEXGRpTXobrmUYu66f6kwrLRUavR1OBiyxnNR/p78CkBtF0BDMBQTdWkhsSq65KQxkTh5xolR+3Ffta+Phd/wTyVYwOJA1P63YzS1c4PjvnmRfz9V1XGWRG/NQO0zR3AXPsg1TCEuYesTTle6/VuE2p6xFZ84XwXFi25/gY6NKIBe74vdnLI1zAdVUDWR55W/Zyv1fsdBjiEjQNRCR4eQTboF8fecAwLhH9Fin7/9vdkT2kH30Dok/lAkOOpj40FnhhTKLiqCkH08mCfAAKC3l6w3V8QnOhfB13lb0FhxSEcM3xPU+PBOlFbhmEZ1tRdikKEO+e33ncE79QdnXnHhkIv95qofqS+YcrxyoUpvTLikK7Sq2eyFal8TnMNgZqClHFjA3dgdPoPujTianPIFU3KM1JsSu4LlW+RFzE2w7WkNe7ED5kVxNiB+M9opMH7MKnjEJ1sCSERmV3+Ddou3ACccmpBY1bGqthXIXvX/nO5foJ/EQBK2c28HP5QCLL1MgXbQToRfweDChfIZA86FlGpwSA3Xj8HNrt9srYZCKrngKd98s+vWfI+8ZGAkEQTQaPUR+Ql+hmsYLbHIJnFc4nf8eXXQnlBqyhl/+eBKTv0ZrRg5W5hIUy43pXr20Z6wbjMG7lp78Kj8sekVFVItb80rzzpgpK0mi11P+Z9bVqV70YpSt6xN2z7ZgUJoM3eYDVOv99zt1inq8NnqfKDu4e6cyqcM0zuTJ03e/Vp/5cZ5OhhIN06aLdyv3BSkMSy5GCtsVkHotZKnQ5SpcBQZK7P+iyUr88aEe/5kb7HBYkjVay/v16YlVjIfFiNDUKqj9Q3GZkwZLhsbAsekL63sBupot/rr34LFbIiczoeKpJ5K5cql2a3SxxJQO1LOmCB4DOXi7trfWsKa0NzPCG1NWxlKpLT6byWN6/QJwVQz73OYPIi1NLJtapQt+IG1+bHdsLvZnZ+y5swwEGtPLjt41DBq1uw1nRlJCTIm5jJDwbzcT0tKH9rstSe4dc8FF7Q5r6e+irxR3+3K1YhLZKB/5G72eG0zlD26mHFX+Bw8nPXr53txZWKvrByGIuxovvlLV9E3KHvWQln/4qdAbuAAHrcHPTQ3SKATefti6M3uGMR41cEVCEQsW/qlQtyC658QHXpQez/n2ufkqmywc9zqTMO99F4eseO9G/ADMbtW9tcri8hRJb+4O/Cz04+qIJ7rFQ14RIbj+DuEiZ1ViOpmfjz+iTst3rgDQgLFPYHrxM74w/4Rh5UvhGtPhVZlX6vhF2AeiON+xwpu50Xq8BJWtn9D7zpMl+DwzPOcLzReKaC7s53+ZJG+AdOcbLk5deGiJue408VN+17hF4dLyrJPSpWUkwFwyCwNZQYSXkvcVAsnOhMVFW6cp3D9Ym9RGJmAjLZ17+XmwNOpESL4GprtA+DlzccJWpDt6TyKR4gnPjhYM/piBNHI3CeNMF+XeUPOEL20rVSIXj6HhrM6ISDH17eY34IMfMtmN0kBhHJmGBg2Kv4oKxKLLrCI/jsmQYH9zDJkNIYm4efya97ARzPc4zM7XlNN4NI5UWhKUJmciAqhUmrlNFvgWttdWbjqd9gfabdK+3fV4glTqxOJI0KQKmVt2YnNDZiXSN2vvVk9UlC5VDRwsguWSCtTsM+W2ls7gq7L5Vito7A3E8nHVksQN9lAC/qco459IiWbejBOuZRz1jI0alqPtzqK3zb7BaKSjpAWQMANkPd4TcS1txsXJ05SwTbMi62f9XgmCE/VlMyFcbkBBzgb5L2vAOhkmQ91wZXFzp/zFYQY1x7aQe4NHGEDDZBuQ1u1RjDEMwMHwS/DgB72qvfB5wo+4RwbJkqWu6OviFYegL34XEC614umoTAGZWrQbOUgDB+tWEf5BJZtT/OZQm2tUwPEcKVoaoKaYwIcyktctst3kU9EcaYN1sA/I4T+plrZ7Uk1W/S48c2TuTESfkIpFUORfndf1Ex1FomQpyKjsFufXV3YwQWRLbZHx7x/s8g0mt0dZNg3tM4e6Xs1V4XpfJoKW1p/d6mITsgSMAPvks+f2gWM+Pb2aJy8CMxTAWa64c9JdncEUCkxRtd7c//OpqcLZujc6+NWGWH9bZaFEUpKrImToJEmgdFkCFXvBR1PAZ4f3R1rF057GyXN1f+Ih/1AP3cf4fz+NF/LGf8YdQD3pZY8txmjDgL3XZzqNZb3PBTkgPJtHEYfbtyyYODappe22Fo4fwU/b5EbJ2MjnNTOKTud0N82qYjXbdU423JeF8MTLS95sZ82R6TX7jC6y0wXC36UpFVDiHIYZ1HOO99e4xCjLJ9PHHXJPgPdO6SNR0PHqKuyINbjX66yRhzTDRuwaoxIN+LDwR2YMGE+ebRsAVQhs4960TqLYYAt+9BflSqg/W7FngyPyhVWFZMpQ15TkT1wKs4brgq+OC83JHhxuaufnmGy4PxsxPwhHA77gHCYIcivu6GrhHaYrN6C7dhAXGZTwK5m4zap9C2d8kqj/hhf5fFYH55zYc5t8U+VpdT2o8T7P9rgavCX8CbAwZ67veBg7xQTvJf8RuzQzi7len9rRPL1ARszyCYAbeCAstlBVJWfAuePgkoAygtanm75whqGBENI6oipPWjphBlCL0KwOh4unvMN9yATheBeMdbY0DVcr/nbED+hopP/knmbTlC1h4VAJGUTHvz7mk2JyYp7IM8xYQyVbXBMATGWMN5SD/rB9HiOZLwWm+7D3MpxJ0sJVtCdxfACQx9S07AelTnYod14gcffSQoYox3F7rZ0NddLpHP07M/n44IkO+ag2HDOZdwsf++3y6TAXfDg1rsYp06h5fX4ea55LQQkW8JwnIaotcKI5CZpM7X9QkeZp2DU/G5ypcu58HVY/0ZN4S9dXGe5v1v2/V5xYkhS9fftTOS3NxHpr5EgbNowjVowLVXh3shbyhB8XFcqbhiAQD53321jRX+9fmxseYzYh+VYyh7w96NIwY8+Si/e3loA3dPizXu+sP8g6pxB3JTHJVqu1WpDNPyKeXAGHDcqszTPgNpsukffW9BNfS6tOSsM1YOGZ7l5fPsC3RNs7OA5p3n+UsYAZ1SE/hOKUY3D+bwFt0xbqe3gcasCMd7lq1iQA/U5wEfCv1b4zWbRB5CwkxgAAAAAAAA",
  SS = () =>
    m.jsx("div", {
      className: "grid justify-center items-center py-24 md:py-52 ",
      children: m.jsxs("div", {
        children: [
          m.jsx("img", { className: "w-[250px] my-9", src: kS, alt: "" }),
          m.jsx("div", {
            className: "text-center",
            children: m.jsx(bt, {
              className:
                "bg-orange-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-orange-600 ",
              to: "/",
              children: "Back to Home",
            }),
          }),
        ],
      }),
    });
var c1 = { exports: {} };
/*!
 * sweetalert2 v11.10.1
 * Released under the MIT License.
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(sr, function () {
    function n(f, s) {
      var l =
        f == null
          ? null
          : (typeof Symbol < "u" && f[Symbol.iterator]) || f["@@iterator"];
      if (l != null) {
        var d,
          x,
          M,
          X,
          ge = [],
          xe = !0,
          Fe = !1;
        try {
          if (((M = (l = l.call(f)).next), s === 0)) {
            if (Object(l) !== l) return;
            xe = !1;
          } else
            for (
              ;
              !(xe = (d = M.call(l)).done) &&
              (ge.push(d.value), ge.length !== s);
              xe = !0
            );
        } catch (ya) {
          (Fe = !0), (x = ya);
        } finally {
          try {
            if (!xe && l.return != null && ((X = l.return()), Object(X) !== X))
              return;
          } finally {
            if (Fe) throw x;
          }
        }
        return ge;
      }
    }
    function r(f) {
      "@babel/helpers - typeof";
      return (
        (r =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (s) {
                return typeof s;
              }
            : function (s) {
                return s &&
                  typeof Symbol == "function" &&
                  s.constructor === Symbol &&
                  s !== Symbol.prototype
                  ? "symbol"
                  : typeof s;
              }),
        r(f)
      );
    }
    function i(f, s) {
      if (!(f instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(f, s) {
      for (var l = 0; l < s.length; l++) {
        var d = s[l];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          "value" in d && (d.writable = !0),
          Object.defineProperty(f, te(d.key), d);
      }
    }
    function o(f, s, l) {
      return (
        s && a(f.prototype, s),
        l && a(f, l),
        Object.defineProperty(f, "prototype", { writable: !1 }),
        f
      );
    }
    function c(f, s) {
      if (typeof s != "function" && s !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (f.prototype = Object.create(s && s.prototype, {
        constructor: { value: f, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(f, "prototype", { writable: !1 }),
        s && h(f, s);
    }
    function u(f) {
      return (
        (u = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (l) {
              return l.__proto__ || Object.getPrototypeOf(l);
            }),
        u(f)
      );
    }
    function h(f, s) {
      return (
        (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (d, x) {
              return (d.__proto__ = x), d;
            }),
        h(f, s)
      );
    }
    function g() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function y(f, s, l) {
      return (
        g()
          ? (y = Reflect.construct.bind())
          : (y = function (x, M, X) {
              var ge = [null];
              ge.push.apply(ge, M);
              var xe = Function.bind.apply(x, ge),
                Fe = new xe();
              return X && h(Fe, X.prototype), Fe;
            }),
        y.apply(null, arguments)
      );
    }
    function b(f) {
      if (f === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return f;
    }
    function N(f, s) {
      if (s && (typeof s == "object" || typeof s == "function")) return s;
      if (s !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return b(f);
    }
    function S(f) {
      var s = g();
      return function () {
        var d = u(f),
          x;
        if (s) {
          var M = u(this).constructor;
          x = Reflect.construct(d, arguments, M);
        } else x = d.apply(this, arguments);
        return N(this, x);
      };
    }
    function k(f, s) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(f, s) && ((f = u(f)), f !== null);

      );
      return f;
    }
    function I() {
      return (
        typeof Reflect < "u" && Reflect.get
          ? (I = Reflect.get.bind())
          : (I = function (s, l, d) {
              var x = k(s, l);
              if (x) {
                var M = Object.getOwnPropertyDescriptor(x, l);
                return M.get
                  ? M.get.call(arguments.length < 3 ? s : d)
                  : M.value;
              }
            }),
        I.apply(this, arguments)
      );
    }
    function w(f, s) {
      return L(f) || n(f, s) || C(f, s) || $();
    }
    function v(f) {
      return E(f) || A(f) || C(f) || B();
    }
    function E(f) {
      if (Array.isArray(f)) return O(f);
    }
    function L(f) {
      if (Array.isArray(f)) return f;
    }
    function A(f) {
      if (
        (typeof Symbol < "u" && f[Symbol.iterator] != null) ||
        f["@@iterator"] != null
      )
        return Array.from(f);
    }
    function C(f, s) {
      if (f) {
        if (typeof f == "string") return O(f, s);
        var l = Object.prototype.toString.call(f).slice(8, -1);
        if (
          (l === "Object" && f.constructor && (l = f.constructor.name),
          l === "Map" || l === "Set")
        )
          return Array.from(f);
        if (
          l === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
        )
          return O(f, s);
      }
    }
    function O(f, s) {
      (s == null || s > f.length) && (s = f.length);
      for (var l = 0, d = new Array(s); l < s; l++) d[l] = f[l];
      return d;
    }
    function B() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function $() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function K(f, s) {
      if (typeof f != "object" || f === null) return f;
      var l = f[Symbol.toPrimitive];
      if (l !== void 0) {
        var d = l.call(f, s || "default");
        if (typeof d != "object") return d;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (s === "string" ? String : Number)(f);
    }
    function te(f) {
      var s = K(f, "string");
      return typeof s == "symbol" ? s : String(s);
    }
    function re(f, s) {
      var l = ye(f, s, "get");
      return Se(f, l);
    }
    function Z(f, s, l) {
      var d = ye(f, s, "set");
      return ht(f, d, l), l;
    }
    function ye(f, s, l) {
      if (!s.has(f))
        throw new TypeError(
          "attempted to " + l + " private field on non-instance"
        );
      return s.get(f);
    }
    function Se(f, s) {
      return s.get ? s.get.call(f) : s.value;
    }
    function ht(f, s, l) {
      if (s.set) s.set.call(f, l);
      else {
        if (!s.writable)
          throw new TypeError("attempted to set read only private field");
        s.value = l;
      }
    }
    function we(f, s) {
      if (s.has(f))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    }
    function F(f, s, l) {
      we(f, s), s.set(f, l);
    }
    var ee = 100,
      z = {},
      fe = function () {
        z.previousActiveElement instanceof HTMLElement
          ? (z.previousActiveElement.focus(), (z.previousActiveElement = null))
          : document.body && document.body.focus();
      },
      H = function (s) {
        return new Promise(function (l) {
          if (!s) return l();
          var d = window.scrollX,
            x = window.scrollY;
          (z.restoreFocusTimeout = setTimeout(function () {
            fe(), l();
          }, ee)),
            window.scrollTo(d, x);
        });
      },
      G = "swal2-",
      Y = [
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error",
      ],
      _ = Y.reduce(function (f, s) {
        return (f[s] = G + s), f;
      }, {}),
      R = ["success", "warning", "info", "question", "error"],
      me = R.reduce(function (f, s) {
        return (f[s] = G + s), f;
      }, {}),
      W = "SweetAlert2:",
      Oe = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
      le = function (s) {
        console.warn(
          "".concat(W, " ").concat(r(s) === "object" ? s.join(" ") : s)
        );
      },
      ie = function (s) {
        console.error("".concat(W, " ").concat(s));
      },
      oe = [],
      Je = function (s) {
        oe.includes(s) || (oe.push(s), le(s));
      },
      pt = function (s, l) {
        Je(
          '"'
            .concat(
              s,
              '" is deprecated and will be removed in the next major release. Please use "'
            )
            .concat(l, '" instead.')
        );
      },
      he = function (s) {
        return typeof s == "function" ? s() : s;
      },
      Ze = function (s) {
        return s && typeof s.toPromise == "function";
      },
      Ee = function (s) {
        return Ze(s) ? s.toPromise() : Promise.resolve(s);
      },
      Ye = function (s) {
        return s && Promise.resolve(s) === s;
      },
      Ge = function () {
        return document.body.querySelector(".".concat(_.container));
      },
      Ue = function (s) {
        var l = Ge();
        return l ? l.querySelector(s) : null;
      },
      We = function (s) {
        return Ue(".".concat(s));
      },
      Ce = function () {
        return We(_.popup);
      },
      rt = function () {
        return We(_.icon);
      },
      ne = function () {
        return We(_["icon-content"]);
      },
      Ae = function () {
        return We(_.title);
      },
      wn = function () {
        return We(_["html-container"]);
      },
      on = function () {
        return We(_.image);
      },
      Lt = function () {
        return We(_["progress-steps"]);
      },
      $t = function () {
        return We(_["validation-message"]);
      },
      zt = function () {
        return Ue(".".concat(_.actions, " .").concat(_.confirm));
      },
      Rn = function () {
        return Ue(".".concat(_.actions, " .").concat(_.cancel));
      },
      bn = function () {
        return Ue(".".concat(_.actions, " .").concat(_.deny));
      },
      Vl = function () {
        return We(_["input-label"]);
      },
      Ln = function () {
        return Ue(".".concat(_.loader));
      },
      xn = function () {
        return We(_.actions);
      },
      fa = function () {
        return We(_.footer);
      },
      rr = function () {
        return We(_["timer-progress-bar"]);
      },
      ha = function () {
        return We(_.close);
      },
      jo = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      pa = function () {
        var s = Ce();
        if (!s) return [];
        var l = s.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          d = Array.from(l).sort(function (X, ge) {
            var xe = parseInt(X.getAttribute("tabindex") || "0"),
              Fe = parseInt(ge.getAttribute("tabindex") || "0");
            return xe > Fe ? 1 : xe < Fe ? -1 : 0;
          }),
          x = s.querySelectorAll(jo),
          M = Array.from(x).filter(function (X) {
            return X.getAttribute("tabindex") !== "-1";
          });
        return v(new Set(d.concat(M))).filter(function (X) {
          return yt(X);
        });
      },
      fi = function () {
        return (
          j(document.body, _.shown) &&
          !j(document.body, _["toast-shown"]) &&
          !j(document.body, _["no-backdrop"])
        );
      },
      hi = function () {
        var s = Ce();
        return s ? j(s, _.toast) : !1;
      },
      T = function () {
        var s = Ce();
        return s ? s.hasAttribute("data-loading") : !1;
      },
      P = function (s, l) {
        if (((s.textContent = ""), l)) {
          var d = new DOMParser(),
            x = d.parseFromString(l, "text/html"),
            M = x.querySelector("head");
          M &&
            Array.from(M.childNodes).forEach(function (ge) {
              s.appendChild(ge);
            });
          var X = x.querySelector("body");
          X &&
            Array.from(X.childNodes).forEach(function (ge) {
              ge instanceof HTMLVideoElement || ge instanceof HTMLAudioElement
                ? s.appendChild(ge.cloneNode(!0))
                : s.appendChild(ge);
            });
        }
      },
      j = function (s, l) {
        if (!l) return !1;
        for (var d = l.split(/\s+/), x = 0; x < d.length; x++)
          if (!s.classList.contains(d[x])) return !1;
        return !0;
      },
      q = function (s, l) {
        Array.from(s.classList).forEach(function (d) {
          !Object.values(_).includes(d) &&
            !Object.values(me).includes(d) &&
            !Object.values(l.showClass || {}).includes(d) &&
            s.classList.remove(d);
        });
      },
      Q = function (s, l, d) {
        if ((q(s, l), l.customClass && l.customClass[d])) {
          if (
            typeof l.customClass[d] != "string" &&
            !l.customClass[d].forEach
          ) {
            le(
              "Invalid type of customClass."
                .concat(d, '! Expected string or iterable object, got "')
                .concat(r(l.customClass[d]), '"')
            );
            return;
          }
          V(s, l.customClass[d]);
        }
      },
      ve = function (s, l) {
        if (!l) return null;
        switch (l) {
          case "select":
          case "textarea":
          case "file":
            return s.querySelector(".".concat(_.popup, " > .").concat(_[l]));
          case "checkbox":
            return s.querySelector(
              ".".concat(_.popup, " > .").concat(_.checkbox, " input")
            );
          case "radio":
            return (
              s.querySelector(
                ".".concat(_.popup, " > .").concat(_.radio, " input:checked")
              ) ||
              s.querySelector(
                "."
                  .concat(_.popup, " > .")
                  .concat(_.radio, " input:first-child")
              )
            );
          case "range":
            return s.querySelector(
              ".".concat(_.popup, " > .").concat(_.range, " input")
            );
          default:
            return s.querySelector(".".concat(_.popup, " > .").concat(_.input));
        }
      },
      se = function (s) {
        if ((s.focus(), s.type !== "file")) {
          var l = s.value;
          (s.value = ""), (s.value = l);
        }
      },
      ae = function (s, l, d) {
        !s ||
          !l ||
          (typeof l == "string" && (l = l.split(/\s+/).filter(Boolean)),
          l.forEach(function (x) {
            Array.isArray(s)
              ? s.forEach(function (M) {
                  d ? M.classList.add(x) : M.classList.remove(x);
                })
              : d
              ? s.classList.add(x)
              : s.classList.remove(x);
          }));
      },
      V = function (s, l) {
        ae(s, l, !0);
      },
      ce = function (s, l) {
        ae(s, l, !1);
      },
      De = function (s, l) {
        for (var d = Array.from(s.children), x = 0; x < d.length; x++) {
          var M = d[x];
          if (M instanceof HTMLElement && j(M, l)) return M;
        }
      },
      ue = function (s, l, d) {
        d === "".concat(parseInt(d)) && (d = parseInt(d)),
          d || parseInt(d) === 0
            ? (s.style[l] = typeof d == "number" ? "".concat(d, "px") : d)
            : s.style.removeProperty(l);
      },
      pe = function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "flex";
        s && (s.style.display = l);
      },
      Te = function (s) {
        s && (s.style.display = "none");
      },
      Ct = function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "block";
        s &&
          new MutationObserver(function () {
            Gt(s, s.innerHTML, l);
          }).observe(s, { childList: !0, subtree: !0 });
      },
      it = function (s, l, d, x) {
        var M = s.querySelector(l);
        M && (M.style[d] = x);
      },
      Gt = function (s, l) {
        var d =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : "flex";
        l ? pe(s, d) : Te(s);
      },
      yt = function (s) {
        return !!(
          s &&
          (s.offsetWidth || s.offsetHeight || s.getClientRects().length)
        );
      },
      ir = function () {
        return !yt(zt()) && !yt(bn()) && !yt(Rn());
      },
      sn = function (s) {
        return s.scrollHeight > s.clientHeight;
      },
      En = function (s) {
        var l = window.getComputedStyle(s),
          d = parseFloat(l.getPropertyValue("animation-duration") || "0"),
          x = parseFloat(l.getPropertyValue("transition-duration") || "0");
        return d > 0 || x > 0;
      },
      zr = function (s) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          d = rr();
        d &&
          yt(d) &&
          (l && ((d.style.transition = "none"), (d.style.width = "100%")),
          setTimeout(function () {
            (d.style.transition = "width ".concat(s / 1e3, "s linear")),
              (d.style.width = "0%");
          }, 10));
      },
      ma = function () {
        var s = rr();
        if (s) {
          var l = parseInt(window.getComputedStyle(s).width);
          s.style.removeProperty("transition"), (s.style.width = "100%");
          var d = parseInt(window.getComputedStyle(s).width),
            x = (l / d) * 100;
          s.style.width = "".concat(x, "%");
        }
      },
      pi = function () {
        return typeof window > "u" || typeof document > "u";
      },
      ar = `
 <div aria-labelledby="`
        .concat(_.title, '" aria-describedby="')
        .concat(_["html-container"], '" class="')
        .concat(
          _.popup,
          `" tabindex="-1">
   <button type="button" class="`
        )
        .concat(
          _.close,
          `"></button>
   <ul class="`
        )
        .concat(
          _["progress-steps"],
          `"></ul>
   <div class="`
        )
        .concat(
          _.icon,
          `"></div>
   <img class="`
        )
        .concat(
          _.image,
          `" />
   <h2 class="`
        )
        .concat(_.title, '" id="')
        .concat(
          _.title,
          `"></h2>
   <div class="`
        )
        .concat(_["html-container"], '" id="')
        .concat(
          _["html-container"],
          `"></div>
   <input class="`
        )
        .concat(_.input, '" id="')
        .concat(
          _.input,
          `" />
   <input type="file" class="`
        )
        .concat(
          _.file,
          `" />
   <div class="`
        )
        .concat(
          _.range,
          `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`
        )
        .concat(_.select, '" id="')
        .concat(
          _.select,
          `"></select>
   <div class="`
        )
        .concat(
          _.radio,
          `"></div>
   <label class="`
        )
        .concat(
          _.checkbox,
          `">
     <input type="checkbox" id="`
        )
        .concat(
          _.checkbox,
          `" />
     <span class="`
        )
        .concat(
          _.label,
          `"></span>
   </label>
   <textarea class="`
        )
        .concat(_.textarea, '" id="')
        .concat(
          _.textarea,
          `"></textarea>
   <div class="`
        )
        .concat(_["validation-message"], '" id="')
        .concat(
          _["validation-message"],
          `"></div>
   <div class="`
        )
        .concat(
          _.actions,
          `">
     <div class="`
        )
        .concat(
          _.loader,
          `"></div>
     <button type="button" class="`
        )
        .concat(
          _.confirm,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          _.deny,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          _.cancel,
          `"></button>
   </div>
   <div class="`
        )
        .concat(
          _.footer,
          `"></div>
   <div class="`
        )
        .concat(
          _["timer-progress-bar-container"],
          `">
     <div class="`
        )
        .concat(
          _["timer-progress-bar"],
          `"></div>
   </div>
 </div>
`
        )
        .replace(/(^|\n)\s*/g, ""),
      mi = function () {
        var s = Ge();
        return s
          ? (s.remove(),
            ce(
              [document.documentElement, document.body],
              [_["no-backdrop"], _["toast-shown"], _["has-column"]]
            ),
            !0)
          : !1;
      },
      _e = function () {
        z.currentInstance.resetValidationMessage();
      },
      Be = function () {
        var s = Ce(),
          l = De(s, _.input),
          d = De(s, _.file),
          x = s.querySelector(".".concat(_.range, " input")),
          M = s.querySelector(".".concat(_.range, " output")),
          X = De(s, _.select),
          ge = s.querySelector(".".concat(_.checkbox, " input")),
          xe = De(s, _.textarea);
        (l.oninput = _e),
          (d.onchange = _e),
          (X.onchange = _e),
          (ge.onchange = _e),
          (xe.oninput = _e),
          (x.oninput = function () {
            _e(), (M.value = x.value);
          }),
          (x.onchange = function () {
            _e(), (M.value = x.value);
          });
      },
      qt = function (s) {
        return typeof s == "string" ? document.querySelector(s) : s;
      },
      gi = function (s) {
        var l = Ce();
        l.setAttribute("role", s.toast ? "alert" : "dialog"),
          l.setAttribute("aria-live", s.toast ? "polite" : "assertive"),
          s.toast || l.setAttribute("aria-modal", "true");
      },
      Hl = function (s) {
        window.getComputedStyle(s).direction === "rtl" && V(Ge(), _.rtl);
      },
      h1 = function (s) {
        var l = mi();
        if (pi()) {
          ie("SweetAlert2 requires document to initialize");
          return;
        }
        var d = document.createElement("div");
        (d.className = _.container), l && V(d, _["no-transition"]), P(d, ar);
        var x = qt(s.target);
        x.appendChild(d), gi(s), Hl(x), Be();
      },
      Wl = function (s, l) {
        s instanceof HTMLElement
          ? l.appendChild(s)
          : r(s) === "object"
          ? p1(s, l)
          : s && P(l, s);
      },
      p1 = function (s, l) {
        s.jquery ? m1(l, s) : P(l, s.toString());
      },
      m1 = function (s, l) {
        if (((s.textContent = ""), 0 in l))
          for (var d = 0; d in l; d++) s.appendChild(l[d].cloneNode(!0));
        else s.appendChild(l.cloneNode(!0));
      },
      Ur = (function () {
        if (pi()) return !1;
        var f = document.createElement("div");
        return typeof f.style.webkitAnimation < "u"
          ? "webkitAnimationEnd"
          : typeof f.style.animation < "u"
          ? "animationend"
          : !1;
      })(),
      g1 = function (s, l) {
        var d = xn(),
          x = Ln();
        !d ||
          !x ||
          (!l.showConfirmButton && !l.showDenyButton && !l.showCancelButton
            ? Te(d)
            : pe(d),
          Q(d, l, "actions"),
          v1(d, x, l),
          P(x, l.loaderHtml || ""),
          Q(x, l, "loader"));
      };
    function v1(f, s, l) {
      var d = zt(),
        x = bn(),
        M = Rn();
      !d ||
        !x ||
        !M ||
        (Kl(d, "confirm", l),
        Kl(x, "deny", l),
        Kl(M, "cancel", l),
        y1(d, x, M, l),
        l.reverseButtons &&
          (l.toast
            ? (f.insertBefore(M, d), f.insertBefore(x, d))
            : (f.insertBefore(M, s),
              f.insertBefore(x, s),
              f.insertBefore(d, s))));
    }
    function y1(f, s, l, d) {
      if (!d.buttonsStyling) {
        ce([f, s, l], _.styled);
        return;
      }
      V([f, s, l], _.styled),
        d.confirmButtonColor &&
          ((f.style.backgroundColor = d.confirmButtonColor),
          V(f, _["default-outline"])),
        d.denyButtonColor &&
          ((s.style.backgroundColor = d.denyButtonColor),
          V(s, _["default-outline"])),
        d.cancelButtonColor &&
          ((l.style.backgroundColor = d.cancelButtonColor),
          V(l, _["default-outline"]));
    }
    function Kl(f, s, l) {
      var d = Oe(s);
      Gt(f, l["show".concat(d, "Button")], "inline-block"),
        P(f, l["".concat(s, "ButtonText")] || ""),
        f.setAttribute("aria-label", l["".concat(s, "ButtonAriaLabel")] || ""),
        (f.className = _[s]),
        Q(f, l, "".concat(s, "Button"));
    }
    var w1 = function (s, l) {
        var d = ha();
        d &&
          (P(d, l.closeButtonHtml || ""),
          Q(d, l, "closeButton"),
          Gt(d, l.showCloseButton),
          d.setAttribute("aria-label", l.closeButtonAriaLabel || ""));
      },
      b1 = function (s, l) {
        var d = Ge();
        d &&
          (x1(d, l.backdrop),
          E1(d, l.position),
          C1(d, l.grow),
          Q(d, l, "container"));
      };
    function x1(f, s) {
      typeof s == "string"
        ? (f.style.background = s)
        : s || V([document.documentElement, document.body], _["no-backdrop"]);
    }
    function E1(f, s) {
      s &&
        (s in _
          ? V(f, _[s])
          : (le(
              'The "position" parameter is not valid, defaulting to "center"'
            ),
            V(f, _.center)));
    }
    function C1(f, s) {
      s && V(f, _["grow-".concat(s)]);
    }
    var $e = { innerParams: new WeakMap(), domCache: new WeakMap() },
      k1 = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea",
      ],
      S1 = function (s, l) {
        var d = Ce();
        if (d) {
          var x = $e.innerParams.get(s),
            M = !x || l.input !== x.input;
          k1.forEach(function (X) {
            var ge = De(d, _[X]);
            ge &&
              (N1(X, l.inputAttributes), (ge.className = _[X]), M && Te(ge));
          }),
            l.input && (M && _1(l), I1(l));
        }
      },
      _1 = function (s) {
        if (s.input) {
          if (!at[s.input]) {
            ie(
              "Unexpected type of input! Expected "
                .concat(Object.keys(at).join(" | "), ', got "')
                .concat(s.input, '"')
            );
            return;
          }
          var l = bf(s.input),
            d = at[s.input](l, s);
          pe(l),
            s.inputAutoFocus &&
              setTimeout(function () {
                se(d);
              });
        }
      },
      T1 = function (s) {
        for (var l = 0; l < s.attributes.length; l++) {
          var d = s.attributes[l].name;
          ["id", "type", "value", "style"].includes(d) || s.removeAttribute(d);
        }
      },
      N1 = function (s, l) {
        var d = ve(Ce(), s);
        if (d) {
          T1(d);
          for (var x in l) d.setAttribute(x, l[x]);
        }
      },
      I1 = function (s) {
        var l = bf(s.input);
        r(s.customClass) === "object" && V(l, s.customClass.input);
      },
      Yl = function (s, l) {
        (!s.placeholder || l.inputPlaceholder) &&
          (s.placeholder = l.inputPlaceholder);
      },
      ga = function (s, l, d) {
        if (d.inputLabel) {
          var x = document.createElement("label"),
            M = _["input-label"];
          x.setAttribute("for", s.id),
            (x.className = M),
            r(d.customClass) === "object" && V(x, d.customClass.inputLabel),
            (x.innerText = d.inputLabel),
            l.insertAdjacentElement("beforebegin", x);
        }
      },
      bf = function (s) {
        return De(Ce(), _[s] || _.input);
      },
      Bo = function (s, l) {
        ["string", "number"].includes(r(l))
          ? (s.value = "".concat(l))
          : Ye(l) ||
            le(
              'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                r(l),
                '"'
              )
            );
      },
      at = {};
    (at.text =
      at.email =
      at.password =
      at.number =
      at.tel =
      at.url =
      at.search =
      at.date =
      at["datetime-local"] =
      at.time =
      at.week =
      at.month =
        function (f, s) {
          return (
            Bo(f, s.inputValue), ga(f, f, s), Yl(f, s), (f.type = s.input), f
          );
        }),
      (at.file = function (f, s) {
        return ga(f, f, s), Yl(f, s), f;
      }),
      (at.range = function (f, s) {
        var l = f.querySelector("input"),
          d = f.querySelector("output");
        return (
          Bo(l, s.inputValue),
          (l.type = s.input),
          Bo(d, s.inputValue),
          ga(l, f, s),
          f
        );
      }),
      (at.select = function (f, s) {
        if (((f.textContent = ""), s.inputPlaceholder)) {
          var l = document.createElement("option");
          P(l, s.inputPlaceholder),
            (l.value = ""),
            (l.disabled = !0),
            (l.selected = !0),
            f.appendChild(l);
        }
        return ga(f, f, s), f;
      }),
      (at.radio = function (f) {
        return (f.textContent = ""), f;
      }),
      (at.checkbox = function (f, s) {
        var l = ve(Ce(), "checkbox");
        (l.value = "1"), (l.checked = !!s.inputValue);
        var d = f.querySelector("span");
        return P(d, s.inputPlaceholder), l;
      }),
      (at.textarea = function (f, s) {
        Bo(f, s.inputValue), Yl(f, s), ga(f, f, s);
        var l = function (x) {
          return (
            parseInt(window.getComputedStyle(x).marginLeft) +
            parseInt(window.getComputedStyle(x).marginRight)
          );
        };
        return (
          setTimeout(function () {
            if ("MutationObserver" in window) {
              var d = parseInt(window.getComputedStyle(Ce()).width),
                x = function () {
                  if (document.body.contains(f)) {
                    var X = f.offsetWidth + l(f);
                    X > d
                      ? (Ce().style.width = "".concat(X, "px"))
                      : ue(Ce(), "width", s.width);
                  }
                };
              new MutationObserver(x).observe(f, {
                attributes: !0,
                attributeFilter: ["style"],
              });
            }
          }),
          f
        );
      });
    var P1 = function (s, l) {
        var d = wn();
        d &&
          (Ct(d),
          Q(d, l, "htmlContainer"),
          l.html
            ? (Wl(l.html, d), pe(d, "block"))
            : l.text
            ? ((d.textContent = l.text), pe(d, "block"))
            : Te(d),
          S1(s, l));
      },
      A1 = function (s, l) {
        var d = fa();
        d &&
          (Ct(d),
          Gt(d, l.footer, "block"),
          l.footer && Wl(l.footer, d),
          Q(d, l, "footer"));
      },
      R1 = function (s, l) {
        var d = $e.innerParams.get(s),
          x = rt();
        if (x) {
          if (d && l.icon === d.icon) {
            Ef(x, l), xf(x, l);
            return;
          }
          if (!l.icon && !l.iconHtml) {
            Te(x);
            return;
          }
          if (l.icon && Object.keys(me).indexOf(l.icon) === -1) {
            ie(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                l.icon,
                '"'
              )
            ),
              Te(x);
            return;
          }
          pe(x), Ef(x, l), xf(x, l), V(x, l.showClass && l.showClass.icon);
        }
      },
      xf = function (s, l) {
        for (var d = 0, x = Object.entries(me); d < x.length; d++) {
          var M = w(x[d], 2),
            X = M[0],
            ge = M[1];
          l.icon !== X && ce(s, ge);
        }
        V(s, l.icon && me[l.icon]), D1(s, l), L1(), Q(s, l, "icon");
      },
      L1 = function () {
        var s = Ce();
        if (s)
          for (
            var l = window
                .getComputedStyle(s)
                .getPropertyValue("background-color"),
              d = s.querySelectorAll(
                "[class^=swal2-success-circular-line], .swal2-success-fix"
              ),
              x = 0;
            x < d.length;
            x++
          )
            d[x].style.backgroundColor = l;
      },
      O1 = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      M1 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      Ef = function (s, l) {
        if (!(!l.icon && !l.iconHtml)) {
          var d = s.innerHTML,
            x = "";
          if (l.iconHtml) x = Cf(l.iconHtml);
          else if (l.icon === "success")
            (x = O1), (d = d.replace(/ style=".*?"/g, ""));
          else if (l.icon === "error") x = M1;
          else if (l.icon) {
            var M = { question: "?", warning: "!", info: "i" };
            x = Cf(M[l.icon]);
          }
          d.trim() !== x.trim() && P(s, x);
        }
      },
      D1 = function (s, l) {
        if (l.iconColor) {
          (s.style.color = l.iconColor), (s.style.borderColor = l.iconColor);
          for (
            var d = 0,
              x = [
                ".swal2-success-line-tip",
                ".swal2-success-line-long",
                ".swal2-x-mark-line-left",
                ".swal2-x-mark-line-right",
              ];
            d < x.length;
            d++
          ) {
            var M = x[d];
            it(s, M, "backgroundColor", l.iconColor);
          }
          it(s, ".swal2-success-ring", "borderColor", l.iconColor);
        }
      },
      Cf = function (s) {
        return '<div class="'
          .concat(_["icon-content"], '">')
          .concat(s, "</div>");
      },
      j1 = function (s, l) {
        var d = on();
        if (d) {
          if (!l.imageUrl) {
            Te(d);
            return;
          }
          pe(d, ""),
            d.setAttribute("src", l.imageUrl),
            d.setAttribute("alt", l.imageAlt || ""),
            ue(d, "width", l.imageWidth),
            ue(d, "height", l.imageHeight),
            (d.className = _.image),
            Q(d, l, "image");
        }
      },
      B1 = function (s, l) {
        var d = Ge(),
          x = Ce();
        if (!(!d || !x)) {
          if (l.toast) {
            ue(d, "width", l.width), (x.style.width = "100%");
            var M = Ln();
            M && x.insertBefore(M, rt());
          } else ue(x, "width", l.width);
          ue(x, "padding", l.padding),
            l.color && (x.style.color = l.color),
            l.background && (x.style.background = l.background),
            Te($t()),
            $1(x, l);
        }
      },
      $1 = function (s, l) {
        var d = l.showClass || {};
        (s.className = "".concat(_.popup, " ").concat(yt(s) ? d.popup : "")),
          l.toast
            ? (V([document.documentElement, document.body], _["toast-shown"]),
              V(s, _.toast))
            : V(s, _.modal),
          Q(s, l, "popup"),
          typeof l.customClass == "string" && V(s, l.customClass),
          l.icon && V(s, _["icon-".concat(l.icon)]);
      },
      z1 = function (s, l) {
        var d = Lt();
        if (d) {
          var x = l.progressSteps,
            M = l.currentProgressStep;
          if (!x || x.length === 0 || M === void 0) {
            Te(d);
            return;
          }
          pe(d),
            (d.textContent = ""),
            M >= x.length &&
              le(
                "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
              ),
            x.forEach(function (X, ge) {
              var xe = U1(X);
              if (
                (d.appendChild(xe),
                ge === M && V(xe, _["active-progress-step"]),
                ge !== x.length - 1)
              ) {
                var Fe = F1(l);
                d.appendChild(Fe);
              }
            });
        }
      },
      U1 = function (s) {
        var l = document.createElement("li");
        return V(l, _["progress-step"]), P(l, s), l;
      },
      F1 = function (s) {
        var l = document.createElement("li");
        return (
          V(l, _["progress-step-line"]),
          s.progressStepsDistance && ue(l, "width", s.progressStepsDistance),
          l
        );
      },
      V1 = function (s, l) {
        var d = Ae();
        d &&
          (Ct(d),
          Gt(d, l.title || l.titleText, "block"),
          l.title && Wl(l.title, d),
          l.titleText && (d.innerText = l.titleText),
          Q(d, l, "title"));
      },
      kf = function (s, l) {
        B1(s, l),
          b1(s, l),
          z1(s, l),
          R1(s, l),
          j1(s, l),
          V1(s, l),
          w1(s, l),
          P1(s, l),
          g1(s, l),
          A1(s, l);
        var d = Ce();
        typeof l.didRender == "function" && d && l.didRender(d);
      },
      H1 = function () {
        return yt(Ce());
      },
      Sf = function () {
        var s;
        return (s = zt()) === null || s === void 0 ? void 0 : s.click();
      },
      W1 = function () {
        var s;
        return (s = bn()) === null || s === void 0 ? void 0 : s.click();
      },
      K1 = function () {
        var s;
        return (s = Rn()) === null || s === void 0 ? void 0 : s.click();
      },
      vi = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer",
      }),
      _f = function (s) {
        s.keydownTarget &&
          s.keydownHandlerAdded &&
          (s.keydownTarget.removeEventListener("keydown", s.keydownHandler, {
            capture: s.keydownListenerCapture,
          }),
          (s.keydownHandlerAdded = !1));
      },
      Y1 = function (s, l, d) {
        _f(s),
          l.toast ||
            ((s.keydownHandler = function (x) {
              return q1(l, x, d);
            }),
            (s.keydownTarget = l.keydownListenerCapture ? window : Ce()),
            (s.keydownListenerCapture = l.keydownListenerCapture),
            s.keydownTarget.addEventListener("keydown", s.keydownHandler, {
              capture: s.keydownListenerCapture,
            }),
            (s.keydownHandlerAdded = !0));
      },
      Gl = function (s, l) {
        var d,
          x = pa();
        if (x.length) {
          (s = s + l),
            s === x.length ? (s = 0) : s === -1 && (s = x.length - 1),
            x[s].focus();
          return;
        }
        (d = Ce()) === null || d === void 0 || d.focus();
      },
      Tf = ["ArrowRight", "ArrowDown"],
      G1 = ["ArrowLeft", "ArrowUp"],
      q1 = function (s, l, d) {
        s &&
          (l.isComposing ||
            l.keyCode === 229 ||
            (s.stopKeydownPropagation && l.stopPropagation(),
            l.key === "Enter"
              ? Q1(l, s)
              : l.key === "Tab"
              ? X1(l)
              : [].concat(Tf, G1).includes(l.key)
              ? J1(l.key)
              : l.key === "Escape" && Z1(l, s, d)));
      },
      Q1 = function (s, l) {
        if (he(l.allowEnterKey)) {
          var d = ve(Ce(), l.input);
          if (
            s.target &&
            d &&
            s.target instanceof HTMLElement &&
            s.target.outerHTML === d.outerHTML
          ) {
            if (["textarea", "file"].includes(l.input)) return;
            Sf(), s.preventDefault();
          }
        }
      },
      X1 = function (s) {
        for (var l = s.target, d = pa(), x = -1, M = 0; M < d.length; M++)
          if (l === d[M]) {
            x = M;
            break;
          }
        s.shiftKey ? Gl(x, -1) : Gl(x, 1),
          s.stopPropagation(),
          s.preventDefault();
      },
      J1 = function (s) {
        var l = xn(),
          d = zt(),
          x = bn(),
          M = Rn();
        if (!(!l || !d || !x || !M)) {
          var X = [d, x, M];
          if (
            !(
              document.activeElement instanceof HTMLElement &&
              !X.includes(document.activeElement)
            )
          ) {
            var ge = Tf.includes(s)
                ? "nextElementSibling"
                : "previousElementSibling",
              xe = document.activeElement;
            if (xe) {
              for (var Fe = 0; Fe < l.children.length; Fe++) {
                if (((xe = xe[ge]), !xe)) return;
                if (xe instanceof HTMLButtonElement && yt(xe)) break;
              }
              xe instanceof HTMLButtonElement && xe.focus();
            }
          }
        }
      },
      Z1 = function (s, l, d) {
        he(l.allowEscapeKey) && (s.preventDefault(), d(vi.esc));
      },
      yi = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap(),
      },
      ey = function () {
        var s = Array.from(document.body.children);
        s.forEach(function (l) {
          l === Ge() ||
            l.contains(Ge()) ||
            (l.hasAttribute("aria-hidden") &&
              l.setAttribute(
                "data-previous-aria-hidden",
                l.getAttribute("aria-hidden") || ""
              ),
            l.setAttribute("aria-hidden", "true"));
        });
      },
      Nf = function () {
        var s = Array.from(document.body.children);
        s.forEach(function (l) {
          l.hasAttribute("data-previous-aria-hidden")
            ? (l.setAttribute(
                "aria-hidden",
                l.getAttribute("data-previous-aria-hidden") || ""
              ),
              l.removeAttribute("data-previous-aria-hidden"))
            : l.removeAttribute("aria-hidden");
        });
      },
      If = typeof window < "u" && !!window.GestureEvent,
      ty = function () {
        if (If && !j(document.body, _.iosfix)) {
          var s = document.body.scrollTop;
          (document.body.style.top = "".concat(s * -1, "px")),
            V(document.body, _.iosfix),
            ny();
        }
      },
      ny = function () {
        var s = Ge();
        if (s) {
          var l;
          (s.ontouchstart = function (d) {
            l = ry(d);
          }),
            (s.ontouchmove = function (d) {
              l && (d.preventDefault(), d.stopPropagation());
            });
        }
      },
      ry = function (s) {
        var l = s.target,
          d = Ge(),
          x = wn();
        return !d || !x || iy(s) || ay(s)
          ? !1
          : l === d ||
              (!sn(d) &&
                l instanceof HTMLElement &&
                l.tagName !== "INPUT" &&
                l.tagName !== "TEXTAREA" &&
                !(sn(x) && x.contains(l)));
      },
      iy = function (s) {
        return (
          s.touches && s.touches.length && s.touches[0].touchType === "stylus"
        );
      },
      ay = function (s) {
        return s.touches && s.touches.length > 1;
      },
      oy = function () {
        if (j(document.body, _.iosfix)) {
          var s = parseInt(document.body.style.top, 10);
          ce(document.body, _.iosfix),
            (document.body.style.top = ""),
            (document.body.scrollTop = s * -1);
        }
      },
      sy = function () {
        var s = document.createElement("div");
        (s.className = _["scrollbar-measure"]), document.body.appendChild(s);
        var l = s.getBoundingClientRect().width - s.clientWidth;
        return document.body.removeChild(s), l;
      },
      wi = null,
      ly = function (s) {
        wi === null &&
          (document.body.scrollHeight > window.innerHeight || s === "scroll") &&
          ((wi = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right")
          )),
          (document.body.style.paddingRight = "".concat(wi + sy(), "px")));
      },
      cy = function () {
        wi !== null &&
          ((document.body.style.paddingRight = "".concat(wi, "px")),
          (wi = null));
      };
    function Pf(f, s, l, d) {
      hi()
        ? Rf(f, d)
        : (H(l).then(function () {
            return Rf(f, d);
          }),
          _f(z)),
        If
          ? (s.setAttribute("style", "display:none !important"),
            s.removeAttribute("class"),
            (s.innerHTML = ""))
          : s.remove(),
        fi() && (cy(), oy(), Nf()),
        uy();
    }
    function uy() {
      ce(
        [document.documentElement, document.body],
        [_.shown, _["height-auto"], _["no-backdrop"], _["toast-shown"]]
      );
    }
    function or(f) {
      f = fy(f);
      var s = yi.swalPromiseResolve.get(this),
        l = dy(this);
      this.isAwaitingPromise ? f.isDismissed || (va(this), s(f)) : l && s(f);
    }
    var dy = function (s) {
      var l = Ce();
      if (!l) return !1;
      var d = $e.innerParams.get(s);
      if (!d || j(l, d.hideClass.popup)) return !1;
      ce(l, d.showClass.popup), V(l, d.hideClass.popup);
      var x = Ge();
      return (
        ce(x, d.showClass.backdrop), V(x, d.hideClass.backdrop), hy(s, l, d), !0
      );
    };
    function Af(f) {
      var s = yi.swalPromiseReject.get(this);
      va(this), s && s(f);
    }
    var va = function (s) {
        s.isAwaitingPromise &&
          (delete s.isAwaitingPromise, $e.innerParams.get(s) || s._destroy());
      },
      fy = function (s) {
        return typeof s > "u"
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              s
            );
      },
      hy = function (s, l, d) {
        var x = Ge(),
          M = Ur && En(l);
        typeof d.willClose == "function" && d.willClose(l),
          M
            ? py(s, l, x, d.returnFocus, d.didClose)
            : Pf(s, x, d.returnFocus, d.didClose);
      },
      py = function (s, l, d, x, M) {
        Ur &&
          ((z.swalCloseEventFinishedCallback = Pf.bind(null, s, d, x, M)),
          l.addEventListener(Ur, function (X) {
            X.target === l &&
              (z.swalCloseEventFinishedCallback(),
              delete z.swalCloseEventFinishedCallback);
          }));
      },
      Rf = function (s, l) {
        setTimeout(function () {
          typeof l == "function" && l.bind(s.params)(),
            s._destroy && s._destroy();
        });
      },
      bi = function (s) {
        var l = Ce();
        if ((l || new Vo(), (l = Ce()), !!l)) {
          var d = Ln();
          hi() ? Te(rt()) : my(l, s),
            pe(d),
            l.setAttribute("data-loading", "true"),
            l.setAttribute("aria-busy", "true"),
            l.focus();
        }
      },
      my = function (s, l) {
        var d = xn(),
          x = Ln();
        !d ||
          !x ||
          (!l && yt(zt()) && (l = zt()),
          pe(d),
          l &&
            (Te(l),
            x.setAttribute("data-button-to-replace", l.className),
            d.insertBefore(x, l)),
          V([s, d], _.loading));
      },
      gy = function (s, l) {
        l.input === "select" || l.input === "radio"
          ? xy(s, l)
          : ["text", "email", "number", "tel", "textarea"].some(function (d) {
              return d === l.input;
            }) &&
            (Ze(l.inputValue) || Ye(l.inputValue)) &&
            (bi(zt()), Ey(s, l));
      },
      vy = function (s, l) {
        var d = s.getInput();
        if (!d) return null;
        switch (l.input) {
          case "checkbox":
            return yy(d);
          case "radio":
            return wy(d);
          case "file":
            return by(d);
          default:
            return l.inputAutoTrim ? d.value.trim() : d.value;
        }
      },
      yy = function (s) {
        return s.checked ? 1 : 0;
      },
      wy = function (s) {
        return s.checked ? s.value : null;
      },
      by = function (s) {
        return s.files && s.files.length
          ? s.getAttribute("multiple") !== null
            ? s.files
            : s.files[0]
          : null;
      },
      xy = function (s, l) {
        var d = Ce();
        if (d) {
          var x = function (X) {
            l.input === "select"
              ? Cy(d, Lf(X), l)
              : l.input === "radio" && ky(d, Lf(X), l);
          };
          Ze(l.inputOptions) || Ye(l.inputOptions)
            ? (bi(zt()),
              Ee(l.inputOptions).then(function (M) {
                s.hideLoading(), x(M);
              }))
            : r(l.inputOptions) === "object"
            ? x(l.inputOptions)
            : ie(
                "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                  r(l.inputOptions)
                )
              );
        }
      },
      Ey = function (s, l) {
        var d = s.getInput();
        d &&
          (Te(d),
          Ee(l.inputValue)
            .then(function (x) {
              (d.value =
                l.input === "number"
                  ? "".concat(parseFloat(x) || 0)
                  : "".concat(x)),
                pe(d),
                d.focus(),
                s.hideLoading();
            })
            .catch(function (x) {
              ie("Error in inputValue promise: ".concat(x)),
                (d.value = ""),
                pe(d),
                d.focus(),
                s.hideLoading();
            }));
      };
    function Cy(f, s, l) {
      var d = De(f, _.select);
      if (d) {
        var x = function (X, ge, xe) {
          var Fe = document.createElement("option");
          (Fe.value = xe),
            P(Fe, ge),
            (Fe.selected = Of(xe, l.inputValue)),
            X.appendChild(Fe);
        };
        s.forEach(function (M) {
          var X = M[0],
            ge = M[1];
          if (Array.isArray(ge)) {
            var xe = document.createElement("optgroup");
            (xe.label = X),
              (xe.disabled = !1),
              d.appendChild(xe),
              ge.forEach(function (Fe) {
                return x(xe, Fe[1], Fe[0]);
              });
          } else x(d, ge, X);
        }),
          d.focus();
      }
    }
    function ky(f, s, l) {
      var d = De(f, _.radio);
      if (d) {
        s.forEach(function (M) {
          var X = M[0],
            ge = M[1],
            xe = document.createElement("input"),
            Fe = document.createElement("label");
          (xe.type = "radio"),
            (xe.name = _.radio),
            (xe.value = X),
            Of(X, l.inputValue) && (xe.checked = !0);
          var ya = document.createElement("span");
          P(ya, ge),
            (ya.className = _.label),
            Fe.appendChild(xe),
            Fe.appendChild(ya),
            d.appendChild(Fe);
        });
        var x = d.querySelectorAll("input");
        x.length && x[0].focus();
      }
    }
    var Lf = function f(s) {
        var l = [];
        return (
          s instanceof Map
            ? s.forEach(function (d, x) {
                var M = d;
                r(M) === "object" && (M = f(M)), l.push([x, M]);
              })
            : Object.keys(s).forEach(function (d) {
                var x = s[d];
                r(x) === "object" && (x = f(x)), l.push([d, x]);
              }),
          l
        );
      },
      Of = function (s, l) {
        return !!l && l.toString() === s.toString();
      },
      $o = void 0,
      Sy = function (s) {
        var l = $e.innerParams.get(s);
        s.disableButtons(), l.input ? Mf(s, "confirm") : Ql(s, !0);
      },
      _y = function (s) {
        var l = $e.innerParams.get(s);
        s.disableButtons(),
          l.returnInputValueOnDeny ? Mf(s, "deny") : ql(s, !1);
      },
      Ty = function (s, l) {
        s.disableButtons(), l(vi.cancel);
      },
      Mf = function (s, l) {
        var d = $e.innerParams.get(s);
        if (!d.input) {
          ie(
            'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
              Oe(l)
            )
          );
          return;
        }
        var x = s.getInput(),
          M = vy(s, d);
        d.inputValidator
          ? Ny(s, M, l)
          : x && !x.checkValidity()
          ? (s.enableButtons(), s.showValidationMessage(d.validationMessage))
          : l === "deny"
          ? ql(s, M)
          : Ql(s, M);
      },
      Ny = function (s, l, d) {
        var x = $e.innerParams.get(s);
        s.disableInput();
        var M = Promise.resolve().then(function () {
          return Ee(x.inputValidator(l, x.validationMessage));
        });
        M.then(function (X) {
          s.enableButtons(),
            s.enableInput(),
            X ? s.showValidationMessage(X) : d === "deny" ? ql(s, l) : Ql(s, l);
        });
      },
      ql = function (s, l) {
        var d = $e.innerParams.get(s || $o);
        if ((d.showLoaderOnDeny && bi(bn()), d.preDeny)) {
          s.isAwaitingPromise = !0;
          var x = Promise.resolve().then(function () {
            return Ee(d.preDeny(l, d.validationMessage));
          });
          x.then(function (M) {
            M === !1
              ? (s.hideLoading(), va(s))
              : s.close({ isDenied: !0, value: typeof M > "u" ? l : M });
          }).catch(function (M) {
            return jf(s || $o, M);
          });
        } else s.close({ isDenied: !0, value: l });
      },
      Df = function (s, l) {
        s.close({ isConfirmed: !0, value: l });
      },
      jf = function (s, l) {
        s.rejectPromise(l);
      },
      Ql = function (s, l) {
        var d = $e.innerParams.get(s || $o);
        if ((d.showLoaderOnConfirm && bi(), d.preConfirm)) {
          s.resetValidationMessage(), (s.isAwaitingPromise = !0);
          var x = Promise.resolve().then(function () {
            return Ee(d.preConfirm(l, d.validationMessage));
          });
          x.then(function (M) {
            yt($t()) || M === !1
              ? (s.hideLoading(), va(s))
              : Df(s, typeof M > "u" ? l : M);
          }).catch(function (M) {
            return jf(s || $o, M);
          });
        } else Df(s, l);
      };
    function zo() {
      var f = $e.innerParams.get(this);
      if (f) {
        var s = $e.domCache.get(this);
        Te(s.loader),
          hi() ? f.icon && pe(rt()) : Iy(s),
          ce([s.popup, s.actions], _.loading),
          s.popup.removeAttribute("aria-busy"),
          s.popup.removeAttribute("data-loading"),
          (s.confirmButton.disabled = !1),
          (s.denyButton.disabled = !1),
          (s.cancelButton.disabled = !1);
      }
    }
    var Iy = function (s) {
      var l = s.popup.getElementsByClassName(
        s.loader.getAttribute("data-button-to-replace")
      );
      l.length ? pe(l[0], "inline-block") : ir() && Te(s.actions);
    };
    function Bf() {
      var f = $e.innerParams.get(this),
        s = $e.domCache.get(this);
      return s ? ve(s.popup, f.input) : null;
    }
    function $f(f, s, l) {
      var d = $e.domCache.get(f);
      s.forEach(function (x) {
        d[x].disabled = l;
      });
    }
    function zf(f, s) {
      var l = Ce();
      if (!(!l || !f))
        if (f.type === "radio")
          for (
            var d = l.querySelectorAll('[name="'.concat(_.radio, '"]')), x = 0;
            x < d.length;
            x++
          )
            d[x].disabled = s;
        else f.disabled = s;
    }
    function Uf() {
      $f(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    }
    function Ff() {
      $f(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    }
    function Vf() {
      zf(this.getInput(), !1);
    }
    function Hf() {
      zf(this.getInput(), !0);
    }
    function Wf(f) {
      var s = $e.domCache.get(this),
        l = $e.innerParams.get(this);
      P(s.validationMessage, f),
        (s.validationMessage.className = _["validation-message"]),
        l.customClass &&
          l.customClass.validationMessage &&
          V(s.validationMessage, l.customClass.validationMessage),
        pe(s.validationMessage);
      var d = this.getInput();
      d &&
        (d.setAttribute("aria-invalid", "true"),
        d.setAttribute("aria-describedby", _["validation-message"]),
        se(d),
        V(d, _.inputerror));
    }
    function Kf() {
      var f = $e.domCache.get(this);
      f.validationMessage && Te(f.validationMessage);
      var s = this.getInput();
      s &&
        (s.removeAttribute("aria-invalid"),
        s.removeAttribute("aria-describedby"),
        ce(s, _.inputerror));
    }
    var xi = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      Py = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose",
      ],
      Ay = {},
      Ry = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture",
      ],
      Yf = function (s) {
        return Object.prototype.hasOwnProperty.call(xi, s);
      },
      Gf = function (s) {
        return Py.indexOf(s) !== -1;
      },
      qf = function (s) {
        return Ay[s];
      },
      Ly = function (s) {
        Yf(s) || le('Unknown parameter "'.concat(s, '"'));
      },
      Oy = function (s) {
        Ry.includes(s) &&
          le('The parameter "'.concat(s, '" is incompatible with toasts'));
      },
      My = function (s) {
        var l = qf(s);
        l && pt(s, l);
      },
      Dy = function (s) {
        s.backdrop === !1 &&
          s.allowOutsideClick &&
          le(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (var l in s) Ly(l), s.toast && Oy(l), My(l);
      };
    function Qf(f) {
      var s = Ce(),
        l = $e.innerParams.get(this);
      if (!s || j(s, l.hideClass.popup)) {
        le(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      var d = jy(f),
        x = Object.assign({}, l, d);
      kf(this, x),
        $e.innerParams.set(this, x),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, f),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    var jy = function (s) {
      var l = {};
      return (
        Object.keys(s).forEach(function (d) {
          Gf(d) ? (l[d] = s[d]) : le("Invalid parameter to update: ".concat(d));
        }),
        l
      );
    };
    function Xf() {
      var f = $e.domCache.get(this),
        s = $e.innerParams.get(this);
      if (!s) {
        Jf(this);
        return;
      }
      f.popup &&
        z.swalCloseEventFinishedCallback &&
        (z.swalCloseEventFinishedCallback(),
        delete z.swalCloseEventFinishedCallback),
        typeof s.didDestroy == "function" && s.didDestroy(),
        By(this);
    }
    var By = function (s) {
        Jf(s),
          delete s.params,
          delete z.keydownHandler,
          delete z.keydownTarget,
          delete z.currentInstance;
      },
      Jf = function (s) {
        s.isAwaitingPromise
          ? (Xl($e, s), (s.isAwaitingPromise = !0))
          : (Xl(yi, s),
            Xl($e, s),
            delete s.isAwaitingPromise,
            delete s.disableButtons,
            delete s.enableButtons,
            delete s.getInput,
            delete s.disableInput,
            delete s.enableInput,
            delete s.hideLoading,
            delete s.disableLoading,
            delete s.showValidationMessage,
            delete s.resetValidationMessage,
            delete s.close,
            delete s.closePopup,
            delete s.closeModal,
            delete s.closeToast,
            delete s.rejectPromise,
            delete s.update,
            delete s._destroy);
      },
      Xl = function (s, l) {
        for (var d in s) s[d].delete(l);
      },
      $y = Object.freeze({
        __proto__: null,
        _destroy: Xf,
        close: or,
        closeModal: or,
        closePopup: or,
        closeToast: or,
        disableButtons: Ff,
        disableInput: Hf,
        disableLoading: zo,
        enableButtons: Uf,
        enableInput: Vf,
        getInput: Bf,
        handleAwaitingPromise: va,
        hideLoading: zo,
        rejectPromise: Af,
        resetValidationMessage: Kf,
        showValidationMessage: Wf,
        update: Qf,
      }),
      zy = function (s, l, d) {
        s.toast ? Uy(s, l, d) : (Vy(l), Hy(l), Wy(s, l, d));
      },
      Uy = function (s, l, d) {
        l.popup.onclick = function () {
          (s && (Fy(s) || s.timer || s.input)) || d(vi.close);
        };
      },
      Fy = function (s) {
        return !!(
          s.showConfirmButton ||
          s.showDenyButton ||
          s.showCancelButton ||
          s.showCloseButton
        );
      },
      Uo = !1,
      Vy = function (s) {
        s.popup.onmousedown = function () {
          s.container.onmouseup = function (l) {
            (s.container.onmouseup = function () {}),
              l.target === s.container && (Uo = !0);
          };
        };
      },
      Hy = function (s) {
        s.container.onmousedown = function () {
          s.popup.onmouseup = function (l) {
            (s.popup.onmouseup = function () {}),
              (l.target === s.popup ||
                (l.target instanceof HTMLElement &&
                  s.popup.contains(l.target))) &&
                (Uo = !0);
          };
        };
      },
      Wy = function (s, l, d) {
        l.container.onclick = function (x) {
          if (Uo) {
            Uo = !1;
            return;
          }
          x.target === l.container && he(s.allowOutsideClick) && d(vi.backdrop);
        };
      },
      Ky = function (s) {
        return r(s) === "object" && s.jquery;
      },
      Zf = function (s) {
        return s instanceof Element || Ky(s);
      },
      Yy = function (s) {
        var l = {};
        return (
          r(s[0]) === "object" && !Zf(s[0])
            ? Object.assign(l, s[0])
            : ["title", "html", "icon"].forEach(function (d, x) {
                var M = s[x];
                typeof M == "string" || Zf(M)
                  ? (l[d] = M)
                  : M !== void 0 &&
                    ie(
                      "Unexpected type of "
                        .concat(d, '! Expected "string" or "Element", got ')
                        .concat(r(M))
                    );
              }),
          l
        );
      };
    function Gy() {
      for (
        var f = this, s = arguments.length, l = new Array(s), d = 0;
        d < s;
        d++
      )
        l[d] = arguments[d];
      return y(f, l);
    }
    function qy(f) {
      var s = (function (l) {
        c(x, l);
        var d = S(x);
        function x() {
          return i(this, x), d.apply(this, arguments);
        }
        return (
          o(x, [
            {
              key: "_main",
              value: function (X, ge) {
                return I(u(x.prototype), "_main", this).call(
                  this,
                  X,
                  Object.assign({}, f, ge)
                );
              },
            },
          ]),
          x
        );
      })(this);
      return s;
    }
    var Qy = function () {
        return z.timeout && z.timeout.getTimerLeft();
      },
      eh = function () {
        if (z.timeout) return ma(), z.timeout.stop();
      },
      th = function () {
        if (z.timeout) {
          var s = z.timeout.start();
          return zr(s), s;
        }
      },
      Xy = function () {
        var s = z.timeout;
        return s && (s.running ? eh() : th());
      },
      Jy = function (s) {
        if (z.timeout) {
          var l = z.timeout.increase(s);
          return zr(l, !0), l;
        }
      },
      Zy = function () {
        return !!(z.timeout && z.timeout.isRunning());
      },
      nh = !1,
      Jl = {};
    function ew() {
      var f =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "data-swal-template";
      (Jl[f] = this),
        nh || (document.body.addEventListener("click", tw), (nh = !0));
    }
    var tw = function (s) {
        for (var l = s.target; l && l !== document; l = l.parentNode)
          for (var d in Jl) {
            var x = l.getAttribute(d);
            if (x) {
              Jl[d].fire({ template: x });
              return;
            }
          }
      },
      nw = Object.freeze({
        __proto__: null,
        argsToParams: Yy,
        bindClickHandler: ew,
        clickCancel: K1,
        clickConfirm: Sf,
        clickDeny: W1,
        enableLoading: bi,
        fire: Gy,
        getActions: xn,
        getCancelButton: Rn,
        getCloseButton: ha,
        getConfirmButton: zt,
        getContainer: Ge,
        getDenyButton: bn,
        getFocusableElements: pa,
        getFooter: fa,
        getHtmlContainer: wn,
        getIcon: rt,
        getIconContent: ne,
        getImage: on,
        getInputLabel: Vl,
        getLoader: Ln,
        getPopup: Ce,
        getProgressSteps: Lt,
        getTimerLeft: Qy,
        getTimerProgressBar: rr,
        getTitle: Ae,
        getValidationMessage: $t,
        increaseTimer: Jy,
        isDeprecatedParameter: qf,
        isLoading: T,
        isTimerRunning: Zy,
        isUpdatableParameter: Gf,
        isValidParameter: Yf,
        isVisible: H1,
        mixin: qy,
        resumeTimer: th,
        showLoading: bi,
        stopTimer: eh,
        toggleTimer: Xy,
      }),
      rw = (function () {
        function f(s, l) {
          i(this, f),
            (this.callback = s),
            (this.remaining = l),
            (this.running = !1),
            this.start();
        }
        return (
          o(f, [
            {
              key: "start",
              value: function () {
                return (
                  this.running ||
                    ((this.running = !0),
                    (this.started = new Date()),
                    (this.id = setTimeout(this.callback, this.remaining))),
                  this.remaining
                );
              },
            },
            {
              key: "stop",
              value: function () {
                return (
                  this.started &&
                    this.running &&
                    ((this.running = !1),
                    clearTimeout(this.id),
                    (this.remaining -=
                      new Date().getTime() - this.started.getTime())),
                  this.remaining
                );
              },
            },
            {
              key: "increase",
              value: function (l) {
                var d = this.running;
                return (
                  d && this.stop(),
                  (this.remaining += l),
                  d && this.start(),
                  this.remaining
                );
              },
            },
            {
              key: "getTimerLeft",
              value: function () {
                return (
                  this.running && (this.stop(), this.start()), this.remaining
                );
              },
            },
            {
              key: "isRunning",
              value: function () {
                return this.running;
              },
            },
          ]),
          f
        );
      })(),
      rh = ["swal-title", "swal-html", "swal-footer"],
      iw = function (s) {
        var l =
          typeof s.template == "string"
            ? document.querySelector(s.template)
            : s.template;
        if (!l) return {};
        var d = l.content;
        fw(d);
        var x = Object.assign(
          aw(d),
          ow(d),
          sw(d),
          lw(d),
          cw(d),
          uw(d),
          dw(d, rh)
        );
        return x;
      },
      aw = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll("swal-param"));
        return (
          d.forEach(function (x) {
            Fr(x, ["name", "value"]);
            var M = x.getAttribute("name"),
              X = x.getAttribute("value");
            typeof xi[M] == "boolean"
              ? (l[M] = X !== "false")
              : r(xi[M]) === "object"
              ? (l[M] = JSON.parse(X))
              : (l[M] = X);
          }),
          l
        );
      },
      ow = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll("swal-function-param"));
        return (
          d.forEach(function (x) {
            var M = x.getAttribute("name"),
              X = x.getAttribute("value");
            l[M] = new Function("return ".concat(X))();
          }),
          l
        );
      },
      sw = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll("swal-button"));
        return (
          d.forEach(function (x) {
            Fr(x, ["type", "color", "aria-label"]);
            var M = x.getAttribute("type");
            (l["".concat(M, "ButtonText")] = x.innerHTML),
              (l["show".concat(Oe(M), "Button")] = !0),
              x.hasAttribute("color") &&
                (l["".concat(M, "ButtonColor")] = x.getAttribute("color")),
              x.hasAttribute("aria-label") &&
                (l["".concat(M, "ButtonAriaLabel")] =
                  x.getAttribute("aria-label"));
          }),
          l
        );
      },
      lw = function (s) {
        var l = {},
          d = s.querySelector("swal-image");
        return (
          d &&
            (Fr(d, ["src", "width", "height", "alt"]),
            d.hasAttribute("src") && (l.imageUrl = d.getAttribute("src")),
            d.hasAttribute("width") && (l.imageWidth = d.getAttribute("width")),
            d.hasAttribute("height") &&
              (l.imageHeight = d.getAttribute("height")),
            d.hasAttribute("alt") && (l.imageAlt = d.getAttribute("alt"))),
          l
        );
      },
      cw = function (s) {
        var l = {},
          d = s.querySelector("swal-icon");
        return (
          d &&
            (Fr(d, ["type", "color"]),
            d.hasAttribute("type") && (l.icon = d.getAttribute("type")),
            d.hasAttribute("color") && (l.iconColor = d.getAttribute("color")),
            (l.iconHtml = d.innerHTML)),
          l
        );
      },
      uw = function (s) {
        var l = {},
          d = s.querySelector("swal-input");
        d &&
          (Fr(d, ["type", "label", "placeholder", "value"]),
          (l.input = d.getAttribute("type") || "text"),
          d.hasAttribute("label") && (l.inputLabel = d.getAttribute("label")),
          d.hasAttribute("placeholder") &&
            (l.inputPlaceholder = d.getAttribute("placeholder")),
          d.hasAttribute("value") && (l.inputValue = d.getAttribute("value")));
        var x = Array.from(s.querySelectorAll("swal-input-option"));
        return (
          x.length &&
            ((l.inputOptions = {}),
            x.forEach(function (M) {
              Fr(M, ["value"]);
              var X = M.getAttribute("value"),
                ge = M.innerHTML;
              l.inputOptions[X] = ge;
            })),
          l
        );
      },
      dw = function (s, l) {
        var d = {};
        for (var x in l) {
          var M = l[x],
            X = s.querySelector(M);
          X && (Fr(X, []), (d[M.replace(/^swal-/, "")] = X.innerHTML.trim()));
        }
        return d;
      },
      fw = function (s) {
        var l = rh.concat([
          "swal-param",
          "swal-function-param",
          "swal-button",
          "swal-image",
          "swal-icon",
          "swal-input",
          "swal-input-option",
        ]);
        Array.from(s.children).forEach(function (d) {
          var x = d.tagName.toLowerCase();
          l.includes(x) || le("Unrecognized element <".concat(x, ">"));
        });
      },
      Fr = function (s, l) {
        Array.from(s.attributes).forEach(function (d) {
          l.indexOf(d.name) === -1 &&
            le([
              'Unrecognized attribute "'
                .concat(d.name, '" on <')
                .concat(s.tagName.toLowerCase(), ">."),
              "".concat(
                l.length
                  ? "Allowed attributes are: ".concat(l.join(", "))
                  : "To set the value, use HTML within the element."
              ),
            ]);
        });
      },
      ih = 10,
      hw = function (s) {
        var l = Ge(),
          d = Ce();
        typeof s.willOpen == "function" && s.willOpen(d);
        var x = window.getComputedStyle(document.body),
          M = x.overflowY;
        vw(l, d, s),
          setTimeout(function () {
            mw(l, d);
          }, ih),
          fi() && (gw(l, s.scrollbarPadding, M), ey()),
          !hi() &&
            !z.previousActiveElement &&
            (z.previousActiveElement = document.activeElement),
          typeof s.didOpen == "function" &&
            setTimeout(function () {
              return s.didOpen(d);
            }),
          ce(l, _["no-transition"]);
      },
      pw = function f(s) {
        var l = Ce();
        if (!(s.target !== l || !Ur)) {
          var d = Ge();
          l.removeEventListener(Ur, f), (d.style.overflowY = "auto");
        }
      },
      mw = function (s, l) {
        Ur && En(l)
          ? ((s.style.overflowY = "hidden"), l.addEventListener(Ur, pw))
          : (s.style.overflowY = "auto");
      },
      gw = function (s, l, d) {
        ty(),
          l && d !== "hidden" && ly(d),
          setTimeout(function () {
            s.scrollTop = 0;
          });
      },
      vw = function (s, l, d) {
        V(s, d.showClass.backdrop),
          d.animation
            ? (l.style.setProperty("opacity", "0", "important"),
              pe(l, "grid"),
              setTimeout(function () {
                V(l, d.showClass.popup), l.style.removeProperty("opacity");
              }, ih))
            : pe(l, "grid"),
          V([document.documentElement, document.body], _.shown),
          d.heightAuto &&
            d.backdrop &&
            !d.toast &&
            V([document.documentElement, document.body], _["height-auto"]);
      },
      ah = {
        email: function (s, l) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(s)
            ? Promise.resolve()
            : Promise.resolve(l || "Invalid email address");
        },
        url: function (s, l) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
            s
          )
            ? Promise.resolve()
            : Promise.resolve(l || "Invalid URL");
        },
      };
    function yw(f) {
      f.inputValidator ||
        (f.input === "email" && (f.inputValidator = ah.email),
        f.input === "url" && (f.inputValidator = ah.url));
    }
    function ww(f) {
      (!f.target ||
        (typeof f.target == "string" && !document.querySelector(f.target)) ||
        (typeof f.target != "string" && !f.target.appendChild)) &&
        (le('Target parameter is not valid, defaulting to "body"'),
        (f.target = "body"));
    }
    function bw(f) {
      yw(f),
        f.showLoaderOnConfirm &&
          !f.preConfirm &&
          le(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        ww(f),
        typeof f.title == "string" &&
          (f.title = f.title
            .split(
              `
`
            )
            .join("<br />")),
        h1(f);
    }
    var Cn,
      Fo = new WeakMap(),
      ot = (function () {
        function f() {
          if (
            (i(this, f),
            F(this, Fo, { writable: !0, value: void 0 }),
            !(typeof window > "u"))
          ) {
            Cn = this;
            for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++)
              l[d] = arguments[d];
            var x = Object.freeze(this.constructor.argsToParams(l));
            (this.params = x),
              (this.isAwaitingPromise = !1),
              Z(this, Fo, this._main(Cn.params));
          }
        }
        return (
          o(f, [
            {
              key: "_main",
              value: function (l) {
                var d =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                if ((Dy(Object.assign({}, d, l)), z.currentInstance)) {
                  var x = yi.swalPromiseResolve.get(z.currentInstance),
                    M = z.currentInstance.isAwaitingPromise;
                  z.currentInstance._destroy(),
                    M || x({ isDismissed: !0 }),
                    fi() && Nf();
                }
                z.currentInstance = Cn;
                var X = Ew(l, d);
                bw(X),
                  Object.freeze(X),
                  z.timeout && (z.timeout.stop(), delete z.timeout),
                  clearTimeout(z.restoreFocusTimeout);
                var ge = Cw(Cn);
                return kf(Cn, X), $e.innerParams.set(Cn, X), xw(Cn, ge, X);
              },
            },
            {
              key: "then",
              value: function (l) {
                return re(this, Fo).then(l);
              },
            },
            {
              key: "finally",
              value: function (l) {
                return re(this, Fo).finally(l);
              },
            },
          ]),
          f
        );
      })(),
      xw = function (s, l, d) {
        return new Promise(function (x, M) {
          var X = function (xe) {
            s.close({ isDismissed: !0, dismiss: xe });
          };
          yi.swalPromiseResolve.set(s, x),
            yi.swalPromiseReject.set(s, M),
            (l.confirmButton.onclick = function () {
              Sy(s);
            }),
            (l.denyButton.onclick = function () {
              _y(s);
            }),
            (l.cancelButton.onclick = function () {
              Ty(s, X);
            }),
            (l.closeButton.onclick = function () {
              X(vi.close);
            }),
            zy(d, l, X),
            Y1(z, d, X),
            gy(s, d),
            hw(d),
            kw(z, d, X),
            Sw(l, d),
            setTimeout(function () {
              l.container.scrollTop = 0;
            });
        });
      },
      Ew = function (s, l) {
        var d = iw(s),
          x = Object.assign({}, xi, l, d, s);
        return (
          (x.showClass = Object.assign({}, xi.showClass, x.showClass)),
          (x.hideClass = Object.assign({}, xi.hideClass, x.hideClass)),
          x.animation === !1 &&
            ((x.showClass = { backdrop: "swal2-noanimation" }),
            (x.hideClass = {})),
          x
        );
      },
      Cw = function (s) {
        var l = {
          popup: Ce(),
          container: Ge(),
          actions: xn(),
          confirmButton: zt(),
          denyButton: bn(),
          cancelButton: Rn(),
          loader: Ln(),
          closeButton: ha(),
          validationMessage: $t(),
          progressSteps: Lt(),
        };
        return $e.domCache.set(s, l), l;
      },
      kw = function (s, l, d) {
        var x = rr();
        Te(x),
          l.timer &&
            ((s.timeout = new rw(function () {
              d("timer"), delete s.timeout;
            }, l.timer)),
            l.timerProgressBar &&
              (pe(x),
              Q(x, l, "timerProgressBar"),
              setTimeout(function () {
                s.timeout && s.timeout.running && zr(l.timer);
              })));
      },
      Sw = function (s, l) {
        if (!l.toast) {
          if (!he(l.allowEnterKey)) {
            Tw();
            return;
          }
          _w(s, l) || Gl(-1, 1);
        }
      },
      _w = function (s, l) {
        return l.focusDeny && yt(s.denyButton)
          ? (s.denyButton.focus(), !0)
          : l.focusCancel && yt(s.cancelButton)
          ? (s.cancelButton.focus(), !0)
          : l.focusConfirm && yt(s.confirmButton)
          ? (s.confirmButton.focus(), !0)
          : !1;
      },
      Tw = function () {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == "function" &&
          document.activeElement.blur();
      };
    if (
      typeof window < "u" &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      var oh = new Date(),
        sh = localStorage.getItem("swal-initiation");
      sh
        ? (oh.getTime() - Date.parse(sh)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(function () {
            document.body.style.pointerEvents = "none";
            var f = document.createElement("audio");
            (f.src =
              "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
              (f.loop = !0),
              document.body.appendChild(f),
              setTimeout(function () {
                f.play().catch(function () {});
              }, 2500);
          }, 500)
        : localStorage.setItem("swal-initiation", "".concat(oh));
    }
    (ot.prototype.disableButtons = Ff),
      (ot.prototype.enableButtons = Uf),
      (ot.prototype.getInput = Bf),
      (ot.prototype.disableInput = Hf),
      (ot.prototype.enableInput = Vf),
      (ot.prototype.hideLoading = zo),
      (ot.prototype.disableLoading = zo),
      (ot.prototype.showValidationMessage = Wf),
      (ot.prototype.resetValidationMessage = Kf),
      (ot.prototype.close = or),
      (ot.prototype.closePopup = or),
      (ot.prototype.closeModal = or),
      (ot.prototype.closeToast = or),
      (ot.prototype.rejectPromise = Af),
      (ot.prototype.update = Qf),
      (ot.prototype._destroy = Xf),
      Object.assign(ot, nw),
      Object.keys($y).forEach(function (f) {
        ot[f] = function () {
          if (Cn && Cn[f]) {
            var s;
            return (s = Cn)[f].apply(s, arguments);
          }
          return null;
        };
      }),
      (ot.DismissReason = vi),
      (ot.version = "11.10.1");
    var Vo = ot;
    return (Vo.default = Vo), Vo;
  }),
    typeof sr < "u" &&
      sr.Sweetalert2 &&
      (sr.swal = sr.sweetAlert = sr.Swal = sr.SweetAlert = sr.Sweetalert2),
    typeof document < "u" &&
      (function (n, r) {
        var i = n.createElement("style");
        if ((n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet))
          i.styleSheet.disabled || (i.styleSheet.cssText = r);
        else
          try {
            i.innerHTML = r;
          } catch {
            i.innerText = r;
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
      );
})(c1);
var _S = c1.exports;
const sl = ll(_S),
  TS = () => {
    const e = (t) => {
      t.preventDefault();
      const n = t.target,
        r = n.name.value,
        i = n.category.value,
        a = n.supplierName.value,
        o = n.price.value,
        c = n.photo.value,
        u = { name: r, category: i, supplierName: a, price: o, photo: c };
      n.reset(),
        fetch("https://localhost:5000/items", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(u),
        })
          .then((h) => h.json())
          .then((h) => {
            console.log(h),
              h.insertedId &&
                sl.fire({
                  title: "Success!",
                  text: "User Added Successfully",
                  icon: "Success",
                  confirmButtonText: "Cool",
                });
          });
    };
    return m.jsx("div", {
      className: " py-48 bg-slate-900",
      children: m.jsxs("div", {
        className: "container",
        children: [
          m.jsx("h2", {
            className: "text-4xl text-center font-semibold text-white",
            children: "Add New Food",
          }),
          m.jsxs("form", {
            onSubmit: e,
            children: [
              m.jsxs("div", {
                className:
                  "container grid grid-cols-1 md:grid-cols-2 gap-5  font-semibold text-xl py-8",
                children: [
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Item Name",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Enter Item name",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Category",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "category",
                        id: "category",
                        placeholder: "Category",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Supplier Name",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "supplierName",
                        id: "supplierName",
                        placeholder: "Supplier",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Price",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "price",
                        id: "price",
                        placeholder: "$ 00",
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "mx-5",
                children: [
                  m.jsx("p", {
                    className: "text-white font-semibold text-xl",
                    children: "Image URL",
                  }),
                  m.jsx("input", {
                    className:
                      "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4 ",
                    type: "url",
                    name: "photo",
                    id: "photo",
                    placeholder: "Photo",
                  }),
                ],
              }),
              m.jsx("div", {
                className: "text-center",
                children: m.jsx("button", {
                  className:
                    "text-white  text-xl bg-orange-600 px-3 py-2 mt-12 rounded-lg font-semibold hover:bg-orange-700",
                  type: "submit",
                  children: "Add New",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  NS = () =>
    m.jsxs("div", {
      children: [
        m.jsx("div", {
          className:
            "bg-slate-900 text-center py-8 md:py-36 invisible md:visible",
          children: m.jsx("h1", {
            className: "text-5xl text-orange-500 font-bold",
            children: "All Chef",
          }),
        }),
        m.jsx(ev, {}),
      ],
    }),
  IS = "/assets/offer-2kNul1SY.png",
  PS = () =>
    m.jsxs("div", {
      className:
        " md:flex justify-center gap-12 py-36 md:py-48 bg-slate-900 text-white font-bold",
      children: [
        m.jsx("div", {
          className: "flex  items-center",
          children: m.jsxs("h3", {
            className: "text-4xl md:text-6xl justify-center",
            children: [
              "Today",
              " ",
              m.jsxs("span", {
                className: "text-orange-600",
                children: ["special ", m.jsx("br", {}), " offer !!"],
              }),
            ],
          }),
        }),
        m.jsx("img", {
          className: "rounded-2xl h-[500px]  ",
          src: IS,
          alt: "",
        }),
      ],
    }),
  AS = ({ blog: e }) => {
    const { question: t, answer: n } = e;
    return m.jsxs("div", {
      className:
        "bg-slate-200 p-5 rounded-xl shadow-lg hover:shadow-orange-400",
      children: [
        m.jsxs("h2", {
          className: "text-xl font-semibold text-slate-800 my-3",
          children: [
            m.jsx("span", {
              className: "font-bold text-2xl",
              children: "Question:",
            }),
            " ",
            t,
          ],
        }),
        m.jsxs("p", {
          className: " text-base ",
          children: [
            m.jsx("span", {
              className: "font-semibold text-orange-500 text-lg",
              children: "Answer:",
            }),
            " ",
            n,
          ],
        }),
      ],
    });
  },
  RS = () => {
    const [e, t] = D.useState([]);
    return (
      D.useEffect(() => {
        fetch("https://localhost:5000/blogs")
          .then((n) => n.json())
          .then((n) => t(n));
      }, []),
      m.jsxs("div", {
        children: [
          m.jsx("div", {
            className:
              "bg-slate-900 text-center py-8 md:py-36 invisible md:visible",
            children: m.jsx("h1", {
              className:
                " text-orange-500  text-center mb-10 text-5xl  font-bold",
              children: "Our Blogs",
            }),
          }),
          m.jsx("div", {
            className: "container py-28",
            children: m.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-7 ",
              children: e.map((n) => m.jsx(AS, { blog: n }, n.id)),
            }),
          }),
        ],
      })
    );
  },
  LS = () => {
    const e = Qd();
    console.log(e);
    const {
      name: t,
      image_url: n,
      bio: r,
      experience: i,
      phone: a,
      email: o,
      recipes: c,
      best_recipe: u,
      recipes_list: h,
    } = e;
    return m.jsx("section", {
      className: "  bg-slate-900  pt-24 md:pt-48 pb-8 md:px-48  ",
      children: m.jsx("div", {
        className: " px-4 md:px-8  ",
        children: m.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-5 md:mt-0 text-white",
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("h1", {
                  className: "text-4xl font-bold drop-shadow-lg",
                  children: t,
                }),
                m.jsx("h3", {
                  className: "my-1 mt-4 font-semibold text-2xl",
                  children: "About :",
                }),
                m.jsx("p", {
                  className: "text-lg font-medium text-slate-300",
                  children: r,
                }),
                m.jsxs("div", {
                  className: "md:flex gap-10 mt-8  font-medium text-xl",
                  children: [
                    m.jsxs("div", {
                      children: [
                        m.jsxs("p", {
                          children: [
                            "Recipes : ",
                            m.jsx("span", {
                              className: "text-lg",
                              children: c,
                            }),
                          ],
                        }),
                        m.jsxs("p", {
                          children: [
                            "Phone : ",
                            m.jsx("span", {
                              className: "text-lg",
                              children: a,
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      children: [
                        m.jsxs("p", {
                          children: [
                            "Experience :",
                            " ",
                            m.jsxs("span", {
                              className: "text-lg",
                              children: [i, " Years"],
                            }),
                          ],
                        }),
                        m.jsxs("p", {
                          children: [
                            "Email : ",
                            m.jsx("span", {
                              className: "text-lg",
                              children: o,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsxs("p", {
                  className: "font-medium mt-3 md:flex gap-3 text-lg mb-12",
                  children: [
                    m.jsxs("span", {
                      className: " text-orange-400 font-bold underline",
                      children: ["Best Recipe :", " "],
                    }),
                    m.jsx("div", { children: u }),
                  ],
                }),
              ],
            }),
            m.jsx("div", {
              className: "h-80 rounded-xl md:h-[480px]  overflow-hidden  ",
              children: m.jsx("img", { src: n, alt: t }),
            }),
          ],
        }),
      }),
    });
  },
  OS = ({ item: e, allItems: t, setAllItems: n }) => {
    const { _id: r, name: i, supplierName: a, price: o, photo: c } = e,
      u = (h) => {
        sl.fire({
          title: "Are you sure?",
          text: "You won't be able to delete this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((g) => {
          g.isConfirmed &&
            fetch(`https://localhost:5000/items/${h}`, { method: "delete" })
              .then((y) => y.json())
              .then((y) => {
                if ((console.log(y), y.modifiedCount > 0)) {
                  sl.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  const b = t.filter((N) => N._id !== h);
                  n(b);
                }
              });
        });
      };
    return m.jsxs("div", {
      className:
        "flex gap-5 justify-around items-center bg-slate-900 py-7 rounded-2xl ",
      children: [
        m.jsxs("div", {
          className: "flex gap-4 items-center ",
          children: [
            m.jsx("img", {
              className: "w-[200px] rounded-xl",
              src: c,
              alt: "",
            }),
            m.jsxs("div", {
              className: "text-white font-semibold",
              children: [
                m.jsxs("h3", {
                  className: "text-xl",
                  children: ["Name : ", i],
                }),
                m.jsxs("p", { children: ["Supplier Name : ", a] }),
                m.jsxs("p", {
                  children: [
                    "Price: ",
                    m.jsxs("span", {
                      className: "text-orange-500",
                      children: ["$", o],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className: "grid gap-3 text-white",
          children: [
            m.jsx("p", {
              className: " bg-[#D2B48C] text-lg px-2 rounded-lg ",
              children: "View",
            }),
            m.jsx(bt, {
              to: `update/${r}`,
              children: m.jsx("button", {
                className: " bg-[#3C393B] text-lg px-2 rounded-lg",
                children: "Edit",
              }),
            }),
            m.jsx("button", {
              onClick: () => u(r),
              className: "bg-[#EA4744] text-lg rounded-lg px-4 ",
              children: "X",
            }),
          ],
        }),
      ],
    });
  },
  MS = () => {
    const e = Qd(),
      [t, n] = D.useState(e);
    return m.jsxs("div", {
      className: "container py-48 ",
      children: [
        m.jsx("h3", {
          className: "text-4xl text-center font-semibold mb-12",
          children: "Our Food",
        }),
        m.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-7 ",
          children: e.map((r) =>
            m.jsx(OS, { item: r, allItems: t, setAllItems: n }, r._id)
          ),
        }),
      ],
    });
  },
  DS = () => {
    const e = Qd(),
      { _id: t, name: n, supplierName: r, price: i, photo: a } = e,
      o = (c) => {
        c.preventDefault();
        const u = c.target,
          h = u.name.value,
          g = u.category.value,
          y = u.supplierName.value,
          b = u.price.value,
          N = u.photo.value,
          S = { name: h, category: g, supplierName: y, price: b, photo: N };
        u.reset(),
          fetch(`https://localhost:5000/items/${t}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(S),
          })
            .then((k) => k.json())
            .then((k) => {
              console.log(k),
                k.insertedId &&
                  sl.fire({
                    title: "Success!",
                    text: "Food Updated Successfully",
                    icon: "Success",
                    confirmButtonText: "Cool",
                  });
            });
      };
    return m.jsx("div", {
      className: " py-48 bg-slate-900",
      children: m.jsxs("div", {
        className: "container",
        children: [
          m.jsxs("h2", {
            className: "text-4xl text-center font-semibold text-black",
            children: ["Add New Food ", n],
          }),
          m.jsxs("form", {
            onSubmit: o,
            children: [
              m.jsxs("div", {
                className:
                  "container grid grid-cols-1 md:grid-cols-2 gap-5  font-semibold text-xl py-8",
                children: [
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Item Name",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "name",
                        id: "name",
                        defaultValue: n,
                        placeholder: "Enter Item name",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Category",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "category",
                        id: "category",
                        defaultValue: category,
                        placeholder: "Category",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Supplier Name",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "supplierName",
                        id: "supplierName",
                        placeholder: "Supplier",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("p", {
                        className: "text-white",
                        children: "Price",
                      }),
                      m.jsx("input", {
                        className:
                          "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4",
                        type: "text",
                        name: "price",
                        id: "price",
                        placeholder: "$ 00",
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "mx-5",
                children: [
                  m.jsx("p", {
                    className: "text-white font-semibold text-xl",
                    children: "Image URL",
                  }),
                  m.jsx("input", {
                    className:
                      "w-full text-lg font-medium px-2 py-2 rounded-xl outline-orange-500 mt-4 ",
                    type: "url",
                    name: "photo",
                    id: "photo",
                    placeholder: "Photo",
                  }),
                ],
              }),
              m.jsx("div", {
                className: "text-center",
                children: m.jsx("button", {
                  className:
                    "text-white  text-xl bg-orange-600 px-3 py-2 mt-12 rounded-lg font-semibold hover:bg-orange-700",
                  type: "submit",
                  children: "Add New",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  jS = m3([
    {
      path: "/",
      element: m.jsx(G6, {}),
      children: [
        { path: "/", element: m.jsx(z3, {}) },
        { path: "all-chef", element: m.jsx(NS, {}) },
        {
          path: "chef/:id",
          element: m.jsx(yS, { children: m.jsx(LS, {}) }),
          loader: ({ params: e }) =>
            fetch(`https://localhost:5000/chef/${e.id}`),
        },
        { path: "recipes", element: m.jsx(PS, {}) },
        { path: "blogs", element: m.jsx(RS, {}) },
        { path: "login", element: m.jsx(ES, {}) },
        { path: "signUp", element: m.jsx(CS, {}) },
        { path: "profile", element: m.jsx(Kv, {}) },
        { path: "addItems", element: m.jsx(TS, {}) },
        {
          path: "allItems",
          element: m.jsx(MS, {}),
          loader: () => fetch("https://localhost:5000/items"),
        },
        {
          path: "update/:id",
          element: m.jsx(DS, {}),
          loader: ({ params: e }) =>
            fetch(`https://localhost:5000/items/${e.id}`),
        },
        { path: "*", element: m.jsx(SS, {}) },
      ],
    },
  ]);
var BS = { exports: {} },
  u1 = { exports: {} },
  $S = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  zS = $S,
  US = zS;
function d1() {}
function f1() {}
f1.resetWarningCache = d1;
var FS = function () {
  function e(r, i, a, o, c, u) {
    if (u !== US) {
      var h = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((h.name = "Invariant Violation"), h);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: f1,
    resetWarningCache: d1,
  };
  return (n.PropTypes = n), n;
};
u1.exports = FS();
var VS = u1.exports;
(function (e) {
  var t = Object.create,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    a = Object.getPrototypeOf,
    o = Object.prototype.hasOwnProperty,
    c = (A, C) => {
      for (var O in C) n(A, O, { get: C[O], enumerable: !0 });
    },
    u = (A, C, O, B) => {
      if ((C && typeof C == "object") || typeof C == "function")
        for (let $ of i(C))
          !o.call(A, $) &&
            $ !== O &&
            n(A, $, {
              get: () => C[$],
              enumerable: !(B = r(C, $)) || B.enumerable,
            });
      return A;
    },
    h = (A, C, O) => (
      (O = A != null ? t(a(A)) : {}),
      u(
        C || !A || !A.__esModule
          ? n(O, "default", { value: A, enumerable: !0 })
          : O,
        A
      )
    ),
    g = (A) => u(n({}, "__esModule", { value: !0 }), A),
    y = {};
  c(y, { default: () => L }), (e.exports = g(y));
  var b = D,
    N = h(VS),
    S = 16,
    k = [],
    I = (A, { fillColor: C, text: O, textColor: B, canvasSize: $ }) => {
      const K = $ / 5;
      A.font = `bold ${$ - K * 2}px arial`;
      const te = Math.min(A.measureText(O).width, $ - K) + K,
        re = $ - te,
        Z = $ / 2 - K,
        ye = K + $ / 2,
        Se = Math.min(te / 2, ye / 2);
      A.beginPath(),
        A.moveTo(re + Se, Z),
        A.arcTo(re + te, Z, re + te, Z + ye, Se),
        A.arcTo(re + te, Z + ye, re, Z + ye, Se),
        A.arcTo(re, Z + ye, re, Z, Se),
        A.arcTo(re, Z, re + te, Z, Se),
        A.closePath(),
        (A.fillStyle = C),
        A.fill(),
        (A.fillStyle = B),
        (A.textBaseline = "bottom"),
        (A.textAlign = "right"),
        A.fillText(O, $ - K / 2, $, $ - K);
    },
    w = ({
      alertCount: A,
      alertFillColor: C,
      alertTextColor: O,
      callback: B,
      renderOverlay: $,
      url: K,
      canvasSize: te,
    }) => {
      const re = document.createElement("img");
      (re.crossOrigin = "Anonymous"),
        (re.onload = function () {
          const Z = document.createElement("canvas");
          (Z.width = te), (Z.height = te);
          const ye = Z.getContext("2d");
          ye.clearRect(0, 0, re.width, re.height),
            ye.drawImage(re, 0, 0, Z.width, Z.height),
            A && I(ye, { fillColor: C, textColor: O, text: A, canvasSize: te }),
            $ && $(Z, ye),
            B(ye.canvas.toDataURL());
        }),
        (re.src = K);
    },
    v = (A) => {
      if (!(typeof document > "u") && k.length === 0) {
        var C = document.getElementsByTagName("head")[0];
        const $ = document.createElement("link");
        ($.type = "image/x-icon"), ($.rel = "icon");
        const K = document.createElement("link");
        (K.rel = "apple-touch-icon"), k.push($, K);
        for (var O = C.getElementsByTagName("link"), B = O.length; --B >= 0; )
          /\bicon\b/i.test(O[B].getAttribute("rel")) &&
            !A(O[B]) &&
            C.removeChild(O[B]);
        k.forEach((te) => C.appendChild(te));
      }
    },
    E = ({
      iconSize: A,
      alertCount: C,
      alertFillColor: O,
      alertTextColor: B,
      animated: $,
      animationDelay: K,
      keepIconLink: te,
      renderOverlay: re,
      url: Z,
    }) => {
      const ye = (0, b.useRef)(0),
        Se = (0, b.useRef)(null),
        [, ht] = (0, b.useState)(),
        we = (0, b.useCallback)(() => ht({}), []),
        F = (0, b.useCallback)(() => {
          v(te), (ye.current = (ye.current + 1) % Z.length), we();
        }, [we, te, Z]);
      (0, b.useEffect)(() => {
        F();
      }, [F]);
      const ee = Z instanceof Array && $;
      (0, b.useEffect)(() => {
        if (ee) {
          if (!Se.current) {
            const fe = setInterval(F, K);
            Se.current = fe;
          }
        } else
          Se.current && (clearInterval(Se.current), (Se.current = null), v(te));
      }, [K, ee, te, F, Z]);
      const z = ee ? Z[ye.current] : Z instanceof Array ? Z[0] : Z;
      return (
        C || re
          ? w({
              alertCount: C,
              alertFillColor: O,
              alertTextColor: B,
              callback: (fe) => {
                k.forEach((H) => (H.href = fe));
              },
              renderOverlay: re,
              url: z,
              canvasSize: A,
            })
          : k.forEach((fe) => (fe.href = z)),
        null
      );
    };
  (E.defaultProps = {
    iconSize: S,
    alertCount: null,
    alertFillColor: "red",
    alertTextColor: "white",
    animated: !0,
    animationDelay: 500,
    keepIconLink: () => !1,
    renderOverlay: null,
    url: null,
  }),
    (E.propTypes = {
      iconSize: N.default.number,
      alertCount: N.default.oneOfType([N.default.number, N.default.string]),
      alertFillColor: N.default.string,
      alertTextColor: N.default.string,
      animated: N.default.bool,
      animationDelay: N.default.number,
      keepIconLink: N.default.func,
      renderOverlay: N.default.func,
      url: N.default.oneOfType([
        N.default.arrayOf(N.default.string),
        N.default.string,
      ]).isRequired,
    });
  var L = E;
  e.exports = e.exports.default;
})(BS);
Bc.createRoot(document.getElementById("root")).render(
  m.jsx(p.StrictMode, {
    children: m.jsx(W6, { children: m.jsx(C3, { router: jS }) }),
  })
);
