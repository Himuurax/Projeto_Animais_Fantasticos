import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tab-nav.js';
import Accordion from './modules/accordion.js';
import initAnimacaoScroll from './modules/animacao.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();


const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
