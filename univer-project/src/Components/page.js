import React from 'react';
import YearsBlock from './yearsBlock';
import Header from './header';
import Footer from './footer';
import Cases from './cases';
import Support from './support';
import Tarifs from './tarifs';
import Our_prof from './our_prof';
import Team from './team';
import Comments from './comments';
import Workers from './workers';
import FAQ from './faq';
import Form from './form';

function Page() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <YearsBlock />
            </div>
            <div>
                <Support />
            </div>
            <div>
                <Tarifs />
            </div>
            <div>
                <Our_prof />
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Cases />
            </div>
            <div>
                <Comments />
            </div>
            <div>
                <Workers />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
}

export default Page;

