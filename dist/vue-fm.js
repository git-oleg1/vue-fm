import { ref as L, watch as jt, inject as O, openBlock as S, createElementBlock as C, createElementVNode as h, unref as x, normalizeClass as ge, createTextVNode as se, toDisplayString as $, createCommentVNode as Z, createVNode as Me, TransitionGroup as ko, withCtx as q, Fragment as ue, renderList as ke, reactive as Lt, onMounted as Ee, onUpdated as Do, withDirectives as xe, vShow as Mt, withModifiers as Ze, nextTick as zt, isRef as Qr, vModelSelect as Er, customRef as Co, withKeys as nt, vModelText as it, normalizeStyle as es, provide as Ye, createBlock as J, resolveDynamicComponent as Mo, renderSlot as qt } from "vue";
import Yt from "plupload";
var Jr;
const It = (Jr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Jr.getAttribute("content"), Ot = (r, { method: e = "get", params: t = {}, json: o = !0, signal: a = null, headers: n = {} }) => {
  const l = { method: e };
  if (l.signal = a, l.headers = {}, Object.assign(l.headers, n), e == "get")
    r += "?" + new URLSearchParams(t);
  else {
    It && (l.headers["X-CSRF-Token"] = It);
    let u = new FormData();
    for (const [b, g] of Object.entries(t))
      u.append(b, g);
    l.body = u;
  }
  return fetch(r, l).then((u) => u.ok ? o ? u.json() : u.text() : u.json().then(Promise.reject.bind(Promise)));
};
function Eo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(e, t) {
    var o = r.get(e);
    o ? o.push(t) : r.set(e, [t]);
  }, off: function(e, t) {
    var o = r.get(e);
    o && (t ? o.splice(o.indexOf(t) >>> 0, 1) : r.set(e, []));
  }, emit: function(e, t) {
    var o = r.get(e);
    o && o.slice().map(function(a) {
      a(t);
    }), (o = r.get("*")) && o.slice().map(function(a) {
      a(e, t);
    });
  } };
}
function Ft(r) {
  let e = localStorage.getItem(r + "_storage");
  const t = L(JSON.parse(e));
  jt(t, o);
  function o() {
    t.value === null || t.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(t.value));
  }
  function a(u, b) {
    t.value = Object.assign({ ...t.value }, { [u]: b });
  }
  function n() {
    t.value = null;
  }
  return { getStore: (u, b = null) => t.value === null || t.value === "" ? b : t.value.hasOwnProperty(u) ? t.value[u] : b, setStore: a, clearStore: n };
}
const $r = L("");
function Ie() {
  function r(e) {
    $r.value = e;
  }
  return { apiUrl: $r, setApiUrl: r };
}
const $o = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, To = {
  key: 0,
  class: "flex text-center"
}, Ao = ["aria-label"], Lo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Io = [
  Lo
], Oo = ["aria-label"], Po = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), No = [
  Po
], jo = ["aria-label"], zo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Vo = [
  zo
], Bo = ["aria-label"], Ro = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Ho = [
  Ro
], Uo = {
  key: 1,
  class: "flex text-center"
}, Ko = { class: "pl-2" }, Yo = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, Wo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Xo = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Zo = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), qo = [
  Xo,
  Zo
], Fo = { class: "flex text-center items-center justify-end" }, Go = ["aria-label"], Jo = /* @__PURE__ */ h("path", { d: "M95.73,10.81c10.53,7.09,19.6,17.37,26.48,29.86l0.67,1.22l-0.67,1.21c-6.88,12.49-15.96,22.77-26.48,29.86 C85.46,79.88,73.8,83.78,61.44,83.78c-12.36,0-24.02-3.9-34.28-10.81C16.62,65.87,7.55,55.59,0.67,43.1L0,41.89l0.67-1.22 c6.88-12.49,15.95-22.77,26.48-29.86C37.42,3.9,49.08,0,61.44,0C73.8,0,85.45,3.9,95.73,10.81L95.73,10.81z M60.79,22.17l4.08,0.39 c-1.45,2.18-2.31,4.82-2.31,7.67c0,7.48,5.86,13.54,13.1,13.54c2.32,0,4.5-0.62,6.39-1.72c0.03,0.47,0.05,0.94,0.05,1.42 c0,11.77-9.54,21.31-21.31,21.31c-11.77,0-21.31-9.54-21.31-21.31C39.48,31.71,49.02,22.17,60.79,22.17L60.79,22.17L60.79,22.17z M109,41.89c-5.5-9.66-12.61-17.6-20.79-23.11c-8.05-5.42-17.15-8.48-26.77-8.48c-9.61,0-18.71,3.06-26.76,8.48 c-8.18,5.51-15.29,13.45-20.8,23.11c5.5,9.66,12.62,17.6,20.8,23.1c8.05,5.42,17.15,8.48,26.76,8.48c9.62,0,18.71-3.06,26.77-8.48 C96.39,59.49,103.5,51.55,109,41.89L109,41.89z" }, null, -1), Qo = [
  Jo
], en = /* @__PURE__ */ h("path", { d: "M0.955,37.326c2.922-3.528,5.981-6.739,9.151-9.625C24.441,14.654,41.462,7.684,59.01,7.334 c6.561-0.131,13.185,0.665,19.757,2.416l-5.904,5.904c-4.581-0.916-9.168-1.324-13.714-1.233 c-15.811,0.316-31.215,6.657-44.262,18.533l0,0c-2.324,2.115-4.562,4.39-6.702,6.82c4.071,4.721,8.6,8.801,13.452,12.227 c2.988,2.111,6.097,3.973,9.296,5.586l-5.262,5.262c-2.782-1.504-5.494-3.184-8.12-5.039c-6.143-4.338-11.813-9.629-16.78-15.85 C-0.338,40.563-0.228,38.59,0.955,37.326L0.955,37.326L0.955,37.326z M96.03,0l5.893,5.893L28.119,79.699l-5.894-5.895L96.03,0 L96.03,0z M97.72,17.609c4.423,2.527,8.767,5.528,12.994,9.014c3.877,3.196,7.635,6.773,11.24,10.735 c1.163,1.277,1.22,3.171,0.226,4.507c-4.131,5.834-8.876,10.816-14.069,14.963C95.119,67.199,79.338,72.305,63.352,72.377 c-6.114,0.027-9.798-3.141-15.825-4.576l3.545-3.543c4.065,0.705,8.167,1.049,12.252,1.031c14.421-0.064,28.653-4.668,40.366-14.02 c3.998-3.191,7.706-6.939,11.028-11.254c-2.787-2.905-5.627-5.543-8.508-7.918c-4.455-3.673-9.042-6.759-13.707-9.273L97.72,17.609 L97.72,17.609z M61.44,18.143c2.664,0,5.216,0.481,7.576,1.359l-5.689,5.689c-0.619-0.079-1.248-0.119-1.886-0.119 c-4.081,0-7.775,1.654-10.449,4.328c-2.674,2.674-4.328,6.369-4.328,10.45c0,0.639,0.04,1.268,0.119,1.885l-5.689,5.691 c-0.879-2.359-1.359-4.912-1.359-7.576c0-5.995,2.43-11.42,6.358-15.349C50.02,20.572,55.446,18.143,61.44,18.143L61.44,18.143z M82.113,33.216c0.67,2.09,1.032,4.32,1.032,6.634c0,5.994-2.43,11.42-6.357,15.348c-3.929,3.928-9.355,6.357-15.348,6.357 c-2.313,0-4.542-0.361-6.633-1.033l5.914-5.914c0.238,0.012,0.478,0.018,0.719,0.018c4.081,0,7.775-1.652,10.449-4.326 s4.328-6.369,4.328-10.449c0-0.241-0.006-0.48-0.018-0.72L82.113,33.216L82.113,33.216z" }, null, -1), tn = [
  en
], rn = ["aria-label"], sn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), on = [
  sn
], nn = ["aria-label"], an = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, ln = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, cn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, dn = ["aria-label"], un = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, hn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, fn = {
  name: "VFToolbar"
}, pn = /* @__PURE__ */ Object.assign(fn, {
  props: {
    data: Object
  },
  setup(r) {
    const e = O("emitter"), { getStore: t, setStore: o } = O("storage"), { t: a } = O("i18n"), n = L(t("viewport", "grid")), l = L([]), u = L(t("full-screen", !1)), b = L(!1);
    e.on("vf-show-hidden-toggle", () => {
      b.value = !b.value;
    });
    const g = L("");
    e.on("vf-search-query", ({ newQuery: T }) => {
      g.value = T;
    });
    const p = O("loadingState"), v = () => p.value, w = () => {
      u.value = !u.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (T) => {
      l.value = T;
    }), e.on("vf-view-toggle", (T) => {
      o("viewport", T), n.value = T;
    }), (T, M) => (S(), C("div", $o, [
      g.value.length ? (S(), C("div", Uo, [
        h("div", Ko, [
          se($(x(a)("Search results for")) + " ", 1),
          h("span", Yo, $(g.value), 1)
        ]),
        v() ? (S(), C("svg", Wo, qo)) : Z("", !0)
      ])) : (S(), C("div", To, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = (E) => x(e).emit("vf-modal-show", {
            type: "new-folder",
            items: l.value
          }))
        }, Io, 8, Ao),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = (E) => l.value.length != 1 || x(e).emit("vf-modal-show", {
            type: "rename",
            items: l.value
          }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ge([
              l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, No, 2))
        ], 8, Oo),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = (E) => !l.value.length || x(e).emit("vf-modal-show", {
            type: "delete",
            items: l.value
          }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ge([
              l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Vo, 2))
        ], 8, jo),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = (E) => x(e).emit("vf-modal-show", {
            type: "upload",
            items: l.value
          }))
        }, Ho, 8, Bo)
      ])),
      h("div", Fo, [
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("\u0421\u043A\u0440\u044B\u0442\u044B\u0435 \u0444\u0430\u0439\u043B\u044B"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          b.value ? (S(), C("svg", {
            key: 0,
            onClick: M[4] || (M[4] = (E) => x(e).emit("vf-show-hidden-toggle")),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 83.78",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "xml:space": "preserve",
            "stroke-width": "1.5",
            class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
          }, Qo)) : (S(), C("svg", {
            key: 1,
            onClick: M[5] || (M[5] = (E) => x(e).emit("vf-show-hidden-toggle")),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 83.78",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "xml:space": "preserve",
            "stroke-width": "1.5",
            class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer fill-gray-500 hover:fill-cyan-700 dark:fill-gray-400 dark:hover:fill-gray-300"
          }, tn))
        ], 8, Go),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (S(), C("svg", {
            onClick: M[6] || (M[6] = (E) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, on))
        ], 8, rn),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: w
        }, [
          (S(), C("svg", an, [
            u.value ? (S(), C("path", ln)) : (S(), C("path", cn))
          ]))
        ], 8, nn),
        h("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[7] || (M[7] = (E) => g.value.length || x(e).emit("vf-view-toggle", n.value == "list" ? "grid" : "list"))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ge([
              g.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
              "h-6 w-6 md:h-8 md:w-8 m-auto"
            ]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            n.value == "grid" ? (S(), C("path", un)) : Z("", !0),
            n.value == "list" ? (S(), C("path", hn)) : Z("", !0)
          ], 2))
        ], 8, dn)
      ])
    ]));
  }
});
var gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ts = { exports: {} };
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(gn, function() {
    function t(c, d) {
      if (!(c instanceof d))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(c, d) {
      for (var s = 0; s < d.length; s++) {
        var m = d[s];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, m.key, m);
      }
    }
    function a(c, d, s) {
      return d && o(c.prototype, d), s && o(c, s), c;
    }
    function n(c, d, s) {
      return d in c ? Object.defineProperty(c, d, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[d] = s, c;
    }
    function l(c, d) {
      var s = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        d && (m = m.filter(function(i) {
          return Object.getOwnPropertyDescriptor(c, i).enumerable;
        })), s.push.apply(s, m);
      }
      return s;
    }
    function u(c) {
      for (var d = 1; d < arguments.length; d++) {
        var s = arguments[d] != null ? arguments[d] : {};
        d % 2 ? l(Object(s), !0).forEach(function(m) {
          n(c, m, s[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(s, m));
        });
      }
      return c;
    }
    function b(c, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(d && d.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), d && p(c, d);
    }
    function g(c) {
      return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, g(c);
    }
    function p(c, d) {
      return p = Object.setPrototypeOf || function(m, i) {
        return m.__proto__ = i, m;
      }, p(c, d);
    }
    function v() {
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
    function w(c, d, s) {
      return v() ? w = Reflect.construct : w = function(i, f, y) {
        var _ = [null];
        _.push.apply(_, f);
        var D = Function.bind.apply(i, _), H = new D();
        return y && p(H, y.prototype), H;
      }, w.apply(null, arguments);
    }
    function T(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function M(c) {
      var d = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return M = function(m) {
        if (m === null || !T(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof d < "u") {
          if (d.has(m))
            return d.get(m);
          d.set(m, i);
        }
        function i() {
          return w(m, arguments, g(this).constructor);
        }
        return i.prototype = Object.create(m.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), p(i, m);
      }, M(c);
    }
    function E(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function A(c, d) {
      return d && (typeof d == "object" || typeof d == "function") ? d : E(c);
    }
    function K(c) {
      var d = v();
      return function() {
        var m = g(c), i;
        if (d) {
          var f = g(this).constructor;
          i = Reflect.construct(m, arguments, f);
        } else
          i = m.apply(this, arguments);
        return A(this, i);
      };
    }
    function R(c, d) {
      for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = g(c), c !== null); )
        ;
      return c;
    }
    function P(c, d, s) {
      return typeof Reflect < "u" && Reflect.get ? P = Reflect.get : P = function(i, f, y) {
        var _ = R(i, f);
        if (!!_) {
          var D = Object.getOwnPropertyDescriptor(_, f);
          return D.get ? D.get.call(y) : D.value;
        }
      }, P(c, d, s || c);
    }
    function V(c, d) {
      return U(c) || ie(c, d) || ae(c, d) || ve();
    }
    function j(c) {
      return k(c) || B(c) || ae(c) || ye();
    }
    function k(c) {
      if (Array.isArray(c))
        return le(c);
    }
    function U(c) {
      if (Array.isArray(c))
        return c;
    }
    function B(c) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(c))
        return Array.from(c);
    }
    function ie(c, d) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(c)))) {
        var s = [], m = !0, i = !1, f = void 0;
        try {
          for (var y = c[Symbol.iterator](), _; !(m = (_ = y.next()).done) && (s.push(_.value), !(d && s.length === d)); m = !0)
            ;
        } catch (D) {
          i = !0, f = D;
        } finally {
          try {
            !m && y.return != null && y.return();
          } finally {
            if (i)
              throw f;
          }
        }
        return s;
      }
    }
    function ae(c, d) {
      if (!!c) {
        if (typeof c == "string")
          return le(c, d);
        var s = Object.prototype.toString.call(c).slice(8, -1);
        if (s === "Object" && c.constructor && (s = c.constructor.name), s === "Map" || s === "Set")
          return Array.from(c);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return le(c, d);
      }
    }
    function le(c, d) {
      (d == null || d > c.length) && (d = c.length);
      for (var s = 0, m = new Array(d); s < d; s++)
        m[s] = c[s];
      return m;
    }
    function ye() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ve() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function he(c, d) {
      var s;
      if (typeof Symbol > "u" || c[Symbol.iterator] == null) {
        if (Array.isArray(c) || (s = ae(c)) || d && c && typeof c.length == "number") {
          s && (c = s);
          var m = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, y = !1, _;
      return {
        s: function() {
          s = c[Symbol.iterator]();
        },
        n: function() {
          var D = s.next();
          return f = D.done, D;
        },
        e: function(D) {
          y = !0, _ = D;
        },
        f: function() {
          try {
            !f && s.return != null && s.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    var F = function(d, s, m) {
      var i = d.x, f = d.y, y = m.x, _ = m.y, D = {
        "+": {
          x: i + y,
          y: f + _
        },
        "-": {
          x: i - y,
          y: f - _
        },
        "*": {
          x: i * y,
          y: f * _
        },
        "/": {
          x: i / y,
          y: f / _
        }
      };
      return D[s];
    }, I = function(d) {
      return {
        x: d.left,
        y: d.top
      };
    }, z = function(d) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: d.x,
        top: d.y,
        right: d.x,
        bottom: d.y,
        width: s,
        height: s
      };
    }, N = function(d) {
      return {
        x: d,
        y: d
      };
    }, ce = function(c, d) {
      var s = d;
      window.addEventListener("resize", s), window.addEventListener("scroll", s);
      var m = new MutationObserver(s);
      c.forEach(function(f, y) {
        m.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return oo(m, s);
      };
      return {
        observer: m,
        callback: s,
        cleanup: i
      };
    }, G = function(c) {
      var d = Ct(c);
      return d.x || d.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, te = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, De = function(c) {
      var d = document.createElement("div");
      return d.style.position = "absolute", c || (d.style.background = "rgba(0, 0, 255, 0.1)", d.style.border = "1px solid rgba(0, 0, 255, 0.45)", d.style.display = "none", d.style.pointerEvents = "none"), d;
    }, lt = function(c, d) {
      var s;
      return function() {
        for (var m = arguments.length, i = new Array(m), f = 0; f < m; f++)
          i[f] = arguments[f];
        var y = function() {
          s = null, c.apply(void 0, i);
        };
        clearTimeout(s), s = setTimeout(y, d);
      };
    }, ct = function() {
      var c, d, s, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((d = document.documentElement) === null || d === void 0 ? void 0 : d.scrollTop) || 0,
        x: ((s = document.body) === null || s === void 0 ? void 0 : s.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Dt = function(c) {
      var d = function s(m) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = m[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (m.push(y), f++, s(m, f)) : m;
      };
      return d([c]);
    }, Xs = function(c, d) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var s = c.getBoundingClientRect();
      return {
        top: s.top,
        left: s.left,
        bottom: s.bottom,
        right: s.right,
        width: (c.clientWidth || s.width) * d,
        height: (c.clientHeight || s.height) * d
      };
    }, Ct = function(c) {
      return !c || c instanceof Document ? ct() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : ct().x,
        y: c.scrollTop >= 0 ? c.scrollTop : ct().y
      };
    }, xr = function(c) {
      var d = c.elementRect, s = c.containerRect, m = c.tolerance, i = m === void 0 ? {
        x: 0,
        y: 0
      } : m, f = [];
      return d.top - i.y < s.top && f.push("top"), d.left - i.x < s.left && f.push("left"), d.bottom + i.y > s.bottom && f.push("bottom"), d.right + i.y > s.right && f.push("right"), f;
    }, Zs = function(c) {
      var d = c.event;
      return {
        x: d.clientX,
        y: d.clientY
      };
    }, qs = function(c) {
      var d = c.scrollAmount, s = c.initialPointerPos, m = c.pointerPos, i = {};
      return m.x > s.x - d.x ? (i.left = s.x - d.x, i.width = m.x - s.x + d.x) : (i.left = m.x, i.width = s.x - m.x - d.x), m.y > s.y - d.y ? (i.top = s.y - d.y, i.height = m.y - s.y + d.y) : (i.top = m.y, i.height = s.y - m.y - d.y), i;
    }, kr = function(d) {
      var s = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(d);
      if (!m.transform || m.transform === "none")
        return s;
      if (m.transform.indexOf("3d") >= 0) {
        var i = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var f, y = (f = i[1]) === null || f === void 0 ? void 0 : f.split(",");
          s.x = parseInt(y[12]) || 0, s.y = parseInt(y[13]) || 0;
        }
        return s;
      } else {
        var _ = m.transform.trim().match(/matrix\((.*?)\)/);
        if (_ && _.length) {
          var D, H = (D = _[1]) === null || D === void 0 ? void 0 : D.split(",");
          s.x = parseInt(H[4]) || 0, s.y = parseInt(H[5]) || 0;
        }
        return s;
      }
    }, Fs = function(d) {
      var s = d.style.transform;
      if (!s || s.indexOf("translate") < 0)
        return kr(d);
      var m = {
        x: 0,
        y: 0
      }, i = s.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var f, y = (f = i[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var _, D = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          m.x = parseInt(D[0]) || 0, m.y = parseInt(D[1]) || 0;
        }
      }
      return !m.x && !m.x ? kr(d) : m;
    }, Gs = function(d) {
      var s = d.style, m = {
        x: parseInt(s.left) || 0,
        y: parseInt(s.top) || 0
      };
      if (!m.x && !m.x) {
        var i = window.getComputedStyle(d);
        return {
          x: parseInt(i.left) || 0,
          y: parseInt(i.top) || 0
        };
      }
      return m;
    }, Js = function(c, d) {
      return d ? Fs(c) : Gs(c);
    }, Qs = function(c) {
      var d = c.element, s = c.edges, m = c.elementRect, i = c.containerRect, f = c.elementPos, y = c.useTransform;
      s.includes("top") && ht(d, {
        y: f.y + i.top - m.top,
        x: f.x
      }, y), s.includes("left") && ht(d, {
        y: f.y,
        x: f.x + i.left - m.left
      }, y), s.includes("bottom") && ht(d, {
        y: f.y + i.bottom - m.bottom,
        x: f.x
      }, y), s.includes("right") && ht(d, {
        y: f.y,
        x: f.x + i.right - m.right
      }, y);
    }, Dr = function(c) {
      var d = c.computedStyle, s = c.node, m = d.position, i = m === "absolute" || m === "relative" || m === "fixed";
      !(s instanceof Document) && !i && (s.style.position = "relative");
    }, eo = function(c) {
      var d = c.shiftKey, s = c.keyboardDragSpeed, m = c.zoom, i = c.key, f = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, D = c.scrollCallback, H = {
        x: 0,
        y: 0
      }, X = d ? s * 4 * m : s * m;
      return f.left.includes(i) && (H.x = y.x || -X, !d && !y.x && _ && D(["left"], s)), f.right.includes(i) && (H.x = y.x || X, !d && !y.x && _ && D(["right"], s)), f.up.includes(i) && (H.y = y.y || -X, !d && !y.y && _ && D(["top"], s)), f.down.includes(i) && (H.y = y.y || X, !d && !y.y && _ && D(["bottom"], s)), H;
    }, to = function(c) {
      var d = c.element, s = c.force, m = c.multiSelectionToggle, i = c.SelectedSet, f = c.hoverClassName;
      d.classList.contains(f) && !s || (i.has(d) ? m && i.delete(d) : i.add(d), d.classList.add(f));
    }, ro = function(c) {
      var d = c.element, s = c.force, m = c.SelectedSet, i = c.PrevSelectedSet, f = c.hoverClassName;
      if (!d.classList.contains(f) && !s)
        return !1;
      var y = m.has(d), _ = i.has(d);
      y && !_ ? m.delete(d) : !y && _ && m.add(d), d.classList.remove(f);
    }, dt = function(d, s, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(d, '" is not of type "').concat(s, '".'));
    }, W = function(d, s, m, i) {
      if (s === void 0)
        return m ? n({}, d, i) : {};
      if (s === null)
        return n({}, d, null);
      var f = !0, y = !1, _ = typeof i == "string";
      _ && (f = typeof s == "string" || s instanceof String), _ && !f && (y = !0, dt(d, "string"));
      var D = !isNaN(i) && typeof i == "number";
      D && (f = !isNaN(s) && typeof s == "number"), D && !f && (y = !0, dt(d, "number"));
      var H = Object.prototype.toString.call(i) === "[object Object]";
      H && (f = Object.prototype.toString.call(s) === "[object Object]"), H && !f && (y = !0, dt(d, "object"));
      var X = typeof i == "boolean";
      X && (f = typeof s == "boolean"), X && !f && (y = !0, dt(d, "boolean"));
      var oe = Array.isArray(i);
      oe && (f = Array.isArray(s)), oe && !f && (y = !0, dt(d, "array"));
      var we = y || m;
      return d === "dragKeys" && f ? n({}, d, Object.assign(i, s)) : d === "dragKeys" && !f ? we ? n({}, d, i) : {} : (d === "dropZones" && f && new Set(s.map(function(be) {
        return be.id;
      })).size !== s.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? n({}, d, s) : we ? n({}, d, i) : {});
    }, so = function(c, d) {
      return u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u({}, W("area", c.area, d, document)), W("selectables", c.selectables, d, null)), W("autoScrollSpeed", c.autoScrollSpeed, d, 5)), W("overflowTolerance", c.overflowTolerance, d, {
        x: 25,
        y: 25
      })), W("zoom", c.zoom, d, 1)), W("customStyles", c.customStyles, d, !1)), W("multiSelectMode", c.multiSelectMode, d, !1)), W("multiSelectToggling", c.multiSelectToggling, d, !0)), W("multiSelectKeys", c.multiSelectKeys, d, ["Control", "Shift", "Meta"])), W("selector", c.selector, d, null)), W("selectionThreshold", c.selectionThreshold, d, 0)), W("draggability", c.draggability, d, !0)), W("immediateDrag", c.immediateDrag, d, !0)), W("keyboardDrag", c.keyboardDrag, d, !0)), W("dragKeys", c.dragKeys, d, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), W("keyboardDragSpeed", c.keyboardDragSpeed, d, 10)), W("useTransform", c.useTransform, d, !0)), W("refreshMemoryRate", c.refreshMemoryRate, d, 80)), W("dropZones", c.dropZones, d, [])), W("dropInsideThreshold", c.dropInsideThreshold, d, 1)), W("dropTargetThreshold", c.dropTargetThreshold, d, 0)), W("usePointerEvents", c.usePointerEvents, d, !1)), W("hoverClass", c.hoverClass, d, "ds-hover")), W("selectableClass", c.selectableClass, d, "ds-selectable")), W("selectedClass", c.selectedClass, d, "ds-selected")), W("selectorClass", c.selectorClass, d, "ds-selector")), W("selectorAreaClass", c.selectorAreaClass, d, "ds-selector-area")), W("droppedTargetClass", c.droppedTargetClass, d, "ds-dropped-target")), W("droppedInsideClass", c.droppedInsideClass, d, "ds-dropped-inside")), W("droppableClass", c.droppableClass, d, "ds-droppable")), W("dropZoneClass", c.dropZoneClass, d, "ds-dropzone")), W("dropZoneReadyClass", c.dropZoneReadyClass, d, "ds-dropzone-ready")), W("dropZoneTargetClass", c.dropZoneTargetClass, d, "ds-dropzone-target")), W("dropZoneInsideClass", c.dropZoneInsideClass, d, "ds-dropzone-inside"));
    }, ut = function(c, d) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (s > 0) {
        var i = (c.right - c.left) * s, f = (c.bottom - c.top) * s;
        m = {
          left: c.left + i,
          right: c.right - i,
          top: c.top + f,
          bottom: c.bottom - f
        };
      }
      return m.left < d.right && m.right > d.left && m.top < d.bottom && m.bottom > d.top;
    }, Cr = function(c) {
      var d = c.element, s = c.posDirection, m = c.containerRect, i = c.useTransform, f = Js(d, i), y = F(f, "+", s);
      ht(d, y, i);
      var _ = d.getBoundingClientRect(), D = xr({
        elementRect: _,
        containerRect: m
      });
      Qs({
        element: d,
        edges: D,
        elementRect: _,
        containerRect: m,
        elementPos: y,
        useTransform: i
      });
    }, oo = function(c, d) {
      window.removeEventListener("resize", d), window.removeEventListener("scroll", d), c.disconnect();
    }, no = function(c, d, s) {
      if (!!d.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? m || document.body : c, f = d.includes("top") && i.scrollTop > 0, y = d.includes("bottom") && i.scrollTop < i.scrollHeight, _ = d.includes("left") && i.scrollLeft > 0, D = d.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * s), y && (i.scrollTop += 1 * s), _ && (i.scrollLeft -= 1 * s), D && (i.scrollLeft += 1 * s);
      }
    }, ht = function(c, d, s) {
      if (s) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(d.x, "px,").concat(d.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(d.x, "px"), c.style.top = "".concat(d.y, "px");
      return c;
    }, io = function(c) {
      for (var d = c.subscribe, s = c.publish, m = c.Interaction, i = c.SelectedSet, f = c.DropZones, y = {
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
        "Interaction:update": [
          {
            name: "dragmove",
            condition: function(oe) {
              return oe.event;
            }
          }
        ],
        "Interaction:end": [
          {
            name: "callback",
            extraData: function() {
              var oe = f.getTarget();
              return u({}, oe ? {
                dropTarget: oe.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var oe = V(H[D], 2), we = oe[0], be = oe[1];
        ["pre", !1].forEach(function($e) {
          return d($e ? "".concat(we, ":").concat($e) : we, function(ne) {
            return be.forEach(function(Se) {
              return (!Se.condition || Se.condition(ne)) && s($e ? "".concat($e).concat(Se.name) : Se.name, u(u({
                items: i.elements,
                isDragging: m.isDragging
              }, ne), Se.extraData ? Se.extraData(ne) : {}));
            });
          });
        });
      }, D = 0, H = Object.entries(y); D < H.length; D++)
        _();
    }, Ue = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : j(new Set(j(c))) : [];
    }, Mr = function(c, d) {
      c.style.left = "".concat(d.left, "px"), c.style.top = "".concat(d.top, "px"), c.style.width = "".concat(d.width, "px"), c.style.height = "".concat(d.height, "px");
    }, ao = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "DS", void 0), n(this, "_observers", void 0), n(this, "_node", void 0), n(this, "_parentNodes", void 0), n(this, "_computedStyle", void 0), n(this, "_computedBorder", void 0), n(this, "_rect", void 0), n(this, "setArea", function(i) {
          s._node = i, Dr({
            computedStyle: s.computedStyle,
            node: s._node
          }), setTimeout(function() {
            s.DS.PubSub.publish("Area:modified:pre", {
              item: s
            }), s.reset(), s.DS.PubSub.publish("Area:modified", {
              item: s
            });
          });
        }), n(this, "start", function() {
          s._observers = ce(s.parentNodes, lt(function(i) {
            s.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: s
            }), s.reset(), s.DS.PubSub.publish("Area:modified", {
              event: i,
              item: s
            });
          }, 60));
        }), n(this, "reset", function() {
          s._computedStyle = void 0, s._rect = void 0, s._computedBorder = void 0, s._parentNodes = void 0;
        }), n(this, "stop", function() {
          s._observers.cleanup(), s.reset();
        }), n(this, "scroll", function(i, f) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: f
          };
          s.DS.PubSub.publish("Area:scroll:pre", y), no(s._node, i, f), s.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          return s.setArea(f.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(c, [{
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
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = Xs(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Dt(this.HTMLNode);
        }
      }]), c;
    }(), lo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_prevCursorPos", void 0), n(this, "_prevScrollPos", void 0), n(this, "_elements", []), n(this, "_dragKeys", void 0), n(this, "_dragKeysFlat", []), n(this, "assignDragkeys", function() {
          s._dragKeys = {
            up: s.DS.stores.SettingsStore.s.dragKeys.up.map(function(i) {
              return i.toLowerCase();
            }),
            down: s.DS.stores.SettingsStore.s.dragKeys.down.map(function(i) {
              return i.toLowerCase();
            }),
            left: s.DS.stores.SettingsStore.s.dragKeys.left.map(function(i) {
              return i.toLowerCase();
            }),
            right: s.DS.stores.SettingsStore.s.dragKeys.right.map(function(i) {
              return i.toLowerCase();
            })
          }, s._dragKeysFlat = [].concat(j(s._dragKeys.up), j(s._dragKeys.down), j(s._dragKeys.left), j(s._dragKeys.right));
        }), n(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(_) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability || s.DS.continue)) {
            var D = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:start:pre", "Interaction:start"], D), s._elements = s.DS.getSelection(), s.handleZIndex(!0);
            var H = eo({
              shiftKey: s.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: s.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: s.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: s.DS.Area.scroll,
              scrollDiff: s._scrollDiff,
              canScroll: s.DS.stores.ScrollStore.canScroll,
              dragKeys: s._dragKeys
            });
            s._elements.forEach(function(X) {
              return Cr({
                element: X,
                posDirection: H,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            }), s.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), n(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(_) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: f,
              isDragging: s.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), n(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (s._prevCursorPos = null, s._prevScrollPos = null, s._elements = s.DS.getSelection(), s.handleZIndex(!0));
        }), n(this, "stop", function(i) {
          i != null && i.isKeyboard || (s._prevCursorPos = null, s._prevScrollPos = null, s.handleZIndex(!1), s._elements = []);
        }), n(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !s._elements.length || y || s.DS.continue)) {
            var _ = F(s._cursorDiff, "+", s._scrollDiff);
            s._elements.forEach(function(D) {
              return Cr({
                element: D,
                posDirection: _,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), n(this, "handleZIndex", function(i) {
          s._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(c, [{
        key: "_cursorDiff",
        get: function() {
          var s = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? F(s, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = s, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var s = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? F(s, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = s, m;
        }
      }]), c;
    }(), co = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS, i = d.id, f = d.element, y = d.droppables;
        t(this, c), n(this, "id", void 0), n(this, "element", void 0), n(this, "droppables", void 0), n(this, "_rect", void 0), n(this, "_observers", void 0), n(this, "_timeout", void 0), n(this, "_itemsDropped", []), n(this, "_itemsInside", void 0), n(this, "setReadyClasses", function(_) {
          if (!s.isDestroyed) {
            var D = s.droppables.filter(function(H) {
              return s.DS.SelectedSet.has(H);
            });
            !D.length || (D.forEach(function(H) {
              H.classList[_]("".concat(s.Settings.droppableClass)), H.classList[_]("".concat(s.Settings.droppableClass, "-").concat(s.id));
            }), s.element.classList[_]("".concat(s.Settings.dropZoneReadyClass)));
          }
        }), n(this, "handleNoDrop", function() {
          var _;
          s.isDestroyed || (s.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(s.Settings.droppedTargetClass), D.classList.remove("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), s._itemsDropped = s._itemsDropped.filter(function(D) {
            return !s.DS.SelectedSet.has(D);
          }), (_ = s._itemsDropped) !== null && _ !== void 0 && _.length || s.element.classList.remove("".concat(s.Settings.dropZoneTargetClass)));
        }), n(this, "handleDrop", function() {
          var _, D, H;
          s.isDestroyed || (s._itemsDropped = j(new Set([].concat(j(s._itemsDropped), j((_ = s.droppables) === null || _ === void 0 ? void 0 : _.filter(function(X) {
            return s.DS.SelectedSet.has(X);
          }))))), (D = s._itemsDropped) === null || D === void 0 || D.forEach(function(X) {
            X.classList.add("".concat(s.Settings.droppedTargetClass)), X.classList.add("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), (H = s._itemsDropped) !== null && H !== void 0 && H.length && s.element.classList.add("".concat(s.Settings.dropZoneTargetClass)));
        }), n(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          s.droppables.forEach(function(D) {
            s.itemsInside.includes(D) ? (D.classList.add("".concat(s.Settings.droppedInsideClass)), D.classList.add("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), _ = !0) : (D.classList.remove("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), D.className.includes("".concat(s.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(s.Settings.droppedInsideClass)));
          }), _ ? s.element.classList.add("".concat(s.Settings.dropZoneInsideClass)) : s.element.classList.remove("".concat(s.Settings.dropZoneInsideClass));
        }), n(this, "start", function(_) {
          var D = _.isDragging;
          !D || s.isDestroyed || s.setReadyClasses("add");
        }), n(this, "stop", function(_) {
          var D = _.isDragging;
          !D || s.isDestroyed || (s.setReadyClasses("remove"), s.handleItemsInsideClasses());
        }), n(this, "toObject", function() {
          return {
            id: s.id,
            element: s.element,
            droppables: s.droppables,
            itemsDropped: s.itemsDropped,
            itemsInside: s.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = i, this.element = f, this.droppables = Ue(y), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var D = _.settings;
          s.element.classList.remove(D["dropZoneClass:pre"]), s.element.classList.add(D.dropZoneClass);
        }), this._observers = ce(this.parentNodes, lt(function() {
          return s._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(c, [{
        key: "destroy",
        value: function() {
          var s = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(s.Settings.droppedTargetClass)), m.classList.remove("".concat(s.Settings.droppedTargetClass, "-").concat(s.id)), m.classList.remove("".concat(s.Settings.droppableClass)), m.classList.remove("".concat(s.Settings.droppableClass, "-").concat(s.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var s = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return ut(s.DS.SelectableSet.rects.get(m), s.rect, s.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return s._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Dt(this.element);
        }
      }]), c;
    }(), uo = function c(d) {
      var s = this, m = d.DS;
      t(this, c), n(this, "_zoneByElement", /* @__PURE__ */ new Map()), n(this, "_zoneById", /* @__PURE__ */ new Map()), n(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), n(this, "_zones", void 0), n(this, "setDropZones", function(i) {
        var f = i.dropZones;
        !f || (s._zones && s._zones.forEach(function(y) {
          return y.destroy();
        }), s._zones = f.map(function(y) {
          return new co(u({
            DS: s.DS
          }, y));
        }), s._zones.forEach(function(y) {
          s._zoneByElement.set(y.element, y), s._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
            var D = s._zonesByDroppable.get(_);
            if (!(D != null && D.length))
              return s._zonesByDroppable.set(_, [y]);
            s._zonesByDroppable.set(_, j(new Set([].concat(j(D), [y]))));
          });
        }));
      }), n(this, "_handleDrop", function(i) {
        s._zones.forEach(function(f) {
          f !== i && f.handleNoDrop();
        }), i && i.handleDrop();
      }), n(this, "_getZoneByElementsFromPoint", function(i, f) {
        for (var y = f.x, _ = f.y, D = 0, H = i.length; D < H; D++) {
          var X = s._zoneByElement.get(i[D]);
          if (X && ut(X.rect, {
            left: y,
            right: y,
            top: _,
            bottom: _
          }, Math.min(s.Settings.dropTargetThreshold, 0.5)))
            return X;
        }
      }), n(this, "stop", function(i) {
        var f = i.isDragging;
        if (!!f) {
          var y = s.getTarget();
          s._handleDrop(y);
        }
      }), n(this, "getItemsDroppedById", function(i) {
        var f = s._zoneById.get(i);
        return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
      }), n(this, "getItemsInsideById", function(i, f) {
        var y = s._zoneById.get(i);
        if (!y)
          return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        var _ = y.itemsInside;
        return f && y.handleItemsInsideClasses(), _;
      }), n(this, "getTarget", function(i) {
        var f;
        if (!!((f = s._zones) !== null && f !== void 0 && f.length)) {
          var y = (i == null ? void 0 : i.x) || s.DS.stores.PointerStore.currentVal.x, _ = (i == null ? void 0 : i.y) || s.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, _);
          return s._getZoneByElementsFromPoint(D, {
            x: y,
            y: _
          });
        }
      }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", this.setDropZones), this.setDropZones({
        dropZones: this.DS.stores.SettingsStore.s.dropZones
      }), this.DS.subscribe("Interaction:end", this.stop);
    }, ho = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "isInteracting", void 0), n(this, "isDragging", void 0), n(this, "init", function() {
          return s.DS.publish("Interaction:init:pre", {});
        }), n(this, "_init", function() {
          s.stop(), s.Settings.usePointerEvents ? s.DS.Area.HTMLNode.addEventListener("pointerdown", s.start, {
            passive: !1
          }) : s.DS.Area.HTMLNode.addEventListener("mousedown", s.start), s.DS.Area.HTMLNode.addEventListener("touchstart", s.start, {
            passive: !1
          }), s.DS.publish("Interaction:init", {});
        }), n(this, "start", function(i) {
          return s.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), n(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), s._canInteract(i) && (s.isInteracting = !0, s.isDragging = s.isDragEvent(i), s.DS.publish("Interaction:start", {
            event: i,
            isDragging: s.isDragging
          }), s.Settings.usePointerEvents ? (document.addEventListener("pointerup", s.reset), document.addEventListener("pointercancel", s.reset)) : document.addEventListener("mouseup", s.reset), document.addEventListener("touchend", s.reset));
        }), n(this, "isDragEvent", function(i) {
          var f = i.target.closest(".".concat(s.Settings.selectableClass));
          return !s.Settings.draggability || s.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !f ? !1 : (s.Settings.immediateDrag && (s.DS.SelectedSet.size ? s.DS.SelectedSet.has(f) || (s.DS.SelectedSet.clear(), s.DS.SelectedSet.add(f)) : s.DS.SelectedSet.add(f)), !!s.DS.SelectedSet.has(f));
        }), n(this, "onClick", function(i) {
          var f = i.event;
          if (!!s._canInteract(f) && !(f.detail > 0)) {
            var y = s.DS, _ = y.stores, D = _.PointerStore, H = _.KeyStore, X = y.SelectableSet, oe = y.SelectedSet;
            D.start(f);
            var we = f.target;
            !X.has(we) || (H.isMultiSelectKeyPressed(f) || oe.clear(), oe.toggle(we), s.reset());
          }
        }), n(this, "stop", function() {
          s.isInteracting = !1, s.isDragging = !1, s.Settings.usePointerEvents ? (s.DS.Area.HTMLNode.removeEventListener("pointerdown", s.start, {
            passive: !1
          }), document.removeEventListener("pointerup", s.reset), document.removeEventListener("pointercancel", s.reset)) : (s.DS.Area.HTMLNode.removeEventListener("mousedown", s.start), document.removeEventListener("mouseup", s.reset)), s.DS.Area.HTMLNode.removeEventListener("touchstart", s.start, {
            passive: !1
          }), document.removeEventListener("touchend", s.reset);
        }), n(this, "update", function(i) {
          var f = i.event, y = i.scroll_directions, _ = i.scroll_multiplier;
          s.isInteracting && s.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: s.isDragging
          });
        }), n(this, "reset", function(i) {
          return s.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), n(this, "_reset", function(i) {
          var f = s.isDragging;
          s.stop(), s.init(), s.DS.publish("Interaction:end", {
            event: i,
            isDragging: f
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", this.init), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(i) {
          var f = i.event;
          return s.start(f);
        }), this.DS.subscribe("Interaction:start:pre", function(i) {
          var f = i.event;
          return s._start(f);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(i) {
          var f = i.event;
          return s._reset(f);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return a(c, [{
        key: "_canInteract",
        value: function(s) {
          var m = s.clientX === 0 && s.clientY === 0 && s.detail === 0 && s.target;
          return !(s.button === 2 || this.isInteracting || s.target && !this.DS.SelectorArea.isInside(s.target) || !m && !this.DS.SelectorArea.isClicked(s));
        }
      }]), c;
    }(), fo = function c(d) {
      var s = this, m = d.DS;
      t(this, c), n(this, "subscribers", {}), n(this, "subscribe", function(i, f) {
        return Array.isArray(s.subscribers[i]) || (s.subscribers[i] = []), s.subscribers[i].push(f), s.subscribers[i].length - 1;
      }), n(this, "unsubscribe", function(i, f, y) {
        y >= 0 ? s.subscribers[i].splice(y, 1) : f && (s.subscribers[i] = s.subscribers[i].filter(function(_) {
          return _ !== f;
        }));
      }), n(this, "publish", function(i, f) {
        Array.isArray(i) ? i.forEach(function(y) {
          return s._publish(y, f);
        }) : s._publish(i, f);
      }), n(this, "_publish", function(i, f) {
        var y = s.subscribers[i];
        !Array.isArray(y) || (i.includes(":pre") ? s._handlePrePublish(y, f) : s._handlePublish(y, f));
      }), n(this, "_handlePublish", function(i, f) {
        for (var y = 0, _ = i.length; y < _; y++) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), n(this, "_handlePrePublish", function(i, f) {
        for (var y = i.length; y--; ) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), this.DS = m;
    }, po = /* @__PURE__ */ function(c) {
      b(s, c);
      var d = K(s);
      function s(m) {
        var i, f = m.DS;
        return t(this, s), i = d.call(this), n(E(i), "_rects", void 0), n(E(i), "_timeout", void 0), n(E(i), "init", function() {
          return Ue(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), n(E(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), n(E(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), n(E(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), n(E(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), n(E(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          i.forEach(function(D) {
            D.classList.remove(_["selectableClass:pre"]), D.classList.add(_.selectableClass);
          });
        }), i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!P(g(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:added:pre", f), i.classList.add(this.Settings.selectableClass), i.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.addEventListener("pointerdown", this._onPointer, {
              passive: !1
            }) : i.addEventListener("mousedown", this._onPointer), i.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Dr({
              computedStyle: window.getComputedStyle(i),
              node: i
            }), this.DS.publish("Selectable:added", f), P(g(s.prototype), "add", this).call(this, i);
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!P(g(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:removed:pre", f), i.classList.remove(this.Settings.selectableClass), i.classList.remove(this.Settings.hoverClass), i.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.removeEventListener("pointerdown", this._onPointer, {
              passive: !1
            }) : i.removeEventListener("mousedown", this._onPointer), i.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", f), P(g(s.prototype), "delete", this).call(this, i);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }, {
        key: "rects",
        get: function() {
          var i = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(f) {
            return i._rects.set(f, f.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return i._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), s;
    }(/* @__PURE__ */ M(Set)), go = /* @__PURE__ */ function(c) {
      b(s, c);
      var d = K(s);
      function s(m) {
        var i, f = m.DS;
        return t(this, s), i = d.call(this), n(E(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), n(E(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), n(E(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), i.DS = f, i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!P(g(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selected:added:pre", f), P(g(s.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!P(g(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            this.DS.publish("Selected:removed:pre", f);
            var y = P(g(s.prototype), "delete", this).call(this, i);
            return i.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", f), y;
          }
        }
      }, {
        key: "toggle",
        value: function(i) {
          return this.has(i) ? this.delete(i) : this.add(i), i;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), s;
    }(/* @__PURE__ */ M(Set)), mo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_prevSelectedSet", void 0), n(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (s._storePrevious(f), s._handleInsideSelection(!0, f));
        }), n(this, "update", function(i) {
          var f = i.isDragging;
          f || s.DS.continue || s._handleInsideSelection();
        }), n(this, "_handleInsideSelection", function(i, f) {
          var y = s.DS, _ = y.SelectableSet, D = y.SelectorArea, H = y.Selector, X = _.rects, oe = [], we = [], be = he(X), $e;
          try {
            for (be.s(); !($e = be.n()).done; ) {
              var ne = V($e.value, 2), Se = ne[0], ft = ne[1];
              !D.isInside(Se, ft) || (ut(ft, H.rect, s.Settings.selectionThreshold) ? oe.push(Se) : we.push(Se));
            }
          } catch (Ke) {
            be.e(Ke);
          } finally {
            be.f();
          }
          var Kt = s.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && s.Settings.multiSelectToggling;
          s.DS.continue || (oe.forEach(function(Ke) {
            return to({
              element: Ke,
              force: i,
              multiSelectionToggle: Kt,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass
            });
          }), we.forEach(function(Ke) {
            return ro({
              element: Ke,
              force: i,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass,
              PrevSelectedSet: s._prevSelectedSet
            });
          }));
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(c, [{
        key: "_storePrevious",
        value: function(s) {
          var m = this.DS, i = m.stores.KeyStore, f = m.SelectedSet;
          i.isMultiSelectKeyPressed(s) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_rect", void 0), n(this, "attachSelector", function() {
          var i, f;
          s.HTMLNode && (i = s.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && s.DS.SelectorArea.HTMLNode.removeChild(s.HTMLNode), s.HTMLNode = s.DS.stores.SettingsStore.s.selector || De(s.DS.stores.SettingsStore.s.customStyles), s.HTMLNode.classList.add(s.DS.stores.SettingsStore.s.selectorClass), s.HTMLNode && (f = s.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && s.DS.SelectorArea.HTMLNode.appendChild(s.HTMLNode);
        }), n(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = s.DS.stores.PointerStore, _ = y.initialValArea;
            Mr(s.HTMLNode, z(_, 1)), s.HTMLNode.style.display = "block", s._rect = null;
          }
        }), n(this, "stop", function() {
          s.HTMLNode.style.width = "0", s.HTMLNode.style.height = "0", s.HTMLNode.style.display = "none";
        }), n(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || s.DS.continue)) {
            var y = s.DS.stores, _ = y.ScrollStore, D = y.PointerStore, H = qs({
              scrollAmount: _.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Mr(s.HTMLNode, H), s._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorClass:pre"]), s.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_scrollInterval", void 0), n(this, "_rect", void 0), n(this, "currentEdges", []), n(this, "start", function() {
          return s.applyElements("append");
        }), n(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          s.HTMLNode[y](s.DS.Selector.HTMLNode), document[f][y](s.HTMLNode);
        }), n(this, "updatePos", function() {
          s._rect = null;
          var i = s.DS.Area.rect, f = s.DS.Area.computedBorder, y = s.HTMLNode.style, _ = "".concat(i.top + f.top, "px"), D = "".concat(i.left + f.left, "px"), H = "".concat(i.width, "px"), X = "".concat(i.height, "px");
          y.top !== _ && (y.top = _), y.left !== D && (y.left = D), y.width !== H && (y.width = H), y.height !== X && (y.height = X);
        }), n(this, "stop", function(i) {
          s.stopAutoScroll(), i && s.applyElements("remove");
        }), n(this, "startAutoScroll", function() {
          s.currentEdges = [], s._scrollInterval = setInterval(function() {
            return s.handleAutoScroll();
          }, 16);
        }), n(this, "handleAutoScroll", function() {
          if (!s.DS.continue) {
            var i = s.DS, f = i.stores.PointerStore, y = i.Area;
            s.currentEdges = xr({
              elementRect: z(f.currentVal),
              containerRect: s.rect,
              tolerance: s.DS.stores.SettingsStore.s.overflowTolerance
            }), s.currentEdges.length && y.scroll(s.currentEdges, s.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), n(this, "stopAutoScroll", function() {
          s.currentEdges = [], clearInterval(s._scrollInterval);
        }), n(this, "isInside", function(i, f) {
          return s.DS.Area.HTMLNode.contains(i) && s.DS.stores.ScrollStore.canScroll ? !0 : ut(s.rect, f || i.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = te(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), s.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          s.updatePos(), s.stopAutoScroll();
        });
      }
      return a(c, [{
        key: "isClicked",
        value: function(s) {
          var m = this.DS.stores.PointerStore, i = s ? m.getPointerPosition(s) : m.initialVal;
          return ut({
            left: i.x,
            top: i.y,
            right: i.x,
            bottom: i.y
          }, this.rect);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_currentValues", /* @__PURE__ */ new Set()), n(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), n(this, "init", function() {
          document.addEventListener("keydown", s.keydown), document.addEventListener("keyup", s.keyup), window.addEventListener("blur", s.reset);
        }), n(this, "keydown", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:down:pre", {
            event: i,
            key: f
          }), s._currentValues.add(f), s.DS.publish("KeyStore:down", {
            event: i,
            key: f
          });
        }), n(this, "keyup", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:up:pre", {
            event: i,
            key: f
          }), s._currentValues.delete(f), s.DS.publish("KeyStore:up", {
            event: i,
            key: f
          });
        }), n(this, "stop", function() {
          document.removeEventListener("keydown", s.keydown), document.removeEventListener("keyup", s.reset), window.removeEventListener("blur", s.reset), s.reset();
        }), n(this, "reset", function() {
          return s._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return a(c, [{
        key: "isMultiSelectKeyPressed",
        value: function(s) {
          var m = this;
          if (this.DS.stores.SettingsStore.s.multiSelectMode)
            return !0;
          var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
            return f.toLocaleLowerCase();
          });
          return !!(this.currentValues.some(function(f) {
            return i.includes(f.toLocaleLowerCase());
          }) || s && i.some(function(f) {
            return s[m._keyMapping[f]];
          }));
        }
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), wo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_isMouseInteraction", !1), n(this, "_initialValArea", void 0), n(this, "_currentValArea", void 0), n(this, "_lastValArea", void 0), n(this, "_initialVal", void 0), n(this, "_currentVal", void 0), n(this, "_lastVal", void 0), n(this, "_lastTouch", void 0), n(this, "init", function() {
          s.Settings.usePointerEvents ? document.addEventListener("pointermove", s.update, {
            passive: !1
          }) : document.addEventListener("mousemove", s.update), document.addEventListener("touchmove", s.update, {
            passive: !1
          });
        }), n(this, "getPointerPosition", function(i) {
          return Zs({
            event: s._normalizedEvent(i)
          });
        }), n(this, "update", function(i) {
          !i || (s.DS.publish("PointerStore:updated:pre", {
            event: i
          }), s.currentVal = s.getPointerPosition(i), s._isMouseInteraction && s.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), n(this, "stop", function() {
          s.Settings.usePointerEvents ? document.removeEventListener("pointermove", s.update, {
            passive: !1
          }) : document.removeEventListener("mousemove", s.update), document.removeEventListener("touchmove", s.update, {
            passive: !1
          }), setTimeout(function() {
            return s._isMouseInteraction = !1;
          }, 100);
        }), n(this, "reset", function(i) {
          !i || (s.currentVal = s.lastVal = s.getPointerPosition(i), s.stop(), s.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return s.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return s.reset(f);
        });
      }
      return a(c, [{
        key: "start",
        value: function(s) {
          !s || (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(s));
        }
      }, {
        key: "_normalizedEvent",
        value: function(s) {
          return "touches" in s && s.type !== "touchend" && (this._lastTouch = s), "touches" in s ? this._lastTouch.touches[0] : s;
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
        set: function(s) {
          this._initialVal = s, this._initialValArea = s && F(s, "-", F(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(s) {
          this._currentVal = s, this._currentValArea = s && F(s, "-", F(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(s) {
          this._lastVal = s, this._lastValArea = s && F(s, "-", F(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), So = /* @__PURE__ */ function() {
      function c(d) {
        var s = this, m = d.DS;
        t(this, c), n(this, "_initialVal", void 0), n(this, "_currentVal", void 0), n(this, "_canScroll", void 0), n(this, "init", function() {
          return s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), n(this, "start", function() {
          s._currentVal = s._initialVal = Ct(s.DS.stores.SettingsStore.s.area), s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), n(this, "update", function() {
          return s._currentVal = Ct(s.DS.stores.SettingsStore.s.area);
        }), n(this, "stop", function() {
          s.DS.stores.SettingsStore.s.area.removeEventListener("scroll", s.update), s._initialVal = {
            x: 0,
            y: 0
          }, s._canScroll = null;
        }), n(this, "reset", function() {
          s.stop(), s.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return s.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return s.reset();
        });
      }
      return a(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = G(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var s = F(this.currentVal, "-", this.initialVal), m = N(this.DS.stores.SettingsStore.s.zoom), i = F(F(s, "*", m), "-", s);
          return {
            x: s.x + i.x,
            y: s.y + i.y
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
          return this._currentVal || (this._currentVal = Ct(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), _o = function c(d) {
      var s = this, m = d.DS, i = d.settings;
      t(this, c), n(this, "_settings", {}), n(this, "s", {}), n(this, "update", function(f) {
        var y = f.settings, _ = f.init;
        return s.DS.publish("Settings:updated:pre", u({
          settings: y
        }, _ ? {
          init: _
        } : {}));
      }), n(this, "_update", function(f) {
        for (var y = f.settings, _ = f.init, D = so(y, _), H = function() {
          var be, $e = V(oe[X], 2), ne = $e[0], Se = $e[1];
          ne in s._settings || Object.defineProperty(s.s, ne, {
            get: function() {
              return s._settings[ne];
            },
            set: function(Ke) {
              return s.update({
                settings: n({}, ne, Ke)
              });
            }
          }), s._settings["".concat(ne, ":pre")] = s._settings[ne], s._settings[ne] = Se;
          var ft = {
            settings: (be = {}, n(be, ne, s._settings[ne]), n(be, "".concat(ne, ":pre"), s._settings["".concat(ne, ":pre")]), be)
          };
          s.DS.publish("Settings:updated", ft), s.DS.publish("Settings:updated:".concat(ne), ft);
        }, X = 0, oe = Object.entries(D); X < oe.length; X++)
          H();
      }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: i,
        init: !0
      });
    }, xo = /* @__PURE__ */ function() {
      function c(d) {
        var s = this;
        t(this, c), n(this, "continue", !1), n(this, "start", function() {
          s.stopped = !1, s.Interaction.init();
        }), n(this, "break", function() {
          return s.continue = !0;
        }), n(this, "setSettings", function(m) {
          return s.stores.SettingsStore.update({
            settings: m
          });
        }), n(this, "getSelection", function() {
          return s.SelectedSet.elements;
        }), n(this, "getSelectables", function() {
          return s.SelectableSet.elements;
        }), n(this, "getInitialCursorPosition", function() {
          return s.stores.PointerStore.initialVal;
        }), n(this, "getCurrentCursorPosition", function() {
          return s.stores.PointerStore.currentVal;
        }), n(this, "getPreviousCursorPosition", function() {
          return s.stores.PointerStore.lastVal;
        }), n(this, "getInitialCursorPositionArea", function() {
          return s.stores.PointerStore.initialValArea;
        }), n(this, "getCurrentCursorPositionArea", function() {
          return s.stores.PointerStore.currentValArea;
        }), n(this, "getPreviousCursorPositionArea", function() {
          return s.stores.PointerStore.lastValArea;
        }), n(this, "isMultiSelect", function(m) {
          return s.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), n(this, "isDragging", function() {
          return s.Interaction.isDragging;
        }), n(this, "getZoneByCoordinates", function(m) {
          var i;
          return (i = s.DropZones.getTarget(m)) === null || i === void 0 ? void 0 : i.toObject();
        }), n(this, "getItemsDroppedByZoneId", function(m) {
          return s.DropZones.getItemsDroppedById(m);
        }), n(this, "getItemsInsideByZoneId", function(m, i) {
          return s.DropZones.getItemsInsideById(m, i);
        }), this.PubSub = new fo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = {}, this.stores.SettingsStore = new _o({
          DS: this,
          settings: d
        }), this.stores.PointerStore = new wo({
          DS: this
        }), this.stores.ScrollStore = new So({
          DS: this
        }), this.stores.KeyStore = new yo({
          DS: this
        }), this.Area = new ao({
          DS: this
        }), this.Selector = new vo({
          DS: this
        }), this.SelectorArea = new bo({
          DS: this
        }), this.SelectableSet = new po({
          DS: this
        }), this.SelectedSet = new go({
          DS: this
        }), this.Selection = new mo({
          DS: this
        }), this.Drag = new lo({
          DS: this
        }), this.DropZones = new uo({
          DS: this
        }), this.Interaction = new ho({
          DS: this
        }), io({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return s.continue = !1;
        }), this.start();
      }
      return a(c, [{
        key: "stop",
        value: function() {
          var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          i && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(s), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), s && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(s) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Ue(s)), i || this.addSelectables(s), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(s) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ue(s)), i && this.removeSelectables(s), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(s) {
          var m = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ue(s).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(s, i, f) : m.addSelection(s, i, f);
          }), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(s) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(s, m, i), this.getSelection();
        }
      }, {
        key: "clearSelection",
        value: function() {
          var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), s && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "addSelectables",
        value: function(s, m, i) {
          var f = Ue(s);
          return this.SelectableSet.addAll(f), m && this.SelectedSet.addAll(f), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), s;
        }
      }, {
        key: "setSelectables",
        value: function(s) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(s, m), this.addSelectables(s, i);
        }
      }, {
        key: "removeSelectables",
        value: function(s, m, i) {
          return this.SelectableSet.deleteAll(Ue(s)), m && this.removeSelection(s), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), s;
        }
      }]), c;
    }();
    return xo;
  });
})(ts);
const mn = ts.exports, rs = (r, e, t, o, a) => (e = Math, t = e.log, o = 1024, a = t(r) / t(o) | 0, r / e.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ss = (r, e = null) => {
  var t;
  return new Date(r * 1e3).toLocaleString((t = e != null ? e : navigator.language) != null ? t : "en-US");
}, vn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, bn = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), yn = [
  bn
], wn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Sn = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), _n = [
  Sn
], xn = {
  name: "VFSortIcon"
}, Et = /* @__PURE__ */ Object.assign(xn, {
  props: { direction: String },
  setup(r) {
    return (e, t) => (S(), C("div", null, [
      r.direction == "down" ? (S(), C("svg", vn, yn)) : Z("", !0),
      r.direction == "up" ? (S(), C("svg", wn, _n)) : Z("", !0)
    ]));
  }
}), kn = ["onClick"], Dn = {
  name: "VFToast.vue"
}, Cn = /* @__PURE__ */ Object.assign(Dn, {
  setup(r) {
    const e = O("emitter"), { getStore: t } = O("storage"), o = L(t("full-screen", !1)), a = (b) => b == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = L([]), l = (b) => {
      n.value.splice(b, 1);
    }, u = (b) => {
      let g = n.value.findIndex((p) => p.id === b);
      g !== -1 && l(g);
    };
    return e.on("vf-toast-clear", () => {
      n.value = [];
    }), e.on("vf-toast-push", (b) => {
      let g = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      b.id = g, n.value.push(b), setTimeout(() => {
        u(g);
      }, 5e3);
    }), (b, g) => (S(), C("div", {
      class: ge([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Me(ko, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: q(() => [
          (S(!0), C(ue, null, ke(n.value, (p, v) => (S(), C("div", {
            onClick: (w) => l(v),
            key: p,
            class: ge([a(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, $(p.label), 11, kn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ge = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Mn } = Ie(), Tr = (r, e, t) => Mn.value + "?" + Ge({ q: "preview", adapter: r, path: e, token: t }), Re = typeof window < "u", os = Re && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ns = Re && "IntersectionObserver" in window, is = Re && "classList" in document.createElement("p"), as = Re && window.devicePixelRatio > 1, En = {
  elements_selector: ".lazy",
  container: os || Re ? document : null,
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
}, ls = (r) => Object.assign({}, En, r), Ar = function(r, e) {
  let t;
  const o = "LazyLoad::Initialized", a = new r(e);
  try {
    t = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    t = document.createEvent("CustomEvent"), t.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(t);
}, $n = (r, e) => {
  if (!!e)
    if (!e.length)
      Ar(r, e);
    else
      for (let t = 0, o; o = e[t]; t += 1)
        Ar(r, o);
}, Ne = "src", ar = "srcset", lr = "sizes", cs = "poster", _t = "llOriginalAttrs", ds = "data", cr = "loading", us = "loaded", hs = "applied", Tn = "entered", dr = "error", fs = "native", ps = "data-", gs = "ll-status", me = (r, e) => r.getAttribute(ps + e), An = (r, e, t) => {
  var o = ps + e;
  if (t === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, t);
}, xt = (r) => me(r, gs), Je = (r, e) => An(r, gs, e), Vt = (r) => Je(r, null), ur = (r) => xt(r) === null, Ln = (r) => xt(r) === cr, In = (r) => xt(r) === dr, hr = (r) => xt(r) === fs, On = [cr, us, hs, dr], Pn = (r) => On.indexOf(xt(r)) >= 0, He = (r, e, t, o) => {
  if (!!r) {
    if (o !== void 0) {
      r(e, t, o);
      return;
    }
    if (t !== void 0) {
      r(e, t);
      return;
    }
    r(e);
  }
}, at = (r, e) => {
  if (is) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Te = (r, e) => {
  if (is) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Nn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, jn = (r) => {
  delete r.llTempImage;
}, ms = (r) => r.llTempImage, Bt = (r, e) => {
  if (!e)
    return;
  const t = e._observer;
  !t || t.unobserve(r);
}, zn = (r) => {
  r.disconnect();
}, Vn = (r, e, t) => {
  e.unobserve_entered && Bt(r, t);
}, fr = (r, e) => {
  !r || (r.loadingCount += e);
}, Bn = (r) => {
  !r || (r.toLoadCount -= 1);
}, vs = (r, e) => {
  !r || (r.toLoadCount = e);
}, Rn = (r) => r.loadingCount > 0, Hn = (r) => r.toLoadCount > 0, bs = (r) => {
  let e = [];
  for (let t = 0, o; o = r.children[t]; t += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, pr = (r, e) => {
  const t = r.parentNode;
  if (!t || t.tagName !== "PICTURE")
    return;
  bs(t).forEach(e);
}, ys = (r, e) => {
  bs(r).forEach(e);
}, Rt = [Ne], ws = [Ne, cs], yt = [Ne, ar, lr], Ss = [ds], Ht = (r) => !!r[_t], _s = (r) => r[_t], xs = (r) => delete r[_t], ot = (r, e) => {
  if (Ht(r))
    return;
  const t = {};
  e.forEach((o) => {
    t[o] = r.getAttribute(o);
  }), r[_t] = t;
}, Un = (r) => {
  Ht(r) || (r[_t] = { backgroundImage: r.style.backgroundImage });
}, Kn = (r, e, t) => {
  if (!t) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, t);
}, qe = (r, e) => {
  if (!Ht(r))
    return;
  const t = _s(r);
  e.forEach((o) => {
    Kn(r, o, t[o]);
  });
}, Yn = (r) => {
  if (!Ht(r))
    return;
  const e = _s(r);
  r.style.backgroundImage = e.backgroundImage;
}, ks = (r, e, t) => {
  at(r, e.class_applied), Je(r, hs), t && (e.unobserve_completed && Bt(r, e), He(e.callback_applied, r, t));
}, Ds = (r, e, t) => {
  at(r, e.class_loading), Je(r, cr), t && (fr(t, 1), He(e.callback_loading, r, t));
}, Be = (r, e, t) => {
  !t || r.setAttribute(e, t);
}, Lr = (r, e) => {
  Be(r, lr, me(r, e.data_sizes)), Be(r, ar, me(r, e.data_srcset)), Be(r, Ne, me(r, e.data_src));
}, Wn = (r, e) => {
  pr(r, (t) => {
    ot(t, yt), Lr(t, e);
  }), ot(r, yt), Lr(r, e);
}, Xn = (r, e) => {
  ot(r, Rt), Be(r, Ne, me(r, e.data_src));
}, Zn = (r, e) => {
  ys(r, (t) => {
    ot(t, Rt), Be(t, Ne, me(t, e.data_src));
  }), ot(r, ws), Be(r, cs, me(r, e.data_poster)), Be(r, Ne, me(r, e.data_src)), r.load();
}, qn = (r, e) => {
  ot(r, Ss), Be(r, ds, me(r, e.data_src));
}, Fn = (r, e, t) => {
  const o = me(r, e.data_bg), a = me(r, e.data_bg_hidpi), n = as && a ? a : o;
  !n || (r.style.backgroundImage = `url("${n}")`, ms(r).setAttribute(Ne, n), Ds(r, e, t));
}, Gn = (r, e, t) => {
  const o = me(r, e.data_bg_multi), a = me(r, e.data_bg_multi_hidpi), n = as && a ? a : o;
  !n || (r.style.backgroundImage = n, ks(r, e, t));
}, Jn = (r, e, t) => {
  const o = me(r, e.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let n = a.map((l) => `image-set(${l})`);
  r.style.backgroundImage = n.join(), r.style.backgroundImage === "" && (n = a.map((l) => `-webkit-image-set(${l})`), r.style.backgroundImage = n.join()), ks(r, e, t);
}, Cs = {
  IMG: Wn,
  IFRAME: Xn,
  VIDEO: Zn,
  OBJECT: qn
}, Qn = (r, e) => {
  const t = Cs[r.tagName];
  !t || t(r, e);
}, ei = (r, e, t) => {
  const o = Cs[r.tagName];
  !o || (o(r, e), Ds(r, e, t));
}, ti = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ri = (r) => ti.indexOf(r.tagName) > -1, Ms = (r, e) => {
  e && !Rn(e) && !Hn(e) && He(r.callback_finish, e);
}, Ir = (r, e, t) => {
  r.addEventListener(e, t), r.llEvLisnrs[e] = t;
}, si = (r, e, t) => {
  r.removeEventListener(e, t);
}, gr = (r) => !!r.llEvLisnrs, oi = (r, e, t) => {
  gr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Ir(r, o, e), Ir(r, "error", t);
}, Gt = (r) => {
  if (!gr(r))
    return;
  const e = r.llEvLisnrs;
  for (let t in e) {
    const o = e[t];
    si(r, t, o);
  }
  delete r.llEvLisnrs;
}, Es = (r, e, t) => {
  jn(r), fr(t, -1), Bn(t), Te(r, e.class_loading), e.unobserve_completed && Bt(r, t);
}, ni = (r, e, t, o) => {
  const a = hr(e);
  Es(e, t, o), at(e, t.class_loaded), Je(e, us), He(t.callback_loaded, e, o), a || Ms(t, o);
}, ii = (r, e, t, o) => {
  const a = hr(e);
  Es(e, t, o), at(e, t.class_error), Je(e, dr), He(t.callback_error, e, o), t.restore_on_error && qe(e, yt), a || Ms(t, o);
}, mr = (r, e, t) => {
  const o = ms(r) || r;
  if (gr(o))
    return;
  oi(o, (l) => {
    ni(l, r, e, t), Gt(o);
  }, (l) => {
    ii(l, r, e, t), Gt(o);
  });
}, ai = (r, e, t) => {
  Nn(r), mr(r, e, t), Un(r), Fn(r, e, t), Gn(r, e, t), Jn(r, e, t);
}, li = (r, e, t) => {
  mr(r, e, t), ei(r, e, t);
}, vr = (r, e, t) => {
  ri(r) ? li(r, e, t) : ai(r, e, t);
}, ci = (r, e, t) => {
  r.setAttribute("loading", "lazy"), mr(r, e, t), Qn(r, e), Je(r, fs);
}, Or = (r) => {
  r.removeAttribute(Ne), r.removeAttribute(ar), r.removeAttribute(lr);
}, di = (r) => {
  pr(r, (e) => {
    Or(e);
  }), Or(r);
}, $s = (r) => {
  pr(r, (e) => {
    qe(e, yt);
  }), qe(r, yt);
}, ui = (r) => {
  ys(r, (e) => {
    qe(e, Rt);
  }), qe(r, ws), r.load();
}, hi = (r) => {
  qe(r, Rt);
}, fi = (r) => {
  qe(r, Ss);
}, pi = {
  IMG: $s,
  IFRAME: hi,
  VIDEO: ui,
  OBJECT: fi
}, gi = (r) => {
  const e = pi[r.tagName];
  if (!e) {
    Yn(r);
    return;
  }
  e(r);
}, mi = (r, e) => {
  ur(r) || hr(r) || (Te(r, e.class_entered), Te(r, e.class_exited), Te(r, e.class_applied), Te(r, e.class_loading), Te(r, e.class_loaded), Te(r, e.class_error));
}, vi = (r, e) => {
  gi(r), mi(r, e), Vt(r), xs(r);
}, bi = (r, e, t, o) => {
  !t.cancel_on_exit || !Ln(r) || r.tagName === "IMG" && (Gt(r), di(r), $s(r), Te(r, t.class_loading), fr(o, -1), Vt(r), He(t.callback_cancel, r, e, o));
}, yi = (r, e, t, o) => {
  const a = Pn(r);
  Je(r, Tn), at(r, t.class_entered), Te(r, t.class_exited), Vn(r, t, o), He(t.callback_enter, r, e, o), !a && vr(r, t, o);
}, wi = (r, e, t, o) => {
  ur(r) || (at(r, t.class_exited), bi(r, e, t, o), He(t.callback_exit, r, e, o));
}, Si = ["IMG", "IFRAME", "VIDEO"], Ts = (r) => r.use_native && "loading" in HTMLImageElement.prototype, _i = (r, e, t) => {
  r.forEach((o) => {
    Si.indexOf(o.tagName) !== -1 && ci(o, e, t);
  }), vs(t, 0);
}, xi = (r) => r.isIntersecting || r.intersectionRatio > 0, ki = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Di = (r, e, t) => {
  r.forEach(
    (o) => xi(o) ? yi(o.target, o, e, t) : wi(o.target, o, e, t)
  );
}, Ci = (r, e) => {
  e.forEach((t) => {
    r.observe(t);
  });
}, Mi = (r, e) => {
  zn(r), Ci(r, e);
}, Ei = (r, e) => {
  !ns || Ts(r) || (e._observer = new IntersectionObserver((t) => {
    Di(t, r, e);
  }, ki(r)));
}, As = (r) => Array.prototype.slice.call(r), Pt = (r) => r.container.querySelectorAll(r.elements_selector), $i = (r) => As(r).filter(ur), Ti = (r) => In(r), Ai = (r) => As(r).filter(Ti), Pr = (r, e) => $i(r || Pt(e)), Li = (r, e) => {
  Ai(Pt(r)).forEach((o) => {
    Te(o, r.class_error), Vt(o);
  }), e.update();
}, Ii = (r, e) => {
  !Re || (e._onlineHandler = () => {
    Li(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Oi = (r) => {
  !Re || window.removeEventListener("online", r._onlineHandler);
}, kt = function(r, e) {
  const t = ls(r);
  this._settings = t, this.loadingCount = 0, Ei(t, this), Ii(t, this), this.update(e);
};
kt.prototype = {
  update: function(r) {
    const e = this._settings, t = Pr(r, e);
    if (vs(this, t.length), os || !ns) {
      this.loadAll(t);
      return;
    }
    if (Ts(e)) {
      _i(t, e, this);
      return;
    }
    Mi(this._observer, t);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Oi(this), Pt(this._settings).forEach((r) => {
      xs(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Pr(r, e).forEach((o) => {
      Bt(o, this), vr(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Pt(r).forEach((e) => {
      vi(e, r);
    });
  }
};
kt.load = (r, e) => {
  const t = ls(e);
  vr(r, t);
};
kt.resetStatus = (r) => {
  Vt(r);
};
Re && $n(kt, window.lazyLoadOptions);
const Pi = { class: "relative flex-auto overflow-hidden" }, Ni = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, ji = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], zi = { class: "grid grid-cols-12 items-center" }, Vi = { class: "flex col-span-7 items-center" }, Bi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ri = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Hi = [
  Ri
], Ui = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ki = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Yi = [
  Ki
], Wi = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Xi = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Zi = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], qi = { class: "grid grid-cols-12 items-center" }, Fi = { class: "flex col-span-7 items-center" }, Gi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ji = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Qi = [
  Ji
], ea = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ta = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ra = [
  ta
], sa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, oa = { class: "col-span-2 text-center" }, na = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ia = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], aa = { class: "relative" }, la = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ca = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), da = [
  ca
], ua = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ha = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), fa = [
  ha
], pa = {
  key: 2,
  class: "absolute block top-1/2 w-full text-center text-neutral-500"
}, ga = { class: "break-all" }, ma = {
  name: "VFExplorer"
}, va = /* @__PURE__ */ Object.assign(ma, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const e = r;
    O("accessToken");
    const t = O("emitter"), { setStore: o, getStore: a } = O("storage"), n = O("adapter"), l = (I) => I == null ? void 0 : I.substring(0, 3), u = (I) => I.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), b = L(null), g = L(null), p = L(0), v = L(null), { t: w } = O("i18n"), T = Math.floor(Math.random() * 2 ** 32), M = L(a("full-screen", !1)), E = new kt();
    t.on("vf-fullscreen-toggle", () => {
      b.value.style.height = null, M.value = !M.value, o("full-screen", M.value);
    });
    const A = L("");
    t.on("vf-search-query", ({ newQuery: I }) => {
      A.value = I, I ? t.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: I
        },
        onSuccess: (z) => {
          z.files.length || t.emit("vf-toast-push", { label: w("No search result found.") });
        }
      }) : t.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    const K = L(!1);
    t.on("vf-show-hidden", ({ params: I }) => {
      K.value = I.show;
    });
    let R = null;
    const P = () => {
      R && clearTimeout(R);
    }, V = L(!0), j = (I) => {
      I.touches.length > 1 && (V.value ? (v.value.stop(), t.emit("vf-toast-push", { label: w("Drag&Drop: off") })) : (v.value.start(), t.emit("vf-toast-push", { label: w("Drag&Drop: on") }), t.emit("vf-explorer-update")), V.value = !V.value);
    }, k = (I) => {
      R = setTimeout(() => {
        const z = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: I.target.getBoundingClientRect().x,
          clientY: I.target.getBoundingClientRect().y
        });
        I.target.dispatchEvent(z);
      }, 500);
    }, U = (I) => {
      I.type == "dir" ? (t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: I.path } })) : t.emit("vf-modal-show", { type: "preview", adapter: e.data.adapter, item: I });
    }, B = Lt({ active: !1, column: "", order: "" }), ie = (I = !0) => {
      let z = [...e.data.files], N = B.column, ce = B.order == "asc" ? 1 : -1;
      if (!I)
        return z;
      const G = (te, De) => typeof te == "string" && typeof De == "string" ? te.toLowerCase().localeCompare(De.toLowerCase()) : te < De ? -1 : te > De ? 1 : 0;
      return B.active && (z = z.slice().sort((te, De) => G(te[N], De[N]) * ce)), z;
    }, ae = (I) => {
      B.active && B.column == I ? (B.active = B.order == "asc", B.column = I, B.order = "desc") : (B.active = !0, B.column = I, B.order = "asc");
    }, le = () => v.value.getSelection().map((I) => JSON.parse(I.dataset.item)), ye = (I, z) => {
      if (I.altKey || I.ctrlKey || I.metaKey)
        return I.preventDefault(), !1;
      I.dataTransfer.setDragImage(g.value, 0, 15), I.dataTransfer.effectAllowed = "all", I.dataTransfer.dropEffect = "copy", I.dataTransfer.setData("items", JSON.stringify(le()));
    }, ve = (I, z) => {
      I.preventDefault();
      let N = JSON.parse(I.dataTransfer.getData("items"));
      if (N.find((ce) => ce.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", { type: "move", items: { from: N, to: z } });
    }, he = (I, z) => {
      I.preventDefault(), !z || z.type !== "dir" || v.value.getSelection().find((N) => N == I.currentTarget) ? (I.dataTransfer.dropEffect = "none", I.dataTransfer.effectAllowed = "none") : I.dataTransfer.dropEffect = "copy";
    };
    return Ee(() => {
      v.value = new mn({
        area: b.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), t.on("vf-explorer-update", () => zt(() => {
        v.value.clearSelection(), v.value.setSelectables(document.getElementsByClassName("vf-item-" + T));
      })), v.value.subscribe("predragstart", ({ event: I, isDragging: z }) => {
        if (z)
          p.value = v.value.getSelection().length, v.value.break();
        else {
          const N = I.target.offsetWidth - I.offsetX, ce = I.target.offsetHeight - I.offsetY;
          N < 15 && ce < 15 && (v.value.clearSelection(), v.value.break());
        }
      }), v.value.subscribe("predragmove", ({ isDragging: I }) => {
        I && v.value.break();
      }), v.value.subscribe("callback", ({ items: I, event: z, isDragging: N }) => {
        t.emit("vf-nodes-selected", le()), p.value = v.value.getSelection().length;
      });
    }), Do(() => {
      v.value.Area.reset(), v.value.SelectorArea.updatePos(), E.update();
    }), Ee(() => {
      jt(() => e.view, () => t.emit("vf-explorer-update"));
    }), (I, z) => (S(), C("div", Pi, [
      r.view == "list" || A.value.length ? (S(), C("div", Ni, [
        h("div", {
          onClick: z[0] || (z[0] = (N) => ae("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          se($(x(w)("Name")) + " ", 1),
          xe(Me(Et, {
            direction: B.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Mt, B.active && B.column == "basename"]
          ])
        ]),
        A.value.length ? Z("", !0) : (S(), C("div", {
          key: 0,
          onClick: z[1] || (z[1] = (N) => ae("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          se($(x(w)("Size")) + " ", 1),
          xe(Me(Et, {
            direction: B.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Mt, B.active && B.column == "file_size"]
          ])
        ])),
        A.value.length ? Z("", !0) : (S(), C("div", {
          key: 1,
          onClick: z[2] || (z[2] = (N) => ae("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          se($(x(w)("Date")) + " ", 1),
          xe(Me(Et, {
            direction: B.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Mt, B.active && B.column == "last_modified"]
          ])
        ])),
        A.value.length ? (S(), C("div", {
          key: 2,
          onClick: z[3] || (z[3] = (N) => ae("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          se($(x(w)("Filepath")) + " ", 1),
          xe(Me(Et, {
            direction: B.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Mt, B.active && B.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      h("div", {
        onTouchstart: j,
        onContextmenu: z[10] || (z[10] = Ze((N) => x(t).emit("vf-contextmenu-show", { event: N, area: b.value, items: le() }), ["self", "prevent"])),
        class: ge([M.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: b
      }, [
        A.value.length ? (S(!0), C(ue, { key: 0 }, ke(ie(), (N, ce) => (S(), C("div", {
          onDblclick: (G) => U(N),
          onTouchstart: z[4] || (z[4] = (G) => k(G)),
          onTouchend: z[5] || (z[5] = (G) => P()),
          onContextmenu: Ze((G) => x(t).emit("vf-contextmenu-show", { event: G, area: b.value, items: le(), target: N }), ["prevent"]),
          class: ge(["vf-item-" + x(T), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ce
        }, [
          h("div", zi, [
            h("div", Vi, [
              N.type == "dir" ? (S(), C("svg", Bi, Hi)) : (S(), C("svg", Ui, Yi)),
              h("span", Wi, $(N.basename), 1)
            ]),
            h("div", Xi, $(N.path), 1)
          ])
        ], 42, ji))), 256)) : Z("", !0),
        r.view == "list" && !A.value.length ? (S(!0), C(ue, { key: 1 }, ke(ie(), (N, ce) => (S(), C("div", {
          draggable: "true",
          onDblclick: (G) => U(N),
          onTouchstart: z[6] || (z[6] = (G) => k(G)),
          onTouchend: z[7] || (z[7] = (G) => P()),
          onContextmenu: Ze((G) => x(t).emit("vf-contextmenu-show", { event: G, area: b.value, items: le(), target: N }), ["prevent"]),
          onDragstart: (G) => ye(G),
          onDragover: (G) => he(G, N),
          onDrop: (G) => ve(G, N),
          class: ge(["vf-item-" + x(T), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ce
        }, [
          h("div", qi, [
            h("div", Fi, [
              N.type == "dir" ? (S(), C("svg", Gi, Qi)) : (S(), C("svg", ea, ra)),
              h("span", sa, $(N.basename), 1)
            ]),
            h("div", oa, $(N.file_size ? x(rs)(N.file_size) : ""), 1),
            h("div", na, $(x(ss)(N.last_modified)), 1)
          ])
        ], 42, Zi))), 256)) : Z("", !0),
        r.view == "grid" && !A.value.length ? (S(!0), C(ue, { key: 2 }, ke(ie(!1), (N, ce) => {
          var G;
          return S(), C("div", {
            draggable: "true",
            onDblclick: (te) => U(N),
            onTouchstart: z[8] || (z[8] = (te) => k(te)),
            onTouchend: z[9] || (z[9] = (te) => P()),
            onContextmenu: Ze((te) => x(t).emit("vf-contextmenu-show", { event: te, area: b.value, items: le(), target: N }), ["prevent"]),
            onDragstart: (te) => ye(te),
            onDragover: (te) => he(te, N),
            onDrop: (te) => ve(te, N),
            class: ge(["vf-item-" + x(T), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": N.type,
            "data-item": JSON.stringify(N),
            "data-index": ce
          }, [
            h("div", null, [
              h("div", aa, [
                N.type == "dir" ? (S(), C("svg", la, da)) : (S(), C("svg", ua, fa)),
                !((G = N.mime_type) != null ? G : "").startsWith("image") && N.type != "dir" ? (S(), C("div", pa, $(l(N.extension)), 1)) : Z("", !0)
              ]),
              h("span", ga, $(u(N.basename)), 1)
            ])
          ], 42, ia);
        }), 256)) : Z("", !0)
      ], 34),
      Me(Cn)
    ]));
  }
}), ba = "1.1.15", ya = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, wa = { class: "flex leading-5 items-center" }, Sa = ["aria-label"], _a = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), xa = [
  _a
], ka = ["value"], Da = { class: "ml-3" }, Ca = { key: 0 }, Ma = { class: "ml-1" }, Ea = { class: "flex leading-5 items-center" }, $a = {
  value: "",
  disabled: ""
}, Ta = /* @__PURE__ */ h("option", { value: "en" }, "English", -1), Aa = /* @__PURE__ */ h("option", { value: "fr" }, "French", -1), La = /* @__PURE__ */ h("option", { value: "ru" }, "Russian", -1), Ia = /* @__PURE__ */ h("option", { value: "tr" }, "Turkish", -1), Oa = ["aria-label"], Pa = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Na = [
  Pa
], ja = {
  name: "VFStatusbar"
}, za = /* @__PURE__ */ Object.assign(ja, {
  props: {
    data: Object
  },
  setup(r) {
    const e = O("emitter"), { getStore: t, setStore: o } = O("storage"), a = L(0), n = O("adapter"), { t: l, changeLocale: u } = O("i18n"), b = L(t("locale", "")), g = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: n.value } }), o("adapter", n.value);
    };
    e.on("vf-nodes-selected", (v) => {
      a.value = v.length;
    });
    const p = L("");
    return e.on("vf-search-query", ({ newQuery: v }) => {
      p.value = v;
    }), (v, w) => (S(), C("div", ya, [
      h("div", wa, [
        h("div", {
          class: "mx-2",
          "aria-label": x(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, xa, 8, Sa),
        xe(h("select", {
          "onUpdate:modelValue": w[0] || (w[0] = (T) => Qr(n) ? n.value = T : null),
          onChange: g,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (S(!0), C(ue, null, ke(r.data.storages, (T) => (S(), C("option", { value: T }, $(T), 9, ka))), 256))
        ], 544), [
          [Er, x(n)]
        ]),
        h("div", Da, [
          p.value.length ? (S(), C("span", Ca, $(r.data.files.length) + " items found. ", 1)) : Z("", !0),
          h("span", Ma, $(a.value > 0 ? a.value + " " + x(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      h("div", Ea, [
        xe(h("select", {
          "onUpdate:modelValue": w[1] || (w[1] = (T) => b.value = T),
          onChange: w[2] || (w[2] = (T) => x(u)(T.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          h("option", $a, $(x(l)("Language")), 1),
          Ta,
          Aa,
          La,
          Ia
        ], 544), [
          [Er, b.value]
        ]),
        h("span", {
          class: "mr-1",
          "aria-label": x(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: w[3] || (w[3] = (T) => x(e).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(ba), message: x(l)("Vuefinder is a file manager component for vue 3.") }))
        }, Na, 8, Oa)
      ])
    ]));
  }
}), Va = (r, e = 0, t = !1) => {
  let o;
  return (...a) => {
    t && !o && r(...a), clearTimeout(o), o = setTimeout(() => {
      r(...a);
    }, e);
  };
}, Ba = (r, e, t) => {
  const o = L(r);
  return Co((n, l) => ({
    get() {
      return n(), o.value;
    },
    set: Va(
      (u) => {
        o.value = u, l();
      },
      e,
      t
    )
  }));
}, Ra = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Ha = ["aria-label"], Ua = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Ka = [
  Ua
], Ya = ["aria-label"], Wa = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Xa = [
  Wa
], Za = {
  key: 1,
  "aria-label": "Cancel",
  "data-microtip-position": "bottom-right",
  role: "tooltip"
}, qa = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Fa = [
  qa
], Ga = /* @__PURE__ */ h("span", { class: "vf-flex-space" }, null, -1), Ja = ["onClick"], Qa = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), el = [
  Qa
], tl = { class: "flex leading-5" }, rl = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), sl = ["title", "onClick"], ol = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, nl = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), il = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), al = [
  nl,
  il
], ll = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, cl = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6 p-1 stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), dl = ["onKeydown", "placeholder"], ul = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), hl = [
  ul
], fl = {
  name: "VFBreadcrumb"
}, pl = /* @__PURE__ */ Object.assign(fl, {
  props: {
    data: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), a = L(null), n = L([]), l = L(!1), u = L(null), { t: b } = O("i18n"), g = O("loadingState");
    t.on("vf-explorer-update", () => {
      var j;
      let P = [], V = [];
      a.value = (j = e.data.dirname) != null ? j : o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(k) {
        P.push(k), P.join("/") != "" && V.push({
          basename: k,
          name: k,
          path: o.value + "://" + P.join("/"),
          type: "dir"
        });
      }), V.length > 4 && (V = V.slice(-5), V[0].name = ".."), n.value = V;
    });
    const p = L(!1);
    t.on("vf-show-hidden", ({ params: P }) => {
      p.value = P.show;
    });
    const v = () => {
      l.value = !1, T.value = "";
    };
    t.on("vf-search-exit", () => {
      v();
    });
    const w = () => {
      l.value = !0, zt(() => u.value.focus());
    }, T = Ba("", 400), M = () => g.value;
    jt(T, (P) => {
      t.emit("vf-toast-clear"), t.emit("vf-search-query", { newQuery: P });
    });
    const E = () => n.value.length && !l.value, A = (P) => {
      var j;
      P.preventDefault();
      let V = JSON.parse(P.dataTransfer.getData("items"));
      if (V.find((k) => k.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", {
        type: "move",
        items: { from: V, to: (j = n.value[n.value.length - 2]) != null ? j : { path: o.value + "://" } }
      });
    }, K = (P) => {
      P.preventDefault(), E() ? P.dataTransfer.dropEffect = "copy" : (P.dataTransfer.dropEffect = "none", P.dataTransfer.effectAllowed = "none");
    }, R = () => {
      T.value == "" && v();
    };
    return (P, V) => (S(), C("div", Ra, [
      h("span", {
        "aria-label": x(b)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (S(), C("svg", {
          onDragover: V[0] || (V[0] = (j) => K(j)),
          onDrop: V[1] || (V[1] = (j) => A(j)),
          onClick: V[2] || (V[2] = (j) => {
            var k, U;
            return !E() || x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: (U = (k = n.value[n.value.length - 2]) == null ? void 0 : k.path) != null ? U : x(o) + "://" } });
          }),
          class: ge(["h-6 w-6 p-0.5 rounded", E() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ka, 34))
      ], 8, Ha),
      M() ? (S(), C("span", Za, [
        (S(), C("svg", {
          onClick: V[4] || (V[4] = (j) => x(t).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Fa))
      ])) : (S(), C("span", {
        key: 0,
        "aria-label": x(b)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (S(), C("svg", {
          onClick: V[3] || (V[3] = (j) => {
            x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Xa))
      ], 8, Ya)),
      Ga,
      l.value ? (S(), C("div", ll, [
        cl,
        xe(h("input", {
          ref_key: "searchInput",
          ref: u,
          onKeydown: nt(v, ["esc"]),
          onBlur: R,
          "onUpdate:modelValue": V[6] || (V[6] = (j) => Qr(T) ? T.value = j : null),
          placeholder: x(b)("Search anything.."),
          class: "flex-1 ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, dl), [
          [it, x(T)]
        ]),
        (S(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: v,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, hl))
      ])) : (S(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Ze(w, ["self"])
      }, [
        (S(), C("svg", {
          onClick: V[5] || (V[5] = (j) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, el)),
        h("div", tl, [
          (S(!0), C(ue, null, ke(n.value, (j, k) => (S(), C("div", { key: k }, [
            rl,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: j.basename,
              onClick: (U) => x(t).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: j.path } })
            }, $(j.name), 9, sl)
          ]))), 128))
        ]),
        M() ? (S(), C("svg", ol, al)) : Z("", !0)
      ], 8, Ja))
    ]));
  }
}), gl = ["onClick"], ml = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), vl = {
  name: "VFContextMenu"
}, bl = /* @__PURE__ */ Object.assign(vl, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter"), o = L(null), { apiUrl: a } = Ie(), n = Lt({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = L([]);
    t.on("vf-context-selected", (w) => {
      l.value = w;
    });
    const { t: u } = O("i18n"), b = {
      newfolder: {
        title: () => u("New Folder"),
        action: () => {
          t.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => u("Delete"),
        action: () => {
          t.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => u("Refresh"),
        action: () => {
          t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => u("Preview"),
        action: () => {
          t.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => u("Open"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => u("Open containing folder"),
        action: () => {
          t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => u("Download"),
        action: () => {
          const w = a.value + "?" + Ge({ q: "download", adapter: e.current.adapter, path: l.value[0].path });
          t.emit("vf-download", w);
        }
      },
      archive: {
        title: () => u("Archive"),
        action: () => {
          t.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => u("Unarchive"),
        action: () => {
          t.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => u("Rename"),
        action: () => {
          t.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, g = (w) => {
      t.emit("vf-contextmenu-hide"), w.action();
    }, p = L("");
    t.on("vf-search-query", ({ newQuery: w }) => {
      p.value = w;
    }), t.on("vf-contextmenu-show", ({ event: w, area: T, items: M, target: E = null }) => {
      if (n.items = [], p.value)
        if (E)
          n.items.push(b.openDir), t.emit("vf-context-selected", [E]);
        else
          return;
      else
        !E && !p.value ? (n.items.push(b.refresh), n.items.push(b.newfolder), t.emit("vf-context-selected", [])) : M.length > 1 && M.some((A) => A.path === E.path) ? (n.items.push(b.refresh), n.items.push(b.archive), n.items.push(b.delete), t.emit("vf-context-selected", M)) : (E.type == "dir" ? n.items.push(b.open) : (n.items.push(b.preview), n.items.push(b.download)), n.items.push(b.rename), E.mime_type == "application/zip" ? n.items.push(b.unarchive) : n.items.push(b.archive), n.items.push(b.delete), t.emit("vf-context-selected", [E]));
      v(w, T);
    }), t.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const v = (w, T) => {
      n.active = !0, zt(() => {
        let M = T.getBoundingClientRect(), E = w.pageX, A = w.pageY, K = o.value.offsetHeight, R = o.value.offsetWidth;
        E = M.right - w.pageX + window.scrollX < R ? E - R : E, A = M.bottom - w.pageY + window.scrollY < K ? A - K : A, n.positions = {
          left: E + "px",
          top: A + "px"
        };
      });
    };
    return (w, T) => n.active ? (S(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: es(n.positions)
    }, [
      (S(!0), C(ue, null, ke(n.items, (M) => (S(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: (E) => g(M)
      }, [
        ml,
        h("span", null, $(M.title()), 1)
      ], 8, gl))), 128))
    ], 4)) : Z("", !0);
  }
}), yl = (r, e) => {
  const t = r[e];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function wl(r) {
  const e = await yl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.7a04810c.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.818dacaf.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function Sl(r, e, t) {
  const { getStore: o, setStore: a } = Ft(r), n = L({}), l = (g) => {
    wl(g).then((p) => {
      n.value = p, a("locale", g), a("translations", p), t.emit("vf-toast-push", { label: "The language is set to " + g });
    }).catch((p) => {
      t.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  o("locale") ? n.value = o("translations") : l(e);
  const u = (g, ...p) => p.length ? u(g = g.replace("%s", p.shift()), ...p) : g;
  function b(g, ...p) {
    return n.value.hasOwnProperty(g) ? u(n.value[g], ...p) : g;
  }
  return { t: b, changeLocale: l };
}
const _l = { class: "vuefinder" }, xl = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), kl = {
  name: "VueFinder"
}, Dl = /* @__PURE__ */ Object.assign(kl, {
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
    const e = r, t = Eo(), { setStore: o, getStore: a } = Ft(e.id), n = L(a("adapter"));
    Ye("emitter", t), Ye("storage", Ft(e.id)), Ye("postData", e.postData), Ye("adapter", n);
    const l = Sl(e.id, e.locale, t);
    Ye("i18n", l);
    const { apiUrl: u, setApiUrl: b } = Ie();
    b(e.url);
    const g = Lt({ adapter: n.value, storages: [], dirname: ".", files: [] }), p = L(a("viewport", "grid")), v = L(a("darkMode", e.dark));
    t.on("vf-darkMode-toggle", () => {
      v.value = !v.value, o("darkMode", v.value);
    });
    const w = L(!1);
    Ye("loadingState", w), Ye("accessToken", e.accessToken);
    const T = L(a("full-screen", !1));
    t.on("vf-fullscreen-toggle", () => {
      T.value = !T.value, o("full-screen", T.value);
    }), t.on("vf-view-toggle", (R) => {
      p.value = R;
    });
    const M = Lt({
      active: !1,
      type: "delete",
      data: {}
    });
    t.on("vf-modal-close", () => {
      M.active = !1;
    }), t.on("vf-modal-show", (R) => {
      (!e.hook || e.hook.call(null, "vf-modal-show", R, t) !== !1) && (M.active = !0, M.type = R.type, M.data = R);
    });
    const E = (R) => {
      Object.assign(g, R), t.emit("vf-nodes-selected", {}), t.emit("vf-explorer-update");
    };
    let A;
    t.on("vf-fetch-abort", () => {
      A.abort(), w.value = !1;
    });
    const K = L(!1);
    return t.on("vf-show-hidden-toggle", () => {
      K.value = !K.value, t.emit("vf-fetch", { params: { q: "index", adapter: g.adapter, path: g.dirname } });
    }), t.on("vf-fetch", ({ params: R, onSuccess: P = null, onError: V = null }) => {
      ["index", "search"].includes(R.q) && (A && A.abort(), w.value = !0), A = new AbortController();
      const j = A.signal;
      R.hidden = K.value === !0, Ot(u.value, { params: R, signal: j, headers: { Authorization: e.accessToken ? "Bearer " + e.accessToken : null } }).then((k) => {
        n.value = k.adapter, ["index", "search"].includes(R.q) && (w.value = !1), t.emit("vf-modal-close"), E(k), P(k);
      }).catch((k) => {
        V && V(k);
      }).finally(() => {
      });
    }), t.on("vf-download", (R) => {
      document.getElementById("download_frame").src = R, t.emit("vf-modal-close");
    }), Ee(() => {
      t.emit("vf-fetch", { params: { q: "index", adapter: n.value } });
    }), (R, P) => (S(), C("div", _l, [
      h("div", {
        class: ge(v.value ? "dark" : "")
      }, [
        h("div", {
          class: ge([T.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: es(T.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: P[0] || (P[0] = (V) => x(t).emit("vf-contextmenu-hide")),
          onTouchstart: P[1] || (P[1] = (V) => x(t).emit("vf-contextmenu-hide"))
        }, [
          Me(pn, { data: g }, null, 8, ["data"]),
          Me(pl, { data: g }, null, 8, ["data"]),
          Me(va, {
            view: p.value,
            data: g
          }, null, 8, ["view", "data"]),
          Me(za, { data: g }, null, 8, ["data"])
        ], 38),
        M.active ? (S(), J(Mo("v-f-modal-" + M.type), {
          key: 0,
          selection: M.data,
          current: g
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Me(bl, { current: g }, null, 8, ["current"]),
        xl
      ], 2)
    ]));
  }
}), Cl = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Ml = { class: "fixed z-10 inset-0 overflow-hidden" }, El = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, $l = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Tl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Oe = {
  __name: "ModalLayout",
  setup(r) {
    const e = O("emitter");
    return Ee(() => {
      const t = document.querySelector(".v-f-modal input");
      t && t.focus();
    }), (t, o) => (S(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = nt((a) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Cl,
      h("div", Ml, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Ze((a) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", El, [
            h("div", $l, [
              qt(t.$slots, "default")
            ]),
            h("div", Tl, [
              qt(t.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Al = ["aria-label"], Ll = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Il = [
  Ll
], Ol = {
  name: "Message"
}, Pe = /* @__PURE__ */ Object.assign(Ol, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var u;
    const { t } = O("i18n"), o = L(!1), a = L(null), n = L((u = a.value) == null ? void 0 : u.strMessage);
    jt(n, () => o.value = !1);
    const l = () => {
      e("hidden"), o.value = !0;
    };
    return (b, g) => (S(), C("div", null, [
      o.value ? Z("", !0) : (S(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ge(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        qt(b.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": x(t)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Il, 8, Al)
      ], 2))
    ]));
  }
}), Pl = { class: "sm:flex sm:items-start" }, Nl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), jl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, zl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Vl = { class: "mt-2" }, Bl = { class: "text-sm text-gray-500" }, Rl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Hl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ul = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Kl = [
  Ul
], Yl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Xl = [
  Wl
], Zl = { class: "ml-1.5" }, ql = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Fl = {
  name: "VFModalDelete"
}, Gl = /* @__PURE__ */ Object.assign(Fl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = L(e.selection.items), l = L(""), u = () => {
      n.value.length && t.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(n.value.map(({ path: b, type: g }) => ({ path: b, type: g })))
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, g) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: g[1] || (g[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1),
        h("div", ql, $(x(a)("This action cannot be undone.")), 1)
      ]),
      default: q(() => [
        h("div", Pl, [
          Nl,
          h("div", jl, [
            h("h3", zl, $(x(a)("Delete files")), 1),
            h("div", Vl, [
              h("p", Bl, $(x(a)("Are you sure you want to delete these files?")), 1),
              (S(!0), C(ue, null, ke(n.value, (p) => (S(), C("p", Rl, [
                p.type == "dir" ? (S(), C("svg", Hl, Kl)) : (S(), C("svg", Yl, Xl)),
                h("span", Zl, $(p.basename), 1)
              ]))), 256)),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: g[0] || (g[0] = (p) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Jl = { class: "sm:flex sm:items-start" }, Ql = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), ec = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, tc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, rc = { class: "mt-2" }, sc = { class: "text-sm text-gray-500" }, oc = {
  name: "VFModalMessage"
}, nc = /* @__PURE__ */ Object.assign(oc, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = O("emitter"), { t } = O("i18n");
    return (o, a) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(t)("Close")), 1)
      ]),
      default: q(() => {
        var n, l, u, b;
        return [
          h("div", Jl, [
            Ql,
            h("div", ec, [
              h("h3", tc, $((l = (n = r.selection) == null ? void 0 : n.title) != null ? l : "Title"), 1),
              h("div", rc, [
                h("p", sc, $((b = (u = r.selection) == null ? void 0 : u.message) != null ? b : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), ic = { class: "sm:flex sm:items-start" }, ac = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), lc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, cc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, dc = { class: "mt-2" }, uc = { class: "text-sm text-gray-500" }, hc = ["onKeyup", "placeholder"], fc = {
  name: "VFModalNewFolder"
}, pc = /* @__PURE__ */ Object.assign(fc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = L(""), l = L(""), u = () => {
      n.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is created.", n.value) });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, g) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", ic, [
          ac,
          h("div", lc, [
            h("h3", cc, $(x(a)("New Folder")), 1),
            h("div", dc, [
              h("p", uc, $(x(a)("Create a new folder")), 1),
              xe(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (p) => n.value = p),
                onKeyup: nt(u, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, hc), [
                [it, n.value]
              ]),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: g[1] || (g[1] = (p) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gc = { class: "sm:flex sm:items-start" }, mc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), vc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, bc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, yc = { class: "mt-2" }, wc = { class: "text-sm text-gray-500" }, Sc = ["onKeyup", "placeholder"], _c = {
  name: "VFModalNewFile"
}, xc = /* @__PURE__ */ Object.assign(_c, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = L(""), l = L(""), u = () => {
      n.value != "" && t.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is created.", n.value) });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, g) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: g[2] || (g[2] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", gc, [
          mc,
          h("div", vc, [
            h("h3", bc, $(x(a)("New File")), 1),
            h("div", yc, [
              h("p", wc, $(x(a)("Create a new file")), 1),
              xe(h("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (p) => n.value = p),
                onKeyup: nt(u, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, Sc), [
                [it, n.value]
              ]),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: g[1] || (g[1] = (p) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), kc = { class: "flex" }, Dc = ["aria-label"], Cc = { class: "ml-auto mb-2" }, Mc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Ec = { key: 1 }, $c = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const t = r, o = L(""), a = L(""), n = L(null), l = L(!1), { apiUrl: u } = Ie(), b = L(""), g = L(!1), { t: p } = O("i18n"), v = O("accessToken");
    Ee(() => {
      Ot(u.value, {
        params: { q: "preview", adapter: t.selection.adapter, path: t.selection.item.path },
        json: !1,
        headers: { Authorization: v ? "Bearer " + v : null }
      }).then((E) => {
        o.value = E, e("load");
      });
    });
    const w = () => {
      l.value = !l.value, a.value = o.value, l.value == !0 && zt(() => {
        n.value.focus();
      });
    }, T = O("postData"), M = () => {
      b.value = "", g.value = !1, Ot(u.value, {
        method: "POST",
        params: Object.assign(T, {
          q: "save",
          adapter: t.selection.adapter,
          path: t.selection.item.path,
          content: a.value
        }),
        json: !1,
        headers: { Authorization: v ? "Bearer " + v : null }
      }).then((E) => {
        b.value = p("Updated."), o.value = E, e("load"), l.value = !l.value;
      }).catch((E) => {
        b.value = p(E.message), g.value = !0;
      });
    };
    return (E, A) => (S(), C(ue, null, [
      h("div", kc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, $(r.selection.item.basename), 9, Dc),
        h("div", Cc, [
          l.value ? (S(), C("button", {
            key: 0,
            onClick: M,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, $(x(p)("Save")), 1)) : Z("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: A[0] || (A[0] = (K) => w())
          }, $(l.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        l.value ? (S(), C("div", Ec, [
          xe(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": A[1] || (A[1] = (K) => a.value = K),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [it, a.value]
          ])
        ])) : (S(), C("pre", Mc, $(o.value), 1)),
        b.value.length ? (S(), J(Pe, {
          key: 2,
          onHidden: A[2] || (A[2] = (K) => b.value = ""),
          error: g.value
        }, {
          default: q(() => [
            se($(b.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Z("", !0)
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
function Nr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    e && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Ls(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Nr(Object(t), !0).forEach(function(o) {
      Lc(r, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Nr(Object(t)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return r;
}
function At(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? At = function(e) {
    return typeof e;
  } : At = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, At(r);
}
function Tc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jr(r, e) {
  for (var t = 0; t < e.length; t++) {
    var o = e[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Ac(r, e, t) {
  return e && jr(r.prototype, e), t && jr(r, t), r;
}
function Lc(r, e, t) {
  return e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Is(r) {
  return Ic(r) || Oc(r) || Pc(r) || Nc();
}
function Ic(r) {
  if (Array.isArray(r))
    return Jt(r);
}
function Oc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Pc(r, e) {
  if (!!r) {
    if (typeof r == "string")
      return Jt(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Jt(r, e);
  }
}
function Jt(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, o = new Array(e); t < e; t++)
    o[t] = r[t];
  return o;
}
function Nc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ut = typeof window < "u" && typeof window.document < "u", Le = Ut ? window : {}, br = Ut && Le.document.documentElement ? "ontouchstart" in Le.document.documentElement : !1, yr = Ut ? "PointerEvent" in Le : !1, Q = "cropper", wr = "all", Os = "crop", Ps = "move", Ns = "zoom", We = "e", Xe = "w", Qe = "s", je = "n", pt = "ne", gt = "nw", mt = "se", vt = "sw", Qt = "".concat(Q, "-crop"), zr = "".concat(Q, "-disabled"), pe = "".concat(Q, "-hidden"), Vr = "".concat(Q, "-hide"), jc = "".concat(Q, "-invisible"), Nt = "".concat(Q, "-modal"), er = "".concat(Q, "-move"), wt = "".concat(Q, "Action"), $t = "".concat(Q, "Preview"), Sr = "crop", js = "move", zs = "none", tr = "crop", rr = "cropend", sr = "cropmove", or = "cropstart", Br = "dblclick", zc = br ? "touchstart" : "mousedown", Vc = br ? "touchmove" : "mousemove", Bc = br ? "touchend touchcancel" : "mouseup", Rr = yr ? "pointerdown" : zc, Hr = yr ? "pointermove" : Vc, Ur = yr ? "pointerup pointercancel" : Bc, Kr = "ready", Yr = "resize", Wr = "wheel", nr = "zoom", Xr = "image/jpeg", Rc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Hc = /^data:/, Uc = /^data:image\/jpeg;base64,/, Kc = /^img|canvas$/i, Vs = 200, Bs = 100, Zr = {
  viewMode: 0,
  dragMode: Sr,
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
  minContainerWidth: Vs,
  minContainerHeight: Bs,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Yc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Wc = Number.isNaN || Le.isNaN;
function Y(r) {
  return typeof r == "number" && !Wc(r);
}
var qr = function(e) {
  return e > 0 && e < 1 / 0;
};
function Wt(r) {
  return typeof r > "u";
}
function Fe(r) {
  return At(r) === "object" && r !== null;
}
var Xc = Object.prototype.hasOwnProperty;
function et(r) {
  if (!Fe(r))
    return !1;
  try {
    var e = r.constructor, t = e.prototype;
    return e && t && Xc.call(t, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function fe(r) {
  return typeof r == "function";
}
var Zc = Array.prototype.slice;
function Rs(r) {
  return Array.from ? Array.from(r) : Zc.call(r);
}
function re(r, e) {
  return r && fe(e) && (Array.isArray(r) || Y(r.length) ? Rs(r).forEach(function(t, o) {
    e.call(r, t, o, r);
  }) : Fe(r) && Object.keys(r).forEach(function(t) {
    e.call(r, r[t], t, r);
  })), r;
}
var ee = Object.assign || function(e) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    o[a - 1] = arguments[a];
  return Fe(e) && o.length > 0 && o.forEach(function(n) {
    Fe(n) && Object.keys(n).forEach(function(l) {
      e[l] = n[l];
    });
  }), e;
}, qc = /\.\d*(?:0|9){12}\d*$/;
function rt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return qc.test(r) ? Math.round(r * e) / e : r;
}
var Fc = /^width|height|left|top|marginLeft|marginTop$/;
function ze(r, e) {
  var t = r.style;
  re(e, function(o, a) {
    Fc.test(a) && Y(o) && (o = "".concat(o, "px")), t[a] = o;
  });
}
function Gc(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function de(r, e) {
  if (!!e) {
    if (Y(r.length)) {
      re(r, function(o) {
        de(o, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(e);
      return;
    }
    var t = r.className.trim();
    t ? t.indexOf(e) < 0 && (r.className = "".concat(t, " ").concat(e)) : r.className = e;
  }
}
function Ae(r, e) {
  if (!!e) {
    if (Y(r.length)) {
      re(r, function(t) {
        Ae(t, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(e);
      return;
    }
    r.className.indexOf(e) >= 0 && (r.className = r.className.replace(e, ""));
  }
}
function tt(r, e, t) {
  if (!!e) {
    if (Y(r.length)) {
      re(r, function(o) {
        tt(o, e, t);
      });
      return;
    }
    t ? de(r, e) : Ae(r, e);
  }
}
var Jc = /([a-z\d])([A-Z])/g;
function _r(r) {
  return r.replace(Jc, "$1-$2").toLowerCase();
}
function ir(r, e) {
  return Fe(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(_r(e)));
}
function St(r, e, t) {
  Fe(t) ? r[e] = t : r.dataset ? r.dataset[e] = t : r.setAttribute("data-".concat(_r(e)), t);
}
function Qc(r, e) {
  if (Fe(r[e]))
    try {
      delete r[e];
    } catch {
      r[e] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[e];
    } catch {
      r.dataset[e] = void 0;
    }
  else
    r.removeAttribute("data-".concat(_r(e)));
}
var Hs = /\s\s*/, Us = function() {
  var r = !1;
  if (Ut) {
    var e = !1, t = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      set: function(n) {
        e = n;
      }
    });
    Le.addEventListener("test", t, o), Le.removeEventListener("test", t, o);
  }
  return r;
}();
function Ce(r, e, t) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = t;
  e.trim().split(Hs).forEach(function(n) {
    if (!Us) {
      var l = r.listeners;
      l && l[n] && l[n][t] && (a = l[n][t], delete l[n][t], Object.keys(l[n]).length === 0 && delete l[n], Object.keys(l).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, a, o);
  });
}
function _e(r, e, t) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = t;
  e.trim().split(Hs).forEach(function(n) {
    if (o.once && !Us) {
      var l = r.listeners, u = l === void 0 ? {} : l;
      a = function() {
        delete u[n][t], r.removeEventListener(n, a, o);
        for (var g = arguments.length, p = new Array(g), v = 0; v < g; v++)
          p[v] = arguments[v];
        t.apply(r, p);
      }, u[n] || (u[n] = {}), u[n][t] && r.removeEventListener(n, u[n][t], o), u[n][t] = a, r.listeners = u;
    }
    r.addEventListener(n, a, o);
  });
}
function st(r, e, t) {
  var o;
  return fe(Event) && fe(CustomEvent) ? o = new CustomEvent(e, {
    detail: t,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, !0, !0, t)), r.dispatchEvent(o);
}
function Ks(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Xt = Le.location, ed = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Fr(r) {
  var e = r.match(ed);
  return e !== null && (e[1] !== Xt.protocol || e[2] !== Xt.hostname || e[3] !== Xt.port);
}
function Gr(r) {
  var e = "timestamp=".concat(new Date().getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function bt(r) {
  var e = r.rotate, t = r.scaleX, o = r.scaleY, a = r.translateX, n = r.translateY, l = [];
  Y(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), Y(n) && n !== 0 && l.push("translateY(".concat(n, "px)")), Y(e) && e !== 0 && l.push("rotate(".concat(e, "deg)")), Y(t) && t !== 1 && l.push("scaleX(".concat(t, ")")), Y(o) && o !== 1 && l.push("scaleY(".concat(o, ")"));
  var u = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: u,
    msTransform: u,
    transform: u
  };
}
function td(r) {
  var e = Ls({}, r), t = 0;
  return re(r, function(o, a) {
    delete e[a], re(e, function(n) {
      var l = Math.abs(o.startX - n.startX), u = Math.abs(o.startY - n.startY), b = Math.abs(o.endX - n.endX), g = Math.abs(o.endY - n.endY), p = Math.sqrt(l * l + u * u), v = Math.sqrt(b * b + g * g), w = (v - p) / p;
      Math.abs(w) > Math.abs(t) && (t = w);
    });
  }), t;
}
function Tt(r, e) {
  var t = r.pageX, o = r.pageY, a = {
    endX: t,
    endY: o
  };
  return e ? a : Ls({
    startX: t,
    startY: o
  }, a);
}
function rd(r) {
  var e = 0, t = 0, o = 0;
  return re(r, function(a) {
    var n = a.startX, l = a.startY;
    e += n, t += l, o += 1;
  }), e /= o, t /= o, {
    pageX: e,
    pageY: t
  };
}
function Ve(r) {
  var e = r.aspectRatio, t = r.height, o = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = qr(o), l = qr(t);
  if (n && l) {
    var u = t * e;
    a === "contain" && u > o || a === "cover" && u < o ? t = o / e : o = t * e;
  } else
    n ? t = o / e : l && (o = t * e);
  return {
    width: o,
    height: t
  };
}
function sd(r) {
  var e = r.width, t = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: t,
      height: e
    };
  var a = o % 90 * Math.PI / 180, n = Math.sin(a), l = Math.cos(a), u = e * l + t * n, b = e * n + t * l;
  return o > 90 ? {
    width: b,
    height: u
  } : {
    width: u,
    height: b
  };
}
function od(r, e, t, o) {
  var a = e.aspectRatio, n = e.naturalWidth, l = e.naturalHeight, u = e.rotate, b = u === void 0 ? 0 : u, g = e.scaleX, p = g === void 0 ? 1 : g, v = e.scaleY, w = v === void 0 ? 1 : v, T = t.aspectRatio, M = t.naturalWidth, E = t.naturalHeight, A = o.fillColor, K = A === void 0 ? "transparent" : A, R = o.imageSmoothingEnabled, P = R === void 0 ? !0 : R, V = o.imageSmoothingQuality, j = V === void 0 ? "low" : V, k = o.maxWidth, U = k === void 0 ? 1 / 0 : k, B = o.maxHeight, ie = B === void 0 ? 1 / 0 : B, ae = o.minWidth, le = ae === void 0 ? 0 : ae, ye = o.minHeight, ve = ye === void 0 ? 0 : ye, he = document.createElement("canvas"), F = he.getContext("2d"), I = Ve({
    aspectRatio: T,
    width: U,
    height: ie
  }), z = Ve({
    aspectRatio: T,
    width: le,
    height: ve
  }, "cover"), N = Math.min(I.width, Math.max(z.width, M)), ce = Math.min(I.height, Math.max(z.height, E)), G = Ve({
    aspectRatio: a,
    width: U,
    height: ie
  }), te = Ve({
    aspectRatio: a,
    width: le,
    height: ve
  }, "cover"), De = Math.min(G.width, Math.max(te.width, n)), lt = Math.min(G.height, Math.max(te.height, l)), ct = [-De / 2, -lt / 2, De, lt];
  return he.width = rt(N), he.height = rt(ce), F.fillStyle = K, F.fillRect(0, 0, N, ce), F.save(), F.translate(N / 2, ce / 2), F.rotate(b * Math.PI / 180), F.scale(p, w), F.imageSmoothingEnabled = P, F.imageSmoothingQuality = j, F.drawImage.apply(F, [r].concat(Is(ct.map(function(Dt) {
    return Math.floor(rt(Dt));
  })))), F.restore(), he;
}
var Ys = String.fromCharCode;
function nd(r, e, t) {
  var o = "";
  t += e;
  for (var a = e; a < t; a += 1)
    o += Ys(r.getUint8(a));
  return o;
}
var id = /^data:.*,/;
function ad(r) {
  var e = r.replace(id, ""), t = atob(e), o = new ArrayBuffer(t.length), a = new Uint8Array(o);
  return re(a, function(n, l) {
    a[l] = t.charCodeAt(l);
  }), o;
}
function ld(r, e) {
  for (var t = [], o = 8192, a = new Uint8Array(r); a.length > 0; )
    t.push(Ys.apply(null, Rs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(t.join("")));
}
function cd(r) {
  var e = new DataView(r), t;
  try {
    var o, a, n;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var l = e.byteLength, u = 2; u + 1 < l; ) {
        if (e.getUint8(u) === 255 && e.getUint8(u + 1) === 225) {
          a = u;
          break;
        }
        u += 1;
      }
    if (a) {
      var b = a + 4, g = a + 10;
      if (nd(e, b, 4) === "Exif") {
        var p = e.getUint16(g);
        if (o = p === 18761, (o || p === 19789) && e.getUint16(g + 2, o) === 42) {
          var v = e.getUint32(g + 4, o);
          v >= 8 && (n = g + v);
        }
      }
    }
    if (n) {
      var w = e.getUint16(n, o), T, M;
      for (M = 0; M < w; M += 1)
        if (T = n + M * 12 + 2, e.getUint16(T, o) === 274) {
          T += 8, t = e.getUint16(T, o), e.setUint16(T, 1, o);
          break;
        }
    }
  } catch {
    t = 1;
  }
  return t;
}
function dd(r) {
  var e = 0, t = 1, o = 1;
  switch (r) {
    case 2:
      t = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      e = 90, o = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, t = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: t,
    scaleY: o
  };
}
var ud = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, t = this.options, o = this.container, a = this.cropper, n = Number(t.minContainerWidth), l = Number(t.minContainerHeight);
    de(a, pe), Ae(e, pe);
    var u = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Vs),
      height: Math.max(o.offsetHeight, l >= 0 ? l : Bs)
    };
    this.containerData = u, ze(a, {
      width: u.width,
      height: u.height
    }), de(e, pe), Ae(a, pe);
  },
  initCanvas: function() {
    var e = this.containerData, t = this.imageData, o = this.options.viewMode, a = Math.abs(t.rotate) % 180 === 90, n = a ? t.naturalHeight : t.naturalWidth, l = a ? t.naturalWidth : t.naturalHeight, u = n / l, b = e.width, g = e.height;
    e.height * u > e.width ? o === 3 ? b = e.height * u : g = e.width / u : o === 3 ? g = e.width / u : b = e.height * u;
    var p = {
      aspectRatio: u,
      naturalWidth: n,
      naturalHeight: l,
      width: b,
      height: g
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (e.width - p.width) / 2, p.top = (e.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = ee({}, p);
  },
  limitCanvas: function(e, t) {
    var o = this.options, a = this.containerData, n = this.canvasData, l = this.cropBoxData, u = o.viewMode, b = n.aspectRatio, g = this.cropped && l;
    if (e) {
      var p = Number(o.minCanvasWidth) || 0, v = Number(o.minCanvasHeight) || 0;
      u > 1 ? (p = Math.max(p, a.width), v = Math.max(v, a.height), u === 3 && (v * b > p ? p = v * b : v = p / b)) : u > 0 && (p ? p = Math.max(p, g ? l.width : 0) : v ? v = Math.max(v, g ? l.height : 0) : g && (p = l.width, v = l.height, v * b > p ? p = v * b : v = p / b));
      var w = Ve({
        aspectRatio: b,
        width: p,
        height: v
      });
      p = w.width, v = w.height, n.minWidth = p, n.minHeight = v, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (t)
      if (u > (g ? 0 : 1)) {
        var T = a.width - n.width, M = a.height - n.height;
        n.minLeft = Math.min(0, T), n.minTop = Math.min(0, M), n.maxLeft = Math.max(0, T), n.maxTop = Math.max(0, M), g && this.limited && (n.minLeft = Math.min(l.left, l.left + (l.width - n.width)), n.minTop = Math.min(l.top, l.top + (l.height - n.height)), n.maxLeft = l.left, n.maxTop = l.top, u === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, T), n.maxLeft = Math.max(0, T)), n.height >= a.height && (n.minTop = Math.min(0, M), n.maxTop = Math.max(0, M))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, t) {
    var o = this.canvasData, a = this.imageData;
    if (t) {
      var n = sd({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), l = n.width, u = n.height, b = o.width * (l / o.naturalWidth), g = o.height * (u / o.naturalHeight);
      o.left -= (b - o.width) / 2, o.top -= (g - o.height) / 2, o.width = b, o.height = g, o.aspectRatio = l / u, o.naturalWidth = l, o.naturalHeight = u, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, ze(this.canvas, ee({
      width: o.width,
      height: o.height
    }, bt({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var t = this.canvasData, o = this.imageData, a = o.naturalWidth * (t.width / t.naturalWidth), n = o.naturalHeight * (t.height / t.naturalHeight);
    ee(o, {
      width: a,
      height: n,
      left: (t.width - a) / 2,
      top: (t.height - n) / 2
    }), ze(this.image, ee({
      width: o.width,
      height: o.height
    }, bt(ee({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, t = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, n = {
      width: t.width,
      height: t.height
    };
    o && (t.height * o > t.width ? n.height = n.width / o : n.width = n.height * o), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = t.left + (t.width - n.width) / 2, n.top = t.top + (t.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = ee({}, n);
  },
  limitCropBox: function(e, t) {
    var o = this.options, a = this.containerData, n = this.canvasData, l = this.cropBoxData, u = this.limited, b = o.aspectRatio;
    if (e) {
      var g = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, v = u ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, w = u ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      g = Math.min(g, a.width), p = Math.min(p, a.height), b && (g && p ? p * b > g ? p = g / b : g = p * b : g ? p = g / b : p && (g = p * b), w * b > v ? w = v / b : v = w * b), l.minWidth = Math.min(g, v), l.minHeight = Math.min(p, w), l.maxWidth = v, l.maxHeight = w;
    }
    t && (u ? (l.minLeft = Math.max(0, n.left), l.minTop = Math.max(0, n.top), l.maxLeft = Math.min(a.width, n.left + n.width) - l.width, l.maxTop = Math.min(a.height, n.top + n.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = a.width - l.width, l.maxTop = a.height - l.height));
  },
  renderCropBox: function() {
    var e = this.options, t = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && St(this.face, wt, o.width >= t.width && o.height >= t.height ? Ps : wr), ze(this.cropBox, ee({
      width: o.width,
      height: o.height
    }, bt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), st(this.element, tr, this.getData());
  }
}, hd = {
  initPreview: function() {
    var e = this.element, t = this.crossOrigin, o = this.options.preview, a = t ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", l = document.createElement("img");
    if (t && (l.crossOrigin = t), l.src = a, l.alt = n, this.viewBox.appendChild(l), this.viewBoxImage = l, !!o) {
      var u = o;
      typeof o == "string" ? u = e.ownerDocument.querySelectorAll(o) : o.querySelector && (u = [o]), this.previews = u, re(u, function(b) {
        var g = document.createElement("img");
        St(b, $t, {
          width: b.offsetWidth,
          height: b.offsetHeight,
          html: b.innerHTML
        }), t && (g.crossOrigin = t), g.src = a, g.alt = n, g.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', b.innerHTML = "", b.appendChild(g);
      });
    }
  },
  resetPreview: function() {
    re(this.previews, function(e) {
      var t = ir(e, $t);
      ze(e, {
        width: t.width,
        height: t.height
      }), e.innerHTML = t.html, Qc(e, $t);
    });
  },
  preview: function() {
    var e = this.imageData, t = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, l = e.width, u = e.height, b = o.left - t.left - e.left, g = o.top - t.top - e.top;
    !this.cropped || this.disabled || (ze(this.viewBoxImage, ee({
      width: l,
      height: u
    }, bt(ee({
      translateX: -b,
      translateY: -g
    }, e)))), re(this.previews, function(p) {
      var v = ir(p, $t), w = v.width, T = v.height, M = w, E = T, A = 1;
      a && (A = w / a, E = n * A), n && E > T && (A = T / n, M = a * A, E = T), ze(p, {
        width: M,
        height: E
      }), ze(p.getElementsByTagName("img")[0], ee({
        width: l * A,
        height: u * A
      }, bt(ee({
        translateX: -b * A,
        translateY: -g * A
      }, e))));
    }));
  }
}, fd = {
  bind: function() {
    var e = this.element, t = this.options, o = this.cropper;
    fe(t.cropstart) && _e(e, or, t.cropstart), fe(t.cropmove) && _e(e, sr, t.cropmove), fe(t.cropend) && _e(e, rr, t.cropend), fe(t.crop) && _e(e, tr, t.crop), fe(t.zoom) && _e(e, nr, t.zoom), _e(o, Rr, this.onCropStart = this.cropStart.bind(this)), t.zoomable && t.zoomOnWheel && _e(o, Wr, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), t.toggleDragModeOnDblclick && _e(o, Br, this.onDblclick = this.dblclick.bind(this)), _e(e.ownerDocument, Hr, this.onCropMove = this.cropMove.bind(this)), _e(e.ownerDocument, Ur, this.onCropEnd = this.cropEnd.bind(this)), t.responsive && _e(window, Yr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, t = this.options, o = this.cropper;
    fe(t.cropstart) && Ce(e, or, t.cropstart), fe(t.cropmove) && Ce(e, sr, t.cropmove), fe(t.cropend) && Ce(e, rr, t.cropend), fe(t.crop) && Ce(e, tr, t.crop), fe(t.zoom) && Ce(e, nr, t.zoom), Ce(o, Rr, this.onCropStart), t.zoomable && t.zoomOnWheel && Ce(o, Wr, this.onWheel, {
      passive: !1,
      capture: !0
    }), t.toggleDragModeOnDblclick && Ce(o, Br, this.onDblclick), Ce(e.ownerDocument, Hr, this.onCropMove), Ce(e.ownerDocument, Ur, this.onCropEnd), t.responsive && Ce(window, Yr, this.onResize);
  }
}, pd = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, t = this.container, o = this.containerData, a = t.offsetWidth / o.width, n = t.offsetHeight / o.height, l = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (l !== 1) {
        var u, b;
        e.restore && (u = this.getCanvasData(), b = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(re(u, function(g, p) {
          u[p] = g * l;
        })), this.setCropBoxData(re(b, function(g, p) {
          b[p] = g * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === zs || this.setDragMode(Gc(this.dragBox, Qt) ? js : Sr);
  },
  wheel: function(e) {
    var t = this, o = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      t.wheeling = !1;
    }, 50), e.deltaY ? a = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? a = -e.wheelDelta / 120 : e.detail && (a = e.detail > 0 ? 1 : -1), this.zoom(-a * o, e)));
  },
  cropStart: function(e) {
    var t = e.buttons, o = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && (Y(t) && t !== 1 || Y(o) && o !== 0 || e.ctrlKey))) {
      var a = this.options, n = this.pointers, l;
      e.changedTouches ? re(e.changedTouches, function(u) {
        n[u.identifier] = Tt(u);
      }) : n[e.pointerId || 0] = Tt(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? l = Ns : l = ir(e.target, wt), !!Rc.test(l) && st(this.element, or, {
        originalEvent: e,
        action: l
      }) !== !1 && (e.preventDefault(), this.action = l, this.cropping = !1, l === Os && (this.cropping = !0, de(this.dragBox, Nt)));
    }
  },
  cropMove: function(e) {
    var t = this.action;
    if (!(this.disabled || !t)) {
      var o = this.pointers;
      e.preventDefault(), st(this.element, sr, {
        originalEvent: e,
        action: t
      }) !== !1 && (e.changedTouches ? re(e.changedTouches, function(a) {
        ee(o[a.identifier] || {}, Tt(a, !0));
      }) : ee(o[e.pointerId || 0] || {}, Tt(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var t = this.action, o = this.pointers;
      e.changedTouches ? re(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], t && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, tt(this.dragBox, Nt, this.cropped && this.options.modal)), st(this.element, rr, {
        originalEvent: e,
        action: t
      }));
    }
  }
}, gd = {
  change: function(e) {
    var t = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, l = this.pointers, u = this.action, b = t.aspectRatio, g = n.left, p = n.top, v = n.width, w = n.height, T = g + v, M = p + w, E = 0, A = 0, K = a.width, R = a.height, P = !0, V;
    !b && e.shiftKey && (b = v && w ? v / w : 1), this.limited && (E = n.minLeft, A = n.minTop, K = E + Math.min(a.width, o.width, o.left + o.width), R = A + Math.min(a.height, o.height, o.top + o.height));
    var j = l[Object.keys(l)[0]], k = {
      x: j.endX - j.startX,
      y: j.endY - j.startY
    }, U = function(ie) {
      switch (ie) {
        case We:
          T + k.x > K && (k.x = K - T);
          break;
        case Xe:
          g + k.x < E && (k.x = E - g);
          break;
        case je:
          p + k.y < A && (k.y = A - p);
          break;
        case Qe:
          M + k.y > R && (k.y = R - M);
          break;
      }
    };
    switch (u) {
      case wr:
        g += k.x, p += k.y;
        break;
      case We:
        if (k.x >= 0 && (T >= K || b && (p <= A || M >= R))) {
          P = !1;
          break;
        }
        U(We), v += k.x, v < 0 && (u = Xe, v = -v, g -= v), b && (w = v / b, p += (n.height - w) / 2);
        break;
      case je:
        if (k.y <= 0 && (p <= A || b && (g <= E || T >= K))) {
          P = !1;
          break;
        }
        U(je), w -= k.y, p += k.y, w < 0 && (u = Qe, w = -w, p -= w), b && (v = w * b, g += (n.width - v) / 2);
        break;
      case Xe:
        if (k.x <= 0 && (g <= E || b && (p <= A || M >= R))) {
          P = !1;
          break;
        }
        U(Xe), v -= k.x, g += k.x, v < 0 && (u = We, v = -v, g -= v), b && (w = v / b, p += (n.height - w) / 2);
        break;
      case Qe:
        if (k.y >= 0 && (M >= R || b && (g <= E || T >= K))) {
          P = !1;
          break;
        }
        U(Qe), w += k.y, w < 0 && (u = je, w = -w, p -= w), b && (v = w * b, g += (n.width - v) / 2);
        break;
      case pt:
        if (b) {
          if (k.y <= 0 && (p <= A || T >= K)) {
            P = !1;
            break;
          }
          U(je), w -= k.y, p += k.y, v = w * b;
        } else
          U(je), U(We), k.x >= 0 ? T < K ? v += k.x : k.y <= 0 && p <= A && (P = !1) : v += k.x, k.y <= 0 ? p > A && (w -= k.y, p += k.y) : (w -= k.y, p += k.y);
        v < 0 && w < 0 ? (u = vt, w = -w, v = -v, p -= w, g -= v) : v < 0 ? (u = gt, v = -v, g -= v) : w < 0 && (u = mt, w = -w, p -= w);
        break;
      case gt:
        if (b) {
          if (k.y <= 0 && (p <= A || g <= E)) {
            P = !1;
            break;
          }
          U(je), w -= k.y, p += k.y, v = w * b, g += n.width - v;
        } else
          U(je), U(Xe), k.x <= 0 ? g > E ? (v -= k.x, g += k.x) : k.y <= 0 && p <= A && (P = !1) : (v -= k.x, g += k.x), k.y <= 0 ? p > A && (w -= k.y, p += k.y) : (w -= k.y, p += k.y);
        v < 0 && w < 0 ? (u = mt, w = -w, v = -v, p -= w, g -= v) : v < 0 ? (u = pt, v = -v, g -= v) : w < 0 && (u = vt, w = -w, p -= w);
        break;
      case vt:
        if (b) {
          if (k.x <= 0 && (g <= E || M >= R)) {
            P = !1;
            break;
          }
          U(Xe), v -= k.x, g += k.x, w = v / b;
        } else
          U(Qe), U(Xe), k.x <= 0 ? g > E ? (v -= k.x, g += k.x) : k.y >= 0 && M >= R && (P = !1) : (v -= k.x, g += k.x), k.y >= 0 ? M < R && (w += k.y) : w += k.y;
        v < 0 && w < 0 ? (u = pt, w = -w, v = -v, p -= w, g -= v) : v < 0 ? (u = mt, v = -v, g -= v) : w < 0 && (u = gt, w = -w, p -= w);
        break;
      case mt:
        if (b) {
          if (k.x >= 0 && (T >= K || M >= R)) {
            P = !1;
            break;
          }
          U(We), v += k.x, w = v / b;
        } else
          U(Qe), U(We), k.x >= 0 ? T < K ? v += k.x : k.y >= 0 && M >= R && (P = !1) : v += k.x, k.y >= 0 ? M < R && (w += k.y) : w += k.y;
        v < 0 && w < 0 ? (u = gt, w = -w, v = -v, p -= w, g -= v) : v < 0 ? (u = vt, v = -v, g -= v) : w < 0 && (u = pt, w = -w, p -= w);
        break;
      case Ps:
        this.move(k.x, k.y), P = !1;
        break;
      case Ns:
        this.zoom(td(l), e), P = !1;
        break;
      case Os:
        if (!k.x || !k.y) {
          P = !1;
          break;
        }
        V = Ks(this.cropper), g = j.startX - V.left, p = j.startY - V.top, v = n.minWidth, w = n.minHeight, k.x > 0 ? u = k.y > 0 ? mt : pt : k.x < 0 && (g -= v, u = k.y > 0 ? vt : gt), k.y < 0 && (p -= w), this.cropped || (Ae(this.cropBox, pe), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    P && (n.width = v, n.height = w, n.left = g, n.top = p, this.action = u, this.renderCropBox()), re(l, function(B) {
      B.startX = B.endX, B.startY = B.endY;
    });
  }
}, md = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && de(this.dragBox, Nt), Ae(this.cropBox, pe), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = ee({}, this.initialImageData), this.canvasData = ee({}, this.initialCanvasData), this.cropBoxData = ee({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (ee(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Ae(this.dragBox, Nt), de(this.cropBox, pe)), this;
  },
  replace: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, re(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Ae(this.cropper, zr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, de(this.cropper, zr)), this;
  },
  destroy: function() {
    var e = this.element;
    return e[Q] ? (e[Q] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = o.left, n = o.top;
    return this.moveTo(Wt(e) ? e : a + Number(e), Wt(t) ? t : n + Number(t));
  },
  moveTo: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = !1;
    return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.movable && (Y(e) && (o.left = e, a = !0), Y(t) && (o.top = t, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(e, t) {
    var o = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(o.width * e / o.naturalWidth, null, t);
  },
  zoomTo: function(e, t, o) {
    var a = this.options, n = this.canvasData, l = n.width, u = n.height, b = n.naturalWidth, g = n.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var p = b * e, v = g * e;
      if (st(this.element, nr, {
        ratio: e,
        oldRatio: l / b,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var w = this.pointers, T = Ks(this.cropper), M = w && Object.keys(w).length ? rd(w) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (p - l) * ((M.pageX - T.left - n.left) / l), n.top -= (v - u) * ((M.pageY - T.top - n.top) / u);
      } else
        et(t) && Y(t.x) && Y(t.y) ? (n.left -= (p - l) * ((t.x - n.left) / l), n.top -= (v - u) * ((t.y - n.top) / u)) : (n.left -= (p - l) / 2, n.top -= (v - u) / 2);
      n.width = p, n.height = v, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  rotateTo: function(e) {
    return e = Number(e), Y(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(e) {
    var t = this.imageData.scaleY;
    return this.scale(e, Y(t) ? t : 1);
  },
  scaleY: function(e) {
    var t = this.imageData.scaleX;
    return this.scale(Y(t) ? t : 1, e);
  },
  scale: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, a = !1;
    return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.scalable && (Y(e) && (o.scaleX = e, a = !0), Y(t) && (o.scaleY = t, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.options, o = this.imageData, a = this.canvasData, n = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: n.left - a.left,
        y: n.top - a.top,
        width: n.width,
        height: n.height
      };
      var u = o.width / o.naturalWidth;
      if (re(l, function(p, v) {
        l[v] = p / u;
      }), e) {
        var b = Math.round(l.y + l.height), g = Math.round(l.x + l.width);
        l.x = Math.round(l.x), l.y = Math.round(l.y), l.width = g - l.x, l.height = b - l.y;
      }
    } else
      l = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return t.rotatable && (l.rotate = o.rotate || 0), t.scalable && (l.scaleX = o.scaleX || 1, l.scaleY = o.scaleY || 1), l;
  },
  setData: function(e) {
    var t = this.options, o = this.imageData, a = this.canvasData, n = {};
    if (this.ready && !this.disabled && et(e)) {
      var l = !1;
      t.rotatable && Y(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, l = !0), t.scalable && (Y(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, l = !0), Y(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var u = o.width / o.naturalWidth;
      Y(e.x) && (n.left = e.x * u + a.left), Y(e.y) && (n.top = e.y * u + a.top), Y(e.width) && (n.width = e.width * u), Y(e.height) && (n.height = e.height * u), this.setCropBoxData(n);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? ee({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? ee({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var e = this.canvasData, t = {};
    return this.ready && re(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      t[o] = e[o];
    }), t;
  },
  setCanvasData: function(e) {
    var t = this.canvasData, o = t.aspectRatio;
    return this.ready && !this.disabled && et(e) && (Y(e.left) && (t.left = e.left), Y(e.top) && (t.top = e.top), Y(e.width) ? (t.width = e.width, t.height = e.width / o) : Y(e.height) && (t.height = e.height, t.width = e.height * o), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var e = this.cropBoxData, t;
    return this.ready && this.cropped && (t = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), t || {};
  },
  setCropBoxData: function(e) {
    var t = this.cropBoxData, o = this.options.aspectRatio, a, n;
    return this.ready && this.cropped && !this.disabled && et(e) && (Y(e.left) && (t.left = e.left), Y(e.top) && (t.top = e.top), Y(e.width) && e.width !== t.width && (a = !0, t.width = e.width), Y(e.height) && e.height !== t.height && (n = !0, t.height = e.height), o && (a ? t.height = t.width / o : n && (t.width = t.height * o)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var t = this.canvasData, o = od(this.image, this.imageData, t, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, l = a.y, u = a.width, b = a.height, g = o.width / Math.floor(t.naturalWidth);
    g !== 1 && (n *= g, l *= g, u *= g, b *= g);
    var p = u / b, v = Ve({
      aspectRatio: p,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), w = Ve({
      aspectRatio: p,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), T = Ve({
      aspectRatio: p,
      width: e.width || (g !== 1 ? o.width : u),
      height: e.height || (g !== 1 ? o.height : b)
    }), M = T.width, E = T.height;
    M = Math.min(v.width, Math.max(w.width, M)), E = Math.min(v.height, Math.max(w.height, E));
    var A = document.createElement("canvas"), K = A.getContext("2d");
    A.width = rt(M), A.height = rt(E), K.fillStyle = e.fillColor || "transparent", K.fillRect(0, 0, M, E);
    var R = e.imageSmoothingEnabled, P = R === void 0 ? !0 : R, V = e.imageSmoothingQuality;
    K.imageSmoothingEnabled = P, V && (K.imageSmoothingQuality = V);
    var j = o.width, k = o.height, U = n, B = l, ie, ae, le, ye, ve, he;
    U <= -u || U > j ? (U = 0, ie = 0, le = 0, ve = 0) : U <= 0 ? (le = -U, U = 0, ie = Math.min(j, u + U), ve = ie) : U <= j && (le = 0, ie = Math.min(u, j - U), ve = ie), ie <= 0 || B <= -b || B > k ? (B = 0, ae = 0, ye = 0, he = 0) : B <= 0 ? (ye = -B, B = 0, ae = Math.min(k, b + B), he = ae) : B <= k && (ye = 0, ae = Math.min(b, k - B), he = ae);
    var F = [U, B, ie, ae];
    if (ve > 0 && he > 0) {
      var I = M / u;
      F.push(le * I, ye * I, ve * I, he * I);
    }
    return K.drawImage.apply(K, [o].concat(Is(F.map(function(z) {
      return Math.floor(rt(z));
    })))), A;
  },
  setAspectRatio: function(e) {
    var t = this.options;
    return !this.disabled && !Wt(e) && (t.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(e) {
    var t = this.options, o = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var n = e === Sr, l = t.movable && e === js;
      e = n || l ? e : zs, t.dragMode = e, St(o, wt, e), tt(o, Qt, n), tt(o, er, l), t.cropBoxMovable || (St(a, wt, e), tt(a, Qt, n), tt(a, er, l));
    }
    return this;
  }
}, vd = Le.Cropper, Ws = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Tc(this, r), !e || !Kc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = ee({}, Zr, et(t) && t), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Ac(r, [{
    key: "init",
    value: function() {
      var t = this.element, o = t.tagName.toLowerCase(), a;
      if (!t[Q]) {
        if (t[Q] = this, o === "img") {
          if (this.isImg = !0, a = t.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = t.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (a = t.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(t) {
      var o = this;
      if (!!t) {
        this.url = t, this.imageData = {};
        var a = this.element, n = this.options;
        if (!n.rotatable && !n.scalable && (n.checkOrientation = !1), !n.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Hc.test(t)) {
          Uc.test(t) ? this.read(ad(t)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), u = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = u, l.onerror = u, l.ontimeout = u, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Xr && l.abort();
        }, l.onload = function() {
          o.read(l.response);
        }, l.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, n.checkCrossOrigin && Fr(t) && a.crossOrigin && (t = Gr(t)), l.open("GET", t, !0), l.responseType = "arraybuffer", l.withCredentials = a.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(t) {
      var o = this.options, a = this.imageData, n = cd(t), l = 0, u = 1, b = 1;
      if (n > 1) {
        this.url = ld(t, Xr);
        var g = dd(n);
        l = g.rotate, u = g.scaleX, b = g.scaleY;
      }
      o.rotatable && (a.rotate = l), o.scalable && (a.scaleX = u, a.scaleY = b), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var t = this.element, o = this.url, a = t.crossOrigin, n = o;
      this.options.checkCrossOrigin && Fr(o) && (a || (a = "anonymous"), n = Gr(o)), this.crossOrigin = a, this.crossOriginUrl = n;
      var l = document.createElement("img");
      a && (l.crossOrigin = a), l.src = n || o, l.alt = t.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), de(l, Vr), t.parentNode.insertBefore(l, t.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var t = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent), n = function(g, p) {
        ee(t.imageData, {
          naturalWidth: g,
          naturalHeight: p,
          aspectRatio: g / p
        }), t.initialImageData = ee({}, t.imageData), t.sizing = !1, t.sized = !0, t.build();
      };
      if (o.naturalWidth && !a) {
        n(o.naturalWidth, o.naturalHeight);
        return;
      }
      var l = document.createElement("img"), u = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        n(l.width, l.height), a || u.removeChild(l);
      }, l.src = o.src, a || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", u.appendChild(l));
    }
  }, {
    key: "stop",
    value: function() {
      var t = this.image;
      t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var t = this.element, o = this.options, a = this.image, n = t.parentNode, l = document.createElement("div");
        l.innerHTML = Yc;
        var u = l.querySelector(".".concat(Q, "-container")), b = u.querySelector(".".concat(Q, "-canvas")), g = u.querySelector(".".concat(Q, "-drag-box")), p = u.querySelector(".".concat(Q, "-crop-box")), v = p.querySelector(".".concat(Q, "-face"));
        this.container = n, this.cropper = u, this.canvas = b, this.dragBox = g, this.cropBox = p, this.viewBox = u.querySelector(".".concat(Q, "-view-box")), this.face = v, b.appendChild(a), de(t, pe), n.insertBefore(u, t.nextSibling), this.isImg || Ae(a, Vr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, de(p, pe), o.guides || de(p.getElementsByClassName("".concat(Q, "-dashed")), pe), o.center || de(p.getElementsByClassName("".concat(Q, "-center")), pe), o.background && de(u, "".concat(Q, "-bg")), o.highlight || de(v, jc), o.cropBoxMovable && (de(v, er), St(v, wt, wr)), o.cropBoxResizable || (de(p.getElementsByClassName("".concat(Q, "-line")), pe), de(p.getElementsByClassName("".concat(Q, "-point")), pe)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), fe(o.ready) && _e(t, Kr, o.ready, {
          once: !0
        }), st(t, Kr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Ae(this.element, pe));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = vd, r;
    }
  }, {
    key: "setDefaults",
    value: function(t) {
      ee(Zr, et(t) && t);
    }
  }]), r;
}();
ee(Ws.prototype, ud, hd, fd, pd, gd, md);
const bd = { class: "flex" }, yd = ["aria-label"], wd = { class: "ml-auto mb-2" }, Sd = { class: "w-full flex justify-center" }, _d = ["src"], xd = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const t = r, o = O("accessToken"), { t: a } = O("i18n"), { apiUrl: n } = Ie(), l = L(null), u = L(null), b = L(!1), g = L(""), p = L(!1), v = () => {
      b.value = !b.value, b.value ? u.value = new Ws(l.value, {
        crop(M) {
        }
      }) : u.value.destroy();
    }, w = O("postData"), T = () => {
      u.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (M) => {
          g.value = "", p.value = !1, Ot(n.value, {
            method: "POST",
            params: Object.assign(w, {
              q: "upload",
              adapter: t.selection.adapter,
              path: t.selection.item.path,
              file: M
            }),
            name: t.selection.item.basename,
            json: !1,
            headers: { Authorization: o ? "Bearer " + o : null }
          }).then((E) => {
            g.value = a("Updated."), l.value.src = Tr(t.selection.adapter, t.selection.item.path), v(), e("load");
          }).catch((E) => {
            g.value = a(E.message), p.value = !0;
          });
        }
      );
    };
    return Ee(() => {
      e("load");
    }), (M, E) => (S(), C(ue, null, [
      h("div", bd, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, $(r.selection.item.basename), 9, yd),
        h("div", wd, [
          b.value ? (S(), C("button", {
            key: 0,
            onClick: T,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, $(x(a)("Crop")), 1)) : Z("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: E[0] || (E[0] = (A) => v())
          }, $(b.value ? x(a)("Cancel") : x(a)("Edit")), 1)
        ])
      ]),
      h("div", Sd, [
        h("img", {
          ref_key: "image",
          ref: l,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(Tr)(t.selection.adapter, t.selection.item.path),
          alt: ""
        }, null, 8, _d)
      ]),
      g.value.length ? (S(), J(Pe, {
        key: 0,
        onHidden: E[1] || (E[1] = (A) => g.value = ""),
        error: p.value
      }, {
        default: q(() => [
          se($(g.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Z("", !0)
    ], 64));
  }
}, kd = { class: "flex" }, Dd = ["aria-label"], Cd = /* @__PURE__ */ h("div", null, null, -1), Md = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return Ee(() => {
      e("load");
    }), (t, o) => (S(), C(ue, null, [
      h("div", kd, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, $(r.selection.item.basename), 9, Dd)
      ]),
      Cd
    ], 64));
  }
}, Ed = ["aria-label"], $d = {
  class: "w-full",
  preload: "",
  controls: ""
}, Td = ["src"], Ad = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const t = r, { apiUrl: o } = Ie(), a = () => o.value + "?" + Ge({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(ue, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, $(r.selection.item.basename), 9, Ed),
      h("div", null, [
        h("video", $d, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Td),
          se(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Ld = ["aria-label"], Id = {
  class: "w-full",
  controls: ""
}, Od = ["src"], Pd = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const t = r, { apiUrl: o } = Ie(), a = () => o.value + "?" + Ge({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(ue, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, $(r.selection.item.basename), 9, Ld),
      h("div", null, [
        h("audio", Id, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Od),
          se(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Nd = ["aria-label"], jd = ["data"], zd = ["src"], Vd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const t = r, { apiUrl: o } = Ie(), a = () => o.value + "?" + Ge({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(ue, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, $(r.selection.item.basename), 9, Nd),
      h("div", null, [
        h("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          h("iframe", {
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
        `, 8, zd)
        ], 8, jd)
      ])
    ], 64));
  }
}, Bd = { class: "sm:flex sm:items-start" }, Rd = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Hd = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Ud = {
  key: 0,
  class: "flex leading-5"
}, Kd = /* @__PURE__ */ h("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ h("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Yd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Wd = { class: "font-bold pl-2" }, Xd = { class: "font-bold pl-2" }, Zd = {
  name: "VFModalPreview"
}, qd = /* @__PURE__ */ Object.assign(Zd, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: t } = Ie(), o = O("emitter"), { t: a } = O("i18n"), n = L(!1), l = (g) => n.value = g, u = (g) => {
      var p;
      return ((p = e.selection.item.mime_type) != null ? p : "").startsWith(g);
    }, b = () => {
      const g = t.value + "?" + Ge({ q: "download", adapter: e.selection.adapter, path: e.selection.item.path });
      o.emit("vf-download", g);
    };
    return (g, p) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: p[6] || (p[6] = (v) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Close")), 1),
        h("button", {
          type: "button",
          onClick: p[7] || (p[7] = (v) => b()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Download")), 1)
      ]),
      default: q(() => [
        h("div", Bd, [
          h("div", Rd, [
            h("div", null, [
              u("text") ? (S(), J($c, {
                key: 0,
                selection: r.selection,
                onLoad: p[0] || (p[0] = (v) => l(!0))
              }, null, 8, ["selection"])) : u("image") ? (S(), J(xd, {
                key: 1,
                selection: r.selection,
                onLoad: p[1] || (p[1] = (v) => l(!0))
              }, null, 8, ["selection"])) : u("video") ? (S(), J(Ad, {
                key: 2,
                selection: r.selection,
                onLoad: p[2] || (p[2] = (v) => l(!0))
              }, null, 8, ["selection"])) : u("audio") ? (S(), J(Pd, {
                key: 3,
                selection: r.selection,
                onLoad: p[3] || (p[3] = (v) => l(!0))
              }, null, 8, ["selection"])) : u("application/pdf") ? (S(), J(Vd, {
                key: 4,
                selection: r.selection,
                onLoad: p[4] || (p[4] = (v) => l(!0))
              }, null, 8, ["selection"])) : (S(), J(Md, {
                key: 5,
                selection: r.selection,
                onLoad: p[5] || (p[5] = (v) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Hd, [
              n.value == !1 ? (S(), C("div", Ud, [
                Kd,
                h("span", null, $(x(a)("Loading")), 1)
              ])) : Z("", !0)
            ])
          ])
        ]),
        h("div", Yd, [
          h("div", null, [
            h("span", Wd, $(x(a)("File Size")) + ": ", 1),
            se($(x(rs)(r.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Xd, $(x(a)("Last Modified")) + ": ", 1),
            se(" " + $(x(ss)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Fd = { class: "sm:flex sm:items-start" }, Gd = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), Jd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Qd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, eu = { class: "mt-2" }, tu = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, ru = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, su = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ou = [
  su
], nu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, iu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), au = [
  iu
], lu = { class: "ml-1.5" }, cu = ["onKeyup"], du = {
  name: "VFModalRename"
}, uu = /* @__PURE__ */ Object.assign(du, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = L(e.selection.items[0]), l = L(e.selection.items[0].basename), u = L(""), b = () => {
      l.value != "" && t.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path,
          name: l.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("%s is renamed.", l.value) });
        },
        onError: (g) => {
          u.value = a(g.message);
        }
      });
    };
    return (g, p) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (v) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", Fd, [
          Gd,
          h("div", Jd, [
            h("h3", Qd, $(x(a)("Rename")), 1),
            h("div", eu, [
              h("p", tu, [
                n.value.type == "dir" ? (S(), C("svg", ru, ou)) : (S(), C("svg", nu, au)),
                h("span", lu, $(n.value.basename), 1)
              ]),
              xe(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (v) => l.value = v),
                onKeyup: nt(b, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, cu), [
                [it, l.value]
              ]),
              u.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: p[1] || (p[1] = (v) => u.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), hu = { class: "sm:flex sm:items-start" }, fu = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), pu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mu = { class: "mt-2" }, vu = { class: "text-gray-500 mb-1" }, bu = ["id"], yu = {
  key: 0,
  class: "py-2"
}, wu = ["disabled", "onClick"], Su = {
  name: "VFModalUpload"
}, _u = /* @__PURE__ */ Object.assign(Su, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter"), { apiUrl: o } = Ie(), { t: a } = O("i18n"), n = O("accessToken"), l = L(null), u = L(null), b = L(null), g = L([]), p = L(""), v = L(!0), w = () => {
      p.value = "", l.value.start();
    }, T = O("postData");
    return Ee(() => {
      l.value = new Yt.Uploader({
        runtimes: "html5",
        browse_button: b.value,
        container: u.value,
        max_file_size: "2Gb",
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ge(Object.assign(T, { q: "upload", adapter: e.current.adapter, path: e.current.dirname })),
        headers: {
          ...It && { "X-CSRF-Token": It },
          Authorization: n ? "Bearer " + n : null
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(M, E) {
            v.value = !1, Yt.each(E, function(A) {
              g.value.push({
                id: A.id,
                name: A.name,
                size: Yt.formatSize(A.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(M, E) {
            g.value[g.value.findIndex((A) => A.id == E.id)].percent = E.percent + "%";
          },
          UploadComplete: function() {
            v.value = !0, t.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
          },
          Error: function(M, E) {
            l.value.stop(), p.value = a(JSON.parse(E.response).message);
          }
        }
      }), l.value.init();
    }), (M, E) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          disabled: v.value,
          onClick: Ze(w, ["prevent"]),
          type: "button",
          class: ge([v.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, $(x(a)("Upload")), 11, wu),
        h("button", {
          type: "button",
          onClick: E[1] || (E[1] = (A) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", hu, [
          fu,
          h("div", pu, [
            h("h3", gu, $(x(a)("Upload files")), 1),
            h("div", mu, [
              h("div", vu, [
                (S(!0), C(ue, null, ke(g.value, (A) => (S(), C("div", null, [
                  h("div", {
                    id: A.id
                  }, [
                    se($(A.name) + " ( " + $(A.size) + ") ", 1),
                    h("b", null, $(A.percent), 1)
                  ], 8, bu)
                ]))), 256)),
                g.value.length ? Z("", !0) : (S(), C("div", yu, $(x(a)("No files selected!")), 1))
              ]),
              h("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: u
              }, [
                h("button", {
                  ref_key: "pickFiles",
                  ref: b,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, $(x(a)("Select Files")), 513)
              ], 512),
              p.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: E[0] || (E[0] = (A) => p.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(p.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), xu = { class: "sm:flex sm:items-start" }, ku = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Du = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Cu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Mu = { class: "mt-2" }, Eu = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, $u = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Tu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Au = [
  Tu
], Lu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Iu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ou = [
  Iu
], Pu = { class: "ml-1.5" }, Nu = ["onKeyup", "placeholder"], ju = {
  name: "VFModalArchive"
}, zu = /* @__PURE__ */ Object.assign(ju, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n"), n = L(""), l = L(""), u = L(e.selection.items), b = () => {
      u.value.length && t.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(u.value.map(({ path: g, type: p }) => ({ path: g, type: p }))),
          name: n.value
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (g) => {
          l.value = a(g.message);
        }
      });
    };
    return (g, p) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (v) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", xu, [
          ku,
          h("div", Du, [
            h("h3", Cu, $(x(a)("Archive the files")), 1),
            h("div", Mu, [
              (S(!0), C(ue, null, ke(u.value, (v) => (S(), C("p", Eu, [
                v.type == "dir" ? (S(), C("svg", $u, Au)) : (S(), C("svg", Lu, Ou)),
                h("span", Pu, $(v.basename), 1)
              ]))), 256)),
              xe(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (v) => n.value = v),
                onKeyup: nt(b, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Nu), [
                [it, n.value]
              ]),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: p[1] || (p[1] = (v) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Vu = { class: "sm:flex sm:items-start" }, Bu = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Ru = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Hu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Uu = { class: "mt-2" }, Ku = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Yu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Xu = [
  Wu
], Zu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Fu = [
  qu
], Gu = { class: "ml-1.5" }, Ju = { class: "my-1 text-sm text-gray-500" }, Qu = {
  name: "VFModalUnarchive"
}, eh = /* @__PURE__ */ Object.assign(Qu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter");
    O("storage");
    const o = O("adapter"), { t: a } = O("i18n");
    L("");
    const n = L(e.selection.items[0]), l = L(""), u = L([]), b = () => {
      t.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (g) => {
          l.value = a(g.message);
        }
      });
    };
    return (g, p) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: p[1] || (p[1] = (v) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", Vu, [
          Bu,
          h("div", Ru, [
            h("h3", Hu, $(x(a)("Unarchive")), 1),
            h("div", Uu, [
              (S(!0), C(ue, null, ke(u.value, (v) => (S(), C("p", Ku, [
                v.type == "dir" ? (S(), C("svg", Yu, Xu)) : (S(), C("svg", Zu, Fu)),
                h("span", Gu, $(v.basename), 1)
              ]))), 256)),
              h("p", Ju, $(x(a)("The archive will be unarchived at")) + " (" + $(r.current.dirname) + ")", 1),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: p[0] || (p[0] = (v) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), th = { class: "sm:flex sm:items-start" }, rh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), sh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, oh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nh = { class: "mt-2" }, ih = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ah = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, lh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ch = [
  lh
], dh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, uh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), hh = [
  uh
], fh = { class: "ml-1.5" }, ph = { class: "text-sm text-gray-500 pb-1 pt-3" }, gh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, mh = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), vh = { class: "ml-1.5 overflow-auto" }, bh = {
  name: "VFModalMove"
}, yh = /* @__PURE__ */ Object.assign(bh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, t = O("emitter"), { t: o } = O("i18n");
    O("storage");
    const a = O("adapter"), n = L(e.selection.items.from), l = L(""), u = () => {
      n.value.length && t.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: e.current.dirname,
          items: JSON.stringify(n.value.map(({ path: b, type: g }) => ({ path: b, type: g }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          t.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (b) => {
          l.value = o(b.message);
        }
      });
    };
    return (b, g) => (S(), J(Oe, null, {
      buttons: q(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: g[1] || (g[1] = (p) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, $(x(o)("Cancel")), 1)
      ]),
      default: q(() => [
        h("div", th, [
          rh,
          h("div", sh, [
            h("h3", oh, $(x(o)("Move files")), 1),
            h("div", nh, [
              (S(!0), C(ue, null, ke(n.value, (p) => (S(), C("p", ih, [
                p.type == "dir" ? (S(), C("svg", ah, ch)) : (S(), C("svg", dh, hh)),
                h("span", fh, $(p.path), 1)
              ]))), 256)),
              h("p", ph, $(x(o)("Are you sure you want to move these files?")), 1),
              h("p", gh, [
                mh,
                h("span", vh, $(r.selection.items.to.path), 1)
              ]),
              l.value.length ? (S(), J(Pe, {
                key: 0,
                onHidden: g[0] || (g[0] = (p) => l.value = ""),
                error: ""
              }, {
                default: q(() => [
                  se($(l.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: Gl,
  ModalMessage: nc,
  ModalNewFolder: pc,
  ModalNewFile: xc,
  ModalPreview: qd,
  ModalRename: uu,
  ModalUpload: _u,
  ModalArchive: zu,
  ModalUnarchive: eh,
  ModalMove: yh
}, Symbol.toStringTag, { value: "Module" })), Zt = {
  VueFinder: Dl,
  ...wh
};
const xh = {
  install(r) {
    for (const e in Zt)
      if (Zt.hasOwnProperty(e)) {
        const t = Zt[e];
        r.component(t.name, t);
      }
  }
};
export {
  xh as default
};
