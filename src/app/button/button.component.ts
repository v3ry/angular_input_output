import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  color : string = 'red'
  @Input()
  radius : boolean = false;
  @Input()
  name = "Valider";

  @Output() dataEmitFromChild: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(): void {
    this.dataEmitFromChild.emit(this.name);
  }

}
