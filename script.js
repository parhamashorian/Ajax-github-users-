function LoadUsers() {
    
    let xhttps = new XMLHttpRequest();

    xhttps.open('GET', 'https://api.github.com/users', true);
    xhttps.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);


            for (let i in users) {
                
                let li = document.createElement("li");
                li.className = "list-group-item user-item text-left";
                
                let img = document.createElement("img");
                img.className = "img-circle img-user img-thumbnail";
                img.setAttribute("src", users[i].avatar_url);

                li.append(img);
                // console.log(li);

                let h3 = document.createElement("h3");
                let a = document.createElement("a");
                a.innerText = users[i].login;

                h3.append(a);

                img.after(h3);

                document.querySelector(".list-group").append(li);
            }

            
        }
    }
    xhttps.send();
}

LoadUsers();