import ToolTip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/Tabs';
import Snackbar from './ninja-ui/Snackbar';
import './styles/tooltip.css';
import './styles/dropdown.css';
import './styles/tabs.css';
import './styles/snackbar.css';

// create a tooltip
const tooltip = new ToolTip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => snackbar.show("here's your snackbar"));
