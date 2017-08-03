
var Thermostat = function(){
  this._temp = 20;
  this._isPowerSaving = true;
  this.MINIMUM_TEMP = 10
};

Thermostat.prototype.up = function(){
  if (this._temp+1 > this.maxTemp()) {
    throw new Error("Maximum temperature is exceeded!")
  } else {
  this._temp += 1;
  }
};

Thermostat.prototype.down = function(){
  //(this.temp-num > 10) ? (this.temp -= num) : throw new Error("Minimum temperature is 10!");
  if (this._temp-1 <this.MINIMUM_TEMP) {
    throw new Error("Minimum temperature is 10!");
  } else {
    this._temp -= 1;
  };
};

Thermostat.prototype.switchPowerSaving = function(){
  this._isPowerSaving = !this._isPowerSaving;
  this.maxTemp();
};

Thermostat.prototype.maxTemp = function(){
  if (this._isPowerSaving === false) {
   return this._maxTemp = 32;
  } else {
   return this._maxTemp = 25;
  };
};

Thermostat.prototype.reset = function () {
  this._temp = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temp < 18){
    return("low-usage");
  }else if (this._temp < 25) {
    return("medium-usage");
  }else {
    return("high-usage");
  }

};
