"use client";

import React, { useState } from 'react';
import Card from "./Card.jsx";
import { fetchTeamsById } from '../lib/data.jsx';

export default function Team() {
  const [team, setTeam] = useState(null);

  const handleFetchTeam = async (id) => {
    const data = await fetchTeamsById(id);
    setTeam(data);
  };

  return (
    <section className="text-foreground m-auto max-w-6xl p-4 text-center">
      <header>
        <h2>{team ? team.name : 'Sélectionnez une équipe'}</h2>
      </header>
      <div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {team && team.employees.map(employee => (
            <Card key={employee.id} {...employee} />
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button onClick={() => handleFetchTeam(1)}>Team 1</button>
        <button onClick={() => handleFetchTeam(2)}>Team 2</button>
        <button onClick={() => handleFetchTeam(3)}>Team 3</button>
      </div>
    </section>
  );
}