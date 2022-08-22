import CreditCardInputMask from "credit-card-input-mask";

function BillingInfo({nextStep, prevStep, cancel, handleChange, values}) {
    const next = e => {
        e.preventDefault();
        nextStep()
    }

    const previous = e => {
        e.preventDefault();
        prevStep()
    }
  return (
    <form className='animate' onSubmit={next}>
        <div>
            <label className='required' htmlFor="nameoncard">Nameoncard</label>
            <input type="text" id="nameoncard" placeholder="John Doe" value={values.nameOnCard} onChange={handleChange('nameOnCard')} required />
        </div>

        <div>
            <label className='required' htmlFor="cardtype">Card Type</label>
            <select name="cardType" id="cardtype" value={values.cardType} onChange={handleChange('cardType')} required >
                    <option>Select Card Type</option>
                    <option value="visa">visa</option>
                    <option value="mastercard">mastercard</option>
            </select>
        </div>

        <div className='multipleinput'>
            <div className='cdetails'>
                <label className='required' htmlFor="carddetails">Card Details</label>
                <input type="number" id="carddetails" placeholder="4444" value={values.cardDetails} onChange={handleChange('cardDetails')} required />
            </div>

            <div className='edate'>
                <label className='required' htmlFor="expirydate">Expiry Date</label>
                <input type="number" id="expirydate" placeholder="44 / 44" value={values.expiryDate} onChange={handleChange('expiryDate')} required />
            </div>

            <div className='cvv'>
                <label className='required' htmlFor="cvv">CVV</label>
                <input type="number" id="cvv" placeholder="444" value={values.cvv} onChange={handleChange('cvv')} required />
            </div>
        </div>

        <button className="cta" onClick={previous}>Previous</button>
        <button className="cta" type='submit'>Next</button>
        <button className="text" onClick={cancel}>Cancel Payment</button>
    </form>
  )
}

export default BillingInfo