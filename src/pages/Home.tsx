import { FlaskConicalIcon, LayoutDashboardIcon, UserIcon } from "lucide-react";
import ApiTest from "../components/ApiTest";
import ClientChartTree from "../components/ClientChartTree";
import Search from "../components/Search";

function Home() {
  return (
    <div className="min-h-screen px-6 py-4 overflow-auto max-w-[960px] mx-auto">
      <div className="flex items-center gap-3 border-black border-b-2 pb-1">
        <UserIcon size={24} />
        保戶關係查詢
      </div>
      <Search />
      <div className="flex items-center gap-3 border-black border-b-2 pb-1">
        <LayoutDashboardIcon size={24} />
        關係圖
      </div>
      <div className="aspect-video min-w-[600px] rounded-lg border-black border-2 mt-2 mb-3">
        <ClientChartTree />
      </div>
      {process.env.NODE_ENV === "development" && (
        <>
          <div className="flex items-center gap-3 border-black border-b-2 pb-1">
            <FlaskConicalIcon size={24} />
            API規格
          </div>
          <ApiTest />
        </>
      )}
    </div>
  );
}

export default Home;
