
function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
            <p className="text-blue-500">Web Developer</p>
            <p className="text-gray-600 mt-2">Helsinki, Finland</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-10 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Bio</h3>
            <p className="text-gray-600 mt-2">
              I am a passionate web developer with a focus on creating interactive and responsive applications. I love working with modern technologies like React, Tailwind CSS, and Node.js.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Skills</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mt-2">Email: johndoe@example.com</p>
            <p className="text-gray-600">Phone: +358 123 456 789</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Social Links</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
