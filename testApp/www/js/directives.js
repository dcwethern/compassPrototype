angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])
.directive("story", function() {
    return {
        restrict: "EA",
        scope: true,
        controller: "StoryController",
    }
})

.directive("page", function() {
    return {
        restrict: "EA",
        scope: true,
        controller: "PageController",
    }
})

.directive("choice", function() {
    return {
        restrict: "EAC",
        controller: "ChoiceController",
    }
})

.directive("event", function() {
    return {
        restrict: "EA",
        // scope: true,
        controller: "EventController",
    }
})

.directive("condition", function() {
    return {
        restrict: "EA",
        controller: "ConditionController",
    }
})

.directive("restart", function() {
    return {
        restrict: "EA",
        scope: true,
        controller: "RestartController",
    }
});
