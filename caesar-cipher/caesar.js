String.prototype.contains = function(it) {
  return this.indexOf(it) !== -1;
};

String.prototype.isUpperCase = function() {
  return this.valueOf() === this.toUpperCase() && this.valueOf() !== this.toLowerCase();
};

String.prototype.isLowerCase = function() {
   return this.valueOf() === this.toLowerCase() && this.valueOf() !== this.toUpperCase();
};


var app = angular.module('CaesarCipherApp', []);

app.controller('CaesarCipherController', function CaesarCipherController($scope, charsFilter) {
  $scope.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $scope.rotation = 13;
  $scope.preserveNonAlphabetChars = true;
  $scope.caseSensitive = false;
  $scope.message = '';

  $scope.code = function(str, rot){

    // when decoding rot is defined, otherwise not
    if(typeof rot === 'undefined'){
      rot = $scope.rotation;
    }

    var mod = rot % $scope.alphabet.length;

    var chars = charsFilter(str);
    
    return chars.reduce(function(previousValue, currentValue, currentIndex, array){

      // char not in alphabet, caseSensitive==true
      if($scope.caseSensitive && !$scope.alphabet.contains(currentValue)){
        return $scope.preserveNonAlphabetChars ? previousValue + currentValue : previousValue;
      }

      // char not in alphabet, caseSensitive==false
      if(!$scope.caseSensitive && !$scope.alphabet.toLowerCase().contains(currentValue.toLowerCase())){
        return $scope.preserveNonAlphabetChars ? previousValue + currentValue : previousValue;
      }
      
      // char in alphabet for sure now
      var position;

      if($scope.caseSensitive){
        position = $scope.alphabet.indexOf(currentValue);
      } else {
        position = $scope.alphabet.toLowerCase().indexOf(currentValue.toLowerCase());
      }

      var alphabetRotated = $scope.alphabet;
      
      if(rot > 0){
        for(var i = 0; i < mod; i++){
          alphabetRotated = alphabetRotated + alphabetRotated[0];
          alphabetRotated = alphabetRotated.substring(1);
        }
      } else {
        for(var i = 0; i > mod; i--){
          alphabetRotated = alphabetRotated[alphabetRotated.length - 1] + alphabetRotated;
          alphabetRotated = alphabetRotated.substring(0, alphabetRotated.length - 1);
        }
      }

      var letter;

      if($scope.caseSensitive){
        letter = alphabetRotated[position];
      } else {
        if(currentValue.isLowerCase()){
          letter = alphabetRotated[position].toLowerCase();
        }
        else if(currentValue.isUpperCase()){
          letter = alphabetRotated[position].toUpperCase();
        }
        else { // neither lower or upper case, e.g. a number, special char, etc.
          letter = alphabetRotated[position];
        }
      }

      return previousValue + letter;      
    }, ''); // initial value
  }

  $scope.decode = function(str){
    return $scope.code(str, -$scope.rotation);
  }
});

app.filter('chars', function(){
  return function(input){
    if (!angular.isString(input)) {
      return;
    }

    return input.split('');
  }
});