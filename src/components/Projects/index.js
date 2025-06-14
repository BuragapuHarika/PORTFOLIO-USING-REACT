// import React from 'react'
// import { useState } from 'react'
// import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
// import ProjectCard from '../Cards/ProjectCards'
// import { projects } from '../../data/constants'


// const Projects = ({openModal,setOpenModal}) => {
//   const [toggle, setToggle] = useState('all');
//   return (
//     <Container id="projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>
//           I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup >
//           {toggle === 'all' ?
//             <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//             :
//             <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'web app' ?
//             <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
//             :
//             <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'android app' ?
//             <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
//             :
//             <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'machine learning' ?
//             <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//             :
//             <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//           }
//         </ToggleButtonGroup>
//         <CardContainer>
//           {toggle === 'all' && projects
//             .map((project) => (
//               <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
//             ))}
//           {projects
//             .filter((item) => item.category === toggle)
//             .map((project) => (
//               <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Projects










// import React, { useState } from 'react';
// import { projects } from '../../data/constants';
// import ProjectCard from '../Cards/ProjectCards';
// import {
//   CardContainer,
//   Container,
//   Desc,
//   Divider,
//   Title,
//   ToggleButton,
//   ToggleButtonGroup,
//   Wrapper
// } from './ProjectsStyle';

// const Projects = ({ openModal, setOpenModal }) => {
//   const [toggle, setToggle] = useState('all');

//   return (
//     <Container id="projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>
//           I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup>
//           {['all', 'web app', 'android app', 'machine learning'].map((type, index) => (
//             <React.Fragment key={type}>
//               <ToggleButton
//                 active={toggle === type}
//                 value={type}
//                 onClick={() => setToggle(type)}
//               >
//                 {type.toUpperCase().replace('APP', "APP'S")}
//               </ToggleButton>
//               {index < 3 && <Divider />}
//             </React.Fragment>
//           ))}
//         </ToggleButtonGroup>

//         <CardContainer>
//           {projects
//             .filter((item) => toggle === 'all' || item.category === toggle)
//             .map((project, index) => (
//               <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;



// import React, { useState } from 'react';
// import { projects } from '../../data/constants';
// import ProjectCard from '../Cards/ProjectCards';
// import {
//   CardContainer,
//   Container,
//   Desc,
//   Divider,
//   Title,
//   ToggleButton,
//   ToggleButtonGroup,
//   Wrapper
// } from './ProjectsStyle';

// const Projects = ({ openModal, setOpenModal }) => {
//   const [toggle, setToggle] = useState('all');

//   return (
//     <Container id="projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>
//           I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
//         </Desc>

//         <ToggleButtonGroup>
//           {['all', 'web app', 'android app', 'machine learning'].map((type, index) => (
//             <React.Fragment key={type}>
//               <ToggleButton
//                 active={toggle === type}
//                 value={type}
//                 onClick={() => setToggle(type)}
//               >
//                 {type.toUpperCase().replace('APP', "APP'S")}
//               </ToggleButton>
//               {index < 3 && <Divider />}
//             </React.Fragment>
//           ))}
//         </ToggleButtonGroup>

//         <CardContainer>
//           {projects
//             .filter((item) => toggle === 'all' || item.category === toggle)
//             .map((project, index) => (
//               <ProjectCard
//                 key={index}
//                 project={project}
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//               />
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;




import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCards';
import {
  CardContainer,
  Container,
  Desc,
  Title,
  Wrapper
} from './ProjectsStyle';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>

        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
