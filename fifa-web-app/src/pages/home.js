import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client';
import Peer from 'simple-peer';

const socket = io('http://localhost:5001');
const VoiceCall = () => {
    const [stream, setStream] = useState(null);
    const [callAccepted, setCallAccepted] = useState(false);
    const [peer, setPeer] = useState(null);
    const userAudio = useRef();
    const partnerAudio = useRef();
  
    useEffect(() => {
      // Request access to audio
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        setStream(stream);
        userAudio.current.srcObject = stream;
      });
  
      // Handle offer received
      socket.on('offer', (data) => {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream,
        });
  
        peer.on('signal', (signalData) => {
          socket.emit('answer', signalData);
        });
  
        peer.on('stream', (partnerStream) => {
          partnerAudio.current.srcObject = partnerStream;
        });
  
        peer.signal(data);
        setPeer(peer);
      });
  
      // Handle answer received
      socket.on('answer', (data) => {
        peer?.signal(data);
      });
  
      // Handle new ICE candidate
      socket.on('candidate', (data) => {
        peer?.signal(data);
      });
    }, [stream, peer]);
  
    const callUser = () => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
      });
  
      peer.on('signal', (signalData) => {
        socket.emit('offer', signalData);
      });
  
      peer.on('stream', (partnerStream) => {
        partnerAudio.current.srcObject = partnerStream;
      });
  
      setPeer(peer);
    };
  
    return (
      <div>
        <h1>Voice Call</h1>
        <button onClick={callUser}>Call User</button>
        <audio ref={userAudio} autoPlay />
        <audio ref={partnerAudio} autoPlay />
      </div>
    );
  };
  
export default VoiceCall;