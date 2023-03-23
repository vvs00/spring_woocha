$(function(){
	$.ajax({
		url: "/search/getSearchTitle",
		type: "post",
		data: "title="+$("#pageTitle").val(),
		dataType: "json",
		success: function(data) {
			$.each(data, function(index, items){
				//console.log(index, items)
				$('<li/>')
					.append($("<a/>",{class: "search-link", onclick: "location.href='/searchContent?tag="+items+"'"})
						.append($("<div/>",{class: "search-link-box"})
							.append($("<img/>",{src: "/images/search/genre/"+$("#pageTitle").val()+"/"+(index+1)+".png"}))
							.append($("<div/>",{class: "search-link-box_title"})
								.append($("<p/>",{text: items}))
							)
						)
					).appendTo($(".search-grid"))
			});
		},
		error: function(err){
			console.log(err);
		}
	});
});