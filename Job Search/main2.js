const jobs = [
    {
  
      title: "Content Writer",
      image: "https://tse3.mm.bing.net/th?id=OIP.tJyqej7hv7xO8Yy-_qkOTgHaE8&pid=Api&P=0&h=180",
      details:
        "Produce engaging written content for websites, blogs, and social media platforms.",
      openPositions: "5",
      link: "#",
    },
  
    {
      title: "Graphic Designer",
      image: "https://tse4.mm.bing.net/th?id=OIP.GU4Idd6TUUiV-kSD5_oVMgHaE7&pid=Api&P=0&h=180",
      details:
        "Create visually appealing designs for branding, marketing materials, and digital media.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Virtual Assistant",
      image: "https://tse2.mm.bing.net/th?id=OIP.PIMJq-TqZYoVQZhXGSpaWwAAAA&pid=Api&P=0&h=180",
      details:
        "Provide administrative and clerical support remotely to businesses and entrepreneurs.",
      openPositions: "2",
      link: "#",
    },
    
    {
      title: "Translator",
      image: "https://static.vecteezy.com/system/resources/previews/005/567/686/original/translator-icon-logo-two-squares-and-arrow-translate-symbol-isolated-on-white-background-language-translation-icon-free-vector.jpg",
      details:
        "Translate written or spoken content between languages to facilitate communication",
      openPositions: "1",
      link: "#",
    },
    
    {
      title: "Web Developer",
      image: "https://img.freepik.com/premium-vector/web-developer-logo-template_674356-207.jpg",
      details:
        "Responsible for designing , developing and managing cloud-based infrastructures, applications and services.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "SEO Specialist",
      image: "https://tse3.explicit.bing.net/th?id=OIP.SBBZdRxnoFqsgDDzMi-o6QHaDQ&pid=Api&P=0&h=180",
      details:
        "Responsible for Teaching data science prototypes, designing ML systems and developing ML Applications",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Copywriter",
      image: "https://www.joomconnect.com/images/JoomConnectICONaVirtualMarketingManager.png",
      details:
        "Craft compelling copy for advertisements, marketing campaigns, and promotional materials.",
      openPositions: "14",
      link: "#",
    },
    {
      title: "Data Entry Specialist",
      image: "https://tse1.mm.bing.net/th?id=OIP.SoAFlDeFypUeKI6axeOLfwHaEK&pid=Api&P=0&h=180",
      details:
        "Input and manage data accurately and efficiently using various software tools.",
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
      title: "E-commerce Specialist:",
      image: "https://tse3.mm.bing.net/th?id=OIP.JVjUDJPqhMr-GqZWPKPBVwHaEW&pid=Api&P=0&h=180",
      details:
        " Develop and manage online stores, including product listings, inventory management, and customer service.",
      openPositions: "9",
      link: "#",
    },
  


  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Freelancing`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Freelancing Positions`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
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
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  