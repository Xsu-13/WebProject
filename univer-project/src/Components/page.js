import YearsBlock from './yearsBlock';
import Support from './support';
import Tarifs from './tarifs';
import Team from './team';
import Comments from './comments';
import Workers from './workers';
import FAQ from './faq';
import Form from './form';


function Page() {
  return (
    <div>
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
        <Team />
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
    </div>
   
  );
}

export default Page;

