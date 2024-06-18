import {Component, OnInit} from '@angular/core';
import {VisibilityComponentsService} from "./services/visibility.components.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'torneos-elite';
  showNav: boolean = true;
  showFooter: boolean = true;

  constructor(private visibilityComponentsService: VisibilityComponentsService) {}

  ngOnInit(): void {
    this.visibilityComponentsService.showNav$.subscribe(
      isVisible => this.showNav = isVisible
    );

    this.visibilityComponentsService.showFooter$.subscribe(
      isVisible => this.showFooter = isVisible
    );
  }
}
