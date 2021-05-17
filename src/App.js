import "./App.css";
import {
  HashRouter as Router,
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
  console.log('Home')
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
        Select Date
        </label>
        <input
          type="date"
          name="todate"
          required={true}
          onChange={handleDateChange}
        />

      <label>
        Select Time
        </label>
        <input
          type="time"
          name="totime"
          required={true}
          onChange={handleTimeChange}
        />

      <button type="submit" >Start Countdown</button>
    </form>
  );
}

function CounterPage() { console.log('CounterPage')
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
    return <span className="centered">Countdown Has Expired!</span>;
  }

  return <Counter count={betweenState} />;
}

function Counter(props) {console.log('Counter')
  const days = Math.floor(props.count / (1000 * 60 * 60 * 24));
  const hours = Math.floor(props.count / (1000 * 60 * 60)) - days * 24;
  const mins = Math.floor(props.count / (1000 * 60)) - (hours + days * 24) * 60;
  const secs = Math.floor(props.count / 1000) - (mins + (hours + days * 24) * 60) * 60;
  const mils = Math.floor(props.count) - (secs + (mins + (hours + days * 24) * 60) * 60) * 1000;
  return (
    <div className="counter">
      <span>{days}</span><span>Days</span>
      <span>{hours}</span><span>Hours</span>
      <span>{mins}</span><span>Minutes</span>
      <span>{secs}</span><span>Seconds</span>
      <span>{mils}</span><span>Miliseconds</span>
    </div>
  );
}

export default App;
