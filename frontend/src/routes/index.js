import React from "react"
import Navbar from "../components/Navbar"
import LoginForm from "../components/LoginForm"
import ParticipantInformation from "../components/ParticipantInfo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from "../routes/PrivateRoute"
import ServicesQueues from "./ServicesQueues"
import ParticipantsResults from "./ParticipantsResults"

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/login" component={LoginForm} />
      <PrivateRoute exact path="/" component={ServicesQueues} />
      <PrivateRoute
        exact
        path="/participants"
        component={ParticipantsResults}
      />
      <PrivateRoute exact path="/info" component={ParticipantInformation} />
    </Router>
  )
}

export default Routes
