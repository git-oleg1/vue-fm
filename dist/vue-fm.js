import { ref as T, watch as Oe, inject as L, openBlock as x, createElementBlock as k, createElementVNode as d, unref as S, normalizeClass as mt, createTextVNode as ot, toDisplayString as D, createCommentVNode as Y, createVNode as Ct, TransitionGroup as wo, withCtx as W, Fragment as nt, renderList as St, reactive as Me, onMounted as Mt, onUpdated as xo, withDirectives as xt, vShow as Se, withModifiers as Wt, nextTick as Le, isRef as Gr, vModelSelect as Dr, customRef as So, withKeys as ne, vModelText as ae, normalizeStyle as Jr, provide as Ut, createBlock as J, resolveDynamicComponent as _o, renderSlot as Ye } from "vue";
import ze from "plupload";
var Fr;
const $e = (Fr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Fr.getAttribute("content"), Ee = (r, { method: t = "get", params: e = {}, json: s = !0, signal: a = null, headers: i = {} }) => {
  const l = { method: t };
  if (l.signal = a, l.headers = {}, Object.assign(l.headers, i), t == "get")
    r += "?" + new URLSearchParams(e);
  else {
    $e && (l.headers["X-CSRF-Token"] = $e);
    let h = new FormData();
    for (const [v, p] of Object.entries(e))
      h.append(v, p);
    l.body = h;
  }
  return fetch(r, l).then((h) => h.ok ? s ? h.json() : h.text() : h.json().then(Promise.reject.bind(Promise)));
};
function ko(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, e) {
    var s = r.get(t);
    s ? s.push(e) : r.set(t, [e]);
  }, off: function(t, e) {
    var s = r.get(t);
    s && (e ? s.splice(s.indexOf(e) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, e) {
    var s = r.get(t);
    s && s.slice().map(function(a) {
      a(e);
    }), (s = r.get("*")) && s.slice().map(function(a) {
      a(t, e);
    });
  } };
}
function We(r) {
  let t = localStorage.getItem(r + "_storage");
  const e = T(JSON.parse(t));
  Oe(e, s);
  function s() {
    e.value === null || e.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(e.value));
  }
  function a(h, v) {
    e.value = Object.assign({ ...e.value }, { [h]: v });
  }
  function i() {
    e.value = null;
  }
  return { getStore: (h, v = null) => e.value === null || e.value === "" ? v : e.value.hasOwnProperty(h) ? e.value[h] : v, setStore: a, clearStore: i };
}
const Cr = T("");
function Tt() {
  function r(t) {
    Cr.value = t;
  }
  return { apiUrl: Cr, setApiUrl: r };
}
const Do = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Co = {
  key: 0,
  class: "flex text-center"
}, Mo = ["aria-label"], $o = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Eo = [
  $o
], Ao = ["aria-label"], To = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Oo = [
  To
], Lo = ["aria-label"], Io = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Po = [
  Io
], No = ["aria-label"], jo = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Vo = [
  jo
], Ho = {
  key: 1,
  class: "flex text-center"
}, Ro = { class: "pl-2" }, zo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Bo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Uo = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ko = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Yo = [
  Uo,
  Ko
], Wo = { class: "flex text-center items-center justify-end" }, Xo = ["aria-label"], qo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), Fo = [
  qo
], Go = ["aria-label"], Jo = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, Zo = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, Qo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, ti = ["aria-label"], ei = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, ri = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, si = {
  name: "VFToolbar"
}, oi = /* @__PURE__ */ Object.assign(si, {
  props: {
    data: Object
  },
  setup(r) {
    const t = L("emitter"), { getStore: e, setStore: s } = L("storage"), { t: a } = L("i18n"), i = T(e("viewport", "grid")), l = T([]), h = T(e("full-screen", !1)), v = T("");
    t.on("vf-search-query", ({ newQuery: y }) => {
      v.value = y;
    });
    const p = L("loadingState"), f = () => p.value, m = () => {
      h.value = !h.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (y) => {
      l.value = y;
    }), t.on("vf-view-toggle", (y) => {
      s("viewport", y), i.value = y;
    }), (y, C) => (x(), k("div", Do, [
      v.value.length ? (x(), k("div", Ho, [
        d("div", Ro, [
          ot(D(S(a)("Search results for")) + " ", 1),
          d("span", zo, D(v.value), 1)
        ]),
        f() ? (x(), k("svg", Bo, Yo)) : Y("", !0)
      ])) : (x(), k("div", Co, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: C[0] || (C[0] = ($) => S(t).emit("vf-modal-show", { type: "new-folder", items: l.value }))
        }, Eo, 8, Mo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: C[1] || (C[1] = ($) => l.value.length != 1 || S(t).emit("vf-modal-show", { type: "rename", items: l.value }))
        }, [
          (x(), k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Oo, 2))
        ], 8, Ao),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: C[2] || (C[2] = ($) => !l.value.length || S(t).emit("vf-modal-show", { type: "delete", items: l.value }))
        }, [
          (x(), k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Po, 2))
        ], 8, Lo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: C[3] || (C[3] = ($) => S(t).emit("vf-modal-show", { type: "upload", items: l.value }))
        }, Vo, 8, No)
      ])),
      d("div", Wo, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (x(), k("svg", {
            onClick: C[4] || (C[4] = ($) => S(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, Fo))
        ], 8, Xo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: m
        }, [
          (x(), k("svg", Jo, [
            h.value ? (x(), k("path", Zo)) : (x(), k("path", Qo))
          ]))
        ], 8, Go),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: C[5] || (C[5] = ($) => v.value.length || S(t).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (x(), k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: mt([v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (x(), k("path", ei)) : Y("", !0),
            i.value == "list" ? (x(), k("path", ri)) : Y("", !0)
          ], 2))
        ], 8, ti)
      ])
    ]));
  }
});
var ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zr = { exports: {} };
(function(r, t) {
  (function(e, s) {
    r.exports = s();
  })(ii, function() {
    function e(u, c) {
      if (!(u instanceof c))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(u, c) {
      for (var o = 0; o < c.length; o++) {
        var b = c[o];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(u, b.key, b);
      }
    }
    function a(u, c, o) {
      return c && s(u.prototype, c), o && s(u, o), u;
    }
    function i(u, c, o) {
      return c in u ? Object.defineProperty(u, c, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : u[c] = o, u;
    }
    function l(u, c) {
      var o = Object.keys(u);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(u);
        c && (b = b.filter(function(n) {
          return Object.getOwnPropertyDescriptor(u, n).enumerable;
        })), o.push.apply(o, b);
      }
      return o;
    }
    function h(u) {
      for (var c = 1; c < arguments.length; c++) {
        var o = arguments[c] != null ? arguments[c] : {};
        c % 2 ? l(Object(o), !0).forEach(function(b) {
          i(u, b, o[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach(function(b) {
          Object.defineProperty(u, b, Object.getOwnPropertyDescriptor(o, b));
        });
      }
      return u;
    }
    function v(u, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Super expression must either be null or a function");
      u.prototype = Object.create(c && c.prototype, {
        constructor: {
          value: u,
          writable: !0,
          configurable: !0
        }
      }), c && f(u, c);
    }
    function p(u) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, p(u);
    }
    function f(u, c) {
      return f = Object.setPrototypeOf || function(b, n) {
        return b.__proto__ = n, b;
      }, f(u, c);
    }
    function m() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function y(u, c, o) {
      return m() ? y = Reflect.construct : y = function(n, g, w) {
        var M = [null];
        M.push.apply(M, g);
        var N = Function.bind.apply(n, M), q = new N();
        return w && f(q, w.prototype), q;
      }, y.apply(null, arguments);
    }
    function C(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function $(u) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return $ = function(b) {
        if (b === null || !C(b))
          return b;
        if (typeof b != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof c < "u") {
          if (c.has(b))
            return c.get(b);
          c.set(b, n);
        }
        function n() {
          return y(b, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(b.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), f(n, b);
      }, $(u);
    }
    function E(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function A(u, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : E(u);
    }
    function U(u) {
      var c = m();
      return function() {
        var b = p(u), n;
        if (c) {
          var g = p(this).constructor;
          n = Reflect.construct(b, arguments, g);
        } else
          n = b.apply(this, arguments);
        return A(this, n);
      };
    }
    function V(u, c) {
      for (; !Object.prototype.hasOwnProperty.call(u, c) && (u = p(u), u !== null); )
        ;
      return u;
    }
    function I(u, c, o) {
      return typeof Reflect < "u" && Reflect.get ? I = Reflect.get : I = function(n, g, w) {
        var M = V(n, g);
        if (!!M) {
          var N = Object.getOwnPropertyDescriptor(M, g);
          return N.get ? N.get.call(w) : N.value;
        }
      }, I(u, c, o || u);
    }
    function j(u, c) {
      return B(u) || at(u, c) || ut(u, c) || bt();
    }
    function z(u) {
      return _(u) || R(u) || ut(u) || yt();
    }
    function _(u) {
      if (Array.isArray(u))
        return lt(u);
    }
    function B(u) {
      if (Array.isArray(u))
        return u;
    }
    function R(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function at(u, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var o = [], b = !0, n = !1, g = void 0;
        try {
          for (var w = u[Symbol.iterator](), M; !(b = (M = w.next()).done) && (o.push(M.value), !(c && o.length === c)); b = !0)
            ;
        } catch (N) {
          n = !0, g = N;
        } finally {
          try {
            !b && w.return != null && w.return();
          } finally {
            if (n)
              throw g;
          }
        }
        return o;
      }
    }
    function ut(u, c) {
      if (!!u) {
        if (typeof u == "string")
          return lt(u, c);
        var o = Object.prototype.toString.call(u).slice(8, -1);
        if (o === "Object" && u.constructor && (o = u.constructor.name), o === "Map" || o === "Set")
          return Array.from(u);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return lt(u, c);
      }
    }
    function lt(u, c) {
      (c == null || c > u.length) && (c = u.length);
      for (var o = 0, b = new Array(c); o < c; o++)
        b[o] = u[o];
      return b;
    }
    function yt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function bt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var F = function(c, o, b) {
      var n = c.x, g = c.y, w = b.x, M = b.y, N = {
        "+": {
          x: n + w,
          y: g + M
        },
        "-": {
          x: n - w,
          y: g - M
        },
        "*": {
          x: n * w,
          y: g * M
        },
        "/": {
          x: n / w,
          y: g / M
        }
      };
      return N[o];
    }, et = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, O = function(c) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: c.x,
        top: c.y,
        right: c.x,
        bottom: c.y,
        width: o,
        height: o
      };
    }, H = function(c) {
      return {
        x: c,
        y: c
      };
    }, P = function(u, c, o) {
      window.addEventListener("resize", c), window.addEventListener("scroll", c), u.forEach(function(b, n) {
        o.observe(b, {
          childList: n !== 0,
          attributes: !0
        });
      });
    }, dt = function(u) {
      var c = Zt(u);
      return c.x || c.y ? !0 : u instanceof HTMLDocument ? u.body ? !!(u.body.scrollTop = 1) : !!(u.documentElement.scrollTop = 1) : !!(u.scrollTop = 1);
    }, G = function() {
      var u = document.createElement("div");
      return u.style.position = "fixed", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.zIndex = "999999999999999999", u;
    }, tt = function(u) {
      var c = document.createElement("div");
      return c.style.position = "absolute", u || (c.style.background = "rgba(0, 0, 255, 0.1)", c.style.border = "1px solid rgba(0, 0, 255, 0.45)", c.style.display = "none", c.style.pointerEvents = "none"), c;
    }, _t = function(u, c) {
      var o;
      return function() {
        for (var b = arguments.length, n = new Array(b), g = 0; g < b; g++)
          n[g] = arguments[g];
        var w = function() {
          o = null, u.apply(void 0, n);
        };
        clearTimeout(o), o = setTimeout(w, c);
      };
    }, Jt = function() {
      var u, c, o, b;
      return {
        y: ((u = document.body) === null || u === void 0 ? void 0 : u.scrollTop) || ((c = document.documentElement) === null || c === void 0 ? void 0 : c.scrollTop) || 0,
        x: ((o = document.body) === null || o === void 0 ? void 0 : o.scrollLeft) || ((b = document.documentElement) === null || b === void 0 ? void 0 : b.scrollLeft) || 0
      };
    }, He = function(u, c) {
      if (u instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var o = u.getBoundingClientRect();
      return {
        top: o.top,
        left: o.left,
        bottom: o.bottom,
        right: o.right,
        width: (u.clientWidth || o.width) * c,
        height: (u.clientHeight || o.height) * c
      };
    }, Zt = function(u) {
      return !u || u instanceof Document ? Jt() : {
        x: u.scrollLeft >= 0 ? u.scrollLeft : Jt().x,
        y: u.scrollTop >= 0 ? u.scrollTop : Jt().y
      };
    }, yr = function(u) {
      var c = u.elementRect, o = u.containerRect, b = u.tolerance, n = b === void 0 ? {
        x: 0,
        y: 0
      } : b, g = [];
      return c.top - n.y < o.top && g.push("top"), c.left - n.x < o.left && g.push("left"), c.bottom + n.y > o.bottom && g.push("bottom"), c.right + n.y > o.right && g.push("right"), g;
    }, Ks = function(u) {
      var c = u.event;
      return {
        x: c.clientX,
        y: c.clientY
      };
    }, Ys = function(u) {
      var c = u.scrollAmount, o = u.initialPointerPos, b = u.pointerPos, n = {};
      return b.x > o.x - c.x ? (n.left = o.x - c.x, n.width = b.x - o.x + c.x) : (n.left = b.x, n.width = o.x - b.x - c.x), b.y > o.y - c.y ? (n.top = o.y - c.y, n.height = b.y - o.y + c.y) : (n.top = b.y, n.height = o.y - b.y - c.y), n;
    }, wr = function(c) {
      var o = {
        x: 0,
        y: 0
      }, b = window.getComputedStyle(c);
      if (!b.transform || b.transform === "none")
        return o;
      if (b.transform.indexOf("3d") >= 0) {
        var n = b.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var g, w = (g = n[1]) === null || g === void 0 ? void 0 : g.split(",");
          o.x = parseInt(w[12]) || 0, o.y = parseInt(w[13]) || 0;
        }
        return o;
      } else {
        var M = b.transform.trim().match(/matrix\((.*?)\)/);
        if (M && M.length) {
          var N, q = (N = M[1]) === null || N === void 0 ? void 0 : N.split(",");
          o.x = parseInt(q[4]) || 0, o.y = parseInt(q[5]) || 0;
        }
        return o;
      }
    }, Ws = function(c) {
      var o = c.style.transform;
      if (!o || o.indexOf("translate") < 0)
        return wr(c);
      var b = {
        x: 0,
        y: 0
      }, n = o.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var g, w = (g = n[0]) === null || g === void 0 ? void 0 : g.split("(");
        if (w) {
          var M, N = (M = w[1]) === null || M === void 0 ? void 0 : M.split(",");
          b.x = parseInt(N[0]) || 0, b.y = parseInt(N[1]) || 0;
        }
      }
      return !b.x && !b.x ? wr(c) : b;
    }, Xs = function(c) {
      var o = c.style, b = {
        x: parseInt(o.left) || 0,
        y: parseInt(o.top) || 0
      };
      if (!b.x && !b.x) {
        var n = window.getComputedStyle(c);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return b;
    }, qs = function(u, c) {
      return c ? Ws(u) : Xs(u);
    }, Fs = function(u) {
      var c = u.element, o = u.edges, b = u.elementRect, n = u.containerRect, g = u.elementPos, w = u.useTransform;
      o.includes("top") && ue(c, {
        y: g.y + n.top - b.top,
        x: g.x
      }, w), o.includes("left") && ue(c, {
        y: g.y,
        x: g.x + n.left - b.left
      }, w), o.includes("bottom") && ue(c, {
        y: g.y + n.bottom - b.bottom,
        x: g.x
      }, w), o.includes("right") && ue(c, {
        y: g.y,
        x: g.x + n.right - b.right
      }, w);
    }, xr = function(u) {
      var c = u.computedStyle, o = u.node, b = c.position, n = b === "absolute" || b === "relative" || b === "fixed";
      !(o instanceof HTMLDocument) && !n && (o.style.position = "relative");
    }, Gs = function(u) {
      var c = u.shiftKey, o = u.keyboardDragSpeed, b = u.zoom, n = u.key, g = u.dragKeys, w = u.scrollDiff, M = u.canScroll, N = u.scrollCallback, q = {
        x: 0,
        y: 0
      }, X = c ? o * 4 * b : o * b;
      return g.left.includes(n) && (q.x = w.x || -X, !c && !w.x && M && N(["left"], o)), g.right.includes(n) && (q.x = w.x || X, !c && !w.x && M && N(["right"], o)), g.up.includes(n) && (q.y = w.y || -X, !c && !w.y && M && N(["top"], o)), g.down.includes(n) && (q.y = w.y || X, !c && !w.y && M && N(["bottom"], o)), q;
    }, Js = function(u) {
      var c = u.element, o = u.force, b = u.multiSelectionToggle, n = u.SelectedSet, g = u.hoverClassName;
      c.classList.contains(g) && !o || (n.has(c) ? b && n.delete(c) : n.add(c), c.classList.add(g));
    }, Zs = function(u) {
      var c = u.element, o = u.force, b = u.SelectedSet, n = u.PrevSelectedSet, g = u.hoverClassName;
      if (!c.classList.contains(g) && !o)
        return !1;
      var w = b.has(c), M = n.has(c);
      w && !M ? b.delete(c) : !w && M && b.add(c), c.classList.remove(g);
    }, ce = function(c, o, b) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(o, '".'));
    }, rt = function(c, o, b, n) {
      if (o === void 0)
        return b ? i({}, c, n) : {};
      if (o === null)
        return i({}, c, null);
      var g = !0, w = !1, M = typeof n == "string";
      M && (g = typeof o == "string" || o instanceof String), M && !g && (w = !0, ce(c, "string"));
      var N = !isNaN(n) && typeof n == "number";
      N && (g = !isNaN(o) && typeof o == "number"), N && !g && (w = !0, ce(c, "number"));
      var q = Object.prototype.toString.call(n) === "[object Object]";
      q && (g = Object.prototype.toString.call(o) === "[object Object]"), q && !g && (w = !0, ce(c, "object"));
      var X = typeof n == "boolean";
      X && (g = typeof o == "boolean"), X && !g && (w = !0, ce(c, "boolean"));
      var ft = Array.isArray(n);
      ft && (g = Array.isArray(o)), ft && !g && (w = !0, ce(c, "array"));
      var kt = w || b;
      return c === "dragKeys" && g ? i({}, c, Object.assign(n, o)) : c === "dragKeys" && !g ? kt ? i({}, c, n) : {} : g ? i({}, c, o) : kt ? i({}, c, n) : {};
    }, Qs = function(u, c) {
      return h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h({}, rt("area", u.area, c, document)), rt("selectables", u.selectables, c, null)), rt("autoScrollSpeed", u.autoScrollSpeed, c, 5)), rt("overflowTolerance", u.overflowTolerance, c, {
        x: 25,
        y: 25
      })), rt("zoom", u.zoom, c, 1)), rt("customStyles", u.customStyles, c, !1)), rt("multiSelectMode", u.multiSelectMode, c, !1)), rt("multiSelectToggling", u.multiSelectToggling, c, !0)), rt("multiSelectKeys", u.multiSelectKeys, c, ["Control", "Shift", "Meta"])), rt("selector", u.selector, c, null)), rt("draggability", u.draggability, c, !0)), rt("immediateDrag", u.immediateDrag, c, !0)), rt("keyboardDrag", u.keyboardDrag, c, !0)), rt("dragKeys", u.dragKeys, c, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), rt("keyboardDragSpeed", u.keyboardDragSpeed, c, 10)), rt("useTransform", u.useTransform, c, !0)), rt("hoverClass", u.hoverClass, c, "ds-hover")), rt("selectableClass", u.selectableClass, c, "ds-selectable")), rt("selectedClass", u.selectedClass, c, "ds-selected")), rt("selectorClass", u.selectorClass, c, "ds-selector")), rt("selectorAreaClass", u.selectorAreaClass, c, "ds-selector-area"));
    }, Re = function(u, c) {
      return u.left < c.right && u.right > c.left && u.top < c.bottom && u.bottom > c.top;
    }, Sr = function(u) {
      var c = u.element, o = u.posDirection, b = u.containerRect, n = u.useTransform, g = qs(c, n), w = F(g, "+", o);
      ue(c, w, n);
      var M = c.getBoundingClientRect(), N = yr({
        elementRect: M,
        containerRect: b
      });
      Fs({
        element: c,
        edges: N,
        elementRect: M,
        containerRect: b,
        elementPos: w,
        useTransform: n
      });
    }, to = function(u, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), u.disconnect();
    }, eo = function(u, c, o) {
      if (!!c.length) {
        var b = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = u instanceof HTMLDocument ? b || document.body : u, g = c.includes("top") && n.scrollTop > 0, w = c.includes("bottom") && n.scrollTop < n.scrollHeight, M = c.includes("left") && n.scrollLeft > 0, N = c.includes("right") && n.scrollLeft < n.scrollWidth;
        g && (n.scrollTop -= 1 * o), w && (n.scrollTop += 1 * o), M && (n.scrollLeft -= 1 * o), N && (n.scrollLeft += 1 * o);
      }
    }, ue = function(u, c, o) {
      if (o) {
        var b = u.style.transform;
        u.style.transform = "translate3d(".concat(c.x, "px,").concat(c.y, "px,1px) ").concat(b.replace(/translate.*?\)/g, ""));
      } else
        u.style.left = "".concat(c.x, "px"), u.style.top = "".concat(c.y, "px");
      return u;
    }, ro = function(u) {
      for (var c = u.subscribe, o = u.publish, b = u.Interaction, n = u.SelectedSet, g = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        "Interaction:start": [{
          name: "dragstart"
        }],
        "Interaction:update": [{
          name: "dragmove",
          condition: function(X) {
            return X.event;
          }
        }],
        "Interaction:end": [{
          name: "callback"
        }]
      }, w = function() {
        var X = j(N[M], 2), ft = X[0], kt = X[1];
        ["pre", !1].forEach(function(ht) {
          return c(ht ? "".concat(ft, ":").concat(ht) : ft, function(Bt) {
            return kt.forEach(function(it) {
              return (!it.condition || it.condition(Bt)) && o(ht ? "".concat(ht).concat(it.name) : it.name, h({
                items: n.elements,
                isDragging: b.isDragging
              }, Bt));
            });
          });
        });
      }, M = 0, N = Object.entries(g); M < N.length; M++)
        w();
    }, Qt = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : z(u) : [];
    }, _r = function(u, c) {
      u.style.left = "".concat(c.left, "px"), u.style.top = "".concat(c.top, "px"), u.style.width = "".concat(c.width, "px"), u.style.height = "".concat(c.height, "px");
    }, so = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "DS", void 0), i(this, "_modificationCallback", void 0), i(this, "_modificationObserver", void 0), i(this, "_zoom", void 0), i(this, "_node", void 0), i(this, "_parentNodes", void 0), i(this, "_computedStyle", void 0), i(this, "_computedBorder", void 0), i(this, "_rect", void 0), i(this, "setArea", function(n) {
          o._node = n, xr({
            computedStyle: o.computedStyle,
            node: o._node
          }), setTimeout(function() {
            o.DS.PubSub.publish("Area:modified:pre", {
              item: o
            }), o.reset(), o.DS.PubSub.publish("Area:modified", {
              item: o
            });
          });
        }), i(this, "start", function() {
          P(o.parentNodes, o._modificationCallback, o._modificationObserver);
        }), i(this, "reset", function() {
          o._computedStyle = void 0, o._rect = void 0, o._computedBorder = void 0, o._parentNodes = void 0;
        }), i(this, "stop", function() {
          to(o._modificationObserver, o._modificationCallback), o.reset();
        }), i(this, "scroll", function(n, g) {
          var w = {
            scroll_directions: n,
            scroll_multiplier: g
          };
          o.DS.PubSub.publish("Area:scroll:pre", w), eo(o._node, n, g), o.DS.PubSub.publish("Area:scroll", w);
        }), this.DS = b, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var g = n.settings;
          return o.setArea(g.area);
        }), this._modificationCallback = _t(function(n) {
          o.DS.PubSub.publish("Area:modified:pre", {
            event: n,
            item: o
          }), o.reset(), o.DS.PubSub.publish("Area:modified", {
            event: n,
            item: o
          });
        }, 60), this._modificationObserver = new MutationObserver(this._modificationCallback), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(u, [{
        key: "HTMLNode",
        get: function() {
          return this._node;
        }
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof HTMLDocument ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = He(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          if (this._parentNodes)
            return this._parentNodes;
          var o = function b(n) {
            var g, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, M = (g = n[w]) === null || g === void 0 ? void 0 : g.parentNode;
            return M ? (n.push(M), w++, b(n, w)) : n;
          };
          return this._parentNodes = o([this.HTMLNode]), this._parentNodes;
        }
      }]), u;
    }(), oo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_prevCursorPos", void 0), i(this, "_prevScrollPos", void 0), i(this, "_elements", []), i(this, "_dragKeys", void 0), i(this, "_dragKeysFlat", []), i(this, "assignDragkeys", function() {
          o._dragKeys = {
            up: o.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: o.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: o.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: o.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, o._dragKeysFlat = [].concat(z(o._dragKeys.up), z(o._dragKeys.down), z(o._dragKeys.left), z(o._dragKeys.right));
        }), i(this, "keyboardDrag", function(n) {
          var g = n.event, w = n.key, M = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes(M) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability || o.DS.continue)) {
            var N = {
              event: g,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:start:pre", "Interaction:start"], N), o._elements = o.DS.getSelection(), o.handleZIndex(!0);
            var q = Gs({
              shiftKey: o.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: o.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: o.DS.stores.SettingsStore.s.zoom,
              key: M,
              scrollCallback: o.DS.Area.scroll,
              scrollDiff: o._scrollDiff,
              canScroll: o.DS.stores.ScrollStore.canScroll,
              dragKeys: o._dragKeys
            });
            o._elements.forEach(function(X) {
              return Sr({
                element: X,
                posDirection: q,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            }), o.DS.publish(["Interaction:update:pre", "Interaction:update"], N);
          }
        }), i(this, "keyboardEnd", function(n) {
          var g = n.event, w = n.key, M = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes(M) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability)) {
            var N = {
              event: g,
              isDragging: o.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:end:pre", "Interaction:end"], N);
          }
        }), i(this, "start", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          !g || w || (o._prevCursorPos = null, o._prevScrollPos = null, o._elements = o.DS.getSelection(), o.handleZIndex(!0));
        }), i(this, "stop", function(n) {
          n != null && n.isKeyboard || (o._prevCursorPos = null, o._prevScrollPos = null, o.handleZIndex(!1), o._elements = []);
        }), i(this, "update", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          if (!(!g || !o._elements.length || w || o.DS.continue)) {
            var M = F(o._cursorDiff, "+", o._scrollDiff);
            o._elements.forEach(function(N) {
              return Sr({
                element: N,
                posDirection: M,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), i(this, "handleZIndex", function(n) {
          o._elements.forEach(function(g) {
            return g.style.zIndex = "".concat((parseInt(g.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(u, [{
        key: "_cursorDiff",
        get: function() {
          var o = this.DS.stores.PointerStore.currentVal, b = this._prevCursorPos ? F(o, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = o, b;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var o = this.DS.stores.ScrollStore.currentVal, b = this._prevScrollPos ? F(o, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = o, b;
        }
      }]), u;
    }(), io = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "isInteracting", void 0), i(this, "isDragging", void 0), i(this, "init", function() {
          return o.DS.publish("Interaction:init:pre", {});
        }), i(this, "_init", function() {
          o.stop(), o.DS.Area.HTMLNode.addEventListener("mousedown", o.start), o.DS.Area.HTMLNode.addEventListener("touchstart", o.start, {
            passive: !1
          }), o.DS.publish("Interaction:init", {});
        }), i(this, "start", function(n) {
          return o.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: o.isDragging
          });
        }), i(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), o._canInteract(n) && (o.isInteracting = !0, o.isDragging = o.isDragEvent(n), o.DS.publish("Interaction:start", {
            event: n,
            isDragging: o.isDragging
          }), document.addEventListener("mouseup", o.reset), document.addEventListener("touchend", o.reset));
        }), i(this, "isDragEvent", function(n) {
          var g = n.target.closest(".".concat(o.DS.stores.SettingsStore.s.selectableClass));
          return !o.DS.stores.SettingsStore.s.draggability || o.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !g ? !1 : (o.DS.stores.SettingsStore.s.immediateDrag && (o.DS.SelectedSet.size ? o.DS.SelectedSet.has(g) || (o.DS.SelectedSet.clear(), o.DS.SelectedSet.add(
            g
          )) : o.DS.SelectedSet.add(
            g
          )), !!o.DS.SelectedSet.has(g));
        }), i(this, "onClick", function(n) {
          var g = n.event;
          if (!!o._canInteract(g) && !(g.detail > 0)) {
            var w = o.DS, M = w.stores, N = M.PointerStore, q = M.KeyStore, X = w.SelectableSet, ft = w.SelectedSet;
            N.start(g);
            var kt = g.target;
            !X.has(kt) || (q.isMultiSelectKeyPressed(g) || ft.clear(), ft.toggle(kt), o.reset());
          }
        }), i(this, "stop", function() {
          o.isInteracting = !1, o.isDragging = !1, o.DS.Area.HTMLNode.removeEventListener("mousedown", o.start), o.DS.Area.HTMLNode.removeEventListener("touchstart", o.start, {
            passive: !1
          }), document.removeEventListener("mouseup", o.reset), document.removeEventListener("touchend", o.reset);
        }), i(this, "update", function(n) {
          var g = n.event, w = n.scroll_directions, M = n.scroll_multiplier;
          o.isInteracting && o.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: g,
            scroll_directions: w,
            scroll_multiplier: M,
            isDragging: o.isDragging
          });
        }), i(this, "reset", function(n) {
          return o.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: o.isDragging
          });
        }), i(this, "_reset", function(n) {
          var g = o.isDragging;
          o.stop(), o.init(), o.DS.publish("Interaction:end", {
            event: n,
            isDragging: g
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:area", this.init), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var g = n.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var g = n.event;
          return o._start(g);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var g = n.event;
          return o._reset(g);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return a(u, [{
        key: "_canInteract",
        value: function(o) {
          var b = o.clientX === 0 && o.clientY === 0 && o.detail === 0 && o.target;
          return !(o.button === 2 || this.isInteracting || o.target && !this.DS.SelectorArea.isInside(
            o.target
          ) || !b && !this.DS.SelectorArea.isClicked(o));
        }
      }]), u;
    }(), no = function u(c) {
      var o = this, b = c.DS;
      e(this, u), i(this, "subscribers", {}), i(this, "subscribe", function(n, g) {
        return Array.isArray(o.subscribers[n]) || (o.subscribers[n] = []), o.subscribers[n].push(g), o.subscribers[n].length - 1;
      }), i(this, "unsubscribe", function(n, g, w) {
        w >= 0 ? o.subscribers[n].splice(w, 1) : g && (o.subscribers[n] = o.subscribers[n].filter(function(M) {
          return M !== g;
        }));
      }), i(this, "publish", function(n, g) {
        Array.isArray(n) ? n.forEach(function(w) {
          return o._publish(w, g);
        }) : o._publish(n, g);
      }), i(this, "_publish", function(n, g) {
        var w = o.subscribers[n];
        !Array.isArray(w) || (n.includes(":pre") ? o._handlePrePublish(w, g) : o._handlePublish(w, g));
      }), i(this, "_handlePublish", function(n, g) {
        for (var w = 0, M = n.length; w < M; w++) {
          if (o.DS.stopped)
            return;
          n[w](g);
        }
      }), i(this, "_handlePrePublish", function(n, g) {
        for (var w = n.length; w--; ) {
          if (o.DS.stopped)
            return;
          n[w](g);
        }
      }), this.DS = b;
    }, ao = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = U(o);
      function o(b) {
        var n, g = b.DS;
        return e(this, o), n = c.call(this), i(E(n), "init", function() {
          return Qt(n.DS.stores.SettingsStore.s.selectables).forEach(function(w) {
            return n.add(w);
          });
        }), i(E(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i(E(n), "_onClick", function(w) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: w
          });
        }), i(E(n), "_onPointer", function(w) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: w
          });
        }), i(E(n), "addAll", function(w) {
          return w.forEach(function(M) {
            return n.add(M);
          });
        }), i(E(n), "deleteAll", function(w) {
          return w.forEach(function(M) {
            return n.delete(M);
          });
        }), n.DS = g, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(w) {
          var M = w.settings;
          n.forEach(function(N) {
            N.classList.remove(M["selectableClass:pre"]), N.classList.add(M.selectableClass);
          });
        }), n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!I(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", g), n.classList.add(this.DS.stores.SettingsStore.s.selectableClass), n.addEventListener("click", this._onClick), n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.stores.SettingsStore.s.draggability && !this.DS.stores.SettingsStore.s.useTransform && xr({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), this.DS.publish("Selectable:added", g), I(p(o.prototype), "add", this).call(this, n);
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!I(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:removed:pre", g), n.classList.remove(this.DS.stores.SettingsStore.s.selectableClass), n.classList.remove(this.DS.stores.SettingsStore.s.hoverClass), n.removeEventListener("click", this._onClick), n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", g), I(p(o.prototype), "delete", this).call(this, n);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ $(Set)), lo = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = U(o);
      function o(b) {
        var n, g = b.DS;
        return e(this, o), n = c.call(this), i(E(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i(E(n), "addAll", function(w) {
          return w.forEach(function(M) {
            return n.add(M);
          });
        }), i(E(n), "deleteAll", function(w) {
          return w.forEach(function(M) {
            return n.delete(M);
          });
        }), n.DS = g, n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!I(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selected:added:pre", g), I(p(o.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", g), this;
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!I(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            this.DS.publish("Selected:removed:pre", g);
            var w = I(p(o.prototype), "delete", this).call(this, n);
            return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", g), w;
          }
        }
      }, {
        key: "toggle",
        value: function(n) {
          return this.has(n) ? this.delete(n) : this.add(n), n;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ $(Set)), co = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_prevSelectedSet", void 0), i(this, "start", function(n) {
          var g = n.event, w = n.isDragging;
          w || (o._storePrevious(g), o._handleInsideSelection(!0, g));
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          g || o.DS.continue || o._handleInsideSelection();
        }), i(this, "_handleInsideSelection", function(n, g) {
          for (var w = o.DS, M = w.SelectableSet, N = w.SelectorArea, q = w.Selector, X = M.elements.map(function(Pt) {
            return [Pt, Pt.getBoundingClientRect()];
          }), ft = [], kt = [], ht = 0, Bt = X.length; ht < Bt; ht++)
            !N.isInside(X[ht][0], X[ht][1]) || (Re(X[ht][1], q.rect) ? ft.push(X[ht][0]) : kt.push(X[ht][0]));
          var it = o.DS.stores.KeyStore.isMultiSelectKeyPressed(g) && o.DS.stores.SettingsStore.s.multiSelectToggling;
          o.DS.continue || (ft.forEach(function(Pt) {
            return Js({
              element: Pt,
              force: n,
              multiSelectionToggle: it,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass
            });
          }), kt.forEach(function(Pt) {
            return Zs({
              element: Pt,
              force: n,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass,
              PrevSelectedSet: o._prevSelectedSet
            });
          }));
        }), this.DS = b, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(u, [{
        key: "_storePrevious",
        value: function(o) {
          var b = this.DS, n = b.stores.KeyStore, g = b.SelectedSet;
          n.isMultiSelectKeyPressed(o) ? this._prevSelectedSet = new Set(g) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), u;
    }(), uo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_rect", void 0), i(this, "attachSelector", function() {
          var n, g;
          o.HTMLNode && (n = o.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && o.DS.SelectorArea.HTMLNode.removeChild(o.HTMLNode), o.HTMLNode = o.DS.stores.SettingsStore.s.selector || tt(o.DS.stores.SettingsStore.s.customStyles), o.HTMLNode.classList.add(o.DS.stores.SettingsStore.s.selectorClass), o.HTMLNode && (g = o.DS.SelectorArea) !== null && g !== void 0 && g.HTMLNode && o.DS.SelectorArea.HTMLNode.appendChild(o.HTMLNode);
        }), i(this, "start", function(n) {
          var g = n.isDragging;
          if (!g) {
            var w = o.DS.stores.PointerStore, M = w.initialValArea;
            _r(o.HTMLNode, O(M, 1)), o.HTMLNode.style.display = "block", o._rect = null;
          }
        }), i(this, "stop", function() {
          o.HTMLNode.style.width = "0", o.HTMLNode.style.height = "0", o.HTMLNode.style.display = "none";
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          if (!(g || o.DS.continue)) {
            var w = o.DS.stores, M = w.ScrollStore, N = w.PointerStore, q = Ys({
              scrollAmount: M.scrollAmount,
              initialPointerPos: N.initialValArea,
              pointerPos: N.currentValArea
            });
            _r(o.HTMLNode, q), o._rect = null;
          }
        }), this.DS = b, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var g = n.settings;
          o.HTMLNode.classList.remove(g["selectorClass:pre"]), o.HTMLNode.classList.add(g.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(u, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), ho = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_scrollInterval", void 0), i(this, "_rect", void 0), i(this, "currentEdges", []), i(this, "start", function() {
          return o.applyElements("append");
        }), i(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", g = document.body ? "body" : "documentElement", w = "".concat(n, "Child");
          o.HTMLNode[w](o.DS.Selector.HTMLNode), document[g][w](o.HTMLNode);
        }), i(this, "updatePos", function() {
          o._rect = null;
          var n = o.DS.Area.rect, g = o.DS.Area.computedBorder, w = o.HTMLNode.style, M = "".concat(n.top + g.top, "px"), N = "".concat(n.left + g.left, "px"), q = "".concat(n.width, "px"), X = "".concat(n.height, "px");
          w.top !== M && (w.top = M), w.left !== N && (w.left = N), w.width !== q && (w.width = q), w.height !== X && (w.height = X);
        }), i(this, "stop", function(n) {
          o.stopAutoScroll(), n && o.applyElements("remove");
        }), i(this, "startAutoScroll", function() {
          o.currentEdges = [], o._scrollInterval = setInterval(function() {
            return o.handleAutoScroll();
          }, 16);
        }), i(this, "handleAutoScroll", function() {
          if (!o.DS.continue) {
            var n = o.DS, g = n.stores.PointerStore, w = n.Area;
            o.currentEdges = yr({
              elementRect: O(g.currentVal),
              containerRect: o.rect,
              tolerance: o.DS.stores.SettingsStore.s.overflowTolerance
            }), o.currentEdges.length && w.scroll(o.currentEdges, o.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), i(this, "stopAutoScroll", function() {
          o.currentEdges = [], clearInterval(o._scrollInterval);
        }), i(this, "isInside", function(n, g) {
          return o.DS.Area.HTMLNode.contains(n) && o.DS.stores.ScrollStore.canScroll ? !0 : Re(o.rect, g || n.getBoundingClientRect());
        }), this.DS = b, this.HTMLNode = G(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var g = n.settings;
          o.HTMLNode.classList.remove(g["selectorAreaClass:pre"]), o.HTMLNode.classList.add(g.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          o.updatePos(), o.stopAutoScroll();
        });
      }
      return a(u, [{
        key: "isClicked",
        value: function(o) {
          var b = this.DS.stores.PointerStore, n = o ? b.getPointerPosition(o) : b.initialVal;
          return Re({
            left: n.x,
            top: n.y,
            right: n.x,
            bottom: n.y
          }, this.rect);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), fo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_currentValues", /* @__PURE__ */ new Set()), i(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), i(this, "init", function() {
          document.addEventListener("keydown", o.keydown), document.addEventListener("keyup", o.keyup), window.addEventListener("blur", o.reset);
        }), i(this, "keydown", function(n) {
          var g = n.key.toLowerCase();
          o.DS.publish("KeyStore:down:pre", {
            event: n,
            key: g
          }), o._currentValues.add(g), o.DS.publish("KeyStore:down", {
            event: n,
            key: g
          });
        }), i(this, "keyup", function(n) {
          var g = n.key.toLowerCase();
          o.DS.publish("KeyStore:up:pre", {
            event: n,
            key: g
          }), o._currentValues.delete(g), o.DS.publish("KeyStore:up", {
            event: n,
            key: g
          });
        }), i(this, "stop", function() {
          document.removeEventListener("keydown", o.keydown), document.removeEventListener("keyup", o.reset), window.removeEventListener("blur", o.reset), o.reset();
        }), i(this, "reset", function() {
          return o._currentValues.clear();
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init);
      }
      return a(u, [{
        key: "isMultiSelectKeyPressed",
        value: function(o) {
          var b = this;
          if (this.DS.stores.SettingsStore.s.multiSelectMode)
            return !0;
          var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(g) {
            return g.toLocaleLowerCase();
          });
          return !!(this.currentValues.some(function(g) {
            return n.includes(g.toLocaleLowerCase());
          }) || o && n.some(function(g) {
            return o[b._keyMapping[g]];
          }));
        }
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), u;
    }(), po = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_isMouseInteraction", !1), i(this, "_initialValArea", void 0), i(this, "_currentValArea", void 0), i(this, "_lastValArea", void 0), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_lastVal", void 0), i(this, "_lastTouch", void 0), i(this, "init", function() {
          document.addEventListener("mousemove", o.update), document.addEventListener("touchmove", o.update, {
            passive: !1
          });
        }), i(this, "getPointerPosition", function(n) {
          return Ks({
            event: o._normalizedEvent(n)
          });
        }), i(this, "update", function(n) {
          !n || (o.DS.publish("PointerStore:updated:pre", {
            event: n
          }), o.currentVal = o.getPointerPosition(n), o._isMouseInteraction && o.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), i(this, "stop", function() {
          document.removeEventListener("mousemove", o.update), document.removeEventListener("touchmove", o.update, {
            passive: !1
          }), setTimeout(function() {
            return o._isMouseInteraction = !1;
          }, 100);
        }), i(this, "reset", function(n) {
          !n || (o.currentVal = o.lastVal = o.getPointerPosition(n), o.stop(), o.init());
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var g = n.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var g = n.event;
          return o.reset(g);
        });
      }
      return a(u, [{
        key: "start",
        value: function(o) {
          !o || (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(o));
        }
      }, {
        key: "_normalizedEvent",
        value: function(o) {
          return "touches" in o && o.type !== "touchend" && (this._lastTouch = o), "touches" in o ? this._lastTouch.touches[0] : o;
        }
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._initialVal = o, this._initialValArea = o && F(o, "-", F(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._currentVal = o, this._currentValArea = o && F(o, "-", F(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(o) {
          this._lastVal = o, this._lastValArea = o && F(o, "-", F(et(this.DS.Area.rect), "+", et(this.DS.Area.computedBorder)));
        }
      }]), u;
    }(), go = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_canScroll", void 0), i(this, "init", function() {
          return o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "start", function() {
          o._currentVal = o._initialVal = Zt(o.DS.stores.SettingsStore.s.area), o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "update", function() {
          return o._currentVal = Zt(o.DS.stores.SettingsStore.s.area);
        }), i(this, "stop", function() {
          o.DS.stores.SettingsStore.s.area.removeEventListener("scroll", o.update), o._initialVal = {
            x: 0,
            y: 0
          }, o._canScroll = null;
        }), i(this, "reset", function() {
          o.stop(), o.start();
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return o.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return o.reset();
        });
      }
      return a(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = dt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var o = F(this.currentVal, "-", this.initialVal), b = H(this.DS.stores.SettingsStore.s.zoom), n = F(F(o, "*", b), "-", o);
          return {
            x: o.x + n.x,
            y: o.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Zt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), u;
    }(), mo = function u(c) {
      var o = this, b = c.DS, n = c.settings;
      e(this, u), i(this, "_settings", {}), i(this, "s", {}), i(this, "update", function(g) {
        var w = g.settings, M = g.init;
        return o.DS.publish("Settings:updated:pre", h({
          settings: w
        }, M ? {
          init: M
        } : {}));
      }), i(this, "_update", function(g) {
        for (var w = g.settings, M = g.init, N = Qs(w, M), q = function() {
          var ht, Bt = j(ft[X], 2), it = Bt[0], Pt = Bt[1];
          it in o._settings || Object.defineProperty(o.s, it, {
            get: function() {
              return o._settings[it];
            },
            set: function(yo) {
              return o.update({
                settings: i({}, it, yo)
              });
            }
          }), o._settings["".concat(it, ":pre")] = o._settings[it], o._settings[it] = Pt;
          var kr = {
            settings: (ht = {}, i(ht, it, o._settings[it]), i(ht, "".concat(it, ":pre"), o._settings["".concat(it, ":pre")]), ht)
          };
          o.DS.publish("Settings:updated", kr), o.DS.publish("Settings:updated:".concat(it), kr);
        }, X = 0, ft = Object.entries(N); X < ft.length; X++)
          q();
      }), this.DS = b, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: n,
        init: !0
      });
    }, vo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this;
        e(this, u), i(this, "continue", !1), i(this, "start", function() {
          o.stopped = !1, o.Interaction.init();
        }), i(this, "break", function() {
          return o.continue = !0;
        }), i(this, "getSelection", function() {
          return o.SelectedSet.elements;
        }), i(this, "getSelectables", function() {
          return o.SelectableSet.elements;
        }), i(this, "getInitialCursorPosition", function() {
          return o.stores.PointerStore.initialVal;
        }), i(this, "getCurrentCursorPosition", function() {
          return o.stores.PointerStore.currentVal;
        }), i(this, "getPreviousCursorPosition", function() {
          return o.stores.PointerStore.lastVal;
        }), i(this, "getInitialCursorPositionArea", function() {
          return o.stores.PointerStore.initialValArea;
        }), i(this, "getCurrentCursorPositionArea", function() {
          return o.stores.PointerStore.currentValArea;
        }), i(this, "getPreviousCursorPositionArea", function() {
          return o.stores.PointerStore.lastValArea;
        }), i(this, "isMultiSelect", function(b) {
          return o.stores.KeyStore.isMultiSelectKeyPressed(b);
        }), i(this, "isDragging", function() {
          return o.Interaction.isDragging;
        }), i(this, "setSettings", function(b) {
          return o.stores.SettingsStore.update({
            settings: b
          });
        }), this.PubSub = new no({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = {}, this.stores.SettingsStore = new mo({
          DS: this,
          settings: c
        }), this.stores.PointerStore = new po({
          DS: this
        }), this.stores.ScrollStore = new go({
          DS: this
        }), this.stores.KeyStore = new fo({
          DS: this
        }), this.Area = new so({
          DS: this
        }), this.Selector = new uo({
          DS: this
        }), this.SelectorArea = new ho({
          DS: this
        }), this.SelectableSet = new ao({
          DS: this
        }), this.SelectedSet = new lo({
          DS: this
        }), this.Selection = new co({
          DS: this
        }), this.Drag = new oo({
          DS: this
        }), this.Interaction = new io({
          DS: this
        }), ro({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction
        }), this.subscribe("Interaction:end", function() {
          return o.continue = !1;
        }), this.start();
      }
      return a(u, [{
        key: "stop",
        value: function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          n && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(o), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), o && this.SelectableSet.clear(), b && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Qt(o)), n || this.addSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Qt(o)), n && this.removeSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(o) {
          var b = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Qt(o).forEach(function(w) {
            return b.SelectedSet.has(w) ? b.removeSelection(o, n, g) : b.addSelection(o, n, g);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(o, b, n), this.getSelection();
        }
      }, {
        key: "clearSelection",
        value: function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "addSelectables",
        value: function(o, b, n) {
          var g = Qt(o);
          return this.SelectableSet.addAll(g), b && this.SelectedSet.addAll(g), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }, {
        key: "setSelectables",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(o, b), this.addSelectables(o, n);
        }
      }, {
        key: "removeSelectables",
        value: function(o, b, n) {
          return this.SelectableSet.deleteAll(Qt(o)), b && this.removeSelection(o), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }]), u;
    }();
    return vo;
  });
})(Zr);
const ni = Zr.exports, Qr = (r, t, e, s, a) => (t = Math, e = t.log, s = 1024, a = e(r) / e(s) | 0, r / t.pow(s, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ts = (r, t = null) => {
  var e;
  return new Date(r * 1e3).toLocaleString((e = t != null ? t : navigator.language) != null ? e : "en-US");
}, ai = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, li = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), ci = [
  li
], ui = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, di = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), hi = [
  di
], fi = {
  name: "VFSortIcon"
}, _e = /* @__PURE__ */ Object.assign(fi, {
  props: { direction: String },
  setup(r) {
    return (t, e) => (x(), k("div", null, [
      r.direction == "down" ? (x(), k("svg", ai, ci)) : Y("", !0),
      r.direction == "up" ? (x(), k("svg", ui, hi)) : Y("", !0)
    ]));
  }
}), pi = ["onClick"], gi = {
  name: "VFToast.vue"
}, mi = /* @__PURE__ */ Object.assign(gi, {
  setup(r) {
    const t = L("emitter"), { getStore: e } = L("storage"), s = T(e("full-screen", !1)), a = (v) => v == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = T([]), l = (v) => {
      i.value.splice(v, 1);
    }, h = (v) => {
      let p = i.value.findIndex((f) => f.id === v);
      p !== -1 && l(p);
    };
    return t.on("vf-toast-clear", () => {
      i.value = [];
    }), t.on("vf-toast-push", (v) => {
      let p = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      v.id = p, i.value.push(v), setTimeout(() => {
        h(p);
      }, 5e3);
    }), (v, p) => (x(), k("div", {
      class: mt([s.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ct(wo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: W(() => [
          (x(!0), k(nt, null, St(i.value, (f, m) => (x(), k("div", {
            onClick: (y) => l(m),
            key: f,
            class: mt([a(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, D(f.label), 11, pi))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: vi } = Tt(), Mr = (r, t, e) => vi.value + "?" + Ft({ q: "preview", adapter: r, path: t, token: e }), Rt = typeof window < "u", es = Rt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), rs = Rt && "IntersectionObserver" in window, ss = Rt && "classList" in document.createElement("p"), os = Rt && window.devicePixelRatio > 1, bi = {
  elements_selector: ".lazy",
  container: es || Rt ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, is = (r) => Object.assign({}, bi, r), $r = function(r, t) {
  let e;
  const s = "LazyLoad::Initialized", a = new r(t);
  try {
    e = new CustomEvent(s, { detail: { instance: a } });
  } catch {
    e = document.createEvent("CustomEvent"), e.initCustomEvent(s, !1, !1, { instance: a });
  }
  window.dispatchEvent(e);
}, yi = (r, t) => {
  if (!!t)
    if (!t.length)
      $r(r, t);
    else
      for (let e = 0, s; s = t[e]; e += 1)
        $r(r, s);
}, It = "src", sr = "srcset", or = "sizes", ns = "poster", ye = "llOriginalAttrs", as = "data", ir = "loading", ls = "loaded", cs = "applied", wi = "entered", nr = "error", us = "native", ds = "data-", hs = "ll-status", vt = (r, t) => r.getAttribute(ds + t), xi = (r, t, e) => {
  var s = ds + t;
  if (e === null) {
    r.removeAttribute(s);
    return;
  }
  r.setAttribute(s, e);
}, we = (r) => vt(r, hs), Gt = (r, t) => xi(r, hs, t), Ie = (r) => Gt(r, null), ar = (r) => we(r) === null, Si = (r) => we(r) === ir, _i = (r) => we(r) === nr, lr = (r) => we(r) === us, ki = [ir, ls, cs, nr], Di = (r) => ki.indexOf(we(r)) >= 0, zt = (r, t, e, s) => {
  if (!!r) {
    if (s !== void 0) {
      r(t, e, s);
      return;
    }
    if (e !== void 0) {
      r(t, e);
      return;
    }
    r(t);
  }
}, le = (r, t) => {
  if (ss) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, $t = (r, t) => {
  if (ss) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Ci = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Mi = (r) => {
  delete r.llTempImage;
}, fs = (r) => r.llTempImage, Pe = (r, t) => {
  if (!t)
    return;
  const e = t._observer;
  !e || e.unobserve(r);
}, $i = (r) => {
  r.disconnect();
}, Ei = (r, t, e) => {
  t.unobserve_entered && Pe(r, e);
}, cr = (r, t) => {
  !r || (r.loadingCount += t);
}, Ai = (r) => {
  !r || (r.toLoadCount -= 1);
}, ps = (r, t) => {
  !r || (r.toLoadCount = t);
}, Ti = (r) => r.loadingCount > 0, Oi = (r) => r.toLoadCount > 0, gs = (r) => {
  let t = [];
  for (let e = 0, s; s = r.children[e]; e += 1)
    s.tagName === "SOURCE" && t.push(s);
  return t;
}, ur = (r, t) => {
  const e = r.parentNode;
  if (!e || e.tagName !== "PICTURE")
    return;
  gs(e).forEach(t);
}, ms = (r, t) => {
  gs(r).forEach(t);
}, Ne = [It], vs = [It, ns], me = [It, sr, or], bs = [as], je = (r) => !!r[ye], ys = (r) => r[ye], ws = (r) => delete r[ye], ie = (r, t) => {
  if (je(r))
    return;
  const e = {};
  t.forEach((s) => {
    e[s] = r.getAttribute(s);
  }), r[ye] = e;
}, Li = (r) => {
  je(r) || (r[ye] = { backgroundImage: r.style.backgroundImage });
}, Ii = (r, t, e) => {
  if (!e) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, e);
}, Xt = (r, t) => {
  if (!je(r))
    return;
  const e = ys(r);
  t.forEach((s) => {
    Ii(r, s, e[s]);
  });
}, Pi = (r) => {
  if (!je(r))
    return;
  const t = ys(r);
  r.style.backgroundImage = t.backgroundImage;
}, xs = (r, t, e) => {
  le(r, t.class_applied), Gt(r, cs), e && (t.unobserve_completed && Pe(r, t), zt(t.callback_applied, r, e));
}, Ss = (r, t, e) => {
  le(r, t.class_loading), Gt(r, ir), e && (cr(e, 1), zt(t.callback_loading, r, e));
}, Ht = (r, t, e) => {
  !e || r.setAttribute(t, e);
}, Er = (r, t) => {
  Ht(r, or, vt(r, t.data_sizes)), Ht(r, sr, vt(r, t.data_srcset)), Ht(r, It, vt(r, t.data_src));
}, Ni = (r, t) => {
  ur(r, (e) => {
    ie(e, me), Er(e, t);
  }), ie(r, me), Er(r, t);
}, ji = (r, t) => {
  ie(r, Ne), Ht(r, It, vt(r, t.data_src));
}, Vi = (r, t) => {
  ms(r, (e) => {
    ie(e, Ne), Ht(e, It, vt(e, t.data_src));
  }), ie(r, vs), Ht(r, ns, vt(r, t.data_poster)), Ht(r, It, vt(r, t.data_src)), r.load();
}, Hi = (r, t) => {
  ie(r, bs), Ht(r, as, vt(r, t.data_src));
}, Ri = (r, t, e) => {
  const s = vt(r, t.data_bg), a = vt(r, t.data_bg_hidpi), i = os && a ? a : s;
  !i || (r.style.backgroundImage = `url("${i}")`, fs(r).setAttribute(It, i), Ss(r, t, e));
}, zi = (r, t, e) => {
  const s = vt(r, t.data_bg_multi), a = vt(r, t.data_bg_multi_hidpi), i = os && a ? a : s;
  !i || (r.style.backgroundImage = i, xs(r, t, e));
}, Bi = (r, t, e) => {
  const s = vt(r, t.data_bg_set);
  if (!s)
    return;
  const a = s.split("|");
  let i = a.map((l) => `image-set(${l})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = a.map((l) => `-webkit-image-set(${l})`), r.style.backgroundImage = i.join()), xs(r, t, e);
}, _s = {
  IMG: Ni,
  IFRAME: ji,
  VIDEO: Vi,
  OBJECT: Hi
}, Ui = (r, t) => {
  const e = _s[r.tagName];
  !e || e(r, t);
}, Ki = (r, t, e) => {
  const s = _s[r.tagName];
  !s || (s(r, t), Ss(r, t, e));
}, Yi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Wi = (r) => Yi.indexOf(r.tagName) > -1, ks = (r, t) => {
  t && !Ti(t) && !Oi(t) && zt(r.callback_finish, t);
}, Ar = (r, t, e) => {
  r.addEventListener(t, e), r.llEvLisnrs[t] = e;
}, Xi = (r, t, e) => {
  r.removeEventListener(t, e);
}, dr = (r) => !!r.llEvLisnrs, qi = (r, t, e) => {
  dr(r) || (r.llEvLisnrs = {});
  const s = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Ar(r, s, t), Ar(r, "error", e);
}, Xe = (r) => {
  if (!dr(r))
    return;
  const t = r.llEvLisnrs;
  for (let e in t) {
    const s = t[e];
    Xi(r, e, s);
  }
  delete r.llEvLisnrs;
}, Ds = (r, t, e) => {
  Mi(r), cr(e, -1), Ai(e), $t(r, t.class_loading), t.unobserve_completed && Pe(r, e);
}, Fi = (r, t, e, s) => {
  const a = lr(t);
  Ds(t, e, s), le(t, e.class_loaded), Gt(t, ls), zt(e.callback_loaded, t, s), a || ks(e, s);
}, Gi = (r, t, e, s) => {
  const a = lr(t);
  Ds(t, e, s), le(t, e.class_error), Gt(t, nr), zt(e.callback_error, t, s), e.restore_on_error && Xt(t, me), a || ks(e, s);
}, hr = (r, t, e) => {
  const s = fs(r) || r;
  if (dr(s))
    return;
  qi(s, (l) => {
    Fi(l, r, t, e), Xe(s);
  }, (l) => {
    Gi(l, r, t, e), Xe(s);
  });
}, Ji = (r, t, e) => {
  Ci(r), hr(r, t, e), Li(r), Ri(r, t, e), zi(r, t, e), Bi(r, t, e);
}, Zi = (r, t, e) => {
  hr(r, t, e), Ki(r, t, e);
}, fr = (r, t, e) => {
  Wi(r) ? Zi(r, t, e) : Ji(r, t, e);
}, Qi = (r, t, e) => {
  r.setAttribute("loading", "lazy"), hr(r, t, e), Ui(r, t), Gt(r, us);
}, Tr = (r) => {
  r.removeAttribute(It), r.removeAttribute(sr), r.removeAttribute(or);
}, tn = (r) => {
  ur(r, (t) => {
    Tr(t);
  }), Tr(r);
}, Cs = (r) => {
  ur(r, (t) => {
    Xt(t, me);
  }), Xt(r, me);
}, en = (r) => {
  ms(r, (t) => {
    Xt(t, Ne);
  }), Xt(r, vs), r.load();
}, rn = (r) => {
  Xt(r, Ne);
}, sn = (r) => {
  Xt(r, bs);
}, on = {
  IMG: Cs,
  IFRAME: rn,
  VIDEO: en,
  OBJECT: sn
}, nn = (r) => {
  const t = on[r.tagName];
  if (!t) {
    Pi(r);
    return;
  }
  t(r);
}, an = (r, t) => {
  ar(r) || lr(r) || ($t(r, t.class_entered), $t(r, t.class_exited), $t(r, t.class_applied), $t(r, t.class_loading), $t(r, t.class_loaded), $t(r, t.class_error));
}, ln = (r, t) => {
  nn(r), an(r, t), Ie(r), ws(r);
}, cn = (r, t, e, s) => {
  !e.cancel_on_exit || !Si(r) || r.tagName === "IMG" && (Xe(r), tn(r), Cs(r), $t(r, e.class_loading), cr(s, -1), Ie(r), zt(e.callback_cancel, r, t, s));
}, un = (r, t, e, s) => {
  const a = Di(r);
  Gt(r, wi), le(r, e.class_entered), $t(r, e.class_exited), Ei(r, e, s), zt(e.callback_enter, r, t, s), !a && fr(r, e, s);
}, dn = (r, t, e, s) => {
  ar(r) || (le(r, e.class_exited), cn(r, t, e, s), zt(e.callback_exit, r, t, s));
}, hn = ["IMG", "IFRAME", "VIDEO"], Ms = (r) => r.use_native && "loading" in HTMLImageElement.prototype, fn = (r, t, e) => {
  r.forEach((s) => {
    hn.indexOf(s.tagName) !== -1 && Qi(s, t, e);
  }), ps(e, 0);
}, pn = (r) => r.isIntersecting || r.intersectionRatio > 0, gn = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), mn = (r, t, e) => {
  r.forEach(
    (s) => pn(s) ? un(s.target, s, t, e) : dn(s.target, s, t, e)
  );
}, vn = (r, t) => {
  t.forEach((e) => {
    r.observe(e);
  });
}, bn = (r, t) => {
  $i(r), vn(r, t);
}, yn = (r, t) => {
  !rs || Ms(r) || (t._observer = new IntersectionObserver((e) => {
    mn(e, r, t);
  }, gn(r)));
}, $s = (r) => Array.prototype.slice.call(r), Ae = (r) => r.container.querySelectorAll(r.elements_selector), wn = (r) => $s(r).filter(ar), xn = (r) => _i(r), Sn = (r) => $s(r).filter(xn), Or = (r, t) => wn(r || Ae(t)), _n = (r, t) => {
  Sn(Ae(r)).forEach((s) => {
    $t(s, r.class_error), Ie(s);
  }), t.update();
}, kn = (r, t) => {
  !Rt || (t._onlineHandler = () => {
    _n(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Dn = (r) => {
  !Rt || window.removeEventListener("online", r._onlineHandler);
}, xe = function(r, t) {
  const e = is(r);
  this._settings = e, this.loadingCount = 0, yn(e, this), kn(e, this), this.update(t);
};
xe.prototype = {
  update: function(r) {
    const t = this._settings, e = Or(r, t);
    if (ps(this, e.length), es || !rs) {
      this.loadAll(e);
      return;
    }
    if (Ms(t)) {
      fn(e, t, this);
      return;
    }
    bn(this._observer, e);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Dn(this), Ae(this._settings).forEach((r) => {
      ws(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Or(r, t).forEach((s) => {
      Pe(s, this), fr(s, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ae(r).forEach((t) => {
      ln(t, r);
    });
  }
};
xe.load = (r, t) => {
  const e = is(t);
  fr(r, e);
};
xe.resetStatus = (r) => {
  Ie(r);
};
Rt && yi(xe, window.lazyLoadOptions);
const Cn = { class: "relative flex-auto overflow-hidden" }, Mn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, $n = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], En = { class: "grid grid-cols-12 items-center" }, An = { class: "flex col-span-7 items-center" }, Tn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, On = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ln = [
  On
], In = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Pn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Nn = [
  Pn
], jn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Vn = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Hn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Rn = { class: "grid grid-cols-12 items-center" }, zn = { class: "flex col-span-7 items-center" }, Bn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Un = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Kn = [
  Un
], Yn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Xn = [
  Wn
], qn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Fn = { class: "col-span-2 text-center" }, Gn = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Jn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Zn = { class: "relative" }, Qn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ta = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ea = [
  ta
], ra = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, sa = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), oa = [
  sa
], ia = {
  key: 2,
  class: "absolute block top-1/2 w-full text-center text-neutral-500"
}, na = { class: "break-all" }, aa = {
  name: "VFExplorer"
}, la = /* @__PURE__ */ Object.assign(aa, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r;
    L("accessToken");
    const e = L("emitter"), { setStore: s, getStore: a } = L("storage"), i = L("adapter"), l = (O) => O == null ? void 0 : O.substring(0, 3), h = (O) => O.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), v = T(null), p = T(null), f = T(0), m = T(null), { t: y } = L("i18n"), C = Math.floor(Math.random() * 2 ** 32), $ = T(a("full-screen", !1)), E = new xe();
    e.on("vf-fullscreen-toggle", () => {
      v.value.style.height = null, $.value = !$.value, s("full-screen", $.value);
    });
    const A = T("");
    e.on("vf-search-query", ({ newQuery: O }) => {
      A.value = O, O ? e.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: O
        },
        onSuccess: (H) => {
          H.files.length || e.emit("vf-toast-push", { label: y("No search result found.") });
        }
      }) : e.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    const U = T(!1);
    e.on("vf-show-hidden", ({ params: O }) => {
      U.value = O.show;
    });
    let V = null;
    const I = () => {
      V && clearTimeout(V);
    }, j = T(!0), z = (O) => {
      O.touches.length > 1 && (j.value ? (m.value.stop(), e.emit("vf-toast-push", { label: y("Drag&Drop: off") })) : (m.value.start(), e.emit("vf-toast-push", { label: y("Drag&Drop: on") }), e.emit("vf-explorer-update")), j.value = !j.value);
    }, _ = (O) => {
      V = setTimeout(() => {
        const H = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: O.target.getBoundingClientRect().x,
          clientY: O.target.getBoundingClientRect().y
        });
        O.target.dispatchEvent(H);
      }, 500);
    }, B = (O) => {
      O.type == "dir" ? (e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: O.path } })) : e.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: O });
    }, R = Me({ active: !1, column: "", order: "" }), at = (O = !0) => {
      let H = [...t.data.files], P = R.column, dt = R.order == "asc" ? 1 : -1;
      if (!O)
        return H;
      const G = (tt, _t) => typeof tt == "string" && typeof _t == "string" ? tt.toLowerCase().localeCompare(_t.toLowerCase()) : tt < _t ? -1 : tt > _t ? 1 : 0;
      return R.active && (H = H.slice().sort((tt, _t) => G(tt[P], _t[P]) * dt)), H;
    }, ut = (O) => {
      R.active && R.column == O ? (R.active = R.order == "asc", R.column = O, R.order = "desc") : (R.active = !0, R.column = O, R.order = "asc");
    }, lt = () => m.value.getSelection().map((O) => JSON.parse(O.dataset.item)), yt = (O, H) => {
      if (O.altKey || O.ctrlKey || O.metaKey)
        return O.preventDefault(), !1;
      O.dataTransfer.setDragImage(p.value, 0, 15), O.dataTransfer.effectAllowed = "all", O.dataTransfer.dropEffect = "copy", O.dataTransfer.setData("items", JSON.stringify(lt()));
    }, bt = (O, H) => {
      O.preventDefault();
      let P = JSON.parse(O.dataTransfer.getData("items"));
      if (P.find((dt) => dt.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", { type: "move", items: { from: P, to: H } });
    }, F = (O, H) => {
      O.preventDefault(), !H || H.type !== "dir" || m.value.getSelection().find((P) => P == O.currentTarget) ? (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none") : O.dataTransfer.dropEffect = "copy";
    };
    return Mt(() => {
      m.value = new ni({
        area: v.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), e.on("vf-explorer-update", () => Le(() => {
        m.value.clearSelection(), m.value.setSelectables(document.getElementsByClassName("vf-item-" + C));
      })), m.value.subscribe("predragstart", ({ event: O, isDragging: H }) => {
        if (H)
          f.value = m.value.getSelection().length, m.value.break();
        else {
          const P = O.target.offsetWidth - O.offsetX, dt = O.target.offsetHeight - O.offsetY;
          P < 15 && dt < 15 && (m.value.clearSelection(), m.value.break());
        }
      }), m.value.subscribe("predragmove", ({ isDragging: O }) => {
        O && m.value.break();
      }), m.value.subscribe("callback", ({ items: O, event: H, isDragging: P }) => {
        e.emit("vf-nodes-selected", lt()), f.value = m.value.getSelection().length;
      });
    }), xo(() => {
      m.value.Area.reset(), m.value.SelectorArea.updatePos(), E.update();
    }), Mt(() => {
      Oe(() => t.view, () => e.emit("vf-explorer-update"));
    }), (O, H) => (x(), k("div", Cn, [
      r.view == "list" || A.value.length ? (x(), k("div", Mn, [
        d("div", {
          onClick: H[0] || (H[0] = (P) => ut("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          ot(D(S(y)("Name")) + " ", 1),
          xt(Ct(_e, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, R.active && R.column == "basename"]
          ])
        ]),
        A.value.length ? Y("", !0) : (x(), k("div", {
          key: 0,
          onClick: H[1] || (H[1] = (P) => ut("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          ot(D(S(y)("Size")) + " ", 1),
          xt(Ct(_e, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, R.active && R.column == "file_size"]
          ])
        ])),
        A.value.length ? Y("", !0) : (x(), k("div", {
          key: 1,
          onClick: H[2] || (H[2] = (P) => ut("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          ot(D(S(y)("Date")) + " ", 1),
          xt(Ct(_e, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, R.active && R.column == "last_modified"]
          ])
        ])),
        A.value.length ? (x(), k("div", {
          key: 2,
          onClick: H[3] || (H[3] = (P) => ut("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          ot(D(S(y)("Filepath")) + " ", 1),
          xt(Ct(_e, {
            direction: R.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, R.active && R.column == "path"]
          ])
        ])) : Y("", !0)
      ])) : Y("", !0),
      d("div", {
        onTouchstart: z,
        onContextmenu: H[10] || (H[10] = Wt((P) => S(e).emit("vf-contextmenu-show", { event: P, area: v.value, items: lt() }), ["self", "prevent"])),
        class: mt([$.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: v
      }, [
        A.value.length ? (x(!0), k(nt, { key: 0 }, St(at(), (P, dt) => (x(), k("div", {
          onDblclick: (G) => B(P),
          onTouchstart: H[4] || (H[4] = (G) => _(G)),
          onTouchend: H[5] || (H[5] = (G) => I()),
          onContextmenu: Wt((G) => S(e).emit("vf-contextmenu-show", { event: G, area: v.value, items: lt(), target: P }), ["prevent"]),
          class: mt(["vf-item-" + S(C), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": dt
        }, [
          d("div", En, [
            d("div", An, [
              P.type == "dir" ? (x(), k("svg", Tn, Ln)) : (x(), k("svg", In, Nn)),
              d("span", jn, D(P.basename), 1)
            ]),
            d("div", Vn, D(P.path), 1)
          ])
        ], 42, $n))), 256)) : Y("", !0),
        r.view == "list" && !A.value.length ? (x(!0), k(nt, { key: 1 }, St(at(), (P, dt) => (x(), k("div", {
          draggable: "true",
          onDblclick: (G) => B(P),
          onTouchstart: H[6] || (H[6] = (G) => _(G)),
          onTouchend: H[7] || (H[7] = (G) => I()),
          onContextmenu: Wt((G) => S(e).emit("vf-contextmenu-show", { event: G, area: v.value, items: lt(), target: P }), ["prevent"]),
          onDragstart: (G) => yt(G),
          onDragover: (G) => F(G, P),
          onDrop: (G) => bt(G, P),
          class: mt(["vf-item-" + S(C), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": dt
        }, [
          d("div", Rn, [
            d("div", zn, [
              P.type == "dir" ? (x(), k("svg", Bn, Kn)) : (x(), k("svg", Yn, Xn)),
              d("span", qn, D(P.basename), 1)
            ]),
            d("div", Fn, D(P.file_size ? S(Qr)(P.file_size) : ""), 1),
            d("div", Gn, D(S(ts)(P.last_modified)), 1)
          ])
        ], 42, Hn))), 256)) : Y("", !0),
        r.view == "grid" && !A.value.length ? (x(!0), k(nt, { key: 2 }, St(at(!1), (P, dt) => {
          var G;
          return x(), k("div", {
            draggable: "true",
            onDblclick: (tt) => B(P),
            onTouchstart: H[8] || (H[8] = (tt) => _(tt)),
            onTouchend: H[9] || (H[9] = (tt) => I()),
            onContextmenu: Wt((tt) => S(e).emit("vf-contextmenu-show", { event: tt, area: v.value, items: lt(), target: P }), ["prevent"]),
            onDragstart: (tt) => yt(tt),
            onDragover: (tt) => F(tt, P),
            onDrop: (tt) => bt(tt, P),
            class: mt(["vf-item-" + S(C), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": P.type,
            "data-item": JSON.stringify(P),
            "data-index": dt
          }, [
            d("div", null, [
              d("div", Zn, [
                P.type == "dir" ? (x(), k("svg", Qn, ea)) : (x(), k("svg", ra, oa)),
                !((G = P.mime_type) != null ? G : "").startsWith("image") && P.type != "dir" ? (x(), k("div", ia, D(l(P.extension)), 1)) : Y("", !0)
              ]),
              d("span", na, D(h(P.basename)), 1)
            ])
          ], 42, Jn);
        }), 256)) : Y("", !0)
      ], 34),
      Ct(mi)
    ]));
  }
}), ca = "1.1.15", ua = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, da = { class: "flex leading-5 items-center" }, ha = ["aria-label"], fa = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), pa = [
  fa
], ga = ["value"], ma = { class: "ml-3" }, va = { key: 0 }, ba = { class: "ml-1" }, ya = { class: "flex leading-5 items-center" }, wa = {
  value: "",
  disabled: ""
}, xa = /* @__PURE__ */ d("option", { value: "en" }, "English", -1), Sa = /* @__PURE__ */ d("option", { value: "fr" }, "French", -1), _a = /* @__PURE__ */ d("option", { value: "ru" }, "Russian", -1), ka = /* @__PURE__ */ d("option", { value: "tr" }, "Turkish", -1), Da = ["aria-label"], Ca = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Ma = [
  Ca
], $a = {
  name: "VFStatusbar"
}, Ea = /* @__PURE__ */ Object.assign($a, {
  props: {
    data: Object
  },
  setup(r) {
    const t = L("emitter"), { getStore: e, setStore: s } = L("storage"), a = T(0), i = L("adapter"), { t: l, changeLocale: h } = L("i18n"), v = T(e("locale", "")), p = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), s("adapter", i.value);
    };
    t.on("vf-nodes-selected", (m) => {
      a.value = m.length;
    });
    const f = T("");
    return t.on("vf-search-query", ({ newQuery: m }) => {
      f.value = m;
    }), (m, y) => (x(), k("div", ua, [
      d("div", da, [
        d("div", {
          class: "mx-2",
          "aria-label": S(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, pa, 8, ha),
        xt(d("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (C) => Gr(i) ? i.value = C : null),
          onChange: p,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (x(!0), k(nt, null, St(r.data.storages, (C) => (x(), k("option", { value: C }, D(C), 9, ga))), 256))
        ], 544), [
          [Dr, S(i)]
        ]),
        d("div", ma, [
          f.value.length ? (x(), k("span", va, D(r.data.files.length) + " items found. ", 1)) : Y("", !0),
          d("span", ba, D(a.value > 0 ? a.value + " " + S(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      d("div", ya, [
        xt(d("select", {
          "onUpdate:modelValue": y[1] || (y[1] = (C) => v.value = C),
          onChange: y[2] || (y[2] = (C) => S(h)(C.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          d("option", wa, D(S(l)("Language")), 1),
          xa,
          Sa,
          _a,
          ka
        ], 544), [
          [Dr, v.value]
        ]),
        d("span", {
          class: "mr-1",
          "aria-label": S(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: y[3] || (y[3] = (C) => S(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + S(ca), message: S(l)("Vuefinder is a file manager component for vue 3.") }))
        }, Ma, 8, Da)
      ])
    ]));
  }
}), Aa = (r, t = 0, e = !1) => {
  let s;
  return (...a) => {
    e && !s && r(...a), clearTimeout(s), s = setTimeout(() => {
      r(...a);
    }, t);
  };
}, Ta = (r, t, e) => {
  const s = T(r);
  return So((i, l) => ({
    get() {
      return i(), s.value;
    },
    set: Aa(
      (h) => {
        s.value = h, l();
      },
      t,
      e
    )
  }));
}, Oa = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, La = ["aria-label"], Ia = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Pa = [
  Ia
], Na = ["aria-label"], ja = /* @__PURE__ */ d("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Va = [
  ja
], Ha = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, Ra = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), za = [
  Ra
], Ba = /* @__PURE__ */ d("span", { class: "vf-flex-space" }, null, -1), Ua = ["onClick"], Ka = /* @__PURE__ */ d("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Ya = [
  Ka
], Wa = { class: "flex leading-5" }, Xa = /* @__PURE__ */ d("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), qa = ["title", "onClick"], Fa = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ga = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Ja = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Za = [
  Ga,
  Ja
], Qa = {
  key: 4,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, tl = /* @__PURE__ */ d("svg", {
  class: "h-6 w-6 p-1 stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), el = ["onKeydown", "placeholder"], rl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), sl = [
  rl
], ol = {
  name: "VFBreadcrumb"
}, il = /* @__PURE__ */ Object.assign(ol, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), a = T(null), i = T([]), l = T(!1), h = T(null), { t: v } = L("i18n"), p = L("loadingState");
    e.on("vf-explorer-update", () => {
      var z;
      let I = [], j = [];
      a.value = (z = t.data.dirname) != null ? z : s.value + "://", a.value.length == 0 && (i.value = []), a.value.replace(s.value + "://", "").split("/").forEach(function(_) {
        I.push(_), I.join("/") != "" && j.push({
          basename: _,
          name: _,
          path: s.value + "://" + I.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), i.value = j;
    });
    const f = T(!1);
    e.on("vf-show-hidden", ({ params: I }) => {
      f.value = I.show;
    });
    const m = () => {
      l.value = !1, C.value = "";
    };
    e.on("vf-search-exit", () => {
      m();
    });
    const y = () => {
      l.value = !0, Le(() => h.value.focus());
    }, C = Ta("", 400), $ = () => p.value;
    Oe(C, (I) => {
      e.emit("vf-toast-clear"), e.emit("vf-search-query", { newQuery: I });
    });
    const E = () => i.value.length && !l.value, A = (I) => {
      var z;
      I.preventDefault();
      let j = JSON.parse(I.dataTransfer.getData("items"));
      if (j.find((_) => _.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: (z = i.value[i.value.length - 2]) != null ? z : { path: s.value + "://" } }
      });
    }, U = (I) => {
      I.preventDefault(), E() ? I.dataTransfer.dropEffect = "copy" : (I.dataTransfer.dropEffect = "none", I.dataTransfer.effectAllowed = "none");
    }, V = () => {
      C.value == "" && m();
    };
    return (I, j) => (x(), k("div", Oa, [
      d("span", {
        "aria-label": S(v)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), k("svg", {
          onDragover: j[0] || (j[0] = (z) => U(z)),
          onDrop: j[1] || (j[1] = (z) => A(z)),
          onClick: j[2] || (j[2] = (z) => {
            var _, B;
            return !E() || S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: (B = (_ = i.value[i.value.length - 2]) == null ? void 0 : _.path) != null ? B : S(s) + "://" } });
          }),
          class: mt(["h-6 w-6 p-0.5 rounded", E() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Pa, 34))
      ], 8, La),
      $() ? (x(), k("span", Ha, [
        (x(), k("svg", {
          onClick: j[4] || (j[4] = (z) => S(e).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, za))
      ])) : (x(), k("span", {
        key: 0,
        "aria-label": S(v)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), k("svg", {
          onClick: j[3] || (j[3] = (z) => {
            S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Va))
      ], 8, Na)),
      Ba,
      $() ? Y("", !0) : (x(), k(nt, { key: 2 }, [
        f.value === !1 ? (x(), k("span", {
          key: 0,
          onClick: j[5] || (j[5] = (z) => {
            S(e).emit("vf-show-hidden", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname, show: !0 } });
          }),
          "aria-label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          style: { cursor: "pointer" }
        }, " \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 ")) : (x(), k("span", {
          key: 1,
          onClick: j[6] || (j[6] = (z) => {
            S(e).emit("vf-show-hidden", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname, show: !1 } });
          }),
          "aria-label": "\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C",
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          style: { cursor: "pointer" }
        }, " \u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E "))
      ], 64)),
      l.value ? (x(), k("div", Qa, [
        tl,
        xt(d("input", {
          ref_key: "searchInput",
          ref: h,
          onKeydown: ne(m, ["esc"]),
          onBlur: V,
          "onUpdate:modelValue": j[8] || (j[8] = (z) => Gr(C) ? C.value = z : null),
          placeholder: S(v)("Search anything.."),
          class: "flex-1 ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, el), [
          [ae, S(C)]
        ]),
        (x(), k("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: m,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, sl))
      ])) : (x(), k("div", {
        key: 3,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(y, ["self"])
      }, [
        (x(), k("svg", {
          onClick: j[7] || (j[7] = (z) => S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ya)),
        d("div", Wa, [
          (x(!0), k(nt, null, St(i.value, (z, _) => (x(), k("div", { key: _ }, [
            Xa,
            d("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: z.basename,
              onClick: (B) => S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: z.path } })
            }, D(z.name), 9, qa)
          ]))), 128))
        ]),
        $() ? (x(), k("svg", Fa, Za)) : Y("", !0)
      ], 8, Ua))
    ]));
  }
}), nl = ["onClick"], al = /* @__PURE__ */ d("span", { class: "px-1" }, null, -1), ll = {
  name: "VFContextMenu"
}, cl = /* @__PURE__ */ Object.assign(ll, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter"), s = T(null), { apiUrl: a } = Tt(), i = Me({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = T([]);
    e.on("vf-context-selected", (y) => {
      l.value = y;
    });
    const { t: h } = L("i18n"), v = {
      newfolder: {
        title: () => h("New Folder"),
        action: () => {
          e.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => h("Delete"),
        action: () => {
          e.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => h("Refresh"),
        action: () => {
          e.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => h("Preview"),
        action: () => {
          e.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => h("Open"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => h("Open containing folder"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => h("Download"),
        action: () => {
          const y = a.value + "?" + Ft({ q: "download", adapter: t.current.adapter, path: l.value[0].path });
          e.emit("vf-download", y);
        }
      },
      archive: {
        title: () => h("Archive"),
        action: () => {
          e.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => h("Unarchive"),
        action: () => {
          e.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => h("Rename"),
        action: () => {
          e.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, p = (y) => {
      e.emit("vf-contextmenu-hide"), y.action();
    }, f = T("");
    e.on("vf-search-query", ({ newQuery: y }) => {
      f.value = y;
    }), e.on("vf-contextmenu-show", ({ event: y, area: C, items: $, target: E = null }) => {
      if (i.items = [], f.value)
        if (E)
          i.items.push(v.openDir), e.emit("vf-context-selected", [E]);
        else
          return;
      else
        !E && !f.value ? (i.items.push(v.refresh), i.items.push(v.newfolder), e.emit("vf-context-selected", [])) : $.length > 1 && $.some((A) => A.path === E.path) ? (i.items.push(v.refresh), i.items.push(v.archive), i.items.push(v.delete), e.emit("vf-context-selected", $)) : (E.type == "dir" ? i.items.push(v.open) : (i.items.push(v.preview), i.items.push(v.download)), i.items.push(v.rename), E.mime_type == "application/zip" ? i.items.push(v.unarchive) : i.items.push(v.archive), i.items.push(v.delete), e.emit("vf-context-selected", [E]));
      m(y, C);
    }), e.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const m = (y, C) => {
      i.active = !0, Le(() => {
        let $ = C.getBoundingClientRect(), E = y.pageX, A = y.pageY, U = s.value.offsetHeight, V = s.value.offsetWidth;
        E = $.right - y.pageX + window.scrollX < V ? E - V : E, A = $.bottom - y.pageY + window.scrollY < U ? A - U : A, i.positions = {
          left: E + "px",
          top: A + "px"
        };
      });
    };
    return (y, C) => i.active ? (x(), k("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: Jr(i.positions)
    }, [
      (x(!0), k(nt, null, St(i.items, ($) => (x(), k("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: $.title,
        onClick: (E) => p($)
      }, [
        al,
        d("span", null, D($.title()), 1)
      ], 8, nl))), 128))
    ], 4)) : Y("", !0);
  }
}), ul = (r, t) => {
  const e = r[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((s, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function dl(r) {
  const t = await ul(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.7a04810c.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.818dacaf.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function hl(r, t, e) {
  const { getStore: s, setStore: a } = We(r), i = T({}), l = (p) => {
    dl(p).then((f) => {
      i.value = f, a("locale", p), a("translations", f), e.emit("vf-toast-push", { label: "The language is set to " + p });
    }).catch((f) => {
      e.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  s("locale") ? i.value = s("translations") : l(t);
  const h = (p, ...f) => f.length ? h(p = p.replace("%s", f.shift()), ...f) : p;
  function v(p, ...f) {
    return i.value.hasOwnProperty(p) ? h(i.value[p], ...f) : p;
  }
  return { t: v, changeLocale: l };
}
const fl = { class: "vuefinder" }, pl = /* @__PURE__ */ d("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), gl = {
  name: "VueFinder"
}, ml = /* @__PURE__ */ Object.assign(gl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    postData: {
      type: Object,
      default: {}
    },
    accessToken: {
      type: String
    },
    hook: {
      type: Function,
      required: !1,
      default: null
    }
  },
  setup(r) {
    const t = r, e = ko(), { setStore: s, getStore: a } = We(t.id), i = T(a("adapter"));
    Ut("emitter", e), Ut("storage", We(t.id)), Ut("postData", t.postData), Ut("adapter", i);
    const l = hl(t.id, t.locale, e);
    Ut("i18n", l);
    const { apiUrl: h, setApiUrl: v } = Tt();
    v(t.url);
    const p = Me({ adapter: i.value, storages: [], dirname: ".", files: [] }), f = T(a("viewport", "grid")), m = T(a("darkMode", t.dark));
    e.on("vf-darkMode-toggle", () => {
      m.value = !m.value, s("darkMode", m.value);
    });
    const y = T(!1);
    Ut("loadingState", y), Ut("accessToken", t.accessToken);
    const C = T(a("full-screen", !1));
    e.on("vf-fullscreen-toggle", () => {
      C.value = !C.value, s("full-screen", C.value);
    }), e.on("vf-view-toggle", (V) => {
      f.value = V;
    });
    const $ = Me({
      active: !1,
      type: "delete",
      data: {}
    });
    e.on("vf-modal-close", () => {
      $.active = !1;
    }), e.on("vf-modal-show", (V) => {
      (!t.hook || t.hook.call(null, "vf-modal-show", V, e) !== !1) && ($.active = !0, $.type = V.type, $.data = V);
    });
    const E = (V) => {
      Object.assign(p, V), e.emit("vf-nodes-selected", {}), e.emit("vf-explorer-update");
    };
    let A;
    e.on("vf-fetch-abort", () => {
      A.abort(), y.value = !1;
    });
    const U = T(!1);
    return e.on("vf-show-hidden", ({ params: V }) => {
      U.value = V.show, e.emit("vf-fetch", { params: V });
    }), e.on("vf-fetch", ({ params: V, onSuccess: I = null, onError: j = null }) => {
      ["index", "search"].includes(V.q) && (A && A.abort(), y.value = !0), A = new AbortController();
      const z = A.signal;
      V.hidden = U.value === !0, Ee(h.value, { params: V, signal: z, headers: { Authorization: t.accessToken ? "Bearer " + t.accessToken : null } }).then((_) => {
        i.value = _.adapter, ["index", "search"].includes(V.q) && (y.value = !1), e.emit("vf-modal-close"), E(_), I(_);
      }).catch((_) => {
        j && j(_);
      }).finally(() => {
      });
    }), e.on("vf-download", (V) => {
      document.getElementById("download_frame").src = V, e.emit("vf-modal-close");
    }), Mt(() => {
      e.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (V, I) => (x(), k("div", fl, [
      d("div", {
        class: mt(m.value ? "dark" : "")
      }, [
        d("div", {
          class: mt([C.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: Jr(C.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: I[0] || (I[0] = (j) => S(e).emit("vf-contextmenu-hide")),
          onTouchstart: I[1] || (I[1] = (j) => S(e).emit("vf-contextmenu-hide"))
        }, [
          Ct(oi, { data: p }, null, 8, ["data"]),
          Ct(il, { data: p }, null, 8, ["data"]),
          Ct(la, {
            view: f.value,
            data: p
          }, null, 8, ["view", "data"]),
          Ct(Ea, { data: p }, null, 8, ["data"])
        ], 38),
        $.active ? (x(), J(_o("v-f-modal-" + $.type), {
          key: 0,
          selection: $.data,
          current: p
        }, null, 8, ["selection", "current"])) : Y("", !0),
        Ct(cl, { current: p }, null, 8, ["current"]),
        pl
      ], 2)
    ]));
  }
}), vl = /* @__PURE__ */ d("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), bl = { class: "fixed z-10 inset-0 overflow-hidden" }, yl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, wl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, xl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Ot = {
  __name: "ModalLayout",
  setup(r) {
    const t = L("emitter");
    return Mt(() => {
      const e = document.querySelector(".v-f-modal input");
      e && e.focus();
    }), (e, s) => (x(), k("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: s[1] || (s[1] = ne((a) => S(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      vl,
      d("div", bl, [
        d("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: s[0] || (s[0] = Wt((a) => S(t).emit("vf-modal-close"), ["self"]))
        }, [
          d("div", yl, [
            d("div", wl, [
              Ye(e.$slots, "default")
            ]),
            d("div", xl, [
              Ye(e.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Sl = ["aria-label"], _l = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), kl = [
  _l
], Dl = {
  name: "Message"
}, Lt = /* @__PURE__ */ Object.assign(Dl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var h;
    const { t: e } = L("i18n"), s = T(!1), a = T(null), i = T((h = a.value) == null ? void 0 : h.strMessage);
    Oe(i, () => s.value = !1);
    const l = () => {
      t("hidden"), s.value = !0;
    };
    return (v, p) => (x(), k("div", null, [
      s.value ? Y("", !0) : (x(), k("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: mt(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Ye(v.$slots, "default"),
        d("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": S(e)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, kl, 8, Sl)
      ], 2))
    ]));
  }
}), Cl = { class: "sm:flex sm:items-start" }, Ml = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), $l = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, El = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Al = { class: "mt-2" }, Tl = { class: "text-sm text-gray-500" }, Ol = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ll = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Il = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Pl = [
  Il
], Nl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Vl = [
  jl
], Hl = { class: "ml-1.5" }, Rl = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, zl = {
  name: "VFModalDelete"
}, Bl = /* @__PURE__ */ Object.assign(zl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(t.selection.items), l = T(""), h = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p })))
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Yes, Delete!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1),
        d("div", Rl, D(S(a)("This action cannot be undone.")), 1)
      ]),
      default: W(() => [
        d("div", Cl, [
          Ml,
          d("div", $l, [
            d("h3", El, D(S(a)("Delete files")), 1),
            d("div", Al, [
              d("p", Tl, D(S(a)("Are you sure you want to delete these files?")), 1),
              (x(!0), k(nt, null, St(i.value, (f) => (x(), k("p", Ol, [
                f.type == "dir" ? (x(), k("svg", Ll, Pl)) : (x(), k("svg", Nl, Vl)),
                d("span", Hl, D(f.basename), 1)
              ]))), 256)),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ul = { class: "sm:flex sm:items-start" }, Kl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), Yl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Wl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xl = { class: "mt-2" }, ql = { class: "text-sm text-gray-500" }, Fl = {
  name: "VFModalMessage"
}, Gl = /* @__PURE__ */ Object.assign(Fl, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = L("emitter"), { t: e } = L("i18n");
    return (s, a) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: a[0] || (a[0] = (i) => S(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(e)("Close")), 1)
      ]),
      default: W(() => {
        var i, l, h, v;
        return [
          d("div", Ul, [
            Kl,
            d("div", Yl, [
              d("h3", Wl, D((l = (i = r.selection) == null ? void 0 : i.title) != null ? l : "Title"), 1),
              d("div", Xl, [
                d("p", ql, D((v = (h = r.selection) == null ? void 0 : h.message) != null ? v : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), Jl = { class: "sm:flex sm:items-start" }, Zl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Ql = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, tc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ec = { class: "mt-2" }, rc = { class: "text-sm text-gray-500" }, sc = ["onKeyup", "placeholder"], oc = {
  name: "VFModalNewFolder"
}, ic = /* @__PURE__ */ Object.assign(oc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), h = () => {
      i.value != "" && e.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Jl, [
          Zl,
          d("div", Ql, [
            d("h3", tc, D(S(a)("New Folder")), 1),
            d("div", ec, [
              d("p", rc, D(S(a)("Create a new folder")), 1),
              xt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ne(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Folder Name"),
                type: "text"
              }, null, 40, sc), [
                [ae, i.value]
              ]),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nc = { class: "sm:flex sm:items-start" }, ac = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), lc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, cc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, uc = { class: "mt-2" }, dc = { class: "text-sm text-gray-500" }, hc = ["onKeyup", "placeholder"], fc = {
  name: "VFModalNewFile"
}, pc = /* @__PURE__ */ Object.assign(fc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), h = () => {
      i.value != "" && e.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, p) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", nc, [
          ac,
          d("div", lc, [
            d("h3", cc, D(S(a)("New File")), 1),
            d("div", uc, [
              d("p", dc, D(S(a)("Create a new file")), 1),
              xt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ne(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("File Name"),
                type: "text"
              }, null, 40, hc), [
                [ae, i.value]
              ]),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gc = { class: "flex" }, mc = ["aria-label"], vc = { class: "ml-auto mb-2" }, bc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, yc = { key: 1 }, wc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, s = T(""), a = T(""), i = T(null), l = T(!1), { apiUrl: h } = Tt(), v = T(""), p = T(!1), { t: f } = L("i18n"), m = L("accessToken");
    Mt(() => {
      Ee(h.value, {
        params: { q: "preview", adapter: e.selection.adapter, path: e.selection.item.path },
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((E) => {
        s.value = E, t("load");
      });
    });
    const y = () => {
      l.value = !l.value, a.value = s.value, l.value == !0 && Le(() => {
        i.value.focus();
      });
    }, C = L("postData"), $ = () => {
      v.value = "", p.value = !1, Ee(h.value, {
        method: "POST",
        params: Object.assign(C, {
          q: "save",
          adapter: e.selection.adapter,
          path: e.selection.item.path,
          content: a.value
        }),
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((E) => {
        v.value = f("Updated."), s.value = E, t("load"), l.value = !l.value;
      }).catch((E) => {
        v.value = f(E.message), p.value = !0;
      });
    };
    return (E, A) => (x(), k(nt, null, [
      d("div", gc, [
        d("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(r.selection.item.basename), 9, mc),
        d("div", vc, [
          l.value ? (x(), k("button", {
            key: 0,
            onClick: $,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(f)("Save")), 1)) : Y("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: A[0] || (A[0] = (U) => y())
          }, D(l.value ? S(f)("Cancel") : S(f)("Edit")), 1)
        ])
      ]),
      d("div", null, [
        l.value ? (x(), k("div", yc, [
          xt(d("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": A[1] || (A[1] = (U) => a.value = U),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ae, a.value]
          ])
        ])) : (x(), k("pre", bc, D(s.value), 1)),
        v.value.length ? (x(), J(Lt, {
          key: 2,
          onHidden: A[2] || (A[2] = (U) => v.value = ""),
          error: p.value
        }, {
          default: W(() => [
            ot(D(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Y("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
function Lr(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    t && (s = s.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), e.push.apply(e, s);
  }
  return e;
}
function Es(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(e), !0).forEach(function(s) {
      _c(r, s, e[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Lr(Object(e)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(e, s));
    });
  }
  return r;
}
function Ce(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ce = function(t) {
    return typeof t;
  } : Ce = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(r);
}
function xc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(r, t) {
  for (var e = 0; e < t.length; e++) {
    var s = t[e];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(r, s.key, s);
  }
}
function Sc(r, t, e) {
  return t && Ir(r.prototype, t), e && Ir(r, e), r;
}
function _c(r, t, e) {
  return t in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function As(r) {
  return kc(r) || Dc(r) || Cc(r) || Mc();
}
function kc(r) {
  if (Array.isArray(r))
    return qe(r);
}
function Dc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Cc(r, t) {
  if (!!r) {
    if (typeof r == "string")
      return qe(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return qe(r, t);
  }
}
function qe(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, s = new Array(t); e < t; e++)
    s[e] = r[e];
  return s;
}
function Mc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ve = typeof window < "u" && typeof window.document < "u", At = Ve ? window : {}, pr = Ve && At.document.documentElement ? "ontouchstart" in At.document.documentElement : !1, gr = Ve ? "PointerEvent" in At : !1, Z = "cropper", mr = "all", Ts = "crop", Os = "move", Ls = "zoom", Kt = "e", Yt = "w", te = "s", Nt = "n", de = "ne", he = "nw", fe = "se", pe = "sw", Fe = "".concat(Z, "-crop"), Pr = "".concat(Z, "-disabled"), gt = "".concat(Z, "-hidden"), Nr = "".concat(Z, "-hide"), $c = "".concat(Z, "-invisible"), Te = "".concat(Z, "-modal"), Ge = "".concat(Z, "-move"), ve = "".concat(Z, "Action"), ke = "".concat(Z, "Preview"), vr = "crop", Is = "move", Ps = "none", Je = "crop", Ze = "cropend", Qe = "cropmove", tr = "cropstart", jr = "dblclick", Ec = pr ? "touchstart" : "mousedown", Ac = pr ? "touchmove" : "mousemove", Tc = pr ? "touchend touchcancel" : "mouseup", Vr = gr ? "pointerdown" : Ec, Hr = gr ? "pointermove" : Ac, Rr = gr ? "pointerup pointercancel" : Tc, zr = "ready", Br = "resize", Ur = "wheel", er = "zoom", Kr = "image/jpeg", Oc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Lc = /^data:/, Ic = /^data:image\/jpeg;base64,/, Pc = /^img|canvas$/i, Ns = 200, js = 100, Yr = {
  viewMode: 0,
  dragMode: vr,
  initialAspectRatio: NaN,
  aspectRatio: NaN,
  data: null,
  preview: "",
  responsive: !0,
  restore: !0,
  checkCrossOrigin: !0,
  checkOrientation: !0,
  modal: !0,
  guides: !0,
  center: !0,
  highlight: !0,
  background: !0,
  autoCrop: !0,
  autoCropArea: 0.8,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  wheelZoomRatio: 0.1,
  cropBoxMovable: !0,
  cropBoxResizable: !0,
  toggleDragModeOnDblclick: !0,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Ns,
  minContainerHeight: js,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Nc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', jc = Number.isNaN || At.isNaN;
function K(r) {
  return typeof r == "number" && !jc(r);
}
var Wr = function(t) {
  return t > 0 && t < 1 / 0;
};
function Be(r) {
  return typeof r > "u";
}
function qt(r) {
  return Ce(r) === "object" && r !== null;
}
var Vc = Object.prototype.hasOwnProperty;
function ee(r) {
  if (!qt(r))
    return !1;
  try {
    var t = r.constructor, e = t.prototype;
    return t && e && Vc.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function pt(r) {
  return typeof r == "function";
}
var Hc = Array.prototype.slice;
function Vs(r) {
  return Array.from ? Array.from(r) : Hc.call(r);
}
function st(r, t) {
  return r && pt(t) && (Array.isArray(r) || K(r.length) ? Vs(r).forEach(function(e, s) {
    t.call(r, e, s, r);
  }) : qt(r) && Object.keys(r).forEach(function(e) {
    t.call(r, r[e], e, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    s[a - 1] = arguments[a];
  return qt(t) && s.length > 0 && s.forEach(function(i) {
    qt(i) && Object.keys(i).forEach(function(l) {
      t[l] = i[l];
    });
  }), t;
}, Rc = /\.\d*(?:0|9){12}\d*$/;
function se(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Rc.test(r) ? Math.round(r * t) / t : r;
}
var zc = /^width|height|left|top|marginLeft|marginTop$/;
function jt(r, t) {
  var e = r.style;
  st(t, function(s, a) {
    zc.test(a) && K(s) && (s = "".concat(s, "px")), e[a] = s;
  });
}
function Bc(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function ct(r, t) {
  if (!!t) {
    if (K(r.length)) {
      st(r, function(s) {
        ct(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var e = r.className.trim();
    e ? e.indexOf(t) < 0 && (r.className = "".concat(e, " ").concat(t)) : r.className = t;
  }
}
function Et(r, t) {
  if (!!t) {
    if (K(r.length)) {
      st(r, function(e) {
        Et(e, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function re(r, t, e) {
  if (!!t) {
    if (K(r.length)) {
      st(r, function(s) {
        re(s, t, e);
      });
      return;
    }
    e ? ct(r, t) : Et(r, t);
  }
}
var Uc = /([a-z\d])([A-Z])/g;
function br(r) {
  return r.replace(Uc, "$1-$2").toLowerCase();
}
function rr(r, t) {
  return qt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(br(t)));
}
function be(r, t, e) {
  qt(e) ? r[t] = e : r.dataset ? r.dataset[t] = e : r.setAttribute("data-".concat(br(t)), e);
}
function Kc(r, t) {
  if (qt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(br(t)));
}
var Hs = /\s\s*/, Rs = function() {
  var r = !1;
  if (Ve) {
    var t = !1, e = function() {
    }, s = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      set: function(i) {
        t = i;
      }
    });
    At.addEventListener("test", e, s), At.removeEventListener("test", e, s);
  }
  return r;
}();
function Dt(r, t, e) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(Hs).forEach(function(i) {
    if (!Rs) {
      var l = r.listeners;
      l && l[i] && l[i][e] && (a = l[i][e], delete l[i][e], Object.keys(l[i]).length === 0 && delete l[i], Object.keys(l).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, a, s);
  });
}
function wt(r, t, e) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(Hs).forEach(function(i) {
    if (s.once && !Rs) {
      var l = r.listeners, h = l === void 0 ? {} : l;
      a = function() {
        delete h[i][e], r.removeEventListener(i, a, s);
        for (var p = arguments.length, f = new Array(p), m = 0; m < p; m++)
          f[m] = arguments[m];
        e.apply(r, f);
      }, h[i] || (h[i] = {}), h[i][e] && r.removeEventListener(i, h[i][e], s), h[i][e] = a, r.listeners = h;
    }
    r.addEventListener(i, a, s);
  });
}
function oe(r, t, e) {
  var s;
  return pt(Event) && pt(CustomEvent) ? s = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(t, !0, !0, e)), r.dispatchEvent(s);
}
function zs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Ue = At.location, Yc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Xr(r) {
  var t = r.match(Yc);
  return t !== null && (t[1] !== Ue.protocol || t[2] !== Ue.hostname || t[3] !== Ue.port);
}
function qr(r) {
  var t = "timestamp=".concat(new Date().getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function ge(r) {
  var t = r.rotate, e = r.scaleX, s = r.scaleY, a = r.translateX, i = r.translateY, l = [];
  K(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), K(i) && i !== 0 && l.push("translateY(".concat(i, "px)")), K(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), K(e) && e !== 1 && l.push("scaleX(".concat(e, ")")), K(s) && s !== 1 && l.push("scaleY(".concat(s, ")"));
  var h = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: h,
    msTransform: h,
    transform: h
  };
}
function Wc(r) {
  var t = Es({}, r), e = 0;
  return st(r, function(s, a) {
    delete t[a], st(t, function(i) {
      var l = Math.abs(s.startX - i.startX), h = Math.abs(s.startY - i.startY), v = Math.abs(s.endX - i.endX), p = Math.abs(s.endY - i.endY), f = Math.sqrt(l * l + h * h), m = Math.sqrt(v * v + p * p), y = (m - f) / f;
      Math.abs(y) > Math.abs(e) && (e = y);
    });
  }), e;
}
function De(r, t) {
  var e = r.pageX, s = r.pageY, a = {
    endX: e,
    endY: s
  };
  return t ? a : Es({
    startX: e,
    startY: s
  }, a);
}
function Xc(r) {
  var t = 0, e = 0, s = 0;
  return st(r, function(a) {
    var i = a.startX, l = a.startY;
    t += i, e += l, s += 1;
  }), t /= s, e /= s, {
    pageX: t,
    pageY: e
  };
}
function Vt(r) {
  var t = r.aspectRatio, e = r.height, s = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = Wr(s), l = Wr(e);
  if (i && l) {
    var h = e * t;
    a === "contain" && h > s || a === "cover" && h < s ? e = s / t : s = e * t;
  } else
    i ? e = s / t : l && (s = e * t);
  return {
    width: s,
    height: e
  };
}
function qc(r) {
  var t = r.width, e = r.height, s = r.degree;
  if (s = Math.abs(s) % 180, s === 90)
    return {
      width: e,
      height: t
    };
  var a = s % 90 * Math.PI / 180, i = Math.sin(a), l = Math.cos(a), h = t * l + e * i, v = t * i + e * l;
  return s > 90 ? {
    width: v,
    height: h
  } : {
    width: h,
    height: v
  };
}
function Fc(r, t, e, s) {
  var a = t.aspectRatio, i = t.naturalWidth, l = t.naturalHeight, h = t.rotate, v = h === void 0 ? 0 : h, p = t.scaleX, f = p === void 0 ? 1 : p, m = t.scaleY, y = m === void 0 ? 1 : m, C = e.aspectRatio, $ = e.naturalWidth, E = e.naturalHeight, A = s.fillColor, U = A === void 0 ? "transparent" : A, V = s.imageSmoothingEnabled, I = V === void 0 ? !0 : V, j = s.imageSmoothingQuality, z = j === void 0 ? "low" : j, _ = s.maxWidth, B = _ === void 0 ? 1 / 0 : _, R = s.maxHeight, at = R === void 0 ? 1 / 0 : R, ut = s.minWidth, lt = ut === void 0 ? 0 : ut, yt = s.minHeight, bt = yt === void 0 ? 0 : yt, F = document.createElement("canvas"), et = F.getContext("2d"), O = Vt({
    aspectRatio: C,
    width: B,
    height: at
  }), H = Vt({
    aspectRatio: C,
    width: lt,
    height: bt
  }, "cover"), P = Math.min(O.width, Math.max(H.width, $)), dt = Math.min(O.height, Math.max(H.height, E)), G = Vt({
    aspectRatio: a,
    width: B,
    height: at
  }), tt = Vt({
    aspectRatio: a,
    width: lt,
    height: bt
  }, "cover"), _t = Math.min(G.width, Math.max(tt.width, i)), Jt = Math.min(G.height, Math.max(tt.height, l)), He = [-_t / 2, -Jt / 2, _t, Jt];
  return F.width = se(P), F.height = se(dt), et.fillStyle = U, et.fillRect(0, 0, P, dt), et.save(), et.translate(P / 2, dt / 2), et.rotate(v * Math.PI / 180), et.scale(f, y), et.imageSmoothingEnabled = I, et.imageSmoothingQuality = z, et.drawImage.apply(et, [r].concat(As(He.map(function(Zt) {
    return Math.floor(se(Zt));
  })))), et.restore(), F;
}
var Bs = String.fromCharCode;
function Gc(r, t, e) {
  var s = "";
  e += t;
  for (var a = t; a < e; a += 1)
    s += Bs(r.getUint8(a));
  return s;
}
var Jc = /^data:.*,/;
function Zc(r) {
  var t = r.replace(Jc, ""), e = atob(t), s = new ArrayBuffer(e.length), a = new Uint8Array(s);
  return st(a, function(i, l) {
    a[l] = e.charCodeAt(l);
  }), s;
}
function Qc(r, t) {
  for (var e = [], s = 8192, a = new Uint8Array(r); a.length > 0; )
    e.push(Bs.apply(null, Vs(a.subarray(0, s)))), a = a.subarray(s);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function tu(r) {
  var t = new DataView(r), e;
  try {
    var s, a, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var l = t.byteLength, h = 2; h + 1 < l; ) {
        if (t.getUint8(h) === 255 && t.getUint8(h + 1) === 225) {
          a = h;
          break;
        }
        h += 1;
      }
    if (a) {
      var v = a + 4, p = a + 10;
      if (Gc(t, v, 4) === "Exif") {
        var f = t.getUint16(p);
        if (s = f === 18761, (s || f === 19789) && t.getUint16(p + 2, s) === 42) {
          var m = t.getUint32(p + 4, s);
          m >= 8 && (i = p + m);
        }
      }
    }
    if (i) {
      var y = t.getUint16(i, s), C, $;
      for ($ = 0; $ < y; $ += 1)
        if (C = i + $ * 12 + 2, t.getUint16(C, s) === 274) {
          C += 8, e = t.getUint16(C, s), t.setUint16(C, 1, s);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function eu(r) {
  var t = 0, e = 1, s = 1;
  switch (r) {
    case 2:
      e = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      s = -1;
      break;
    case 5:
      t = 90, s = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, e = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: e,
    scaleY: s
  };
}
var ru = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, s = this.container, a = this.cropper, i = Number(e.minContainerWidth), l = Number(e.minContainerHeight);
    ct(a, gt), Et(t, gt);
    var h = {
      width: Math.max(s.offsetWidth, i >= 0 ? i : Ns),
      height: Math.max(s.offsetHeight, l >= 0 ? l : js)
    };
    this.containerData = h, jt(a, {
      width: h.width,
      height: h.height
    }), ct(t, gt), Et(a, gt);
  },
  initCanvas: function() {
    var t = this.containerData, e = this.imageData, s = this.options.viewMode, a = Math.abs(e.rotate) % 180 === 90, i = a ? e.naturalHeight : e.naturalWidth, l = a ? e.naturalWidth : e.naturalHeight, h = i / l, v = t.width, p = t.height;
    t.height * h > t.width ? s === 3 ? v = t.height * h : p = t.width / h : s === 3 ? p = t.width / h : v = t.height * h;
    var f = {
      aspectRatio: h,
      naturalWidth: i,
      naturalHeight: l,
      width: v,
      height: p
    };
    this.canvasData = f, this.limited = s === 1 || s === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (t.width - f.width) / 2, f.top = (t.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(t, e) {
    var s = this.options, a = this.containerData, i = this.canvasData, l = this.cropBoxData, h = s.viewMode, v = i.aspectRatio, p = this.cropped && l;
    if (t) {
      var f = Number(s.minCanvasWidth) || 0, m = Number(s.minCanvasHeight) || 0;
      h > 1 ? (f = Math.max(f, a.width), m = Math.max(m, a.height), h === 3 && (m * v > f ? f = m * v : m = f / v)) : h > 0 && (f ? f = Math.max(f, p ? l.width : 0) : m ? m = Math.max(m, p ? l.height : 0) : p && (f = l.width, m = l.height, m * v > f ? f = m * v : m = f / v));
      var y = Vt({
        aspectRatio: v,
        width: f,
        height: m
      });
      f = y.width, m = y.height, i.minWidth = f, i.minHeight = m, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (e)
      if (h > (p ? 0 : 1)) {
        var C = a.width - i.width, $ = a.height - i.height;
        i.minLeft = Math.min(0, C), i.minTop = Math.min(0, $), i.maxLeft = Math.max(0, C), i.maxTop = Math.max(0, $), p && this.limited && (i.minLeft = Math.min(l.left, l.left + (l.width - i.width)), i.minTop = Math.min(l.top, l.top + (l.height - i.height)), i.maxLeft = l.left, i.maxTop = l.top, h === 2 && (i.width >= a.width && (i.minLeft = Math.min(0, C), i.maxLeft = Math.max(0, C)), i.height >= a.height && (i.minTop = Math.min(0, $), i.maxTop = Math.max(0, $))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = a.width, i.maxTop = a.height;
  },
  renderCanvas: function(t, e) {
    var s = this.canvasData, a = this.imageData;
    if (e) {
      var i = qc({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), l = i.width, h = i.height, v = s.width * (l / s.naturalWidth), p = s.height * (h / s.naturalHeight);
      s.left -= (v - s.width) / 2, s.top -= (p - s.height) / 2, s.width = v, s.height = p, s.aspectRatio = l / h, s.naturalWidth = l, s.naturalHeight = h, this.limitCanvas(!0, !1);
    }
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCanvas(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, jt(this.canvas, Q({
      width: s.width,
      height: s.height
    }, ge({
      translateX: s.left,
      translateY: s.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var e = this.canvasData, s = this.imageData, a = s.naturalWidth * (e.width / e.naturalWidth), i = s.naturalHeight * (e.height / e.naturalHeight);
    Q(s, {
      width: a,
      height: i,
      left: (e.width - a) / 2,
      top: (e.height - i) / 2
    }), jt(this.image, Q({
      width: s.width,
      height: s.height
    }, ge(Q({
      translateX: s.left,
      translateY: s.top
    }, s)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, e = this.canvasData, s = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, i = {
      width: e.width,
      height: e.height
    };
    s && (e.height * s > e.width ? i.height = i.width / s : i.width = i.height * s), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * a), i.height = Math.max(i.minHeight, i.height * a), i.left = e.left + (e.width - i.width) / 2, i.top = e.top + (e.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, e) {
    var s = this.options, a = this.containerData, i = this.canvasData, l = this.cropBoxData, h = this.limited, v = s.aspectRatio;
    if (t) {
      var p = Number(s.minCropBoxWidth) || 0, f = Number(s.minCropBoxHeight) || 0, m = h ? Math.min(a.width, i.width, i.width + i.left, a.width - i.left) : a.width, y = h ? Math.min(a.height, i.height, i.height + i.top, a.height - i.top) : a.height;
      p = Math.min(p, a.width), f = Math.min(f, a.height), v && (p && f ? f * v > p ? f = p / v : p = f * v : p ? f = p / v : f && (p = f * v), y * v > m ? y = m / v : m = y * v), l.minWidth = Math.min(p, m), l.minHeight = Math.min(f, y), l.maxWidth = m, l.maxHeight = y;
    }
    e && (h ? (l.minLeft = Math.max(0, i.left), l.minTop = Math.max(0, i.top), l.maxLeft = Math.min(a.width, i.left + i.width) - l.width, l.maxTop = Math.min(a.height, i.top + i.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = a.width - l.width, l.maxTop = a.height - l.height));
  },
  renderCropBox: function() {
    var t = this.options, e = this.containerData, s = this.cropBoxData;
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCropBox(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, t.movable && t.cropBoxMovable && be(this.face, ve, s.width >= e.width && s.height >= e.height ? Os : mr), jt(this.cropBox, Q({
      width: s.width,
      height: s.height
    }, ge({
      translateX: s.left,
      translateY: s.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), oe(this.element, Je, this.getData());
  }
}, su = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, s = this.options.preview, a = e ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", l = document.createElement("img");
    if (e && (l.crossOrigin = e), l.src = a, l.alt = i, this.viewBox.appendChild(l), this.viewBoxImage = l, !!s) {
      var h = s;
      typeof s == "string" ? h = t.ownerDocument.querySelectorAll(s) : s.querySelector && (h = [s]), this.previews = h, st(h, function(v) {
        var p = document.createElement("img");
        be(v, ke, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), e && (p.crossOrigin = e), p.src = a, p.alt = i, p.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(p);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var e = rr(t, ke);
      jt(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, Kc(t, ke);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, s = this.cropBoxData, a = s.width, i = s.height, l = t.width, h = t.height, v = s.left - e.left - t.left, p = s.top - e.top - t.top;
    !this.cropped || this.disabled || (jt(this.viewBoxImage, Q({
      width: l,
      height: h
    }, ge(Q({
      translateX: -v,
      translateY: -p
    }, t)))), st(this.previews, function(f) {
      var m = rr(f, ke), y = m.width, C = m.height, $ = y, E = C, A = 1;
      a && (A = y / a, E = i * A), i && E > C && (A = C / i, $ = a * A, E = C), jt(f, {
        width: $,
        height: E
      }), jt(f.getElementsByTagName("img")[0], Q({
        width: l * A,
        height: h * A
      }, ge(Q({
        translateX: -v * A,
        translateY: -p * A
      }, t))));
    }));
  }
}, ou = {
  bind: function() {
    var t = this.element, e = this.options, s = this.cropper;
    pt(e.cropstart) && wt(t, tr, e.cropstart), pt(e.cropmove) && wt(t, Qe, e.cropmove), pt(e.cropend) && wt(t, Ze, e.cropend), pt(e.crop) && wt(t, Je, e.crop), pt(e.zoom) && wt(t, er, e.zoom), wt(s, Vr, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && wt(s, Ur, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && wt(s, jr, this.onDblclick = this.dblclick.bind(this)), wt(t.ownerDocument, Hr, this.onCropMove = this.cropMove.bind(this)), wt(t.ownerDocument, Rr, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && wt(window, Br, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, s = this.cropper;
    pt(e.cropstart) && Dt(t, tr, e.cropstart), pt(e.cropmove) && Dt(t, Qe, e.cropmove), pt(e.cropend) && Dt(t, Ze, e.cropend), pt(e.crop) && Dt(t, Je, e.crop), pt(e.zoom) && Dt(t, er, e.zoom), Dt(s, Vr, this.onCropStart), e.zoomable && e.zoomOnWheel && Dt(s, Ur, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && Dt(s, jr, this.onDblclick), Dt(t.ownerDocument, Hr, this.onCropMove), Dt(t.ownerDocument, Rr, this.onCropEnd), e.responsive && Dt(window, Br, this.onResize);
  }
}, iu = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, s = this.containerData, a = e.offsetWidth / s.width, i = e.offsetHeight / s.height, l = Math.abs(a - 1) > Math.abs(i - 1) ? a : i;
      if (l !== 1) {
        var h, v;
        t.restore && (h = this.getCanvasData(), v = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(st(h, function(p, f) {
          h[f] = p * l;
        })), this.setCropBoxData(st(v, function(p, f) {
          v[f] = p * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ps || this.setDragMode(Bc(this.dragBox, Fe) ? Is : vr);
  },
  wheel: function(t) {
    var e = this, s = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * s, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, s = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (K(e) && e !== 1 || K(s) && s !== 0 || t.ctrlKey))) {
      var a = this.options, i = this.pointers, l;
      t.changedTouches ? st(t.changedTouches, function(h) {
        i[h.identifier] = De(h);
      }) : i[t.pointerId || 0] = De(t), Object.keys(i).length > 1 && a.zoomable && a.zoomOnTouch ? l = Ls : l = rr(t.target, ve), !!Oc.test(l) && oe(this.element, tr, {
        originalEvent: t,
        action: l
      }) !== !1 && (t.preventDefault(), this.action = l, this.cropping = !1, l === Ts && (this.cropping = !0, ct(this.dragBox, Te)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var s = this.pointers;
      t.preventDefault(), oe(this.element, Qe, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(a) {
        Q(s[a.identifier] || {}, De(a, !0));
      }) : Q(s[t.pointerId || 0] || {}, De(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, s = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(a) {
        delete s[a.identifier];
      }) : delete s[t.pointerId || 0], e && (t.preventDefault(), Object.keys(s).length || (this.action = ""), this.cropping && (this.cropping = !1, re(this.dragBox, Te, this.cropped && this.options.modal)), oe(this.element, Ze, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, nu = {
  change: function(t) {
    var e = this.options, s = this.canvasData, a = this.containerData, i = this.cropBoxData, l = this.pointers, h = this.action, v = e.aspectRatio, p = i.left, f = i.top, m = i.width, y = i.height, C = p + m, $ = f + y, E = 0, A = 0, U = a.width, V = a.height, I = !0, j;
    !v && t.shiftKey && (v = m && y ? m / y : 1), this.limited && (E = i.minLeft, A = i.minTop, U = E + Math.min(a.width, s.width, s.left + s.width), V = A + Math.min(a.height, s.height, s.top + s.height));
    var z = l[Object.keys(l)[0]], _ = {
      x: z.endX - z.startX,
      y: z.endY - z.startY
    }, B = function(at) {
      switch (at) {
        case Kt:
          C + _.x > U && (_.x = U - C);
          break;
        case Yt:
          p + _.x < E && (_.x = E - p);
          break;
        case Nt:
          f + _.y < A && (_.y = A - f);
          break;
        case te:
          $ + _.y > V && (_.y = V - $);
          break;
      }
    };
    switch (h) {
      case mr:
        p += _.x, f += _.y;
        break;
      case Kt:
        if (_.x >= 0 && (C >= U || v && (f <= A || $ >= V))) {
          I = !1;
          break;
        }
        B(Kt), m += _.x, m < 0 && (h = Yt, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case Nt:
        if (_.y <= 0 && (f <= A || v && (p <= E || C >= U))) {
          I = !1;
          break;
        }
        B(Nt), y -= _.y, f += _.y, y < 0 && (h = te, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case Yt:
        if (_.x <= 0 && (p <= E || v && (f <= A || $ >= V))) {
          I = !1;
          break;
        }
        B(Yt), m -= _.x, p += _.x, m < 0 && (h = Kt, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case te:
        if (_.y >= 0 && ($ >= V || v && (p <= E || C >= U))) {
          I = !1;
          break;
        }
        B(te), y += _.y, y < 0 && (h = Nt, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case de:
        if (v) {
          if (_.y <= 0 && (f <= A || C >= U)) {
            I = !1;
            break;
          }
          B(Nt), y -= _.y, f += _.y, m = y * v;
        } else
          B(Nt), B(Kt), _.x >= 0 ? C < U ? m += _.x : _.y <= 0 && f <= A && (I = !1) : m += _.x, _.y <= 0 ? f > A && (y -= _.y, f += _.y) : (y -= _.y, f += _.y);
        m < 0 && y < 0 ? (h = pe, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = he, m = -m, p -= m) : y < 0 && (h = fe, y = -y, f -= y);
        break;
      case he:
        if (v) {
          if (_.y <= 0 && (f <= A || p <= E)) {
            I = !1;
            break;
          }
          B(Nt), y -= _.y, f += _.y, m = y * v, p += i.width - m;
        } else
          B(Nt), B(Yt), _.x <= 0 ? p > E ? (m -= _.x, p += _.x) : _.y <= 0 && f <= A && (I = !1) : (m -= _.x, p += _.x), _.y <= 0 ? f > A && (y -= _.y, f += _.y) : (y -= _.y, f += _.y);
        m < 0 && y < 0 ? (h = fe, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = de, m = -m, p -= m) : y < 0 && (h = pe, y = -y, f -= y);
        break;
      case pe:
        if (v) {
          if (_.x <= 0 && (p <= E || $ >= V)) {
            I = !1;
            break;
          }
          B(Yt), m -= _.x, p += _.x, y = m / v;
        } else
          B(te), B(Yt), _.x <= 0 ? p > E ? (m -= _.x, p += _.x) : _.y >= 0 && $ >= V && (I = !1) : (m -= _.x, p += _.x), _.y >= 0 ? $ < V && (y += _.y) : y += _.y;
        m < 0 && y < 0 ? (h = de, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = fe, m = -m, p -= m) : y < 0 && (h = he, y = -y, f -= y);
        break;
      case fe:
        if (v) {
          if (_.x >= 0 && (C >= U || $ >= V)) {
            I = !1;
            break;
          }
          B(Kt), m += _.x, y = m / v;
        } else
          B(te), B(Kt), _.x >= 0 ? C < U ? m += _.x : _.y >= 0 && $ >= V && (I = !1) : m += _.x, _.y >= 0 ? $ < V && (y += _.y) : y += _.y;
        m < 0 && y < 0 ? (h = he, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = pe, m = -m, p -= m) : y < 0 && (h = de, y = -y, f -= y);
        break;
      case Os:
        this.move(_.x, _.y), I = !1;
        break;
      case Ls:
        this.zoom(Wc(l), t), I = !1;
        break;
      case Ts:
        if (!_.x || !_.y) {
          I = !1;
          break;
        }
        j = zs(this.cropper), p = z.startX - j.left, f = z.startY - j.top, m = i.minWidth, y = i.minHeight, _.x > 0 ? h = _.y > 0 ? fe : de : _.x < 0 && (p -= m, h = _.y > 0 ? pe : he), _.y < 0 && (f -= y), this.cropped || (Et(this.cropBox, gt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    I && (i.width = m, i.height = y, i.left = p, i.top = f, this.action = h, this.renderCropBox()), st(l, function(R) {
      R.startX = R.endX, R.startY = R.endY;
    });
  }
}, au = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ct(this.dragBox, Te), Et(this.cropBox, gt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Et(this.dragBox, Te), ct(this.cropBox, gt)), this;
  },
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, st(this.previews, function(s) {
      s.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Et(this.cropper, Pr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ct(this.cropper, Pr)), this;
  },
  destroy: function() {
    var t = this.element;
    return t[Z] ? (t[Z] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = s.left, i = s.top;
    return this.moveTo(Be(t) ? t : a + Number(t), Be(e) ? e : i + Number(e));
  },
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (K(t) && (s.left = t, a = !0), K(e) && (s.top = e, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(t, e) {
    var s = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(s.width * t / s.naturalWidth, null, e);
  },
  zoomTo: function(t, e, s) {
    var a = this.options, i = this.canvasData, l = i.width, h = i.height, v = i.naturalWidth, p = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var f = v * t, m = p * t;
      if (oe(this.element, er, {
        ratio: t,
        oldRatio: l / v,
        originalEvent: s
      }) === !1)
        return this;
      if (s) {
        var y = this.pointers, C = zs(this.cropper), $ = y && Object.keys(y).length ? Xc(y) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        i.left -= (f - l) * (($.pageX - C.left - i.left) / l), i.top -= (m - h) * (($.pageY - C.top - i.top) / h);
      } else
        ee(e) && K(e.x) && K(e.y) ? (i.left -= (f - l) * ((e.x - i.left) / l), i.top -= (m - h) * ((e.y - i.top) / h)) : (i.left -= (f - l) / 2, i.top -= (m - h) / 2);
      i.width = f, i.height = m, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(t) {
    var e = this.imageData.scaleY;
    return this.scale(t, K(e) ? e : 1);
  },
  scaleY: function(t) {
    var e = this.imageData.scaleX;
    return this.scale(K(e) ? e : 1, t);
  },
  scale: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.imageData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (K(t) && (s.scaleX = t, a = !0), K(e) && (s.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.options, s = this.imageData, a = this.canvasData, i = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: i.left - a.left,
        y: i.top - a.top,
        width: i.width,
        height: i.height
      };
      var h = s.width / s.naturalWidth;
      if (st(l, function(f, m) {
        l[m] = f / h;
      }), t) {
        var v = Math.round(l.y + l.height), p = Math.round(l.x + l.width);
        l.x = Math.round(l.x), l.y = Math.round(l.y), l.width = p - l.x, l.height = v - l.y;
      }
    } else
      l = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return e.rotatable && (l.rotate = s.rotate || 0), e.scalable && (l.scaleX = s.scaleX || 1, l.scaleY = s.scaleY || 1), l;
  },
  setData: function(t) {
    var e = this.options, s = this.imageData, a = this.canvasData, i = {};
    if (this.ready && !this.disabled && ee(t)) {
      var l = !1;
      e.rotatable && K(t.rotate) && t.rotate !== s.rotate && (s.rotate = t.rotate, l = !0), e.scalable && (K(t.scaleX) && t.scaleX !== s.scaleX && (s.scaleX = t.scaleX, l = !0), K(t.scaleY) && t.scaleY !== s.scaleY && (s.scaleY = t.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var h = s.width / s.naturalWidth;
      K(t.x) && (i.left = t.x * h + a.left), K(t.y) && (i.top = t.y * h + a.top), K(t.width) && (i.width = t.width * h), K(t.height) && (i.height = t.height * h), this.setCropBoxData(i);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var t = this.canvasData, e = {};
    return this.ready && st(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(s) {
      e[s] = t[s];
    }), e;
  },
  setCanvasData: function(t) {
    var e = this.canvasData, s = e.aspectRatio;
    return this.ready && !this.disabled && ee(t) && (K(t.left) && (e.left = t.left), K(t.top) && (e.top = t.top), K(t.width) ? (e.width = t.width, e.height = t.width / s) : K(t.height) && (e.height = t.height, e.width = t.height * s), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var t = this.cropBoxData, e;
    return this.ready && this.cropped && (e = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), e || {};
  },
  setCropBoxData: function(t) {
    var e = this.cropBoxData, s = this.options.aspectRatio, a, i;
    return this.ready && this.cropped && !this.disabled && ee(t) && (K(t.left) && (e.left = t.left), K(t.top) && (e.top = t.top), K(t.width) && t.width !== e.width && (a = !0, e.width = t.width), K(t.height) && t.height !== e.height && (i = !0, e.height = t.height), s && (a ? e.height = e.width / s : i && (e.width = e.height * s)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var e = this.canvasData, s = Fc(this.image, this.imageData, e, t);
    if (!this.cropped)
      return s;
    var a = this.getData(), i = a.x, l = a.y, h = a.width, v = a.height, p = s.width / Math.floor(e.naturalWidth);
    p !== 1 && (i *= p, l *= p, h *= p, v *= p);
    var f = h / v, m = Vt({
      aspectRatio: f,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), y = Vt({
      aspectRatio: f,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), C = Vt({
      aspectRatio: f,
      width: t.width || (p !== 1 ? s.width : h),
      height: t.height || (p !== 1 ? s.height : v)
    }), $ = C.width, E = C.height;
    $ = Math.min(m.width, Math.max(y.width, $)), E = Math.min(m.height, Math.max(y.height, E));
    var A = document.createElement("canvas"), U = A.getContext("2d");
    A.width = se($), A.height = se(E), U.fillStyle = t.fillColor || "transparent", U.fillRect(0, 0, $, E);
    var V = t.imageSmoothingEnabled, I = V === void 0 ? !0 : V, j = t.imageSmoothingQuality;
    U.imageSmoothingEnabled = I, j && (U.imageSmoothingQuality = j);
    var z = s.width, _ = s.height, B = i, R = l, at, ut, lt, yt, bt, F;
    B <= -h || B > z ? (B = 0, at = 0, lt = 0, bt = 0) : B <= 0 ? (lt = -B, B = 0, at = Math.min(z, h + B), bt = at) : B <= z && (lt = 0, at = Math.min(h, z - B), bt = at), at <= 0 || R <= -v || R > _ ? (R = 0, ut = 0, yt = 0, F = 0) : R <= 0 ? (yt = -R, R = 0, ut = Math.min(_, v + R), F = ut) : R <= _ && (yt = 0, ut = Math.min(v, _ - R), F = ut);
    var et = [B, R, at, ut];
    if (bt > 0 && F > 0) {
      var O = $ / h;
      et.push(lt * O, yt * O, bt * O, F * O);
    }
    return U.drawImage.apply(U, [s].concat(As(et.map(function(H) {
      return Math.floor(se(H));
    })))), A;
  },
  setAspectRatio: function(t) {
    var e = this.options;
    return !this.disabled && !Be(t) && (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(t) {
    var e = this.options, s = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var i = t === vr, l = e.movable && t === Is;
      t = i || l ? t : Ps, e.dragMode = t, be(s, ve, t), re(s, Fe, i), re(s, Ge, l), e.cropBoxMovable || (be(a, ve, t), re(a, Fe, i), re(a, Ge, l));
    }
    return this;
  }
}, lu = At.Cropper, Us = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (xc(this, r), !t || !Pc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, Yr, ee(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Sc(r, [{
    key: "init",
    value: function() {
      var e = this.element, s = e.tagName.toLowerCase(), a;
      if (!e[Z]) {
        if (e[Z] = this, s === "img") {
          if (this.isImg = !0, a = e.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = e.src;
        } else
          s === "canvas" && window.HTMLCanvasElement && (a = e.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(e) {
      var s = this;
      if (!!e) {
        this.url = e, this.imageData = {};
        var a = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Lc.test(e)) {
          Ic.test(e) ? this.read(Zc(e)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), h = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = h, l.onerror = h, l.ontimeout = h, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Kr && l.abort();
        }, l.onload = function() {
          s.read(l.response);
        }, l.onloadend = function() {
          s.reloading = !1, s.xhr = null;
        }, i.checkCrossOrigin && Xr(e) && a.crossOrigin && (e = qr(e)), l.open("GET", e, !0), l.responseType = "arraybuffer", l.withCredentials = a.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(e) {
      var s = this.options, a = this.imageData, i = tu(e), l = 0, h = 1, v = 1;
      if (i > 1) {
        this.url = Qc(e, Kr);
        var p = eu(i);
        l = p.rotate, h = p.scaleX, v = p.scaleY;
      }
      s.rotatable && (a.rotate = l), s.scalable && (a.scaleX = h, a.scaleY = v), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var e = this.element, s = this.url, a = e.crossOrigin, i = s;
      this.options.checkCrossOrigin && Xr(s) && (a || (a = "anonymous"), i = qr(s)), this.crossOrigin = a, this.crossOriginUrl = i;
      var l = document.createElement("img");
      a && (l.crossOrigin = a), l.src = i || s, l.alt = e.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), ct(l, Nr), e.parentNode.insertBefore(l, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, s = this.image;
      s.onload = null, s.onerror = null, this.sizing = !0;
      var a = At.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(At.navigator.userAgent), i = function(p, f) {
        Q(e.imageData, {
          naturalWidth: p,
          naturalHeight: f,
          aspectRatio: p / f
        }), e.initialImageData = Q({}, e.imageData), e.sizing = !1, e.sized = !0, e.build();
      };
      if (s.naturalWidth && !a) {
        i(s.naturalWidth, s.naturalHeight);
        return;
      }
      var l = document.createElement("img"), h = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        i(l.width, l.height), a || h.removeChild(l);
      }, l.src = s.src, a || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", h.appendChild(l));
    }
  }, {
    key: "stop",
    value: function() {
      var e = this.image;
      e.onload = null, e.onerror = null, e.parentNode.removeChild(e), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var e = this.element, s = this.options, a = this.image, i = e.parentNode, l = document.createElement("div");
        l.innerHTML = Nc;
        var h = l.querySelector(".".concat(Z, "-container")), v = h.querySelector(".".concat(Z, "-canvas")), p = h.querySelector(".".concat(Z, "-drag-box")), f = h.querySelector(".".concat(Z, "-crop-box")), m = f.querySelector(".".concat(Z, "-face"));
        this.container = i, this.cropper = h, this.canvas = v, this.dragBox = p, this.cropBox = f, this.viewBox = h.querySelector(".".concat(Z, "-view-box")), this.face = m, v.appendChild(a), ct(e, gt), i.insertBefore(h, e.nextSibling), this.isImg || Et(a, Nr), this.initPreview(), this.bind(), s.initialAspectRatio = Math.max(0, s.initialAspectRatio) || NaN, s.aspectRatio = Math.max(0, s.aspectRatio) || NaN, s.viewMode = Math.max(0, Math.min(3, Math.round(s.viewMode))) || 0, ct(f, gt), s.guides || ct(f.getElementsByClassName("".concat(Z, "-dashed")), gt), s.center || ct(f.getElementsByClassName("".concat(Z, "-center")), gt), s.background && ct(h, "".concat(Z, "-bg")), s.highlight || ct(m, $c), s.cropBoxMovable && (ct(m, Ge), be(m, ve, mr)), s.cropBoxResizable || (ct(f.getElementsByClassName("".concat(Z, "-line")), gt), ct(f.getElementsByClassName("".concat(Z, "-point")), gt)), this.render(), this.ready = !0, this.setDragMode(s.dragMode), s.autoCrop && this.crop(), this.setData(s.data), pt(s.ready) && wt(e, zr, s.ready, {
          once: !0
        }), oe(e, zr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Et(this.element, gt));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = lu, r;
    }
  }, {
    key: "setDefaults",
    value: function(e) {
      Q(Yr, ee(e) && e);
    }
  }]), r;
}();
Q(Us.prototype, ru, su, ou, iu, nu, au);
const cu = { class: "flex" }, uu = ["aria-label"], du = { class: "ml-auto mb-2" }, hu = { class: "w-full flex justify-center" }, fu = ["src"], pu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, s = L("accessToken"), { t: a } = L("i18n"), { apiUrl: i } = Tt(), l = T(null), h = T(null), v = T(!1), p = T(""), f = T(!1), m = () => {
      v.value = !v.value, v.value ? h.value = new Us(l.value, {
        crop($) {
        }
      }) : h.value.destroy();
    }, y = L("postData"), C = () => {
      h.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        ($) => {
          p.value = "", f.value = !1, Ee(i.value, {
            method: "POST",
            params: Object.assign(y, {
              q: "upload",
              adapter: e.selection.adapter,
              path: e.selection.item.path,
              file: $
            }),
            name: e.selection.item.basename,
            json: !1,
            headers: { Authorization: s ? "Bearer " + s : null }
          }).then((E) => {
            p.value = a("Updated."), l.value.src = Mr(e.selection.adapter, e.selection.item.path), m(), t("load");
          }).catch((E) => {
            p.value = a(E.message), f.value = !0;
          });
        }
      );
    };
    return Mt(() => {
      t("load");
    }), ($, E) => (x(), k(nt, null, [
      d("div", cu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(r.selection.item.basename), 9, uu),
        d("div", du, [
          v.value ? (x(), k("button", {
            key: 0,
            onClick: C,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(a)("Crop")), 1)) : Y("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: E[0] || (E[0] = (A) => m())
          }, D(v.value ? S(a)("Cancel") : S(a)("Edit")), 1)
        ])
      ]),
      d("div", hu, [
        d("img", {
          ref_key: "image",
          ref: l,
          class: "max-w-[50vh] max-h-[50vh]",
          src: S(Mr)(e.selection.adapter, e.selection.item.path),
          alt: ""
        }, null, 8, fu)
      ]),
      p.value.length ? (x(), J(Lt, {
        key: 0,
        onHidden: E[1] || (E[1] = (A) => p.value = ""),
        error: f.value
      }, {
        default: W(() => [
          ot(D(p.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Y("", !0)
    ], 64));
  }
}, gu = { class: "flex" }, mu = ["aria-label"], vu = /* @__PURE__ */ d("div", null, null, -1), bu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return Mt(() => {
      t("load");
    }), (e, s) => (x(), k(nt, null, [
      d("div", gu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(r.selection.item.basename), 9, mu)
      ]),
      vu
    ], 64));
  }
}, yu = ["aria-label"], wu = {
  class: "w-full",
  preload: "",
  controls: ""
}, xu = ["src"], Su = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = Tt(), a = () => s.value + "?" + Ft({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), k(nt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(r.selection.item.basename), 9, yu),
      d("div", null, [
        d("video", wu, [
          d("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, xu),
          ot(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, _u = ["aria-label"], ku = {
  class: "w-full",
  controls: ""
}, Du = ["src"], Cu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = Tt(), a = () => s.value + "?" + Ft({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), k(nt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(r.selection.item.basename), 9, _u),
      d("div", null, [
        d("audio", ku, [
          d("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Du),
          ot(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Mu = ["aria-label"], $u = ["data"], Eu = ["src"], Au = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = Tt(), a = () => s.value + "?" + Ft({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), k(nt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(r.selection.item.basename), 9, Mu),
      d("div", null, [
        d("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          d("iframe", {
            class: "border-0",
            src: a(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, Eu)
        ], 8, $u)
      ])
    ], 64));
  }
}, Tu = { class: "sm:flex sm:items-start" }, Ou = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Lu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Iu = {
  key: 0,
  class: "flex leading-5"
}, Pu = /* @__PURE__ */ d("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ d("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ d("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Nu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, ju = { class: "font-bold pl-2" }, Vu = { class: "font-bold pl-2" }, Hu = {
  name: "VFModalPreview"
}, Ru = /* @__PURE__ */ Object.assign(Hu, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: e } = Tt(), s = L("emitter"), { t: a } = L("i18n"), i = T(!1), l = (p) => i.value = p, h = (p) => {
      var f;
      return ((f = t.selection.item.mime_type) != null ? f : "").startsWith(p);
    }, v = () => {
      const p = e.value + "?" + Ft({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      s.emit("vf-download", p);
    };
    return (p, f) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: f[6] || (f[6] = (m) => S(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Close")), 1),
        d("button", {
          type: "button",
          onClick: f[7] || (f[7] = (m) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Download")), 1)
      ]),
      default: W(() => [
        d("div", Tu, [
          d("div", Ou, [
            d("div", null, [
              h("text") ? (x(), J(wc, {
                key: 0,
                selection: r.selection,
                onLoad: f[0] || (f[0] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("image") ? (x(), J(pu, {
                key: 1,
                selection: r.selection,
                onLoad: f[1] || (f[1] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("video") ? (x(), J(Su, {
                key: 2,
                selection: r.selection,
                onLoad: f[2] || (f[2] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("audio") ? (x(), J(Cu, {
                key: 3,
                selection: r.selection,
                onLoad: f[3] || (f[3] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("application/pdf") ? (x(), J(Au, {
                key: 4,
                selection: r.selection,
                onLoad: f[4] || (f[4] = (m) => l(!0))
              }, null, 8, ["selection"])) : (x(), J(bu, {
                key: 5,
                selection: r.selection,
                onLoad: f[5] || (f[5] = (m) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            d("div", Lu, [
              i.value == !1 ? (x(), k("div", Iu, [
                Pu,
                d("span", null, D(S(a)("Loading")), 1)
              ])) : Y("", !0)
            ])
          ])
        ]),
        d("div", Nu, [
          d("div", null, [
            d("span", ju, D(S(a)("File Size")) + ": ", 1),
            ot(D(S(Qr)(r.selection.item.file_size)), 1)
          ]),
          d("div", null, [
            d("span", Vu, D(S(a)("Last Modified")) + ": ", 1),
            ot(" " + D(S(ts)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), zu = { class: "sm:flex sm:items-start" }, Bu = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), Uu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ku = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yu = { class: "mt-2" }, Wu = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Xu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fu = [
  qu
], Gu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ju = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Zu = [
  Ju
], Qu = { class: "ml-1.5" }, td = ["onKeyup"], ed = {
  name: "VFModalRename"
}, rd = /* @__PURE__ */ Object.assign(ed, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(t.selection.items[0]), l = T(t.selection.items[0].basename), h = T(""), v = () => {
      l.value != "" && e.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path,
          name: l.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("%s is renamed.", l.value) });
        },
        onError: (p) => {
          h.value = a(p.message);
        }
      });
    };
    return (p, f) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Rename")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", zu, [
          Bu,
          d("div", Uu, [
            d("h3", Ku, D(S(a)("Rename")), 1),
            d("div", Yu, [
              d("p", Wu, [
                i.value.type == "dir" ? (x(), k("svg", Xu, Fu)) : (x(), k("svg", Gu, Zu)),
                d("span", Qu, D(i.value.basename), 1)
              ]),
              xt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => l.value = m),
                onKeyup: ne(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, td), [
                [ae, l.value]
              ]),
              h.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => h.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(h.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sd = { class: "sm:flex sm:items-start" }, od = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), id = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, nd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ad = { class: "mt-2" }, ld = { class: "text-gray-500 mb-1" }, cd = ["id"], ud = {
  key: 0,
  class: "py-2"
}, dd = ["disabled", "onClick"], hd = {
  name: "VFModalUpload"
}, fd = /* @__PURE__ */ Object.assign(hd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter"), { apiUrl: s } = Tt(), { t: a } = L("i18n"), i = L("accessToken"), l = T(null), h = T(null), v = T(null), p = T([]), f = T(""), m = T(!0), y = () => {
      f.value = "", l.value.start();
    }, C = L("postData");
    return Mt(() => {
      l.value = new ze.Uploader({
        runtimes: "html5",
        browse_button: v.value,
        container: h.value,
        max_file_size: "2Gb",
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + Ft(Object.assign(C, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        headers: {
          ...$e && { "X-CSRF-Token": $e },
          Authorization: i ? "Bearer " + i : null
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function($, E) {
            m.value = !1, ze.each(E, function(A) {
              p.value.push({
                id: A.id,
                name: A.name,
                size: ze.formatSize(A.size),
                percent: ""
              });
            });
          },
          UploadProgress: function($, E) {
            p.value[p.value.findIndex((A) => A.id == E.id)].percent = E.percent + "%";
          },
          UploadComplete: function() {
            m.value = !0, e.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function($, E) {
            l.value.stop(), f.value = a(JSON.parse(E.response).message);
          }
        }
      }), l.value.init();
    }), ($, E) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          disabled: m.value,
          onClick: Wt(y, ["prevent"]),
          type: "button",
          class: mt([m.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, D(S(a)("Upload")), 11, dd),
        d("button", {
          type: "button",
          onClick: E[1] || (E[1] = (A) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", sd, [
          od,
          d("div", id, [
            d("h3", nd, D(S(a)("Upload files")), 1),
            d("div", ad, [
              d("div", ld, [
                (x(!0), k(nt, null, St(p.value, (A) => (x(), k("div", null, [
                  d("div", {
                    id: A.id
                  }, [
                    ot(D(A.name) + " ( " + D(A.size) + ") ", 1),
                    d("b", null, D(A.percent), 1)
                  ], 8, cd)
                ]))), 256)),
                p.value.length ? Y("", !0) : (x(), k("div", ud, D(S(a)("No files selected!")), 1))
              ]),
              d("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: h
              }, [
                d("button", {
                  ref_key: "pickFiles",
                  ref: v,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, D(S(a)("Select Files")), 513)
              ], 512),
              f.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: E[0] || (E[0] = (A) => f.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(f.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), pd = { class: "sm:flex sm:items-start" }, gd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), md = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bd = { class: "mt-2" }, yd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, wd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Sd = [
  xd
], _d = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, kd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Dd = [
  kd
], Cd = { class: "ml-1.5" }, Md = ["onKeyup", "placeholder"], $d = {
  name: "VFModalArchive"
}, Ed = /* @__PURE__ */ Object.assign($d, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n"), i = T(""), l = T(""), h = T(t.selection.items), v = () => {
      h.value.length && e.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(h.value.map(({ path: p, type: f }) => ({ path: p, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (p) => {
          l.value = a(p.message);
        }
      });
    };
    return (p, f) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Archive")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", pd, [
          gd,
          d("div", md, [
            d("h3", vd, D(S(a)("Archive the files")), 1),
            d("div", bd, [
              (x(!0), k(nt, null, St(h.value, (m) => (x(), k("p", yd, [
                m.type == "dir" ? (x(), k("svg", wd, Sd)) : (x(), k("svg", _d, Dd)),
                d("span", Cd, D(m.basename), 1)
              ]))), 256)),
              xt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                onKeyup: ne(v, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Md), [
                [ae, i.value]
              ]),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ad = { class: "sm:flex sm:items-start" }, Td = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Od = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ld = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Id = { class: "mt-2" }, Pd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Nd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Vd = [
  jd
], Hd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Rd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), zd = [
  Rd
], Bd = { class: "ml-1.5" }, Ud = { class: "my-1 text-sm text-gray-500" }, Kd = {
  name: "VFModalUnarchive"
}, Yd = /* @__PURE__ */ Object.assign(Kd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: a } = L("i18n");
    T("");
    const i = T(t.selection.items[0]), l = T(""), h = T([]), v = () => {
      e.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (p) => {
          l.value = a(p.message);
        }
      });
    };
    return (p, f) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Unarchive")), 1),
        d("button", {
          type: "button",
          onClick: f[1] || (f[1] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(a)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Ad, [
          Td,
          d("div", Od, [
            d("h3", Ld, D(S(a)("Unarchive")), 1),
            d("div", Id, [
              (x(!0), k(nt, null, St(h.value, (m) => (x(), k("p", Pd, [
                m.type == "dir" ? (x(), k("svg", Nd, Vd)) : (x(), k("svg", Hd, zd)),
                d("span", Bd, D(m.basename), 1)
              ]))), 256)),
              d("p", Ud, D(S(a)("The archive will be unarchived at")) + " (" + D(r.current.dirname) + ")", 1),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: f[0] || (f[0] = (m) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Wd = { class: "sm:flex sm:items-start" }, Xd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ d("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ d("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), qd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Fd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Gd = { class: "mt-2" }, Jd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Zd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), th = [
  Qd
], eh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, rh = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), sh = [
  rh
], oh = { class: "ml-1.5" }, ih = { class: "text-sm text-gray-500 pb-1 pt-3" }, nh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ah = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), lh = { class: "ml-1.5 overflow-auto" }, ch = {
  name: "VFModalMove"
}, uh = /* @__PURE__ */ Object.assign(ch, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = L("emitter"), { t: s } = L("i18n");
    L("storage");
    const a = L("adapter"), i = T(t.selection.items.from), l = T(""), h = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: s("Files moved.", t.selection.items.to.name) });
        },
        onError: (v) => {
          l.value = s(v.message);
        }
      });
    };
    return (v, p) => (x(), J(Ot, null, {
      buttons: W(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Yes, Move!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Cancel")), 1)
      ]),
      default: W(() => [
        d("div", Wd, [
          Xd,
          d("div", qd, [
            d("h3", Fd, D(S(s)("Move files")), 1),
            d("div", Gd, [
              (x(!0), k(nt, null, St(i.value, (f) => (x(), k("p", Jd, [
                f.type == "dir" ? (x(), k("svg", Zd, th)) : (x(), k("svg", eh, sh)),
                d("span", oh, D(f.path), 1)
              ]))), 256)),
              d("p", ih, D(S(s)("Are you sure you want to move these files?")), 1),
              d("p", nh, [
                ah,
                d("span", lh, D(r.selection.items.to.path), 1)
              ]),
              l.value.length ? (x(), J(Lt, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: W(() => [
                  ot(D(l.value), 1)
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: Bl,
  ModalMessage: Gl,
  ModalNewFolder: ic,
  ModalNewFile: pc,
  ModalPreview: Ru,
  ModalRename: rd,
  ModalUpload: fd,
  ModalArchive: Ed,
  ModalUnarchive: Yd,
  ModalMove: uh
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  VueFinder: ml,
  ...dh
};
const ph = {
  install(r) {
    for (const t in Ke)
      if (Ke.hasOwnProperty(t)) {
        const e = Ke[t];
        r.component(e.name, e);
      }
  }
};
export {
  ph as default
};
