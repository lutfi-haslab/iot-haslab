import React, {useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import * as mqtt from 'mqtt/dist/mqtt.min';
const cacert = '../../broker.crt'

const Home = (props) => {
  const navigation = useNavigate()
  const [topic, setTopic] = useState("");
  const [data, setData] = useState("");
  const [terhubung, setTerhubung] = useState("");

	useEffect(() => {
		ConnectMqtt();
	}, []);

  function ConnectMqtt() {
		let options = {
			protocol: 'wss',
			ca: cacert.toString()
		};
		const url = 'wss://broker.emqx.io:8084/mqtt';
		const client = mqtt.connect(
			url,
			options
		);

		//setup the callbacks
		client.on('connect', function() {
			setTerhubung('Connected');
			console.log('Connected');
		});
		client.on('error', function(error) {
			console.log(error);
		});
		client.on('message', function(topic, message) {
			//Called each time a message is received
			setData(message.toString());
			console.log('Received message:', topic, message.toString());
		});
		// subscribe to topic 'my/test/topic'
		client.subscribe('iot/haslab/2');
		// publish message 'Hello' to topic 'my/test/topic'
		client.publish('test', 'Hello');
	}

  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-lg font-bold">Halo</h1>
	  <h1>data : {data}</h1>
    </div>
  );
};

export default Home;
