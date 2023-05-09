import { type NextPage } from "next";
import Header from "./dashboardNav";
import TopNavBar from "./topNavBar";
import CreatePostWizzard from "~/components/createPostWizzard";

import { api } from "~/utils/api";
import Postview from "~/components/postview";

const Dashboard: NextPage = () => {
  const { data, isLoading } = api.submission.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (!data) {
  //   return <div>Something went wrong</div>;
  // }

  return (
    <div className="flex h-screen w-full bg-slate-100 text-slate-900">
      <aside className=" h-screen border-r border-slate-200 md:w-1/4 lg:w-1/5">
        <Header />
      </aside>
      <main className="mx-8 h-screen w-full">
        <TopNavBar />

        <div className=" my-4">
          <h1 className=" py-4">Demonstation input</h1>
          <CreatePostWizzard />
        </div>
        <div className=" h-40 w-full rounded-md px-4 py-2 outline outline-2 outline-slate-300">
          <h1>Output:</h1>
          <div>
            {data?.map((fullInterpretation) => (
              <Postview
                {...fullInterpretation}
                key={fullInterpretation.submission.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
