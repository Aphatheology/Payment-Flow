import CompletedTick from "../assets/completedtick.png";

import "./PurchaseCompleted.css";

const PurchaseCompleted = ({ closeModal }) => {
    const close = () => {
        closeModal();
    };
    
    return (
        <div className="completed">
            <div>
                <img src={CompletedTick} alt="Completed Tick" />
            </div>

            <h2>Purchase Completed</h2>

            <p>
                Please check your email for detail concerning this transaction
            </p>

            <a href='#' onClick={close}>Return Home</a>
        </div>
    );
};

export default PurchaseCompleted;
