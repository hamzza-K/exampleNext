'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Eventlist() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("https://myapp-shtaldaidq-uc.a.run.app/fetch-records/", {
                    table_name: "events",
                    columns: ["event_name", "event_location", "event_date"],
                    filter: {},
                    sort: {}
                })
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetch data", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Events List</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.event_name} {event.event_location} {event.event_date}</li>
                ))}
            </ul>
        </div>
    );
}

export default Eventlist;