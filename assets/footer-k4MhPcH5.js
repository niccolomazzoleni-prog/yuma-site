import{a as D,r as x,j as t}from"./arrow-right-CJMVFc8f.js";import{l as A}from"./whatsapp-bar-Bn9Yv_0a.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Z=[{label:"Cosa è possibile",href:"#cosa-e-possibile"},{label:"Soluzioni",href:"#soluzioni"},{label:"Come lavoriamo",href:"#come-lavoriamo"},{label:"Team",href:"#team"},{label:"Assessment AI",href:"#assessment"}],ee=[{label:"Il problema",href:"#problema"},{label:"Moduli",href:"#moduli"},{label:"Caso sul campo",href:"#caso"},{label:"A chi è rivolto",href:"#a-chi-e-rivolto"},{label:"FAQ",href:"#faq"}];function te({sections:h,cta:m,ctaHref:s,current:f}){const[e,S]=x.useState(!1),[a,d]=x.useState(!1);x.useEffect(()=>{const r=()=>S(window.scrollY>24);return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),x.useEffect(()=>(document.body.style.overflow=a?"hidden":"",()=>{document.body.style.overflow=""}),[a]);const v=[{label:"Home",href:A.home,key:"home"},{label:"YUMA Projects",href:A.projects,key:"projects"},{label:"Client Interface",href:A.clientInterface,key:"client-interface"}],l=e||a,b=l?"text-ref-graphite hover:text-ref-carbon":"text-white/70 hover:text-white";return t.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${l?"border-b border-ref-fog bg-white/85 backdrop-blur-md":"border-b border-transparent"}`,children:[t.jsxs("div",{className:"flex w-full items-center justify-between gap-6 px-5 py-4 md:px-12",children:[t.jsx("a",{href:A.home,className:`text-lg font-semibold tracking-[0.2em] transition-colors duration-300 ${l?"text-ref-carbon":"text-white"}`,children:"YUMA"}),t.jsxs("nav",{className:"hidden items-center gap-7 text-sm lg:flex",children:[v.filter(r=>r.key!==f).map(r=>t.jsx("a",{href:r.href,className:`font-medium transition-colors duration-300 ${b}`,children:r.label},r.key)),t.jsx("span",{"aria-hidden":!0,className:`h-4 w-px ${l?"bg-ref-fog":"bg-white/25"}`}),h.map(r=>t.jsx("a",{href:r.href,className:`transition-colors duration-300 ${b}`,children:r.label},r.href))]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("a",{href:s,className:`hidden rounded-full px-4 py-2 text-sm font-medium transition sm:inline-flex ${l?"bg-ref-lavender text-white shadow-subtle hover:-translate-y-0.5":"border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15"}`,children:m}),t.jsx("button",{type:"button","aria-label":a?"Chiudi il menu":"Apri il menu","aria-expanded":a,onClick:()=>d(r=>!r),className:`inline-flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden ${l?"border border-ref-fog text-ref-carbon hover:bg-ref-mist":"border border-white/25 text-white hover:bg-white/10"}`,children:a?t.jsx($,{className:"h-5 w-5"}):t.jsx(B,{className:"h-5 w-5"})})]})]}),a?t.jsx("div",{className:"border-t border-ref-fog bg-white px-5 pb-8 pt-4 lg:hidden",children:t.jsxs("nav",{className:"flex flex-col",children:[v.map(r=>t.jsx("a",{href:r.href,onClick:()=>d(!1),className:`border-b border-ref-fog py-4 text-[17px] font-semibold ${r.key===f?"text-ref-lavender":"text-ref-carbon"}`,children:r.label},r.key)),h.map(r=>t.jsx("a",{href:r.href,onClick:()=>d(!1),className:"border-b border-ref-fog py-4 text-[16px] text-ref-graphite",children:r.label},r.href)),t.jsx("a",{href:s,onClick:()=>d(!1),className:"mt-6 inline-flex items-center justify-center rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle",children:m})]})}):null]})}const V=`attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,W=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec3 u_colors[8];
// Seven packed vectors + eight colour vectors = 15 fragment uniform vectors,
// one below WebGL1's guaranteed minimum. Macros preserve the public u_* API.
uniform vec4 u_scene;      // resolution.xy, time, colour count
uniform vec4 u_shape;      // scale, intensity, paramA, warp
uniform vec4 u_surface;    // detail, contrast, brightness, saturation
uniform vec4 u_finish;     // hue, vignette, blur, grain
uniform vec4 u_transform;  // seed, rotation, drift, OKLab toggle
uniform vec4 u_space;      // offset.xy, pointer.xy
uniform vec4 u_cursor;

#define u_resolution u_scene.xy
#define u_time u_scene.z
#define u_colorCount u_scene.w
#define u_scale u_shape.x
#define u_intensity u_shape.y
#define u_paramA u_shape.z
#define u_warp u_shape.w
#define u_detail u_surface.x
#define u_contrast u_surface.y
#define u_brightness u_surface.z
#define u_saturation u_surface.w
#define u_hue u_finish.x
#define u_vignette u_finish.y
#define u_blur u_finish.z
#define u_grain u_finish.w
#ifdef GL_FRAGMENT_PRECISION_HIGH
#define u_seed u_transform.x
#else
// Keep hash inputs inside mediump's guaranteed ±2^14 range.
#define u_seed mod(u_transform.x, 31.0)
#endif
#define u_rotate u_transform.y
#define u_drift u_transform.z
#define u_oklab u_transform.w
#define u_offset u_space.xy
#define u_mouse u_space.zw
#define u_cursorPresence u_cursor.x
#define u_cursorEffect u_cursor.y
#define u_cursorStrength u_cursor.z
#define u_cursorRadius u_cursor.w

float hash21(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
  p = mod(p, 31.0);
#endif
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

// Even, un-structured white noise for film grain (Dave Hoskins hash12). The
// multiply hash above is fine for value noise but shows a faint axis-aligned
// mesh at integer fragment coords, which reads as a net over flat areas.
float grainHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
  p = mod(p, 31.0);
#endif
  float n = sin(dot(p, vec2(41.0, 289.0)));
  return fract(vec2(15731.743, 7892.321) * n);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
    mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
    u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(17.0, 9.2);
    a *= 0.5;
  }
  return v;
}

// --- OKLab colour mixing (perceptual), gated by u_oklab -----------------------
vec3 srgbToLinear(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)),
    step(0.04045, c));
}
vec3 linearToSrgb(vec3 c) {
  // max() guards the sRGB branch: out-of-gamut OKLab interpolations can send a
  // channel negative, and pow(negative, …) is NaN which mix()/step() would
  // then propagate. The linear branch clips such channels to 0 downstream.
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, c));
}
vec3 linToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0);
  m = pow(max(m, 0.0), 1.0 / 3.0);
  s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
}
vec3 oklabToLin(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l; m = m * m * m; s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}
vec3 mixColour(vec3 a, vec3 b, float t) {
  if (u_oklab > 0.5) {
    vec3 la = linToOklab(srgbToLinear(a));
    vec3 lb = linToOklab(srgbToLinear(b));
    return clamp(linearToSrgb(oklabToLin(mix(la, lb, t))), 0.0, 1.0);
  }
  return mix(a, b, t);
}

// Mix through the recipe colours; x is clamped to 0..1. WebGL1 forbids
// dynamic uniform indexing in fragment shaders, hence the constant loop.
vec3 palette(float x) {
  float n = max(u_colorCount - 1.0, 1.0);
  float f = clamp(x, 0.0, 1.0) * n;
  vec3 col = u_colors[0];
  for (int i = 0; i < 7; i++) {
    if (float(i) < n)
      col = mixColour(col, u_colors[i + 1],
        smoothstep(0.0, 1.0, clamp(f - float(i), 0.0, 1.0)));
  }
  return col;
}

vec3 hueRotate(vec3 col, float a) {
  const mat3 toYIQ = mat3(0.299, 0.596, 0.211,
                          0.587, -0.274, -0.523,
                          0.114, -0.322, 0.312);
  const mat3 toRGB = mat3(1.0, 1.0, 1.0,
                          0.956, -0.272, -1.106,
                          0.621, -0.647, 1.703);
  vec3 yiq = toYIQ * col;
  float ca = cos(a), sa = sin(a);
  yiq = vec3(yiq.x, yiq.y * ca - yiq.z * sa, yiq.y * sa + yiq.z * ca);
  return toRGB * yiq;
}

vec3 shade(vec2 uv, vec2 p, float t) {
  vec2 q = p * 1.6;
  float amp = 0.25 + u_intensity * 0.85;
  for (float i = 1.0; i < 5.0; i += 1.0) {
    q.x += amp / i * cos(i * 2.4 * q.y + t * 0.8 + u_seed);
    q.y += amp / i * cos(i * 1.7 * q.x + t * 0.6);
  }
  return palette(0.5 + 0.5 * sin(q.x + q.y));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 screenUv = uv;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy)
    / min(u_resolution.x, u_resolution.y);
  float cursorMask = 0.0;

  // Cursor modes 1–3 are local distortions. Push shifts the same screen-space
  // coordinates before field transforms, so Zoom/Rotate don't change its feel.
  if (u_cursorPresence > 0.001) {
    // u_mouse is normalized to -1..1 in canvas space. Convert it to the same
    // aspect-corrected screen space as p so effects stay under the cursor.
    vec2 cursor = (0.5 * u_mouse * u_resolution.xy)
      / min(u_resolution.x, u_resolution.y);
    vec2 cursorDelta = p - cursor;
    if (u_cursorEffect < 0.5) {
      p += cursor * u_cursorPresence * u_cursorStrength * 0.55;
    } else {
      float cursorDistance = length(cursorDelta);
      vec2 cursorDirection = cursorDelta / max(cursorDistance, 0.0001);
      cursorMask = u_cursorPresence
        * (1.0 - smoothstep(0.0, u_cursorRadius, cursorDistance));
      if (u_cursorEffect < 1.5) {
        p -= cursorDirection * cursorMask * u_cursorStrength * 0.24;
      } else if (u_cursorEffect < 2.5) {
        float cursorAngle = cursorMask * u_cursorStrength * 2.2;
        float cc = cos(cursorAngle), cs = sin(cursorAngle);
        p = cursor + mat2(cc, -cs, cs, cc) * cursorDelta;
      } else if (u_cursorEffect < 3.5) {
        float ripple = sin(
          cursorDistance / max(u_cursorRadius, 0.001) * 18.0 - u_time * 5.0);
        p -= cursorDirection * ripple * cursorMask * u_cursorStrength * 0.07;
      }
    }
  }

  // Keep presets that read uv (rather than p) in the same warped space.
  uv = p * min(u_resolution.x, u_resolution.y) / u_resolution.xy + 0.5;
  p *= u_scale;
  // Field transform: rotate, pan, pointer push, slow drift.
  if (abs(u_rotate) > 0.0001) {
    float cr = cos(u_rotate), sr = sin(u_rotate);
    p = mat2(cr, -sr, sr, cr) * p;
  }
  p += u_offset;
  if (u_drift > 0.0001)
    p += u_drift * vec2(sin(u_time * 0.31), cos(u_time * 0.23));
  // Organic domain warp.
  if (u_warp > 0.0) {
    p += u_warp * (vec2(
      fbm(p * u_detail + u_seed),
      fbm(p * u_detail + vec2(5.2, 1.3))) - 0.5);
  }
  // Shade, with an optional soft 5-tap blur.
  vec3 col;
  if (u_blur > 0.0) {
    float e = u_blur;
    float pe = e * u_scale;
    vec2 uvE = vec2(e) * min(u_resolution.x, u_resolution.y) / u_resolution.xy;
    col  = shade(uv, p, u_time) * 0.36;
    col += shade(uv + vec2(uvE.x, 0.0), p + vec2(pe, 0.0), u_time) * 0.16;
    col += shade(uv - vec2(uvE.x, 0.0), p - vec2(pe, 0.0), u_time) * 0.16;
    col += shade(uv + vec2(0.0, uvE.y), p + vec2(0.0, pe), u_time) * 0.16;
    col += shade(uv - vec2(0.0, uvE.y), p - vec2(0.0, pe), u_time) * 0.16;
  } else {
    col = shade(uv, p, u_time);
  }
  // Post: contrast, saturation, hue, brightness, vignette, grain.
  if (abs(u_contrast - 1.0) > 0.0001)
    col = (col - 0.5) * u_contrast + 0.5;
  if (abs(u_saturation - 1.0) > 0.0001) {
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(luma), col, u_saturation);
  }
  if (abs(u_hue) > 0.0001)
    col = hueRotate(col, u_hue);
  if (abs(u_brightness) > 0.0001)
    col += u_brightness;
  if (u_vignette > 0.0001) {
    float vd = length(screenUv - 0.5) * 1.41421356;
    col *= 1.0 - u_vignette * smoothstep(0.35, 1.0, vd);
  }
  if (u_cursorPresence > 0.001 && u_cursorEffect > 3.5)
    col += (vec3(0.18) + col * 0.12) * cursorMask * u_cursorStrength;
  if (u_grain > 0.0001)
    col += (grainHash(
      gl_FragCoord.xy + vec2(u_seed * 17.0, u_seed * 31.0)) - 0.5) * u_grain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,o={colors:[[.043137254901960784,.06274509803921569,.14901960784313725],[.23921568627450981,.27450980392156865,.9098039215686274],[.6941176470588235,.5490196078431373,1],[1,.8392156862745098,.9058823529411765],[1,.8392156862745098,.9058823529411765],[1,.8392156862745098,.9058823529411765],[1,.8392156862745098,.9058823529411765],[1,.8392156862745098,.9058823529411765]],colorCount:4,scale:1.5,intensity:.55,paramA:.5,warp:0,detail:2.4,contrast:1.005,brightness:0,saturation:1,hue:0,vignette:0,blur:0,grain:.042,seed:1,rotate:0,offsetX:0,offsetY:0,drift:0,cursorEffect:2,cursorStrength:.65,cursorRadius:.46,oklab:0,timeScale:.86},w=new WeakMap;function re({className:h}){const m=x.useRef(null);return x.useEffect(()=>{const s=m.current;if(!s)return;const f=w.get(s);f!==void 0&&window.clearTimeout(f),w.delete(s);const e=s.getContext("webgl",{antialias:!1});if(!e)return;const S=(i,u)=>{const c=e.createShader(i);return e.shaderSource(c,u),e.compileShader(c),c},a=e.createProgram(),d=S(e.VERTEX_SHADER,V),v=S(e.FRAGMENT_SHADER,W);e.attachShader(a,d),e.attachShader(a,v),e.linkProgram(a),e.deleteShader(d),e.deleteShader(v),e.useProgram(a);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const b=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(b),e.vertexAttribPointer(b,2,e.FLOAT,!1,0,0);const r={colors:e.getUniformLocation(a,"u_colors"),scene:e.getUniformLocation(a,"u_scene"),shape:e.getUniformLocation(a,"u_shape"),surface:e.getUniformLocation(a,"u_surface"),finish:e.getUniformLocation(a,"u_finish"),transform:e.getUniformLocation(a,"u_transform"),space:e.getUniformLocation(a,"u_space"),cursor:e.getUniformLocation(a,"u_cursor")};e.uniform3fv(r.colors,new Float32Array(o.colors.flat())),e.uniform4f(r.shape,o.scale,o.intensity,o.paramA,o.warp),e.uniform4f(r.surface,o.detail,o.contrast,o.brightness,o.saturation),e.uniform4f(r.finish,o.hue,o.vignette,o.blur,o.grain),e.uniform4f(r.transform,o.seed,o.rotate,o.drift,o.oklab),e.uniform4f(r.cursor,0,o.cursorEffect,o.cursorStrength,o.cursorRadius);let I=0,F=0,P=0,k=0,N=0,M=0,C=s.getBoundingClientRect(),n=0,p=null,j=document.visibilityState==="visible",E=!0,L=!1;const U=performance.now(),Y=Math.abs(o.timeScale)>1e-4,z=()=>{const i=Math.min(window.devicePixelRatio||1,2),u=Math.max(1,Math.round(C.width*i)),c=Math.max(1,Math.round(C.height*i)),R=Math.min(1,Math.sqrt(2e6/Math.max(1,u*c))),g=Math.max(1,Math.round(u*R)),y=Math.max(1,Math.round(c*R));(s.width!==g||s.height!==y)&&(s.width=g,s.height=y,e.viewport(0,0,g,y))},_=()=>{!L&&j&&E&&n===0&&(n=requestAnimationFrame(H))},T=()=>{C=s.getBoundingClientRect(),z(),_()};window.addEventListener("resize",T);const G=new ResizeObserver(T);G.observe(s);const q=new IntersectionObserver(([i])=>{E=(i==null?void 0:i.isIntersecting)??!0,E?_():n!==0&&(cancelAnimationFrame(n),n=0,p=null)});q.observe(s);const O=()=>{j=document.visibilityState==="visible",j?_():n!==0&&(cancelAnimationFrame(n),n=0,p=null)};document.addEventListener("visibilitychange",O);const H=i=>{if(n=0,L||!j||!E)return;const u=p===null?0:Math.min((i-p)/1e3,.1);p=i;const c=1-Math.exp(-12*u);k+=(I-k)*c,N+=(F-N)*c,M+=(P-M)*c,z();const R=s.width,g=s.height;e.uniform4f(r.scene,R,g,(i-U)/1e3*o.timeScale,o.colorCount),e.uniform4f(r.space,o.offsetX,o.offsetY,k,N),e.uniform4f(r.cursor,0,o.cursorEffect,o.cursorStrength,o.cursorRadius),e.drawArrays(e.TRIANGLES,0,3);const y=Math.abs(I-k)>.001||Math.abs(F-N)>.001||Math.abs(P-M)>.001;Y||y?_():p=null};return _(),()=>{L=!0,cancelAnimationFrame(n),G.disconnect(),q.disconnect(),document.removeEventListener("visibilitychange",O),window.removeEventListener("resize",T),e.deleteBuffer(l),e.deleteProgram(a);const i=window.setTimeout(()=>{var u;w.get(s)===i&&(w.delete(s),(u=e.getExtension("WEBGL_lose_context"))==null||u.loseContext(),s.width=1,s.height=1)},0);w.set(s,i)}},[]),t.jsx("canvas",{ref:m,className:h,style:{display:"block",width:"100%",height:"100%"}})}const X={canvas:"bg-white text-ref-carbon",linen:"bg-ref-linen text-ref-carbon"},K={md:"py-16 md:py-[88px]",lg:"py-16 md:py-[88px]",xl:"py-16 md:py-[112px]"};function oe({id:h,label:m,tone:s="canvas",pad:f="lg",children:e}){return t.jsx("section",{id:h,className:`${X[s]} [scroll-margin-top:96px]`,children:t.jsx("div",{className:`w-full px-5 text-center md:px-12 ${K[f]}`,children:e})})}function se(){return t.jsx("footer",{className:"border-t border-ref-fog bg-white text-ref-graphite",children:t.jsxs("div",{className:"w-full px-5 py-16 md:px-12",children:[t.jsxs("div",{className:"flex flex-col justify-between gap-10 md:flex-row",children:[t.jsxs("div",{children:[t.jsx("div",{className:"text-[16px] font-semibold tracking-[0.16em] text-ref-carbon",children:"YUMA"}),t.jsxs("div",{className:"mt-4 space-y-1 text-[14px] leading-[1.6] text-ref-ash",children:[t.jsx("div",{className:"text-ref-graphite",children:"Yuma Tx Srl"}),t.jsx("div",{children:"Via G. Leopardi 14, 20123 Milano (MI)"}),t.jsx("div",{children:"P. IVA 14244440963"}),t.jsxs("div",{children:["PEC"," ",t.jsx("a",{href:"mailto:yumatxsrl@pec.it",className:"underline-offset-2 transition-colors duration-200 hover:text-ref-carbon",children:"yumatxsrl@pec.it"})]}),t.jsx("div",{children:"SDI WY7PJ6k"})]})]}),t.jsxs("nav",{className:"flex flex-col gap-3 text-[15px] font-medium",children:[t.jsx("a",{className:"transition-colors duration-200 hover:text-ref-carbon",href:"#",children:"LinkedIn"}),t.jsx("a",{className:"transition-colors duration-200 hover:text-ref-carbon",href:"#",children:"Privacy policy"}),t.jsx("a",{className:"transition-colors duration-200 hover:text-ref-carbon",href:"#",children:"Cookie policy"})]})]}),t.jsx("div",{className:"mt-12 border-t border-ref-fog pt-6 text-[13px] text-ref-ash",children:"© 2026 Yuma Tx Srl. Tutti i diritti riservati."})]})})}export{se as F,re as S,$ as X,oe as a,te as b,Z as h,ee as l};
