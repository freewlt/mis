// import { Menu } from "electron";
const remote = require('@electron/remote/main');
const { Menu } =require('electron');
// import { Menu } from 'electron';

// remote.initialize();

const menuContextTemplate = [
    {
        label: '复制',
        role: 'copy'
    },
    {
        label: '粘贴',
        role: 'paste'
    },
    { type: 'separator' }, //分割线
    {
        label: '其他功能',
        click: () => {
            console.log('click')
        }
    }
];

var menuBuilder = Menu.buildFromTemplate(menuContextTemplate);
window.onload = () => {
    window.addEventListener('contextmenu', e => {
        alert(12);
        e.preventDefault();
        menuBuilder.popup({window: remote.getCurrentWindow()});
    }, false);
}

