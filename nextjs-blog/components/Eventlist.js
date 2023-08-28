'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Eventlist() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://myapp-shtaldaidq-uc.a.run.app/")
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
                    <li key={event.id}>{event.event_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Eventlist;