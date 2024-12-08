import React from "react";

const Form10 = () => {
  const creditCard = {
    cardholder: "",
    cardNumber: "",
    expired: {
      month: "",
      year: "",
    },
    securityCode: "",
    card: "front",
    format(cardNumber) {
      if (cardNumber.length > 18) {
        return cardNumber;
      }
      return cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    },
    isValid() {
      return (
        this.cardholder.length >= 5 &&
        this.cardNumber !== "" &&
        this.expired.month !== "" &&
        this.expired.year !== "" &&
        this.securityCode.length === 3
      );
    },
    onSubmit() {
      alert(`You did it ${this.cardholder}.`);
    },
  };

  const [state, setState] = React.useState({ ...creditCard });

  const handleChange = (field, value) => {
    if (field.includes("expired.")) {
      const [_, subField] = field.split(".");
      setState((prevState) => ({
        ...prevState,
        expired: { ...prevState.expired, [subField]: value },
      }));
    } else {
      setState((prevState) => ({ ...prevState, [field]: value }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="credit-card max-w-sm w-full shadow-lg rounded-xl bg-white">
        <header className="flex flex-col justify-center items-center">
          {state.card === "front" && (
            <div className="relative">
              <img
                className="w-full rounded-t-xl"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                alt="front credit card"
              />
              <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-8">
                <p className="number mb-5 sm:text-xl">
                  {state.cardNumber || "0000 0000 0000 0000"}
                </p>
                <div className="flex flex-row justify-between">
                  <p>{state.cardholder || "Card holder"}</p>
                  <div>
                    <span>{state.expired.month}</span>
                    {state.expired.month && "/"}
                    <span>{state.expired.year}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {state.card === "back" && (
            <div className="relative">
              <img
                className="w-full rounded-t-xl"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                alt="back credit card"
              />
              <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
                <div className="border border-white w-16 h-9 flex justify-center items-center">
                  <p>{state.securityCode || "code"}</p>
                </div>
              </div>
            </div>
          )}
          <ul className="flex mt-4">
            <li className="mx-2">
              <img
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Card payment
          </h1>
          <div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxLength="22"
                value={state.cardholder}
                onChange={(e) => handleChange("cardholder", e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                value={state.cardNumber}
                onChange={(e) =>
                  handleChange("cardNumber", state.format(e.target.value))
                }
                maxLength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label htmlFor="" className="text-gray-700">
                  Expired
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={state.expired.month}
                  onChange={(e) => handleChange("expired.month", e.target.value)}
                >
                  <option value="" disabled>
                    MM
                  </option>
                  {[...Array(12).keys()].map((month) => (
                    <option key={month + 1} value={String(month + 1).padStart(2, "0")}>
                      {String(month + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={state.expired.year}
                  onChange={(e) => handleChange("expired.year", e.target.value)}
                >
                  <option value="" disabled>
                    YY
                  </option>
                  {[2024, 2025, 2026].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxLength="3"
                  value={state.securityCode}
                  onFocus={() => handleChange("card", "back")}
                  onBlur={() => handleChange("card", "front")}
                  onChange={(e) => handleChange("securityCode", e.target.value)}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button
            className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            disabled={!state.isValid()}
            onClick={state.onSubmit}
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Form10;
