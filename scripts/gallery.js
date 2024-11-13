const galleryData = {
  members: [
    { src: "/Images/rotaryPeople.png", alt: "Member Image 1" },
    { src: "/Images/rotaryPeople.png", alt: "Member Image 2" },
  ],
  projects: [
    { src: "/Images/rotaryProject.png", alt: "Project Image 1" },
    { src: "/Images/rotaryProject.png", alt: "Project Image 2" },
  ],
  events: [
    { src: "/Images/rotaryEvent1.png", alt: "Event Image 1" },
    { src: "/Images/rotaryEvent2.png", alt: "Event Image 2" },
  ],
  others: [
    { src: "/Images/rotaryOther1.png", alt: "Other Image 1" },
    { src: "/Images/rotaryOther2.png", alt: "Other Image 2" },
  ],
};

// Function to filter the gallery based on category
function filterGallery(category) {
  const galleryContainer = document.getElementById("gallery");
  galleryContainer.innerHTML = ""; // Clear existing images

  // Get the selected category images
  const images = galleryData[category];

  // Create new gallery items and append them
  images.forEach((image) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4 gallery-item";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.className = "img-fluid";

    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);
  });
}

// Initialize with a default category
filterGallery("members");
