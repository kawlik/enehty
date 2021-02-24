/*	23.02.2021	*/
/*	*	*	*	*	*	*	*	*	*	*/

const enehty_gelColorData = [{name:"Bílý",hex:"#ffffff"},{name:"Stříbrný",hex:"#dedede"},{name:"Šedá",hex:"#ababab"},{name:"Černá",hex:"#000000"},{name:"Námořnická modrá",hex:"#0c144f"},{name:"Zelený",hex:"#044d15"},{name:"Tyrkysový",hex:"#1b6b84"},{name:"Modrý",hex:"#2e95da"},{name:"Světle modrá",hex:"#a6dce8"},{name:"Smaragd",hex:"#48d1bc"},{name:"Máta",hex:"#aae8d1"},{name:"Růžový",hex:"#fbbdd6"},{name:"Šeřík",hex:"#c1b5d4"},{name:"Levandule",hex:"#9d7ad0"},{name:"Fuchsie",hex:"#c8328c"},{name:"Nachový",hex:"#612d6b"},{name:"Švestka",hex:"#44083c"},{name:"Hnědý",hex:"#4a1400"},{name:"Vínová",hex:"#730933"},{name:"Maroon",hex:"#9f070e"},{name:"Malina",hex:"#b80348"},{name:"Červené",hex:"#db1832"},{name:"Korál",hex:"#f66767"},{name:"Oranžový",hex:"#ed9962"},{name:"Broskev",hex:"#f4a8a8"},{name:"Krémová",hex:"#f4d7c9"},{name:"Nude",hex:"#c39983"},{name:"Khaki",hex:"#9d8f3d"},{name:"Béžový",hex:"#c7a365"},{name:"Zlatý",hex:"#d9c162"},{name:"Žlutá",hex:"#f4ff5e"}];

/*	*	*	*	*	*	*	*	*	*	*/

class enehty_gelColorParser {

    constructor(selector) {

        this.selector = selector;

        this.elem = null;
        this.list = null;

        this.setUp();
    }

    setUp = () => {
        this.elem = document.querySelector(this.selector);
        if(!Boolean(this.elem)) {return 0;}

        this.list = this.elem.querySelector('ul');
        this.elems = [...this.list.querySelectorAll('li')];

        this.elems.forEach(elem => this.addPropperClass(elem));
    }

    addPropperClass = elem => {
        const color = enehty_gelColorData.filter(e => elem.textContent.indexOf(e.name) !== -1);
        if(color.length > 1) {throw new Error('multiple colors to one element')}

        elem.classList.add(`__${color[0].hex.replace('#', '')}`);
    }
}

/*	*	*	*	*	*	*	*	*	*	*/

document.addEventListener('DOMContentLoaded', () => {

    const enehty_parsed = new enehty_gelColorParser('#filter_attribute_14');
    console.log('dupa');
});