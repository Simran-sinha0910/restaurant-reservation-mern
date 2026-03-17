import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <header className="heading_section">
          <h1 className="heading">OUR SOUTH INDIAN CHEFS</h1>
          <p>
            Meet the chefs who bring the flavours of Tamil Nadu, Kerala,
            Karnataka and Andhra–Telangana to your table. From tiffin classics
            to coastal curries, they recreate the taste of home with every dish.
          </p>
        </header>

        <div className="team_container">
          {data[0].team.map(({ id, image, name, designation }) => (
            <article className="card" key={id}>
              <img src={image} alt={`Photo of ${name}`} />
              <h3>{name}</h3>
              <p className="designation">{designation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
