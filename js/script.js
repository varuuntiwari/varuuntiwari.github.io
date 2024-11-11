function ThemeChange() {
    let body = document.querySelector('body');
    let theme = document.querySelector('#theme-change');
    let borders = document.getElementsByTagName('header');
    let lines = document.getElementsByTagName('hr');
    if(theme.style.fill === "white") {
        body.style.color = 'rgb(71 85 105)';
        body.style.background = 'rgb(215 215 215)';
        theme.style.fill = "black";
        for(let x of borders) {
            x.style.borderColor = "rgb(71 85 105)";
        }
        for(let x of lines) {
            x.style.color = "rgb(71 85 105)";
        }
    } else {
        body.style.background = 'rgb(28 25 23)';
        body.style.color = 'rgb(202 138 4)';
        theme.style.fill = "white";
        for(let x of borders) {
            x.style.borderColor = "rgb(202 138 4)";
        }
        for(let x of lines) {
            x.style.color = "rgb(202 138 4)";
        }
    }
}

function colorText() {
    let textStyle = document.querySelector('body').style;
    let f = 0.1;
    let i = (Math.random() * 255) + 1;
    textStyle.color = 'rgb(' + parseInt(Math.sin(f*parseFloat(i)+0)*127 + 128)
    + ' ' + parseInt(Math.sin(f*parseFloat(i)+2*Math.PI/3)*127 + 128)
    + ' ' + parseInt(Math.sin(f*parseFloat(i)+4*Math.PI/3)*127 + 128) + ')';
}

// const RickRoll = new Audio("img/rickroll.mp3");
function GoToSource() {
    window.open("https://github.com/varuuntiwari/varuuntiwari.github.io", "_blank");
    /* if (RickRoll.paused) {
        RickRoll.load();
        RickRoll.play();
        window.open("https://github.com/varuuntiwari/varuuntiwari.github.io", "_blank");
    } else {
        RickRoll.pause();
    } */
}

var timer;
function RainbowText() {
    let rainbowicon = document.querySelector('#rainbow-text')
    if(rainbowicon.style.fill === "black") {
        timer = setInterval(colorText, 750);
        rainbowicon.style.fill = "white";
    } else {
        clearInterval(timer);
        rainbowicon.style.fill = "black";
    }
}

var Links = [
    "https://github.com/varuuntiwari/tg-notifier",
    "https://github.com/varuuntiwari/share",
    "https://github.com/varuuntiwari/gomap",
    "https://github.com/varuuntiwari/codechef-downloader",
    "https://github.com/varuuntiwari/shodan-go",
    "https://github.com/varuuntiwari/catch-tor"
]

async function GetRepoInfo(link) {
    let arr = link.split('/');
    let url = `https://api.github.com/repos/${arr[3]}/${arr[4]}`;
    let name = arr[4];
    let desc = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data.description;
    });
    return [name, desc, link];
}

async function LoadProjects() {
    let parent = document.querySelector('#projects');
    for(let link of Links) {
        let data = await GetRepoInfo(link);
        let node = document.createElement("div");
        node.setAttribute("class", "project");
        node.innerHTML = `
                        <a href=${data[2]} noopener target="_blank">
                            <h2>${data[0]}</h2>
                        </a>
                        <main>
                            ${data[1].toLowerCase()}
                        </main>`;
        parent.appendChild(node);
    }
}

var Certificates = [
    {
        "name": "Python for Everybody (Specialization)",
        "desc": "a 6 course specialization through which i mastered advanced concepts in python",
        "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/Z2UJW4XXMH7T"
    },
    {
        "name": "Programming Foundations with JavaScript, HTML and CSS",
        "desc": "took this course to get certified for basics of html css and js",
        "link": "https://www.coursera.org/account/accomplishments/certificate/S3KE9PRK8FR2"
    },
    {
        "name": "Introduction to Psychology",
        "desc": "an introductory course to psychology because i like the subject",
        "link": "https://www.coursera.org/account/accomplishments/certificate/B26CG58XH7YK"
    },
    {
        "name": "Technical Support Fundamentals",
        "desc": "gives an understanding of computers, how things work and troubleshooting problems properly",
        "link": "https://www.coursera.org/account/accomplishments/certificate/KXJKCJS4N24K"
    },
    {
        "name": "Introduction to Git and GitHub",
        "desc": "advanced course on using version control systems and online services like github",
        "link": "https://www.coursera.org/account/accomplishments/certificate/4YY6XAPQKG2A"
    }
    
]

function LoadCertificates() {
    let parent = document.querySelector('#certificates');
    for(let cert of Certificates) {
        let node = document.createElement("div");
        node.setAttribute("class", "certificate");
        node.innerHTML = `
                        <a href=${cert.link} noopener target="_blank"><h2>${cert.name.toLowerCase()}</h2></a>
                        <p>${cert.desc}</p>`;
        parent.appendChild(node);
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}