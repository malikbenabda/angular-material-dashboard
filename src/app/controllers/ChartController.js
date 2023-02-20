(function () {
    angular
        .module('app')
        .controller('ChartController', [
            ChartController
        ]);

    function ChartController() {
        var vm = this;

        // TODO: move data to the service
        vm.piechartData = [{key: 'Booked', y: 42}, {key: 'free', y: 58}];

        vm.capacityTot = (vm.piechartData[0].y + vm.piechartData[1].y) + " Places";
        // TODO: move data to the service


        // TODO: move data to the service
        vm.visitorsChartData = [{key: 'Mobile', y: 5264}, {key: 'Web', y: 3872}];
        vm.totalUsers = (vm.visitorsChartData[0].y + vm.visitorsChartData[1].y) + " User";


        // TODO: move data to the service
        vm.warningsChartData = warningFunction;

        function warningFunction() {
            var sin = [];
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.abs(Math.cos(i / 10) * 0.25 * i + 0.9 - 0.4 * i)});
            }
            return [{values: sin, color: 'rgb(0, 150, 136)', area: true}];
        }

        /*    vm.chartOptionsWarning = {
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
    */
        vm.chartOptionsVisitors = {
            chart: {
                type: 'pieChart',
                height: 500,
                donut: "true",
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
                title: vm.totalUsers,
                margin: {top: -10}
            }
        };
        vm.piechartOptions = {
            chart: {
                type: 'pieChart',

                height: 500,
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
                title: vm.capacityTot,
                titleOffset: -10,
                margin: {bottom: -80, left: -20, right: -20}
            }
        };

        let today = function (x){ return  new Date(Date.now()+ x*24*3600*1000).toDateString()}
        const data = [{
            "key": "Mobile Payment",
            "color": "#d62728",
            "values": [
                {x: today(0), y:Math.floor(Math.random() * 100)},
                {x: today(1), y: Math.floor(Math.random() * 100)},
                {x: today(2), y: Math.floor(Math.random() * 100)},
                {
                    x: today( 3),
                    y: Math.floor(Math.random() * 100)
                }, {x: today(4 ), y: Math.floor(Math.random() * 100)}, {
                    x: today(5 ),
                    y: Math.floor(Math.random() * 100)
                }, {x: today(6 ), y: Math.floor(Math.random() * 100)}, {
                    x: today(7 ),
                    y: Math.floor(Math.random() * 100)
                }, {x: today( 8), y: Math.floor(Math.random() * 100)}, {x: today( 9), y: Math.floor(Math.random() * 100)}
            ]
        }, {
            "key": "Operator",
            "color": "#1f77b4",
            "values": [
                {x: today( 0), y: Math.floor(Math.random() * 100)},
                {
                    x: today( 1),
                    y: Math.floor(Math.random() * 100)
                }, {x: today( 2), y: Math.floor(Math.random() * 100)}, {
                    x: today(3 ),
                    y: Math.floor(Math.random() * 100)
                }, {x: today( 4), y:Math.floor(Math.random() * 100)}, {
                    x: today( 5),
                    y: Math.floor(Math.random() * 100)
                }, {x: today( 6), y: Math.floor(Math.random() * 100)}, {
                    x: today(7 ),
                    y: Math.floor(Math.random() * 100)
                }, {x: today( 8), y: Math.floor(Math.random() * 100)}, {x: today( 9), y:Math.floor(Math.random() * 100)}]
        }];
        vm.multiBarChartData = data;

        vm.multiBarChartOptions = {
            chart: {
                type: 'multiBarChart',
                height: 500,
                stacked: true,
                //  color : ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: true,
                showLegend: true,
                title: "Revenue By stream",
            }
        };

    }
})();
