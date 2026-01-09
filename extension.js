/*
    Show Apps First - GNOME Shell 46+ extension
    Copyright @fthx 2026 - License GPL v3
*/


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class ShowAppsFirstExtension {
    enable() {
        Main.overview.dash._dashContainer.set_child_at_index(Main.overview.dash.showAppsButton.get_parent(), 0)
    }

    disable() {
        Main.overview.dash._dashContainer.set_child_at_index(Main.overview.dash.showAppsButton.get_parent(), -1)
    }
}
