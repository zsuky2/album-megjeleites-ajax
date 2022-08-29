document.getElementById("btn").addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            var output = "";

            for(var i in data){

                output+= `
                
                    <div class='album'>
                        <p>AlbumId: ${data[i].userId}</p>
                        <p>ID: ${data[i].id}</p>
                        <h3>Title: ${data[i].title}</h3>
                        <p>Body: ${data[i].body}</p>
                    </div>
                
                `;
            }

            document.querySelector(".result").innerHTML = output;

        }
    }

    xhr.send();
})