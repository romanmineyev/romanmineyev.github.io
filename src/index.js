import "normalize.css";
import "./scss/main.ltr.scss";
import "./scss/themes.scss";
import "./scss/blue.scss";
import "./scss/custom.scss";
import imagesLoaded from "imagesloaded";
import SiteState from './js/SiteState';
import Site from './js/Site';

import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

loadSlim(tsParticles).then(() => {
    tsParticles.load({
      id: "tsparticles",
      url: "presets/custom.json",
    });
  });

imagesLoaded('.preloadimage', function() {    
const siteState = new SiteState();
new Site(siteState);
});