import React  from "react";
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';


function MainLayouts ({children}:{children:React.ReactNode}) {

    return (
        <div className="flex flex-col h-screen justify-between bg-hero-pattern">
                  <Header />
          
                  {children}
               
                  <Footer />
            
        </div>
    )
}

export default MainLayouts;