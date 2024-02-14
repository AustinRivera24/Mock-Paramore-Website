//import { useState } from "react";
import Navbar from "./Navbar";


function Store() {
  const merchItems = [
    {
      id: 1,
      name: "After Laugther Sweater",
      imageUrl: "../Paramore-Merch/After_Laugther_Sweater.jpg",
    },
    {
      id: 2,
      name: "Little Rain Cloud Shirt",
      imageUrl: "../Paramore-Merch/Little_Rain_Cloud.jpg",
    },
    {
      id: 3,
      name: "Self-Titled Album",
      imageUrl: "../Paramore-Merch/Self-Titled_Vinyl.jpg",
    },
    {
      id: 4,
      name: "The News Shirt",
      imageUrl: "../Paramore-Merch/The_News_Shirt.jpg",
    },
    {
      id: 5,
      name: "This is Why (Long-Sleeve)",
      imageUrl: "../Paramore-Merch/This_Is_Why_LS.jpg",
    },
    {
      id: 6,
      name: "We Are All Paramore Sweater",
      imageUrl: "../Paramore-Merch/We_Are_All.jpg",
    },
  ];

  return (
    <>
      <div style={{
        background: "linear-gradient(black, white)",
      }}>
        <Navbar />
        <div className="merch-store"
          style={{
            marginTop: "50px",
            marginLeft: "200PX"
          }}
        >
          <div
            className="merch-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 2fr)",
              gap: "20px",
              padding: "20px",
              margin: "0 auto",
            }}
          >
            {merchItems.map((item) => (
              <div key={item.id} className="merch-item">
                <img
                  style={{
                    height: "250px",
                    width: "250px",
                  }}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
