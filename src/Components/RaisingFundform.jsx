import img1 from "./images/webStep1.png";

const RaisingFundform = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-4 md:p-8 mt-32">
      {/* Left Section (Image + Heading) */}
      <div className="text-left mb-8 md:mb-0 md:w-1/2">
        <img
          src={img1}
          alt="Raising Funds"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
        />
        <h1 className="text-xl md:text-2xl font-semibold mt-4 text-center md:text-left">
          Thousands Are Raising Funds
          <br /> Online On Logo
        </h1>
        <h1 className="text-xl md:text-3xl font-bold mt-2 text-center md:text-left">
          You Can Too
        </h1>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Start Your Fundraiser
        </h2>
        <form className="space-y-6">
          {/* Raising Fund For */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="fund"
              className="text-xl font-medium text-gray-700"
            >
              I am raising funds for:
            </label>
            <select
              id="fund"
              name="fund"
              className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              required
            >
              <option value="" disabled selected>
                Medical
              </option>
              <option value="medical">Medical</option>
            </select>
          </div>

          {/* Help Field */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="help"
              className="text-xl font-medium text-gray-700"
            >
              The raising fund will help:
            </label>
            <select
              id="help"
              name="help"
              className="block w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              required
            >
              <option value="" disabled selected>
                Myself
              </option>
              <option value="spouse">Spouse</option>
              <option value="sibling">Sibling</option>
              <option value="child">Child</option>
              <option value="family">Family</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Number Field */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="number"
              className="text-xl font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Enter mobile number"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              Get a Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RaisingFundform;
