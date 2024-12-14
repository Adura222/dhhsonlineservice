// Georgelockhart.com
const links = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100079559030142" },
];

// Georgelockhart.com
const linksContainer = document.getElementById("links-container");
links.forEach(link => {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank"; // Opens the link in a new tab
  anchor.classList.add("link");
  anchor.textContent = link.name;
  linksContainer.appendChild(anchor);
});

