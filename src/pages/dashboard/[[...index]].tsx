import { type NextPage } from "next";
import Header from "./dashboardNav";
import TopNavBar from "./topNavBar";

function dashboard() {
  return (
    <div className=" flex h-screen w-screen bg-slate-100 text-slate-900">
      <aside className=" h-screen border-r border-slate-200 md:w-1/4 lg:w-1/5">
        <Header />
      </aside>
      <main className="h-screen w-full">
        <TopNavBar />

        <div>
          <h1>Dashboard</h1>
        </div>
      </main>
    </div>
  );
}

export default dashboard;
