import React from "react";

/**
 * ClientGrowthStatCard
 * Reusable stat card for displaying client count and YoY growth
 */
const ZerodhaClientGrowthStatCard = ({
  totalClients,
  growthPercentage,
  growthDirection = "down", // "up" | "down"
  infoText,
  maxWidth = 320,
}) => {
  const isDown = growthDirection === "down";

  return (
    <div
      className="card mb-3 border mx-auto mt-2 p-3"
      style={{ maxWidth }}
    >
      <p className="text-danger mb-0" style={{ fontSize: 17 }}>
        <span
          className={`float-end ms-1 px-3 text-light ${
            isDown ? "bg-danger" : "bg-success"
          }`}
        >
          <i
            className={`fa ${
              isDown ? "fa-arrow-down" : "fa-arrow-up"
            }`}
          ></i>{" "}
          {growthPercentage}%
        </span>

        {totalClients} Clients

        <button
          type="button"
          className="btn btn-link p-0 ms-2"
          data-bs-toggle="popover"
          data-bs-trigger="manual"
          data-bs-html="true"
          data-bs-content={infoText}
        >
          <img
            src="https://www.chittorgarh.net/images/question-mark.gif"
            alt="Number of Unique Clients"
            title="Number of Unique Clients"
            width="10"
            height="10"
            loading="lazy"
            style={{ width: 10, height: 10, objectFit: "cover" }}
          />
        </button>
      </p>
    </div>
  );
};

export default ZerodhaClientGrowthStatCard;
