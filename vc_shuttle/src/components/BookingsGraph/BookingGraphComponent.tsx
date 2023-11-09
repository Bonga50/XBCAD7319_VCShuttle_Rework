import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { LineChart, Line, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import { useResizeDetector } from 'react-resize-detector';


const BookingGraphComponent: React.FC = () => {

    //making graph responsive 
    const { width, height, ref } = useResizeDetector();

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 200, pv: 1400, amt: 3500 },
        { name: 'Page C', uv: 300, pv: 1200, amt: 2000 },
        { name: 'Page D', uv: 500, pv: 2800, amt: 3000 },
        { name: 'Page E', uv: 600, pv: 2000, amt: 1500 },
      ];
    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
            {width && height && (
                <LineChart width={width} height={height} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            )}
        </div>
    );
};

export default BookingGraphComponent;