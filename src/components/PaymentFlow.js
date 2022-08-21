import { useState } from 'react'

import PersonalInfo from './PersonalInfo';
import BillingInfo from './BillingInfo';
import ConfirmPayment from './ConfirmPayment';
import PurchaseCompleted from './PurchaseCompleted';

import './PaymentFlow.css';
import './Form.css'


function PaymentFlow() {
    let [ paymentInfo, setPaymentInfo ] = useState({
        step: 1,
        fullName: '',
        email: '',
        address1: '',
        address2: '',
        lga: '',
        state: '',
        nameOnCard: '',
        cardType: '',
        cardDetails: '',
        expirtyDate: '',
        cvv: ''
    })


    

    const prevStep = () => {
        const { step } = paymentInfo;
        setPaymentInfo(prevInfo => {
            return {
                ...prevInfo,
                step: step - 1
            }
        })
    }

    const nextStep = () => {
        const { step } = paymentInfo;
        setPaymentInfo(prevInfo => {
            return {
                ...prevInfo,
                step: step + 1
            }
        })
    }

    const handleChange = input => e => {
        setPaymentInfo(prevInfo => ({
            ...prevInfo,
            [input]: e.target.value
        })
        )
    }

    const { fullName, email, address1, address2, lga, state, nameOnCard, cardType, cardDetails, expirtyDate, cvv } = paymentInfo;

    const values = { fullName, email, address1, address2, lga, state, nameOnCard, cardType, cardDetails, expirtyDate, cvv}

function manageStep() {
    
    switch (paymentInfo.step) {
        case 1: 
          return (
            <PersonalInfo 
                nextStep={nextStep}   
                handleChange={handleChange}  
                values={values}     
            />
          )
        case 2: 
          return (
            <BillingInfo 
                nextStep={nextStep}   
                prevStep={prevStep}   
                handleChange={handleChange}  
                values={values}   
            />
          )
        case 3: 
          return (
            <ConfirmPayment 
                nextStep={nextStep} 
                prevStep={prevStep}
                openModal={openModal}
            />
          )
          case 4: 
          return (
            <PurchaseCompleted 
                
                closeModal={closeModal}
            />
          )
        default: 
           // do nothing
      }
}

const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setPaymentInfo(() => ({
        step: 1,
        fullName: '',
        email: '',
        address1: '',
        address2: '',
        lga: '',
        state: '',
        nameOnCard: '',
        cardType: '',
        cardDetails: '',
        expirtyDate: '',
        cvv: ''
    }))
  }
  return (
    <div className='payment-flow'>
        {
            !isOpen && 
            <>
                <h2>Complete your Purchase</h2>

                <div className='stepname'>
                    
                        <span className={paymentInfo.step === 1 ? 'current-step' : ''} >Personal Info</span>
                        <span className={paymentInfo.step === 2 ? 'current-step' : ''} >Billing Info</span>
                        <span className={paymentInfo.step === 3 ? 'current-step' : ''} >Confirm Payment</span>
                    
                </div>
            </>
            
        }
        
        {
             manageStep()   
        }

    </div>
  )
}

export default PaymentFlow