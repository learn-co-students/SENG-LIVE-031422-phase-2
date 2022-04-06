import {useState} from 'react'

function ProjectListItem({ project }) {
  const { image, about, name, link, phase } = project;

  const [clapCount, setClapCount] = useState(0)

  const handleClap = () => {
    // increment the clap number by 1
    setClapCount(clapCount + 1) // previous state: 0, current state: 1
    // setClapCount(clapCount + 1) // previous state: 1, current state: 2
    // setClapCount(1)
   
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectListItem;
