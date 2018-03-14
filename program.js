var app = angular.module("calculatorApp",[]);
app.controller("calculatorController", function($scope) {
  $scope.inputNumber = "0";
  $scope.displayNumber = $scope.inputNumber;
  $scope.previousNumber = NaN;
  $scope.operator = "";
  $scope.haveDot = false;


  $scope.onePressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "1";

    }else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("1");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.twoPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "2";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("2");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.threePressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "3";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("3");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.fourPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "4";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("4");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.fivePressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "5";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("5");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.sixPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "6";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("6");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.sevenPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "7";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("7");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.eightPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "8";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("8");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.ninePressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "9";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("9");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.zeroPressed = function () {
    if($scope.inputNumber === "0") {
      $scope.inputNumber = "0";

    }
    else if(checkLength()) $scope.inputNumber = $scope.inputNumber.concat("0");
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.dotPressed = function () {
    if(!$scope.haveDot) {
      $scope.inputNumber = $scope.inputNumber.concat(".");
      $scope.haveDot = true;
    }
    $scope.displayNumber = $scope.inputNumber;
  };
  $scope.ACPressed = function () {
    $scope.inputNumber = "0";
    $scope.displayNumber = "0";
    $scope.previousNumber = NaN;
    $scope.haveDot = false;
  };
  $scope.dividePressed = function () {
    if(true) {
      $scope.operator = "/";
      $scope.previousNumber =$scope.displayNumber;

      $scope.haveDot = false;
      $scope.inputNumber = "0";
    }
  };
  $scope.multiplyPressed = function () {
    if(true) {
      $scope.operator = "*";
      $scope.previousNumber =$scope.displayNumber;
      $scope.haveDot = false;
      $scope.inputNumber = "0";
    }
  };

  $scope.minusPressed = function () {
    if(true) {
      $scope.operator = "-";
      $scope.previousNumber =$scope.displayNumber;

      $scope.haveDot = false;
      $scope.inputNumber = "0";
    }
  };
  $scope.plusPressed = function () {
    if(true) {
      $scope.operator = "+";
      $scope.previousNumber =$scope.displayNumber;

      $scope.haveDot = false;
      $scope.inputNumber = "0";
    }
  };

  $scope.calculate = function () {
    if($scope.operator === "/"){
      $scope.displayNumber = parseFloat($scope.previousNumber) / parseFloat($scope.inputNumber);
      $scope.inputNumber = "0";
      $scope.previousNumber = $scope.displayNumber;
      $scope.operator = "";
      $scope.haveDot = false;
    } else if($scope.operator === "*"){
      $scope.displayNumber = parseFloat($scope.previousNumber) * parseFloat($scope.inputNumber);
      $scope.inputNumber = "0";
      $scope.previousNumber = $scope.displayNumber;
      $scope.operator = "";
      $scope.haveDot = false;
    } else if($scope.operator === "-") {
      $scope.displayNumber = parseFloat($scope.previousNumber) - parseFloat($scope.inputNumber);
      $scope.inputNumber = "0";
      $scope.previousNumber = $scope.displayNumber;
      $scope.operator = "";
      $scope.haveDot = false;
    }else if($scope.operator === "+") {
      $scope.displayNumber = parseFloat($scope.previousNumber) + parseFloat($scope.inputNumber);
      $scope.inputNumber = "0";
      $scope.previousNumber = $scope.displayNumber;
      $scope.operator = "";
      $scope.haveDot = false;
    }
  };





  var checkLength = function () {
    if($scope.inputNumber.length>=8)return false;
    return true;
  };



});
