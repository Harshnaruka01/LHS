import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import clyroImg from "../assets/clyro.svg";
import freakxImg from "../assets/freakx.svg";
import triImg from "../assets/tri.svg";

function Projects({ username = "Harshnaruka01", count = 20, preview = false, previewList = ["clyro", "freakx"], onlyList = null }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    let mounted = true;
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setRepos(data);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [username, count]);

  // Determine which repos to display:
  // - if `onlyList` provided, show only those names
  // - else if `preview` true, show `previewList`
  // - otherwise show all repos
  const filterList = Array.isArray(onlyList) && onlyList.length
    ? onlyList
    : preview
    ? previewList
    : null;

  const displayRepos = filterList
    ? repos.filter((r) => filterList.map((n) => n.toLowerCase()).includes((r.name || "").toLowerCase()))
    : repos;

  // mapping repo name (lowercase) -> image import
  const imgs = {
    clyro: clyroImg,
    freakx: freakxImg,
    tri: triImg,
  };

  // Custom project metadata
  const projectMetadata = {
    freakx: {
      title: "FreakX",
      subtitle: "E-Commerce Platform",
      description: "Modern e-commerce platform with seamless checkout and inventory management.",
      languages: ["React", "Vite", "JavaScript", "Tailwind CSS", "MongoDB", "Node.js"],
    },
    clyro: {
      title: "Clyro",
      subtitle: "Social Media Platform",
      description: "Social media platform for uploading and sharing media content.",
      languages: ["React", "Vite", "JavaScript", "Firebase", "Tailwind CSS", "Redux"],
    },
    tri: {
      title: "TRI",
      subtitle: "Educational Platform",
      description: "Education platform connecting students with expert tutors.",
      languages: ["React", "Vite", "JavaScript", "Express.js", "PostgreSQL", "Socket.io"],
    },
  };

  return (
    <section id="projects" className="section projects-section scroll-animation-target" ref={sectionRef}>
      <div className="projects-header">
        <h2>My Projects</h2>
        {preview && (
          <Link to="/projects" className="btn-view-all" aria-label="View all projects">
            View All
          </Link>
        )}
      </div>

      {loading && <p>Loading projects…</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className={`projects-list ${preview ? 'preview' : ''}`}>
        {displayRepos.map((repo, index) => {
          const keyName = (repo.name || "").toLowerCase();
          const img = imgs[keyName];
          const metadata = projectMetadata[keyName];
          
          // Use custom metadata if available, otherwise use GitHub data
          const title = metadata?.title || repo.name;
          const subtitle = metadata?.subtitle || repo.description?.split('.')[0] || "";
          const description = metadata?.description || repo.description || "No description provided.";
          const languages = metadata?.languages || (repo.language ? [repo.language] : []);
          
          return (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={title}
            >
              <div className="project-icon">
                {img ? <img src={img} alt={title} /> : <span className="icon-placeholder">{keyName.charAt(0).toUpperCase()}</span>}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-header-left">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </div>
                  <span className="project-status">Live</span>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                  {languages.map((lang) => (
                    <span key={lang} className="tag">{lang}</span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
