import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleado',
  templateUrl: './count-empleado.component.html',
  styleUrls: ['./count-empleado.component.css']
})
export class CountEmpleadoComponent implements OnInit {

  @Input() todos: number = 0; // de padre a hijo
  @Input() femeninos: number = 0; // de padre a hijo
  @Input() masculinos: number = 0; // de padre a hijo
  @Output() countRadioButtonChange = new EventEmitter<String>(); // del hijo al padre

  radioButonSeleccionado: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.todos);
  }

  radioChange():void {
    this.countRadioButtonChange.emit(this.radioButonSeleccionado);
  }

}
