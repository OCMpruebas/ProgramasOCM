import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-programa-anios',
  templateUrl: './programa-anios.component.html',
  styleUrls: ['./programa-anios.component.css']
})
export class ProgramaAniosComponent implements OnInit {
  DesPro = 'Recogida de residuos';

  constructor() {
    function clearBox(elementID) {
      document.getElementById(elementID).innerHTML = '';
    }
  }


  ngOnInit() {}
}


