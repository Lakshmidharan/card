import logo from './logo.svg';
import './App.css';
import PricingPolicy from './Card';

function App() {
  let Pricingproperty = [
    {
      plan: "BASIC",
      best : false,
      team: "For Team of 3-5 Members",
      amount: 28,
      period: "/mo",
      save: " Save",
      dollar: "$20",
      time: " a Year",
      features: [
        {
          name: 'Perfect of Small Team',
        },
        {
          name: 'Unlimited Invoices',
        },
        {
          name: 'Project Management',
        },
      {
        namee :'-',
      },
      {
        namee : '-',
      },
      {
        namee : '-',
      },
      {
        namee : '-',
      },
      {
        namee : '-',
      },

      ]
    },
    {
      plan: "INTERMEDIATE",
      best : true,
      team: "For Team of 5-10 Members",
      amount: 39,
      period: "/mo",
      save: " Save",
      dollar: "$30",
      time: " a Year",
      features: [
        {
          enable: true,
        },
        {
          name: 'Perfect of Small Team',

        },
        {
          name: 'Unlimited Invoices',
        },
        {
          name: 'Project Management',
        },
        {
          name: 'Team Management',
        },
        {
          namee : '-',
        },
        {
          namee : '-',
        },

      ]
    },
    {
      plan: "HIGH CLASS",
      best : false,
      team: "For Team of 10-25 Members",
      amount: 58,
      period: "/mo",
      save: " Save",
      dollar: "$50",
      time: " a Year",
    
      features: [
        {
          enable: false,
        },
        {
          name: 'Perfect of Small Team',
        },
        {
          name: 'Unlimited Invoices',
        },
        {
          name: 'Project Management',
        },
        {
          name: 'Team Management',
        },
        {
          name: 'Time Tracking',
        },
      ]
    },
    {
      plan: "SUPREME",
      best : false,
      team: "For Team of 25-100 Members",
      amount: 99,
      period: "/mo",
      save: " Save",
      dollar: "$80",
      time: " a Year",
      features: [
        {
          enable: false,
        },
        {
          name: 'Perfect of Small Team',
        },
        {
          name: 'Unlimited Invoices',
        },
        {
          name: 'Project Management',
        },
        {
          name: 'Team Management',
        },
        {
          name: 'Time Tracking',
        },
      ]
    }
  ]
  return (
    <div class="pricing1 py-5 bg-light">
      <div className="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
          <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
         </div>
          </div>
        </div>
        <div class="row mt-5 col-md-10 offset-md-1">
        
        


            {
              Pricingproperty.map(obj => <PricingPolicy data={obj}></PricingPolicy>)
            }
            
          
        </div>
      </div>
  
  );
}

export default App;