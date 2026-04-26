import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card glass">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
