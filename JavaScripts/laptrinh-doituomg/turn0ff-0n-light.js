let Battery = function () {
    this.energy = 0;
    this.setEnergy = function (energy) {
        this.energy = energy;
        this.updateBaterry();
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
            this.updateBaterry();
        }
    };
    this.updateBaterry = function () {
        document.getElementById("baterry").innerHTML = "Pin: "+ this.energy + "%";
    }
};
let flashLamp = function () {
    this.Battery = null;
    this.setBattery = function (Battery) {
        this.Battery = Battery;
    };
    this.getBatteryInfo = function () {
        return this.Battery.getEnergy();
    };
    this.turnOn = function() {
        if (this.Battery.getEnergy() > 0) {
            document.getElementById("den").src = "off.png";
            this.Battery.decreaseEnergy();
        }
    }
    this.turnOff = function() {
        clearInterval(this.timer);
        document.getElementById("den").src = "on.png";
    };
    this.updateLamp = function () {
        if (this.getBatteryInfo() <= 0) {
            this.turnOff();
            alert("Hết pin!");
        }
    };
};
let FlashLamp = new flashLamp();
let congTacBat = false;
let battery1 = new Battery();
battery1.setEnergy(10);
FlashLamp.setBattery(battery1);
battery1.updateBaterry();
function switchoff(){
    congTacBat = !congTacBat;
    updateButton();
    if (congTacBat) {
        FlashLamp.turnOn();
    } else {
        FlashLamp.turnOff();
    }
}
function updateButton() {
    let congtac = document.getElementById("switch");
    if (congTacBat) {
        congtac.src = "switchoff.jpg";
    }else{
        congtac.src = "switchon.jpg";
    }
};
