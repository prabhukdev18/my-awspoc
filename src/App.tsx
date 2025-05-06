
import { useAuthenticator } from '@aws-amplify/ui-react';


import './App.css'
import SignUp from './components/SIgnup';

function App() {

  const { signOut } = useAuthenticator();
  return (
    <>
      <div>
        <SignUp />
      </div>


      <div className="card">

        <div>
          <button onClick={signOut}>Sign out</button>
        </div>

      </div>

    </>
  )
}

export default App