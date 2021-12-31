import mongodbImg from "../images/mongodb.jpg";
import reactImg from "../images/react.jpg";
import expressImg from "../images/express.jpg";
import nodeImg from "../images/node.jpg";
import mernWorkImg from "../images/mernworkimg.jpg";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { carousel } from "../script";

function Home() {
  const [useScript, setUseScript] = useState(true);
  useEffect(() => {
    if (useScript) {
      carousel();
    }
    return () => {
      setUseScript(false);
    };
  }, [useScript]);

  return (
    <div className="home">
      <div className="myinfo">
        <li>
          <b>Creator:</b>Jagadish Shrestha
        </li>
        <li>
          <b>Location:</b>Sankhu,Kathmandu,Nepal
        </li>
        <li>
          <b>Status:</b>Student at Tribhuvan UniverSity
        </li>
        <li>
          <b>Faculty:</b>Electronics,communication and Information Engineering
        </li>
        <li>
          <b>Github Repo:</b>
          <a
            href="https://github.com/Shresthadev403/boilerplate-MERN"
            target="_blank"
          >
            Boilerplate MERN/GITHUB
          </a>
        </li>
        <li>
          <b>Info:</b>You can use this boilerplate in any of your project.
        </li>
      </div>
      <div>
        <img className="mySlides" src={reactImg} alt="react" />
        <img className="mySlides" src={mongodbImg} alt="mongodb" />
        <img className="mySlides" src={expressImg} alt="express" />
        <img className="mySlides" src={nodeImg} alt="react" />

        <div className="article">
          <h2> What is the MERN Stack? </h2>MERN stands for MongoDB, Express,
          React, Node, after the four key technologies that make up the stack.
          MongoDB - document database Express(.js) - Node.js web framework
          React(.js) - a client-side JavaScript framework Node(.js) - the
          premier JavaScript web server
          <br />
          <br />
          <h2>Why choose the MERN stack?</h2> Let’s start with MongoDB, the
          document database at the root of the MERN stack. MongoDB was designed
          to store JSON data natively (it technically uses a binary version of
          JSON called BSON), and everything from its command line interface to
          its query language (MQL, or MongoDB Query Language) is built on JSON
          and JavaScript. MongoDB works extremely well with Node.js, and makes
          storing, manipulating, and representing JSON data at every tier of
          your application incredibly easy. For cloud-native applications,
          MongoDB Atlas makes it even easier, by giving you an auto-scaling
          MongoDB cluster on the cloud provider of your choice, as easy as a few
          button clicks. Express.js (running on Node.js) and React.js make the
          JavaScript/JSON application MERN full stack, well, full. Express.js is
          a server-side application framework that wraps HTTP requests and
          responses, and makes it easy to map URLs to server-side functions.
          React.js is a frontend JavaScript framework for building interactive
          user interfaces in HTML, and communicating with a remote server. The
          combination means that JSON data flows naturally from front to back,
          making it fast to build on and reasonably simple to debug. Plus, you
          only have to know one programming language, and the JSON document
          structure, to understand the whole system! MERN is the stack of choice
          for today’s web developers looking to move quickly, particularly for
          those with React.js experience.
          <br />
          <br />
          <h2>How does the MERN stack work? </h2>The MERN architecture allows
          you to easily construct a 3-tier architecture (frontend, backend,
          database) entirely using JavaScript and JSON.
          <br />
          <div>
            <img
              src={mernWorkImg}
              alt="mernworkimg"
              style={{ minWidth: "300px", margin: "auto", maxWidth: "70%" }}
            />
          </div>
          <br />
          <h2> React.js Front End</h2> The top tier of the MERN stack is
          React.js, the declarative JavaScript framework for creating dynamic
          client-side applications in HTML. React lets you build up complex
          interfaces through simple Components, connect them to data on your
          backend server, and render them as HTML. React’s strong suit is
          handling stateful, data-driven interfaces with minimal code and
          minimal pain, and it has all the bells and whistles you’d expect from
          a modern web framework: great support for forms, error handling,
          events, lists, and more.
          <br />
          <br />
          <h2> Express.js and Node.js Server Tier </h2>The next level down is
          the Express.js server-side framework, running inside a Node.js server.
          Express.js bills itself as a “fast, unopinionated, minimalist web
          framework for Node.js,” and that is indeed exactly what it is.
          Express.js has powerful models for URL routing (matching an incoming
          URL with a server function), and handling HTTP requests and responses.
          By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js
          front-end, you can connect to Express.js functions that power your
          application. Those functions in turn use MongoDB’s Node.js drivers,
          either via callbacks for using Promises, to access and update data in
          your MongoDB database.
          <br />
          <br />
          <h2> MongoDB Database Tier</h2> If your application stores any data
          (user profiles, content, comments, uploads, events, etc.), then you’re
          going to want a database that’s just as easy to work with as React,
          Express, and Node. That’s where MongoDB comes in: JSON documents
          created in your React.js front end can be sent to the Express.js
          server, where they can be processed and (assuming they’re valid)
          stored directly in MongoDB for later retrieval. Again, if you’re
          building in the cloud, you’ll want to look at Atlas. If you’re looking
          to set up your own MERN stack, read on!
          <br />
          <br />
          <h2> Is MERN a full-stack solution? </h2>Yes, MERN is a full-stack,
          following the traditional 3-tier architectural pattern, including the
          front-end display tier (React.js), application tier (Express.js and
          Node.js), and database tier (MongoDB).
          <br />
          <br />
          <h2>MERN Use Cases </h2>Like any web stack, you can build whatever you
          want in MERN - though it’s ideally suited for cases that are
          JSON-heavy, cloud-native, and that have dynamic web interfaces. A few
          examples might be: - Workflow management - News aggregation - Todo
          apps and Calendars - Interactive forums / social products And whatever
          else you can dream up!
          <br />
          <br />
          <h2>Where to learn MERN Stack?</h2>
          <ul>
            <li>
              <a
                href="https://www.mongodb.com/languages/mern-stack-tutorial"
                target="_blank"
              >
                MERN STACK TUTORIAL
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/languages/mern-stack-tutorial"
                target="_blank"
              >
                MERN STACK UDEMY COURSE
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/languages/mern-stack-tutorial"
                target="_blank"
              >
                MERN STACK(Oak Academy)
              </a>
            </li>
          </ul>
          <footer id="footer">
            <li>Contact Us </li>
            <li>
              <b>Email:</b> Shresthadev403@gmail.com{" "}
            </li>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
