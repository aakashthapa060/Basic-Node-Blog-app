const container = document.querySelector(".container");


const customElementCreator = (name, className) => {
    let el = document.createElement(name);
    el.className = className;
    return el;
}

const elementCreator = (data) => {
    let card = customElementCreator("div","card");
    let card_header = customElementCreator("div", "card-header");
    let card_body =customElementCreator("div", "card-body");
    let card_title =customElementCreator("h5", "card-title");
    let card_text = customElementCreator("p", "card-text");
    card.style.marginBottom = "30px"; 
    card_header.innerHTML = data.user;
    card_title.innerHTML = data.title;
    card_text.innerHTML = data.content;
    card.appendChild(card_header);
    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    container.appendChild(card);
}
const dataAppender = (data) => {
    for(let i = 0; i < data.length; i++){
        elementCreator(data.data[i]);
    }
}

const getBlogs = async() => {
    try {
        const response = await fetch("/api/blogs/");
        const data = await response.json();
        const blogs = {
            length: data.blogs.length,
            data: data.blogs
        }
        console.log(data)
        dataAppender(blogs);
    } catch (e) {
        console.log(e)
    }
}

getBlogs()
