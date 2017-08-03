$(document).ready(function() {
  var thermostat = new Thermostat();
  updatTemperature();

  $('#up').on('click', function() {
    thermostat.up();
    updatTemperature();
  })

  $('#down').click(function() {
    thermostat.down();
    updatTemperature();
  })

  $('#reset').click(function() {
    thermostat.reset();
    updatTemperature();
  })



  function updatTemperature() {
    $('#Current_Temp').text(thermostat._temp)
    $('#Current_Temp').attr('class', thermostat.energyUsage());
  }



})
