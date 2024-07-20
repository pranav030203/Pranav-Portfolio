import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Science student with a strong foundation in software development and data science. With hands-on experience in projects and internships, I have developed a keen expertise in machine learning, web development, and system optimization. My recent work includes creating a portfolio website and developing a safety helmet detection system, showcasing my skills in Python, TensorFlow, and front-end technologies. I am eager to apply my knowledge and problem-solving abilities to contribute to innovative tech solutions and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile final year B.Tech student in Computer Science and Engineering at Vellore Institute of Technology with a passion for technology and innovation. With hands-on experience from internships and projects, I have worked with a variety of technologies, including Python, C, C++, Java, HTML, and CSS. My journey in computer science began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of academics, I enjoy staying active, exploring new technologies, and engaging in extracurricular activities such as state-level cricket and literary association contributions.`;

export const EXPERIENCES = [
  {
    year: "Sept 2023 - Oct 2023",
    role: "Project Intern",
    company: "HEMRL, Defence Research and Development Organization (DRDO)",
    description: `I led the development and deployment of a safety helmet detection system using SSD-MobileNet, achieving a precision of 95% and a recall of 77%, which improved workplace safety compliance by 40%. I conducted data preprocessing and model training with TensorFlow, reducing false positive rates by 30%. Working collaboratively with a team of five, we integrated the detection system into existing safety protocols. I also presented our findings to senior management, highlighting the system's efficiency and cost benefits.`,
    technologies: ["SSD-MobileNet", "TensorFlow", "Model training","Machine learning" , "Python"],
  },
  {
    year: "Oct 2020 - Nov2021",
    role: "Student Intern",
    company: "Bharat Intern",
    description: `I successfully completed house price and wine quality prediction projects, achieving accuracies of 90% and 85%, respectively. By applying machine learning techniques to real-world datasets, I enhanced prediction reliability and developed proficiency in Python, Pandas, and Scikit-learn. This experience allowed me to reduce data preprocessing time by 50% and improve model training efficiency by 25% through various optimization techniques. Additionally, I documented project workflows and outcomes, providing clear and comprehensive reports.`,
    technologies: ["Python", "Pandas", "Scikit-learn", "Data PreProcessing"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://github.com/adrianhajdin/portfolio_website"
  },
];

export const CONTACT = {
  address: "Satara,India",
  phoneNo: "+91 92267 81970",
  email: "pranavphadatare0302@gmail.com",
};
