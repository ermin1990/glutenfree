
const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
      <h2>O meni</h2>
        <div className="col-md-6">
          <img
            src="https://hubih.sfera.ba/wp-content/uploads/2022/11/1667389299719.jpg"
            alt="Alma Bubić"
            className="img-fluid rounded mb-2"
          />
        </div>
        <div className="col-md-6">
           <p>
            Zdravo, ja sam Alma, a na Instagramu me možete pronaći kao <a className="nav-link" href="https://instagram.com/gospodjicasarlota" target="_blank" rel="noreferrer">@gospodjicasarlota.</a>
            <br />Kako je sve počelo?
            Prije šest godina  dobila sam dijagnozu intolerancije na gluten (necelijakijska preosjetljivost na gluten (non-celiac gluten sensitivity - NCGS)),to je značilo potpuna promjena načina ishrane. Kada imate celijakiju ili  inolerancije na gluten, gluten izaziva ozbiljne posljedice po vaše zdravlje te  ishrana bez glutena  postaje vaš lijek i  traje doživotno.
          </p>
          <p>
          U procesu istraživanja  namirnice koje su dozvoljene u bezglutenskoj ishrani kao i gdje sve se gluten krije, primjetila sam da je ograničen izbor bezglutenskih slastica.
          Pravljene kolača je nešto što volim, što me opušta i nisam dopustila da dijagnoza NCGS utiče na tu ljubav, mogu reći da mi je to bila dodatna motivacija.
          </p>
          <p>
          Počeci su bili skromni, neki jednostavni kolači i keksi. Sada znam da je skoro sve moguće napraviti u bezglutenskoj varijanti, pa sada sama stvaram svoje recept,  ali i istražujem i usavršavam se.
Početkom 2022. godine, odlučila sam  da napravim profil na Instagramu, zamislila sam da to bude gluten free kutak gdje ću dijeliti recepte za deserte koje rado spremam, i tako podijelim dio svog iskustva i znanja koje sam stekla. Ubrzo  je profil dobio jednu novu dimenziju i prerastao u mali biznis koji ima u ponudi isključivo bezglutenske deserte.
          </p>

          <p>Nadam se da ćete uživati u mom bezglutenskom svijetu,  i hvala što  birate moje torte za vaše najslađe trenutke. <br />
Alma.</p>
          {/* Dodajte ovde preostali tekst o Almi */}
        </div>
      </div>
    </div>
  );
};

export default About;
