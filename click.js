
				angular.module('myApp').controller('myctrl',function($scope) {
						$scope.removeColor = function(x) {
							var removedcolor = $scope.colors.x;
							$scope.colors.splice(removedcolor, 1);
							}
							
							console.log('22222222222222222222222222222222')
						$scope.colors=[{ name:'mango', color:'yellow'},
								{name:'apple', color:'red'},
								{name:'guava', color:'green'},
								{name: 'orange', color:'orange'}];
							});
						


