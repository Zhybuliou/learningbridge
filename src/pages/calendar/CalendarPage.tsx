/* eslint-disable @typescript-eslint/no-explicit-any */
import { gapi } from 'gapi-script';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/page-title/PageTitle';
import './calendar.css';
import CalendarDate from './CalendarDate';
import FadeIn from '../../components/animate/FadeIn';

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
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/translate/v2/rest',
          ],
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response: any) => {
            const res = response.result.items;
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
      <FadeIn numberDelay={300}>
        <div className="calendar-header">
          <p>2024</p>
          <h3>Academic Year</h3>
        </div>
      </FadeIn>
      <div className="calendar-cards">
        {events.length ? (
          events
            .sort((a: any, b: any) => {
              const dateA = new Date(a.start.dateTime) as any;
              const dateB = new Date(b.start.dateTime) as any;
              return dateA - dateB;
            })
            .map((el: any) => (
              <div key={el.id} className="calendar-card">
                <FadeIn numberDelay={300}>
                  {el.attachments ? (
                    <div
                      className="calendar-card-image"
                      style={{
                        backgroundImage: `url(${el.attachments[0].fileUrl.replace(
                          'open?',
                          'thumbnail?'
                        )})`,
                      }}
                    />
                  ) : (
                    <div />
                  )}
                  <CalendarDate inputDateString={`${el.start.dateTime}`} />
                  <h2>{el.summary}</h2>
                  <div className="calendar-card-description">
                    {parse(`${el.description || 'Comming soon ...'}`)}
                  </div>
                </FadeIn>
              </div>
            ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}
