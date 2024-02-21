/* eslint-disable @typescript-eslint/no-explicit-any */
import { gapi } from 'gapi-script';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/page-title/PageTitle';
import './calendar.css';

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const myCalendarID =
    '6a87ea799a3476777b27971fa729d8ce37af3d87472705069c7f19d2c98de19c@group.calendar.google.com';
  const myApiKey = 'AIzaSyAc4g0eWcKghFs1Sq5UTOGdDeWhRNqUqhI';

  const getEvents = (calendarID: string, apiKey: string) => {
    function initiate() {
      gapi.client
        .init({
          apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response: any) => {
            const res = response.result.items;
            console.log(res);
            setEvents(res);
          },
          function (err: any) {
            return [false, err];
          }
        );
    }
    gapi.load('client', initiate);
  };
  useEffect(() => {
    getEvents(myCalendarID, myApiKey);
    console.log(events);
  }, []);
  return (
    <>
      <PageTitle titleName="Calendar" />
      <div className="calendar-cards">
        {events.map((el: any) => (
          <div key={el.id} className="calendar-card">
            <h2>{el.summary}</h2>
            <div>{parse(`${el.description || 'Comming soon ...'}`)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// Project name
// My Maps Project
// Project number
// 906173421905
// Project ID
// subtle-tooling-401016
// API key AIzaSyAF9RB0SutUpFka9NhhXz5laUZ_17OXC8c
