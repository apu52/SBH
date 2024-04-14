const jobs = [
  {

    title: "Sales Representative",
    image: "https://tse3.mm.bing.net/th?id=OIP.CaVsWylavGeX5IICtEvxFQHaGb&pid=Api&P=0&h=180",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "5",
    link: "https://in.indeed.com/q-sales-representative-l-kolkata,-west-bengal-jobs.html?vjk=2c6b132eef158f06 ",
  },

  {
    title: "Software Engineer",
    image: "https://images.credly.com/images/1e3e36a0-ab85-40f7-802e-006e90211db6/Software_Engineering_GVSU_Badge.png",
    details:
      "Responsible for design, development, testing and maintainance of software applications",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Security management",
    image: "https://tse1.mm.bing.net/th?id=OIP.Ne2m5kpkMC4M0ha3Eg_e3wHaFS&pid=Api&P=0&h=180",
    details:
      "Responsible to build security systems and monitor security controls to protect the data from cyber attacks.",
    openPositions: "2",
    link: "#",
  },
  
  {
    title: "Project Management",
    image: "https://w7.pngwing.com/pngs/905/589/png-transparent-project-management-project-manager-project-planning-others-miscellaneous-company-text.png",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "#",
  },
  
  {
    title: "Cloud Developer",
    image: "https://static.vecteezy.com/system/resources/previews/006/030/600/original/abstract-cloud-logo-blue-shape-cloud-computing-isolated-on-white-background-usable-for-business-and-technology-logos-flat-logo-design-template-element-vector.jpg",
    details:
      "Responsible for designing , developing and managing cloud-based infrastructures, applications and services.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "AI/ML Teacher",
    image: "https://tse1.mm.bing.net/th?id=OIP.7Lw8JJzMIYixYMlWAEr3qgAAAA&pid=Api&P=0&h=180",
    details:
      "Responsible for Teaching data science prototypes, designing ML systems and developing ML Applications",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Digital Marketing",
    image: "https://www.joomconnect.com/images/JoomConnectICONaVirtualMarketingManager.png",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "14",
    link: "#",
  },
  {
    title: "Video Editing",
    image: "https://tse1.mm.bing.net/th?id=OIP.SoAFlDeFypUeKI6axeOLfwHaEK&pid=Api&P=0&h=180",
    details:
      "Responsible for engaging with potential partners, presenting and editing the video content.",
    openPositions: "5",
    link: "#",
  },

  {
    title: "Social Media Marketing",
    image: "https://tse1.mm.bing.net/th?id=OIP.iGCUiwXSkxRzoQBNxgx1vgEsDI&pid=Api&P=0&h=180",
    details:
      "Responsible to develop and implement social media strategies to increase brand awareness and drive engagements",
    openPositions: "4",
    link: "#",
  },

  {
    title: "Full Stack Developer",
    image: "https://tse3.mm.bing.net/th?id=OIP.JVjUDJPqhMr-GqZWPKPBVwHaEW&pid=Api&P=0&h=180",
    details:
      "Responsible to develop both the frontend and backend projects on some real life problems",
    openPositions: "9",
    link: "#",
  },

  {
    title: "Content & E-Commerce Management",
    image: "https://tse4.mm.bing.net/th?id=OIP.SjGJY_wgAI29UfgihWeAnwHaEK&pid=Api&P=0&h=180",
    details:
      "Responsible for content writing and reel production and E-commerce management.",
    openPositions: "2",
    link: "#",
  },

  {
    title: "App Developer",
    image: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6388de389494fb579a27e4ba_app-development-logo-free.png",
    details:
      "Responsible to develop user friendly, low latency and interactive features for stock trading apps",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Regional Sales",
    image: "https://tse3.mm.bing.net/th?id=OIP.72zNZxIVP8XgkkUXQKwJFAHaHa&pid=Api&P=0&h=180",
    details:
      "Responsible to build strong sales and service teams and be a major stakeholder in product evolution",
    openPositions: "15",
    link: "#",
  },
  {
    title: "Camous Ambassador",
    image: "https://tse3.mm.bing.net/th?id=OIP.oUkk4d4tc3E_wkeML0ljngHaDt&pid=Api&P=0&h=180",
    details:
      "Responsible to serve as a brand representative and act as a liaison between the brand and their peers, helping to create awareness.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Product Management",
    image: "https://miro.medium.com/proxy/1*6ge3gXH51icSvin7oV-4-Q.png",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },
  {
    title: "Client Acquisition",
    image: "https://tse4.mm.bing.net/th?id=OIP.vuLRaI0l8axEnsSS8Fs-fQHaH_&pid=Api&P=0&h=180",
    details:
      "Responsible to schedule and follow up on virtual meetings withinterested experts and to maintain a database.",
    openPositions: "15",
    link: "#",
  },
  {
    title: "YouTube Content Writer",
    image: "https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg",
    details:
      "Responsible to make the content for a particular Youtube channel and to keep the records of the data.",
    openPositions: "3",
    link: "#",
  },


];


const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");
const resultCount = document.querySelector(".result-count");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Internship`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Internships`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";
  let count = 0; // Initialize count to 0

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");
      detailsBtn.target = "_blank"; // Set target attribute to _blank

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }
      
      count++; // Increment count for each displayed job card

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      // Add event listeners for screen reader functionality
      jobCard.addEventListener("mouseover", () => {
        jobCard.classList.add("hover-speak")
        speakText(`${job.title}. ${job.details}. There are ${job.openPositions} open positions.`);
      });

      jobCard.addEventListener("mouseleave", () => {
        stopSpeaking();
      });
      jobsContainer.appendChild(jobCard);
    }
  });

  // Display the count of related job cards if search is performed
  if (searchTerm.trim() !== "") {
    resultCount.textContent = `Related job cards: ${count}`;
  } else {
    resultCount.textContent = ""; // Clear count if no search term entered
  }
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});

// accessibility js 
var screenReaderEnabled = false;

function toggleAccessibilityMenu() {
  var menu = document.getElementById("accessibilityMenu");
  menu.classList.toggle("active");
}

function toggleScreenReader() {
  screenReaderEnabled = !screenReaderEnabled;
  var menuButton = document.getElementById("screenReaderButton");
  if (screenReaderEnabled) {
    speakText("Screen reader enabled");
    menuButton.innerText = "Disable Screen Reader";
    document.body.classList.add("screen-reader-enabled");
    setTimeout(toggleAccessibilityMenu, 5000);
  } else {
    speakText("Screen reader disabled");
    menuButton.innerText = "Enable Screen Reader";
    document.body.classList.remove("screen-reader-enabled");
    toggleAccessibilityMenu();
  }
}

function speakText(text) {
  if (screenReaderEnabled) {
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
}

