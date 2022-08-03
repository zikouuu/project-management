import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }
}
