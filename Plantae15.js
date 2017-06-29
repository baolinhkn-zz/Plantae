var geojson;
var origjson;

$( document ).ready(function() {
	 var URL = "1KeL9DckV1kz7V8439rFMIE9l50VhllF9edYxkyJ316Y";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } );
    //plants = convertToGeoJSON(data);
    //console.log(plants);
    //document.getElementById("#target").innerHTML = plants;


	/*$("#button").click(function() {
		  	document.getElementById("mygarden").innerHTML = descriptions[0];
		});*/
	});

function convertToGeoJSON(data) {
    origjson = data;
    plants = [];
    descriptions = [];
    images=[];
    care = [];
    url = [];
    for(i = 0; i < data.length; i++) {
        /*plant = { type: data[i]["name"],             
        properties: {
                    description: data[i]["desc"],
                    instructions: data[i]["instr"]
                },
        }*/
        plant=data[i]["name"];
        desc = data[i]["desc"];
        img = data[i]["img"];
        imageurl = data[i]["imgurl"];
        cre = data[i]["care"];
        plants.push(plant);
        descriptions.push(desc);
        images.push(img);
        url.push(imageurl);
        care.push(cre);

    };
    //console.log(plants);
    ListofPlants(plants, descriptions, images, url);
};
//makes list of plants on plant directory
function ListofPlants(array) {
	//var theList = document.getElementById("#list").innerHTML;
	for(i=0; i<array.length; i++){
		//console.log(array[i]);
		//document.write(array[i]);
		$("#target ul").append('<li onmouseover = display(id) id = ' + array[i] + '>' + array[i] + '</li>');
    }
};
//creates list of image urls to be used
imgs = []
//changes my plants page when add to my plants is clicked
function myFunction(){  
    if (document.getElementById('desc').innerHTML == descriptions[0] + images[0] + care[0]){
        $("#mygarden dl").append('<dt> Tomato </dt> <dd>' + '-' + descriptions [0] + images[0] + '</dd>');
        imgs[0] = url[0];
    };
    if (document.getElementById('desc').innerHTML == descriptions[1] + images[1] + care[1]){
        $("#mygarden dl").append('<dt> Apple </dt> <dd>' + '-' + descriptions [1] + images[1] + '</dd>');
        imgs[1] = url[1];
    };
    if (document.getElementById('desc').innerHTML == descriptions[2] + images[2] + care[2]){
        $("#mygarden dl").append('<dt> Carrot </dt> <dd>' + '-' + descriptions [2] + images[2] + '</dd>');
        imgs[2] = url[2];
    };
    if (document.getElementById('desc').innerHTML == descriptions[3] + images[3] + care[3]){
        $("#mygarden dl").append('<dt> Onion </dt> <dd>' + '-' + descriptions [3] + images[3] +'</dd>');
        imgs[3] = url[3];
    };
    if (document.getElementById('desc').innerHTML == descriptions[4] + images[4] + care[4]){
        $("#mygarden dl").append('<dt> Eggplant </dt> <dd>' + '-' + descriptions [4] + images[4] +'</dd>');
        imgs[4] = url[4];
    };
    if (document.getElementById('desc').innerHTML == descriptions[5] + images[5] + care[5]){
        $("#mygarden dl").append('<dt> Brocolli </dt> <dd>' + '-' + descriptions [5] + images[5] +'</dd>');
        imgs[5] = url[5];
    };
    if (document.getElementById('desc').innerHTML == descriptions[6] + images[6] + care[6]){
        $("#mygarden dl").append('<dt> Potato </dt> <dd>' + '-' + descriptions [6] + images[6] +'</dd>');
        imgs[6] = url[6];
    };
    if (document.getElementById('desc').innerHTML == descriptions[7] + images[7] + care[7]){
        $("#mygarden dl").append('<dt> Peas </dt> <dd>' + '-' + descriptions [7] + images[7] +'</dd>');
        imgs[7] = url[7];
    };
    if (document.getElementById('desc').innerHTML == descriptions[8] + images[8] + care[8]){
        $("#mygarden dl").append('<dt> Corn </dt> <dd>' + '-' + descriptions [8] + images[8] +'</dd>');
        imgs[8] = url[8];
    };
    if (document.getElementById('desc').innerHTML == descriptions[9] + images[9] + care[9]){
        $("#mygarden dl").append('<dt> Pumpkin </dt> <dd>' + '-' + descriptions [9] + images[9] +'</dd>');
        imgs[9] = url[9];
    };
    console.log(imgs);
    createSlideshow(imgs);
};

//changes desc display when name of plant is hovered over
function display(id){
	if (id == "Tomato"){
		document.getElementById('desc').innerHTML = descriptions[0] + images[0] + care[0];
	}
	if (id == "Apple"){
		document.getElementById('desc').innerHTML = descriptions[1] + images[1] + care[1];
	}
    if (id == "Carrot"){
        document.getElementById('desc').innerHTML = descriptions[2] + images[2] + care[2];
    }
    if (id == "Onion"){
        document.getElementById('desc').innerHTML = descriptions[3] + images[3] + care[3];
    }
    if (id == "Eggplant"){
        document.getElementById('desc').innerHTML = descriptions[4] + images[4] + care[4];
    }
    if (id == "Brocolli"){
        document.getElementById('desc').innerHTML = descriptions[5] + images[5] + care[5];
    }
    if (id == "Potato"){
        document.getElementById('desc').innerHTML = descriptions[6] + images[6] + care[6];
    }
     if (id == "Peas"){
        document.getElementById('desc').innerHTML = descriptions[7] + images[7] + care[7];
    }
     if (id == "Corn"){
        document.getElementById('desc').innerHTML = descriptions[8] + images[8] + care[8];
    }
    if (id == "Pumpkin"){
        document.getElementById('desc').innerHTML = descriptions[9] + images[9] + care[9];
    }
}

//sets image sources
function createSlideshow(imgs){
    for (var i = 0; i < 10; i++){
        if (typeof imgs[i] == 'undefined' && imgs[i] == null){
            imgs[i] = "addmore.png";
        }
    }
    img1 = new Image ()
    img1.src = imgs[0]
    img2 = new Image ()
    img2.src = imgs[1]
    img3 = new Image ()
    img3.src = imgs[2]
    img4 = new Image ()
    img4.src = imgs[3] 
    img5 = new Image ()
    img5.src = imgs[4]
    img6 = new Image ()
    img6.src = imgs[5]
    img7 = new Image ()
    img7.src = imgs[6]
    img8 = new Image ()
    img8.src = imgs[7] 
    img9 = new Image ()
    img9.src = imgs[8]
    img10 = new Image ()
    img10.src = imgs[9]
}

num = 1

//starts slideshow
function slideshowUp(num)
{
num=num+1
if (num==10)
{num=1}
document.mypic.src=eval("img"+num+".src")
var timeout = setInterval(function(){
    num=num+1
    if (num==11)
    {num=1}
    document.mypic.src=eval("img"+num+".src")
        ;
      }, 500);
}

/*function uniqueCheck(lst){
    for (var i = 0; i < lst.length; i++){
        for (var j = 0; j < lst.length; i++){
            if (lst[i] == lst[j] && i!= j){
                alert("You've already added this plant!")
            }
        }
    }
    alert
}*/
