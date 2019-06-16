import ToolTip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import './styles/tooltip.css';
import './styles/dropdown.css';

// create a tooltip
const tooltip = new ToolTip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
