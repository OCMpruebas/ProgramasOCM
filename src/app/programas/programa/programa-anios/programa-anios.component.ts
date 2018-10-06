import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// href='https://github.com/ng-select/ng-select'>Open in Github</a></small></h1>
// npm install --save @ng-select/ng-select

declare var $: any;



/* $(document).ready(function() {
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
      }); */

@Component({
  selector: 'app-programa-anios',
  templateUrl: './programa-anios.component.html',
  styleUrls: ['./programa-anios.component.css']
})
export class ProgramaAniosComponent implements OnInit {
  DesPro = 'Recogida de residuos';

  datos;

opcionSeleccionada: string = '0';
verSeleccion: string = '';

  /*
usuario: Object = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    correo: 'corre@gmail.com',
    pais: 'ESP',
    sexo: 'Hombre',
    acepta: true
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  }];

  sexos: string[] = ['Hombre', ' Mujer', 'Otro'];

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
 */


  constructor() {
    // function clearBox(elementID) {
    //   document.getElementById(elementID).innerHTML = '';
    // NgForm

    // this.datos = [1,2,3,4,5,6,7,8,9,10];
    this.datos = [
      'Actividades y promoción turística',
      'Actividades y promoción turística externa',
      'Administración general de la seguridad y protección civil',
      'Administración General del Area Económica',
      'Administración medio rural',
      'Albergue Municipal (Plan Estrategico Servicios Sociales)',
      'Alcazar-Conjunto Monumental',
      'Almacén y talleres',
      'Alumbrado público',
      'Archivo',
      'Asesoría Jurídica General',
      'Atención a la ciudadanía y modernización administrativa',
      'Ayuda a grupos políticos',
      'Banda de mMusica',
      'Bibliotecas',
      'Caminos rurales',
      'Casa de la Juventud',
      'Cementerio',
      'Centro Dia Mayores ',
      'Centro Dia Mayores Zona Norte',
      'Centro Dia Mayores Zona Sur',
      'Circuito de Jerez',
      'Consejo Económico y Social',
      'Conservación de instalaciones municipales',
      'Conservación y diseño jardines urbanos y periurbanos',
      'Coordinación de Distritos',
      'Coordinación de Entidades Municipales',
      'Coordinación',
      'Desarrollo del medio rural',
      'Deuda pública',
      'Disciplina urbanística',
      'Distrito Centro',
      'Distrito Este',
      'Distrito Noroeste',
      'Distrito Norte',
      'Distrito Oeste',
      'Distrito rural',
      'Distrito Sur',
      'Edificaciones',
      'Escuela de musica',
      'Escuela de negocios',
      'Escuela de tauromaquia',
      'Fiestas populares y festejos',
      'Fiestas populares y festejos Medio Rural',
      'Flamenco',
      'Fondo de Contingencia de Ejecución Presupuestaria',
      'Fondo estatatal para el empleo y sostenibilidad local.',
      'Formación interna',
      'Formacion y proyectos',
      'Funcionamiento de centros docentes de enseñanza preescolar y ',
      'Gestión administrativa de pedanías',
      'Gestión administrativa impulso económico',
      'Gestión del patrimonio',
      'Grupos políticos',
      'Igualdad y Salud (Plan Estrategico Servicios Sociales)',
      'Imagen y diseño',
      'Imprevistos y funciones no clasificadas',
      'Inclusion social y Solidaridad (Plan Estrategico Servicios Sociales)',
      'Iniciativa Urbana Jerez Sur',
      'Inmigracion (Plan Estrategico Servicios Sociales)',
      'Instalaciones y pistas deportivas',
      'Intervención en zona (Plan Estrategico Servicios Sociales)',
      'Licencias urbanísticas',
      'Limpieza viaria',
      'Los Claustros de Santo Domingo',
      'Mantenimiento de dependencias municipales',
      'Mayores',
      'Mejoras nivel educacional estudiantes',
      'Mercados',
      'Montes Propios',
      'Museo Arqueologico',
      'Oficina de proyectos',
      'Oficina del defensor de la ciudadanía',
      'Ordenación del tráfico y del estacionamiento',
      'Ordenación del tráfico y del estacionamiento',
      'Organización de actividades culturales',
      'Otras actuacines relacionadas con medio ambiente. Educación mediambiental',
      'Otras actuaciones de protección de la salubridad pública',
      'Otras actuaciones relacionadas con medio ambiente. Prevención y calidad',
      'Otras prestaciones económicas a favor de empleados',
      'Otros mantenimientos',
      'Parque Móvil',
      'Parque zoológico',
      'Participación ciudadana',
      'Piscinas municipales',
      'Plan contra la Exclusion Social',
      'Plan promocion empleo',
      'Planeamiento y Gestión Urbanística',
      'Planes especiales',
      'Planes Municipale de Ordenación Urbana',
      'Policía Local',
      'Politicas activas de empleo',
      'Prestaciones complementarias (Plan Estrategico Servicios Sociales)',
      'Presupuestos participativos',
      'Prevención de riesgos laborales',
      'Prevencion',
      'Primera atención (Plan Estrategico Servicios Sociales)',
      'Promoción cultural',
      'Promoción cultural juventud',
      'Promoción cultural. Comunicación y publicaciones',
      'Promocion de emprendedores',
      'Promoción turística Ciudad del Vino 2014',
      'Promocion y fomento del deporte',
      'Promoción y gestión de vivienda de protección pública',
      'Protección de la salubridad pública. Profilaxis vectoriales',
      'Protección y mejora del medio ambiente',
      'Recogida de residuos',
      'Secretaría General',
      'Secretaría-Intervención ELA',
      'Servicio de atencion socioeducativa infancia y adolescencia',
      'Servicio de consumo',
      'Servicio de Intervención',
      'Servicio de mayordomía',
      'Servicio de radio y TV municipal',
      'Servicio de Recaudación',
      'Servicio de Tesorería',
      'Servicios centrales de Fomento',
      'Servicios Centrales Gobierno de la Corporación',
      'Servicios Comunitarios de asistencia a personas dependientes',
      'Servicios Generales Administración Central',
      'Servicios Generales Area de la Presidencia',
      'Servicios Generales de Administración de Personal',
      'Servicios generales de Bienestar Social',
      'Servicios Generales de Cultura',
      'Servicios Generales de Deportes',
      'Servicios generales de Educación',
      'Servicios generales de Infraestructura',
      'Servicios Generales de Protección Civil',
      'Servicios Generales de Urbanismo',
      'Servicios Gestión Tributaria e Inspección Fiscal',
      'Servicios Informáticos Internos',
      'Sociedad de la información',
      'Tranferencias a Mancomunidad Bahía de Cádiz',
      'Transferencias a Consorcios',
      'Transferencias a Entidades Locales Autónomas',
      'Transferencias a Entidades Locales territoriales',
      'Transporte colectivo urbano de viajeros',
      'Tratamiento a familias con menores',
      'Tratamiento de residuos urbanos',
      'Unidad de ventanilla empresarial',
      'Vías públicas'
        ];
      }

 capturar() {
      this.verSeleccion = this.opcionSeleccionada;
      initViz(this.verSeleccion, 1);
      initViz(this.verSeleccion, 2);
    }

 /*  guardar( forma: NgForm ) {

    console.log('ngForm ', forma );
    console.log('Valor forma', forma.value  );
    console.log('Usuario', this.usuario );
    console.log('Nombre:', forma.controls['nombre'].value);
    console.log( 'Del Chosen:' + $('#chosen').chosen().find('option:selected' ).text());

    $('#comercial_lista_calc').on('change', function() {
      let selValue = this.value;
      let selStatus = (selValue) ? 'Tiene el valor: ' + selValue : 'Está vacío';
      console.log(selStatus);
    });

    }

  VerNombre( forma: NgForm ) {
    console.log('Usuario', this.usuario );

console.log(forma.controls['nombre'].value);

  } */

  ngOnInit() {
      }
}


