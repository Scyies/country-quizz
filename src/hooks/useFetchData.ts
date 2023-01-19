import { useEffect, useState } from 'react';

export interface IData {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
}

export interface IApiResponse {
  status: number;
  statusText: string;
  data: IData[];
  error: any;
  loading: boolean;
}

export function useFetchData(url: string): IApiResponse {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  async function getAPIData() {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
}
