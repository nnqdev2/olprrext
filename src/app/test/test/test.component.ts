import { Component, OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // directives: [
  //   TabComponent,
  //   TabsComponent
  // ]
})
export class TestComponent  {

  logs: string[] = [];

  log(selectedTab: Tab) {
    this.logs.push('Selected Tab with title: ' + selectedTab.tabTitle);
  }
}


