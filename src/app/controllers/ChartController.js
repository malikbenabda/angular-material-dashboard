(function () {
    angular
        .module('app')
        .controller('ChartController', [
            ChartController
        ]);

    function ChartController() {
        var vm = this;

        // TODO: move data to the service
        vm.piechartData = [{key: 'memory', y: 42}, {key: 'free', y: 58}];
        // TODO: move data to the service

        const data = [{
            "key": "Mobile",
            "color": "#d62728",
            "values": [
                {x: "China", y: 717723466.166},
                {x: "India", y: 647356171.132},
                {x: "United States of America", y: 157464952.272},
                {
                    x: "Indonesia",
                    y: 125682412.393
                }, {x: "Brazil", y: 98578067.1}, {
                    x: "Pakistan",
                    y: 93621293.316
                }, {x: "Nigeria", y: 88370210.605}, {
                    x: "Bangladesh",
                    y: 79237050.772
                }, {x: "Russian Federation", y: 65846330.629}, {x: "Japan", y: 61918921.999}
            ]
        }, {
            "key": "Web",
            "color": "#1f77b4",
            "values": [
                {x: "China", y: 667843070.834},
                {
                    x: "India",
                    y: 604783424.868
                }, {x: "United States of America", y: 162585763.728}, {
                    x: "Indonesia",
                    y: 124183218.607
                }, {x: "Brazil", y: 101783857.9}, {
                    x: "Pakistan",
                    y: 88521300.684
                }, {x: "Nigeria", y: 85245134.395}, {
                    x: "Bangladesh",
                    y: 77357911.228
                }, {x: "Russian Federation", y: 76987358.371}, {x: "Japan", y: 65224655.001}]
        }];


        vm.multiBarChartData = data;


        // TODO: move data to the service
        vm.visitorsChartData = [{key: 'Mobile', y: 5264}, {key: 'Desktop', y: 3872}];


        // TODO: move data to the service
        vm.warningsChartData = warningFunction;

        function warningFunction() {
            var sin = [];
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.abs(Math.cos(i / 10) * 0.25 * i + 0.9 - 0.4 * i)});
            }
            return [{values: sin, color: 'rgb(0, 150, 136)', area: true}];
        }

        vm.chartOptionsWarning = {
            chart: {
                type: 'lineChart',
                height: 210,
                margin: {top: -10, left: -20, right: -20},
                x: function (d) {
                    return d.x
                },
                y: function (d) {
                    return d.y
                },
                showLabels: false,
                showLegend: false,
                title: 'Over 9K',
                showYAxis: false,
                showXAxis: false,
                tooltip: {
                    contentGenerator: function (d) {
                        return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>'
                    }
                }
            }
        };

        vm.chartOptionsVisitors = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753'],
                showLabels: false,
                showLegend: false,
                title: 'Over 9K',
                margin: {top: -10}
            }
        };

        vm.piechartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                pie: {
                    startAngle: function (d) {
                        return d.startAngle / 2 - Math.PI / 2
                    },
                    endAngle: function (d) {
                        return d.endAngle / 2 - Math.PI / 2
                    }
                },
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
                showLabels: false,
                showLegend: false,
                tooltips: false,
                title: '42%',
                titleOffset: -10,
                margin: {bottom: -80, left: -20, right: -20}
            }
        };

        vm.multiBarChartOptions = {
            chart: {
                type: 'multiBarChart',
                height: 500,
                stacked: true,
                //  color : ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: true,
                showLegend: true,
                title: "New Users",
                //margin: { top: -10, left: -20, right: -20 },
                margin: 350
            }
        };

    }
})();
