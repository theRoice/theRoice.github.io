// Fetch the JSON file
fetch('resume.json')
  .then(response => response.json())
  .then(data => {
    populateResume(data);
  })
  .catch(error => console.error('Error loading JSON:', error));

// Populate the resume content
function populateResume(data) {
  document.getElementById('name').textContent = data.name || "Eric Leachman";
  document.getElementById('title').textContent = data.title || "Computer Science and Cyber Security";

  // Populate Education
  const educationList = document.getElementById('education-list');
  educationList.innerHTML = ""; // Clear existing content
  data.education.forEach(edu => {
    const eduDiv = document.createElement('div');
    eduDiv.innerHTML = `
      <h3>${edu.degreeName}</h3>
      <p>${edu.college}, ${edu.city}, ${edu.state}</p>
      <p>${edu.startDate} - ${edu.endDate}</p>
    `;
    educationList.appendChild(eduDiv);
  });

  // Populate Technical Skills
  populateSkills('languages', data.technicalSkills.languages);
  populateSkills('tools', data.technicalSkills.tools);
  populateSkills('frameworks', data.technicalSkills.Frameworks);

  // Populate Work Experience
  const experienceList = document.getElementById('experience-list');
  experienceList.innerHTML = ""; // Clear existing content
  data.workExperience.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.innerHTML = `
      <h3>${job.jobTitle} at ${job.companyName}</h3>
      <p>${job.startDate} - ${job.endDate}, ${job.city}, ${job.state}</p>
      <ul>${job.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>
    `;
    experienceList.appendChild(jobDiv);
  });

  // Populate Services
  const servicesList = document.getElementById('services-list');
  servicesList.innerHTML = ""; // Clear existing content
  data.services.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.innerHTML = `
      <h3>${service.serviceTitle}</h3>
      <p>${service.startDate} - ${service.endDate}</p>
      <ul>${service.serviceResponsibilities.map(res => `<li>${res}</li>`).join('')}</ul>
    `;
    servicesList.appendChild(serviceDiv);
  });

  // Populate Awards
  const awardsList = document.getElementById('awards-list');
  awardsList.innerHTML = ""; // Clear existing content
  data.awards.forEach(award => {
    const awardDiv = document.createElement('div');
    awardDiv.innerHTML = `
      <h3>${award.awardTitle}</h3>
      <p>${award.dateEarned}</p>
      <p>${award.details}</p>
    `;
    awardsList.appendChild(awardDiv);
  });
}

// Helper function to populate skills
function populateSkills(sectionId, skills) {
  const section = document.getElementById(sectionId);
  section.innerHTML = ""; // Clear existing content
  const ul = document.createElement('ul');
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = `${skill.name} - Confidence Level: ${skill.confidenceLevel}`;
    ul.appendChild(li);
  });
  section.appendChild(ul);
}
