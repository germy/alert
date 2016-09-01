    var i = 1;
	var num = 1;
    var noOfImages = 3;
    var imgs = document.getElementsByTagName("img");

    function displayImage(dir) {
		if (dir == "left"){
			num = i % noOfImages;			
			imgs[num].style.setProperty("display", "none", null);
			i++;	
			num = i % noOfImages;
			imgs[num].style.setProperty("display", "block", null);			
		}else{
			num = i % noOfImages;				
			imgs[num].style.setProperty("display", "none", null);
			i--;
			num = i % noOfImages;			
			imgs[num].style.setProperty("display", "block", null);
							
			
		}
    }
