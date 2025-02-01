import React, { useEffect, useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Home"
  );
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold">Welcome To Home</h2>
            <p className="mt-4">
              This is the home page of our application. Explore our features and
              get to know more about us.
            </p>
          </div>
        );
      case "About":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="mt-4">
              We are a tech-savy company focused on delivering the best user
              experiences. Our team is passionate about creating innovative
              solutions.
            </p>
          </div>
        );
      case "Contact":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-4">
              Feel free to reach out to us at abcd@gmail.com. We are here to
              assist you with any queries or support you may need.
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <nav className="flex">
        {["Home", "About", "Contact"].map((tab) => (
          <button
            key={tab}
            className={`p-4 ${
              tab === activeTab ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="p-4 transition-opacity duration-500 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
