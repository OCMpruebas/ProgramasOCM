import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// href='https://github.com/ng-select/ng-select'>Open in Github</a></small></h1>
// npm install --save @ng-select/ng-select

declare var $: any;
declare var initVizPersonal;
declare var initVizPresupuesto;
declare var initVizEjecucion;

@Component({
  selector: 'app-programa-anios',
  templateUrl: './programa-anios.component.html',
  styleUrls: ['./programa-anios.component.css']
})
export class ProgramaAniosComponent implements OnInit {
  datos;
  opcionSeleccionada = '0';
  verSeleccion = '';
  vez = 0;

  constructor() {
    this.datos = [
      'Actividades y promoción turística',
      'Actividades y promoción turística externa',
      'Administración General de la seguridad y protección civil',
      'Administración General del area económica',
      'Administración medio rural',
      'Albergue Municipal (Plan Estrategico Servicios Sociales)',
      'Alcazar-Conjunto Monumental',
      'Almacén y talleres',
      'Alumbrado público',
      'Archivo',
      'Asesoría Jurídica General',
      'Atención a la ciudadanía y modernización administrativa',
      'Ayuda a grupos políticos',
      'Banda de música',
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
      'Distrito Rural',
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
      'Igualdad y salud (Plan Estrategico Servicios Sociales)',
      'Imagen y diseño',
      'Imprevistos y funciones no clasificadas',
      'Inclusion social y solidaridad (Plan Estrategico Servicios Sociales)',
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
      'Movilidad urbana',
      'Museo arqueologico',
      'Oficina de proyectos',
      'Oficina del defensor de la ciudadanía',
      'Ordenación del tráfico y del estacionamiento',
      'Organización de actividades culturales',
      'Otras actuaciones relacionadas con medio ambiente. Educación mediambiental',
      'Otras actuaciones de protección de la salubridad pública',
      'Otras actuaciones relacionadas con medio ambiente. Prevención y calidad',
      'Otras prestaciones económicas a favor de empleados',
      'Otros mantenimientos',
      'Parque móvil',
      'Parque zoológico',
      'Participación ciudadana',
      'Piscinas municipales',
      'Plan contra la exclusion social',
      'Plan promocion empleo',
      'Planeamiento y gestión urbanística',
      'Planes especiales',
      'Planes Municipales de Ordenación Urbana',
      'Policía Local',
      'Politicas activas de empleo',
      'Prestaciones complementarias (Plan Estrategico Servicios Sociales)',
      'Presupuestos participativos',
      'Prevención de riesgos laborales',
      'Prevención',
      'Primera atención (Plan Estrategico Servicios Sociales)',
      'Promoción cultural',
      'Promoción cultural juventud',
      'Promoción cultural. Comunicación y publicaciones',
      'Promoción de emprendedores',
      'Promoción turística Ciudad del Vino 2014',
      'Promoción y fomento del deporte',
      'Promoción y gestión de vivienda de protección pública',
      'Protección de la salubridad pública. Profilaxis vectoriales',
      'Protección y mejora del medio ambiente',
      'Recogida de residuos',
      'Secretaría General',
      'Secretaría-Intervención ELA',
      'Servicio de atencion socioeducativa infancia y adolescencia',
      'Servicio de Consumo',
      'Servicio de Intervención',
      'Servicio de Mayordomía',
      'Servicio de Radio y TV municipal',
      'Servicio de Recaudación',
      'Servicio de Tesorería',
      'Servicios Centrales de Fomento',
      'Servicios Centrales Gobierno de la Corporación (Organos de Gobierno)',
      'Servicios Comunitarios de asistencia a personas dependientes',
      'Servicios Generales Administración Central',
      'Servicios Generales Area de la Presidencia',
      'Servicios Generales de Administración de Personal',
      'Servicios Generales de Bienestar Social',
      'Servicios Generales de Cultura',
      'Servicios Generales de Deportes',
      'Servicios Generales de Educación',
      'Servicios Generales de Infraestructura',
      'Servicios Generales de Protección Civil',
      'Servicios Generales de Urbanismo',
      'Servicios Gestión Tributaria e Inspección Fiscal',
      'Servicios informáticos internos',
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
    console.log('LLega');
    this.verSeleccion = this.opcionSeleccionada;
    this.vez += 1;
    initVizPersonal(this.verSeleccion, this.vez);
    initVizPresupuesto(this.verSeleccion, this.vez);
    initVizEjecucion(this.verSeleccion, this.vez);
  }

  ngOnInit() {
    $(function () {
      // 'use strict';
      console.log('Activa Chosen');
       const configChosen = {
         '.chosen-select'           : {},
      //   '.chosen-select-deselect'  : {allow_single_deselect: true},
      //   '.chosen-select-no-single' : {disable_search_threshold: 10},
      //   '.chosen-select-no-results': {no_results_text: 'Nothing Found'},
      //   '.chosen-select-width'     : {width: '50%'}
      };
      for (let selector in configChosen) {
        $(selector).chosen(configChosen[selector]);
      }
    });

    let vez = 0;
    $('#chosen1').change(function() {
      // console.log($(this).val(), this);
      vez += 1;
      initVizPersonal($(this).val(), vez);
      initVizPresupuesto($(this).val(), vez);
      initVizEjecucion($(this).val(), vez);
      });
    }
}
