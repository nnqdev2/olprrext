import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { Tab } from './tab.interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  // styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, Tab {

  @Input() tabTitle;
  @Input() selected;

  constructor(private tabsComponent: TabsComponent) {}

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}
