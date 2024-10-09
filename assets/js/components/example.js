import Class from "uikit/src/js/mixin/class.js";
import "../../styles/components/_example.scss";

function Line(opts, ctx, tick, baseRad, dieX, dieY) {
  this.opts = opts;
  this.ctx = ctx;
  this.tick = tick;
  this.baseRad = baseRad;
  this.dieX = dieX;
  this.dieY = dieY;

  this.reset();
}

export default {
  mixins: [Class],

  data: {
    w: window.innerWidth,
    h: window.innerHeight,
    tick: 0,
    lines: [],
    baseRad: Math.PI * (2 / 6),
    opts: {
      len: 20,
      count: 50,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.05,
      spawnChance: 1,
      sparkChance: 0.1,
      sparkDist: 10,
      sparkSize: 2,
      color: "hsl(hue,100%,light%)",
      baseLight: 50,
      addedLight: 10, // [50-10,50+10]
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: window.innerWidth / 2,
      cy: window.innerHeight / 2,
      repaintAlpha: 0.04,
      hueChange: 0.1,
    },
  },

  connected() {
    this.c = this.$el;
    this.ctx = this.c.getContext("2d");

    this.c.width = this.w;
    this.c.height = this.h;

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.w, this.h);

    this.dieX = this.w / 2 / this.opts.len;
    this.dieY = this.h / 2 / this.opts.len;

    this.loop();

    console.warn(
      "⚠️ Don't forget to remove this component as it only serves as an example!",
    );
  },

  events: [
    {
      name: "resize",

      el() {
        return window;
      },

      handler() {
        this.w = window.innerWidth;
        this.h = window.innerHeight;

        this.c.width = this.w;
        this.c.height = this.h;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.w, this.h);

        this.opts.cx = this.w / 2;
        this.opts.cy = this.h / 2;

        this.dieX = this.w / 2 / this.opts.len;
        this.dieY = this.h / 2 / this.opts.len;
      },
    },
  ],

  methods: {
    loop() {
      window.requestAnimationFrame(this.loop);
      this.tick += 1;

      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = "rgba(0,0,0,alp)".replace(
        "alp",
        this.opts.repaintAlpha,
      );
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.ctx.globalCompositeOperation = "lighter";

      if (
        this.lines.length < this.opts.count &&
        Math.random() < this.opts.spawnChance
      ) {
        this.lines.push(
          new Line(
            this.opts,
            this.ctx,
            this.tick,
            this.baseRad,
            this.dieX,
            this.dieY,
          ),
        );
      }

      this.lines.forEach((line) => {
        line.step();
      });
    },
  },
};

Line.prototype.reset = function reset() {
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;

  this.rad = 0;

  this.lightInputMultiplier =
    this.opts.baseLightInputMultiplier +
    this.opts.addedLightInputMultiplier * Math.random();

  this.color = this.opts.color.replace("hue", this.tick * this.opts.hueChange);
  this.cumulativeTime = 0;

  this.beginPhase();
};

Line.prototype.beginPhase = function beginPhase() {
  this.x += this.addedX;
  this.y += this.addedY;

  this.time = 0;
  this.targetTime =
    this.opts.baseTime + this.opts.addedTime * Math.random() || 0;

  this.rad += this.baseRad * (Math.random() < 0.5 ? 1 : -1);
  this.addedX = Math.cos(this.rad);
  this.addedY = Math.sin(this.rad);

  if (
    Math.random() < this.opts.dieChance ||
    this.x > this.dieX ||
    this.x < -this.dieX ||
    this.y > this.dieY ||
    this.y < -this.dieY
  ) {
    this.reset();
  }
};

Line.prototype.step = function step() {
  this.time += 1;
  this.cumulativeTime += 1;

  if (this.time >= this.targetTime) {
    this.beginPhase();
  }

  const prop = this.time / this.targetTime;
  const wave = Math.sin(prop * (Math.PI / 2));
  const x = this.addedX * wave;
  const y = this.addedY * wave;

  this.ctx.shadowBlur = prop * this.opts.shadowToTimePropMult;
  this.ctx.fillStyle = this.color.replace(
    "light",
    this.opts.baseLight +
      this.opts.addedLight *
        Math.sin(this.cumulativeTime * this.lightInputMultiplier),
  );
  this.ctx.shadowColor = this.ctx.fillStyle;
  this.ctx.fillRect(
    this.opts.cx + (this.x + x) * this.opts.len,
    this.opts.cy + (this.y + y) * this.opts.len,
    2,
    2,
  );

  if (Math.random() < this.opts.sparkChance) {
    this.ctx.fillRect(
      this.opts.cx +
        (this.x + x) * this.opts.len +
        Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
        this.opts.sparkSize / 2,
      this.opts.cy +
        (this.y + y) * this.opts.len +
        Math.random() * this.opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
        this.opts.sparkSize / 2,
      this.opts.sparkSize,
      this.opts.sparkSize,
    );
  }
};
