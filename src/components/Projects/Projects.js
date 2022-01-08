import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import TNPush from "../../Assets/Projects/truenotify_segments.png";
import AGWebsite from "../../Assets/Projects/adgyde_website.png";
import AGDashboard from "../../Assets/Projects/adgyde_dashboard.png";
import JioMessenger from "../../Assets/Projects/jio_messenger.jpg";

function Projects() {
  const isMobile = window.innerWidth <= 500;
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Career <strong className="purple">Journey</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={AGDashboard}
              title="AdGyde Dashboard"
              description={isMobile ? "AdGyde is a real-time mobile measurement platform that helps advertisers in optimizing the ad campaigns and drive the best value for the advertising spend." : "AdGyde is a real-time mobile measurement platform that helps advertisers in optimizing the ad campaigns and drive the best value for the advertising spend. Its real-time attribution tracking and analytics solution helps the advertisers/app marketers/growth hackers, product managers in measuring the attributed mobile app installs being acquired through both Non-Organic and Organic channels"}
              link="https://www.adgyde.com/login?ref=rsiwal.com"
              note="I have done the development of this dashboard from scratch also I have owned the full responsibility related to dashboard enhancement."
              language="Php, Javascript, Html, Css"
              tools="Codeigniter, Bootstrap, Jquery, Echart Js, Rest API, Custom Cache, Ajax Polling, Facebook Graph SQL"
              footer="2020 - 2021 Version 2.0"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TNPush}
              title="Push Dashboard Using Segments"
              description=""
              link="https://segments.truenotify.in"
              note="Developed this dashboard"
              language="PHP, Javascript, HTML, CSS"
              tools="Codeigniter, Bootstrap, Jquery"
              footer="2021"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={AGWebsite}
              title="AdGyde Website"
              description="AdGyde is an initiative of large mobile internet and technology driven player like MoMagic Technologies (backed by Foxconn and MediaTek)."
              link="https://www.adgyde.com?ref=rsiwal.com"
              note="I have done the development of this website from scratch also I have owned the full responsibility related to changes."
              language="PHP, Javascript, HTML, CSS"
              tools="Codeigniter, Bootstrap, Jquery"
              footer="2020 - 2021 Version 2.0"
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={JioMessenger}
              title="Jio Feature Phone Messenger"
              description=""
              note="Developed this feature phone app with a feature of Facebook Chat, Whatsapp Chat, Native SMS, Jio Chat, Webrtc for JIO"
              language="KaiOS, Javascript, HTML, CSS"
              tools=""
              footer="2017"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
