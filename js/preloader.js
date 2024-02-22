jQuery(document).ready(function () {
    "use strict";
    // Se desvanece la animación con el icono
    if (jQuery('.et-bfb').length <= 0 && jQuery('.et-fb').length <= 0) {
      jQuery(".ov-icon").fadeOut();
      // Posteriormente se desvanece todo el contenedor que cubre la pantalla completa
      jQuery(".ov-preloader").delay(1000).fadeOut("slow");
    } else {
      jQuery(".ov-preloader").css('display', 'none');
    }
  });
  
