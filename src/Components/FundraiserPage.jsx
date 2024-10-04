 const FundraiserPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <img
          src="" // Replace with actual image URL
          alt="Girl Child Shereen"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-semibold mt-4">Help Girl Child Shereen from Anemia and Give Her a New Life</h1>
        <p className="text-gray-600 mt-2">Shereen is suffering from severe anemia. Your small contribution can help her recover and lead a healthy life.</p>
      </div>

      {/* Fundraiser Progress */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-2">Fundraiser Progress</h2>
        <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '50%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>₹50,000 raised</span>
          <span>₹1,00,000 goal</span>
        </div>
      </div>

      {/* Donate Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="number"
              placeholder="Enter donation amount"
              className="w-full border rounded-lg p-2 text-gray-700"
            />
          </div>
          <div className="w-full md:w-auto md:ml-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      
      {/* How Your Donation Helps */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-2xl font-semibold mb-4">How Your Donation Helps</h2>
        <p className="text-gray-600">
          Every donation you make will contribute to Shereen,s treatment and recovery. Your support will ensure that she gets the right medical care to lead a healthy and happy life.
        </p>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center text-gray-500">
        <p>© 2024 Ketto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FundraiserPage;
