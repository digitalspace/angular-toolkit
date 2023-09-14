import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'demonstrator',
  templateUrl: './demonstrator.component.html',
  styleUrls: ['./demonstrator.component.scss']
})
export class DemonstratorComponent implements OnInit{
  @Input() tsFile: string = '';
  @Input() htmlFile: string = '';
  @Input() cssFile: string = '';
  @Input() headerText: string = '';
  @Input() description: string = '';
  @Input() control;

  ngOnInit() {
    // clip the monitor
    if (this.htmlFile.indexOf('<monitor') > -1) {
      this.htmlFile = this.htmlFile.substring(0, this.htmlFile.indexOf('<monitor'))
    }
  }

}
