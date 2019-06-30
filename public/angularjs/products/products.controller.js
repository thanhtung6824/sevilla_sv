(function () {
    angular.module('sevillaApp')
        .controller('productsController', productsController);

    productsController.$inject = ['$scope', '$timeout', '$http'];

    function productsController($scope, $timeout, $http) {
        $scope.currentPage = 1;
        $scope.pageSize = 4;
        $scope.typeOfProduct = 'ga2lo';
        $scope.typeOfSale = 'highlight';
        $scope.filter = {
            typeOfProduct: $scope.typeOfProduct,
            typeOfSale: $scope.typeOfSale
        };

        $timeout(() => {
            $('.bepgas').trigger('click');

        }, 1);

        $scope.init = () => {
            $scope.filterProduct($scope.filter)
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

        $scope.changeProducts = (e, typeOfProduct, typeOfSale, from) => {
            if (typeOfSale) {
                $scope.filter.typeOfSale = typeOfSale;
                $scope.typeOfSale = typeOfSale;
            }
            if (typeOfProduct) {
                $scope.typeOfProduct = typeOfProduct
                $scope.filter.typeOfProduct = typeOfProduct;
            }
            $scope.filterProduct($scope.filter)
            if (from === 'tab') {
                $('.nav-tabs').find('li').removeClass('active')
                $(e.target).parent().addClass('active')
            }
        }
    }

    angular.module('sevillaApp')
        .directive('checkImage', function ($http) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    attrs.$observe('ngSrc', function (ngSrc) {
                        $http.get(ngSrc).success(function () {
                            alert('image exist');
                        }).error(function () {
                            alert('image not exist');
                            element.attr('src', '/assets/image/pic-01.jpg'); // set default image
                        });
                    });
                }
            };
        });

})();
