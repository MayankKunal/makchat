import { ChatEngine } from "react-chat-engine";
import "./App.css"
import LoginForm from "./components/LoginForm"
import ChatFeed from "./components/ChatFeed";

const App =()=>
{  if(!localStorage.getItem('username'))
  
 return(
      <LoginForm/>
  )

    return(
        <ChatEngine

            height="100vh"
            projectID="8536992d-7cb0-47c1-b455-ba5d3dca9589"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;