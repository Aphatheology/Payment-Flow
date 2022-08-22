
import './ConfirmPayment.css'

function ConfirmPayment({ nextStep, prevStep, cancel, openModal }) {
    const previous = e => {
        e.preventDefault();
        prevStep()
    }

    const pay = e => {
        e.preventDefault();
        nextStep()
        openModal()
    }
  return (
    <div>
        <div className='checkout animate'>
            <p>
                Item Name
                <span>#Price</span>
            </p>
            <p>
                Data science and usability
                <span>50,000.00</span>
            </p>
            <p>
                Shipping
                <span>0.00</span>
            </p>
            <p>
                Total
                <span>50,000.00</span>
            </p>
            
        </div>

        <button className="cta" onClick={previous}>Previous</button>
        <button className="cta" onClick={pay}>Pay</button>
        <button className="text" onClick={cancel}>Cancel Payment</button>
    </div>
  )
}

export default ConfirmPayment