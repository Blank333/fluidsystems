import "./Content.css";

function Content() {
  return (
    <main>
      <div className='award'>
        <img src='/src/assets/1.png' alt='award' className='awardImg' />
        <div className='awardDesc'>
          <p>
            <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
          </p>
          <ul className='awardText'>
            <li>
              C.R.I.&apos;s energy efficient products are well recognized by various Government Institutions, as
              trustworthy products for various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services
              Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT
              enabled control panel.
            </li>
          </ul>
          <img src='/src/assets/2.png' alt='Receiving award' className='awardImgRec' />
          <p className='awardText'>
            Government of India has awarded the <strong>&quot;National Energy Conservation Award 2018&quot;</strong>.
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
            Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className='achieve'>
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
          9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <img src='/src/assets/3.png' alt='Fluid components' className='achieveImg' />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
    </main>
  );
}

export default Content;
