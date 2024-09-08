/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_BHp_-jsT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/home/javi/elenemigos2.0/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full h-14 bg-slate-950 bg-opacity-80 backdrop-blur-sm fixed shadow-md nav" data-astro-cid-3ef6ksr2> <ul class="flex justify-center items-center w-full h-full " data-astro-cid-3ef6ksr2> <li class="" data-astro-cid-3ef6ksr2></li> <li data-astro-cid-3ef6ksr2>BUSCADOR</li> </ul> </nav> `;
}, "/home/javi/elenemigos2.0/src/components/Header.astro", void 0);

const Cards = [
  {
    name: "Ghost of Tshushima",
    image: "'/images/ghost-tsushima.webp'",
    alt: "Ghost of Tshushima cover",
    frase: "'El samurái deshonrado'",
    sinopsis: "El juego se remonta al año 1274 en la isla nipona de Tsushima, en plena invasión mongola. Tras fracasar en la defensa y ser uni de los pococs superviviente del ataque enemigo, Jin Sakai deberá dejar de lado su honor como samurái y enfrentarse al ejército mongol para liberar su hogar.",
    puntosPos: "Historia muy buena e inmersiva, muy buenos graficos",
    puntosNeg: "Pesies hasta resulta predecible.",
    valoraApart: "Historia: 9'5\nJugabilidad/Gameplay:7'8\nSonidos:9\nBanda Sonora:10\nGráficos:10",
    valoraFinal: "Ghost Of Tsushima es una apuesta muy acertada por parte de la desarrolladora Suker Punch.Pese a pecar en algunos aspectos del gameplay, el resto del juego lo compensa, dando como resultado en jugo imprescindible si eres jugador de PlayStation.",
    url: "/ghost"
  },
  {
    name: "Toem",
    image: "/images/toem.jpg",
    alt: "Ghost of Tshushima cover",
    frase: "'El samurái deshonrado'",
    sinopsis: "El juego se remonta al año 1274 en la isla nipona de Tsushima, en plena invasión mongola. Tras fracasar en la defensa y ser uni de los pococs superviviente del ataque enemigo, Jin Sakai deberá dejar de lado su honor como samurái y enfrentarse al ejército mongol para liberar su hogar.",
    puntosPos: "Historia muy buena e inmersiva, muy buenos graficos",
    puntosNeg: "Pesies hasta resulta predecible.",
    valoraApart: "Historia: 9'5\nJugabilidad/Gameplay:7'8\nSonidos:9\nBanda Sonora:10\nGráficos:10",
    valoraFinal: "Ghost Of Tsushima es una apuesta muy acertada por parte de la desarrolladora Suker Punch.Pese a pecar en algunos aspectos del gameplay, el resto del juego lo compensa, dando como resultado en jugo imprescindible si eres jugador de PlayStation.",
    url: "/toem"
  },
  {
    name: "Devil May Cry",
    image: "/images/devil.webp",
    alt: "Devil cover",
    frase: "'El samurái deshonrado'",
    sinopsis: "El juego se remonta al año 1274 en la isla nipona de Tsushima, en plena invasión mongola. Tras fracasar en la defensa y ser uni de los pococs superviviente del ataque enemigo, Jin Sakai deberá dejar de lado su honor como samurái y enfrentarse al ejército mongol para liberar su hogar.",
    puntosPos: "Historia muy buena e inmersiva, muy buenos graficos",
    puntosNeg: "Pesies hasta resulta predecible.",
    valoraApart: "Historia: 9'5\nJugabilidad/Gameplay:7'8\nSonidos:9\nBanda Sonora:10\nGráficos:10",
    valoraFinal: "Ghost Of Tsushima es una apuesta muy acertada por parte de la desarrolladora Suker Punch.Pese a pecar en algunos aspectos del gameplay, el resto del juego lo compensa, dando como resultado en jugo imprescindible si eres jugador de PlayStation.",
    url: "devil"
  }
];

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { image, name, url, alt, frase, sinopsis, puntosPos, puntosNeg, valoraApart, valoraFinal } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="tablet:w-52 desktop:w-[300px] desktop:min-h-[300px] tablet:min-h-56  rounded-lg border-2 hover:border-venetian-red-600 border-[#242424] hover:scale-110 transition-all ease-in-out box-border duration-[400ms]"> <a${addAttribute(`${url}`, "href")}> <div class="w-full h-full bg-cover bg-center rounded-md card"${addAttribute(`background-image: url(${image});`, "style")}></div> </a> </li> <!-- TODO Cuando estás encima de la card que se mustre un outline y el titulo ascienda y por defecto que solo se mire la imagen -->`;
}, "/home/javi/elenemigos2.0/src/components/Card.astro", void 0);

const $$Grid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mt-14 absolute w-full h-auto flex justify-center" data-astro-cid-vc5tsdmu> <ul class="w-full h-auto p-6 flex gap-5 flex-wrap justify-center" id="list_cards" data-astro-cid-vc5tsdmu> ${Cards.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...item, "data-astro-cid-vc5tsdmu": true })}`)} </ul> </section> `;
}, "/home/javi/elenemigos2.0/src/components/Grid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Enemigos!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-full"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Grid", $$Grid, {})} </main> ` })}`;
}, "/home/javi/elenemigos2.0/src/pages/index.astro", void 0);

const $$file = "/home/javi/elenemigos2.0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
