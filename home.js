//Variables
const postItem = document.querySelector(".post");
const addPost = document.querySelector(".addPostBtn");
const posts = document.querySelector(".posts");

//Create Posts Store
function PostStore() {
    let poststore = JSON.parse(localStorage.getItem("posts"));
    if (poststore === null) {
        localStorage.setItem("posts", JSON.stringify([]));
        return poststore;
    } else {
        return poststore;
    }
}
PostStore();

//* Add post
function createPost() {
    let poststore = PostStore();
    const postDataValue = postItem.value;

    if (postDataValue.trim().length !== 0) {
        poststore.push(postDataValue);

        localStorage.setItem("todos", JSON.stringify(poststore));

        showPost();
        // deletePost();
        //editPost();
    } else {
        alert("Your don't have any posts")
        return
    }
}



/* displayTodo*/
function showPost() {
    let poststore = PostStore();

    posts.innerHTML = "";

    poststore.forEach(function (post, postid) {
        const singlepost = document.getElementById("singlepost")
        const delbtn = document.createElement("button");
        //const updatebtn = document.createElement("button");

        delbtn.innerHTML = "delete";
        delbtn.className = "btn btn-danger delBtn";

        // updatebtn.innerHTML = "update";
        // updatebtn.className = "btn btn-warning updateBtn";

        singlepost.innerHTML = `<span>${post}</span>`;
        singlepost.appendChild(delbtn);
        //singlepost.appendChild(updatebtn);

        delbtn.className = `btn btn-danger delBtn ${postid} `;

        todos.appendChild(singlepost); //inject each todo within the div of class todos.
    });
}
showPost();
//deleTodo();
//updateTodo();
// inputEl.onchange = createTodo
addPost.onclick = createPost();

function logout() {
    // TODO: destroy token
    window.location.replace("login.html");
}