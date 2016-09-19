angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('depressionScreeningAlgorthmCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('bipolarDisorderScreeningCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('recommendedStepsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('antiDepressionTreatmentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

.controller("StoryController", function($scope, $element) {

  $scope.storyEvents = [];
  $scope.choices = [];
  $scope.pages = [];
  $scope.completedPages = [];
  $scope.decisions = ['intro'];

  // $scope. = function() {
  // console.log("Init story...");
  // }

  // $scope.

  // $scope.init();
})

.controller("PageController", function($scope, $attrs, $element) {

  if ($scope.pages.length) {
    $element.css("display", "none");
  } else {
    $scope.isFirstPage = true;
  }

  var pageName = Object.keys($attrs.$attr);
  if (pageName[0] == "page") pageName.shift();

  $scope.pageName = pageName[0];

  $scope.pages.push(pageName[0]);

  // $scope.isComplete = false;

  $scope.$watch("decisions", function() {
    if ($scope.decisions.indexOf($scope.pageName) > -1) {
      $element.css("display", "block");
    } else if (!$scope.isFirstPage) {
      $element.css("display", "none");
    }
  }, true);
})

.controller("ChoiceController", function($scope, $attrs, $element) {

  var choiceName = Object.keys($attrs.$attr);
  if (choiceName[0] === "choice") choiceName.shift();

  angular.element($element).on("click", function() {
    $scope.completedPages.push($scope.pageName);
    $scope.decisions.push(choiceName[0]);
    $scope.$apply();
  });

  $scope.$watch("pages", function() {
    if ($scope.pages.indexOf(choiceName[0]) == -1) {
      console.error("A choice has no corresponding page,", choiceName[0]);
      $element.css("border", "2px solid red");
      $element.css("pointer-events", "none");
    }
  }, true);

  $scope.$watch("completedPages", function() {
    if ($scope.completedPages.indexOf($scope.pageName) > -1) {
      $element.css("display", "none");
    } else {
      $element.css("display", "inline-block");
    }
  }, true)
})

.controller("RestartController", function($scope, $attrs, $element) {

  angular.element($element).on("click", function() {
    [$scope.storyEvents, $scope.decisions, $scope.completedPages].forEach(function(A) {
      while (A.length > 0) {
        A.pop();
      }
    });

    $scope.$apply();
  });
})


.controller("EventController", function($scope, $attrs) {
  var storyEvent = Object.keys($attrs.$attr);
  var isNegative = false;
  if (storyEvent[0] === "clear") {
    isNegative = true;
    storyEvent.shift();
  };

  var activated = false;

  function activate() {
    if (activated) return;
    activated = true;
    if ($scope.isCondition && !$scope.conditionValid) {
      return;
    };

    console.info("Activating this event", storyEvent, !isNegative);

    if (!isNegative) {
      $scope.storyEvents.push(storyEvent[0]);
    } else {
      var index = $scope.storyEvents.indexOf(storyEvent[0]);
      $scope.storyEvents.splice(index, 1);
    };
  }

  $scope.$watch("decisions", function() {
    if ($scope.decisions.indexOf($scope.pageName) > -1) {
      activate();
    } else {
      activated = false;
    }
  }, true);
})

.controller("ConditionController", function($scope, $element, $attrs) {
  $element.css("display", "none");
  var condition = Object.keys($attrs.$attr);
  var isNegative = false;
  var activated = false;

  $scope.isCondition = true;

  if (condition[0] === "unless" || condition[0] === "not") {
    isNegative = true;
    condition.shift();
  };

  function activate() {
    if (activated) return;
    activated = true;
    if ($scope.storyEvents.indexOf(condition[0]) > -1 && !isNegative) {
      $scope.conditionValid = true;
      $element.css("display", "block");
    } else if ($scope.storyEvents.indexOf(condition[0]) == -1 && isNegative) {
      $scope.conditionValid = true;
      $element.css("display", "block");
    }
  }
  
  $scope.$watch("decisions", function() {
    if ($scope.decisions.indexOf($scope.pageName) > -1) {
      activate();
    } else {
      activated = false;
      $element.css("display", "none");
    }
  }, true);
});
