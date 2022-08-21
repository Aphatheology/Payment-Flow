
import './ConfirmPayment.css'

function ConfirmPayment({ nextStep, prevStep, openModal }) {
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
        <div className='checkout'>
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

        <button onClick={previous}>Previous</button>
        <button onClick={pay}>Pay</button>
    </div>
  )
}

export default ConfirmPayment