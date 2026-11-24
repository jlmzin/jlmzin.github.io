const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const nameElement = document.querySelector("#typed-name");
const statusElement = document.querySelector("#identity-status");
const roleElement = document.querySelector("#typed-role");
const roleElement2 = document.querySelector("#typed-role-2");
const roleSeparator = document.querySelector("#role-sep");

function typeText(el, text, speed, done) {
  if (reduced) {
    el.textContent = text;
    done?.();
    return;
  }

  let i = 0;
  const timer = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) {
      clearInterval(timer);
      done?.();
    }
  }, speed);
}

function eraseTo(el, target, speed, done) {
  if (reduced) {
    el.textContent = target;
    done?.();
    return;
  }

  const timer = setInterval(() => {
    el.textContent = el.textContent.slice(0, -1);
    if (el.textContent.length <= target.length) {
      clearInterval(timer);
      el.textContent = target;
      done?.();
    }
  }, speed);
}

function showStatus(message, type = "info") {
  statusElement.textContent = message;
  statusElement.dataset.state = type;
}

function startRoles() {
  typeText(roleElement, "Computer Science", 60, () => {
    roleSeparator.hidden = false;
    typeText(roleElement2, "Developer in Progress", 60);
  });
}

function startIdentityAnimation() {
  if (reduced) {
    nameElement.textContent = "JLM.DEV";
    startRoles();
    return;
  }

  nameElement.textContent = "";
  showStatus("[SYSTEM] Identifying user...");

  // Digita somente "Juan Lim": o nome completo nunca é exibido.
  typeText(nameElement, "Juan Lim", 110, () => {
    setTimeout(() => {
      showStatus("[ERROR] Identity mismatch detected.", "error");
      setTimeout(() => {
        showStatus("[SYSTEM] Correcting identity...");
        eraseTo(nameElement, "", 85, () => {
          setTimeout(() => {
            typeText(nameElement, "JLM.DEV", 125, () => {
              showStatus("[SUCCESS] Identity corrected.", "success");
              setTimeout(startRoles, 350);
            });
          }, 300);
        });
      }, 1100);
    }, 500);
  });
}

startIdentityAnimation();
const items = document.querySelectorAll(".reveal");
if (reduced || !("IntersectionObserver" in window))
  items.forEach((x) => x.classList.add("is-visible"));
else {
  const observer = new IntersectionObserver(
    (entries, obs) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  items.forEach((x) => observer.observe(x));
}
const canvas = document.querySelector("#particle-canvas"),
  ctx = canvas.getContext("2d");
let points = [],
  w = 0,
  h = 0,
  raf = 0;
function resize() {
  const d = Math.min(devicePixelRatio || 1, 1.5);
  w = innerWidth;
  h = innerHeight;
  canvas.width = w * d;
  canvas.height = h * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  points = Array.from(
    { length: Math.min(58, Math.max(22, Math.floor(w / 23))) },
    () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.5 + 0.5,
    }),
  );
}
function draw() {
  ctx.clearRect(0, 0, w, h);
  points.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(67,230,154,.65)";
    ctx.fill();
    for (let j = i + 1; j < points.length; j++) {
      const q = points[j],
        dist = Math.hypot(p.x - q.x, p.y - q.y);
      if (dist < 115) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(67,230,154,${(1 - dist / 115) * 0.13})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  });
}
function animate() {
  if (document.hidden) {
    raf = 0;
    return;
  }
  draw();
  raf = requestAnimationFrame(animate);
}
resize();
if (!reduced) raf = requestAnimationFrame(animate);
addEventListener("resize", () => {
  resize();
  if (!reduced && !raf && !document.hidden)
    raf = requestAnimationFrame(animate);
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cancelAnimationFrame(raf);
    raf = 0;
  } else if (!reduced && !raf) raf = requestAnimationFrame(animate);
});

/* Matrix Rain: discreto, só nas laterais e em ondas (aparece e some devagar) */
const mc = document.querySelector("#matrix-canvas"),
  mx = mc.getContext("2d"),
  FS = 15,
  GL = "01アイウエオカキクケコサシスセソ<>/{}[]$#=+*".split("");
let mw = 0,
  mh = 0,
  drops = [],
  mraf = 0,
  mlast = 0,
  peak = 0.18;
function mResize() {
  const d = Math.min(devicePixelRatio || 1, 1.5);
  mw = innerWidth;
  mh = innerHeight;
  mc.width = mw * d;
  mc.height = mh * d;
  mx.setTransform(d, 0, 0, d, 0, 0);
  mx.font = `${FS}px "Fira Code",monospace`;
  drops = [];
  const small = mw < 650,
    zone = small ? 0.12 : 0.24,
    dens = small ? 0.4 : 0.55;
  peak = small ? 0.1 : 0.18;
  for (let x = 0; x < mw; x += FS) {
    if ((x < mw * zone || x > mw * (1 - zone)) && Math.random() < dens)
      drops.push({ x, y: -Math.random() * 60 });
  }
}
function mDraw(t) {
  if (document.hidden) {
    mraf = 0;
    return;
  }
  mraf = requestAnimationFrame(mDraw);
  if (t - mlast < 50) return;
  mlast = t;
  const pulse = Math.max(0, Math.sin(t / 5000)) ** 2;
  mc.style.opacity = (0.04 + peak * pulse).toFixed(3);
  mx.globalCompositeOperation = "destination-out";
  mx.fillStyle = "rgba(0,0,0,.14)";
  mx.fillRect(0, 0, mw, mh);
  mx.globalCompositeOperation = "source-over";
  mx.fillStyle = "#43e69a";
  for (const d of drops) {
    if (d.y > 0)
      mx.fillText(GL[(Math.random() * GL.length) | 0], d.x, d.y * FS);
    d.y += 1;
    if (d.y * FS > mh && Math.random() > 0.97) d.y = -Math.random() * 60;
  }
}
if (!reduced) {
  mResize();
  mraf = requestAnimationFrame(mDraw);
  addEventListener("resize", mResize);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !mraf) mraf = requestAnimationFrame(mDraw);
  });
}
