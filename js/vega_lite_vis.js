var world_map = "js/property_distribution.vg.json";
vegaEmbed('#world_map', world_map, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bubble_chart = "js/bubble_plot_area_rooms_price.vg.json";
vegaEmbed('#bubble_chart', bubble_chart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);