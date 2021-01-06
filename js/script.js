console.log('test');
 $('#retrieveData').on("click", handleGetData)
  function handleGetData(event){
	event.preventDefault();

  // Load in the value of the search textbox:
  const tickerVal = $("#ticker").val()
console.log (tickerVal);
var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?region=US&symbol=${tickerVal}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "de8ce92fe7mshac52192236134f6p16f83bjsn84aa9bfa8d10"
	}}
	$.ajax(settings).done(function (response) {
		$("#close").text(response.prices[0].close)
        //$("#date").text(response.prices[0].date)
        $("#high").text(response.prices[0].high)
		$("#low").text(response.prices[0].low)
		$("#open").text(response.prices[0].open)
		console.log(tickerVal);
		console.log(response);
	});
    
}
