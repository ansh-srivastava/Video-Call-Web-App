import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {

    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 1755964101;
        const serverSecret = "f8633e9adba338bca9db22f0f7b24757";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Ansh Srivastava");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name:'Copy Links',
                    url:`https://localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
        });
    };

  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
