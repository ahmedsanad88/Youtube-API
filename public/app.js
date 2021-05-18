//jshint esversion:8

const checkbox = document.querySelector("#toggle");
const main = document.querySelector("html");

const toggleDarkMode = () => {
    checkbox.checked ? main.classList.add("dark"):main.classList.remove("dark");
};

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

// navbar
const btn = document.querySelector(".manu__btn");
const manu = document.querySelector(".mobile__manu");

const addManu = () => {
    manu.classList.toggle("hidden");
    console.log(manu.className);
};

btn.addEventListener("click", addManu);


// search field.

const search = document.getElementById("search-form");

const inputField = document.getElementById("form_input");

const API_KEY = "ADDING YOUR API KEY";

let video = '';

const load = document.getElementById('loading');

search.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputField.value != '')
    {
        load.classList.remove('hidden');
        const search = inputField.value;
        videoSearch(API_KEY, search, 10);

        inputField.value = '';
    } else{
        document.getElementById("error").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("error").classList.add("hidden");
        }, 3000);
    }
});

async function videoSearch (key, search, maxResults) {
    document.getElementById("videos").innerHTML = '';
       
    await fetch("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search)
    .then((data) => data.json())
    .then((responseJSON) => {
        console.log(responseJSON.items);
        load.classList.add('hidden');
        responseJSON && responseJSON.items.map(item => {
            let URL = "https://www.youtube.com/embed/" + item.id.videoId;

            video = `
            <div class="flex flex-col place-content-center items-center rounded-xl hover:shadow-2xl">
            <iframe class="p-2 w-11/12 md:w-96 rounded-2xl" height="315" src=${URL} frameborder="0" allowfullscreen></iframe>
            <small class="bg-gray-300 p-1 m-1 rounded-md dark:bg-black dark:text-white">${item.snippet.channelTitle}</small>
            <p class="bg-gray-400 text-center md:w-96 p-1 m-1 rounded-md dark:bg-black dark:text-white">${item.snippet.title}</p>
            </div>
            `

            document.getElementById("videos").innerHTML += video;   
        })  
    })
    .catch((error) => alert(error.message));
}
