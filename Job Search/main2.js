const jobs = [
    {
  
      title: "Content Writer",
      image: "https://tse3.mm.bing.net/th?id=OIP.tJyqej7hv7xO8Yy-_qkOTgHaE8&pid=Api&P=0&h=180",
      details:
        "Produce engaging written content for websites, blogs, and social media platforms.",
      openPositions: "5",
      link: "https://in.indeed.com/q-youtube-content-writer-jobs.html?vjk=fb4ec5b40759233b",
    },
  
    {
      title: "Graphic Designer",
      image: "https://tse4.mm.bing.net/th?id=OIP.GU4Idd6TUUiV-kSD5_oVMgHaE7&pid=Api&P=0&h=180",
      details:
        "Create visually appealing designs for branding, marketing materials, and digital media.",
      openPositions: "1",
      link: "https://in.indeed.com/graphic-designer-jobs",
    },
  
    {
      title: "Virtual Assistant",
      image: "https://tse2.mm.bing.net/th?id=OIP.PIMJq-TqZYoVQZhXGSpaWwAAAA&pid=Api&P=0&h=180",
      details:
        "Provide administrative and clerical support remotely to businesses and entrepreneurs.",
      openPositions: "2",
      link: "https://www.upwork.com/freelance-jobs/virtual-assistant/",
    },
    
    {
      title: "Translator",
      image: "https://static.vecteezy.com/system/resources/previews/005/567/686/original/translator-icon-logo-two-squares-and-arrow-translate-symbol-isolated-on-white-background-language-translation-icon-free-vector.jpg",
      details:
        "Translate written or spoken content between languages to facilitate communication",
      openPositions: "1",
      link: "https://translatorpub.com/",
    },
    
    {
      title: "Web Developer",
      image: "https://img.freepik.com/premium-vector/web-developer-logo-template_674356-207.jpg",
      details:
        "Responsible for designing , developing and managing cloud-based infrastructures, applications and services.",
      openPositions: "3",
      link: "https://in.indeed.com/q-Web-Developer-jobs.html",
    },
  
    {
      title: "SEO Specialist",
      image: "https://tse3.explicit.bing.net/th?id=OIP.SBBZdRxnoFqsgDDzMi-o6QHaDQ&pid=Api&P=0&h=180",
      details:
        "Responsible for Teaching data science prototypes, designing ML systems and developing ML Applications",
      openPositions: "3",
      link: "https://www.linkedin.com/authwall?trk=qf&original_referer=https://in.search.yahoo.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fjobs%2Fseo-specialist-jobs",
    },
  
    {
      title: "Copywriter",
      image: "https://www.joomconnect.com/images/JoomConnectICONaVirtualMarketingManager.png",
      details:
        "Craft compelling copy for advertisements, marketing campaigns, and promotional materials.",
      openPositions: "14",
      link: "https://www.upwork.com/freelance-jobs/copywriting/",
    },
    {
      title: "Data Entry Specialist",
      image: "https://tse1.mm.bing.net/th?id=OIP.SoAFlDeFypUeKI6axeOLfwHaEK&pid=Api&P=0&h=180",
      details:
        "Input and manage data accurately and efficiently using various software tools.",
      openPositions: "5",
      link: "https://in.jobrapido.com/Jobs-Data-Entry-jobs-in-Nashik?r=auto&utm_source=yahoo&utm_medium=cpc&utm_campaign=IN_COMBINED_SEARCH&r=auto&utm_agid=756668384&utm_kwid=kwd-8134750529:loc-90&ext=&int=&phy=116075&mt=b&dev=c&net=o&msclkid=46c8072697041cf9d1ef613d756afea5&utm_source=bing&utm_medium=cpc&utm_campaign=IN_COMBINED_SEARCH&utm_term=jobs%20data%20entry%20nashik&utm_content=nashik",
    },
  
    {
      title: "Social Media Marketing",
      image: "https://tse1.mm.bing.net/th?id=OIP.iGCUiwXSkxRzoQBNxgx1vgEsDI&pid=Api&P=0&h=180",
      details:
        "Responsible to develop and implement social media strategies to increase brand awareness and drive engagements",
      openPositions: "4",
      link: "https://in.linkedin.com/jobs/social-media-marketing-jobs?position=1&pageNum=0",
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
  const resultCount = document.querySelector(".result-count");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Freelancing`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Freelancing Positions`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
    let count = 0;
  
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
      // Add onclick attribute to open link in new tab
    detailsBtn.onclick = () => {
      window.open(job.link, '_blank');
    };

  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        count++;
  
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
      resultCount.innerHTML = `<strong>Related job cards:</strong> ${count}`;
    } else {
      resultCount.textContent = ""; // Clear count if no search term entered
    }
  };
  
  createJobListingCards(); // Initial call to populate job listings
  
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

