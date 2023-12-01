import React from "react";
import { SignOutButton } from "../components/buttons";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  const session = await getServerSession();
  console.log("from dashboard:", session);
  return (
    <div>
      <h1>This is the dashboard</h1>
      <SignOutButton /> <br />
    </div>
  );
};

export default Dashboard;
