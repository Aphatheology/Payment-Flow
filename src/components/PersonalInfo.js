import React from 'react'

function PersonalInfo({nextStep, handleChange, cancel, values}) {

    const next = e => {
        e.preventDefault();
        nextStep()
    }
  return (
    <form className='animate' onSubmit={next}>
        <div>
            <label className='required' htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" value={values.fullName} onChange={handleChange('fullName')} required />
        </div>

        <div>
            <label className='required' htmlFor="email">email</label>
            <span>The purchase reciept would be sent to this address</span>
            <input type="email" id="email" placeholder="Enter your email" value={values.email} onChange={handleChange('email')} required />
        </div>

        <div className='multipleinput'>
            <div className='lga'>
                <label htmlFor="lga">local government area</label>
                <input type="text" id="lga" placeholder="Enter your lga" value={values.lga} onChange={handleChange('lga')} />
            </div>

            <div>
                <label htmlFor="state">state</label>
                <select name="state" id="state" value={values.state} onChange={handleChange('state')}>
                    <option>Your State</option>
                    <option value="lagos">Lagos</option>
                    <option value="ogun">ogun</option>
                    <option value="abuja">abuja</option>
                </select>
                
            </div>
        </div>

        <button className="cta" type='submit'>Next</button>
        <button className="text" onClick={cancel}>Cancel Payment</button>
        
        
    </form>
  )
}

export default PersonalInfo