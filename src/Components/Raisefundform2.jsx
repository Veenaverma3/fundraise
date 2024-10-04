import { useState } from 'react';

const Raisefundform2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fundUsage: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto mt-24">
      <div className="text-center mb-8">
        <div className="mb-4 text-4xl font-bold">Logo</div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Need Funds To Pay For Medical Bills/Treatment?
        </h1>
        <h2 className="text-lg text-gray-600 mt-2">
          Our personal fundraiser expert is waiting to get you started!
        </h2>
      </div>

      <div className="p-6 rounded-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-100 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-100 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-100 rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex flex-col items-center">
            <select
              id="fundUsage"
              name="fundUsage"
              value={formData.fundUsage}
              onChange={handleChange}
              className="w-full max-w-sm p-3 border-b-2 text-center focus:outline-none focus:border-b-green-400 bg-gray-100 rounded-md"
              required
            >
              <option value="">What Will the Funds Be Used For?</option>
              <option value="Medical Bills">Medical Bills</option>
              <option value="Treatment Costs">Treatment Costs</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className=" w-full ml-3 max-w-sm p-4 bg-green-400 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Raisefundform2;
