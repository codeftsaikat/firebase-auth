
const Home = () => {

  return (
    <section className="bg-gray-900 text-white h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-blue-500">YourCompany</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          We provide innovative solutions to help your business thrive.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center space-x-4">
          <a
            href="#services"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

