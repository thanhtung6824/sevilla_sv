(function () {
    angular.module('sevillaApp')
        .controller('productsController', productsController);

    productsController.$inject = ['$scope'];

    function productsController($scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 9;
        $scope.products = [
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 90S',
                price: '19.990.000',
                id: '01'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 88S',
                price: '16.990.000',
                id: '02'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 80S',
                price: '13.990.000',
                id: '03'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 75S',
                price: '11.990.000',
                id: '04'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 70D',
                price: '10.990.000',
                id: '05'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 70S',
                price: '10.990.000',
                id: '06'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 60S',
                price: '9.990.000',
                id: '07'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - T 60D',
                price: '9.990.000',
                id: '08'
            },
            {
                name: 'Bếp điện tử cao cấp SEVILLA',
                code: 'SV - M 500T',
                price: '19.990.000',
                id: '09'
            }
        ];


    }
})();
