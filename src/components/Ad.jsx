import React, { useState, useEffect } from "react";

function SimulatedAd() {
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    // Simulate fetching ad data (e.g., from an API)
    setTimeout(() => {
      setAdData({
        imageUrl:
          "https://images.unsplash.com/photo-1610376096719-9819725cfb00?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Test Ad",
        description: "This is a simulated ad for testing.",
        buttonText: "Click Here",
        buttonLink: "https://example.com/test-ad",
      });
    }, 1000); // Simulate a 1-second delay
  }, []);

  if (!adData) {
    return <div>Loading Ad...</div>; // Or a placeholder
  }

  return (
    <div className="max-w-md mx-auto my-8 p-8 text-center rounded-xl bg-white/10 shadow-lg backdrop-blur-md border border-white/30">
      {adData.imageUrl && (
        <img
          src={adData.imageUrl}
          alt="Ad Image"
          className="max-w-full rounded-lg mb-4"
        />
      )}
    </div>
  );
}

export default SimulatedAd;
