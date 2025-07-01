import React, { createContext, useState, useEffect } from "react";

export const TEAMS = ["Dairy", "Meat", "Fruits", "Vegetables", "Cookies"];

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(null);
  // TODO UPDATE: fetch teamCounts from backend when created
  const [teamCounts, setTeamCounts] = useState(
    TEAMS.reduce((acc, t) => ({ ...acc, [t]: 0 }), {})
  );

  useEffect(() => {
    const stored = localStorage.getItem("lm_profile");
    if (stored) {
      const p = JSON.parse(stored);
      setProfile(p);

      setTeamCounts((tc) => ({
        ...tc,
        [p.team]: (tc[p.team] || 0) + 1,
      }));
    }
  }, []);

  const saveProfile = (data) => {
    localStorage.setItem("lm_profile", JSON.stringify(data));
    setProfile(data);
    setTeamCounts((tc) => ({
      ...tc,
      [data.team]: (tc[data.team] || 0) + 1,
    }));
  };

  return (
    <UserContext.Provider value={{ profile, teamCounts, saveProfile }}>
      {children}
    </UserContext.Provider>
  );
}
