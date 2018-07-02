angular.module('myapp',[]).controller('myctrl',function($scope) 
{
	$scope.removeColor = function(x) {
	var removedcolor = $scope.colors.indexOf(x);
    $scope.colors.splice(removedcolor, 1);
    };
    $scope.addNewfruit = function() {
        $scope.colors.push({
            name: $scope.new.name,
            color : $scope.new.color,
        });
        $scope.new.name="";
        $scope.new.color="";

    };
$scope.colors=[{ name:'mango', color:'yellow'},
    			{name:'apple', color:'red'},
	    		{name:'guava', color:'green'},
				{name: 'orange', color:'orange'}];
                    });
                