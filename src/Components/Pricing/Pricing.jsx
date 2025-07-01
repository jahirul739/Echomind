import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$2000/month',
      description: 'For small projects or testing phase',
      features: [
        '40 design hours',
        'Full-stack team',
        'All design tasks',
        'Daily Slack + Loom',
        '1 active task per person',
        'Hours rollover',
        '2 meetings/month',
        'Same-day response',
        'Unlimited requests',
        'Weekly reports',
      ],
      button: 'Book Call',
      badge: '3 Slots Left',
      highlight: false,
    },
    {
      title: 'Accelerate',
      price: '$3000/month',
      description: 'For growing teams',
      features: [
        '80 design hours',
        'Full-stack team',
        'All design tasks',
        'Daily Slack + Loom',
        '1 active task per person',
        'Hours rollover',
        'Weekly meetings',
        'Same-day response',
        'Unlimited requests',
        'Weekly reports',
      ],
      button: 'Book Call',
      badge: 'Popular • 2 Left',
      highlight: true,
    },
    {
      title: 'Scale',
      price: '$7000/month',
      description: 'For high-volume projects',
      features: [
        '160 design hours',
        'Full-stack team',
        'All design tasks',
        'Daily Slack + Loom',
        '1 active task per person',
        'Hours rollover',
        '8 meetings/month',
        'Same-day response',
        'Unlimited requests',
        'Weekly reports',
      ],
      button: 'Book Call',
      badge: 'Limited',
      highlight: false,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For large orgs with custom needs',
      features: [
        'Custom hours',
        'Full-stack team',
        'All design tasks',
        'Daily Slack + Loom',
        '1 active task per person',
        'Hours rollover',
        'Flexible meetings',
        'Same-day response',
        'Unlimited requests',
        'Weekly reports',
      ],
      button: 'Contact Us',
      badge: 'Limited',
      highlight: false,
    },
  ];

  return (
    <section className='pricing-section' id='pricing'>
      <p className='toggle-note'>No Extra Fees • Cancel Anytime</p>

      <div className='pricing-cards'>
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            key={index}
          >
            {plan.badge && <span className='plan-badge'>{plan.badge}</span>}
            <h3>{plan.title}</h3>
            <p className='price'>{plan.price}</p>
            <p className='description'>{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={`btn ${plan.highlight ? 'dark-btn' : ''}`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
