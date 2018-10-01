import { Component, OnInit } from '@angular/core';
declare var $: any;

jQuery(document).ready(function() {
  console.log('Pagina cargada');
  $('h1').text('Hola desde jquery');
  jQuery.getScript('//kkharvesthq.github.io/chosen/chosen.jquery.js')
    .done(function(script, textStatus) {
      $('.chosen-select').chosen({no_results_text: 'Oops, no se ha encontrado nada!'});
    })
    .fail(function(jqxhr, settings, exception) {
      alert('Error en programa.component.ts');
    });
});

/* jQuery(document).ready(function(){
    jQuery.getScript( "//harvesthq.github.io/chosen/chosen.jquery.js" )
      .done(function( script, textStatus ) {
          jQuery(".chosen1").chosen();
          jQuery(".chosen2").chosen({max_selected_options: 2});
          jQuery(".chosen2").bind("chosen:maxselected", function () {alert("Máximo número de elementos seleccionado")});
          jQuery(".chosen3").chosen({allow_single_deselect: true, disable_search_threshold: 100});
      })
      .fail(function( jqxhr, settings, exception ) {
           alert("Error");
  });

}); */


@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})

// $('.chosen-select').chosen({no_results_text: 'Oops, nothing found!'});
export class ProgramaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
