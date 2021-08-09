import React, { useState, useEffect } from "react";
import "./tailwind.css";
import axios from "axios";
import { covidPH } from "./types";

const App: React.FC = () => {
  const [covidData, setCovidData] = useState<covidPH>();

  const covidStatus = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries/philippines?strict=true");
    setCovidData(res.data);
  };

  useEffect(() => {
    covidStatus();
  }, []);

  const formatNumber = (num?: number) => {
    return <span className='text-blue-400'>{num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>;
  };

  return (
    <div className='h-full flex flex-col items-center font-pops bg-gray-900 text-gray-200'>
      <div>
        <div className='mt-16 text-center'>
          <h1 className='lg:text-5xl text-3xl font-bold'>Covid-19 Tracker PH</h1>
          <h2 className='text-blue-400'>
            <i>data updates every 10 minutes</i>
          </h2>
        </div>

        <div className='mt-12'>
          <div className='info'>
            <p> Cases: {formatNumber(covidData?.cases)}</p>
            <p>Deaths: {formatNumber(covidData?.deaths)}</p>
            <p>Recovered: {formatNumber(covidData?.recovered)}</p>
            <p>Tests: {formatNumber(covidData?.tests)}</p>
          </div>

          <div className='info'>
            <p>Active Cases: {formatNumber(covidData?.active)}</p>
            <p>Critical Cases: {formatNumber(covidData?.critical)}</p>
          </div>

          <div className='info'>
            <p>Cases Today: {formatNumber(covidData?.todayCases)}</p>
            <p>Deaths Today: {formatNumber(covidData?.todayDeaths)}</p>
            <p>Recovered Today: {formatNumber(covidData?.todayRecovered)}</p>
          </div>
        </div>
      </div>

      <footer className='flex flex-col lg:flex-row justify-between items-center w-screen pt-8 lg:px-36 px-8 pb-8 absolute bottom-0 bg-blue-900'>
        <p className='lg:text-base text-sm'>&copy; Josh Daniel Bañares 2021 • All Rights Reserved</p>
        <div className='mt-2 lg:mt-0'>
          <a
            className='lg:mr-12 mr-8 link'
            href='https://github.com/joshxfi/covid-tracker-ph'
            rel='noreferrer'
            target='_blank'
          >
            GitHub
          </a>
          <a className='lg:mr-12 mr-8 link' href='https://disease.sh/' rel='noreferrer' target='_blank'>
            API
          </a>
          <a className='link' href='https://xfi.vercel.app/' rel='noreferrer' target='_blank'>
            Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
