import { useNavigate } from "react-router-dom";
import { useCodeContext } from "../context/CodeProvider";
import { cn } from "../utils/cn";

function ApiTest() {
  const navigate = useNavigate();
  const { code1, code2, setCode1, setCode2 } = useCodeContext();

  return (
    <div className="mt-2 mb-3 list-none space-y-2">
      <form
        className="flex flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/api/policyholders?code=${encodeURI(code1)}`);
        }}
      >
        <label>
          1. GET <code>/api/policyholders?code=</code>
          <input
            required
            className="rounded-sm px-1 border-[2px] w-40 border-primary"
            value={code1}
            onChange={(e) => setCode1(e.target.value)}
          />
        </label>
        <button
          disabled={!code1}
          className={cn(
            "ms-auto outline-none bg-primary text-white px-3 rounded-md",
            {
              "bg-primary-disabled": !code1,
            }
          )}
        >
          前往
        </button>
      </form>
      <form
        className="flex flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/api/policyholders/${encodeURI(code2)}/top`);
        }}
      >
        <label>
          2. GET <code>/api/policyholders/</code>
          <input
            required
            className="rounded-sm px-1 border-[2px] w-40 border-primary"
            value={code2}
            onChange={(e) => setCode2(e.target.value)}
          />
          <code>/top</code>
        </label>
        <button
          disabled={!code2}
          className={cn(
            "ms-auto outline-none bg-primary text-white px-3 rounded-md",
            {
              "bg-primary-disabled": !code2,
            }
          )}
        >
          前往
        </button>
      </form>
    </div>
  );
}

export default ApiTest;
