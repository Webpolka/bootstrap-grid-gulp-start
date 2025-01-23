// ----------------------------------------------------- Базовые скрипты --------------------------------------------------------
import { BaseHelpers } from './helpers/base-helpers';
BaseHelpers.addLoadedClass();
BaseHelpers.checkWebpSupport();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();
BaseHelpers.headerFixed();

// ----------------------------------------------------- Menu Header --------------------------------------------------------
import headerNav from './modules/header-nav.js';
headerNav({
  minH: 30,
  maxH: 50,
  logoMinH: 15,
  logoMaxH: 30,
})

import { HoverIntentToggleClass } from './myJsClasses/hover-intent-class.js'
if (document.querySelector('#headerNavigation') && (document.querySelectorAll('.menu>li').length > 1)) {
  new HoverIntentToggleClass(
    '#headerNavigation',           //  родительский контейнер
    '.menu>li',                    //  отслеживаемые елементы в родительском контейнере
    50,                     //  интервал - задержка при наведении курсора
    600,                     //  тайм-аут это задержка при покинутом елементе
  ).init()
}
