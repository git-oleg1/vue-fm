import { ref as O, watch as Oe, inject as I, openBlock as x, createElementBlock as _, createElementVNode as d, unref as S, normalizeClass as dt, createTextVNode as st, toDisplayString as D, createCommentVNode as K, createVNode as Dt, TransitionGroup as wo, withCtx as Y, Fragment as lt, renderList as xt, reactive as Ce, onMounted as Mt, onUpdated as xo, withDirectives as wt, vShow as Se, withModifiers as Yt, nextTick as Le, isRef as Gr, vModelSelect as Dr, customRef as So, withKeys as ie, vModelText as ne, normalizeStyle as Jr, provide as Bt, createBlock as q, resolveDynamicComponent as _o, renderSlot as Ye } from "vue";
import Re from "plupload";
var qr;
const $e = (qr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : qr.getAttribute("content"), Ee = (e, { method: t = "get", params: r = {}, json: s = !0, signal: n = null, headers: i = {} }) => {
  const l = { method: t };
  if (l.signal = n, l.headers = {}, Object.assign(l.headers, i), t == "get")
    e += "?" + new URLSearchParams(r);
  else {
    $e && (l.headers["X-CSRF-Token"] = $e);
    let h = new FormData();
    for (const [v, p] of Object.entries(r))
      h.append(v, p);
    l.body = h;
  }
  return fetch(e, l).then((h) => h.ok ? s ? h.json() : h.text() : h.json().then(Promise.reject.bind(Promise)));
};
function ko(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var s = e.get(t);
    s ? s.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var s = e.get(t);
    s && (r ? s.splice(s.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var s = e.get(t);
    s && s.slice().map(function(n) {
      n(r);
    }), (s = e.get("*")) && s.slice().map(function(n) {
      n(t, r);
    });
  } };
}
function We(e) {
  let t = localStorage.getItem(e + "_storage");
  const r = O(JSON.parse(t));
  Oe(r, s);
  function s() {
    r.value === null || r.value === "" ? localStorage.removeItem(e + "_storage") : localStorage.setItem(e + "_storage", JSON.stringify(r.value));
  }
  function n(h, v) {
    r.value = Object.assign({ ...r.value }, { [h]: v });
  }
  function i() {
    r.value = null;
  }
  return { getStore: (h, v = null) => r.value === null || r.value === "" ? v : r.value.hasOwnProperty(h) ? r.value[h] : v, setStore: n, clearStore: i };
}
const Mr = O("");
function At() {
  function e(t) {
    Mr.value = t;
  }
  return { apiUrl: Mr, setApiUrl: e };
}
const Do = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Mo = {
  key: 0,
  class: "flex text-center"
}, Co = ["aria-label"], $o = /* @__PURE__ */ d("svg", {
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
], Ao = ["aria-label"], To = /* @__PURE__ */ d("svg", {
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
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Oo = [
  To
], Lo = ["aria-label"], Io = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Po = [
  Io
], No = ["aria-label"], jo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Vo = [
  jo
], Ho = ["aria-label"], zo = /* @__PURE__ */ d("svg", {
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
], -1), Ro = [
  zo
], Bo = ["aria-label"], Uo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Ko = [
  Uo
], Yo = ["aria-label"], Wo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Xo = [
  Wo
], Fo = {
  key: 1,
  class: "flex text-center"
}, qo = { class: "pl-2" }, Go = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Jo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Zo = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Qo = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ti = [
  Zo,
  Qo
], ei = { class: "flex text-center items-center justify-end" }, ri = ["aria-label"], si = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), oi = [
  si
], ii = ["aria-label"], ni = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, ai = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, li = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, ci = ["aria-label"], ui = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, di = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, hi = {
  name: "VFToolbar"
}, fi = /* @__PURE__ */ Object.assign(hi, {
  props: {
    data: Object
  },
  setup(e) {
    const t = I("emitter"), { getStore: r, setStore: s } = I("storage"), { t: n } = I("i18n"), i = O(r("viewport", "grid")), l = O([]), h = O(r("full-screen", !1)), v = O("");
    t.on("vf-search-query", ({ newQuery: y }) => {
      v.value = y;
    });
    const p = I("loadingState"), f = () => p.value, m = () => {
      h.value = !h.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (y) => {
      l.value = y;
    }), t.on("vf-view-toggle", (y) => {
      s("viewport", y), i.value = y;
    }), (y, M) => (x(), _("div", Do, [
      v.value.length ? (x(), _("div", Fo, [
        d("div", qo, [
          st(D(S(n)("Search results for")) + " ", 1),
          d("span", Go, D(v.value), 1)
        ]),
        f() ? (x(), _("svg", Jo, ti)) : K("", !0)
      ])) : (x(), _("div", Mo, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = (C) => S(t).emit("vf-modal-show", { type: "new-folder", items: l.value }))
        }, Eo, 8, Co),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = (C) => S(t).emit("vf-modal-show", { type: "new-file", items: l.value }))
        }, Oo, 8, Ao),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = (C) => l.value.length != 1 || S(t).emit("vf-modal-show", { type: "rename", items: l.value }))
        }, [
          (x(), _("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Po, 2))
        ], 8, Lo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = (C) => !l.value.length || S(t).emit("vf-modal-show", { type: "delete", items: l.value }))
        }, [
          (x(), _("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Vo, 2))
        ], 8, No),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[4] || (M[4] = (C) => S(t).emit("vf-modal-show", { type: "upload", items: l.value }))
        }, Ro, 8, Ho),
        l.value.length == 1 && l.value[0].mime_type == "application/zip" ? (x(), _("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": S(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[5] || (M[5] = (C) => !l.value.length || S(t).emit("vf-modal-show", { type: "unarchive", items: l.value }))
        }, [
          (x(), _("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ko, 2))
        ], 8, Bo)) : (x(), _("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": S(n)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[6] || (M[6] = (C) => !l.value.length || S(t).emit("vf-modal-show", { type: "archive", items: l.value }))
        }, [
          (x(), _("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Xo, 2))
        ], 8, Yo))
      ])),
      d("div", ei, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (x(), _("svg", {
            onClick: M[7] || (M[7] = (C) => S(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, oi))
        ], 8, ri),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: m
        }, [
          (x(), _("svg", ni, [
            h.value ? (x(), _("path", ai)) : (x(), _("path", li))
          ]))
        ], 8, ii),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[8] || (M[8] = (C) => v.value.length || S(t).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (x(), _("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (x(), _("path", ui)) : K("", !0),
            i.value == "list" ? (x(), _("path", di)) : K("", !0)
          ], 2))
        ], 8, ci)
      ])
    ]));
  }
});
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zr = { exports: {} };
(function(e, t) {
  (function(r, s) {
    e.exports = s();
  })(pi, function() {
    function r(u, c) {
      if (!(u instanceof c))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(u, c) {
      for (var o = 0; o < c.length; o++) {
        var b = c[o];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(u, b.key, b);
      }
    }
    function n(u, c, o) {
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
        c && (b = b.filter(function(a) {
          return Object.getOwnPropertyDescriptor(u, a).enumerable;
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
      return f = Object.setPrototypeOf || function(b, a) {
        return b.__proto__ = a, b;
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
      return m() ? y = Reflect.construct : y = function(a, g, w) {
        var $ = [null];
        $.push.apply($, g);
        var j = Function.bind.apply(a, $), X = new j();
        return w && f(X, w.prototype), X;
      }, y.apply(null, arguments);
    }
    function M(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function C(u) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return C = function(b) {
        if (b === null || !M(b))
          return b;
        if (typeof b != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof c < "u") {
          if (c.has(b))
            return c.get(b);
          c.set(b, a);
        }
        function a() {
          return y(b, arguments, p(this).constructor);
        }
        return a.prototype = Object.create(b.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), f(a, b);
      }, C(u);
    }
    function E(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function A(u, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : E(u);
    }
    function H(u) {
      var c = m();
      return function() {
        var b = p(u), a;
        if (c) {
          var g = p(this).constructor;
          a = Reflect.construct(b, arguments, g);
        } else
          a = b.apply(this, arguments);
        return A(this, a);
      };
    }
    function z(u, c) {
      for (; !Object.prototype.hasOwnProperty.call(u, c) && (u = p(u), u !== null); )
        ;
      return u;
    }
    function L(u, c, o) {
      return typeof Reflect < "u" && Reflect.get ? L = Reflect.get : L = function(a, g, w) {
        var $ = z(a, g);
        if (!!$) {
          var j = Object.getOwnPropertyDescriptor($, g);
          return j.get ? j.get.call(w) : j.value;
        }
      }, L(u, c, o || u);
    }
    function B(u, c) {
      return P(u) || ot(u, c) || it(u, c) || vt();
    }
    function R(u) {
      return k(u) || G(u) || it(u) || bt();
    }
    function k(u) {
      if (Array.isArray(u))
        return ht(u);
    }
    function P(u) {
      if (Array.isArray(u))
        return u;
    }
    function G(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function ot(u, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var o = [], b = !0, a = !1, g = void 0;
        try {
          for (var w = u[Symbol.iterator](), $; !(b = ($ = w.next()).done) && (o.push($.value), !(c && o.length === c)); b = !0)
            ;
        } catch (j) {
          a = !0, g = j;
        } finally {
          try {
            !b && w.return != null && w.return();
          } finally {
            if (a)
              throw g;
          }
        }
        return o;
      }
    }
    function it(u, c) {
      if (!!u) {
        if (typeof u == "string")
          return ht(u, c);
        var o = Object.prototype.toString.call(u).slice(8, -1);
        if (o === "Object" && u.constructor && (o = u.constructor.name), o === "Map" || o === "Set")
          return Array.from(u);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return ht(u, c);
      }
    }
    function ht(u, c) {
      (c == null || c > u.length) && (c = u.length);
      for (var o = 0, b = new Array(c); o < c; o++)
        b[o] = u[o];
      return b;
    }
    function bt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function vt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var J = function(c, o, b) {
      var a = c.x, g = c.y, w = b.x, $ = b.y, j = {
        "+": {
          x: a + w,
          y: g + $
        },
        "-": {
          x: a - w,
          y: g - $
        },
        "*": {
          x: a * w,
          y: g * $
        },
        "/": {
          x: a / w,
          y: g / $
        }
      };
      return j[o];
    }, T = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, V = function(c) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: c.x,
        top: c.y,
        right: c.x,
        bottom: c.y,
        width: o,
        height: o
      };
    }, N = function(c) {
      return {
        x: c,
        y: c
      };
    }, ct = function(u, c, o) {
      window.addEventListener("resize", c), window.addEventListener("scroll", c), u.forEach(function(b, a) {
        o.observe(b, {
          childList: a !== 0,
          attributes: !0
        });
      });
    }, F = function(u) {
      var c = Jt(u);
      return c.x || c.y ? !0 : u instanceof HTMLDocument ? u.body ? !!(u.body.scrollTop = 1) : !!(u.documentElement.scrollTop = 1) : !!(u.scrollTop = 1);
    }, tt = function() {
      var u = document.createElement("div");
      return u.style.position = "fixed", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.zIndex = "999999999999999999", u;
    }, St = function(u) {
      var c = document.createElement("div");
      return c.style.position = "absolute", u || (c.style.background = "rgba(0, 0, 255, 0.1)", c.style.border = "1px solid rgba(0, 0, 255, 0.45)", c.style.display = "none", c.style.pointerEvents = "none"), c;
    }, xe = function(u, c) {
      var o;
      return function() {
        for (var b = arguments.length, a = new Array(b), g = 0; g < b; g++)
          a[g] = arguments[g];
        var w = function() {
          o = null, u.apply(void 0, a);
        };
        clearTimeout(o), o = setTimeout(w, c);
      };
    }, Gt = function() {
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
    }, Jt = function(u) {
      return !u || u instanceof Document ? Gt() : {
        x: u.scrollLeft >= 0 ? u.scrollLeft : Gt().x,
        y: u.scrollTop >= 0 ? u.scrollTop : Gt().y
      };
    }, yr = function(u) {
      var c = u.elementRect, o = u.containerRect, b = u.tolerance, a = b === void 0 ? {
        x: 0,
        y: 0
      } : b, g = [];
      return c.top - a.y < o.top && g.push("top"), c.left - a.x < o.left && g.push("left"), c.bottom + a.y > o.bottom && g.push("bottom"), c.right + a.y > o.right && g.push("right"), g;
    }, Ks = function(u) {
      var c = u.event;
      return {
        x: c.clientX,
        y: c.clientY
      };
    }, Ys = function(u) {
      var c = u.scrollAmount, o = u.initialPointerPos, b = u.pointerPos, a = {};
      return b.x > o.x - c.x ? (a.left = o.x - c.x, a.width = b.x - o.x + c.x) : (a.left = b.x, a.width = o.x - b.x - c.x), b.y > o.y - c.y ? (a.top = o.y - c.y, a.height = b.y - o.y + c.y) : (a.top = b.y, a.height = o.y - b.y - c.y), a;
    }, wr = function(c) {
      var o = {
        x: 0,
        y: 0
      }, b = window.getComputedStyle(c);
      if (!b.transform || b.transform === "none")
        return o;
      if (b.transform.indexOf("3d") >= 0) {
        var a = b.transform.trim().match(/matrix3d\((.*?)\)/);
        if (a && a.length) {
          var g, w = (g = a[1]) === null || g === void 0 ? void 0 : g.split(",");
          o.x = parseInt(w[12]) || 0, o.y = parseInt(w[13]) || 0;
        }
        return o;
      } else {
        var $ = b.transform.trim().match(/matrix\((.*?)\)/);
        if ($ && $.length) {
          var j, X = (j = $[1]) === null || j === void 0 ? void 0 : j.split(",");
          o.x = parseInt(X[4]) || 0, o.y = parseInt(X[5]) || 0;
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
      }, a = o.trim().match(/translate[3dD]*?\(.*?\)/);
      if (a) {
        var g, w = (g = a[0]) === null || g === void 0 ? void 0 : g.split("(");
        if (w) {
          var $, j = ($ = w[1]) === null || $ === void 0 ? void 0 : $.split(",");
          b.x = parseInt(j[0]) || 0, b.y = parseInt(j[1]) || 0;
        }
      }
      return !b.x && !b.x ? wr(c) : b;
    }, Xs = function(c) {
      var o = c.style, b = {
        x: parseInt(o.left) || 0,
        y: parseInt(o.top) || 0
      };
      if (!b.x && !b.x) {
        var a = window.getComputedStyle(c);
        return {
          x: parseInt(a.left) || 0,
          y: parseInt(a.top) || 0
        };
      }
      return b;
    }, Fs = function(u, c) {
      return c ? Ws(u) : Xs(u);
    }, qs = function(u) {
      var c = u.element, o = u.edges, b = u.elementRect, a = u.containerRect, g = u.elementPos, w = u.useTransform;
      o.includes("top") && ce(c, {
        y: g.y + a.top - b.top,
        x: g.x
      }, w), o.includes("left") && ce(c, {
        y: g.y,
        x: g.x + a.left - b.left
      }, w), o.includes("bottom") && ce(c, {
        y: g.y + a.bottom - b.bottom,
        x: g.x
      }, w), o.includes("right") && ce(c, {
        y: g.y,
        x: g.x + a.right - b.right
      }, w);
    }, xr = function(u) {
      var c = u.computedStyle, o = u.node, b = c.position, a = b === "absolute" || b === "relative" || b === "fixed";
      !(o instanceof HTMLDocument) && !a && (o.style.position = "relative");
    }, Gs = function(u) {
      var c = u.shiftKey, o = u.keyboardDragSpeed, b = u.zoom, a = u.key, g = u.dragKeys, w = u.scrollDiff, $ = u.canScroll, j = u.scrollCallback, X = {
        x: 0,
        y: 0
      }, W = c ? o * 4 * b : o * b;
      return g.left.includes(a) && (X.x = w.x || -W, !c && !w.x && $ && j(["left"], o)), g.right.includes(a) && (X.x = w.x || W, !c && !w.x && $ && j(["right"], o)), g.up.includes(a) && (X.y = w.y || -W, !c && !w.y && $ && j(["top"], o)), g.down.includes(a) && (X.y = w.y || W, !c && !w.y && $ && j(["bottom"], o)), X;
    }, Js = function(u) {
      var c = u.element, o = u.force, b = u.multiSelectionToggle, a = u.SelectedSet, g = u.hoverClassName;
      c.classList.contains(g) && !o || (a.has(c) ? b && a.delete(c) : a.add(c), c.classList.add(g));
    }, Zs = function(u) {
      var c = u.element, o = u.force, b = u.SelectedSet, a = u.PrevSelectedSet, g = u.hoverClassName;
      if (!c.classList.contains(g) && !o)
        return !1;
      var w = b.has(c), $ = a.has(c);
      w && !$ ? b.delete(c) : !w && $ && b.add(c), c.classList.remove(g);
    }, le = function(c, o, b) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(o, '".'));
    }, et = function(c, o, b, a) {
      if (o === void 0)
        return b ? i({}, c, a) : {};
      if (o === null)
        return i({}, c, null);
      var g = !0, w = !1, $ = typeof a == "string";
      $ && (g = typeof o == "string" || o instanceof String), $ && !g && (w = !0, le(c, "string"));
      var j = !isNaN(a) && typeof a == "number";
      j && (g = !isNaN(o) && typeof o == "number"), j && !g && (w = !0, le(c, "number"));
      var X = Object.prototype.toString.call(a) === "[object Object]";
      X && (g = Object.prototype.toString.call(o) === "[object Object]"), X && !g && (w = !0, le(c, "object"));
      var W = typeof a == "boolean";
      W && (g = typeof o == "boolean"), W && !g && (w = !0, le(c, "boolean"));
      var ft = Array.isArray(a);
      ft && (g = Array.isArray(o)), ft && !g && (w = !0, le(c, "array"));
      var _t = w || b;
      return c === "dragKeys" && g ? i({}, c, Object.assign(a, o)) : c === "dragKeys" && !g ? _t ? i({}, c, a) : {} : g ? i({}, c, o) : _t ? i({}, c, a) : {};
    }, Qs = function(u, c) {
      return h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h({}, et("area", u.area, c, document)), et("selectables", u.selectables, c, null)), et("autoScrollSpeed", u.autoScrollSpeed, c, 5)), et("overflowTolerance", u.overflowTolerance, c, {
        x: 25,
        y: 25
      })), et("zoom", u.zoom, c, 1)), et("customStyles", u.customStyles, c, !1)), et("multiSelectMode", u.multiSelectMode, c, !1)), et("multiSelectToggling", u.multiSelectToggling, c, !0)), et("multiSelectKeys", u.multiSelectKeys, c, ["Control", "Shift", "Meta"])), et("selector", u.selector, c, null)), et("draggability", u.draggability, c, !0)), et("immediateDrag", u.immediateDrag, c, !0)), et("keyboardDrag", u.keyboardDrag, c, !0)), et("dragKeys", u.dragKeys, c, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), et("keyboardDragSpeed", u.keyboardDragSpeed, c, 10)), et("useTransform", u.useTransform, c, !0)), et("hoverClass", u.hoverClass, c, "ds-hover")), et("selectableClass", u.selectableClass, c, "ds-selectable")), et("selectedClass", u.selectedClass, c, "ds-selected")), et("selectorClass", u.selectorClass, c, "ds-selector")), et("selectorAreaClass", u.selectorAreaClass, c, "ds-selector-area"));
    }, ze = function(u, c) {
      return u.left < c.right && u.right > c.left && u.top < c.bottom && u.bottom > c.top;
    }, Sr = function(u) {
      var c = u.element, o = u.posDirection, b = u.containerRect, a = u.useTransform, g = Fs(c, a), w = J(g, "+", o);
      ce(c, w, a);
      var $ = c.getBoundingClientRect(), j = yr({
        elementRect: $,
        containerRect: b
      });
      qs({
        element: c,
        edges: j,
        elementRect: $,
        containerRect: b,
        elementPos: w,
        useTransform: a
      });
    }, to = function(u, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), u.disconnect();
    }, eo = function(u, c, o) {
      if (!!c.length) {
        var b = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, a = u instanceof HTMLDocument ? b || document.body : u, g = c.includes("top") && a.scrollTop > 0, w = c.includes("bottom") && a.scrollTop < a.scrollHeight, $ = c.includes("left") && a.scrollLeft > 0, j = c.includes("right") && a.scrollLeft < a.scrollWidth;
        g && (a.scrollTop -= 1 * o), w && (a.scrollTop += 1 * o), $ && (a.scrollLeft -= 1 * o), j && (a.scrollLeft += 1 * o);
      }
    }, ce = function(u, c, o) {
      if (o) {
        var b = u.style.transform;
        u.style.transform = "translate3d(".concat(c.x, "px,").concat(c.y, "px,1px) ").concat(b.replace(/translate.*?\)/g, ""));
      } else
        u.style.left = "".concat(c.x, "px"), u.style.top = "".concat(c.y, "px");
      return u;
    }, ro = function(u) {
      for (var c = u.subscribe, o = u.publish, b = u.Interaction, a = u.SelectedSet, g = {
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
          condition: function(W) {
            return W.event;
          }
        }],
        "Interaction:end": [{
          name: "callback"
        }]
      }, w = function() {
        var W = B(j[$], 2), ft = W[0], _t = W[1];
        ["pre", !1].forEach(function(ut) {
          return c(ut ? "".concat(ft, ":").concat(ut) : ft, function(Rt) {
            return _t.forEach(function(nt) {
              return (!nt.condition || nt.condition(Rt)) && o(ut ? "".concat(ut).concat(nt.name) : nt.name, h({
                items: a.elements,
                isDragging: b.isDragging
              }, Rt));
            });
          });
        });
      }, $ = 0, j = Object.entries(g); $ < j.length; $++)
        w();
    }, Zt = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : R(u) : [];
    }, _r = function(u, c) {
      u.style.left = "".concat(c.left, "px"), u.style.top = "".concat(c.top, "px"), u.style.width = "".concat(c.width, "px"), u.style.height = "".concat(c.height, "px");
    }, so = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "DS", void 0), i(this, "_modificationCallback", void 0), i(this, "_modificationObserver", void 0), i(this, "_zoom", void 0), i(this, "_node", void 0), i(this, "_parentNodes", void 0), i(this, "_computedStyle", void 0), i(this, "_computedBorder", void 0), i(this, "_rect", void 0), i(this, "setArea", function(a) {
          o._node = a, xr({
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
          ct(o.parentNodes, o._modificationCallback, o._modificationObserver);
        }), i(this, "reset", function() {
          o._computedStyle = void 0, o._rect = void 0, o._computedBorder = void 0, o._parentNodes = void 0;
        }), i(this, "stop", function() {
          to(o._modificationObserver, o._modificationCallback), o.reset();
        }), i(this, "scroll", function(a, g) {
          var w = {
            scroll_directions: a,
            scroll_multiplier: g
          };
          o.DS.PubSub.publish("Area:scroll:pre", w), eo(o._node, a, g), o.DS.PubSub.publish("Area:scroll", w);
        }), this.DS = b, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(a) {
          var g = a.settings;
          return o.setArea(g.area);
        }), this._modificationCallback = xe(function(a) {
          o.DS.PubSub.publish("Area:modified:pre", {
            event: a,
            item: o
          }), o.reset(), o.DS.PubSub.publish("Area:modified", {
            event: a,
            item: o
          });
        }, 60), this._modificationObserver = new MutationObserver(this._modificationCallback), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return n(u, [{
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
          var o = function b(a) {
            var g, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, $ = (g = a[w]) === null || g === void 0 ? void 0 : g.parentNode;
            return $ ? (a.push($), w++, b(a, w)) : a;
          };
          return this._parentNodes = o([this.HTMLNode]), this._parentNodes;
        }
      }]), u;
    }(), oo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_prevCursorPos", void 0), i(this, "_prevScrollPos", void 0), i(this, "_elements", []), i(this, "_dragKeys", void 0), i(this, "_dragKeysFlat", []), i(this, "assignDragkeys", function() {
          o._dragKeys = {
            up: o.DS.stores.SettingsStore.s.dragKeys.up.map(function(a) {
              return a.toLowerCase();
            }),
            down: o.DS.stores.SettingsStore.s.dragKeys.down.map(function(a) {
              return a.toLowerCase();
            }),
            left: o.DS.stores.SettingsStore.s.dragKeys.left.map(function(a) {
              return a.toLowerCase();
            }),
            right: o.DS.stores.SettingsStore.s.dragKeys.right.map(function(a) {
              return a.toLowerCase();
            })
          }, o._dragKeysFlat = [].concat(R(o._dragKeys.up), R(o._dragKeys.down), R(o._dragKeys.left), R(o._dragKeys.right));
        }), i(this, "keyboardDrag", function(a) {
          var g = a.event, w = a.key, $ = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes($) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability || o.DS.continue)) {
            var j = {
              event: g,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:start:pre", "Interaction:start"], j), o._elements = o.DS.getSelection(), o.handleZIndex(!0);
            var X = Gs({
              shiftKey: o.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: o.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: o.DS.stores.SettingsStore.s.zoom,
              key: $,
              scrollCallback: o.DS.Area.scroll,
              scrollDiff: o._scrollDiff,
              canScroll: o.DS.stores.ScrollStore.canScroll,
              dragKeys: o._dragKeys
            });
            o._elements.forEach(function(W) {
              return Sr({
                element: W,
                posDirection: X,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            }), o.DS.publish(["Interaction:update:pre", "Interaction:update"], j);
          }
        }), i(this, "keyboardEnd", function(a) {
          var g = a.event, w = a.key, $ = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes($) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability)) {
            var j = {
              event: g,
              isDragging: o.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:end:pre", "Interaction:end"], j);
          }
        }), i(this, "start", function(a) {
          var g = a.isDragging, w = a.isDraggingKeyboard;
          !g || w || (o._prevCursorPos = null, o._prevScrollPos = null, o._elements = o.DS.getSelection(), o.handleZIndex(!0));
        }), i(this, "stop", function(a) {
          a != null && a.isKeyboard || (o._prevCursorPos = null, o._prevScrollPos = null, o.handleZIndex(!1), o._elements = []);
        }), i(this, "update", function(a) {
          var g = a.isDragging, w = a.isDraggingKeyboard;
          if (!(!g || !o._elements.length || w || o.DS.continue)) {
            var $ = J(o._cursorDiff, "+", o._scrollDiff);
            o._elements.forEach(function(j) {
              return Sr({
                element: j,
                posDirection: $,
                containerRect: o.DS.SelectorArea.rect,
                useTransform: o.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), i(this, "handleZIndex", function(a) {
          o._elements.forEach(function(g) {
            return g.style.zIndex = "".concat((parseInt(g.style.zIndex) || 0) + a ? 9999 : -9998);
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return n(u, [{
        key: "_cursorDiff",
        get: function() {
          var o = this.DS.stores.PointerStore.currentVal, b = this._prevCursorPos ? J(o, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = o, b;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var o = this.DS.stores.ScrollStore.currentVal, b = this._prevScrollPos ? J(o, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = o, b;
        }
      }]), u;
    }(), io = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "isInteracting", void 0), i(this, "isDragging", void 0), i(this, "init", function() {
          return o.DS.publish("Interaction:init:pre", {});
        }), i(this, "_init", function() {
          o.stop(), o.DS.Area.HTMLNode.addEventListener("mousedown", o.start), o.DS.Area.HTMLNode.addEventListener("touchstart", o.start, {
            passive: !1
          }), o.DS.publish("Interaction:init", {});
        }), i(this, "start", function(a) {
          return o.DS.publish("Interaction:start:pre", {
            event: a,
            isDragging: o.isDragging
          });
        }), i(this, "_start", function(a) {
          a.type === "touchstart" && a.preventDefault(), o._canInteract(a) && (o.isInteracting = !0, o.isDragging = o.isDragEvent(a), o.DS.publish("Interaction:start", {
            event: a,
            isDragging: o.isDragging
          }), document.addEventListener("mouseup", o.reset), document.addEventListener("touchend", o.reset));
        }), i(this, "isDragEvent", function(a) {
          var g = a.target.closest(".".concat(o.DS.stores.SettingsStore.s.selectableClass));
          return !o.DS.stores.SettingsStore.s.draggability || o.DS.stores.KeyStore.isMultiSelectKeyPressed(a) || !g ? !1 : (o.DS.stores.SettingsStore.s.immediateDrag && (o.DS.SelectedSet.size ? o.DS.SelectedSet.has(g) || (o.DS.SelectedSet.clear(), o.DS.SelectedSet.add(
            g
          )) : o.DS.SelectedSet.add(
            g
          )), !!o.DS.SelectedSet.has(g));
        }), i(this, "onClick", function(a) {
          var g = a.event;
          if (!!o._canInteract(g) && !(g.detail > 0)) {
            var w = o.DS, $ = w.stores, j = $.PointerStore, X = $.KeyStore, W = w.SelectableSet, ft = w.SelectedSet;
            j.start(g);
            var _t = g.target;
            !W.has(_t) || (X.isMultiSelectKeyPressed(g) || ft.clear(), ft.toggle(_t), o.reset());
          }
        }), i(this, "stop", function() {
          o.isInteracting = !1, o.isDragging = !1, o.DS.Area.HTMLNode.removeEventListener("mousedown", o.start), o.DS.Area.HTMLNode.removeEventListener("touchstart", o.start, {
            passive: !1
          }), document.removeEventListener("mouseup", o.reset), document.removeEventListener("touchend", o.reset);
        }), i(this, "update", function(a) {
          var g = a.event, w = a.scroll_directions, $ = a.scroll_multiplier;
          o.isInteracting && o.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: g,
            scroll_directions: w,
            scroll_multiplier: $,
            isDragging: o.isDragging
          });
        }), i(this, "reset", function(a) {
          return o.DS.publish("Interaction:end:pre", {
            event: a,
            isDragging: o.isDragging
          });
        }), i(this, "_reset", function(a) {
          var g = o.isDragging;
          o.stop(), o.init(), o.DS.publish("Interaction:end", {
            event: a,
            isDragging: g
          });
        }), this.DS = b, this.DS.subscribe("Settings:updated:area", this.init), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(a) {
          var g = a.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:start:pre", function(a) {
          var g = a.event;
          return o._start(g);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(a) {
          var g = a.event;
          return o._reset(g);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return n(u, [{
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
      r(this, u), i(this, "subscribers", {}), i(this, "subscribe", function(a, g) {
        return Array.isArray(o.subscribers[a]) || (o.subscribers[a] = []), o.subscribers[a].push(g), o.subscribers[a].length - 1;
      }), i(this, "unsubscribe", function(a, g, w) {
        w >= 0 ? o.subscribers[a].splice(w, 1) : g && (o.subscribers[a] = o.subscribers[a].filter(function($) {
          return $ !== g;
        }));
      }), i(this, "publish", function(a, g) {
        Array.isArray(a) ? a.forEach(function(w) {
          return o._publish(w, g);
        }) : o._publish(a, g);
      }), i(this, "_publish", function(a, g) {
        var w = o.subscribers[a];
        !Array.isArray(w) || (a.includes(":pre") ? o._handlePrePublish(w, g) : o._handlePublish(w, g));
      }), i(this, "_handlePublish", function(a, g) {
        for (var w = 0, $ = a.length; w < $; w++) {
          if (o.DS.stopped)
            return;
          a[w](g);
        }
      }), i(this, "_handlePrePublish", function(a, g) {
        for (var w = a.length; w--; ) {
          if (o.DS.stopped)
            return;
          a[w](g);
        }
      }), this.DS = b;
    }, ao = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = H(o);
      function o(b) {
        var a, g = b.DS;
        return r(this, o), a = c.call(this), i(E(a), "init", function() {
          return Zt(a.DS.stores.SettingsStore.s.selectables).forEach(function(w) {
            return a.add(w);
          });
        }), i(E(a), "clear", function() {
          return a.forEach(function(w) {
            return a.delete(w);
          });
        }), i(E(a), "_onClick", function(w) {
          return a.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: w
          });
        }), i(E(a), "_onPointer", function(w) {
          return a.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: w
          });
        }), i(E(a), "addAll", function(w) {
          return w.forEach(function($) {
            return a.add($);
          });
        }), i(E(a), "deleteAll", function(w) {
          return w.forEach(function($) {
            return a.delete($);
          });
        }), a.DS = g, a.DS.subscribe("Interaction:init", a.init), a.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          a.clear(), a.init();
        }), a.DS.subscribe("Settings:updated:selectableClass", function(w) {
          var $ = w.settings;
          a.forEach(function(j) {
            j.classList.remove($["selectableClass:pre"]), j.classList.add($.selectableClass);
          });
        }), a;
      }
      return n(o, [{
        key: "add",
        value: function(a) {
          if (!L(p(o.prototype), "has", this).call(this, a)) {
            var g = {
              items: this.elements,
              item: a
            };
            return this.DS.publish("Selectable:added:pre", g), a.classList.add(this.DS.stores.SettingsStore.s.selectableClass), a.addEventListener("click", this._onClick), a.addEventListener("mousedown", this._onPointer), a.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.stores.SettingsStore.s.draggability && !this.DS.stores.SettingsStore.s.useTransform && xr({
              computedStyle: window.getComputedStyle(a),
              node: a
            }), this.DS.publish("Selectable:added", g), L(p(o.prototype), "add", this).call(this, a);
          }
        }
      }, {
        key: "delete",
        value: function(a) {
          if (!!L(p(o.prototype), "has", this).call(this, a)) {
            var g = {
              items: this.elements,
              item: a
            };
            return this.DS.publish("Selectable:removed:pre", g), a.classList.remove(this.DS.stores.SettingsStore.s.selectableClass), a.classList.remove(this.DS.stores.SettingsStore.s.hoverClass), a.removeEventListener("click", this._onClick), a.removeEventListener("mousedown", this._onPointer), a.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", g), L(p(o.prototype), "delete", this).call(this, a);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ C(Set)), lo = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = H(o);
      function o(b) {
        var a, g = b.DS;
        return r(this, o), a = c.call(this), i(E(a), "clear", function() {
          return a.forEach(function(w) {
            return a.delete(w);
          });
        }), i(E(a), "addAll", function(w) {
          return w.forEach(function($) {
            return a.add($);
          });
        }), i(E(a), "deleteAll", function(w) {
          return w.forEach(function($) {
            return a.delete($);
          });
        }), a.DS = g, a;
      }
      return n(o, [{
        key: "add",
        value: function(a) {
          if (!L(p(o.prototype), "has", this).call(this, a)) {
            var g = {
              items: this.elements,
              item: a
            };
            return this.DS.publish("Selected:added:pre", g), L(p(o.prototype), "add", this).call(this, a), a.classList.add(this.DS.stores.SettingsStore.s.selectedClass), a.style.zIndex = "".concat((parseInt(a.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", g), this;
          }
        }
      }, {
        key: "delete",
        value: function(a) {
          if (!!L(p(o.prototype), "has", this).call(this, a)) {
            var g = {
              items: this.elements,
              item: a
            };
            this.DS.publish("Selected:removed:pre", g);
            var w = L(p(o.prototype), "delete", this).call(this, a);
            return a.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), a.style.zIndex = "".concat((parseInt(a.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", g), w;
          }
        }
      }, {
        key: "toggle",
        value: function(a) {
          return this.has(a) ? this.delete(a) : this.add(a), a;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ C(Set)), co = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_prevSelectedSet", void 0), i(this, "start", function(a) {
          var g = a.event, w = a.isDragging;
          w || (o._storePrevious(g), o._handleInsideSelection(!0, g));
        }), i(this, "update", function(a) {
          var g = a.isDragging;
          g || o.DS.continue || o._handleInsideSelection();
        }), i(this, "_handleInsideSelection", function(a, g) {
          for (var w = o.DS, $ = w.SelectableSet, j = w.SelectorArea, X = w.Selector, W = $.elements.map(function(It) {
            return [It, It.getBoundingClientRect()];
          }), ft = [], _t = [], ut = 0, Rt = W.length; ut < Rt; ut++)
            !j.isInside(W[ut][0], W[ut][1]) || (ze(W[ut][1], X.rect) ? ft.push(W[ut][0]) : _t.push(W[ut][0]));
          var nt = o.DS.stores.KeyStore.isMultiSelectKeyPressed(g) && o.DS.stores.SettingsStore.s.multiSelectToggling;
          o.DS.continue || (ft.forEach(function(It) {
            return Js({
              element: It,
              force: a,
              multiSelectionToggle: nt,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass
            });
          }), _t.forEach(function(It) {
            return Zs({
              element: It,
              force: a,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass,
              PrevSelectedSet: o._prevSelectedSet
            });
          }));
        }), this.DS = b, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return n(u, [{
        key: "_storePrevious",
        value: function(o) {
          var b = this.DS, a = b.stores.KeyStore, g = b.SelectedSet;
          a.isMultiSelectKeyPressed(o) ? this._prevSelectedSet = new Set(g) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), u;
    }(), uo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_rect", void 0), i(this, "attachSelector", function() {
          var a, g;
          o.HTMLNode && (a = o.DS.SelectorArea) !== null && a !== void 0 && a.HTMLNode && o.DS.SelectorArea.HTMLNode.removeChild(o.HTMLNode), o.HTMLNode = o.DS.stores.SettingsStore.s.selector || St(o.DS.stores.SettingsStore.s.customStyles), o.HTMLNode.classList.add(o.DS.stores.SettingsStore.s.selectorClass), o.HTMLNode && (g = o.DS.SelectorArea) !== null && g !== void 0 && g.HTMLNode && o.DS.SelectorArea.HTMLNode.appendChild(o.HTMLNode);
        }), i(this, "start", function(a) {
          var g = a.isDragging;
          if (!g) {
            var w = o.DS.stores.PointerStore, $ = w.initialValArea;
            _r(o.HTMLNode, V($, 1)), o.HTMLNode.style.display = "block", o._rect = null;
          }
        }), i(this, "stop", function() {
          o.HTMLNode.style.width = "0", o.HTMLNode.style.height = "0", o.HTMLNode.style.display = "none";
        }), i(this, "update", function(a) {
          var g = a.isDragging;
          if (!(g || o.DS.continue)) {
            var w = o.DS.stores, $ = w.ScrollStore, j = w.PointerStore, X = Ys({
              scrollAmount: $.scrollAmount,
              initialPointerPos: j.initialValArea,
              pointerPos: j.currentValArea
            });
            _r(o.HTMLNode, X), o._rect = null;
          }
        }), this.DS = b, this.DS.subscribe("Settings:updated:selectorClass", function(a) {
          var g = a.settings;
          o.HTMLNode.classList.remove(g["selectorClass:pre"]), o.HTMLNode.classList.add(g.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return n(u, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), ho = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_scrollInterval", void 0), i(this, "_rect", void 0), i(this, "currentEdges", []), i(this, "start", function() {
          return o.applyElements("append");
        }), i(this, "applyElements", function() {
          var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", g = document.body ? "body" : "documentElement", w = "".concat(a, "Child");
          o.HTMLNode[w](o.DS.Selector.HTMLNode), document[g][w](o.HTMLNode);
        }), i(this, "updatePos", function() {
          o._rect = null;
          var a = o.DS.Area.rect, g = o.DS.Area.computedBorder, w = o.HTMLNode.style, $ = "".concat(a.top + g.top, "px"), j = "".concat(a.left + g.left, "px"), X = "".concat(a.width, "px"), W = "".concat(a.height, "px");
          w.top !== $ && (w.top = $), w.left !== j && (w.left = j), w.width !== X && (w.width = X), w.height !== W && (w.height = W);
        }), i(this, "stop", function(a) {
          o.stopAutoScroll(), a && o.applyElements("remove");
        }), i(this, "startAutoScroll", function() {
          o.currentEdges = [], o._scrollInterval = setInterval(function() {
            return o.handleAutoScroll();
          }, 16);
        }), i(this, "handleAutoScroll", function() {
          if (!o.DS.continue) {
            var a = o.DS, g = a.stores.PointerStore, w = a.Area;
            o.currentEdges = yr({
              elementRect: V(g.currentVal),
              containerRect: o.rect,
              tolerance: o.DS.stores.SettingsStore.s.overflowTolerance
            }), o.currentEdges.length && w.scroll(o.currentEdges, o.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), i(this, "stopAutoScroll", function() {
          o.currentEdges = [], clearInterval(o._scrollInterval);
        }), i(this, "isInside", function(a, g) {
          return o.DS.Area.HTMLNode.contains(a) && o.DS.stores.ScrollStore.canScroll ? !0 : ze(o.rect, g || a.getBoundingClientRect());
        }), this.DS = b, this.HTMLNode = tt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(a) {
          var g = a.settings;
          o.HTMLNode.classList.remove(g["selectorAreaClass:pre"]), o.HTMLNode.classList.add(g.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          o.updatePos(), o.stopAutoScroll();
        });
      }
      return n(u, [{
        key: "isClicked",
        value: function(o) {
          var b = this.DS.stores.PointerStore, a = o ? b.getPointerPosition(o) : b.initialVal;
          return ze({
            left: a.x,
            top: a.y,
            right: a.x,
            bottom: a.y
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
        r(this, u), i(this, "_currentValues", /* @__PURE__ */ new Set()), i(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), i(this, "init", function() {
          document.addEventListener("keydown", o.keydown), document.addEventListener("keyup", o.keyup), window.addEventListener("blur", o.reset);
        }), i(this, "keydown", function(a) {
          var g = a.key.toLowerCase();
          o.DS.publish("KeyStore:down:pre", {
            event: a,
            key: g
          }), o._currentValues.add(g), o.DS.publish("KeyStore:down", {
            event: a,
            key: g
          });
        }), i(this, "keyup", function(a) {
          var g = a.key.toLowerCase();
          o.DS.publish("KeyStore:up:pre", {
            event: a,
            key: g
          }), o._currentValues.delete(g), o.DS.publish("KeyStore:up", {
            event: a,
            key: g
          });
        }), i(this, "stop", function() {
          document.removeEventListener("keydown", o.keydown), document.removeEventListener("keyup", o.reset), window.removeEventListener("blur", o.reset), o.reset();
        }), i(this, "reset", function() {
          return o._currentValues.clear();
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init);
      }
      return n(u, [{
        key: "isMultiSelectKeyPressed",
        value: function(o) {
          var b = this;
          if (this.DS.stores.SettingsStore.s.multiSelectMode)
            return !0;
          var a = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(g) {
            return g.toLocaleLowerCase();
          });
          return !!(this.currentValues.some(function(g) {
            return a.includes(g.toLocaleLowerCase());
          }) || o && a.some(function(g) {
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
        r(this, u), i(this, "_isMouseInteraction", !1), i(this, "_initialValArea", void 0), i(this, "_currentValArea", void 0), i(this, "_lastValArea", void 0), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_lastVal", void 0), i(this, "_lastTouch", void 0), i(this, "init", function() {
          document.addEventListener("mousemove", o.update), document.addEventListener("touchmove", o.update, {
            passive: !1
          });
        }), i(this, "getPointerPosition", function(a) {
          return Ks({
            event: o._normalizedEvent(a)
          });
        }), i(this, "update", function(a) {
          !a || (o.DS.publish("PointerStore:updated:pre", {
            event: a
          }), o.currentVal = o.getPointerPosition(a), o._isMouseInteraction && o.DS.publish("PointerStore:updated", {
            event: a
          }));
        }), i(this, "stop", function() {
          document.removeEventListener("mousemove", o.update), document.removeEventListener("touchmove", o.update, {
            passive: !1
          }), setTimeout(function() {
            return o._isMouseInteraction = !1;
          }, 100);
        }), i(this, "reset", function(a) {
          !a || (o.currentVal = o.lastVal = o.getPointerPosition(a), o.stop(), o.init());
        }), this.DS = b, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(a) {
          var g = a.event;
          return o.start(g);
        }), this.DS.subscribe("Interaction:end", function(a) {
          var g = a.event;
          return o.reset(g);
        });
      }
      return n(u, [{
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
          this._initialVal = o, this._initialValArea = o && J(o, "-", J(T(this.DS.Area.rect), "+", T(this.DS.Area.computedBorder)));
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
          this._currentVal = o, this._currentValArea = o && J(o, "-", J(T(this.DS.Area.rect), "+", T(this.DS.Area.computedBorder)));
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
          this._lastVal = o, this._lastValArea = o && J(o, "-", J(T(this.DS.Area.rect), "+", T(this.DS.Area.computedBorder)));
        }
      }]), u;
    }(), go = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        r(this, u), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_canScroll", void 0), i(this, "init", function() {
          return o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "start", function() {
          o._currentVal = o._initialVal = Jt(o.DS.stores.SettingsStore.s.area), o.DS.stores.SettingsStore.s.area.addEventListener("scroll", o.update);
        }), i(this, "update", function() {
          return o._currentVal = Jt(o.DS.stores.SettingsStore.s.area);
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
      return n(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = F(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var o = J(this.currentVal, "-", this.initialVal), b = N(this.DS.stores.SettingsStore.s.zoom), a = J(J(o, "*", b), "-", o);
          return {
            x: o.x + a.x,
            y: o.y + a.y
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
          return this._currentVal || (this._currentVal = Jt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), u;
    }(), mo = function u(c) {
      var o = this, b = c.DS, a = c.settings;
      r(this, u), i(this, "_settings", {}), i(this, "s", {}), i(this, "update", function(g) {
        var w = g.settings, $ = g.init;
        return o.DS.publish("Settings:updated:pre", h({
          settings: w
        }, $ ? {
          init: $
        } : {}));
      }), i(this, "_update", function(g) {
        for (var w = g.settings, $ = g.init, j = Qs(w, $), X = function() {
          var ut, Rt = B(ft[W], 2), nt = Rt[0], It = Rt[1];
          nt in o._settings || Object.defineProperty(o.s, nt, {
            get: function() {
              return o._settings[nt];
            },
            set: function(yo) {
              return o.update({
                settings: i({}, nt, yo)
              });
            }
          }), o._settings["".concat(nt, ":pre")] = o._settings[nt], o._settings[nt] = It;
          var kr = {
            settings: (ut = {}, i(ut, nt, o._settings[nt]), i(ut, "".concat(nt, ":pre"), o._settings["".concat(nt, ":pre")]), ut)
          };
          o.DS.publish("Settings:updated", kr), o.DS.publish("Settings:updated:".concat(nt), kr);
        }, W = 0, ft = Object.entries(j); W < ft.length; W++)
          X();
      }), this.DS = b, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: a,
        init: !0
      });
    }, vo = /* @__PURE__ */ function() {
      function u(c) {
        var o = this;
        r(this, u), i(this, "continue", !1), i(this, "start", function() {
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
      return n(u, [{
        key: "stop",
        value: function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          a && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(o), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), o && this.SelectableSet.clear(), b && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Zt(o)), a || this.addSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Zt(o)), a && this.removeSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(o) {
          var b = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Zt(o).forEach(function(w) {
            return b.SelectedSet.has(w) ? b.removeSelection(o, a, g) : b.addSelection(o, a, g);
          }), a && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(o, b, a), this.getSelection();
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
        value: function(o, b, a) {
          var g = Zt(o);
          return this.SelectableSet.addAll(g), b && this.SelectedSet.addAll(g), a && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }, {
        key: "setSelectables",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(o, b), this.addSelectables(o, a);
        }
      }, {
        key: "removeSelectables",
        value: function(o, b, a) {
          return this.SelectableSet.deleteAll(Zt(o)), b && this.removeSelection(o), a && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }]), u;
    }();
    return vo;
  });
})(Zr);
const gi = Zr.exports, Qr = (e, t, r, s, n) => (t = Math, r = t.log, s = 1024, n = r(e) / r(s) | 0, e / t.pow(s, n)).toFixed(0) + " " + (n ? "KMGTPEZY"[--n] + "iB" : "B"), ts = (e, t = null) => {
  var r;
  return new Date(e * 1e3).toLocaleString((r = t != null ? t : navigator.language) != null ? r : "en-US");
}, mi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, vi = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), bi = [
  vi
], yi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, wi = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), xi = [
  wi
], Si = {
  name: "VFSortIcon"
}, _e = /* @__PURE__ */ Object.assign(Si, {
  props: { direction: String },
  setup(e) {
    return (t, r) => (x(), _("div", null, [
      e.direction == "down" ? (x(), _("svg", mi, bi)) : K("", !0),
      e.direction == "up" ? (x(), _("svg", yi, xi)) : K("", !0)
    ]));
  }
}), _i = ["onClick"], ki = {
  name: "VFToast.vue"
}, Di = /* @__PURE__ */ Object.assign(ki, {
  setup(e) {
    const t = I("emitter"), { getStore: r } = I("storage"), s = O(r("full-screen", !1)), n = (v) => v == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = O([]), l = (v) => {
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
    }), (v, p) => (x(), _("div", {
      class: dt([s.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Dt(wo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: Y(() => [
          (x(!0), _(lt, null, xt(i.value, (f, m) => (x(), _("div", {
            onClick: (y) => l(m),
            key: f,
            class: dt([n(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, D(f.label), 11, _i))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (e) => Object.entries(e).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Mi } = At(), Cr = (e, t, r) => Mi.value + "?" + Ft({ q: "preview", adapter: e, path: t, token: r }), Ht = typeof window < "u", es = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), rs = Ht && "IntersectionObserver" in window, ss = Ht && "classList" in document.createElement("p"), os = Ht && window.devicePixelRatio > 1, Ci = {
  elements_selector: ".lazy",
  container: es || Ht ? document : null,
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
}, is = (e) => Object.assign({}, Ci, e), $r = function(e, t) {
  let r;
  const s = "LazyLoad::Initialized", n = new e(t);
  try {
    r = new CustomEvent(s, { detail: { instance: n } });
  } catch {
    r = document.createEvent("CustomEvent"), r.initCustomEvent(s, !1, !1, { instance: n });
  }
  window.dispatchEvent(r);
}, $i = (e, t) => {
  if (!!t)
    if (!t.length)
      $r(e, t);
    else
      for (let r = 0, s; s = t[r]; r += 1)
        $r(e, s);
}, Lt = "src", sr = "srcset", or = "sizes", ns = "poster", be = "llOriginalAttrs", as = "data", ir = "loading", ls = "loaded", cs = "applied", Ei = "entered", nr = "error", us = "native", ds = "data-", hs = "ll-status", mt = (e, t) => e.getAttribute(ds + t), Ai = (e, t, r) => {
  var s = ds + t;
  if (r === null) {
    e.removeAttribute(s);
    return;
  }
  e.setAttribute(s, r);
}, ye = (e) => mt(e, hs), qt = (e, t) => Ai(e, hs, t), Ie = (e) => qt(e, null), ar = (e) => ye(e) === null, Ti = (e) => ye(e) === ir, Oi = (e) => ye(e) === nr, lr = (e) => ye(e) === us, Li = [ir, ls, cs, nr], Ii = (e) => Li.indexOf(ye(e)) >= 0, zt = (e, t, r, s) => {
  if (!!e) {
    if (s !== void 0) {
      e(t, r, s);
      return;
    }
    if (r !== void 0) {
      e(t, r);
      return;
    }
    e(t);
  }
}, ae = (e, t) => {
  if (ss) {
    e.classList.add(t);
    return;
  }
  e.className += (e.className ? " " : "") + t;
}, Ct = (e, t) => {
  if (ss) {
    e.classList.remove(t);
    return;
  }
  e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Pi = (e) => {
  e.llTempImage = document.createElement("IMG");
}, Ni = (e) => {
  delete e.llTempImage;
}, fs = (e) => e.llTempImage, Pe = (e, t) => {
  if (!t)
    return;
  const r = t._observer;
  !r || r.unobserve(e);
}, ji = (e) => {
  e.disconnect();
}, Vi = (e, t, r) => {
  t.unobserve_entered && Pe(e, r);
}, cr = (e, t) => {
  !e || (e.loadingCount += t);
}, Hi = (e) => {
  !e || (e.toLoadCount -= 1);
}, ps = (e, t) => {
  !e || (e.toLoadCount = t);
}, zi = (e) => e.loadingCount > 0, Ri = (e) => e.toLoadCount > 0, gs = (e) => {
  let t = [];
  for (let r = 0, s; s = e.children[r]; r += 1)
    s.tagName === "SOURCE" && t.push(s);
  return t;
}, ur = (e, t) => {
  const r = e.parentNode;
  if (!r || r.tagName !== "PICTURE")
    return;
  gs(r).forEach(t);
}, ms = (e, t) => {
  gs(e).forEach(t);
}, Ne = [Lt], vs = [Lt, ns], ge = [Lt, sr, or], bs = [as], je = (e) => !!e[be], ys = (e) => e[be], ws = (e) => delete e[be], oe = (e, t) => {
  if (je(e))
    return;
  const r = {};
  t.forEach((s) => {
    r[s] = e.getAttribute(s);
  }), e[be] = r;
}, Bi = (e) => {
  je(e) || (e[be] = { backgroundImage: e.style.backgroundImage });
}, Ui = (e, t, r) => {
  if (!r) {
    e.removeAttribute(t);
    return;
  }
  e.setAttribute(t, r);
}, Wt = (e, t) => {
  if (!je(e))
    return;
  const r = ys(e);
  t.forEach((s) => {
    Ui(e, s, r[s]);
  });
}, Ki = (e) => {
  if (!je(e))
    return;
  const t = ys(e);
  e.style.backgroundImage = t.backgroundImage;
}, xs = (e, t, r) => {
  ae(e, t.class_applied), qt(e, cs), r && (t.unobserve_completed && Pe(e, t), zt(t.callback_applied, e, r));
}, Ss = (e, t, r) => {
  ae(e, t.class_loading), qt(e, ir), r && (cr(r, 1), zt(t.callback_loading, e, r));
}, Vt = (e, t, r) => {
  !r || e.setAttribute(t, r);
}, Er = (e, t) => {
  Vt(e, or, mt(e, t.data_sizes)), Vt(e, sr, mt(e, t.data_srcset)), Vt(e, Lt, mt(e, t.data_src));
}, Yi = (e, t) => {
  ur(e, (r) => {
    oe(r, ge), Er(r, t);
  }), oe(e, ge), Er(e, t);
}, Wi = (e, t) => {
  oe(e, Ne), Vt(e, Lt, mt(e, t.data_src));
}, Xi = (e, t) => {
  ms(e, (r) => {
    oe(r, Ne), Vt(r, Lt, mt(r, t.data_src));
  }), oe(e, vs), Vt(e, ns, mt(e, t.data_poster)), Vt(e, Lt, mt(e, t.data_src)), e.load();
}, Fi = (e, t) => {
  oe(e, bs), Vt(e, as, mt(e, t.data_src));
}, qi = (e, t, r) => {
  const s = mt(e, t.data_bg), n = mt(e, t.data_bg_hidpi), i = os && n ? n : s;
  !i || (e.style.backgroundImage = `url("${i}")`, fs(e).setAttribute(Lt, i), Ss(e, t, r));
}, Gi = (e, t, r) => {
  const s = mt(e, t.data_bg_multi), n = mt(e, t.data_bg_multi_hidpi), i = os && n ? n : s;
  !i || (e.style.backgroundImage = i, xs(e, t, r));
}, Ji = (e, t, r) => {
  const s = mt(e, t.data_bg_set);
  if (!s)
    return;
  const n = s.split("|");
  let i = n.map((l) => `image-set(${l})`);
  e.style.backgroundImage = i.join(), e.style.backgroundImage === "" && (i = n.map((l) => `-webkit-image-set(${l})`), e.style.backgroundImage = i.join()), xs(e, t, r);
}, _s = {
  IMG: Yi,
  IFRAME: Wi,
  VIDEO: Xi,
  OBJECT: Fi
}, Zi = (e, t) => {
  const r = _s[e.tagName];
  !r || r(e, t);
}, Qi = (e, t, r) => {
  const s = _s[e.tagName];
  !s || (s(e, t), Ss(e, t, r));
}, tn = ["IMG", "IFRAME", "VIDEO", "OBJECT"], en = (e) => tn.indexOf(e.tagName) > -1, ks = (e, t) => {
  t && !zi(t) && !Ri(t) && zt(e.callback_finish, t);
}, Ar = (e, t, r) => {
  e.addEventListener(t, r), e.llEvLisnrs[t] = r;
}, rn = (e, t, r) => {
  e.removeEventListener(t, r);
}, dr = (e) => !!e.llEvLisnrs, sn = (e, t, r) => {
  dr(e) || (e.llEvLisnrs = {});
  const s = e.tagName === "VIDEO" ? "loadeddata" : "load";
  Ar(e, s, t), Ar(e, "error", r);
}, Xe = (e) => {
  if (!dr(e))
    return;
  const t = e.llEvLisnrs;
  for (let r in t) {
    const s = t[r];
    rn(e, r, s);
  }
  delete e.llEvLisnrs;
}, Ds = (e, t, r) => {
  Ni(e), cr(r, -1), Hi(r), Ct(e, t.class_loading), t.unobserve_completed && Pe(e, r);
}, on = (e, t, r, s) => {
  const n = lr(t);
  Ds(t, r, s), ae(t, r.class_loaded), qt(t, ls), zt(r.callback_loaded, t, s), n || ks(r, s);
}, nn = (e, t, r, s) => {
  const n = lr(t);
  Ds(t, r, s), ae(t, r.class_error), qt(t, nr), zt(r.callback_error, t, s), r.restore_on_error && Wt(t, ge), n || ks(r, s);
}, hr = (e, t, r) => {
  const s = fs(e) || e;
  if (dr(s))
    return;
  sn(s, (l) => {
    on(l, e, t, r), Xe(s);
  }, (l) => {
    nn(l, e, t, r), Xe(s);
  });
}, an = (e, t, r) => {
  Pi(e), hr(e, t, r), Bi(e), qi(e, t, r), Gi(e, t, r), Ji(e, t, r);
}, ln = (e, t, r) => {
  hr(e, t, r), Qi(e, t, r);
}, fr = (e, t, r) => {
  en(e) ? ln(e, t, r) : an(e, t, r);
}, cn = (e, t, r) => {
  e.setAttribute("loading", "lazy"), hr(e, t, r), Zi(e, t), qt(e, us);
}, Tr = (e) => {
  e.removeAttribute(Lt), e.removeAttribute(sr), e.removeAttribute(or);
}, un = (e) => {
  ur(e, (t) => {
    Tr(t);
  }), Tr(e);
}, Ms = (e) => {
  ur(e, (t) => {
    Wt(t, ge);
  }), Wt(e, ge);
}, dn = (e) => {
  ms(e, (t) => {
    Wt(t, Ne);
  }), Wt(e, vs), e.load();
}, hn = (e) => {
  Wt(e, Ne);
}, fn = (e) => {
  Wt(e, bs);
}, pn = {
  IMG: Ms,
  IFRAME: hn,
  VIDEO: dn,
  OBJECT: fn
}, gn = (e) => {
  const t = pn[e.tagName];
  if (!t) {
    Ki(e);
    return;
  }
  t(e);
}, mn = (e, t) => {
  ar(e) || lr(e) || (Ct(e, t.class_entered), Ct(e, t.class_exited), Ct(e, t.class_applied), Ct(e, t.class_loading), Ct(e, t.class_loaded), Ct(e, t.class_error));
}, vn = (e, t) => {
  gn(e), mn(e, t), Ie(e), ws(e);
}, bn = (e, t, r, s) => {
  !r.cancel_on_exit || !Ti(e) || e.tagName === "IMG" && (Xe(e), un(e), Ms(e), Ct(e, r.class_loading), cr(s, -1), Ie(e), zt(r.callback_cancel, e, t, s));
}, yn = (e, t, r, s) => {
  const n = Ii(e);
  qt(e, Ei), ae(e, r.class_entered), Ct(e, r.class_exited), Vi(e, r, s), zt(r.callback_enter, e, t, s), !n && fr(e, r, s);
}, wn = (e, t, r, s) => {
  ar(e) || (ae(e, r.class_exited), bn(e, t, r, s), zt(r.callback_exit, e, t, s));
}, xn = ["IMG", "IFRAME", "VIDEO"], Cs = (e) => e.use_native && "loading" in HTMLImageElement.prototype, Sn = (e, t, r) => {
  e.forEach((s) => {
    xn.indexOf(s.tagName) !== -1 && cn(s, t, r);
  }), ps(r, 0);
}, _n = (e) => e.isIntersecting || e.intersectionRatio > 0, kn = (e) => ({
  root: e.container === document ? null : e.container,
  rootMargin: e.thresholds || e.threshold + "px"
}), Dn = (e, t, r) => {
  e.forEach(
    (s) => _n(s) ? yn(s.target, s, t, r) : wn(s.target, s, t, r)
  );
}, Mn = (e, t) => {
  t.forEach((r) => {
    e.observe(r);
  });
}, Cn = (e, t) => {
  ji(e), Mn(e, t);
}, $n = (e, t) => {
  !rs || Cs(e) || (t._observer = new IntersectionObserver((r) => {
    Dn(r, e, t);
  }, kn(e)));
}, $s = (e) => Array.prototype.slice.call(e), Ae = (e) => e.container.querySelectorAll(e.elements_selector), En = (e) => $s(e).filter(ar), An = (e) => Oi(e), Tn = (e) => $s(e).filter(An), Or = (e, t) => En(e || Ae(t)), On = (e, t) => {
  Tn(Ae(e)).forEach((s) => {
    Ct(s, e.class_error), Ie(s);
  }), t.update();
}, Ln = (e, t) => {
  !Ht || (t._onlineHandler = () => {
    On(e, t);
  }, window.addEventListener("online", t._onlineHandler));
}, In = (e) => {
  !Ht || window.removeEventListener("online", e._onlineHandler);
}, we = function(e, t) {
  const r = is(e);
  this._settings = r, this.loadingCount = 0, $n(r, this), Ln(r, this), this.update(t);
};
we.prototype = {
  update: function(e) {
    const t = this._settings, r = Or(e, t);
    if (ps(this, r.length), es || !rs) {
      this.loadAll(r);
      return;
    }
    if (Cs(t)) {
      Sn(r, t, this);
      return;
    }
    Cn(this._observer, r);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), In(this), Ae(this._settings).forEach((e) => {
      ws(e);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(e) {
    const t = this._settings;
    Or(e, t).forEach((s) => {
      Pe(s, this), fr(s, t, this);
    });
  },
  restoreAll: function() {
    const e = this._settings;
    Ae(e).forEach((t) => {
      vn(t, e);
    });
  }
};
we.load = (e, t) => {
  const r = is(t);
  fr(e, r);
};
we.resetStatus = (e) => {
  Ie(e);
};
Ht && $i(we, window.lazyLoadOptions);
const Pn = { class: "relative flex-auto overflow-hidden" }, Nn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, jn = { class: "absolute" }, Vn = /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ d("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Hn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, zn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Rn = { class: "grid grid-cols-12 items-center" }, Bn = { class: "flex col-span-7 items-center" }, Un = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Kn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Yn = [
  Kn
], Wn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Xn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Fn = [
  Xn
], qn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Gn = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Jn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Zn = { class: "grid grid-cols-12 items-center" }, Qn = { class: "flex col-span-7 items-center" }, ta = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ea = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ra = [
  ea
], sa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, oa = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ia = [
  oa
], na = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, aa = { class: "col-span-2 text-center" }, la = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ca = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ua = { class: "relative" }, da = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ha = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), fa = [
  ha
], pa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ga = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ma = [
  ga
], va = {
  key: 2,
  class: "absolute block top-1/2 w-full text-center text-neutral-500"
}, ba = { class: "break-all" }, ya = {
  name: "VFExplorer"
}, wa = /* @__PURE__ */ Object.assign(ya, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(e) {
    const t = e;
    I("accessToken");
    const r = I("emitter"), { setStore: s, getStore: n } = I("storage"), i = I("adapter"), l = (T) => T == null ? void 0 : T.substring(0, 3), h = (T) => T.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), v = O(null), p = O(null), f = O(0), m = O(null), { t: y } = I("i18n"), M = Math.floor(Math.random() * 2 ** 32), C = O(n("full-screen", !1)), E = new we();
    r.on("vf-fullscreen-toggle", () => {
      v.value.style.height = null, C.value = !C.value, s("full-screen", C.value);
    });
    const A = O("");
    r.on("vf-search-query", ({ newQuery: T }) => {
      A.value = T, T ? r.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: T
        },
        onSuccess: (V) => {
          V.files.length || r.emit("vf-toast-push", { label: y("No search result found.") });
        }
      }) : r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let H = null;
    const z = () => {
      H && clearTimeout(H);
    }, L = O(!0), B = (T) => {
      T.touches.length > 1 && (L.value ? (m.value.stop(), r.emit("vf-toast-push", { label: y("Drag&Drop: off") })) : (m.value.start(), r.emit("vf-toast-push", { label: y("Drag&Drop: on") }), r.emit("vf-explorer-update")), L.value = !L.value);
    }, R = (T) => {
      H = setTimeout(() => {
        const V = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: T.target.getBoundingClientRect().x,
          clientY: T.target.getBoundingClientRect().y
        });
        T.target.dispatchEvent(V);
      }, 500);
    }, k = (T) => {
      T.type == "dir" ? (r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: T.path } })) : r.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: T });
    }, P = Ce({ active: !1, column: "", order: "" }), G = (T = !0) => {
      let V = [...t.data.files], N = P.column, ct = P.order == "asc" ? 1 : -1;
      if (!T)
        return V;
      const F = (tt, St) => typeof tt == "string" && typeof St == "string" ? tt.toLowerCase().localeCompare(St.toLowerCase()) : tt < St ? -1 : tt > St ? 1 : 0;
      return P.active && (V = V.slice().sort((tt, St) => F(tt[N], St[N]) * ct)), V;
    }, ot = (T) => {
      P.active && P.column == T ? (P.active = P.order == "asc", P.column = T, P.order = "desc") : (P.active = !0, P.column = T, P.order = "asc");
    }, it = () => m.value.getSelection().map((T) => JSON.parse(T.dataset.item)), ht = (T, V) => {
      if (T.altKey || T.ctrlKey || T.metaKey)
        return T.preventDefault(), !1;
      T.dataTransfer.setDragImage(p.value, 0, 15), T.dataTransfer.effectAllowed = "all", T.dataTransfer.dropEffect = "copy", T.dataTransfer.setData("items", JSON.stringify(it()));
    }, bt = (T, V) => {
      T.preventDefault();
      let N = JSON.parse(T.dataTransfer.getData("items"));
      if (N.find((ct) => ct.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", { type: "move", items: { from: N, to: V } });
    }, vt = (T, V) => {
      T.preventDefault(), !V || V.type !== "dir" || m.value.getSelection().find((N) => N == T.currentTarget) ? (T.dataTransfer.dropEffect = "none", T.dataTransfer.effectAllowed = "none") : T.dataTransfer.dropEffect = "copy";
    };
    return Mt(() => {
      m.value = new gi({
        area: v.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), r.on("vf-explorer-update", () => Le(() => {
        m.value.clearSelection(), m.value.setSelectables(document.getElementsByClassName("vf-item-" + M));
      })), m.value.subscribe("predragstart", ({ event: T, isDragging: V }) => {
        if (V)
          f.value = m.value.getSelection().length, m.value.break();
        else {
          const N = T.target.offsetWidth - T.offsetX, ct = T.target.offsetHeight - T.offsetY;
          N < 15 && ct < 15 && (m.value.clearSelection(), m.value.break());
        }
      }), m.value.subscribe("predragmove", ({ isDragging: T }) => {
        T && m.value.break();
      }), m.value.subscribe("callback", ({ items: T, event: V, isDragging: N }) => {
        r.emit("vf-nodes-selected", it()), f.value = m.value.getSelection().length;
      });
    }), xo(() => {
      m.value.Area.reset(), m.value.SelectorArea.updatePos(), E.update();
    }), Mt(() => {
      Oe(() => t.view, () => r.emit("vf-explorer-update"));
    }), (T, V) => (x(), _("div", Pn, [
      e.view == "list" || A.value.length ? (x(), _("div", Nn, [
        d("div", {
          onClick: V[0] || (V[0] = (N) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(D(S(y)("Name")) + " ", 1),
          wt(Dt(_e, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, P.active && P.column == "basename"]
          ])
        ]),
        A.value.length ? K("", !0) : (x(), _("div", {
          key: 0,
          onClick: V[1] || (V[1] = (N) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(D(S(y)("Size")) + " ", 1),
          wt(Dt(_e, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, P.active && P.column == "file_size"]
          ])
        ])),
        A.value.length ? K("", !0) : (x(), _("div", {
          key: 1,
          onClick: V[2] || (V[2] = (N) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(D(S(y)("Date")) + " ", 1),
          wt(Dt(_e, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, P.active && P.column == "last_modified"]
          ])
        ])),
        A.value.length ? (x(), _("div", {
          key: 2,
          onClick: V[3] || (V[3] = (N) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(D(S(y)("Filepath")) + " ", 1),
          wt(Dt(_e, {
            direction: P.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, P.active && P.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
      d("div", jn, [
        d("div", {
          ref_key: "dragImage",
          ref: p,
          class: "absolute -z-50 -top-96"
        }, [
          Vn,
          d("div", Hn, D(f.value), 1)
        ], 512)
      ]),
      d("div", {
        onTouchstart: B,
        onContextmenu: V[10] || (V[10] = Yt((N) => S(r).emit("vf-contextmenu-show", { event: N, area: v.value, items: it() }), ["self", "prevent"])),
        class: dt([C.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: v
      }, [
        A.value.length ? (x(!0), _(lt, { key: 0 }, xt(G(), (N, ct) => (x(), _("div", {
          onDblclick: (F) => k(N),
          onTouchstart: V[4] || (V[4] = (F) => R(F)),
          onTouchend: V[5] || (V[5] = (F) => z()),
          onContextmenu: Yt((F) => S(r).emit("vf-contextmenu-show", { event: F, area: v.value, items: it(), target: N }), ["prevent"]),
          class: dt(["vf-item-" + S(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ct
        }, [
          d("div", Rn, [
            d("div", Bn, [
              N.type == "dir" ? (x(), _("svg", Un, Yn)) : (x(), _("svg", Wn, Fn)),
              d("span", qn, D(N.basename), 1)
            ]),
            d("div", Gn, D(N.path), 1)
          ])
        ], 42, zn))), 256)) : K("", !0),
        e.view == "list" && !A.value.length ? (x(!0), _(lt, { key: 1 }, xt(G(), (N, ct) => (x(), _("div", {
          draggable: "true",
          onDblclick: (F) => k(N),
          onTouchstart: V[6] || (V[6] = (F) => R(F)),
          onTouchend: V[7] || (V[7] = (F) => z()),
          onContextmenu: Yt((F) => S(r).emit("vf-contextmenu-show", { event: F, area: v.value, items: it(), target: N }), ["prevent"]),
          onDragstart: (F) => ht(F),
          onDragover: (F) => vt(F, N),
          onDrop: (F) => bt(F, N),
          class: dt(["vf-item-" + S(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ct
        }, [
          d("div", Zn, [
            d("div", Qn, [
              N.type == "dir" ? (x(), _("svg", ta, ra)) : (x(), _("svg", sa, ia)),
              d("span", na, D(N.basename), 1)
            ]),
            d("div", aa, D(N.file_size ? S(Qr)(N.file_size) : ""), 1),
            d("div", la, D(S(ts)(N.last_modified)), 1)
          ])
        ], 42, Jn))), 256)) : K("", !0),
        e.view == "grid" && !A.value.length ? (x(!0), _(lt, { key: 2 }, xt(G(!1), (N, ct) => {
          var F;
          return x(), _("div", {
            draggable: "true",
            onDblclick: (tt) => k(N),
            onTouchstart: V[8] || (V[8] = (tt) => R(tt)),
            onTouchend: V[9] || (V[9] = (tt) => z()),
            onContextmenu: Yt((tt) => S(r).emit("vf-contextmenu-show", { event: tt, area: v.value, items: it(), target: N }), ["prevent"]),
            onDragstart: (tt) => ht(tt),
            onDragover: (tt) => vt(tt, N),
            onDrop: (tt) => bt(tt, N),
            class: dt(["vf-item-" + S(M), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": N.type,
            "data-item": JSON.stringify(N),
            "data-index": ct
          }, [
            d("div", null, [
              d("div", ua, [
                N.type == "dir" ? (x(), _("svg", da, fa)) : (x(), _("svg", pa, ma)),
                !((F = N.mime_type) != null ? F : "").startsWith("image") && N.type != "dir" ? (x(), _("div", va, D(l(N.extension)), 1)) : K("", !0)
              ]),
              d("span", ba, D(h(N.basename)), 1)
            ])
          ], 42, ca);
        }), 256)) : K("", !0)
      ], 34),
      Dt(Di)
    ]));
  }
}), xa = "1.1.15", Sa = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, _a = { class: "flex leading-5 items-center" }, ka = ["aria-label"], Da = /* @__PURE__ */ d("svg", {
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
], -1), Ma = [
  Da
], Ca = ["value"], $a = { class: "ml-3" }, Ea = { key: 0 }, Aa = { class: "ml-1" }, Ta = { class: "flex leading-5 items-center" }, Oa = {
  value: "",
  disabled: ""
}, La = /* @__PURE__ */ d("option", { value: "en" }, "English", -1), Ia = /* @__PURE__ */ d("option", { value: "fr" }, "French", -1), Pa = /* @__PURE__ */ d("option", { value: "ru" }, "Russian", -1), Na = /* @__PURE__ */ d("option", { value: "tr" }, "Turkish", -1), ja = ["aria-label"], Va = /* @__PURE__ */ d("svg", {
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
], -1), Ha = [
  Va
], za = {
  name: "VFStatusbar"
}, Ra = /* @__PURE__ */ Object.assign(za, {
  props: {
    data: Object
  },
  setup(e) {
    const t = I("emitter"), { getStore: r, setStore: s } = I("storage"), n = O(0), i = I("adapter"), { t: l, changeLocale: h } = I("i18n"), v = O(r("locale", "")), p = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), s("adapter", i.value);
    };
    t.on("vf-nodes-selected", (m) => {
      n.value = m.length;
    });
    const f = O("");
    return t.on("vf-search-query", ({ newQuery: m }) => {
      f.value = m;
    }), (m, y) => (x(), _("div", Sa, [
      d("div", _a, [
        d("div", {
          class: "mx-2",
          "aria-label": S(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ma, 8, ka),
        wt(d("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (M) => Gr(i) ? i.value = M : null),
          onChange: p,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (x(!0), _(lt, null, xt(e.data.storages, (M) => (x(), _("option", { value: M }, D(M), 9, Ca))), 256))
        ], 544), [
          [Dr, S(i)]
        ]),
        d("div", $a, [
          f.value.length ? (x(), _("span", Ea, D(e.data.files.length) + " items found. ", 1)) : K("", !0),
          d("span", Aa, D(n.value > 0 ? n.value + " " + S(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      d("div", Ta, [
        wt(d("select", {
          "onUpdate:modelValue": y[1] || (y[1] = (M) => v.value = M),
          onChange: y[2] || (y[2] = (M) => S(h)(M.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          d("option", Oa, D(S(l)("Language")), 1),
          La,
          Ia,
          Pa,
          Na
        ], 544), [
          [Dr, v.value]
        ]),
        d("span", {
          class: "mr-1",
          "aria-label": S(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: y[3] || (y[3] = (M) => S(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + S(xa), message: S(l)("Vuefinder is a file manager component for vue 3.") }))
        }, Ha, 8, ja)
      ])
    ]));
  }
}), Ba = (e, t = 0, r = !1) => {
  let s;
  return (...n) => {
    r && !s && e(...n), clearTimeout(s), s = setTimeout(() => {
      e(...n);
    }, t);
  };
}, Ua = (e, t, r) => {
  const s = O(e);
  return So((i, l) => ({
    get() {
      return i(), s.value;
    },
    set: Ba(
      (h) => {
        s.value = h, l();
      },
      t,
      r
    )
  }));
}, Ka = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Ya = ["aria-label"], Wa = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Xa = [
  Wa
], Fa = ["aria-label"], qa = /* @__PURE__ */ d("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ga = [
  qa
], Ja = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, Za = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Qa = [
  Za
], tl = ["onClick"], el = /* @__PURE__ */ d("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), rl = [
  el
], sl = { class: "flex leading-5" }, ol = /* @__PURE__ */ d("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), il = ["title", "onClick"], nl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, al = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ll = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), cl = [
  al,
  ll
], ul = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, dl = /* @__PURE__ */ d("svg", {
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
], -1), hl = ["onKeydown", "placeholder"], fl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), pl = [
  fl
], gl = {
  name: "VFBreadcrumb"
}, ml = /* @__PURE__ */ Object.assign(gl, {
  props: {
    data: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), n = O(null), i = O([]), l = O(!1), h = O(null), { t: v } = I("i18n"), p = I("loadingState");
    r.on("vf-explorer-update", () => {
      var B;
      let z = [], L = [];
      n.value = (B = t.data.dirname) != null ? B : s.value + "://", n.value.length == 0 && (i.value = []), n.value.replace(s.value + "://", "").split("/").forEach(function(R) {
        z.push(R), z.join("/") != "" && L.push({
          basename: R,
          name: R,
          path: s.value + "://" + z.join("/"),
          type: "dir"
        });
      }), L.length > 4 && (L = L.slice(-5), L[0].name = ".."), i.value = L;
    });
    const f = () => {
      l.value = !1, y.value = "";
    };
    r.on("vf-search-exit", () => {
      f();
    });
    const m = () => {
      l.value = !0, Le(() => h.value.focus());
    }, y = Ua("", 400), M = () => p.value;
    Oe(y, (z) => {
      r.emit("vf-toast-clear"), r.emit("vf-search-query", { newQuery: z });
    });
    const C = () => i.value.length && !l.value, E = (z) => {
      var B;
      z.preventDefault();
      let L = JSON.parse(z.dataTransfer.getData("items"));
      if (L.find((R) => R.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", {
        type: "move",
        items: { from: L, to: (B = i.value[i.value.length - 2]) != null ? B : { path: s.value + "://" } }
      });
    }, A = (z) => {
      z.preventDefault(), C() ? z.dataTransfer.dropEffect = "copy" : (z.dataTransfer.dropEffect = "none", z.dataTransfer.effectAllowed = "none");
    }, H = () => {
      y.value == "" && f();
    };
    return (z, L) => (x(), _("div", Ka, [
      d("span", {
        "aria-label": S(v)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), _("svg", {
          onDragover: L[0] || (L[0] = (B) => A(B)),
          onDrop: L[1] || (L[1] = (B) => E(B)),
          onClick: L[2] || (L[2] = (B) => {
            var R, k;
            return !C() || S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: (k = (R = i.value[i.value.length - 2]) == null ? void 0 : R.path) != null ? k : S(s) + "://" } });
          }),
          class: dt(["h-6 w-6 p-0.5 rounded", C() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Xa, 34))
      ], 8, Ya),
      M() ? (x(), _("span", Ja, [
        (x(), _("svg", {
          onClick: L[4] || (L[4] = (B) => S(r).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Qa))
      ])) : (x(), _("span", {
        key: 0,
        "aria-label": S(v)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), _("svg", {
          onClick: L[3] || (L[3] = (B) => {
            S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ga))
      ], 8, Fa)),
      l.value ? (x(), _("div", ul, [
        dl,
        wt(d("input", {
          ref_key: "searchInput",
          ref: h,
          onKeydown: ie(f, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": L[6] || (L[6] = (B) => Gr(y) ? y.value = B : null),
          placeholder: S(v)("Search anything.."),
          class: "flex-1 ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, hl), [
          [ne, S(y)]
        ]),
        (x(), _("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, pl))
      ])) : (x(), _("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Yt(m, ["self"])
      }, [
        (x(), _("svg", {
          onClick: L[5] || (L[5] = (B) => S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, rl)),
        d("div", sl, [
          (x(!0), _(lt, null, xt(i.value, (B, R) => (x(), _("div", { key: R }, [
            ol,
            d("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => S(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: B.path } })
            }, D(B.name), 9, il)
          ]))), 128))
        ]),
        M() ? (x(), _("svg", nl, cl)) : K("", !0)
      ], 8, tl))
    ]));
  }
}), vl = ["onClick"], bl = /* @__PURE__ */ d("span", { class: "px-1" }, null, -1), yl = {
  name: "VFContextMenu"
}, wl = /* @__PURE__ */ Object.assign(yl, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter"), s = O(null), { apiUrl: n } = At(), i = Ce({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = O([]);
    r.on("vf-context-selected", (y) => {
      l.value = y;
    });
    const { t: h } = I("i18n"), v = {
      newfolder: {
        title: () => h("New Folder"),
        action: () => {
          r.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => h("Delete"),
        action: () => {
          r.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => h("Refresh"),
        action: () => {
          r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => h("Preview"),
        action: () => {
          r.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => h("Open"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => h("Open containing folder"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => h("Download"),
        action: () => {
          const y = n.value + "?" + Ft({ q: "download", adapter: t.current.adapter, path: l.value[0].path });
          r.emit("vf-download", y);
        }
      },
      archive: {
        title: () => h("Archive"),
        action: () => {
          r.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => h("Unarchive"),
        action: () => {
          r.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => h("Rename"),
        action: () => {
          r.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, p = (y) => {
      r.emit("vf-contextmenu-hide"), y.action();
    }, f = O("");
    r.on("vf-search-query", ({ newQuery: y }) => {
      f.value = y;
    }), r.on("vf-contextmenu-show", ({ event: y, area: M, items: C, target: E = null }) => {
      if (i.items = [], f.value)
        if (E)
          i.items.push(v.openDir), r.emit("vf-context-selected", [E]);
        else
          return;
      else
        !E && !f.value ? (i.items.push(v.refresh), i.items.push(v.newfolder), r.emit("vf-context-selected", [])) : C.length > 1 && C.some((A) => A.path === E.path) ? (i.items.push(v.refresh), i.items.push(v.archive), i.items.push(v.delete), r.emit("vf-context-selected", C)) : (E.type == "dir" ? i.items.push(v.open) : (i.items.push(v.preview), i.items.push(v.download)), i.items.push(v.rename), E.mime_type == "application/zip" ? i.items.push(v.unarchive) : i.items.push(v.archive), i.items.push(v.delete), r.emit("vf-context-selected", [E]));
      m(y, M);
    }), r.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const m = (y, M) => {
      i.active = !0, Le(() => {
        let C = M.getBoundingClientRect(), E = y.pageX, A = y.pageY, H = s.value.offsetHeight, z = s.value.offsetWidth;
        E = C.right - y.pageX + window.scrollX < z ? E - z : E, A = C.bottom - y.pageY + window.scrollY < H ? A - H : A, i.positions = {
          left: E + "px",
          top: A + "px"
        };
      });
    };
    return (y, M) => i.active ? (x(), _("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: Jr(i.positions)
    }, [
      (x(!0), _(lt, null, xt(i.items, (C) => (x(), _("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: C.title,
        onClick: (E) => p(C)
      }, [
        bl,
        d("span", null, D(C.title()), 1)
      ], 8, vl))), 128))
    ], 4)) : K("", !0);
  }
}), xl = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((s, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Sl(e) {
  const t = await xl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.7a04810c.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.818dacaf.js") }), `../locales/${e}.json`);
  return JSON.parse(t.default);
}
function _l(e, t, r) {
  const { getStore: s, setStore: n } = We(e), i = O({}), l = (p) => {
    Sl(p).then((f) => {
      i.value = f, n("locale", p), n("translations", f), r.emit("vf-toast-push", { label: "The language is set to " + p });
    }).catch((f) => {
      r.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  s("locale") ? i.value = s("translations") : l(t);
  const h = (p, ...f) => f.length ? h(p = p.replace("%s", f.shift()), ...f) : p;
  function v(p, ...f) {
    return i.value.hasOwnProperty(p) ? h(i.value[p], ...f) : p;
  }
  return { t: v, changeLocale: l };
}
const kl = { class: "vuefinder" }, Dl = /* @__PURE__ */ d("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Ml = {
  name: "VueFinder"
}, Cl = /* @__PURE__ */ Object.assign(Ml, {
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
  setup(e) {
    const t = e, r = ko(), { setStore: s, getStore: n } = We(t.id), i = O(n("adapter"));
    Bt("emitter", r), Bt("storage", We(t.id)), Bt("postData", t.postData), Bt("adapter", i);
    const l = _l(t.id, t.locale, r);
    Bt("i18n", l);
    const { apiUrl: h, setApiUrl: v } = At();
    v(t.url);
    const p = Ce({ adapter: i.value, storages: [], dirname: ".", files: [] }), f = O(n("viewport", "grid")), m = O(n("darkMode", t.dark));
    r.on("vf-darkMode-toggle", () => {
      m.value = !m.value, s("darkMode", m.value);
    });
    const y = O(!1);
    Bt("loadingState", y), Bt("accessToken", t.accessToken);
    const M = O(n("full-screen", !1));
    r.on("vf-fullscreen-toggle", () => {
      M.value = !M.value, s("full-screen", M.value);
    }), r.on("vf-view-toggle", (H) => {
      f.value = H;
    });
    const C = Ce({
      active: !1,
      type: "delete",
      data: {}
    });
    r.on("vf-modal-close", () => {
      C.active = !1;
    }), r.on("vf-modal-show", (H) => {
      (!t.hook || t.hook.call(null, "vf-modal-show", H, r) !== !1) && (C.active = !0, C.type = H.type, C.data = H);
    });
    const E = (H) => {
      Object.assign(p, H), r.emit("vf-nodes-selected", {}), r.emit("vf-explorer-update");
    };
    let A;
    return r.on("vf-fetch-abort", () => {
      A.abort(), y.value = !1;
    }), r.on("vf-fetch", ({ params: H, onSuccess: z = null, onError: L = null }) => {
      ["index", "search"].includes(H.q) && (A && A.abort(), y.value = !0), A = new AbortController();
      const B = A.signal;
      Ee(h.value, { params: H, signal: B, headers: { Authorization: t.accessToken ? "Bearer " + t.accessToken : null } }).then((R) => {
        i.value = R.adapter, ["index", "search"].includes(H.q) && (y.value = !1), r.emit("vf-modal-close"), E(R), z(R);
      }).catch((R) => {
        L && L(R);
      }).finally(() => {
      });
    }), r.on("vf-download", (H) => {
      document.getElementById("download_frame").src = H, r.emit("vf-modal-close");
    }), Mt(() => {
      r.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (H, z) => (x(), _("div", kl, [
      d("div", {
        class: dt(m.value ? "dark" : "")
      }, [
        d("div", {
          class: dt([M.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: Jr(M.value ? "" : "max-height: " + e.maxHeight),
          onMousedown: z[0] || (z[0] = (L) => S(r).emit("vf-contextmenu-hide")),
          onTouchstart: z[1] || (z[1] = (L) => S(r).emit("vf-contextmenu-hide"))
        }, [
          Dt(fi, { data: p }, null, 8, ["data"]),
          Dt(ml, { data: p }, null, 8, ["data"]),
          Dt(wa, {
            view: f.value,
            data: p
          }, null, 8, ["view", "data"]),
          Dt(Ra, { data: p }, null, 8, ["data"])
        ], 38),
        C.active ? (x(), q(_o("v-f-modal-" + C.type), {
          key: 0,
          selection: C.data,
          current: p
        }, null, 8, ["selection", "current"])) : K("", !0),
        Dt(wl, { current: p }, null, 8, ["current"]),
        Dl
      ], 2)
    ]));
  }
}), $l = /* @__PURE__ */ d("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), El = { class: "fixed z-10 inset-0 overflow-hidden" }, Al = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Tl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Ol = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Tt = {
  __name: "ModalLayout",
  setup(e) {
    const t = I("emitter");
    return Mt(() => {
      const r = document.querySelector(".v-f-modal input");
      r && r.focus();
    }), (r, s) => (x(), _("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: s[1] || (s[1] = ie((n) => S(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      $l,
      d("div", El, [
        d("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: s[0] || (s[0] = Yt((n) => S(t).emit("vf-modal-close"), ["self"]))
        }, [
          d("div", Al, [
            d("div", Tl, [
              Ye(r.$slots, "default")
            ]),
            d("div", Ol, [
              Ye(r.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Ll = ["aria-label"], Il = /* @__PURE__ */ d("svg", {
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
], -1), Pl = [
  Il
], Nl = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(Nl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(e, { emit: t }) {
    var h;
    const { t: r } = I("i18n"), s = O(!1), n = O(null), i = O((h = n.value) == null ? void 0 : h.strMessage);
    Oe(i, () => s.value = !1);
    const l = () => {
      t("hidden"), s.value = !0;
    };
    return (v, p) => (x(), _("div", null, [
      s.value ? K("", !0) : (x(), _("div", {
        key: 0,
        ref_key: "strMessage",
        ref: n,
        class: dt(["flex mt-1 p-1 px-2 rounded text-sm", e.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Ye(v.$slots, "default"),
        d("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": S(r)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Pl, 8, Ll)
      ], 2))
    ]));
  }
}), jl = { class: "sm:flex sm:items-start" }, Vl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Hl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, zl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Rl = { class: "mt-2" }, Bl = { class: "text-sm text-gray-500" }, Ul = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Kl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Yl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Wl = [
  Yl
], Xl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ql = [
  Fl
], Gl = { class: "ml-1.5" }, Jl = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Zl = {
  name: "VFModalDelete"
}, Ql = /* @__PURE__ */ Object.assign(Zl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n"), i = O(t.selection.items), l = O(""), h = () => {
      i.value.length && r.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p })))
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("Files deleted.") });
        },
        onError: (v) => {
          l.value = n(v.message);
        }
      });
    };
    return (v, p) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Yes, Delete!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1),
        d("div", Jl, D(S(n)("This action cannot be undone.")), 1)
      ]),
      default: Y(() => [
        d("div", jl, [
          Vl,
          d("div", Hl, [
            d("h3", zl, D(S(n)("Delete files")), 1),
            d("div", Rl, [
              d("p", Bl, D(S(n)("Are you sure you want to delete these files?")), 1),
              (x(!0), _(lt, null, xt(i.value, (f) => (x(), _("p", Ul, [
                f.type == "dir" ? (x(), _("svg", Kl, Wl)) : (x(), _("svg", Xl, ql)),
                d("span", Gl, D(f.basename), 1)
              ]))), 256)),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), tc = { class: "sm:flex sm:items-start" }, ec = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), rc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, oc = { class: "mt-2" }, ic = { class: "text-sm text-gray-500" }, nc = {
  name: "VFModalMessage"
}, ac = /* @__PURE__ */ Object.assign(nc, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = I("emitter"), { t: r } = I("i18n");
    return (s, n) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: n[0] || (n[0] = (i) => S(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(r)("Close")), 1)
      ]),
      default: Y(() => {
        var i, l, h, v;
        return [
          d("div", tc, [
            ec,
            d("div", rc, [
              d("h3", sc, D((l = (i = e.selection) == null ? void 0 : i.title) != null ? l : "Title"), 1),
              d("div", oc, [
                d("p", ic, D((v = (h = e.selection) == null ? void 0 : h.message) != null ? v : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), lc = { class: "sm:flex sm:items-start" }, cc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), uc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, dc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, hc = { class: "mt-2" }, fc = { class: "text-sm text-gray-500" }, pc = ["onKeyup", "placeholder"], gc = {
  name: "VFModalNewFolder"
}, mc = /* @__PURE__ */ Object.assign(gc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n"), i = O(""), l = O(""), h = () => {
      i.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = n(v.message);
        }
      });
    };
    return (v, p) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", lc, [
          cc,
          d("div", uc, [
            d("h3", dc, D(S(n)("New Folder")), 1),
            d("div", hc, [
              d("p", fc, D(S(n)("Create a new folder")), 1),
              wt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ie(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(n)("Folder Name"),
                type: "text"
              }, null, 40, pc), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vc = { class: "sm:flex sm:items-start" }, bc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), yc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, wc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, xc = { class: "mt-2" }, Sc = { class: "text-sm text-gray-500" }, _c = ["onKeyup", "placeholder"], kc = {
  name: "VFModalNewFile"
}, Dc = /* @__PURE__ */ Object.assign(kc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n"), i = O(""), l = O(""), h = () => {
      i.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("%s is created.", i.value) });
        },
        onError: (v) => {
          l.value = n(v.message);
        }
      });
    };
    return (v, p) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", vc, [
          bc,
          d("div", yc, [
            d("h3", wc, D(S(n)("New File")), 1),
            d("div", xc, [
              d("p", Sc, D(S(n)("Create a new file")), 1),
              wt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ie(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(n)("File Name"),
                type: "text"
              }, null, 40, _c), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Mc = { class: "flex" }, Cc = ["aria-label"], $c = { class: "ml-auto mb-2" }, Ec = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Ac = { key: 1 }, Tc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, s = O(""), n = O(""), i = O(null), l = O(!1), { apiUrl: h } = At(), v = O(""), p = O(!1), { t: f } = I("i18n"), m = I("accessToken");
    Mt(() => {
      Ee(h.value, {
        params: { q: "preview", adapter: r.selection.adapter, path: r.selection.item.path },
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((E) => {
        s.value = E, t("load");
      });
    });
    const y = () => {
      l.value = !l.value, n.value = s.value, l.value == !0 && Le(() => {
        i.value.focus();
      });
    }, M = I("postData"), C = () => {
      v.value = "", p.value = !1, Ee(h.value, {
        method: "POST",
        params: Object.assign(M, {
          q: "save",
          adapter: r.selection.adapter,
          path: r.selection.item.path,
          content: n.value
        }),
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((E) => {
        v.value = f("Updated."), s.value = E, t("load"), l.value = !l.value;
      }).catch((E) => {
        v.value = f(E.message), p.value = !0;
      });
    };
    return (E, A) => (x(), _(lt, null, [
      d("div", Mc, [
        d("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, Cc),
        d("div", $c, [
          l.value ? (x(), _("button", {
            key: 0,
            onClick: C,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(f)("Save")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: A[0] || (A[0] = (H) => y())
          }, D(l.value ? S(f)("Cancel") : S(f)("Edit")), 1)
        ])
      ]),
      d("div", null, [
        l.value ? (x(), _("div", Ac, [
          wt(d("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": A[1] || (A[1] = (H) => n.value = H),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, n.value]
          ])
        ])) : (x(), _("pre", Ec, D(s.value), 1)),
        v.value.length ? (x(), q(Ot, {
          key: 2,
          onHidden: A[2] || (A[2] = (H) => v.value = ""),
          error: p.value
        }, {
          default: Y(() => [
            st(D(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : K("", !0)
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
function Lr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(r), !0).forEach(function(s) {
      Ic(e, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return e;
}
function Me(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Me = function(t) {
    return typeof t;
  } : Me = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Me(e);
}
function Oc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(e, t) {
  for (var r = 0; r < t.length; r++) {
    var s = t[r];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function Lc(e, t, r) {
  return t && Ir(e.prototype, t), r && Ir(e, r), e;
}
function Ic(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function As(e) {
  return Pc(e) || Nc(e) || jc(e) || Vc();
}
function Pc(e) {
  if (Array.isArray(e))
    return Fe(e);
}
function Nc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function jc(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Fe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fe(e, t);
  }
}
function Fe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, s = new Array(t); r < t; r++)
    s[r] = e[r];
  return s;
}
function Vc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ve = typeof window < "u" && typeof window.document < "u", Et = Ve ? window : {}, pr = Ve && Et.document.documentElement ? "ontouchstart" in Et.document.documentElement : !1, gr = Ve ? "PointerEvent" in Et : !1, Z = "cropper", mr = "all", Ts = "crop", Os = "move", Ls = "zoom", Ut = "e", Kt = "w", Qt = "s", Pt = "n", ue = "ne", de = "nw", he = "se", fe = "sw", qe = "".concat(Z, "-crop"), Pr = "".concat(Z, "-disabled"), gt = "".concat(Z, "-hidden"), Nr = "".concat(Z, "-hide"), Hc = "".concat(Z, "-invisible"), Te = "".concat(Z, "-modal"), Ge = "".concat(Z, "-move"), me = "".concat(Z, "Action"), ke = "".concat(Z, "Preview"), vr = "crop", Is = "move", Ps = "none", Je = "crop", Ze = "cropend", Qe = "cropmove", tr = "cropstart", jr = "dblclick", zc = pr ? "touchstart" : "mousedown", Rc = pr ? "touchmove" : "mousemove", Bc = pr ? "touchend touchcancel" : "mouseup", Vr = gr ? "pointerdown" : zc, Hr = gr ? "pointermove" : Rc, zr = gr ? "pointerup pointercancel" : Bc, Rr = "ready", Br = "resize", Ur = "wheel", er = "zoom", Kr = "image/jpeg", Uc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Kc = /^data:/, Yc = /^data:image\/jpeg;base64,/, Wc = /^img|canvas$/i, Ns = 200, js = 100, Yr = {
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
}, Xc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Fc = Number.isNaN || Et.isNaN;
function U(e) {
  return typeof e == "number" && !Fc(e);
}
var Wr = function(t) {
  return t > 0 && t < 1 / 0;
};
function Be(e) {
  return typeof e > "u";
}
function Xt(e) {
  return Me(e) === "object" && e !== null;
}
var qc = Object.prototype.hasOwnProperty;
function te(e) {
  if (!Xt(e))
    return !1;
  try {
    var t = e.constructor, r = t.prototype;
    return t && r && qc.call(r, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function pt(e) {
  return typeof e == "function";
}
var Gc = Array.prototype.slice;
function Vs(e) {
  return Array.from ? Array.from(e) : Gc.call(e);
}
function rt(e, t) {
  return e && pt(t) && (Array.isArray(e) || U(e.length) ? Vs(e).forEach(function(r, s) {
    t.call(e, r, s, e);
  }) : Xt(e) && Object.keys(e).forEach(function(r) {
    t.call(e, e[r], r, e);
  })), e;
}
var Q = Object.assign || function(t) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    s[n - 1] = arguments[n];
  return Xt(t) && s.length > 0 && s.forEach(function(i) {
    Xt(i) && Object.keys(i).forEach(function(l) {
      t[l] = i[l];
    });
  }), t;
}, Jc = /\.\d*(?:0|9){12}\d*$/;
function re(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Jc.test(e) ? Math.round(e * t) / t : e;
}
var Zc = /^width|height|left|top|marginLeft|marginTop$/;
function Nt(e, t) {
  var r = e.style;
  rt(t, function(s, n) {
    Zc.test(n) && U(s) && (s = "".concat(s, "px")), r[n] = s;
  });
}
function Qc(e, t) {
  return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1;
}
function at(e, t) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(s) {
        at(s, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.add(t);
      return;
    }
    var r = e.className.trim();
    r ? r.indexOf(t) < 0 && (e.className = "".concat(r, " ").concat(t)) : e.className = t;
  }
}
function $t(e, t) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(r) {
        $t(r, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.remove(t);
      return;
    }
    e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ""));
  }
}
function ee(e, t, r) {
  if (!!t) {
    if (U(e.length)) {
      rt(e, function(s) {
        ee(s, t, r);
      });
      return;
    }
    r ? at(e, t) : $t(e, t);
  }
}
var tu = /([a-z\d])([A-Z])/g;
function br(e) {
  return e.replace(tu, "$1-$2").toLowerCase();
}
function rr(e, t) {
  return Xt(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(br(t)));
}
function ve(e, t, r) {
  Xt(r) ? e[t] = r : e.dataset ? e.dataset[t] = r : e.setAttribute("data-".concat(br(t)), r);
}
function eu(e, t) {
  if (Xt(e[t]))
    try {
      delete e[t];
    } catch {
      e[t] = void 0;
    }
  else if (e.dataset)
    try {
      delete e.dataset[t];
    } catch {
      e.dataset[t] = void 0;
    }
  else
    e.removeAttribute("data-".concat(br(t)));
}
var Hs = /\s\s*/, zs = function() {
  var e = !1;
  if (Ve) {
    var t = !1, r = function() {
    }, s = Object.defineProperty({}, "once", {
      get: function() {
        return e = !0, t;
      },
      set: function(i) {
        t = i;
      }
    });
    Et.addEventListener("test", r, s), Et.removeEventListener("test", r, s);
  }
  return e;
}();
function kt(e, t, r) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = r;
  t.trim().split(Hs).forEach(function(i) {
    if (!zs) {
      var l = e.listeners;
      l && l[i] && l[i][r] && (n = l[i][r], delete l[i][r], Object.keys(l[i]).length === 0 && delete l[i], Object.keys(l).length === 0 && delete e.listeners);
    }
    e.removeEventListener(i, n, s);
  });
}
function yt(e, t, r) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = r;
  t.trim().split(Hs).forEach(function(i) {
    if (s.once && !zs) {
      var l = e.listeners, h = l === void 0 ? {} : l;
      n = function() {
        delete h[i][r], e.removeEventListener(i, n, s);
        for (var p = arguments.length, f = new Array(p), m = 0; m < p; m++)
          f[m] = arguments[m];
        r.apply(e, f);
      }, h[i] || (h[i] = {}), h[i][r] && e.removeEventListener(i, h[i][r], s), h[i][r] = n, e.listeners = h;
    }
    e.addEventListener(i, n, s);
  });
}
function se(e, t, r) {
  var s;
  return pt(Event) && pt(CustomEvent) ? s = new CustomEvent(t, {
    detail: r,
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(t, !0, !0, r)), e.dispatchEvent(s);
}
function Rs(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Ue = Et.location, ru = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Xr(e) {
  var t = e.match(ru);
  return t !== null && (t[1] !== Ue.protocol || t[2] !== Ue.hostname || t[3] !== Ue.port);
}
function Fr(e) {
  var t = "timestamp=".concat(new Date().getTime());
  return e + (e.indexOf("?") === -1 ? "?" : "&") + t;
}
function pe(e) {
  var t = e.rotate, r = e.scaleX, s = e.scaleY, n = e.translateX, i = e.translateY, l = [];
  U(n) && n !== 0 && l.push("translateX(".concat(n, "px)")), U(i) && i !== 0 && l.push("translateY(".concat(i, "px)")), U(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), U(r) && r !== 1 && l.push("scaleX(".concat(r, ")")), U(s) && s !== 1 && l.push("scaleY(".concat(s, ")"));
  var h = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: h,
    msTransform: h,
    transform: h
  };
}
function su(e) {
  var t = Es({}, e), r = 0;
  return rt(e, function(s, n) {
    delete t[n], rt(t, function(i) {
      var l = Math.abs(s.startX - i.startX), h = Math.abs(s.startY - i.startY), v = Math.abs(s.endX - i.endX), p = Math.abs(s.endY - i.endY), f = Math.sqrt(l * l + h * h), m = Math.sqrt(v * v + p * p), y = (m - f) / f;
      Math.abs(y) > Math.abs(r) && (r = y);
    });
  }), r;
}
function De(e, t) {
  var r = e.pageX, s = e.pageY, n = {
    endX: r,
    endY: s
  };
  return t ? n : Es({
    startX: r,
    startY: s
  }, n);
}
function ou(e) {
  var t = 0, r = 0, s = 0;
  return rt(e, function(n) {
    var i = n.startX, l = n.startY;
    t += i, r += l, s += 1;
  }), t /= s, r /= s, {
    pageX: t,
    pageY: r
  };
}
function jt(e) {
  var t = e.aspectRatio, r = e.height, s = e.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = Wr(s), l = Wr(r);
  if (i && l) {
    var h = r * t;
    n === "contain" && h > s || n === "cover" && h < s ? r = s / t : s = r * t;
  } else
    i ? r = s / t : l && (s = r * t);
  return {
    width: s,
    height: r
  };
}
function iu(e) {
  var t = e.width, r = e.height, s = e.degree;
  if (s = Math.abs(s) % 180, s === 90)
    return {
      width: r,
      height: t
    };
  var n = s % 90 * Math.PI / 180, i = Math.sin(n), l = Math.cos(n), h = t * l + r * i, v = t * i + r * l;
  return s > 90 ? {
    width: v,
    height: h
  } : {
    width: h,
    height: v
  };
}
function nu(e, t, r, s) {
  var n = t.aspectRatio, i = t.naturalWidth, l = t.naturalHeight, h = t.rotate, v = h === void 0 ? 0 : h, p = t.scaleX, f = p === void 0 ? 1 : p, m = t.scaleY, y = m === void 0 ? 1 : m, M = r.aspectRatio, C = r.naturalWidth, E = r.naturalHeight, A = s.fillColor, H = A === void 0 ? "transparent" : A, z = s.imageSmoothingEnabled, L = z === void 0 ? !0 : z, B = s.imageSmoothingQuality, R = B === void 0 ? "low" : B, k = s.maxWidth, P = k === void 0 ? 1 / 0 : k, G = s.maxHeight, ot = G === void 0 ? 1 / 0 : G, it = s.minWidth, ht = it === void 0 ? 0 : it, bt = s.minHeight, vt = bt === void 0 ? 0 : bt, J = document.createElement("canvas"), T = J.getContext("2d"), V = jt({
    aspectRatio: M,
    width: P,
    height: ot
  }), N = jt({
    aspectRatio: M,
    width: ht,
    height: vt
  }, "cover"), ct = Math.min(V.width, Math.max(N.width, C)), F = Math.min(V.height, Math.max(N.height, E)), tt = jt({
    aspectRatio: n,
    width: P,
    height: ot
  }), St = jt({
    aspectRatio: n,
    width: ht,
    height: vt
  }, "cover"), xe = Math.min(tt.width, Math.max(St.width, i)), Gt = Math.min(tt.height, Math.max(St.height, l)), He = [-xe / 2, -Gt / 2, xe, Gt];
  return J.width = re(ct), J.height = re(F), T.fillStyle = H, T.fillRect(0, 0, ct, F), T.save(), T.translate(ct / 2, F / 2), T.rotate(v * Math.PI / 180), T.scale(f, y), T.imageSmoothingEnabled = L, T.imageSmoothingQuality = R, T.drawImage.apply(T, [e].concat(As(He.map(function(Jt) {
    return Math.floor(re(Jt));
  })))), T.restore(), J;
}
var Bs = String.fromCharCode;
function au(e, t, r) {
  var s = "";
  r += t;
  for (var n = t; n < r; n += 1)
    s += Bs(e.getUint8(n));
  return s;
}
var lu = /^data:.*,/;
function cu(e) {
  var t = e.replace(lu, ""), r = atob(t), s = new ArrayBuffer(r.length), n = new Uint8Array(s);
  return rt(n, function(i, l) {
    n[l] = r.charCodeAt(l);
  }), s;
}
function uu(e, t) {
  for (var r = [], s = 8192, n = new Uint8Array(e); n.length > 0; )
    r.push(Bs.apply(null, Vs(n.subarray(0, s)))), n = n.subarray(s);
  return "data:".concat(t, ";base64,").concat(btoa(r.join("")));
}
function du(e) {
  var t = new DataView(e), r;
  try {
    var s, n, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var l = t.byteLength, h = 2; h + 1 < l; ) {
        if (t.getUint8(h) === 255 && t.getUint8(h + 1) === 225) {
          n = h;
          break;
        }
        h += 1;
      }
    if (n) {
      var v = n + 4, p = n + 10;
      if (au(t, v, 4) === "Exif") {
        var f = t.getUint16(p);
        if (s = f === 18761, (s || f === 19789) && t.getUint16(p + 2, s) === 42) {
          var m = t.getUint32(p + 4, s);
          m >= 8 && (i = p + m);
        }
      }
    }
    if (i) {
      var y = t.getUint16(i, s), M, C;
      for (C = 0; C < y; C += 1)
        if (M = i + C * 12 + 2, t.getUint16(M, s) === 274) {
          M += 8, r = t.getUint16(M, s), t.setUint16(M, 1, s);
          break;
        }
    }
  } catch {
    r = 1;
  }
  return r;
}
function hu(e) {
  var t = 0, r = 1, s = 1;
  switch (e) {
    case 2:
      r = -1;
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
      t = 90, r = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: r,
    scaleY: s
  };
}
var fu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, r = this.options, s = this.container, n = this.cropper, i = Number(r.minContainerWidth), l = Number(r.minContainerHeight);
    at(n, gt), $t(t, gt);
    var h = {
      width: Math.max(s.offsetWidth, i >= 0 ? i : Ns),
      height: Math.max(s.offsetHeight, l >= 0 ? l : js)
    };
    this.containerData = h, Nt(n, {
      width: h.width,
      height: h.height
    }), at(t, gt), $t(n, gt);
  },
  initCanvas: function() {
    var t = this.containerData, r = this.imageData, s = this.options.viewMode, n = Math.abs(r.rotate) % 180 === 90, i = n ? r.naturalHeight : r.naturalWidth, l = n ? r.naturalWidth : r.naturalHeight, h = i / l, v = t.width, p = t.height;
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
  limitCanvas: function(t, r) {
    var s = this.options, n = this.containerData, i = this.canvasData, l = this.cropBoxData, h = s.viewMode, v = i.aspectRatio, p = this.cropped && l;
    if (t) {
      var f = Number(s.minCanvasWidth) || 0, m = Number(s.minCanvasHeight) || 0;
      h > 1 ? (f = Math.max(f, n.width), m = Math.max(m, n.height), h === 3 && (m * v > f ? f = m * v : m = f / v)) : h > 0 && (f ? f = Math.max(f, p ? l.width : 0) : m ? m = Math.max(m, p ? l.height : 0) : p && (f = l.width, m = l.height, m * v > f ? f = m * v : m = f / v));
      var y = jt({
        aspectRatio: v,
        width: f,
        height: m
      });
      f = y.width, m = y.height, i.minWidth = f, i.minHeight = m, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (r)
      if (h > (p ? 0 : 1)) {
        var M = n.width - i.width, C = n.height - i.height;
        i.minLeft = Math.min(0, M), i.minTop = Math.min(0, C), i.maxLeft = Math.max(0, M), i.maxTop = Math.max(0, C), p && this.limited && (i.minLeft = Math.min(l.left, l.left + (l.width - i.width)), i.minTop = Math.min(l.top, l.top + (l.height - i.height)), i.maxLeft = l.left, i.maxTop = l.top, h === 2 && (i.width >= n.width && (i.minLeft = Math.min(0, M), i.maxLeft = Math.max(0, M)), i.height >= n.height && (i.minTop = Math.min(0, C), i.maxTop = Math.max(0, C))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = n.width, i.maxTop = n.height;
  },
  renderCanvas: function(t, r) {
    var s = this.canvasData, n = this.imageData;
    if (r) {
      var i = iu({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), l = i.width, h = i.height, v = s.width * (l / s.naturalWidth), p = s.height * (h / s.naturalHeight);
      s.left -= (v - s.width) / 2, s.top -= (p - s.height) / 2, s.width = v, s.height = p, s.aspectRatio = l / h, s.naturalWidth = l, s.naturalHeight = h, this.limitCanvas(!0, !1);
    }
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCanvas(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, Nt(this.canvas, Q({
      width: s.width,
      height: s.height
    }, pe({
      translateX: s.left,
      translateY: s.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var r = this.canvasData, s = this.imageData, n = s.naturalWidth * (r.width / r.naturalWidth), i = s.naturalHeight * (r.height / r.naturalHeight);
    Q(s, {
      width: n,
      height: i,
      left: (r.width - n) / 2,
      top: (r.height - i) / 2
    }), Nt(this.image, Q({
      width: s.width,
      height: s.height
    }, pe(Q({
      translateX: s.left,
      translateY: s.top
    }, s)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, r = this.canvasData, s = t.aspectRatio || t.initialAspectRatio, n = Number(t.autoCropArea) || 0.8, i = {
      width: r.width,
      height: r.height
    };
    s && (r.height * s > r.width ? i.height = i.width / s : i.width = i.height * s), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * n), i.height = Math.max(i.minHeight, i.height * n), i.left = r.left + (r.width - i.width) / 2, i.top = r.top + (r.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, r) {
    var s = this.options, n = this.containerData, i = this.canvasData, l = this.cropBoxData, h = this.limited, v = s.aspectRatio;
    if (t) {
      var p = Number(s.minCropBoxWidth) || 0, f = Number(s.minCropBoxHeight) || 0, m = h ? Math.min(n.width, i.width, i.width + i.left, n.width - i.left) : n.width, y = h ? Math.min(n.height, i.height, i.height + i.top, n.height - i.top) : n.height;
      p = Math.min(p, n.width), f = Math.min(f, n.height), v && (p && f ? f * v > p ? f = p / v : p = f * v : p ? f = p / v : f && (p = f * v), y * v > m ? y = m / v : m = y * v), l.minWidth = Math.min(p, m), l.minHeight = Math.min(f, y), l.maxWidth = m, l.maxHeight = y;
    }
    r && (h ? (l.minLeft = Math.max(0, i.left), l.minTop = Math.max(0, i.top), l.maxLeft = Math.min(n.width, i.left + i.width) - l.width, l.maxTop = Math.min(n.height, i.top + i.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = n.width - l.width, l.maxTop = n.height - l.height));
  },
  renderCropBox: function() {
    var t = this.options, r = this.containerData, s = this.cropBoxData;
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCropBox(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, t.movable && t.cropBoxMovable && ve(this.face, me, s.width >= r.width && s.height >= r.height ? Os : mr), Nt(this.cropBox, Q({
      width: s.width,
      height: s.height
    }, pe({
      translateX: s.left,
      translateY: s.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), se(this.element, Je, this.getData());
  }
}, pu = {
  initPreview: function() {
    var t = this.element, r = this.crossOrigin, s = this.options.preview, n = r ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", l = document.createElement("img");
    if (r && (l.crossOrigin = r), l.src = n, l.alt = i, this.viewBox.appendChild(l), this.viewBoxImage = l, !!s) {
      var h = s;
      typeof s == "string" ? h = t.ownerDocument.querySelectorAll(s) : s.querySelector && (h = [s]), this.previews = h, rt(h, function(v) {
        var p = document.createElement("img");
        ve(v, ke, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), r && (p.crossOrigin = r), p.src = n, p.alt = i, p.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(p);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var r = rr(t, ke);
      Nt(t, {
        width: r.width,
        height: r.height
      }), t.innerHTML = r.html, eu(t, ke);
    });
  },
  preview: function() {
    var t = this.imageData, r = this.canvasData, s = this.cropBoxData, n = s.width, i = s.height, l = t.width, h = t.height, v = s.left - r.left - t.left, p = s.top - r.top - t.top;
    !this.cropped || this.disabled || (Nt(this.viewBoxImage, Q({
      width: l,
      height: h
    }, pe(Q({
      translateX: -v,
      translateY: -p
    }, t)))), rt(this.previews, function(f) {
      var m = rr(f, ke), y = m.width, M = m.height, C = y, E = M, A = 1;
      n && (A = y / n, E = i * A), i && E > M && (A = M / i, C = n * A, E = M), Nt(f, {
        width: C,
        height: E
      }), Nt(f.getElementsByTagName("img")[0], Q({
        width: l * A,
        height: h * A
      }, pe(Q({
        translateX: -v * A,
        translateY: -p * A
      }, t))));
    }));
  }
}, gu = {
  bind: function() {
    var t = this.element, r = this.options, s = this.cropper;
    pt(r.cropstart) && yt(t, tr, r.cropstart), pt(r.cropmove) && yt(t, Qe, r.cropmove), pt(r.cropend) && yt(t, Ze, r.cropend), pt(r.crop) && yt(t, Je, r.crop), pt(r.zoom) && yt(t, er, r.zoom), yt(s, Vr, this.onCropStart = this.cropStart.bind(this)), r.zoomable && r.zoomOnWheel && yt(s, Ur, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && yt(s, jr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, Hr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, zr, this.onCropEnd = this.cropEnd.bind(this)), r.responsive && yt(window, Br, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, r = this.options, s = this.cropper;
    pt(r.cropstart) && kt(t, tr, r.cropstart), pt(r.cropmove) && kt(t, Qe, r.cropmove), pt(r.cropend) && kt(t, Ze, r.cropend), pt(r.crop) && kt(t, Je, r.crop), pt(r.zoom) && kt(t, er, r.zoom), kt(s, Vr, this.onCropStart), r.zoomable && r.zoomOnWheel && kt(s, Ur, this.onWheel, {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && kt(s, jr, this.onDblclick), kt(t.ownerDocument, Hr, this.onCropMove), kt(t.ownerDocument, zr, this.onCropEnd), r.responsive && kt(window, Br, this.onResize);
  }
}, mu = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, r = this.container, s = this.containerData, n = r.offsetWidth / s.width, i = r.offsetHeight / s.height, l = Math.abs(n - 1) > Math.abs(i - 1) ? n : i;
      if (l !== 1) {
        var h, v;
        t.restore && (h = this.getCanvasData(), v = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(rt(h, function(p, f) {
          h[f] = p * l;
        })), this.setCropBoxData(rt(v, function(p, f) {
          v[f] = p * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ps || this.setDragMode(Qc(this.dragBox, qe) ? Is : vr);
  },
  wheel: function(t) {
    var r = this, s = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      r.wheeling = !1;
    }, 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * s, t)));
  },
  cropStart: function(t) {
    var r = t.buttons, s = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (U(r) && r !== 1 || U(s) && s !== 0 || t.ctrlKey))) {
      var n = this.options, i = this.pointers, l;
      t.changedTouches ? rt(t.changedTouches, function(h) {
        i[h.identifier] = De(h);
      }) : i[t.pointerId || 0] = De(t), Object.keys(i).length > 1 && n.zoomable && n.zoomOnTouch ? l = Ls : l = rr(t.target, me), !!Uc.test(l) && se(this.element, tr, {
        originalEvent: t,
        action: l
      }) !== !1 && (t.preventDefault(), this.action = l, this.cropping = !1, l === Ts && (this.cropping = !0, at(this.dragBox, Te)));
    }
  },
  cropMove: function(t) {
    var r = this.action;
    if (!(this.disabled || !r)) {
      var s = this.pointers;
      t.preventDefault(), se(this.element, Qe, {
        originalEvent: t,
        action: r
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(n) {
        Q(s[n.identifier] || {}, De(n, !0));
      }) : Q(s[t.pointerId || 0] || {}, De(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var r = this.action, s = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(n) {
        delete s[n.identifier];
      }) : delete s[t.pointerId || 0], r && (t.preventDefault(), Object.keys(s).length || (this.action = ""), this.cropping && (this.cropping = !1, ee(this.dragBox, Te, this.cropped && this.options.modal)), se(this.element, Ze, {
        originalEvent: t,
        action: r
      }));
    }
  }
}, vu = {
  change: function(t) {
    var r = this.options, s = this.canvasData, n = this.containerData, i = this.cropBoxData, l = this.pointers, h = this.action, v = r.aspectRatio, p = i.left, f = i.top, m = i.width, y = i.height, M = p + m, C = f + y, E = 0, A = 0, H = n.width, z = n.height, L = !0, B;
    !v && t.shiftKey && (v = m && y ? m / y : 1), this.limited && (E = i.minLeft, A = i.minTop, H = E + Math.min(n.width, s.width, s.left + s.width), z = A + Math.min(n.height, s.height, s.top + s.height));
    var R = l[Object.keys(l)[0]], k = {
      x: R.endX - R.startX,
      y: R.endY - R.startY
    }, P = function(ot) {
      switch (ot) {
        case Ut:
          M + k.x > H && (k.x = H - M);
          break;
        case Kt:
          p + k.x < E && (k.x = E - p);
          break;
        case Pt:
          f + k.y < A && (k.y = A - f);
          break;
        case Qt:
          C + k.y > z && (k.y = z - C);
          break;
      }
    };
    switch (h) {
      case mr:
        p += k.x, f += k.y;
        break;
      case Ut:
        if (k.x >= 0 && (M >= H || v && (f <= A || C >= z))) {
          L = !1;
          break;
        }
        P(Ut), m += k.x, m < 0 && (h = Kt, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case Pt:
        if (k.y <= 0 && (f <= A || v && (p <= E || M >= H))) {
          L = !1;
          break;
        }
        P(Pt), y -= k.y, f += k.y, y < 0 && (h = Qt, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case Kt:
        if (k.x <= 0 && (p <= E || v && (f <= A || C >= z))) {
          L = !1;
          break;
        }
        P(Kt), m -= k.x, p += k.x, m < 0 && (h = Ut, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case Qt:
        if (k.y >= 0 && (C >= z || v && (p <= E || M >= H))) {
          L = !1;
          break;
        }
        P(Qt), y += k.y, y < 0 && (h = Pt, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case ue:
        if (v) {
          if (k.y <= 0 && (f <= A || M >= H)) {
            L = !1;
            break;
          }
          P(Pt), y -= k.y, f += k.y, m = y * v;
        } else
          P(Pt), P(Ut), k.x >= 0 ? M < H ? m += k.x : k.y <= 0 && f <= A && (L = !1) : m += k.x, k.y <= 0 ? f > A && (y -= k.y, f += k.y) : (y -= k.y, f += k.y);
        m < 0 && y < 0 ? (h = fe, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = de, m = -m, p -= m) : y < 0 && (h = he, y = -y, f -= y);
        break;
      case de:
        if (v) {
          if (k.y <= 0 && (f <= A || p <= E)) {
            L = !1;
            break;
          }
          P(Pt), y -= k.y, f += k.y, m = y * v, p += i.width - m;
        } else
          P(Pt), P(Kt), k.x <= 0 ? p > E ? (m -= k.x, p += k.x) : k.y <= 0 && f <= A && (L = !1) : (m -= k.x, p += k.x), k.y <= 0 ? f > A && (y -= k.y, f += k.y) : (y -= k.y, f += k.y);
        m < 0 && y < 0 ? (h = he, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = ue, m = -m, p -= m) : y < 0 && (h = fe, y = -y, f -= y);
        break;
      case fe:
        if (v) {
          if (k.x <= 0 && (p <= E || C >= z)) {
            L = !1;
            break;
          }
          P(Kt), m -= k.x, p += k.x, y = m / v;
        } else
          P(Qt), P(Kt), k.x <= 0 ? p > E ? (m -= k.x, p += k.x) : k.y >= 0 && C >= z && (L = !1) : (m -= k.x, p += k.x), k.y >= 0 ? C < z && (y += k.y) : y += k.y;
        m < 0 && y < 0 ? (h = ue, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = he, m = -m, p -= m) : y < 0 && (h = de, y = -y, f -= y);
        break;
      case he:
        if (v) {
          if (k.x >= 0 && (M >= H || C >= z)) {
            L = !1;
            break;
          }
          P(Ut), m += k.x, y = m / v;
        } else
          P(Qt), P(Ut), k.x >= 0 ? M < H ? m += k.x : k.y >= 0 && C >= z && (L = !1) : m += k.x, k.y >= 0 ? C < z && (y += k.y) : y += k.y;
        m < 0 && y < 0 ? (h = de, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = fe, m = -m, p -= m) : y < 0 && (h = ue, y = -y, f -= y);
        break;
      case Os:
        this.move(k.x, k.y), L = !1;
        break;
      case Ls:
        this.zoom(su(l), t), L = !1;
        break;
      case Ts:
        if (!k.x || !k.y) {
          L = !1;
          break;
        }
        B = Rs(this.cropper), p = R.startX - B.left, f = R.startY - B.top, m = i.minWidth, y = i.minHeight, k.x > 0 ? h = k.y > 0 ? he : ue : k.x < 0 && (p -= m, h = k.y > 0 ? fe : de), k.y < 0 && (f -= y), this.cropped || ($t(this.cropBox, gt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    L && (i.width = m, i.height = y, i.left = p, i.top = f, this.action = h, this.renderCropBox()), rt(l, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, bu = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, Te), $t(this.cropBox, gt), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $t(this.dragBox, Te), at(this.cropBox, gt)), this;
  },
  replace: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), r ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(s) {
      s.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, $t(this.cropper, Pr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Pr)), this;
  },
  destroy: function() {
    var t = this.element;
    return t[Z] ? (t[Z] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, n = s.left, i = s.top;
    return this.moveTo(Be(t) ? t : n + Number(t), Be(r) ? r : i + Number(r));
  },
  moveTo: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, n = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.movable && (U(t) && (s.left = t, n = !0), U(r) && (s.top = r, n = !0), n && this.renderCanvas(!0)), this;
  },
  zoom: function(t, r) {
    var s = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(s.width * t / s.naturalWidth, null, r);
  },
  zoomTo: function(t, r, s) {
    var n = this.options, i = this.canvasData, l = i.width, h = i.height, v = i.naturalWidth, p = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && n.zoomable) {
      var f = v * t, m = p * t;
      if (se(this.element, er, {
        ratio: t,
        oldRatio: l / v,
        originalEvent: s
      }) === !1)
        return this;
      if (s) {
        var y = this.pointers, M = Rs(this.cropper), C = y && Object.keys(y).length ? ou(y) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        i.left -= (f - l) * ((C.pageX - M.left - i.left) / l), i.top -= (m - h) * ((C.pageY - M.top - i.top) / h);
      } else
        te(r) && U(r.x) && U(r.y) ? (i.left -= (f - l) * ((r.x - i.left) / l), i.top -= (m - h) * ((r.y - i.top) / h)) : (i.left -= (f - l) / 2, i.top -= (m - h) / 2);
      i.width = f, i.height = m, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  rotateTo: function(t) {
    return t = Number(t), U(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(t) {
    var r = this.imageData.scaleY;
    return this.scale(t, U(r) ? r : 1);
  },
  scaleY: function(t) {
    var r = this.imageData.scaleX;
    return this.scale(U(r) ? r : 1, t);
  },
  scale: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.imageData, n = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.scalable && (U(t) && (s.scaleX = t, n = !0), U(r) && (s.scaleY = r, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = this.options, s = this.imageData, n = this.canvasData, i = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: i.left - n.left,
        y: i.top - n.top,
        width: i.width,
        height: i.height
      };
      var h = s.width / s.naturalWidth;
      if (rt(l, function(f, m) {
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
    return r.rotatable && (l.rotate = s.rotate || 0), r.scalable && (l.scaleX = s.scaleX || 1, l.scaleY = s.scaleY || 1), l;
  },
  setData: function(t) {
    var r = this.options, s = this.imageData, n = this.canvasData, i = {};
    if (this.ready && !this.disabled && te(t)) {
      var l = !1;
      r.rotatable && U(t.rotate) && t.rotate !== s.rotate && (s.rotate = t.rotate, l = !0), r.scalable && (U(t.scaleX) && t.scaleX !== s.scaleX && (s.scaleX = t.scaleX, l = !0), U(t.scaleY) && t.scaleY !== s.scaleY && (s.scaleY = t.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var h = s.width / s.naturalWidth;
      U(t.x) && (i.left = t.x * h + n.left), U(t.y) && (i.top = t.y * h + n.top), U(t.width) && (i.width = t.width * h), U(t.height) && (i.height = t.height * h), this.setCropBoxData(i);
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
    var t = this.canvasData, r = {};
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(s) {
      r[s] = t[s];
    }), r;
  },
  setCanvasData: function(t) {
    var r = this.canvasData, s = r.aspectRatio;
    return this.ready && !this.disabled && te(t) && (U(t.left) && (r.left = t.left), U(t.top) && (r.top = t.top), U(t.width) ? (r.width = t.width, r.height = t.width / s) : U(t.height) && (r.height = t.height, r.width = t.height * s), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var t = this.cropBoxData, r;
    return this.ready && this.cropped && (r = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), r || {};
  },
  setCropBoxData: function(t) {
    var r = this.cropBoxData, s = this.options.aspectRatio, n, i;
    return this.ready && this.cropped && !this.disabled && te(t) && (U(t.left) && (r.left = t.left), U(t.top) && (r.top = t.top), U(t.width) && t.width !== r.width && (n = !0, r.width = t.width), U(t.height) && t.height !== r.height && (i = !0, r.height = t.height), s && (n ? r.height = r.width / s : i && (r.width = r.height * s)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var r = this.canvasData, s = nu(this.image, this.imageData, r, t);
    if (!this.cropped)
      return s;
    var n = this.getData(), i = n.x, l = n.y, h = n.width, v = n.height, p = s.width / Math.floor(r.naturalWidth);
    p !== 1 && (i *= p, l *= p, h *= p, v *= p);
    var f = h / v, m = jt({
      aspectRatio: f,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), y = jt({
      aspectRatio: f,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), M = jt({
      aspectRatio: f,
      width: t.width || (p !== 1 ? s.width : h),
      height: t.height || (p !== 1 ? s.height : v)
    }), C = M.width, E = M.height;
    C = Math.min(m.width, Math.max(y.width, C)), E = Math.min(m.height, Math.max(y.height, E));
    var A = document.createElement("canvas"), H = A.getContext("2d");
    A.width = re(C), A.height = re(E), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, C, E);
    var z = t.imageSmoothingEnabled, L = z === void 0 ? !0 : z, B = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = L, B && (H.imageSmoothingQuality = B);
    var R = s.width, k = s.height, P = i, G = l, ot, it, ht, bt, vt, J;
    P <= -h || P > R ? (P = 0, ot = 0, ht = 0, vt = 0) : P <= 0 ? (ht = -P, P = 0, ot = Math.min(R, h + P), vt = ot) : P <= R && (ht = 0, ot = Math.min(h, R - P), vt = ot), ot <= 0 || G <= -v || G > k ? (G = 0, it = 0, bt = 0, J = 0) : G <= 0 ? (bt = -G, G = 0, it = Math.min(k, v + G), J = it) : G <= k && (bt = 0, it = Math.min(v, k - G), J = it);
    var T = [P, G, ot, it];
    if (vt > 0 && J > 0) {
      var V = C / h;
      T.push(ht * V, bt * V, vt * V, J * V);
    }
    return H.drawImage.apply(H, [s].concat(As(T.map(function(N) {
      return Math.floor(re(N));
    })))), A;
  },
  setAspectRatio: function(t) {
    var r = this.options;
    return !this.disabled && !Be(t) && (r.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(t) {
    var r = this.options, s = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var i = t === vr, l = r.movable && t === Is;
      t = i || l ? t : Ps, r.dragMode = t, ve(s, me, t), ee(s, qe, i), ee(s, Ge, l), r.cropBoxMovable || (ve(n, me, t), ee(n, qe, i), ee(n, Ge, l));
    }
    return this;
  }
}, yu = Et.Cropper, Us = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Oc(this, e), !t || !Wc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, Yr, te(r) && r), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Lc(e, [{
    key: "init",
    value: function() {
      var r = this.element, s = r.tagName.toLowerCase(), n;
      if (!r[Z]) {
        if (r[Z] = this, s === "img") {
          if (this.isImg = !0, n = r.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = r.src;
        } else
          s === "canvas" && window.HTMLCanvasElement && (n = r.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(r) {
      var s = this;
      if (!!r) {
        this.url = r, this.imageData = {};
        var n = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Kc.test(r)) {
          Yc.test(r) ? this.read(cu(r)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), h = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = h, l.onerror = h, l.ontimeout = h, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Kr && l.abort();
        }, l.onload = function() {
          s.read(l.response);
        }, l.onloadend = function() {
          s.reloading = !1, s.xhr = null;
        }, i.checkCrossOrigin && Xr(r) && n.crossOrigin && (r = Fr(r)), l.open("GET", r, !0), l.responseType = "arraybuffer", l.withCredentials = n.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(r) {
      var s = this.options, n = this.imageData, i = du(r), l = 0, h = 1, v = 1;
      if (i > 1) {
        this.url = uu(r, Kr);
        var p = hu(i);
        l = p.rotate, h = p.scaleX, v = p.scaleY;
      }
      s.rotatable && (n.rotate = l), s.scalable && (n.scaleX = h, n.scaleY = v), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var r = this.element, s = this.url, n = r.crossOrigin, i = s;
      this.options.checkCrossOrigin && Xr(s) && (n || (n = "anonymous"), i = Fr(s)), this.crossOrigin = n, this.crossOriginUrl = i;
      var l = document.createElement("img");
      n && (l.crossOrigin = n), l.src = i || s, l.alt = r.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), at(l, Nr), r.parentNode.insertBefore(l, r.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var r = this, s = this.image;
      s.onload = null, s.onerror = null, this.sizing = !0;
      var n = Et.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Et.navigator.userAgent), i = function(p, f) {
        Q(r.imageData, {
          naturalWidth: p,
          naturalHeight: f,
          aspectRatio: p / f
        }), r.initialImageData = Q({}, r.imageData), r.sizing = !1, r.sized = !0, r.build();
      };
      if (s.naturalWidth && !n) {
        i(s.naturalWidth, s.naturalHeight);
        return;
      }
      var l = document.createElement("img"), h = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        i(l.width, l.height), n || h.removeChild(l);
      }, l.src = s.src, n || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", h.appendChild(l));
    }
  }, {
    key: "stop",
    value: function() {
      var r = this.image;
      r.onload = null, r.onerror = null, r.parentNode.removeChild(r), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var r = this.element, s = this.options, n = this.image, i = r.parentNode, l = document.createElement("div");
        l.innerHTML = Xc;
        var h = l.querySelector(".".concat(Z, "-container")), v = h.querySelector(".".concat(Z, "-canvas")), p = h.querySelector(".".concat(Z, "-drag-box")), f = h.querySelector(".".concat(Z, "-crop-box")), m = f.querySelector(".".concat(Z, "-face"));
        this.container = i, this.cropper = h, this.canvas = v, this.dragBox = p, this.cropBox = f, this.viewBox = h.querySelector(".".concat(Z, "-view-box")), this.face = m, v.appendChild(n), at(r, gt), i.insertBefore(h, r.nextSibling), this.isImg || $t(n, Nr), this.initPreview(), this.bind(), s.initialAspectRatio = Math.max(0, s.initialAspectRatio) || NaN, s.aspectRatio = Math.max(0, s.aspectRatio) || NaN, s.viewMode = Math.max(0, Math.min(3, Math.round(s.viewMode))) || 0, at(f, gt), s.guides || at(f.getElementsByClassName("".concat(Z, "-dashed")), gt), s.center || at(f.getElementsByClassName("".concat(Z, "-center")), gt), s.background && at(h, "".concat(Z, "-bg")), s.highlight || at(m, Hc), s.cropBoxMovable && (at(m, Ge), ve(m, me, mr)), s.cropBoxResizable || (at(f.getElementsByClassName("".concat(Z, "-line")), gt), at(f.getElementsByClassName("".concat(Z, "-point")), gt)), this.render(), this.ready = !0, this.setDragMode(s.dragMode), s.autoCrop && this.crop(), this.setData(s.data), pt(s.ready) && yt(r, Rr, s.ready, {
          once: !0
        }), se(r, Rr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), $t(this.element, gt));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = yu, e;
    }
  }, {
    key: "setDefaults",
    value: function(r) {
      Q(Yr, te(r) && r);
    }
  }]), e;
}();
Q(Us.prototype, fu, pu, gu, mu, vu, bu);
const wu = { class: "flex" }, xu = ["aria-label"], Su = { class: "ml-auto mb-2" }, _u = { class: "w-full flex justify-center" }, ku = ["src"], Du = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, s = I("accessToken"), { t: n } = I("i18n"), { apiUrl: i } = At(), l = O(null), h = O(null), v = O(!1), p = O(""), f = O(!1), m = () => {
      v.value = !v.value, v.value ? h.value = new Us(l.value, {
        crop(C) {
        }
      }) : h.value.destroy();
    }, y = I("postData"), M = () => {
      h.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (C) => {
          p.value = "", f.value = !1, Ee(i.value, {
            method: "POST",
            params: Object.assign(y, {
              q: "upload",
              adapter: r.selection.adapter,
              path: r.selection.item.path,
              file: C
            }),
            name: r.selection.item.basename,
            json: !1,
            headers: { Authorization: s ? "Bearer " + s : null }
          }).then((E) => {
            p.value = n("Updated."), l.value.src = Cr(r.selection.adapter, r.selection.item.path), m(), t("load");
          }).catch((E) => {
            p.value = n(E.message), f.value = !0;
          });
        }
      );
    };
    return Mt(() => {
      t("load");
    }), (C, E) => (x(), _(lt, null, [
      d("div", wu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, xu),
        d("div", Su, [
          v.value ? (x(), _("button", {
            key: 0,
            onClick: M,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, D(S(n)("Crop")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: E[0] || (E[0] = (A) => m())
          }, D(v.value ? S(n)("Cancel") : S(n)("Edit")), 1)
        ])
      ]),
      d("div", _u, [
        d("img", {
          ref_key: "image",
          ref: l,
          class: "max-w-[50vh] max-h-[50vh]",
          src: S(Cr)(r.selection.adapter, r.selection.item.path),
          alt: ""
        }, null, 8, ku)
      ]),
      p.value.length ? (x(), q(Ot, {
        key: 0,
        onHidden: E[1] || (E[1] = (A) => p.value = ""),
        error: f.value
      }, {
        default: Y(() => [
          st(D(p.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, Mu = { class: "flex" }, Cu = ["aria-label"], $u = /* @__PURE__ */ d("div", null, null, -1), Eu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    return Mt(() => {
      t("load");
    }), (r, s) => (x(), _(lt, null, [
      d("div", Mu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, D(e.selection.item.basename), 9, Cu)
      ]),
      $u
    ], 64));
  }
}, Au = ["aria-label"], Tu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Ou = ["src"], Lu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), n = () => s.value + "?" + Ft({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), _(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, Au),
      d("div", null, [
        d("video", Tu, [
          d("source", {
            src: n(),
            type: "video/mp4"
          }, null, 8, Ou),
          st(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Iu = ["aria-label"], Pu = {
  class: "w-full",
  controls: ""
}, Nu = ["src"], ju = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), n = () => s.value + "?" + Ft({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), _(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, Iu),
      d("div", null, [
        d("audio", Pu, [
          d("source", {
            src: n(),
            type: "audio/mpeg"
          }, null, 8, Nu),
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Vu = ["aria-label"], Hu = ["data"], zu = ["src"], Ru = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: s } = At(), n = () => s.value + "?" + Ft({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Mt(() => {
      t("load");
    }), (i, l) => (x(), _(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, D(e.selection.item.basename), 9, Vu),
      d("div", null, [
        d("object", {
          class: "h-[60vh]",
          data: n(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          d("iframe", {
            class: "border-0",
            src: n(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, zu)
        ], 8, Hu)
      ])
    ], 64));
  }
}, Bu = { class: "sm:flex sm:items-start" }, Uu = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Ku = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Yu = {
  key: 0,
  class: "flex leading-5"
}, Wu = /* @__PURE__ */ d("svg", {
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
], -1), Xu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Fu = { class: "font-bold pl-2" }, qu = { class: "font-bold pl-2" }, Gu = {
  name: "VFModalPreview"
}, Ju = /* @__PURE__ */ Object.assign(Gu, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = e, { apiUrl: r } = At(), s = I("emitter"), { t: n } = I("i18n"), i = O(!1), l = (p) => i.value = p, h = (p) => {
      var f;
      return ((f = t.selection.item.mime_type) != null ? f : "").startsWith(p);
    }, v = () => {
      const p = r.value + "?" + Ft({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      s.emit("vf-download", p);
    };
    return (p, f) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: f[6] || (f[6] = (m) => S(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Close")), 1),
        d("button", {
          type: "button",
          onClick: f[7] || (f[7] = (m) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Download")), 1)
      ]),
      default: Y(() => [
        d("div", Bu, [
          d("div", Uu, [
            d("div", null, [
              h("text") ? (x(), q(Tc, {
                key: 0,
                selection: e.selection,
                onLoad: f[0] || (f[0] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("image") ? (x(), q(Du, {
                key: 1,
                selection: e.selection,
                onLoad: f[1] || (f[1] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("video") ? (x(), q(Lu, {
                key: 2,
                selection: e.selection,
                onLoad: f[2] || (f[2] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("audio") ? (x(), q(ju, {
                key: 3,
                selection: e.selection,
                onLoad: f[3] || (f[3] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("application/pdf") ? (x(), q(Ru, {
                key: 4,
                selection: e.selection,
                onLoad: f[4] || (f[4] = (m) => l(!0))
              }, null, 8, ["selection"])) : (x(), q(Eu, {
                key: 5,
                selection: e.selection,
                onLoad: f[5] || (f[5] = (m) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            d("div", Ku, [
              i.value == !1 ? (x(), _("div", Yu, [
                Wu,
                d("span", null, D(S(n)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        d("div", Xu, [
          d("div", null, [
            d("span", Fu, D(S(n)("File Size")) + ": ", 1),
            st(D(S(Qr)(e.selection.item.file_size)), 1)
          ]),
          d("div", null, [
            d("span", qu, D(S(n)("Last Modified")) + ": ", 1),
            st(" " + D(S(ts)(e.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Zu = { class: "sm:flex sm:items-start" }, Qu = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), td = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ed = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, rd = { class: "mt-2" }, sd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, od = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, id = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), nd = [
  id
], ad = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ld = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), cd = [
  ld
], ud = { class: "ml-1.5" }, dd = ["onKeyup"], hd = {
  name: "VFModalRename"
}, fd = /* @__PURE__ */ Object.assign(hd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n"), i = O(t.selection.items[0]), l = O(t.selection.items[0].basename), h = O(""), v = () => {
      l.value != "" && r.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path,
          name: l.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("%s is renamed.", l.value) });
        },
        onError: (p) => {
          h.value = n(p.message);
        }
      });
    };
    return (p, f) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Rename")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Zu, [
          Qu,
          d("div", td, [
            d("h3", ed, D(S(n)("Rename")), 1),
            d("div", rd, [
              d("p", sd, [
                i.value.type == "dir" ? (x(), _("svg", od, nd)) : (x(), _("svg", ad, cd)),
                d("span", ud, D(i.value.basename), 1)
              ]),
              wt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => l.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, dd), [
                [ne, l.value]
              ]),
              h.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => h.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(h.value), 1)
                ]),
                _: 1
              })) : K("", !0)
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
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), md = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bd = { class: "mt-2" }, yd = { class: "text-gray-500 mb-1" }, wd = ["id"], xd = {
  key: 0,
  class: "py-2"
}, Sd = ["disabled", "onClick"], _d = {
  name: "VFModalUpload"
}, kd = /* @__PURE__ */ Object.assign(_d, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter"), { apiUrl: s } = At(), { t: n } = I("i18n"), i = I("accessToken"), l = O(null), h = O(null), v = O(null), p = O([]), f = O(""), m = O(!0), y = () => {
      f.value = "", l.value.start();
    }, M = I("postData");
    return Mt(() => {
      l.value = new Re.Uploader({
        runtimes: "html5",
        browse_button: v.value,
        container: h.value,
        max_file_size: "2Gb",
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + Ft(Object.assign(M, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        headers: {
          ...$e && { "X-CSRF-Token": $e },
          Authorization: i ? "Bearer " + i : null
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(C, E) {
            m.value = !1, Re.each(E, function(A) {
              p.value.push({
                id: A.id,
                name: A.name,
                size: Re.formatSize(A.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(C, E) {
            p.value[p.value.findIndex((A) => A.id == E.id)].percent = E.percent + "%";
          },
          UploadComplete: function() {
            m.value = !0, r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(C, E) {
            l.value.stop(), f.value = n(JSON.parse(E.response).message);
          }
        }
      }), l.value.init();
    }), (C, E) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          disabled: m.value,
          onClick: Yt(y, ["prevent"]),
          type: "button",
          class: dt([m.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, D(S(n)("Upload")), 11, Sd),
        d("button", {
          type: "button",
          onClick: E[1] || (E[1] = (A) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", pd, [
          gd,
          d("div", md, [
            d("h3", vd, D(S(n)("Upload files")), 1),
            d("div", bd, [
              d("div", yd, [
                (x(!0), _(lt, null, xt(p.value, (A) => (x(), _("div", null, [
                  d("div", {
                    id: A.id
                  }, [
                    st(D(A.name) + " ( " + D(A.size) + ") ", 1),
                    d("b", null, D(A.percent), 1)
                  ], 8, wd)
                ]))), 256)),
                p.value.length ? K("", !0) : (x(), _("div", xd, D(S(n)("No files selected!")), 1))
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
                }, D(S(n)("Select Files")), 513)
              ], 512),
              f.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: E[0] || (E[0] = (A) => f.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(f.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Dd = { class: "sm:flex sm:items-start" }, Md = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Cd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, $d = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ed = { class: "mt-2" }, Ad = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Td = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Od = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ld = [
  Od
], Id = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Pd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Nd = [
  Pd
], jd = { class: "ml-1.5" }, Vd = ["onKeyup", "placeholder"], Hd = {
  name: "VFModalArchive"
}, zd = /* @__PURE__ */ Object.assign(Hd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n"), i = O(""), l = O(""), h = O(t.selection.items), v = () => {
      h.value.length && r.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: t.current.dirname,
          items: JSON.stringify(h.value.map(({ path: p, type: f }) => ({ path: p, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("The file(s) archived.") });
        },
        onError: (p) => {
          l.value = n(p.message);
        }
      });
    };
    return (p, f) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Archive")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Dd, [
          Md,
          d("div", Cd, [
            d("h3", $d, D(S(n)("Archive the files")), 1),
            d("div", Ed, [
              (x(!0), _(lt, null, xt(h.value, (m) => (x(), _("p", Ad, [
                m.type == "dir" ? (x(), _("svg", Td, Ld)) : (x(), _("svg", Id, Nd)),
                d("span", jd, D(m.basename), 1)
              ]))), 256)),
              wt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(n)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Vd), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rd = { class: "sm:flex sm:items-start" }, Bd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Ud = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Kd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yd = { class: "mt-2" }, Wd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Xd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), qd = [
  Fd
], Gd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Zd = [
  Jd
], Qd = { class: "ml-1.5" }, th = { class: "my-1 text-sm text-gray-500" }, eh = {
  name: "VFModalUnarchive"
}, rh = /* @__PURE__ */ Object.assign(eh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter");
    I("storage");
    const s = I("adapter"), { t: n } = I("i18n");
    O("");
    const i = O(t.selection.items[0]), l = O(""), h = O([]), v = () => {
      r.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: t.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("The file unarchived.") });
        },
        onError: (p) => {
          l.value = n(p.message);
        }
      });
    };
    return (p, f) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Unarchive")), 1),
        d("button", {
          type: "button",
          onClick: f[1] || (f[1] = (m) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(n)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Rd, [
          Bd,
          d("div", Ud, [
            d("h3", Kd, D(S(n)("Unarchive")), 1),
            d("div", Yd, [
              (x(!0), _(lt, null, xt(h.value, (m) => (x(), _("p", Wd, [
                m.type == "dir" ? (x(), _("svg", Xd, qd)) : (x(), _("svg", Gd, Zd)),
                d("span", Qd, D(m.basename), 1)
              ]))), 256)),
              d("p", th, D(S(n)("The archive will be unarchived at")) + " (" + D(e.current.dirname) + ")", 1),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: f[0] || (f[0] = (m) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sh = { class: "sm:flex sm:items-start" }, oh = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), ih = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, nh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ah = { class: "mt-2" }, lh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ch = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, uh = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), dh = [
  uh
], hh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, fh = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ph = [
  fh
], gh = { class: "ml-1.5" }, mh = { class: "text-sm text-gray-500 pb-1 pt-3" }, vh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, bh = /* @__PURE__ */ d("svg", {
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
], -1), yh = { class: "ml-1.5 overflow-auto" }, wh = {
  name: "VFModalMove"
}, xh = /* @__PURE__ */ Object.assign(wh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = I("emitter"), { t: s } = I("i18n");
    I("storage");
    const n = I("adapter"), i = O(t.selection.items.from), l = O(""), h = () => {
      i.value.length && r.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: s("Files moved.", t.selection.items.to.name) });
        },
        onError: (v) => {
          l.value = s(v.message);
        }
      });
    };
    return (v, p) => (x(), q(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Yes, Move!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, D(S(s)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", sh, [
          oh,
          d("div", ih, [
            d("h3", nh, D(S(s)("Move files")), 1),
            d("div", ah, [
              (x(!0), _(lt, null, xt(i.value, (f) => (x(), _("p", lh, [
                f.type == "dir" ? (x(), _("svg", ch, dh)) : (x(), _("svg", hh, ph)),
                d("span", gh, D(f.path), 1)
              ]))), 256)),
              d("p", mh, D(S(s)("Are you sure you want to move these files?")), 1),
              d("p", vh, [
                bh,
                d("span", yh, D(e.selection.items.to.path), 1)
              ]),
              l.value.length ? (x(), q(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(D(l.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: Ql,
  ModalMessage: ac,
  ModalNewFolder: mc,
  ModalNewFile: Dc,
  ModalPreview: Ju,
  ModalRename: fd,
  ModalUpload: kd,
  ModalArchive: zd,
  ModalUnarchive: rh,
  ModalMove: xh
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  VueFinder: Cl,
  ...Sh
};
const Dh = {
  install(e) {
    for (const t in Ke)
      if (Ke.hasOwnProperty(t)) {
        const r = Ke[t];
        e.component(r.name, r);
      }
  }
};
export {
  Dh as default
};
