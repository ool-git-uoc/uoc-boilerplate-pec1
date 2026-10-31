/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import AOS from "aos";

AOS.init({
  duration: 700,
  easing: "ease-out",
  once: false,
  offset: 100,
  disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
})();
