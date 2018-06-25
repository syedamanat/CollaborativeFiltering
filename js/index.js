// $("#data-panel").addClass("animated fadeIn")
// $("#data-panel").removeClass('animated fadeIn')
var payload="";
var movie_titles=[];
var counter=0;
function loadData(){
	$.ajax({
		"url":"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=9378bc82ab3a79da6bc0648feb6ea006&&page=1",
		"method":"GET",
		success:function(result){
			console.log(result)
			payload=result;
			for(var i=0;i<payload.results.length;i++){
				movie_titles.push(payload.results[i].title)
			}
		
		document.getElementById('moviename').innerHTML=payload.results[counter].title;

		}
	});


}
	var ans=[];

function update(id){
	ans.push(id);

	$("#data-panel").removeClass('animated fadeIn')
	$("#data-panel").addClass("animated fadeIn")
	counter++;
	
	document.getElementById('moviename').innerHTML=payload.results[counter].title;

}