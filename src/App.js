
import './App.css';
import style from './cv.css';
import './cv.css';
import image1 from './images/200x200.jpg';

function App() {

    const info = {
        firstName : 'Jerry',
        lastName : 'Hall',
        languages : [
        'Svenska',
        'Engelska']
    };

  return (
    <>
    <div id="container">
        <header> 
            <img className="profilePicture" src={image1} alt=''/>
            <h1>{info.firstName} {info.lastName}</h1>
        </header>
        <div className="flex-container">  
            <article className="left">    
                <section>
                    <h3>INTRESSEN</h3>
                    <ul>
                        <li>Natur och friluftsliv.</li>
                        <li>Lära sig nya saker.</li>
                        <li>Programmering.</li>
                    </ul>
                
                </section>
               
                <section>
                    <h3>SPRÅK</h3>
                    <ul>
                        <li>{info.languages[0]}</li>
                        <li>{info.languages[1]}</li>
                    </ul>
                </section>
              
                <section>
                    <h3>KONTAKT</h3>
                    <ul>
                        <li>my_email@example.com</li>
                        <li>+46 99 999 99 99</li>
                    </ul>
                </section>
            </article>
            <article className="right">
               
                <section>
                    <h3>ERFARENHET</h3>
                <ul>
                    <li>
                        <h4>Webbutvecklare</h4>
                        <div className="flex-container">
                            <div>Webbkollektivet</div>
                            <div>2010-2012</div>
                        </div>
                        Bygga hemsidor. PHP, MySQL och Linux.
                    </li>
                    <li>
                        <h4>Programmerare</h4>
                        <div className="flex-container">
                            <div>Syncronet</div>
                            <div>2008-2009</div>
                        </div>
                        ASP.NET och MSSQL.
                    </li>
                </ul>
                </section>
                <section>
                    <h3>UTBILDNING</h3>
                    <ul>
                        <li>
                            <div className="flex-container">
                                <div>Kalmar högskola</div>
                                <div>2005-2007</div>       
                            </div>      
                            Webbprogrammering    
                        </li>  
                    </ul>
                    <h3>Övrigt</h3>
                    <ul>
                        <li>
                            <div className="flex-container">
                                <div>Postanställd.</div>
                                <div>2002-2005</div>       
                            </div> 
                          
                        </li>
                        <li>
                            <div className="flex-container">
                                <div>Trädgårdsarbetare.</div>
                                <div>2016-2023</div>
                            </div>
                        </li>
                    </ul>
                </section>      
            </article>
        </div> 
    </div>
    </>
  );
}

export default App;
