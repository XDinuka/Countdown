import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:to" children={<CounterPage />} />
      </Switch>
    </Router>
  );
}

function Home() {
  const history = useHistory();
  const [dateState, setDateState] = useState(null);
  const [timeState, setTimeState] = useState(null);

  const handleDateChange = (event) => {
    setDateState(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date(`${dateState},${timeState}`);
    const time = date.getTime();
    history.push(`/${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="todate"
          required={true}
          onChange={handleDateChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          name="totime"
          required={true}
          onChange={handleTimeChange}
        />
      </label>
      <br />
      <input type="submit" value="Start Countdown" />
    </form>
  );
}

function CounterPage() {
  const { to } = useParams();
  const dateto = new Date(Number.parseInt(to));

  const [betweenState, setBetweenState] = useState(0);

  useEffect(() => {
    if (dateto.getTime() > new Date().getTime()) {
      setInterval(() => {
        const now = new Date();
        setBetweenState(dateto.getTime() - now.getTime());
      }, 1);
    }
  });

  if (betweenState < 1) {
    return <span>Countdown expired</span>;
  }

  return <Counter count={betweenState} />;
}

function Counter(props) {
  const days = Math.floor(props.count / (1000 * 60 * 60 * 24));
  const hours = Math.floor(props.count / (1000 * 60 * 60)) - days * 24;
  const mins = Math.floor(props.count / (1000 * 60)) - (hours + days * 24) * 60;
  const secs = Math.floor(props.count / 1000) - (mins + (hours + days * 24) * 60) * 60;
  const mils = Math.floor(props.count) - (secs + (mins + (hours + days * 24) * 60) * 60) * 1000;
  return (
    <React.Fragment>
      <span>days {days}</span>
      <br />
      <span>hours {hours}</span>
      <br />
      <span>mins {mins}</span>
      <br />
      <span>secs {secs}</span>
      <br />
      <span>mils {mils}</span>
    </React.Fragment>
  );
}

export default App;
