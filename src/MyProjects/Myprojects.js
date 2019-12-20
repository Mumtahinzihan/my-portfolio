import React from 'react';
import './MyProjects.css';
import HeaderNav from '../Header/Header';
import SideBar from '../SideBar/SideBar';

export default function MyProjects() {
    return (
        <div className='projects'>
            <HeaderNav />
            <SideBar />
            <div className='proj'>
            <h1>My projects</h1>
            <div>
                <p>This project was built as a team, based on a Festival App which is powered by <label>HTML5, CSS3, React.js, JavaScript, Node.js, MongoDB</label>.
                 To veiw please click on the project.<br/><br/>
                 <a id='project' href='link' target='_blank' rel="noopener noreferrer">
                    Festipal Project
                </a>
                </p>
            </div>
            <div>
                <p>This project was based on the Netflix App which is powered by <label>HTML5, CSS3, React.js, JavaScript, Node.js and MongoDB</label>.
                 To veiw please click on the project. <br/><br/>
                 <a id='project' href='https://kodflix-eleop64jj.now.sh/' target='_blank' rel="noopener noreferrer">
                    My Kodflix Project
                </a>
                </p>
            </div>
            <div>
                <p>This was my first project when I started learning only <label>HTML5 and CSS3</label>.
                This project is based on a home page of an academy. To veiw please click on the project.<br/><br/>
                <a id='project' href='https://mumtahinzihan.github.io/comlaracademy/' target='_blank' rel="noopener noreferrer">Comlar Academy</a>
                </p>
            </div>
            </div>
        </div>
    )
}