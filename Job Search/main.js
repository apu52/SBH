const jobs = [
  {
    title: "Software Engineer",
    image: "https://images.credly.com/images/1e3e36a0-ab85-40f7-802e-006e90211db6/Software_Engineering_GVSU_Badge.png",
    details:
      "Responsible for design, development, testing and maintainance of software applications",
    openPositions: "8",
    link: "https://in.linkedin.com/jobs/software-engineer-jobs?position=1&pageNum=0",
  },

  {
    title: "Security Engineer",
    image: "https://tse1.mm.bing.net/th?id=OIP.Ne2m5kpkMC4M0ha3Eg_e3wHaFS&pid=Api&P=0&h=180",
    details:
      "Responsible to build security systems and monitor security controls to protect the data from cyber attacks.",
    openPositions: "6",
    link: "https://www.linkedin.com/authwall?trk=qf&original_referer=https://in.search.yahoo.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fjobs%2Fsecurity-engineer-jobs",
  },
  
  {
    title: "Project Manager",
    image: "https://w7.pngwing.com/pngs/905/589/png-transparent-project-management-project-manager-project-planning-others-miscellaneous-company-text.png",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "3",
    link: "https://in.linkedin.com/jobs/project-manager-jobs?position=1&pageNum=0",
  },

  {
    title: "Cloud Developer",
    image: "https://static.vecteezy.com/system/resources/previews/006/030/600/original/abstract-cloud-logo-blue-shape-cloud-computing-isolated-on-white-background-usable-for-business-and-technology-logos-flat-logo-design-template-element-vector.jpg",
    details:
      "Responsible for designing , developing and managing cloud-based infrastructures, applications and services.",
    openPositions: "10",
    link: "https://in.linkedin.com/jobs/cloud-developer-jobs?position=1&pageNum=0",
  },

  {
    title: "AI/ML Engineer",
    image: "https://tse1.mm.bing.net/th?id=OIP.7Lw8JJzMIYixYMlWAEr3qgAAAA&pid=Api&P=0&h=180",
    details:
      "Responsible for studying data science prototypes, designing ML systems and developing ML Applications",
    openPositions: "20",
    link: "https://aiml.careers/",
  },

  {
    title: "Digital Marketing Manager",
    image: "https://www.joomconnect.com/images/JoomConnectICONaVirtualMarketingManager.png",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "45",
    link: "https://www.linkedin.com/authwall?trk=qf&original_referer=https://in.linkedin.com/jobs/digital-marketing-jobs&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fjobs%2Fdigital-marketing-jobs%3Foriginal_referer%3Dhttps%253A%252F%252Fin.search.yahoo.com%252F",
  },
  {
    title: "Business Development Executive",
    image: "https://tse1.mm.bing.net/th?id=OIP.SoAFlDeFypUeKI6axeOLfwHaEK&pid=Api&P=0&h=180",
    details:
      "Responsible for engaging with potential partners, presenting and managing product and services.",
    openPositions: "2",
    link: "https://in.indeed.com/business-development-jobs",
  },

  {
    title: "Social Media Marketing",
    image: "https://tse1.mm.bing.net/th?id=OIP.iGCUiwXSkxRzoQBNxgx1vgEsDI&pid=Api&P=0&h=180",
    details:
      "Responsible to develop and implement social media strategies to increase brand awareness and drive engagements",
    openPositions: "5",
    link: "https://in.linkedin.com/jobs/social-media-marketing-jobs",
  },

  {
    title: "Full Stack Developer",
    image: "https://tse3.mm.bing.net/th?id=OIP.JVjUDJPqhMr-GqZWPKPBVwHaEW&pid=Api&P=0&h=180",
    details:
      "Responsible to develop both the frontend and backend projects on some real life problems",
    openPositions: "9",
    link: "https://in.linkedin.com/jobs/full-stack-developer-jobs?position=1&pageNum=0",
  },

  {
    title: "Data Entry Executive",
    image: "https://tse4.mm.bing.net/th?id=OIP.SjGJY_wgAI29UfgihWeAnwHaEK&pid=Api&P=0&h=180",
    details:
      "Responsible for data related work on videoes, audio and image files.",
    openPositions: "2",
    link: "https://in.indeed.com/q-executive-data-entry-jobs.html",
  },

  {
    title: "App Developer",
    image: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6388de389494fb579a27e4ba_app-development-logo-free.png",
    details:
      "Responsible to develop user friendly, low latency and interactive features for stock trading apps",
    openPositions: "3",
    link: "https://in.indeed.com/q-app-developer-jobs.html?vjk=269d3cf56f5054de",
  },

  {
    title: "Regional Sales Manager",
    image: "https://tse3.mm.bing.net/th?id=OIP.72zNZxIVP8XgkkUXQKwJFAHaHa&pid=Api&P=0&h=180",
    details:
      "Responsible to build strong sales and service teams and be a major stakeholder in product evolution",
    openPositions: "15",
    link: "#",
  },
  {
    title: "Data Scientist",
    image: "https://tse2.mm.bing.net/th?id=OIP.FMvBDoSKPl55TBG1e_G6PAHaEo&pid=Api&P=0&h=180",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Product Manager",
    image: "https://miro.medium.com/proxy/1*6ge3gXH51icSvin7oV-4-Q.png",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Sales Representative",
    image: "https://tse3.mm.bing.net/th?id=OIP.CaVsWylavGeX5IICtEvxFQHaGb&pid=Api&P=0&h=180",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },
];


const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");
const resultCount = document.querySelector(".result-count"); // Added

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
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

      let detailsBtn = document.createElement("button");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

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

      count++; // Increment count for each displayed job card
    }
  });

  // Display the count of related job cards if search is performed
  if (searchTerm.trim() !== "") {
    resultCount.textContent = `Related job cards: ${count}`;
  } else {
    resultCount.textContent = ""; 
  }
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
