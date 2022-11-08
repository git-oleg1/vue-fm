import { ref as L, watch as Le, inject as I, openBlock as x, createElementBlock as D, createElementVNode as d, unref as S, normalizeClass as gt, createTextVNode as st, toDisplayString as C, createCommentVNode as K, createVNode as Dt, TransitionGroup as wo, withCtx as Y, Fragment as lt, renderList as xt, reactive as Me, onMounted as Ct, onUpdated as xo, withDirectives as wt, vShow as Se, withModifiers as Yt, nextTick as Oe, isRef as Gr, vModelSelect as Dr, customRef as So, withKeys as ie, vModelText as ne, normalizeStyle as Jr, provide as Bt, createBlock as F, resolveDynamicComponent as _o, renderSlot as Ye } from "vue";
import Re from "plupload";
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
  const e = L(JSON.parse(t));
  Le(e, s);
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
const Cr = L("");
function At() {
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
}, null, -1), Lo = [
  To
], Oo = ["aria-label"], Io = /* @__PURE__ */ d("path", {
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
}, zo = { class: "pl-2" }, Ro = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Bo = {
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
], Wo = { class: "flex text-center items-center justify-end" }, Xo = ["aria-label"], qo = /* @__PURE__ */ d("path", { d: "M95.73,10.81c10.53,7.09,19.6,17.37,26.48,29.86l0.67,1.22l-0.67,1.21c-6.88,12.49-15.96,22.77-26.48,29.86 C85.46,79.88,73.8,83.78,61.44,83.78c-12.36,0-24.02-3.9-34.28-10.81C16.62,65.87,7.55,55.59,0.67,43.1L0,41.89l0.67-1.22 c6.88-12.49,15.95-22.77,26.48-29.86C37.42,3.9,49.08,0,61.44,0C73.8,0,85.45,3.9,95.73,10.81L95.73,10.81z M60.79,22.17l4.08,0.39 c-1.45,2.18-2.31,4.82-2.31,7.67c0,7.48,5.86,13.54,13.1,13.54c2.32,0,4.5-0.62,6.39-1.72c0.03,0.47,0.05,0.94,0.05,1.42 c0,11.77-9.54,21.31-21.31,21.31c-11.77,0-21.31-9.54-21.31-21.31C39.48,31.71,49.02,22.17,60.79,22.17L60.79,22.17L60.79,22.17z M109,41.89c-5.5-9.66-12.61-17.6-20.79-23.11c-8.05-5.42-17.15-8.48-26.77-8.48c-9.61,0-18.71,3.06-26.76,8.48 c-8.18,5.51-15.29,13.45-20.8,23.11c5.5,9.66,12.62,17.6,20.8,23.1c8.05,5.42,17.15,8.48,26.76,8.48c9.62,0,18.71-3.06,26.77-8.48 C96.39,59.49,103.5,51.55,109,41.89L109,41.89z" }, null, -1), Fo = [
  qo
], Go = /* @__PURE__ */ d("path", { d: "M0.955,37.326c2.922-3.528,5.981-6.739,9.151-9.625C24.441,14.654,41.462,7.684,59.01,7.334 c6.561-0.131,13.185,0.665,19.757,2.416l-5.904,5.904c-4.581-0.916-9.168-1.324-13.714-1.233 c-15.811,0.316-31.215,6.657-44.262,18.533l0,0c-2.324,2.115-4.562,4.39-6.702,6.82c4.071,4.721,8.6,8.801,13.452,12.227 c2.988,2.111,6.097,3.973,9.296,5.586l-5.262,5.262c-2.782-1.504-5.494-3.184-8.12-5.039c-6.143-4.338-11.813-9.629-16.78-15.85 C-0.338,40.563-0.228,38.59,0.955,37.326L0.955,37.326L0.955,37.326z M96.03,0l5.893,5.893L28.119,79.699l-5.894-5.895L96.03,0 L96.03,0z M97.72,17.609c4.423,2.527,8.767,5.528,12.994,9.014c3.877,3.196,7.635,6.773,11.24,10.735 c1.163,1.277,1.22,3.171,0.226,4.507c-4.131,5.834-8.876,10.816-14.069,14.963C95.119,67.199,79.338,72.305,63.352,72.377 c-6.114,0.027-9.798-3.141-15.825-4.576l3.545-3.543c4.065,0.705,8.167,1.049,12.252,1.031c14.421-0.064,28.653-4.668,40.366-14.02 c3.998-3.191,7.706-6.939,11.028-11.254c-2.787-2.905-5.627-5.543-8.508-7.918c-4.455-3.673-9.042-6.759-13.707-9.273L97.72,17.609 L97.72,17.609z M61.44,18.143c2.664,0,5.216,0.481,7.576,1.359l-5.689,5.689c-0.619-0.079-1.248-0.119-1.886-0.119 c-4.081,0-7.775,1.654-10.449,4.328c-2.674,2.674-4.328,6.369-4.328,10.45c0,0.639,0.04,1.268,0.119,1.885l-5.689,5.691 c-0.879-2.359-1.359-4.912-1.359-7.576c0-5.995,2.43-11.42,6.358-15.349C50.02,20.572,55.446,18.143,61.44,18.143L61.44,18.143z M82.113,33.216c0.67,2.09,1.032,4.32,1.032,6.634c0,5.994-2.43,11.42-6.357,15.348c-3.929,3.928-9.355,6.357-15.348,6.357 c-2.313,0-4.542-0.361-6.633-1.033l5.914-5.914c0.238,0.012,0.478,0.018,0.719,0.018c4.081,0,7.775-1.652,10.449-4.326 s4.328-6.369,4.328-10.449c0-0.241-0.006-0.48-0.018-0.72L82.113,33.216L82.113,33.216z" }, null, -1), Jo = [
  Go
], Zo = ["aria-label"], Qo = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), ti = [
  Qo
], ei = ["aria-label"], ri = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, si = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, oi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, ii = ["aria-label"], ni = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, ai = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, li = {
  name: "VFToolbar"
}, ci = /* @__PURE__ */ Object.assign(li, {
  props: {
    data: Object
  },
  setup(r) {
    const t = I("emitter"), { getStore: e, setStore: s } = I("storage"), { t: a } = I("i18n"), i = L(e("viewport", "grid")), l = L([]), h = L(e("full-screen", !1)), v = L(!1);
    t.on("vf-show-hidden-toggle", () => {
      v.value = !v.value;
    });
    const p = L("");
    t.on("vf-search-query", ({ newQuery: E }) => {
      p.value = E;
    });
    const f = I("loadingState"), m = () => f.value, y = () => {
      h.value = !h.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (E) => {
      l.value = E;
    }), t.on("vf-view-toggle", (E) => {
      s("viewport", E), i.value = E;
    }), (E, k) => (x(), D("div", Do, [
      p.value.length ? (x(), D("div", Ho, [
        d("div", zo, [
          st(C(S(a)("Search results for")) + " ", 1),
          d("span", Ro, C(p.value), 1)
        ]),
        m() ? (x(), D("svg", Bo, Yo)) : K("", !0)
      ])) : (x(), D("div", Co, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: k[0] || (k[0] = (M) => S(t).emit("vf-modal-show", {
            type: "new-folder",
            items: l.value
          }))
        }, Eo, 8, Mo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[1] || (k[1] = (M) => l.value.length != 1 || S(t).emit("vf-modal-show", {
            type: "rename",
            items: l.value
          }))
        }, [
          (x(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: gt([
              l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Lo, 2))
        ], 8, Ao),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[2] || (k[2] = (M) => !l.value.length || S(t).emit("vf-modal-show", {
            type: "delete",
            items: l.value
          }))
        }, [
          (x(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: gt([
              l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Po, 2))
        ], 8, Oo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[3] || (k[3] = (M) => S(t).emit("vf-modal-show", {
            type: "upload",
            items: l.value
          }))
        }, Vo, 8, No)
      ])),
      d("div", Wo, [
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("\u0421\u043A\u0440\u044B\u0442\u044B\u0435 \u0444\u0430\u0439\u043B\u044B"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          v.value ? (x(), D("svg", {
            key: 0,
            onClick: k[4] || (k[4] = (M) => S(t).emit("vf-show-hidden-toggle")),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 83.78",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "xml:space": "preserve",
            "stroke-width": "1.5",
            class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
          }, Fo)) : (x(), D("svg", {
            key: 1,
            onClick: k[5] || (k[5] = (M) => S(t).emit("vf-show-hidden-toggle")),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 83.78",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "xml:space": "preserve",
            "stroke-width": "1.5",
            class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
          }, Jo))
        ], 8, Xo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (x(), D("svg", {
            onClick: k[6] || (k[6] = (M) => S(t).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, ti))
        ], 8, Zo),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: y
        }, [
          (x(), D("svg", ri, [
            h.value ? (x(), D("path", si)) : (x(), D("path", oi))
          ]))
        ], 8, ei),
        d("div", {
          class: "mx-1.5",
          "aria-label": S(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: k[7] || (k[7] = (M) => p.value.length || S(t).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (x(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: gt([
              p.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (x(), D("path", ni)) : K("", !0),
            i.value == "list" ? (x(), D("path", ai)) : K("", !0)
          ], 2))
        ], 8, ii)
      ])
    ]));
  }
});
var ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zr = { exports: {} };
(function(r, t) {
  (function(e, s) {
    r.exports = s();
  })(ui, function() {
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
        var $ = [null];
        $.push.apply($, g);
        var V = Function.bind.apply(n, $), X = new V();
        return w && f(X, w.prototype), X;
      }, y.apply(null, arguments);
    }
    function E(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function k(u) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return k = function(b) {
        if (b === null || !E(b))
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
      }, k(u);
    }
    function M(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function A(u, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : M(u);
    }
    function z(u) {
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
    function P(u, c) {
      for (; !Object.prototype.hasOwnProperty.call(u, c) && (u = p(u), u !== null); )
        ;
      return u;
    }
    function O(u, c, o) {
      return typeof Reflect < "u" && Reflect.get ? O = Reflect.get : O = function(n, g, w) {
        var $ = P(n, g);
        if (!!$) {
          var V = Object.getOwnPropertyDescriptor($, g);
          return V.get ? V.get.call(w) : V.value;
        }
      }, O(u, c, o || u);
    }
    function R(u, c) {
      return N(u) || ot(u, c) || it(u, c) || vt();
    }
    function B(u) {
      return _(u) || G(u) || it(u) || bt();
    }
    function _(u) {
      if (Array.isArray(u))
        return dt(u);
    }
    function N(u) {
      if (Array.isArray(u))
        return u;
    }
    function G(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function ot(u, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var o = [], b = !0, n = !1, g = void 0;
        try {
          for (var w = u[Symbol.iterator](), $; !(b = ($ = w.next()).done) && (o.push($.value), !(c && o.length === c)); b = !0)
            ;
        } catch (V) {
          n = !0, g = V;
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
    function it(u, c) {
      if (!!u) {
        if (typeof u == "string")
          return dt(u, c);
        var o = Object.prototype.toString.call(u).slice(8, -1);
        if (o === "Object" && u.constructor && (o = u.constructor.name), o === "Map" || o === "Set")
          return Array.from(u);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return dt(u, c);
      }
    }
    function dt(u, c) {
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
      var n = c.x, g = c.y, w = b.x, $ = b.y, V = {
        "+": {
          x: n + w,
          y: g + $
        },
        "-": {
          x: n - w,
          y: g - $
        },
        "*": {
          x: n * w,
          y: g * $
        },
        "/": {
          x: n / w,
          y: g / $
        }
      };
      return V[o];
    }, T = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, H = function(c) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: c.x,
        top: c.y,
        right: c.x,
        bottom: c.y,
        width: o,
        height: o
      };
    }, j = function(c) {
      return {
        x: c,
        y: c
      };
    }, ct = function(u, c, o) {
      window.addEventListener("resize", c), window.addEventListener("scroll", c), u.forEach(function(b, n) {
        o.observe(b, {
          childList: n !== 0,
          attributes: !0
        });
      });
    }, q = function(u) {
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
        for (var b = arguments.length, n = new Array(b), g = 0; g < b; g++)
          n[g] = arguments[g];
        var w = function() {
          o = null, u.apply(void 0, n);
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
        var $ = b.transform.trim().match(/matrix\((.*?)\)/);
        if ($ && $.length) {
          var V, X = (V = $[1]) === null || V === void 0 ? void 0 : V.split(",");
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
      }, n = o.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var g, w = (g = n[0]) === null || g === void 0 ? void 0 : g.split("(");
        if (w) {
          var $, V = ($ = w[1]) === null || $ === void 0 ? void 0 : $.split(",");
          b.x = parseInt(V[0]) || 0, b.y = parseInt(V[1]) || 0;
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
      o.includes("top") && ce(c, {
        y: g.y + n.top - b.top,
        x: g.x
      }, w), o.includes("left") && ce(c, {
        y: g.y,
        x: g.x + n.left - b.left
      }, w), o.includes("bottom") && ce(c, {
        y: g.y + n.bottom - b.bottom,
        x: g.x
      }, w), o.includes("right") && ce(c, {
        y: g.y,
        x: g.x + n.right - b.right
      }, w);
    }, xr = function(u) {
      var c = u.computedStyle, o = u.node, b = c.position, n = b === "absolute" || b === "relative" || b === "fixed";
      !(o instanceof HTMLDocument) && !n && (o.style.position = "relative");
    }, Gs = function(u) {
      var c = u.shiftKey, o = u.keyboardDragSpeed, b = u.zoom, n = u.key, g = u.dragKeys, w = u.scrollDiff, $ = u.canScroll, V = u.scrollCallback, X = {
        x: 0,
        y: 0
      }, W = c ? o * 4 * b : o * b;
      return g.left.includes(n) && (X.x = w.x || -W, !c && !w.x && $ && V(["left"], o)), g.right.includes(n) && (X.x = w.x || W, !c && !w.x && $ && V(["right"], o)), g.up.includes(n) && (X.y = w.y || -W, !c && !w.y && $ && V(["top"], o)), g.down.includes(n) && (X.y = w.y || W, !c && !w.y && $ && V(["bottom"], o)), X;
    }, Js = function(u) {
      var c = u.element, o = u.force, b = u.multiSelectionToggle, n = u.SelectedSet, g = u.hoverClassName;
      c.classList.contains(g) && !o || (n.has(c) ? b && n.delete(c) : n.add(c), c.classList.add(g));
    }, Zs = function(u) {
      var c = u.element, o = u.force, b = u.SelectedSet, n = u.PrevSelectedSet, g = u.hoverClassName;
      if (!c.classList.contains(g) && !o)
        return !1;
      var w = b.has(c), $ = n.has(c);
      w && !$ ? b.delete(c) : !w && $ && b.add(c), c.classList.remove(g);
    }, le = function(c, o, b) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(o, '".'));
    }, et = function(c, o, b, n) {
      if (o === void 0)
        return b ? i({}, c, n) : {};
      if (o === null)
        return i({}, c, null);
      var g = !0, w = !1, $ = typeof n == "string";
      $ && (g = typeof o == "string" || o instanceof String), $ && !g && (w = !0, le(c, "string"));
      var V = !isNaN(n) && typeof n == "number";
      V && (g = !isNaN(o) && typeof o == "number"), V && !g && (w = !0, le(c, "number"));
      var X = Object.prototype.toString.call(n) === "[object Object]";
      X && (g = Object.prototype.toString.call(o) === "[object Object]"), X && !g && (w = !0, le(c, "object"));
      var W = typeof n == "boolean";
      W && (g = typeof o == "boolean"), W && !g && (w = !0, le(c, "boolean"));
      var ht = Array.isArray(n);
      ht && (g = Array.isArray(o)), ht && !g && (w = !0, le(c, "array"));
      var _t = w || b;
      return c === "dragKeys" && g ? i({}, c, Object.assign(n, o)) : c === "dragKeys" && !g ? _t ? i({}, c, n) : {} : g ? i({}, c, o) : _t ? i({}, c, n) : {};
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
      var c = u.element, o = u.posDirection, b = u.containerRect, n = u.useTransform, g = qs(c, n), w = J(g, "+", o);
      ce(c, w, n);
      var $ = c.getBoundingClientRect(), V = yr({
        elementRect: $,
        containerRect: b
      });
      Fs({
        element: c,
        edges: V,
        elementRect: $,
        containerRect: b,
        elementPos: w,
        useTransform: n
      });
    }, to = function(u, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), u.disconnect();
    }, eo = function(u, c, o) {
      if (!!c.length) {
        var b = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = u instanceof HTMLDocument ? b || document.body : u, g = c.includes("top") && n.scrollTop > 0, w = c.includes("bottom") && n.scrollTop < n.scrollHeight, $ = c.includes("left") && n.scrollLeft > 0, V = c.includes("right") && n.scrollLeft < n.scrollWidth;
        g && (n.scrollTop -= 1 * o), w && (n.scrollTop += 1 * o), $ && (n.scrollLeft -= 1 * o), V && (n.scrollLeft += 1 * o);
      }
    }, ce = function(u, c, o) {
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
          condition: function(W) {
            return W.event;
          }
        }],
        "Interaction:end": [{
          name: "callback"
        }]
      }, w = function() {
        var W = R(V[$], 2), ht = W[0], _t = W[1];
        ["pre", !1].forEach(function(ut) {
          return c(ut ? "".concat(ht, ":").concat(ut) : ht, function(Rt) {
            return _t.forEach(function(nt) {
              return (!nt.condition || nt.condition(Rt)) && o(ut ? "".concat(ut).concat(nt.name) : nt.name, h({
                items: n.elements,
                isDragging: b.isDragging
              }, Rt));
            });
          });
        });
      }, $ = 0, V = Object.entries(g); $ < V.length; $++)
        w();
    }, Zt = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : B(u) : [];
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
          ct(o.parentNodes, o._modificationCallback, o._modificationObserver);
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
        }), this._modificationCallback = xe(function(n) {
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
            var g, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, $ = (g = n[w]) === null || g === void 0 ? void 0 : g.parentNode;
            return $ ? (n.push($), w++, b(n, w)) : n;
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
          }, o._dragKeysFlat = [].concat(B(o._dragKeys.up), B(o._dragKeys.down), B(o._dragKeys.left), B(o._dragKeys.right));
        }), i(this, "keyboardDrag", function(n) {
          var g = n.event, w = n.key, $ = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes($) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability || o.DS.continue)) {
            var V = {
              event: g,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:start:pre", "Interaction:start"], V), o._elements = o.DS.getSelection(), o.handleZIndex(!0);
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
            }), o.DS.publish(["Interaction:update:pre", "Interaction:update"], V);
          }
        }), i(this, "keyboardEnd", function(n) {
          var g = n.event, w = n.key, $ = w.toLowerCase();
          if (!(!o.DS.stores.SettingsStore.s.keyboardDrag || !o._dragKeysFlat.includes($) || !o.DS.SelectedSet.size || !o.DS.stores.SettingsStore.s.draggability)) {
            var V = {
              event: g,
              isDragging: o.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            o.DS.publish(["Interaction:end:pre", "Interaction:end"], V);
          }
        }), i(this, "start", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          !g || w || (o._prevCursorPos = null, o._prevScrollPos = null, o._elements = o.DS.getSelection(), o.handleZIndex(!0));
        }), i(this, "stop", function(n) {
          n != null && n.isKeyboard || (o._prevCursorPos = null, o._prevScrollPos = null, o.handleZIndex(!1), o._elements = []);
        }), i(this, "update", function(n) {
          var g = n.isDragging, w = n.isDraggingKeyboard;
          if (!(!g || !o._elements.length || w || o.DS.continue)) {
            var $ = J(o._cursorDiff, "+", o._scrollDiff);
            o._elements.forEach(function(V) {
              return Sr({
                element: V,
                posDirection: $,
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
            var w = o.DS, $ = w.stores, V = $.PointerStore, X = $.KeyStore, W = w.SelectableSet, ht = w.SelectedSet;
            V.start(g);
            var _t = g.target;
            !W.has(_t) || (X.isMultiSelectKeyPressed(g) || ht.clear(), ht.toggle(_t), o.reset());
          }
        }), i(this, "stop", function() {
          o.isInteracting = !1, o.isDragging = !1, o.DS.Area.HTMLNode.removeEventListener("mousedown", o.start), o.DS.Area.HTMLNode.removeEventListener("touchstart", o.start, {
            passive: !1
          }), document.removeEventListener("mouseup", o.reset), document.removeEventListener("touchend", o.reset);
        }), i(this, "update", function(n) {
          var g = n.event, w = n.scroll_directions, $ = n.scroll_multiplier;
          o.isInteracting && o.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: g,
            scroll_directions: w,
            scroll_multiplier: $,
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
        w >= 0 ? o.subscribers[n].splice(w, 1) : g && (o.subscribers[n] = o.subscribers[n].filter(function($) {
          return $ !== g;
        }));
      }), i(this, "publish", function(n, g) {
        Array.isArray(n) ? n.forEach(function(w) {
          return o._publish(w, g);
        }) : o._publish(n, g);
      }), i(this, "_publish", function(n, g) {
        var w = o.subscribers[n];
        !Array.isArray(w) || (n.includes(":pre") ? o._handlePrePublish(w, g) : o._handlePublish(w, g));
      }), i(this, "_handlePublish", function(n, g) {
        for (var w = 0, $ = n.length; w < $; w++) {
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
      var c = z(o);
      function o(b) {
        var n, g = b.DS;
        return e(this, o), n = c.call(this), i(M(n), "init", function() {
          return Zt(n.DS.stores.SettingsStore.s.selectables).forEach(function(w) {
            return n.add(w);
          });
        }), i(M(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i(M(n), "_onClick", function(w) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: w
          });
        }), i(M(n), "_onPointer", function(w) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: w
          });
        }), i(M(n), "addAll", function(w) {
          return w.forEach(function($) {
            return n.add($);
          });
        }), i(M(n), "deleteAll", function(w) {
          return w.forEach(function($) {
            return n.delete($);
          });
        }), n.DS = g, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(w) {
          var $ = w.settings;
          n.forEach(function(V) {
            V.classList.remove($["selectableClass:pre"]), V.classList.add($.selectableClass);
          });
        }), n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", g), n.classList.add(this.DS.stores.SettingsStore.s.selectableClass), n.addEventListener("click", this._onClick), n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.stores.SettingsStore.s.draggability && !this.DS.stores.SettingsStore.s.useTransform && xr({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), this.DS.publish("Selectable:added", g), O(p(o.prototype), "add", this).call(this, n);
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:removed:pre", g), n.classList.remove(this.DS.stores.SettingsStore.s.selectableClass), n.classList.remove(this.DS.stores.SettingsStore.s.hoverClass), n.removeEventListener("click", this._onClick), n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", g), O(p(o.prototype), "delete", this).call(this, n);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), o;
    }(/* @__PURE__ */ k(Set)), lo = /* @__PURE__ */ function(u) {
      v(o, u);
      var c = z(o);
      function o(b) {
        var n, g = b.DS;
        return e(this, o), n = c.call(this), i(M(n), "clear", function() {
          return n.forEach(function(w) {
            return n.delete(w);
          });
        }), i(M(n), "addAll", function(w) {
          return w.forEach(function($) {
            return n.add($);
          });
        }), i(M(n), "deleteAll", function(w) {
          return w.forEach(function($) {
            return n.delete($);
          });
        }), n.DS = g, n;
      }
      return a(o, [{
        key: "add",
        value: function(n) {
          if (!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selected:added:pre", g), O(p(o.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", g), this;
          }
        }
      }, {
        key: "delete",
        value: function(n) {
          if (!!O(p(o.prototype), "has", this).call(this, n)) {
            var g = {
              items: this.elements,
              item: n
            };
            this.DS.publish("Selected:removed:pre", g);
            var w = O(p(o.prototype), "delete", this).call(this, n);
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
    }(/* @__PURE__ */ k(Set)), co = /* @__PURE__ */ function() {
      function u(c) {
        var o = this, b = c.DS;
        e(this, u), i(this, "_prevSelectedSet", void 0), i(this, "start", function(n) {
          var g = n.event, w = n.isDragging;
          w || (o._storePrevious(g), o._handleInsideSelection(!0, g));
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          g || o.DS.continue || o._handleInsideSelection();
        }), i(this, "_handleInsideSelection", function(n, g) {
          for (var w = o.DS, $ = w.SelectableSet, V = w.SelectorArea, X = w.Selector, W = $.elements.map(function(It) {
            return [It, It.getBoundingClientRect()];
          }), ht = [], _t = [], ut = 0, Rt = W.length; ut < Rt; ut++)
            !V.isInside(W[ut][0], W[ut][1]) || (ze(W[ut][1], X.rect) ? ht.push(W[ut][0]) : _t.push(W[ut][0]));
          var nt = o.DS.stores.KeyStore.isMultiSelectKeyPressed(g) && o.DS.stores.SettingsStore.s.multiSelectToggling;
          o.DS.continue || (ht.forEach(function(It) {
            return Js({
              element: It,
              force: n,
              multiSelectionToggle: nt,
              SelectedSet: o.DS.SelectedSet,
              hoverClassName: o.DS.stores.SettingsStore.s.hoverClass
            });
          }), _t.forEach(function(It) {
            return Zs({
              element: It,
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
          o.HTMLNode && (n = o.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && o.DS.SelectorArea.HTMLNode.removeChild(o.HTMLNode), o.HTMLNode = o.DS.stores.SettingsStore.s.selector || St(o.DS.stores.SettingsStore.s.customStyles), o.HTMLNode.classList.add(o.DS.stores.SettingsStore.s.selectorClass), o.HTMLNode && (g = o.DS.SelectorArea) !== null && g !== void 0 && g.HTMLNode && o.DS.SelectorArea.HTMLNode.appendChild(o.HTMLNode);
        }), i(this, "start", function(n) {
          var g = n.isDragging;
          if (!g) {
            var w = o.DS.stores.PointerStore, $ = w.initialValArea;
            _r(o.HTMLNode, H($, 1)), o.HTMLNode.style.display = "block", o._rect = null;
          }
        }), i(this, "stop", function() {
          o.HTMLNode.style.width = "0", o.HTMLNode.style.height = "0", o.HTMLNode.style.display = "none";
        }), i(this, "update", function(n) {
          var g = n.isDragging;
          if (!(g || o.DS.continue)) {
            var w = o.DS.stores, $ = w.ScrollStore, V = w.PointerStore, X = Ys({
              scrollAmount: $.scrollAmount,
              initialPointerPos: V.initialValArea,
              pointerPos: V.currentValArea
            });
            _r(o.HTMLNode, X), o._rect = null;
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
          var n = o.DS.Area.rect, g = o.DS.Area.computedBorder, w = o.HTMLNode.style, $ = "".concat(n.top + g.top, "px"), V = "".concat(n.left + g.left, "px"), X = "".concat(n.width, "px"), W = "".concat(n.height, "px");
          w.top !== $ && (w.top = $), w.left !== V && (w.left = V), w.width !== X && (w.width = X), w.height !== W && (w.height = W);
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
              elementRect: H(g.currentVal),
              containerRect: o.rect,
              tolerance: o.DS.stores.SettingsStore.s.overflowTolerance
            }), o.currentEdges.length && w.scroll(o.currentEdges, o.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), i(this, "stopAutoScroll", function() {
          o.currentEdges = [], clearInterval(o._scrollInterval);
        }), i(this, "isInside", function(n, g) {
          return o.DS.Area.HTMLNode.contains(n) && o.DS.stores.ScrollStore.canScroll ? !0 : ze(o.rect, g || n.getBoundingClientRect());
        }), this.DS = b, this.HTMLNode = tt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
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
          return ze({
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
        e(this, u), i(this, "_initialVal", void 0), i(this, "_currentVal", void 0), i(this, "_canScroll", void 0), i(this, "init", function() {
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
      return a(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = q(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var o = J(this.currentVal, "-", this.initialVal), b = j(this.DS.stores.SettingsStore.s.zoom), n = J(J(o, "*", b), "-", o);
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
          return this._currentVal || (this._currentVal = Jt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), u;
    }(), mo = function u(c) {
      var o = this, b = c.DS, n = c.settings;
      e(this, u), i(this, "_settings", {}), i(this, "s", {}), i(this, "update", function(g) {
        var w = g.settings, $ = g.init;
        return o.DS.publish("Settings:updated:pre", h({
          settings: w
        }, $ ? {
          init: $
        } : {}));
      }), i(this, "_update", function(g) {
        for (var w = g.settings, $ = g.init, V = Qs(w, $), X = function() {
          var ut, Rt = R(ht[W], 2), nt = Rt[0], It = Rt[1];
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
        }, W = 0, ht = Object.entries(V); W < ht.length; W++)
          X();
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
          return this.SelectedSet.addAll(Zt(o)), n || this.addSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(o) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Zt(o)), n && this.removeSelectables(o), b && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(o) {
          var b = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Zt(o).forEach(function(w) {
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
          var g = Zt(o);
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
          return this.SelectableSet.deleteAll(Zt(o)), b && this.removeSelection(o), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), o;
        }
      }]), u;
    }();
    return vo;
  });
})(Zr);
const di = Zr.exports, Qr = (r, t, e, s, a) => (t = Math, e = t.log, s = 1024, a = e(r) / e(s) | 0, r / t.pow(s, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ts = (r, t = null) => {
  var e;
  return new Date(r * 1e3).toLocaleString((e = t != null ? t : navigator.language) != null ? e : "en-US");
}, hi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, fi = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), pi = [
  fi
], gi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, mi = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), vi = [
  mi
], bi = {
  name: "VFSortIcon"
}, _e = /* @__PURE__ */ Object.assign(bi, {
  props: { direction: String },
  setup(r) {
    return (t, e) => (x(), D("div", null, [
      r.direction == "down" ? (x(), D("svg", hi, pi)) : K("", !0),
      r.direction == "up" ? (x(), D("svg", gi, vi)) : K("", !0)
    ]));
  }
}), yi = ["onClick"], wi = {
  name: "VFToast.vue"
}, xi = /* @__PURE__ */ Object.assign(wi, {
  setup(r) {
    const t = I("emitter"), { getStore: e } = I("storage"), s = L(e("full-screen", !1)), a = (v) => v == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = L([]), l = (v) => {
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
    }), (v, p) => (x(), D("div", {
      class: gt([s.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Dt(wo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: Y(() => [
          (x(!0), D(lt, null, xt(i.value, (f, m) => (x(), D("div", {
            onClick: (y) => l(m),
            key: f,
            class: gt([a(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, C(f.label), 11, yi))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), qt = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Si } = At(), Mr = (r, t, e) => Si.value + "?" + qt({ q: "preview", adapter: r, path: t, token: e }), Ht = typeof window < "u", es = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), rs = Ht && "IntersectionObserver" in window, ss = Ht && "classList" in document.createElement("p"), os = Ht && window.devicePixelRatio > 1, _i = {
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
}, is = (r) => Object.assign({}, _i, r), $r = function(r, t) {
  let e;
  const s = "LazyLoad::Initialized", a = new r(t);
  try {
    e = new CustomEvent(s, { detail: { instance: a } });
  } catch {
    e = document.createEvent("CustomEvent"), e.initCustomEvent(s, !1, !1, { instance: a });
  }
  window.dispatchEvent(e);
}, ki = (r, t) => {
  if (!!t)
    if (!t.length)
      $r(r, t);
    else
      for (let e = 0, s; s = t[e]; e += 1)
        $r(r, s);
}, Ot = "src", sr = "srcset", or = "sizes", ns = "poster", be = "llOriginalAttrs", as = "data", ir = "loading", ls = "loaded", cs = "applied", Di = "entered", nr = "error", us = "native", ds = "data-", hs = "ll-status", mt = (r, t) => r.getAttribute(ds + t), Ci = (r, t, e) => {
  var s = ds + t;
  if (e === null) {
    r.removeAttribute(s);
    return;
  }
  r.setAttribute(s, e);
}, ye = (r) => mt(r, hs), Ft = (r, t) => Ci(r, hs, t), Ie = (r) => Ft(r, null), ar = (r) => ye(r) === null, Mi = (r) => ye(r) === ir, $i = (r) => ye(r) === nr, lr = (r) => ye(r) === us, Ei = [ir, ls, cs, nr], Ai = (r) => Ei.indexOf(ye(r)) >= 0, zt = (r, t, e, s) => {
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
}, ae = (r, t) => {
  if (ss) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, Mt = (r, t) => {
  if (ss) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Ti = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Li = (r) => {
  delete r.llTempImage;
}, fs = (r) => r.llTempImage, Pe = (r, t) => {
  if (!t)
    return;
  const e = t._observer;
  !e || e.unobserve(r);
}, Oi = (r) => {
  r.disconnect();
}, Ii = (r, t, e) => {
  t.unobserve_entered && Pe(r, e);
}, cr = (r, t) => {
  !r || (r.loadingCount += t);
}, Pi = (r) => {
  !r || (r.toLoadCount -= 1);
}, ps = (r, t) => {
  !r || (r.toLoadCount = t);
}, Ni = (r) => r.loadingCount > 0, ji = (r) => r.toLoadCount > 0, gs = (r) => {
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
}, Ne = [Ot], vs = [Ot, ns], ge = [Ot, sr, or], bs = [as], je = (r) => !!r[be], ys = (r) => r[be], ws = (r) => delete r[be], oe = (r, t) => {
  if (je(r))
    return;
  const e = {};
  t.forEach((s) => {
    e[s] = r.getAttribute(s);
  }), r[be] = e;
}, Vi = (r) => {
  je(r) || (r[be] = { backgroundImage: r.style.backgroundImage });
}, Hi = (r, t, e) => {
  if (!e) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, e);
}, Wt = (r, t) => {
  if (!je(r))
    return;
  const e = ys(r);
  t.forEach((s) => {
    Hi(r, s, e[s]);
  });
}, zi = (r) => {
  if (!je(r))
    return;
  const t = ys(r);
  r.style.backgroundImage = t.backgroundImage;
}, xs = (r, t, e) => {
  ae(r, t.class_applied), Ft(r, cs), e && (t.unobserve_completed && Pe(r, t), zt(t.callback_applied, r, e));
}, Ss = (r, t, e) => {
  ae(r, t.class_loading), Ft(r, ir), e && (cr(e, 1), zt(t.callback_loading, r, e));
}, Vt = (r, t, e) => {
  !e || r.setAttribute(t, e);
}, Er = (r, t) => {
  Vt(r, or, mt(r, t.data_sizes)), Vt(r, sr, mt(r, t.data_srcset)), Vt(r, Ot, mt(r, t.data_src));
}, Ri = (r, t) => {
  ur(r, (e) => {
    oe(e, ge), Er(e, t);
  }), oe(r, ge), Er(r, t);
}, Bi = (r, t) => {
  oe(r, Ne), Vt(r, Ot, mt(r, t.data_src));
}, Ui = (r, t) => {
  ms(r, (e) => {
    oe(e, Ne), Vt(e, Ot, mt(e, t.data_src));
  }), oe(r, vs), Vt(r, ns, mt(r, t.data_poster)), Vt(r, Ot, mt(r, t.data_src)), r.load();
}, Ki = (r, t) => {
  oe(r, bs), Vt(r, as, mt(r, t.data_src));
}, Yi = (r, t, e) => {
  const s = mt(r, t.data_bg), a = mt(r, t.data_bg_hidpi), i = os && a ? a : s;
  !i || (r.style.backgroundImage = `url("${i}")`, fs(r).setAttribute(Ot, i), Ss(r, t, e));
}, Wi = (r, t, e) => {
  const s = mt(r, t.data_bg_multi), a = mt(r, t.data_bg_multi_hidpi), i = os && a ? a : s;
  !i || (r.style.backgroundImage = i, xs(r, t, e));
}, Xi = (r, t, e) => {
  const s = mt(r, t.data_bg_set);
  if (!s)
    return;
  const a = s.split("|");
  let i = a.map((l) => `image-set(${l})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = a.map((l) => `-webkit-image-set(${l})`), r.style.backgroundImage = i.join()), xs(r, t, e);
}, _s = {
  IMG: Ri,
  IFRAME: Bi,
  VIDEO: Ui,
  OBJECT: Ki
}, qi = (r, t) => {
  const e = _s[r.tagName];
  !e || e(r, t);
}, Fi = (r, t, e) => {
  const s = _s[r.tagName];
  !s || (s(r, t), Ss(r, t, e));
}, Gi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Ji = (r) => Gi.indexOf(r.tagName) > -1, ks = (r, t) => {
  t && !Ni(t) && !ji(t) && zt(r.callback_finish, t);
}, Ar = (r, t, e) => {
  r.addEventListener(t, e), r.llEvLisnrs[t] = e;
}, Zi = (r, t, e) => {
  r.removeEventListener(t, e);
}, dr = (r) => !!r.llEvLisnrs, Qi = (r, t, e) => {
  dr(r) || (r.llEvLisnrs = {});
  const s = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Ar(r, s, t), Ar(r, "error", e);
}, Xe = (r) => {
  if (!dr(r))
    return;
  const t = r.llEvLisnrs;
  for (let e in t) {
    const s = t[e];
    Zi(r, e, s);
  }
  delete r.llEvLisnrs;
}, Ds = (r, t, e) => {
  Li(r), cr(e, -1), Pi(e), Mt(r, t.class_loading), t.unobserve_completed && Pe(r, e);
}, tn = (r, t, e, s) => {
  const a = lr(t);
  Ds(t, e, s), ae(t, e.class_loaded), Ft(t, ls), zt(e.callback_loaded, t, s), a || ks(e, s);
}, en = (r, t, e, s) => {
  const a = lr(t);
  Ds(t, e, s), ae(t, e.class_error), Ft(t, nr), zt(e.callback_error, t, s), e.restore_on_error && Wt(t, ge), a || ks(e, s);
}, hr = (r, t, e) => {
  const s = fs(r) || r;
  if (dr(s))
    return;
  Qi(s, (l) => {
    tn(l, r, t, e), Xe(s);
  }, (l) => {
    en(l, r, t, e), Xe(s);
  });
}, rn = (r, t, e) => {
  Ti(r), hr(r, t, e), Vi(r), Yi(r, t, e), Wi(r, t, e), Xi(r, t, e);
}, sn = (r, t, e) => {
  hr(r, t, e), Fi(r, t, e);
}, fr = (r, t, e) => {
  Ji(r) ? sn(r, t, e) : rn(r, t, e);
}, on = (r, t, e) => {
  r.setAttribute("loading", "lazy"), hr(r, t, e), qi(r, t), Ft(r, us);
}, Tr = (r) => {
  r.removeAttribute(Ot), r.removeAttribute(sr), r.removeAttribute(or);
}, nn = (r) => {
  ur(r, (t) => {
    Tr(t);
  }), Tr(r);
}, Cs = (r) => {
  ur(r, (t) => {
    Wt(t, ge);
  }), Wt(r, ge);
}, an = (r) => {
  ms(r, (t) => {
    Wt(t, Ne);
  }), Wt(r, vs), r.load();
}, ln = (r) => {
  Wt(r, Ne);
}, cn = (r) => {
  Wt(r, bs);
}, un = {
  IMG: Cs,
  IFRAME: ln,
  VIDEO: an,
  OBJECT: cn
}, dn = (r) => {
  const t = un[r.tagName];
  if (!t) {
    zi(r);
    return;
  }
  t(r);
}, hn = (r, t) => {
  ar(r) || lr(r) || (Mt(r, t.class_entered), Mt(r, t.class_exited), Mt(r, t.class_applied), Mt(r, t.class_loading), Mt(r, t.class_loaded), Mt(r, t.class_error));
}, fn = (r, t) => {
  dn(r), hn(r, t), Ie(r), ws(r);
}, pn = (r, t, e, s) => {
  !e.cancel_on_exit || !Mi(r) || r.tagName === "IMG" && (Xe(r), nn(r), Cs(r), Mt(r, e.class_loading), cr(s, -1), Ie(r), zt(e.callback_cancel, r, t, s));
}, gn = (r, t, e, s) => {
  const a = Ai(r);
  Ft(r, Di), ae(r, e.class_entered), Mt(r, e.class_exited), Ii(r, e, s), zt(e.callback_enter, r, t, s), !a && fr(r, e, s);
}, mn = (r, t, e, s) => {
  ar(r) || (ae(r, e.class_exited), pn(r, t, e, s), zt(e.callback_exit, r, t, s));
}, vn = ["IMG", "IFRAME", "VIDEO"], Ms = (r) => r.use_native && "loading" in HTMLImageElement.prototype, bn = (r, t, e) => {
  r.forEach((s) => {
    vn.indexOf(s.tagName) !== -1 && on(s, t, e);
  }), ps(e, 0);
}, yn = (r) => r.isIntersecting || r.intersectionRatio > 0, wn = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), xn = (r, t, e) => {
  r.forEach(
    (s) => yn(s) ? gn(s.target, s, t, e) : mn(s.target, s, t, e)
  );
}, Sn = (r, t) => {
  t.forEach((e) => {
    r.observe(e);
  });
}, _n = (r, t) => {
  Oi(r), Sn(r, t);
}, kn = (r, t) => {
  !rs || Ms(r) || (t._observer = new IntersectionObserver((e) => {
    xn(e, r, t);
  }, wn(r)));
}, $s = (r) => Array.prototype.slice.call(r), Ae = (r) => r.container.querySelectorAll(r.elements_selector), Dn = (r) => $s(r).filter(ar), Cn = (r) => $i(r), Mn = (r) => $s(r).filter(Cn), Lr = (r, t) => Dn(r || Ae(t)), $n = (r, t) => {
  Mn(Ae(r)).forEach((s) => {
    Mt(s, r.class_error), Ie(s);
  }), t.update();
}, En = (r, t) => {
  !Ht || (t._onlineHandler = () => {
    $n(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, An = (r) => {
  !Ht || window.removeEventListener("online", r._onlineHandler);
}, we = function(r, t) {
  const e = is(r);
  this._settings = e, this.loadingCount = 0, kn(e, this), En(e, this), this.update(t);
};
we.prototype = {
  update: function(r) {
    const t = this._settings, e = Lr(r, t);
    if (ps(this, e.length), es || !rs) {
      this.loadAll(e);
      return;
    }
    if (Ms(t)) {
      bn(e, t, this);
      return;
    }
    _n(this._observer, e);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), An(this), Ae(this._settings).forEach((r) => {
      ws(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Lr(r, t).forEach((s) => {
      Pe(s, this), fr(s, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ae(r).forEach((t) => {
      fn(t, r);
    });
  }
};
we.load = (r, t) => {
  const e = is(t);
  fr(r, e);
};
we.resetStatus = (r) => {
  Ie(r);
};
Ht && ki(we, window.lazyLoadOptions);
const Tn = { class: "relative flex-auto overflow-hidden" }, Ln = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, On = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], In = { class: "grid grid-cols-12 items-center" }, Pn = { class: "flex col-span-7 items-center" }, Nn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, jn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Vn = [
  jn
], Hn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, zn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Rn = [
  zn
], Bn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Un = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Kn = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Yn = { class: "grid grid-cols-12 items-center" }, Wn = { class: "flex col-span-7 items-center" }, Xn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fn = [
  qn
], Gn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jn = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Zn = [
  Jn
], Qn = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = { class: "col-span-2 text-center" }, ea = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], sa = { class: "relative" }, oa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ia = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), na = [
  ia
], aa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, la = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ca = [
  la
], ua = {
  key: 2,
  class: "absolute block top-1/2 w-full text-center text-neutral-500"
}, da = { class: "break-all" }, ha = {
  name: "VFExplorer"
}, fa = /* @__PURE__ */ Object.assign(ha, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r;
    I("accessToken");
    const e = I("emitter"), { setStore: s, getStore: a } = I("storage"), i = I("adapter"), l = (T) => T == null ? void 0 : T.substring(0, 3), h = (T) => T.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), v = L(null), p = L(null), f = L(0), m = L(null), { t: y } = I("i18n"), E = Math.floor(Math.random() * 2 ** 32), k = L(a("full-screen", !1)), M = new we();
    e.on("vf-fullscreen-toggle", () => {
      v.value.style.height = null, k.value = !k.value, s("full-screen", k.value);
    });
    const A = L("");
    e.on("vf-search-query", ({ newQuery: T }) => {
      A.value = T, T ? e.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: T
        },
        onSuccess: (H) => {
          H.files.length || e.emit("vf-toast-push", { label: y("No search result found.") });
        }
      }) : e.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let z = null;
    const P = () => {
      z && clearTimeout(z);
    }, O = L(!0), R = (T) => {
      T.touches.length > 1 && (O.value ? (m.value.stop(), e.emit("vf-toast-push", { label: y("Drag&Drop: off") })) : (m.value.start(), e.emit("vf-toast-push", { label: y("Drag&Drop: on") }), e.emit("vf-explorer-update")), O.value = !O.value);
    }, B = (T) => {
      z = setTimeout(() => {
        const H = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: T.target.getBoundingClientRect().x,
          clientY: T.target.getBoundingClientRect().y
        });
        T.target.dispatchEvent(H);
      }, 500);
    }, _ = (T) => {
      T.type == "dir" ? (e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: T.path } })) : e.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: T });
    }, N = Me({ active: !1, column: "", order: "" }), G = (T = !0) => {
      let H = [...t.data.files], j = N.column, ct = N.order == "asc" ? 1 : -1;
      if (!T)
        return H;
      const q = (tt, St) => typeof tt == "string" && typeof St == "string" ? tt.toLowerCase().localeCompare(St.toLowerCase()) : tt < St ? -1 : tt > St ? 1 : 0;
      return N.active && (H = H.slice().sort((tt, St) => q(tt[j], St[j]) * ct)), H;
    }, ot = (T) => {
      N.active && N.column == T ? (N.active = N.order == "asc", N.column = T, N.order = "desc") : (N.active = !0, N.column = T, N.order = "asc");
    }, it = () => m.value.getSelection().map((T) => JSON.parse(T.dataset.item)), dt = (T, H) => {
      if (T.altKey || T.ctrlKey || T.metaKey)
        return T.preventDefault(), !1;
      T.dataTransfer.setDragImage(p.value, 0, 15), T.dataTransfer.effectAllowed = "all", T.dataTransfer.dropEffect = "copy", T.dataTransfer.setData("items", JSON.stringify(it()));
    }, bt = (T, H) => {
      T.preventDefault();
      let j = JSON.parse(T.dataTransfer.getData("items"));
      if (j.find((ct) => ct.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", { type: "move", items: { from: j, to: H } });
    }, vt = (T, H) => {
      T.preventDefault(), !H || H.type !== "dir" || m.value.getSelection().find((j) => j == T.currentTarget) ? (T.dataTransfer.dropEffect = "none", T.dataTransfer.effectAllowed = "none") : T.dataTransfer.dropEffect = "copy";
    };
    return Ct(() => {
      m.value = new di({
        area: v.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), e.on("vf-explorer-update", () => Oe(() => {
        m.value.clearSelection(), m.value.setSelectables(document.getElementsByClassName("vf-item-" + E));
      })), m.value.subscribe("predragstart", ({ event: T, isDragging: H }) => {
        if (H)
          f.value = m.value.getSelection().length, m.value.break();
        else {
          const j = T.target.offsetWidth - T.offsetX, ct = T.target.offsetHeight - T.offsetY;
          j < 15 && ct < 15 && (m.value.clearSelection(), m.value.break());
        }
      }), m.value.subscribe("predragmove", ({ isDragging: T }) => {
        T && m.value.break();
      }), m.value.subscribe("callback", ({ items: T, event: H, isDragging: j }) => {
        e.emit("vf-nodes-selected", it()), f.value = m.value.getSelection().length;
      });
    }), xo(() => {
      m.value.Area.reset(), m.value.SelectorArea.updatePos(), M.update();
    }), Ct(() => {
      Le(() => t.view, () => e.emit("vf-explorer-update"));
    }), (T, H) => (x(), D("div", Tn, [
      r.view == "list" || A.value.length ? (x(), D("div", Ln, [
        d("div", {
          onClick: H[0] || (H[0] = (j) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(C(S(y)("Name")) + " ", 1),
          wt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "basename"]
          ])
        ]),
        A.value.length ? K("", !0) : (x(), D("div", {
          key: 0,
          onClick: H[1] || (H[1] = (j) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(C(S(y)("Size")) + " ", 1),
          wt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "file_size"]
          ])
        ])),
        A.value.length ? K("", !0) : (x(), D("div", {
          key: 1,
          onClick: H[2] || (H[2] = (j) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(C(S(y)("Date")) + " ", 1),
          wt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "last_modified"]
          ])
        ])),
        A.value.length ? (x(), D("div", {
          key: 2,
          onClick: H[3] || (H[3] = (j) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(C(S(y)("Filepath")) + " ", 1),
          wt(Dt(_e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Se, N.active && N.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
      d("div", {
        onTouchstart: R,
        onContextmenu: H[10] || (H[10] = Yt((j) => S(e).emit("vf-contextmenu-show", { event: j, area: v.value, items: it() }), ["self", "prevent"])),
        class: gt([k.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: v
      }, [
        A.value.length ? (x(!0), D(lt, { key: 0 }, xt(G(), (j, ct) => (x(), D("div", {
          onDblclick: (q) => _(j),
          onTouchstart: H[4] || (H[4] = (q) => B(q)),
          onTouchend: H[5] || (H[5] = (q) => P()),
          onContextmenu: Yt((q) => S(e).emit("vf-contextmenu-show", { event: q, area: v.value, items: it(), target: j }), ["prevent"]),
          class: gt(["vf-item-" + S(E), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": ct
        }, [
          d("div", In, [
            d("div", Pn, [
              j.type == "dir" ? (x(), D("svg", Nn, Vn)) : (x(), D("svg", Hn, Rn)),
              d("span", Bn, C(j.basename), 1)
            ]),
            d("div", Un, C(j.path), 1)
          ])
        ], 42, On))), 256)) : K("", !0),
        r.view == "list" && !A.value.length ? (x(!0), D(lt, { key: 1 }, xt(G(), (j, ct) => (x(), D("div", {
          draggable: "true",
          onDblclick: (q) => _(j),
          onTouchstart: H[6] || (H[6] = (q) => B(q)),
          onTouchend: H[7] || (H[7] = (q) => P()),
          onContextmenu: Yt((q) => S(e).emit("vf-contextmenu-show", { event: q, area: v.value, items: it(), target: j }), ["prevent"]),
          onDragstart: (q) => dt(q),
          onDragover: (q) => vt(q, j),
          onDrop: (q) => bt(q, j),
          class: gt(["vf-item-" + S(E), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": ct
        }, [
          d("div", Yn, [
            d("div", Wn, [
              j.type == "dir" ? (x(), D("svg", Xn, Fn)) : (x(), D("svg", Gn, Zn)),
              d("span", Qn, C(j.basename), 1)
            ]),
            d("div", ta, C(j.file_size ? S(Qr)(j.file_size) : ""), 1),
            d("div", ea, C(S(ts)(j.last_modified)), 1)
          ])
        ], 42, Kn))), 256)) : K("", !0),
        r.view == "grid" && !A.value.length ? (x(!0), D(lt, { key: 2 }, xt(G(!1), (j, ct) => {
          var q;
          return x(), D("div", {
            draggable: "true",
            onDblclick: (tt) => _(j),
            onTouchstart: H[8] || (H[8] = (tt) => B(tt)),
            onTouchend: H[9] || (H[9] = (tt) => P()),
            onContextmenu: Yt((tt) => S(e).emit("vf-contextmenu-show", { event: tt, area: v.value, items: it(), target: j }), ["prevent"]),
            onDragstart: (tt) => dt(tt),
            onDragover: (tt) => vt(tt, j),
            onDrop: (tt) => bt(tt, j),
            class: gt(["vf-item-" + S(E), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": j.type,
            "data-item": JSON.stringify(j),
            "data-index": ct
          }, [
            d("div", null, [
              d("div", sa, [
                j.type == "dir" ? (x(), D("svg", oa, na)) : (x(), D("svg", aa, ca)),
                !((q = j.mime_type) != null ? q : "").startsWith("image") && j.type != "dir" ? (x(), D("div", ua, C(l(j.extension)), 1)) : K("", !0)
              ]),
              d("span", da, C(h(j.basename)), 1)
            ])
          ], 42, ra);
        }), 256)) : K("", !0)
      ], 34),
      Dt(xi)
    ]));
  }
}), pa = "1.1.15", ga = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, ma = { class: "flex leading-5 items-center" }, va = ["aria-label"], ba = /* @__PURE__ */ d("svg", {
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
], -1), ya = [
  ba
], wa = ["value"], xa = { class: "ml-3" }, Sa = { key: 0 }, _a = { class: "ml-1" }, ka = { class: "flex leading-5 items-center" }, Da = {
  value: "",
  disabled: ""
}, Ca = /* @__PURE__ */ d("option", { value: "en" }, "English", -1), Ma = /* @__PURE__ */ d("option", { value: "fr" }, "French", -1), $a = /* @__PURE__ */ d("option", { value: "ru" }, "Russian", -1), Ea = /* @__PURE__ */ d("option", { value: "tr" }, "Turkish", -1), Aa = ["aria-label"], Ta = /* @__PURE__ */ d("svg", {
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
], -1), La = [
  Ta
], Oa = {
  name: "VFStatusbar"
}, Ia = /* @__PURE__ */ Object.assign(Oa, {
  props: {
    data: Object
  },
  setup(r) {
    const t = I("emitter"), { getStore: e, setStore: s } = I("storage"), a = L(0), i = I("adapter"), { t: l, changeLocale: h } = I("i18n"), v = L(e("locale", "")), p = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), s("adapter", i.value);
    };
    t.on("vf-nodes-selected", (m) => {
      a.value = m.length;
    });
    const f = L("");
    return t.on("vf-search-query", ({ newQuery: m }) => {
      f.value = m;
    }), (m, y) => (x(), D("div", ga, [
      d("div", ma, [
        d("div", {
          class: "mx-2",
          "aria-label": S(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, ya, 8, va),
        wt(d("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (E) => Gr(i) ? i.value = E : null),
          onChange: p,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (x(!0), D(lt, null, xt(r.data.storages, (E) => (x(), D("option", { value: E }, C(E), 9, wa))), 256))
        ], 544), [
          [Dr, S(i)]
        ]),
        d("div", xa, [
          f.value.length ? (x(), D("span", Sa, C(r.data.files.length) + " items found. ", 1)) : K("", !0),
          d("span", _a, C(a.value > 0 ? a.value + " " + S(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      d("div", ka, [
        wt(d("select", {
          "onUpdate:modelValue": y[1] || (y[1] = (E) => v.value = E),
          onChange: y[2] || (y[2] = (E) => S(h)(E.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          d("option", Da, C(S(l)("Language")), 1),
          Ca,
          Ma,
          $a,
          Ea
        ], 544), [
          [Dr, v.value]
        ]),
        d("span", {
          class: "mr-1",
          "aria-label": S(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: y[3] || (y[3] = (E) => S(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + S(pa), message: S(l)("Vuefinder is a file manager component for vue 3.") }))
        }, La, 8, Aa)
      ])
    ]));
  }
}), Pa = (r, t = 0, e = !1) => {
  let s;
  return (...a) => {
    e && !s && r(...a), clearTimeout(s), s = setTimeout(() => {
      r(...a);
    }, t);
  };
}, Na = (r, t, e) => {
  const s = L(r);
  return So((i, l) => ({
    get() {
      return i(), s.value;
    },
    set: Pa(
      (h) => {
        s.value = h, l();
      },
      t,
      e
    )
  }));
}, ja = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Va = ["aria-label"], Ha = /* @__PURE__ */ d("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), za = [
  Ha
], Ra = ["aria-label"], Ba = /* @__PURE__ */ d("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ua = [
  Ba
], Ka = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, Ya = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Wa = [
  Ya
], Xa = /* @__PURE__ */ d("span", { class: "vf-flex-space" }, null, -1), qa = ["onClick"], Fa = /* @__PURE__ */ d("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Ga = [
  Fa
], Ja = { class: "flex leading-5" }, Za = /* @__PURE__ */ d("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Qa = ["title", "onClick"], tl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, el = /* @__PURE__ */ d("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), rl = /* @__PURE__ */ d("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), sl = [
  el,
  rl
], ol = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, il = /* @__PURE__ */ d("svg", {
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
], -1), nl = ["onKeydown", "placeholder"], al = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), ll = [
  al
], cl = {
  name: "VFBreadcrumb"
}, ul = /* @__PURE__ */ Object.assign(cl, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), a = L(null), i = L([]), l = L(!1), h = L(null), { t: v } = I("i18n"), p = I("loadingState");
    e.on("vf-explorer-update", () => {
      var R;
      let P = [], O = [];
      a.value = (R = t.data.dirname) != null ? R : s.value + "://", a.value.length == 0 && (i.value = []), a.value.replace(s.value + "://", "").split("/").forEach(function(B) {
        P.push(B), P.join("/") != "" && O.push({
          basename: B,
          name: B,
          path: s.value + "://" + P.join("/"),
          type: "dir"
        });
      }), O.length > 4 && (O = O.slice(-5), O[0].name = ".."), i.value = O;
    });
    const f = () => {
      l.value = !1, y.value = "";
    };
    e.on("vf-search-exit", () => {
      f();
    });
    const m = () => {
      l.value = !0, Oe(() => h.value.focus());
    }, y = Na("", 400), E = () => p.value;
    Le(y, (P) => {
      e.emit("vf-toast-clear"), e.emit("vf-search-query", { newQuery: P });
    });
    const k = () => i.value.length && !l.value, M = (P) => {
      var R;
      P.preventDefault();
      let O = JSON.parse(P.dataTransfer.getData("items"));
      if (O.find((B) => B.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", {
        type: "move",
        items: { from: O, to: (R = i.value[i.value.length - 2]) != null ? R : { path: s.value + "://" } }
      });
    }, A = (P) => {
      P.preventDefault(), k() ? P.dataTransfer.dropEffect = "copy" : (P.dataTransfer.dropEffect = "none", P.dataTransfer.effectAllowed = "none");
    }, z = () => {
      y.value == "" && f();
    };
    return (P, O) => (x(), D("div", ja, [
      d("span", {
        "aria-label": S(v)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), D("svg", {
          onDragover: O[0] || (O[0] = (R) => A(R)),
          onDrop: O[1] || (O[1] = (R) => M(R)),
          onClick: O[2] || (O[2] = (R) => {
            var B, _;
            return !k() || S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: (_ = (B = i.value[i.value.length - 2]) == null ? void 0 : B.path) != null ? _ : S(s) + "://" } });
          }),
          class: gt(["h-6 w-6 p-0.5 rounded", k() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, za, 34))
      ], 8, Va),
      E() ? (x(), D("span", Ka, [
        (x(), D("svg", {
          onClick: O[4] || (O[4] = (R) => S(e).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Wa))
      ])) : (x(), D("span", {
        key: 0,
        "aria-label": S(v)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (x(), D("svg", {
          onClick: O[3] || (O[3] = (R) => {
            S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ua))
      ], 8, Ra)),
      Xa,
      l.value ? (x(), D("div", ol, [
        il,
        wt(d("input", {
          ref_key: "searchInput",
          ref: h,
          onKeydown: ie(f, ["esc"]),
          onBlur: z,
          "onUpdate:modelValue": O[6] || (O[6] = (R) => Gr(y) ? y.value = R : null),
          placeholder: S(v)("Search anything.."),
          class: "flex-1 ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, nl), [
          [ne, S(y)]
        ]),
        (x(), D("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, ll))
      ])) : (x(), D("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Yt(m, ["self"])
      }, [
        (x(), D("svg", {
          onClick: O[5] || (O[5] = (R) => S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ga)),
        d("div", Ja, [
          (x(!0), D(lt, null, xt(i.value, (R, B) => (x(), D("div", { key: B }, [
            Za,
            d("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: R.basename,
              onClick: (_) => S(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: R.path } })
            }, C(R.name), 9, Qa)
          ]))), 128))
        ]),
        E() ? (x(), D("svg", tl, sl)) : K("", !0)
      ], 8, qa))
    ]));
  }
}), dl = ["onClick"], hl = /* @__PURE__ */ d("span", { class: "px-1" }, null, -1), fl = {
  name: "VFContextMenu"
}, pl = /* @__PURE__ */ Object.assign(fl, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter"), s = L(null), { apiUrl: a } = At(), i = Me({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = L([]);
    e.on("vf-context-selected", (y) => {
      l.value = y;
    });
    const { t: h } = I("i18n"), v = {
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
          const y = a.value + "?" + qt({ q: "download", adapter: t.current.adapter, path: l.value[0].path });
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
    }, f = L("");
    e.on("vf-search-query", ({ newQuery: y }) => {
      f.value = y;
    }), e.on("vf-contextmenu-show", ({ event: y, area: E, items: k, target: M = null }) => {
      if (i.items = [], f.value)
        if (M)
          i.items.push(v.openDir), e.emit("vf-context-selected", [M]);
        else
          return;
      else
        !M && !f.value ? (i.items.push(v.refresh), i.items.push(v.newfolder), e.emit("vf-context-selected", [])) : k.length > 1 && k.some((A) => A.path === M.path) ? (i.items.push(v.refresh), i.items.push(v.archive), i.items.push(v.delete), e.emit("vf-context-selected", k)) : (M.type == "dir" ? i.items.push(v.open) : (i.items.push(v.preview), i.items.push(v.download)), i.items.push(v.rename), M.mime_type == "application/zip" ? i.items.push(v.unarchive) : i.items.push(v.archive), i.items.push(v.delete), e.emit("vf-context-selected", [M]));
      m(y, E);
    }), e.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const m = (y, E) => {
      i.active = !0, Oe(() => {
        let k = E.getBoundingClientRect(), M = y.pageX, A = y.pageY, z = s.value.offsetHeight, P = s.value.offsetWidth;
        M = k.right - y.pageX + window.scrollX < P ? M - P : M, A = k.bottom - y.pageY + window.scrollY < z ? A - z : A, i.positions = {
          left: M + "px",
          top: A + "px"
        };
      });
    };
    return (y, E) => i.active ? (x(), D("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: Jr(i.positions)
    }, [
      (x(!0), D(lt, null, xt(i.items, (k) => (x(), D("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: k.title,
        onClick: (M) => p(k)
      }, [
        hl,
        d("span", null, C(k.title()), 1)
      ], 8, dl))), 128))
    ], 4)) : K("", !0);
  }
}), gl = (r, t) => {
  const e = r[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((s, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function ml(r) {
  const t = await gl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.7a04810c.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.818dacaf.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function vl(r, t, e) {
  const { getStore: s, setStore: a } = We(r), i = L({}), l = (p) => {
    ml(p).then((f) => {
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
const bl = { class: "vuefinder" }, yl = /* @__PURE__ */ d("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), wl = {
  name: "VueFinder"
}, xl = /* @__PURE__ */ Object.assign(wl, {
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
    const t = r, e = ko(), { setStore: s, getStore: a } = We(t.id), i = L(a("adapter"));
    Bt("emitter", e), Bt("storage", We(t.id)), Bt("postData", t.postData), Bt("adapter", i);
    const l = vl(t.id, t.locale, e);
    Bt("i18n", l);
    const { apiUrl: h, setApiUrl: v } = At();
    v(t.url);
    const p = Me({ adapter: i.value, storages: [], dirname: ".", files: [] }), f = L(a("viewport", "grid")), m = L(a("darkMode", t.dark));
    e.on("vf-darkMode-toggle", () => {
      m.value = !m.value, s("darkMode", m.value);
    });
    const y = L(!1);
    Bt("loadingState", y), Bt("accessToken", t.accessToken);
    const E = L(a("full-screen", !1));
    e.on("vf-fullscreen-toggle", () => {
      E.value = !E.value, s("full-screen", E.value);
    }), e.on("vf-view-toggle", (P) => {
      f.value = P;
    });
    const k = Me({
      active: !1,
      type: "delete",
      data: {}
    });
    e.on("vf-modal-close", () => {
      k.active = !1;
    }), e.on("vf-modal-show", (P) => {
      (!t.hook || t.hook.call(null, "vf-modal-show", P, e) !== !1) && (k.active = !0, k.type = P.type, k.data = P);
    });
    const M = (P) => {
      Object.assign(p, P), e.emit("vf-nodes-selected", {}), e.emit("vf-explorer-update");
    };
    let A;
    e.on("vf-fetch-abort", () => {
      A.abort(), y.value = !1;
    });
    const z = L(!1);
    return e.on("vf-show-hidden-toggle", () => {
      z.value = !z.value, e.emit("vf-fetch", { params: { q: "index", adapter: p.adapter, path: p.dirname } });
    }), e.on("vf-fetch", ({ params: P, onSuccess: O = null, onError: R = null }) => {
      ["index", "search"].includes(P.q) && (A && A.abort(), y.value = !0), A = new AbortController();
      const B = A.signal;
      P.hidden = z.value === !0, Ee(h.value, { params: P, signal: B, headers: { Authorization: t.accessToken ? "Bearer " + t.accessToken : null } }).then((_) => {
        i.value = _.adapter, ["index", "search"].includes(P.q) && (y.value = !1), e.emit("vf-modal-close"), M(_), O(_);
      }).catch((_) => {
        R && R(_);
      }).finally(() => {
      });
    }), e.on("vf-download", (P) => {
      document.getElementById("download_frame").src = P, e.emit("vf-modal-close");
    }), Ct(() => {
      e.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (P, O) => (x(), D("div", bl, [
      d("div", {
        class: gt(m.value ? "dark" : "")
      }, [
        d("div", {
          class: gt([E.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: Jr(E.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: O[0] || (O[0] = (R) => S(e).emit("vf-contextmenu-hide")),
          onTouchstart: O[1] || (O[1] = (R) => S(e).emit("vf-contextmenu-hide"))
        }, [
          Dt(ci, { data: p }, null, 8, ["data"]),
          Dt(ul, { data: p }, null, 8, ["data"]),
          Dt(fa, {
            view: f.value,
            data: p
          }, null, 8, ["view", "data"]),
          Dt(Ia, { data: p }, null, 8, ["data"])
        ], 38),
        k.active ? (x(), F(_o("v-f-modal-" + k.type), {
          key: 0,
          selection: k.data,
          current: p
        }, null, 8, ["selection", "current"])) : K("", !0),
        Dt(pl, { current: p }, null, 8, ["current"]),
        yl
      ], 2)
    ]));
  }
}), Sl = /* @__PURE__ */ d("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), _l = { class: "fixed z-10 inset-0 overflow-hidden" }, kl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Dl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Cl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Tt = {
  __name: "ModalLayout",
  setup(r) {
    const t = I("emitter");
    return Ct(() => {
      const e = document.querySelector(".v-f-modal input");
      e && e.focus();
    }), (e, s) => (x(), D("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: s[1] || (s[1] = ie((a) => S(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Sl,
      d("div", _l, [
        d("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: s[0] || (s[0] = Yt((a) => S(t).emit("vf-modal-close"), ["self"]))
        }, [
          d("div", kl, [
            d("div", Dl, [
              Ye(e.$slots, "default")
            ]),
            d("div", Cl, [
              Ye(e.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Ml = ["aria-label"], $l = /* @__PURE__ */ d("svg", {
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
], -1), El = [
  $l
], Al = {
  name: "Message"
}, Lt = /* @__PURE__ */ Object.assign(Al, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var h;
    const { t: e } = I("i18n"), s = L(!1), a = L(null), i = L((h = a.value) == null ? void 0 : h.strMessage);
    Le(i, () => s.value = !1);
    const l = () => {
      t("hidden"), s.value = !0;
    };
    return (v, p) => (x(), D("div", null, [
      s.value ? K("", !0) : (x(), D("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: gt(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Ye(v.$slots, "default"),
        d("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": S(e)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, El, 8, Ml)
      ], 2))
    ]));
  }
}), Tl = { class: "sm:flex sm:items-start" }, Ll = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Ol = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Il = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Pl = { class: "mt-2" }, Nl = { class: "text-sm text-gray-500" }, jl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Vl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Hl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), zl = [
  Hl
], Rl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Bl = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ul = [
  Bl
], Kl = { class: "ml-1.5" }, Yl = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Wl = {
  name: "VFModalDelete"
}, Xl = /* @__PURE__ */ Object.assign(Wl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n"), i = L(t.selection.items), l = L(""), h = () => {
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
    return (v, p) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Yes, Delete!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1),
        d("div", Yl, C(S(a)("This action cannot be undone.")), 1)
      ]),
      default: Y(() => [
        d("div", Tl, [
          Ll,
          d("div", Ol, [
            d("h3", Il, C(S(a)("Delete files")), 1),
            d("div", Pl, [
              d("p", Nl, C(S(a)("Are you sure you want to delete these files?")), 1),
              (x(!0), D(lt, null, xt(i.value, (f) => (x(), D("p", jl, [
                f.type == "dir" ? (x(), D("svg", Vl, zl)) : (x(), D("svg", Rl, Ul)),
                d("span", Kl, C(f.basename), 1)
              ]))), 256)),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), ql = { class: "sm:flex sm:items-start" }, Fl = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Gl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Jl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Zl = { class: "mt-2" }, Ql = { class: "text-sm text-gray-500" }, tc = {
  name: "VFModalMessage"
}, ec = /* @__PURE__ */ Object.assign(tc, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = I("emitter"), { t: e } = I("i18n");
    return (s, a) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: a[0] || (a[0] = (i) => S(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(e)("Close")), 1)
      ]),
      default: Y(() => {
        var i, l, h, v;
        return [
          d("div", ql, [
            Fl,
            d("div", Gl, [
              d("h3", Jl, C((l = (i = r.selection) == null ? void 0 : i.title) != null ? l : "Title"), 1),
              d("div", Zl, [
                d("p", Ql, C((v = (h = r.selection) == null ? void 0 : h.message) != null ? v : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), rc = { class: "sm:flex sm:items-start" }, sc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), oc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ic = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nc = { class: "mt-2" }, ac = { class: "text-sm text-gray-500" }, lc = ["onKeyup", "placeholder"], cc = {
  name: "VFModalNewFolder"
}, uc = /* @__PURE__ */ Object.assign(cc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n"), i = L(""), l = L(""), h = () => {
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
    return (v, p) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", rc, [
          sc,
          d("div", oc, [
            d("h3", ic, C(S(a)("New Folder")), 1),
            d("div", nc, [
              d("p", ac, C(S(a)("Create a new folder")), 1),
              wt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ie(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Folder Name"),
                type: "text"
              }, null, 40, lc), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), dc = { class: "sm:flex sm:items-start" }, hc = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), fc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, pc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, gc = { class: "mt-2" }, mc = { class: "text-sm text-gray-500" }, vc = ["onKeyup", "placeholder"], bc = {
  name: "VFModalNewFile"
}, yc = /* @__PURE__ */ Object.assign(bc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n"), i = L(""), l = L(""), h = () => {
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
    return (v, p) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Create")), 1),
        d("button", {
          type: "button",
          onClick: p[2] || (p[2] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", dc, [
          hc,
          d("div", fc, [
            d("h3", pc, C(S(a)("New File")), 1),
            d("div", gc, [
              d("p", mc, C(S(a)("Create a new file")), 1),
              wt(d("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f),
                onKeyup: ie(h, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("File Name"),
                type: "text"
              }, null, 40, vc), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: p[1] || (p[1] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), wc = { class: "flex" }, xc = ["aria-label"], Sc = { class: "ml-auto mb-2" }, _c = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, kc = { key: 1 }, Dc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, s = L(""), a = L(""), i = L(null), l = L(!1), { apiUrl: h } = At(), v = L(""), p = L(!1), { t: f } = I("i18n"), m = I("accessToken");
    Ct(() => {
      Ee(h.value, {
        params: { q: "preview", adapter: e.selection.adapter, path: e.selection.item.path },
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((M) => {
        s.value = M, t("load");
      });
    });
    const y = () => {
      l.value = !l.value, a.value = s.value, l.value == !0 && Oe(() => {
        i.value.focus();
      });
    }, E = I("postData"), k = () => {
      v.value = "", p.value = !1, Ee(h.value, {
        method: "POST",
        params: Object.assign(E, {
          q: "save",
          adapter: e.selection.adapter,
          path: e.selection.item.path,
          content: a.value
        }),
        json: !1,
        headers: { Authorization: m ? "Bearer " + m : null }
      }).then((M) => {
        v.value = f("Updated."), s.value = M, t("load"), l.value = !l.value;
      }).catch((M) => {
        v.value = f(M.message), p.value = !0;
      });
    };
    return (M, A) => (x(), D(lt, null, [
      d("div", wc, [
        d("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, xc),
        d("div", Sc, [
          l.value ? (x(), D("button", {
            key: 0,
            onClick: k,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(S(f)("Save")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: A[0] || (A[0] = (z) => y())
          }, C(l.value ? S(f)("Cancel") : S(f)("Edit")), 1)
        ])
      ]),
      d("div", null, [
        l.value ? (x(), D("div", kc, [
          wt(d("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": A[1] || (A[1] = (z) => a.value = z),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, a.value]
          ])
        ])) : (x(), D("pre", _c, C(s.value), 1)),
        v.value.length ? (x(), F(Lt, {
          key: 2,
          onHidden: A[2] || (A[2] = (z) => v.value = ""),
          error: p.value
        }, {
          default: Y(() => [
            st(C(v.value), 1)
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
function Or(r, t) {
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
    t % 2 ? Or(Object(e), !0).forEach(function(s) {
      $c(r, s, e[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Or(Object(e)).forEach(function(s) {
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
function Cc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(r, t) {
  for (var e = 0; e < t.length; e++) {
    var s = t[e];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(r, s.key, s);
  }
}
function Mc(r, t, e) {
  return t && Ir(r.prototype, t), e && Ir(r, e), r;
}
function $c(r, t, e) {
  return t in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function As(r) {
  return Ec(r) || Ac(r) || Tc(r) || Lc();
}
function Ec(r) {
  if (Array.isArray(r))
    return qe(r);
}
function Ac(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Tc(r, t) {
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
function Lc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ve = typeof window < "u" && typeof window.document < "u", Et = Ve ? window : {}, pr = Ve && Et.document.documentElement ? "ontouchstart" in Et.document.documentElement : !1, gr = Ve ? "PointerEvent" in Et : !1, Z = "cropper", mr = "all", Ts = "crop", Ls = "move", Os = "zoom", Ut = "e", Kt = "w", Qt = "s", Pt = "n", ue = "ne", de = "nw", he = "se", fe = "sw", Fe = "".concat(Z, "-crop"), Pr = "".concat(Z, "-disabled"), pt = "".concat(Z, "-hidden"), Nr = "".concat(Z, "-hide"), Oc = "".concat(Z, "-invisible"), Te = "".concat(Z, "-modal"), Ge = "".concat(Z, "-move"), me = "".concat(Z, "Action"), ke = "".concat(Z, "Preview"), vr = "crop", Is = "move", Ps = "none", Je = "crop", Ze = "cropend", Qe = "cropmove", tr = "cropstart", jr = "dblclick", Ic = pr ? "touchstart" : "mousedown", Pc = pr ? "touchmove" : "mousemove", Nc = pr ? "touchend touchcancel" : "mouseup", Vr = gr ? "pointerdown" : Ic, Hr = gr ? "pointermove" : Pc, zr = gr ? "pointerup pointercancel" : Nc, Rr = "ready", Br = "resize", Ur = "wheel", er = "zoom", Kr = "image/jpeg", jc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Vc = /^data:/, Hc = /^data:image\/jpeg;base64,/, zc = /^img|canvas$/i, Ns = 200, js = 100, Yr = {
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
}, Rc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Bc = Number.isNaN || Et.isNaN;
function U(r) {
  return typeof r == "number" && !Bc(r);
}
var Wr = function(t) {
  return t > 0 && t < 1 / 0;
};
function Be(r) {
  return typeof r > "u";
}
function Xt(r) {
  return Ce(r) === "object" && r !== null;
}
var Uc = Object.prototype.hasOwnProperty;
function te(r) {
  if (!Xt(r))
    return !1;
  try {
    var t = r.constructor, e = t.prototype;
    return t && e && Uc.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ft(r) {
  return typeof r == "function";
}
var Kc = Array.prototype.slice;
function Vs(r) {
  return Array.from ? Array.from(r) : Kc.call(r);
}
function rt(r, t) {
  return r && ft(t) && (Array.isArray(r) || U(r.length) ? Vs(r).forEach(function(e, s) {
    t.call(r, e, s, r);
  }) : Xt(r) && Object.keys(r).forEach(function(e) {
    t.call(r, r[e], e, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    s[a - 1] = arguments[a];
  return Xt(t) && s.length > 0 && s.forEach(function(i) {
    Xt(i) && Object.keys(i).forEach(function(l) {
      t[l] = i[l];
    });
  }), t;
}, Yc = /\.\d*(?:0|9){12}\d*$/;
function re(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Yc.test(r) ? Math.round(r * t) / t : r;
}
var Wc = /^width|height|left|top|marginLeft|marginTop$/;
function Nt(r, t) {
  var e = r.style;
  rt(t, function(s, a) {
    Wc.test(a) && U(s) && (s = "".concat(s, "px")), e[a] = s;
  });
}
function Xc(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (!!t) {
    if (U(r.length)) {
      rt(r, function(s) {
        at(s, t);
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
function $t(r, t) {
  if (!!t) {
    if (U(r.length)) {
      rt(r, function(e) {
        $t(e, t);
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
function ee(r, t, e) {
  if (!!t) {
    if (U(r.length)) {
      rt(r, function(s) {
        ee(s, t, e);
      });
      return;
    }
    e ? at(r, t) : $t(r, t);
  }
}
var qc = /([a-z\d])([A-Z])/g;
function br(r) {
  return r.replace(qc, "$1-$2").toLowerCase();
}
function rr(r, t) {
  return Xt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(br(t)));
}
function ve(r, t, e) {
  Xt(e) ? r[t] = e : r.dataset ? r.dataset[t] = e : r.setAttribute("data-".concat(br(t)), e);
}
function Fc(r, t) {
  if (Xt(r[t]))
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
var Hs = /\s\s*/, zs = function() {
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
    Et.addEventListener("test", e, s), Et.removeEventListener("test", e, s);
  }
  return r;
}();
function kt(r, t, e) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(Hs).forEach(function(i) {
    if (!zs) {
      var l = r.listeners;
      l && l[i] && l[i][e] && (a = l[i][e], delete l[i][e], Object.keys(l[i]).length === 0 && delete l[i], Object.keys(l).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, a, s);
  });
}
function yt(r, t, e) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = e;
  t.trim().split(Hs).forEach(function(i) {
    if (s.once && !zs) {
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
function se(r, t, e) {
  var s;
  return ft(Event) && ft(CustomEvent) ? s = new CustomEvent(t, {
    detail: e,
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(t, !0, !0, e)), r.dispatchEvent(s);
}
function Rs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Ue = Et.location, Gc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Xr(r) {
  var t = r.match(Gc);
  return t !== null && (t[1] !== Ue.protocol || t[2] !== Ue.hostname || t[3] !== Ue.port);
}
function qr(r) {
  var t = "timestamp=".concat(new Date().getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function pe(r) {
  var t = r.rotate, e = r.scaleX, s = r.scaleY, a = r.translateX, i = r.translateY, l = [];
  U(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), U(i) && i !== 0 && l.push("translateY(".concat(i, "px)")), U(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), U(e) && e !== 1 && l.push("scaleX(".concat(e, ")")), U(s) && s !== 1 && l.push("scaleY(".concat(s, ")"));
  var h = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: h,
    msTransform: h,
    transform: h
  };
}
function Jc(r) {
  var t = Es({}, r), e = 0;
  return rt(r, function(s, a) {
    delete t[a], rt(t, function(i) {
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
function Zc(r) {
  var t = 0, e = 0, s = 0;
  return rt(r, function(a) {
    var i = a.startX, l = a.startY;
    t += i, e += l, s += 1;
  }), t /= s, e /= s, {
    pageX: t,
    pageY: e
  };
}
function jt(r) {
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
function Qc(r) {
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
function tu(r, t, e, s) {
  var a = t.aspectRatio, i = t.naturalWidth, l = t.naturalHeight, h = t.rotate, v = h === void 0 ? 0 : h, p = t.scaleX, f = p === void 0 ? 1 : p, m = t.scaleY, y = m === void 0 ? 1 : m, E = e.aspectRatio, k = e.naturalWidth, M = e.naturalHeight, A = s.fillColor, z = A === void 0 ? "transparent" : A, P = s.imageSmoothingEnabled, O = P === void 0 ? !0 : P, R = s.imageSmoothingQuality, B = R === void 0 ? "low" : R, _ = s.maxWidth, N = _ === void 0 ? 1 / 0 : _, G = s.maxHeight, ot = G === void 0 ? 1 / 0 : G, it = s.minWidth, dt = it === void 0 ? 0 : it, bt = s.minHeight, vt = bt === void 0 ? 0 : bt, J = document.createElement("canvas"), T = J.getContext("2d"), H = jt({
    aspectRatio: E,
    width: N,
    height: ot
  }), j = jt({
    aspectRatio: E,
    width: dt,
    height: vt
  }, "cover"), ct = Math.min(H.width, Math.max(j.width, k)), q = Math.min(H.height, Math.max(j.height, M)), tt = jt({
    aspectRatio: a,
    width: N,
    height: ot
  }), St = jt({
    aspectRatio: a,
    width: dt,
    height: vt
  }, "cover"), xe = Math.min(tt.width, Math.max(St.width, i)), Gt = Math.min(tt.height, Math.max(St.height, l)), He = [-xe / 2, -Gt / 2, xe, Gt];
  return J.width = re(ct), J.height = re(q), T.fillStyle = z, T.fillRect(0, 0, ct, q), T.save(), T.translate(ct / 2, q / 2), T.rotate(v * Math.PI / 180), T.scale(f, y), T.imageSmoothingEnabled = O, T.imageSmoothingQuality = B, T.drawImage.apply(T, [r].concat(As(He.map(function(Jt) {
    return Math.floor(re(Jt));
  })))), T.restore(), J;
}
var Bs = String.fromCharCode;
function eu(r, t, e) {
  var s = "";
  e += t;
  for (var a = t; a < e; a += 1)
    s += Bs(r.getUint8(a));
  return s;
}
var ru = /^data:.*,/;
function su(r) {
  var t = r.replace(ru, ""), e = atob(t), s = new ArrayBuffer(e.length), a = new Uint8Array(s);
  return rt(a, function(i, l) {
    a[l] = e.charCodeAt(l);
  }), s;
}
function ou(r, t) {
  for (var e = [], s = 8192, a = new Uint8Array(r); a.length > 0; )
    e.push(Bs.apply(null, Vs(a.subarray(0, s)))), a = a.subarray(s);
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function iu(r) {
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
      if (eu(t, v, 4) === "Exif") {
        var f = t.getUint16(p);
        if (s = f === 18761, (s || f === 19789) && t.getUint16(p + 2, s) === 42) {
          var m = t.getUint32(p + 4, s);
          m >= 8 && (i = p + m);
        }
      }
    }
    if (i) {
      var y = t.getUint16(i, s), E, k;
      for (k = 0; k < y; k += 1)
        if (E = i + k * 12 + 2, t.getUint16(E, s) === 274) {
          E += 8, e = t.getUint16(E, s), t.setUint16(E, 1, s);
          break;
        }
    }
  } catch {
    e = 1;
  }
  return e;
}
function nu(r) {
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
var au = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, e = this.options, s = this.container, a = this.cropper, i = Number(e.minContainerWidth), l = Number(e.minContainerHeight);
    at(a, pt), $t(t, pt);
    var h = {
      width: Math.max(s.offsetWidth, i >= 0 ? i : Ns),
      height: Math.max(s.offsetHeight, l >= 0 ? l : js)
    };
    this.containerData = h, Nt(a, {
      width: h.width,
      height: h.height
    }), at(t, pt), $t(a, pt);
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
      var y = jt({
        aspectRatio: v,
        width: f,
        height: m
      });
      f = y.width, m = y.height, i.minWidth = f, i.minHeight = m, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (e)
      if (h > (p ? 0 : 1)) {
        var E = a.width - i.width, k = a.height - i.height;
        i.minLeft = Math.min(0, E), i.minTop = Math.min(0, k), i.maxLeft = Math.max(0, E), i.maxTop = Math.max(0, k), p && this.limited && (i.minLeft = Math.min(l.left, l.left + (l.width - i.width)), i.minTop = Math.min(l.top, l.top + (l.height - i.height)), i.maxLeft = l.left, i.maxTop = l.top, h === 2 && (i.width >= a.width && (i.minLeft = Math.min(0, E), i.maxLeft = Math.max(0, E)), i.height >= a.height && (i.minTop = Math.min(0, k), i.maxTop = Math.max(0, k))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = a.width, i.maxTop = a.height;
  },
  renderCanvas: function(t, e) {
    var s = this.canvasData, a = this.imageData;
    if (e) {
      var i = Qc({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
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
    var e = this.canvasData, s = this.imageData, a = s.naturalWidth * (e.width / e.naturalWidth), i = s.naturalHeight * (e.height / e.naturalHeight);
    Q(s, {
      width: a,
      height: i,
      left: (e.width - a) / 2,
      top: (e.height - i) / 2
    }), Nt(this.image, Q({
      width: s.width,
      height: s.height
    }, pe(Q({
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
    (s.width > s.maxWidth || s.width < s.minWidth) && (s.left = s.oldLeft), (s.height > s.maxHeight || s.height < s.minHeight) && (s.top = s.oldTop), s.width = Math.min(Math.max(s.width, s.minWidth), s.maxWidth), s.height = Math.min(Math.max(s.height, s.minHeight), s.maxHeight), this.limitCropBox(!1, !0), s.left = Math.min(Math.max(s.left, s.minLeft), s.maxLeft), s.top = Math.min(Math.max(s.top, s.minTop), s.maxTop), s.oldLeft = s.left, s.oldTop = s.top, t.movable && t.cropBoxMovable && ve(this.face, me, s.width >= e.width && s.height >= e.height ? Ls : mr), Nt(this.cropBox, Q({
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
}, lu = {
  initPreview: function() {
    var t = this.element, e = this.crossOrigin, s = this.options.preview, a = e ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", l = document.createElement("img");
    if (e && (l.crossOrigin = e), l.src = a, l.alt = i, this.viewBox.appendChild(l), this.viewBoxImage = l, !!s) {
      var h = s;
      typeof s == "string" ? h = t.ownerDocument.querySelectorAll(s) : s.querySelector && (h = [s]), this.previews = h, rt(h, function(v) {
        var p = document.createElement("img");
        ve(v, ke, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), e && (p.crossOrigin = e), p.src = a, p.alt = i, p.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(p);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var e = rr(t, ke);
      Nt(t, {
        width: e.width,
        height: e.height
      }), t.innerHTML = e.html, Fc(t, ke);
    });
  },
  preview: function() {
    var t = this.imageData, e = this.canvasData, s = this.cropBoxData, a = s.width, i = s.height, l = t.width, h = t.height, v = s.left - e.left - t.left, p = s.top - e.top - t.top;
    !this.cropped || this.disabled || (Nt(this.viewBoxImage, Q({
      width: l,
      height: h
    }, pe(Q({
      translateX: -v,
      translateY: -p
    }, t)))), rt(this.previews, function(f) {
      var m = rr(f, ke), y = m.width, E = m.height, k = y, M = E, A = 1;
      a && (A = y / a, M = i * A), i && M > E && (A = E / i, k = a * A, M = E), Nt(f, {
        width: k,
        height: M
      }), Nt(f.getElementsByTagName("img")[0], Q({
        width: l * A,
        height: h * A
      }, pe(Q({
        translateX: -v * A,
        translateY: -p * A
      }, t))));
    }));
  }
}, cu = {
  bind: function() {
    var t = this.element, e = this.options, s = this.cropper;
    ft(e.cropstart) && yt(t, tr, e.cropstart), ft(e.cropmove) && yt(t, Qe, e.cropmove), ft(e.cropend) && yt(t, Ze, e.cropend), ft(e.crop) && yt(t, Je, e.crop), ft(e.zoom) && yt(t, er, e.zoom), yt(s, Vr, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && yt(s, Ur, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && yt(s, jr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, Hr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, zr, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && yt(window, Br, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, e = this.options, s = this.cropper;
    ft(e.cropstart) && kt(t, tr, e.cropstart), ft(e.cropmove) && kt(t, Qe, e.cropmove), ft(e.cropend) && kt(t, Ze, e.cropend), ft(e.crop) && kt(t, Je, e.crop), ft(e.zoom) && kt(t, er, e.zoom), kt(s, Vr, this.onCropStart), e.zoomable && e.zoomOnWheel && kt(s, Ur, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleDragModeOnDblclick && kt(s, jr, this.onDblclick), kt(t.ownerDocument, Hr, this.onCropMove), kt(t.ownerDocument, zr, this.onCropEnd), e.responsive && kt(window, Br, this.onResize);
  }
}, uu = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, e = this.container, s = this.containerData, a = e.offsetWidth / s.width, i = e.offsetHeight / s.height, l = Math.abs(a - 1) > Math.abs(i - 1) ? a : i;
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
    this.disabled || this.options.dragMode === Ps || this.setDragMode(Xc(this.dragBox, Fe) ? Is : vr);
  },
  wheel: function(t) {
    var e = this, s = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      e.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * s, t)));
  },
  cropStart: function(t) {
    var e = t.buttons, s = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (U(e) && e !== 1 || U(s) && s !== 0 || t.ctrlKey))) {
      var a = this.options, i = this.pointers, l;
      t.changedTouches ? rt(t.changedTouches, function(h) {
        i[h.identifier] = De(h);
      }) : i[t.pointerId || 0] = De(t), Object.keys(i).length > 1 && a.zoomable && a.zoomOnTouch ? l = Os : l = rr(t.target, me), !!jc.test(l) && se(this.element, tr, {
        originalEvent: t,
        action: l
      }) !== !1 && (t.preventDefault(), this.action = l, this.cropping = !1, l === Ts && (this.cropping = !0, at(this.dragBox, Te)));
    }
  },
  cropMove: function(t) {
    var e = this.action;
    if (!(this.disabled || !e)) {
      var s = this.pointers;
      t.preventDefault(), se(this.element, Qe, {
        originalEvent: t,
        action: e
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(a) {
        Q(s[a.identifier] || {}, De(a, !0));
      }) : Q(s[t.pointerId || 0] || {}, De(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var e = this.action, s = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(a) {
        delete s[a.identifier];
      }) : delete s[t.pointerId || 0], e && (t.preventDefault(), Object.keys(s).length || (this.action = ""), this.cropping && (this.cropping = !1, ee(this.dragBox, Te, this.cropped && this.options.modal)), se(this.element, Ze, {
        originalEvent: t,
        action: e
      }));
    }
  }
}, du = {
  change: function(t) {
    var e = this.options, s = this.canvasData, a = this.containerData, i = this.cropBoxData, l = this.pointers, h = this.action, v = e.aspectRatio, p = i.left, f = i.top, m = i.width, y = i.height, E = p + m, k = f + y, M = 0, A = 0, z = a.width, P = a.height, O = !0, R;
    !v && t.shiftKey && (v = m && y ? m / y : 1), this.limited && (M = i.minLeft, A = i.minTop, z = M + Math.min(a.width, s.width, s.left + s.width), P = A + Math.min(a.height, s.height, s.top + s.height));
    var B = l[Object.keys(l)[0]], _ = {
      x: B.endX - B.startX,
      y: B.endY - B.startY
    }, N = function(ot) {
      switch (ot) {
        case Ut:
          E + _.x > z && (_.x = z - E);
          break;
        case Kt:
          p + _.x < M && (_.x = M - p);
          break;
        case Pt:
          f + _.y < A && (_.y = A - f);
          break;
        case Qt:
          k + _.y > P && (_.y = P - k);
          break;
      }
    };
    switch (h) {
      case mr:
        p += _.x, f += _.y;
        break;
      case Ut:
        if (_.x >= 0 && (E >= z || v && (f <= A || k >= P))) {
          O = !1;
          break;
        }
        N(Ut), m += _.x, m < 0 && (h = Kt, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case Pt:
        if (_.y <= 0 && (f <= A || v && (p <= M || E >= z))) {
          O = !1;
          break;
        }
        N(Pt), y -= _.y, f += _.y, y < 0 && (h = Qt, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case Kt:
        if (_.x <= 0 && (p <= M || v && (f <= A || k >= P))) {
          O = !1;
          break;
        }
        N(Kt), m -= _.x, p += _.x, m < 0 && (h = Ut, m = -m, p -= m), v && (y = m / v, f += (i.height - y) / 2);
        break;
      case Qt:
        if (_.y >= 0 && (k >= P || v && (p <= M || E >= z))) {
          O = !1;
          break;
        }
        N(Qt), y += _.y, y < 0 && (h = Pt, y = -y, f -= y), v && (m = y * v, p += (i.width - m) / 2);
        break;
      case ue:
        if (v) {
          if (_.y <= 0 && (f <= A || E >= z)) {
            O = !1;
            break;
          }
          N(Pt), y -= _.y, f += _.y, m = y * v;
        } else
          N(Pt), N(Ut), _.x >= 0 ? E < z ? m += _.x : _.y <= 0 && f <= A && (O = !1) : m += _.x, _.y <= 0 ? f > A && (y -= _.y, f += _.y) : (y -= _.y, f += _.y);
        m < 0 && y < 0 ? (h = fe, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = de, m = -m, p -= m) : y < 0 && (h = he, y = -y, f -= y);
        break;
      case de:
        if (v) {
          if (_.y <= 0 && (f <= A || p <= M)) {
            O = !1;
            break;
          }
          N(Pt), y -= _.y, f += _.y, m = y * v, p += i.width - m;
        } else
          N(Pt), N(Kt), _.x <= 0 ? p > M ? (m -= _.x, p += _.x) : _.y <= 0 && f <= A && (O = !1) : (m -= _.x, p += _.x), _.y <= 0 ? f > A && (y -= _.y, f += _.y) : (y -= _.y, f += _.y);
        m < 0 && y < 0 ? (h = he, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = ue, m = -m, p -= m) : y < 0 && (h = fe, y = -y, f -= y);
        break;
      case fe:
        if (v) {
          if (_.x <= 0 && (p <= M || k >= P)) {
            O = !1;
            break;
          }
          N(Kt), m -= _.x, p += _.x, y = m / v;
        } else
          N(Qt), N(Kt), _.x <= 0 ? p > M ? (m -= _.x, p += _.x) : _.y >= 0 && k >= P && (O = !1) : (m -= _.x, p += _.x), _.y >= 0 ? k < P && (y += _.y) : y += _.y;
        m < 0 && y < 0 ? (h = ue, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = he, m = -m, p -= m) : y < 0 && (h = de, y = -y, f -= y);
        break;
      case he:
        if (v) {
          if (_.x >= 0 && (E >= z || k >= P)) {
            O = !1;
            break;
          }
          N(Ut), m += _.x, y = m / v;
        } else
          N(Qt), N(Ut), _.x >= 0 ? E < z ? m += _.x : _.y >= 0 && k >= P && (O = !1) : m += _.x, _.y >= 0 ? k < P && (y += _.y) : y += _.y;
        m < 0 && y < 0 ? (h = de, y = -y, m = -m, f -= y, p -= m) : m < 0 ? (h = fe, m = -m, p -= m) : y < 0 && (h = ue, y = -y, f -= y);
        break;
      case Ls:
        this.move(_.x, _.y), O = !1;
        break;
      case Os:
        this.zoom(Jc(l), t), O = !1;
        break;
      case Ts:
        if (!_.x || !_.y) {
          O = !1;
          break;
        }
        R = Rs(this.cropper), p = B.startX - R.left, f = B.startY - R.top, m = i.minWidth, y = i.minHeight, _.x > 0 ? h = _.y > 0 ? he : ue : _.x < 0 && (p -= m, h = _.y > 0 ? fe : de), _.y < 0 && (f -= y), this.cropped || ($t(this.cropBox, pt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    O && (i.width = m, i.height = y, i.left = p, i.top = f, this.action = h, this.renderCropBox()), rt(l, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, hu = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, Te), $t(this.cropBox, pt), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $t(this.dragBox, Te), at(this.cropBox, pt)), this;
  },
  replace: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(s) {
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
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = s.left, i = s.top;
    return this.moveTo(Be(t) ? t : a + Number(t), Be(e) ? e : i + Number(e));
  },
  moveTo: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.canvasData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (U(t) && (s.left = t, a = !0), U(e) && (s.top = e, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(t, e) {
    var s = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(s.width * t / s.naturalWidth, null, e);
  },
  zoomTo: function(t, e, s) {
    var a = this.options, i = this.canvasData, l = i.width, h = i.height, v = i.naturalWidth, p = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var f = v * t, m = p * t;
      if (se(this.element, er, {
        ratio: t,
        oldRatio: l / v,
        originalEvent: s
      }) === !1)
        return this;
      if (s) {
        var y = this.pointers, E = Rs(this.cropper), k = y && Object.keys(y).length ? Zc(y) : {
          pageX: s.pageX,
          pageY: s.pageY
        };
        i.left -= (f - l) * ((k.pageX - E.left - i.left) / l), i.top -= (m - h) * ((k.pageY - E.top - i.top) / h);
      } else
        te(e) && U(e.x) && U(e.y) ? (i.left -= (f - l) * ((e.x - i.left) / l), i.top -= (m - h) * ((e.y - i.top) / h)) : (i.left -= (f - l) / 2, i.top -= (m - h) / 2);
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
    var e = this.imageData.scaleY;
    return this.scale(t, U(e) ? e : 1);
  },
  scaleY: function(t) {
    var e = this.imageData.scaleX;
    return this.scale(U(e) ? e : 1, t);
  },
  scale: function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, s = this.imageData, a = !1;
    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (U(t) && (s.scaleX = t, a = !0), U(e) && (s.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this;
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
    return e.rotatable && (l.rotate = s.rotate || 0), e.scalable && (l.scaleX = s.scaleX || 1, l.scaleY = s.scaleY || 1), l;
  },
  setData: function(t) {
    var e = this.options, s = this.imageData, a = this.canvasData, i = {};
    if (this.ready && !this.disabled && te(t)) {
      var l = !1;
      e.rotatable && U(t.rotate) && t.rotate !== s.rotate && (s.rotate = t.rotate, l = !0), e.scalable && (U(t.scaleX) && t.scaleX !== s.scaleX && (s.scaleX = t.scaleX, l = !0), U(t.scaleY) && t.scaleY !== s.scaleY && (s.scaleY = t.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var h = s.width / s.naturalWidth;
      U(t.x) && (i.left = t.x * h + a.left), U(t.y) && (i.top = t.y * h + a.top), U(t.width) && (i.width = t.width * h), U(t.height) && (i.height = t.height * h), this.setCropBoxData(i);
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
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(s) {
      e[s] = t[s];
    }), e;
  },
  setCanvasData: function(t) {
    var e = this.canvasData, s = e.aspectRatio;
    return this.ready && !this.disabled && te(t) && (U(t.left) && (e.left = t.left), U(t.top) && (e.top = t.top), U(t.width) ? (e.width = t.width, e.height = t.width / s) : U(t.height) && (e.height = t.height, e.width = t.height * s), this.renderCanvas(!0)), this;
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
    return this.ready && this.cropped && !this.disabled && te(t) && (U(t.left) && (e.left = t.left), U(t.top) && (e.top = t.top), U(t.width) && t.width !== e.width && (a = !0, e.width = t.width), U(t.height) && t.height !== e.height && (i = !0, e.height = t.height), s && (a ? e.height = e.width / s : i && (e.width = e.height * s)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var e = this.canvasData, s = tu(this.image, this.imageData, e, t);
    if (!this.cropped)
      return s;
    var a = this.getData(), i = a.x, l = a.y, h = a.width, v = a.height, p = s.width / Math.floor(e.naturalWidth);
    p !== 1 && (i *= p, l *= p, h *= p, v *= p);
    var f = h / v, m = jt({
      aspectRatio: f,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), y = jt({
      aspectRatio: f,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), E = jt({
      aspectRatio: f,
      width: t.width || (p !== 1 ? s.width : h),
      height: t.height || (p !== 1 ? s.height : v)
    }), k = E.width, M = E.height;
    k = Math.min(m.width, Math.max(y.width, k)), M = Math.min(m.height, Math.max(y.height, M));
    var A = document.createElement("canvas"), z = A.getContext("2d");
    A.width = re(k), A.height = re(M), z.fillStyle = t.fillColor || "transparent", z.fillRect(0, 0, k, M);
    var P = t.imageSmoothingEnabled, O = P === void 0 ? !0 : P, R = t.imageSmoothingQuality;
    z.imageSmoothingEnabled = O, R && (z.imageSmoothingQuality = R);
    var B = s.width, _ = s.height, N = i, G = l, ot, it, dt, bt, vt, J;
    N <= -h || N > B ? (N = 0, ot = 0, dt = 0, vt = 0) : N <= 0 ? (dt = -N, N = 0, ot = Math.min(B, h + N), vt = ot) : N <= B && (dt = 0, ot = Math.min(h, B - N), vt = ot), ot <= 0 || G <= -v || G > _ ? (G = 0, it = 0, bt = 0, J = 0) : G <= 0 ? (bt = -G, G = 0, it = Math.min(_, v + G), J = it) : G <= _ && (bt = 0, it = Math.min(v, _ - G), J = it);
    var T = [N, G, ot, it];
    if (vt > 0 && J > 0) {
      var H = k / h;
      T.push(dt * H, bt * H, vt * H, J * H);
    }
    return z.drawImage.apply(z, [s].concat(As(T.map(function(j) {
      return Math.floor(re(j));
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
      t = i || l ? t : Ps, e.dragMode = t, ve(s, me, t), ee(s, Fe, i), ee(s, Ge, l), e.cropBoxMovable || (ve(a, me, t), ee(a, Fe, i), ee(a, Ge, l));
    }
    return this;
  }
}, fu = Et.Cropper, Us = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Cc(this, r), !t || !zc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, Yr, te(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Mc(r, [{
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
        if (Vc.test(e)) {
          Hc.test(e) ? this.read(su(e)) : this.clone();
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
      var s = this.options, a = this.imageData, i = iu(e), l = 0, h = 1, v = 1;
      if (i > 1) {
        this.url = ou(e, Kr);
        var p = nu(i);
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
      a && (l.crossOrigin = a), l.src = i || s, l.alt = e.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), at(l, Nr), e.parentNode.insertBefore(l, e.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var e = this, s = this.image;
      s.onload = null, s.onerror = null, this.sizing = !0;
      var a = Et.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Et.navigator.userAgent), i = function(p, f) {
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
        l.innerHTML = Rc;
        var h = l.querySelector(".".concat(Z, "-container")), v = h.querySelector(".".concat(Z, "-canvas")), p = h.querySelector(".".concat(Z, "-drag-box")), f = h.querySelector(".".concat(Z, "-crop-box")), m = f.querySelector(".".concat(Z, "-face"));
        this.container = i, this.cropper = h, this.canvas = v, this.dragBox = p, this.cropBox = f, this.viewBox = h.querySelector(".".concat(Z, "-view-box")), this.face = m, v.appendChild(a), at(e, pt), i.insertBefore(h, e.nextSibling), this.isImg || $t(a, Nr), this.initPreview(), this.bind(), s.initialAspectRatio = Math.max(0, s.initialAspectRatio) || NaN, s.aspectRatio = Math.max(0, s.aspectRatio) || NaN, s.viewMode = Math.max(0, Math.min(3, Math.round(s.viewMode))) || 0, at(f, pt), s.guides || at(f.getElementsByClassName("".concat(Z, "-dashed")), pt), s.center || at(f.getElementsByClassName("".concat(Z, "-center")), pt), s.background && at(h, "".concat(Z, "-bg")), s.highlight || at(m, Oc), s.cropBoxMovable && (at(m, Ge), ve(m, me, mr)), s.cropBoxResizable || (at(f.getElementsByClassName("".concat(Z, "-line")), pt), at(f.getElementsByClassName("".concat(Z, "-point")), pt)), this.render(), this.ready = !0, this.setDragMode(s.dragMode), s.autoCrop && this.crop(), this.setData(s.data), ft(s.ready) && yt(e, Rr, s.ready, {
          once: !0
        }), se(e, Rr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), $t(this.element, pt));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = fu, r;
    }
  }, {
    key: "setDefaults",
    value: function(e) {
      Q(Yr, te(e) && e);
    }
  }]), r;
}();
Q(Us.prototype, au, lu, cu, uu, du, hu);
const pu = { class: "flex" }, gu = ["aria-label"], mu = { class: "ml-auto mb-2" }, vu = { class: "w-full flex justify-center" }, bu = ["src"], yu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, s = I("accessToken"), { t: a } = I("i18n"), { apiUrl: i } = At(), l = L(null), h = L(null), v = L(!1), p = L(""), f = L(!1), m = () => {
      v.value = !v.value, v.value ? h.value = new Us(l.value, {
        crop(k) {
        }
      }) : h.value.destroy();
    }, y = I("postData"), E = () => {
      h.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (k) => {
          p.value = "", f.value = !1, Ee(i.value, {
            method: "POST",
            params: Object.assign(y, {
              q: "upload",
              adapter: e.selection.adapter,
              path: e.selection.item.path,
              file: k
            }),
            name: e.selection.item.basename,
            json: !1,
            headers: { Authorization: s ? "Bearer " + s : null }
          }).then((M) => {
            p.value = a("Updated."), l.value.src = Mr(e.selection.adapter, e.selection.item.path), m(), t("load");
          }).catch((M) => {
            p.value = a(M.message), f.value = !0;
          });
        }
      );
    };
    return Ct(() => {
      t("load");
    }), (k, M) => (x(), D(lt, null, [
      d("div", pu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, gu),
        d("div", mu, [
          v.value ? (x(), D("button", {
            key: 0,
            onClick: E,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(S(a)("Crop")), 1)) : K("", !0),
          d("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (A) => m())
          }, C(v.value ? S(a)("Cancel") : S(a)("Edit")), 1)
        ])
      ]),
      d("div", vu, [
        d("img", {
          ref_key: "image",
          ref: l,
          class: "max-w-[50vh] max-h-[50vh]",
          src: S(Mr)(e.selection.adapter, e.selection.item.path),
          alt: ""
        }, null, 8, bu)
      ]),
      p.value.length ? (x(), F(Lt, {
        key: 0,
        onHidden: M[1] || (M[1] = (A) => p.value = ""),
        error: f.value
      }, {
        default: Y(() => [
          st(C(p.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, wu = { class: "flex" }, xu = ["aria-label"], Su = /* @__PURE__ */ d("div", null, null, -1), _u = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return Ct(() => {
      t("load");
    }), (e, s) => (x(), D(lt, null, [
      d("div", wu, [
        d("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, xu)
      ]),
      Su
    ], 64));
  }
}, ku = ["aria-label"], Du = {
  class: "w-full",
  preload: "",
  controls: ""
}, Cu = ["src"], Mu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = At(), a = () => s.value + "?" + qt({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), D(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, ku),
      d("div", null, [
        d("video", Du, [
          d("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Cu),
          st(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, $u = ["aria-label"], Eu = {
  class: "w-full",
  controls: ""
}, Au = ["src"], Tu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = At(), a = () => s.value + "?" + qt({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), D(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, $u),
      d("div", null, [
        d("audio", Eu, [
          d("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Au),
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Lu = ["aria-label"], Ou = ["data"], Iu = ["src"], Pu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const e = r, { apiUrl: s } = At(), a = () => s.value + "?" + qt({ q: "preview", adapter: e.selection.adapter, path: e.selection.item.path });
    return Ct(() => {
      t("load");
    }), (i, l) => (x(), D(lt, null, [
      d("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, Lu),
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
        `, 8, Iu)
        ], 8, Ou)
      ])
    ], 64));
  }
}, Nu = { class: "sm:flex sm:items-start" }, ju = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Vu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Hu = {
  key: 0,
  class: "flex leading-5"
}, zu = /* @__PURE__ */ d("svg", {
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
], -1), Ru = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Bu = { class: "font-bold pl-2" }, Uu = { class: "font-bold pl-2" }, Ku = {
  name: "VFModalPreview"
}, Yu = /* @__PURE__ */ Object.assign(Ku, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: e } = At(), s = I("emitter"), { t: a } = I("i18n"), i = L(!1), l = (p) => i.value = p, h = (p) => {
      var f;
      return ((f = t.selection.item.mime_type) != null ? f : "").startsWith(p);
    }, v = () => {
      const p = e.value + "?" + qt({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      s.emit("vf-download", p);
    };
    return (p, f) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: f[6] || (f[6] = (m) => S(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Close")), 1),
        d("button", {
          type: "button",
          onClick: f[7] || (f[7] = (m) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Download")), 1)
      ]),
      default: Y(() => [
        d("div", Nu, [
          d("div", ju, [
            d("div", null, [
              h("text") ? (x(), F(Dc, {
                key: 0,
                selection: r.selection,
                onLoad: f[0] || (f[0] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("image") ? (x(), F(yu, {
                key: 1,
                selection: r.selection,
                onLoad: f[1] || (f[1] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("video") ? (x(), F(Mu, {
                key: 2,
                selection: r.selection,
                onLoad: f[2] || (f[2] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("audio") ? (x(), F(Tu, {
                key: 3,
                selection: r.selection,
                onLoad: f[3] || (f[3] = (m) => l(!0))
              }, null, 8, ["selection"])) : h("application/pdf") ? (x(), F(Pu, {
                key: 4,
                selection: r.selection,
                onLoad: f[4] || (f[4] = (m) => l(!0))
              }, null, 8, ["selection"])) : (x(), F(_u, {
                key: 5,
                selection: r.selection,
                onLoad: f[5] || (f[5] = (m) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            d("div", Vu, [
              i.value == !1 ? (x(), D("div", Hu, [
                zu,
                d("span", null, C(S(a)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        d("div", Ru, [
          d("div", null, [
            d("span", Bu, C(S(a)("File Size")) + ": ", 1),
            st(C(S(Qr)(r.selection.item.file_size)), 1)
          ]),
          d("div", null, [
            d("span", Uu, C(S(a)("Last Modified")) + ": ", 1),
            st(" " + C(S(ts)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Wu = { class: "sm:flex sm:items-start" }, Xu = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), qu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Fu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Gu = { class: "mt-2" }, Ju = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Zu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qu = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), td = [
  Qu
], ed = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, rd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), sd = [
  rd
], od = { class: "ml-1.5" }, id = ["onKeyup"], nd = {
  name: "VFModalRename"
}, ad = /* @__PURE__ */ Object.assign(nd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n"), i = L(t.selection.items[0]), l = L(t.selection.items[0].basename), h = L(""), v = () => {
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
    return (p, f) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Rename")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Wu, [
          Xu,
          d("div", qu, [
            d("h3", Fu, C(S(a)("Rename")), 1),
            d("div", Gu, [
              d("p", Ju, [
                i.value.type == "dir" ? (x(), D("svg", Zu, td)) : (x(), D("svg", ed, sd)),
                d("span", od, C(i.value.basename), 1)
              ]),
              wt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => l.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, id), [
                [ne, l.value]
              ]),
              h.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => h.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(h.value), 1)
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
}), ld = { class: "sm:flex sm:items-start" }, cd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), ud = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, dd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, hd = { class: "mt-2" }, fd = { class: "text-gray-500 mb-1" }, pd = ["id"], gd = {
  key: 0,
  class: "py-2"
}, md = ["disabled", "onClick"], vd = {
  name: "VFModalUpload"
}, bd = /* @__PURE__ */ Object.assign(vd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter"), { apiUrl: s } = At(), { t: a } = I("i18n"), i = I("accessToken"), l = L(null), h = L(null), v = L(null), p = L([]), f = L(""), m = L(!0), y = () => {
      f.value = "", l.value.start();
    }, E = I("postData");
    return Ct(() => {
      l.value = new Re.Uploader({
        runtimes: "html5",
        browse_button: v.value,
        container: h.value,
        max_file_size: "2Gb",
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + qt(Object.assign(E, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        headers: {
          ...$e && { "X-CSRF-Token": $e },
          Authorization: i ? "Bearer " + i : null
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(k, M) {
            m.value = !1, Re.each(M, function(A) {
              p.value.push({
                id: A.id,
                name: A.name,
                size: Re.formatSize(A.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(k, M) {
            p.value[p.value.findIndex((A) => A.id == M.id)].percent = M.percent + "%";
          },
          UploadComplete: function() {
            m.value = !0, e.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(k, M) {
            l.value.stop(), f.value = a(JSON.parse(M.response).message);
          }
        }
      }), l.value.init();
    }), (k, M) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          disabled: m.value,
          onClick: Yt(y, ["prevent"]),
          type: "button",
          class: gt([m.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, C(S(a)("Upload")), 11, md),
        d("button", {
          type: "button",
          onClick: M[1] || (M[1] = (A) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", ld, [
          cd,
          d("div", ud, [
            d("h3", dd, C(S(a)("Upload files")), 1),
            d("div", hd, [
              d("div", fd, [
                (x(!0), D(lt, null, xt(p.value, (A) => (x(), D("div", null, [
                  d("div", {
                    id: A.id
                  }, [
                    st(C(A.name) + " ( " + C(A.size) + ") ", 1),
                    d("b", null, C(A.percent), 1)
                  ], 8, pd)
                ]))), 256)),
                p.value.length ? K("", !0) : (x(), D("div", gd, C(S(a)("No files selected!")), 1))
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
                }, C(S(a)("Select Files")), 513)
              ], 512),
              f.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: M[0] || (M[0] = (A) => f.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(f.value), 1)
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
}), yd = { class: "sm:flex sm:items-start" }, wd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), xd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, _d = { class: "mt-2" }, kd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Dd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Cd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Md = [
  Cd
], $d = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ed = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ad = [
  Ed
], Td = { class: "ml-1.5" }, Ld = ["onKeyup", "placeholder"], Od = {
  name: "VFModalArchive"
}, Id = /* @__PURE__ */ Object.assign(Od, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n"), i = L(""), l = L(""), h = L(t.selection.items), v = () => {
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
    return (p, f) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Archive")), 1),
        d("button", {
          type: "button",
          onClick: f[2] || (f[2] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", yd, [
          wd,
          d("div", xd, [
            d("h3", Sd, C(S(a)("Archive the files")), 1),
            d("div", _d, [
              (x(!0), D(lt, null, xt(h.value, (m) => (x(), D("p", kd, [
                m.type == "dir" ? (x(), D("svg", Dd, Md)) : (x(), D("svg", $d, Ad)),
                d("span", Td, C(m.basename), 1)
              ]))), 256)),
              wt(d("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (m) => i.value = m),
                onKeyup: ie(v, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: S(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Ld), [
                [ne, i.value]
              ]),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: f[1] || (f[1] = (m) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), Pd = { class: "sm:flex sm:items-start" }, Nd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), jd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Vd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Hd = { class: "mt-2" }, zd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Rd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Bd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ud = [
  Bd
], Kd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Yd = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Wd = [
  Yd
], Xd = { class: "ml-1.5" }, qd = { class: "my-1 text-sm text-gray-500" }, Fd = {
  name: "VFModalUnarchive"
}, Gd = /* @__PURE__ */ Object.assign(Fd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter");
    I("storage");
    const s = I("adapter"), { t: a } = I("i18n");
    L("");
    const i = L(t.selection.items[0]), l = L(""), h = L([]), v = () => {
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
    return (p, f) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Unarchive")), 1),
        d("button", {
          type: "button",
          onClick: f[1] || (f[1] = (m) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(a)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Pd, [
          Nd,
          d("div", jd, [
            d("h3", Vd, C(S(a)("Unarchive")), 1),
            d("div", Hd, [
              (x(!0), D(lt, null, xt(h.value, (m) => (x(), D("p", zd, [
                m.type == "dir" ? (x(), D("svg", Rd, Ud)) : (x(), D("svg", Kd, Wd)),
                d("span", Xd, C(m.basename), 1)
              ]))), 256)),
              d("p", qd, C(S(a)("The archive will be unarchived at")) + " (" + C(r.current.dirname) + ")", 1),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: f[0] || (f[0] = (m) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), Jd = { class: "sm:flex sm:items-start" }, Zd = /* @__PURE__ */ d("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Qd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, th = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, eh = { class: "mt-2" }, rh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, sh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, oh = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ih = [
  oh
], nh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ah = /* @__PURE__ */ d("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), lh = [
  ah
], ch = { class: "ml-1.5" }, uh = { class: "text-sm text-gray-500 pb-1 pt-3" }, dh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, hh = /* @__PURE__ */ d("svg", {
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
], -1), fh = { class: "ml-1.5 overflow-auto" }, ph = {
  name: "VFModalMove"
}, gh = /* @__PURE__ */ Object.assign(ph, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, e = I("emitter"), { t: s } = I("i18n");
    I("storage");
    const a = I("adapter"), i = L(t.selection.items.from), l = L(""), h = () => {
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
    return (v, p) => (x(), F(Tt, null, {
      buttons: Y(() => [
        d("button", {
          type: "button",
          onClick: h,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(s)("Yes, Move!")), 1),
        d("button", {
          type: "button",
          onClick: p[1] || (p[1] = (f) => S(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(S(s)("Cancel")), 1)
      ]),
      default: Y(() => [
        d("div", Jd, [
          Zd,
          d("div", Qd, [
            d("h3", th, C(S(s)("Move files")), 1),
            d("div", eh, [
              (x(!0), D(lt, null, xt(i.value, (f) => (x(), D("p", rh, [
                f.type == "dir" ? (x(), D("svg", sh, ih)) : (x(), D("svg", nh, lh)),
                d("span", ch, C(f.path), 1)
              ]))), 256)),
              d("p", uh, C(S(s)("Are you sure you want to move these files?")), 1),
              d("p", dh, [
                hh,
                d("span", fh, C(r.selection.items.to.path), 1)
              ]),
              l.value.length ? (x(), F(Lt, {
                key: 0,
                onHidden: p[0] || (p[0] = (f) => l.value = ""),
                error: ""
              }, {
                default: Y(() => [
                  st(C(l.value), 1)
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
}), mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: Xl,
  ModalMessage: ec,
  ModalNewFolder: uc,
  ModalNewFile: yc,
  ModalPreview: Yu,
  ModalRename: ad,
  ModalUpload: bd,
  ModalArchive: Id,
  ModalUnarchive: Gd,
  ModalMove: gh
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  VueFinder: xl,
  ...mh
};
const yh = {
  install(r) {
    for (const t in Ke)
      if (Ke.hasOwnProperty(t)) {
        const e = Ke[t];
        r.component(e.name, e);
      }
  }
};
export {
  yh as default
};
