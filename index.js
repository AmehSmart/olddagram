const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol", 
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainContent = document.getElementById('main-content')
let postEl =""

for (let i = 0; i <posts.length; i ++){
   let post = posts[i]
   postEl += 
   `
        <div class="profile">
         <img src="${post.avatar}" class="avatar" alt="avatar"  >
        <section  >   
                <h2 class="name" id="name">${post.name}</h2>
                <p class="location" >${post.location}</p>
        </section>
        </div>
        <div class="post-features">
            <img src="${post.post}" class="post"  id="like-increment" onclick="incrementLikes(${i})">
            <section class="comment-section" alt="comment section">
            <img src="/images/icon-heart.png" alt="heart icon">
            <img src="/images/icon-comment.png" alt="comment icon">
            <img src="/images/icon-dm.png" alt="direct message icon">
            <p class="likes" >${post.likes} likes</p>
            <p class="comment" id="comment"><span class="username" >${post.username}</span> ${post.comment}</p>
            </section>
          <div>
   `
    
}
mainContent.innerHTML = postEl
// here we are using the index of the post in the array to identify which post's like button was clicked and incrementing the likes for that specific post. After updating the likes, we are re-rendering the entire list of posts to reflect the updated like count.

function incrementLikes(index){
    posts[index].likes += 1
    mainContent.innerHTML = ""
    let postEl =""
    for (let i = 0; i <posts.length; i ++){
        let post = posts[i]
        postEl += 
        `
             <div class="profile">
              <img src="${post.avatar}" class="avatar" >
             <section  >   
                     <h2 class="name" id="name">${post.name}</h2>
                     <p class="location" >${post.location}</p>
             </section>
             </div>
             <div class="post-features">
                 <img src="${post.post}" class="post"  id="like-increment" onclick="incrementLikes(${i})">
                 <section class="comment-section" alt="comment section">
                 <img src="/images/icon-heart.png" alt="heart icon">
                 <img src="/images/icon-comment.png" alt="comment icon">
                 <img src="/images/icon-dm.png" alt="direct message icon">
                 <p class="likes" >${post.likes} likes</p>
                 <p class="comment" id="comment"><span class="username" >${post.username}</span> ${post.comment}</p>
                 </section>
               <div>
        `
         
     }
     mainContent.innerHTML = postEl
}