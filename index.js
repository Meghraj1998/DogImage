var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var dd=document.getElementById("dog-breeds");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    console.log(dogBreeds);
    for (let breed in dogBreeds) {
      //  console.log(breed);
        //dd.innerHTML='<option value="' + breed + '">' + breed + '</option>'
         dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

window.onload=function()
{
    console.log("ojk");
     var x=new  XMLHttpRequest();
      x.open('get', "https://dog.ceo/api/breeds/list/all");
      x.onload=function()
      {

         var obj=JSON.parse(this.responseText);
         var b=obj.message;


        for (let breed in b) {

            dd.append('<option value="'+ breed + '">' + breed + '</option>');
            console.log(breed);
           
        }

      };
      x.send();

         

};


dropdown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (e) {
    e.preventDefault();

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}
