import React, { useState } from 'react';
import data from './data';
import List from './List';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap');
</style>
</style>

function App() {
  const [people, setPeople] = useState(data);
  return (
  <main>
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people = {people}/>
      <button onClick={() => setPeople([])}>clear all</button>

    </section>
  </main>);
}

export default App;
