// console.log("Yo from the main.js file!");
// document.querySelector("h2").innerText = "Yo Bro, Se fe!";
const section = document.createElement("section");
section.classList.add("featured");

const article = document.createElement("article");
const image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
article.append(image);
const headerThree = document.createElement("h3");
headerThree.innerText = "Stop Planning";
const paragraph = document.createElement("p");
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
const span = document.createElement("span");
const strong = document.createElement("strong");
strong.innerText = "Read Time: 4 Minutes";
span.append(strong);
const page = document.createElement("a");
page.innerHTML(`href="#">Read more...`);

const sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);
const articles = sectionPosts.querySelectorAll("article");
if (article.length >= 2) {
    const firstArticle = article[0];
    const secondArticle = article[1];
    sectionPosts.removeChild(firstArticle);
    sectionPosts.removeChild(secondArticle);
    sectionPosts.prepend(secondArticle);
    sectionPosts.appendChild(firstArticle);
};

const header = document.createElement("header");
header.removeAttribute(`href="#">All Posts`);

// span.innerText.remove("Read Time");

// headerThree.innerText.remove("Stop Planning");

// span.querySelectorAll.remove();

// span.remove(strong);






