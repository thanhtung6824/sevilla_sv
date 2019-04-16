(function () {
    angular.module('sevillaApp')
        .controller('productsController', productsController);

    productsController.$inject = ['$scope', '$timeout', '$http'];

    function productsController($scope, $timeout, $http) {
        $scope.currentPage = 1;
        $scope.pageSize = 9;
        $scope.typeOfProduct = 'beptu1';
        $scope.typeOfSale = 'new';
        $scope.filter = {
            typeOfProduct: $scope.typeOfProduct,
            typeOfSale: $scope.typeOfSale
        };

        $timeout(() => {
            $('.bepdientu').trigger('click');

        }, 1);

        $scope.init = () => {
            console.log($scope.productsAll)
            // $scope.filterProduct($scope.filter)
            console.log($scope.productsAll)

            console.log($scope.products)

            // $scope.filterProduct($scope.filter)
        };

        $scope.filterProduct = (filter) => {
            $scope.products = $scope.productsAll.filter(function (item) {
                for (var key in filter) {
                    if (item[key] !== filter[key])
                        return false;
                }
                return true;
            });
        };

        $scope.changeProducts = (typeOfProduct, typeOfSale) => {
            if (typeOfSale) {
                $scope.filter.typeOfSale = typeOfSale;
                $scope.typeOfSale = typeOfSale;
            }
            if (typeOfProduct) {
                $scope.typeOfProduct = typeOfProduct
                $scope.filter.typeOfProduct = typeOfProduct;
            }
            console.log($scope.typeOfProduct)
            $scope.filterProduct($scope.filter)
        }
    }

    angular.module('sevillaApp')
        .directive('checkImage', function($http) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                attrs.$observe('ngSrc', function(ngSrc) {
                    $http.get(ngSrc).success(function(){
                        alert('image exist');
                    }).error(function(){
                        alert('image not exist');
                        element.attr('src', '/assets/image/pic-01.jpg'); // set default image
                    });
                });
            }
        };
    });

})();
