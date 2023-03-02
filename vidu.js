// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
    var da;
    a: {
      var ea = { a: !0 },
        fa = {};
      try {
        fa.__proto__ = ea;
        da = fa.a;
        break a;
      } catch (a) {}
      da = !1;
    }
    ca = da
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = ca,
    la = function (a, b) {
      a.prototype = ba(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.fk = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function () {},
    pa = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    qa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ra = Array.isArray,
    sa = function (a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    va = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    wa = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    ya = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Da = function () {
      return new Date(Date.now());
    },
    B = function () {
      return Da().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    La = /^\w{1,9}$/,
    Ma = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      wa(a, function (d, e) {
        La.test(d) && e && c.push(d);
      });
      return c.join(b);
    }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  var Na,
    Oa = function () {
      if (void 0 === Na) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          Na = a;
        } else Na = a;
      }
      return Na;
    };
  var Qa = function (a, b) {
    this.h = b === Pa ? a : "";
  };
  Qa.prototype.toString = function () {
    return this.h + "";
  };
  var Pa = {};
  var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Sa() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Ta(a) {
    return -1 != Sa().indexOf(a);
  }
  function Ua() {
    return Ta("Firefox") || Ta("FxiOS");
  }
  function Va() {
    return ((Ta("Chrome") || Ta("CriOS")) && !Ta("Edge")) || Ta("Silk");
  }
  var Wa = {},
    Xa = function (a, b) {
      this.h = b === Wa ? a : "";
    };
  Xa.prototype.toString = function () {
    return this.h.toString();
  };
  var Ya = function (a) {
      return a instanceof Xa && a.constructor === Xa
        ? a.h
        : "type_error:SafeHtml";
    },
    Za = function (a) {
      var b = a,
        c = Oa(),
        d = c ? c.createHTML(b) : b;
      return new Xa(d, Wa);
    };
  function $a(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var F = window,
    H = document,
    ab = navigator,
    bb = H.currentScript && H.currentScript.src,
    cb = function (a, b) {
      var c = F[a];
      F[a] = void 0 === c ? b : c;
      return F[a];
    },
    db = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    eb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    fb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function gb(a, b, c) {
    b &&
      wa(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var hb = function (a, b, c, d) {
      var e = H.createElement("script");
      gb(e, d, eb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = a,
        k = Oa(),
        l = k ? k.createScriptURL(g) : g;
      f = new Qa(l, Pa);
      e.src =
        f instanceof Qa && f.constructor === Qa
          ? f.h
          : "type_error:TrustedResourceUrl";
      var n,
        p,
        q,
        r =
          null ==
          (q = (p = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : q.call(p, "script[nonce]");
      (n = r ? r.nonce || r.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", n);
      db(e, b);
      c && (e.onerror = c);
      var t = H.getElementsByTagName("script")[0] || H.body || H.head;
      t.parentNode.insertBefore(e, t);
      return e;
    },
    ib = function () {
      if (bb) {
        var a = bb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    jb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = H.createElement("iframe")), (k = !0));
      gb(g, c, fb);
      d &&
        wa(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (k) {
        var l = (H.body && H.body.lastChild) || H.body || H.head;
        l.parentNode.insertBefore(g, l);
      }
      db(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    kb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    lb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    mb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      F.setTimeout(a, 0);
    },
    nb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    ob = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    pb = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = Za("A<div>" + a + "</div>");
      void 0 !== c.tagName && $a(c);
      c.innerHTML = Ya(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    qb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    rb = function (a) {
      var b;
      try {
        b = ab.sendBeacon && ab.sendBeacon(a);
      } catch (c) {}
      b || kb(a);
    },
    sb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var tb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    ub = function (a) {
      if (null == a) return String(a);
      var b = tb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    vb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    wb = function (a) {
      if (!a || "object" != ub(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !vb(a, "constructor") &&
          !vb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || vb(a, b);
    },
    M = function (a, b) {
      var c = b || ("array" == ub(a) ? [] : {}),
        d;
      for (d in a)
        if (vb(a, d)) {
          var e = a[d];
          "array" == ub(e)
            ? ("array" != ub(c[d]) && (c[d] = []), (c[d] = M(e, c[d])))
            : wb(e)
            ? (wb(c[d]) || (c[d] = {}), (c[d] = M(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var xb = function (a) {
    if (void 0 === a || ra(a) || wb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var yb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      dh: a("consent"),
      eh: a("consent_always_fire"),
      qf: a("convert_case_to"),
      rf: a("convert_false_to"),
      sf: a("convert_null_to"),
      tf: a("convert_true_to"),
      uf: a("convert_undefined_to"),
      uj: a("debug_mode_metadata"),
      qb: a("function"),
      Ae: a("instance_name"),
      Ph: a("live_only"),
      Qh: a("malware_disabled"),
      Rh: a("metadata"),
      Uh: a("original_activity_id"),
      Vj: a("original_vendor_template_id"),
      Uj: a("once_on_load"),
      Th: a("once_per_event"),
      Sf: a("once_per_load"),
      Wj: a("priority_override"),
      Xj: a("respected_consent_types"),
      Yf: a("setup_tags"),
      ag: a("tag_id"),
      bg: a("teardown_tags"),
    };
  })();
  var Xb;
  var Yb = [],
    Zb = [],
    $b = [],
    ac = [],
    bc = [],
    cc = {},
    dc,
    ec,
    fc,
    gc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = cc[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.og && d.og(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === yb.eh.toString() && a[g]) {
          }
      e && d && d.ng && (f.vtp_gtmCachedValues = d.ng);
      if (b) {
        if (null == b.name) {
          var k;
          a: {
            var l = b.index;
            if (null == l) k = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = Yb[l];
                  break;
                case 1:
                  n = ac[l];
                  break;
                default:
                  k = "";
                  break a;
              }
              var p = n && n[yb.Ae];
              k = p ? String(p) : "";
            }
          }
          b.name = k;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : Xb(c, f, b);
    },
    jc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = ic(a[e], b, c));
      return d;
    },
    ic = function (a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(ic(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Yb[f];
            if (!g || b.Ue(g)) return;
            c[f] = !0;
            var k = String(g[yb.Ae]);
            try {
              var l = jc(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = gc(l, { event: b, index: f, type: 2, name: k });
              fc && (d = fc.gi(d, l));
            } catch (w) {
              b.Fg && b.Fg(w, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[ic(a[n], b, c)] = ic(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = ic(a[q], b, c);
              ec && (p = p || r === ec.qd);
              d.push(r);
            }
            return ec && p ? ec.ii(d) : d.join("");
          case "escape":
            d = ic(a[1], b, c);
            if (ec && ra(a[1]) && "macro" === a[1][0] && ec.Di(a))
              return ec.Ui(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) zb[a[t]] && (d = zb[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!ac[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { vg: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var y = kc(v, b, c),
              x = !!a[4];
            return x || 2 !== y ? x !== (1 === y) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    kc = function (a, b, c) {
      try {
        return dc(jc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var nc = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = lc(a), f = 0; f < Zb.length; f++) {
        var g = Zb[f],
          k = mc(g, e);
        if (k) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < ac.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    mc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    lc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = kc($b[c], a));
        return b[c];
      };
    };
  var oc = {
    gi: function (a, b) {
      b[yb.qf] &&
        "string" === typeof a &&
        (a = 1 == b[yb.qf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(yb.sf) && null === a && (a = b[yb.sf]);
      b.hasOwnProperty(yb.uf) && void 0 === a && (a = b[yb.uf]);
      b.hasOwnProperty(yb.tf) && !0 === a && (a = b[yb.tf]);
      b.hasOwnProperty(yb.rf) && !1 === a && (a = b[yb.rf]);
      return a;
    },
  };

  var Nc = function (a) {
      return Mc ? H.querySelectorAll(a) : null;
    },
    Oc = function (a, b) {
      if (!Mc) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Pc = !1;
  if (H.querySelectorAll)
    try {
      var Qc = H.querySelectorAll(":root");
      Qc && 1 == Qc.length && Qc[0] == H.documentElement && (Pc = !0);
    } catch (a) {}
  var Mc = Pc;
  var Rc = {},
    Sc = function (a, b) {
      Rc[a] = Rc[a] || [];
      Rc[a][b] = !0;
    },
    Tc = function (a) {
      for (var b = [], c = Rc[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    Uc = function () {
      for (var a = [], b = Rc.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var Q = function (a) {
    Sc("GTM", a);
  };
  var T = {
      g: {
        H: "ad_storage",
        M: "analytics_storage",
        nf: "region",
        tj: "consent_updated",
        pf: "wait_for_update",
        hh: "app_remove",
        ih: "app_store_refund",
        jh: "app_store_subscription_cancel",
        kh: "app_store_subscription_convert",
        lh: "app_store_subscription_renew",
        vf: "add_payment_info",
        mh: "add_shipping_info",
        Cb: "add_to_cart",
        Db: "remove_from_cart",
        nh: "view_cart",
        ib: "begin_checkout",
        Wd: "select_item",
        jb: "view_item_list",
        Xd: "select_promotion",
        Eb: "view_promotion",
        xa: "purchase",
        Fb: "refund",
        ya: "view_item",
        wf: "add_to_wishlist",
        oh: "first_open",
        ph: "first_visit",
        Ea: "gtag.config",
        La: "gtag.get",
        qh: "in_app_purchase",
        Yb: "page_view",
        rh: "session_start",
        Zb: "user_engagement",
        Yd: "gclid",
        da: "ads_data_redaction",
        W: "allow_ad_personalization_signals",
        Zd: "allow_custom_scripts",
        sh: "allow_display_features",
        Tc: "allow_enhanced_conversions",
        ac: "allow_google_signals",
        za: "allow_interest_groups",
        th: "auid",
        uh: "auto_detection_enabled",
        kb: "aw_remarketing",
        ae: "aw_remarketing_only",
        be: "discount",
        ce: "aw_feed_country",
        de: "aw_feed_language",
        Z: "items",
        ee: "aw_merchant_id",
        Uc: "campaign_content",
        Vc: "campaign_id",
        Wc: "campaign_medium",
        Xc: "campaign_name",
        bc: "campaign",
        Yc: "campaign_source",
        Zc: "campaign_term",
        ka: "client_id",
        vh: "content_group",
        wh: "content_type",
        Fa: "conversion_cookie_prefix",
        vj: "conversion_id",
        wj: "conversion_label",
        la: "conversion_linker",
        xj: "conversion_api",
        ma: "cookie_domain",
        Aa: "cookie_expires",
        Ma: "cookie_flags",
        Gb: "cookie_name",
        Ua: "cookie_path",
        Ga: "cookie_prefix",
        Hb: "cookie_update",
        ad: "country",
        na: "currency",
        fe: "customer_lifetime_value",
        cc: "custom_map",
        yj: "debug_mode",
        X: "developer_id",
        xf: "disable_merchant_reported_purchases",
        xh: "dc_custom_params",
        yh: "dc_natural_search",
        he: "dynamic_event_settings",
        zh: "affiliation",
        yf: "checkout_option",
        zf: "checkout_step",
        Ah: "coupon",
        ie: "list_name",
        Bh: "promotions",
        je: "shipping",
        Af: "tax",
        bd: "engagement_time_msec",
        Va: "enhanced_client_id",
        ke: "enhanced_conversions",
        Bf: "enhanced_conversions_automatic_settings",
        zj: "enhanced_conversions_mode",
        me: "estimated_delivery_date",
        fc: "euid_logged_in_state",
        Ib: "event_callback",
        ne: "event_developer_id_string",
        Aj: "event",
        cd: "event_settings",
        dd: "event_timeout",
        Ch: "experiments",
        oe: "firebase_id",
        hc: "first_party_collection",
        ed: "_x_20",
        lb: "_x_19",
        Bj: "fledge",
        Cj: "gac_gclid",
        Dj: "gac_wbraid",
        Ej: "gac_wbraid_multiple_conversions",
        ic: "ga_restrict_domain",
        pe: "ga_temp_client_id",
        Fj: "gdpr_applies",
        Cf: "geo_granularity",
        Wa: "value_callback",
        Na: "value_key",
        qe: "global_developer_id_string",
        Gj: "google_ono",
        Xa: "google_signals",
        fd: "google_tld",
        gd: "groups",
        Hj: "gsa_experiment_id",
        Ij: "iframe_state",
        hd: "ignore_referrer",
        se: "internal_traffic_results",
        Jj: "is_passthrough",
        nb: "language",
        Kj: "legacy_developer_id_string",
        oa: "linker",
        Jb: "accept_incoming",
        Kb: "decorate_forms",
        N: "domains",
        jc: "url_position",
        Df: "method",
        te: "new_customer",
        Ef: "non_interaction",
        Dh: "optimize_id",
        Ya: "page_location",
        ue: "page_path",
        Za: "page_referrer",
        jd: "page_title",
        Ff: "passengers",
        Gf: "phone_conversion_callback",
        Eh: "phone_conversion_country_code",
        Hf: "phone_conversion_css_class",
        Fh: "phone_conversion_ids",
        If: "phone_conversion_number",
        Jf: "phone_conversion_options",
        Kf: "quantity",
        ve: "redact_device_info",
        Lf: "redact_enhanced_user_id",
        Gh: "redact_ga_client_id",
        Hh: "redact_user_id",
        kd: "referral_exclusion_definition",
        kc: "restricted_data_processing",
        Ih: "retoken",
        Mf: "screen_name",
        we: "screen_resolution",
        Jh: "search_term",
        Ba: "send_page_view",
        ob: "send_to",
        mc: "session_duration",
        nc: "session_engaged",
        ld: "session_engaged_time",
        pb: "session_id",
        oc: "session_number",
        md: "delivery_postal_code",
        Lj: "tc_privacy_string",
        Nf: "temporary_client_id",
        Kh: "tracking_id",
        xe: "traffic_type",
        ab: "transaction_id",
        V: "transport_url",
        Of: "trip_type",
        nd: "update",
        cb: "url_passthrough",
        qa: "user_data",
        Mj: "user_data_auto_latency",
        Nj: "user_data_auto_meta",
        Oj: "user_data_auto_multi",
        Pj: "user_data_auto_selectors",
        Qj: "user_data_auto_status",
        Lb: "user_data_settings",
        Ha: "user_id",
        Ia: "user_properties",
        Rj: "us_privacy_string",
        ja: "value",
        Sj: "wbraid",
        Tj: "wbraid_multiple_conversions",
        Qf: "_is_linker_valid",
        Rf: "_is_passthrough_cid",
      },
    },
    od = {},
    pd = Object.freeze(
      ((od[T.g.W] = 1),
      (od[T.g.Tc] = 1),
      (od[T.g.ac] = 1),
      (od[T.g.Z] = 1),
      (od[T.g.ma] = 1),
      (od[T.g.Aa] = 1),
      (od[T.g.Ma] = 1),
      (od[T.g.Gb] = 1),
      (od[T.g.Ua] = 1),
      (od[T.g.Ga] = 1),
      (od[T.g.Hb] = 1),
      (od[T.g.cc] = 1),
      (od[T.g.X] = 1),
      (od[T.g.he] = 1),
      (od[T.g.Ib] = 1),
      (od[T.g.cd] = 1),
      (od[T.g.dd] = 1),
      (od[T.g.hc] = 1),
      (od[T.g.ic] = 1),
      (od[T.g.Xa] = 1),
      (od[T.g.fd] = 1),
      (od[T.g.gd] = 1),
      (od[T.g.se] = 1),
      (od[T.g.oa] = 1),
      (od[T.g.kd] = 1),
      (od[T.g.kc] = 1),
      (od[T.g.Ba] = 1),
      (od[T.g.ob] = 1),
      (od[T.g.mc] = 1),
      (od[T.g.ld] = 1),
      (od[T.g.md] = 1),
      (od[T.g.V] = 1),
      (od[T.g.nd] = 1),
      (od[T.g.Lb] = 1),
      (od[T.g.Ia] = 1),
      od)
    ),
    qd = Object.freeze([
      T.g.Ya,
      T.g.Za,
      T.g.jd,
      T.g.nb,
      T.g.Mf,
      T.g.Ha,
      T.g.oe,
      T.g.vh,
    ]),
    rd = {},
    sd = Object.freeze(
      ((rd[T.g.hh] = 1),
      (rd[T.g.ih] = 1),
      (rd[T.g.jh] = 1),
      (rd[T.g.kh] = 1),
      (rd[T.g.lh] = 1),
      (rd[T.g.oh] = 1),
      (rd[T.g.ph] = 1),
      (rd[T.g.qh] = 1),
      (rd[T.g.rh] = 1),
      (rd[T.g.Zb] = 1),
      rd)
    ),
    td = {},
    ud = Object.freeze(
      ((td[T.g.vf] = 1),
      (td[T.g.mh] = 1),
      (td[T.g.Cb] = 1),
      (td[T.g.Db] = 1),
      (td[T.g.nh] = 1),
      (td[T.g.ib] = 1),
      (td[T.g.Wd] = 1),
      (td[T.g.jb] = 1),
      (td[T.g.Xd] = 1),
      (td[T.g.Eb] = 1),
      (td[T.g.xa] = 1),
      (td[T.g.Fb] = 1),
      (td[T.g.ya] = 1),
      (td[T.g.wf] = 1),
      td)
    ),
    vd = Object.freeze([T.g.W, T.g.ac, T.g.Hb]),
    wd = Object.freeze([].concat(vd)),
    xd = Object.freeze([T.g.Aa, T.g.dd, T.g.mc, T.g.ld, T.g.bd]),
    yd = Object.freeze([].concat(xd)),
    zd = {},
    Ad = ((zd[T.g.H] = "1"), (zd[T.g.M] = "2"), zd),
    Bd = {},
    Cd = Object.freeze(
      ((Bd[T.g.W] = 1),
      (Bd[T.g.Tc] = 1),
      (Bd[T.g.za] = 1),
      (Bd[T.g.kb] = 1),
      (Bd[T.g.ae] = 1),
      (Bd[T.g.be] = 1),
      (Bd[T.g.ce] = 1),
      (Bd[T.g.de] = 1),
      (Bd[T.g.Z] = 1),
      (Bd[T.g.ee] = 1),
      (Bd[T.g.Fa] = 1),
      (Bd[T.g.la] = 1),
      (Bd[T.g.ma] = 1),
      (Bd[T.g.Aa] = 1),
      (Bd[T.g.Ma] = 1),
      (Bd[T.g.Ga] = 1),
      (Bd[T.g.na] = 1),
      (Bd[T.g.fe] = 1),
      (Bd[T.g.X] = 1),
      (Bd[T.g.xf] = 1),
      (Bd[T.g.ke] = 1),
      (Bd[T.g.me] = 1),
      (Bd[T.g.oe] = 1),
      (Bd[T.g.hc] = 1),
      (Bd[T.g.nb] = 1),
      (Bd[T.g.te] = 1),
      (Bd[T.g.Ya] = 1),
      (Bd[T.g.Za] = 1),
      (Bd[T.g.Gf] = 1),
      (Bd[T.g.Hf] = 1),
      (Bd[T.g.If] = 1),
      (Bd[T.g.Jf] = 1),
      (Bd[T.g.kc] = 1),
      (Bd[T.g.Ba] = 1),
      (Bd[T.g.ob] = 1),
      (Bd[T.g.md] = 1),
      (Bd[T.g.ab] = 1),
      (Bd[T.g.V] = 1),
      (Bd[T.g.nd] = 1),
      (Bd[T.g.cb] = 1),
      (Bd[T.g.qa] = 1),
      (Bd[T.g.Ha] = 1),
      (Bd[T.g.ja] = 1),
      Bd)
    );
  Object.freeze(T.g);
  var Dd = {},
    U = (F.google_tag_manager = F.google_tag_manager || {}),
    Ed = Math.random();
  Dd.xd = "7d0";
  Dd.aa = "dataLayer";
  Dd.gh =
    "ChEI8KDElgYQ0LX6jba9+5aHARInANCRC8fAVtD+pexU28TcF+X9sl40T+yqWhqpsa5pqyM1gSKE1YJ/GgJa8A\x3d\x3d";
  var Fd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Hd = { __paused: !0, __tg: !0 },
    Id;
  for (Id in Fd) Fd.hasOwnProperty(Id) && (Hd[Id] = !0);
  Dd.Xb = "www.googletagmanager.com";
  var Jd,
    Kd = Dd.Xb + "/gtm.js";
  Kd = Dd.Xb + "/gtag/js";
  Jd = Kd;
  var Ld = Aa(""),
    Md = Aa(""),
    Nd = null,
    Od = null,
    Pd = {},
    Qd = {},
    Rd = function () {
      var a = U.sequence || 1;
      U.sequence = a + 1;
      return a;
    };
  Dd.fh = "";
  var Sd = "";
  Dd.yd = Sd;
  var Td = new ua(),
    Ud = {},
    Vd = {},
    Yd = {
      name: Dd.aa,
      set: function (a, b) {
        M(Ja(a, b), Ud);
        Wd();
      },
      get: function (a) {
        return Xd(a, 2);
      },
      reset: function () {
        Td = new ua();
        Ud = {};
        Wd();
      },
    },
    Xd = function (a, b) {
      return 2 != b ? Td.get(a) : Zd(a);
    },
    Zd = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ud, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    $d = function (a, b) {
      Vd.hasOwnProperty(a) || (Td.set(a, b), M(Ja(a, b), Ud), Wd());
    },
    Wd = function (a) {
      wa(Vd, function (b, c) {
        Td.set(b, c);
        M(Ja(b), Ud);
        M(Ja(b, c), Ud);
        a && delete Vd[b];
      });
    },
    ae = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Zd(a) : Td.get(a);
      "array" === ub(d) || "object" === ub(d) ? (c = M(d)) : (c = d);
      return c;
    };
  var be,
    ce = !1,
    de = function (a) {
      if (!ce) {
        ce = !0;
        be = be || {};
      }
      return be[a];
    };
  var ee = function (a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle)
      return !0;
    var c = F.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        0 <= k &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = F.getComputedStyle(d, null));
    }
    return !1;
  };
  var ne = /:[0-9]+$/,
    oe = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    re = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = pe(a.protocol) || pe(F.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(ne, "")
            .toLowerCase());
      return qe(a, b, c, d, e);
    },
    qe = function (a, b, c, d, e) {
      var f,
        g = pe(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = se(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(ne, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Sc("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = oe(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    pe = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    se = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    te = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Sc("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(ne, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    ue = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = te(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var l = "" + f + g + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var ve = {};
  var Xe = {},
    Ye = function (a, b) {
      if (F._gtmexpgrp && F._gtmexpgrp.hasOwnProperty(a))
        return F._gtmexpgrp[a];
      void 0 === Xe[a] && (Xe[a] = Math.floor(Math.random() * b));
      return Xe[a];
    };
  var $e = { qg: "VN", aj: "VN-HN" };
  var af = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var cf = function () {
    var a = bf,
      b = "Se";
    if (a.Se && a.hasOwnProperty(b)) return a.Se;
    var c = new a();
    a.Se = c;
    a.hasOwnProperty(b);
    return c;
  };
  var bf = function () {
    var a = {};
    this.h = function () {
      var b = af.h,
        c = af.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[af.h] = !0;
    };
  };
  var df = [];
  function ef() {
    var a = cb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: ff,
        update: gf,
        addListener: hf,
        notifyListeners: jf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function ff(a, b, c, d, e, f) {
    var g = ef();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        l = k[a] || {},
        n = l.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = r;
        q &&
          F.setTimeout(function () {
            k[a] === r &&
              r.quiet &&
              ((r.quiet = !1), kf(a), jf(), Sc("TAGGING", 2));
          }, f);
      }
    }
  }
  function gf(a, b) {
    var c = ef();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = lf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = lf(c, a);
      f.quiet ? ((f.quiet = !1), kf(a)) : g !== d && kf(a);
    }
  }
  function hf(a, b) {
    df.push({ Ke: a, oi: b });
  }
  function kf(a) {
    for (var b = 0; b < df.length; ++b) {
      var c = df[b];
      ra(c.Ke) && -1 !== c.Ke.indexOf(a) && (c.Jg = !0);
    }
  }
  function jf(a, b) {
    for (var c = 0; c < df.length; ++c) {
      var d = df[c];
      if (d.Jg) {
        d.Jg = !1;
        try {
          d.oi({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function lf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var mf = function (a) {
      var b = ef();
      b.accessedAny = !0;
      return lf(b, a);
    },
    nf = function (a) {
      var b = ef();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    of = function (a) {
      var b = ef();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    pf = function () {
      if (!cf().h()) return !1;
      var a = ef();
      a.accessedAny = !0;
      return a.active;
    },
    qf = function () {
      var a = ef();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    rf = function (a, b) {
      ef().addListener(a, b);
    },
    sf = function (a, b) {
      ef().notifyListeners(a, b);
    },
    tf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!of(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        rf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    uf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === mf(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        rf(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ke = g), a(f));
        });
    };
  function vf() {}
  function wf() {}
  function xf(a) {
    for (var b = [], c = 0; c < yf.length; c++) {
      var d = a(yf[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var yf = [T.g.H, T.g.M],
    zf = function (a) {
      var b = a[T.g.nf];
      b && Q(40);
      var c = a[T.g.pf];
      c && Q(41);
      for (
        var d = ra(b) ? b : [b], e = { Tb: 0 };
        e.Tb < d.length;
        e = { Tb: e.Tb }, ++e.Tb
      )
        wa(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== T.g.nf && g !== T.g.pf) {
                var l = d[f.Tb],
                  n = $e.qg,
                  p = $e.aj;
                ef().set(g, k, l, n, p, c);
              }
            };
          })(e)
        );
    },
    Af = 0,
    Bf = function (a, b) {
      wa(a, function (e, f) {
        ef().update(e, f);
      });
      sf(b.eventId, b.priorityId);
      var c = B(),
        d = c - Af;
      Af && 0 <= d && 1e3 > d && Q(66);
      Af = c;
    },
    Cf = function (a) {
      var b = mf(a);
      return void 0 != b ? b : !0;
    },
    Df = function () {
      return "G1" + xf(mf);
    },
    Ef = function (a, b) {
      uf(a, b);
    },
    Ff = function (a, b) {
      tf(a, b);
    };
  var Gf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Hf = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var If = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Jf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Kf(a) {
    return "null" !== a.origin;
  }
  var Nf = function (a, b, c, d) {
      return Lf(d) ? Hf(a, String(b || Mf()), c) : [];
    },
    Qf = function (a, b, c, d, e) {
      if (Lf(e)) {
        var f = Of(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Pf(
            f,
            function (g) {
              return g.Ed;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Pf(
            f,
            function (g) {
              return g.Fc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Rf(a, b, c, d) {
    var e = Mf(),
      f = window;
    Kf(f) && (f.document.cookie = a);
    var g = Mf();
    return e != g || (void 0 != c && 0 <= Nf(b, g, !1, d).indexOf(c));
  }
  var Vf = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete g[u], t;
        g[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete g[u], t;
        g[u] = !0;
        return t + "; " + u;
      }
      if (!Lf(c.Pa)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Sf(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.bk);
      f = d(f, "samesite", c.dk);
      c.ek && (f = e(f, "secure"));
      var l = c.domain;
      if (l && "auto" === l.toLowerCase()) {
        for (var n = Tf(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Uf(q, c.path) && Rf(r, a, b, c.Pa)) return 0;
        }
        return 1;
      }
      l && "none" !== l.toLowerCase() && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return Uf(l, c.path) ? 1 : Rf(f, a, b, c.Pa) ? 0 : 1;
    },
    Wf = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Vf(a, b, c);
    };
  function Pf(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Of(a, b, c) {
    for (var d = [], e = Nf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), Ed: 1 * l[0] || 1, Fc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var Sf = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Xf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Yf = /(^|\.)doubleclick\.net$/i,
    Uf = function (a, b) {
      return (
        Yf.test(window.document.location.hostname) || ("/" === b && Xf.test(a))
      );
    },
    Mf = function () {
      return Kf(window) ? window.document.cookie : "";
    },
    Tf = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Yf.test(e) || Xf.test(e) || a.push("none");
      return a;
    },
    Lf = function (a) {
      if (!cf().h() || !a || !pf()) return !0;
      if (!of(a)) return !1;
      var b = mf(a);
      return null == b ? !0 : !!b;
    };
  var Zf = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Gf(a) & 2147483647)) : String(b);
    },
    $f = function (a) {
      return [Zf(a), Math.round(B() / 1e3)].join(".");
    },
    cg = function (a, b, c, d, e) {
      var f = ag(b);
      return Qf(a, f, bg(c), d, e);
    },
    dg = function (a, b, c, d) {
      var e = "" + ag(c),
        f = bg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    ag = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    bg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var eg = function () {
    U.dedupe_gclid || (U.dedupe_gclid = "" + $f());
    return U.dedupe_gclid;
  };
  var fg = function () {
    var a = !1;
    return a;
  };
  var gg = { I: "UA-209898633-1", Wb: "" },
    hg = { Ig: "UA-209898633-1", df: "UA-209898633-1" },
    ig = function () {
      var a = [gg.I];
      hg.Ig && (a = hg.Ig.split("|"));
      return a;
    },
    jg = function () {
      var a = [gg.I];
      0 === hg.df.length && Q(84);
      return a;
    },
    kg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    mg = function (a) {
      return lg().container.hasOwnProperty(a);
    };
  function lg() {
    var a = U.tidr;
    a || ((a = new kg()), (U.tidr = a));
    return a;
  }
  var ng;
  if (3 === Dd.xd.length) ng = "g";
  else {
    var og = "G";
    og = "g";
    ng = og;
  }
  var pg = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: ng,
      OPT: "o",
    },
    Bg = function (a) {
      var b = gg.I.split("-"),
        c = b[0].toUpperCase(),
        d = pg[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Dd.xd.length) {
        var g = "w";
        g = fg() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Dd.xd + e;
    };
  function Cg(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Dg = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Eg() {
    return Ta("iPhone") && !Ta("iPod") && !Ta("iPad");
  }
  function Fg() {
    Eg() || Ta("iPad") || Ta("iPod");
  }
  Ta("Opera");
  Ta("Trident") || Ta("MSIE");
  Ta("Edge");
  !Ta("Gecko") ||
    (-1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge")) ||
    Ta("Trident") ||
    Ta("MSIE") ||
    Ta("Edge");
  -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
  Ta("Macintosh");
  Ta("Windows");
  Ta("Linux") || Ta("CrOS");
  var Gg = ma.navigator || null;
  Gg && (Gg.appVersion || "").indexOf("X11");
  Ta("Android");
  Eg();
  Ta("iPad");
  Ta("iPod");
  Fg();
  Sa().toLowerCase().indexOf("kaios");
  function Hg(a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Ig = function () {};
  var Jg = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Kg = function (a, b, c) {
      this.s = a;
      this.h = null;
      this.J = {};
      this.ia = 0;
      this.R = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  la(Kg, Ig);
  Kg.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = Jf(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.R));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Jg(c)),
          (c.internalBlockOnErrors = b.D),
          (k && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Lg(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Kg.prototype.removeEventListener = function (a) {
    a && a.listenerId && Lg(this, "removeEventListener", null, a.listenerId);
  };
  var Ng = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === g && (k = 1))
        : 3 === c && ((k = 1), 1 === g && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Mg(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Mg(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Mg(a.purpose.legitimateInterests, b) &&
                Mg(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Mg = function (a, b) {
      return !(!a || !a[b]);
    },
    Lg = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Og(a)) {
        Pg(a);
        var f = ++a.ia;
        a.J[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Og = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Pg = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.J[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Dg(a.s, a.B));
    };
  var Qg = !0;
  Qg = !1;
  var Rg = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Sg = Cg("", 550),
    Tg = Cg("", 500);
  function Ug() {
    var a = U.tcf || {};
    return (U.tcf = a);
  }
  var Zg = function () {
    var a = Ug(),
      b = new Kg(F, Qg ? 3e3 : -1);
    if (
      !0 === F.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof F.__tcfapi ||
        "function" === typeof b.s.__tcfapi ||
        null != Og(b))
    ) {
      a.active = !0;
      a.Hc = {};
      Vg();
      var c = null;
      Qg
        ? (c = F.setTimeout(function () {
            Wg(a);
            Xg(a);
            c = null;
          }, Tg))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Wg(a), Xg(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Yg()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Rg)
                if (Rg.hasOwnProperty(g))
                  if ("1" === g) {
                    var k = d,
                      l = !0;
                    l = void 0 === l ? !1 : l;
                    var n;
                    var p = k;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Jg(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === k.gdprApplies ||
                        "tcunavailable" === k.tcString ||
                        (void 0 === k.gdprApplies && !l) ||
                        "string" !== typeof k.tcString ||
                        !k.tcString.length
                        ? !0
                        : Ng(k, "1", 0)
                      : !1;
                  } else f[g] = Ng(d, g, Rg[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Hc = e), Xg(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Wg(a), Xg(a);
      }
    }
  };
  function Wg(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Qg && (a.Hc = Yg());
  }
  function Vg() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Sg), a);
    zf(b);
  }
  function Yg() {
    var a = {},
      b;
    for (b in Rg) Rg.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Xg(a) {
    var b = {},
      c = ((b.ad_storage = a.Hc["1"] ? "granted" : "denied"), b);
    Bf(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: $g() }
    );
  }
  var $g = function () {
      var a = Ug();
      return a.active ? a.tcString || "" : "";
    },
    ah = function () {
      var a = Ug();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    bh = function (a) {
      if (!Rg.hasOwnProperty(String(a))) return !0;
      var b = Ug();
      return b.active && b.Hc ? !!b.Hc[String(a)] : !0;
    };
  function ch(a, b, c) {
    var d,
      e = Number(null != a.Qb ? a.Qb : void 0);
    0 !== e && (d = new Date((b || B()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var dh = ["1"],
    eh = {},
    fh = {},
    jh = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = gh(a.prefix);
      if (!eh[c] && !hh(c, a.path, a.domain) && b) {
        var d = gh(a.prefix),
          e = $f();
        if (0 === ih(d, e, a)) {
          var f = cb("google_tag_data", {});
          f._gcl_au ? Sc("GTM", 57) : (f._gcl_au = e);
        }
        hh(c, a.path, a.domain);
      }
    };
  function ih(a, b, c, d) {
    var e = dg(b, "1", c.domain, c.path),
      f = ch(c, d);
    f.Pa = "ad_storage";
    return Wf(a, e, f);
  }
  function hh(a, b, c) {
    var d = cg(a, b, c, dh, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((eh[a] = e.slice(0, 2).join(".")),
        (fh[a] = { id: e.slice(2, 4).join("."), Dg: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (fh[a] = { id: e.slice(0, 2).join("."), Dg: Number(e[2]) || 0 })
      : (eh[a] = d);
    return !0;
  }
  function gh(a) {
    return (a || "_gcl") + "_au";
  }
  function kh() {
    for (var a = lh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function mh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var lh, nh;
  function oh(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = nh[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    lh = lh || mh();
    nh = nh || kh();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var ph;
  var th = function () {
      var a = qh,
        b = rh,
        c = sh(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        lb(H, "mousedown", d);
        lb(H, "keyup", d);
        lb(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    uh = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      sh().decorators.push(f);
    },
    vh = function (a, b, c) {
      for (var d = sh().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== H.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function sh() {
    var a = cb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var wh = /(.*?)\*(.*?)\*(.*)/,
    xh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    yh = /^(?:www\.|m\.|amp\.)+/,
    zh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Ah(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Ch = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            k = String(d);
          lh = lh || mh();
          nh = nh || kh();
          for (var l = [], n = 0; n < k.length; n += 3) {
            var p = n + 1 < k.length,
              q = n + 2 < k.length,
              r = k.charCodeAt(n),
              t = p ? k.charCodeAt(n + 1) : 0,
              u = q ? k.charCodeAt(n + 2) : 0,
              v = r >> 2,
              y = ((r & 3) << 4) | (t >> 4),
              x = ((t & 15) << 2) | (u >> 6),
              w = u & 63;
            q || ((w = 64), p || (x = 64));
            l.push(lh[v], lh[y], lh[x], lh[w]);
          }
          g = l.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", Bh(A), A].join("*");
  };
  function Bh(a, b) {
    var c = [
        F.navigator.userAgent,
        new Date().getTimezoneOffset(),
        ab.userLanguage || ab.language,
        Math.floor(B() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = ph)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    ph = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ ph[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function Dh() {
    return function (a) {
      var b = te(F.location.href),
        c = b.search.replace("?", ""),
        d = oe(c, "_gl", !0) || "";
      a.query = Eh(d) || {};
      var e = re(b, "fragment").match(Ah("_gl"));
      a.fragment = Eh((e && e[3]) || "") || {};
    };
  }
  function Fh(a, b) {
    var c = Ah(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Gh = function (a, b) {
      b || (b = "_gl");
      var c = zh.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Fh(b, (c[2] || "").slice(1)),
        f = Fh(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Hh = function (a) {
      var b = Dh(),
        c = sh();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    Eh = function (a) {
      try {
        var b = Ih(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = oh(d[e + 1]);
            c[f] = g;
          }
          Sc("TAGGING", 6);
          return c;
        }
      } catch (k) {
        Sc("TAGGING", 8);
      }
    };
  function Ih(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = wh.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var k = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Bh(k, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return k;
        Sc("TAGGING", 7);
      }
    }
  }
  function Jh(a, b, c, d) {
    function e(p) {
      p = Fh(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = zh.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + l;
  }
  function Kh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = vh(b, 1, c),
      e = vh(b, 2, c),
      f = vh(b, 3, c);
    if (Ha(d)) {
      var g = Ch(d);
      c ? Lh("_gl", g, a) : Mh("_gl", g, a, !1);
    }
    if (!c && Ha(e)) {
      var k = Ch(e);
      Mh("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Mh(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Lh(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Jh(n, p, q);
        }
  }
  function Mh(a, b, c, d) {
    if (c.href) {
      var e = Jh(a, b, c.href, void 0 === d ? !1 : d);
      Ra.test(e) && (c.href = e);
    }
  }
  function Lh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = H.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = Jh(a, b, c.action);
        Ra.test(n) && (c.action = n);
      }
    }
  }
  function qh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Kh(e, e.hostname);
      }
    } catch (g) {}
  }
  function rh(a) {
    try {
      if (a.action) {
        var b = re(te(a.action), "host");
        Kh(a, b);
      }
    } catch (c) {}
  }
  var Nh = function (a, b, c, d) {
      th();
      uh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Oh = function (a, b) {
      th();
      uh(a, [qe(F.location, "host", !0)], b, !0, !0);
    },
    Ph = function () {
      var a = H.location.hostname,
        b = xh.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(yh, ""),
        l = e.replace(yh, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    Qh = function (a, b) {
      return !1 === a ? !1 : a || b || Ph();
    };
  var Rh = {};
  var Sh = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          kf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function Th(a, b) {
    var c = Sh(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].kf] || (d[c[e].kf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Ca: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].kf].push(g);
      }
    }
    return d;
  }
  var Uh = /^\w+$/,
    Vh = /^[\w-]+$/,
    Wh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Xh = function () {
      if (!cf().h() || !pf()) return !0;
      var a = mf("ad_storage");
      return null == a ? !0 : !!a;
    },
    Yh = function (a, b) {
      of("ad_storage")
        ? Xh()
          ? a()
          : uf(a, "ad_storage")
        : b
        ? Sc("TAGGING", 3)
        : tf(
            function () {
              Yh(a, !0);
            },
            ["ad_storage"]
          );
    },
    $h = function (a) {
      return Zh(a).map(function (b) {
        return b.Ca;
      });
    },
    Zh = function (a) {
      var b = [];
      if (!Kf(F) || !H.cookie) return b;
      var c = Nf(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Pc: d.Pc }, e++) {
        var f = ai(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.Pc = g.Ca;
          var l = g.timestamp,
            n = g.labels,
            p = sa(
              b,
              (function (q) {
                return function (r) {
                  return r.Ca === q.Pc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = bi(p.labels, n || [])))
            : b.push({ version: k, Ca: d.Pc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return ci(b);
    };
  function bi(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function di(a) {
    return a && "string" == typeof a && a.match(Uh) ? a : "_gcl";
  }
  var fi = function () {
      var a = te(F.location.href),
        b = re(a, "query", !1, void 0, "gclid"),
        c = re(a, "query", !1, void 0, "gclsrc"),
        d = re(a, "query", !1, void 0, "wbraid"),
        e = re(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || oe(f, "gclid");
        c = c || oe(f, "gclsrc");
        d = d || oe(f, "wbraid");
      }
      return ei(b, c, e, d);
    },
    ei = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Vh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Vh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    hi = function (a) {
      var b = fi();
      Yh(function () {
        gi(b, !1, a);
      });
    };
  function gi(a, b, c, d, e) {
    function f(y, x) {
      var w = ii(y, g);
      w && (Wf(w, x, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = di(c.prefix);
    d = d || B();
    var k = ch(c, d, !0);
    k.Pa = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (y) {
        var x = ["GCL", n, y];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Rh.enable_gbraid_cookie_write
        ? 0
        : Rh.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = ii("gb", g),
        t = !1;
      if (!b)
        for (var u = Zh(r), v = 0; v < u.length; v++)
          u[v].Ca === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var ki = function (a, b) {
      var c = Hh(!0);
      Yh(function () {
        for (var d = di(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Wh[f]) {
            var g = ii(f, d),
              k = c[g];
            if (k) {
              var l = Math.min(ji(k), B()),
                n;
              b: {
                var p = l;
                if (Kf(F))
                  for (
                    var q = Nf(g, H.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (ji(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = ch(b, l, !0);
                t.Pa = "ad_storage";
                Wf(g, k, t);
              }
            }
          }
        }
        gi(ei(c.gclid, c.gclsrc), !1, b);
      });
    },
    ii = function (a, b) {
      var c = Wh[a];
      if (void 0 !== c) return b + c;
    },
    ji = function (a) {
      return 0 !== li(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function ai(a) {
    var b = li(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Ca: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function li(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Vh.test(a[2])
      ? []
      : a;
  }
  var mi = function (a, b, c, d, e) {
      if (ra(b) && Kf(F)) {
        var f = di(e),
          g = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = ii(a[l], f);
              if (n) {
                var p = Nf(n, H.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Yh(function () {
          Nh(g, b, c, d);
        });
      }
    },
    ci = function (a) {
      return a.filter(function (b) {
        return Vh.test(b.Ca);
      });
    },
    ni = function (a, b) {
      if (Kf(F)) {
        for (var c = di(b.prefix), d = {}, e = 0; e < a.length; e++)
          Wh[a[e]] && (d[a[e]] = Wh[a[e]]);
        Yh(function () {
          wa(d, function (f, g) {
            var k = Nf(c + g, H.cookie, void 0, "ad_storage");
            k.sort(function (t, u) {
              return ji(u) - ji(t);
            });
            if (k.length) {
              var l = k[0],
                n = ji(l),
                p = 0 !== li(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== li(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              gi(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function oi(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var pi = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (pf()) {
      var c = fi();
      if (oi(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Oh(function () {
          return d;
        }, 3);
        Oh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function qi(a, b) {
    var c = di(b),
      d = ii(a, c);
    if (!d) return 0;
    for (var e = Zh(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ri(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var xi = /[A-Z]+/,
    yi = /\s/,
    zi = function (a) {
      if (m(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (xi.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (yi.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], K: d };
          }
        }
      }
    },
    Bi = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = zi(a[c]);
        d && (b[d.id] = d);
      }
      Ai(b);
      var e = [];
      wa(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Ai(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Di = function (a, b, c, d) {
      return (2 === Ci() || d || "http:" != F.location.protocol ? a : b) + c;
    },
    Ci = function () {
      var a = ib(),
        b;
      if (1 === a)
        a: {
          var c = Jd;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = H.getElementsByTagName("script"),
              k = 0;
            k < g.length && 100 > k;
            k++
          ) {
            var l = g[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Fi = function (a, b, c) {
      if (F[a.functionName]) return b.Ze && I(b.Ze), F[a.functionName];
      var d = Ei();
      F[a.functionName] = d;
      if (a.Bd)
        for (var e = 0; e < a.Bd.length; e++) F[a.Bd[e]] = F[a.Bd[e]] || Ei();
      a.Ld && void 0 === F[a.Ld] && (F[a.Ld] = c);
      hb(Di("https://", "http://", a.jf), b.Ze, b.Pi);
      return d;
    },
    Ei = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Gi = {
      functionName: "_googWcmImpl",
      Ld: "_googWcmAk",
      jf: "www.gstatic.com/wcm/loader.js",
    },
    Hi = {
      functionName: "_gaPhoneImpl",
      Ld: "ga_wpid",
      jf: "www.gstatic.com/gaphone/loader.js",
    },
    Ii = { bh: "", Vh: "5" },
    Ji = {
      functionName: "_googCallTrackingImpl",
      Bd: [Hi.functionName, Gi.functionName],
      jf:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Ii.bh || Ii.Vh) +
        ".js",
    },
    Ki = {},
    Li = function (a, b, c, d) {
      Q(22);
      if (c) {
        d = d || {};
        var e = Fi(Gi, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Oa && (f.autoreplace = c);
        e(2, d.Oa, f, c, 0, Da(), d.options);
      }
    },
    Mi = function (a, b, c, d) {
      Q(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Da(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Ki[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
              ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (Ki[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (Ki[g.id] = !0)));
        }
        (e.gaData || e.adData) && Fi(Ji, d)(d.Oa, e, d.options);
      }
    },
    Ni = function () {
      var a = !1;
      return a;
    },
    Oi = function (a, b) {
      if (a)
        if (fg()) {
        } else {
          if (m(a)) {
            var c = zi(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(T.g.Fh);
          if (f && ra(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var k = zi(f[g]);
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(T.g.If),
              n;
            if (l) {
              ra(l) ? (n = l) : (n = [l]);
              var p = b.getWithConfig(T.g.Gf),
                q = b.getWithConfig(T.g.Hf),
                r = b.getWithConfig(T.g.Jf),
                t = b.getWithConfig(T.g.Eh),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var y = 0; y < n.length; y++)
                if (y < v)
                  if (d) Mi(d, n[y], t, { Oa: u, options: r });
                  else if ("AW" === a.prefix && a.K[1])
                    Ni()
                      ? Mi([a], n[y], t || "US", { Oa: u, options: r })
                      : Li(a.K[0], a.K[1], n[y], { Oa: u, options: r });
                  else if ("UA" === a.prefix)
                    if (Ni()) Mi([a], n[y], t || "US", { Oa: u });
                    else {
                      var x = a.containerId,
                        w = n[y],
                        A = { Oa: u };
                      Q(23);
                      if (w) {
                        A = A || {};
                        var z = Fi(Hi, A, x),
                          C = {};
                        void 0 !== A.Oa ? (C.receiver = A.Oa) : (C.replace = w);
                        C.ga_wpid = x;
                        C.destination = w;
                        z(2, Da(), C);
                      }
                    }
            }
          }
        }
    };
  var Pi = function (a, b, c) {
      this.D = a;
      this.eventName = b;
      this.h = c;
      this.s = {};
      this.metadata = M(c.eventMetadata || {});
      this.B = !1;
    },
    Qi = function (a, b, c) {
      var d = a.h.getWithConfig(b);
      void 0 !== d ? (a.s[b] = d) : void 0 !== c && (a.s[b] = c);
    },
    Ri = function (a, b, c) {
      var d = de(a.D);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Si(a) {
    return {
      getDestinationId: function () {
        return a.D;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.s[b];
      },
      setHitData: function (b, c) {
        return void (a.s[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.s[b] && (a.s[b] = c);
      },
      copyToHitData: function (b, c) {
        Qi(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.B = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Xi = [];
  Xi[10] = !0;
  Xi[12] = !0;
  Xi[20] = !0;
  Xi[21] = !0;
  Xi[22] = !0;
  function nj(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var oj = !1;
  function pj() {
    if (nj("join-ad-interest-group") && pa(ab.joinAdInterestGroup)) return !0;
    oj ||
      (Hg(
        "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (oj = !0));
    return nj("join-ad-interest-group") && pa(ab.joinAdInterestGroup);
  }
  function qj(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > B() - d) {
        Sc("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Sc("TAGGING", 10);
          return;
        }
      } catch (e) {}
    jb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: B() },
      c
    );
  }
  var rj = function () {
    if (pa(F.__uspapi)) {
      var a = "";
      try {
        F.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  Ua();
  Eg() || Ta("iPod");
  Ta("iPad");
  !Ta("Android") || Va() || Ua() || Ta("Opera") || Ta("Silk");
  Va();
  !Ta("Safari") ||
    Va() ||
    Ta("Coast") ||
    Ta("Opera") ||
    Ta("Edge") ||
    Ta("Edg/") ||
    Ta("OPR") ||
    Ua() ||
    Ta("Silk") ||
    Ta("Android") ||
    Fg();
  var tj = !1;
  var uj = function () {
      this.h = {};
    },
    vj = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    wj = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    yj = function (a, b, c, d, e) {};
  var Aj = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Bj = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Cj = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Dj =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Ej = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Gj = function (a) {
      var b = Xd("gtm.allowlist") || Xd("gtm.whitelist");
      b && Q(9);
      Ej() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Ia(Ba(b), Bj),
        d = Xd("gtm.blocklist") || Xd("gtm.blacklist");
      d || ((d = Xd("tagTypeBlacklist")) && Q(3));
      d ? Q(8) : (d = []);
      Fj() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && Q(2);
      var e = d && Ia(Ba(d), Cj),
        f = {};
      return function (g) {
        var k = g && g[yb.qb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Qd[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > c.indexOf(l[q])) {
                      Q(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(k);
          if (t) r = t;
          else {
            var u = va(e, l || []);
            u && Q(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= l.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = va(e, Dj));
        return (f[k] = v);
      };
    },
    Fj = function () {
      return Aj.test(F.location && F.location.hostname);
    };
  var bk = function (a) {
      var b = !1;
      return b;
    },
    ek = function (a, b) {
      var c;
      return c;
    },
    hk = function (a) {},
    lk = function (a) {},
    mk = function () {
      return (
        "&tc=" +
        ac.filter(function (a) {
          return a;
        }).length
      );
    },
    pk = function () {
      2022 <= nk().length && ok();
    },
    qk = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    sk = function () {
      rk || (rk = F.setTimeout(ok, 500));
    },
    ok = function (a) {
      rk && (F.clearTimeout(rk), (rk = void 0));
      if (void 0 !== Zj && (!tk[Zj] || uk || vk || bk(a)))
        if (void 0 === dk[Zj] && (wk[Zj] || xk.Ei() || 0 >= yk--))
          Q(1), (wk[Zj] = !0);
        else {
          void 0 === dk[Zj] && xk.bj();
          var b = nk(!0, a);
          a ? rb(b) : kb(b);
          if (zk || (Ak && 0 < Bk.length)) {
            var c = b.replace("/a?", "/td?");
            kb(c);
          }
          tk[Zj] = !0;
          Ak = zk = Ck = Dk = Ek = vk = uk = "";
          Bk = [];
        }
    },
    nk = function (a, b) {
      var c = Zj;
      if (void 0 === c) return "";
      var d = Tc("GTM"),
        e = Tc("TAGGING");
      return [
        Fk,
        tk[c] ? "" : "&es=1",
        Gk[c],
        hk(c),
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        mk(),
        uk,
        vk,
        Ek,
        Dk,
        lk(a),
        Ck,
        zk,
        ek(a, b),
        Ak ? "&dl=" + encodeURIComponent(Ak) : "",
        0 < Bk.length ? "&tdp=" + Bk.join(".") : "",
        "&z=0",
      ].join("");
    },
    Ik = function () {
      Fk = Hk();
    },
    Hk = function () {
      return [Jk, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Dd.xd].join("");
    },
    kk = ["L", "S", "Y"],
    gk = ["S", "E"],
    Kk = { sampleRate: "0.005000", Yg: "", Xg: Number("5") },
    Lk =
      0 <= H.location.search.indexOf("?gtm_latency=") ||
      0 <= H.location.search.indexOf("&gtm_latency="),
    Mk;
  if (!(Mk = Lk)) {
    var Nk = Math.random(),
      Ok = Kk.sampleRate;
    Mk = Nk < Ok;
  }
  var Pk = Mk,
    Jk = "https://www.googletagmanager.com/a?id=" + gg.I + "&cv=1",
    Qk = {
      label: gg.I + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Fk = Hk(),
    tk = {},
    uk = "",
    vk = "",
    Ck = "",
    Dk = "",
    zk = "",
    Bk = [],
    Ak = "",
    jk = {},
    ik = !1,
    fk = {},
    Rk = {},
    Ek = "",
    Zj = void 0,
    Gk = {},
    wk = {},
    rk = void 0,
    Sk = 5;
  0 < Kk.Xg && (Sk = Kk.Xg);
  var xk = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Ei: function () {
          return c < a ? !1 : B() - d[c % a] < b;
        },
        bj: function () {
          var f = c++ % a;
          d[f] = B();
        },
      };
    })(Sk, 1e3),
    yk = 1e3,
    Uk = function (a, b) {
      if (Pk && void 0 !== a && !wk[a] && Zj !== a) {
        ok();
        Zj = a;
        Ck = uk = "";
        Gk[a] = "&e=" + qk(b) + "&eid=" + a;
        sk();
      }
    },
    Vk = function (a, b, c, d) {
      if (Pk && b) {
        var e,
          f = String(b[yb.qb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!wk[a]) {
          a !== Zj && (ok(), (Zj = a));
          uk = uk ? uk + "." + g : "&tr=" + g;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (cc[k] ? "1" : "2") + e;
          Ck = Ck ? Ck + "." + l : "&ti=" + l;
          sk();
          pk();
        }
      }
    };
  var bl = function (a, b, c) {
      if (Pk && void 0 !== a && !wk[a]) {
        a !== Zj && (ok(), (Zj = a));
        var d = c + b;
        vk = vk ? vk + "." + d : "&epr=" + d;
        sk();
        pk();
      }
    },
    cl = function (a, b, c) {},
    ck = ["S", "P", "C", "Z"],
    dl = {},
    el = ((dl[1] = 5), (dl[2] = 5), (dl[3] = 5), dl),
    ak = {},
    dk = {},
    fl = function (a, b, c) {},
    gl = function () {
      if (Pk) {
        F.setInterval(Ik, 864e5);
      }
    };
  var hl = { initialized: 11, complete: 12, interactive: 13 },
    il = {},
    jl = Object.freeze(((il[T.g.Ba] = !0), il)),
    kl =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    ml = function (a, b, c) {
      if ("config" !== a || 1 < zi(b).K.length) return;
      var d,
        e = cb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = M(c.globalConfig);
      M(c.eventModel, f);
      var g = [],
        k;
      for (k in d) {
        var l = ll(d[k], f);
        l.length && (kl && console.log(l), g.push(k));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          zk = zk ? zk + "!" + n : "&tdc=" + n;
        }
        Sc("TAGGING", hl[H.readyState] || 14);
      }
      d[b] = f;
    };
  function nl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function ll(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? jl[q] : t;
      },
      f;
    for (f in nl(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        l = e(f, b),
        n = "object" === ub(k) || "array" === ub(k),
        p = "object" === ub(l) || "array" === ub(l);
      if (n && p) ll(k, l, c, g);
      else if (n || p || k !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var ol = !1,
    pl = 0,
    ql = [];
  function rl(a) {
    if (!ol) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ol = !0;
        for (var e = 0; e < ql.length; e++) I(ql[e]);
      }
      ql.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function sl() {
    if (!ol && 140 > pl) {
      pl++;
      try {
        H.documentElement.doScroll("left"), rl();
      } catch (a) {
        F.setTimeout(sl, 50);
      }
    }
  }
  var tl = function (a) {
    ol ? a() : ql.push(a);
  };
  var ul = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: gg.I,
    };
  };
  var wl = function (a, b) {
      this.h = !1;
      this.D = [];
      this.J = { tags: [] };
      this.R = !1;
      this.s = this.B = 0;
      vl(this, a, b);
    },
    xl = function (a, b, c, d) {
      if (Hd.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      wb(d) && (e = M(d, e));
      e.id = c;
      e.status = "timeout";
      return a.J.tags.push(e) - 1;
    },
    yl = function (a, b, c, d) {
      var e = a.J.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    zl = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    vl = function (a, b, c) {
      void 0 !== b && Al(a, b);
      c &&
        F.setTimeout(function () {
          return zl(a);
        }, Number(c));
    },
    Al = function (a, b) {
      var c = Fa(function () {
        return I(function () {
          b(gg.I, a.J);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    Bl = function (a) {
      a.B++;
      return Fa(function () {
        a.s++;
        a.R && a.s >= a.B && zl(a);
      });
    },
    Cl = function (a) {
      a.R = !0;
      a.s >= a.B && zl(a);
    };
  var Dl = function () {
      function a(d) {
        return !qa(d) || 0 > d ? 0 : d;
      }
      if (!U._li && F.performance && F.performance.timing) {
        var b = F.performance.timing.navigationStart,
          c = qa(Yd.get("gtm.start")) ? Yd.get("gtm.start") : 0;
        U._li = { cst: a(c - b), cbt: a(Od - b) };
      }
    },
    El = function (a) {
      F.performance && F.performance.mark(gg.I + "_" + a + "_start");
    },
    Fl = function (a) {
      if (F.performance) {
        var b = gg.I + "_" + a + "_start",
          c = gg.I + "_" + a + "_duration";
        F.performance.measure(c, b);
        var d = F.performance.getEntriesByName(c)[0];
        F.performance.clearMarks(b);
        F.performance.clearMeasures(c);
        var e = U._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (U._p = e));
        return d.duration;
      }
    },
    Gl = function () {
      if (F.performance && F.performance.now) {
        var a = U._p || {};
        a.PAGEVIEW = F.performance.now();
        U._p = a;
      }
    };
  var Hl = {},
    Il = function () {
      return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject];
    },
    Jl = !1;
  var Kl = function (a) {
      F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || "ga");
      var b = F.GoogleAnalyticsObject;
      if (F[b]) F.hasOwnProperty(b) || Q(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Da());
        F[b] = c;
      }
      Dl();
      return F[b];
    },
    Ll = function (a) {
      if (pf()) {
        var b = Il();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Ml() {
    return F.GoogleAnalyticsObject || "ga";
  }
  var Nl = function (a) {},
    Ol = function (a, b) {
      return function () {
        var c = Il(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Tl(a, b, c, d) {
    var e = ac[a],
      f = Ul(a, b, c, d);
    if (!f) return null;
    var g = ic(e[yb.Yf], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Tl(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.vg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Ul(a, b, c, d) {
    function e() {
      if (f[yb.Qh]) k();
      else {
        var y = jc(f, c, []);
        var x = y[yb.dh];
        if (null != x)
          for (var w = 0; w < x.length; w++)
            if (!Cf(x[w])) {
              k();
              return;
            }
        var A = xl(c.sb, String(f[yb.qb]), Number(f[yb.ag]), y[yb.Rh]),
          z = !1;
        y.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0;
            var G = B() - E;
            Vk(c.id, ac[a], "5", G);
            yl(c.sb, A, "success", G);
            g();
          }
        };
        y.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0;
            var G = B() - E;
            Vk(c.id, ac[a], "6", G);
            yl(c.sb, A, "failure", G);
            k();
          }
        };
        y.vtp_gtmTagId = f.tag_id;
        y.vtp_gtmEventId = c.id;
        c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
        Vk(c.id, f, "1");
        var C = function () {
          var G = B() - E;
          Vk(c.id, f, "7", G);
          yl(c.sb, A, "exception", G);
          z || ((z = !0), k());
        };
        var E = B();
        try {
          gc(y, { event: c, index: a, type: 1 });
        } catch (G) {
          C(G);
        }
      }
    }
    var f = ac[a],
      g = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Ue(f)) return null;
    var n = ic(f[yb.bg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Tl(p.index, { onSuccess: g, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.vg ? l : q;
    }
    if (f[yb.Sf] || f[yb.Th]) {
      var r = f[yb.Sf] ? bc : c.oj,
        t = g,
        u = k;
      if (!r[a]) {
        e = Fa(e);
        var v = Vl(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Vl(a, b, c) {
    var d = [],
      e = [];
    b[a] = Wl(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Xl;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Yl;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Wl(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Xl(a) {
    a();
  }
  function Yl(a, b) {
    b();
  }
  function Zl(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return te("" + c + b).href;
    }
  }
  function $l(a, b) {
    return am() ? Zl(a, b) : void 0;
  }
  function am() {
    var a = !1;
    return a;
  }
  function bm() {
    return !!Dd.yd && "SGTM_TOKEN" !== Dd.yd.split("@@").join("");
  }
  var dm = function (a, b, c) {
      if (!cm() && !mg(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Dd.aa,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = bm();
        g && (e += "&sign=" + Dd.yd);
        var k = $l(b, d + e);
        if (!k) {
          var l = Dd.Xb + d;
          g &&
            bb &&
            f &&
            (l = bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          k = Di("https://", "http://", l + e);
        }
        lg().container[a] = !0;
        hb(k);
      }
    },
    em = function (a, b) {
      var c;
      if ((c = !cm())) c = !lg().destination.hasOwnProperty(a);
      if (c) {
        var d =
          "/gtag/destination?id=" +
          encodeURIComponent(a) +
          "&l=" +
          Dd.aa +
          "&cx=c";
        bm() && (d += "&sign=" + Dd.yd);
        var e = $l(b, d);
        e || (e = Di("https://", "http://", Dd.Xb + d));
        lg().destination[a] = !0;
        hb(e);
      }
    };
  function cm() {
    if (fg()) {
      return !0;
    }
    return !1;
  }
  var gm = function (a, b) {
      return 1 === arguments.length ? fm("config", a) : fm("config", a, b);
    },
    hm = function (a, b, c) {
      c = c || {};
      c[T.g.ob] = a;
      return fm("event", b, c);
    };
  function fm(a) {
    return arguments;
  }
  var im = function () {
    this.h = [];
    this.s = [];
  };
  im.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  im.prototype.listen = function (a) {
    this.s.push(a);
  };
  im.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  im.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var km = function (a, b, c) {
      jm().enqueue(a, b, c);
    },
    mm = function () {
      var a = lm;
      jm().listen(a);
    };
  function jm() {
    var a = U.mb;
    a || ((a = new im()), (U.mb = a));
    return a;
  }
  var um = function (a) {
      var b = U.zones;
      return b
        ? b.getIsAllowedFn(ig(), a)
        : function () {
            return !0;
          };
    },
    vm = function (a) {
      var b = U.zones;
      return b ? b.isActive(ig(), a) : !0;
    };
  var ym = function (a, b) {
    for (var c = [], d = 0; d < ac.length; d++)
      if (a[d]) {
        var e = ac[d];
        var f = Bl(b.sb);
        try {
          var g = Tl(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = cc[p];
            l.call(k, {
              Sg: n,
              Kg: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else wm(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(xm);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function xm(a, b) {
    var c,
      d = b.Kg,
      e = a.Kg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Sg,
        k = b.Sg;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function wm(a, b) {
    if (!Pk) return;
    var c = function (d) {
      var e = b.Ue(ac[d]) ? "3" : "4",
        f = ic(ac[d][yb.Yf], b, []);
      f && f.length && c(f[0].index);
      Vk(b.id, ac[d], e);
      var g = ic(ac[d][yb.bg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Bm = !1,
    zm;
  var Gm = function (a) {
    var b = B(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (Bm) return !1;
      Bm = !0;
    }
    var k,
      l = !1;
    if (vm(c)) k = um(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      l = !0;
      k = um(Number.MAX_SAFE_INTEGER);
    }
    Uk(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Ue: Gj(k),
        oj: [],
        Fg: function () {
          Q(6);
        },
        ng: Cm(),
        og: Dm(c),
        sb: new wl(q, p),
      },
      t = nc(r);
    l && (t = Em(t));
    var u = ym(t, r),
      v = !1;
    Cl(r.sb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Nl(gg.I);
    return Fm(t, u) || v;
  };
  function Dm(a) {
    return function (b) {
      Pk && (xb(b) || cl(a, "input", b));
    };
  }
  function Cm() {
    var a = {};
    a.event = ae("event", 1);
    a.ecommerce = ae("ecommerce", 1);
    a.gtm = ae("gtm");
    a.eventModel = ae("eventModel");
    return a;
  }
  function Em(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (Fd[String(ac[c][yb.qb])] && (b[c] = !0),
        void 0 !== ac[c][yb.Uh] && (b[c] = !0));
    return b;
  }
  function Fm(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ac[c] && !Hd[String(ac[c][yb.qb])]) return !0;
    return !1;
  }
  var Hm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.eventMetadata = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.isGtmEvent = !1;
    },
    Im = function (a, b) {
      a.eventModel = b;
      return a;
    },
    Jm = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Km = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    Lm = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Mm = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    Nm = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Om = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Pm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Qm = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    Rm = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Sm = function (a, b) {
      a.onFailure = b;
      return a;
    };
  Hm.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Tm(this, this.globalConfig[a], this.dataLayerConfig[a]) && (Q(71), Q(79));
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  Hm.prototype.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), k = 0; k < g.length; ++k) b[g[k]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        Q(71);
        Q(80);
        break;
      }
    }
    return Object.keys(b);
  };
  Hm.prototype.getMergedValues = function (a, b) {
    function c(k) {
      wb(k) &&
        wa(k, function (l, n) {
          e = !0;
          d[l] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    if (e !== f || Tm(this, d, g)) Q(71), Q(81);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  Hm.prototype.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var k = 0; k < a.length; k++)
          void 0 !== g[a[k]] && ((b[a[k]] = g[a[k]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Tm(this, b, e) && (Q(71), Q(82));
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  var Tm = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = ub(b);
      if (d !== ub(c) || !((wb(b) && wb(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Tm(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || Tm(a, b[g], c[g])) return !0;
      }
    } catch (k) {
      Q(72);
    }
    return !1;
  };
  var Vn = function () {
      var a = !0;
      (bh(7) && bh(9) && bh(10)) || (a = !1);
      return a;
    },
    Wn = function () {
      var a = !0;
      (bh(3) && bh(4)) || (a = !1);
      return a;
    };
  var $n = function (a, b) {
      if (b.isGtmEvent) return;
      var c = b.getWithConfig(T.g.Na),
        d = b.getWithConfig(T.g.Wa),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        Xn.hasOwnProperty(c)
          ? (f = Xn[c])
          : Yn.hasOwnProperty(c) && (f = Yn[c]);
        1 === f && (f = Zn(c));
        m(f)
          ? Il()(function () {
              var g = Il().getByName(a).get(f);
              d(g);
            })
          : d(void 0);
      } else d(e);
    },
    ao = function (a, b) {
      var c = a[T.g.jc],
        d = b + ".",
        e = a[T.g.N] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[T.g.Kb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = Il();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    fo = function (a, b, c) {
      if (pf() && (!c.isGtmEvent || !bo[a])) {
        var d = !Cf(T.g.M),
          e = function (f) {
            var g,
              k,
              l = Il(),
              n = co(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || eo(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + Rd()),
                (k = n.createOnlyFields),
                n.gtmTrackerName && (k.name = g));
              l(function () {
                var t = l.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || l.remove(b);
              });
              l("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d &&
                Cf(T.g.M) &&
                ((d = !1),
                l(function () {
                  var t = Il().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = Ad[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = Ad[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                l(function () {
                  l.remove(g);
                });
            }
          };
        Ef(function () {
          return e(T.g.M);
        }, T.g.M);
        Ef(function () {
          return e(T.g.H);
        }, T.g.H);
        c.isGtmEvent && (bo[a] = !0);
      }
    },
    go = function (a, b) {
      bm() && b && (a[T.g.lb] = b);
    },
    po = function (a, b, c) {
      function d() {
        var K = c.getWithConfig(T.g.cc);
        k(function () {
          if (!c.isGtmEvent && wb(K)) {
            var O = u.fieldsToSend,
              S = l().getByName(n),
              N;
            for (N in K)
              if (
                K.hasOwnProperty(N) &&
                /^(dimension|metric)\d+$/.test(N) &&
                void 0 != K[N]
              ) {
                var J = S.get(Zn(K[N]));
                ho(O, N, J);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: K });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        k = c.isGtmEvent ? Kl(c.getWithConfig("gaFunctionName")) : Kl();
      if (pa(k)) {
        var l = Il,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (K) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            k.apply(window, O);
          },
          q = function (K) {
            var O = function (P, ia) {
                for (var ja = 0; ia && ja < ia.length; ja++) p(P, ia[ja]);
              },
              S = c.isGtmEvent,
              N = S ? io(u) : jo(b, c);
            if (N) {
              var J = {};
              go(J, K);
              p("require", "ec", "ec.js", J);
              S && N.Le && p("set", "&cu", N.Le);
              var R = N.action;
              if (S || "impressions" === R)
                if ((O("ec:addImpression", N.Cg), !S)) return;
              if ("promo_click" === R || "promo_view" === R || (S && N.Gc)) {
                var V = N.Gc;
                O("ec:addPromo", V);
                if (V && 0 < V.length && "promo_click" === R) {
                  S ? p("ec:setAction", R, N.eb) : p("ec:setAction", R);
                  return;
                }
                if (!S) return;
              }
              "promo_view" !== R &&
                "impressions" !== R &&
                (O("ec:addProduct", N.xb), p("ec:setAction", R, N.eb));
            }
          },
          r = function (K) {
            if (K) {
              var O = {};
              if (wb(K))
                for (var S in ko) ko.hasOwnProperty(S) && lo(ko[S], S, K[S], O);
              go(O, x);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (fg()) {
            } else {
              var K = c.getWithConfig(T.g.Dh);
              K &&
                (p("require", K, { dataLayer: Dd.aa }), p("require", "render"));
            }
          },
          u = co(n, b, c),
          v = function (K, O, S) {
            S && (O = "" + O);
            u.fieldsToSend[K] = O;
          };
        !c.isGtmEvent &&
          eo(n, u.createOnlyFields) &&
          (k(function () {
            l() && l().remove(n);
          }),
          (mo[n] = !1));
        k("create", f, u.createOnlyFields);
        if (u.createOnlyFields[T.g.lb] && !c.isGtmEvent) {
          var y = $l(u.createOnlyFields[T.g.lb], "/analytics.js");
          y && (g = y);
        }
        var x = c.isGtmEvent
          ? u.fieldsToSet[T.g.lb]
          : u.createOnlyFields[T.g.lb];
        if (x) {
          var w = c.isGtmEvent
            ? u.fieldsToSet[T.g.ed]
            : u.createOnlyFields[T.g.ed];
          w && !mo[n] && ((mo[n] = !0), k(Ol(n, w)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[T.g.oa];
        A && A[T.g.N] && ao(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var z = {};
            go(z, x);
            p("require", "linkid", "linkid.js", z);
          }
          pf() && fo(f, n, c);
        }
        if (b === T.g.Yb)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && Ll(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === T.g.Ea
            ? (t(),
              Oi(f, c),
              c.getWithConfig(T.g.cb) && (pi(["aw", "dc"]), Ll(n + ".")),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              fo(f, n, c))
            : b === T.g.La
            ? $n(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", ya(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || no[b]) && q(x),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", ya(u.value))),
              p("send", u.fieldsToSend));
        var E = !1;
        var G = oo;
        E && (G = c.getContainerTypeLoaded("UA"));
        if (!G && !c.isGtmEvent) {
          oo = !0;
          E && c.setContainerTypeLoaded("UA", !0);
          Dl();
          var D = function () {
              E && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            L = function () {
              l().loaded || D();
            };
          fg() ? I(L) : hb(g, L, D);
        }
      } else I(c.onFailure);
    },
    qo = function (a, b, c, d) {
      Ff(
        function () {
          po(a, b, d);
        },
        [T.g.M, T.g.H]
      );
    },
    so = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var r = 0; r < q.length; r++) {
            var t = q[r];
            if (f[t]) {
              l[p] = f[t];
              break;
            }
          }
        }
        function k() {
          if (f.category) l.category = f.category;
          else {
            for (var p = "", q = 0; q < ro.length; q++)
              void 0 !== f[ro[q]] && (p && (p += "/"), (p += f[ro[q]]));
            p && (l.category = p);
          }
        }
        var l = M(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            k();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return l;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && wb(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    to = function (a) {
      return Cf(a);
    },
    uo = !1;
  var oo,
    mo = {},
    bo = {},
    vo = {},
    Xn = Object.freeze(
      ((vo.client_storage = "storage"),
      (vo.sample_rate = 1),
      (vo.site_speed_sample_rate = 1),
      (vo.store_gac = 1),
      (vo.use_amp_client_id = 1),
      (vo[T.g.ka] = 1),
      (vo[T.g.la] = "storeGac"),
      (vo[T.g.ma] = 1),
      (vo[T.g.Aa] = 1),
      (vo[T.g.Ma] = 1),
      (vo[T.g.Gb] = 1),
      (vo[T.g.Ua] = 1),
      (vo[T.g.Hb] = 1),
      vo)
    ),
    wo = {},
    xo = Object.freeze(
      ((wo._cs = 1),
      (wo._useUp = 1),
      (wo.allowAnchor = 1),
      (wo.allowLinker = 1),
      (wo.alwaysSendReferrer = 1),
      (wo.clientId = 1),
      (wo.cookieDomain = 1),
      (wo.cookieExpires = 1),
      (wo.cookieFlags = 1),
      (wo.cookieName = 1),
      (wo.cookiePath = 1),
      (wo.cookieUpdate = 1),
      (wo.legacyCookieDomain = 1),
      (wo.legacyHistoryImport = 1),
      (wo.name = 1),
      (wo.sampleRate = 1),
      (wo.siteSpeedSampleRate = 1),
      (wo.storage = 1),
      (wo.storeGac = 1),
      (wo.useAmpClientId = 1),
      (wo._cd2l = 1),
      wo)
    ),
    yo = Object.freeze({ anonymize_ip: 1 }),
    zo = {},
    Yn = Object.freeze(
      ((zo.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (zo.app_id = 1),
      (zo.app_installer_id = 1),
      (zo.app_name = 1),
      (zo.app_version = 1),
      (zo.description = "exDescription"),
      (zo.fatal = "exFatal"),
      (zo.language = 1),
      (zo.page_hostname = "hostname"),
      (zo.transport_type = "transport"),
      (zo[T.g.na] = "currencyCode"),
      (zo[T.g.Ef] = 1),
      (zo[T.g.Ya] = "location"),
      (zo[T.g.ue] = "page"),
      (zo[T.g.Za] = "referrer"),
      (zo[T.g.jd] = "title"),
      (zo[T.g.Mf] = 1),
      (zo[T.g.Ha] = 1),
      zo)
    ),
    Ao = {},
    Bo = Object.freeze(
      ((Ao.content_id = 1),
      (Ao.event_action = 1),
      (Ao.event_category = 1),
      (Ao.event_label = 1),
      (Ao.link_attribution = 1),
      (Ao.name = 1),
      (Ao[T.g.oa] = 1),
      (Ao[T.g.Df] = 1),
      (Ao[T.g.Ba] = 1),
      (Ao[T.g.ja] = 1),
      Ao)
    ),
    Co = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    ro = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    Do = {},
    ko = Object.freeze(
      ((Do.levels = 1), (Do[T.g.Aa] = "duration"), (Do[T.g.Gb] = 1), Do)
    ),
    Eo = {},
    Fo = Object.freeze(
      ((Eo.anonymize_ip = 1),
      (Eo.fatal = 1),
      (Eo.send_page_view = 1),
      (Eo.store_gac = 1),
      (Eo.use_amp_client_id = 1),
      (Eo[T.g.la] = 1),
      (Eo[T.g.Ef] = 1),
      Eo)
    ),
    lo = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (Fo[b] && (c = Aa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Zn(b)] = c;
        else if (m(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Zn = function (a) {
      return a && m(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    Go = {},
    no = Object.freeze(
      ((Go.checkout_progress = 1),
      (Go.select_content = 1),
      (Go.set_checkout_option = 1),
      (Go[T.g.Cb] = 1),
      (Go[T.g.Db] = 1),
      (Go[T.g.ib] = 1),
      (Go[T.g.jb] = 1),
      (Go[T.g.Eb] = 1),
      (Go[T.g.xa] = 1),
      (Go[T.g.Fb] = 1),
      (Go[T.g.ya] = 1),
      Go)
    ),
    Ho = {},
    Io = Object.freeze(
      ((Ho.checkout_progress = 1),
      (Ho.set_checkout_option = 1),
      (Ho[T.g.vf] = 1),
      (Ho[T.g.Cb] = 1),
      (Ho[T.g.Db] = 1),
      (Ho[T.g.ib] = 1),
      (Ho[T.g.xa] = 1),
      (Ho[T.g.Fb] = 1),
      (Ho[T.g.wf] = 1),
      Ho)
    ),
    Jo = {},
    Ko = Object.freeze(
      ((Jo.generate_lead = 1),
      (Jo.login = 1),
      (Jo.search = 1),
      (Jo.select_content = 1),
      (Jo.share = 1),
      (Jo.sign_up = 1),
      (Jo.view_search_results = 1),
      (Jo[T.g.jb] = 1),
      (Jo[T.g.Eb] = 1),
      (Jo[T.g.ya] = 1),
      Jo)
    ),
    Lo = function (a) {
      var b = "general";
      Io[a]
        ? (b = "ecommerce")
        : Ko[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Mo = {},
    No = Object.freeze(
      ((Mo.view_search_results = 1),
      (Mo[T.g.jb] = 1),
      (Mo[T.g.Eb] = 1),
      (Mo[T.g.ya] = 1),
      Mo)
    ),
    ho = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    Oo = function (a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    co = function (a, b, c) {
      var d = function (L) {
          return c.getWithConfig(L);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        l = Oo(d(T.g.Ch));
      !c.isGtmEvent && l && ho(f, "exp", l);
      g["&gtm"] = Bg(!0);
      pf() && (k._cs = to);
      var n = d(T.g.cc);
      if (!c.isGtmEvent && wb(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && ho(f, p, q);
          }
      for (var r = c.getTopLevelKeys(), t = 0; t < r.length; ++t) {
        var u = r[t];
        if (c.isGtmEvent) {
          var v = d(u);
          Co.hasOwnProperty(u)
            ? (e[u] = v)
            : xo.hasOwnProperty(u)
            ? (k[u] = v)
            : (g[u] = v);
        } else {
          var y = void 0;
          y = u !== T.g.X ? d(u) : c.getMergedValues(u);
          if (Bo.hasOwnProperty(u)) lo(Bo[u], u, y, e);
          else if (yo.hasOwnProperty(u)) lo(yo[u], u, y, g);
          else if (Yn.hasOwnProperty(u)) lo(Yn[u], u, y, f);
          else if (Xn.hasOwnProperty(u)) lo(Xn[u], u, y, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(u))
            lo(1, u, y, f);
          else if (u === T.g.X) {
            if (!uo) {
              var x = Ma(y);
              x && (f["&did"] = x);
            }
            var w = void 0,
              A = void 0;
            b === T.g.Ea
              ? (w = Ma(c.getMergedValues(u), "."))
              : ((w = Ma(c.getMergedValues(u, 1), ".")),
                (A = Ma(c.getMergedValues(u, 2), ".")));
            w && (f["&gdid"] = w);
            A && (f["&edid"] = A);
          } else
            u === T.g.Ga && 0 > r.indexOf(T.g.Gb) && (k.cookieName = y + "_ga");
        }
      }
      (!1 !== d(T.g.sh) && !1 !== d(T.g.ac) && Vn()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(T.g.W) && Wn()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(T.g.cb) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var z = g.hitCallback;
        g.hitCallback = function () {
          pa(z) && z();
          c.onSuccess();
        };
      } else {
        ho(k, "cookieDomain", "auto");
        ho(g, "forceSSL", !0);
        ho(e, "eventCategory", Lo(b));
        No[b] && ho(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? ho(e, "eventLabel", d(T.g.Df))
          : "search" === b || "view_search_results" === b
          ? ho(e, "eventLabel", d(T.g.Jh))
          : "select_content" === b && ho(e, "eventLabel", d(T.g.wh));
        var C = e[T.g.oa] || {},
          E = C[T.g.Jb];
        E || (0 != E && C[T.g.N])
          ? (k.allowLinker = !0)
          : !1 === E && ho(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      pf() &&
        ((g["&gcs"] = Df()),
        Cf(T.g.M) || (k.storage = "none"),
        Cf(T.g.H) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      var G = d(T.g.V) || d(T.g.lb),
        D = d(T.g.ed);
      G && (c.isGtmEvent || (k[T.g.lb] = G), (k._cd2l = !0));
      D && !c.isGtmEvent && (k[T.g.ed] = D);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    io = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Le = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Cg = "impressions" === b.translateIfKeyEquals ? so(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Gc = "promoView" === b.translateIfKeyEquals ? so(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Gc = "promoClick" === b.translateIfKeyEquals ? so(f, !0) : f;
        c.eb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var k = b[g].products;
          c.xb = "products" === b.translateIfKeyEquals ? so(k, !0) : k;
          c.eb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    jo = function (a, b) {
      function c(t) {
        return {
          id: d(T.g.ab),
          affiliation: d(T.g.zh),
          revenue: d(T.g.ja),
          tax: d(T.g.Af),
          shipping: d(T.g.je),
          coupon: d(T.g.Ah),
          list: d(T.g.ie) || t,
        };
      }
      for (
        var d = function (t) {
            return b.getWithConfig(t);
          },
          e = d(T.g.Z),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][T.g.ie]);
        g++
      );
      var k = d(T.g.cc);
      if (wb(k))
        for (var l = 0; e && l < e.length; ++l) {
          var n = e[l],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != k[p] &&
              ho(n, p, n[k[p]]);
        }
      var q = null,
        r = d(T.g.Bh);
      a === T.g.xa || a === T.g.Fb
        ? (q = { action: a, eb: c(), xb: so(e) })
        : a === T.g.Cb
        ? (q = { action: "add", xb: so(e) })
        : a === T.g.Db
        ? (q = { action: "remove", xb: so(e) })
        : a === T.g.ya
        ? (q = { action: "detail", eb: c(f), xb: so(e) })
        : a === T.g.jb
        ? (q = { action: "impressions", Cg: so(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Gc: so(r) })
        : "select_content" === a && r && 0 < r.length
        ? (q = { action: "promo_click", Gc: so(r) })
        : "select_content" === a
        ? (q = { action: "click", eb: { list: d(T.g.ie) || f }, xb: so(e) })
        : a === T.g.ib || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            xb: so(e),
            eb: { step: a === T.g.ib ? 1 : d(T.g.zf), option: d(T.g.yf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            eb: { step: d(T.g.zf), option: d(T.g.yf) },
          });
      q && (q.Le = d(T.g.na));
      return q;
    },
    Po = {},
    eo = function (a, b) {
      var c = Po[a];
      Po[a] = M(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Qo = null,
    Ro = !1;
  Ro = !0;
  function So(a) {
    return Ro && !a ? (Qo = Qo || new To()) : (U.gcq = U.gcq || new To());
  }
  var Uo = function (a, b, c) {
      So().register(a, b, c);
    },
    Vo = function (a, b, c, d) {
      So().push("event", [b, a], c, d);
    },
    Wo = function (a, b, c) {
      So().push("config", [a], b, c);
    },
    Xo = function (a, b, c, d) {
      So().push("get", [a, b], c, d);
    },
    Yo = function () {
      var a = T.g.V;
      return So().getGlobalConfigValue && So().getGlobalConfigValue(a);
    },
    Zo = {},
    $o = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.B = null;
      this.claimed = this.h = !1;
    },
    ap = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.O = c || "";
      this.h = d;
      this.messageContext = e;
    },
    To = function () {
      this.s = {};
      this.B = {};
      this.h = [];
      this.D = { AW: !1, UA: !1 };
    },
    bp = function (a, b) {
      var c = zi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new $o());
    },
    cp = function (a, b, c, d) {
      if (b) {
        var e = zi(b);
        if (e && 1 === bp(a, b).status) {
          bp(a, b).status = 2;
          var f = {};
          Pk &&
            (f.timeoutId = F.setTimeout(function () {
              Q(38);
              sk();
            }, 3e3));
          a.push("require", [f], e.containerId, {});
          Zo[e.containerId] = B();
          if (fg()) {
          } else 2 === d ? em(e.containerId, c) : dm(e.containerId, c, !0);
        }
      }
    },
    dp = function (a, b, c, d) {
      if (d.O) {
        var e = bp(a, d.O),
          f = e.B;
        if (f) {
          var g = M(c),
            k = M(e.targetConfig[d.O]),
            l = M(e.containerConfig),
            n = M(e.remoteConfig),
            p = M(a.B),
            q = {};
          try {
            q = M(Ud);
          } catch (v) {
            Q(72);
          }
          var r = zi(d.O).prefix,
            t = function (v) {
              bl(d.messageContext.eventId, r, v);
              var y = g[T.g.Ib];
              y && I(y);
            },
            u = Rm(
              Qm(
                Sm(
                  Pm(
                    Om(
                      Mm(
                        Lm(
                          Nm(
                            Km(
                              Jm(
                                Im(
                                  new Hm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              l
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                function (v, y) {
                  a.D[v] = y;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            bl(d.messageContext.eventId, r, "1"), ml(d.type, d.O, u);
            f(d.O, b, d.s, u);
          } catch (v) {
            bl(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  h = To.prototype;
  h.register = function (a, b, c) {
    var d = bp(this, a);
    if (3 !== d.status) {
      d.B = b;
      d.status = 3;
      c && (M(d.remoteConfig, c), (d.remoteConfig = c));
      var e = zi(a),
        f = Zo[e.containerId];
      if (void 0 !== f) {
        var g = U[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        U[e.containerId]._spx && (k = k.toLowerCase());
        var l = Xd("gtm.uniqueEventId"),
          n = k,
          p = B() - g;
        if (Pk && !wk[l]) {
          l !== Zj && (ok(), (Zj = l));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Dk = Dk ? Dk + "," + q : "&cl=" + q;
        }
        delete Zo[e.containerId];
      }
      this.flush();
    }
  };
  h.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (zi(f)) {
          var g = bp(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  h.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!zi(c)) return;
      cp(this, c, b[0][T.g.V] || this.B[T.g.V], "event" === a ? 2 : 1);
      bp(this, c).h && (d.deferrable = !1);
    }
    this.h.push(new ap(a, Math.floor(B() / 1e3), c, b, d));
    d.deferrable || this.flush();
  };
  h.insert = function (a, b, c, d) {
    var e = Math.floor(B() / 1e3);
    0 < this.h.length
      ? this.h.splice(1, 0, new ap(a, e, c, b, d))
      : this.h.push(new ap(a, e, c, b, d));
  };
  h.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.O || bp(this, f.O).h
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = bp(this, f.O);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            Pk && F.clearTimeout(f.h[0].timeoutId);
            break;
          case "set":
            wa(f.h[0], function (r, t) {
              M(Ja(r, t), b.B);
            });
            break;
          case "config":
            g = bp(this, f.O);
            if (g.claimed) break;
            e.Ra = {};
            wa(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  M(Ja(t, u), r.Ra);
                };
              })(e)
            );
            var k = !!e.Ra[T.g.nd];
            delete e.Ra[T.g.nd];
            var l = zi(f.O),
              n = l.containerId === l.id;
            k || (n ? (g.containerConfig = {}) : (g.targetConfig[f.O] = {}));
            (g.h && k) || dp(this, T.g.Ea, e.Ra, f);
            g.h = !0;
            n
              ? M(e.Ra, g.containerConfig)
              : (M(e.Ra, g.targetConfig[f.O]), Q(70));
            d = !0;
            break;
          case "event":
            g = bp(this, f.O);
            if (g.claimed) break;
            e.Oc = {};
            wa(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  M(Ja(t, u), r.Oc);
                };
              })(e)
            );
            dp(this, f.h[1], e.Oc, f);
            break;
          case "get":
            if (((g = bp(this, f.O)), !g.claimed)) {
              var p = {},
                q = ((p[T.g.Na] = f.h[0]), (p[T.g.Wa] = f.h[1]), p);
              dp(this, T.g.La, q, f);
            }
        }
        this.h.shift();
        ep(this, f);
      }
      e = { Ra: e.Ra, Oc: e.Oc };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var ep = function (a, b) {
    if ("require" !== b.type)
      if (b.O)
        for (
          var c = a.getCommandListeners(b.O)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
          }
  };
  To.prototype.getRemoteConfig = function (a) {
    return bp(this, a).remoteConfig;
  };
  To.prototype.getCommandListeners = function (a) {
    return bp(this, a).s;
  };
  To.prototype.getGlobalConfigValue = function (a) {
    return this.B[a];
  };
  var fp = !1;
  fp = !0;
  var gp = !1;
  gp = !0;
  var hp = {},
    ip = {},
    jp = {},
    kp = function (a, b) {
      var c = ip[b] || [];
      c.push(a);
      ip[b] = c;
    },
    mp = function () {
      U.addTargetToGroup = function (e) {
        lp(e, "default");
      };
      U.addDestinationToContainer = function (e, f) {
        kp(e, f);
      };
      var a = U.pendingDefaultTargets;
      delete U.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) lp(a[b], "default");
      var c = U.pendingDestinationIds;
      delete U.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) kp(c[d][0], c[d][1]);
    },
    lp = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = hp[b[c]] || [];
        hp[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    np = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = jp[b[c]] || [];
        jp[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    op = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Vb: d.Vb, Qc: d.Qc }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (gp) {
            if (((d.Vb = zi(f)), d.Vb))
              if (fp) {
                var g = jg();
                sa(
                  g,
                  (function (u) {
                    return function (v) {
                      return u.Vb.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.Vb.containerId === gg.I || fg() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var k = hp[f] || [];
          if (gp)
            if (fp) {
              d.Qc = {};
              k.forEach(
                (function (u) {
                  return function (v) {
                    return (u.Qc[v] = !0);
                  };
                })(d)
              );
              for (var l = ig(), n = 0; n < l.length; n++)
                if (d.Qc[l[n]]) {
                  var p = jg();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = jp[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < k.length; r++) {
                var t = zi(k[r]);
                ((t && t.containerId === gg.I) || fg()) && b.push(t.id);
              }
          else k && k.length && (b = b.concat(k));
        }
      }
      return { Mi: b, Oi: c };
    },
    pp = function (a) {
      wa(hp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    qp = function (a) {
      wa(jp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var rp = !1;
  rp = !0;
  var sp = "HA GF G UA AW DC".split(" "),
    tp = !1,
    Tp = !1,
    Up = !1;
  function Vp(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Rd() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function Wp() {
    if (Ro) return !1;
    tp || U.gtagRegistered || ((tp = U.gtagRegistered = !0), mp());
    return tp;
  }
  var Xp = {
      config: function (a, b) {
        var c = Vp(a, b);
        if (2 > a.length || !m(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !wb(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = zi(a[1]);
        if (!e) return;
        Uk(c.eventId, "gtag.config");
        var f = e.id !== e.containerId,
          g = !1,
          k = -1 !== ig().indexOf(e.containerId);
        k && ((g = Up), (Up = !0));
        if (Xi[12] && Md && !f && g) return;
        if (Ro) {
          var l = d[T.g.V] || Yo();
          if (rp && f) {
            if (
              !sa(jg(), function (y) {
                return y === e.containerId;
              })
            ) {
              em(e.containerId, l);
              return;
            }
          } else if (!k && !fg()) {
            dm(e.containerId, l, !0);
            return;
          }
        }
        var n = Wp() || Ro;
        b.noTargetGroup ||
          (rp && f
            ? (qp(e.id), np(e.id, d[T.g.gd] || "default"))
            : (pp(e.id), lp(e.id, d[T.g.gd] || "default")));
        delete d[T.g.gd];
        Tp || Q(43);
        if (n) {
          var p = [e.id];
          rp && !f && (p = jg());
          for (var q = !1, r = 0; r < p.length; r++) {
            var t = zi(p[r]),
              u = M(b);
            if (t && -1 !== sp.indexOf(t.prefix)) {
              var v = u.eventMetadata || {};
              v.hasOwnProperty("is_external_event") ||
                (v.is_external_event = !u.fromContainerExecution);
              u.eventMetadata = v;
              delete d[T.g.Ib];
              Wo(d, t.id, u);
              q = !0;
            }
          }
          if (q) return;
        }
        $d("gtag.targets." + e.id);
        $d("gtag.targets." + e.id, M(d));
      },
      consent: function (a, b) {
        if (3 === a.length) {
          Q(39);
          var c = Vp(a, b),
            d = a[1];
          "default" === d ? zf(a[2]) : "update" === d && Bf(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && m(c)) {
          var d;
          if (2 < a.length) {
            if ((!wb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = M(e)),
            e[T.g.Ib] && (g.eventCallback = e[T.g.Ib]),
            e[T.g.dd] && (g.eventTimeout = e[T.g.dd]));
          var k = Vp(a, b),
            l = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = l;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[T.g.ob];
          void 0 === r &&
            ((r = Xd(T.g.ob, 2)), void 0 === r && (r = "default"));
          if (m(r) || ra(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = op(t),
              v = u.Mi,
              y = u.Oi;
            if (y.length)
              for (var x = (q && q[T.g.V]) || Yo(), w = 0; w < y.length; w++) {
                var A = zi(y[w]);
                A && (rp ? em(A.containerId, x) : dm(A.containerId, x, !0));
              }
            p = Bi(v);
          } else p = void 0;
          var z = p;
          if (!z) return;
          Uk(l, c);
          for (var C = Wp() || Ro, E = [], G = 0; C && G < z.length; G++) {
            var D = z[G],
              L = M(b);
            if (-1 !== sp.indexOf(D.prefix)) {
              var K = M(d),
                O = L.eventMetadata || {};
              O.hasOwnProperty("is_external_event") ||
                (O.is_external_event = !L.fromContainerExecution);
              L.eventMetadata = O;
              delete K[T.g.Ib];
              Vo(c, K, D.id, L);
            }
            E.push(D.id);
          }
          g.eventModel = g.eventModel || {};
          0 < z.length
            ? (g.eventModel[T.g.ob] = E.join())
            : delete g.eventModel[T.g.ob];
          Tp || Q(43);
          return b.noGtmEvent ? void 0 : g;
        }
      },
      get: function (a, b) {
        Q(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !pa(a[3])) return;
        var c = zi(a[1]),
          d = String(a[2]),
          e = a[3];
        if (!c) return;
        Tp || Q(43);
        if (Ro) {
          var f = Yo();
          if (rp) {
            if (
              !sa(jg(), function (k) {
                return c.containerId === k;
              })
            ) {
              em(c.containerId, f);
              return;
            }
          } else if (c.containerId !== gg.I && !fg()) {
            dm(c.containerId, f, !0);
            return;
          }
        } else if (!Wp()) return;
        if (-1 === sp.indexOf(c.prefix)) return;
        Vp(a, b);
        var g = {};
        vf(M(((g[T.g.Na] = d), (g[T.g.Wa] = e), g)));
        Xo(
          d,
          function (k) {
            I(function () {
              return e(k);
            });
          },
          c.id,
          b
        );
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Tp = !0;
          Wp();
          var c = Vp(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && wb(a[1])
          ? (c = M(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((c = {}),
            wb(a[2]) || ra(a[2]) ? (c[a[1]] = M(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Vp(a, b),
            e = d.eventId,
            f = d.priorityId;
          M(c);
          if (Wp() || Ro) {
            var g = M(c);
            So().push("set", [g], void 0, b);
          }
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Yp = { policy: !0 };
  var Zp = function (a) {
      var b = F[Dd.aa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    $p = function (a) {
      var b = F[Dd.aa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var aq = !1,
    bq = [];
  function cq() {
    if (!aq) {
      aq = !0;
      for (var a = 0; a < bq.length; a++) I(bq[a]);
    }
  }
  var dq = function (a) {
    aq ? I(a) : bq.push(a);
  };
  var uq = function (a) {
    if (tq(a)) return a;
    this.h = a;
  };
  uq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var tq = function (a) {
    return !a || "object" !== ub(a) || wb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  uq.prototype.getUntrustedMessageValue = uq.prototype.getUntrustedMessageValue;
  var vq = 0,
    wq = {},
    xq = [],
    yq = [],
    zq = !1,
    Aq = !1;
  function Bq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Cq = function (a) {
      return F[Dd.aa].push(a);
    },
    Dq = function (a, b) {
      var c = U[Dd.aa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = F.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (F.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Eq(a, b) {
    var c = (!!Xi[10] && a._clear) || b.overwriteModelFields;
    wa(a, function (e, f) {
      "_clear" !== e && (c && $d(e), $d(e, f));
    });
    Nd || (Nd = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Rd()), (a["gtm.uniqueEventId"] = d), $d("gtm.uniqueEventId", d));
    return Gm(a);
  }
  function Fq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Gq() {
    var a;
    if (yq.length) a = yq.shift();
    else if (xq.length) a = xq.shift();
    else return;
    var b;
    var c = a;
    if (zq || !Fq(c.message)) b = c;
    else {
      zq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Rd());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      xq.unshift(k, c);
      b = f;
    }
    return b;
  }
  function Hq() {
    for (var a = !1, b; !Aq && (b = Gq()); ) {
      Aq = !0;
      delete Ud.eventModel;
      Wd();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Aq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var k = f[g],
              l = Xd(k, 1);
            if (ra(l) || wb(l)) l = M(l);
            Vd[k] = l;
          }
        try {
          if (pa(d))
            try {
              d.call(Yd);
            } catch (A) {}
          else if (ra(d)) {
            var n = d;
            if (m(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = Xd(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (A) {}
            }
          } else {
            var u = void 0;
            if (xa(d))
              a: {
                if (d.length && m(d[0])) {
                  var v = Xp[d[0]];
                  if (v && (!e.fromContainerExecution || !Yp[d[0]])) {
                    u = v(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
            else u = d;
            u && (a = Eq(u, e) || a);
          }
        } finally {
          e.fromContainerExecution && Wd(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var x = wq[String(y)] || [], w = 0; w < x.length; w++)
              yq.push(Iq(x[w]));
            x.length && yq.sort(Bq);
            delete wq[String(y)];
            vq = y;
          }
          Aq = !1;
        }
      }
    }
    return !a;
  }
  function Jq() {
    var b = Hq();
    try {
      Zp(gg.I);
    } catch (c) {}
    return b;
  }
  function lm(a) {
    if (vq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      wq[b] = wq[b] || [];
      wq[b].push(a);
    } else
      yq.push(Iq(a)),
        yq.sort(Bq),
        I(function () {
          Aq || Hq();
        });
  }
  function Iq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Lq = function () {
      function a(f) {
        var g = {};
        if (tq(f)) {
          var k = f;
          f = tq(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = cb(Dd.aa, []),
        c = (U[Dd.aa] = U[Dd.aa] || {});
      !0 === c.pruned && Q(83);
      wq = jm().get();
      mm();
      tl(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      dq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < U.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new uq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        xq.push.apply(xq, k);
        var l = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (Q(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof l || l;
        return Hq() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      xq.push.apply(xq, e);
      if (Kq()) {
        I(Jq);
      }
    },
    Kq = function () {
      var a = !0;
      return a;
    };
  function Mq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = B();
    return b < c + 3e5 && b > c - 9e5;
  }
  var Nq = {};
  Nq.qd = new String("undefined");
  var nr = F.clearTimeout,
    or = F.setTimeout,
    W = function (a, b, c, d) {
      if (fg()) {
        b && I(b);
      } else return hb(a, b, c, d);
    },
    pr = function () {
      return new Date();
    },
    qr = function () {
      return F.location.href;
    },
    rr = function (a) {
      return re(te(a), "fragment");
    },
    sr = function (a) {
      return se(te(a));
    },
    tr = function (a, b) {
      return Xd(a, b || 2);
    },
    ur = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Cq(a)))
        : (d = Cq(a));
      return d;
    },
    vr = function (a, b) {
      F[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b);
      return F[a];
    },
    wr = function (a, b, c) {
      return Nf(a, b, void 0 === c ? !0 : !!c);
    },
    xr = function (a, b, c) {
      return 0 === Wf(a, b, c);
    },
    yr = function (a, b) {
      if (fg()) {
        b && I(b);
      } else jb(a, b);
    },
    zr = function (a) {
      return !!Uq(a, "init", !1);
    },
    Ar = function (a) {
      Sq(a, "init", !0);
    },
    Br = function (a, b, c) {
      Pk && (xb(a) || cl(c, b, a));
    };
  var Zr = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function $r(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var as = new ua();
  function bs(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = as.get(e);
      f || ((f = new RegExp(b, d)), as.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function cs(a, b) {
    function c(g) {
      var k = te(g),
        l = re(k, "protocol"),
        n = re(k, "host", !0),
        p = re(k, "port"),
        q = re(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" === l && "80" === p) ||
        ("https" === l && "443" === p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function ds(a) {
    return es(a) ? 1 : 0;
  }
  function es(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = M(a, {});
        M({ arg1: c[d], any_of: void 0 }, e);
        if (ds(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Zr.length; g++) {
                var k = Zr[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case "_ew":
        return $r(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return bs(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return cs(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var ks = encodeURI,
    Y = encodeURIComponent,
    ls = kb;
  var ms = function (a, b) {
      if (!a) return !1;
      var c = re(te(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    ns = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  function Lt() {
    return (F.gaGlobal = F.gaGlobal || {});
  }
  var Mt = function () {
      var a = Lt();
      a.hid = a.hid || ta();
      return a.hid;
    },
    Nt = function (a, b) {
      var c = Lt();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Vu = window,
    Wu = document,
    Xu = function (a) {
      var b = Vu._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Vu["ga-disable-" + a]))
        return !0;
      try {
        var c = Vu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Hf("AMP_TOKEN", String(Wu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Wu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Yu = {};
  function fv(a) {
    wa(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[T.g.Ia] || {};
    wa(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Jv = function (a, b, c, d, e) {
      if (Xi[13]) {
        var f = hm(a, b, d);
        e = e || {};
        km(f, c, e);
      } else (e = e || {}), (e.fromContainerExecution = !0), Vo(b, d, a, e);
    },
    Kv = function (a, b, c, d, e) {
      if (Xi[13]) {
        var f = hm(a, b, d);
        e = e || {};
        e.deferrable = !0;
        km(f, c, e);
      } else
        (e = e || {}),
          (e.deferrable = !0),
          (e.fromContainerExecution = !0),
          Vo(b, d, a, e);
    },
    Mv = function (a, b, c) {};
  function Lv(a, b, c) {}
  var Z = { m: {} };

  (Z.m.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.o = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (Z.m.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.o = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = tr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Br(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.m.rep = ["google"]),
    (function () {
      var a = !1;
      a = !0;
      (function (b) {
        Z.__rep = b;
        Z.__rep.o = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
      })(function (b) {
        var c = zi(b.vtp_containerId),
          d;
        switch (c.prefix) {
          case "AW":
            d = vn;
            break;
          case "DC":
            d = Fn;
            break;
          case "GF":
            d = Mn;
            break;
          case "HA":
            d = Rn;
            break;
          case "UA":
            d = qo;
            break;
          default:
            I(b.vtp_gtmOnFailure);
            return;
        }
        I(b.vtp_gtmOnSuccess);
        if (a) {
          var e = c.containerId,
            f = jg();
          So(!0).notifyContainerLoaded(e, f);
        }
        Uo(b.vtp_containerId, d, b.vtp_remoteConfig || {});
      });
    })();

  (Z.m.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.o = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
      })(function () {
        return gg.I;
      });
    })();

  (Z.m.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.o = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        (a.vtp_deferrable ? Kv : Jv)(String(b.streamId), d, e.eventId, c, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var Nv = {};
  Nv.dataLayer = Yd;
  Nv.callback = function (a) {
    Pd.hasOwnProperty(a) && pa(Pd[a]) && Pd[a]();
    delete Pd[a];
  };
  Nv.bootstrap = 0;
  Nv._spx = !1;
  (function (a) {
    if (!F["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = te(H.referrer);
        b = "cct.google" === qe(c, "host");
      }
      if (!b) {
        var d = Nf("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((F["__TAGGY_INSTALLED"] = !0),
        hb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          t = "GTM";
        (r = "OGT"), (t = "GTAG");
        var u = F["google.tagmanager.debugui2.queue"];
        u ||
          ((u = []),
          (F["google.tagmanager.debugui2.queue"] = u),
          hb(
            "https://" +
              Dd.Xb +
              "/debug/bootstrap?id=" +
              gg.I +
              "&src=" +
              t +
              "&cond=" +
              q +
              "&gtm=" +
              Bg()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: bb,
            containerProduct: r,
            debug: !1,
            id: gg.I,
            isGte: Md,
          },
        };
        v.data.resume = function () {
          a();
        };
        Dd.fh && (v.data.initialPublish = !0);
        u.push(v);
      },
      g = void 0,
      k = re(F.location, "query", !1, void 0, "gtm_debug");
    Mq(k) && (g = 2);
    if (!g && H.referrer) {
      var l = te(H.referrer);
      "tagassistant.google.com" === qe(l, "host") && (g = 3);
    }
    if (!g) {
      var n = Nf("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = H.documentElement.getAttribute("data-tag-assistant-present");
      Mq(p) && (g = 5);
    }
    g && bb ? f(g) : a();
  })(function () {
    var a = !1;
    a && El("INIT");
    cf().s();
    Zg();
    Rh.enable_gbraid_cookie_write = !0;
    var b = !!U[gg.I];
    !b && gg.Wb && (b = !!U["ctid_" + gg.Wb]);
    if (b) {
      var c = U.zones;
      c && c.unregisterChild(ig());
    } else {
      for (var d = jg(), e = 0; e < d.length; e++) {
        var f = d[e],
          g = gg.I;
        U.addDestinationToContainer
          ? U.addDestinationToContainer(f, g)
          : ((U.pendingDestinationIds = U.pendingDestinationIds || []),
            U.pendingDestinationIds.push([f, g]));
      }
      for (
        var k = data.resource || {}, l = k.macros || [], n = 0;
        n < l.length;
        n++
      )
        Yb.push(l[n]);
      for (var p = k.tags || [], q = 0; q < p.length; q++) ac.push(p[q]);
      for (var r = k.predicates || [], t = 0; t < r.length; t++) $b.push(r[t]);
      for (var u = k.rules || [], v = 0; v < u.length; v++) {
        for (var y = u[v], x = {}, w = 0; w < y.length; w++)
          x[y[w][0]] = Array.prototype.slice.call(y[w], 1);
        Zb.push(x);
      }
      cc = Z;
      dc = ds;
      U[gg.I] = Nv;
      gg.Wb && (U["ctid_" + gg.Wb] = Nv);
      for (var A = lg(), z = ig(), C = 0; C < z.length; C++)
        A.container[z[C]] = !0;
      for (var E = jg(), G = 0; G < E.length; G++) A.destination[E[G]] = !0;
      A.canonical[gg.Wb] = !0;
      Ga(Qd, Z.m);
      fc = oc;
      Lq();
      ol = !1;
      pl = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        rl();
      else {
        lb(H, "DOMContentLoaded", rl);
        lb(H, "readystatechange", rl);
        if (H.createEventObject && H.documentElement.doScroll) {
          var D = !0;
          try {
            D = !F.frameElement;
          } catch (N) {}
          D && sl();
        }
        lb(F, "load", rl);
      }
      aq = !1;
      "complete" === H.readyState ? cq() : lb(F, "load", cq);
      gl();
      Od = B();
      Nv.bootstrap = Od;
      if (a) {
        var S = Fl("INIT");
      }
    }
  });
})();
1;
