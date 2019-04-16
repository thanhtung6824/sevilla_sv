(function () {
    angular.module('sevillaApp')
        .controller('productController', productController);

    productController.$inject = ['$scope'];

    function productController($scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 9;
        $scope.typeOfProduct = 'beptu2';
        $scope.typeOfSale = 'bestofsale';
        $scope.filter = {
            typeOfProduct: $scope.typeOfProduct,
            typeOfSale: $scope.typeOfSale
        };


        $scope.init = () => {
            console.log($scope.product)
            if ($scope.product.typeOfSale === 'new') {
                $scope.typeOfSaleText = 'SẢN PHẨM MỚI'
            }
            if ($scope.product.typeOfSale === 'highlight') {
                $scope.typeOfSaleText = 'SẢN PHẨM NỔI BẬT'
            }
            if ($scope.product.typeOfSale === 'bestofsale') {
                $scope.typeOfSaleText = 'SẢN PHẨM BÁN CHẠY'
            }

            // $scope.filterProduct($scope.filter)
        };

        $scope.filterProduct = (filter) => {
            $scope.products= $scope.products.filter(function(item) {
                for (var key in filter) {
                    if (item[key] === undefined || item[key] !== filter[key])
                        return false;
                }
                return true;
            });
        };

        $scope.changeProducts = (typeOfProduct, typeOfSale) => {
            if(typeOfSale) {
                $scope.filter.typeOfSale = typeOfSale;
            }
            if (typeOfProduct) {
                $scope.filter.typeOfProduct = typeOfProduct;
            }
            $scope.filterProduct($scope.filter)
        }
    }
})();
