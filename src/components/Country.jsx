const Country = ({ country }) => {
  const languages = Object.values(country.languages);

  return (
    <div className="country-card">
      <h1>{country.name.common}</h1>
      <div>Capital {country.capital[0]}</div>
      <div>Area {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {languages.map(lang => {
          return <li key={lang}>{lang}</li>;
        })}
      </ul>
      <img
        src={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        className="country-flag"
      />
    </div>
  );
};

export default Country;
