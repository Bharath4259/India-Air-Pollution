
var majaor_cities_data_url = `data?_format=json&year=2015&_by=state&_by=location&_c=so2|mean&_c=no2|mean&_c=rspm|mean&_c=spm|mean&_sort=rspm|mean`;

console.log("--> ")

$.get(majaor_cities_data_url, function (resp) {
    console.log(resp)
    $(".cities_list").template({ data: resp.reverse() })
})


