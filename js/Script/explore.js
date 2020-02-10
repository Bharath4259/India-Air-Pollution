
var get_urls = {
    all_data: (city) => { return `data?_by=location&_by=year&_c=so2|mean&_c=no2|mean&_c=rspm|mean&_c=spm|mean&_sort=-year&location=${city}`; }
};

var city_name = 'Allahabad'
$.get(get_urls.all_data(city_name), function(resp) {
  console.log(resp);
    $("#city_overview_template")
        .on('template', function (template_resp) {
            data = template_resp.templatedata.data
            console.log("> ", data)
        })
        .template({ city_name: city_name, data: resp });
});
