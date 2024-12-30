import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

export function ApiResult() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `/api/policyholders?code=${encodeURI(searchParams.get("code") || "")}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [searchParams.get("code")]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export function ApiParentResult() {
  const { code } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/policyholders/${code}/top`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [code]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
