// $(document).ready(function(){
	
	
	


// const get_Niger_Card = document.querySelector("#niger_card");
// const get_Bolivia_Card = document.querySelector("#bolivia_card");


// function view_Niger_Card(){
	
	// $("#niger_card").css({"display" : "block"});
	// $("#bolivia_card").css({"display" : "none"});
	// get_Niger_Card.classList.add("animate_country_card");
	
// }

// function close_Niger_Card(){
	
	// $("#niger_card").css({"display" : "none"});
	
// }


// $("#nigeria_node").toggle(view_Niger_Card, close_Niger_Card);

// function view_Bolivia_Card(){
	
	// $("#bolivia_card").css({"display" : "block"});
	// $("#niger_card").css({"display" : "none"});
	// get_Bolivia_Card.classList.add("animate_country_card");
	
	
// }

// function close_Bolivia_Card(){
	
	// $("#bolivia_card").css({"display" : "none"});
	
// }

// $("#bolivia_node").toggle(view_Bolivia_Card, close_Bolivia_Card);


// });


$(document).ready(function () {

  let activeCard = null;

  function showCard(card) {
    $('.country_card').hide().removeClass('animate_country_card');
    card.show().addClass('animate_country_card');
    activeCard = card.attr('id');
  }

  function toggleCard(card) {
    if (activeCard === card.attr('id')) {
      card.hide();
      activeCard = null;
    } else {
      showCard(card);
    }
  }
  
  
  $('#nerve_node').on('click', function () {
    toggleCard($('#ny_card'));
  });
  

  $('#nigeria_node').on('click', function () {
    toggleCard($('#niger_card'));
  });

  $('#bolivia_node').on('click', function () {
    toggleCard($('#bolivia_card'));
  });
  
  
   $('#ghana_node').on('click', function () {
    toggleCard($('#ghana_card'));
  });


   $('#libya_node').on('click', function () {
    toggleCard($('#libya_card'));
  });

   $('#sierra_node').on('click', function () {
    toggleCard($('#sierra_card'));
  });

   $('#liberia_node').on('click', function () {
    toggleCard($('#liberia_card'));
  });
  
  $('#guinea_node').on('click', function () {
    toggleCard($('#guinea_card'));
  });


  $('#somalia_node').on('click', function () {
    toggleCard($('#somalia_card'));
  });
  
  $('#pretoria_node').on('click', function () {
    toggleCard($('#pretoria_card'));
  });  
  
  $('#jordan_node').on('click', function () {
    toggleCard($('#jordan_card'));
  });

  $('#kenya_node').on('click', function () {
    toggleCard($('#kenya_card'));
  });

  $('#zambia_node').on('click', function () {
    toggleCard($('#zambia_card'));
  });

  $('#drc_node').on('click', function () {
    toggleCard($('#drc_card'));
  });

  $('#chile_node').on('click', function () {
    toggleCard($('#chile_card'));
  });
  
  $('#indonesia_node').on('click', function () {
    toggleCard($('#indonesia_card'));
  });

  $('#malaysia_node').on('click', function () {
    toggleCard($('#malaysia_card'));
  });
  
  $('#mali_node').on('click', function () {
    toggleCard($('#mali_card'));
  });
  
   $('#eritrea_node').on('click', function () {
    toggleCard($('#eritrea_card'));
  });

   $('#mozambique_node').on('click', function () {
    toggleCard($('#mozambique_card'));
  }); 

   $('#china_node').on('click', function () {
    toggleCard($('#china_card'));
  }); 

   $('#turkey_node').on('click', function () {
    toggleCard($('#turkey_card'));
  });

   $('#germany_node').on('click', function () {
    toggleCard($('#germany_card'));
  });

   $('#uk_node').on('click', function () {
    toggleCard($('#uk_card'));
  });  
  
  
 
 
  
  

});