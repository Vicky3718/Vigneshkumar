<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <div class="container">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home" class="section">
    <div class="container">
      <h2>Hi, I'm VIGNESHKUMAR K</h2>
      <p>Web Developer </p>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <h2>About Me</h2>
      <p>I’m a web developer with a passion for creating beautiful and functional websites.</p>
    </div>
  </section>

  <section id="projects" class="section">
    <div class="container">
      <h2>Projects</h2>
      <div class="project-list">
        <div class="project-card">
          <h3>Perfume</h3>
          <p>Fragrance Bliss is a modern and elegant perfume e-commerce website designed to showcase a variety of luxury scents. The project features a clean UI, product filtering by notes and brands, and a responsive layout. It highlights product details with captivating imagery, scent descriptions, and customer reviews. The goal was to create a visually appealing experience that matches the premium quality of the perfumes.</p>
        </div>
        
        
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <h2>Contact Me</h2>
      <p>Email: vigneshkumark784@gmail.com</p>
      <p>LinkedIn: <a href="#">https://www.linkedin.com/in/vigneshkumar-k-4536a1356</a></p>
      <p>Contact No: 6382813486</p>
    </div>
  </section>

  

</body>
</html>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: hsl(180, 3%, 17%);
  color: #ffffff;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

header {
  background: #03a79c;
  color: hsl(0, 0%, 100%);
  padding: 20px 0;
}

header h1 {
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 10px;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.section {
  padding: 40px 0;
}

.project-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.project-card {
  background: #04b5a6;
  padding: 20px;
  flex: 1 1 calc(50% - 20px);
  border: 1px solid #ddd;
  border-radius: 8px;
}

footer {
  text-align: center;
  background: #333;
  color: #fff;
  padding: 20px 0;
  margin-top: 40px;
}

