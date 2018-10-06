import { Component, OnInit } from '@angular/core';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// href="https://github.com/ng-select/ng-select">Open in Github</a></small></h1>
// npm install --save @ng-select/ng-select


declare var $: any;

$(document).ready(function() {
  console.log('Pagina cargada');
  $('h1').text('Hola desde jquery');
  $.getScript('//harvesthq.github.io/chosen/chosen.jquery.js')
    .done(function(script, textStatus) {
      $('.chosen-select').chosen({no_results_text: 'Oops, no se ha encontrado nada!'});
    })
    .fail(function(jqxhr, settings, exception) {
      alert('Error en programa.component.ts');
    });
});

    $(function () {
      let countryOptions;
     $.getJSON('/assets/data/programas.json', function (result) {
     $.each(result, function (i, programa) {
    // <option value='countrycode'>contryname</option>
    // countryOptions += '<option value =' + country.code + '>' + country.name + '</option>';
    countryOptions += '<option value =' + '>' + programa.DesPro + '</option>';
     $('#country').html(countryOptions);
      });
      });
      });

@Component({
  selector: 'app-programa-anios',
  templateUrl: './programa-anios.component.html',
  styleUrls: ['./programa-anios.component.css']
})
export class ProgramaAniosComponent implements OnInit {
  DesPro = 'Recogida de residuos';

usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];

  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  cities3 = [
    {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
    {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
    {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'}
];




  constructor() {
    function clearBox(elementID) {
      document.getElementById(elementID).innerHTML = '';
    }
  }


  ngOnInit() {
      }
}


