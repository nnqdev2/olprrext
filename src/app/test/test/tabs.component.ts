import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  tabs: Tab[] = [];
  @Output() selected = new EventEmitter();

  addTab(tab: Tab) {
    if (!this.tabs.length) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab) {
    this.tabs.map((tabx: Tab) => {
      tabx.selected = false;
    });
    tab.selected = true;
    this.selected.emit({selectedTab: tab});
  }
}
