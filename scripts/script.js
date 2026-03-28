var left_arrow = document.getElementById("left_arrow");
var right_arrow = document.getElementById("right_arrow");

var page_section = document.getElementById("page_section");
var current_page = 0
var page_list = [
	["cover", "one_page", "/assets/page-assets/cover.jpg", ""],
	["page1_2", "double_page", "/assets/page-assets/page1.jpg", "/assets/page-assets/page2.jpg"],
	["page3_4", "double_page", "/assets/page-assets/page3.png", "/assets/page-assets/page4.png"],
	["page5_6", "double_page", "/assets/page-assets/page5.png", "/assets/page-assets/page6.jpg"]
]

window.onload = function() {
	switchToPage(0);
}

function switchToPage(page_num) {
	var page = page_list[page_num]

	// Hide and show arrows
	if (page_num == 3) {
		right_arrow.style.opacity="0";
	} else {
		right_arrow.style.opacity="100%";
	}

	if (page_num == 0) {
		left_arrow.style.opacity="0";
		right_arrow.style.opacity="0";
	} else {
		left_arrow.style.opacity="100%";
	}	
	
	// Deletes previous page
	page_section.innerHTML = '';
	
	// Add current page
	switch (page[1]) {
		case "one_page":
			page_section.innerHTML = '<a onclick="switchToPage(' + (page_num + 1) +')"><img class="full_page pointer" src="' + page[2] + '" width="567" height="785" loading="eager"></a>';
		break;
		
		case "double_page":
			switch (page_num) {
				case 1: // Pages 1 - 2
					page_section.innerHTML = '<a><img class="left_page" src="' + page[2] + '" width="567" height="785" loading="eager"></a><a><img id="page2_img" class="right_page" src="' + page[3] + '" width="567" height="785" usemap="#page_2_map" loading="eager"></a>';
				break;
				
				case 2: // Pages 3 - 4
					page_section.innerHTML = '<a href="/superjuegos"><img class="left_page pointer" src="' + page[2] + '" width="567" height="785" loading="eager"></a><a href="https://www.youtube.com/playlist?list=PLaes2PpwsLf7C_0dwI4cDvJBb1k6_ksVs"><img class="right_page pointer" src="' + page[3] + '" width="567" height="785" loading="eager"></a>';
				break;
				
				case 3: // Pages 5 - 6
					page_section.innerHTML = '<a href="https://www.youtube.com/playlist?list=PLaes2PpwsLf7m53xem1FKo1alTK-1VfB_"><img class="left_page pointer" src="' + page[2] + '" width="567" height="785" loading="eager"></a><a href="/october"><img class="right_page pointer" src="' + page[3] + '" width="567" height="785" loading="eager"></a>';
				break;
			}
		break;
	}
	
	current_page = page_num;
}

function previousPage() {
	if (current_page != 0) {
		switchToPage(current_page - 1)
	}
}

function nextPage() {
	if (current_page < 3) {
		switchToPage(current_page + 1)
	}
}

// Page 2 buttons
function page2Change(variation) {
	if (current_page == 1) {
		var page2 = document.getElementById("page2_img");
		
		switch (variation) {
			case 0:
				page2.src = "/assets/page-assets/page2.jpg"
			break;
			
			case 1:
				page2.src = "/assets/page-assets/page2_hover_watchlist.jpg"
			break;
			
			case 2:
				page2.src = "/assets/page-assets/page2_hover_work.jpg"
			break;
			
			case 3:
				page2.src = "/assets/page-assets/page2_hover.jpg"
			break;
		}
	}
}