function Faq() {

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Add products to your cart and proceed to checkout."
    },
    {
      question: "What payment methods are available?",
      answer:
        "Cash on Delivery, UPI, Debit Card, and Credit Card."
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, orders can be cancelled before delivery."
    },
    {
      question: "How long does delivery take?",
      answer:
        "Usually 3-7 business days depending on location."
    },
    {
      question: "Is return available?",
      answer:
        "Yes, we provide a 7-day return policy."
    }
  ];

  return (

    <div className="faq-page">

      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="faq-card"
          >

            <h3>{faq.question}</h3>

            <p>{faq.answer}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Faq;