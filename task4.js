const content = document.getElementById("content");

const courseList = [
  { id: "1", title: "React for Beginners", progress: 60, video: "https://www.youtube.com/embed/dGcsHMXbSOA" },
  { id: "2", title: "Advanced JavaScript", progress: 30, video: "https://www.youtube.com/embed/PoRJizFvM7s" },
  { id: "3", title: "Data Structures in C++", progress: 80, video: "https://www.youtube.com/embed/B31LgI4Y4DQ" },
];

function navigate(page, id = null) {
  content.classList.remove("fade-in");
  setTimeout(() => {
    if (page === "home") renderHome();
    else if (page === "courses") renderCourses();
    else if (page === "course") renderCourseDetail(id);
    content.classList.add("fade-in");
  }, 100);
}

function renderHome() {
  content.innerHTML = `
    <div class="page">
      <h2>Welcome to E-Learn</h2>
      <p>Boost your knowledge with interactive, high-quality online courses. Track progress, watch videos, and learn at your own pace.</p>
    </div>
  `;
}

function renderCourses() {
  content.innerHTML = `
    <div class="page">
      <h2>Available Courses</h2>
      ${courseList.map(course => `
        <div class="course-card">
          <h3>${course.title}</h3>
          <div class="progress-bar">
            <div class="progress" style="width: ${course.progress}%"></div>
          </div>
          <button onclick="navigate('course', '${course.id}')">Go to Course</button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderCourseDetail(id) {
  const course = courseList.find(c => c.id === id);
  content.innerHTML = `
    <div class="page">
      <h2>${course.title}</h2>
      <p><strong>Progress:</strong> ${course.progress}% completed</p>
      <div class="video-container">
        <iframe
          src="${course.video}"
          title="${course.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <button onclick="navigate('courses')">Back to Courses</button>
    </div>
  `;
}

// Load home on first load
navigate("home");
