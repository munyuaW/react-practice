function App() {
  function signUp(formData) {
    // const email = formData.get("email");
    // const pwd = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    // const favColor = formData.get("favColor");

    // get all the form fields data
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const data = {
      ...Object.fromEntries(formData),
      dietaryRestrictions,
    };

    console.log(data);
  }
  return (
    <section>
      <h1>Sign Up Form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          defaultValue="munyua@email.com"
        />

        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="xxxxxxx"
          defaultValue="pwd12345"
        />

        <br />
        <label htmlFor="dexcription">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue="This expects a longer text"></textarea>
        <br />
        <fieldset>
          <legend>Employment status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              value="Full-time"
              defaultChecked={true}
            />
            Full-time
          </label>
        </fieldset>
        <br />
        <fieldset>
          <legend>Dietary restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="gluten-free"
              defaultChecked={true}
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color</label>
        <select name="favColor" id="favColor">
          <option value="">-- Select color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yelow</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

export default App;
