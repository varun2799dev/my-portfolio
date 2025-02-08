function About() {
    return (
      <div className="px-6 lg:px-20">
        {/* Introduction Section */}
        <p className="mt-28 mx-auto max-w-3xl text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
          I am a web developer with 1+ years of experience.
        </p>
        <p className="mt-4 mx-auto max-w-3xl text-gray-500 dark:text-gray-400">
          My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
        </p>
        <p className="mt-4 mx-auto max-w-3xl text-gray-500 dark:text-gray-400">
          My core stack is React, Node.js, Express.js, MongoDb. I am also familiar with Python with Flask and PostgreSQL. I have used tools like Docker before. 
        </p>
  
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <a href="https://nodejs.org/en" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
          </a>
          <a href="https://react.dev/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" alt="React" />
          </a>
          <a href="https://expressjs.com/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://kinsta.com/wp-content/uploads/2022/04/express-1.png" alt="Express" />
          </a>
          <a href="https://www.mongodb.com/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-24 h-20 rounded-full" src="https://studio3t.com/wp-content/uploads/2020/09/introduction-to-mongodb-1024x278.png" alt="MongoDB" />
          </a>
          <a href="https://git-scm.com/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F87gdibqpr93vpfpqj7xm.png" alt="Git" />
          </a>
          <a href="https://www.python.org/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="Python" />
          </a>
          <a href="https://www.postgresql.org/" className="hover:scale-110 transition-transform duration-300">
            <img className="w-20 h-20 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElWiZrrcKYhl1f7ooUzrzohGDckVS81hYuA&s" alt="PostgresSQL" />
          </a>

        </div>
  
        {/* Projects Section */}
        <div className="flex items-center justify-center my-10">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
          <h2 className="mx-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 uppercase tracking-widest drop-shadow-lg">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
        </div>
  
        {/* Food Delivery Website Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              🍔 Food Delivery Website
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A food delivery platform developed using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB as the database. 
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Features a modern user interface for browsing menus, placing orders, and tracking deliveries.
            </p>
  
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">React.js</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Node.js</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">MongoDB</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gray-600 rounded-full">Express.js</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Git</span>
            </div>
  
            {/* Project Link */}
            <div className="mt-4">
              <a
                href="https://food-deli-f.vercel.app/"
                className="inline-block px-5 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                target="_blank"
               rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Frontend design website
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A website developed using React.js for the frontend, along with tailwind css to demonstrate frontend skills. 
            </p>
  
            {/* Tools Used */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">React.js</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Node.js</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">CSS</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gray-600 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Git</span>
            </div>
  
            {/* Project Link */}
            <div className="mt-4">
              <a
                href="https://websitereactroute.netlify.app/"
                className="inline-block px-5 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Experience Section */}
<div className="flex items-center justify-center my-10">
  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
  <h2 className="mx-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 uppercase tracking-widest drop-shadow-lg">
    Experience
  </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
</div>

{/* Experience Cards */}
<div className="max-w-3xl mx-auto space-y-6">
  
  {/* Experience 1 */}
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6">
    <div className="flex items-center space-x-4">
      <img src="https://media.licdn.com/dms/image/v2/D560BAQG5AwxGpXkAtA/company-logo_200_200/company-logo_200_200/0/1702810266648/eazybyts_logo?e=2147483647&v=beta&t=eH9dghYGgpAFDR365bcbAkYmSZPpma6dLFXgmk47HPs" alt="Company Logo" className="w-12 h-12 rounded-full"/>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Full Stack Intern</h3>
        <p className="text-gray-600 dark:text-gray-400">EazyByts Infotech | May 2024 - June 2024</p>
      </div>
    </div>
    <ul className="mt-3 text-gray-600 dark:text-gray-400 text-sm list-disc pl-6">
      <li>Spearheaded the enhancement of critical frontend features of a fitness website using React.js, significantly
      improving user interface and experience.</li>
      <li>Optimized web performance and improved site load speed by 30%.</li>
      <li>Designed and implemented robust backend solutions with Node.js, Express.js framework, optimizing
      performance and scalability.</li>
    </ul>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">React.js</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Node.js</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-gray-600 rounded-full">REST APIs</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-orange-400 rounded-full">Express.js</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">MongoDb</span>
    </div>
  </div>

  {/* Experience 2 */}
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6">
    <div className="flex items-center space-x-4">
      <img src="https://www.tacton.com/static/1bf294125a6880fb0920d45aa6bb59c6/7c2f5/Capgemini_Logo_2COL_RGB-e1550643279664.png" alt="Company Logo" className="w-12 h-12 rounded-full"/>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Software Engineer</h3>
        <p className="text-gray-600 dark:text-gray-400">Capgemini | May 2021 - Aug 2022</p>
      </div>
    </div>
    <ul className="mt-3 text-gray-600 dark:text-gray-400 text-sm list-disc pl-6">
      <li>Developed and maintained full stack applications for the Investments team at Royal Bank of Canada (RBC) using HTML, CSS, Javascript, React.js, Python and PostgresSQL.</li>
      <li>Built and optimized RESTful APIs for seamless system integration.</li>
      <li>Collaborated in Agile teams, contributing to daily stand-ups.</li>
    </ul>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">React.js</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">Python</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">Node.js</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-200 rounded-full">Javascript</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-orange-950 rounded-full">PostgresSQL</span>

    </div>
  </div>
   {/* Experience 3 */}
  
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6">
    <div className="flex items-center space-x-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bhabha_Atomic_Research_Centre_Logo.png/1200px-Bhabha_Atomic_Research_Centre_Logo.png" alt="Company Logo" className="w-12 h-12 rounded-full"/>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Research Intern</h3>
        <p className="text-gray-600 dark:text-gray-400">Bhabha Atomic Research Centre | Dec 2018 - Jan 2019</p>
      </div>
    </div>
    <ul className="mt-3 text-gray-600 dark:text-gray-400 text-sm list-disc pl-6">
      <li>Worked on image processing of radiographic images to detect weld defects using MATLAB with 85% accuracy</li>
      <li>Weld defects were mostly having cracks, porosity, overlap etc, we had to work with images having .tiff extension.</li>
      <li>Made project presentation and presented it in front of other research scientists.</li>
    </ul>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">MATLAB</span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-full">ML Algorithms</span>
      </div>
  </div>
</div>
{/* Social Media Links */}
<div className="flex justify-center gap-6 mt-10 mb-5">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/varun-tadpatri" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
  </a>

  {/* GitHub */}
  <a href="https://github.com/varun2799dev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
  </a>

  {/* Email ID */}
  <a href="mailto:varuntadpatri@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Email" />
  </a>
</div>

      </div>
    );
  }
  
  export default About;
  