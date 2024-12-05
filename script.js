const cubism2Model =
"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";
const cubism4Model =
"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json";

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    backgroundAlpha: 0,
    autoStart: true,
    resizeTo: window });


  const model2 = await PIXI.live2d.Live2DModel.from(cubism2Model);
  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);

  app.stage.addChild(model2);
  app.stage.addChild(model4);

  model2.scale.set(0.2);
  model4.scale.set(0.2);

  model2.x = 200;
  model4.x = -80;
  model2.y = 270;
  model4.y = 258;
})();