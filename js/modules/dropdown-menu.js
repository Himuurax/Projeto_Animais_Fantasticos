import outsideClick from './outsideclick.js';

export default class DropdownMenu{
    constructor(dropdownMenus) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        // Define touchstart e click como argumento padrão de events caso o usuário não define
        if(this.events === undefined) this.events = ['touchstart', 'click']; 
        else this.events = events;
        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    // Ativa o dropdownmenu e adiciona a função que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.eventCurrentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, events, () => {
            element.classList.remove(this.activeClass);
        });
    }
    
    // Adiciona os eventos ao dropdownmenu e adiciona a função que observa o clique fora dele
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach(menu => {
            this.events.forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    init() {
        if(this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
